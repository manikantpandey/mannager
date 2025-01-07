import{r as E}from"./router.885422a3.js";import{_ as L}from"./DocsButton.vue_vue_type_script_setup_true_lang.038bb7c3.js";import{i as O}from"./url.0c6761c3.js";import{G as P}from"./PhDotsThreeVertical.vue.2897c07b.js";import{d as R,E as j,e as N,o as s,c as r,w as l,u as n,cM as G,b as y,Y as A,eb as T,cz as Y,bL as Z,cE as q,aB as H,aS as B,cU as J,aG as d,e9 as f,S as b,cy as Q,cL as W,f as X,r as K,dh as U,dd as ee,$ as V,db as D,bT as te,cY as ae,Z as le,dc as x,d5 as F,bR as ne,bz as se,bx as oe,a as ue,ec as re,cO as ce,by as ie,a0 as pe}from"./index.bfeeca06.js";import{A as z,a as ye}from"./index.80c3e80d.js";import{B as de}from"./Badge.65a0d7d3.js";import{A as M}from"./index.66f3c303.js";(function(){try{var g=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},m=new Error().stack;m&&(g._sentryDebugIds=g._sentryDebugIds||{},g._sentryDebugIds[m]="5a62b146-3a5b-4c69-bbfb-63fc4e8f6c53",g._sentryDebugIdIdentifier="sentry-dbid-5a62b146-3a5b-4c69-bbfb-63fc4e8f6c53")}catch{}})();const fe=R({__name:"CreationModal",props:{entityName:{},fields:{},create:{type:Function}},setup(g,{expose:m}){const _=g,I=`Create ${_.entityName}`,p=j({inputValue:{}}),C=N(!1),k=()=>C.value=!0,w=()=>{C.value=!1,p.inputValue={}},S=async()=>{try{await _.create(p.inputValue),w()}catch(i){i instanceof Error&&G.error({message:"Failed to create",description:i.message})}},t=(i,o)=>{const e=i.target.value,a=_.fields.find(c=>c.key===o);a!=null&&a.format?p.inputValue[o]=a.format(e):p.inputValue[o]=e},v=(i,o)=>{const e=i.target.value,a=_.fields.find(c=>c.key===o);a!=null&&a.blur?p.inputValue[o]=a.blur(e):p.inputValue[o]=e};return m({open:k,close:w}),(i,o)=>(s(),r(n(W),{open:C.value,title:I,onCancel:w,onOk:S},{default:l(()=>[y(n(Q),{layout:"vertical"},{default:l(()=>[(s(!0),A(B,null,T(i.fields,e=>{var a;return s(),r(n(Y),{key:e.key,label:e.label,help:(a=e.hint)==null?void 0:a.call(e,p.inputValue[e.key])},{default:l(()=>{var c,h,$;return[!e.type||e.type==="text"||e.type==="password"?(s(),r(n(Z),{key:0,value:p.inputValue[e.key],"onUpdate:value":u=>p.inputValue[e.key]=u,placeholder:(c=e.placeholder)!=null?c:"",type:(h=e.type)!=null?h:"text",onInput:u=>t(u,e.key),onBlur:u=>v(u,e.key)},null,8,["value","onUpdate:value","placeholder","type","onInput","onBlur"])):e.type==="multiline-text"?(s(),r(n(q),{key:1,value:p.inputValue[e.key],"onUpdate:value":u=>p.inputValue[e.key]=u,placeholder:($=e.placeholder)!=null?$:"",onInput:u=>t(u,e.key),onBlur:u=>v(u,e.key)},null,8,["value","onUpdate:value","placeholder","onInput","onBlur"])):e.type==="select"?(s(),r(n(H),{key:2,value:p.inputValue[e.key],"onUpdate:value":u=>p.inputValue[e.key]=u,mode:e.mode},{default:l(()=>[(s(!0),A(B,null,T(e.options,u=>(s(),r(n(J),{key:typeof u=="string"?u:u.value,value:typeof u=="string"?u:u.value},{default:l(()=>[d(f(typeof u=="string"?u:u.label),1)]),_:2},1032,["value"]))),128))]),_:2},1032,["value","onUpdate:value","mode"])):b("",!0)]}),_:2},1032,["label","help"])}),128))]),_:1})]),_:1},8,["open"]))}}),me={class:"action-item"},ve=R({__name:"CrudView",props:{table:{},loading:{type:Boolean},title:{},emptyTitle:{},entityName:{},description:{},create:{type:Function},createButtonText:{},docsPath:{},live:{type:Boolean},fields:{}},setup(g){const m=g,_=N(null),I=(t,v)=>{var o;const i=(o=m.table.rows[0])==null?void 0:o.cells[v].type;if(!(i==="actions"||i==="slot"))return(e,a)=>p(e,a,v)},p=(t,v,i)=>{const o=t.cells[i],e=v.cells[i];return o.type==="text"&&e.type==="text"||o.type==="tag"&&e.type==="tag"?o.text.localeCompare(e.text):o.type==="tags"&&e.type==="tags"?o.tags[0].text.localeCompare(e.tags[0].text):o.type==="secret"&&e.type==="secret"||o.type==="link"&&e.type==="link"?o.text.localeCompare(e.text):(o.type==="actions"&&e.type==="actions",0)},C=async()=>{var t;m.fields?(t=_.value)==null||t.open():m.create&&await m.create({})},k=N(!1);async function w(t,v){if(!k.value){k.value=!0;try{"onClick"in t?await t.onClick({key:v.key}):"link"in t&&(typeof t.link=="string"&&O(t.link)?open(t.link,"_blank"):E.push(t.link))}finally{k.value=!1}}}const S=X(()=>({"--columnCount":`${m.table.columns.length}`}));return(t,v)=>{const i=K("RouterLink");return s(),A(B,null,[y(n(M),{direction:"vertical",class:"crud-view"},{default:l(()=>{var o;return[y(n(U),{align:"center",justify:"space-between"},{default:l(()=>[t.title?(s(),r(n(ee),{key:0},{default:l(()=>[d(f(t.title),1)]),_:1})):b("",!0),V(t.$slots,"more",{},void 0,!0)]),_:3}),t.description?(s(),r(n(D),{key:0},{default:l(()=>[d(f(t.description)+" ",1),V(t.$slots,"description",{},void 0,!0),t.docsPath?(s(),r(L,{key:0,path:t.docsPath},null,8,["path"])):b("",!0)]),_:3})):b("",!0),y(n(U),{gap:"middle"},{default:l(()=>[t.createButtonText?(s(),r(n(te),{key:0,type:"primary",onClick:C},{default:l(()=>[d(f(t.createButtonText),1)]),_:1})):b("",!0),V(t.$slots,"secondary",{},void 0,!0)]),_:3}),V(t.$slots,"extra",{},void 0,!0),y(n(ae),{"filter-dropdown":!0,size:"small",style:le(S.value),"data-source":t.table.rows,loading:k.value||t.loading&&!t.live,height:400,columns:(o=t.table.columns)==null?void 0:o.map((e,a)=>{var c;return{...e,key:a,filtered:!0,align:(c=e.align)!=null?c:"center",sorter:I(e,a)}})},{emptyText:l(()=>[d(f(t.emptyTitle),1)]),headerCell:l(e=>[d(f(e.title),1)]),bodyCell:l(({column:{key:e},record:a})=>[a.cells[e].type==="slot"?V(t.$slots,a.cells[e].key,{key:0,payload:a.cells[e].payload},void 0,!0):(s(),r(n(ce),{key:1,open:a.cells[e].hover?void 0:!1},{content:l(()=>[y(n(D),{style:{width:"300px",overflow:"auto","font-family":"monospace"},copyable:"",content:a.cells[e].hover},null,8,["content"])]),default:l(()=>[a.cells[e].type==="text"?(s(),r(n(x),{key:0,secondary:a.cells[e].secondary,code:a.cells[e].code},{default:l(()=>[y(n(de),{dot:a.cells[e].contentType==="warning",color:"#faad14"},{default:l(()=>[d(f(a.cells[e].text),1)]),_:2},1032,["dot"])]),_:2},1032,["secondary","code"])):a.cells[e].type==="secret"?(s(),r(n(x),{key:1,copyable:{text:a.cells[e].text}},{default:l(()=>[d(" ******** ")]),_:2},1032,["copyable"])):a.cells[e].type==="tag"?(s(),r(n(F),{key:2,color:a.cells[e].tagColor},{default:l(()=>[d(f(a.cells[e].text),1)]),_:2},1032,["color"])):a.cells[e].type==="tags"?(s(),r(n(M),{key:3},{default:l(()=>[(s(!0),A(B,null,T(a.cells[e].tags,(c,h)=>(s(),r(n(F),{key:h,color:c.color},{default:l(()=>[d(f(c.text),1)]),_:2},1032,["color"]))),128))]),_:2},1024)):a.cells[e].type==="link"?(s(),r(i,{key:4,to:a.cells[e].to},{default:l(()=>[d(f(a.cells[e].text),1)]),_:2},1032,["to"])):a.cells[e].type==="actions"?(s(),r(n(ne),{key:5},{overlay:l(()=>[y(n(se),{disabled:k.value},{default:l(()=>[(s(!0),A(B,null,T(a.cells[e].actions.filter(c=>!c.hide),(c,h)=>(s(),r(n(oe),{key:h,danger:c.dangerous,onClick:$=>w(c,a)},{default:l(()=>[ue("div",me,[c.icon?(s(),r(re(c.icon),{key:0})):b("",!0),y(n(x),null,{default:l(()=>[d(f(c.label),1)]),_:2},1024)])]),_:2},1032,["danger","onClick"]))),128))]),_:2},1032,["disabled"])]),default:l(()=>[y(n(P),{style:{cursor:"pointer"},size:"25px"})]),_:2},1024)):b("",!0)]),_:2},1032,["open"]))]),footer:l(()=>[t.live?(s(),r(n(ye),{key:0,justify:"end",gutter:10},{default:l(()=>[y(n(z),null,{default:l(()=>[y(n(ie),{size:"small"})]),_:1}),y(n(z),null,{default:l(()=>[y(n(x),null,{default:l(()=>[d(" auto updating ")]),_:1})]),_:1})]),_:1})):b("",!0)]),_:3},8,["style","data-source","loading","columns"])]}),_:3}),t.fields&&t.create?(s(),r(fe,{key:0,ref_key:"modalRef",ref:_,fields:t.fields,"entity-name":t.entityName,create:t.create},null,8,["fields","entity-name","create"])):b("",!0)],64)}}});const Ae=pe(ve,[["__scopeId","data-v-e8e1b31a"]]);export{Ae as C};
//# sourceMappingURL=CrudView.3c31606d.js.map
