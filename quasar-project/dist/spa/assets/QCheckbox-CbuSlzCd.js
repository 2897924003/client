import{r as _,c as a,h as n,Y as j,a4 as z,m as F,q as Q,X as R,a3 as D,av as K,g as M,b9 as N,t as V,ba as d,l as H,K as L}from"./index-DEMVRRIH.js";function X(l,f){const e=_(null),c=a(()=>l.disable===!0?null:n("span",{ref:e,class:"no-outline",tabindex:-1}));function i(r){const u=f.value;r!==void 0&&r.type.indexOf("key")===0?u!==null&&document.activeElement!==u&&u.contains(document.activeElement)===!0&&u.focus():e.value!==null&&(r===void 0||u!==null&&u.contains(r.target)===!0)&&e.value.focus()}return{refocusTargetEl:c,refocusTarget:i}}const Y={xs:30,sm:35,md:40,lg:50,xl:60},G={...R,...D,...K,modelValue:{required:!0,default:null},val:{},trueValue:{default:!0},falseValue:{default:!1},indeterminateValue:{default:null},checkedIcon:String,uncheckedIcon:String,indeterminateIcon:String,toggleOrder:{type:String,validator:l=>l==="tf"||l==="ft"},toggleIndeterminate:Boolean,label:String,leftLabel:Boolean,color:String,keepColor:Boolean,dense:Boolean,disable:Boolean,tabindex:[String,Number]},J=["update:modelValue"];function U(l,f){const{props:e,slots:c,emit:i,proxy:r}=M(),{$q:u}=r,q=j(e,u),k=_(null),{refocusTargetEl:h,refocusTarget:I}=X(e,k),C=z(e,Y),v=a(()=>e.val!==void 0&&Array.isArray(e.modelValue)),g=a(()=>{const t=d(e.val);return v.value===!0?e.modelValue.findIndex(s=>d(s)===t):-1}),o=a(()=>v.value===!0?g.value!==-1:d(e.modelValue)===d(e.trueValue)),b=a(()=>v.value===!0?g.value===-1:d(e.modelValue)===d(e.falseValue)),x=a(()=>o.value===!1&&b.value===!1),y=a(()=>e.disable===!0?-1:e.tabindex||0),S=a(()=>`q-${l} cursor-pointer no-outline row inline no-wrap items-center`+(e.disable===!0?" disabled":"")+(q.value===!0?` q-${l}--dark`:"")+(e.dense===!0?` q-${l}--dense`:"")+(e.leftLabel===!0?" reverse":"")),$=a(()=>{const t=o.value===!0?"truthy":b.value===!0?"falsy":"indet",s=e.color!==void 0&&(e.keepColor===!0||(l==="toggle"?o.value===!0:b.value!==!0))?` text-${e.color}`:"";return`q-${l}__inner relative-position non-selectable q-${l}__inner--${t}${s}`}),w=a(()=>{const t={type:"checkbox"};return e.name!==void 0&&Object.assign(t,{".checked":o.value,"^checked":o.value===!0?"checked":void 0,name:e.name,value:v.value===!0?e.val:e.trueValue}),t}),O=N(w),B=a(()=>{const t={tabindex:y.value,role:l==="toggle"?"switch":"checkbox","aria-label":e.label,"aria-checked":x.value===!0?"mixed":o.value===!0?"true":"false"};return e.disable===!0&&(t["aria-disabled"]="true"),t});function m(t){t!==void 0&&(V(t),I(t)),e.disable!==!0&&i("update:modelValue",T(),t)}function T(){if(v.value===!0){if(o.value===!0){const t=e.modelValue.slice();return t.splice(g.value,1),t}return e.modelValue.concat([e.val])}if(o.value===!0){if(e.toggleOrder!=="ft"||e.toggleIndeterminate===!1)return e.falseValue}else if(b.value===!0){if(e.toggleOrder==="ft"||e.toggleIndeterminate===!1)return e.trueValue}else return e.toggleOrder!=="ft"?e.trueValue:e.falseValue;return e.indeterminateValue}function A(t){(t.keyCode===13||t.keyCode===32)&&V(t)}function E(t){(t.keyCode===13||t.keyCode===32)&&m(t)}const P=f(o,x);return Object.assign(r,{toggle:m}),()=>{const t=P();e.disable!==!0&&O(t,"unshift",` q-${l}__native absolute q-ma-none q-pa-none`);const s=[n("div",{class:$.value,style:C.value,"aria-hidden":"true"},t)];h.value!==null&&s.push(h.value);const p=e.label!==void 0?F(c.default,[e.label]):Q(c.default);return p!==void 0&&s.push(n("div",{class:`q-${l}__label q-anchor--skip`},p)),n("div",{ref:k,class:S.value,...B.value,onClick:m,onKeydown:A,onKeyup:E},s)}}const W=n("div",{key:"svg",class:"q-checkbox__bg absolute"},[n("svg",{class:"q-checkbox__svg fit absolute-full",viewBox:"0 0 24 24"},[n("path",{class:"q-checkbox__truthy",fill:"none",d:"M1.73,12.91 8.1,19.28 22.79,4.59"}),n("path",{class:"q-checkbox__indet",d:"M4,14H20V10H4"})])]),ee=H({name:"QCheckbox",props:G,emits:J,setup(l){function f(e,c){const i=a(()=>(e.value===!0?l.checkedIcon:c.value===!0?l.indeterminateIcon:l.uncheckedIcon)||null);return()=>i.value!==null?[n("div",{key:"icon",class:"q-checkbox__icon-container absolute-full flex flex-center no-wrap"},[n(L,{class:"q-checkbox__icon",name:i.value})])]:[W]}return U("checkbox",f)}});export{ee as Q};
