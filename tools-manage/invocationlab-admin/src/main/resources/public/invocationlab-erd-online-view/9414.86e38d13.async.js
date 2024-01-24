"use strict";(self.webpackChunkInvocationlab_ERD_Online=self.webpackChunkInvocationlab_ERD_Online||[]).push([[9414],{12004:function(fn,at,s){s.d(at,{Z:function(){return Be}});var L=s(14399),y=s(98404),w={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M176 511a56 56 0 10112 0 56 56 0 10-112 0zm280 0a56 56 0 10112 0 56 56 0 10-112 0zm280 0a56 56 0 10112 0 56 56 0 10-112 0z"}}]},name:"ellipsis",theme:"outlined"},ae=w,D=s(57028),k=function(R,Ce){return y.createElement(D.Z,(0,L.Z)({},R,{ref:Ce,icon:ae}))},Be=y.forwardRef(k)},1893:function(fn,at,s){s.d(at,{Z:function(){return xt}});var L=s(14399),y=s(32720),w=s(73068),ae=s(9169),D=s(18858),k=s(26869),Be=s.n(k),G=s(16904),R=s(98404),Ce=s(68825),Rt=s(25177),St=Ce.Z.ESC,r=Ce.Z.TAB;function Wt(v){var de=v.visible,T=v.triggerRef,ie=v.onVisibleChange,Re=v.autoFocus,z=v.overlayRef,X=R.useRef(!1),oe=function(){if(de){var j,me;(j=T.current)===null||j===void 0||(me=j.focus)===null||me===void 0||me.call(j),ie==null||ie(!1)}},Ne=function(){var j;return(j=z.current)!==null&&j!==void 0&&j.focus?(z.current.focus(),X.current=!0,!0):!1},be=function(j){switch(j.keyCode){case St:oe();break;case r:{var me=!1;X.current||(me=Ne()),me?j.preventDefault():oe();break}}};R.useEffect(function(){return de?(window.addEventListener("keydown",be),Re&&(0,Rt.Z)(Ne,3),function(){window.removeEventListener("keydown",be),X.current=!1}):function(){X.current=!1}},[de])}var Zt=(0,R.forwardRef)(function(v,de){var T=v.overlay,ie=v.arrow,Re=v.prefixCls,z=(0,R.useMemo)(function(){var oe;return typeof T=="function"?oe=T():oe=T,oe},[T]),X=(0,G.sQ)(de,z==null?void 0:z.ref);return R.createElement(R.Fragment,null,ie&&R.createElement("div",{className:"".concat(Re,"-arrow")}),R.cloneElement(z,{ref:(0,G.Yr)(z)?X:void 0}))}),Pt=Zt,ye={adjustX:1,adjustY:1},Ie=[0,0],jt={topLeft:{points:["bl","tl"],overflow:ye,offset:[0,-4],targetOffset:Ie},top:{points:["bc","tc"],overflow:ye,offset:[0,-4],targetOffset:Ie},topRight:{points:["br","tr"],overflow:ye,offset:[0,-4],targetOffset:Ie},bottomLeft:{points:["tl","bl"],overflow:ye,offset:[0,4],targetOffset:Ie},bottom:{points:["tc","bc"],overflow:ye,offset:[0,4],targetOffset:Ie},bottomRight:{points:["tr","br"],overflow:ye,offset:[0,4],targetOffset:Ie}},Y=jt,Bt=["arrow","prefixCls","transitionName","animation","align","placement","placements","getPopupContainer","showAction","hideAction","overlayClassName","overlayStyle","visible","trigger","autoFocus","overlay","children","onVisibleChange"];function Ee(v,de){var T,ie=v.arrow,Re=ie===void 0?!1:ie,z=v.prefixCls,X=z===void 0?"rc-dropdown":z,oe=v.transitionName,Ne=v.animation,be=v.align,He=v.placement,j=He===void 0?"bottomLeft":He,me=v.placements,dn=me===void 0?Y:me,le=v.getPopupContainer,Ke=v.showAction,it=v.hideAction,ot=v.overlayClassName,lt=v.overlayStyle,Ge=v.visible,we=v.trigger,ut=we===void 0?["hover"]:we,Oe=v.autoFocus,Se=v.overlay,Ae=v.children,st=v.onVisibleChange,Gt=(0,ae.Z)(v,Bt),Yt=R.useState(),Ye=(0,w.Z)(Yt,2),Et=Ye[0],Xe=Ye[1],ct="visible"in v?Ge:Et,Nt=R.useRef(null),Je=R.useRef(null),vt=R.useRef(null);R.useImperativeHandle(de,function(){return Nt.current});var Kt=function(ue){Xe(ue),st==null||st(ue)};Wt({visible:ct,triggerRef:vt,onVisibleChange:Kt,autoFocus:Oe,overlayRef:Je});var ft=function(ue){var Qe=v.onOverlayClick;Xe(!1),Qe&&Qe(ue)},wt=function(){return R.createElement(Pt,{ref:Je,overlay:Se,prefixCls:X,arrow:Re})},De=function(){return typeof Se=="function"?wt:wt()},Xt=function(){var ue=v.minOverlayWidthMatchTrigger,Qe=v.alignPoint;return"minOverlayWidthMatchTrigger"in v?ue:!Qe},Ot=function(){var ue=v.openClassName;return ue!==void 0?ue:"".concat(X,"-open")},Jt=R.cloneElement(Ae,{className:Be()((T=Ae.props)===null||T===void 0?void 0:T.className,ct&&Ot()),ref:(0,G.Yr)(Ae)?(0,G.sQ)(vt,Ae.ref):void 0}),dt=it;return!dt&&ut.indexOf("contextMenu")!==-1&&(dt=["click"]),R.createElement(D.Z,(0,L.Z)({builtinPlacements:dn},Gt,{prefixCls:X,ref:Nt,popupClassName:Be()(ot,(0,y.Z)({},"".concat(X,"-show-arrow"),Re)),popupStyle:lt,action:ut,showAction:Ke,hideAction:dt,popupPlacement:j,popupAlign:be,popupTransitionName:oe,popupAnimation:Ne,popupVisible:ct,stretch:Xt()?"minWidth":"",popup:De(),onPopupVisibleChange:Kt,onPopupClick:ft,getPopupContainer:le}),Jt)}var Ht=R.forwardRef(Ee),xt=Ht},99921:function(fn,at,s){s.d(at,{iz:function(){return _t},ck:function(){return mt},BW:function(){return qt},sN:function(){return mt},Wd:function(){return Dt},ZP:function(){return fr},Xl:function(){return T}});var L=s(14399),y=s(32720),w=s(27789),ae=s(12012),D=s(73068),k=s(9169),Be=s(26869),G=s.n(Be),R=s(66979),Ce=s(70978),Rt=s(20579),St=s(94082),r=s(98404),Wt=s(99880),Zt=r.createContext(null);function Pt(t,e){return t===void 0?null:"".concat(t,"-").concat(e)}function ye(t){var e=r.useContext(Zt);return Pt(e,t)}var Ie=s(92514),jt=["children","locked"],Y=r.createContext(null);function Bt(t,e){var a=(0,w.Z)({},t);return Object.keys(e).forEach(function(i){var n=e[i];n!==void 0&&(a[i]=n)}),a}function Ee(t){var e=t.children,a=t.locked,i=(0,k.Z)(t,jt),n=r.useContext(Y),l=(0,Ie.Z)(function(){return Bt(n,i)},[n,i],function(o,u){return!a&&(o[0]!==u[0]||!(0,Rt.Z)(o[1],u[1],!0))});return r.createElement(Y.Provider,{value:l},e)}var Ht=[],xt=r.createContext(null);function v(){return r.useContext(xt)}var de=r.createContext(Ht);function T(t){var e=r.useContext(de);return r.useMemo(function(){return t!==void 0?[].concat((0,ae.Z)(e),[t]):e},[e,t])}var ie=r.createContext(null),Re=r.createContext({}),z=Re,X=s(53104);function oe(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1;if((0,X.Z)(t)){var a=t.nodeName.toLowerCase(),i=["input","select","textarea","button"].includes(a)||t.isContentEditable||a==="a"&&!!t.getAttribute("href"),n=t.getAttribute("tabindex"),l=Number(n),o=null;return n&&!Number.isNaN(l)?o=l:i&&o===null&&(o=0),i&&t.disabled&&(o=null),o!==null&&(o>=0||e&&o<0)}return!1}function Ne(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1,a=(0,ae.Z)(t.querySelectorAll("*")).filter(function(i){return oe(i,e)});return oe(t,e)&&a.unshift(t),a}var be=null;function He(){be=document.activeElement}function j(){be=null}function me(){if(be)try{be.focus()}catch(t){}}function dn(t,e){if(e.keyCode===9){var a=Ne(t),i=a[e.shiftKey?0:a.length-1],n=i===document.activeElement||t===document.activeElement;if(n){var l=a[e.shiftKey?a.length-1:0];l.focus(),e.preventDefault()}}}var le=s(68825),Ke=s(25177),it=le.Z.LEFT,ot=le.Z.RIGHT,lt=le.Z.UP,Ge=le.Z.DOWN,we=le.Z.ENTER,ut=le.Z.ESC,Oe=le.Z.HOME,Se=le.Z.END,Ae=[lt,Ge,it,ot];function st(t,e,a,i){var n,l,o,u,f="prev",c="next",b="children",d="parent";if(t==="inline"&&i===we)return{inlineTrigger:!0};var I=(n={},(0,y.Z)(n,lt,f),(0,y.Z)(n,Ge,c),n),S=(l={},(0,y.Z)(l,it,a?c:f),(0,y.Z)(l,ot,a?f:c),(0,y.Z)(l,Ge,b),(0,y.Z)(l,we,b),l),g=(o={},(0,y.Z)(o,lt,f),(0,y.Z)(o,Ge,c),(0,y.Z)(o,we,b),(0,y.Z)(o,ut,d),(0,y.Z)(o,it,a?b:d),(0,y.Z)(o,ot,a?d:b),o),O={inline:I,horizontal:S,vertical:g,inlineSub:I,horizontalSub:g,verticalSub:g},N=(u=O["".concat(t).concat(e?"":"Sub")])===null||u===void 0?void 0:u[i];switch(N){case f:return{offset:-1,sibling:!0};case c:return{offset:1,sibling:!0};case d:return{offset:-1,sibling:!1};case b:return{offset:1,sibling:!1};default:return null}}function Gt(t){for(var e=t;e;){if(e.getAttribute("data-menu-list"))return e;e=e.parentElement}return null}function Yt(t,e){for(var a=t||document.activeElement;a;){if(e.has(a))return a;a=a.parentElement}return null}function Ye(t,e){var a=Ne(t,!0);return a.filter(function(i){return e.has(i)})}function Et(t,e,a){var i=arguments.length>3&&arguments[3]!==void 0?arguments[3]:1;if(!t)return null;var n=Ye(t,e),l=n.length,o=n.findIndex(function(u){return a===u});return i<0?o===-1?o=l-1:o-=1:i>0&&(o+=1),o=(o+l)%l,n[o]}var Xe=function(e,a){var i=new Set,n=new Map,l=new Map;return e.forEach(function(o){var u=document.querySelector("[data-menu-id='".concat(Pt(a,o),"']"));u&&(i.add(u),l.set(u,o),n.set(o,u))}),{elements:i,key2element:n,element2key:l}};function ct(t,e,a,i,n,l,o,u,f,c){var b=r.useRef(),d=r.useRef();d.current=e;var I=function(){Ke.Z.cancel(b.current)};return r.useEffect(function(){return function(){I()}},[]),function(S){var g=S.which;if([].concat(Ae,[we,ut,Oe,Se]).includes(g)){var O=l(),N=Xe(O,i),A=N,h=A.elements,p=A.key2element,m=A.element2key,P=p.get(e),M=Yt(P,h),$=m.get(M),Z=st(t,o($,!0).length===1,a,g);if(!Z&&g!==Oe&&g!==Se)return;(Ae.includes(g)||[Oe,Se].includes(g))&&S.preventDefault();var se=function(B){if(B){var ce=B,ve=B.querySelector("a");ve!=null&&ve.getAttribute("href")&&(ce=ve);var fe=m.get(B);u(fe),I(),b.current=(0,Ke.Z)(function(){d.current===fe&&ce.focus()})}};if([Oe,Se].includes(g)||Z.sibling||!M){var E;!M||t==="inline"?E=n.current:E=Gt(M);var J,V=Ye(E,h);g===Oe?J=V[0]:g===Se?J=V[V.length-1]:J=Et(E,h,M,Z.offset),se(J)}else if(Z.inlineTrigger)f($);else if(Z.offset>0)f($,!0),I(),b.current=(0,Ke.Z)(function(){N=Xe(O,i);var Me=M.getAttribute("aria-controls"),B=document.getElementById(Me),ce=Et(B,N.elements);se(ce)},5);else if(Z.offset<0){var U=o($,!0),_=U[U.length-2],ee=p.get(_);f(_,!1),se(ee)}}c==null||c(S)}}function Nt(t){Promise.resolve().then(t)}var Je="__RC_UTIL_PATH_SPLIT__",vt=function(e){return e.join(Je)},Kt=function(e){return e.split(Je)},ft="rc-menu-more";function wt(){var t=r.useState({}),e=(0,D.Z)(t,2),a=e[1],i=(0,r.useRef)(new Map),n=(0,r.useRef)(new Map),l=r.useState([]),o=(0,D.Z)(l,2),u=o[0],f=o[1],c=(0,r.useRef)(0),b=(0,r.useRef)(!1),d=function(){b.current||a({})},I=(0,r.useCallback)(function(p,m){var P=vt(m);n.current.set(P,p),i.current.set(p,P),c.current+=1;var M=c.current;Nt(function(){M===c.current&&d()})},[]),S=(0,r.useCallback)(function(p,m){var P=vt(m);n.current.delete(P),i.current.delete(p)},[]),g=(0,r.useCallback)(function(p){f(p)},[]),O=(0,r.useCallback)(function(p,m){var P=i.current.get(p)||"",M=Kt(P);return m&&u.includes(M[0])&&M.unshift(ft),M},[u]),N=(0,r.useCallback)(function(p,m){return p.some(function(P){var M=O(P,!0);return M.includes(m)})},[O]),A=function(){var m=(0,ae.Z)(i.current.keys());return u.length&&m.push(ft),m},h=(0,r.useCallback)(function(p){var m="".concat(i.current.get(p)).concat(Je),P=new Set;return(0,ae.Z)(n.current.keys()).forEach(function(M){M.startsWith(m)&&P.add(n.current.get(M))}),P},[]);return r.useEffect(function(){return function(){b.current=!0}},[]),{registerPath:I,unregisterPath:S,refreshOverflowKeys:g,isSubPathKey:N,getKeyPath:O,getKeys:A,getSubPathKeys:h}}function De(t){var e=r.useRef(t);e.current=t;var a=r.useCallback(function(){for(var i,n=arguments.length,l=new Array(n),o=0;o<n;o++)l[o]=arguments[o];return(i=e.current)===null||i===void 0?void 0:i.call.apply(i,[e].concat(l))},[]);return t?a:void 0}var Xt=Math.random().toFixed(5).toString().slice(2),Ot=0;function Jt(t){var e=(0,Ce.Z)(t,{value:t}),a=(0,D.Z)(e,2),i=a[0],n=a[1];return r.useEffect(function(){Ot+=1;var l="".concat(Xt,"-").concat(Ot);n("rc-menu-uuid-".concat(l))},[]),i}var dt=s(42746),Le=s(9927),ue=s(81965),Qe=s(46090),mn=s(77638),Tn=s(16904);function pn(t,e,a,i){var n=r.useContext(Y),l=n.activeKey,o=n.onActive,u=n.onInactive,f={active:l===t};return e||(f.onMouseEnter=function(c){a==null||a({key:t,domEvent:c}),o(t)},f.onMouseLeave=function(c){i==null||i({key:t,domEvent:c}),u(t)}),f}function gn(t){var e=r.useContext(Y),a=e.mode,i=e.rtl,n=e.inlineIndent;if(a!=="inline")return null;var l=t;return i?{paddingRight:l*n}:{paddingLeft:l*n}}function hn(t){var e=t.icon,a=t.props,i=t.children,n;return e===null||e===!1?null:(typeof e=="function"?n=r.createElement(e,(0,w.Z)({},a)):typeof e!="boolean"&&(n=e),n||i||null)}var $n=["item"];function At(t){var e=t.item,a=(0,k.Z)(t,$n);return Object.defineProperty(a,"item",{get:function(){return(0,St.ZP)(!1,"`info.item` is deprecated since we will move to function component that not provides React Node instance in future."),e}}),a}var kn=["title","attribute","elementRef"],Fn=["style","className","eventKey","warnKey","disabled","itemIcon","children","role","onMouseEnter","onMouseLeave","onClick","onKeyDown","onFocus"],Vn=["active"],zn=function(t){(0,ue.Z)(a,t);var e=(0,Qe.Z)(a);function a(){return(0,dt.Z)(this,a),e.apply(this,arguments)}return(0,Le.Z)(a,[{key:"render",value:function(){var n=this.props,l=n.title,o=n.attribute,u=n.elementRef,f=(0,k.Z)(n,kn),c=(0,mn.Z)(f,["eventKey","popupClassName","popupOffset","onTitleClick"]);return(0,St.ZP)(!o,"`attribute` of Menu.Item is deprecated. Please pass attribute directly."),r.createElement(R.Z.Item,(0,L.Z)({},o,{title:typeof l=="string"?l:void 0},c,{ref:u}))}}]),a}(r.Component),Un=r.forwardRef(function(t,e){var a,i=t.style,n=t.className,l=t.eventKey,o=t.warnKey,u=t.disabled,f=t.itemIcon,c=t.children,b=t.role,d=t.onMouseEnter,I=t.onMouseLeave,S=t.onClick,g=t.onKeyDown,O=t.onFocus,N=(0,k.Z)(t,Fn),A=ye(l),h=r.useContext(Y),p=h.prefixCls,m=h.onItemClick,P=h.disabled,M=h.overflowDisabled,$=h.itemIcon,Z=h.selectedKeys,se=h.onActive,E=r.useContext(z),J=E._internalRenderMenuItem,V="".concat(p,"-item"),U=r.useRef(),_=r.useRef(),ee=P||u,Me=(0,Tn.x1)(e,_),B=T(l),ce=function(W){return{key:l,keyPath:(0,ae.Z)(B).reverse(),item:U.current,domEvent:W}},ve=f||$,fe=pn(l,ee,d,I),Te=fe.active,$e=(0,k.Z)(fe,Vn),Ze=Z.includes(l),ke=gn(B.length),Fe=function(W){if(!ee){var pe=ce(W);S==null||S(At(pe)),m(pe)}},H=function(W){if(g==null||g(W),W.which===le.Z.ENTER){var pe=ce(W);S==null||S(At(pe)),m(pe)}},te=function(W){se(l),O==null||O(W)},_e={};t.role==="option"&&(_e["aria-selected"]=Ze);var Ve=r.createElement(zn,(0,L.Z)({ref:U,elementRef:Me,role:b===null?"none":b||"menuitem",tabIndex:u?null:-1,"data-menu-id":M&&A?null:A},N,$e,_e,{component:"li","aria-disabled":u,style:(0,w.Z)((0,w.Z)({},ke),i),className:G()(V,(a={},(0,y.Z)(a,"".concat(V,"-active"),Te),(0,y.Z)(a,"".concat(V,"-selected"),Ze),(0,y.Z)(a,"".concat(V,"-disabled"),ee),a),n),onClick:Fe,onKeyDown:H,onFocus:te}),c,r.createElement(hn,{props:(0,w.Z)((0,w.Z)({},t),{},{isSelected:Ze}),icon:ve}));return J&&(Ve=J(Ve,t,{selected:Ze})),Ve});function Wn(t,e){var a=t.eventKey,i=v(),n=T(a);return r.useEffect(function(){if(i)return i.registerPath(a,n),function(){i.unregisterPath(a,n)}},[n]),i?null:r.createElement(Un,(0,L.Z)({},t,{ref:e}))}var mt=r.forwardRef(Wn),jn=["className","children"],Bn=function(e,a){var i=e.className,n=e.children,l=(0,k.Z)(e,jn),o=r.useContext(Y),u=o.prefixCls,f=o.mode,c=o.rtl;return r.createElement("ul",(0,L.Z)({className:G()(u,c&&"".concat(u,"-rtl"),"".concat(u,"-sub"),"".concat(u,"-").concat(f==="inline"?"inline":"vertical"),i),role:"menu"},l,{"data-menu-list":!0,ref:a}),n)},Cn=r.forwardRef(Bn);Cn.displayName="SubMenuList";var yn=Cn,Hn=s(65258);function Qt(t,e){return(0,Hn.Z)(t).map(function(a,i){if(r.isValidElement(a)){var n,l,o=a.key,u=(n=(l=a.props)===null||l===void 0?void 0:l.eventKey)!==null&&n!==void 0?n:o,f=u==null;f&&(u="tmp_key-".concat([].concat((0,ae.Z)(e),[i]).join("-")));var c={key:u,eventKey:u};return r.cloneElement(a,c)}return a})}var Gn=s(18858),F={adjustX:1,adjustY:1},Yn={topLeft:{points:["bl","tl"],overflow:F},topRight:{points:["br","tr"],overflow:F},bottomLeft:{points:["tl","bl"],overflow:F},bottomRight:{points:["tr","br"],overflow:F},leftTop:{points:["tr","tl"],overflow:F},leftBottom:{points:["br","bl"],overflow:F},rightTop:{points:["tl","tr"],overflow:F},rightBottom:{points:["bl","br"],overflow:F}},Xn={topLeft:{points:["bl","tl"],overflow:F},topRight:{points:["br","tr"],overflow:F},bottomLeft:{points:["tl","bl"],overflow:F},bottomRight:{points:["tr","br"],overflow:F},rightTop:{points:["tr","tl"],overflow:F},rightBottom:{points:["br","bl"],overflow:F},leftTop:{points:["tl","tr"],overflow:F},leftBottom:{points:["bl","br"],overflow:F}},Ur=null;function bn(t,e,a){if(e)return e;if(a)return a[t]||a.other}var Jn={horizontal:"bottomLeft",vertical:"rightTop","vertical-left":"rightTop","vertical-right":"leftTop"};function Qn(t){var e=t.prefixCls,a=t.visible,i=t.children,n=t.popup,l=t.popupStyle,o=t.popupClassName,u=t.popupOffset,f=t.disabled,c=t.mode,b=t.onVisibleChange,d=r.useContext(Y),I=d.getPopupContainer,S=d.rtl,g=d.subMenuOpenDelay,O=d.subMenuCloseDelay,N=d.builtinPlacements,A=d.triggerSubMenuAction,h=d.forceSubMenuRender,p=d.rootClassName,m=d.motion,P=d.defaultMotions,M=r.useState(!1),$=(0,D.Z)(M,2),Z=$[0],se=$[1],E=S?(0,w.Z)((0,w.Z)({},Xn),N):(0,w.Z)((0,w.Z)({},Yn),N),J=Jn[c],V=bn(c,m,P),U=r.useRef(V);c!=="inline"&&(U.current=V);var _=(0,w.Z)((0,w.Z)({},U.current),{},{leavedClassName:"".concat(e,"-hidden"),removeOnLeave:!1,motionAppear:!0}),ee=r.useRef();return r.useEffect(function(){return ee.current=(0,Ke.Z)(function(){se(a)}),function(){Ke.Z.cancel(ee.current)}},[a]),r.createElement(Gn.Z,{prefixCls:e,popupClassName:G()("".concat(e,"-popup"),(0,y.Z)({},"".concat(e,"-rtl"),S),o,p),stretch:c==="horizontal"?"minWidth":null,getPopupContainer:I,builtinPlacements:E,popupPlacement:J,popupVisible:Z,popup:n,popupStyle:l,popupAlign:u&&{offset:u},action:f?[]:[A],mouseEnterDelay:g,mouseLeaveDelay:O,onPopupVisibleChange:b,forceRender:h,popupMotion:_,fresh:!0},i)}var qn=s(27771);function _n(t){var e=t.id,a=t.open,i=t.keyPath,n=t.children,l="inline",o=r.useContext(Y),u=o.prefixCls,f=o.forceSubMenuRender,c=o.motion,b=o.defaultMotions,d=o.mode,I=r.useRef(!1);I.current=d===l;var S=r.useState(!I.current),g=(0,D.Z)(S,2),O=g[0],N=g[1],A=I.current?a:!1;r.useEffect(function(){I.current&&N(!1)},[d]);var h=(0,w.Z)({},bn(l,c,b));i.length>1&&(h.motionAppear=!1);var p=h.onVisibleChanged;return h.onVisibleChanged=function(m){return!I.current&&!m&&N(!0),p==null?void 0:p(m)},O?null:r.createElement(Ee,{mode:l,locked:!I.current},r.createElement(qn.ZP,(0,L.Z)({visible:A},h,{forceRender:f,removeOnLeave:!1,leavedClassName:"".concat(u,"-hidden")}),function(m){var P=m.className,M=m.style;return r.createElement(yn,{id:e,className:P,style:M},n)}))}var er=["style","className","title","eventKey","warnKey","disabled","internalPopupClose","children","itemIcon","expandIcon","popupClassName","popupOffset","popupStyle","onClick","onMouseEnter","onMouseLeave","onTitleClick","onTitleMouseEnter","onTitleMouseLeave"],tr=["active"],nr=function(e){var a,i=e.style,n=e.className,l=e.title,o=e.eventKey,u=e.warnKey,f=e.disabled,c=e.internalPopupClose,b=e.children,d=e.itemIcon,I=e.expandIcon,S=e.popupClassName,g=e.popupOffset,O=e.popupStyle,N=e.onClick,A=e.onMouseEnter,h=e.onMouseLeave,p=e.onTitleClick,m=e.onTitleMouseEnter,P=e.onTitleMouseLeave,M=(0,k.Z)(e,er),$=ye(o),Z=r.useContext(Y),se=Z.prefixCls,E=Z.mode,J=Z.openKeys,V=Z.disabled,U=Z.overflowDisabled,_=Z.activeKey,ee=Z.selectedKeys,Me=Z.itemIcon,B=Z.expandIcon,ce=Z.onItemClick,ve=Z.onOpenChange,fe=Z.onActive,Te=r.useContext(z),$e=Te._internalRenderSubMenuItem,Ze=r.useContext(ie),ke=Ze.isSubPathKey,Fe=T(),H="".concat(se,"-submenu"),te=V||f,_e=r.useRef(),Ve=r.useRef(),ze=d!=null?d:Me,W=I!=null?I:B,pe=J.includes(o),Pe=!U&&pe,Lt=ke(ee,o),et=pn(o,te,m,P),Ue=et.active,tn=(0,k.Z)(et,tr),Mn=r.useState(!1),nn=(0,D.Z)(Mn,2),gt=nn[0],Tt=nn[1],$t=function(re){te||Tt(re)},ge=function(re){$t(!0),A==null||A({key:o,domEvent:re})},rn=function(re){$t(!1),h==null||h({key:o,domEvent:re})},ht=r.useMemo(function(){return Ue||(E!=="inline"?gt||ke([_],o):!1)},[E,Ue,_,gt,o,ke]),kt=gn(Fe.length),an=function(re){te||(p==null||p({key:o,domEvent:re}),E==="inline"&&ve(o,!pe))},tt=De(function(he){N==null||N(At(he)),ce(he)}),Ct=function(re){E!=="inline"&&ve(o,re)},yt=function(){fe(o)},bt=$&&"".concat($,"-popup"),nt=r.createElement("div",(0,L.Z)({role:"menuitem",style:kt,className:"".concat(H,"-title"),tabIndex:te?null:-1,ref:_e,title:typeof l=="string"?l:null,"data-menu-id":U&&$?null:$,"aria-expanded":Pe,"aria-haspopup":!0,"aria-controls":bt,"aria-disabled":te,onClick:an,onFocus:yt},tn),l,r.createElement(hn,{icon:E!=="horizontal"?W:void 0,props:(0,w.Z)((0,w.Z)({},e),{},{isOpen:Pe,isSubMenu:!0})},r.createElement("i",{className:"".concat(H,"-arrow")}))),ne=r.useRef(E);if(E!=="inline"&&Fe.length>1?ne.current="vertical":ne.current=E,!U){var rt=ne.current;nt=r.createElement(Qn,{mode:rt,prefixCls:H,visible:!c&&Pe&&E!=="inline",popupClassName:S,popupOffset:g,popupStyle:O,popup:r.createElement(Ee,{mode:rt==="horizontal"?"vertical":rt},r.createElement(yn,{id:bt,ref:Ve},b)),disabled:te,onVisibleChange:Ct},nt)}var We=r.createElement(R.Z.Item,(0,L.Z)({role:"none"},M,{component:"li",style:i,className:G()(H,"".concat(H,"-").concat(E),n,(a={},(0,y.Z)(a,"".concat(H,"-open"),Pe),(0,y.Z)(a,"".concat(H,"-active"),ht),(0,y.Z)(a,"".concat(H,"-selected"),Lt),(0,y.Z)(a,"".concat(H,"-disabled"),te),a)),onMouseEnter:ge,onMouseLeave:rn}),nt,!U&&r.createElement(_n,{id:bt,open:Pe,keyPath:Fe},b));return $e&&(We=$e(We,e,{selected:Lt,active:ht,open:Pe,disabled:te})),r.createElement(Ee,{onItemClick:tt,mode:E==="horizontal"?"vertical":E,itemIcon:ze,expandIcon:W},We)};function Dt(t){var e=t.eventKey,a=t.children,i=T(e),n=Qt(a,i),l=v();r.useEffect(function(){if(l)return l.registerPath(e,i),function(){l.unregisterPath(e,i)}},[i]);var o;return l?o=n:o=r.createElement(nr,t,n),r.createElement(de.Provider,{value:i},o)}var rr=s(50559),ar=["className","title","eventKey","children"],ir=["children"],or=function(e){var a=e.className,i=e.title,n=e.eventKey,l=e.children,o=(0,k.Z)(e,ar),u=r.useContext(Y),f=u.prefixCls,c="".concat(f,"-item-group");return r.createElement("li",(0,L.Z)({role:"presentation"},o,{onClick:function(d){return d.stopPropagation()},className:G()(c,a)}),r.createElement("div",{role:"presentation",className:"".concat(c,"-title"),title:typeof i=="string"?i:void 0},i),r.createElement("ul",{role:"group",className:"".concat(c,"-list")},l))};function qt(t){var e=t.children,a=(0,k.Z)(t,ir),i=T(a.eventKey),n=Qt(e,i),l=v();return l?n:r.createElement(or,(0,mn.Z)(a,["warnKey"]),n)}function _t(t){var e=t.className,a=t.style,i=r.useContext(Y),n=i.prefixCls,l=v();return l?null:r.createElement("li",{role:"separator",className:G()("".concat(n,"-item-divider"),e),style:a})}var lr=["label","children","key","type"];function en(t){return(t||[]).map(function(e,a){if(e&&(0,rr.Z)(e)==="object"){var i=e,n=i.label,l=i.children,o=i.key,u=i.type,f=(0,k.Z)(i,lr),c=o!=null?o:"tmp-".concat(a);return l||u==="group"?u==="group"?r.createElement(qt,(0,L.Z)({key:c},f,{title:n}),en(l)):r.createElement(Dt,(0,L.Z)({key:c},f,{title:n}),en(l)):u==="divider"?r.createElement(_t,(0,L.Z)({key:c},f)):r.createElement(mt,(0,L.Z)({key:c},f),n)}return null}).filter(function(e){return e})}function ur(t,e,a){var i=t;return e&&(i=en(e)),Qt(i,a)}var sr=["prefixCls","rootClassName","style","className","tabIndex","items","children","direction","id","mode","inlineCollapsed","disabled","disabledOverflow","subMenuOpenDelay","subMenuCloseDelay","forceSubMenuRender","defaultOpenKeys","openKeys","activeKey","defaultActiveFirst","selectable","multiple","defaultSelectedKeys","selectedKeys","onSelect","onDeselect","inlineIndent","motion","defaultMotions","triggerSubMenuAction","builtinPlacements","itemIcon","expandIcon","overflowedIndicator","overflowedIndicatorPopupClassName","getPopupContainer","onClick","onOpenChange","onKeyDown","openAnimation","openTransitionName","_internalRenderMenuItem","_internalRenderSubMenuItem"],qe=[],cr=r.forwardRef(function(t,e){var a,i,n=t,l=n.prefixCls,o=l===void 0?"rc-menu":l,u=n.rootClassName,f=n.style,c=n.className,b=n.tabIndex,d=b===void 0?0:b,I=n.items,S=n.children,g=n.direction,O=n.id,N=n.mode,A=N===void 0?"vertical":N,h=n.inlineCollapsed,p=n.disabled,m=n.disabledOverflow,P=n.subMenuOpenDelay,M=P===void 0?.1:P,$=n.subMenuCloseDelay,Z=$===void 0?.1:$,se=n.forceSubMenuRender,E=n.defaultOpenKeys,J=n.openKeys,V=n.activeKey,U=n.defaultActiveFirst,_=n.selectable,ee=_===void 0?!0:_,Me=n.multiple,B=Me===void 0?!1:Me,ce=n.defaultSelectedKeys,ve=n.selectedKeys,fe=n.onSelect,Te=n.onDeselect,$e=n.inlineIndent,Ze=$e===void 0?24:$e,ke=n.motion,Fe=n.defaultMotions,H=n.triggerSubMenuAction,te=H===void 0?"hover":H,_e=n.builtinPlacements,Ve=n.itemIcon,ze=n.expandIcon,W=n.overflowedIndicator,pe=W===void 0?"...":W,Pe=n.overflowedIndicatorPopupClassName,Lt=n.getPopupContainer,et=n.onClick,Ue=n.onOpenChange,tn=n.onKeyDown,Mn=n.openAnimation,nn=n.openTransitionName,gt=n._internalRenderMenuItem,Tt=n._internalRenderSubMenuItem,$t=(0,k.Z)(n,sr),ge=r.useMemo(function(){return ur(S,I,qe)},[S,I]),rn=r.useState(!1),ht=(0,D.Z)(rn,2),kt=ht[0],an=ht[1],tt=r.useRef(),Ct=Jt(O),yt=g==="rtl",bt=(0,Ce.Z)(E,{value:J,postState:function(C){return C||qe}}),nt=(0,D.Z)(bt,2),ne=nt[0],rt=nt[1],We=function(C){var x=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1;function Q(){rt(C),Ue==null||Ue(C)}x?(0,Wt.flushSync)(Q):Q()},he=r.useState(ne),re=(0,D.Z)(he,2),dr=re[0],mr=re[1],on=r.useRef(!1),pr=r.useMemo(function(){return(A==="inline"||A==="vertical")&&h?["vertical",h]:[A,!1]},[A,h]),In=(0,D.Z)(pr,2),Ft=In[0],ln=In[1],Rn=Ft==="inline",gr=r.useState(Ft),Sn=(0,D.Z)(gr,2),xe=Sn[0],hr=Sn[1],Cr=r.useState(ln),Zn=(0,D.Z)(Cr,2),yr=Zn[0],br=Zn[1];r.useEffect(function(){hr(Ft),br(ln),on.current&&(Rn?rt(dr):We(qe))},[Ft,ln]);var Mr=r.useState(0),Pn=(0,D.Z)(Mr,2),Vt=Pn[0],Ir=Pn[1],un=Vt>=ge.length-1||xe!=="horizontal"||m;r.useEffect(function(){Rn&&mr(ne)},[ne]),r.useEffect(function(){return on.current=!0,function(){on.current=!1}},[]);var je=wt(),xn=je.registerPath,En=je.unregisterPath,Rr=je.refreshOverflowKeys,Nn=je.isSubPathKey,Sr=je.getKeyPath,Kn=je.getKeys,Zr=je.getSubPathKeys,Pr=r.useMemo(function(){return{registerPath:xn,unregisterPath:En}},[xn,En]),xr=r.useMemo(function(){return{isSubPathKey:Nn}},[Nn]);r.useEffect(function(){Rr(un?qe:ge.slice(Vt+1).map(function(K){return K.key}))},[Vt,un]);var Er=(0,Ce.Z)(V||U&&((a=ge[0])===null||a===void 0?void 0:a.key),{value:V}),wn=(0,D.Z)(Er,2),Mt=wn[0],sn=wn[1],Nr=De(function(K){sn(K)}),Kr=De(function(){sn(void 0)});(0,r.useImperativeHandle)(e,function(){return{list:tt.current,focus:function(C){var x,Q=Kn(),q=Xe(Q,Ct),Ut=q.elements,cn=q.key2element,Vr=q.element2key,Dn=Ye(tt.current,Ut),Ln=Mt!=null?Mt:Dn[0]?Vr.get(Dn[0]):(x=ge.find(function(zr){return!zr.props.disabled}))===null||x===void 0?void 0:x.key,It=cn.get(Ln);if(Ln&&It){var vn;It==null||(vn=It.focus)===null||vn===void 0||vn.call(It,C)}}}});var wr=(0,Ce.Z)(ce||[],{value:ve,postState:function(C){return Array.isArray(C)?C:C==null?qe:[C]}}),On=(0,D.Z)(wr,2),zt=On[0],Or=On[1],Ar=function(C){if(ee){var x=C.key,Q=zt.includes(x),q;B?Q?q=zt.filter(function(cn){return cn!==x}):q=[].concat((0,ae.Z)(zt),[x]):q=[x],Or(q);var Ut=(0,w.Z)((0,w.Z)({},C),{},{selectedKeys:q});Q?Te==null||Te(Ut):fe==null||fe(Ut)}!B&&ne.length&&xe!=="inline"&&We(qe)},Dr=De(function(K){et==null||et(At(K)),Ar(K)}),An=De(function(K,C){var x=ne.filter(function(q){return q!==K});if(C)x.push(K);else if(xe!=="inline"){var Q=Zr(K);x=x.filter(function(q){return!Q.has(q)})}(0,Rt.Z)(ne,x,!0)||We(x,!0)}),Lr=function(C,x){var Q=x!=null?x:!ne.includes(C);An(C,Q)},Tr=ct(xe,Mt,yt,Ct,tt,Kn,Sr,sn,Lr,tn);r.useEffect(function(){an(!0)},[]);var $r=r.useMemo(function(){return{_internalRenderMenuItem:gt,_internalRenderSubMenuItem:Tt}},[gt,Tt]),kr=xe!=="horizontal"||m?ge:ge.map(function(K,C){return r.createElement(Ee,{key:K.key,overflowDisabled:C>Vt},K)}),Fr=r.createElement(R.Z,(0,L.Z)({id:O,ref:tt,prefixCls:"".concat(o,"-overflow"),component:"ul",itemComponent:mt,className:G()(o,"".concat(o,"-root"),"".concat(o,"-").concat(xe),c,(i={},(0,y.Z)(i,"".concat(o,"-inline-collapsed"),yr),(0,y.Z)(i,"".concat(o,"-rtl"),yt),i),u),dir:g,style:f,role:"menu",tabIndex:d,data:kr,renderRawItem:function(C){return C},renderRawRest:function(C){var x=C.length,Q=x?ge.slice(-x):null;return r.createElement(Dt,{eventKey:ft,title:pe,disabled:un,internalPopupClose:x===0,popupClassName:Pe},Q)},maxCount:xe!=="horizontal"||m?R.Z.INVALIDATE:R.Z.RESPONSIVE,ssr:"full","data-menu-list":!0,onVisibleChange:function(C){Ir(C)},onKeyDown:Tr},$t));return r.createElement(z.Provider,{value:$r},r.createElement(Zt.Provider,{value:Ct},r.createElement(Ee,{prefixCls:o,rootClassName:u,mode:xe,openKeys:ne,rtl:yt,disabled:p,motion:kt?ke:null,defaultMotions:kt?Fe:null,activeKey:Mt,onActive:Nr,onInactive:Kr,selectedKeys:zt,inlineIndent:Ze,subMenuOpenDelay:M,subMenuCloseDelay:Z,forceSubMenuRender:se,builtinPlacements:_e,triggerSubMenuAction:te,getPopupContainer:Lt,itemIcon:Ve,expandIcon:ze,onItemClick:Dr,onOpenChange:An},r.createElement(ie.Provider,{value:xr},Fr),r.createElement("div",{style:{display:"none"},"aria-hidden":!0},r.createElement(xt.Provider,{value:Pr},ge)))))}),vr=cr,pt=vr;pt.Item=mt,pt.SubMenu=Dt,pt.ItemGroup=qt,pt.Divider=_t;var fr=pt}}]);