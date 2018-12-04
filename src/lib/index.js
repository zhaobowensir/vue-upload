import vueUpload from './vue-upload.vue'

const upload = {
	install (Vue, options) {
		Vue.component(vueUpload.name, vueUpload)
	}
}

if(typeof window !== 'undefined' && window.Vue) {
	window.upload = upload
	Vue.use(upload)
}

export default upload