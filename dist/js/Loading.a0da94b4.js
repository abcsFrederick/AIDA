(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["Loading"],{"0458":function(e,t,r){"use strict";var n=r("31bb"),i=r.n(n);i.a},"0789":function(e,t,r){"use strict";r.d(t,"b",(function(){return c})),r.d(t,"c",(function(){return u})),r.d(t,"d",(function(){return d})),r.d(t,"e",(function(){return h})),r.d(t,"a",(function(){return f}));var n=r("d9f7");function i(e=[],...t){return Array().concat(e,...t)}function a(e,t="top center 0",r){return{name:e,functional:!0,props:{group:{type:Boolean,default:!1},hideOnLeave:{type:Boolean,default:!1},leaveAbsolute:{type:Boolean,default:!1},mode:{type:String,default:r},origin:{type:String,default:t}},render(t,r){const a="transition"+(r.props.group?"-group":""),s={props:{name:e,mode:r.props.mode},on:{beforeEnter(e){e.style.transformOrigin=r.props.origin,e.style.webkitTransformOrigin=r.props.origin}}};return r.props.leaveAbsolute&&(s.on.leave=i(s.on.leave,e=>e.style.position="absolute")),r.props.hideOnLeave&&(s.on.leave=i(s.on.leave,e=>e.style.display="none")),t(a,Object(n["a"])(r.data,s),r.children)}}}function s(e,t,r="in-out"){return{name:e,functional:!0,props:{mode:{type:String,default:r}},render(r,i){return r("transition",Object(n["a"])(i.data,{props:{name:e},on:t}),i.children)}}}var o=r("80d2"),l=function(e="",t=!1){const r=t?"width":"height",n="offset"+Object(o["w"])(r);return{beforeEnter(e){e._parent=e.parentNode,e._initialStyle={transition:e.style.transition,visibility:e.style.visibility,overflow:e.style.overflow,[r]:e.style[r]}},enter(t){const i=t._initialStyle,a=t[n]+"px";t.style.setProperty("transition","none","important"),t.style.visibility="hidden",t.style.visibility=i.visibility,t.style.overflow="hidden",t.style[r]="0",t.offsetHeight,t.style.transition=i.transition,e&&t._parent&&t._parent.classList.add(e),requestAnimationFrame(()=>{t.style[r]=a})},afterEnter:a,enterCancelled:a,leave(e){e._initialStyle={transition:"",visibility:"",overflow:e.style.overflow,[r]:e.style[r]},e.style.overflow="hidden",e.style[r]=e[n]+"px",e.offsetHeight,requestAnimationFrame(()=>e.style[r]="0")},afterLeave:i,leaveCancelled:i};function i(t){e&&t._parent&&t._parent.classList.remove(e),a(t)}function a(e){const t=e._initialStyle[r];e.style.overflow=e._initialStyle.overflow,null!=t&&(e.style[r]=t),delete e._initialStyle}};a("carousel-transition"),a("carousel-reverse-transition"),a("tab-transition"),a("tab-reverse-transition"),a("menu-transition");const c=a("fab-transition","center center","out-in"),u=(a("dialog-transition"),a("dialog-bottom-transition"),a("fade-transition")),d=a("scale-transition"),h=(a("scroll-x-transition"),a("scroll-x-reverse-transition"),a("scroll-y-transition"),a("scroll-y-reverse-transition"),a("slide-x-transition")),f=(a("slide-x-reverse-transition"),a("slide-y-transition"),a("slide-y-reverse-transition"),s("expand-transition",l()));s("expand-x-transition",l("",!0))},"31bb":function(e,t,r){},"45d6":function(e,t,r){"use strict";r.r(t);var n=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{attrs:{id:"container"}},[r("v-content",[r("v-container",{attrs:{fluid:"","fill-height":""}},[r("v-layout",{attrs:{"align-center":"","justify-center":""}},[r("v-flex",{attrs:{xs10:"",sm6:"",md4:""}},[r("div",[r("p",{staticClass:"display-3 faded-title-text mb-0"},[e._v(" AIDA ")]),r("p",{staticClass:"headline faded-title-text pt-0"},[e._v(" Annotate Image Data by Assignment ")]),r("v-progress-linear",{attrs:{indeterminate:!0}})],1)])],1)],1)],1)],1)},i=[],a=(r("ac1f"),r("5319"),r("96cf"),r("1da1")),s=r("5530"),o=r("2f62"),l=r("df7c"),c=r.n(l),u={props:{fileName:{type:String,default:null}},methods:Object(s["a"])({},Object(o["b"])({setProjectImageName:"image/setProjectImageName",setProjectFilePath:"backend/setProjectFilePath"})),computed:Object(o["d"])({projectImageName:function(e){return e.image.projectImageName}}),mounted:function(){var e=this;return Object(a["a"])(regeneratorRuntime.mark((function t(){var r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,r=c.a.extname(e.$route.params.filePath),t.next=4,e.setProjectImageName(c.a.basename(e.$route.params.filePath,r));case 4:return t.next=6,e.setProjectFilePath(e.$route.params.filePath);case 6:e.$router.replace("/edit?q="+e.$route.params.filePath),t.next=11;break;case 9:t.prev=9,t.t0=t["catch"](0);case 11:case"end":return t.stop()}}),t,null,[[0,9]])})))()}},d=u,h=(r("0458"),r("2877")),f=r("6544"),p=r.n(f),v=r("a523"),g=r("a75b"),m=r("0e8f"),y=r("a722"),b=r("8e36"),_=Object(h["a"])(d,n,i,!1,null,"dbd1706a",null);t["default"]=_.exports;p()(_,{VContainer:v["a"],VContent:g["a"],VFlex:m["a"],VLayout:y["a"],VProgressLinear:b["a"]})},5319:function(e,t,r){"use strict";var n=r("d784"),i=r("825a"),a=r("7b0b"),s=r("50c4"),o=r("a691"),l=r("1d80"),c=r("8aa5"),u=r("14c3"),d=Math.max,h=Math.min,f=Math.floor,p=/\$([$&'`]|\d\d?|<[^>]*>)/g,v=/\$([$&'`]|\d\d?)/g,g=function(e){return void 0===e?e:String(e)};n("replace",2,(function(e,t,r,n){var m=n.REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE,y=n.REPLACE_KEEPS_$0,b=m?"$":"$0";return[function(r,n){var i=l(this),a=void 0==r?void 0:r[e];return void 0!==a?a.call(r,i,n):t.call(String(i),r,n)},function(e,n){if(!m&&y||"string"===typeof n&&-1===n.indexOf(b)){var a=r(t,e,this,n);if(a.done)return a.value}var l=i(e),f=String(this),p="function"===typeof n;p||(n=String(n));var v=l.global;if(v){var x=l.unicode;l.lastIndex=0}var B=[];while(1){var S=u(l,f);if(null===S)break;if(B.push(S),!v)break;var C=String(S[0]);""===C&&(l.lastIndex=c(f,s(l.lastIndex),x))}for(var w="",$=0,j=0;j<B.length;j++){S=B[j];for(var k=String(S[0]),O=d(h(o(S.index),f.length),0),E=[],P=1;P<S.length;P++)E.push(g(S[P]));var z=S.groups;if(p){var V=[k].concat(E,O,f);void 0!==z&&V.push(z);var L=String(n.apply(void 0,V))}else L=_(k,f,O,E,z,n);O>=$&&(w+=f.slice($,O)+L,$=O+k.length)}return w+f.slice($)}];function _(e,r,n,i,s,o){var l=n+e.length,c=i.length,u=v;return void 0!==s&&(s=a(s),u=p),t.call(o,u,(function(t,a){var o;switch(a.charAt(0)){case"$":return"$";case"&":return e;case"`":return r.slice(0,n);case"'":return r.slice(l);case"<":o=s[a.slice(1,-1)];break;default:var u=+a;if(0===u)return t;if(u>c){var d=f(u/10);return 0===d?t:d<=c?void 0===i[d-1]?a.charAt(1):i[d-1]+a.charAt(1):t}o=i[u-1]}return void 0===o?"":o}))}}))},"6ece":function(e,t,r){},"8e36":function(e,t,r){"use strict";r("6ece");var n=r("0789"),i=r("a9ad"),a=r("fe6c"),s=r("a452"),o=r("7560"),l=r("80d2"),c=r("58df");const u=Object(c["a"])(i["a"],Object(a["b"])(["absolute","fixed","top","bottom"]),s["a"],o["a"]);t["a"]=u.extend({name:"v-progress-linear",props:{active:{type:Boolean,default:!0},backgroundColor:{type:String,default:null},backgroundOpacity:{type:[Number,String],default:null},bufferValue:{type:[Number,String],default:100},color:{type:String,default:"primary"},height:{type:[Number,String],default:4},indeterminate:Boolean,query:Boolean,rounded:Boolean,stream:Boolean,striped:Boolean,value:{type:[Number,String],default:0}},data(){return{internalLazyValue:this.value||0}},computed:{__cachedBackground(){return this.$createElement("div",this.setBackgroundColor(this.backgroundColor||this.color,{staticClass:"v-progress-linear__background",style:this.backgroundStyle}))},__cachedBar(){return this.$createElement(this.computedTransition,[this.__cachedBarType])},__cachedBarType(){return this.indeterminate?this.__cachedIndeterminate:this.__cachedDeterminate},__cachedBuffer(){return this.$createElement("div",{staticClass:"v-progress-linear__buffer",style:this.styles})},__cachedDeterminate(){return this.$createElement("div",this.setBackgroundColor(this.color,{staticClass:"v-progress-linear__determinate",style:{width:Object(l["g"])(this.normalizedValue,"%")}}))},__cachedIndeterminate(){return this.$createElement("div",{staticClass:"v-progress-linear__indeterminate",class:{"v-progress-linear__indeterminate--active":this.active}},[this.genProgressBar("long"),this.genProgressBar("short")])},__cachedStream(){return this.stream?this.$createElement("div",this.setTextColor(this.color,{staticClass:"v-progress-linear__stream",style:{width:Object(l["g"])(100-this.normalizedBuffer,"%")}})):null},backgroundStyle(){const e=null==this.backgroundOpacity?this.backgroundColor?1:.3:parseFloat(this.backgroundOpacity);return{opacity:e,[this.$vuetify.rtl?"right":"left"]:Object(l["g"])(this.normalizedValue,"%"),width:Object(l["g"])(this.normalizedBuffer-this.normalizedValue,"%")}},classes(){return{"v-progress-linear--absolute":this.absolute,"v-progress-linear--fixed":this.fixed,"v-progress-linear--query":this.query,"v-progress-linear--reactive":this.reactive,"v-progress-linear--rounded":this.rounded,"v-progress-linear--striped":this.striped,...this.themeClasses}},computedTransition(){return this.indeterminate?n["c"]:n["e"]},normalizedBuffer(){return this.normalize(this.bufferValue)},normalizedValue(){return this.normalize(this.internalLazyValue)},reactive(){return Boolean(this.$listeners.change)},styles(){const e={};return this.active||(e.height=0),this.indeterminate||100===parseFloat(this.normalizedBuffer)||(e.width=Object(l["g"])(this.normalizedBuffer,"%")),e}},methods:{genContent(){const e=Object(l["m"])(this,"default",{value:this.internalLazyValue});return e?this.$createElement("div",{staticClass:"v-progress-linear__content"},e):null},genListeners(){const e=this.$listeners;return this.reactive&&(e.click=this.onClick),e},genProgressBar(e){return this.$createElement("div",this.setBackgroundColor(this.color,{staticClass:"v-progress-linear__indeterminate",class:{[e]:!0}}))},onClick(e){if(!this.reactive)return;const{width:t}=this.$el.getBoundingClientRect();this.internalValue=e.offsetX/t*100},normalize(e){return e<0?0:e>100?100:parseFloat(e)}},render(e){const t={staticClass:"v-progress-linear",attrs:{role:"progressbar","aria-valuemin":0,"aria-valuemax":this.normalizedBuffer,"aria-valuenow":this.indeterminate?void 0:this.normalizedValue},class:this.classes,style:{bottom:this.bottom?0:void 0,height:this.active?Object(l["g"])(this.height):0,top:this.top?0:void 0},on:this.genListeners()};return e("div",t,[this.__cachedStream,this.__cachedBackground,this.__cachedBuffer,this.__cachedBar,this.genContent()])}})},a452:function(e,t,r){"use strict";var n=r("2b0e");function i(e="value",t="change"){return n["a"].extend({name:"proxyable",model:{prop:e,event:t},props:{[e]:{required:!1}},data(){return{internalLazyValue:this[e]}},computed:{internalValue:{get(){return this.internalLazyValue},set(e){e!==this.internalLazyValue&&(this.internalLazyValue=e,this.$emit(t,e))}}},watch:{[e](e){this.internalLazyValue=e}}})}const a=i();t["a"]=a}}]);
//# sourceMappingURL=Loading.a0da94b4.js.map