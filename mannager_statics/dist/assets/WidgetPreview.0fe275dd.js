import{d as k,e as B,X as h,o as n,c as u,w as f,b as P,aG as A,e9 as I,ed as C,eP as D,u as y,bT as N,eT as q,a0 as S,ea as V,S as b,a as g,Y as c,eb as v,ec as x,aS as w,q as E,t as L}from"./index.bfeeca06.js";import{S as $}from"./Steps.6efcc451.js";import{W as F}from"./PlayerConfigProvider.862ea10d.js";import"./index.e8676a72.js";import"./colorHelpers.4b78c050.js";import"./index.f5852897.js";(function(){try{var o=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},t=new Error().stack;t&&(o._sentryDebugIds=o._sentryDebugIds||{},o._sentryDebugIds[t]="a21b6984-a96f-486b-b208-64996e37dfd2",o._sentryDebugIdIdentifier="sentry-dbid-a21b6984-a96f-486b-b208-64996e37dfd2")}catch{}})();const K=k({__name:"ActionButton",props:{action:{},displayName:{},disabled:{type:Boolean},loading:{type:Boolean}},emits:["click"],setup(o,{emit:t}){const d=o,l=B(null);return h(()=>{l.value&&d.action.setElement(l.value)}),(r,i)=>(n(),u(y(q),null,{default:f(()=>[P(y(N),{ref_key:"element",ref:l,class:C(["next-button",r.disabled?"disabled":""]),loading:r.loading,disabled:r.disabled,onClick:i[0]||(i[0]=p=>t("click")),onKeydown:i[1]||(i[1]=D(p=>t("click"),["enter"]))},{default:f(()=>[A(I(r.displayName),1)]),_:1},8,["loading","disabled","class"])]),_:1}))}});const M=S(K,[["__scopeId","data-v-aea27bb7"]]),O={class:"form"},T={class:"form-wrapper"},z={key:0,class:"buttons"},G=k({__name:"WidgetPreview",setup(o){const t=V(),d=B([]);function l(e){return E[e]||L[e]||null}function r(e){try{const s=JSON.parse(e);if(s.component=l(s.type),!s.component)throw new Error(`Widget ${s.type} not found`);return s.component?s:null}catch{return null}}function i(){const e=t.query.widget;return Array.isArray(e)?e.map(r).filter(Boolean):[r(e)]}function p(){return t.query.steps==="true"}function m(){const e=t.query.button;return e?Array.isArray(e)?e:[e]:[]}const _=e=>({name:e,isDefault:!1,isFocused:!1,focusOnButton:()=>{},addKeydownListener:()=>{},setElement:()=>{}});return(e,s)=>(n(),u(F,{"main-color":"#d14056",class:"preview",background:"#fbfbfb","font-family":"Inter",locale:"en"},{default:f(()=>[p()?(n(),u($,{key:0,class:"steps","steps-info":{current:1,total:3}})):b("",!0),g("div",O,[g("div",T,[(n(!0),c(w,null,v(i(),(a,W)=>(n(),c("div",{key:W,class:"widget"},[(n(),u(x(a.component),{"user-props":a.userProps,value:a.userProps.value,errors:d.value},null,8,["user-props","value","errors"]))]))),128))]),m().length?(n(),c("div",z,[(n(!0),c(w,null,v(m(),a=>(n(),u(M,{key:a,"display-name":_(a).name,action:_(a)},null,8,["display-name","action"]))),128))])):b("",!0)])]),_:1}))}});const Q=S(G,[["__scopeId","data-v-0c6cef1d"]]);export{Q as default};
//# sourceMappingURL=WidgetPreview.0fe275dd.js.map
