(function(t){function e(e){for(var r,s,o=e[0],c=e[1],h=e[2],u=0,p=[];u<o.length;u++)s=o[u],Object.prototype.hasOwnProperty.call(i,s)&&i[s]&&p.push(i[s][0]),i[s]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(t[r]=c[r]);l&&l(e);while(p.length)p.shift()();return a.push.apply(a,h||[]),n()}function n(){for(var t,e=0;e<a.length;e++){for(var n=a[e],r=!0,s=1;s<n.length;s++){var c=n[s];0!==i[c]&&(r=!1)}r&&(a.splice(e--,1),t=o(o.s=n[0]))}return t}var r={},i={app:0},a=[];function s(t){return o.p+"js/"+({}[t]||t)+"."+{"chunk-2d0c0a48":"d1b1e5d5","chunk-2d0cf8c7":"f4e4ac22","chunk-2d0de531":"72db5aad","chunk-2d0e95bf":"28a67f7e"}[t]+".js"}function o(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.e=function(t){var e=[],n=i[t];if(0!==n)if(n)e.push(n[2]);else{var r=new Promise((function(e,r){n=i[t]=[e,r]}));e.push(n[2]=r);var a,c=document.createElement("script");c.charset="utf-8",c.timeout=120,o.nc&&c.setAttribute("nonce",o.nc),c.src=s(t);var h=new Error;a=function(e){c.onerror=c.onload=null,clearTimeout(u);var n=i[t];if(0!==n){if(n){var r=e&&("load"===e.type?"missing":e.type),a=e&&e.target&&e.target.src;h.message="Loading chunk "+t+" failed.\n("+r+": "+a+")",h.name="ChunkLoadError",h.type=r,h.request=a,n[1](h)}i[t]=void 0}};var u=setTimeout((function(){a({type:"timeout",target:c})}),12e4);c.onerror=c.onload=a,document.head.appendChild(c)}return Promise.all(e)},o.m=t,o.c=r,o.d=function(t,e,n){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)o.d(n,r,function(e){return t[e]}.bind(null,r));return n},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="/",o.oe=function(t){throw console.error(t),t};var c=window["webpackJsonp"]=window["webpackJsonp"]||[],h=c.push.bind(c);c.push=e,c=c.slice();for(var u=0;u<c.length;u++)e(c[u]);var l=h;a.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"14ee":function(t,e,n){"use strict";var r=n("195c"),i=n.n(r);i.a},"195c":function(t,e,n){},"2f91":function(t,e,n){t.exports=n.p+"img/profile-image.266f33d3.jpg"},4251:function(t,e,n){},5125:function(t,e,n){t.exports=n.p+"img/steam-icon.ebb24e27.svg"},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),i=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("article",{staticClass:"root"},[r("transition",{attrs:{name:"nav-toggle"}},[r("navigation",{directives:[{name:"show",rawName:"v-show",value:t.isWrapped,expression:"isWrapped"}],staticClass:"root__nav",on:{"route-to":t.routeTo}})],1),r("transition",{attrs:{name:"slide",mode:"out-in"}},[r("keep-alive",[r("router-view",{class:{root__component:!t.isWrapped,root__component_wrapped:t.isWrapped}},[r("div",{ref:"overlay",class:{overlay:t.isWrapped,overlay_hidden:!t.isWrapped},attrs:{slot:"wrapper"},on:{click:t.wrap},slot:"wrapper"}),r("img",{ref:"wrapper",class:{wrapper:!t.isWrapped,wrapper_rotated:t.isWrapped},attrs:{slot:"wrapper",src:n("dd36"),alt:"wrapper-icon"},on:{click:t.wrap},slot:"wrapper"})])],1)],1),r("background")],1)},a=[],s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("nav",{attrs:{id:"nav"}},[n("li",{staticClass:"link",on:{click:function(e){return t.routeTo("/",0)}}},[t._v(" "+t._s(t.content.NAV_HOME)+" ")]),n("li",{staticClass:"link",on:{click:function(e){return t.routeTo("/about-me",1)}}},[t._v(" "+t._s(t.content.NAV_ABOUT)+" ")]),n("li",{staticClass:"link",on:{click:function(e){return t.routeTo("/history",2)}}},[t._v(" "+t._s(t.content.NAV_TIMELAPSE)+" ")]),n("li",{staticClass:"link",on:{click:function(e){return t.routeTo("/projects",3)}}},[t._v(" "+t._s(t.content.NAV_PROJECTS)+" ")]),n("li",{staticClass:"link",on:{click:function(e){return t.routeTo("/contacts",4)}}},[t._v(" "+t._s(t.content.NAV_CONTACTS)+" ")]),n("div",{staticClass:"link-wrapper"},[n("span",{staticClass:"link",class:{link_active:"en"===t.selectedLanguage},on:{click:function(e){return t.setLanguage("en")}}},[t._v("en")]),n("span",{staticClass:"link",class:{link_active:"ru"===t.selectedLanguage},on:{click:function(e){return t.setLanguage("ru")}}},[t._v("ru")])])])},o=[],c={name:"Navigation",data:function(){return{}},computed:{content:function(){return this.$store.state.language},index:function(){return this.$store.state.tabIndex},selectedLanguage:function(){return this.$store.getters.selectedLanguage}},methods:{setLanguage:function(t){this.$store.commit("setLanguage",t)},routeTo:function(t,e){this.$emit("route-to",t)}}},h=c,u=(n("14ee"),n("2877")),l=Object(u["a"])(h,s,o,!1,null,"6a1292e8",null),p=l.exports,d=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"canvas"}})},f=[],m=(n("a4d3"),n("e01a"),n("d28b"),n("cb29"),n("d3b7"),n("3ca3"),n("ddb0"),n("4795"),n("d4ec")),v=n("bee2");n("fb6a"),n("0d03"),n("25f0");function g(t){function e(){return function(t){var e=0,r=0,i=0,a=1;0==t.length&&(t=[+new Date]);var s=n();e=s(" "),r=s(" "),i=s(" ");for(var o=0;o<t.length;o++)e-=s(t[o]),e<0&&(e+=1),r-=s(t[o]),r<0&&(r+=1),i-=s(t[o]),i<0&&(i+=1);s=null;var c=function(){var t=2091639*e+2.3283064365386963e-10*a;return e=r,r=i,i=t-(a=0|t)};return c.uint32=function(){return 4294967296*c()},c.fract53=function(){return c()+11102230246251565e-32*(2097152*c()|0)},c.version="Alea 0.9",c.args=t,c}(Array.prototype.slice.call(arguments))}function n(){var t=4022871197,e=function(e){e=e.toString();for(var n=0;n<e.length;n++){t+=e.charCodeAt(n);var r=.02519603282416938*t;t=r>>>0,r-=t,r*=t,t=r>>>0,r-=t,t+=4294967296*r}return 2.3283064365386963e-10*(t>>>0)};return e.version="Mash 0.9",e}var r=function(t){void 0==t&&(t=Math),this.grad3=[[1,1,0],[-1,1,0],[1,-1,0],[-1,-1,0],[1,0,1],[-1,0,1],[1,0,-1],[-1,0,-1],[0,1,1],[0,-1,1],[0,1,-1],[0,-1,-1]],this.p=[];for(var e=0;e<256;e++)this.p[e]=Math.floor(256*t.random());this.perm=[];for(e=0;e<512;e++)this.perm[e]=this.p[255&e];this.simplex=[[0,1,2,3],[0,1,3,2],[0,0,0,0],[0,2,3,1],[0,0,0,0],[0,0,0,0],[0,0,0,0],[1,2,3,0],[0,2,1,3],[0,0,0,0],[0,3,1,2],[0,3,2,1],[0,0,0,0],[0,0,0,0],[0,0,0,0],[1,3,2,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[1,2,0,3],[0,0,0,0],[1,3,0,2],[0,0,0,0],[0,0,0,0],[0,0,0,0],[2,3,0,1],[2,3,1,0],[1,0,2,3],[1,0,3,2],[0,0,0,0],[0,0,0,0],[0,0,0,0],[2,0,3,1],[0,0,0,0],[2,1,3,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[2,0,1,3],[0,0,0,0],[0,0,0,0],[0,0,0,0],[3,0,1,2],[3,0,2,1],[0,0,0,0],[3,1,2,0],[2,1,0,3],[0,0,0,0],[0,0,0,0],[0,0,0,0],[3,1,0,2],[0,0,0,0],[3,2,0,1],[3,2,1,0]]};r.prototype.dot=function(t,e,n){return t[0]*e+t[1]*n},r.prototype.noise=function(t,e){var n,r,i,a,s,o=.5*(Math.sqrt(3)-1),c=(t+e)*o,h=Math.floor(t+c),u=Math.floor(e+c),l=(3-Math.sqrt(3))/6,p=(h+u)*l,d=h-p,f=u-p,m=t-d,v=e-f;m>v?(a=1,s=0):(a=0,s=1);var g=m-a+l,_=v-s+l,y=m-1+2*l,w=v-1+2*l,k=255&h,b=255&u,x=this.perm[k+this.perm[b]]%12,O=this.perm[k+a+this.perm[b+s]]%12,M=this.perm[k+1+this.perm[b+1]]%12,C=.5-m*m-v*v;C<0?n=0:(C*=C,n=C*C*this.dot(this.grad3[x],m,v));var E=.5-g*g-_*_;E<0?r=0:(E*=E,r=E*E*this.dot(this.grad3[O],g,_));var S=.5-y*y-w*w;return S<0?i=0:(S*=S,i=S*S*this.dot(this.grad3[M],y,w)),70*(n+r+i)},r.prototype.noise3d=function(t,e,n){var r,i,a,s,o,c,h,u,l,p,d=1/3,f=(t+e+n)*d,m=Math.floor(t+f),v=Math.floor(e+f),g=Math.floor(n+f),_=1/6,y=(m+v+g)*_,w=m-y,k=v-y,b=g-y,x=t-w,O=e-k,M=n-b;x>=O?O>=M?(o=1,c=0,h=0,u=1,l=1,p=0):x>=M?(o=1,c=0,h=0,u=1,l=0,p=1):(o=0,c=0,h=1,u=1,l=0,p=1):O<M?(o=0,c=0,h=1,u=0,l=1,p=1):x<M?(o=0,c=1,h=0,u=0,l=1,p=1):(o=0,c=1,h=0,u=1,l=1,p=0);var C=x-o+_,E=O-c+_,S=M-h+_,T=x-u+2*_,A=O-l+2*_,L=M-p+2*_,P=x-1+3*_,N=O-1+3*_,j=M-1+3*_,I=255&m,H=255&v,R=255&g,$=this.perm[I+this.perm[H+this.perm[R]]]%12,B=this.perm[I+o+this.perm[H+c+this.perm[R+h]]]%12,V=this.perm[I+u+this.perm[H+l+this.perm[R+p]]]%12,F=this.perm[I+1+this.perm[H+1+this.perm[R+1]]]%12,W=.6-x*x-O*O-M*M;W<0?r=0:(W*=W,r=W*W*this.dot(this.grad3[$],x,O,M));var U=.6-C*C-E*E-S*S;U<0?i=0:(U*=U,i=U*U*this.dot(this.grad3[B],C,E,S));var q=.6-T*T-A*A-L*L;q<0?a=0:(q*=q,a=q*q*this.dot(this.grad3[V],T,A,L));var J=.6-P*P-N*N-j*j;return J<0?s=0:(J*=J,s=J*J*this.dot(this.grad3[F],P,N,j)),32*(r+i+a+s)};var i=function(t){void 0==t&&(t=Math),this.grad3=[[1,1,0],[-1,1,0],[1,-1,0],[-1,-1,0],[1,0,1],[-1,0,1],[1,0,-1],[-1,0,-1],[0,1,1],[0,-1,1],[0,1,-1],[0,-1,-1]],this.p=[];for(var e=0;e<256;e++)this.p[e]=Math.floor(256*t.random());this.perm=[];for(e=0;e<512;e++)this.perm[e]=this.p[255&e]};i.prototype.dot=function(t,e,n,r){return t[0]*e+t[1]*n+t[2]*r},i.prototype.mix=function(t,e,n){return(1-n)*t+n*e},i.prototype.fade=function(t){return t*t*t*(t*(6*t-15)+10)},i.prototype.noise=function(t,e,n){var r=Math.floor(t),i=Math.floor(e),a=Math.floor(n);t-=r,e-=i,n-=a,r&=255,i&=255,a&=255;var s=this.perm[r+this.perm[i+this.perm[a]]]%12,o=this.perm[r+this.perm[i+this.perm[a+1]]]%12,c=this.perm[r+this.perm[i+1+this.perm[a]]]%12,h=this.perm[r+this.perm[i+1+this.perm[a+1]]]%12,u=this.perm[r+1+this.perm[i+this.perm[a]]]%12,l=this.perm[r+1+this.perm[i+this.perm[a+1]]]%12,p=this.perm[r+1+this.perm[i+1+this.perm[a]]]%12,d=this.perm[r+1+this.perm[i+1+this.perm[a+1]]]%12,f=this.dot(this.grad3[s],t,e,n),m=this.dot(this.grad3[u],t-1,e,n),v=this.dot(this.grad3[c],t,e-1,n),g=this.dot(this.grad3[p],t-1,e-1,n),_=this.dot(this.grad3[o],t,e,n-1),y=this.dot(this.grad3[l],t-1,e,n-1),w=this.dot(this.grad3[h],t,e-1,n-1),k=this.dot(this.grad3[d],t-1,e-1,n-1),b=this.fade(t),x=this.fade(e),O=this.fade(n),M=this.mix(f,m,b),C=this.mix(_,y,b),E=this.mix(v,g,b),S=this.mix(w,k,b),T=this.mix(M,E,x),A=this.mix(C,S,x),L=this.mix(T,A,O);return L};var a={};a.random=new e(t);var s=new i(a);this.noise=function(t,e,n){return.5*s.noise(t,e,n)+.5}}var _=function(){function t(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:.25;Object(m["a"])(this,t),this.sky=e,this.x=Math.random()*e.canvas.width,this.y=Math.random()*e.canvas.height,this.origin={x:e.canvas.width/2,y:1.1*e.canvas.height},this.maxSpeed=n,this.currentSpeed=.001,this.r=Math.sqrt(Math.pow(this.x-this.origin.x,2)+Math.pow(this.y-this.origin.y,2)),this.angle=Math.atan2(this.y-this.origin.y,this.x-this.origin.x),this.move(12e3*n)}return Object(v["a"])(t,[{key:"move",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this.currentSpeed;this.currentSpeed<this.maxSpeed&&(this.currentSpeed+=.0015);var e=this.angle,n=180*e/Math.PI;n-=t,e=n*Math.PI/180,this.angle=e,this.x=this.origin.x+this.r*Math.cos(this.angle),this.y=this.origin.y+this.r*Math.sin(this.angle)}},{key:"redraw",value:function(){-10<=this.x&&this.x<=this.sky.canvas.width+10&&-10<=this.y&&this.y<=this.sky.canvas.height+10&&(this.sky.context.beginPath(),this.sky.context.arc(this.x,this.y,9*this.currentSpeed,0,2*Math.PI,!1),this.sky.context.fillStyle="white",this.sky.context.fill(),this.sky.context.strokeStyle="transparent",this.sky.context.stroke())}}]),t}(),y=function(){function t(){Object(m["a"])(this,t)}return Object(v["a"])(t,[{key:"createCanvas",value:function(t){var e=document.getElementById(t);this.canvas=document.createElement("canvas"),e.parentNode.replaceChild(this.canvas,e),this.canvas.id=t,this.context=this.canvas.getContext("2d"),this.canvas.width=1.1*window.innerWidth,this.canvas.height=1.1*window.innerHeight}},{key:"resizeCanvas",value:function(){this.canvas.width=1.1*window.innerWidth,this.canvas.height=1.1*window.innerHeight}},{key:"setBackgroundColors",value:function(t,e){this.fromColor=t,this.toColor=e}},{key:"setNumberOfStars",value:function(t){this.starsCount=t}},{key:"setFramerate",value:function(t){this.FPS=t}},{key:"startSimulation",value:function(){var t=this;if(this.FPS&&this.starsCount&&this.fromColor&&this.toColor){this.stars=[];var e=new g(Math.random());this.drawBackground();for(var n=0,r=0;n<this.starsCount;n++,r+=.02){var i=e.noise(r,0,0);i*=.25;var a=new _(this,i);a.redraw(),this.stars.push(a)}this.intervalId=setInterval((function(){t.drawBackground(),t.drawStars()}),1e3/this.FPS)}}},{key:"drawBackground",value:function(){this.gradient=this.context.createLinearGradient(this.canvas.width/2,this.canvas.height,this.canvas.width/2,0),this.gradient.addColorStop(.3,this.fromColor),this.gradient.addColorStop(1,this.toColor),this.context.fillStyle=this.gradient,this.context.fillRect(0,0,this.canvas.width,this.canvas.height)}},{key:"drawStars",value:function(){var t=!0,e=!1,n=void 0;try{for(var r,i=this.stars[Symbol.iterator]();!(t=(r=i.next()).done);t=!0){var a=r.value;a.move(),a.redraw()}}catch(s){e=!0,n=s}finally{try{t||null==i["return"]||i["return"]()}finally{if(e)throw n}}}}]),t}(),w=new y;window.addEventListener("resize",(function(){w.resizeCanvas()}));var k=w,b={methods:{},mounted:function(){k.createCanvas("canvas"),k.setBackgroundColors("#123578","#1A2639"),k.setNumberOfStars(1e3),k.setFramerate(30),k.startSimulation()}},x=b,O=Object(u["a"])(x,d,f,!1,null,"2268501b",null),M=O.exports,C={name:"App",components:{navigation:p,Background:M},data:function(){return{isWrapped:!1,sliding:!1,isFirst:!0}},methods:{wrap:function(){this.isWrapped=!this.isWrapped,this.$store.commit("closeFirstOpen")},routeTo:function(t){this.$route.path!==t&&this.$router.push(t)}}},E=C,S=(n("5c0b"),Object(u["a"])(E,i,a,!1,null,null,null)),T=S.exports,A=n("8c4f"),L=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("section",{attrs:{id:"home"}},[t.isFirstOpen?r("span",{staticClass:"explore-more"},[t._v(t._s(t.content.EXPLORE_MORE))]):t._e(),t._t("overlay"),t._t("wrapper"),r("div",{staticClass:"home-wrapper"},[t._m(0),r("span",{staticClass:"home-wrapper__name"},[t._v(t._s(t.content.HOME_NAME))]),r("span",{staticClass:"home-wrapper__def"},[t._v(t._s(t.content.HOME_SUB))]),r("div",{staticClass:"home-wrapper__icons-wrapper"},[r("img",{staticClass:"icons-wrapper__icon",attrs:{src:n("f1a6"),alt:"vk-icon",title:"vk"},on:{click:function(e){return t.goLink("https://vk.com/raydarar")}}}),r("img",{staticClass:"icons-wrapper__icon",attrs:{src:n("cc4f"),alt:"github-icon",title:"github"},on:{click:function(e){return t.goLink("https://github.com/RayDarar")}}}),r("img",{staticClass:"icons-wrapper__icon",attrs:{src:n("8917"),alt:"instagram-icon",title:"instagram"},on:{click:function(e){return t.goLink("https://www.instagram.com/raydarar/")}}}),r("img",{staticClass:"icons-wrapper__icon",attrs:{src:n("fd53"),alt:"gmail-icon",title:"gmail"},on:{click:function(e){return t.goLink("https://mail.google.com/mail/?view=cm&fs=1&to=dfqgth400@gmail.com")}}}),r("img",{staticClass:"icons-wrapper__icon",attrs:{src:n("5125"),alt:"steam-icon",title:"steam"},on:{click:function(e){return t.goLink("https://steamcommunity.com/id/RayDarar")}}})])])],2)},P=[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"home-wrapper__profile-image"},[r("img",{attrs:{src:n("2f91")}})])}],N={name:"Home",data:function(){return{}},methods:{goLink:function(t){window.open(t,"_blank")}},computed:{content:function(){return this.$store.state.language},isFirstOpen:function(){return this.$store.state.isFirstOpen}},watch:{content:function(t,e){document.title=t.TITLE_HOME}},components:{}},j=N,I=(n("dbc2"),Object(u["a"])(j,L,P,!1,null,null,null)),H=I.exports;r["a"].use(A["a"]);var R=new A["a"]({mode:"history",routes:[{path:"/",component:H,meta:{index:0}},{path:"/about-me",component:function(){return n.e("chunk-2d0de531").then(n.bind(null,"84ba"))},meta:{index:1}},{path:"/history",component:function(){return n.e("chunk-2d0c0a48").then(n.bind(null,"433f"))},meta:{index:2}},{path:"/projects",component:function(){return n.e("chunk-2d0e95bf").then(n.bind(null,"8cca"))},meta:{index:3}},{path:"/contacts",component:function(){return n.e("chunk-2d0cf8c7").then(n.bind(null,"63d8"))},meta:{index:4}}]}),$=R,B=n("2f62"),V={EXPLORE_MORE:"Explore more",TITLE_HOME:"Ryspekov | Home",TITLE_ABOUT:"Ryspekov | About Me",HOME_NAME:"Ryspekov Ansar",HOME_SUB:"Programmer | Student | Science lover",NAV_HOME:"Home",NAV_ABOUT:"About Me",NAV_TIMELAPSE:"History",NAV_PROJECTS:"Projects",NAV_CONTACTS:"Contacts"},F={EXPLORE_MORE:"Узнать больше",TITLE_HOME:"Ryspekov | Главная",TITLE_ABOUT:"Ryspekov | О мне",HOME_NAME:"Рыспеков Ансар",HOME_SUB:"Программист | Студент | Любитель науки",NAV_HOME:"Главная",NAV_ABOUT:"О мне",NAV_TIMELAPSE:"История",NAV_PROJECTS:"Проекты",NAV_CONTACTS:"Контакты"};r["a"].use(B["a"]);var W=new B["a"].Store({state:{tabIndex:0,language:V,isFirstOpen:!0},mutations:{setActiveTab:function(t,e){var n=!0,r=!1,i=void 0;try{for(var a,s=t.tabs[Symbol.iterator]();!(n=(a=s.next()).done);n=!0){var o=a.value;o.isSelected=!1}}catch(c){r=!0,i=c}finally{try{n||null==s["return"]||s["return"]()}finally{if(r)throw i}}t.tabs[e].isSelected=!0},setLanguage:function(t,e){t.language="ru"===e?F:V},setTabIndex:function(t,e){"number"==typeof e?t.tabIndex=e:"/"===e?t.tabIndex=0:"/about-me"===e?t.tabIndex=1:"/history"===e?t.tabIndex=2:"/projects"===e?t.tabIndex=3:"/contacts"===e&&(t.tabIndex=4)},closeFirstOpen:function(t){t.isFirstOpen=!1}},actions:{},modules:{},getters:{selectedLanguage:function(t){return t.language==V?"en":"ru"}}});r["a"].config.productionTip=!1,new r["a"]({router:$,store:W,render:function(t){return t(T)}}).$mount("#app")},"5c0b":function(t,e,n){"use strict";var r=n("9c0c"),i=n.n(r);i.a},8917:function(t,e,n){t.exports=n.p+"img/instagram-icon.1072a980.svg"},"9c0c":function(t,e,n){},cc4f:function(t,e,n){t.exports=n.p+"img/github-icon.c4516fa2.svg"},dbc2:function(t,e,n){"use strict";var r=n("4251"),i=n.n(r);i.a},dd36:function(t,e,n){t.exports=n.p+"img/double_arrow_white.f1909f9e.svg"},f1a6:function(t,e,n){t.exports=n.p+"img/vk-icon.a4261e67.svg"},fd53:function(t,e,n){t.exports=n.p+"img/gmail-icon.14988c8f.svg"}});
//# sourceMappingURL=app.30ea4b83.js.map