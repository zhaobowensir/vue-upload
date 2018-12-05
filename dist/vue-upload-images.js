!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define("vue-upload-images",[],t):"object"==typeof exports?exports["vue-upload-images"]=t():e["vue-upload-images"]=t()}("undefined"!=typeof self?self:this,function(){return function(e){function t(r){if(n[r])return n[r].exports;var i=n[r]={i:r,l:!1,exports:{}};return e[r].call(i.exports,i,i.exports,t),i.l=!0,i.exports}var n={};return t.m=e,t.c=n,t.d=function(e,n,r){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:r})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="/dist/",t(t.s=1)}([function(e,t,n){"use strict";t.a={name:"vue-upload-images",data:function(){return{imgArr:[]}},props:["getFiles","buttonCss","previewCss","word"],computed:{formData:function(){return new FormData}},methods:{select:function(){this.$refs.file&&this.$refs.file.click()},handleFiles:function(){for(var e=this,t=this.$refs.file.files,n=0;n<t.length;n++){(function(n){var r=t[n];if(!/^image\//.test(r.type))return"continue";var i=new FileReader,o=e,s=document.createElement("img"),a=document.body||document.documentElement;a.appendChild(s),i.onload=function(e){if(s.src=e.target.result,o.imgArr.push({url:e.target.result}),s.complete){var t=o.compress(s,r.type);o.upload(t,r.type)}else s.onload=function(){var e=o.compress(this);o.upload(e,r.type)};a.removeChild(s),s=null},i.readAsDataURL(r)})(n)}},compress:function(e){var t=document.createElement("canvas"),n=t.getContext("2d"),r=document.createElement("canvas"),i=r.getContext("2d"),o=e.width,s=e.height,a=o*s/4e6,u=void 0;if(a>1?(a=Math.sqrt(a),o/=a,s/=a):a=1,t.width=o,t.height=s,n.fillStyle="#fff",n.fillRect(0,0,t.width,t.height),(u=o*s/1e6)>1){u=~~(Math.sqrt(u)+1);var l=o/u,c=s/u;r.width=l,r.height=c;for(var d=0;d<u;d++)for(var f=0;f<u;f++)i.drawImage(e,d*l*a,f*c*a,l*a,c*a,0,0,l,c),n.drawImage(r,1*l,c*f,l,c)}else n.drawImage(e,0,0,o,s);var p=t.toDataURL("image/jpeg",.5);return t.width=t.height=r.width=r.height=0,p},upload:function(e,t){for(var n=window.atob(e.split(",")[1]),r=new Uint8Array(n.length),i=0;i<n.length;i++)r[i]=n.charCodeAt(i);var o=this.getBlob([r],t);this.formData.append("images",o),this.getFiles(this.formData)},getBlob:function(e,t){try{return new Blob(e,{type:t})}catch(t){var n=new(blobBuilder||window.WebKitBlobBuilder||window.MSBlobBuilder);return e.map(function(e){n.append(e)}),n}}}}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(2),i={install:function(e,t){e.component(r.a.name,r.a)}};"undefined"!=typeof window&&window.Vue&&(window.upload=i,Vue.use(i)),t.default=i},function(e,t,n){"use strict";function r(e){n(3)}var i=n(0),o=n(9),s=n(8),a=r,u=s(i.a,o.a,!1,a,null,null);t.a=u.exports},function(e,t,n){var r=n(4);"string"==typeof r&&(r=[[e.i,r,""]]),r.locals&&(e.exports=r.locals);n(6)("1c9e7048",r,!0,{})},function(e,t,n){t=e.exports=n(5)(!1),t.push([e.i,"*{padding:0;margin:0}img{width:100%;height:100%;display:block}.ulList{overflow:hidden}.imgList{width:300px;height:auto;list-style:none;float:left}.seletInput{display:none}.static{width:100px;height:30px;font-size:18px;color:#333;text-align:center;line-height:30px;border:1px solid #666;border-radius:3px;cursor:pointer}",""])},function(e,t){function n(e,t){var n=e[1]||"",i=e[3];if(!i)return n;if(t&&"function"==typeof btoa){var o=r(i);return[n].concat(i.sources.map(function(e){return"/*# sourceURL="+i.sourceRoot+e+" */"})).concat([o]).join("\n")}return[n].join("\n")}function r(e){return"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(e))))+" */"}e.exports=function(e){var t=[];return t.toString=function(){return this.map(function(t){var r=n(t,e);return t[2]?"@media "+t[2]+"{"+r+"}":r}).join("")},t.i=function(e,n){"string"==typeof e&&(e=[[null,e,""]]);for(var r={},i=0;i<this.length;i++){var o=this[i][0];"number"==typeof o&&(r[o]=!0)}for(i=0;i<e.length;i++){var s=e[i];"number"==typeof s[0]&&r[s[0]]||(n&&!s[2]?s[2]=n:n&&(s[2]="("+s[2]+") and ("+n+")"),t.push(s))}},t}},function(e,t,n){function r(e){for(var t=0;t<e.length;t++){var n=e[t],r=c[n.id];if(r){r.refs++;for(var i=0;i<r.parts.length;i++)r.parts[i](n.parts[i]);for(;i<n.parts.length;i++)r.parts.push(o(n.parts[i]));r.parts.length>n.parts.length&&(r.parts.length=n.parts.length)}else{for(var s=[],i=0;i<n.parts.length;i++)s.push(o(n.parts[i]));c[n.id]={id:n.id,refs:1,parts:s}}}}function i(){var e=document.createElement("style");return e.type="text/css",d.appendChild(e),e}function o(e){var t,n,r=document.querySelector("style["+g+'~="'+e.id+'"]');if(r){if(h)return m;r.parentNode.removeChild(r)}if(y){var o=p++;r=f||(f=i()),t=s.bind(null,r,o,!1),n=s.bind(null,r,o,!0)}else r=i(),t=a.bind(null,r),n=function(){r.parentNode.removeChild(r)};return t(e),function(r){if(r){if(r.css===e.css&&r.media===e.media&&r.sourceMap===e.sourceMap)return;t(e=r)}else n()}}function s(e,t,n,r){var i=n?"":r.css;if(e.styleSheet)e.styleSheet.cssText=b(t,i);else{var o=document.createTextNode(i),s=e.childNodes;s[t]&&e.removeChild(s[t]),s.length?e.insertBefore(o,s[t]):e.appendChild(o)}}function a(e,t){var n=t.css,r=t.media,i=t.sourceMap;if(r&&e.setAttribute("media",r),v.ssrId&&e.setAttribute(g,t.id),i&&(n+="\n/*# sourceURL="+i.sources[0]+" */",n+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(i))))+" */"),e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}var u="undefined"!=typeof document;if("undefined"!=typeof DEBUG&&DEBUG&&!u)throw new Error("vue-style-loader cannot be used in a non-browser environment. Use { target: 'node' } in your Webpack config to indicate a server-rendering environment.");var l=n(7),c={},d=u&&(document.head||document.getElementsByTagName("head")[0]),f=null,p=0,h=!1,m=function(){},v=null,g="data-vue-ssr-id",y="undefined"!=typeof navigator&&/msie [6-9]\b/.test(navigator.userAgent.toLowerCase());e.exports=function(e,t,n,i){h=n,v=i||{};var o=l(e,t);return r(o),function(t){for(var n=[],i=0;i<o.length;i++){var s=o[i],a=c[s.id];a.refs--,n.push(a)}t?(o=l(e,t),r(o)):o=[];for(var i=0;i<n.length;i++){var a=n[i];if(0===a.refs){for(var u=0;u<a.parts.length;u++)a.parts[u]();delete c[a.id]}}}};var b=function(){var e=[];return function(t,n){return e[t]=n,e.filter(Boolean).join("\n")}}()},function(e,t){e.exports=function(e,t){for(var n=[],r={},i=0;i<t.length;i++){var o=t[i],s=o[0],a=o[1],u=o[2],l=o[3],c={id:e+":"+i,css:a,media:u,sourceMap:l};r[s]?r[s].parts.push(c):n.push(r[s]={id:s,parts:[c]})}return n}},function(e,t){e.exports=function(e,t,n,r,i,o){var s,a=e=e||{},u=typeof e.default;"object"!==u&&"function"!==u||(s=e,a=e.default);var l="function"==typeof a?a.options:a;t&&(l.render=t.render,l.staticRenderFns=t.staticRenderFns,l._compiled=!0),n&&(l.functional=!0),i&&(l._scopeId=i);var c;if(o?(c=function(e){e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext,e||"undefined"==typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),r&&r.call(this,e),e&&e._registeredComponents&&e._registeredComponents.add(o)},l._ssrRegister=c):r&&(c=r),c){var d=l.functional,f=d?l.render:l.beforeCreate;d?(l._injectStyles=c,l.render=function(e,t){return c.call(t),f(e,t)}):l.beforeCreate=f?[].concat(f,c):[c]}return{esModule:s,exports:a,options:l}}},function(e,t,n){"use strict";var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"upload"},[n("ul",{staticClass:"ulList"},e._l(e.imgArr,function(t){return n("li",{staticClass:"imgList",style:e.previewCss},[n("img",{attrs:{src:t.url}})])})),e._v(" "),n("input",{ref:"file",staticClass:"seletInput",attrs:{type:"file",accept:"image/gif, image/jpeg, image/png",multiple:"multiple"},on:{change:e.handleFiles}}),e._v(" "),n("div",{staticClass:"static",style:e.buttonCss,on:{click:e.select}},[e._v(e._s(e.word||"选择图片"))])])},i=[],o={render:r,staticRenderFns:i};t.a=o}])});