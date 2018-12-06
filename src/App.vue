<template>
  <div id="app">
    <vueUpload :getFiles="getFiles" :word="word" :buttonCss="buttonCss" />
  	<!-- <vue-upload-images /> -->
  </div>
</template>

<script>
  import vueUpload from './lib/vue-upload.vue'
  export default {
    name: 'app',
    data() {
    	return {
    		word: '上传图片',
    		buttonCss: {
    			color: 'red'
    		}
    	}
    },
    components: { vueUpload },
    methods: {
    	getFiles(data) {
    		for (var key of data.keys()) {
			   console.log(key); 
			}
    	}
    }
  }
</script>

<style>
</style>
