(function(e){function t(t){for(var o,n,s=t[0],c=t[1],l=t[2],u=0,d=[];u<s.length;u++)n=s[u],Object.prototype.hasOwnProperty.call(i,n)&&i[n]&&d.push(i[n][0]),i[n]=0;for(o in c)Object.prototype.hasOwnProperty.call(c,o)&&(e[o]=c[o]);m&&m(t);while(d.length)d.shift()();return a.push.apply(a,l||[]),r()}function r(){for(var e,t=0;t<a.length;t++){for(var r=a[t],o=!0,n=1;n<r.length;n++){var s=r[n];0!==i[s]&&(o=!1)}o&&(a.splice(t--,1),e=c(c.s=r[0]))}return e}var o={},n={app:0},i={app:0},a=[];function s(e){return c.p+"js/"+({"config~edit~import~qrcode":"config~edit~import~qrcode","config~import":"config~import",config:"config",import:"import",edit:"edit",qrcode:"qrcode",reorder:"reorder"}[e]||e)+"."+{"config~edit~import~qrcode":"ba97879e","config~import":"da16f0b0",config:"de704e88",import:"81647b2a",edit:"ed1b79ec",qrcode:"354964f4",reorder:"fa349a47"}[e]+".js"}function c(t){if(o[t])return o[t].exports;var r=o[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,c),r.l=!0,r.exports}c.e=function(e){var t=[],r={"config~edit~import~qrcode":1,"config~import":1,config:1,qrcode:1,reorder:1};n[e]?t.push(n[e]):0!==n[e]&&r[e]&&t.push(n[e]=new Promise((function(t,r){for(var o="css/"+({"config~edit~import~qrcode":"config~edit~import~qrcode","config~import":"config~import",config:"config",import:"import",edit:"edit",qrcode:"qrcode",reorder:"reorder"}[e]||e)+"."+{"config~edit~import~qrcode":"c90633f6","config~import":"09914041",config:"2416089d",import:"31d6cfe0",edit:"31d6cfe0",qrcode:"f8e56d68",reorder:"f4cd3df8"}[e]+".css",i=c.p+o,a=document.getElementsByTagName("link"),s=0;s<a.length;s++){var l=a[s],u=l.getAttribute("data-href")||l.getAttribute("href");if("stylesheet"===l.rel&&(u===o||u===i))return t()}var d=document.getElementsByTagName("style");for(s=0;s<d.length;s++){l=d[s],u=l.getAttribute("data-href");if(u===o||u===i)return t()}var m=document.createElement("link");m.rel="stylesheet",m.type="text/css",m.onload=t,m.onerror=function(t){var o=t&&t.target&&t.target.src||i,a=new Error("Loading CSS chunk "+e+" failed.\n("+o+")");a.code="CSS_CHUNK_LOAD_FAILED",a.request=o,delete n[e],m.parentNode.removeChild(m),r(a)},m.href=i;var f=document.getElementsByTagName("head")[0];f.appendChild(m)})).then((function(){n[e]=0})));var o=i[e];if(0!==o)if(o)t.push(o[2]);else{var a=new Promise((function(t,r){o=i[e]=[t,r]}));t.push(o[2]=a);var l,u=document.createElement("script");u.charset="utf-8",u.timeout=120,c.nc&&u.setAttribute("nonce",c.nc),u.src=s(e);var d=new Error;l=function(t){u.onerror=u.onload=null,clearTimeout(m);var r=i[e];if(0!==r){if(r){var o=t&&("load"===t.type?"missing":t.type),n=t&&t.target&&t.target.src;d.message="Loading chunk "+e+" failed.\n("+o+": "+n+")",d.name="ChunkLoadError",d.type=o,d.request=n,r[1](d)}i[e]=void 0}};var m=setTimeout((function(){l({type:"timeout",target:u})}),12e4);u.onerror=u.onload=l,document.head.appendChild(u)}return Promise.all(t)},c.m=e,c.c=o,c.d=function(e,t,r){c.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},c.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,t){if(1&t&&(e=c(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(c.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)c.d(r,o,function(t){return e[t]}.bind(null,o));return r},c.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return c.d(t,"a",t),t},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.p="/webnav/",c.oe=function(e){throw console.error(e),e};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],u=l.push.bind(l);l.push=t,l=l.slice();for(var d=0;d<l.length;d++)t(l[d]);var m=u;a.push([0,"chunk-vendors"]),r()})({0:function(e,t,r){e.exports=r("56d7")},"034f":function(e,t,r){"use strict";r("b273")},"03fd":function(e,t,r){"use strict";var o=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("img",e._b({on:{error:function(t){e.image.src="img/fallback.png"}}},"img",e.image,!1))},n=[],i=(r("3170"),r("8e7b"),r("3eb9"),r("ffaf"),r("5893"),r("b110")),a={props:{bookmark:{type:Object,required:!0},size:{type:String,default:"2rem"}},data:function(){return{image:{}}},watch:{bookmark:{deep:!0,immediate:!0,handler:function(e){var t=this.$store.state.config.cors,r=t+new URL(e.icon||"/favicon.ico",e.url).href;this.$store.state.config.httpIcon||r.startsWith("https://")||(r="img/fallback.png");var o={src:r,style:{width:this.size,height:this.size}};t&&(o=Object(i["a"])(Object(i["a"])({},o),{},{crossorigin:"anonymous"})),this.image=o}}}},s=a,c=r("0199"),l=Object(c["a"])(s,o,n,!1,null,null,null);t["a"]=l.exports},"11a9":function(e,t,r){"use strict";r("5ce1")},3504:function(e){e.exports=JSON.parse('{"menu":{"import":"导入","export":"导出并下载","clear-bookmark":"清除所有书签","github-link":"去 GitHub 看看本项目","more-config":"更多设置","new-bookmark":"新建书签"},"bookmark":{"name":"书签名称","url":"网址","search":"搜索 URL 模板","icon":"网站图标地址"},"message":{"success":"操作成功！","bookmark-init":"WebNav 已为您添加默认书签","clear-warn":"请输入 CLEAR 以继续。请确认已经备份书签。","config-init":"WebNav 配置加载成功","config-error":"自动更新配置失败，回退至默认配置。您仍然可以下载之前的配置。如果回到决定默认，应用一下默认配置即可。","import-success":"未添加书签 | 已成功添加 {n} 个书签 | 已成功添加 {n} 个书签","config-update":"配置自动升级成功"},"config":{"bg":{"blur":"模糊","color":"背景颜色","contrast":"对比度","gray":"灰度","padding":"模糊衬色","title":"背景","example-text":"这是范例文字 ","image-url":"图片网址","black-text":"黑色文字","img-msg":"留白以使用纯色背景","white-text":"白色文字"},"other":{"title":"其他","cors":"CORS 代理","language":"语言","bar-color":"主应用栏颜色","cors-note":"使用 CORS 代理将使被阻止的 http 请求转换为 https。","dark-mode":"暗色模式","http-icon":"允许加载 http 协议的图标","link-preview":"使用 LinkPreview.net 的服务自动填写网页标题和图标。LinkPreview 也存在一定缺陷，不对任何情况适用。","link-preview-key":"LinkPreview Key","prefer-new-tab":"在新标签页打开网页"},"title":"配置 WebNav","locale-default":"系统默认"},"qr":{"title":"扫描二维码","result":"扫描结果","help":"帮助","press":"点击","camera-scan":"打开摄像头扫描","upload-scan":"扫描上传的图片","empty-content":"未发现二维码"}}')},3518:function(e,t,r){"use strict";r("88ff")},"3fab":function(e){e.exports=JSON.parse('{"$id":"/config","type":"object","required":["bgImg","blackText","cors","barColor","httpIcon","locale","dark","linkPreviewKey","preferNewTab"],"additionalProperties":false,"properties":{"bgImg":{"type":"object","required":["url","filter"],"additionalProperties":false,"properties":{"url":{"type":"string"},"filter":{"type":"object","required":["blur","blurColor","contrast","grayscale"],"additionalProperties":false,"properties":{"blur":{"type":"integer","minimum":0,"maximum":10},"blurColor":{"type":"string","pattern":"^#([\\\\da-fA-F]{3}){1,2}$"},"contrast":{"type":"integer","minimum":0,"maximum":200},"grayscale":{"type":"integer","minimum":0,"maximum":100}}}}},"blackText":{"type":"boolean"},"cors":{"description":"CORS proxy","type":"string"},"barColor":{"type":"string","pattern":"^#([\\\\da-fA-F]{3}){1,2}$"},"httpIcon":{"type":"boolean"},"locale":{"type":"string"},"dark":{"type":"boolean"},"linkPreviewKey":{"type":"string"},"preferNewTab":{"type":"boolean"}}}')},4360:function(e,t,r){"use strict";r("c5d7"),r("4f1e"),r("adca"),r("889c"),r("c3f6"),r("3170"),r("8e7b"),r("45ac"),r("ffaf");var o,n=r("8d1c"),i=(r("c09a"),r("14ca")),a=r("fdec"),s=r("e314"),c=r("dc64"),l=r("ea45");a["a"].use(s["a"]),t["a"]=new s["a"].Store({state:{bookmarks:[],mode:"normal",modeData:void 0,swStatus:"",messages:[],config:{}},mutations:{switchMode:function(e,t){e.mode=t.mode||t,e.modeData=t.data},swUpdate:function(e,t){e.swStatus=t},updateConfig:function(e,t){e.config=t.config,t.app.$i18n.locale=t.config.locale||navigator.language.slice(0,2),t.app.$vuetify.theme.dark=t.config.dark,!0===t.write&&localStorage.setItem("config",JSON.stringify(t.config))},alert:function(e,t){"string"===typeof t?e.messages.push({text:t,type:"warning"}):e.messages.push(t)}},actions:{init:function(e,t){return Object(i["a"])(regeneratorRuntime.mark((function n(){var i,a;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return e.dispatch("initConfig",t),i=!1,n.next=4,Object(c["a"])("BookmarkDB",1,{upgrade:function(e){i=!0,e.createObjectStore("bookmarks",{autoIncrement:!0,keyPath:"id"})}});case 4:o=n.sent,i?(a=r("d063"),a.forEach((function(e,t){e.index=t})),e.dispatch("addAll",a),e.commit("alert",{text:t.$t("message.bookmark-init"),type:"success"})):e.dispatch("refresh");case 6:case"end":return n.stop()}}),n)})))()},initConfig:function(e,t){var o,n=JSON.parse(localStorage.getItem("config"));if(null===n)n=r("bd35"),localStorage.setItem("config",JSON.stringify(n)),o={text:t.$t("message.config-init"),type:"success"};else if(!Object(l["a"])("/config",n,!0)){var i=r("bd35");n=r("cdb5")(i,n),Object(l["a"])("/config",n)?(localStorage.setItem("config",JSON.stringify(n)),o={text:t.$t("message.config-update"),type:"success"}):(n=i,o={text:t.$t("message.config-error"),type:"error",delay:12e3})}e.commit("updateConfig",{config:n,app:t}),void 0!==o&&e.commit("alert",o)},reorder:function(e,t){var r,o=t.from,i=t.to;(r=e.state.bookmarks).splice.apply(r,[o,1].concat(Object(n["a"])(e.state.bookmarks.splice(i,1,e.state.bookmarks[o])))),e.dispatch("reIndex")},sortIndex:function(e){e.state.bookmarks=e.state.bookmarks.sort((function(e,t){return e.index-t.index}))},reIndex:function(e){e.state.bookmarks.forEach((function(e,t){e.index=t}))},add:function(e,t){return Object(i["a"])(regeneratorRuntime.mark((function r(){return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return r.next=2,o.add("bookmarks",t);case 2:return r.next=4,e.dispatch("refresh");case 4:case"end":return r.stop()}}),r)})))()},addAll:function(e,t){return Object(i["a"])(regeneratorRuntime.mark((function r(){return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return r.next=2,Promise.all(t.map((function(e){return o.add("bookmarks",e)})));case 2:return r.next=4,e.dispatch("refresh");case 4:case"end":return r.stop()}}),r)})))()},put:function(e,t){return Object(i["a"])(regeneratorRuntime.mark((function r(){return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return r.next=2,o.put("bookmarks",t);case 2:e.state.bookmarks.splice(t.index,1,t);case 3:case"end":return r.stop()}}),r)})))()},putAll:function(e){return Object(i["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,Promise.all(e.state.bookmarks.map((function(e){return o.put("bookmarks",e)})));case 2:case"end":return t.stop()}}),t)})))()},delete:function(e,t){return Object(i["a"])(regeneratorRuntime.mark((function r(){return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return r.next=2,o.delete("bookmarks",t.id);case 2:return e.state.bookmarks.splice(t.index,1),r.next=5,e.dispatch("reIndex");case 5:return r.next=7,e.dispatch("putAll");case 7:case"end":return r.stop()}}),r)})))()},clear:function(e){return Object(i["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,o.clear("bookmarks");case 2:e.state.bookmarks=[];case 3:case"end":return t.stop()}}),t)})))()},refresh:function(e){return Object(i["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,o.getAll("bookmarks");case 2:return e.state.bookmarks=t.sent,t.next=5,e.dispatch("sortIndex");case 5:case"end":return t.stop()}}),t)})))()}},modules:{}})},"56d7":function(e,t,r){"use strict";r.r(t);r("5b62"),r("0ed1"),r("fd96"),r("438e");var o=r("fdec"),n=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("v-app",[r("v-app-bar",{attrs:{app:"",color:e.$store.state.config.barColor,dark:""}},[r("v-app-bar-nav-icon",{on:{click:function(t){e.drawer=!e.drawer}}}),r("v-text-field",{ref:"text",attrs:{value:e.query,"prepend-inner-icon":"mdi-magnify","hide-details":"",outlined:"","single-line":"",dense:"",clearable:""},on:{mousedown:e.handleAutofill,input:function(t){e.query=t||""},focus:function(t){e.textFocus=!0},blur:function(t){e.textFocus=!1}}}),r("v-spacer"),r("v-expand-x-transition",[r("v-btn",{directives:[{name:"show",rawName:"v-show",value:e.showBtn,expression:"showBtn"}],attrs:{icon:""},on:{click:function(t){return e.$store.commit("switchMode","qrcode-dialog")}}},[r("v-icon",[e._v("mdi-qrcode-scan")])],1)],1),r("v-expand-x-transition",[r("v-btn",{directives:[{name:"show",rawName:"v-show",value:e.showBtn,expression:"showBtn"}],attrs:{icon:"",color:"edit"===e.$store.state.mode?"green":void 0},on:{click:function(t){return e.$store.commit("switchMode","edit"===e.$store.state.mode?"normal":"edit")}}},[r("v-icon",[e._v("mdi-pencil")])],1)],1)],1),r("v-main",{style:{backgroundColor:e.$store.state.config.bgImg.filter.blurColor}},[r("div",{staticClass:"bg-image",style:{backgroundImage:"url("+e.$store.state.config.bgImg.url+")",backgroundSize:"cover",backgroundPosition:"center",filter:"blur("+e.$store.state.config.bgImg.filter.blur+"px)\n          contrast("+e.$store.state.config.bgImg.filter.contrast+"%)\n          grayscale("+e.$store.state.config.bgImg.filter.grayscale+"%)"}}),r("div",{staticClass:"mt-3 mx-2 alert-box"},e._l(e.$store.state.messages,(function(e,t){return r("DisAlert",{key:t,attrs:{message:e}})})),1),r("WebNav",{attrs:{query:e.query}}),"import-dialog"===e.$store.state.mode?r("ImportDialog",{on:{input:function(t){return e.$store.commit("switchMode","normal")}}}):e._e(),"edit-dialog"===e.$store.state.mode?r("EditDialog",{on:{input:function(t){return e.$store.commit("switchMode","normal")}}}):e._e(),"reorder-dialog"===e.$store.state.mode?r("ReorderDialog",{on:{input:function(t){return e.$store.commit("switchMode","normal")}}}):e._e(),"config-dialog"===e.$store.state.mode?r("ConfigDialog",{on:{input:function(t){return e.$store.commit("switchMode","normal")}}}):e._e(),"qrcode-dialog"===e.$store.state.mode?r("QRCodeDialog",{on:{input:function(t){return e.$store.commit("switchMode","normal")}}}):e._e()],1),r("v-navigation-drawer",{attrs:{app:""},model:{value:e.drawer,callback:function(t){e.drawer=t},expression:"drawer"}},[r("v-list",{attrs:{dense:""}},[r("v-list-item",[r("v-list-item-content",[r("v-list-item-title",{staticClass:"title"},[e._v(" WebNav ")]),r("logo",{staticClass:"text-center",nativeOn:{click:function(t){return e.install.prompt()}}})],1)],1),r("v-divider"),r("v-list-item",{attrs:{link:""},on:{click:function(t){return e.$store.commit("switchMode","import-dialog")}}},[r("v-list-item-action",[r("v-icon",[e._v("mdi-application-import")])],1),r("v-list-item-content",[r("v-list-item-title",[e._v(e._s(e.$t("menu.import")))])],1)],1),r("v-list-item",{attrs:{link:""},on:{click:e.downloadJSON}},[r("v-list-item-action",[r("v-icon",[e._v("mdi-file-download-outline")])],1),r("v-list-item-content",[r("v-list-item-title",[e._v(e._s(e.$t("menu.export")))]),r("a",{ref:"downloadLink",staticClass:"d-none"})],1)],1),r("v-list-item",{attrs:{link:""},on:{click:e.newBookmark}},[r("v-list-item-action",[r("v-icon",[e._v("mdi-bookmark-plus-outline")])],1),r("v-list-item-content",[r("v-list-item-title",[e._v(e._s(e.$t("menu.new-bookmark")))])],1)],1),r("v-list-item",{attrs:{link:""},on:{click:function(t){return e.$store.commit("switchMode","config-dialog")}}},[r("v-list-item-action",[r("v-icon",[e._v("mdi-cog")])],1),r("v-list-item-content",[r("v-list-item-title",[e._v(e._s(e.$t("menu.more-config")))])],1)],1),r("v-list-item",{attrs:{link:""},on:{click:e.confirmClear}},[r("v-list-item-action",[r("v-icon",[e._v("mdi-alert")])],1),r("v-list-item-content",[r("v-list-item-title",[e._v(e._s(e.$t("menu.clear-bookmark")))])],1)],1),r("v-list-item",{attrs:{link:"",href:"https://github.com/AllanChain/webnav"}},[r("v-list-item-action",[r("v-icon",[e._v("mdi-github")])],1),r("v-list-item-content",[r("v-list-item-title",[e._v(e._s(e.$t("menu.github-link")))])],1)],1),r("v-divider"),r("v-list-item",[r("v-list-item-content",[r("span",[r("v-icon",{attrs:{small:""}},[e._v(" mdi-cogs ")]),e._v(" v"+e._s(e.version)+" - "+e._s(e.$store.state.swStatus)+" ")],1)])],1)],1)],1)],1)},i=[],a=(r("4f1e"),r("889c"),r("3170"),r("3a40"),r("43a9"),r("45ac"),r("3832"),r("c09a"),r("14ca")),s=r("9224"),c=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"text-center pt-5"},[r("div",{staticStyle:{"max-width":"700px",margin:"auto"}},e._l(e.$store.state.bookmarks,(function(t){return r("div",{key:t.id,staticClass:"box"},[r("div",[r("v-overlay",{attrs:{absolute:"",opacity:"0.1","z-index":"2",value:"edit"===e.$store.state.mode}},[r("v-btn",{attrs:{color:"#2196f390",fab:"","x-small":""},on:{click:function(r){return e.$store.commit("switchMode",{mode:"edit-dialog",data:t})}}},[r("v-icon",{attrs:{color:"white"}},[e._v(" mdi-pencil ")])],1)],1),r("v-overlay",{attrs:{absolute:"",opacity:"0.1","z-index":"2",value:"normal"===e.$store.state.mode&&e.query&&!!t.search}},[r("v-btn",{attrs:{color:"#2196f390",fab:"","x-small":""},on:{click:function(r){return e.goSearch(t)}}},[r("v-icon",{attrs:{color:"white"}},[e._v(" mdi-magnify ")])],1)],1),r("WebsiteIcon",{attrs:{bookmark:t},nativeOn:{click:function(r){return e.goURL(t.url)}}})],1),r("div",{staticClass:"url",style:{color:e.$store.state.config.blackText?"#000":"#eee",textShadow:"1px 1px 3px\n          "+(e.$store.state.config.blackText?"#eee":"#000")}},[e._v(" "+e._s(t.title)+" ")])])})),0)])},l=[],u=(r("8e7b"),r("deae"),r("ffaf"),r("5893"),r("03fd")),d={components:{WebsiteIcon:u["a"]},props:{query:{type:String,required:!0}},methods:{goSearch:function(e){this.goURL(new URL(e.search.replace("{}",this.query),e.url).href)},goURL:function(e){this.$store.state.config.preferNewTab?window.open(e,"_blank","noopener,noreferrer"):window.location.href=e}}},m=d,f=(r("3518"),r("0199")),p=r("935c"),g=r.n(p),b=r("1e14"),h=r("0fb7"),v=r("99f3"),k=Object(f["a"])(m,c,l,!1,null,null,null),w=k.exports;g()(k,{VBtn:b["a"],VIcon:h["a"],VOverlay:v["a"]});var y=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},x=[function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"logo py-4"},[e._v(" 4 "),r("img",{attrs:{src:"img/icons/android-chrome-192x192.png",width:"50"}}),e._v(" 4 ")])}],$={},O=$,_=(r("11a9"),Object(f["a"])(O,y,x,!1,null,null,null)),S=_.exports,C=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("v-alert",{style:e.style,attrs:{dense:"",dismissible:"",border:"left",transition:"slide-x-transition",type:e.message.type},model:{value:e.show,callback:function(t){e.show=t},expression:"show"}},[e._v(" "+e._s(e.message.text)+" ")])},q=[],N={props:{message:{type:Object,required:!0}},data:function(){return{show:!0,style:this.message.break?{wordBreak:"break-all"}:{hypens:"auto"}}},created:function(){setTimeout(this.close.bind(this),this.message.delay||4e3)},methods:{close:function(){this.show=!1}}},j=N,R=r("e0dc"),L=Object(f["a"])(j,C,q,!1,null,null,null),I=L.exports;g()(L,{VAlert:R["a"]});var P={name:"App",components:{ImportDialog:function(){return Promise.all([r.e("config~edit~import~qrcode"),r.e("config~import"),r.e("import")]).then(r.bind(null,"e526"))},EditDialog:function(){return Promise.all([r.e("config~edit~import~qrcode"),r.e("edit")]).then(r.bind(null,"9052"))},ReorderDialog:function(){return r.e("reorder").then(r.bind(null,"d875"))},ConfigDialog:function(){return Promise.all([r.e("config~edit~import~qrcode"),r.e("config~import"),r.e("config")]).then(r.bind(null,"f7e1"))},QRCodeDialog:function(){return Promise.all([r.e("config~edit~import~qrcode"),r.e("qrcode")]).then(r.bind(null,"31fef"))},WebNav:w,Logo:S,DisAlert:I},data:function(){return{install:null,importDialog:!1,query:"",drawer:!1,version:s["a"],textFocus:!1,autofilled:!1}},computed:{showBtn:function(){return window.innerWidth>=550||!this.textFocus&&!this.query}},created:function(){var e=this;return Object(a["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return window.addEventListener("beforeinstallprompt",e.installPrompt),t.next=3,e.$store.dispatch("init",e);case 3:case"end":return t.stop()}}),t)})))()},destroyed:function(){window.removeEventListener("beforeinstallprompt",this.installPrompt)},methods:{installPrompt:function(e){e.preventDefault(),this.install=e},newBookmark:function(){this.$store.commit({type:"switchMode",mode:"edit-dialog",data:{title:"",url:"",index:this.$store.state.bookmarks.length}})},downloadJSON:function(){var e=JSON.parse(JSON.stringify(this.$store.state.bookmarks));e.forEach((function(e){delete e.id,delete e.index}));var t=(new Date).toJSON().slice(0,-8).replace(/-|:/g,"");this.$refs.downloadLink.download="bookmarks-".concat(t,".json"),this.$refs.downloadLink.href="data:text/json;charset=utf-8,"+encodeURIComponent(JSON.stringify(e,null,4)),this.$refs.downloadLink.click()},confirmClear:function(){"CLEAR"===prompt(this.$t("message.clear-warn"))&&this.$store.dispatch("clear")},handleAutofill:function(){this.autofilled||(this.query=this.$refs.text.$refs.input.value,this.autofilled=!0)}}},A=P,E=(r("034f"),r("dcbb")),B=r("c9e9"),D=r("ad16"),T=r("a2779"),J=r("09d4"),M=r("0857"),U=r("6f0b"),V=r("0968"),W=r("21cd"),F=r("3852"),G=r("815c"),z=r("00a0"),H=r("3c2c"),K=Object(f["a"])(A,n,i,!1,null,null,null),Q=K.exports;g()(K,{VApp:E["a"],VAppBar:B["a"],VAppBarNavIcon:D["a"],VBtn:b["a"],VDivider:T["a"],VExpandXTransition:J["b"],VIcon:h["a"],VList:M["a"],VListItem:U["a"],VListItemAction:V["a"],VListItemContent:W["a"],VListItemTitle:W["b"],VMain:F["a"],VNavigationDrawer:G["a"],VSpacer:z["a"],VTextField:H["a"]});var X=r("c033"),Y=r("4360");Object(X["a"])("".concat("/webnav/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){Y["a"].commit("swUpdate","registered"),console.log("Service worker has been registered.")},cached:function(){Y["a"].commit("swUpdate","cached"),console.log("Content has been cached for offline use.")},updatefound:function(){Y["a"].commit("swUpdate","updateFound"),console.log("New content is downloading.")},updated:function(){Y["a"].commit("swUpdate","updated"),console.log("New content is available; please refresh.")},offline:function(){Y["a"].commit("swUpdate","offline"),console.log("No internet connection found. App is running in offline mode.")},error:function(e){Y["a"].commit("swUpdate","error"),console.error("Error during service worker registration:",e)}});var Z=r("c16c");o["a"].use(Z["a"]);var ee=new Z["a"]({icons:{iconfont:"mdi"}}),te=r("c7b4"),re={zh:r("3504"),en:r("edd4")};o["a"].use(te["a"]);var oe=new te["a"]({locale:"en",fallbackLocale:"en",messages:re});o["a"].config.productionTip=!1,new o["a"]({vuetify:ee,store:Y["a"],i18n:oe,render:function(e){return e(Q)}}).$mount("#app")},"5ce1":function(e,t,r){},7971:function(e,t,r){"use strict";r.r(t),t["default"]=[r("bd48"),r("ce37"),r("3fab")]},"88ff":function(e,t,r){},9224:function(e){e.exports=JSON.parse('{"a":"0.17.1"}')},b273:function(e,t,r){},bd35:function(e){e.exports=JSON.parse('{"bgImg":{"url":"back.jpg","filter":{"blur":0,"blurColor":"#4480fd","contrast":100,"grayscale":0}},"blackText":false,"cors":"","barColor":"#3949AB","httpIcon":false,"locale":"","dark":false,"linkPreviewKey":"","preferNewTab":false}')},bd48:function(e){e.exports=JSON.parse('{"$id":"/bookmark","type":"object","required":["title","url"],"properties":{"title":{"type":"string","minLength":1},"url":{"type":"string","pattern":"^http(s)*:\\\\/\\\\/.+$"},"search":{"type":"string"},"icon":{"type":"string"}},"errorMessage":{"properties":{"title":"Bookmark title is required","url":"Bookmark URL must begin with \\"http(s)://\\""}}}')},ce37:function(e){e.exports=JSON.parse('{"$id":"/bookmarks","type":"array","items":{"$ref":"/bookmark"}}')},d063:function(e){e.exports=JSON.parse('[{"title":"Google","url":"https://www.google.com","search":"/search?q={}"},{"title":"DuckDuckGo","url":"https://duckduckgo.com","search":"/?q={}"},{"title":"Bing","url":"https://www.bing.com","search":"/search?q={}"},{"title":"GitHub","url":"https://github.com","search":"/search?q={}"},{"title":"Pypi","url":"https://pypi.org","search":"/search?q={}","icon":"https://pypi.org/static/images/favicon.6a76275d.ico"},{"title":"Stack Overflow","url":"https://stackoverflow.com"}]')},ea45:function(e,t,r){"use strict";r("c5d7"),r("adca");var o=r("ae27"),n=r("83f7"),i=r.n(n),a=r("2d15"),s=r.n(a),c=r("4360"),l=new i.a({schemas:r("7971"),allErrors:!0,verbose:!0});r("2ff5")(l,{singleError:!0}),t["a"]=function(e,t,r){var n=l.getSchema(e);return!!n(t)||(r||n.errors.map((function(e){var r=s.a.get(t,e.dataPath);"object"===Object(o["a"])(r)&&(r=JSON.stringify(r)),r='"'.concat(e.dataPath,'" ').concat(e.message,'. Got "').concat(r,'"'),c["a"].commit("alert",{text:r,type:"warning",break:!0})})),!1)}},edd4:function(e){e.exports=JSON.parse('{"menu":{"import":"Import","export":"Export and Download","clear-bookmark":"CLEAR ALL Bookmark","github-link":"Fork me on GitHub","more-config":"More Config","new-bookmark":"Add Bookmark"},"bookmark":{"name":"Bookmark Name","url":"Website URL","search":"Search Template","icon":"Website Icon"},"message":{"success":"Success!","bookmark-init":"WebNav has added some bookmarks for you","clear-warn":"Type CLEAR to continue. Hope you have a backup.","config-init":"WebNav config initiated","config-error":"Auto upgrade config failed. Falling back to default. You can still download your previous config. To discard your config changes, just apply default config.","import-success":"No bookmark added | Successfully added {n} bookmark | Successfully added {n} bookmarks`","config-update":"Auto upgrade config success"},"config":{"title":"Config WebNav","other":{"title":"other","language":"Language","cors":"CORS Proxy","bar-color":"Main app bar color","cors-note":"Use CORS proxy to convert blocked http requests to https.","dark-mode":"Dark Mode","http-icon":"Allow icon served over http","link-preview":"Use LinkPreview.net service to automatically fill in website title and icon. LinkPreview has some limitaions which means it does not work in every situation.","link-preview-key":"LinkPreview Key","prefer-new-tab":"Open web pages in a new tab"},"bg":{"blur":"Blur","title":"Background","contrast":"Contrast","gray":"Gray","padding":"Blur padding color","color":"BG color","example-text":"Example Text ","image-url":"Image URL","black-text":"Black text","img-msg":"Leave it blank to use pure color background","white-text":"White text"},"locale-default":"System default"},"qr":{"title":"Scan QR Code","result":"Scan Result","help":"Help","press":"Press","camera-scan":"open camera and scan","upload-scan":"upload an image and scan","empty-content":"No QR code found"}}')}});
//# sourceMappingURL=app.c45cb3f6.js.map