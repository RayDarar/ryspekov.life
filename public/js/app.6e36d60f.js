(function(e){function t(t){for(var r,a,c=t[0],i=t[1],l=t[2],s=0,f=[];s<c.length;s++)a=c[s],Object.prototype.hasOwnProperty.call(o,a)&&o[a]&&f.push(o[a][0]),o[a]=0;for(r in i)Object.prototype.hasOwnProperty.call(i,r)&&(e[r]=i[r]);p&&p(t);while(f.length)f.shift()();return u.push.apply(u,l||[]),n()}function n(){for(var e,t=0;t<u.length;t++){for(var n=u[t],r=!0,a=1;a<n.length;a++){var i=n[a];0!==o[i]&&(r=!1)}r&&(u.splice(t--,1),e=c(c.s=n[0]))}return e}var r={},o={app:0},u=[];function a(e){return c.p+"js/"+({}[e]||e)+"."+{"chunk-2d0c0a48":"b220cd63","chunk-2d0cf8c7":"c8a3b242","chunk-2d0de531":"900d02ef","chunk-2d0e95bf":"346f69f7"}[e]+".js"}function c(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.e=function(e){var t=[],n=o[e];if(0!==n)if(n)t.push(n[2]);else{var r=new Promise((function(t,r){n=o[e]=[t,r]}));t.push(n[2]=r);var u,i=document.createElement("script");i.charset="utf-8",i.timeout=120,c.nc&&i.setAttribute("nonce",c.nc),i.src=a(e);var l=new Error;u=function(t){i.onerror=i.onload=null,clearTimeout(s);var n=o[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),u=t&&t.target&&t.target.src;l.message="Loading chunk "+e+" failed.\n("+r+": "+u+")",l.name="ChunkLoadError",l.type=r,l.request=u,n[1](l)}o[e]=void 0}};var s=setTimeout((function(){u({type:"timeout",target:i})}),12e4);i.onerror=i.onload=u,document.head.appendChild(i)}return Promise.all(t)},c.m=e,c.c=r,c.d=function(e,t,n){c.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},c.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,t){if(1&t&&(e=c(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)c.d(n,r,function(t){return e[t]}.bind(null,r));return n},c.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return c.d(t,"a",t),t},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.p="/",c.oe=function(e){throw console.error(e),e};var i=window["webpackJsonp"]=window["webpackJsonp"]||[],l=i.push.bind(i);i.push=t,i=i.slice();for(var s=0;s<i.length;s++)t(i[s]);var p=l;u.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("article",[n("navigation"),n("router-view")],1)},u=[],a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("nav",[n("router-link",{attrs:{to:"/"}},[e._v("Home")]),n("router-link",{attrs:{to:"/contacts"}},[e._v("Contacts")]),n("router-link",{attrs:{to:"/projects"}},[e._v("Projects")]),n("router-link",{attrs:{to:"/timelapse"}},[e._v("Timelapse")]),n("router-link",{attrs:{to:"/about"}},[e._v("About")])],1)},c=[],i=n("2877"),l={},s=Object(i["a"])(l,a,c,!1,null,null,null),p=s.exports,f={name:"App",components:{navigation:p}},d=f,h=Object(i["a"])(d,o,u,!1,null,null,null),v=h.exports,b=(n("d3b7"),n("8c4f")),m=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("section",[e._v(" This will be a Home section ")])},g=[],y={},k=Object(i["a"])(y,m,g,!1,null,null,null),w=k.exports;r["a"].use(b["a"]);var _=new b["a"]({mode:"history",routes:[{path:"/",component:w},{path:"/contacts",component:function(){return n.e("chunk-2d0cf8c7").then(n.bind(null,"63d8"))}},{path:"/about",component:function(){return n.e("chunk-2d0de531").then(n.bind(null,"84ba"))}},{path:"/projects",component:function(){return n.e("chunk-2d0e95bf").then(n.bind(null,"8cca"))}},{path:"/timelapse",component:function(){return n.e("chunk-2d0c0a48").then(n.bind(null,"433f"))}}]}),j=_,O=n("2f62"),P={},x={},T=[P,x];r["a"].use(O["a"]);var E=new O["a"].Store({state:{language:T[0]},mutations:{selectLanguage:function(e,t){T[t]&&(e.language=T[t])}},actions:{},modules:{}});r["a"].config.productionTip=!1,new r["a"]({router:j,store:E,render:function(e){return e(v)}}).$mount("#app")}});
//# sourceMappingURL=app.6e36d60f.js.map