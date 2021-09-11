(function(){"use strict";var e={2933:function(e,t,o){var i=o(3115),r=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("v-app",[o("v-app-bar",{attrs:{app:"",color:e.config.barColor,dark:""}},[o("v-app-bar-nav-icon",{attrs:{"data-cy":"button-drawer"},on:{click:function(t){e.drawer=!e.drawer}}}),o("v-text-field",{ref:"text",attrs:{value:e.query,"prepend-inner-icon":"mdi-magnify","hide-details":"",outlined:"","single-line":"",dense:"",clearable:""},on:{mousedown:e.handleAutofill,input:function(t){e.query=t||""},focus:function(t){e.textFocus=!0},blur:function(t){e.textFocus=!1}}}),o("v-spacer"),o("v-expand-x-transition",[o("v-btn",{directives:[{name:"show",rawName:"v-show",value:e.showBtn,expression:"showBtn"}],attrs:{icon:""},on:{click:function(t){return e.$store.commit("switchMode","qrcode-dialog")}}},[o("v-icon",[e._v("mdi-qrcode-scan")])],1)],1),o("v-expand-x-transition",[o("v-btn",{directives:[{name:"show",rawName:"v-show",value:e.showBtn,expression:"showBtn"}],attrs:{"data-cy":"button-edit-mode",icon:"",color:"edit"===e.$store.state.mode?"green":void 0},on:{click:function(t){return e.$store.commit("switchMode","edit"===e.$store.state.mode?"normal":"edit")}}},[o("v-icon",[e._v("mdi-pencil")])],1)],1)],1),o("v-main",{style:{backgroundColor:e.config.bgImg.filter.blurColor}},[o("div",{staticClass:"bg-image",style:{backgroundImage:"url("+e.config.bgImg.url+")",backgroundSize:"cover",backgroundPosition:"center 60%",filter:"blur("+e.config.bgImg.filter.blur+"px)\n          contrast("+e.config.bgImg.filter.contrast+"%)\n          grayscale("+e.config.bgImg.filter.grayscale+"%)"}}),o("div",{staticClass:"mt-3 mx-2 alert-box"},e._l(e.$store.state.messages,(function(e,t){return o("DisAlert",{key:t,attrs:{message:e}})})),1),o("WebNav",{attrs:{query:e.query}}),"import-dialog"===e.$store.state.mode?o("ImportDialog",{on:{input:function(t){return e.$store.commit("switchMode","normal")}}}):e._e(),"edit-dialog"===e.$store.state.mode?o("EditDialog",{on:{input:function(t){return e.$store.commit("switchMode","normal")}}}):e._e(),"reorder-dialog"===e.$store.state.mode?o("ReorderDialog",{on:{input:function(t){return e.$store.commit("switchMode","normal")}}}):e._e(),"config-dialog"===e.$store.state.mode?o("ConfigDialog",{on:{input:function(t){return e.$store.commit("switchMode","normal")}}}):e._e(),"qrcode-dialog"===e.$store.state.mode?o("QRCodeDialog",{on:{input:function(t){return e.$store.commit("switchMode","normal")}}}):e._e()],1),o("v-navigation-drawer",{attrs:{"disable-resize-watcher":"",app:""},model:{value:e.drawer,callback:function(t){e.drawer=t},expression:"drawer"}},[o("v-list",{attrs:{dense:""}},[o("v-list-item",[o("v-list-item-content",[o("v-list-item-title",{staticClass:"title"},[e._v(" WebNav ")]),o("logo",{staticClass:"text-center",nativeOn:{click:function(t){return e.install.prompt()}}})],1)],1),o("v-divider"),o("v-list-item",{attrs:{link:"","data-cy":"button-import"},on:{click:function(t){return e.$store.commit("switchMode","import-dialog")}}},[o("v-list-item-action",[o("v-icon",[e._v("mdi-application-import")])],1),o("v-list-item-content",[o("v-list-item-title",[e._v(e._s(e.$t("menu.import")))])],1)],1),o("v-list-item",{attrs:{link:""},on:{click:e.downloadJSON}},[o("v-list-item-action",[o("v-icon",[e._v("mdi-file-download-outline")])],1),o("v-list-item-content",[o("v-list-item-title",[e._v(e._s(e.$t("menu.export")))]),o("a",{ref:"downloadLink",staticClass:"d-none"})],1)],1),o("v-list-item",{attrs:{link:"","data-cy":"button-new-bookmark"},on:{click:e.newBookmark}},[o("v-list-item-action",[o("v-icon",[e._v("mdi-bookmark-plus-outline")])],1),o("v-list-item-content",[o("v-list-item-title",[e._v(e._s(e.$t("menu.new-bookmark")))])],1)],1),o("v-list-item",{attrs:{link:""},on:{click:function(t){return e.$store.commit("switchMode","config-dialog")}}},[o("v-list-item-action",[o("v-icon",[e._v("mdi-cog")])],1),o("v-list-item-content",[o("v-list-item-title",[e._v(e._s(e.$t("menu.more-config")))])],1)],1),o("v-list-item",{attrs:{link:""},on:{click:e.confirmClear}},[o("v-list-item-action",[o("v-icon",[e._v("mdi-alert")])],1),o("v-list-item-content",[o("v-list-item-title",[e._v(e._s(e.$t("menu.clear-bookmark")))])],1)],1),o("v-list-item",{attrs:{link:"",href:"https://github.com/AllanChain/webnav"}},[o("v-list-item-action",[o("v-icon",[e._v("mdi-github")])],1),o("v-list-item-content",[o("v-list-item-title",[e._v(e._s(e.$t("menu.github-link")))])],1)],1),o("v-divider"),o("v-list-item",{on:{click:e.upgradeApp}},[o("v-list-item-content",[o("span",[o("v-icon",{attrs:{small:""}},[e._v(" "+e._s("updated"===e.$store.state.swStatus?"mdi-cog-refresh":"mdi-cogs")+" ")]),e._v(" v"+e._s(e.version)+" - "+e._s(e.$t("sw."+e.$store.state.swStatus))+" ")],1)])],1)],1)],1)],1)},n=[],a={i8:"0.18.3"},s=o(5234),c=o(2093);let l=null;(0,s.z)("/webnav/service-worker.js",{ready(){c.Z.commit("swUpdate","active"),console.log("Service worker is active")},registered(){c.Z.commit("swUpdate","registered"),console.log("Service worker has been registered.")},cached(){c.Z.commit("swUpdate","cached"),console.log("Content has been cached for offline use.")},updatefound(){c.Z.commit("swUpdate","updateFound"),console.log("New content is downloading.")},updated(e){c.Z.commit("swUpdate","updated"),console.log("New content is available; please refresh."),l=e},offline(){c.Z.commit("swUpdate","offline"),console.log("No internet connection found. App is running in offline mode.")},error(e){c.Z.commit("swUpdate","error"),console.error("Error during service worker registration:",e)}});const d=()=>{const e=l?.waiting,t=l?.active;e&&(t.postMessage({type:"abort-connections"}),e.postMessage({type:"skip-waiting"}))};var u=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"text-center pt-5"},[o("div",{staticStyle:{"max-width":"700px",margin:"auto"}},e._l(e.bookmarks,(function(t){return o("div",{key:t.id,staticClass:"box"},[o("v-overlay",{attrs:{absolute:"",opacity:"0.1","z-index":"2",value:"edit"===e.$store.state.mode}},[o("v-btn",{attrs:{color:"#2196f390",fab:"","x-small":"","data-cy":"edit-one"},on:{click:function(o){return e.$store.commit("switchMode",{mode:"edit-dialog",data:t})}}},[o("v-icon",{attrs:{color:"white"}},[e._v(" mdi-pencil ")])],1)],1),o("v-overlay",{attrs:{absolute:"",opacity:"0.1","z-index":"2",value:"normal"===e.$store.state.mode&&e.query&&!!t.search}},[o("v-btn",{attrs:{color:"#2196f390",fab:"","x-small":""},on:{click:function(o){return e.goSearch(t)}}},[o("v-icon",{attrs:{color:"white"}},[e._v(" mdi-magnify ")])],1)],1),o("div",{directives:[{name:"ripple",rawName:"v-ripple"}],staticClass:"website py-1",on:{click:function(o){return e.goURL(t.url)}}},[o("WebsiteIcon",{attrs:{bookmark:t}}),o("div",{staticClass:"name py-1",style:{color:e.config.blackText?"#000":"#eee",textShadow:"1px 1px 3px\n            "+(e.config.blackText?"#eee":"#000")},attrs:{"data-cy":"title"}},[e._v(" "+e._s(t.title)+" ")])],1)],1)})),0)])},m=[],p=o(9361),f=o(7895),g={components:{WebsiteIcon:f.Z},props:{query:{type:String,required:!0}},computed:{...(0,p.rn)("config",["config"]),...(0,p.rn)("db/bookmarks",["bookmarks"])},methods:{goSearch(e){this.goURL(new URL(e.search.replace("{}",this.query),e.url).href)},goURL(e){this.config.preferNewTab?window.open(e,"_blank","noopener,noreferrer"):window.location.href=e}}},v=g,h=o(6117),b=o(6218),k=o.n(b),w=o(9678),y=o(3605),x=o(644),S=o(6425),_=o.n(S),Z=o(1645),$=(0,h.Z)(v,u,m,!1,null,"a4dcdb98",null),C=$.exports;k()($,{VBtn:w.Z,VIcon:y.Z,VOverlay:x.Z}),_()($,{Ripple:Z.Z});var N=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},O=[function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"logo py-4"},[e._v(" 4 "),o("img",{attrs:{src:"img/icons/android-chrome-192x192.png",width:"50"}}),e._v(" 4 ")])}],A={},L=A,I=(0,h.Z)(L,N,O,!1,null,null,null),P=I.exports,q=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("v-alert",{style:e.style,attrs:{dense:"",dismissible:"",border:"left",transition:"slide-x-transition",type:e.message.type},model:{value:e.show,callback:function(t){e.show=t},expression:"show"}},[e._v(" "+e._s(e.message.text)+" ")])},E=[],B={props:{message:{type:Object,required:!0}},data(){return{show:!0,style:this.message.break?{wordBreak:"break-all"}:{hypens:"auto"}}},created(){setTimeout(this.close.bind(this),this.message.delay||4e3)},methods:{close(){this.show=!1}}},R=B,T=o(6166),D=(0,h.Z)(R,q,E,!1,null,null,null),j=D.exports;k()(D,{VAlert:T.Z});var M={name:"App",components:{ImportDialog:()=>Promise.all([o.e(352),o.e(211),o.e(6)]).then(o.bind(o,1157)),EditDialog:()=>Promise.all([o.e(352),o.e(922)]).then(o.bind(o,1675)),ReorderDialog:()=>o.e(703).then(o.bind(o,7990)),ConfigDialog:()=>Promise.all([o.e(352),o.e(211),o.e(497)]).then(o.bind(o,533)),QRCodeDialog:()=>Promise.all([o.e(352),o.e(487)]).then(o.bind(o,7286)),WebNav:C,Logo:P,DisAlert:j},data(){return{install:null,importDialog:!1,query:"",drawer:!1,version:a.i8,textFocus:!1,autofilled:!1}},computed:{showBtn(){return window.innerWidth>=550||!this.textFocus&&!this.query},...(0,p.rn)("config",["config"]),...(0,p.rn)("db/bookmarks",["bookmarks"])},watch:{"config.dark":{immediate:!0,handler(e){this.$vuetify.theme.dark=e}}},mounted(){window.addEventListener("beforeinstallprompt",this.installPrompt)},destroyed(){window.removeEventListener("beforeinstallprompt",this.installPrompt)},methods:{installPrompt(e){e.preventDefault(),this.install=e},async upgradeApp(){"updated"===this.$store.state.swStatus&&(await d(),location.reload())},newBookmark(){this.$store.commit({type:"switchMode",mode:"edit-dialog",data:{title:"",url:"",index:this.bookmarks.length}})},downloadJSON(){const e=JSON.parse(JSON.stringify(this.bookmarks));e.forEach((e=>{delete e.id,delete e.index}));const t=(new Date).toJSON().slice(0,-8).replace(/-|:/g,"");this.$refs.downloadLink.download=`bookmarks-${t}.json`,this.$refs.downloadLink.href="data:text/json;charset=utf-8,"+encodeURIComponent(JSON.stringify(e,null,4)),this.$refs.downloadLink.click()},confirmClear(){"CLEAR"===prompt(this.$t("message.clear-warn"))&&this.$store.dispatch("db/bookmarks/clear")},handleAutofill(){this.autofilled||(this.query=this.$refs.text.$refs.input.value,this.autofilled=!0)}}},V=M,U=o(4899),J=o(7854),F=o(8703),W=o(6543),z=o(1147),G=o(9097),H=o(8133),K=o(4356),Q=o(6265),X=o(5011),Y=o(8019),ee=o(4462),te=o(5851),oe=(0,h.Z)(V,r,n,!1,null,null,null),ie=oe.exports;k()(oe,{VApp:U.Z,VAppBar:J.Z,VAppBarNavIcon:F.Z,VBtn:w.Z,VDivider:W.Z,VExpandXTransition:z.Zq,VIcon:y.Z,VList:G.Z,VListItem:H.Z,VListItemAction:K.Z,VListItemContent:Q.km,VListItemTitle:Q.V9,VMain:X.Z,VNavigationDrawer:Y.Z,VSpacer:ee.Z,VTextField:te.Z});var re=o(9227);i.Z.use(re.Z);var ne=new re.Z({icons:{iconfont:"mdi"}}),ae=o(6434);i.Z.config.productionTip=!1;const se=new i.Z({vuetify:ne,store:c.Z,i18n:ae.Z,render:e=>e(ie)});c.Z.dispatch("init").then((()=>se.$mount("#app")))},6434:function(e,t,o){o.d(t,{Z:function(){return a}});var i=o(3115),r=o(7264),n={zh:o(6538),en:o(790)};i.Z.use(r.Z);var a=new r.Z({locale:"en",fallbackLocale:"en",messages:n})},2093:function(e,t,o){o.d(t,{Z:function(){return p}});var i=o(3115),r=o(9361),n=o(8591),a=o(6434),s={namespaced:!0,state:{config:{}},mutations:{update(e,{config:t,write:o}){e.config=t,a.Z.locale=t.locale||navigator.language.slice(0,2),!0===o&&localStorage.setItem("config",JSON.stringify(t))}},actions:{init(e){let t,i=JSON.parse(localStorage.getItem("config"));if(null===i)i=o(6034),localStorage.setItem("config",JSON.stringify(i)),t={text:a.Z.t("message.config-init"),type:"success"};else if(!(0,n.Z)("/config",i,!0)){const e=o(6034);i=o(4718)(e,i),(0,n.Z)("/config",i)?(localStorage.setItem("config",JSON.stringify(i)),t={text:a.Z.t("message.config-update"),type:"success"}):(i=e,t={text:a.Z.t("message.config-error"),type:"error",delay:12e3})}e.commit("update",{config:i}),void 0!==t&&e.commit("alert",t,{root:!0})}}},c=o(5167);const l=e=>e.forEach(((e,t)=>{e.index=t}));var d={namespaced:!0,state:{bookmarks:[]},mutations:{update(e,t){e.bookmarks=t},put(e,t){e.bookmarks.splice(t.index,1,t)},delete(e,t){e.bookmarks.splice(t.index,1)},clear(e){e.bookmarks=[]},reIndex(e){l(e.bookmarks)},reorder(e,{from:t,to:o}){e.bookmarks.splice(t,1,...e.bookmarks.splice(o,1,e.bookmarks[t])),l(e.bookmarks)}},actions:{async init(e,t){if(t){const t=o(1743);t.forEach(((e,t)=>{e.index=t})),await e.dispatch("addAll",t),e.commit("alert",{text:a.Z.t("message.bookmark-init"),type:"success"},{root:!0})}else await e.dispatch("refresh")},async add(e,t){await u.add("bookmarks",t),await e.dispatch("refresh")},async addAll(e,t){await Promise.all(t.map((e=>u.add("bookmarks",e)))),await e.dispatch("refresh")},async clearAndAddAll(e,t){await u.clear("bookmarks"),await e.dispatch("addAll",t)},async put(e,t){await u.put("bookmarks",t),e.commit("put",t)},async putAll(e){await Promise.all(e.state.bookmarks.map((e=>u.put("bookmarks",e))))},async delete(e,t){await u.delete("bookmarks",t.id),e.commit("delete",t),e.commit("reIndex"),await e.dispatch("putAll")},async clear(e){await u.clear("bookmarks"),e.commit("clear")},async refresh(e){e.commit("update",(await u.getAll("bookmarks")).sort(((e,t)=>e.index-t.index)))}}};let u;var m={namespaced:!0,modules:{bookmarks:d},actions:{async init(e){let t=!1;u=await(0,c.X3)("BookmarkDB",2,{upgrade(e,o){o<1&&(t=!0,e.createObjectStore("bookmarks",{autoIncrement:!0,keyPath:"id"})),o<2&&e.createObjectStore("backgrounds",{keyPath:"name"})}}),await e.dispatch("bookmarks/init",t)}}};i.Z.use(r.ZP);var p=new r.ZP.Store({modules:{config:s,db:m},state:{mode:"normal",modeData:void 0,swStatus:"pending",messages:[]},mutations:{switchMode(e,t){e.mode=t.mode||t,e.modeData=t.data},swUpdate(e,t){e.swStatus=t},alert(e,t){"string"===typeof t?e.messages.push({text:t,type:"warning"}):e.messages.push(t)}},actions:{async init(e){await e.dispatch("config/init"),await e.dispatch("db/init")}}})},8591:function(e,t,o){o.d(t,{Z:function(){return s}});var i=o(6095),r=o(2093),n=[o(9270),o(3033),o(7753)];const a=new i.Validator;for(const c of n)a.addSchema(c,c.$id);var s=(e,t,o)=>{const i=n.find((t=>t.$id===e)),s=a.validate(t,i);return!!s.valid||(o||s.errors.forEach((t=>{const o=t.stack.replace(/^instance/,e.slice(1));r.Z.commit("alert",{text:`${o}. Got "${JSON.stringify(t.instance)}"`,type:"warning",break:!0})})),!1)}},7895:function(e,t,o){o.d(t,{Z:function(){return d}});var i=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("img",e._b({attrs:{"data-cy":"website-icon"},on:{error:function(t){e.image.src="img/fallback.png"}}},"img",e.image,!1))},r=[],n=o(9361),a={props:{bookmark:{type:Object,required:!0},size:{type:String,default:"2rem"}},data(){return{image:{}}},computed:{...(0,n.rn)("config",["config"])},watch:{bookmark:{deep:!0,immediate:!0,handler(e){const t=this.config.cors;let o=t+new URL(e.icon||"/favicon.ico",e.url).href;this.config.httpIcon||o.startsWith("https://")||(o="img/fallback.png");let i={src:o,style:{width:this.size,height:this.size}};t&&(i={...i,crossorigin:"anonymous"}),this.image=i}}}},s=a,c=o(6117),l=(0,c.Z)(s,i,r,!1,null,null,null),d=l.exports},1743:function(e){e.exports=JSON.parse('[{"title":"Google","url":"https://www.google.com","search":"/search?q={}"},{"title":"DuckDuckGo","url":"https://duckduckgo.com","search":"/?q={}"},{"title":"Bing","url":"https://www.bing.com","search":"/search?q={}"},{"title":"GitHub","url":"https://github.com","search":"/search?q={}"},{"title":"Pypi","url":"https://pypi.org","search":"/search?q={}","icon":"https://pypi.org/static/images/favicon.6a76275d.ico"},{"title":"Stack Overflow","url":"https://stackoverflow.com"}]')},6034:function(e){e.exports=JSON.parse('{"bgImg":{"url":"https://unsplash.com/photos/uL4CRLxEuvs/download?force=true&w=1920","filter":{"blur":0,"blurColor":"#638da3","contrast":100,"grayscale":0}},"blackText":false,"cors":"","barColor":"#035976","httpIcon":false,"locale":"","dark":false,"linkPreviewKey":"","preferNewTab":false}')},790:function(e){e.exports=JSON.parse('{"menu":{"import":"Import","export":"Export and Download","clear-bookmark":"CLEAR ALL Bookmark","github-link":"Fork me on GitHub","more-config":"More Config","new-bookmark":"Add Bookmark"},"sw":{"active":"active","updated":"click to update","registered":"registered","cached":"app cached","offline":"offline","updateFound":"preparing update","error":"error registering","pending":"pending"},"bookmark":{"name":"Bookmark Name","url":"Website URL","search":"Search Template","icon":"Website Icon"},"message":{"success":"Success!","bookmark-init":"WebNav has added some bookmarks for you","clear-warn":"Type CLEAR to continue. Hope you have a backup.","config-init":"WebNav config initiated","config-error":"Auto upgrade config failed. Falling back to default. You can still download your previous config. To discard your config changes, just apply default config.","import-success":"No bookmark added | Successfully added {n} bookmark | Successfully added {n} bookmarks","config-update":"Auto upgrade config success"},"config":{"title":"Config WebNav","other":{"title":"other","language":"Language","cors":"CORS Proxy","bar-color":"Main app bar color","cors-note":"Use CORS proxy to convert blocked http requests to https.","dark-mode":"Dark Mode","http-icon":"Allow icon served over http","link-preview":"Use LinkPreview.net service to automatically fill in website title and icon. LinkPreview has some limitaions which means it does not work in every situation.","link-preview-key":"LinkPreview Key","prefer-new-tab":"Open web pages in a new tab"},"bg":{"blur":"Blur","title":"Background","contrast":"Contrast","gray":"Gray","padding":"Blur padding color","color":"BG color","example-text":"Example Text ","image-url":"Image URL","black-text":"Black text","img-msg":"Leave it blank to use pure color background","white-text":"White text"},"locale-default":"System default"},"qr":{"title":"Scan QR Code","result":"Scan Result","help":"Help","press":"Press","camera-scan":"open camera and scan","upload-scan":"upload an image and scan","empty-content":"Fail to scan QR code"},"import":{"overwrite":"Overwrite existing bookmarks"},"button":{"cancel":"Cancel","apply":"Apply"}}')},6538:function(e){e.exports=JSON.parse('{"menu":{"import":"导入","export":"导出并下载","clear-bookmark":"清除所有书签","github-link":"去 GitHub 看看本项目","more-config":"更多设置","new-bookmark":"新建书签"},"bookmark":{"name":"书签名称","url":"网址","search":"搜索 URL 模板","icon":"网站图标地址"},"message":{"success":"操作成功！","bookmark-init":"WebNav 已为您添加默认书签","clear-warn":"请输入 CLEAR 以继续。请确认已经备份书签。","config-init":"WebNav 配置加载成功","config-error":"自动更新配置失败，回退至默认配置。您仍然可以下载之前的配置。如果回到决定默认，应用一下默认配置即可。","import-success":"未添加书签 | 已成功添加 {n} 个书签 | 已成功添加 {n} 个书签","config-update":"配置自动升级成功"},"config":{"bg":{"blur":"模糊","color":"背景颜色","contrast":"对比度","gray":"灰度","padding":"模糊衬色","title":"背景","example-text":"这是范例文字 ","image-url":"图片网址","black-text":"黑色文字","img-msg":"留白以使用纯色背景","white-text":"白色文字"},"other":{"title":"其他","cors":"CORS 代理","language":"语言","bar-color":"主应用栏颜色","cors-note":"使用 CORS 代理将使被阻止的 http 请求转换为 https。","dark-mode":"暗色模式","http-icon":"允许加载 http 协议的图标","link-preview":"使用 LinkPreview.net 的服务自动填写网页标题和图标。LinkPreview 也存在一定缺陷，不对任何情况适用。","link-preview-key":"LinkPreview Key","prefer-new-tab":"在新标签页打开网页"},"title":"配置 WebNav","locale-default":"系统默认"},"qr":{"title":"扫描二维码","result":"扫描结果","help":"帮助","press":"点击","camera-scan":"打开摄像头扫描","upload-scan":"扫描上传的图片","empty-content":"扫描二维码失败"},"sw":{"active":"已激活","cached":"应用已缓存","error":"注册出错","offline":"离线","registered":"已注册","updateFound":"正在准备更新","updated":"点击更新","pending":"等待中"},"button":{"cancel":"取消","apply":"应用"}}')},9270:function(e){e.exports=JSON.parse('{"$id":"/bookmark","type":"object","required":["title","url"],"properties":{"title":{"type":"string","minLength":1},"url":{"type":"string","pattern":"^http(s)*:\\\\/\\\\/.+$"},"search":{"type":"string"},"icon":{"type":"string"}},"errorMessage":{"properties":{"title":"Bookmark title is required","url":"Bookmark URL must begin with \\"http(s)://\\""}}}')},3033:function(e){e.exports=JSON.parse('{"$id":"/bookmarks","type":"array","items":{"$ref":"/bookmark"}}')},7753:function(e){e.exports=JSON.parse('{"$id":"/config","type":"object","required":["bgImg","blackText","cors","barColor","httpIcon","locale","dark","linkPreviewKey","preferNewTab"],"additionalProperties":false,"properties":{"bgImg":{"type":"object","required":["url","filter"],"additionalProperties":false,"properties":{"url":{"type":"string"},"filter":{"type":"object","required":["blur","blurColor","contrast","grayscale"],"additionalProperties":false,"properties":{"blur":{"type":"integer","minimum":0,"maximum":10},"blurColor":{"type":"string","pattern":"^#([\\\\da-fA-F]{3}){1,2}$"},"contrast":{"type":"integer","minimum":0,"maximum":200},"grayscale":{"type":"integer","minimum":0,"maximum":100}}}}},"blackText":{"type":"boolean"},"cors":{"description":"CORS proxy","type":"string"},"barColor":{"type":"string","pattern":"^#([\\\\da-fA-F]{3}){1,2}$"},"httpIcon":{"type":"boolean"},"locale":{"type":"string"},"dark":{"type":"boolean"},"linkPreviewKey":{"type":"string"},"preferNewTab":{"type":"boolean"}}}')}},t={};function o(i){var r=t[i];if(void 0!==r)return r.exports;var n=t[i]={id:i,loaded:!1,exports:{}};return e[i].call(n.exports,n,n.exports,o),n.loaded=!0,n.exports}o.m=e,function(){var e=[];o.O=function(t,i,r,n){if(!i){var a=1/0;for(d=0;d<e.length;d++){i=e[d][0],r=e[d][1],n=e[d][2];for(var s=!0,c=0;c<i.length;c++)(!1&n||a>=n)&&Object.keys(o.O).every((function(e){return o.O[e](i[c])}))?i.splice(c--,1):(s=!1,n<a&&(a=n));if(s){e.splice(d--,1);var l=r();void 0!==l&&(t=l)}}return t}n=n||0;for(var d=e.length;d>0&&e[d-1][2]>n;d--)e[d]=e[d-1];e[d]=[i,r,n]}}(),function(){o.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(t,{a:t}),t}}(),function(){o.d=function(e,t){for(var i in t)o.o(t,i)&&!o.o(e,i)&&Object.defineProperty(e,i,{enumerable:!0,get:t[i]})}}(),function(){o.f={},o.e=function(e){return Promise.all(Object.keys(o.f).reduce((function(t,i){return o.f[i](e,t),t}),[]))}}(),function(){o.u=function(e){return"js/"+({6:"import",487:"qrcode",497:"config",703:"reorder",922:"edit"}[e]||e)+"."+{6:"a0bfeb21",211:"46a139e0",352:"6ee25846",487:"22134531",497:"f35e27f2",703:"3ca05bfe",922:"1d6f27d6"}[e]+".js"}}(),function(){o.miniCssF=function(e){return"css/"+({487:"qrcode",497:"config",703:"reorder",922:"edit",998:"chunk-vendors"}[e]||e)+"."+{211:"06ce3b55",487:"17dffd00",497:"9eee0067",703:"72952d04",922:"266abcb3",998:"b376417a"}[e]+".css"}}(),function(){o.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){var e={},t="webnav:";o.l=function(i,r,n,a){if(e[i])e[i].push(r);else{var s,c;if(void 0!==n)for(var l=document.getElementsByTagName("script"),d=0;d<l.length;d++){var u=l[d];if(u.getAttribute("src")==i||u.getAttribute("data-webpack")==t+n){s=u;break}}s||(c=!0,s=document.createElement("script"),s.charset="utf-8",s.timeout=120,o.nc&&s.setAttribute("nonce",o.nc),s.setAttribute("data-webpack",t+n),s.src=i),e[i]=[r];var m=function(t,o){s.onerror=s.onload=null,clearTimeout(p);var r=e[i];if(delete e[i],s.parentNode&&s.parentNode.removeChild(s),r&&r.forEach((function(e){return e(o)})),t)return t(o)},p=setTimeout(m.bind(null,void 0,{type:"timeout",target:s}),12e4);s.onerror=m.bind(null,s.onerror),s.onload=m.bind(null,s.onload),c&&document.head.appendChild(s)}}}(),function(){o.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){o.nmd=function(e){return e.paths=[],e.children||(e.children=[]),e}}(),function(){o.p="/webnav/"}(),function(){var e=function(e,t,o,i){var r=document.createElement("link");r.rel="stylesheet",r.type="text/css";var n=function(n){if(r.onerror=r.onload=null,"load"===n.type)o();else{var a=n&&("load"===n.type?"missing":n.type),s=n&&n.target&&n.target.href||t,c=new Error("Loading CSS chunk "+e+" failed.\n("+s+")");c.code="CSS_CHUNK_LOAD_FAILED",c.type=a,c.request=s,r.parentNode.removeChild(r),i(c)}};return r.onerror=r.onload=n,r.href=t,document.head.appendChild(r),r},t=function(e,t){for(var o=document.getElementsByTagName("link"),i=0;i<o.length;i++){var r=o[i],n=r.getAttribute("data-href")||r.getAttribute("href");if("stylesheet"===r.rel&&(n===e||n===t))return r}var a=document.getElementsByTagName("style");for(i=0;i<a.length;i++){r=a[i],n=r.getAttribute("data-href");if(n===e||n===t)return r}},i=function(i){return new Promise((function(r,n){var a=o.miniCssF(i),s=o.p+a;if(t(a,s))return r();e(i,s,r,n)}))},r={143:0};o.f.miniCss=function(e,t){var o={211:1,487:1,497:1,703:1,922:1};r[e]?t.push(r[e]):0!==r[e]&&o[e]&&t.push(r[e]=i(e).then((function(){r[e]=0}),(function(t){throw delete r[e],t})))}}(),function(){var e={143:0};o.f.j=function(t,i){var r=o.o(e,t)?e[t]:void 0;if(0!==r)if(r)i.push(r[2]);else if(211!=t){var n=new Promise((function(o,i){r=e[t]=[o,i]}));i.push(r[2]=n);var a=o.p+o.u(t),s=new Error,c=function(i){if(o.o(e,t)&&(r=e[t],0!==r&&(e[t]=void 0),r)){var n=i&&("load"===i.type?"missing":i.type),a=i&&i.target&&i.target.src;s.message="Loading chunk "+t+" failed.\n("+n+": "+a+")",s.name="ChunkLoadError",s.type=n,s.request=a,r[1](s)}};o.l(a,c,"chunk-"+t,t)}else e[t]=0},o.O.j=function(t){return 0===e[t]};var t=function(t,i){var r,n,a=i[0],s=i[1],c=i[2],l=0;if(a.some((function(t){return 0!==e[t]}))){for(r in s)o.o(s,r)&&(o.m[r]=s[r]);if(c)var d=c(o)}for(t&&t(i);l<a.length;l++)n=a[l],o.o(e,n)&&e[n]&&e[n][0](),e[a[l]]=0;return o.O(d)},i=self["webpackChunkwebnav"]=self["webpackChunkwebnav"]||[];i.forEach(t.bind(null,0)),i.push=t.bind(null,i.push.bind(i))}();var i=o.O(void 0,[998],(function(){return o(2933)}));i=o.O(i)})();
//# sourceMappingURL=app.fab4d110.js.map