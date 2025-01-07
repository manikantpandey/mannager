import{d as L,aj as A,b as g,al as z,ak as F,aM as P,av as p,dQ as Q,aO as T,aN as K,aR as q,U as s,aF as J,ao as Z,ad as k,ae as ii,ap as ti,aq as ei,ai as ni,a9 as oi,aP as ri,f as M,au as li,b7 as si,cP as ai,dR as ci,b0 as di,aW as pi}from"./index.bfeeca06.js";(function(){try{var i=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},t=new Error().stack;t&&(i._sentryDebugIds=i._sentryDebugIds||{},i._sentryDebugIds[t]="6077817b-44c4-4d33-abc6-be81b7d77e4f",i._sentryDebugIdIdentifier="sentry-dbid-6077817b-44c4-4d33-abc6-be81b7d77e4f")}catch{}})();function G(i){return typeof i=="string"}function mi(){}const V=()=>({prefixCls:String,itemWidth:String,active:{type:Boolean,default:void 0},disabled:{type:Boolean,default:void 0},status:P(),iconPrefix:String,icon:p.any,adjustMarginRight:String,stepNumber:Number,stepIndex:Number,description:p.any,title:p.any,subTitle:p.any,progressDot:Q(p.oneOfType([p.looseBool,p.func])),tailContent:p.any,icons:p.shape({finish:p.any,error:p.any}).loose,onClick:T(),onStepClick:T(),stepIcon:T(),itemRender:T(),__legacy:K()}),U=L({compatConfig:{MODE:3},name:"Step",inheritAttrs:!1,props:V(),setup(i,t){let{slots:e,emit:n,attrs:o}=t;const r=m=>{n("click",m),n("stepClick",i.stepIndex)},b=m=>{let{icon:l,title:c,description:I}=m;const{prefixCls:a,stepNumber:x,status:S,iconPrefix:C,icons:d,progressDot:y=e.progressDot,stepIcon:w=e.stepIcon}=i;let $;const f=A(`${a}-icon`,`${C}icon`,{[`${C}icon-${l}`]:l&&G(l),[`${C}icon-check`]:!l&&S==="finish"&&(d&&!d.finish||!d),[`${C}icon-cross`]:!l&&S==="error"&&(d&&!d.error||!d)}),h=g("span",{class:`${a}-icon-dot`},null);return y?typeof y=="function"?$=g("span",{class:`${a}-icon`},[y({iconDot:h,index:x-1,status:S,title:c,description:I,prefixCls:a})]):$=g("span",{class:`${a}-icon`},[h]):l&&!G(l)?$=g("span",{class:`${a}-icon`},[l]):d&&d.finish&&S==="finish"?$=g("span",{class:`${a}-icon`},[d.finish]):d&&d.error&&S==="error"?$=g("span",{class:`${a}-icon`},[d.error]):l||S==="finish"||S==="error"?$=g("span",{class:f},null):$=g("span",{class:`${a}-icon`},[x]),w&&($=w({index:x-1,status:S,title:c,description:I,node:$})),$};return()=>{var m,l,c,I;const{prefixCls:a,itemWidth:x,active:S,status:C="wait",tailContent:d,adjustMarginRight:y,disabled:w,title:$=(m=e.title)===null||m===void 0?void 0:m.call(e),description:f=(l=e.description)===null||l===void 0?void 0:l.call(e),subTitle:h=(c=e.subTitle)===null||c===void 0?void 0:c.call(e),icon:u=(I=e.icon)===null||I===void 0?void 0:I.call(e),onClick:v,onStepClick:D}=i,W=C||"wait",_=A(`${a}-item`,`${a}-item-${W}`,{[`${a}-item-custom`]:u,[`${a}-item-active`]:S,[`${a}-item-disabled`]:w===!0}),X={};x&&(X.width=x),y&&(X.marginRight=y);const H={onClick:v||mi};D&&!w&&(H.role="button",H.tabindex=0,H.onClick=r);const N=g("div",z(z({},F(o,["__legacy"])),{},{class:[_,o.class],style:[o.style,X]}),[g("div",z(z({},H),{},{class:`${a}-item-container`}),[g("div",{class:`${a}-item-tail`},[d]),g("div",{class:`${a}-item-icon`},[b({icon:u,title:$,description:f})]),g("div",{class:`${a}-item-content`},[g("div",{class:`${a}-item-title`},[$,h&&g("div",{title:typeof h=="string"?h:void 0,class:`${a}-item-subtitle`},[h])]),f&&g("div",{class:`${a}-item-description`},[f])])])]);return i.itemRender?i.itemRender(N):N}}});var gi=globalThis&&globalThis.__rest||function(i,t){var e={};for(var n in i)Object.prototype.hasOwnProperty.call(i,n)&&t.indexOf(n)<0&&(e[n]=i[n]);if(i!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,n=Object.getOwnPropertySymbols(i);o<n.length;o++)t.indexOf(n[o])<0&&Object.prototype.propertyIsEnumerable.call(i,n[o])&&(e[n[o]]=i[n[o]]);return e};const $i=L({compatConfig:{MODE:3},name:"Steps",props:{type:p.string.def("default"),prefixCls:p.string.def("vc-steps"),iconPrefix:p.string.def("vc"),direction:p.string.def("horizontal"),labelPlacement:p.string.def("horizontal"),status:P("process"),size:p.string.def(""),progressDot:p.oneOfType([p.looseBool,p.func]).def(void 0),initial:p.number.def(0),current:p.number.def(0),items:p.array.def(()=>[]),icons:p.shape({finish:p.any,error:p.any}).loose,stepIcon:T(),isInline:p.looseBool,itemRender:T()},emits:["change"],setup(i,t){let{slots:e,emit:n}=t;const o=m=>{const{current:l}=i;l!==m&&n("change",m)},r=(m,l,c)=>{const{prefixCls:I,iconPrefix:a,status:x,current:S,initial:C,icons:d,stepIcon:y=e.stepIcon,isInline:w,itemRender:$,progressDot:f=e.progressDot}=i,h=w||f,u=s(s({},m),{class:""}),v=C+l,D={active:v===S,stepNumber:v+1,stepIndex:v,key:v,prefixCls:I,iconPrefix:a,progressDot:h,stepIcon:y,icons:d,onStepClick:o};return x==="error"&&l===S-1&&(u.class=`${I}-next-error`),u.status||(v===S?u.status=x:v<S?u.status="finish":u.status="wait"),w&&(u.icon=void 0,u.subTitle=void 0),c?c(s(s({},u),D)):($&&(u.itemRender=W=>$(u,W)),g(U,z(z(z({},u),D),{},{__legacy:!1}),null))},b=(m,l)=>r(s({},m.props),l,c=>J(m,c));return()=>{var m;const{prefixCls:l,direction:c,type:I,labelPlacement:a,iconPrefix:x,status:S,size:C,current:d,progressDot:y=e.progressDot,initial:w,icons:$,items:f,isInline:h,itemRender:u}=i,v=gi(i,["prefixCls","direction","type","labelPlacement","iconPrefix","status","size","current","progressDot","initial","icons","items","isInline","itemRender"]),D=I==="navigation",W=h||y,_=h?"horizontal":c,X=h?void 0:C,H=W?"vertical":a,N=A(l,`${l}-${c}`,{[`${l}-${X}`]:X,[`${l}-label-${H}`]:_==="horizontal",[`${l}-dot`]:!!W,[`${l}-navigation`]:D,[`${l}-inline`]:h});return g("div",z({class:N},v),[f.filter(E=>E).map((E,Y)=>r(E,Y)),q((m=e.default)===null||m===void 0?void 0:m.call(e)).map(b)])}}}),hi=i=>{const{componentCls:t,stepsIconCustomTop:e,stepsIconCustomSize:n,stepsIconCustomFontSize:o}=i;return{[`${t}-item-custom`]:{[`> ${t}-item-container > ${t}-item-icon`]:{height:"auto",background:"none",border:0,[`> ${t}-icon`]:{top:e,width:n,height:n,fontSize:o,lineHeight:`${n}px`}}},[`&:not(${t}-vertical)`]:{[`${t}-item-custom`]:{[`${t}-item-icon`]:{width:"auto",background:"none"}}}}},Si=hi,fi=i=>{const{componentCls:t,stepsIconSize:e,lineHeight:n,stepsSmallIconSize:o}=i;return{[`&${t}-label-vertical`]:{[`${t}-item`]:{overflow:"visible","&-tail":{marginInlineStart:e/2+i.controlHeightLG,padding:`${i.paddingXXS}px ${i.paddingLG}px`},"&-content":{display:"block",width:(e/2+i.controlHeightLG)*2,marginTop:i.marginSM,textAlign:"center"},"&-icon":{display:"inline-block",marginInlineStart:i.controlHeightLG},"&-title":{paddingInlineEnd:0,paddingInlineStart:0,"&::after":{display:"none"}},"&-subtitle":{display:"block",marginBottom:i.marginXXS,marginInlineStart:0,lineHeight:n}},[`&${t}-small:not(${t}-dot)`]:{[`${t}-item`]:{"&-icon":{marginInlineStart:i.controlHeightLG+(e-o)/2}}}}}},ui=fi,bi=i=>{const{componentCls:t,stepsNavContentMaxWidth:e,stepsNavArrowColor:n,stepsNavActiveColor:o,motionDurationSlow:r}=i;return{[`&${t}-navigation`]:{paddingTop:i.paddingSM,[`&${t}-small`]:{[`${t}-item`]:{"&-container":{marginInlineStart:-i.marginSM}}},[`${t}-item`]:{overflow:"visible",textAlign:"center","&-container":{display:"inline-block",height:"100%",marginInlineStart:-i.margin,paddingBottom:i.paddingSM,textAlign:"start",transition:`opacity ${r}`,[`${t}-item-content`]:{maxWidth:e},[`${t}-item-title`]:s(s({maxWidth:"100%",paddingInlineEnd:0},Z),{"&::after":{display:"none"}})},[`&:not(${t}-item-active)`]:{[`${t}-item-container[role='button']`]:{cursor:"pointer","&:hover":{opacity:.85}}},"&:last-child":{flex:1,"&::after":{display:"none"}},"&::after":{position:"absolute",top:`calc(50% - ${i.paddingSM/2}px)`,insetInlineStart:"100%",display:"inline-block",width:i.fontSizeIcon,height:i.fontSizeIcon,borderTop:`${i.lineWidth}px ${i.lineType} ${n}`,borderBottom:"none",borderInlineStart:"none",borderInlineEnd:`${i.lineWidth}px ${i.lineType} ${n}`,transform:"translateY(-50%) translateX(-50%) rotate(45deg)",content:'""'},"&::before":{position:"absolute",bottom:0,insetInlineStart:"50%",display:"inline-block",width:0,height:i.lineWidthBold,backgroundColor:o,transition:`width ${r}, inset-inline-start ${r}`,transitionTimingFunction:"ease-out",content:'""'}},[`${t}-item${t}-item-active::before`]:{insetInlineStart:0,width:"100%"}},[`&${t}-navigation${t}-vertical`]:{[`> ${t}-item`]:{marginInlineEnd:0,"&::before":{display:"none"},[`&${t}-item-active::before`]:{top:0,insetInlineEnd:0,insetInlineStart:"unset",display:"block",width:i.lineWidth*3,height:`calc(100% - ${i.marginLG}px)`},"&::after":{position:"relative",insetInlineStart:"50%",display:"block",width:i.controlHeight*.25,height:i.controlHeight*.25,marginBottom:i.marginXS,textAlign:"center",transform:"translateY(-50%) translateX(-50%) rotate(135deg)"},[`> ${t}-item-container > ${t}-item-tail`]:{visibility:"hidden"}}},[`&${t}-navigation${t}-horizontal`]:{[`> ${t}-item > ${t}-item-container > ${t}-item-tail`]:{visibility:"hidden"}}}},Ii=bi,yi=i=>{const{antCls:t,componentCls:e}=i;return{[`&${e}-with-progress`]:{[`${e}-item`]:{paddingTop:i.paddingXXS,[`&-process ${e}-item-container ${e}-item-icon ${e}-icon`]:{color:i.processIconColor}},[`&${e}-vertical > ${e}-item `]:{paddingInlineStart:i.paddingXXS,[`> ${e}-item-container > ${e}-item-tail`]:{top:i.marginXXS,insetInlineStart:i.stepsIconSize/2-i.lineWidth+i.paddingXXS}},[`&, &${e}-small`]:{[`&${e}-horizontal ${e}-item:first-child`]:{paddingBottom:i.paddingXXS,paddingInlineStart:i.paddingXXS}},[`&${e}-small${e}-vertical > ${e}-item > ${e}-item-container > ${e}-item-tail`]:{insetInlineStart:i.stepsSmallIconSize/2-i.lineWidth+i.paddingXXS},[`&${e}-label-vertical`]:{[`${e}-item ${e}-item-tail`]:{top:i.margin-2*i.lineWidth}},[`${e}-item-icon`]:{position:"relative",[`${t}-progress`]:{position:"absolute",insetBlockStart:(i.stepsIconSize-i.stepsProgressSize-i.lineWidth*2)/2,insetInlineStart:(i.stepsIconSize-i.stepsProgressSize-i.lineWidth*2)/2}}}}},Ci=yi,vi=i=>{const{componentCls:t,descriptionWidth:e,lineHeight:n,stepsCurrentDotSize:o,stepsDotSize:r,motionDurationSlow:b}=i;return{[`&${t}-dot, &${t}-dot${t}-small`]:{[`${t}-item`]:{"&-title":{lineHeight:n},"&-tail":{top:Math.floor((i.stepsDotSize-i.lineWidth*3)/2),width:"100%",marginTop:0,marginBottom:0,marginInline:`${e/2}px 0`,padding:0,"&::after":{width:`calc(100% - ${i.marginSM*2}px)`,height:i.lineWidth*3,marginInlineStart:i.marginSM}},"&-icon":{width:r,height:r,marginInlineStart:(i.descriptionWidth-r)/2,paddingInlineEnd:0,lineHeight:`${r}px`,background:"transparent",border:0,[`${t}-icon-dot`]:{position:"relative",float:"left",width:"100%",height:"100%",borderRadius:100,transition:`all ${b}`,"&::after":{position:"absolute",top:-i.marginSM,insetInlineStart:(r-i.controlHeightLG*1.5)/2,width:i.controlHeightLG*1.5,height:i.controlHeight,background:"transparent",content:'""'}}},"&-content":{width:e},[`&-process ${t}-item-icon`]:{position:"relative",top:(r-o)/2,width:o,height:o,lineHeight:`${o}px`,background:"none",marginInlineStart:(i.descriptionWidth-o)/2},[`&-process ${t}-icon`]:{[`&:first-child ${t}-icon-dot`]:{insetInlineStart:0}}}},[`&${t}-vertical${t}-dot`]:{[`${t}-item-icon`]:{marginTop:(i.controlHeight-r)/2,marginInlineStart:0,background:"none"},[`${t}-item-process ${t}-item-icon`]:{marginTop:(i.controlHeight-o)/2,top:0,insetInlineStart:(r-o)/2,marginInlineStart:0},[`${t}-item > ${t}-item-container > ${t}-item-tail`]:{top:(i.controlHeight-r)/2,insetInlineStart:0,margin:0,padding:`${r+i.paddingXS}px 0 ${i.paddingXS}px`,"&::after":{marginInlineStart:(r-i.lineWidth)/2}},[`&${t}-small`]:{[`${t}-item-icon`]:{marginTop:(i.controlHeightSM-r)/2},[`${t}-item-process ${t}-item-icon`]:{marginTop:(i.controlHeightSM-o)/2},[`${t}-item > ${t}-item-container > ${t}-item-tail`]:{top:(i.controlHeightSM-r)/2}},[`${t}-item:first-child ${t}-icon-dot`]:{insetInlineStart:0},[`${t}-item-content`]:{width:"inherit"}}}},xi=vi,wi=i=>{const{componentCls:t}=i;return{[`&${t}-rtl`]:{direction:"rtl",[`${t}-item`]:{"&-subtitle":{float:"left"}},[`&${t}-navigation`]:{[`${t}-item::after`]:{transform:"rotate(-45deg)"}},[`&${t}-vertical`]:{[`> ${t}-item`]:{"&::after":{transform:"rotate(225deg)"},[`${t}-item-icon`]:{float:"right"}}},[`&${t}-dot`]:{[`${t}-item-icon ${t}-icon-dot, &${t}-small ${t}-item-icon ${t}-icon-dot`]:{float:"right"}}}}},zi=wi,Ti=i=>{const{componentCls:t,stepsSmallIconSize:e,fontSizeSM:n,fontSize:o,colorTextDescription:r}=i;return{[`&${t}-small`]:{[`&${t}-horizontal:not(${t}-label-vertical) ${t}-item`]:{paddingInlineStart:i.paddingSM,"&:first-child":{paddingInlineStart:0}},[`${t}-item-icon`]:{width:e,height:e,marginTop:0,marginBottom:0,marginInline:`0 ${i.marginXS}px`,fontSize:n,lineHeight:`${e}px`,textAlign:"center",borderRadius:e},[`${t}-item-title`]:{paddingInlineEnd:i.paddingSM,fontSize:o,lineHeight:`${e}px`,"&::after":{top:e/2}},[`${t}-item-description`]:{color:r,fontSize:o},[`${t}-item-tail`]:{top:e/2-i.paddingXXS},[`${t}-item-custom ${t}-item-icon`]:{width:"inherit",height:"inherit",lineHeight:"inherit",background:"none",border:0,borderRadius:0,[`> ${t}-icon`]:{fontSize:e,lineHeight:`${e}px`,transform:"none"}}}}},Di=Ti,Pi=i=>{const{componentCls:t,stepsSmallIconSize:e,stepsIconSize:n}=i;return{[`&${t}-vertical`]:{display:"flex",flexDirection:"column",[`> ${t}-item`]:{display:"block",flex:"1 0 auto",paddingInlineStart:0,overflow:"visible",[`${t}-item-icon`]:{float:"left",marginInlineEnd:i.margin},[`${t}-item-content`]:{display:"block",minHeight:i.controlHeight*1.5,overflow:"hidden"},[`${t}-item-title`]:{lineHeight:`${n}px`},[`${t}-item-description`]:{paddingBottom:i.paddingSM}},[`> ${t}-item > ${t}-item-container > ${t}-item-tail`]:{position:"absolute",top:0,insetInlineStart:i.stepsIconSize/2-i.lineWidth,width:i.lineWidth,height:"100%",padding:`${n+i.marginXXS*1.5}px 0 ${i.marginXXS*1.5}px`,"&::after":{width:i.lineWidth,height:"100%"}},[`> ${t}-item:not(:last-child) > ${t}-item-container > ${t}-item-tail`]:{display:"block"},[` > ${t}-item > ${t}-item-container > ${t}-item-content > ${t}-item-title`]:{"&::after":{display:"none"}},[`&${t}-small ${t}-item-container`]:{[`${t}-item-tail`]:{position:"absolute",top:0,insetInlineStart:i.stepsSmallIconSize/2-i.lineWidth,padding:`${e+i.marginXXS*1.5}px 0 ${i.marginXXS*1.5}px`},[`${t}-item-title`]:{lineHeight:`${e}px`}}}}},Wi=Pi,Xi=i=>{const{componentCls:t,inlineDotSize:e,inlineTitleColor:n,inlineTailColor:o}=i,r=i.paddingXS+i.lineWidth,b={[`${t}-item-container ${t}-item-content ${t}-item-title`]:{color:n}};return{[`&${t}-inline`]:{width:"auto",display:"inline-flex",[`${t}-item`]:{flex:"none","&-container":{padding:`${r}px ${i.paddingXXS}px 0`,margin:`0 ${i.marginXXS/2}px`,borderRadius:i.borderRadiusSM,cursor:"pointer",transition:`background-color ${i.motionDurationMid}`,"&:hover":{background:i.controlItemBgHover},["&[role='button']:hover"]:{opacity:1}},"&-icon":{width:e,height:e,marginInlineStart:`calc(50% - ${e/2}px)`,[`> ${t}-icon`]:{top:0},[`${t}-icon-dot`]:{borderRadius:i.fontSizeSM/4}},"&-content":{width:"auto",marginTop:i.marginXS-i.lineWidth},"&-title":{color:n,fontSize:i.fontSizeSM,lineHeight:i.lineHeightSM,fontWeight:"normal",marginBottom:i.marginXXS/2},"&-description":{display:"none"},"&-tail":{marginInlineStart:0,top:r+e/2,transform:"translateY(-50%)","&:after":{width:"100%",height:i.lineWidth,borderRadius:0,marginInlineStart:0,background:o}},[`&:first-child ${t}-item-tail`]:{width:"50%",marginInlineStart:"50%"},[`&:last-child ${t}-item-tail`]:{display:"block",width:"50%"},"&-wait":s({[`${t}-item-icon ${t}-icon ${t}-icon-dot`]:{backgroundColor:i.colorBorderBg,border:`${i.lineWidth}px ${i.lineType} ${o}`}},b),"&-finish":s({[`${t}-item-tail::after`]:{backgroundColor:o},[`${t}-item-icon ${t}-icon ${t}-icon-dot`]:{backgroundColor:o,border:`${i.lineWidth}px ${i.lineType} ${o}`}},b),"&-error":b,"&-active, &-process":s({[`${t}-item-icon`]:{width:e,height:e,marginInlineStart:`calc(50% - ${e/2}px)`,top:0}},b),[`&:not(${t}-item-active) > ${t}-item-container[role='button']:hover`]:{[`${t}-item-title`]:{color:n}}}}}},Hi=Xi;var B;(function(i){i.wait="wait",i.process="process",i.finish="finish",i.error="error"})(B||(B={}));const R=(i,t)=>{const e=`${t.componentCls}-item`,n=`${i}IconColor`,o=`${i}TitleColor`,r=`${i}DescriptionColor`,b=`${i}TailColor`,m=`${i}IconBgColor`,l=`${i}IconBorderColor`,c=`${i}DotColor`;return{[`${e}-${i} ${e}-icon`]:{backgroundColor:t[m],borderColor:t[l],[`> ${t.componentCls}-icon`]:{color:t[n],[`${t.componentCls}-icon-dot`]:{background:t[c]}}},[`${e}-${i}${e}-custom ${e}-icon`]:{[`> ${t.componentCls}-icon`]:{color:t[c]}},[`${e}-${i} > ${e}-container > ${e}-content > ${e}-title`]:{color:t[o],"&::after":{backgroundColor:t[b]}},[`${e}-${i} > ${e}-container > ${e}-content > ${e}-description`]:{color:t[r]},[`${e}-${i} > ${e}-container > ${e}-tail::after`]:{backgroundColor:t[b]}}},Bi=i=>{const{componentCls:t,motionDurationSlow:e}=i,n=`${t}-item`;return s(s(s(s(s(s({[n]:{position:"relative",display:"inline-block",flex:1,overflow:"hidden",verticalAlign:"top","&:last-child":{flex:"none",[`> ${n}-container > ${n}-tail, > ${n}-container >  ${n}-content > ${n}-title::after`]:{display:"none"}}},[`${n}-container`]:{outline:"none"},[`${n}-icon, ${n}-content`]:{display:"inline-block",verticalAlign:"top"},[`${n}-icon`]:{width:i.stepsIconSize,height:i.stepsIconSize,marginTop:0,marginBottom:0,marginInlineStart:0,marginInlineEnd:i.marginXS,fontSize:i.stepsIconFontSize,fontFamily:i.fontFamily,lineHeight:`${i.stepsIconSize}px`,textAlign:"center",borderRadius:i.stepsIconSize,border:`${i.lineWidth}px ${i.lineType} transparent`,transition:`background-color ${e}, border-color ${e}`,[`${t}-icon`]:{position:"relative",top:i.stepsIconTop,color:i.colorPrimary,lineHeight:1}},[`${n}-tail`]:{position:"absolute",top:i.stepsIconSize/2-i.paddingXXS,insetInlineStart:0,width:"100%","&::after":{display:"inline-block",width:"100%",height:i.lineWidth,background:i.colorSplit,borderRadius:i.lineWidth,transition:`background ${e}`,content:'""'}},[`${n}-title`]:{position:"relative",display:"inline-block",paddingInlineEnd:i.padding,color:i.colorText,fontSize:i.fontSizeLG,lineHeight:`${i.stepsTitleLineHeight}px`,"&::after":{position:"absolute",top:i.stepsTitleLineHeight/2,insetInlineStart:"100%",display:"block",width:9999,height:i.lineWidth,background:i.processTailColor,content:'""'}},[`${n}-subtitle`]:{display:"inline",marginInlineStart:i.marginXS,color:i.colorTextDescription,fontWeight:"normal",fontSize:i.fontSize},[`${n}-description`]:{color:i.colorTextDescription,fontSize:i.fontSize}},R(B.wait,i)),R(B.process,i)),{[`${n}-process > ${n}-container > ${n}-title`]:{fontWeight:i.fontWeightStrong}}),R(B.finish,i)),R(B.error,i)),{[`${n}${t}-next-error > ${t}-item-title::after`]:{background:i.colorError},[`${n}-disabled`]:{cursor:"not-allowed"}})},Mi=i=>{const{componentCls:t,motionDurationSlow:e}=i;return{[`& ${t}-item`]:{[`&:not(${t}-item-active)`]:{[`& > ${t}-item-container[role='button']`]:{cursor:"pointer",[`${t}-item`]:{[`&-title, &-subtitle, &-description, &-icon ${t}-icon`]:{transition:`color ${e}`}},"&:hover":{[`${t}-item`]:{["&-title, &-subtitle, &-description"]:{color:i.colorPrimary}}}},[`&:not(${t}-item-process)`]:{[`& > ${t}-item-container[role='button']:hover`]:{[`${t}-item`]:{"&-icon":{borderColor:i.colorPrimary,[`${t}-icon`]:{color:i.colorPrimary}}}}}}},[`&${t}-horizontal:not(${t}-label-vertical)`]:{[`${t}-item`]:{paddingInlineStart:i.padding,whiteSpace:"nowrap","&:first-child":{paddingInlineStart:0},[`&:last-child ${t}-item-title`]:{paddingInlineEnd:0},"&-tail":{display:"none"},"&-description":{maxWidth:i.descriptionWidth,whiteSpace:"normal"}}}}},Ni=i=>{const{componentCls:t}=i;return{[t]:s(s(s(s(s(s(s(s(s(s(s(s(s({},ti(i)),{display:"flex",width:"100%",fontSize:0,textAlign:"initial"}),Bi(i)),Mi(i)),Si(i)),Di(i)),Wi(i)),ui(i)),xi(i)),Ii(i)),zi(i)),Ci(i)),Hi(i))}},Ri=k("Steps",i=>{const{wireframe:t,colorTextDisabled:e,fontSizeHeading3:n,fontSize:o,controlHeight:r,controlHeightLG:b,colorTextLightSolid:m,colorText:l,colorPrimary:c,colorTextLabel:I,colorTextDescription:a,colorTextQuaternary:x,colorFillContent:S,controlItemBgActive:C,colorError:d,colorBgContainer:y,colorBorderSecondary:w}=i,$=i.controlHeight,f=i.colorSplit,h=ii(i,{processTailColor:f,stepsNavArrowColor:e,stepsIconSize:$,stepsIconCustomSize:$,stepsIconCustomTop:0,stepsIconCustomFontSize:b/2,stepsIconTop:-.5,stepsIconFontSize:o,stepsTitleLineHeight:r,stepsSmallIconSize:n,stepsDotSize:r/4,stepsCurrentDotSize:b/4,stepsNavContentMaxWidth:"auto",processIconColor:m,processTitleColor:l,processDescriptionColor:l,processIconBgColor:c,processIconBorderColor:c,processDotColor:c,waitIconColor:t?e:I,waitTitleColor:a,waitDescriptionColor:a,waitTailColor:f,waitIconBgColor:t?y:S,waitIconBorderColor:t?e:"transparent",waitDotColor:e,finishIconColor:c,finishTitleColor:l,finishDescriptionColor:a,finishTailColor:c,finishIconBgColor:t?y:C,finishIconBorderColor:t?c:C,finishDotColor:c,errorIconColor:m,errorTitleColor:d,errorDescriptionColor:d,errorTailColor:f,errorIconBgColor:d,errorIconBorderColor:d,errorDotColor:d,stepsNavActiveColor:c,stepsProgressSize:b,inlineDotSize:6,inlineTitleColor:x,inlineTailColor:w});return[Ni(h)]},{descriptionWidth:140}),Ai=()=>({prefixCls:String,iconPrefix:String,current:Number,initial:Number,percent:Number,responsive:K(),items:li(),labelPlacement:P(),status:P(),size:P(),direction:P(),progressDot:si([Boolean,Function]),type:P(),onChange:T(),"onUpdate:current":T()}),O=L({compatConfig:{MODE:3},name:"ASteps",inheritAttrs:!1,props:ei(Ai(),{current:0,responsive:!0,labelPlacement:"horizontal"}),slots:Object,setup(i,t){let{attrs:e,slots:n,emit:o}=t;const{prefixCls:r,direction:b,configProvider:m}=ni("steps",i),[l,c]=Ri(r),[,I]=oi(),a=ri(),x=M(()=>i.responsive&&a.value.xs?"vertical":i.direction),S=M(()=>m.getPrefixCls("",i.iconPrefix)),C=f=>{o("update:current",f),o("change",f)},d=M(()=>i.type==="inline"),y=M(()=>d.value?void 0:i.percent),w=f=>{let{node:h,status:u}=f;if(u==="process"&&i.percent!==void 0){const v=i.size==="small"?I.value.controlHeight:I.value.controlHeightLG;return g("div",{class:`${r.value}-progress-icon`},[g(ai,{type:"circle",percent:y.value,size:v,strokeWidth:4,format:()=>null},null),h])}return h},$=M(()=>({finish:g(ci,{class:`${r.value}-finish-icon`},null),error:g(di,{class:`${r.value}-error-icon`},null)}));return()=>{const f=A({[`${r.value}-rtl`]:b.value==="rtl",[`${r.value}-with-progress`]:y.value!==void 0},e.class,c.value),h=(u,v)=>u.description?g(pi,{title:u.description},{default:()=>[v]}):v;return l(g($i,z(z(z({icons:$.value},e),F(i,["percent","responsive"])),{},{items:i.items,direction:x.value,prefixCls:r.value,iconPrefix:S.value,class:f,onChange:C,isInline:d.value,itemRender:d.value?h:void 0}),s({stepIcon:w},n)))}}}),j=L(s(s({compatConfig:{MODE:3}},U),{name:"AStep",props:V()})),_i=s(O,{Step:j,install:i=>(i.component(O.name,O),i.component(j.name,j),i)});export{_i as A,j as S};
//# sourceMappingURL=index.e8676a72.js.map
