(function(t){function e(e){for(var n,i,s=e[0],c=e[1],l=e[2],d=0,m=[];d<s.length;d++)i=s[d],Object.prototype.hasOwnProperty.call(o,i)&&o[i]&&m.push(o[i][0]),o[i]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(t[n]=c[n]);u&&u(e);while(m.length)m.shift()();return a.push.apply(a,l||[]),r()}function r(){for(var t,e=0;e<a.length;e++){for(var r=a[e],n=!0,s=1;s<r.length;s++){var c=r[s];0!==o[c]&&(n=!1)}n&&(a.splice(e--,1),t=i(i.s=r[0]))}return t}var n={},o={app:0},a=[];function i(e){if(n[e])return n[e].exports;var r=n[e]={i:e,l:!1,exports:{}};return t[e].call(r.exports,r,r.exports,i),r.l=!0,r.exports}i.m=t,i.c=n,i.d=function(t,e,r){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(i.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)i.d(r,n,function(e){return t[e]}.bind(null,n));return r},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/webnav/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],c=s.push.bind(s);s.push=e,s=s.slice();for(var l=0;l<s.length;l++)e(s[l]);var u=c;a.push([0,"chunk-vendors"]),r()})({0:function(t,e,r){t.exports=r("56d7")},"034f":function(t,e,r){"use strict";var n=r("8a23"),o=r.n(n);o.a},"11a9":function(t,e,r){"use strict";var n=r("773b"),o=r.n(n);o.a},"12c5":function(t,e,r){t.exports=r.p+"img/octocat.7b711a49.svg"},3518:function(t,e,r){"use strict";var n=r("6c87"),o=r.n(n);o.a},"3b07":function(t,e,r){},"3fab":function(t){t.exports=JSON.parse('{"$id":"/config","type":"object","required":["bgImg","blackText","cors"],"additionalProperties":false,"properties":{"bgImg":{"type":"object","required":["url","filter"],"additionalProperties":false,"properties":{"url":{"type":"string"},"filter":{"type":"object","required":["blur","contrast","grayscale"],"additionalProperties":false,"properties":{"blur":{"type":"integer","min":0,"max":10},"contrast":{"type":"integer","min":0,"max":200},"grayscale":{"type":"integer","min":0,"max":100}}}}},"blackText":{"type":"boolean"},"cors":{"description":"CORS proxy","type":"string"}}}')},"468b":function(t){t.exports=JSON.parse('{"bgImg":{"url":"back.jpg","filter":{"blur":0,"contrast":100,"grayscale":0}},"blackText":false,"cors":"https://netnr-proxy.cloudno.de/"}')},"56d7":function(t,e,r){"use strict";r.r(e);r("e260"),r("e6cf"),r("cca6"),r("a79d");var n=r("2b0e"),o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-app",[n("v-app-bar",{attrs:{app:"",color:"indigo darken-1",dark:""}},[n("v-app-bar-nav-icon",{on:{click:function(e){t.drawer=!t.drawer}}}),n("v-text-field",{ref:"text",attrs:{value:t.query,"prepend-inner-icon":"search","hide-details":"",outlined:"","single-line":"",dense:"",clearable:""},on:{input:function(e){t.query=e||""}}}),n("v-spacer"),n("v-btn",{attrs:{icon:"",color:"edit"===t.$store.state.mode?"green":void 0},on:{click:function(e){return t.$store.commit("switchMode","edit"===t.$store.state.mode?"normal":"edit")}}},[n("v-icon",[t._v("edit")])],1)],1),n("v-content",[n("div",{staticClass:"bg-image",style:{backgroundImage:"url("+t.$store.state.config.bgImg.url+")",backgroundSize:"cover",backgroundPosition:"center",filter:"blur("+t.$store.state.config.bgImg.filter.blur+"px)\n          contrast("+t.$store.state.config.bgImg.filter.contrast+"%)\n          grayscale("+t.$store.state.config.bgImg.filter.grayscale+"%)"}}),n("div",{staticClass:"mt-3 mx-2 alert-box"},t._l(t.$store.state.messages,(function(t,e){return n("DisAlert",{key:e,attrs:{message:t}})})),1),n("WebNav",{attrs:{query:t.query}}),n("ImportDialog",{attrs:{value:"import-dialog"===t.$store.state.mode},on:{input:function(e){return t.$store.commit("switchMode","normal")}}}),"edit-dialog"===t.$store.state.mode?n("EditDialog",{attrs:{value:"edit-dialog"===t.$store.state.mode},on:{input:function(e){return t.$store.commit("switchMode","normal")}}}):t._e(),"reorder-dialog"===t.$store.state.mode?n("ReorderDialog",{on:{input:function(e){return t.$store.commit("switchMode","normal")}}}):t._e(),"config-dialog"===t.$store.state.mode?n("ConfigDialog",{on:{input:function(e){return t.$store.commit("switchMode","normal")}}}):t._e()],1),n("v-navigation-drawer",{attrs:{app:""},model:{value:t.drawer,callback:function(e){t.drawer=e},expression:"drawer"}},[n("v-list",{attrs:{dense:""}},[n("v-list-item",[n("v-list-item-content",[n("v-list-item-title",{staticClass:"title"},[t._v(" WebNav ")]),n("logo",{staticClass:"text-center",nativeOn:{click:function(e){return t.install.prompt()}}})],1)],1),n("v-divider"),n("v-list-item",{attrs:{link:""},on:{click:function(e){return t.$store.commit("switchMode","import-dialog")}}},[n("v-list-item-action",[n("v-icon",[t._v("add_to_home_screen")])],1),n("v-list-item-content",[n("v-list-item-title",[t._v("Import")])],1)],1),n("v-list-item",{attrs:{link:""},on:{click:t.downloadJSON}},[n("v-list-item-action",[n("v-icon",[t._v("file_download")])],1),n("v-list-item-content",[n("v-list-item-title",[t._v("Export and Download")]),n("a",{ref:"downloadLink",staticClass:"d-none"})],1)],1),n("v-list-item",{attrs:{link:""},on:{click:t.newBookmark}},[n("v-list-item-action",[n("v-icon",[t._v("add")])],1),n("v-list-item-content",[n("v-list-item-title",[t._v("Add Bookmark")])],1)],1),n("v-list-item",{attrs:{link:""},on:{click:function(e){return t.$store.commit("switchMode","config-dialog")}}},[n("v-list-item-action",[n("v-icon",[t._v("settings")])],1),n("v-list-item-content",[n("v-list-item-title",[t._v("More Config")])],1)],1),n("v-list-item",{attrs:{link:""},on:{click:t.confirmClear}},[n("v-list-item-action",[n("v-icon",[t._v("warning")])],1),n("v-list-item-content",[n("v-list-item-title",[t._v("CLEAR ALL Bookmark")])],1)],1),n("v-list-item",{attrs:{link:"",href:"https://github.com/AllanChain/webnav"}},[n("v-list-item-action",[n("img",{staticClass:"grayscale",attrs:{src:r("12c5"),width:"24px"}})]),n("v-list-item-content",[n("v-list-item-title",[t._v("Fork me on GitHub")])],1)],1),n("v-divider"),n("v-list-item",[n("v-list-item-content",[n("span",[n("v-icon",{attrs:{small:""}},[t._v(" settings ")]),t._v(" "+t._s(t.$store.state.swStatus)+" ")],1)])],1)],1)],1)],1)},a=[],i=(r("fb6a"),r("ac1f"),r("5319"),r("159b"),r("bf19"),r("96cf"),r("1da1")),s=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-dialog",{attrs:{value:t.value,"max-width":"350px"},on:{input:function(e){return t.$emit("input",!1)}}},[r("v-card",{staticClass:"elevation-12"},[r("v-card-text",{staticClass:"pa-1"},[r("v-container",[r("v-row",[r("v-text-field",{attrs:{"prepend-inner-icon":"link",color:"purple",label:"JSON URL",placeholder:"https://cors.net/bookmarks.json",dense:"",outlined:"","hide-details":""},model:{value:t.url,callback:function(e){t.url=e},expression:"url"}})],1),r("v-row",[r("v-col",{staticClass:"text-center",attrs:{cols:"4"}},[r("v-btn",{attrs:{fab:"",small:"",color:"indigo lighten-1"},on:{click:function(e){return t.$refs.file.click()}}},[r("v-icon",[t._v("upload_file")])],1),r("input",{ref:"file",attrs:{type:"file",accept:".json",hidden:""},on:{change:t.importFromFile}})],1),r("v-col",{staticClass:"text-center",attrs:{cols:"4"}},[r("v-btn",{attrs:{fab:"",small:"",color:"amber"},on:{click:function(e){return t.emit(!1)}}},[r("v-icon",[t._v("cancel")])],1)],1),r("v-col",{staticClass:"text-center",attrs:{cols:"4"}},[r("v-btn",{attrs:{fab:"",small:"",color:"green"},on:{click:t.importFromCloud}},[r("v-icon",[t._v("done")])],1)],1)],1)],1)],1)],1)],1)},c=[],l=(r("4de4"),r("c740"),r("d3b7"),r("841c"),r("99af"),r("d81d"),r("783b")),u=r.n(l),d=r("dc2d"),m=r.n(d),f=(r("4e827"),r("2af1"),r("3ca3"),r("ddb0"),r("2f62")),p=r("3f4f");n["a"].use(f["a"]);var v,g=function(t){return t.sort((function(t,e){return t.index-e.index}))},b=new f["a"].Store({state:{bookmarks:[],mode:"normal",modeData:void 0,swStatus:"",messages:[],config:{}},mutations:{switchMode:function(t,e){t.mode=e.mode||e,t.modeData=e.data},reorder:function(t,e){var r=e.from,n=e.to,o=Math.sign(r-n);t.bookmarks[r].index=n;for(var a=n;a!==r;a+=o)t.bookmarks[a].index+=o;t.bookmarks=g(t.bookmarks)},swUpdate:function(t,e){t.swStatus=e},updateConfig:function(t,e){t.config=e,localStorage.setItem("config",JSON.stringify(e))},alert:function(t,e){"string"===typeof e?t.messages.push({text:e,type:"warning"}):t.messages.push(e)}},actions:{init:function(){var t=Object(i["a"])(regeneratorRuntime.mark((function t(e){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return e.dispatch("initConfig"),t.next=3,Object(p["a"])("BookmarkDB",1,{upgrade:function(t){t.createObjectStore("bookmarks",{autoIncrement:!0,keyPath:"id"})}});case 3:v=t.sent,e.dispatch("refresh");case 5:case"end":return t.stop()}}),t)})));function e(e){return t.apply(this,arguments)}return e}(),initConfig:function(t){var e=JSON.parse(localStorage.getItem("config"))||{};if(!k("/config",e)){t.commit("alert","Current config is out-dated");var n=r("468b");e=r("3c4e")(n,e),k("/config",e)?t.commit("alert",{text:"Auto update config success",type:"success"}):(t.commit("alert",{text:"Auto update config failed. Fall back to default",type:"error"}),e=n),localStorage.setItem("config",JSON.stringify(e))}t.state.config=e},add:function(){var t=Object(i["a"])(regeneratorRuntime.mark((function t(e,r){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,v.add("bookmarks",r);case 2:e.dispatch("refresh");case 3:case"end":return t.stop()}}),t)})));function e(e,r){return t.apply(this,arguments)}return e}(),addAll:function(){var t=Object(i["a"])(regeneratorRuntime.mark((function t(e,r){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,Promise.all(r.map((function(t){return v.add("bookmarks",t)})));case 2:e.dispatch("refresh");case 3:case"end":return t.stop()}}),t)})));function e(e,r){return t.apply(this,arguments)}return e}(),put:function(){var t=Object(i["a"])(regeneratorRuntime.mark((function t(e,r){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,v.put("bookmarks",r);case 2:e.dispatch("refresh");case 3:case"end":return t.stop()}}),t)})));function e(e,r){return t.apply(this,arguments)}return e}(),putAll:function(){var t=Object(i["a"])(regeneratorRuntime.mark((function t(e){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,Promise.all(e.state.bookmarks.map((function(t){return v.put("bookmarks",t)})));case 2:case"end":return t.stop()}}),t)})));function e(e){return t.apply(this,arguments)}return e}(),delete:function(){var t=Object(i["a"])(regeneratorRuntime.mark((function t(e,r){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,v.delete("bookmarks",r);case 2:e.dispatch("refresh");case 3:case"end":return t.stop()}}),t)})));function e(e,r){return t.apply(this,arguments)}return e}(),clear:function(){var t=Object(i["a"])(regeneratorRuntime.mark((function t(e){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,v.clear("bookmarks");case 2:e.state.bookmarks=[];case 3:case"end":return t.stop()}}),t)})));function e(e){return t.apply(this,arguments)}return e}(),refresh:function(){var t=Object(i["a"])(regeneratorRuntime.mark((function t(e){var r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,v.getAll("bookmarks");case 2:r=t.sent,e.state.bookmarks=g(r);case 4:case"end":return t.stop()}}),t)})));function e(e){return t.apply(this,arguments)}return e}()},modules:{}}),h=new u.a({schemas:r("7971"),allErrors:!0,jsonPointers:!0,verbose:!0});r("de71")(h,{singleError:!0});var k=function(t,e){var r=h.getSchema(t);return!!r(e)||(r.errors.map((function(t){var r="".concat(t.message,'. Got "').concat(m.a.get(e,t.dataPath),'"');b.commit("alert",r)})),!1)},x=function(t,e){return t.url===e.url&&t.search===e.search},w={name:"JsonImport",props:{value:{type:Boolean,default:!1}},data:function(){return{url:""}},methods:{importFromCloud:function(){var t=Object(i["a"])(regeneratorRuntime.mark((function t(){var e,r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,fetch(this.url);case 3:return e=t.sent,t.next=6,e.json();case 6:r=t.sent,this.importBookmarks(r),t.next=13;break;case 10:t.prev=10,t.t0=t["catch"](0),alert(t.t0);case 13:case"end":return t.stop()}}),t,this,[[0,10]])})));function e(){return t.apply(this,arguments)}return e}(),importFromFile:function(t){var e=this,r=t.target.files[0],n=new FileReader;n.onload=function(){var t=Object(i["a"])(regeneratorRuntime.mark((function t(r){var n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return n=r.target.result,t.next=3,e.importBookmarks(JSON.parse(n));case 3:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),n.readAsText(r)},importBookmarks:function(){var t=Object(i["a"])(regeneratorRuntime.mark((function t(e){var r=this;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(k("/bookmarks",e)){t.next=3;break}return this.$emit("input",!1),t.abrupt("return");case 3:return e=e.filter((function(t,e,n){return n.findIndex((function(e){return x(e,t)}))===e&&-1===r.$store.state.bookmarks.findIndex((function(e){return x(e,t)}))})),e.forEach((function(t,e){return t.index=e+r.$store.state.bookmarks.length})),t.next=7,this.$store.dispatch("addAll",e);case 7:this.$store.commit("alert",{text:"Successfully added ".concat(e.length," bookmark(s)"),type:"success"}),this.$emit("input",!1);case 9:case"end":return t.stop()}}),t,this)})));function e(e){return t.apply(this,arguments)}return e}()}},y=w,$=r("2877"),O=r("6544"),_=r.n(O),j=r("8336"),S=r("b0af"),C=r("99d9"),V=r("62ad"),I=r("a523"),R=r("169a"),T=r("132d"),D=r("0fd9"),N=r("8654"),P=Object($["a"])(y,s,c,!1,null,null,null),E=P.exports;_()(P,{VBtn:j["a"],VCard:S["a"],VCardText:C["a"],VCol:V["a"],VContainer:I["a"],VDialog:R["a"],VIcon:T["a"],VRow:D["a"],VTextField:N["a"]});var L=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-dialog",{attrs:{value:!0},on:{input:function(e){return t.$emit("input",!1)}}},[r("v-card",{staticClass:"ma-2"},[r("v-toolbar",{attrs:{color:"indigo",dark:"",dense:""}},[r("v-toolbar-title",[r("WebsiteIcon",{attrs:{bookmark:t.bookmark,size:"1.2rem"}}),t._v(" "+t._s(t.bookmark.title)+" ")],1),r("v-spacer"),r("v-btn",{attrs:{icon:"",large:""},on:{click:t.done}},[r("v-icon",{attrs:{color:"green lighten-2"}},[t._v(" check ")])],1),t.bookmark.id?r("v-btn",{attrs:{icon:"",large:""},on:{click:t.deleteThis}},[r("v-icon",{attrs:{color:"red lighten-2"}},[t._v(" delete ")])],1):t._e(),t.bookmark.id?r("v-btn",{attrs:{icon:"",large:""},on:{click:function(e){return t.$store.commit("switchMode",{mode:"reorder-dialog",data:t.bookmark.index})}}},[r("v-icon",{attrs:{color:"yellow lighten-2"}},[t._v(" swap_horiz ")])],1):t._e()],1),r("v-card-text",{staticClass:"mt-4"},[r("v-text-field",{attrs:{"prepend-inner-icon":"bookmark",label:"Bookmark Name",placeholder:"Example",outlined:"",dense:""},model:{value:t.bookmark.title,callback:function(e){t.$set(t.bookmark,"title",e)},expression:"bookmark.title"}}),r("v-text-field",{attrs:{"prepend-inner-icon":"language",label:"Website URL",placeholder:"https://example.com",outlined:"",dense:""},model:{value:t.bookmark.url,callback:function(e){t.$set(t.bookmark,"url",e)},expression:"bookmark.url"}}),r("v-text-field",{attrs:{"prepend-inner-icon":"search",label:"Search Template",placeholder:"/search?wd={}",outlined:"",dense:""},model:{value:t.bookmark.search,callback:function(e){t.$set(t.bookmark,"search",e)},expression:"bookmark.search"}}),r("v-text-field",{attrs:{"prepend-inner-icon":"adb",label:"Website Icon",placeholder:"/favicon.ico",outlined:"",dense:""},model:{value:t.bookmark.icon,callback:function(e){t.$set(t.bookmark,"icon",e)},expression:"bookmark.icon"}})],1)],1)],1)},A=[],B=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("img",t._b({on:{error:function(e){t.image.src="img/icons/favicon-32x32.png"}}},"img",t.image,!1))},J=[],M=(r("a4d3"),r("e439"),r("dbb4"),r("b64b"),r("ade3")),q=r("0b16"),F=r.n(q);function U(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function W(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?U(Object(r),!0).forEach((function(e){Object(M["a"])(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):U(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}var z={props:{bookmark:{type:Object,required:!0},size:{type:String,default:"2rem"}},data:function(){var t=this.$store.state.config.cors,e={src:t+F.a.resolve(this.bookmark.url,this.bookmark.icon||"/favicon.ico"),style:{width:this.size,height:this.size}};return t&&(e=W({},e,{crossorigin:"anonymous"})),{image:e}}},G=z,H=Object($["a"])(G,B,J,!1,null,null,null),K=H.exports,Q={components:{WebsiteIcon:K},props:{value:{type:Boolean,required:!0}},data:function(){return{bookmark:JSON.parse(JSON.stringify(this.$store.state.modeData))}},methods:{done:function(){k("/bookmark",this.bookmark)&&(this.bookmark.id?this.$store.dispatch("put",this.bookmark):this.$store.dispatch("add",this.bookmark),this.$store.commit("alert",{text:"Success!",type:"success"}),this.$emit("input",!1))},deleteThis:function(){this.$store.dispatch("delete",this.bookmark.id),this.$emit("input",!1)}}},X=Q,Y=r("2fa4"),Z=r("71d9"),tt=r("2a7f"),et=Object($["a"])(X,L,A,!1,null,null,null),rt=et.exports;_()(et,{VBtn:j["a"],VCard:S["a"],VCardText:C["a"],VDialog:R["a"],VIcon:T["a"],VSpacer:Y["a"],VTextField:N["a"],VToolbar:Z["a"],VToolbarTitle:tt["a"]});var nt=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-overlay",{attrs:{opacity:"0.7"},nativeOn:{click:function(e){return t.closeDialog(e)}}},[r("v-slider",{attrs:{value:t.index,color:"purple","track-color":"indigo","thumb-label":"always",min:0,max:t.$store.state.bookmarks.length-1},on:{input:t.reorder}}),r("div",{staticStyle:{width:"90vw"}})],1)},ot=[],at={data:function(){return{index:this.$store.state.modeData}},methods:{reorder:function(t){this.$store.commit("reorder",{from:this.index,to:t}),this.index=t},closeDialog:function(){var t=Object(i["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return this.$store.commit("switchMode","normal"),t.next=3,this.$store.dispatch("putAll");case 3:this.$store.commit("alert",{text:"Reordered!",type:"success"});case 4:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}()}},it=at,st=r("a797"),ct=r("ba0d"),lt=Object($["a"])(it,nt,ot,!1,null,null,null),ut=lt.exports;_()(lt,{VOverlay:st["a"],VSlider:ct["a"]});var dt=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-dialog",{attrs:{value:"true",fullscreen:""},on:{input:function(e){return t.$emit("input",!1)}}},[r("v-card",[r("v-card-title",{staticClass:"pa-0"},[r("v-toolbar",{attrs:{color:"indigo",dark:"",dense:""}},[r("v-toolbar-title",[t._v("Config WebNav")]),r("v-spacer"),r("v-btn",{attrs:{icon:"",large:""},on:{click:t.done}},[r("v-icon",{attrs:{color:"green lighten-2"}},[t._v(" check ")])],1),r("v-btn",{attrs:{icon:"",large:""},on:{click:function(e){return t.$emit("input",!1)}}},[r("v-icon",{attrs:{color:"yellow lighten-2"}},[t._v(" cancel ")])],1)],1)],1),r("v-card-text",{staticClass:"mt-4"},[r("v-text-field",{attrs:{"prepend-inner-icon":"image",label:"Image URL",placeholder:"back.jpg",outlined:"",dense:""},model:{value:t.config.bgImg.url,callback:function(e){t.$set(t.config.bgImg,"url",e)},expression:"config.bgImg.url"}}),r("v-row",{attrs:{"no-gutters":""}},[r("v-col",{attrs:{cols:"3",sm:"2",md:"1"}},[r("v-label",[t._v("Blur")])],1),r("v-col",{attrs:{cols:"9",sm:"10",md:"11"}},[r("v-slider",{attrs:{min:"0",max:"20","thumb-label":"","hide-details":""},model:{value:t.config.bgImg.filter.blur,callback:function(e){t.$set(t.config.bgImg.filter,"blur",e)},expression:"config.bgImg.filter.blur"}})],1)],1),r("v-row",{attrs:{"no-gutters":""}},[r("v-col",{attrs:{cols:"3",sm:"2",md:"1"}},[r("v-label",[t._v("Contrast")])],1),r("v-col",{attrs:{cols:"9",sm:"10",md:"11"}},[r("v-slider",{attrs:{min:"0",max:"200","thumb-label":"","hide-details":""},model:{value:t.config.bgImg.filter.contrast,callback:function(e){t.$set(t.config.bgImg.filter,"contrast",e)},expression:"config.bgImg.filter.contrast"}})],1)],1),r("v-row",{attrs:{"no-gutters":""}},[r("v-col",{attrs:{cols:"3",sm:"2",md:"1"}},[r("v-label",[t._v("Gray")])],1),r("v-col",{attrs:{cols:"9",sm:"10",md:"11"}},[r("v-slider",{attrs:{min:"0",max:"100","thumb-label":"","hide-details":""},model:{value:t.config.bgImg.filter.grayscale,callback:function(e){t.$set(t.config.bgImg.filter,"grayscale",e)},expression:"config.bgImg.filter.grayscale"}})],1)],1),r("v-switch",{staticClass:"mt-0",attrs:{label:t.config.blackText?"Black text":"White text"},model:{value:t.config.blackText,callback:function(e){t.$set(t.config,"blackText",e)},expression:"config.blackText"}}),r("div",{staticStyle:{width:"100%",height:"180px",position:"relative",overflow:"hidden"}},[r("div",{staticClass:"bg-image",style:{backgroundImage:"url("+t.config.bgImg.url+")",backgroundSize:"cover",backgroundPosition:"center",filter:"blur("+t.config.bgImg.filter.blur+"px)\n          contrast("+t.config.bgImg.filter.contrast+"%)\n          grayscale("+t.config.bgImg.filter.grayscale+"%)"}}),r("div",{staticClass:"ma-1",style:{position:"absolute",color:t.config.blackText?"#000":"#eee",textShadow:"1px 1px 3px\n          "+(t.config.blackText?"#eee":"#000")}},[t._v(" "+t._s("Example Text ".repeat(30))+" ")])]),r("v-divider",{staticClass:"my-1"}),r("v-text-field",{attrs:{"prepend-inner-icon":"flight_takeoff",label:"CORS Proxy",placeholder:"https://netnr-proxy.cloudno.de/",outlined:"",dense:""},model:{value:t.config.cors,callback:function(e){t.$set(t.config,"cors",e)},expression:"config.cors"}})],1)],1)],1)},mt=[],ft={data:function(){return{config:JSON.parse(JSON.stringify(this.$store.state.config))}},methods:{done:function(){k("/config",this.config)&&(this.$store.commit("updateConfig",this.config),this.$emit("input",!1))}}},pt=ft,vt=(r("f91e"),r("ce7e")),gt=r("24c9"),bt=r("b73d"),ht=Object($["a"])(pt,dt,mt,!1,null,null,null),kt=ht.exports;_()(ht,{VBtn:j["a"],VCard:S["a"],VCardText:C["a"],VCardTitle:C["b"],VCol:V["a"],VDialog:R["a"],VDivider:vt["a"],VIcon:T["a"],VLabel:gt["a"],VRow:D["a"],VSlider:ct["a"],VSpacer:Y["a"],VSwitch:bt["a"],VTextField:N["a"],VToolbar:Z["a"],VToolbarTitle:tt["a"]});var xt=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("div",{staticClass:"text-center pt-5"},t._l(t.$store.state.bookmarks,(function(e){return r("div",{key:e.id,staticClass:"box"},[r("div",[r("v-overlay",{attrs:{absolute:"",opacity:"0.1","z-index":"2",value:"edit"===t.$store.state.mode}},[r("v-btn",{attrs:{color:"#2196f390",fab:"","x-small":""},on:{click:function(r){return t.$store.commit("switchMode",{mode:"edit-dialog",data:e})}}},[r("v-icon",{attrs:{color:"white"}},[t._v(" edit ")])],1)],1),r("v-overlay",{attrs:{absolute:"",opacity:"0.1","z-index":"2",value:"normal"===t.$store.state.mode&&t.query&&!!e.search}},[r("v-btn",{attrs:{color:"#2196f390",fab:"","x-small":""},on:{click:function(r){return t.goSearch(e)}}},[r("v-icon",{attrs:{color:"white"}},[t._v(" search ")])],1)],1),r("WebsiteIcon",{attrs:{bookmark:e},nativeOn:{click:function(r){return t.goURL(e.url)}}})],1),r("div",{staticClass:"url",style:{color:t.$store.state.config.blackText?"#000":"#eee",textShadow:"1px 1px 3px\n          "+(t.$store.state.config.blackText?"#eee":"#000")}},[t._v(" "+t._s(e.title)+" ")])])})),0)])},wt=[],yt={components:{WebsiteIcon:K},props:{query:{type:String,required:!0}},methods:{goSearch:function(t){this.goURL(F.a.resolve(t.url,t.search.replace("{}",this.query)))},goURL:function(t){window.location.href=t}}},$t=yt,Ot=(r("3518"),Object($["a"])($t,xt,wt,!1,null,null,null)),_t=Ot.exports;_()(Ot,{VBtn:j["a"],VIcon:T["a"],VOverlay:st["a"]});var jt=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},St=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"logo py-4"},[t._v(" 4 "),n("img",{attrs:{src:r("12c5"),width:"50"}}),t._v(" 4 ")])}],Ct={},Vt=Ct,It=(r("11a9"),Object($["a"])(Vt,jt,St,!1,null,null,null)),Rt=It.exports,Tt=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-alert",{staticStyle:{"word-break":"break-all"},attrs:{dense:"",dismissible:"",border:"left",type:t.message.type},model:{value:t.show,callback:function(e){t.show=e},expression:"show"}},[t._v(" "+t._s(t.message.text)+" ")])},Dt=[],Nt={props:{message:{type:Object,required:!0}},data:function(){return{show:!0}},created:function(){setTimeout(this.close.bind(this),6e3)},methods:{close:function(){this.show=!1}}},Pt=Nt,Et=r("0798"),Lt=Object($["a"])(Pt,Tt,Dt,!1,null,null,null),At=Lt.exports;_()(Lt,{VAlert:Et["a"]});var Bt={name:"App",components:{ImportDialog:E,EditDialog:rt,ReorderDialog:ut,ConfigDialog:kt,WebNav:_t,Logo:Rt,DisAlert:At},data:function(){return{install:null,importDialog:!1,query:"",drawer:!1}},created:function(){var t=Object(i["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return window.addEventListener("beforeinstallprompt",this.installPrompt),t.next=3,this.$store.dispatch("init");case 3:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}(),destroyed:function(){window.removeEventListener("beforeinstallprompt",this.installPrompt)},methods:{installPrompt:function(t){this.install=t},newBookmark:function(){this.$store.commit({type:"switchMode",mode:"edit-dialog",data:{title:"",url:"",index:this.$store.state.bookmarks.length}})},downloadJSON:function(){var t=JSON.parse(JSON.stringify(this.$store.state.bookmarks));t.forEach((function(t){delete t.id,delete t.index}));var e=(new Date).toJSON().slice(0,-8).replace(/-|:/g,"");this.$refs.downloadLink.download="bookmarks-".concat(e,".json"),this.$refs.downloadLink.href="data:text/json;charset=utf-8,"+encodeURIComponent(JSON.stringify(t,null,4)),this.$refs.downloadLink.click()},confirmClear:function(){"CLEAR"===prompt("Type CLEAR to continue. Hope you have a backup.")&&this.$store.dispatch("clear")}}},Jt=Bt,Mt=(r("034f"),r("7496")),qt=r("40dc"),Ft=r("5bc1"),Ut=r("a75b"),Wt=r("8860"),zt=r("da13"),Gt=r("1800"),Ht=r("5d23"),Kt=r("f774"),Qt=Object($["a"])(Jt,o,a,!1,null,null,null),Xt=Qt.exports;_()(Qt,{VApp:Mt["a"],VAppBar:qt["a"],VAppBarNavIcon:Ft["a"],VBtn:j["a"],VContent:Ut["a"],VDivider:vt["a"],VIcon:T["a"],VList:Wt["a"],VListItem:zt["a"],VListItemAction:Gt["a"],VListItemContent:Ht["a"],VListItemTitle:Ht["b"],VNavigationDrawer:Kt["a"],VSpacer:Y["a"],VTextField:N["a"]});var Yt=r("9483");Object(Yt["a"])("".concat("/webnav/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){b.commit("swUpdate","registered"),console.log("Service worker has been registered.")},cached:function(){b.commit("swUpdate","cached"),console.log("Content has been cached for offline use.")},updatefound:function(){b.commit("swUpdate","updateFound"),console.log("New content is downloading.")},updated:function(){b.commit("swUpdate","updated"),console.log("New content is available; please refresh.")},offline:function(){b.commit("swUpdate","offline"),console.log("No internet connection found. App is running in offline mode.")},error:function(t){b.commit("swUpdate","error"),console.error("Error during service worker registration:",t)}});var Zt=r("f309");r("d1e78");n["a"].use(Zt["a"]);var te=new Zt["a"]({icons:{iconfont:"md"}});n["a"].config.productionTip=!1,new n["a"]({vuetify:te,store:b,render:function(t){return t(Xt)}}).$mount("#app")},"6c87":function(t,e,r){},"773b":function(t,e,r){},7971:function(t,e,r){"use strict";r.r(e),e["default"]=[r("bd48"),r("ce37"),r("3fab")]},"8a23":function(t,e,r){},bd48:function(t){t.exports=JSON.parse('{"$id":"/bookmark","type":"object","required":["title","url"],"properties":{"title":{"type":"string","minLength":1},"url":{"type":"string","pattern":"^http(s)*:\\\\/\\\\/.+$"},"search":{"type":"string"},"icon":{"type":"string"}},"errorMessage":{"properties":{"title":"Bookmark title is required","url":"Bookmark URL must begin with \\"http(s)://\\""}}}')},ce37:function(t){t.exports=JSON.parse('{"$id":"/bookmarks","type":"array","items":{"$ref":"/bookmark"}}')},f91e:function(t,e,r){"use strict";var n=r("3b07"),o=r.n(n);o.a}});
//# sourceMappingURL=app.622304bd.js.map