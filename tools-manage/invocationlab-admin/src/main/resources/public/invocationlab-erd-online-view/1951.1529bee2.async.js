(self.webpackChunkInvocationlab_ERD_Online=self.webpackChunkInvocationlab_ERD_Online||[]).push([[1951],{87098:function(re,O,a){"use strict";a.d(O,{Z:function(){return X}});var n=a(7421),S=a.n(n),k=a(98404),q=a(72577),U=a(48188),y=a(42771),h=a(41809);const C=s=>{const{componentCls:u,sizePaddingEdgeHorizontal:R,colorSplit:p,lineWidth:E}=s;return{[u]:Object.assign(Object.assign({},(0,U.Wf)(s)),{borderBlockStart:`${E}px solid ${p}`,"&-vertical":{position:"relative",top:"-0.06em",display:"inline-block",height:"0.9em",margin:`0 ${s.dividerVerticalGutterMargin}px`,verticalAlign:"middle",borderTop:0,borderInlineStart:`${E}px solid ${p}`},"&-horizontal":{display:"flex",clear:"both",width:"100%",minWidth:"100%",margin:`${s.dividerHorizontalGutterMargin}px 0`},[`&-horizontal${u}-with-text`]:{display:"flex",alignItems:"center",margin:`${s.dividerHorizontalWithTextGutterMargin}px 0`,color:s.colorTextHeading,fontWeight:500,fontSize:s.fontSizeLG,whiteSpace:"nowrap",textAlign:"center",borderBlockStart:`0 ${p}`,"&::before, &::after":{position:"relative",width:"50%",borderBlockStart:`${E}px solid transparent`,borderBlockStartColor:"inherit",borderBlockEnd:0,transform:"translateY(50%)",content:"''"}},[`&-horizontal${u}-with-text-left`]:{"&::before":{width:"5%"},"&::after":{width:"95%"}},[`&-horizontal${u}-with-text-right`]:{"&::before":{width:"95%"},"&::after":{width:"5%"}},[`${u}-inner-text`]:{display:"inline-block",padding:"0 1em"},"&-dashed":{background:"none",borderColor:p,borderStyle:"dashed",borderWidth:`${E}px 0 0`},[`&-horizontal${u}-with-text${u}-dashed`]:{"&::before, &::after":{borderStyle:"dashed none none"}},[`&-vertical${u}-dashed`]:{borderInlineStartWidth:E,borderInlineEnd:0,borderBlockStart:0,borderBlockEnd:0},[`&-plain${u}-with-text`]:{color:s.colorText,fontWeight:"normal",fontSize:s.fontSize},[`&-horizontal${u}-with-text-left${u}-no-default-orientation-margin-left`]:{"&::before":{width:0},"&::after":{width:"100%"},[`${u}-inner-text`]:{paddingInlineStart:R}},[`&-horizontal${u}-with-text-right${u}-no-default-orientation-margin-right`]:{"&::before":{width:"100%"},"&::after":{width:0},[`${u}-inner-text`]:{paddingInlineEnd:R}}})}};var G=(0,y.Z)("Divider",s=>{const u=(0,h.TS)(s,{dividerVerticalGutterMargin:s.marginXS,dividerHorizontalWithTextGutterMargin:s.margin,dividerHorizontalGutterMargin:s.marginLG});return[C(u)]},{sizePaddingEdgeHorizontal:0}),Q=function(s,u){var R={};for(var p in s)Object.prototype.hasOwnProperty.call(s,p)&&u.indexOf(p)<0&&(R[p]=s[p]);if(s!=null&&typeof Object.getOwnPropertySymbols=="function")for(var E=0,p=Object.getOwnPropertySymbols(s);E<p.length;E++)u.indexOf(p[E])<0&&Object.prototype.propertyIsEnumerable.call(s,p[E])&&(R[p[E]]=s[p[E]]);return R},X=s=>{const{getPrefixCls:u,direction:R}=k.useContext(q.E_),{prefixCls:p,type:E="horizontal",orientation:_="center",orientationMargin:le,className:Ie,rootClassName:me,children:de,dashed:fe,plain:Re}=s,Pe=Q(s,["prefixCls","type","orientation","orientationMargin","className","rootClassName","children","dashed","plain"]),B=u("divider",p),[he,Le]=G(B),De=_.length>0?`-${_}`:_,be=!!de,Ee=_==="left"&&le!=null,xe=_==="right"&&le!=null,ze=S()(B,Le,`${B}-${E}`,{[`${B}-with-text`]:be,[`${B}-with-text${De}`]:be,[`${B}-dashed`]:!!fe,[`${B}-plain`]:!!Re,[`${B}-rtl`]:R==="rtl",[`${B}-no-default-orientation-margin-left`]:Ee,[`${B}-no-default-orientation-margin-right`]:xe},Ie,me),Ne=Object.assign(Object.assign({},Ee&&{marginLeft:le}),xe&&{marginRight:le});return he(k.createElement("div",Object.assign({className:ze},Pe,{role:"separator"}),de&&E!=="vertical"&&k.createElement("span",{className:`${B}-inner-text`,style:Ne},de)))}},23731:function(re,O,a){"use strict";a.d(O,{N:function(){return n}});const n=S=>({color:S.colorLink,textDecoration:"none",outline:"none",cursor:"pointer",transition:`color ${S.motionDurationSlow}`,"&:focus, &:hover":{color:S.colorLinkHover},"&:active":{color:S.colorLinkActive}})},81824:function(re,O,a){"use strict";a.d(O,{Z:function(){return Pt}});var n=a(98404),S=a(54427),k=a(57804),q=a(87006),U=a(72067),y=a(41566),h=function(o,r){return n.createElement(y.Z,(0,q.Z)({},o,{ref:r,icon:U.Z}))},C=n.forwardRef(h),G=a(7421),Q=a.n(G),ie=a(93486),X=a.n(ie),s=a(23133),u=a(6702),R=a(38065),p=a(49687),E=a(43210),_=a(26884),le=a(72577),Ie=a(60679),me=a(45836),de=a(13694),fe=a(90217),Re=function(e,o){var r={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&o.indexOf(t)<0&&(r[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,t=Object.getOwnPropertySymbols(e);i<t.length;i++)o.indexOf(t[i])<0&&Object.prototype.propertyIsEnumerable.call(e,t[i])&&(r[t[i]]=e[t[i]]);return r};const Pe={border:0,background:"transparent",padding:0,lineHeight:"inherit",display:"inline-block"};var he=n.forwardRef((e,o)=>{const r=b=>{const{keyCode:d}=b;d===fe.Z.ENTER&&b.preventDefault()},t=b=>{const{keyCode:d}=b,{onClick:L}=e;d===fe.Z.ENTER&&L&&L()},{style:i,noStyle:v,disabled:w}=e,P=Re(e,["style","noStyle","disabled"]);let m={};return v||(m=Object.assign({},Pe)),w&&(m.pointerEvents="none"),m=Object.assign(Object.assign({},m),i),n.createElement("div",Object.assign({role:"button",tabIndex:0,ref:o},P,{onKeyDown:r,onKeyUp:t,style:m}))}),Le={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M864 170h-60c-4.4 0-8 3.6-8 8v518H310v-73c0-6.7-7.8-10.5-13-6.3l-141.9 112a8 8 0 000 12.6l141.9 112c5.3 4.2 13 .4 13-6.3v-75h498c35.3 0 64-28.7 64-64V178c0-4.4-3.6-8-8-8z"}}]},name:"enter",theme:"outlined"},De=Le,be=function(o,r){return n.createElement(y.Z,(0,q.Z)({},o,{ref:r,icon:De}))},Ee=n.forwardRef(be),xe=a(84448),ze=a(10501),Ne=a(42771),nt=a(36834),ot=a(73862),Ze=a(23731);const rt=(e,o,r,t)=>{const{sizeMarginHeadingVerticalEnd:i,fontWeightStrong:v}=t;return{marginBottom:i,color:r,fontWeight:v,fontSize:e,lineHeight:o}},it=e=>{const o=[1,2,3,4,5],r={};return o.forEach(t=>{r[`
      h${t}&,
      div&-h${t},
      div&-h${t} > textarea,
      h${t}
    `]=rt(e[`fontSizeHeading${t}`],e[`lineHeightHeading${t}`],e.colorTextHeading,e)}),r},lt=e=>{const{componentCls:o}=e;return{"a&, a":Object.assign(Object.assign({},(0,Ze.N)(e)),{textDecoration:e.linkDecoration,"&:active, &:hover":{textDecoration:e.linkHoverDecoration},[`&[disabled], &${o}-disabled`]:{color:e.colorTextDisabled,cursor:"not-allowed","&:active, &:hover":{color:e.colorTextDisabled},"&:active":{pointerEvents:"none"}}})}},at=e=>({code:{margin:"0 0.2em",paddingInline:"0.4em",paddingBlock:"0.2em 0.1em",fontSize:"85%",fontFamily:e.fontFamilyCode,background:"rgba(150, 150, 150, 0.1)",border:"1px solid rgba(100, 100, 100, 0.2)",borderRadius:3},kbd:{margin:"0 0.2em",paddingInline:"0.4em",paddingBlock:"0.15em 0.1em",fontSize:"90%",fontFamily:e.fontFamilyCode,background:"rgba(150, 150, 150, 0.06)",border:"1px solid rgba(100, 100, 100, 0.2)",borderBottomWidth:2,borderRadius:3},mark:{padding:0,backgroundColor:nt.gold[2]},"u, ins":{textDecoration:"underline",textDecorationSkipInk:"auto"},"s, del":{textDecoration:"line-through"},strong:{fontWeight:600},"ul, ol":{marginInline:0,marginBlock:"0 1em",padding:0,li:{marginInline:"20px 0",marginBlock:0,paddingInline:"4px 0",paddingBlock:0}},ul:{listStyleType:"circle",ul:{listStyleType:"disc"}},ol:{listStyleType:"decimal"},"pre, blockquote":{margin:"1em 0"},pre:{padding:"0.4em 0.6em",whiteSpace:"pre-wrap",wordWrap:"break-word",background:"rgba(150, 150, 150, 0.1)",border:"1px solid rgba(100, 100, 100, 0.2)",borderRadius:3,fontFamily:e.fontFamilyCode,code:{display:"inline",margin:0,padding:0,fontSize:"inherit",fontFamily:"inherit",background:"transparent",border:0}},blockquote:{paddingInline:"0.6em 0",paddingBlock:0,borderInlineStart:"4px solid rgba(100, 100, 100, 0.2)",opacity:.85}}),st=e=>{const{componentCls:o}=e,t=(0,ot.e5)(e).inputPaddingVertical+1;return{"&-edit-content":{position:"relative","div&":{insetInlineStart:-e.paddingSM,marginTop:-t,marginBottom:`calc(1em - ${t}px)`},[`${o}-edit-content-confirm`]:{position:"absolute",insetInlineEnd:e.marginXS+2,insetBlockEnd:e.marginXS,color:e.colorTextDescription,fontWeight:"normal",fontSize:e.fontSize,fontStyle:"normal",pointerEvents:"none"},textarea:{margin:"0!important",MozTransition:"none",height:"1em"}}}},ct=e=>({"&-copy-success":{[`
    &,
    &:hover,
    &:focus`]:{color:e.colorSuccess}}}),dt=()=>({[`
  a&-ellipsis,
  span&-ellipsis
  `]:{display:"inline-block",maxWidth:"100%"},"&-single-line":{whiteSpace:"nowrap"},"&-ellipsis-single-line":{overflow:"hidden",textOverflow:"ellipsis","a&, span&":{verticalAlign:"bottom"}},"&-ellipsis-multiple-line":{display:"-webkit-box",overflow:"hidden",WebkitLineClamp:3,WebkitBoxOrient:"vertical"}}),ft=e=>{const{componentCls:o,sizeMarginHeadingVerticalStart:r}=e;return{[o]:Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({color:e.colorText,wordBreak:"break-word",lineHeight:e.lineHeight,[`&${o}-secondary`]:{color:e.colorTextDescription},[`&${o}-success`]:{color:e.colorSuccess},[`&${o}-warning`]:{color:e.colorWarning},[`&${o}-danger`]:{color:e.colorError,"a&:active, a&:focus":{color:e.colorErrorActive},"a&:hover":{color:e.colorErrorHover}},[`&${o}-disabled`]:{color:e.colorTextDisabled,cursor:"not-allowed",userSelect:"none"},[`
        div&,
        p
      `]:{marginBottom:"1em"}},it(e)),{[`
      & + h1${o},
      & + h2${o},
      & + h3${o},
      & + h4${o},
      & + h5${o}
      `]:{marginTop:r},[`
      div,
      ul,
      li,
      p,
      h1,
      h2,
      h3,
      h4,
      h5`]:{[`
        + h1,
        + h2,
        + h3,
        + h4,
        + h5
        `]:{marginTop:r}}}),at(e)),lt(e)),{[`
        ${o}-expand,
        ${o}-edit,
        ${o}-copy
      `]:Object.assign(Object.assign({},(0,Ze.N)(e)),{marginInlineStart:e.marginXXS})}),st(e)),ct(e)),dt()),{"&-rtl":{direction:"rtl"}})}};var We=(0,Ne.Z)("Typography",e=>[ft(e)],{sizeMarginHeadingVerticalStart:"1.2em",sizeMarginHeadingVerticalEnd:"0.5em"}),ut=e=>{let{prefixCls:o,"aria-label":r,className:t,style:i,direction:v,maxLength:w,autoSize:P=!0,value:m,onSave:b,onCancel:d,onEnd:L,component:x,enterIcon:Z=n.createElement(Ee,null)}=e;const I=n.useRef(null),N=n.useRef(!1),Y=n.useRef(),[K,M]=n.useState(m);n.useEffect(()=>{M(m)},[m]),n.useEffect(()=>{if(I.current&&I.current.resizableTextArea){const{textArea:z}=I.current.resizableTextArea;z.focus();const{length:W}=z.value;z.setSelectionRange(W,W)}},[]);const f=z=>{let{target:W}=z;M(W.value.replace(/[\n\r]/g,""))},ae=()=>{N.current=!0},se=()=>{N.current=!1},$=z=>{let{keyCode:W}=z;N.current||(Y.current=W)},ue=()=>{b(K.trim())},T=z=>{let{keyCode:W,ctrlKey:Be,altKey:ve,metaKey:te,shiftKey:pe}=z;Y.current===W&&!N.current&&!Be&&!ve&&!te&&!pe&&(W===fe.Z.ENTER?(ue(),L==null||L()):W===fe.Z.ESC&&d())},g=()=>{ue()},H=x?`${o}-${x}`:"",[ce,ee]=We(o),J=Q()(o,`${o}-edit-content`,{[`${o}-rtl`]:v==="rtl"},t,H,ee);return ce(n.createElement("div",{className:J,style:i},n.createElement(xe.Z,{ref:I,maxLength:w,value:K,onChange:f,onKeyDown:$,onKeyUp:T,onCompositionStart:ae,onCompositionEnd:se,onBlur:g,"aria-label":r,rows:1,autoSize:P}),Z!==null?(0,ze.Tm)(Z,{className:`${o}-edit-content-confirm`}):null))};function Me(e,o){return n.useMemo(()=>{const r=!!e;return[r,Object.assign(Object.assign({},o),r&&typeof e=="object"?e:null)]},[e])}var pt=(e,o)=>{const r=n.useRef(!1);n.useEffect(()=>{r.current?e():r.current=!0},o)},gt=function(e,o){var r={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&o.indexOf(t)<0&&(r[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,t=Object.getOwnPropertySymbols(e);i<t.length;i++)o.indexOf(t[i])<0&&Object.prototype.propertyIsEnumerable.call(e,t[i])&&(r[t[i]]=e[t[i]]);return r},Ae=n.forwardRef((e,o)=>{var{prefixCls:r,component:t="article",className:i,rootClassName:v,setContentRef:w,children:P,direction:m}=e,b=gt(e,["prefixCls","component","className","rootClassName","setContentRef","children","direction"]);const{getPrefixCls:d,direction:L}=n.useContext(le.E_),x=m!=null?m:L;let Z=o;w&&(Z=(0,_.sQ)(o,w));const I=d("typography",r),[N,Y]=We(I),K=Q()(I,{[`${I}-rtl`]:x==="rtl"},i,v,Y);return N(n.createElement(t,Object.assign({className:K,ref:Z},b),P))});function ke(e){const o=typeof e;return o==="string"||o==="number"}function mt(e){let o=0;return e.forEach(r=>{ke(r)?o+=String(r).length:o+=1}),o}function Ue(e,o){let r=0;const t=[];for(let i=0;i<e.length;i+=1){if(r===o)return t;const v=e[i],P=ke(v)?String(v).length:1,m=r+P;if(m>o){const b=o-r;return t.push(String(v).slice(0,b)),t}t.push(v),r=m}return e}const yt=0,Se=1,Ke=2,He=3,Fe=4;var vt=e=>{let{enabledMeasure:o,children:r,text:t,width:i,fontSize:v,rows:w,onEllipsis:P}=e;const[[m,b,d],L]=n.useState([0,0,0]),[x,Z]=n.useState(yt),[I,N]=n.useState(0),Y=n.useRef(null),K=n.useRef(null),M=n.useMemo(()=>(0,u.Z)(t),[t]),f=n.useMemo(()=>mt(M),[M]),ae=n.useMemo(()=>!o||x!==He?r(M,!1):r(Ue(M,b),b<f),[o,x,r,M,b,f]);(0,R.Z)(()=>{o&&i&&v&&f&&(Z(Se),L([0,Math.ceil(f/2),f]))},[o,i,v,t,f,w]),(0,R.Z)(()=>{var T;x===Se&&N(((T=Y.current)===null||T===void 0?void 0:T.offsetHeight)||0)},[x]),(0,R.Z)(()=>{var T,g;if(I){if(x===Se){const H=((T=K.current)===null||T===void 0?void 0:T.offsetHeight)||0,ce=w*I;H<=ce?(Z(Fe),P(!1)):Z(Ke)}else if(x===Ke)if(m!==d){const H=((g=K.current)===null||g===void 0?void 0:g.offsetHeight)||0,ce=w*I;let ee=m,J=d;m===d-1?J=m:H<=ce?ee=b:J=b;const z=Math.ceil((ee+J)/2);L([ee,z,J])}else Z(He),P(!0)}},[x,m,d,w,I]);const se={width:i,whiteSpace:"normal",margin:0,padding:0},$=(T,g,H)=>n.createElement("span",{"aria-hidden":!0,ref:g,style:Object.assign({position:"fixed",display:"block",left:0,top:0,zIndex:-9999,visibility:"hidden",pointerEvents:"none",fontSize:Math.floor(v/2)*2},H)},T),ue=(T,g)=>{const H=Ue(M,T);return $(r(H,!0),g,se)};return n.createElement(n.Fragment,null,ae,o&&x!==He&&x!==Fe&&n.createElement(n.Fragment,null,$("lg",Y,{wordBreak:"keep-all",whiteSpace:"nowrap"}),x===Se?$(r(M,!1),K,se):ue(b,K)))},ht=e=>{let{enabledEllipsis:o,isEllipsis:r,children:t,tooltipProps:i}=e;return!(i!=null&&i.title)||!o?t:n.createElement(me.Z,Object.assign({open:r?void 0:!1},i),t)},bt=function(e,o){var r={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&o.indexOf(t)<0&&(r[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,t=Object.getOwnPropertySymbols(e);i<t.length;i++)o.indexOf(t[i])<0&&Object.prototype.propertyIsEnumerable.call(e,t[i])&&(r[t[i]]=e[t[i]]);return r};function Et(e,o){let{mark:r,code:t,underline:i,delete:v,strong:w,keyboard:P,italic:m}=e,b=o;function d(L,x){x&&(b=n.createElement(L,{},b))}return d("strong",w),d("u",i),d("del",v),d("code",t),d("mark",r),d("kbd",P),d("i",m),b}function Oe(e,o,r){return e===!0||e===void 0?o:e||r&&o}function Ve(e){return e===!1?[!1,!1]:Array.isArray(e)?e:[e]}const xt="...";var Ce=n.forwardRef((e,o)=>{var r,t,i;const{prefixCls:v,className:w,style:P,type:m,disabled:b,children:d,ellipsis:L,editable:x,copyable:Z,component:I,title:N}=e,Y=bt(e,["prefixCls","className","style","type","disabled","children","ellipsis","editable","copyable","component","title"]),{getPrefixCls:K,direction:M}=n.useContext(le.E_),[f]=(0,Ie.Z)("Text"),ae=n.useRef(null),se=n.useRef(null),$=K("typography",v),ue=(0,E.Z)(Y,["mark","code","delete","underline","strong","keyboard","italic"]),[T,g]=Me(x),[H,ce]=(0,p.Z)(!1,{value:g.editing}),{triggerType:ee=["icon"]}=g,J=l=>{var c;l&&((c=g.onStart)===null||c===void 0||c.call(g)),ce(l)};pt(()=>{var l;H||(l=se.current)===null||l===void 0||l.focus()},[H]);const z=l=>{l==null||l.preventDefault(),J(!0)},W=l=>{var c;(c=g.onChange)===null||c===void 0||c.call(g,l),J(!1)},Be=()=>{var l;(l=g.onCancel)===null||l===void 0||l.call(g),J(!1)},[ve,te]=Me(Z),[pe,Ge]=n.useState(!1),Xe=n.useRef(),Je={};te.format&&(Je.format=te.format);const Qe=()=>{window.clearTimeout(Xe.current)},Lt=l=>{var c;l==null||l.preventDefault(),l==null||l.stopPropagation(),X()(te.text||String(d)||"",Je),Ge(!0),Qe(),Xe.current=window.setTimeout(()=>{Ge(!1)},3e3),(c=te.onCopy)===null||c===void 0||c.call(te,l)};n.useEffect(()=>Qe,[]);const[Ye,Dt]=n.useState(!1),[qe,zt]=n.useState(!1),[Nt,Mt]=n.useState(!1),[_e,Ht]=n.useState(!1),[et,Bt]=n.useState(!1),[Zt,Wt]=n.useState(!0),[ne,j]=Me(L,{expandable:!1}),F=ne&&!Nt,{rows:ge=1}=j,we=n.useMemo(()=>!F||j.suffix!==void 0||j.onEllipsis||j.expandable||T||ve,[F,j,T,ve]);(0,R.Z)(()=>{ne&&!we&&(Dt((0,de.G)("webkitLineClamp")),zt((0,de.G)("textOverflow")))},[we,ne]);const V=n.useMemo(()=>we?!1:ge===1?qe:Ye,[we,qe,Ye]),tt=F&&(V?et:_e),At=F&&ge===1&&V,$e=F&&ge>1&&V,kt=l=>{var c;Mt(!0),(c=j.onExpand)===null||c===void 0||c.call(j,l)},[Ut,Kt]=n.useState(0),[Ft,Vt]=n.useState(0),Gt=(l,c)=>{let{offsetWidth:D}=l;var A;Kt(D),Vt(parseInt((A=window.getComputedStyle)===null||A===void 0?void 0:A.call(window,c).fontSize,10)||0)},Xt=l=>{var c;Ht(l),_e!==l&&((c=j.onEllipsis)===null||c===void 0||c.call(j,l))};n.useEffect(()=>{const l=ae.current;if(ne&&V&&l){const c=$e?l.offsetHeight<l.scrollHeight:l.offsetWidth<l.scrollWidth;et!==c&&Bt(c)}},[ne,V,d,$e,Zt]),n.useEffect(()=>{const l=ae.current;if(typeof IntersectionObserver=="undefined"||!l||!V||!F)return;const c=new IntersectionObserver(()=>{Wt(!!l.offsetParent)});return c.observe(l),()=>{c.disconnect()}},[V,F]);let oe={};j.tooltip===!0?oe={title:(r=g.text)!==null&&r!==void 0?r:d}:n.isValidElement(j.tooltip)?oe={title:j.tooltip}:typeof j.tooltip=="object"?oe=Object.assign({title:(t=g.text)!==null&&t!==void 0?t:d},j.tooltip):oe={title:j.tooltip};const Te=n.useMemo(()=>{const l=c=>["string","number"].includes(typeof c);if(!(!ne||V)){if(l(g.text))return g.text;if(l(d))return d;if(l(N))return N;if(l(oe.title))return oe.title}},[ne,V,N,oe.title,tt]);if(H)return n.createElement(ut,{value:(i=g.text)!==null&&i!==void 0?i:typeof d=="string"?d:"",onSave:W,onCancel:Be,onEnd:g.onEnd,prefixCls:$,className:w,style:P,direction:M,component:I,maxLength:g.maxLength,autoSize:g.autoSize,enterIcon:g.enterIcon});const Jt=()=>{const{expandable:l,symbol:c}=j;if(!l)return null;let D;return c?D=c:D=f==null?void 0:f.expand,n.createElement("a",{key:"expand",className:`${$}-expand`,onClick:kt,"aria-label":f==null?void 0:f.expand},D)},Qt=()=>{if(!T)return;const{icon:l,tooltip:c}=g,D=(0,u.Z)(c)[0]||(f==null?void 0:f.edit),A=typeof D=="string"?D:"";return ee.includes("icon")?n.createElement(me.Z,{key:"edit",title:c===!1?"":D},n.createElement(he,{ref:se,className:`${$}-edit`,onClick:z,"aria-label":A},l||n.createElement(C,{role:"button"}))):null},Yt=()=>{if(!ve)return;const{tooltips:l,icon:c}=te,D=Ve(l),A=Ve(c),je=pe?Oe(D[1],f==null?void 0:f.copied):Oe(D[0],f==null?void 0:f.copy),en=pe?f==null?void 0:f.copied:f==null?void 0:f.copy,tn=typeof je=="string"?je:en;return n.createElement(me.Z,{key:"copy",title:je},n.createElement(he,{className:Q()(`${$}-copy`,pe&&`${$}-copy-success`),onClick:Lt,"aria-label":tn},pe?Oe(A[1],n.createElement(S.Z,null),!0):Oe(A[0],n.createElement(k.Z,null),!0)))},qt=l=>[l&&Jt(),Qt(),Yt()],_t=l=>[l&&n.createElement("span",{"aria-hidden":!0,key:"ellipsis"},xt),j.suffix,qt(l)];return n.createElement(s.Z,{onResize:Gt,disabled:!F||V},l=>n.createElement(ht,{tooltipProps:oe,enabledEllipsis:F,isEllipsis:tt},n.createElement(Ae,Object.assign({className:Q()({[`${$}-${m}`]:m,[`${$}-disabled`]:b,[`${$}-ellipsis`]:ne,[`${$}-single-line`]:F&&ge===1,[`${$}-ellipsis-single-line`]:At,[`${$}-ellipsis-multiple-line`]:$e},w),prefixCls:v,style:Object.assign(Object.assign({},P),{WebkitLineClamp:$e?ge:void 0}),component:I,ref:(0,_.sQ)(l,ae,o),direction:M,onClick:ee.includes("text")?z:void 0,"aria-label":Te==null?void 0:Te.toString(),title:N},ue),n.createElement(vt,{enabledMeasure:F&&!V,text:d,rows:ge,width:Ut,fontSize:Ft,onEllipsis:Xt},(c,D)=>{let A=c;return c.length&&D&&Te&&(A=n.createElement("span",{key:"show-content","aria-hidden":!0},A)),Et(e,n.createElement(n.Fragment,null,A,_t(D)))}))))}),St=function(e,o){var r={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&o.indexOf(t)<0&&(r[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,t=Object.getOwnPropertySymbols(e);i<t.length;i++)o.indexOf(t[i])<0&&Object.prototype.propertyIsEnumerable.call(e,t[i])&&(r[t[i]]=e[t[i]]);return r},Ot=n.forwardRef((e,o)=>{var{ellipsis:r,rel:t}=e,i=St(e,["ellipsis","rel"]);const v=Object.assign(Object.assign({},i),{rel:t===void 0&&i.target==="_blank"?"noopener noreferrer":t});return delete v.navigate,n.createElement(Ce,Object.assign({},v,{ref:o,ellipsis:!!r,component:"a"}))}),Ct=n.forwardRef((e,o)=>n.createElement(Ce,Object.assign({ref:o},e,{component:"div"}))),wt=function(e,o){var r={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&o.indexOf(t)<0&&(r[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,t=Object.getOwnPropertySymbols(e);i<t.length;i++)o.indexOf(t[i])<0&&Object.prototype.propertyIsEnumerable.call(e,t[i])&&(r[t[i]]=e[t[i]]);return r};const $t=(e,o)=>{var{ellipsis:r}=e,t=wt(e,["ellipsis"]);const i=n.useMemo(()=>r&&typeof r=="object"?(0,E.Z)(r,["expandable","rows"]):r,[r]);return n.createElement(Ce,Object.assign({ref:o},t,{ellipsis:i,component:"span"}))};var Tt=n.forwardRef($t),jt=function(e,o){var r={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&o.indexOf(t)<0&&(r[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,t=Object.getOwnPropertySymbols(e);i<t.length;i++)o.indexOf(t[i])<0&&Object.prototype.propertyIsEnumerable.call(e,t[i])&&(r[t[i]]=e[t[i]]);return r};const It=[1,2,3,4,5];var Rt=n.forwardRef((e,o)=>{const{level:r=1}=e,t=jt(e,["level"]);let i;return It.includes(r)?i=`h${r}`:i="h1",n.createElement(Ce,Object.assign({ref:o},t,{component:i}))});const ye=Ae;ye.Text=Tt,ye.Link=Ot,ye.Title=Rt,ye.Paragraph=Ct;var Pt=ye},93486:function(re,O,a){"use strict";var n=a(6889),S={"text/plain":"Text","text/html":"Url",default:"Text"},k="Copy to clipboard: #{key}, Enter";function q(y){var h=(/mac os x/i.test(navigator.userAgent)?"\u2318":"Ctrl")+"+C";return y.replace(/#{\s*key\s*}/g,h)}function U(y,h){var C,G,Q,ie,X,s,u=!1;h||(h={}),C=h.debug||!1;try{Q=n(),ie=document.createRange(),X=document.getSelection(),s=document.createElement("span"),s.textContent=y,s.ariaHidden="true",s.style.all="unset",s.style.position="fixed",s.style.top=0,s.style.clip="rect(0, 0, 0, 0)",s.style.whiteSpace="pre",s.style.webkitUserSelect="text",s.style.MozUserSelect="text",s.style.msUserSelect="text",s.style.userSelect="text",s.addEventListener("copy",function(p){if(p.stopPropagation(),h.format)if(p.preventDefault(),typeof p.clipboardData=="undefined"){C&&console.warn("unable to use e.clipboardData"),C&&console.warn("trying IE specific stuff"),window.clipboardData.clearData();var E=S[h.format]||S.default;window.clipboardData.setData(E,y)}else p.clipboardData.clearData(),p.clipboardData.setData(h.format,y);h.onCopy&&(p.preventDefault(),h.onCopy(p.clipboardData))}),document.body.appendChild(s),ie.selectNodeContents(s),X.addRange(ie);var R=document.execCommand("copy");if(!R)throw new Error("copy command was unsuccessful");u=!0}catch(p){C&&console.error("unable to copy using execCommand: ",p),C&&console.warn("trying IE specific stuff");try{window.clipboardData.setData(h.format||"text",y),h.onCopy&&h.onCopy(window.clipboardData),u=!0}catch(E){C&&console.error("unable to copy using clipboardData: ",E),C&&console.error("falling back to prompt"),G=q("message"in h?h.message:k),window.prompt(G,y)}}finally{X&&(typeof X.removeRange=="function"?X.removeRange(ie):X.removeAllRanges()),s&&document.body.removeChild(s),Q()}return u}re.exports=U},13694:function(re,O,a){"use strict";a.d(O,{G:function(){return q}});var n=a(69983),S=function(y){if((0,n.Z)()&&window.document.documentElement){var h=Array.isArray(y)?y:[y],C=window.document.documentElement;return h.some(function(G){return G in C.style})}return!1},k=function(y,h){if(!S(y))return!1;var C=document.createElement("div"),G=C.style[y];return C.style[y]=h,C.style[y]!==G};function q(U,y){return!Array.isArray(U)&&y!==void 0?k(U,y):S(U)}},6889:function(re){re.exports=function(){var O=document.getSelection();if(!O.rangeCount)return function(){};for(var a=document.activeElement,n=[],S=0;S<O.rangeCount;S++)n.push(O.getRangeAt(S));switch(a.tagName.toUpperCase()){case"INPUT":case"TEXTAREA":a.blur();break;default:a=null;break}return O.removeAllRanges(),function(){O.type==="Caret"&&O.removeAllRanges(),O.rangeCount||n.forEach(function(k){O.addRange(k)}),a&&a.focus()}}}}]);