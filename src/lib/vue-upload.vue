<template>
	<div class="upload">
		<ul class="ulList">
			<li class="imgList" :style="previewCss" v-for="item in imgArr">
				<img :src="item.url">
			</li>
		</ul>
		<input class="seletInput" @change="handleFiles" ref="file" type="file" accept="image/gif, image/jpeg, image/png" multiple="multiple">
		<div @click="select" class="static" :style="buttonCss">{{word || '选择图片'}}</div>
	</div>
</template>
<script type="text/javascript">
	export default {
		name: 'vue-upload-images',
		data() {
			return {
				imgArr: []
			}
		},
		props: ['getFiles', 'buttonCss', 'previewCss', 'word'],
		computed: {
			formData: function () {
				return new FormData()
			}
		},
		methods: {
			select() {
				if(this.$refs.file) {
					this.$refs.file.click()
				}
			},
			handleFiles() {
				let files = this.$refs.file.files
				for(let i = 0; i < files.length; i++) {
					let file = files[i]
					let imageType = /^image\//
					if (!imageType.test(file.type)) {
						continue
					}
					let reader = new FileReader()
					let _this = this
					let img = document.createElement('img')
					let parrent = document.body || document.documentElement
					parrent.appendChild(img)
					reader.onload = function (e) {
						img.src = e.target.result
						_this.imgArr.push({url: e.target.result})
						if (img.complete) {
							let data = _this.compress(img, file.type)
							_this.upload(data, file.type)
						} else {
							img.onload = function () {
								let data = _this.compress(this)
								_this.upload(data, file.type)
							}
						}
						parrent.removeChild(img)
						img = null
					}
					reader.readAsDataURL(file)
				}
			},
			compress(img) {
				let canvas = document.createElement('canvas'),
					ctx = canvas.getContext('2d'),
					tCanvas = document.createElement('canvas'),
					tctx = tCanvas.getContext('2d'),
					width = img.width,
					height = img.height,
					ratio = width * height / 4000000,
					count

				if(ratio > 1) {
					ratio = Math.sqrt(ratio)
					width = width / ratio
					height = height / ratio
				} else {
					ratio = 1
				}

				canvas.width = width
				canvas.height = height
				ctx.fillStyle = "#fff"
				ctx.fillRect(0, 0, canvas.width, canvas.height)

				if((count = width * height / 1000000) > 1 ) {
					count = ~~(Math.sqrt(count) + 1)
					let nw = width / count
					let nh = height / count
					tCanvas.width = nw
					tCanvas.height = nh
					for(let i = 0; i < count; i++) {
						for(let j = 0; j < count; j++) {
							tctx.drawImage(img, i * nw * ratio, j * nh * ratio, nw * ratio, nh * ratio, 0, 0, nw, nh)
							ctx.drawImage(tCanvas, nw * 1, nh * j, nw, nh)
						}
					}
				} else {
					ctx.drawImage(img, 0, 0, width, height)
				}

				let data = canvas.toDataURL('image/jpeg', 0.5)		
				canvas.width = canvas.height = 	tCanvas.width = tCanvas.height = 0
				return data
			},
			upload(data, type) {
				let text = window.atob(data.split(',')[1]),
					buffer = new Uint8Array(text.length)

				for(let i = 0; i < text.length; i++) {
					buffer[i] = text.charCodeAt(i)
				}
				let blob = this.getBlob([buffer], type)
				this.formData.append('images', blob)
				this.getFiles(this.formData)
			},
			getBlob(buffer, type) {
				try {
					return new Blob(buffer, {type: type})
				} catch (err) {
					let b = new (blobBuilder || window.WebKitBlobBuilder || window.MSBlobBuilder)
					buffer.map((item) => {
						b.append(item)
					})
					return b
				}
			}
		}
	}
</script>
<style>
	*{
		padding: 0;
		margin: 0;
	}
	img{
		width: 100%;
		height: 100%;
		display: block;
	}
	.ulList{
		overflow: hidden;
	}
	.imgList{
		width: 300px;
		height: auto;
		list-style: none;
		float: left;
	}
	.seletInput{
		display: none;
	}
	.static{
		width: 100px;
		height: 30px;
		font-size: 18px;
		color: #333;
		text-align: center;
		line-height: 30px;
		border: solid 1px #666;
		border-radius: 3px;
		cursor: pointer;
	}
</style>