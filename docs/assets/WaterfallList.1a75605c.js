import{g as A,p as n,D as L,G as B,H as u,o as j,c as E,b as g,w as $,a as t,u as h,I as f,J as F,L as M}from"./vendor.bccda1e6.js";import{g as N,L as G,W as I}from"./api.289be454.js";const O={style:{"min-height":"100%",width:"100%"}},R=["onClick"],V={class:"overflow-hidden"},W={class:"px-4 pt-2 pb-4 border-t border-t-gray-800"},H={class:"pb-4 text-gray-50 group-hover:text-yellow-300"},J={class:"pt-3 flex justify-between items-center border-t border-t-gray-600 border-opacity-50"},K={class:"text-gray-50"},P=["onClick"],q={class:"flex justify-center py-10 bg-gray-900"},U=A({props:{list:{type:Array},options:{type:Object},pageSize:{type:Number,default:20}},emits:{cardClick:null},setup(o,{emit:p}){const m=o,i=n([]),l=n(1),s=n(!0);L(()=>{c()});function c(){N({page:l.value,pageSize:m.pageSize}).then(e=>{i.value.push(...e),l.value+=1})}function v(e,d){i.value.splice(d,1)}function y(e){p("cardClick",e)}function b(e){}function w(e){console.error(`${e}: \u52A0\u8F7D\u5931\u8D25`)}function k(e){}function x(){s.value=!1,console.log("\u8BA1\u7B97\u5B8C\u6210")}const C=n(null);return(e,d)=>{const D=B("loading");return u((j(),E("div",O,[g(h(I),{ref:(a,r)=>{r.waterfall=a,C.value=a},list:i.value,"row-key":o.options.rowKey,gutter:o.options.gutter,"has-around-gutter":o.options.hasAroundGutter,width:o.options.width,breakpoints:o.options.breakpoints,"img-selector":o.options.imgSelector,"background-color":o.options.backgroundColor,"animation-effect":o.options.animationEffect,"animation-duration":o.options.animationDuration,"animation-delay":o.options.animationDelay,"animation-cancel":o.options.animationCancel,lazyload:o.options.lazyload,"load-props":o.options.loadProps,"cross-origin":o.options.crossOrigin,align:o.options.align,onAfterRender:x},{default:$(({item:a,url:r,index:S})=>[t("div",{class:"bg-gray-900 rounded-lg shadow-md overflow-hidden transition-all duration-300 ease-linear hover:shadow-lg hover:shadow-gray-600 group",onClick:z=>y(a)},[t("div",V,[g(h(G),{url:r,title:"title",alt:a.name,class:"cursor-pointer transition-all duration-300 ease-linear group-hover:scale-105",onLoad:b,onError:w,onSuccess:k},null,8,["url","alt"])]),t("div",W,[t("h2",H,f(a.name),1),t("div",J,[t("div",K," $ "+f(a.price),1),t("div",null,[t("button",{class:"px-3 h-7 rounded-full bg-red-500 text-sm text-white shadow-lg transition-all duration-300 hover:bg-red-600",onClick:F(z=>v(a,S),["stop"])}," \u5220\u9664 ",8,P)])])])],8,R)]),_:1},8,["list","row-key","gutter","has-around-gutter","width","breakpoints","img-selector","background-color","animation-effect","animation-duration","animation-delay","animation-cancel","lazyload","load-props","cross-origin","align"]),u(t("div",q,[t("button",{class:"px-5 py-2 rounded-full bg-gray-700 text-md text-white cursor-pointer hover:bg-gray-800 transition-all duration-300",onClick:c}," \u52A0\u8F7D\u66F4\u591A ")],512),[[M,!s.value]])],512)),[[D,s.value]])}}});export{U as _};
