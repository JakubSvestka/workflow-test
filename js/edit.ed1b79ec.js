(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["edit"],{"13d7":function(t,e,r){"use strict";var n=r("8845"),o=r("a1c1"),a=r("4bf3"),i=r("7e63"),s=r("a784"),u=r("9901"),h=r("d5f0");function l(t,e,r){if(t){var n=c(t,e),o=h.resolveDotSegments(n.path.absolute.array);return n.path.absolute.array=o,n.path.absolute.string="/"+h.join(o),n}return r}function c(t,e){var r=u(t,e);return!1===r.valid||(o(r,e),i(r,e),a(r,e),s(r,e),n(r)),r}t.exports={from:l,to:c}},"14ad":function(t,e,r){"use strict";function n(t){if(t instanceof Object){var e=t instanceof Array?[]:{};for(var r in t)t.hasOwnProperty(r)&&(e[r]=n(t[r]));return e}return t}function o(t){return!!t&&"object"===typeof t&&t.constructor===Object}function a(t,e){if(t instanceof Object&&e instanceof Object)for(var r in e)e.hasOwnProperty(r)&&(t[r]=e[r]);return t}t.exports={clone:n,isPlainObject:o,shallowMerge:a}},3610:function(t,e){t.exports=function(t){return t.webpackPolyfill||(t.deprecate=function(){},t.paths=[],t.children||(t.children=[]),Object.defineProperty(t,"loaded",{enumerable:!0,get:function(){return t.l}}),Object.defineProperty(t,"id",{enumerable:!0,get:function(){return t.i}}),t.webpackPolyfill=1),t}},"3a70":function(t,e,r){"use strict";var n=function(t){switch(typeof t){case"string":return t;case"boolean":return t?"true":"false";case"number":return isFinite(t)?t:"";default:return""}};t.exports=function(t,e,r,s){return e=e||"&",r=r||"=",null===t&&(t=void 0),"object"===typeof t?a(i(t),(function(i){var s=encodeURIComponent(n(i))+r;return o(t[i])?a(t[i],(function(t){return s+encodeURIComponent(n(t))})).join(e):s+encodeURIComponent(n(t[i]))})).join(e):s?encodeURIComponent(n(s))+r+encodeURIComponent(n(t)):""};var o=Array.isArray||function(t){return"[object Array]"===Object.prototype.toString.call(t)};function a(t,e){if(t.map)return t.map(e);for(var r=[],n=0;n<t.length;n++)r.push(e(t[n],n));return r}var i=Object.keys||function(t){var e=[];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.push(r);return e}},"3b38":function(t,e,r){"use strict";var n=r("eeb9"),o=r("b4da"),a=r("98d6"),i=r("14ad"),s=r("13d7"),u=r("f09b");function h(t,e){this.options=a(e,{defaultPorts:{ftp:21,http:80,https:443},directoryIndexes:["index.html"],ignore_www:!1,output:h.SHORTEST,rejectedSchemes:["data","javascript","mailto"],removeAuth:!1,removeDirectoryIndexes:!0,removeEmptyQueries:!1,removeRootTrailingSlash:!0,schemeRelative:!0,site:void 0,slashesDenoteHost:!0}),this.from=s.from(t,this.options,null)}h.prototype.relate=function(t,e,r){if(i.isPlainObject(e)?(r=e,e=t,t=null):e||(e=t,t=null),r=a(r,this.options),t=t||r.site,t=s.from(t,r,this.from),!t||!t.href)throw new Error("from value not defined.");if(t.extra.hrefInfo.minimumPathOnly)throw new Error("from value supplied is not absolute: "+t.href);return e=s.to(e,r),!1===e.valid?e.href:(e=u(t,e,r),e=o(e,r),e)},h.relate=function(t,e,r){return(new h).relate(t,e,r)},i.shallowMerge(h,n),t.exports=h},4945:function(t,e,r){"use strict";function n(t,e){return Object.prototype.hasOwnProperty.call(t,e)}t.exports=function(t,e,r,a){e=e||"&",r=r||"=";var i={};if("string"!==typeof t||0===t.length)return i;var s=/\+/g;t=t.split(e);var u=1e3;a&&"number"===typeof a.maxKeys&&(u=a.maxKeys);var h=t.length;u>0&&h>u&&(h=u);for(var l=0;l<h;++l){var c,m,f,p,d=t[l].replace(s,"%20"),v=d.indexOf(r);v>=0?(c=d.substr(0,v),m=d.substr(v+1)):(c=d,m=""),f=decodeURIComponent(c),p=decodeURIComponent(m),n(i,f)?o(i[f])?i[f].push(p):i[f]=[i[f],p]:i[f]=p}return i};var o=Array.isArray||function(t){return"[object Array]"===Object.prototype.toString.call(t)}},"4bf3":function(t,e,r){"use strict";function n(t,e){var r=!1;return e.directoryIndexes.every((function(e){return e!==t||(r=!0,!1)})),r}function o(t,e){var r=t.path.absolute.string;if(r){var o=r.lastIndexOf("/");if(o>-1){if(++o<r.length){var i=r.substr(o);"."!==i&&".."!==i?(t.resource=i,r=r.substr(0,o)):r+="/"}t.path.absolute.string=r,t.path.absolute.array=a(r)}else"."===r||".."===r?(r+="/",t.path.absolute.string=r,t.path.absolute.array=a(r)):(t.resource=r,t.path.absolute.string=null);t.extra.resourceIsIndex=n(t.resource,e)}}function a(t){if("/"!==t){var e=[];return t.split("/").forEach((function(t){""!==t&&e.push(t)})),e}return[]}t.exports=o},"518c":function(t,e,r){"use strict";var n=r("b37e"),o=r("14ad"),a=r("d5f0");function i(t,e,r){n.upToPath(t,e,r),t.extra.relation.minimumScheme&&(t.scheme=e.scheme),t.extra.relation.minimumAuth&&(t.auth=e.auth),t.extra.relation.minimumHost&&(t.host=o.clone(e.host)),t.extra.relation.minimumPort&&u(t,e),t.extra.relation.minimumScheme&&s(t,e),n.pathOn(t,e,r),t.extra.relation.minimumResource&&h(t,e),t.extra.relation.minimumQuery&&(t.query=o.clone(e.query)),t.extra.relation.minimumHash&&(t.hash=e.hash)}function s(t,e){if(t.extra.relation.maximumHost||!t.extra.hrefInfo.minimumResourceOnly){var r=t.path.absolute.array,n="/";r?(t.extra.hrefInfo.minimumPathOnly&&0!==t.path.absolute.string.indexOf("/")&&(r=e.path.absolute.array.concat(r)),r=a.resolveDotSegments(r),n+=a.join(r)):r=[],t.path.absolute.array=r,t.path.absolute.string=n}else t.path=o.clone(e.path)}function u(t,e){t.port=e.port,t.extra.portIsDefault=e.extra.portIsDefault}function h(t,e){t.resource=e.resource,t.extra.resourceIsIndex=e.extra.resourceIsIndex}t.exports=i},"5cec":function(t,e,r){"use strict";t.exports={isString:function(t){return"string"===typeof t},isObject:function(t){return"object"===typeof t&&null!==t},isNull:function(t){return null===t},isNullOrUndefined:function(t){return null==t}}},"6cb0":function(t,e,r){"use strict";e.decode=e.parse=r("4945"),e.encode=e.stringify=r("3a70")},"7e63":function(t,e,r){"use strict";function n(t,e){var r=-1;for(var n in e.defaultPorts)if(n===t.scheme&&e.defaultPorts.hasOwnProperty(n)){r=e.defaultPorts[n];break}r>-1&&(r=r.toString(),null===t.port&&(t.port=r),t.extra.portIsDefault=t.port===r)}t.exports=n},8845:function(t,e,r){"use strict";function n(t){var e=!t.scheme&&!t.auth&&!t.host.full&&!t.port,r=e&&!t.path.absolute.string,n=r&&!t.resource,o=n&&!t.query.string.full.length,a=o&&!t.hash;t.extra.hrefInfo.minimumPathOnly=e,t.extra.hrefInfo.minimumResourceOnly=r,t.extra.hrefInfo.minimumQueryOnly=n,t.extra.hrefInfo.minimumHashOnly=o,t.extra.hrefInfo.empty=a}t.exports=n},9052:function(t,e,r){"use strict";r.r(e);var n=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-dialog",{attrs:{value:!0,"max-width":"500",scrollable:""},on:{input:function(e){return t.$emit("input",!1)}}},[r("v-card",[r("v-card-title",{staticClass:"pa-0"},[r("v-toolbar",{attrs:{color:"indigo",dark:"",dense:""}},[r("v-toolbar-title",[r("WebsiteIcon",{attrs:{bookmark:t.bookmark,size:"1.2rem"}}),t._v(" "+t._s(t.bookmark.title)+" ")],1),r("v-spacer"),r("v-btn",{attrs:{icon:"",large:""},on:{click:t.done}},[r("v-icon",{attrs:{color:"green lighten-2"}},[t._v(" mdi-check-bold ")])],1),t.bookmark.id?r("v-btn",{attrs:{icon:"",large:""},on:{click:t.deleteThis}},[r("v-icon",{attrs:{color:"red lighten-2"}},[t._v(" mdi-delete ")])],1):t._e(),t.bookmark.id?r("v-btn",{attrs:{icon:"",large:""},on:{click:function(e){return t.$store.commit("switchMode",{mode:"reorder-dialog",data:t.bookmark.index})}}},[r("v-icon",{attrs:{color:"yellow lighten-2"}},[t._v(" mdi-swap-horizontal ")])],1):t._e()],1)],1),r("v-card-text",{staticClass:"pt-4 pb-0"},[r("v-text-field",{attrs:{"prepend-inner-icon":"mdi-bookmark",label:t.$t("bookmark.name"),placeholder:"Example",outlined:"",dense:""},model:{value:t.bookmark.title,callback:function(e){t.$set(t.bookmark,"title",e)},expression:"bookmark.title"}}),r("v-text-field",{attrs:{"prepend-inner-icon":"mdi-web",label:t.$t("bookmark.url"),placeholder:"https://example.com",outlined:"",dense:""},model:{value:t.bookmark.url,callback:function(e){t.$set(t.bookmark,"url",e)},expression:"bookmark.url"}}),r("v-text-field",{attrs:{"prepend-inner-icon":"mdi-magnify",label:t.$t("bookmark.search"),placeholder:"/search?wd={}",outlined:"",dense:""},model:{value:t.bookmark.search,callback:function(e){t.$set(t.bookmark,"search",e)},expression:"bookmark.search"}}),r("v-text-field",{attrs:{"prepend-inner-icon":"mdi-earth",label:t.$t("bookmark.icon"),placeholder:"/favicon.ico",outlined:"",dense:""},model:{value:t.bookmark.icon,callback:function(e){t.$set(t.bookmark,"icon",e)},expression:"bookmark.icon"}})],1),t.$store.state.config.linkPreviewKey?r("v-card-actions",{staticClass:"pt-0"},[r("v-spacer"),r("v-btn",{attrs:{text:"",color:"primary",disabled:!t.bookmark.url||t.linkPreviewLoading},on:{click:t.linkPreview}},[t._v(" LinkPreview "),t.linkPreviewLoading?r("span",[t._v("...")]):r("span",[t._v("!")])])],1):t._e()],1)],1)},o=[],a=(r("611c"),r("6607"),r("c5d7"),r("3170"),r("c09a"),r("14ca")),i=r("3b38"),s=r.n(i),u=r("03fd"),h=r("ea45"),l={components:{WebsiteIcon:u["a"]},data:function(){return{bookmark:JSON.parse(JSON.stringify(this.$store.state.modeData)),linkPreviewLoading:!1}},methods:{done:function(){Object(h["a"])("/bookmark",this.bookmark)&&(this.bookmark.id?this.$store.dispatch("put",this.bookmark):this.$store.dispatch("add",this.bookmark),this.$store.commit("alert",{text:this.$t("message.success"),type:"success"}),this.$emit("input",!1))},deleteThis:function(){this.$store.dispatch("delete",this.bookmark),this.$emit("input",!1)},linkPreview:function(){var t=this;return Object(a["a"])(regeneratorRuntime.mark((function e(){var r,n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t.linkPreviewLoading=!0,e.next=3,fetch("https://api.linkpreview.net",{method:"POST",mode:"cors",body:JSON.stringify({key:t.$store.state.config.linkPreviewKey,q:t.bookmark.url})});case 3:return r=e.sent,e.next=6,r.json();case 6:if(n=e.sent,t.linkPreviewLoading=!1,!n.error){e.next=11;break}return t.$store.commit("alert",{text:"".concat(n.error,": ").concat(n.description),type:"error"}),e.abrupt("return");case 11:n.title&&(t.bookmark.title=n.title),n.image&&(t.bookmark.icon=s.a.relate(t.bookmark.url,n.image));case 13:case"end":return e.stop()}}),e)})))()}}},c=l,m=r("0199"),f=r("935c"),p=r.n(f),d=r("1e14"),v=r("bd75"),b=r("ebd0"),x=r("e25a"),y=r("0fb7"),g=r("00a0"),k=r("3c2c"),O=r("8ec1"),w=r("ada1"),I=Object(m["a"])(c,n,o,!1,null,null,null);e["default"]=I.exports;p()(I,{VBtn:d["a"],VCard:v["a"],VCardActions:b["a"],VCardText:b["b"],VCardTitle:b["c"],VDialog:x["a"],VIcon:y["a"],VSpacer:g["a"],VTextField:k["a"],VToolbar:O["a"],VToolbarTitle:w["a"]})},"98d6":function(t,e,r){"use strict";var n=r("14ad");function o(t,e){if(n.isPlainObject(t)){var r={};for(var o in e)e.hasOwnProperty(o)&&(void 0!==t[o]?r[o]=a(t[o],e[o]):r[o]=e[o]);return r}return e}function a(t,e){return e instanceof Object&&t instanceof Object?e instanceof Array&&t instanceof Array?e.concat(t):n.shallowMerge(t,e):t}t.exports=o},9901:function(t,e,r){"use strict";var n=r("f0f5").parse;function o(t){var e=t.protocol;return e&&e.indexOf(":")===e.length-1&&(e=e.substr(0,e.length-1)),t.host={full:t.hostname,stripped:null},t.path={absolute:{array:null,string:t.pathname},relative:{array:null,string:null}},t.query={object:t.query,string:{full:null,stripped:null}},t.extra={hrefInfo:{minimumPathOnly:null,minimumResourceOnly:null,minimumQueryOnly:null,minimumHashOnly:null,empty:null,separatorOnlyQuery:"?"===t.search},portIsDefault:null,relation:{maximumScheme:null,maximumAuth:null,maximumHost:null,maximumPort:null,maximumPath:null,maximumResource:null,maximumQuery:null,maximumHash:null,minimumScheme:null,minimumAuth:null,minimumHost:null,minimumPort:null,minimumPath:null,minimumResource:null,minimumQuery:null,minimumHash:null,overridesQuery:null},resourceIsIndex:null,slashes:t.slashes},t.resource=null,t.scheme=e,delete t.hostname,delete t.pathname,delete t.protocol,delete t.search,delete t.slashes,t}function a(t,e){var r=!0;return e.rejectedSchemes.every((function(e){return r=!(0===t.indexOf(e+":")),r})),r}function i(t,e){return a(t,e)?o(n(t,!0,e.slashesDenoteHost)):{href:t,valid:!1}}t.exports=i},a1c1:function(t,e,r){"use strict";function n(t,e){if(e.ignore_www){var r=t.host.full;if(r){var n=r;0===r.indexOf("www.")&&(n=r.substr(4)),t.host.stripped=n}}}t.exports=n},a784:function(t,e,r){"use strict";var n=Object.prototype.hasOwnProperty;function o(t,e){t.query.string.full=a(t.query.object,!1),e.removeEmptyQueries&&(t.query.string.stripped=a(t.query.object,!0))}function a(t,e){var r=0,o="";for(var a in t)if(""!==a&&!0===n.call(t,a)){var i=t[a];""===i&&e||(o+=1===++r?"?":"&",a=encodeURIComponent(a),o+=""!==i?a+"="+encodeURIComponent(i).replace(/%20/g,"+"):a)}return o}t.exports=o},ada1:function(t,e,r){"use strict";r.d(e,"a",(function(){return a}));var n=r("8ec1"),o=r("d8bb"),a=Object(o["h"])("v-toolbar__title"),i=Object(o["h"])("v-toolbar__items");n["a"]},b37e:function(t,e,r){"use strict";function n(t,e,r){var n=t.extra.hrefInfo.minimumPathOnly,o=t.scheme===e.scheme||!t.scheme,a=o&&(t.auth===e.auth||r.removeAuth||n),i=r.ignore_www?"stripped":"full",s=a&&(t.host[i]===e.host[i]||n),u=s&&(t.port===e.port||n);t.extra.relation.minimumScheme=o,t.extra.relation.minimumAuth=a,t.extra.relation.minimumHost=s,t.extra.relation.minimumPort=u,t.extra.relation.maximumScheme=!o||o&&!a,t.extra.relation.maximumAuth=!o||o&&!s,t.extra.relation.maximumHost=!o||o&&!u}function o(t,e,r){var n=t.extra.hrefInfo.minimumQueryOnly,o=t.extra.hrefInfo.minimumHashOnly,a=t.extra.hrefInfo.empty,i=t.extra.relation.minimumPort,s=t.extra.relation.minimumScheme,u=i&&t.path.absolute.string===e.path.absolute.string,h=t.resource===e.resource||!t.resource&&e.extra.resourceIsIndex||r.removeDirectoryIndexes&&t.extra.resourceIsIndex&&!e.resource,l=u&&(h||n||o||a),c=r.removeEmptyQueries?"stripped":"full",m=t.query.string[c],f=e.query.string[c],p=l&&!!m&&m===f||(o||a)&&!t.extra.hrefInfo.separatorOnlyQuery,d=p&&t.hash===e.hash;t.extra.relation.minimumPath=u,t.extra.relation.minimumResource=l,t.extra.relation.minimumQuery=p,t.extra.relation.minimumHash=d,t.extra.relation.maximumPort=!s||s&&!u,t.extra.relation.maximumPath=!s||s&&!l,t.extra.relation.maximumResource=!s||s&&!p,t.extra.relation.maximumQuery=!s||s&&!d,t.extra.relation.maximumHash=!s||s&&!d,t.extra.relation.overridesQuery=u&&t.extra.relation.maximumResource&&!p&&!!f}t.exports={pathOn:o,upToPath:n}},b4da:function(t,e,r){"use strict";var n=r("eeb9");function o(t,e){return!t.auth||e.removeAuth||!t.extra.relation.maximumHost&&e.output!==n.ABSOLUTE?"":t.auth+"@"}function a(t,e){return t.hash?t.hash:""}function i(t,e){return t.host.full&&(t.extra.relation.maximumAuth||e.output===n.ABSOLUTE)?t.host.full:""}function s(t,e){var r="",o=t.path.absolute.string,a=t.path.relative.string,i=d(t,e);if(t.extra.relation.maximumHost||e.output===n.ABSOLUTE||e.output===n.ROOT_RELATIVE)r=o;else if(a.length<=o.length&&e.output===n.SHORTEST||e.output===n.PATH_RELATIVE){if(r=a,""===r){var s=p(t,e)&&!!f(t,e);t.extra.relation.maximumPath&&!i?r="./":!t.extra.relation.overridesQuery||i||s||(r="./")}}else r=o;return"/"!==r||i||!e.removeRootTrailingSlash||t.extra.relation.minimumPort&&e.output!==n.ABSOLUTE||(r=""),r}function u(t,e){return t.port&&!t.extra.portIsDefault&&t.extra.relation.maximumHost?":"+t.port:""}function h(t,e){return p(t,e)?f(t,e):""}function l(t,e){return d(t,e)?t.resource:""}function c(t,e){var r="";return(t.extra.relation.maximumHost||e.output===n.ABSOLUTE)&&(t.extra.relation.minimumScheme&&e.schemeRelative&&e.output!==n.ABSOLUTE?r+="//":r+=t.scheme+"://"),r}function m(t,e){var r="";return r+=c(t,e),r+=o(t,e),r+=i(t,e),r+=u(t,e),r+=s(t,e),r+=l(t,e),r+=h(t,e),r+=a(t,e),r}function f(t,e){var r=e.removeEmptyQueries&&t.extra.relation.minimumPort;return t.query.string[r?"stripped":"full"]}function p(t,e){return!t.extra.relation.minimumQuery||e.output===n.ABSOLUTE||e.output===n.ROOT_RELATIVE}function d(t,e){var r=e.removeDirectoryIndexes&&t.extra.resourceIsIndex,o=t.extra.relation.minimumResource&&e.output!==n.ABSOLUTE&&e.output!==n.ROOT_RELATIVE;return!!t.resource&&!o&&!r}t.exports=m},d5f0:function(t,e,r){"use strict";function n(t){return t.length>0?t.join("/")+"/":""}function o(t){var e=[];return t.forEach((function(t){".."!==t?"."!==t&&e.push(t):e.length>0&&e.splice(e.length-1,1)})),e}t.exports={join:n,resolveDotSegments:o}},eb29:function(t,e,r){"use strict";var n=r("d5f0");function o(t,e){var r=[],n=!0,o=-1;return e.forEach((function(e,a){n&&(t[a]!==e?n=!1:o=a),n||r.push("..")})),t.forEach((function(t,e){e>o&&r.push(t)})),r}function a(t,e,r){if(t.extra.relation.minimumScheme){var a=o(t.path.absolute.array,e.path.absolute.array);t.path.relative.array=a,t.path.relative.string=n.join(a)}}t.exports=a},eeb9:function(t,e,r){"use strict";t.exports={ABSOLUTE:"absolute",PATH_RELATIVE:"pathRelative",ROOT_RELATIVE:"rootRelative",SHORTEST:"shortest"}},f09b:function(t,e,r){"use strict";var n=r("518c"),o=r("eb29");function a(t,e,r){return n(e,t,r),o(e,t,r),e}t.exports=a},f0f5:function(t,e,r){"use strict";var n=r("f866"),o=r("5cec");function a(){this.protocol=null,this.slashes=null,this.auth=null,this.host=null,this.port=null,this.hostname=null,this.hash=null,this.search=null,this.query=null,this.pathname=null,this.path=null,this.href=null}e.parse=k,e.resolve=w,e.resolveObject=I,e.format=O,e.Url=a;var i=/^([a-z0-9.+-]+:)/i,s=/:[0-9]*$/,u=/^(\/\/?(?!\/)[^\?\s]*)(\?[^\s]*)?$/,h=["<",">",'"',"`"," ","\r","\n","\t"],l=["{","}","|","\\","^","`"].concat(h),c=["'"].concat(l),m=["%","/","?",";","#"].concat(c),f=["/","?","#"],p=255,d=/^[+a-z0-9A-Z_-]{0,63}$/,v=/^([+a-z0-9A-Z_-]{0,63})(.*)$/,b={javascript:!0,"javascript:":!0},x={javascript:!0,"javascript:":!0},y={http:!0,https:!0,ftp:!0,gopher:!0,file:!0,"http:":!0,"https:":!0,"ftp:":!0,"gopher:":!0,"file:":!0},g=r("6cb0");function k(t,e,r){if(t&&o.isObject(t)&&t instanceof a)return t;var n=new a;return n.parse(t,e,r),n}function O(t){return o.isString(t)&&(t=k(t)),t instanceof a?t.format():a.prototype.format.call(t)}function w(t,e){return k(t,!1,!0).resolve(e)}function I(t,e){return t?k(t,!1,!0).resolveObject(e):e}a.prototype.parse=function(t,e,r){if(!o.isString(t))throw new TypeError("Parameter 'url' must be a string, not "+typeof t);var a=t.indexOf("?"),s=-1!==a&&a<t.indexOf("#")?"?":"#",h=t.split(s),l=/\\/g;h[0]=h[0].replace(l,"/"),t=h.join(s);var k=t;if(k=k.trim(),!r&&1===t.split("#").length){var O=u.exec(k);if(O)return this.path=k,this.href=k,this.pathname=O[1],O[2]?(this.search=O[2],this.query=e?g.parse(this.search.substr(1)):this.search.substr(1)):e&&(this.search="",this.query={}),this}var w=i.exec(k);if(w){w=w[0];var I=w.toLowerCase();this.protocol=I,k=k.substr(w.length)}if(r||w||k.match(/^\/\/[^@\/]+@[^@\/]+/)){var j="//"===k.substr(0,2);!j||w&&x[w]||(k=k.substr(2),this.slashes=!0)}if(!x[w]&&(j||w&&!y[w])){for(var A,P,S=-1,R=0;R<f.length;R++){var T=k.indexOf(f[R]);-1!==T&&(-1===S||T<S)&&(S=T)}P=-1===S?k.lastIndexOf("@"):k.lastIndexOf("@",S),-1!==P&&(A=k.slice(0,P),k=k.slice(P+1),this.auth=decodeURIComponent(A)),S=-1;for(R=0;R<m.length;R++){T=k.indexOf(m[R]);-1!==T&&(-1===S||T<S)&&(S=T)}-1===S&&(S=k.length),this.host=k.slice(0,S),k=k.slice(S),this.parseHost(),this.hostname=this.hostname||"";var E="["===this.hostname[0]&&"]"===this.hostname[this.hostname.length-1];if(!E)for(var C=this.hostname.split(/\./),q=(R=0,C.length);R<q;R++){var _=C[R];if(_&&!_.match(d)){for(var H="",U=0,$=_.length;U<$;U++)_.charCodeAt(U)>127?H+="x":H+=_[U];if(!H.match(d)){var L=C.slice(0,R),Q=C.slice(R+1),V=_.match(v);V&&(L.push(V[1]),Q.unshift(V[2])),Q.length&&(k="/"+Q.join(".")+k),this.hostname=L.join(".");break}}}this.hostname.length>p?this.hostname="":this.hostname=this.hostname.toLowerCase(),E||(this.hostname=n.toASCII(this.hostname));var D=this.port?":"+this.port:"",B=this.hostname||"";this.host=B+D,this.href+=this.host,E&&(this.hostname=this.hostname.substr(1,this.hostname.length-2),"/"!==k[0]&&(k="/"+k))}if(!b[I])for(R=0,q=c.length;R<q;R++){var N=c[R];if(-1!==k.indexOf(N)){var F=encodeURIComponent(N);F===N&&(F=escape(N)),k=k.split(N).join(F)}}var z=k.indexOf("#");-1!==z&&(this.hash=k.substr(z),k=k.slice(0,z));var J=k.indexOf("?");if(-1!==J?(this.search=k.substr(J),this.query=k.substr(J+1),e&&(this.query=g.parse(this.query)),k=k.slice(0,J)):e&&(this.search="",this.query={}),k&&(this.pathname=k),y[I]&&this.hostname&&!this.pathname&&(this.pathname="/"),this.pathname||this.search){D=this.pathname||"";var M=this.search||"";this.path=D+M}return this.href=this.format(),this},a.prototype.format=function(){var t=this.auth||"";t&&(t=encodeURIComponent(t),t=t.replace(/%3A/i,":"),t+="@");var e=this.protocol||"",r=this.pathname||"",n=this.hash||"",a=!1,i="";this.host?a=t+this.host:this.hostname&&(a=t+(-1===this.hostname.indexOf(":")?this.hostname:"["+this.hostname+"]"),this.port&&(a+=":"+this.port)),this.query&&o.isObject(this.query)&&Object.keys(this.query).length&&(i=g.stringify(this.query));var s=this.search||i&&"?"+i||"";return e&&":"!==e.substr(-1)&&(e+=":"),this.slashes||(!e||y[e])&&!1!==a?(a="//"+(a||""),r&&"/"!==r.charAt(0)&&(r="/"+r)):a||(a=""),n&&"#"!==n.charAt(0)&&(n="#"+n),s&&"?"!==s.charAt(0)&&(s="?"+s),r=r.replace(/[?#]/g,(function(t){return encodeURIComponent(t)})),s=s.replace("#","%23"),e+a+r+s+n},a.prototype.resolve=function(t){return this.resolveObject(k(t,!1,!0)).format()},a.prototype.resolveObject=function(t){if(o.isString(t)){var e=new a;e.parse(t,!1,!0),t=e}for(var r=new a,n=Object.keys(this),i=0;i<n.length;i++){var s=n[i];r[s]=this[s]}if(r.hash=t.hash,""===t.href)return r.href=r.format(),r;if(t.slashes&&!t.protocol){for(var u=Object.keys(t),h=0;h<u.length;h++){var l=u[h];"protocol"!==l&&(r[l]=t[l])}return y[r.protocol]&&r.hostname&&!r.pathname&&(r.path=r.pathname="/"),r.href=r.format(),r}if(t.protocol&&t.protocol!==r.protocol){if(!y[t.protocol]){for(var c=Object.keys(t),m=0;m<c.length;m++){var f=c[m];r[f]=t[f]}return r.href=r.format(),r}if(r.protocol=t.protocol,t.host||x[t.protocol])r.pathname=t.pathname;else{var p=(t.pathname||"").split("/");while(p.length&&!(t.host=p.shift()));t.host||(t.host=""),t.hostname||(t.hostname=""),""!==p[0]&&p.unshift(""),p.length<2&&p.unshift(""),r.pathname=p.join("/")}if(r.search=t.search,r.query=t.query,r.host=t.host||"",r.auth=t.auth,r.hostname=t.hostname||t.host,r.port=t.port,r.pathname||r.search){var d=r.pathname||"",v=r.search||"";r.path=d+v}return r.slashes=r.slashes||t.slashes,r.href=r.format(),r}var b=r.pathname&&"/"===r.pathname.charAt(0),g=t.host||t.pathname&&"/"===t.pathname.charAt(0),k=g||b||r.host&&t.pathname,O=k,w=r.pathname&&r.pathname.split("/")||[],I=(p=t.pathname&&t.pathname.split("/")||[],r.protocol&&!y[r.protocol]);if(I&&(r.hostname="",r.port=null,r.host&&(""===w[0]?w[0]=r.host:w.unshift(r.host)),r.host="",t.protocol&&(t.hostname=null,t.port=null,t.host&&(""===p[0]?p[0]=t.host:p.unshift(t.host)),t.host=null),k=k&&(""===p[0]||""===w[0])),g)r.host=t.host||""===t.host?t.host:r.host,r.hostname=t.hostname||""===t.hostname?t.hostname:r.hostname,r.search=t.search,r.query=t.query,w=p;else if(p.length)w||(w=[]),w.pop(),w=w.concat(p),r.search=t.search,r.query=t.query;else if(!o.isNullOrUndefined(t.search)){if(I){r.hostname=r.host=w.shift();var j=!!(r.host&&r.host.indexOf("@")>0)&&r.host.split("@");j&&(r.auth=j.shift(),r.host=r.hostname=j.shift())}return r.search=t.search,r.query=t.query,o.isNull(r.pathname)&&o.isNull(r.search)||(r.path=(r.pathname?r.pathname:"")+(r.search?r.search:"")),r.href=r.format(),r}if(!w.length)return r.pathname=null,r.search?r.path="/"+r.search:r.path=null,r.href=r.format(),r;for(var A=w.slice(-1)[0],P=(r.host||t.host||w.length>1)&&("."===A||".."===A)||""===A,S=0,R=w.length;R>=0;R--)A=w[R],"."===A?w.splice(R,1):".."===A?(w.splice(R,1),S++):S&&(w.splice(R,1),S--);if(!k&&!O)for(;S--;S)w.unshift("..");!k||""===w[0]||w[0]&&"/"===w[0].charAt(0)||w.unshift(""),P&&"/"!==w.join("/").substr(-1)&&w.push("");var T=""===w[0]||w[0]&&"/"===w[0].charAt(0);if(I){r.hostname=r.host=T?"":w.length?w.shift():"";j=!!(r.host&&r.host.indexOf("@")>0)&&r.host.split("@");j&&(r.auth=j.shift(),r.host=r.hostname=j.shift())}return k=k||r.host&&w.length,k&&!T&&w.unshift(""),w.length?r.pathname=w.join("/"):(r.pathname=null,r.path=null),o.isNull(r.pathname)&&o.isNull(r.search)||(r.path=(r.pathname?r.pathname:"")+(r.search?r.search:"")),r.auth=t.auth||r.auth,r.slashes=r.slashes||t.slashes,r.href=r.format(),r},a.prototype.parseHost=function(){var t=this.host,e=s.exec(t);e&&(e=e[0],":"!==e&&(this.port=e.substr(1)),t=t.substr(0,t.length-e.length)),t&&(this.hostname=t)}},f866:function(t,e,r){(function(t,n){var o;/*! https://mths.be/punycode v1.4.1 by @mathias */(function(a){e&&e.nodeType,t&&t.nodeType;var i="object"==typeof n&&n;i.global!==i&&i.window!==i&&i.self;var s,u=2147483647,h=36,l=1,c=26,m=38,f=700,p=72,d=128,v="-",b=/^xn--/,x=/[^\x20-\x7E]/,y=/[\x2E\u3002\uFF0E\uFF61]/g,g={overflow:"Overflow: input needs wider integers to process","not-basic":"Illegal input >= 0x80 (not a basic code point)","invalid-input":"Invalid input"},k=h-l,O=Math.floor,w=String.fromCharCode;function I(t){throw new RangeError(g[t])}function j(t,e){var r=t.length,n=[];while(r--)n[r]=e(t[r]);return n}function A(t,e){var r=t.split("@"),n="";r.length>1&&(n=r[0]+"@",t=r[1]),t=t.replace(y,".");var o=t.split("."),a=j(o,e).join(".");return n+a}function P(t){var e,r,n=[],o=0,a=t.length;while(o<a)e=t.charCodeAt(o++),e>=55296&&e<=56319&&o<a?(r=t.charCodeAt(o++),56320==(64512&r)?n.push(((1023&e)<<10)+(1023&r)+65536):(n.push(e),o--)):n.push(e);return n}function S(t){return j(t,(function(t){var e="";return t>65535&&(t-=65536,e+=w(t>>>10&1023|55296),t=56320|1023&t),e+=w(t),e})).join("")}function R(t){return t-48<10?t-22:t-65<26?t-65:t-97<26?t-97:h}function T(t,e){return t+22+75*(t<26)-((0!=e)<<5)}function E(t,e,r){var n=0;for(t=r?O(t/f):t>>1,t+=O(t/e);t>k*c>>1;n+=h)t=O(t/k);return O(n+(k+1)*t/(t+m))}function C(t){var e,r,n,o,a,i,s,m,f,b,x=[],y=t.length,g=0,k=d,w=p;for(r=t.lastIndexOf(v),r<0&&(r=0),n=0;n<r;++n)t.charCodeAt(n)>=128&&I("not-basic"),x.push(t.charCodeAt(n));for(o=r>0?r+1:0;o<y;){for(a=g,i=1,s=h;;s+=h){if(o>=y&&I("invalid-input"),m=R(t.charCodeAt(o++)),(m>=h||m>O((u-g)/i))&&I("overflow"),g+=m*i,f=s<=w?l:s>=w+c?c:s-w,m<f)break;b=h-f,i>O(u/b)&&I("overflow"),i*=b}e=x.length+1,w=E(g-a,e,0==a),O(g/e)>u-k&&I("overflow"),k+=O(g/e),g%=e,x.splice(g++,0,k)}return S(x)}function q(t){var e,r,n,o,a,i,s,m,f,b,x,y,g,k,j,A=[];for(t=P(t),y=t.length,e=d,r=0,a=p,i=0;i<y;++i)x=t[i],x<128&&A.push(w(x));n=o=A.length,o&&A.push(v);while(n<y){for(s=u,i=0;i<y;++i)x=t[i],x>=e&&x<s&&(s=x);for(g=n+1,s-e>O((u-r)/g)&&I("overflow"),r+=(s-e)*g,e=s,i=0;i<y;++i)if(x=t[i],x<e&&++r>u&&I("overflow"),x==e){for(m=r,f=h;;f+=h){if(b=f<=a?l:f>=a+c?c:f-a,m<b)break;j=m-b,k=h-b,A.push(w(T(b+j%k,0))),m=O(j/k)}A.push(w(T(m,0))),a=E(r,g,n==o),r=0,++n}++r,++e}return A.join("")}function _(t){return A(t,(function(t){return b.test(t)?C(t.slice(4).toLowerCase()):t}))}function H(t){return A(t,(function(t){return x.test(t)?"xn--"+q(t):t}))}s={version:"1.4.1",ucs2:{decode:P,encode:S},decode:C,encode:q,toASCII:H,toUnicode:_},o=function(){return s}.call(e,r,e,t),void 0===o||(t.exports=o)})()}).call(this,r("3610")(t),r("0928"))}}]);
//# sourceMappingURL=edit.ed1b79ec.js.map