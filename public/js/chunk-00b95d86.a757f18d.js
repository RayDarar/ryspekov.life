(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-00b95d86"],{"02e4":function(t,e,i){},"1b82":function(t,e,i){"use strict";var a=i("8f01"),r=i.n(a);r.a},"2b4c":function(t,e,i){"use strict";var a=i("7971"),r=i.n(a);r.a},5899:function(t,e){t.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},"58a8":function(t,e,i){var a=i("1d80"),r=i("5899"),n="["+r+"]",s=RegExp("^"+n+n+"*"),o=RegExp(n+n+"*$"),c=function(t){return function(e){var i=String(a(e));return 1&t&&(i=i.replace(s,"")),2&t&&(i=i.replace(o,"")),i}};t.exports={start:c(1),end:c(2),trim:c(3)}},7156:function(t,e,i){var a=i("861d"),r=i("d2bb");t.exports=function(t,e,i){var n,s;return r&&"function"==typeof(n=e.constructor)&&n!==i&&a(s=n.prototype)&&s!==i.prototype&&r(t,s),t}},7971:function(t,e,i){},"7fb1":function(t,e,i){"use strict";var a=i("f9d3"),r=i.n(a);r.a},"84ba":function(t,e,i){"use strict";i.r(e);var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("section",{attrs:{id:"about"}},[t._t("overlay"),t._t("wrapper"),t._t("explore"),t.$root.isProd?i("header",{staticClass:"heading"},[i("h2",{staticClass:"heading__title"},[t._v(t._s(t.content["about_main_title"]))]),i("p",{staticClass:"heading__sub-title"},[t._v(t._s(t.content["about_main_subtitle"]))])]):t._e(),t.$root.isProd?i("div",{staticClass:"info-block soft-skills"},[i("h3",{staticClass:"info-block__title"},[t._v(t._s(t.content["about_soft_title"]))]),i("soft-swiper",{staticClass:"info-block__data"})],1):t._e(),i("div",{staticClass:"info-block hard-skills"},[i("h3",{staticClass:"info-block__title"},[t._v(t._s(t.content["about_hard_title"]))]),i("div",{staticClass:"info-block__data"},[i("hard-container",{attrs:{title:t.content["about_hard_blocks"][0]}},[i("hard-item",{attrs:{color:"#f16529"}},[t._v("HTML5")]),i("hard-item",[t._v("CSS3")]),i("hard-item",[t._v("JS")]),i("hard-item",[t._v("jQuery")]),i("hard-item",[t._v("AJAX")]),i("hard-item",[t._v("Vue")]),i("hard-item",[t._v("Vuex")]),i("hard-item",[t._v("Sass")]),i("hard-item",[t._v("BEM")]),i("hard-item",[t._v("Node.js")]),i("hard-item",[t._v("Express")]),i("hard-item",[t._v("PHP")]),i("hard-item",[t._v("Svelte")])],1),i("hard-container",{attrs:{title:t.content["about_hard_blocks"][1]}},[i("hard-item",[t._v("OOP")]),i("hard-item",[t._v("Patterns")]),i("hard-item",[t._v("SOLID")]),i("hard-item",[t._v("MVC")])],1),i("hard-container",{attrs:{title:t.content["about_hard_blocks"][2]}},[i("hard-item",[t._v("C/C++")]),i("hard-item",[t._v("SDL")]),i("hard-item",[t._v("C#")]),i("hard-item",[t._v("ASP.Net")]),i("hard-item",[t._v("ADO.Net")]),i("hard-item",[t._v("WPF")]),i("hard-item",[t._v("Java")]),i("hard-item",[t._v("Spring")]),i("hard-item",[t._v("SQL")]),i("hard-item",[t._v("MongoDB")]),i("hard-item",[t._v("Postgre")]),i("hard-item",[t._v("MSSQL")]),i("hard-item",[t._v("MySQL")])],1),i("hard-container",{attrs:{title:t.content["about_hard_blocks"][3]}},[i("hard-item",[t._v("Git")]),i("hard-item",[t._v("VS code")]),i("hard-item",[t._v("VS")]),i("hard-item",[t._v("Adobe XD")]),i("hard-item",[t._v("Photoshop")]),i("hard-item",[t._v("Windows")]),i("hard-item",[t._v("Linux")])],1)],1)])],2)},r=[],n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"swiper-container"},t._l(t.items,(function(t){return i("soft-item",{key:t.index,staticClass:"swiper-slide",attrs:{id:t.index,active:t.isActive,"data-id":t.index}})})),1)},s=[];i("a4d3"),i("e01a"),i("d28b"),i("d3b7"),i("3ca3"),i("ddb0"),i("7a82");function o(t,e,i){return e in t?Object.defineProperty(t,e,{value:i,enumerable:!0,configurable:!0,writable:!0}):t[e]=i,t}var c=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"soft-item",class:{"soft-item_active":t.active}},[i("div",{staticClass:"text-wrapper"},[i("h3",{staticClass:"title"},[t._v(t._s(t.content["about_soft_blocks"][t.id].title))]),i("p",{staticClass:"text"},[t._v(" "+t._s(t.content["about_soft_blocks"][t.id].text)+" ")])]),i("img",{attrs:{src:t.$root.getImgUrl("soft-skills-image-"+(t.id+1)+".jpg")}})])},d=[],l=(i("a9e3"),{name:"SoftItem",props:{id:Number,active:Boolean},computed:{content:function(){return this.$store.state.language}}}),u=l,f=(i("bb37"),i("2877")),_=Object(f["a"])(u,c,d,!1,null,"0c29295e",null),v=_.exports,h=o({name:"SoftSwiper",mounted:function(){},components:{SoftItem:v},data:function(){return{items:[{index:0,isActive:!1},{index:1,isActive:!1},{index:2,isActive:!1},{index:3,isActive:!1}],observer:null}},methods:{setActive:function(t){this.items[+t[0].target.dataset.id].isActive=t[0].isIntersecting}},computed:{width:function(){return window.innerWidth}},created:function(){this.observer=new IntersectionObserver(this.setActive,{root:null,threshold:1})}},"mounted",(function(){var t=document.querySelectorAll(".swiper-slide[data-id]"),e=!0,i=!1,a=void 0;try{for(var r,n=t[Symbol.iterator]();!(e=(r=n.next()).done);e=!0){var s=r.value;this.observer.observe(s)}}catch(o){i=!0,a=o}finally{try{e||null==n["return"]||n["return"]()}finally{if(i)throw a}}})),m=h,b=(i("2b4c"),Object(f["a"])(m,n,s,!1,null,"3fb4d38d",null)),p=b.exports,g=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"hard-container"},[i("h3",{staticClass:"title"},[t._v(" "+t._s(t.title)+" ")]),i("div",{staticClass:"container"},[t._t("default")],2)])},C=[],S={name:"HardContainer",props:{title:String}},I=S,A=(i("f605"),Object(f["a"])(I,g,C,!1,null,"f0654cae",null)),x=A.exports,w=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"hard-item"},[t._t("default")],2)},N=[],k={name:"HardItem"},E=k,y=(i("7fb1"),Object(f["a"])(E,w,N,!1,null,"4fcd75c1",null)),O=y.exports,P={name:"About",computed:{content:function(){return this.$store.state.language}},created:function(){document.title=this.content["TITLE_ABOUT"]},data:function(){return{blocks:[0,1,2,3]}},components:{SoftSwiper:p,HardContainer:x,HardItem:O}},L=P,$=(i("1b82"),Object(f["a"])(L,a,r,!1,null,"56bcf31f",null));e["default"]=$.exports},"8f01":function(t,e,i){},a9e3:function(t,e,i){"use strict";var a=i("83ab"),r=i("da84"),n=i("94ca"),s=i("6eeb"),o=i("5135"),c=i("c6b6"),d=i("7156"),l=i("c04e"),u=i("d039"),f=i("7c73"),_=i("241c").f,v=i("06cf").f,h=i("9bf2").f,m=i("58a8").trim,b="Number",p=r[b],g=p.prototype,C=c(f(g))==b,S=function(t){var e,i,a,r,n,s,o,c,d=l(t,!1);if("string"==typeof d&&d.length>2)if(d=m(d),e=d.charCodeAt(0),43===e||45===e){if(i=d.charCodeAt(2),88===i||120===i)return NaN}else if(48===e){switch(d.charCodeAt(1)){case 66:case 98:a=2,r=49;break;case 79:case 111:a=8,r=55;break;default:return+d}for(n=d.slice(2),s=n.length,o=0;o<s;o++)if(c=n.charCodeAt(o),c<48||c>r)return NaN;return parseInt(n,a)}return+d};if(n(b,!p(" 0o1")||!p("0b1")||p("+0x1"))){for(var I,A=function(t){var e=arguments.length<1?0:t,i=this;return i instanceof A&&(C?u((function(){g.valueOf.call(i)})):c(i)!=b)?d(new p(S(e)),i,A):S(e)},x=a?_(p):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),w=0;x.length>w;w++)o(p,I=x[w])&&!o(A,I)&&h(A,I,v(p,I));A.prototype=g,g.constructor=A,s(r,b,A)}},bb37:function(t,e,i){"use strict";var a=i("fddc"),r=i.n(a);r.a},f605:function(t,e,i){"use strict";var a=i("02e4"),r=i.n(a);r.a},f9d3:function(t,e,i){},fddc:function(t,e,i){}}]);
//# sourceMappingURL=chunk-00b95d86.a757f18d.js.map