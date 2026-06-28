(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}})();function uT(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var ty={exports:{}},kl={},ny={exports:{}},Z={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var po=Symbol.for("react.element"),cT=Symbol.for("react.portal"),hT=Symbol.for("react.fragment"),dT=Symbol.for("react.strict_mode"),fT=Symbol.for("react.profiler"),pT=Symbol.for("react.provider"),mT=Symbol.for("react.context"),gT=Symbol.for("react.forward_ref"),yT=Symbol.for("react.suspense"),_T=Symbol.for("react.memo"),vT=Symbol.for("react.lazy"),Tp=Symbol.iterator;function ET(t){return t===null||typeof t!="object"?null:(t=Tp&&t[Tp]||t["@@iterator"],typeof t=="function"?t:null)}var ry={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},iy=Object.assign,sy={};function Fi(t,e,n){this.props=t,this.context=e,this.refs=sy,this.updater=n||ry}Fi.prototype.isReactComponent={};Fi.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};Fi.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function oy(){}oy.prototype=Fi.prototype;function Vh(t,e,n){this.props=t,this.context=e,this.refs=sy,this.updater=n||ry}var Oh=Vh.prototype=new oy;Oh.constructor=Vh;iy(Oh,Fi.prototype);Oh.isPureReactComponent=!0;var Ip=Array.isArray,ay=Object.prototype.hasOwnProperty,Lh={current:null},ly={key:!0,ref:!0,__self:!0,__source:!0};function uy(t,e,n){var r,i={},s=null,o=null;if(e!=null)for(r in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)ay.call(e,r)&&!ly.hasOwnProperty(r)&&(i[r]=e[r]);var l=arguments.length-2;if(l===1)i.children=n;else if(1<l){for(var u=Array(l),h=0;h<l;h++)u[h]=arguments[h+2];i.children=u}if(t&&t.defaultProps)for(r in l=t.defaultProps,l)i[r]===void 0&&(i[r]=l[r]);return{$$typeof:po,type:t,key:s,ref:o,props:i,_owner:Lh.current}}function wT(t,e){return{$$typeof:po,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function Mh(t){return typeof t=="object"&&t!==null&&t.$$typeof===po}function TT(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var Sp=/\/+/g;function xu(t,e){return typeof t=="object"&&t!==null&&t.key!=null?TT(""+t.key):e.toString(36)}function va(t,e,n,r,i){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case po:case cT:o=!0}}if(o)return o=t,i=i(o),t=r===""?"."+xu(o,0):r,Ip(i)?(n="",t!=null&&(n=t.replace(Sp,"$&/")+"/"),va(i,e,n,"",function(h){return h})):i!=null&&(Mh(i)&&(i=wT(i,n+(!i.key||o&&o.key===i.key?"":(""+i.key).replace(Sp,"$&/")+"/")+t)),e.push(i)),1;if(o=0,r=r===""?".":r+":",Ip(t))for(var l=0;l<t.length;l++){s=t[l];var u=r+xu(s,l);o+=va(s,e,n,u,i)}else if(u=ET(t),typeof u=="function")for(t=u.call(t),l=0;!(s=t.next()).done;)s=s.value,u=r+xu(s,l++),o+=va(s,e,n,u,i);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function Xo(t,e,n){if(t==null)return t;var r=[],i=0;return va(t,r,"","",function(s){return e.call(n,s,i++)}),r}function IT(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var st={current:null},Ea={transition:null},ST={ReactCurrentDispatcher:st,ReactCurrentBatchConfig:Ea,ReactCurrentOwner:Lh};function cy(){throw Error("act(...) is not supported in production builds of React.")}Z.Children={map:Xo,forEach:function(t,e,n){Xo(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return Xo(t,function(){e++}),e},toArray:function(t){return Xo(t,function(e){return e})||[]},only:function(t){if(!Mh(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};Z.Component=Fi;Z.Fragment=hT;Z.Profiler=fT;Z.PureComponent=Vh;Z.StrictMode=dT;Z.Suspense=yT;Z.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=ST;Z.act=cy;Z.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var r=iy({},t.props),i=t.key,s=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=Lh.current),e.key!==void 0&&(i=""+e.key),t.type&&t.type.defaultProps)var l=t.type.defaultProps;for(u in e)ay.call(e,u)&&!ly.hasOwnProperty(u)&&(r[u]=e[u]===void 0&&l!==void 0?l[u]:e[u])}var u=arguments.length-2;if(u===1)r.children=n;else if(1<u){l=Array(u);for(var h=0;h<u;h++)l[h]=arguments[h+2];r.children=l}return{$$typeof:po,type:t.type,key:i,ref:s,props:r,_owner:o}};Z.createContext=function(t){return t={$$typeof:mT,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:pT,_context:t},t.Consumer=t};Z.createElement=uy;Z.createFactory=function(t){var e=uy.bind(null,t);return e.type=t,e};Z.createRef=function(){return{current:null}};Z.forwardRef=function(t){return{$$typeof:gT,render:t}};Z.isValidElement=Mh;Z.lazy=function(t){return{$$typeof:vT,_payload:{_status:-1,_result:t},_init:IT}};Z.memo=function(t,e){return{$$typeof:_T,type:t,compare:e===void 0?null:e}};Z.startTransition=function(t){var e=Ea.transition;Ea.transition={};try{t()}finally{Ea.transition=e}};Z.unstable_act=cy;Z.useCallback=function(t,e){return st.current.useCallback(t,e)};Z.useContext=function(t){return st.current.useContext(t)};Z.useDebugValue=function(){};Z.useDeferredValue=function(t){return st.current.useDeferredValue(t)};Z.useEffect=function(t,e){return st.current.useEffect(t,e)};Z.useId=function(){return st.current.useId()};Z.useImperativeHandle=function(t,e,n){return st.current.useImperativeHandle(t,e,n)};Z.useInsertionEffect=function(t,e){return st.current.useInsertionEffect(t,e)};Z.useLayoutEffect=function(t,e){return st.current.useLayoutEffect(t,e)};Z.useMemo=function(t,e){return st.current.useMemo(t,e)};Z.useReducer=function(t,e,n){return st.current.useReducer(t,e,n)};Z.useRef=function(t){return st.current.useRef(t)};Z.useState=function(t){return st.current.useState(t)};Z.useSyncExternalStore=function(t,e,n){return st.current.useSyncExternalStore(t,e,n)};Z.useTransition=function(){return st.current.useTransition()};Z.version="18.3.1";ny.exports=Z;var K=ny.exports;const AT=uT(K);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var RT=K,CT=Symbol.for("react.element"),PT=Symbol.for("react.fragment"),kT=Object.prototype.hasOwnProperty,NT=RT.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,DT={key:!0,ref:!0,__self:!0,__source:!0};function hy(t,e,n){var r,i={},s=null,o=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(r in e)kT.call(e,r)&&!DT.hasOwnProperty(r)&&(i[r]=e[r]);if(t&&t.defaultProps)for(r in e=t.defaultProps,e)i[r]===void 0&&(i[r]=e[r]);return{$$typeof:CT,type:t,key:s,ref:o,props:i,_owner:NT.current}}kl.Fragment=PT;kl.jsx=hy;kl.jsxs=hy;ty.exports=kl;var D=ty.exports,mc={},dy={exports:{}},Et={},fy={exports:{}},py={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(z,Q){var J=z.length;z.push(Q);e:for(;0<J;){var ge=J-1>>>1,le=z[ge];if(0<i(le,Q))z[ge]=Q,z[J]=le,J=ge;else break e}}function n(z){return z.length===0?null:z[0]}function r(z){if(z.length===0)return null;var Q=z[0],J=z.pop();if(J!==Q){z[0]=J;e:for(var ge=0,le=z.length,Ie=le>>>1;ge<Ie;){var Zt=2*(ge+1)-1,en=z[Zt],tn=Zt+1,nn=z[tn];if(0>i(en,J))tn<le&&0>i(nn,en)?(z[ge]=nn,z[tn]=J,ge=tn):(z[ge]=en,z[Zt]=J,ge=Zt);else if(tn<le&&0>i(nn,J))z[ge]=nn,z[tn]=J,ge=tn;else break e}}return Q}function i(z,Q){var J=z.sortIndex-Q.sortIndex;return J!==0?J:z.id-Q.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var o=Date,l=o.now();t.unstable_now=function(){return o.now()-l}}var u=[],h=[],f=1,m=null,g=3,S=!1,C=!1,P=!1,O=typeof setTimeout=="function"?setTimeout:null,w=typeof clearTimeout=="function"?clearTimeout:null,_=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function A(z){for(var Q=n(h);Q!==null;){if(Q.callback===null)r(h);else if(Q.startTime<=z)r(h),Q.sortIndex=Q.expirationTime,e(u,Q);else break;Q=n(h)}}function V(z){if(P=!1,A(z),!C)if(n(u)!==null)C=!0,qi(b);else{var Q=n(h);Q!==null&&Jt(V,Q.startTime-z)}}function b(z,Q){C=!1,P&&(P=!1,w(y),y=-1),S=!0;var J=g;try{for(A(Q),m=n(u);m!==null&&(!(m.expirationTime>Q)||z&&!R());){var ge=m.callback;if(typeof ge=="function"){m.callback=null,g=m.priorityLevel;var le=ge(m.expirationTime<=Q);Q=t.unstable_now(),typeof le=="function"?m.callback=le:m===n(u)&&r(u),A(Q)}else r(u);m=n(u)}if(m!==null)var Ie=!0;else{var Zt=n(h);Zt!==null&&Jt(V,Zt.startTime-Q),Ie=!1}return Ie}finally{m=null,g=J,S=!1}}var U=!1,E=null,y=-1,v=5,T=-1;function R(){return!(t.unstable_now()-T<v)}function N(){if(E!==null){var z=t.unstable_now();T=z;var Q=!0;try{Q=E(!0,z)}finally{Q?I():(U=!1,E=null)}}else U=!1}var I;if(typeof _=="function")I=function(){_(N)};else if(typeof MessageChannel<"u"){var Tt=new MessageChannel,dr=Tt.port2;Tt.port1.onmessage=N,I=function(){dr.postMessage(null)}}else I=function(){O(N,0)};function qi(z){E=z,U||(U=!0,I())}function Jt(z,Q){y=O(function(){z(t.unstable_now())},Q)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(z){z.callback=null},t.unstable_continueExecution=function(){C||S||(C=!0,qi(b))},t.unstable_forceFrameRate=function(z){0>z||125<z?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):v=0<z?Math.floor(1e3/z):5},t.unstable_getCurrentPriorityLevel=function(){return g},t.unstable_getFirstCallbackNode=function(){return n(u)},t.unstable_next=function(z){switch(g){case 1:case 2:case 3:var Q=3;break;default:Q=g}var J=g;g=Q;try{return z()}finally{g=J}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(z,Q){switch(z){case 1:case 2:case 3:case 4:case 5:break;default:z=3}var J=g;g=z;try{return Q()}finally{g=J}},t.unstable_scheduleCallback=function(z,Q,J){var ge=t.unstable_now();switch(typeof J=="object"&&J!==null?(J=J.delay,J=typeof J=="number"&&0<J?ge+J:ge):J=ge,z){case 1:var le=-1;break;case 2:le=250;break;case 5:le=1073741823;break;case 4:le=1e4;break;default:le=5e3}return le=J+le,z={id:f++,callback:Q,priorityLevel:z,startTime:J,expirationTime:le,sortIndex:-1},J>ge?(z.sortIndex=J,e(h,z),n(u)===null&&z===n(h)&&(P?(w(y),y=-1):P=!0,Jt(V,J-ge))):(z.sortIndex=le,e(u,z),C||S||(C=!0,qi(b))),z},t.unstable_shouldYield=R,t.unstable_wrapCallback=function(z){var Q=g;return function(){var J=g;g=Q;try{return z.apply(this,arguments)}finally{g=J}}}})(py);fy.exports=py;var xT=fy.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var VT=K,vt=xT;function F(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var my=new Set,js={};function zr(t,e){wi(t,e),wi(t+"Capture",e)}function wi(t,e){for(js[t]=e,t=0;t<e.length;t++)my.add(e[t])}var gn=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),gc=Object.prototype.hasOwnProperty,OT=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Ap={},Rp={};function LT(t){return gc.call(Rp,t)?!0:gc.call(Ap,t)?!1:OT.test(t)?Rp[t]=!0:(Ap[t]=!0,!1)}function MT(t,e,n,r){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function FT(t,e,n,r){if(e===null||typeof e>"u"||MT(t,e,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function ot(t,e,n,r,i,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var Be={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){Be[t]=new ot(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];Be[e]=new ot(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){Be[t]=new ot(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){Be[t]=new ot(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){Be[t]=new ot(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){Be[t]=new ot(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){Be[t]=new ot(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){Be[t]=new ot(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){Be[t]=new ot(t,5,!1,t.toLowerCase(),null,!1,!1)});var Fh=/[\-:]([a-z])/g;function bh(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(Fh,bh);Be[e]=new ot(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(Fh,bh);Be[e]=new ot(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(Fh,bh);Be[e]=new ot(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){Be[t]=new ot(t,1,!1,t.toLowerCase(),null,!1,!1)});Be.xlinkHref=new ot("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){Be[t]=new ot(t,1,!1,t.toLowerCase(),null,!0,!0)});function Uh(t,e,n,r){var i=Be.hasOwnProperty(e)?Be[e]:null;(i!==null?i.type!==0:r||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(FT(e,n,i,r)&&(n=null),r||i===null?LT(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):i.mustUseProperty?t[i.propertyName]=n===null?i.type===3?!1:"":n:(e=i.attributeName,r=i.attributeNamespace,n===null?t.removeAttribute(e):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?t.setAttributeNS(r,e,n):t.setAttribute(e,n))))}var Sn=VT.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Jo=Symbol.for("react.element"),Zr=Symbol.for("react.portal"),ei=Symbol.for("react.fragment"),jh=Symbol.for("react.strict_mode"),yc=Symbol.for("react.profiler"),gy=Symbol.for("react.provider"),yy=Symbol.for("react.context"),zh=Symbol.for("react.forward_ref"),_c=Symbol.for("react.suspense"),vc=Symbol.for("react.suspense_list"),Bh=Symbol.for("react.memo"),Dn=Symbol.for("react.lazy"),_y=Symbol.for("react.offscreen"),Cp=Symbol.iterator;function os(t){return t===null||typeof t!="object"?null:(t=Cp&&t[Cp]||t["@@iterator"],typeof t=="function"?t:null)}var ve=Object.assign,Vu;function ms(t){if(Vu===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);Vu=e&&e[1]||""}return`
`+Vu+t}var Ou=!1;function Lu(t,e){if(!t||Ou)return"";Ou=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(h){var r=h}Reflect.construct(t,[],e)}else{try{e.call()}catch(h){r=h}t.call(e.prototype)}else{try{throw Error()}catch(h){r=h}t()}}catch(h){if(h&&r&&typeof h.stack=="string"){for(var i=h.stack.split(`
`),s=r.stack.split(`
`),o=i.length-1,l=s.length-1;1<=o&&0<=l&&i[o]!==s[l];)l--;for(;1<=o&&0<=l;o--,l--)if(i[o]!==s[l]){if(o!==1||l!==1)do if(o--,l--,0>l||i[o]!==s[l]){var u=`
`+i[o].replace(" at new "," at ");return t.displayName&&u.includes("<anonymous>")&&(u=u.replace("<anonymous>",t.displayName)),u}while(1<=o&&0<=l);break}}}finally{Ou=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?ms(t):""}function bT(t){switch(t.tag){case 5:return ms(t.type);case 16:return ms("Lazy");case 13:return ms("Suspense");case 19:return ms("SuspenseList");case 0:case 2:case 15:return t=Lu(t.type,!1),t;case 11:return t=Lu(t.type.render,!1),t;case 1:return t=Lu(t.type,!0),t;default:return""}}function Ec(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case ei:return"Fragment";case Zr:return"Portal";case yc:return"Profiler";case jh:return"StrictMode";case _c:return"Suspense";case vc:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case yy:return(t.displayName||"Context")+".Consumer";case gy:return(t._context.displayName||"Context")+".Provider";case zh:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case Bh:return e=t.displayName||null,e!==null?e:Ec(t.type)||"Memo";case Dn:e=t._payload,t=t._init;try{return Ec(t(e))}catch{}}return null}function UT(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Ec(e);case 8:return e===jh?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function er(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function vy(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function jT(t){var e=vy(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),r=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return i.call(this)},set:function(o){r=""+o,s.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function Zo(t){t._valueTracker||(t._valueTracker=jT(t))}function Ey(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),r="";return t&&(r=vy(t)?t.checked?"true":"false":t.value),t=r,t!==n?(e.setValue(t),!0):!1}function ja(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function wc(t,e){var n=e.checked;return ve({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function Pp(t,e){var n=e.defaultValue==null?"":e.defaultValue,r=e.checked!=null?e.checked:e.defaultChecked;n=er(e.value!=null?e.value:n),t._wrapperState={initialChecked:r,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function wy(t,e){e=e.checked,e!=null&&Uh(t,"checked",e,!1)}function Tc(t,e){wy(t,e);var n=er(e.value),r=e.type;if(n!=null)r==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(r==="submit"||r==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?Ic(t,e.type,n):e.hasOwnProperty("defaultValue")&&Ic(t,e.type,er(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function kp(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var r=e.type;if(!(r!=="submit"&&r!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function Ic(t,e,n){(e!=="number"||ja(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var gs=Array.isArray;function hi(t,e,n,r){if(t=t.options,e){e={};for(var i=0;i<n.length;i++)e["$"+n[i]]=!0;for(n=0;n<t.length;n++)i=e.hasOwnProperty("$"+t[n].value),t[n].selected!==i&&(t[n].selected=i),i&&r&&(t[n].defaultSelected=!0)}else{for(n=""+er(n),e=null,i=0;i<t.length;i++){if(t[i].value===n){t[i].selected=!0,r&&(t[i].defaultSelected=!0);return}e!==null||t[i].disabled||(e=t[i])}e!==null&&(e.selected=!0)}}function Sc(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(F(91));return ve({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function Np(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(F(92));if(gs(n)){if(1<n.length)throw Error(F(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:er(n)}}function Ty(t,e){var n=er(e.value),r=er(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),r!=null&&(t.defaultValue=""+r)}function Dp(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function Iy(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Ac(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?Iy(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var ea,Sy=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,r,i){MSApp.execUnsafeLocalFunction(function(){return t(e,n,r,i)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(ea=ea||document.createElement("div"),ea.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=ea.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function zs(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var As={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},zT=["Webkit","ms","Moz","O"];Object.keys(As).forEach(function(t){zT.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),As[e]=As[t]})});function Ay(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||As.hasOwnProperty(t)&&As[t]?(""+e).trim():e+"px"}function Ry(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=Ay(n,e[n],r);n==="float"&&(n="cssFloat"),r?t.setProperty(n,i):t[n]=i}}var BT=ve({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Rc(t,e){if(e){if(BT[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(F(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(F(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(F(61))}if(e.style!=null&&typeof e.style!="object")throw Error(F(62))}}function Cc(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Pc=null;function $h(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var kc=null,di=null,fi=null;function xp(t){if(t=yo(t)){if(typeof kc!="function")throw Error(F(280));var e=t.stateNode;e&&(e=Ol(e),kc(t.stateNode,t.type,e))}}function Cy(t){di?fi?fi.push(t):fi=[t]:di=t}function Py(){if(di){var t=di,e=fi;if(fi=di=null,xp(t),e)for(t=0;t<e.length;t++)xp(e[t])}}function ky(t,e){return t(e)}function Ny(){}var Mu=!1;function Dy(t,e,n){if(Mu)return t(e,n);Mu=!0;try{return ky(t,e,n)}finally{Mu=!1,(di!==null||fi!==null)&&(Ny(),Py())}}function Bs(t,e){var n=t.stateNode;if(n===null)return null;var r=Ol(n);if(r===null)return null;n=r[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(t=t.type,r=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!r;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(F(231,e,typeof n));return n}var Nc=!1;if(gn)try{var as={};Object.defineProperty(as,"passive",{get:function(){Nc=!0}}),window.addEventListener("test",as,as),window.removeEventListener("test",as,as)}catch{Nc=!1}function $T(t,e,n,r,i,s,o,l,u){var h=Array.prototype.slice.call(arguments,3);try{e.apply(n,h)}catch(f){this.onError(f)}}var Rs=!1,za=null,Ba=!1,Dc=null,WT={onError:function(t){Rs=!0,za=t}};function HT(t,e,n,r,i,s,o,l,u){Rs=!1,za=null,$T.apply(WT,arguments)}function qT(t,e,n,r,i,s,o,l,u){if(HT.apply(this,arguments),Rs){if(Rs){var h=za;Rs=!1,za=null}else throw Error(F(198));Ba||(Ba=!0,Dc=h)}}function Br(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function xy(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function Vp(t){if(Br(t)!==t)throw Error(F(188))}function KT(t){var e=t.alternate;if(!e){if(e=Br(t),e===null)throw Error(F(188));return e!==t?null:t}for(var n=t,r=e;;){var i=n.return;if(i===null)break;var s=i.alternate;if(s===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===s.child){for(s=i.child;s;){if(s===n)return Vp(i),t;if(s===r)return Vp(i),e;s=s.sibling}throw Error(F(188))}if(n.return!==r.return)n=i,r=s;else{for(var o=!1,l=i.child;l;){if(l===n){o=!0,n=i,r=s;break}if(l===r){o=!0,r=i,n=s;break}l=l.sibling}if(!o){for(l=s.child;l;){if(l===n){o=!0,n=s,r=i;break}if(l===r){o=!0,r=s,n=i;break}l=l.sibling}if(!o)throw Error(F(189))}}if(n.alternate!==r)throw Error(F(190))}if(n.tag!==3)throw Error(F(188));return n.stateNode.current===n?t:e}function Vy(t){return t=KT(t),t!==null?Oy(t):null}function Oy(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=Oy(t);if(e!==null)return e;t=t.sibling}return null}var Ly=vt.unstable_scheduleCallback,Op=vt.unstable_cancelCallback,GT=vt.unstable_shouldYield,QT=vt.unstable_requestPaint,Ae=vt.unstable_now,YT=vt.unstable_getCurrentPriorityLevel,Wh=vt.unstable_ImmediatePriority,My=vt.unstable_UserBlockingPriority,$a=vt.unstable_NormalPriority,XT=vt.unstable_LowPriority,Fy=vt.unstable_IdlePriority,Nl=null,qt=null;function JT(t){if(qt&&typeof qt.onCommitFiberRoot=="function")try{qt.onCommitFiberRoot(Nl,t,void 0,(t.current.flags&128)===128)}catch{}}var Mt=Math.clz32?Math.clz32:t0,ZT=Math.log,e0=Math.LN2;function t0(t){return t>>>=0,t===0?32:31-(ZT(t)/e0|0)|0}var ta=64,na=4194304;function ys(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function Wa(t,e){var n=t.pendingLanes;if(n===0)return 0;var r=0,i=t.suspendedLanes,s=t.pingedLanes,o=n&268435455;if(o!==0){var l=o&~i;l!==0?r=ys(l):(s&=o,s!==0&&(r=ys(s)))}else o=n&~i,o!==0?r=ys(o):s!==0&&(r=ys(s));if(r===0)return 0;if(e!==0&&e!==r&&!(e&i)&&(i=r&-r,s=e&-e,i>=s||i===16&&(s&4194240)!==0))return e;if(r&4&&(r|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=r;0<e;)n=31-Mt(e),i=1<<n,r|=t[n],e&=~i;return r}function n0(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function r0(t,e){for(var n=t.suspendedLanes,r=t.pingedLanes,i=t.expirationTimes,s=t.pendingLanes;0<s;){var o=31-Mt(s),l=1<<o,u=i[o];u===-1?(!(l&n)||l&r)&&(i[o]=n0(l,e)):u<=e&&(t.expiredLanes|=l),s&=~l}}function xc(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function by(){var t=ta;return ta<<=1,!(ta&4194240)&&(ta=64),t}function Fu(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function mo(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-Mt(e),t[e]=n}function i0(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var r=t.eventTimes;for(t=t.expirationTimes;0<n;){var i=31-Mt(n),s=1<<i;e[i]=0,r[i]=-1,t[i]=-1,n&=~s}}function Hh(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var r=31-Mt(n),i=1<<r;i&e|t[r]&e&&(t[r]|=e),n&=~i}}var oe=0;function Uy(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var jy,qh,zy,By,$y,Vc=!1,ra=[],zn=null,Bn=null,$n=null,$s=new Map,Ws=new Map,Vn=[],s0="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Lp(t,e){switch(t){case"focusin":case"focusout":zn=null;break;case"dragenter":case"dragleave":Bn=null;break;case"mouseover":case"mouseout":$n=null;break;case"pointerover":case"pointerout":$s.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":Ws.delete(e.pointerId)}}function ls(t,e,n,r,i,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:r,nativeEvent:s,targetContainers:[i]},e!==null&&(e=yo(e),e!==null&&qh(e)),t):(t.eventSystemFlags|=r,e=t.targetContainers,i!==null&&e.indexOf(i)===-1&&e.push(i),t)}function o0(t,e,n,r,i){switch(e){case"focusin":return zn=ls(zn,t,e,n,r,i),!0;case"dragenter":return Bn=ls(Bn,t,e,n,r,i),!0;case"mouseover":return $n=ls($n,t,e,n,r,i),!0;case"pointerover":var s=i.pointerId;return $s.set(s,ls($s.get(s)||null,t,e,n,r,i)),!0;case"gotpointercapture":return s=i.pointerId,Ws.set(s,ls(Ws.get(s)||null,t,e,n,r,i)),!0}return!1}function Wy(t){var e=Er(t.target);if(e!==null){var n=Br(e);if(n!==null){if(e=n.tag,e===13){if(e=xy(n),e!==null){t.blockedOn=e,$y(t.priority,function(){zy(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function wa(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=Oc(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var r=new n.constructor(n.type,n);Pc=r,n.target.dispatchEvent(r),Pc=null}else return e=yo(n),e!==null&&qh(e),t.blockedOn=n,!1;e.shift()}return!0}function Mp(t,e,n){wa(t)&&n.delete(e)}function a0(){Vc=!1,zn!==null&&wa(zn)&&(zn=null),Bn!==null&&wa(Bn)&&(Bn=null),$n!==null&&wa($n)&&($n=null),$s.forEach(Mp),Ws.forEach(Mp)}function us(t,e){t.blockedOn===e&&(t.blockedOn=null,Vc||(Vc=!0,vt.unstable_scheduleCallback(vt.unstable_NormalPriority,a0)))}function Hs(t){function e(i){return us(i,t)}if(0<ra.length){us(ra[0],t);for(var n=1;n<ra.length;n++){var r=ra[n];r.blockedOn===t&&(r.blockedOn=null)}}for(zn!==null&&us(zn,t),Bn!==null&&us(Bn,t),$n!==null&&us($n,t),$s.forEach(e),Ws.forEach(e),n=0;n<Vn.length;n++)r=Vn[n],r.blockedOn===t&&(r.blockedOn=null);for(;0<Vn.length&&(n=Vn[0],n.blockedOn===null);)Wy(n),n.blockedOn===null&&Vn.shift()}var pi=Sn.ReactCurrentBatchConfig,Ha=!0;function l0(t,e,n,r){var i=oe,s=pi.transition;pi.transition=null;try{oe=1,Kh(t,e,n,r)}finally{oe=i,pi.transition=s}}function u0(t,e,n,r){var i=oe,s=pi.transition;pi.transition=null;try{oe=4,Kh(t,e,n,r)}finally{oe=i,pi.transition=s}}function Kh(t,e,n,r){if(Ha){var i=Oc(t,e,n,r);if(i===null)Ku(t,e,r,qa,n),Lp(t,r);else if(o0(i,t,e,n,r))r.stopPropagation();else if(Lp(t,r),e&4&&-1<s0.indexOf(t)){for(;i!==null;){var s=yo(i);if(s!==null&&jy(s),s=Oc(t,e,n,r),s===null&&Ku(t,e,r,qa,n),s===i)break;i=s}i!==null&&r.stopPropagation()}else Ku(t,e,r,null,n)}}var qa=null;function Oc(t,e,n,r){if(qa=null,t=$h(r),t=Er(t),t!==null)if(e=Br(t),e===null)t=null;else if(n=e.tag,n===13){if(t=xy(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return qa=t,null}function Hy(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(YT()){case Wh:return 1;case My:return 4;case $a:case XT:return 16;case Fy:return 536870912;default:return 16}default:return 16}}var bn=null,Gh=null,Ta=null;function qy(){if(Ta)return Ta;var t,e=Gh,n=e.length,r,i="value"in bn?bn.value:bn.textContent,s=i.length;for(t=0;t<n&&e[t]===i[t];t++);var o=n-t;for(r=1;r<=o&&e[n-r]===i[s-r];r++);return Ta=i.slice(t,1<r?1-r:void 0)}function Ia(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function ia(){return!0}function Fp(){return!1}function wt(t){function e(n,r,i,s,o){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var l in t)t.hasOwnProperty(l)&&(n=t[l],this[l]=n?n(s):s[l]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?ia:Fp,this.isPropagationStopped=Fp,this}return ve(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=ia)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=ia)},persist:function(){},isPersistent:ia}),e}var bi={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Qh=wt(bi),go=ve({},bi,{view:0,detail:0}),c0=wt(go),bu,Uu,cs,Dl=ve({},go,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Yh,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==cs&&(cs&&t.type==="mousemove"?(bu=t.screenX-cs.screenX,Uu=t.screenY-cs.screenY):Uu=bu=0,cs=t),bu)},movementY:function(t){return"movementY"in t?t.movementY:Uu}}),bp=wt(Dl),h0=ve({},Dl,{dataTransfer:0}),d0=wt(h0),f0=ve({},go,{relatedTarget:0}),ju=wt(f0),p0=ve({},bi,{animationName:0,elapsedTime:0,pseudoElement:0}),m0=wt(p0),g0=ve({},bi,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),y0=wt(g0),_0=ve({},bi,{data:0}),Up=wt(_0),v0={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},E0={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},w0={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function T0(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=w0[t])?!!e[t]:!1}function Yh(){return T0}var I0=ve({},go,{key:function(t){if(t.key){var e=v0[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=Ia(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?E0[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Yh,charCode:function(t){return t.type==="keypress"?Ia(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Ia(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),S0=wt(I0),A0=ve({},Dl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),jp=wt(A0),R0=ve({},go,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Yh}),C0=wt(R0),P0=ve({},bi,{propertyName:0,elapsedTime:0,pseudoElement:0}),k0=wt(P0),N0=ve({},Dl,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),D0=wt(N0),x0=[9,13,27,32],Xh=gn&&"CompositionEvent"in window,Cs=null;gn&&"documentMode"in document&&(Cs=document.documentMode);var V0=gn&&"TextEvent"in window&&!Cs,Ky=gn&&(!Xh||Cs&&8<Cs&&11>=Cs),zp=" ",Bp=!1;function Gy(t,e){switch(t){case"keyup":return x0.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Qy(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var ti=!1;function O0(t,e){switch(t){case"compositionend":return Qy(e);case"keypress":return e.which!==32?null:(Bp=!0,zp);case"textInput":return t=e.data,t===zp&&Bp?null:t;default:return null}}function L0(t,e){if(ti)return t==="compositionend"||!Xh&&Gy(t,e)?(t=qy(),Ta=Gh=bn=null,ti=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return Ky&&e.locale!=="ko"?null:e.data;default:return null}}var M0={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function $p(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!M0[t.type]:e==="textarea"}function Yy(t,e,n,r){Cy(r),e=Ka(e,"onChange"),0<e.length&&(n=new Qh("onChange","change",null,n,r),t.push({event:n,listeners:e}))}var Ps=null,qs=null;function F0(t){a_(t,0)}function xl(t){var e=ii(t);if(Ey(e))return t}function b0(t,e){if(t==="change")return e}var Xy=!1;if(gn){var zu;if(gn){var Bu="oninput"in document;if(!Bu){var Wp=document.createElement("div");Wp.setAttribute("oninput","return;"),Bu=typeof Wp.oninput=="function"}zu=Bu}else zu=!1;Xy=zu&&(!document.documentMode||9<document.documentMode)}function Hp(){Ps&&(Ps.detachEvent("onpropertychange",Jy),qs=Ps=null)}function Jy(t){if(t.propertyName==="value"&&xl(qs)){var e=[];Yy(e,qs,t,$h(t)),Dy(F0,e)}}function U0(t,e,n){t==="focusin"?(Hp(),Ps=e,qs=n,Ps.attachEvent("onpropertychange",Jy)):t==="focusout"&&Hp()}function j0(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return xl(qs)}function z0(t,e){if(t==="click")return xl(e)}function B0(t,e){if(t==="input"||t==="change")return xl(e)}function $0(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var jt=typeof Object.is=="function"?Object.is:$0;function Ks(t,e){if(jt(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),r=Object.keys(e);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!gc.call(e,i)||!jt(t[i],e[i]))return!1}return!0}function qp(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Kp(t,e){var n=qp(t);t=0;for(var r;n;){if(n.nodeType===3){if(r=t+n.textContent.length,t<=e&&r>=e)return{node:n,offset:e-t};t=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=qp(n)}}function Zy(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?Zy(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function e_(){for(var t=window,e=ja();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=ja(t.document)}return e}function Jh(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function W0(t){var e=e_(),n=t.focusedElem,r=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&Zy(n.ownerDocument.documentElement,n)){if(r!==null&&Jh(n)){if(e=r.start,t=r.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var i=n.textContent.length,s=Math.min(r.start,i);r=r.end===void 0?s:Math.min(r.end,i),!t.extend&&s>r&&(i=r,r=s,s=i),i=Kp(n,s);var o=Kp(n,r);i&&o&&(t.rangeCount!==1||t.anchorNode!==i.node||t.anchorOffset!==i.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(i.node,i.offset),t.removeAllRanges(),s>r?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var H0=gn&&"documentMode"in document&&11>=document.documentMode,ni=null,Lc=null,ks=null,Mc=!1;function Gp(t,e,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Mc||ni==null||ni!==ja(r)||(r=ni,"selectionStart"in r&&Jh(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),ks&&Ks(ks,r)||(ks=r,r=Ka(Lc,"onSelect"),0<r.length&&(e=new Qh("onSelect","select",null,e,n),t.push({event:e,listeners:r}),e.target=ni)))}function sa(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var ri={animationend:sa("Animation","AnimationEnd"),animationiteration:sa("Animation","AnimationIteration"),animationstart:sa("Animation","AnimationStart"),transitionend:sa("Transition","TransitionEnd")},$u={},t_={};gn&&(t_=document.createElement("div").style,"AnimationEvent"in window||(delete ri.animationend.animation,delete ri.animationiteration.animation,delete ri.animationstart.animation),"TransitionEvent"in window||delete ri.transitionend.transition);function Vl(t){if($u[t])return $u[t];if(!ri[t])return t;var e=ri[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in t_)return $u[t]=e[n];return t}var n_=Vl("animationend"),r_=Vl("animationiteration"),i_=Vl("animationstart"),s_=Vl("transitionend"),o_=new Map,Qp="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function sr(t,e){o_.set(t,e),zr(e,[t])}for(var Wu=0;Wu<Qp.length;Wu++){var Hu=Qp[Wu],q0=Hu.toLowerCase(),K0=Hu[0].toUpperCase()+Hu.slice(1);sr(q0,"on"+K0)}sr(n_,"onAnimationEnd");sr(r_,"onAnimationIteration");sr(i_,"onAnimationStart");sr("dblclick","onDoubleClick");sr("focusin","onFocus");sr("focusout","onBlur");sr(s_,"onTransitionEnd");wi("onMouseEnter",["mouseout","mouseover"]);wi("onMouseLeave",["mouseout","mouseover"]);wi("onPointerEnter",["pointerout","pointerover"]);wi("onPointerLeave",["pointerout","pointerover"]);zr("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));zr("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));zr("onBeforeInput",["compositionend","keypress","textInput","paste"]);zr("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));zr("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));zr("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var _s="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),G0=new Set("cancel close invalid load scroll toggle".split(" ").concat(_s));function Yp(t,e,n){var r=t.type||"unknown-event";t.currentTarget=n,qT(r,e,void 0,t),t.currentTarget=null}function a_(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var r=t[n],i=r.event;r=r.listeners;e:{var s=void 0;if(e)for(var o=r.length-1;0<=o;o--){var l=r[o],u=l.instance,h=l.currentTarget;if(l=l.listener,u!==s&&i.isPropagationStopped())break e;Yp(i,l,h),s=u}else for(o=0;o<r.length;o++){if(l=r[o],u=l.instance,h=l.currentTarget,l=l.listener,u!==s&&i.isPropagationStopped())break e;Yp(i,l,h),s=u}}}if(Ba)throw t=Dc,Ba=!1,Dc=null,t}function de(t,e){var n=e[zc];n===void 0&&(n=e[zc]=new Set);var r=t+"__bubble";n.has(r)||(l_(e,t,2,!1),n.add(r))}function qu(t,e,n){var r=0;e&&(r|=4),l_(n,t,r,e)}var oa="_reactListening"+Math.random().toString(36).slice(2);function Gs(t){if(!t[oa]){t[oa]=!0,my.forEach(function(n){n!=="selectionchange"&&(G0.has(n)||qu(n,!1,t),qu(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[oa]||(e[oa]=!0,qu("selectionchange",!1,e))}}function l_(t,e,n,r){switch(Hy(e)){case 1:var i=l0;break;case 4:i=u0;break;default:i=Kh}n=i.bind(null,e,n,t),i=void 0,!Nc||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(i=!0),r?i!==void 0?t.addEventListener(e,n,{capture:!0,passive:i}):t.addEventListener(e,n,!0):i!==void 0?t.addEventListener(e,n,{passive:i}):t.addEventListener(e,n,!1)}function Ku(t,e,n,r,i){var s=r;if(!(e&1)&&!(e&2)&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var l=r.stateNode.containerInfo;if(l===i||l.nodeType===8&&l.parentNode===i)break;if(o===4)for(o=r.return;o!==null;){var u=o.tag;if((u===3||u===4)&&(u=o.stateNode.containerInfo,u===i||u.nodeType===8&&u.parentNode===i))return;o=o.return}for(;l!==null;){if(o=Er(l),o===null)return;if(u=o.tag,u===5||u===6){r=s=o;continue e}l=l.parentNode}}r=r.return}Dy(function(){var h=s,f=$h(n),m=[];e:{var g=o_.get(t);if(g!==void 0){var S=Qh,C=t;switch(t){case"keypress":if(Ia(n)===0)break e;case"keydown":case"keyup":S=S0;break;case"focusin":C="focus",S=ju;break;case"focusout":C="blur",S=ju;break;case"beforeblur":case"afterblur":S=ju;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":S=bp;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":S=d0;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":S=C0;break;case n_:case r_:case i_:S=m0;break;case s_:S=k0;break;case"scroll":S=c0;break;case"wheel":S=D0;break;case"copy":case"cut":case"paste":S=y0;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":S=jp}var P=(e&4)!==0,O=!P&&t==="scroll",w=P?g!==null?g+"Capture":null:g;P=[];for(var _=h,A;_!==null;){A=_;var V=A.stateNode;if(A.tag===5&&V!==null&&(A=V,w!==null&&(V=Bs(_,w),V!=null&&P.push(Qs(_,V,A)))),O)break;_=_.return}0<P.length&&(g=new S(g,C,null,n,f),m.push({event:g,listeners:P}))}}if(!(e&7)){e:{if(g=t==="mouseover"||t==="pointerover",S=t==="mouseout"||t==="pointerout",g&&n!==Pc&&(C=n.relatedTarget||n.fromElement)&&(Er(C)||C[yn]))break e;if((S||g)&&(g=f.window===f?f:(g=f.ownerDocument)?g.defaultView||g.parentWindow:window,S?(C=n.relatedTarget||n.toElement,S=h,C=C?Er(C):null,C!==null&&(O=Br(C),C!==O||C.tag!==5&&C.tag!==6)&&(C=null)):(S=null,C=h),S!==C)){if(P=bp,V="onMouseLeave",w="onMouseEnter",_="mouse",(t==="pointerout"||t==="pointerover")&&(P=jp,V="onPointerLeave",w="onPointerEnter",_="pointer"),O=S==null?g:ii(S),A=C==null?g:ii(C),g=new P(V,_+"leave",S,n,f),g.target=O,g.relatedTarget=A,V=null,Er(f)===h&&(P=new P(w,_+"enter",C,n,f),P.target=A,P.relatedTarget=O,V=P),O=V,S&&C)t:{for(P=S,w=C,_=0,A=P;A;A=Qr(A))_++;for(A=0,V=w;V;V=Qr(V))A++;for(;0<_-A;)P=Qr(P),_--;for(;0<A-_;)w=Qr(w),A--;for(;_--;){if(P===w||w!==null&&P===w.alternate)break t;P=Qr(P),w=Qr(w)}P=null}else P=null;S!==null&&Xp(m,g,S,P,!1),C!==null&&O!==null&&Xp(m,O,C,P,!0)}}e:{if(g=h?ii(h):window,S=g.nodeName&&g.nodeName.toLowerCase(),S==="select"||S==="input"&&g.type==="file")var b=b0;else if($p(g))if(Xy)b=B0;else{b=j0;var U=U0}else(S=g.nodeName)&&S.toLowerCase()==="input"&&(g.type==="checkbox"||g.type==="radio")&&(b=z0);if(b&&(b=b(t,h))){Yy(m,b,n,f);break e}U&&U(t,g,h),t==="focusout"&&(U=g._wrapperState)&&U.controlled&&g.type==="number"&&Ic(g,"number",g.value)}switch(U=h?ii(h):window,t){case"focusin":($p(U)||U.contentEditable==="true")&&(ni=U,Lc=h,ks=null);break;case"focusout":ks=Lc=ni=null;break;case"mousedown":Mc=!0;break;case"contextmenu":case"mouseup":case"dragend":Mc=!1,Gp(m,n,f);break;case"selectionchange":if(H0)break;case"keydown":case"keyup":Gp(m,n,f)}var E;if(Xh)e:{switch(t){case"compositionstart":var y="onCompositionStart";break e;case"compositionend":y="onCompositionEnd";break e;case"compositionupdate":y="onCompositionUpdate";break e}y=void 0}else ti?Gy(t,n)&&(y="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(y="onCompositionStart");y&&(Ky&&n.locale!=="ko"&&(ti||y!=="onCompositionStart"?y==="onCompositionEnd"&&ti&&(E=qy()):(bn=f,Gh="value"in bn?bn.value:bn.textContent,ti=!0)),U=Ka(h,y),0<U.length&&(y=new Up(y,t,null,n,f),m.push({event:y,listeners:U}),E?y.data=E:(E=Qy(n),E!==null&&(y.data=E)))),(E=V0?O0(t,n):L0(t,n))&&(h=Ka(h,"onBeforeInput"),0<h.length&&(f=new Up("onBeforeInput","beforeinput",null,n,f),m.push({event:f,listeners:h}),f.data=E))}a_(m,e)})}function Qs(t,e,n){return{instance:t,listener:e,currentTarget:n}}function Ka(t,e){for(var n=e+"Capture",r=[];t!==null;){var i=t,s=i.stateNode;i.tag===5&&s!==null&&(i=s,s=Bs(t,n),s!=null&&r.unshift(Qs(t,s,i)),s=Bs(t,e),s!=null&&r.push(Qs(t,s,i))),t=t.return}return r}function Qr(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function Xp(t,e,n,r,i){for(var s=e._reactName,o=[];n!==null&&n!==r;){var l=n,u=l.alternate,h=l.stateNode;if(u!==null&&u===r)break;l.tag===5&&h!==null&&(l=h,i?(u=Bs(n,s),u!=null&&o.unshift(Qs(n,u,l))):i||(u=Bs(n,s),u!=null&&o.push(Qs(n,u,l)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var Q0=/\r\n?/g,Y0=/\u0000|\uFFFD/g;function Jp(t){return(typeof t=="string"?t:""+t).replace(Q0,`
`).replace(Y0,"")}function aa(t,e,n){if(e=Jp(e),Jp(t)!==e&&n)throw Error(F(425))}function Ga(){}var Fc=null,bc=null;function Uc(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var jc=typeof setTimeout=="function"?setTimeout:void 0,X0=typeof clearTimeout=="function"?clearTimeout:void 0,Zp=typeof Promise=="function"?Promise:void 0,J0=typeof queueMicrotask=="function"?queueMicrotask:typeof Zp<"u"?function(t){return Zp.resolve(null).then(t).catch(Z0)}:jc;function Z0(t){setTimeout(function(){throw t})}function Gu(t,e){var n=e,r=0;do{var i=n.nextSibling;if(t.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){t.removeChild(i),Hs(e);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);Hs(e)}function Wn(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function em(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var Ui=Math.random().toString(36).slice(2),Wt="__reactFiber$"+Ui,Ys="__reactProps$"+Ui,yn="__reactContainer$"+Ui,zc="__reactEvents$"+Ui,eI="__reactListeners$"+Ui,tI="__reactHandles$"+Ui;function Er(t){var e=t[Wt];if(e)return e;for(var n=t.parentNode;n;){if(e=n[yn]||n[Wt]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=em(t);t!==null;){if(n=t[Wt])return n;t=em(t)}return e}t=n,n=t.parentNode}return null}function yo(t){return t=t[Wt]||t[yn],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function ii(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(F(33))}function Ol(t){return t[Ys]||null}var Bc=[],si=-1;function or(t){return{current:t}}function pe(t){0>si||(t.current=Bc[si],Bc[si]=null,si--)}function ce(t,e){si++,Bc[si]=t.current,t.current=e}var tr={},Ze=or(tr),ct=or(!1),Nr=tr;function Ti(t,e){var n=t.type.contextTypes;if(!n)return tr;var r=t.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===e)return r.__reactInternalMemoizedMaskedChildContext;var i={},s;for(s in n)i[s]=e[s];return r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=i),i}function ht(t){return t=t.childContextTypes,t!=null}function Qa(){pe(ct),pe(Ze)}function tm(t,e,n){if(Ze.current!==tr)throw Error(F(168));ce(Ze,e),ce(ct,n)}function u_(t,e,n){var r=t.stateNode;if(e=e.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in e))throw Error(F(108,UT(t)||"Unknown",i));return ve({},n,r)}function Ya(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||tr,Nr=Ze.current,ce(Ze,t),ce(ct,ct.current),!0}function nm(t,e,n){var r=t.stateNode;if(!r)throw Error(F(169));n?(t=u_(t,e,Nr),r.__reactInternalMemoizedMergedChildContext=t,pe(ct),pe(Ze),ce(Ze,t)):pe(ct),ce(ct,n)}var an=null,Ll=!1,Qu=!1;function c_(t){an===null?an=[t]:an.push(t)}function nI(t){Ll=!0,c_(t)}function ar(){if(!Qu&&an!==null){Qu=!0;var t=0,e=oe;try{var n=an;for(oe=1;t<n.length;t++){var r=n[t];do r=r(!0);while(r!==null)}an=null,Ll=!1}catch(i){throw an!==null&&(an=an.slice(t+1)),Ly(Wh,ar),i}finally{oe=e,Qu=!1}}return null}var oi=[],ai=0,Xa=null,Ja=0,It=[],St=0,Dr=null,un=1,cn="";function yr(t,e){oi[ai++]=Ja,oi[ai++]=Xa,Xa=t,Ja=e}function h_(t,e,n){It[St++]=un,It[St++]=cn,It[St++]=Dr,Dr=t;var r=un;t=cn;var i=32-Mt(r)-1;r&=~(1<<i),n+=1;var s=32-Mt(e)+i;if(30<s){var o=i-i%5;s=(r&(1<<o)-1).toString(32),r>>=o,i-=o,un=1<<32-Mt(e)+i|n<<i|r,cn=s+t}else un=1<<s|n<<i|r,cn=t}function Zh(t){t.return!==null&&(yr(t,1),h_(t,1,0))}function ed(t){for(;t===Xa;)Xa=oi[--ai],oi[ai]=null,Ja=oi[--ai],oi[ai]=null;for(;t===Dr;)Dr=It[--St],It[St]=null,cn=It[--St],It[St]=null,un=It[--St],It[St]=null}var _t=null,gt=null,me=!1,Ot=null;function d_(t,e){var n=At(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function rm(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,_t=t,gt=Wn(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,_t=t,gt=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=Dr!==null?{id:un,overflow:cn}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=At(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,_t=t,gt=null,!0):!1;default:return!1}}function $c(t){return(t.mode&1)!==0&&(t.flags&128)===0}function Wc(t){if(me){var e=gt;if(e){var n=e;if(!rm(t,e)){if($c(t))throw Error(F(418));e=Wn(n.nextSibling);var r=_t;e&&rm(t,e)?d_(r,n):(t.flags=t.flags&-4097|2,me=!1,_t=t)}}else{if($c(t))throw Error(F(418));t.flags=t.flags&-4097|2,me=!1,_t=t}}}function im(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;_t=t}function la(t){if(t!==_t)return!1;if(!me)return im(t),me=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!Uc(t.type,t.memoizedProps)),e&&(e=gt)){if($c(t))throw f_(),Error(F(418));for(;e;)d_(t,e),e=Wn(e.nextSibling)}if(im(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(F(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){gt=Wn(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}gt=null}}else gt=_t?Wn(t.stateNode.nextSibling):null;return!0}function f_(){for(var t=gt;t;)t=Wn(t.nextSibling)}function Ii(){gt=_t=null,me=!1}function td(t){Ot===null?Ot=[t]:Ot.push(t)}var rI=Sn.ReactCurrentBatchConfig;function hs(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(F(309));var r=n.stateNode}if(!r)throw Error(F(147,t));var i=r,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var l=i.refs;o===null?delete l[s]:l[s]=o},e._stringRef=s,e)}if(typeof t!="string")throw Error(F(284));if(!n._owner)throw Error(F(290,t))}return t}function ua(t,e){throw t=Object.prototype.toString.call(e),Error(F(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function sm(t){var e=t._init;return e(t._payload)}function p_(t){function e(w,_){if(t){var A=w.deletions;A===null?(w.deletions=[_],w.flags|=16):A.push(_)}}function n(w,_){if(!t)return null;for(;_!==null;)e(w,_),_=_.sibling;return null}function r(w,_){for(w=new Map;_!==null;)_.key!==null?w.set(_.key,_):w.set(_.index,_),_=_.sibling;return w}function i(w,_){return w=Gn(w,_),w.index=0,w.sibling=null,w}function s(w,_,A){return w.index=A,t?(A=w.alternate,A!==null?(A=A.index,A<_?(w.flags|=2,_):A):(w.flags|=2,_)):(w.flags|=1048576,_)}function o(w){return t&&w.alternate===null&&(w.flags|=2),w}function l(w,_,A,V){return _===null||_.tag!==6?(_=nc(A,w.mode,V),_.return=w,_):(_=i(_,A),_.return=w,_)}function u(w,_,A,V){var b=A.type;return b===ei?f(w,_,A.props.children,V,A.key):_!==null&&(_.elementType===b||typeof b=="object"&&b!==null&&b.$$typeof===Dn&&sm(b)===_.type)?(V=i(_,A.props),V.ref=hs(w,_,A),V.return=w,V):(V=Na(A.type,A.key,A.props,null,w.mode,V),V.ref=hs(w,_,A),V.return=w,V)}function h(w,_,A,V){return _===null||_.tag!==4||_.stateNode.containerInfo!==A.containerInfo||_.stateNode.implementation!==A.implementation?(_=rc(A,w.mode,V),_.return=w,_):(_=i(_,A.children||[]),_.return=w,_)}function f(w,_,A,V,b){return _===null||_.tag!==7?(_=Rr(A,w.mode,V,b),_.return=w,_):(_=i(_,A),_.return=w,_)}function m(w,_,A){if(typeof _=="string"&&_!==""||typeof _=="number")return _=nc(""+_,w.mode,A),_.return=w,_;if(typeof _=="object"&&_!==null){switch(_.$$typeof){case Jo:return A=Na(_.type,_.key,_.props,null,w.mode,A),A.ref=hs(w,null,_),A.return=w,A;case Zr:return _=rc(_,w.mode,A),_.return=w,_;case Dn:var V=_._init;return m(w,V(_._payload),A)}if(gs(_)||os(_))return _=Rr(_,w.mode,A,null),_.return=w,_;ua(w,_)}return null}function g(w,_,A,V){var b=_!==null?_.key:null;if(typeof A=="string"&&A!==""||typeof A=="number")return b!==null?null:l(w,_,""+A,V);if(typeof A=="object"&&A!==null){switch(A.$$typeof){case Jo:return A.key===b?u(w,_,A,V):null;case Zr:return A.key===b?h(w,_,A,V):null;case Dn:return b=A._init,g(w,_,b(A._payload),V)}if(gs(A)||os(A))return b!==null?null:f(w,_,A,V,null);ua(w,A)}return null}function S(w,_,A,V,b){if(typeof V=="string"&&V!==""||typeof V=="number")return w=w.get(A)||null,l(_,w,""+V,b);if(typeof V=="object"&&V!==null){switch(V.$$typeof){case Jo:return w=w.get(V.key===null?A:V.key)||null,u(_,w,V,b);case Zr:return w=w.get(V.key===null?A:V.key)||null,h(_,w,V,b);case Dn:var U=V._init;return S(w,_,A,U(V._payload),b)}if(gs(V)||os(V))return w=w.get(A)||null,f(_,w,V,b,null);ua(_,V)}return null}function C(w,_,A,V){for(var b=null,U=null,E=_,y=_=0,v=null;E!==null&&y<A.length;y++){E.index>y?(v=E,E=null):v=E.sibling;var T=g(w,E,A[y],V);if(T===null){E===null&&(E=v);break}t&&E&&T.alternate===null&&e(w,E),_=s(T,_,y),U===null?b=T:U.sibling=T,U=T,E=v}if(y===A.length)return n(w,E),me&&yr(w,y),b;if(E===null){for(;y<A.length;y++)E=m(w,A[y],V),E!==null&&(_=s(E,_,y),U===null?b=E:U.sibling=E,U=E);return me&&yr(w,y),b}for(E=r(w,E);y<A.length;y++)v=S(E,w,y,A[y],V),v!==null&&(t&&v.alternate!==null&&E.delete(v.key===null?y:v.key),_=s(v,_,y),U===null?b=v:U.sibling=v,U=v);return t&&E.forEach(function(R){return e(w,R)}),me&&yr(w,y),b}function P(w,_,A,V){var b=os(A);if(typeof b!="function")throw Error(F(150));if(A=b.call(A),A==null)throw Error(F(151));for(var U=b=null,E=_,y=_=0,v=null,T=A.next();E!==null&&!T.done;y++,T=A.next()){E.index>y?(v=E,E=null):v=E.sibling;var R=g(w,E,T.value,V);if(R===null){E===null&&(E=v);break}t&&E&&R.alternate===null&&e(w,E),_=s(R,_,y),U===null?b=R:U.sibling=R,U=R,E=v}if(T.done)return n(w,E),me&&yr(w,y),b;if(E===null){for(;!T.done;y++,T=A.next())T=m(w,T.value,V),T!==null&&(_=s(T,_,y),U===null?b=T:U.sibling=T,U=T);return me&&yr(w,y),b}for(E=r(w,E);!T.done;y++,T=A.next())T=S(E,w,y,T.value,V),T!==null&&(t&&T.alternate!==null&&E.delete(T.key===null?y:T.key),_=s(T,_,y),U===null?b=T:U.sibling=T,U=T);return t&&E.forEach(function(N){return e(w,N)}),me&&yr(w,y),b}function O(w,_,A,V){if(typeof A=="object"&&A!==null&&A.type===ei&&A.key===null&&(A=A.props.children),typeof A=="object"&&A!==null){switch(A.$$typeof){case Jo:e:{for(var b=A.key,U=_;U!==null;){if(U.key===b){if(b=A.type,b===ei){if(U.tag===7){n(w,U.sibling),_=i(U,A.props.children),_.return=w,w=_;break e}}else if(U.elementType===b||typeof b=="object"&&b!==null&&b.$$typeof===Dn&&sm(b)===U.type){n(w,U.sibling),_=i(U,A.props),_.ref=hs(w,U,A),_.return=w,w=_;break e}n(w,U);break}else e(w,U);U=U.sibling}A.type===ei?(_=Rr(A.props.children,w.mode,V,A.key),_.return=w,w=_):(V=Na(A.type,A.key,A.props,null,w.mode,V),V.ref=hs(w,_,A),V.return=w,w=V)}return o(w);case Zr:e:{for(U=A.key;_!==null;){if(_.key===U)if(_.tag===4&&_.stateNode.containerInfo===A.containerInfo&&_.stateNode.implementation===A.implementation){n(w,_.sibling),_=i(_,A.children||[]),_.return=w,w=_;break e}else{n(w,_);break}else e(w,_);_=_.sibling}_=rc(A,w.mode,V),_.return=w,w=_}return o(w);case Dn:return U=A._init,O(w,_,U(A._payload),V)}if(gs(A))return C(w,_,A,V);if(os(A))return P(w,_,A,V);ua(w,A)}return typeof A=="string"&&A!==""||typeof A=="number"?(A=""+A,_!==null&&_.tag===6?(n(w,_.sibling),_=i(_,A),_.return=w,w=_):(n(w,_),_=nc(A,w.mode,V),_.return=w,w=_),o(w)):n(w,_)}return O}var Si=p_(!0),m_=p_(!1),Za=or(null),el=null,li=null,nd=null;function rd(){nd=li=el=null}function id(t){var e=Za.current;pe(Za),t._currentValue=e}function Hc(t,e,n){for(;t!==null;){var r=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,r!==null&&(r.childLanes|=e)):r!==null&&(r.childLanes&e)!==e&&(r.childLanes|=e),t===n)break;t=t.return}}function mi(t,e){el=t,nd=li=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(ut=!0),t.firstContext=null)}function Ct(t){var e=t._currentValue;if(nd!==t)if(t={context:t,memoizedValue:e,next:null},li===null){if(el===null)throw Error(F(308));li=t,el.dependencies={lanes:0,firstContext:t}}else li=li.next=t;return e}var wr=null;function sd(t){wr===null?wr=[t]:wr.push(t)}function g_(t,e,n,r){var i=e.interleaved;return i===null?(n.next=n,sd(e)):(n.next=i.next,i.next=n),e.interleaved=n,_n(t,r)}function _n(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var xn=!1;function od(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function y_(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function pn(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function Hn(t,e,n){var r=t.updateQueue;if(r===null)return null;if(r=r.shared,re&2){var i=r.pending;return i===null?e.next=e:(e.next=i.next,i.next=e),r.pending=e,_n(t,n)}return i=r.interleaved,i===null?(e.next=e,sd(r)):(e.next=i.next,i.next=e),r.interleaved=e,_n(t,n)}function Sa(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,Hh(t,n)}}function om(t,e){var n=t.updateQueue,r=t.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?i=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?i=s=e:s=s.next=e}else i=s=e;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:s,shared:r.shared,effects:r.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function tl(t,e,n,r){var i=t.updateQueue;xn=!1;var s=i.firstBaseUpdate,o=i.lastBaseUpdate,l=i.shared.pending;if(l!==null){i.shared.pending=null;var u=l,h=u.next;u.next=null,o===null?s=h:o.next=h,o=u;var f=t.alternate;f!==null&&(f=f.updateQueue,l=f.lastBaseUpdate,l!==o&&(l===null?f.firstBaseUpdate=h:l.next=h,f.lastBaseUpdate=u))}if(s!==null){var m=i.baseState;o=0,f=h=u=null,l=s;do{var g=l.lane,S=l.eventTime;if((r&g)===g){f!==null&&(f=f.next={eventTime:S,lane:0,tag:l.tag,payload:l.payload,callback:l.callback,next:null});e:{var C=t,P=l;switch(g=e,S=n,P.tag){case 1:if(C=P.payload,typeof C=="function"){m=C.call(S,m,g);break e}m=C;break e;case 3:C.flags=C.flags&-65537|128;case 0:if(C=P.payload,g=typeof C=="function"?C.call(S,m,g):C,g==null)break e;m=ve({},m,g);break e;case 2:xn=!0}}l.callback!==null&&l.lane!==0&&(t.flags|=64,g=i.effects,g===null?i.effects=[l]:g.push(l))}else S={eventTime:S,lane:g,tag:l.tag,payload:l.payload,callback:l.callback,next:null},f===null?(h=f=S,u=m):f=f.next=S,o|=g;if(l=l.next,l===null){if(l=i.shared.pending,l===null)break;g=l,l=g.next,g.next=null,i.lastBaseUpdate=g,i.shared.pending=null}}while(!0);if(f===null&&(u=m),i.baseState=u,i.firstBaseUpdate=h,i.lastBaseUpdate=f,e=i.shared.interleaved,e!==null){i=e;do o|=i.lane,i=i.next;while(i!==e)}else s===null&&(i.shared.lanes=0);Vr|=o,t.lanes=o,t.memoizedState=m}}function am(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var r=t[e],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(F(191,i));i.call(r)}}}var _o={},Kt=or(_o),Xs=or(_o),Js=or(_o);function Tr(t){if(t===_o)throw Error(F(174));return t}function ad(t,e){switch(ce(Js,e),ce(Xs,t),ce(Kt,_o),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:Ac(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=Ac(e,t)}pe(Kt),ce(Kt,e)}function Ai(){pe(Kt),pe(Xs),pe(Js)}function __(t){Tr(Js.current);var e=Tr(Kt.current),n=Ac(e,t.type);e!==n&&(ce(Xs,t),ce(Kt,n))}function ld(t){Xs.current===t&&(pe(Kt),pe(Xs))}var ye=or(0);function nl(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var Yu=[];function ud(){for(var t=0;t<Yu.length;t++)Yu[t]._workInProgressVersionPrimary=null;Yu.length=0}var Aa=Sn.ReactCurrentDispatcher,Xu=Sn.ReactCurrentBatchConfig,xr=0,_e=null,ke=null,Oe=null,rl=!1,Ns=!1,Zs=0,iI=0;function Ke(){throw Error(F(321))}function cd(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!jt(t[n],e[n]))return!1;return!0}function hd(t,e,n,r,i,s){if(xr=s,_e=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,Aa.current=t===null||t.memoizedState===null?lI:uI,t=n(r,i),Ns){s=0;do{if(Ns=!1,Zs=0,25<=s)throw Error(F(301));s+=1,Oe=ke=null,e.updateQueue=null,Aa.current=cI,t=n(r,i)}while(Ns)}if(Aa.current=il,e=ke!==null&&ke.next!==null,xr=0,Oe=ke=_e=null,rl=!1,e)throw Error(F(300));return t}function dd(){var t=Zs!==0;return Zs=0,t}function $t(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Oe===null?_e.memoizedState=Oe=t:Oe=Oe.next=t,Oe}function Pt(){if(ke===null){var t=_e.alternate;t=t!==null?t.memoizedState:null}else t=ke.next;var e=Oe===null?_e.memoizedState:Oe.next;if(e!==null)Oe=e,ke=t;else{if(t===null)throw Error(F(310));ke=t,t={memoizedState:ke.memoizedState,baseState:ke.baseState,baseQueue:ke.baseQueue,queue:ke.queue,next:null},Oe===null?_e.memoizedState=Oe=t:Oe=Oe.next=t}return Oe}function eo(t,e){return typeof e=="function"?e(t):e}function Ju(t){var e=Pt(),n=e.queue;if(n===null)throw Error(F(311));n.lastRenderedReducer=t;var r=ke,i=r.baseQueue,s=n.pending;if(s!==null){if(i!==null){var o=i.next;i.next=s.next,s.next=o}r.baseQueue=i=s,n.pending=null}if(i!==null){s=i.next,r=r.baseState;var l=o=null,u=null,h=s;do{var f=h.lane;if((xr&f)===f)u!==null&&(u=u.next={lane:0,action:h.action,hasEagerState:h.hasEagerState,eagerState:h.eagerState,next:null}),r=h.hasEagerState?h.eagerState:t(r,h.action);else{var m={lane:f,action:h.action,hasEagerState:h.hasEagerState,eagerState:h.eagerState,next:null};u===null?(l=u=m,o=r):u=u.next=m,_e.lanes|=f,Vr|=f}h=h.next}while(h!==null&&h!==s);u===null?o=r:u.next=l,jt(r,e.memoizedState)||(ut=!0),e.memoizedState=r,e.baseState=o,e.baseQueue=u,n.lastRenderedState=r}if(t=n.interleaved,t!==null){i=t;do s=i.lane,_e.lanes|=s,Vr|=s,i=i.next;while(i!==t)}else i===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function Zu(t){var e=Pt(),n=e.queue;if(n===null)throw Error(F(311));n.lastRenderedReducer=t;var r=n.dispatch,i=n.pending,s=e.memoizedState;if(i!==null){n.pending=null;var o=i=i.next;do s=t(s,o.action),o=o.next;while(o!==i);jt(s,e.memoizedState)||(ut=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,r]}function v_(){}function E_(t,e){var n=_e,r=Pt(),i=e(),s=!jt(r.memoizedState,i);if(s&&(r.memoizedState=i,ut=!0),r=r.queue,fd(I_.bind(null,n,r,t),[t]),r.getSnapshot!==e||s||Oe!==null&&Oe.memoizedState.tag&1){if(n.flags|=2048,to(9,T_.bind(null,n,r,i,e),void 0,null),Le===null)throw Error(F(349));xr&30||w_(n,e,i)}return i}function w_(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=_e.updateQueue,e===null?(e={lastEffect:null,stores:null},_e.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function T_(t,e,n,r){e.value=n,e.getSnapshot=r,S_(e)&&A_(t)}function I_(t,e,n){return n(function(){S_(e)&&A_(t)})}function S_(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!jt(t,n)}catch{return!0}}function A_(t){var e=_n(t,1);e!==null&&Ft(e,t,1,-1)}function lm(t){var e=$t();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:eo,lastRenderedState:t},e.queue=t,t=t.dispatch=aI.bind(null,_e,t),[e.memoizedState,t]}function to(t,e,n,r){return t={tag:t,create:e,destroy:n,deps:r,next:null},e=_e.updateQueue,e===null?(e={lastEffect:null,stores:null},_e.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(r=n.next,n.next=t,t.next=r,e.lastEffect=t)),t}function R_(){return Pt().memoizedState}function Ra(t,e,n,r){var i=$t();_e.flags|=t,i.memoizedState=to(1|e,n,void 0,r===void 0?null:r)}function Ml(t,e,n,r){var i=Pt();r=r===void 0?null:r;var s=void 0;if(ke!==null){var o=ke.memoizedState;if(s=o.destroy,r!==null&&cd(r,o.deps)){i.memoizedState=to(e,n,s,r);return}}_e.flags|=t,i.memoizedState=to(1|e,n,s,r)}function um(t,e){return Ra(8390656,8,t,e)}function fd(t,e){return Ml(2048,8,t,e)}function C_(t,e){return Ml(4,2,t,e)}function P_(t,e){return Ml(4,4,t,e)}function k_(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function N_(t,e,n){return n=n!=null?n.concat([t]):null,Ml(4,4,k_.bind(null,e,t),n)}function pd(){}function D_(t,e){var n=Pt();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&cd(e,r[1])?r[0]:(n.memoizedState=[t,e],t)}function x_(t,e){var n=Pt();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&cd(e,r[1])?r[0]:(t=t(),n.memoizedState=[t,e],t)}function V_(t,e,n){return xr&21?(jt(n,e)||(n=by(),_e.lanes|=n,Vr|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,ut=!0),t.memoizedState=n)}function sI(t,e){var n=oe;oe=n!==0&&4>n?n:4,t(!0);var r=Xu.transition;Xu.transition={};try{t(!1),e()}finally{oe=n,Xu.transition=r}}function O_(){return Pt().memoizedState}function oI(t,e,n){var r=Kn(t);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},L_(t))M_(e,n);else if(n=g_(t,e,n,r),n!==null){var i=it();Ft(n,t,r,i),F_(n,e,r)}}function aI(t,e,n){var r=Kn(t),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(L_(t))M_(e,i);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,l=s(o,n);if(i.hasEagerState=!0,i.eagerState=l,jt(l,o)){var u=e.interleaved;u===null?(i.next=i,sd(e)):(i.next=u.next,u.next=i),e.interleaved=i;return}}catch{}finally{}n=g_(t,e,i,r),n!==null&&(i=it(),Ft(n,t,r,i),F_(n,e,r))}}function L_(t){var e=t.alternate;return t===_e||e!==null&&e===_e}function M_(t,e){Ns=rl=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function F_(t,e,n){if(n&4194240){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,Hh(t,n)}}var il={readContext:Ct,useCallback:Ke,useContext:Ke,useEffect:Ke,useImperativeHandle:Ke,useInsertionEffect:Ke,useLayoutEffect:Ke,useMemo:Ke,useReducer:Ke,useRef:Ke,useState:Ke,useDebugValue:Ke,useDeferredValue:Ke,useTransition:Ke,useMutableSource:Ke,useSyncExternalStore:Ke,useId:Ke,unstable_isNewReconciler:!1},lI={readContext:Ct,useCallback:function(t,e){return $t().memoizedState=[t,e===void 0?null:e],t},useContext:Ct,useEffect:um,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,Ra(4194308,4,k_.bind(null,e,t),n)},useLayoutEffect:function(t,e){return Ra(4194308,4,t,e)},useInsertionEffect:function(t,e){return Ra(4,2,t,e)},useMemo:function(t,e){var n=$t();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var r=$t();return e=n!==void 0?n(e):e,r.memoizedState=r.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},r.queue=t,t=t.dispatch=oI.bind(null,_e,t),[r.memoizedState,t]},useRef:function(t){var e=$t();return t={current:t},e.memoizedState=t},useState:lm,useDebugValue:pd,useDeferredValue:function(t){return $t().memoizedState=t},useTransition:function(){var t=lm(!1),e=t[0];return t=sI.bind(null,t[1]),$t().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var r=_e,i=$t();if(me){if(n===void 0)throw Error(F(407));n=n()}else{if(n=e(),Le===null)throw Error(F(349));xr&30||w_(r,e,n)}i.memoizedState=n;var s={value:n,getSnapshot:e};return i.queue=s,um(I_.bind(null,r,s,t),[t]),r.flags|=2048,to(9,T_.bind(null,r,s,n,e),void 0,null),n},useId:function(){var t=$t(),e=Le.identifierPrefix;if(me){var n=cn,r=un;n=(r&~(1<<32-Mt(r)-1)).toString(32)+n,e=":"+e+"R"+n,n=Zs++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=iI++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},uI={readContext:Ct,useCallback:D_,useContext:Ct,useEffect:fd,useImperativeHandle:N_,useInsertionEffect:C_,useLayoutEffect:P_,useMemo:x_,useReducer:Ju,useRef:R_,useState:function(){return Ju(eo)},useDebugValue:pd,useDeferredValue:function(t){var e=Pt();return V_(e,ke.memoizedState,t)},useTransition:function(){var t=Ju(eo)[0],e=Pt().memoizedState;return[t,e]},useMutableSource:v_,useSyncExternalStore:E_,useId:O_,unstable_isNewReconciler:!1},cI={readContext:Ct,useCallback:D_,useContext:Ct,useEffect:fd,useImperativeHandle:N_,useInsertionEffect:C_,useLayoutEffect:P_,useMemo:x_,useReducer:Zu,useRef:R_,useState:function(){return Zu(eo)},useDebugValue:pd,useDeferredValue:function(t){var e=Pt();return ke===null?e.memoizedState=t:V_(e,ke.memoizedState,t)},useTransition:function(){var t=Zu(eo)[0],e=Pt().memoizedState;return[t,e]},useMutableSource:v_,useSyncExternalStore:E_,useId:O_,unstable_isNewReconciler:!1};function xt(t,e){if(t&&t.defaultProps){e=ve({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function qc(t,e,n,r){e=t.memoizedState,n=n(r,e),n=n==null?e:ve({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var Fl={isMounted:function(t){return(t=t._reactInternals)?Br(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var r=it(),i=Kn(t),s=pn(r,i);s.payload=e,n!=null&&(s.callback=n),e=Hn(t,s,i),e!==null&&(Ft(e,t,i,r),Sa(e,t,i))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var r=it(),i=Kn(t),s=pn(r,i);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=Hn(t,s,i),e!==null&&(Ft(e,t,i,r),Sa(e,t,i))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=it(),r=Kn(t),i=pn(n,r);i.tag=2,e!=null&&(i.callback=e),e=Hn(t,i,r),e!==null&&(Ft(e,t,r,n),Sa(e,t,r))}};function cm(t,e,n,r,i,s,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(r,s,o):e.prototype&&e.prototype.isPureReactComponent?!Ks(n,r)||!Ks(i,s):!0}function b_(t,e,n){var r=!1,i=tr,s=e.contextType;return typeof s=="object"&&s!==null?s=Ct(s):(i=ht(e)?Nr:Ze.current,r=e.contextTypes,s=(r=r!=null)?Ti(t,i):tr),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=Fl,t.stateNode=e,e._reactInternals=t,r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=i,t.__reactInternalMemoizedMaskedChildContext=s),e}function hm(t,e,n,r){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,r),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,r),e.state!==t&&Fl.enqueueReplaceState(e,e.state,null)}function Kc(t,e,n,r){var i=t.stateNode;i.props=n,i.state=t.memoizedState,i.refs={},od(t);var s=e.contextType;typeof s=="object"&&s!==null?i.context=Ct(s):(s=ht(e)?Nr:Ze.current,i.context=Ti(t,s)),i.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(qc(t,e,s,n),i.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(e=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),e!==i.state&&Fl.enqueueReplaceState(i,i.state,null),tl(t,n,i,r),i.state=t.memoizedState),typeof i.componentDidMount=="function"&&(t.flags|=4194308)}function Ri(t,e){try{var n="",r=e;do n+=bT(r),r=r.return;while(r);var i=n}catch(s){i=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:i,digest:null}}function ec(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function Gc(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var hI=typeof WeakMap=="function"?WeakMap:Map;function U_(t,e,n){n=pn(-1,n),n.tag=3,n.payload={element:null};var r=e.value;return n.callback=function(){ol||(ol=!0,ih=r),Gc(t,e)},n}function j_(t,e,n){n=pn(-1,n),n.tag=3;var r=t.type.getDerivedStateFromError;if(typeof r=="function"){var i=e.value;n.payload=function(){return r(i)},n.callback=function(){Gc(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){Gc(t,e),typeof r!="function"&&(qn===null?qn=new Set([this]):qn.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function dm(t,e,n){var r=t.pingCache;if(r===null){r=t.pingCache=new hI;var i=new Set;r.set(e,i)}else i=r.get(e),i===void 0&&(i=new Set,r.set(e,i));i.has(n)||(i.add(n),t=AI.bind(null,t,e,n),e.then(t,t))}function fm(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function pm(t,e,n,r,i){return t.mode&1?(t.flags|=65536,t.lanes=i,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=pn(-1,1),e.tag=2,Hn(n,e,1))),n.lanes|=1),t)}var dI=Sn.ReactCurrentOwner,ut=!1;function rt(t,e,n,r){e.child=t===null?m_(e,null,n,r):Si(e,t.child,n,r)}function mm(t,e,n,r,i){n=n.render;var s=e.ref;return mi(e,i),r=hd(t,e,n,r,s,i),n=dd(),t!==null&&!ut?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,vn(t,e,i)):(me&&n&&Zh(e),e.flags|=1,rt(t,e,r,i),e.child)}function gm(t,e,n,r,i){if(t===null){var s=n.type;return typeof s=="function"&&!Td(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,z_(t,e,s,r,i)):(t=Na(n.type,null,r,e,e.mode,i),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&i)){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:Ks,n(o,r)&&t.ref===e.ref)return vn(t,e,i)}return e.flags|=1,t=Gn(s,r),t.ref=e.ref,t.return=e,e.child=t}function z_(t,e,n,r,i){if(t!==null){var s=t.memoizedProps;if(Ks(s,r)&&t.ref===e.ref)if(ut=!1,e.pendingProps=r=s,(t.lanes&i)!==0)t.flags&131072&&(ut=!0);else return e.lanes=t.lanes,vn(t,e,i)}return Qc(t,e,n,r,i)}function B_(t,e,n){var r=e.pendingProps,i=r.children,s=t!==null?t.memoizedState:null;if(r.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},ce(ci,mt),mt|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,ce(ci,mt),mt|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=s!==null?s.baseLanes:n,ce(ci,mt),mt|=r}else s!==null?(r=s.baseLanes|n,e.memoizedState=null):r=n,ce(ci,mt),mt|=r;return rt(t,e,i,n),e.child}function $_(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function Qc(t,e,n,r,i){var s=ht(n)?Nr:Ze.current;return s=Ti(e,s),mi(e,i),n=hd(t,e,n,r,s,i),r=dd(),t!==null&&!ut?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,vn(t,e,i)):(me&&r&&Zh(e),e.flags|=1,rt(t,e,n,i),e.child)}function ym(t,e,n,r,i){if(ht(n)){var s=!0;Ya(e)}else s=!1;if(mi(e,i),e.stateNode===null)Ca(t,e),b_(e,n,r),Kc(e,n,r,i),r=!0;else if(t===null){var o=e.stateNode,l=e.memoizedProps;o.props=l;var u=o.context,h=n.contextType;typeof h=="object"&&h!==null?h=Ct(h):(h=ht(n)?Nr:Ze.current,h=Ti(e,h));var f=n.getDerivedStateFromProps,m=typeof f=="function"||typeof o.getSnapshotBeforeUpdate=="function";m||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(l!==r||u!==h)&&hm(e,o,r,h),xn=!1;var g=e.memoizedState;o.state=g,tl(e,r,o,i),u=e.memoizedState,l!==r||g!==u||ct.current||xn?(typeof f=="function"&&(qc(e,n,f,r),u=e.memoizedState),(l=xn||cm(e,n,l,r,g,u,h))?(m||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=r,e.memoizedState=u),o.props=r,o.state=u,o.context=h,r=l):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),r=!1)}else{o=e.stateNode,y_(t,e),l=e.memoizedProps,h=e.type===e.elementType?l:xt(e.type,l),o.props=h,m=e.pendingProps,g=o.context,u=n.contextType,typeof u=="object"&&u!==null?u=Ct(u):(u=ht(n)?Nr:Ze.current,u=Ti(e,u));var S=n.getDerivedStateFromProps;(f=typeof S=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(l!==m||g!==u)&&hm(e,o,r,u),xn=!1,g=e.memoizedState,o.state=g,tl(e,r,o,i);var C=e.memoizedState;l!==m||g!==C||ct.current||xn?(typeof S=="function"&&(qc(e,n,S,r),C=e.memoizedState),(h=xn||cm(e,n,h,r,g,C,u)||!1)?(f||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,C,u),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,C,u)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||l===t.memoizedProps&&g===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||l===t.memoizedProps&&g===t.memoizedState||(e.flags|=1024),e.memoizedProps=r,e.memoizedState=C),o.props=r,o.state=C,o.context=u,r=h):(typeof o.componentDidUpdate!="function"||l===t.memoizedProps&&g===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||l===t.memoizedProps&&g===t.memoizedState||(e.flags|=1024),r=!1)}return Yc(t,e,n,r,s,i)}function Yc(t,e,n,r,i,s){$_(t,e);var o=(e.flags&128)!==0;if(!r&&!o)return i&&nm(e,n,!1),vn(t,e,s);r=e.stateNode,dI.current=e;var l=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return e.flags|=1,t!==null&&o?(e.child=Si(e,t.child,null,s),e.child=Si(e,null,l,s)):rt(t,e,l,s),e.memoizedState=r.state,i&&nm(e,n,!0),e.child}function W_(t){var e=t.stateNode;e.pendingContext?tm(t,e.pendingContext,e.pendingContext!==e.context):e.context&&tm(t,e.context,!1),ad(t,e.containerInfo)}function _m(t,e,n,r,i){return Ii(),td(i),e.flags|=256,rt(t,e,n,r),e.child}var Xc={dehydrated:null,treeContext:null,retryLane:0};function Jc(t){return{baseLanes:t,cachePool:null,transitions:null}}function H_(t,e,n){var r=e.pendingProps,i=ye.current,s=!1,o=(e.flags&128)!==0,l;if((l=o)||(l=t!==null&&t.memoizedState===null?!1:(i&2)!==0),l?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(i|=1),ce(ye,i&1),t===null)return Wc(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=r.children,t=r.fallback,s?(r=e.mode,s=e.child,o={mode:"hidden",children:o},!(r&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=jl(o,r,0,null),t=Rr(t,r,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=Jc(n),e.memoizedState=Xc,t):md(e,o));if(i=t.memoizedState,i!==null&&(l=i.dehydrated,l!==null))return fI(t,e,o,r,l,i,n);if(s){s=r.fallback,o=e.mode,i=t.child,l=i.sibling;var u={mode:"hidden",children:r.children};return!(o&1)&&e.child!==i?(r=e.child,r.childLanes=0,r.pendingProps=u,e.deletions=null):(r=Gn(i,u),r.subtreeFlags=i.subtreeFlags&14680064),l!==null?s=Gn(l,s):(s=Rr(s,o,n,null),s.flags|=2),s.return=e,r.return=e,r.sibling=s,e.child=r,r=s,s=e.child,o=t.child.memoizedState,o=o===null?Jc(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=t.childLanes&~n,e.memoizedState=Xc,r}return s=t.child,t=s.sibling,r=Gn(s,{mode:"visible",children:r.children}),!(e.mode&1)&&(r.lanes=n),r.return=e,r.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=r,e.memoizedState=null,r}function md(t,e){return e=jl({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function ca(t,e,n,r){return r!==null&&td(r),Si(e,t.child,null,n),t=md(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function fI(t,e,n,r,i,s,o){if(n)return e.flags&256?(e.flags&=-257,r=ec(Error(F(422))),ca(t,e,o,r)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=r.fallback,i=e.mode,r=jl({mode:"visible",children:r.children},i,0,null),s=Rr(s,i,o,null),s.flags|=2,r.return=e,s.return=e,r.sibling=s,e.child=r,e.mode&1&&Si(e,t.child,null,o),e.child.memoizedState=Jc(o),e.memoizedState=Xc,s);if(!(e.mode&1))return ca(t,e,o,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var l=r.dgst;return r=l,s=Error(F(419)),r=ec(s,r,void 0),ca(t,e,o,r)}if(l=(o&t.childLanes)!==0,ut||l){if(r=Le,r!==null){switch(o&-o){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|o)?0:i,i!==0&&i!==s.retryLane&&(s.retryLane=i,_n(t,i),Ft(r,t,i,-1))}return wd(),r=ec(Error(F(421))),ca(t,e,o,r)}return i.data==="$?"?(e.flags|=128,e.child=t.child,e=RI.bind(null,t),i._reactRetry=e,null):(t=s.treeContext,gt=Wn(i.nextSibling),_t=e,me=!0,Ot=null,t!==null&&(It[St++]=un,It[St++]=cn,It[St++]=Dr,un=t.id,cn=t.overflow,Dr=e),e=md(e,r.children),e.flags|=4096,e)}function vm(t,e,n){t.lanes|=e;var r=t.alternate;r!==null&&(r.lanes|=e),Hc(t.return,e,n)}function tc(t,e,n,r,i){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=r,s.tail=n,s.tailMode=i)}function q_(t,e,n){var r=e.pendingProps,i=r.revealOrder,s=r.tail;if(rt(t,e,r.children,n),r=ye.current,r&2)r=r&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&vm(t,n,e);else if(t.tag===19)vm(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}r&=1}if(ce(ye,r),!(e.mode&1))e.memoizedState=null;else switch(i){case"forwards":for(n=e.child,i=null;n!==null;)t=n.alternate,t!==null&&nl(t)===null&&(i=n),n=n.sibling;n=i,n===null?(i=e.child,e.child=null):(i=n.sibling,n.sibling=null),tc(e,!1,i,n,s);break;case"backwards":for(n=null,i=e.child,e.child=null;i!==null;){if(t=i.alternate,t!==null&&nl(t)===null){e.child=i;break}t=i.sibling,i.sibling=n,n=i,i=t}tc(e,!0,n,null,s);break;case"together":tc(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function Ca(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function vn(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),Vr|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(F(153));if(e.child!==null){for(t=e.child,n=Gn(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=Gn(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function pI(t,e,n){switch(e.tag){case 3:W_(e),Ii();break;case 5:__(e);break;case 1:ht(e.type)&&Ya(e);break;case 4:ad(e,e.stateNode.containerInfo);break;case 10:var r=e.type._context,i=e.memoizedProps.value;ce(Za,r._currentValue),r._currentValue=i;break;case 13:if(r=e.memoizedState,r!==null)return r.dehydrated!==null?(ce(ye,ye.current&1),e.flags|=128,null):n&e.child.childLanes?H_(t,e,n):(ce(ye,ye.current&1),t=vn(t,e,n),t!==null?t.sibling:null);ce(ye,ye.current&1);break;case 19:if(r=(n&e.childLanes)!==0,t.flags&128){if(r)return q_(t,e,n);e.flags|=128}if(i=e.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),ce(ye,ye.current),r)break;return null;case 22:case 23:return e.lanes=0,B_(t,e,n)}return vn(t,e,n)}var K_,Zc,G_,Q_;K_=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Zc=function(){};G_=function(t,e,n,r){var i=t.memoizedProps;if(i!==r){t=e.stateNode,Tr(Kt.current);var s=null;switch(n){case"input":i=wc(t,i),r=wc(t,r),s=[];break;case"select":i=ve({},i,{value:void 0}),r=ve({},r,{value:void 0}),s=[];break;case"textarea":i=Sc(t,i),r=Sc(t,r),s=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(t.onclick=Ga)}Rc(n,r);var o;n=null;for(h in i)if(!r.hasOwnProperty(h)&&i.hasOwnProperty(h)&&i[h]!=null)if(h==="style"){var l=i[h];for(o in l)l.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else h!=="dangerouslySetInnerHTML"&&h!=="children"&&h!=="suppressContentEditableWarning"&&h!=="suppressHydrationWarning"&&h!=="autoFocus"&&(js.hasOwnProperty(h)?s||(s=[]):(s=s||[]).push(h,null));for(h in r){var u=r[h];if(l=i!=null?i[h]:void 0,r.hasOwnProperty(h)&&u!==l&&(u!=null||l!=null))if(h==="style")if(l){for(o in l)!l.hasOwnProperty(o)||u&&u.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in u)u.hasOwnProperty(o)&&l[o]!==u[o]&&(n||(n={}),n[o]=u[o])}else n||(s||(s=[]),s.push(h,n)),n=u;else h==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,l=l?l.__html:void 0,u!=null&&l!==u&&(s=s||[]).push(h,u)):h==="children"?typeof u!="string"&&typeof u!="number"||(s=s||[]).push(h,""+u):h!=="suppressContentEditableWarning"&&h!=="suppressHydrationWarning"&&(js.hasOwnProperty(h)?(u!=null&&h==="onScroll"&&de("scroll",t),s||l===u||(s=[])):(s=s||[]).push(h,u))}n&&(s=s||[]).push("style",n);var h=s;(e.updateQueue=h)&&(e.flags|=4)}};Q_=function(t,e,n,r){n!==r&&(e.flags|=4)};function ds(t,e){if(!me)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:r.sibling=null}}function Ge(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,r=0;if(e)for(var i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=t,i=i.sibling;else for(i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=t,i=i.sibling;return t.subtreeFlags|=r,t.childLanes=n,e}function mI(t,e,n){var r=e.pendingProps;switch(ed(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ge(e),null;case 1:return ht(e.type)&&Qa(),Ge(e),null;case 3:return r=e.stateNode,Ai(),pe(ct),pe(Ze),ud(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(t===null||t.child===null)&&(la(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,Ot!==null&&(ah(Ot),Ot=null))),Zc(t,e),Ge(e),null;case 5:ld(e);var i=Tr(Js.current);if(n=e.type,t!==null&&e.stateNode!=null)G_(t,e,n,r,i),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!r){if(e.stateNode===null)throw Error(F(166));return Ge(e),null}if(t=Tr(Kt.current),la(e)){r=e.stateNode,n=e.type;var s=e.memoizedProps;switch(r[Wt]=e,r[Ys]=s,t=(e.mode&1)!==0,n){case"dialog":de("cancel",r),de("close",r);break;case"iframe":case"object":case"embed":de("load",r);break;case"video":case"audio":for(i=0;i<_s.length;i++)de(_s[i],r);break;case"source":de("error",r);break;case"img":case"image":case"link":de("error",r),de("load",r);break;case"details":de("toggle",r);break;case"input":Pp(r,s),de("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!s.multiple},de("invalid",r);break;case"textarea":Np(r,s),de("invalid",r)}Rc(n,s),i=null;for(var o in s)if(s.hasOwnProperty(o)){var l=s[o];o==="children"?typeof l=="string"?r.textContent!==l&&(s.suppressHydrationWarning!==!0&&aa(r.textContent,l,t),i=["children",l]):typeof l=="number"&&r.textContent!==""+l&&(s.suppressHydrationWarning!==!0&&aa(r.textContent,l,t),i=["children",""+l]):js.hasOwnProperty(o)&&l!=null&&o==="onScroll"&&de("scroll",r)}switch(n){case"input":Zo(r),kp(r,s,!0);break;case"textarea":Zo(r),Dp(r);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(r.onclick=Ga)}r=i,e.updateQueue=r,r!==null&&(e.flags|=4)}else{o=i.nodeType===9?i:i.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=Iy(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof r.is=="string"?t=o.createElement(n,{is:r.is}):(t=o.createElement(n),n==="select"&&(o=t,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):t=o.createElementNS(t,n),t[Wt]=e,t[Ys]=r,K_(t,e,!1,!1),e.stateNode=t;e:{switch(o=Cc(n,r),n){case"dialog":de("cancel",t),de("close",t),i=r;break;case"iframe":case"object":case"embed":de("load",t),i=r;break;case"video":case"audio":for(i=0;i<_s.length;i++)de(_s[i],t);i=r;break;case"source":de("error",t),i=r;break;case"img":case"image":case"link":de("error",t),de("load",t),i=r;break;case"details":de("toggle",t),i=r;break;case"input":Pp(t,r),i=wc(t,r),de("invalid",t);break;case"option":i=r;break;case"select":t._wrapperState={wasMultiple:!!r.multiple},i=ve({},r,{value:void 0}),de("invalid",t);break;case"textarea":Np(t,r),i=Sc(t,r),de("invalid",t);break;default:i=r}Rc(n,i),l=i;for(s in l)if(l.hasOwnProperty(s)){var u=l[s];s==="style"?Ry(t,u):s==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,u!=null&&Sy(t,u)):s==="children"?typeof u=="string"?(n!=="textarea"||u!=="")&&zs(t,u):typeof u=="number"&&zs(t,""+u):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(js.hasOwnProperty(s)?u!=null&&s==="onScroll"&&de("scroll",t):u!=null&&Uh(t,s,u,o))}switch(n){case"input":Zo(t),kp(t,r,!1);break;case"textarea":Zo(t),Dp(t);break;case"option":r.value!=null&&t.setAttribute("value",""+er(r.value));break;case"select":t.multiple=!!r.multiple,s=r.value,s!=null?hi(t,!!r.multiple,s,!1):r.defaultValue!=null&&hi(t,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(t.onclick=Ga)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return Ge(e),null;case 6:if(t&&e.stateNode!=null)Q_(t,e,t.memoizedProps,r);else{if(typeof r!="string"&&e.stateNode===null)throw Error(F(166));if(n=Tr(Js.current),Tr(Kt.current),la(e)){if(r=e.stateNode,n=e.memoizedProps,r[Wt]=e,(s=r.nodeValue!==n)&&(t=_t,t!==null))switch(t.tag){case 3:aa(r.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&aa(r.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[Wt]=e,e.stateNode=r}return Ge(e),null;case 13:if(pe(ye),r=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(me&&gt!==null&&e.mode&1&&!(e.flags&128))f_(),Ii(),e.flags|=98560,s=!1;else if(s=la(e),r!==null&&r.dehydrated!==null){if(t===null){if(!s)throw Error(F(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(F(317));s[Wt]=e}else Ii(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;Ge(e),s=!1}else Ot!==null&&(ah(Ot),Ot=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(r=r!==null,r!==(t!==null&&t.memoizedState!==null)&&r&&(e.child.flags|=8192,e.mode&1&&(t===null||ye.current&1?Ne===0&&(Ne=3):wd())),e.updateQueue!==null&&(e.flags|=4),Ge(e),null);case 4:return Ai(),Zc(t,e),t===null&&Gs(e.stateNode.containerInfo),Ge(e),null;case 10:return id(e.type._context),Ge(e),null;case 17:return ht(e.type)&&Qa(),Ge(e),null;case 19:if(pe(ye),s=e.memoizedState,s===null)return Ge(e),null;if(r=(e.flags&128)!==0,o=s.rendering,o===null)if(r)ds(s,!1);else{if(Ne!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=nl(t),o!==null){for(e.flags|=128,ds(s,!1),r=o.updateQueue,r!==null&&(e.updateQueue=r,e.flags|=4),e.subtreeFlags=0,r=n,n=e.child;n!==null;)s=n,t=r,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,t=o.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return ce(ye,ye.current&1|2),e.child}t=t.sibling}s.tail!==null&&Ae()>Ci&&(e.flags|=128,r=!0,ds(s,!1),e.lanes=4194304)}else{if(!r)if(t=nl(o),t!==null){if(e.flags|=128,r=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),ds(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!me)return Ge(e),null}else 2*Ae()-s.renderingStartTime>Ci&&n!==1073741824&&(e.flags|=128,r=!0,ds(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(n=s.last,n!==null?n.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=Ae(),e.sibling=null,n=ye.current,ce(ye,r?n&1|2:n&1),e):(Ge(e),null);case 22:case 23:return Ed(),r=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==r&&(e.flags|=8192),r&&e.mode&1?mt&1073741824&&(Ge(e),e.subtreeFlags&6&&(e.flags|=8192)):Ge(e),null;case 24:return null;case 25:return null}throw Error(F(156,e.tag))}function gI(t,e){switch(ed(e),e.tag){case 1:return ht(e.type)&&Qa(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return Ai(),pe(ct),pe(Ze),ud(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return ld(e),null;case 13:if(pe(ye),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(F(340));Ii()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return pe(ye),null;case 4:return Ai(),null;case 10:return id(e.type._context),null;case 22:case 23:return Ed(),null;case 24:return null;default:return null}}var ha=!1,Xe=!1,yI=typeof WeakSet=="function"?WeakSet:Set,B=null;function ui(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){Te(t,e,r)}else n.current=null}function eh(t,e,n){try{n()}catch(r){Te(t,e,r)}}var Em=!1;function _I(t,e){if(Fc=Ha,t=e_(),Jh(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,s=r.focusNode;r=r.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,l=-1,u=-1,h=0,f=0,m=t,g=null;t:for(;;){for(var S;m!==n||i!==0&&m.nodeType!==3||(l=o+i),m!==s||r!==0&&m.nodeType!==3||(u=o+r),m.nodeType===3&&(o+=m.nodeValue.length),(S=m.firstChild)!==null;)g=m,m=S;for(;;){if(m===t)break t;if(g===n&&++h===i&&(l=o),g===s&&++f===r&&(u=o),(S=m.nextSibling)!==null)break;m=g,g=m.parentNode}m=S}n=l===-1||u===-1?null:{start:l,end:u}}else n=null}n=n||{start:0,end:0}}else n=null;for(bc={focusedElem:t,selectionRange:n},Ha=!1,B=e;B!==null;)if(e=B,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,B=t;else for(;B!==null;){e=B;try{var C=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(C!==null){var P=C.memoizedProps,O=C.memoizedState,w=e.stateNode,_=w.getSnapshotBeforeUpdate(e.elementType===e.type?P:xt(e.type,P),O);w.__reactInternalSnapshotBeforeUpdate=_}break;case 3:var A=e.stateNode.containerInfo;A.nodeType===1?A.textContent="":A.nodeType===9&&A.documentElement&&A.removeChild(A.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(F(163))}}catch(V){Te(e,e.return,V)}if(t=e.sibling,t!==null){t.return=e.return,B=t;break}B=e.return}return C=Em,Em=!1,C}function Ds(t,e,n){var r=e.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&t)===t){var s=i.destroy;i.destroy=void 0,s!==void 0&&eh(e,n,s)}i=i.next}while(i!==r)}}function bl(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var r=n.create;n.destroy=r()}n=n.next}while(n!==e)}}function th(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function Y_(t){var e=t.alternate;e!==null&&(t.alternate=null,Y_(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[Wt],delete e[Ys],delete e[zc],delete e[eI],delete e[tI])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function X_(t){return t.tag===5||t.tag===3||t.tag===4}function wm(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||X_(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function nh(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=Ga));else if(r!==4&&(t=t.child,t!==null))for(nh(t,e,n),t=t.sibling;t!==null;)nh(t,e,n),t=t.sibling}function rh(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(r!==4&&(t=t.child,t!==null))for(rh(t,e,n),t=t.sibling;t!==null;)rh(t,e,n),t=t.sibling}var Fe=null,Vt=!1;function kn(t,e,n){for(n=n.child;n!==null;)J_(t,e,n),n=n.sibling}function J_(t,e,n){if(qt&&typeof qt.onCommitFiberUnmount=="function")try{qt.onCommitFiberUnmount(Nl,n)}catch{}switch(n.tag){case 5:Xe||ui(n,e);case 6:var r=Fe,i=Vt;Fe=null,kn(t,e,n),Fe=r,Vt=i,Fe!==null&&(Vt?(t=Fe,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):Fe.removeChild(n.stateNode));break;case 18:Fe!==null&&(Vt?(t=Fe,n=n.stateNode,t.nodeType===8?Gu(t.parentNode,n):t.nodeType===1&&Gu(t,n),Hs(t)):Gu(Fe,n.stateNode));break;case 4:r=Fe,i=Vt,Fe=n.stateNode.containerInfo,Vt=!0,kn(t,e,n),Fe=r,Vt=i;break;case 0:case 11:case 14:case 15:if(!Xe&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var s=i,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&eh(n,e,o),i=i.next}while(i!==r)}kn(t,e,n);break;case 1:if(!Xe&&(ui(n,e),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(l){Te(n,e,l)}kn(t,e,n);break;case 21:kn(t,e,n);break;case 22:n.mode&1?(Xe=(r=Xe)||n.memoizedState!==null,kn(t,e,n),Xe=r):kn(t,e,n);break;default:kn(t,e,n)}}function Tm(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new yI),e.forEach(function(r){var i=CI.bind(null,t,r);n.has(r)||(n.add(r),r.then(i,i))})}}function Dt(t,e){var n=e.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var s=t,o=e,l=o;e:for(;l!==null;){switch(l.tag){case 5:Fe=l.stateNode,Vt=!1;break e;case 3:Fe=l.stateNode.containerInfo,Vt=!0;break e;case 4:Fe=l.stateNode.containerInfo,Vt=!0;break e}l=l.return}if(Fe===null)throw Error(F(160));J_(s,o,i),Fe=null,Vt=!1;var u=i.alternate;u!==null&&(u.return=null),i.return=null}catch(h){Te(i,e,h)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)Z_(e,t),e=e.sibling}function Z_(t,e){var n=t.alternate,r=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(Dt(e,t),Bt(t),r&4){try{Ds(3,t,t.return),bl(3,t)}catch(P){Te(t,t.return,P)}try{Ds(5,t,t.return)}catch(P){Te(t,t.return,P)}}break;case 1:Dt(e,t),Bt(t),r&512&&n!==null&&ui(n,n.return);break;case 5:if(Dt(e,t),Bt(t),r&512&&n!==null&&ui(n,n.return),t.flags&32){var i=t.stateNode;try{zs(i,"")}catch(P){Te(t,t.return,P)}}if(r&4&&(i=t.stateNode,i!=null)){var s=t.memoizedProps,o=n!==null?n.memoizedProps:s,l=t.type,u=t.updateQueue;if(t.updateQueue=null,u!==null)try{l==="input"&&s.type==="radio"&&s.name!=null&&wy(i,s),Cc(l,o);var h=Cc(l,s);for(o=0;o<u.length;o+=2){var f=u[o],m=u[o+1];f==="style"?Ry(i,m):f==="dangerouslySetInnerHTML"?Sy(i,m):f==="children"?zs(i,m):Uh(i,f,m,h)}switch(l){case"input":Tc(i,s);break;case"textarea":Ty(i,s);break;case"select":var g=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!s.multiple;var S=s.value;S!=null?hi(i,!!s.multiple,S,!1):g!==!!s.multiple&&(s.defaultValue!=null?hi(i,!!s.multiple,s.defaultValue,!0):hi(i,!!s.multiple,s.multiple?[]:"",!1))}i[Ys]=s}catch(P){Te(t,t.return,P)}}break;case 6:if(Dt(e,t),Bt(t),r&4){if(t.stateNode===null)throw Error(F(162));i=t.stateNode,s=t.memoizedProps;try{i.nodeValue=s}catch(P){Te(t,t.return,P)}}break;case 3:if(Dt(e,t),Bt(t),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Hs(e.containerInfo)}catch(P){Te(t,t.return,P)}break;case 4:Dt(e,t),Bt(t);break;case 13:Dt(e,t),Bt(t),i=t.child,i.flags&8192&&(s=i.memoizedState!==null,i.stateNode.isHidden=s,!s||i.alternate!==null&&i.alternate.memoizedState!==null||(_d=Ae())),r&4&&Tm(t);break;case 22:if(f=n!==null&&n.memoizedState!==null,t.mode&1?(Xe=(h=Xe)||f,Dt(e,t),Xe=h):Dt(e,t),Bt(t),r&8192){if(h=t.memoizedState!==null,(t.stateNode.isHidden=h)&&!f&&t.mode&1)for(B=t,f=t.child;f!==null;){for(m=B=f;B!==null;){switch(g=B,S=g.child,g.tag){case 0:case 11:case 14:case 15:Ds(4,g,g.return);break;case 1:ui(g,g.return);var C=g.stateNode;if(typeof C.componentWillUnmount=="function"){r=g,n=g.return;try{e=r,C.props=e.memoizedProps,C.state=e.memoizedState,C.componentWillUnmount()}catch(P){Te(r,n,P)}}break;case 5:ui(g,g.return);break;case 22:if(g.memoizedState!==null){Sm(m);continue}}S!==null?(S.return=g,B=S):Sm(m)}f=f.sibling}e:for(f=null,m=t;;){if(m.tag===5){if(f===null){f=m;try{i=m.stateNode,h?(s=i.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(l=m.stateNode,u=m.memoizedProps.style,o=u!=null&&u.hasOwnProperty("display")?u.display:null,l.style.display=Ay("display",o))}catch(P){Te(t,t.return,P)}}}else if(m.tag===6){if(f===null)try{m.stateNode.nodeValue=h?"":m.memoizedProps}catch(P){Te(t,t.return,P)}}else if((m.tag!==22&&m.tag!==23||m.memoizedState===null||m===t)&&m.child!==null){m.child.return=m,m=m.child;continue}if(m===t)break e;for(;m.sibling===null;){if(m.return===null||m.return===t)break e;f===m&&(f=null),m=m.return}f===m&&(f=null),m.sibling.return=m.return,m=m.sibling}}break;case 19:Dt(e,t),Bt(t),r&4&&Tm(t);break;case 21:break;default:Dt(e,t),Bt(t)}}function Bt(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(X_(n)){var r=n;break e}n=n.return}throw Error(F(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(zs(i,""),r.flags&=-33);var s=wm(t);rh(t,s,i);break;case 3:case 4:var o=r.stateNode.containerInfo,l=wm(t);nh(t,l,o);break;default:throw Error(F(161))}}catch(u){Te(t,t.return,u)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function vI(t,e,n){B=t,ev(t)}function ev(t,e,n){for(var r=(t.mode&1)!==0;B!==null;){var i=B,s=i.child;if(i.tag===22&&r){var o=i.memoizedState!==null||ha;if(!o){var l=i.alternate,u=l!==null&&l.memoizedState!==null||Xe;l=ha;var h=Xe;if(ha=o,(Xe=u)&&!h)for(B=i;B!==null;)o=B,u=o.child,o.tag===22&&o.memoizedState!==null?Am(i):u!==null?(u.return=o,B=u):Am(i);for(;s!==null;)B=s,ev(s),s=s.sibling;B=i,ha=l,Xe=h}Im(t)}else i.subtreeFlags&8772&&s!==null?(s.return=i,B=s):Im(t)}}function Im(t){for(;B!==null;){var e=B;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:Xe||bl(5,e);break;case 1:var r=e.stateNode;if(e.flags&4&&!Xe)if(n===null)r.componentDidMount();else{var i=e.elementType===e.type?n.memoizedProps:xt(e.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&am(e,s,r);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}am(e,o,n)}break;case 5:var l=e.stateNode;if(n===null&&e.flags&4){n=l;var u=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":u.autoFocus&&n.focus();break;case"img":u.src&&(n.src=u.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var h=e.alternate;if(h!==null){var f=h.memoizedState;if(f!==null){var m=f.dehydrated;m!==null&&Hs(m)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(F(163))}Xe||e.flags&512&&th(e)}catch(g){Te(e,e.return,g)}}if(e===t){B=null;break}if(n=e.sibling,n!==null){n.return=e.return,B=n;break}B=e.return}}function Sm(t){for(;B!==null;){var e=B;if(e===t){B=null;break}var n=e.sibling;if(n!==null){n.return=e.return,B=n;break}B=e.return}}function Am(t){for(;B!==null;){var e=B;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{bl(4,e)}catch(u){Te(e,n,u)}break;case 1:var r=e.stateNode;if(typeof r.componentDidMount=="function"){var i=e.return;try{r.componentDidMount()}catch(u){Te(e,i,u)}}var s=e.return;try{th(e)}catch(u){Te(e,s,u)}break;case 5:var o=e.return;try{th(e)}catch(u){Te(e,o,u)}}}catch(u){Te(e,e.return,u)}if(e===t){B=null;break}var l=e.sibling;if(l!==null){l.return=e.return,B=l;break}B=e.return}}var EI=Math.ceil,sl=Sn.ReactCurrentDispatcher,gd=Sn.ReactCurrentOwner,Rt=Sn.ReactCurrentBatchConfig,re=0,Le=null,Ce=null,je=0,mt=0,ci=or(0),Ne=0,no=null,Vr=0,Ul=0,yd=0,xs=null,at=null,_d=0,Ci=1/0,on=null,ol=!1,ih=null,qn=null,da=!1,Un=null,al=0,Vs=0,sh=null,Pa=-1,ka=0;function it(){return re&6?Ae():Pa!==-1?Pa:Pa=Ae()}function Kn(t){return t.mode&1?re&2&&je!==0?je&-je:rI.transition!==null?(ka===0&&(ka=by()),ka):(t=oe,t!==0||(t=window.event,t=t===void 0?16:Hy(t.type)),t):1}function Ft(t,e,n,r){if(50<Vs)throw Vs=0,sh=null,Error(F(185));mo(t,n,r),(!(re&2)||t!==Le)&&(t===Le&&(!(re&2)&&(Ul|=n),Ne===4&&On(t,je)),dt(t,r),n===1&&re===0&&!(e.mode&1)&&(Ci=Ae()+500,Ll&&ar()))}function dt(t,e){var n=t.callbackNode;r0(t,e);var r=Wa(t,t===Le?je:0);if(r===0)n!==null&&Op(n),t.callbackNode=null,t.callbackPriority=0;else if(e=r&-r,t.callbackPriority!==e){if(n!=null&&Op(n),e===1)t.tag===0?nI(Rm.bind(null,t)):c_(Rm.bind(null,t)),J0(function(){!(re&6)&&ar()}),n=null;else{switch(Uy(r)){case 1:n=Wh;break;case 4:n=My;break;case 16:n=$a;break;case 536870912:n=Fy;break;default:n=$a}n=lv(n,tv.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function tv(t,e){if(Pa=-1,ka=0,re&6)throw Error(F(327));var n=t.callbackNode;if(gi()&&t.callbackNode!==n)return null;var r=Wa(t,t===Le?je:0);if(r===0)return null;if(r&30||r&t.expiredLanes||e)e=ll(t,r);else{e=r;var i=re;re|=2;var s=rv();(Le!==t||je!==e)&&(on=null,Ci=Ae()+500,Ar(t,e));do try{II();break}catch(l){nv(t,l)}while(!0);rd(),sl.current=s,re=i,Ce!==null?e=0:(Le=null,je=0,e=Ne)}if(e!==0){if(e===2&&(i=xc(t),i!==0&&(r=i,e=oh(t,i))),e===1)throw n=no,Ar(t,0),On(t,r),dt(t,Ae()),n;if(e===6)On(t,r);else{if(i=t.current.alternate,!(r&30)&&!wI(i)&&(e=ll(t,r),e===2&&(s=xc(t),s!==0&&(r=s,e=oh(t,s))),e===1))throw n=no,Ar(t,0),On(t,r),dt(t,Ae()),n;switch(t.finishedWork=i,t.finishedLanes=r,e){case 0:case 1:throw Error(F(345));case 2:_r(t,at,on);break;case 3:if(On(t,r),(r&130023424)===r&&(e=_d+500-Ae(),10<e)){if(Wa(t,0)!==0)break;if(i=t.suspendedLanes,(i&r)!==r){it(),t.pingedLanes|=t.suspendedLanes&i;break}t.timeoutHandle=jc(_r.bind(null,t,at,on),e);break}_r(t,at,on);break;case 4:if(On(t,r),(r&4194240)===r)break;for(e=t.eventTimes,i=-1;0<r;){var o=31-Mt(r);s=1<<o,o=e[o],o>i&&(i=o),r&=~s}if(r=i,r=Ae()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*EI(r/1960))-r,10<r){t.timeoutHandle=jc(_r.bind(null,t,at,on),r);break}_r(t,at,on);break;case 5:_r(t,at,on);break;default:throw Error(F(329))}}}return dt(t,Ae()),t.callbackNode===n?tv.bind(null,t):null}function oh(t,e){var n=xs;return t.current.memoizedState.isDehydrated&&(Ar(t,e).flags|=256),t=ll(t,e),t!==2&&(e=at,at=n,e!==null&&ah(e)),t}function ah(t){at===null?at=t:at.push.apply(at,t)}function wI(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],s=i.getSnapshot;i=i.value;try{if(!jt(s(),i))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function On(t,e){for(e&=~yd,e&=~Ul,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-Mt(e),r=1<<n;t[n]=-1,e&=~r}}function Rm(t){if(re&6)throw Error(F(327));gi();var e=Wa(t,0);if(!(e&1))return dt(t,Ae()),null;var n=ll(t,e);if(t.tag!==0&&n===2){var r=xc(t);r!==0&&(e=r,n=oh(t,r))}if(n===1)throw n=no,Ar(t,0),On(t,e),dt(t,Ae()),n;if(n===6)throw Error(F(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,_r(t,at,on),dt(t,Ae()),null}function vd(t,e){var n=re;re|=1;try{return t(e)}finally{re=n,re===0&&(Ci=Ae()+500,Ll&&ar())}}function Or(t){Un!==null&&Un.tag===0&&!(re&6)&&gi();var e=re;re|=1;var n=Rt.transition,r=oe;try{if(Rt.transition=null,oe=1,t)return t()}finally{oe=r,Rt.transition=n,re=e,!(re&6)&&ar()}}function Ed(){mt=ci.current,pe(ci)}function Ar(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,X0(n)),Ce!==null)for(n=Ce.return;n!==null;){var r=n;switch(ed(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Qa();break;case 3:Ai(),pe(ct),pe(Ze),ud();break;case 5:ld(r);break;case 4:Ai();break;case 13:pe(ye);break;case 19:pe(ye);break;case 10:id(r.type._context);break;case 22:case 23:Ed()}n=n.return}if(Le=t,Ce=t=Gn(t.current,null),je=mt=e,Ne=0,no=null,yd=Ul=Vr=0,at=xs=null,wr!==null){for(e=0;e<wr.length;e++)if(n=wr[e],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,s=n.pending;if(s!==null){var o=s.next;s.next=i,r.next=o}n.pending=r}wr=null}return t}function nv(t,e){do{var n=Ce;try{if(rd(),Aa.current=il,rl){for(var r=_e.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}rl=!1}if(xr=0,Oe=ke=_e=null,Ns=!1,Zs=0,gd.current=null,n===null||n.return===null){Ne=1,no=e,Ce=null;break}e:{var s=t,o=n.return,l=n,u=e;if(e=je,l.flags|=32768,u!==null&&typeof u=="object"&&typeof u.then=="function"){var h=u,f=l,m=f.tag;if(!(f.mode&1)&&(m===0||m===11||m===15)){var g=f.alternate;g?(f.updateQueue=g.updateQueue,f.memoizedState=g.memoizedState,f.lanes=g.lanes):(f.updateQueue=null,f.memoizedState=null)}var S=fm(o);if(S!==null){S.flags&=-257,pm(S,o,l,s,e),S.mode&1&&dm(s,h,e),e=S,u=h;var C=e.updateQueue;if(C===null){var P=new Set;P.add(u),e.updateQueue=P}else C.add(u);break e}else{if(!(e&1)){dm(s,h,e),wd();break e}u=Error(F(426))}}else if(me&&l.mode&1){var O=fm(o);if(O!==null){!(O.flags&65536)&&(O.flags|=256),pm(O,o,l,s,e),td(Ri(u,l));break e}}s=u=Ri(u,l),Ne!==4&&(Ne=2),xs===null?xs=[s]:xs.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var w=U_(s,u,e);om(s,w);break e;case 1:l=u;var _=s.type,A=s.stateNode;if(!(s.flags&128)&&(typeof _.getDerivedStateFromError=="function"||A!==null&&typeof A.componentDidCatch=="function"&&(qn===null||!qn.has(A)))){s.flags|=65536,e&=-e,s.lanes|=e;var V=j_(s,l,e);om(s,V);break e}}s=s.return}while(s!==null)}sv(n)}catch(b){e=b,Ce===n&&n!==null&&(Ce=n=n.return);continue}break}while(!0)}function rv(){var t=sl.current;return sl.current=il,t===null?il:t}function wd(){(Ne===0||Ne===3||Ne===2)&&(Ne=4),Le===null||!(Vr&268435455)&&!(Ul&268435455)||On(Le,je)}function ll(t,e){var n=re;re|=2;var r=rv();(Le!==t||je!==e)&&(on=null,Ar(t,e));do try{TI();break}catch(i){nv(t,i)}while(!0);if(rd(),re=n,sl.current=r,Ce!==null)throw Error(F(261));return Le=null,je=0,Ne}function TI(){for(;Ce!==null;)iv(Ce)}function II(){for(;Ce!==null&&!GT();)iv(Ce)}function iv(t){var e=av(t.alternate,t,mt);t.memoizedProps=t.pendingProps,e===null?sv(t):Ce=e,gd.current=null}function sv(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=gI(n,e),n!==null){n.flags&=32767,Ce=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{Ne=6,Ce=null;return}}else if(n=mI(n,e,mt),n!==null){Ce=n;return}if(e=e.sibling,e!==null){Ce=e;return}Ce=e=t}while(e!==null);Ne===0&&(Ne=5)}function _r(t,e,n){var r=oe,i=Rt.transition;try{Rt.transition=null,oe=1,SI(t,e,n,r)}finally{Rt.transition=i,oe=r}return null}function SI(t,e,n,r){do gi();while(Un!==null);if(re&6)throw Error(F(327));n=t.finishedWork;var i=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(F(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(i0(t,s),t===Le&&(Ce=Le=null,je=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||da||(da=!0,lv($a,function(){return gi(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=Rt.transition,Rt.transition=null;var o=oe;oe=1;var l=re;re|=4,gd.current=null,_I(t,n),Z_(n,t),W0(bc),Ha=!!Fc,bc=Fc=null,t.current=n,vI(n),QT(),re=l,oe=o,Rt.transition=s}else t.current=n;if(da&&(da=!1,Un=t,al=i),s=t.pendingLanes,s===0&&(qn=null),JT(n.stateNode),dt(t,Ae()),e!==null)for(r=t.onRecoverableError,n=0;n<e.length;n++)i=e[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(ol)throw ol=!1,t=ih,ih=null,t;return al&1&&t.tag!==0&&gi(),s=t.pendingLanes,s&1?t===sh?Vs++:(Vs=0,sh=t):Vs=0,ar(),null}function gi(){if(Un!==null){var t=Uy(al),e=Rt.transition,n=oe;try{if(Rt.transition=null,oe=16>t?16:t,Un===null)var r=!1;else{if(t=Un,Un=null,al=0,re&6)throw Error(F(331));var i=re;for(re|=4,B=t.current;B!==null;){var s=B,o=s.child;if(B.flags&16){var l=s.deletions;if(l!==null){for(var u=0;u<l.length;u++){var h=l[u];for(B=h;B!==null;){var f=B;switch(f.tag){case 0:case 11:case 15:Ds(8,f,s)}var m=f.child;if(m!==null)m.return=f,B=m;else for(;B!==null;){f=B;var g=f.sibling,S=f.return;if(Y_(f),f===h){B=null;break}if(g!==null){g.return=S,B=g;break}B=S}}}var C=s.alternate;if(C!==null){var P=C.child;if(P!==null){C.child=null;do{var O=P.sibling;P.sibling=null,P=O}while(P!==null)}}B=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,B=o;else e:for(;B!==null;){if(s=B,s.flags&2048)switch(s.tag){case 0:case 11:case 15:Ds(9,s,s.return)}var w=s.sibling;if(w!==null){w.return=s.return,B=w;break e}B=s.return}}var _=t.current;for(B=_;B!==null;){o=B;var A=o.child;if(o.subtreeFlags&2064&&A!==null)A.return=o,B=A;else e:for(o=_;B!==null;){if(l=B,l.flags&2048)try{switch(l.tag){case 0:case 11:case 15:bl(9,l)}}catch(b){Te(l,l.return,b)}if(l===o){B=null;break e}var V=l.sibling;if(V!==null){V.return=l.return,B=V;break e}B=l.return}}if(re=i,ar(),qt&&typeof qt.onPostCommitFiberRoot=="function")try{qt.onPostCommitFiberRoot(Nl,t)}catch{}r=!0}return r}finally{oe=n,Rt.transition=e}}return!1}function Cm(t,e,n){e=Ri(n,e),e=U_(t,e,1),t=Hn(t,e,1),e=it(),t!==null&&(mo(t,1,e),dt(t,e))}function Te(t,e,n){if(t.tag===3)Cm(t,t,n);else for(;e!==null;){if(e.tag===3){Cm(e,t,n);break}else if(e.tag===1){var r=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(qn===null||!qn.has(r))){t=Ri(n,t),t=j_(e,t,1),e=Hn(e,t,1),t=it(),e!==null&&(mo(e,1,t),dt(e,t));break}}e=e.return}}function AI(t,e,n){var r=t.pingCache;r!==null&&r.delete(e),e=it(),t.pingedLanes|=t.suspendedLanes&n,Le===t&&(je&n)===n&&(Ne===4||Ne===3&&(je&130023424)===je&&500>Ae()-_d?Ar(t,0):yd|=n),dt(t,e)}function ov(t,e){e===0&&(t.mode&1?(e=na,na<<=1,!(na&130023424)&&(na=4194304)):e=1);var n=it();t=_n(t,e),t!==null&&(mo(t,e,n),dt(t,n))}function RI(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),ov(t,n)}function CI(t,e){var n=0;switch(t.tag){case 13:var r=t.stateNode,i=t.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=t.stateNode;break;default:throw Error(F(314))}r!==null&&r.delete(e),ov(t,n)}var av;av=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||ct.current)ut=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return ut=!1,pI(t,e,n);ut=!!(t.flags&131072)}else ut=!1,me&&e.flags&1048576&&h_(e,Ja,e.index);switch(e.lanes=0,e.tag){case 2:var r=e.type;Ca(t,e),t=e.pendingProps;var i=Ti(e,Ze.current);mi(e,n),i=hd(null,e,r,t,i,n);var s=dd();return e.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,ht(r)?(s=!0,Ya(e)):s=!1,e.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,od(e),i.updater=Fl,e.stateNode=i,i._reactInternals=e,Kc(e,r,t,n),e=Yc(null,e,r,!0,s,n)):(e.tag=0,me&&s&&Zh(e),rt(null,e,i,n),e=e.child),e;case 16:r=e.elementType;e:{switch(Ca(t,e),t=e.pendingProps,i=r._init,r=i(r._payload),e.type=r,i=e.tag=kI(r),t=xt(r,t),i){case 0:e=Qc(null,e,r,t,n);break e;case 1:e=ym(null,e,r,t,n);break e;case 11:e=mm(null,e,r,t,n);break e;case 14:e=gm(null,e,r,xt(r.type,t),n);break e}throw Error(F(306,r,""))}return e;case 0:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:xt(r,i),Qc(t,e,r,i,n);case 1:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:xt(r,i),ym(t,e,r,i,n);case 3:e:{if(W_(e),t===null)throw Error(F(387));r=e.pendingProps,s=e.memoizedState,i=s.element,y_(t,e),tl(e,r,null,n);var o=e.memoizedState;if(r=o.element,s.isDehydrated)if(s={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){i=Ri(Error(F(423)),e),e=_m(t,e,r,n,i);break e}else if(r!==i){i=Ri(Error(F(424)),e),e=_m(t,e,r,n,i);break e}else for(gt=Wn(e.stateNode.containerInfo.firstChild),_t=e,me=!0,Ot=null,n=m_(e,null,r,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Ii(),r===i){e=vn(t,e,n);break e}rt(t,e,r,n)}e=e.child}return e;case 5:return __(e),t===null&&Wc(e),r=e.type,i=e.pendingProps,s=t!==null?t.memoizedProps:null,o=i.children,Uc(r,i)?o=null:s!==null&&Uc(r,s)&&(e.flags|=32),$_(t,e),rt(t,e,o,n),e.child;case 6:return t===null&&Wc(e),null;case 13:return H_(t,e,n);case 4:return ad(e,e.stateNode.containerInfo),r=e.pendingProps,t===null?e.child=Si(e,null,r,n):rt(t,e,r,n),e.child;case 11:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:xt(r,i),mm(t,e,r,i,n);case 7:return rt(t,e,e.pendingProps,n),e.child;case 8:return rt(t,e,e.pendingProps.children,n),e.child;case 12:return rt(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(r=e.type._context,i=e.pendingProps,s=e.memoizedProps,o=i.value,ce(Za,r._currentValue),r._currentValue=o,s!==null)if(jt(s.value,o)){if(s.children===i.children&&!ct.current){e=vn(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var l=s.dependencies;if(l!==null){o=s.child;for(var u=l.firstContext;u!==null;){if(u.context===r){if(s.tag===1){u=pn(-1,n&-n),u.tag=2;var h=s.updateQueue;if(h!==null){h=h.shared;var f=h.pending;f===null?u.next=u:(u.next=f.next,f.next=u),h.pending=u}}s.lanes|=n,u=s.alternate,u!==null&&(u.lanes|=n),Hc(s.return,n,e),l.lanes|=n;break}u=u.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(F(341));o.lanes|=n,l=o.alternate,l!==null&&(l.lanes|=n),Hc(o,n,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}rt(t,e,i.children,n),e=e.child}return e;case 9:return i=e.type,r=e.pendingProps.children,mi(e,n),i=Ct(i),r=r(i),e.flags|=1,rt(t,e,r,n),e.child;case 14:return r=e.type,i=xt(r,e.pendingProps),i=xt(r.type,i),gm(t,e,r,i,n);case 15:return z_(t,e,e.type,e.pendingProps,n);case 17:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:xt(r,i),Ca(t,e),e.tag=1,ht(r)?(t=!0,Ya(e)):t=!1,mi(e,n),b_(e,r,i),Kc(e,r,i,n),Yc(null,e,r,!0,t,n);case 19:return q_(t,e,n);case 22:return B_(t,e,n)}throw Error(F(156,e.tag))};function lv(t,e){return Ly(t,e)}function PI(t,e,n,r){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function At(t,e,n,r){return new PI(t,e,n,r)}function Td(t){return t=t.prototype,!(!t||!t.isReactComponent)}function kI(t){if(typeof t=="function")return Td(t)?1:0;if(t!=null){if(t=t.$$typeof,t===zh)return 11;if(t===Bh)return 14}return 2}function Gn(t,e){var n=t.alternate;return n===null?(n=At(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function Na(t,e,n,r,i,s){var o=2;if(r=t,typeof t=="function")Td(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case ei:return Rr(n.children,i,s,e);case jh:o=8,i|=8;break;case yc:return t=At(12,n,e,i|2),t.elementType=yc,t.lanes=s,t;case _c:return t=At(13,n,e,i),t.elementType=_c,t.lanes=s,t;case vc:return t=At(19,n,e,i),t.elementType=vc,t.lanes=s,t;case _y:return jl(n,i,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case gy:o=10;break e;case yy:o=9;break e;case zh:o=11;break e;case Bh:o=14;break e;case Dn:o=16,r=null;break e}throw Error(F(130,t==null?t:typeof t,""))}return e=At(o,n,e,i),e.elementType=t,e.type=r,e.lanes=s,e}function Rr(t,e,n,r){return t=At(7,t,r,e),t.lanes=n,t}function jl(t,e,n,r){return t=At(22,t,r,e),t.elementType=_y,t.lanes=n,t.stateNode={isHidden:!1},t}function nc(t,e,n){return t=At(6,t,null,e),t.lanes=n,t}function rc(t,e,n){return e=At(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function NI(t,e,n,r,i){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Fu(0),this.expirationTimes=Fu(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Fu(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function Id(t,e,n,r,i,s,o,l,u){return t=new NI(t,e,n,l,u),e===1?(e=1,s===!0&&(e|=8)):e=0,s=At(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},od(s),t}function DI(t,e,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Zr,key:r==null?null:""+r,children:t,containerInfo:e,implementation:n}}function uv(t){if(!t)return tr;t=t._reactInternals;e:{if(Br(t)!==t||t.tag!==1)throw Error(F(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(ht(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(F(171))}if(t.tag===1){var n=t.type;if(ht(n))return u_(t,n,e)}return e}function cv(t,e,n,r,i,s,o,l,u){return t=Id(n,r,!0,t,i,s,o,l,u),t.context=uv(null),n=t.current,r=it(),i=Kn(n),s=pn(r,i),s.callback=e??null,Hn(n,s,i),t.current.lanes=i,mo(t,i,r),dt(t,r),t}function zl(t,e,n,r){var i=e.current,s=it(),o=Kn(i);return n=uv(n),e.context===null?e.context=n:e.pendingContext=n,e=pn(s,o),e.payload={element:t},r=r===void 0?null:r,r!==null&&(e.callback=r),t=Hn(i,e,o),t!==null&&(Ft(t,i,o,s),Sa(t,i,o)),o}function ul(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function Pm(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function Sd(t,e){Pm(t,e),(t=t.alternate)&&Pm(t,e)}function xI(){return null}var hv=typeof reportError=="function"?reportError:function(t){console.error(t)};function Ad(t){this._internalRoot=t}Bl.prototype.render=Ad.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(F(409));zl(t,e,null,null)};Bl.prototype.unmount=Ad.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;Or(function(){zl(null,t,null,null)}),e[yn]=null}};function Bl(t){this._internalRoot=t}Bl.prototype.unstable_scheduleHydration=function(t){if(t){var e=By();t={blockedOn:null,target:t,priority:e};for(var n=0;n<Vn.length&&e!==0&&e<Vn[n].priority;n++);Vn.splice(n,0,t),n===0&&Wy(t)}};function Rd(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function $l(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function km(){}function VI(t,e,n,r,i){if(i){if(typeof r=="function"){var s=r;r=function(){var h=ul(o);s.call(h)}}var o=cv(e,r,t,0,null,!1,!1,"",km);return t._reactRootContainer=o,t[yn]=o.current,Gs(t.nodeType===8?t.parentNode:t),Or(),o}for(;i=t.lastChild;)t.removeChild(i);if(typeof r=="function"){var l=r;r=function(){var h=ul(u);l.call(h)}}var u=Id(t,0,!1,null,null,!1,!1,"",km);return t._reactRootContainer=u,t[yn]=u.current,Gs(t.nodeType===8?t.parentNode:t),Or(function(){zl(e,u,n,r)}),u}function Wl(t,e,n,r,i){var s=n._reactRootContainer;if(s){var o=s;if(typeof i=="function"){var l=i;i=function(){var u=ul(o);l.call(u)}}zl(e,o,t,i)}else o=VI(n,e,t,i,r);return ul(o)}jy=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=ys(e.pendingLanes);n!==0&&(Hh(e,n|1),dt(e,Ae()),!(re&6)&&(Ci=Ae()+500,ar()))}break;case 13:Or(function(){var r=_n(t,1);if(r!==null){var i=it();Ft(r,t,1,i)}}),Sd(t,1)}};qh=function(t){if(t.tag===13){var e=_n(t,134217728);if(e!==null){var n=it();Ft(e,t,134217728,n)}Sd(t,134217728)}};zy=function(t){if(t.tag===13){var e=Kn(t),n=_n(t,e);if(n!==null){var r=it();Ft(n,t,e,r)}Sd(t,e)}};By=function(){return oe};$y=function(t,e){var n=oe;try{return oe=t,e()}finally{oe=n}};kc=function(t,e,n){switch(e){case"input":if(Tc(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var r=n[e];if(r!==t&&r.form===t.form){var i=Ol(r);if(!i)throw Error(F(90));Ey(r),Tc(r,i)}}}break;case"textarea":Ty(t,n);break;case"select":e=n.value,e!=null&&hi(t,!!n.multiple,e,!1)}};ky=vd;Ny=Or;var OI={usingClientEntryPoint:!1,Events:[yo,ii,Ol,Cy,Py,vd]},fs={findFiberByHostInstance:Er,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},LI={bundleType:fs.bundleType,version:fs.version,rendererPackageName:fs.rendererPackageName,rendererConfig:fs.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Sn.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=Vy(t),t===null?null:t.stateNode},findFiberByHostInstance:fs.findFiberByHostInstance||xI,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var fa=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!fa.isDisabled&&fa.supportsFiber)try{Nl=fa.inject(LI),qt=fa}catch{}}Et.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=OI;Et.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Rd(e))throw Error(F(200));return DI(t,e,null,n)};Et.createRoot=function(t,e){if(!Rd(t))throw Error(F(299));var n=!1,r="",i=hv;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(r=e.identifierPrefix),e.onRecoverableError!==void 0&&(i=e.onRecoverableError)),e=Id(t,1,!1,null,null,n,!1,r,i),t[yn]=e.current,Gs(t.nodeType===8?t.parentNode:t),new Ad(e)};Et.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(F(188)):(t=Object.keys(t).join(","),Error(F(268,t)));return t=Vy(e),t=t===null?null:t.stateNode,t};Et.flushSync=function(t){return Or(t)};Et.hydrate=function(t,e,n){if(!$l(e))throw Error(F(200));return Wl(null,t,e,!0,n)};Et.hydrateRoot=function(t,e,n){if(!Rd(t))throw Error(F(405));var r=n!=null&&n.hydratedSources||null,i=!1,s="",o=hv;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=cv(e,null,t,1,n??null,i,!1,s,o),t[yn]=e.current,Gs(t),r)for(t=0;t<r.length;t++)n=r[t],i=n._getVersion,i=i(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,i]:e.mutableSourceEagerHydrationData.push(n,i);return new Bl(e)};Et.render=function(t,e,n){if(!$l(e))throw Error(F(200));return Wl(null,t,e,!1,n)};Et.unmountComponentAtNode=function(t){if(!$l(t))throw Error(F(40));return t._reactRootContainer?(Or(function(){Wl(null,null,t,!1,function(){t._reactRootContainer=null,t[yn]=null})}),!0):!1};Et.unstable_batchedUpdates=vd;Et.unstable_renderSubtreeIntoContainer=function(t,e,n,r){if(!$l(n))throw Error(F(200));if(t==null||t._reactInternals===void 0)throw Error(F(38));return Wl(t,e,n,!1,r)};Et.version="18.3.1-next-f1338f8080-20240426";function dv(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(dv)}catch(t){console.error(t)}}dv(),dy.exports=Et;var MI=dy.exports,Nm=MI;mc.createRoot=Nm.createRoot,mc.hydrateRoot=Nm.hydrateRoot;var Dm={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fv=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},FI=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const i=t[n++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=t[n++];e[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=t[n++],o=t[n++],l=t[n++],u=((i&7)<<18|(s&63)<<12|(o&63)<<6|l&63)-65536;e[r++]=String.fromCharCode(55296+(u>>10)),e[r++]=String.fromCharCode(56320+(u&1023))}else{const s=t[n++],o=t[n++];e[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|o&63)}}return e.join("")},pv={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<t.length;i+=3){const s=t[i],o=i+1<t.length,l=o?t[i+1]:0,u=i+2<t.length,h=u?t[i+2]:0,f=s>>2,m=(s&3)<<4|l>>4;let g=(l&15)<<2|h>>6,S=h&63;u||(S=64,o||(g=64)),r.push(n[f],n[m],n[g],n[S])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(fv(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):FI(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<t.length;){const s=n[t.charAt(i++)],l=i<t.length?n[t.charAt(i)]:0;++i;const h=i<t.length?n[t.charAt(i)]:64;++i;const m=i<t.length?n[t.charAt(i)]:64;if(++i,s==null||l==null||h==null||m==null)throw new bI;const g=s<<2|l>>4;if(r.push(g),h!==64){const S=l<<4&240|h>>2;if(r.push(S),m!==64){const C=h<<6&192|m;r.push(C)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class bI extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const UI=function(t){const e=fv(t);return pv.encodeByteArray(e,!0)},cl=function(t){return UI(t).replace(/\./g,"")},mv=function(t){try{return pv.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jI(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zI=()=>jI().__FIREBASE_DEFAULTS__,BI=()=>{if(typeof process>"u"||typeof Dm>"u")return;const t=Dm.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},$I=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&mv(t[1]);return e&&JSON.parse(e)},Hl=()=>{try{return zI()||BI()||$I()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},gv=t=>{var e,n;return(n=(e=Hl())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},WI=t=>{const e=gv(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},yv=()=>{var t;return(t=Hl())===null||t===void 0?void 0:t.config},_v=t=>{var e;return(e=Hl())===null||e===void 0?void 0:e[`_${t}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class HI{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qI(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",i=t.iat||0,s=t.sub||t.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},t);return[cl(JSON.stringify(n)),cl(JSON.stringify(o)),""].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function et(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function KI(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(et())}function GI(){var t;const e=(t=Hl())===null||t===void 0?void 0:t.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function QI(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function YI(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function XI(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function JI(){const t=et();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function ZI(){return!GI()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function eS(){try{return typeof indexedDB=="object"}catch{return!1}}function tS(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var s;e(((s=i.error)===null||s===void 0?void 0:s.message)||"")}}catch(n){e(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nS="FirebaseError";class An extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=nS,Object.setPrototypeOf(this,An.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,vo.prototype.create)}}class vo{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},i=`${this.service}/${e}`,s=this.errors[e],o=s?rS(s,r):"Error",l=`${this.serviceName}: ${o} (${i}).`;return new An(i,l,r)}}function rS(t,e){return t.replace(iS,(n,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const iS=/\{\$([^}]+)}/g;function sS(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function hl(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const i of n){if(!r.includes(i))return!1;const s=t[i],o=e[i];if(xm(s)&&xm(o)){if(!hl(s,o))return!1}else if(s!==o)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function xm(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Eo(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function vs(t){const e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[i,s]=r.split("=");e[decodeURIComponent(i)]=decodeURIComponent(s)}}),e}function Es(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}function oS(t,e){const n=new aS(t,e);return n.subscribe.bind(n)}class aS{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let i;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");lS(e,["next","error","complete"])?i=e:i={next:e,error:n,complete:r},i.next===void 0&&(i.next=ic),i.error===void 0&&(i.error=ic),i.complete===void 0&&(i.complete=ic);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),s}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function lS(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function ic(){}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xe(t){return t&&t._delegate?t._delegate:t}class Lr{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vr="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uS{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new HI;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(s){if(i)return null;throw s}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(hS(e))try{this.getOrInitializeService({instanceIdentifier:vr})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(e=vr){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=vr){return this.instances.has(e)}getOptions(e=vr){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[s,o]of this.instancesDeferred.entries()){const l=this.normalizeInstanceIdentifier(s);r===l&&o.resolve(i)}return i}onInit(e,n){var r;const i=this.normalizeInstanceIdentifier(n),s=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;s.add(e),this.onInitCallbacks.set(i,s);const o=this.instances.get(i);return o&&e(o,i),()=>{s.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const i of r)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:cS(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=vr){return this.component?this.component.multipleInstances?e:vr:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function cS(t){return t===vr?void 0:t}function hS(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dS{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new uS(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var te;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(te||(te={}));const fS={debug:te.DEBUG,verbose:te.VERBOSE,info:te.INFO,warn:te.WARN,error:te.ERROR,silent:te.SILENT},pS=te.INFO,mS={[te.DEBUG]:"log",[te.VERBOSE]:"log",[te.INFO]:"info",[te.WARN]:"warn",[te.ERROR]:"error"},gS=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),i=mS[e];if(i)console[i](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Cd{constructor(e){this.name=e,this._logLevel=pS,this._logHandler=gS,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in te))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?fS[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,te.DEBUG,...e),this._logHandler(this,te.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,te.VERBOSE,...e),this._logHandler(this,te.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,te.INFO,...e),this._logHandler(this,te.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,te.WARN,...e),this._logHandler(this,te.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,te.ERROR,...e),this._logHandler(this,te.ERROR,...e)}}const yS=(t,e)=>e.some(n=>t instanceof n);let Vm,Om;function _S(){return Vm||(Vm=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function vS(){return Om||(Om=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const vv=new WeakMap,lh=new WeakMap,Ev=new WeakMap,sc=new WeakMap,Pd=new WeakMap;function ES(t){const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("success",s),t.removeEventListener("error",o)},s=()=>{n(Qn(t.result)),i()},o=()=>{r(t.error),i()};t.addEventListener("success",s),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&vv.set(n,t)}).catch(()=>{}),Pd.set(e,t),e}function wS(t){if(lh.has(t))return;const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("complete",s),t.removeEventListener("error",o),t.removeEventListener("abort",o)},s=()=>{n(),i()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",s),t.addEventListener("error",o),t.addEventListener("abort",o)});lh.set(t,e)}let uh={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return lh.get(t);if(e==="objectStoreNames")return t.objectStoreNames||Ev.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Qn(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function TS(t){uh=t(uh)}function IS(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(oc(this),e,...n);return Ev.set(r,e.sort?e.sort():[e]),Qn(r)}:vS().includes(t)?function(...e){return t.apply(oc(this),e),Qn(vv.get(this))}:function(...e){return Qn(t.apply(oc(this),e))}}function SS(t){return typeof t=="function"?IS(t):(t instanceof IDBTransaction&&wS(t),yS(t,_S())?new Proxy(t,uh):t)}function Qn(t){if(t instanceof IDBRequest)return ES(t);if(sc.has(t))return sc.get(t);const e=SS(t);return e!==t&&(sc.set(t,e),Pd.set(e,t)),e}const oc=t=>Pd.get(t);function AS(t,e,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(t,e),l=Qn(o);return r&&o.addEventListener("upgradeneeded",u=>{r(Qn(o.result),u.oldVersion,u.newVersion,Qn(o.transaction),u)}),n&&o.addEventListener("blocked",u=>n(u.oldVersion,u.newVersion,u)),l.then(u=>{s&&u.addEventListener("close",()=>s()),i&&u.addEventListener("versionchange",h=>i(h.oldVersion,h.newVersion,h))}).catch(()=>{}),l}const RS=["get","getKey","getAll","getAllKeys","count"],CS=["put","add","delete","clear"],ac=new Map;function Lm(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(ac.get(e))return ac.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,i=CS.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||RS.includes(n)))return;const s=async function(o,...l){const u=this.transaction(o,i?"readwrite":"readonly");let h=u.store;return r&&(h=h.index(l.shift())),(await Promise.all([h[n](...l),i&&u.done]))[0]};return ac.set(e,s),s}TS(t=>({...t,get:(e,n,r)=>Lm(e,n)||t.get(e,n,r),has:(e,n)=>!!Lm(e,n)||t.has(e,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class PS{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(kS(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function kS(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const ch="@firebase/app",Mm="0.10.13";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const En=new Cd("@firebase/app"),NS="@firebase/app-compat",DS="@firebase/analytics-compat",xS="@firebase/analytics",VS="@firebase/app-check-compat",OS="@firebase/app-check",LS="@firebase/auth",MS="@firebase/auth-compat",FS="@firebase/database",bS="@firebase/data-connect",US="@firebase/database-compat",jS="@firebase/functions",zS="@firebase/functions-compat",BS="@firebase/installations",$S="@firebase/installations-compat",WS="@firebase/messaging",HS="@firebase/messaging-compat",qS="@firebase/performance",KS="@firebase/performance-compat",GS="@firebase/remote-config",QS="@firebase/remote-config-compat",YS="@firebase/storage",XS="@firebase/storage-compat",JS="@firebase/firestore",ZS="@firebase/vertexai-preview",eA="@firebase/firestore-compat",tA="firebase",nA="10.14.1";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hh="[DEFAULT]",rA={[ch]:"fire-core",[NS]:"fire-core-compat",[xS]:"fire-analytics",[DS]:"fire-analytics-compat",[OS]:"fire-app-check",[VS]:"fire-app-check-compat",[LS]:"fire-auth",[MS]:"fire-auth-compat",[FS]:"fire-rtdb",[bS]:"fire-data-connect",[US]:"fire-rtdb-compat",[jS]:"fire-fn",[zS]:"fire-fn-compat",[BS]:"fire-iid",[$S]:"fire-iid-compat",[WS]:"fire-fcm",[HS]:"fire-fcm-compat",[qS]:"fire-perf",[KS]:"fire-perf-compat",[GS]:"fire-rc",[QS]:"fire-rc-compat",[YS]:"fire-gcs",[XS]:"fire-gcs-compat",[JS]:"fire-fst",[eA]:"fire-fst-compat",[ZS]:"fire-vertex","fire-js":"fire-js",[tA]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dl=new Map,iA=new Map,dh=new Map;function Fm(t,e){try{t.container.addComponent(e)}catch(n){En.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function Pi(t){const e=t.name;if(dh.has(e))return En.debug(`There were multiple attempts to register component ${e}.`),!1;dh.set(e,t);for(const n of dl.values())Fm(n,t);for(const n of iA.values())Fm(n,t);return!0}function kd(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function Lt(t){return t.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sA={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Yn=new vo("app","Firebase",sA);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oA{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new Lr("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Yn.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ji=nA;function wv(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:hh,automaticDataCollectionEnabled:!1},e),i=r.name;if(typeof i!="string"||!i)throw Yn.create("bad-app-name",{appName:String(i)});if(n||(n=yv()),!n)throw Yn.create("no-options");const s=dl.get(i);if(s){if(hl(n,s.options)&&hl(r,s.config))return s;throw Yn.create("duplicate-app",{appName:i})}const o=new dS(i);for(const u of dh.values())o.addComponent(u);const l=new oA(n,r,o);return dl.set(i,l),l}function Tv(t=hh){const e=dl.get(t);if(!e&&t===hh&&yv())return wv();if(!e)throw Yn.create("no-app",{appName:t});return e}function Xn(t,e,n){var r;let i=(r=rA[t])!==null&&r!==void 0?r:t;n&&(i+=`-${n}`);const s=i.match(/\s|\//),o=e.match(/\s|\//);if(s||o){const l=[`Unable to register library "${i}" with version "${e}":`];s&&l.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&o&&l.push("and"),o&&l.push(`version name "${e}" contains illegal characters (whitespace or "/")`),En.warn(l.join(" "));return}Pi(new Lr(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const aA="firebase-heartbeat-database",lA=1,ro="firebase-heartbeat-store";let lc=null;function Iv(){return lc||(lc=AS(aA,lA,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(ro)}catch(n){console.warn(n)}}}}).catch(t=>{throw Yn.create("idb-open",{originalErrorMessage:t.message})})),lc}async function uA(t){try{const n=(await Iv()).transaction(ro),r=await n.objectStore(ro).get(Sv(t));return await n.done,r}catch(e){if(e instanceof An)En.warn(e.message);else{const n=Yn.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});En.warn(n.message)}}}async function bm(t,e){try{const r=(await Iv()).transaction(ro,"readwrite");await r.objectStore(ro).put(e,Sv(t)),await r.done}catch(n){if(n instanceof An)En.warn(n.message);else{const r=Yn.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});En.warn(r.message)}}}function Sv(t){return`${t.name}!${t.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cA=1024,hA=30*24*60*60*1e3;class dA{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new pA(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,n;try{const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=Um();return((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(o=>o.date===s)?void 0:(this._heartbeatsCache.heartbeats.push({date:s,agent:i}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(o=>{const l=new Date(o.date).valueOf();return Date.now()-l<=hA}),this._storage.overwrite(this._heartbeatsCache))}catch(r){En.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=Um(),{heartbeatsToSend:r,unsentEntries:i}=fA(this._heartbeatsCache.heartbeats),s=cl(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}catch(n){return En.warn(n),""}}}function Um(){return new Date().toISOString().substring(0,10)}function fA(t,e=cA){const n=[];let r=t.slice();for(const i of t){const s=n.find(o=>o.agent===i.agent);if(s){if(s.dates.push(i.date),jm(n)>e){s.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),jm(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class pA{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return eS()?tS().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await uA(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return bm(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return bm(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function jm(t){return cl(JSON.stringify({version:2,heartbeats:t})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mA(t){Pi(new Lr("platform-logger",e=>new PS(e),"PRIVATE")),Pi(new Lr("heartbeat",e=>new dA(e),"PRIVATE")),Xn(ch,Mm,t),Xn(ch,Mm,"esm2017"),Xn("fire-js","")}mA("");function Nd(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(t);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(t,r[i])&&(n[r[i]]=t[r[i]]);return n}function Av(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const gA=Av,Rv=new vo("auth","Firebase",Av());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fl=new Cd("@firebase/auth");function yA(t,...e){fl.logLevel<=te.WARN&&fl.warn(`Auth (${ji}): ${t}`,...e)}function Da(t,...e){fl.logLevel<=te.ERROR&&fl.error(`Auth (${ji}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kt(t,...e){throw xd(t,...e)}function bt(t,...e){return xd(t,...e)}function Dd(t,e,n){const r=Object.assign(Object.assign({},gA()),{[e]:n});return new vo("auth","Firebase",r).create(e,{appName:t.name})}function mn(t){return Dd(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function _A(t,e,n){const r=n;if(!(e instanceof r))throw r.name!==e.constructor.name&&kt(t,"argument-error"),Dd(t,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function xd(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return Rv.create(t,...e)}function q(t,e,...n){if(!t)throw xd(e,...n)}function hn(t){const e="INTERNAL ASSERTION FAILED: "+t;throw Da(e),new Error(e)}function wn(t,e){t||hn(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fh(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function vA(){return zm()==="http:"||zm()==="https:"}function zm(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function EA(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(vA()||YI()||"connection"in navigator)?navigator.onLine:!0}function wA(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wo{constructor(e,n){this.shortDelay=e,this.longDelay=n,wn(n>e,"Short delay should be less than long delay!"),this.isMobile=KI()||XI()}get(){return EA()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Vd(t,e){wn(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cv{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;hn("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;hn("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;hn("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const TA={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const IA=new wo(3e4,6e4);function lr(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function ur(t,e,n,r,i={}){return Pv(t,i,async()=>{let s={},o={};r&&(e==="GET"?o=r:s={body:JSON.stringify(r)});const l=Eo(Object.assign({key:t.config.apiKey},o)).slice(1),u=await t._getAdditionalHeaders();u["Content-Type"]="application/json",t.languageCode&&(u["X-Firebase-Locale"]=t.languageCode);const h=Object.assign({method:e,headers:u},s);return QI()||(h.referrerPolicy="no-referrer"),Cv.fetch()(kv(t,t.config.apiHost,n,l),h)})}async function Pv(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},TA),e);try{const i=new AA(t),s=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const o=await s.json();if("needConfirmation"in o)throw pa(t,"account-exists-with-different-credential",o);if(s.ok&&!("errorMessage"in o))return o;{const l=s.ok?o.errorMessage:o.error.message,[u,h]=l.split(" : ");if(u==="FEDERATED_USER_ID_ALREADY_LINKED")throw pa(t,"credential-already-in-use",o);if(u==="EMAIL_EXISTS")throw pa(t,"email-already-in-use",o);if(u==="USER_DISABLED")throw pa(t,"user-disabled",o);const f=r[u]||u.toLowerCase().replace(/[_\s]+/g,"-");if(h)throw Dd(t,f,h);kt(t,f)}}catch(i){if(i instanceof An)throw i;kt(t,"network-request-failed",{message:String(i)})}}async function To(t,e,n,r,i={}){const s=await ur(t,e,n,r,i);return"mfaPendingCredential"in s&&kt(t,"multi-factor-auth-required",{_serverResponse:s}),s}function kv(t,e,n,r){const i=`${e}${n}?${r}`;return t.config.emulator?Vd(t.config,i):`${t.config.apiScheme}://${i}`}function SA(t){switch(t){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class AA{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(bt(this.auth,"network-request-failed")),IA.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function pa(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=bt(t,e,r);return i.customData._tokenResponse=n,i}function Bm(t){return t!==void 0&&t.enterprise!==void 0}class RA{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const n of this.recaptchaEnforcementState)if(n.provider&&n.provider===e)return SA(n.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}}async function CA(t,e){return ur(t,"GET","/v2/recaptchaConfig",lr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function PA(t,e){return ur(t,"POST","/v1/accounts:delete",e)}async function Nv(t,e){return ur(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Os(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function kA(t,e=!1){const n=xe(t),r=await n.getIdToken(e),i=Od(r);q(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const s=typeof i.firebase=="object"?i.firebase:void 0,o=s==null?void 0:s.sign_in_provider;return{claims:i,token:r,authTime:Os(uc(i.auth_time)),issuedAtTime:Os(uc(i.iat)),expirationTime:Os(uc(i.exp)),signInProvider:o||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function uc(t){return Number(t)*1e3}function Od(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return Da("JWT malformed, contained fewer than 3 sections"),null;try{const i=mv(n);return i?JSON.parse(i):(Da("Failed to decode base64 JWT payload"),null)}catch(i){return Da("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function $m(t){const e=Od(t);return q(e,"internal-error"),q(typeof e.exp<"u","internal-error"),q(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function io(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof An&&NA(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function NA({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class DA{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const i=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ph{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Os(this.lastLoginAt),this.creationTime=Os(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function pl(t){var e;const n=t.auth,r=await t.getIdToken(),i=await io(t,Nv(n,{idToken:r}));q(i==null?void 0:i.users.length,n,"internal-error");const s=i.users[0];t._notifyReloadListener(s);const o=!((e=s.providerUserInfo)===null||e===void 0)&&e.length?Dv(s.providerUserInfo):[],l=VA(t.providerData,o),u=t.isAnonymous,h=!(t.email&&s.passwordHash)&&!(l!=null&&l.length),f=u?h:!1,m={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:l,metadata:new ph(s.createdAt,s.lastLoginAt),isAnonymous:f};Object.assign(t,m)}async function xA(t){const e=xe(t);await pl(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function VA(t,e){return[...t.filter(r=>!e.some(i=>i.providerId===r.providerId)),...e]}function Dv(t){return t.map(e=>{var{providerId:n}=e,r=Nd(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function OA(t,e){const n=await Pv(t,{},async()=>{const r=Eo({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:s}=t.config,o=kv(t,i,"/v1/token",`key=${s}`),l=await t._getAdditionalHeaders();return l["Content-Type"]="application/x-www-form-urlencoded",Cv.fetch()(o,{method:"POST",headers:l,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function LA(t,e){return ur(t,"POST","/v2/accounts:revokeToken",lr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yi{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){q(e.idToken,"internal-error"),q(typeof e.idToken<"u","internal-error"),q(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):$m(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){q(e.length!==0,"internal-error");const n=$m(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(q(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:i,expiresIn:s}=await OA(e,n);this.updateTokensAndExpiration(r,i,Number(s))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:i,expirationTime:s}=n,o=new yi;return r&&(q(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),i&&(q(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),s&&(q(typeof s=="number","internal-error",{appName:e}),o.expirationTime=s),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new yi,this.toJSON())}_performRefresh(){return hn("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Nn(t,e){q(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class dn{constructor(e){var{uid:n,auth:r,stsTokenManager:i}=e,s=Nd(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new DA(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new ph(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const n=await io(this,this.stsTokenManager.getToken(this.auth,e));return q(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return kA(this,e)}reload(){return xA(this)}_assign(e){this!==e&&(q(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new dn(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){q(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await pl(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(Lt(this.auth.app))return Promise.reject(mn(this.auth));const e=await this.getIdToken();return await io(this,PA(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,i,s,o,l,u,h,f;const m=(r=n.displayName)!==null&&r!==void 0?r:void 0,g=(i=n.email)!==null&&i!==void 0?i:void 0,S=(s=n.phoneNumber)!==null&&s!==void 0?s:void 0,C=(o=n.photoURL)!==null&&o!==void 0?o:void 0,P=(l=n.tenantId)!==null&&l!==void 0?l:void 0,O=(u=n._redirectEventId)!==null&&u!==void 0?u:void 0,w=(h=n.createdAt)!==null&&h!==void 0?h:void 0,_=(f=n.lastLoginAt)!==null&&f!==void 0?f:void 0,{uid:A,emailVerified:V,isAnonymous:b,providerData:U,stsTokenManager:E}=n;q(A&&E,e,"internal-error");const y=yi.fromJSON(this.name,E);q(typeof A=="string",e,"internal-error"),Nn(m,e.name),Nn(g,e.name),q(typeof V=="boolean",e,"internal-error"),q(typeof b=="boolean",e,"internal-error"),Nn(S,e.name),Nn(C,e.name),Nn(P,e.name),Nn(O,e.name),Nn(w,e.name),Nn(_,e.name);const v=new dn({uid:A,auth:e,email:g,emailVerified:V,displayName:m,isAnonymous:b,photoURL:C,phoneNumber:S,tenantId:P,stsTokenManager:y,createdAt:w,lastLoginAt:_});return U&&Array.isArray(U)&&(v.providerData=U.map(T=>Object.assign({},T))),O&&(v._redirectEventId=O),v}static async _fromIdTokenResponse(e,n,r=!1){const i=new yi;i.updateFromServerResponse(n);const s=new dn({uid:n.localId,auth:e,stsTokenManager:i,isAnonymous:r});return await pl(s),s}static async _fromGetAccountInfoResponse(e,n,r){const i=n.users[0];q(i.localId!==void 0,"internal-error");const s=i.providerUserInfo!==void 0?Dv(i.providerUserInfo):[],o=!(i.email&&i.passwordHash)&&!(s!=null&&s.length),l=new yi;l.updateFromIdToken(r);const u=new dn({uid:i.localId,auth:e,stsTokenManager:l,isAnonymous:o}),h={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:s,metadata:new ph(i.createdAt,i.lastLoginAt),isAnonymous:!(i.email&&i.passwordHash)&&!(s!=null&&s.length)};return Object.assign(u,h),u}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wm=new Map;function fn(t){wn(t instanceof Function,"Expected a class definition");let e=Wm.get(t);return e?(wn(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,Wm.set(t,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xv{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}xv.type="NONE";const Hm=xv;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xa(t,e,n){return`firebase:${t}:${e}:${n}`}class _i{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:i,name:s}=this.auth;this.fullUserKey=xa(this.userKey,i.apiKey,s),this.fullPersistenceKey=xa("persistence",i.apiKey,s),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?dn._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new _i(fn(Hm),e,r);const i=(await Promise.all(n.map(async h=>{if(await h._isAvailable())return h}))).filter(h=>h);let s=i[0]||fn(Hm);const o=xa(r,e.config.apiKey,e.name);let l=null;for(const h of n)try{const f=await h._get(o);if(f){const m=dn._fromJSON(e,f);h!==s&&(l=m),s=h;break}}catch{}const u=i.filter(h=>h._shouldAllowMigration);return!s._shouldAllowMigration||!u.length?new _i(s,e,r):(s=u[0],l&&await s._set(o,l.toJSON()),await Promise.all(n.map(async h=>{if(h!==s)try{await h._remove(o)}catch{}})),new _i(s,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qm(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Mv(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Vv(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(bv(e))return"Blackberry";if(Uv(e))return"Webos";if(Ov(e))return"Safari";if((e.includes("chrome/")||Lv(e))&&!e.includes("edge/"))return"Chrome";if(Fv(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function Vv(t=et()){return/firefox\//i.test(t)}function Ov(t=et()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function Lv(t=et()){return/crios\//i.test(t)}function Mv(t=et()){return/iemobile/i.test(t)}function Fv(t=et()){return/android/i.test(t)}function bv(t=et()){return/blackberry/i.test(t)}function Uv(t=et()){return/webos/i.test(t)}function Ld(t=et()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function MA(t=et()){var e;return Ld(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function FA(){return JI()&&document.documentMode===10}function jv(t=et()){return Ld(t)||Fv(t)||Uv(t)||bv(t)||/windows phone/i.test(t)||Mv(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zv(t,e=[]){let n;switch(t){case"Browser":n=qm(et());break;case"Worker":n=`${qm(et())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${ji}/${r}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bA{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=s=>new Promise((o,l)=>{try{const u=e(s);o(u)}catch(u){l(u)}});r.onAbort=n,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const i of n)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function UA(t,e={}){return ur(t,"GET","/v2/passwordPolicy",lr(t,e))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jA=6;class zA{constructor(e){var n,r,i,s;const o=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=o.minPasswordLength)!==null&&n!==void 0?n:jA,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(i=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&i!==void 0?i:"",this.forceUpgradeOnSignin=(s=e.forceUpgradeOnSignin)!==null&&s!==void 0?s:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var n,r,i,s,o,l;const u={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,u),this.validatePasswordCharacterOptions(e,u),u.isValid&&(u.isValid=(n=u.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),u.isValid&&(u.isValid=(r=u.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),u.isValid&&(u.isValid=(i=u.containsLowercaseLetter)!==null&&i!==void 0?i:!0),u.isValid&&(u.isValid=(s=u.containsUppercaseLetter)!==null&&s!==void 0?s:!0),u.isValid&&(u.isValid=(o=u.containsNumericCharacter)!==null&&o!==void 0?o:!0),u.isValid&&(u.isValid=(l=u.containsNonAlphanumericCharacter)!==null&&l!==void 0?l:!0),u}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,i=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),i&&(n.meetsMaxPasswordLength=e.length<=i)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let i=0;i<e.length;i++)r=e.charAt(i),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,i,s){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=i)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class BA{constructor(e,n,r,i){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Km(this),this.idTokenSubscription=new Km(this),this.beforeStateQueue=new bA(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Rv,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=fn(n)),this._initializationPromise=this.queue(async()=>{var r,i;if(!this._deleted&&(this.persistenceManager=await _i.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await Nv(this,{idToken:e}),r=await dn._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(r)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var n;if(Lt(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(l=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(l,l))}):this.directlySetCurrentUser(null)}const r=await this.assertedPersistence.getCurrentUser();let i=r,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,l=i==null?void 0:i._redirectEventId,u=await this.tryRedirectSignIn(e);(!o||o===l)&&(u!=null&&u.user)&&(i=u.user,s=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(i)}catch(o){i=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return q(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await pl(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=wA()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(Lt(this.app))return Promise.reject(mn(this));const n=e?xe(e):null;return n&&q(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&q(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return Lt(this.app)?Promise.reject(mn(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return Lt(this.app)?Promise.reject(mn(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(fn(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await UA(this),n=new zA(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new vo("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await LA(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&fn(e)||this._popupRedirectResolver;q(n,this,"argument-error"),this.redirectPersistenceManager=await _i.create(this,[fn(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,i){if(this._deleted)return()=>{};const s=typeof n=="function"?n:n.next.bind(n);let o=!1;const l=this._isInitialized?Promise.resolve():this._initializationPromise;if(q(l,this,"internal-error"),l.then(()=>{o||s(this.currentUser)}),typeof n=="function"){const u=e.addObserver(n,r,i);return()=>{o=!0,u()}}else{const u=e.addObserver(n);return()=>{o=!0,u()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return q(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=zv(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const i=await this._getAppCheckToken();return i&&(n["X-Firebase-AppCheck"]=i),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&yA(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function cr(t){return xe(t)}class Km{constructor(e){this.auth=e,this.observer=null,this.addObserver=oS(n=>this.observer=n)}get next(){return q(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ql={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function $A(t){ql=t}function Bv(t){return ql.loadJS(t)}function WA(){return ql.recaptchaEnterpriseScript}function HA(){return ql.gapiScript}function qA(t){return`__${t}${Math.floor(Math.random()*1e6)}`}const KA="recaptcha-enterprise",GA="NO_RECAPTCHA";class QA{constructor(e){this.type=KA,this.auth=cr(e)}async verify(e="verify",n=!1){async function r(s){if(!n){if(s.tenantId==null&&s._agentRecaptchaConfig!=null)return s._agentRecaptchaConfig.siteKey;if(s.tenantId!=null&&s._tenantRecaptchaConfigs[s.tenantId]!==void 0)return s._tenantRecaptchaConfigs[s.tenantId].siteKey}return new Promise(async(o,l)=>{CA(s,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(u=>{if(u.recaptchaKey===void 0)l(new Error("recaptcha Enterprise site key undefined"));else{const h=new RA(u);return s.tenantId==null?s._agentRecaptchaConfig=h:s._tenantRecaptchaConfigs[s.tenantId]=h,o(h.siteKey)}}).catch(u=>{l(u)})})}function i(s,o,l){const u=window.grecaptcha;Bm(u)?u.enterprise.ready(()=>{u.enterprise.execute(s,{action:e}).then(h=>{o(h)}).catch(()=>{o(GA)})}):l(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((s,o)=>{r(this.auth).then(l=>{if(!n&&Bm(window.grecaptcha))i(l,s,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}let u=WA();u.length!==0&&(u+=l),Bv(u).then(()=>{i(l,s,o)}).catch(h=>{o(h)})}}).catch(l=>{o(l)})})}}async function Gm(t,e,n,r=!1){const i=new QA(t);let s;try{s=await i.verify(n)}catch{s=await i.verify(n,!0)}const o=Object.assign({},e);return r?Object.assign(o,{captchaResp:s}):Object.assign(o,{captchaResponse:s}),Object.assign(o,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(o,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),o}async function mh(t,e,n,r){var i;if(!((i=t._getRecaptchaConfig())===null||i===void 0)&&i.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const s=await Gm(t,e,n,n==="getOobCode");return r(t,s)}else return r(t,e).catch(async s=>{if(s.code==="auth/missing-recaptcha-token"){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const o=await Gm(t,e,n,n==="getOobCode");return r(t,o)}else return Promise.reject(s)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function YA(t,e){const n=kd(t,"auth");if(n.isInitialized()){const i=n.getImmediate(),s=n.getOptions();if(hl(s,e??{}))return i;kt(i,"already-initialized")}return n.initialize({options:e})}function XA(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(fn);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function JA(t,e,n){const r=cr(t);q(r._canInitEmulator,r,"emulator-config-failed"),q(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const i=!1,s=$v(e),{host:o,port:l}=ZA(e),u=l===null?"":`:${l}`;r.config.emulator={url:`${s}//${o}${u}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:l,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})}),eR()}function $v(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function ZA(t){const e=$v(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const s=i[1];return{host:s,port:Qm(r.substr(s.length+1))}}else{const[s,o]=r.split(":");return{host:s,port:Qm(o)}}}function Qm(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function eR(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Md{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return hn("not implemented")}_getIdTokenResponse(e){return hn("not implemented")}_linkToIdToken(e,n){return hn("not implemented")}_getReauthenticationResolver(e){return hn("not implemented")}}async function tR(t,e){return ur(t,"POST","/v1/accounts:signUp",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function nR(t,e){return To(t,"POST","/v1/accounts:signInWithPassword",lr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function rR(t,e){return To(t,"POST","/v1/accounts:signInWithEmailLink",lr(t,e))}async function iR(t,e){return To(t,"POST","/v1/accounts:signInWithEmailLink",lr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class so extends Md{constructor(e,n,r,i=null){super("password",r),this._email=e,this._password=n,this._tenantId=i}static _fromEmailAndPassword(e,n){return new so(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new so(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return mh(e,n,"signInWithPassword",nR);case"emailLink":return rR(e,{email:this._email,oobCode:this._password});default:kt(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":const r={idToken:n,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return mh(e,r,"signUpPassword",tR);case"emailLink":return iR(e,{idToken:n,email:this._email,oobCode:this._password});default:kt(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function vi(t,e){return To(t,"POST","/v1/accounts:signInWithIdp",lr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sR="http://localhost";class Mr extends Md{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new Mr(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):kt("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i}=n,s=Nd(n,["providerId","signInMethod"]);if(!r||!i)return null;const o=new Mr(r,i);return o.idToken=s.idToken||void 0,o.accessToken=s.accessToken||void 0,o.secret=s.secret,o.nonce=s.nonce,o.pendingToken=s.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return vi(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,vi(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,vi(e,n)}buildRequest(){const e={requestUri:sR,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=Eo(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function oR(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function aR(t){const e=vs(Es(t)).link,n=e?vs(Es(e)).deep_link_id:null,r=vs(Es(t)).deep_link_id;return(r?vs(Es(r)).link:null)||r||n||e||t}class Fd{constructor(e){var n,r,i,s,o,l;const u=vs(Es(e)),h=(n=u.apiKey)!==null&&n!==void 0?n:null,f=(r=u.oobCode)!==null&&r!==void 0?r:null,m=oR((i=u.mode)!==null&&i!==void 0?i:null);q(h&&f&&m,"argument-error"),this.apiKey=h,this.operation=m,this.code=f,this.continueUrl=(s=u.continueUrl)!==null&&s!==void 0?s:null,this.languageCode=(o=u.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(l=u.tenantId)!==null&&l!==void 0?l:null}static parseLink(e){const n=aR(e);try{return new Fd(n)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zi{constructor(){this.providerId=zi.PROVIDER_ID}static credential(e,n){return so._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=Fd.parseLink(n);return q(r,"argument-error"),so._fromEmailAndCode(e,r.code,r.tenantId)}}zi.PROVIDER_ID="password";zi.EMAIL_PASSWORD_SIGN_IN_METHOD="password";zi.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bd{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Io extends bd{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ln extends Io{constructor(){super("facebook.com")}static credential(e){return Mr._fromParams({providerId:Ln.PROVIDER_ID,signInMethod:Ln.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Ln.credentialFromTaggedObject(e)}static credentialFromError(e){return Ln.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Ln.credential(e.oauthAccessToken)}catch{return null}}}Ln.FACEBOOK_SIGN_IN_METHOD="facebook.com";Ln.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ln extends Io{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return Mr._fromParams({providerId:ln.PROVIDER_ID,signInMethod:ln.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return ln.credentialFromTaggedObject(e)}static credentialFromError(e){return ln.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return ln.credential(n,r)}catch{return null}}}ln.GOOGLE_SIGN_IN_METHOD="google.com";ln.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mn extends Io{constructor(){super("github.com")}static credential(e){return Mr._fromParams({providerId:Mn.PROVIDER_ID,signInMethod:Mn.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Mn.credentialFromTaggedObject(e)}static credentialFromError(e){return Mn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Mn.credential(e.oauthAccessToken)}catch{return null}}}Mn.GITHUB_SIGN_IN_METHOD="github.com";Mn.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fn extends Io{constructor(){super("twitter.com")}static credential(e,n){return Mr._fromParams({providerId:Fn.PROVIDER_ID,signInMethod:Fn.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return Fn.credentialFromTaggedObject(e)}static credentialFromError(e){return Fn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return Fn.credential(n,r)}catch{return null}}}Fn.TWITTER_SIGN_IN_METHOD="twitter.com";Fn.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function lR(t,e){return To(t,"POST","/v1/accounts:signUp",lr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fr{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,i=!1){const s=await dn._fromIdTokenResponse(e,r,i),o=Ym(r);return new Fr({user:s,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const i=Ym(r);return new Fr({user:e,providerId:i,_tokenResponse:r,operationType:n})}}function Ym(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ml extends An{constructor(e,n,r,i){var s;super(n.code,n.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,ml.prototype),this.customData={appName:e.name,tenantId:(s=e.tenantId)!==null&&s!==void 0?s:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,i){return new ml(e,n,r,i)}}function Wv(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?ml._fromErrorAndOperation(t,s,e,r):s})}async function uR(t,e,n=!1){const r=await io(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return Fr._forOperation(t,"link",r)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function cR(t,e,n=!1){const{auth:r}=t;if(Lt(r.app))return Promise.reject(mn(r));const i="reauthenticate";try{const s=await io(t,Wv(r,i,e,t),n);q(s.idToken,r,"internal-error");const o=Od(s.idToken);q(o,r,"internal-error");const{sub:l}=o;return q(t.uid===l,r,"user-mismatch"),Fr._forOperation(t,i,s)}catch(s){throw(s==null?void 0:s.code)==="auth/user-not-found"&&kt(r,"user-mismatch"),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Hv(t,e,n=!1){if(Lt(t.app))return Promise.reject(mn(t));const r="signIn",i=await Wv(t,r,e),s=await Fr._fromIdTokenResponse(t,r,i);return n||await t._updateCurrentUser(s.user),s}async function hR(t,e){return Hv(cr(t),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function qv(t){const e=cr(t);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function dR(t,e,n){if(Lt(t.app))return Promise.reject(mn(t));const r=cr(t),o=await mh(r,{returnSecureToken:!0,email:e,password:n,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",lR).catch(u=>{throw u.code==="auth/password-does-not-meet-requirements"&&qv(t),u}),l=await Fr._fromIdTokenResponse(r,"signIn",o);return await r._updateCurrentUser(l.user),l}function fR(t,e,n){return Lt(t.app)?Promise.reject(mn(t)):hR(xe(t),zi.credential(e,n)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&qv(t),r})}function pR(t,e,n,r){return xe(t).onIdTokenChanged(e,n,r)}function mR(t,e,n){return xe(t).beforeAuthStateChanged(e,n)}function gR(t,e,n,r){return xe(t).onAuthStateChanged(e,n,r)}function yR(t){return xe(t).signOut()}const gl="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kv{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(gl,"1"),this.storage.removeItem(gl),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _R=1e3,vR=10;class Gv extends Kv{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=jv(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),i=this.localCache[n];r!==i&&e(n,i,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,l,u)=>{this.notifyListeners(o,u)});return}const r=e.key;n?this.detachListener():this.stopPolling();const i=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},s=this.storage.getItem(r);FA()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,vR):i()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},_R)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}Gv.type="LOCAL";const ER=Gv;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qv extends Kv{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}Qv.type="SESSION";const Yv=Qv;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wR(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kl{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(i=>i.isListeningto(e));if(n)return n;const r=new Kl(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:i,data:s}=n.data,o=this.handlersMap[i];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const l=Array.from(o).map(async h=>h(n.origin,s)),u=await wR(l);n.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:u})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Kl.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ud(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class TR{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,o;return new Promise((l,u)=>{const h=Ud("",20);i.port1.start();const f=setTimeout(()=>{u(new Error("unsupported_event"))},r);o={messageChannel:i,onMessage(m){const g=m;if(g.data.eventId===h)switch(g.data.status){case"ack":clearTimeout(f),s=setTimeout(()=>{u(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),l(g.data.response);break;default:clearTimeout(f),clearTimeout(s),u(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:h,data:n},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Gt(){return window}function IR(t){Gt().location.href=t}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xv(){return typeof Gt().WorkerGlobalScope<"u"&&typeof Gt().importScripts=="function"}async function SR(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function AR(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function RR(){return Xv()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Jv="firebaseLocalStorageDb",CR=1,yl="firebaseLocalStorage",Zv="fbase_key";class So{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Gl(t,e){return t.transaction([yl],e?"readwrite":"readonly").objectStore(yl)}function PR(){const t=indexedDB.deleteDatabase(Jv);return new So(t).toPromise()}function gh(){const t=indexedDB.open(Jv,CR);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(yl,{keyPath:Zv})}catch(i){n(i)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(yl)?e(r):(r.close(),await PR(),e(await gh()))})})}async function Xm(t,e,n){const r=Gl(t,!0).put({[Zv]:e,value:n});return new So(r).toPromise()}async function kR(t,e){const n=Gl(t,!1).get(e),r=await new So(n).toPromise();return r===void 0?null:r.value}function Jm(t,e){const n=Gl(t,!0).delete(e);return new So(n).toPromise()}const NR=800,DR=3;class eE{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await gh(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>DR)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Xv()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Kl._getInstance(RR()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await SR(),!this.activeServiceWorker)return;this.sender=new TR(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||AR()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await gh();return await Xm(e,gl,"1"),await Jm(e,gl),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>Xm(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>kR(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>Jm(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const s=Gl(i,!1).getAll();return new So(s).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(e.length!==0)for(const{fbase_key:i,value:s}of e)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),NR)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}eE.type="LOCAL";const xR=eE;new wo(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tE(t,e){return e?fn(e):(q(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jd extends Md{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return vi(e,this._buildIdpRequest())}_linkToIdToken(e,n){return vi(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return vi(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function VR(t){return Hv(t.auth,new jd(t),t.bypassAuthState)}function OR(t){const{auth:e,user:n}=t;return q(n,e,"internal-error"),cR(n,new jd(t),t.bypassAuthState)}async function LR(t){const{auth:e,user:n}=t;return q(n,e,"internal-error"),uR(n,new jd(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nE{constructor(e,n,r,i,s=!1){this.auth=e,this.resolver=r,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:i,tenantId:s,error:o,type:l}=e;if(o){this.reject(o);return}const u={auth:this.auth,requestUri:n,sessionId:r,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(l)(u))}catch(h){this.reject(h)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return VR;case"linkViaPopup":case"linkViaRedirect":return LR;case"reauthViaPopup":case"reauthViaRedirect":return OR;default:kt(this.auth,"internal-error")}}resolve(e){wn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){wn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const MR=new wo(2e3,1e4);async function FR(t,e,n){if(Lt(t.app))return Promise.reject(bt(t,"operation-not-supported-in-this-environment"));const r=cr(t);_A(t,e,bd);const i=tE(r,n);return new Ir(r,"signInViaPopup",e,i).executeNotNull()}class Ir extends nE{constructor(e,n,r,i,s){super(e,n,i,s),this.provider=r,this.authWindow=null,this.pollId=null,Ir.currentPopupAction&&Ir.currentPopupAction.cancel(),Ir.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return q(e,this.auth,"internal-error"),e}async onExecution(){wn(this.filter.length===1,"Popup operations only handle one event");const e=Ud();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(bt(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(bt(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Ir.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(bt(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,MR.get())};e()}}Ir.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bR="pendingRedirect",Va=new Map;class UR extends nE{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=Va.get(this.auth._key());if(!e){try{const r=await jR(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}Va.set(this.auth._key(),e)}return this.bypassAuthState||Va.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function jR(t,e){const n=$R(e),r=BR(t);if(!await r._isAvailable())return!1;const i=await r._get(n)==="true";return await r._remove(n),i}function zR(t,e){Va.set(t._key(),e)}function BR(t){return fn(t._redirectPersistence)}function $R(t){return xa(bR,t.config.apiKey,t.name)}async function WR(t,e,n=!1){if(Lt(t.app))return Promise.reject(mn(t));const r=cr(t),i=tE(r,e),o=await new UR(r,i,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const HR=10*60*1e3;class qR{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!KR(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!rE(e)){const i=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(bt(this.auth,i))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=HR&&this.cachedEventUids.clear(),this.cachedEventUids.has(Zm(e))}saveEventToCache(e){this.cachedEventUids.add(Zm(e)),this.lastProcessedEventTime=Date.now()}}function Zm(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function rE({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function KR(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return rE(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function GR(t,e={}){return ur(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const QR=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,YR=/^https?/;async function XR(t){if(t.config.emulator)return;const{authorizedDomains:e}=await GR(t);for(const n of e)try{if(JR(n))return}catch{}kt(t,"unauthorized-domain")}function JR(t){const e=fh(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!YR.test(n))return!1;if(QR.test(t))return r===t;const i=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ZR=new wo(3e4,6e4);function eg(){const t=Gt().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function eC(t){return new Promise((e,n)=>{var r,i,s;function o(){eg(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{eg(),n(bt(t,"network-request-failed"))},timeout:ZR.get()})}if(!((i=(r=Gt().gapi)===null||r===void 0?void 0:r.iframes)===null||i===void 0)&&i.Iframe)e(gapi.iframes.getContext());else if(!((s=Gt().gapi)===null||s===void 0)&&s.load)o();else{const l=qA("iframefcb");return Gt()[l]=()=>{gapi.load?o():n(bt(t,"network-request-failed"))},Bv(`${HA()}?onload=${l}`).catch(u=>n(u))}}).catch(e=>{throw Oa=null,e})}let Oa=null;function tC(t){return Oa=Oa||eC(t),Oa}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nC=new wo(5e3,15e3),rC="__/auth/iframe",iC="emulator/auth/iframe",sC={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},oC=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function aC(t){const e=t.config;q(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?Vd(e,iC):`https://${t.config.authDomain}/${rC}`,r={apiKey:e.apiKey,appName:t.name,v:ji},i=oC.get(t.config.apiHost);i&&(r.eid=i);const s=t._getFrameworks();return s.length&&(r.fw=s.join(",")),`${n}?${Eo(r).slice(1)}`}async function lC(t){const e=await tC(t),n=Gt().gapi;return q(n,t,"internal-error"),e.open({where:document.body,url:aC(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:sC,dontclear:!0},r=>new Promise(async(i,s)=>{await r.restyle({setHideOnLeave:!1});const o=bt(t,"network-request-failed"),l=Gt().setTimeout(()=>{s(o)},nC.get());function u(){Gt().clearTimeout(l),i(r)}r.ping(u).then(u,()=>{s(o)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const uC={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},cC=500,hC=600,dC="_blank",fC="http://localhost";class tg{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function pC(t,e,n,r=cC,i=hC){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let l="";const u=Object.assign(Object.assign({},uC),{width:r.toString(),height:i.toString(),top:s,left:o}),h=et().toLowerCase();n&&(l=Lv(h)?dC:n),Vv(h)&&(e=e||fC,u.scrollbars="yes");const f=Object.entries(u).reduce((g,[S,C])=>`${g}${S}=${C},`,"");if(MA(h)&&l!=="_self")return mC(e||"",l),new tg(null);const m=window.open(e||"",l,f);q(m,t,"popup-blocked");try{m.focus()}catch{}return new tg(m)}function mC(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gC="__/auth/handler",yC="emulator/auth/handler",_C=encodeURIComponent("fac");async function ng(t,e,n,r,i,s){q(t.config.authDomain,t,"auth-domain-config-required"),q(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:ji,eventId:i};if(e instanceof bd){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",sS(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[f,m]of Object.entries({}))o[f]=m}if(e instanceof Io){const f=e.getScopes().filter(m=>m!=="");f.length>0&&(o.scopes=f.join(","))}t.tenantId&&(o.tid=t.tenantId);const l=o;for(const f of Object.keys(l))l[f]===void 0&&delete l[f];const u=await t._getAppCheckToken(),h=u?`#${_C}=${encodeURIComponent(u)}`:"";return`${vC(t)}?${Eo(l).slice(1)}${h}`}function vC({config:t}){return t.emulator?Vd(t,yC):`https://${t.authDomain}/${gC}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cc="webStorageSupport";class EC{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Yv,this._completeRedirectFn=WR,this._overrideRedirectResult=zR}async _openPopup(e,n,r,i){var s;wn((s=this.eventManagers[e._key()])===null||s===void 0?void 0:s.manager,"_initialize() not called before _openPopup()");const o=await ng(e,n,r,fh(),i);return pC(e,o,Ud())}async _openRedirect(e,n,r,i){await this._originValidation(e);const s=await ng(e,n,r,fh(),i);return IR(s),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:i,promise:s}=this.eventManagers[n];return i?Promise.resolve(i):(wn(s,"If manager is not set, promise should be"),s)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await lC(e),r=new qR(e);return n.register("authEvent",i=>(q(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(cc,{type:cc},i=>{var s;const o=(s=i==null?void 0:i[0])===null||s===void 0?void 0:s[cc];o!==void 0&&n(!!o),kt(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=XR(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return jv()||Ov()||Ld()}}const wC=EC;var rg="@firebase/auth",ig="1.7.9";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class TC{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){q(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function IC(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function SC(t){Pi(new Lr("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),s=e.getProvider("app-check-internal"),{apiKey:o,authDomain:l}=r.options;q(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const u={apiKey:o,authDomain:l,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:zv(t)},h=new BA(r,i,s,u);return XA(h,n),h},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),Pi(new Lr("auth-internal",e=>{const n=cr(e.getProvider("auth").getImmediate());return(r=>new TC(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),Xn(rg,ig,IC(t)),Xn(rg,ig,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const AC=5*60,RC=_v("authIdTokenMaxAge")||AC;let sg=null;const CC=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>RC)return;const i=n==null?void 0:n.token;sg!==i&&(sg=i,await fetch(t,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function PC(t=Tv()){const e=kd(t,"auth");if(e.isInitialized())return e.getImmediate();const n=YA(t,{popupRedirectResolver:wC,persistence:[xR,ER,Yv]}),r=_v("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const s=new URL(r,location.origin);if(location.origin===s.origin){const o=CC(s.toString());mR(n,o,()=>o(n.currentUser)),pR(n,l=>o(l))}}const i=gv("auth");return i&&JA(n,`http://${i}`),n}function kC(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}$A({loadJS(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=i=>{const s=bt("internal-error");s.customData=i,n(s)},r.type="text/javascript",r.charset="UTF-8",kC().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});SC("Browser");var NC="firebase",DC="10.14.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Xn(NC,DC,"app");var og=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Cr,iE;(function(){var t;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(E,y){function v(){}v.prototype=y.prototype,E.D=y.prototype,E.prototype=new v,E.prototype.constructor=E,E.C=function(T,R,N){for(var I=Array(arguments.length-2),Tt=2;Tt<arguments.length;Tt++)I[Tt-2]=arguments[Tt];return y.prototype[R].apply(T,I)}}function n(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(r,n),r.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function i(E,y,v){v||(v=0);var T=Array(16);if(typeof y=="string")for(var R=0;16>R;++R)T[R]=y.charCodeAt(v++)|y.charCodeAt(v++)<<8|y.charCodeAt(v++)<<16|y.charCodeAt(v++)<<24;else for(R=0;16>R;++R)T[R]=y[v++]|y[v++]<<8|y[v++]<<16|y[v++]<<24;y=E.g[0],v=E.g[1],R=E.g[2];var N=E.g[3],I=y+(N^v&(R^N))+T[0]+3614090360&4294967295;y=v+(I<<7&4294967295|I>>>25),I=N+(R^y&(v^R))+T[1]+3905402710&4294967295,N=y+(I<<12&4294967295|I>>>20),I=R+(v^N&(y^v))+T[2]+606105819&4294967295,R=N+(I<<17&4294967295|I>>>15),I=v+(y^R&(N^y))+T[3]+3250441966&4294967295,v=R+(I<<22&4294967295|I>>>10),I=y+(N^v&(R^N))+T[4]+4118548399&4294967295,y=v+(I<<7&4294967295|I>>>25),I=N+(R^y&(v^R))+T[5]+1200080426&4294967295,N=y+(I<<12&4294967295|I>>>20),I=R+(v^N&(y^v))+T[6]+2821735955&4294967295,R=N+(I<<17&4294967295|I>>>15),I=v+(y^R&(N^y))+T[7]+4249261313&4294967295,v=R+(I<<22&4294967295|I>>>10),I=y+(N^v&(R^N))+T[8]+1770035416&4294967295,y=v+(I<<7&4294967295|I>>>25),I=N+(R^y&(v^R))+T[9]+2336552879&4294967295,N=y+(I<<12&4294967295|I>>>20),I=R+(v^N&(y^v))+T[10]+4294925233&4294967295,R=N+(I<<17&4294967295|I>>>15),I=v+(y^R&(N^y))+T[11]+2304563134&4294967295,v=R+(I<<22&4294967295|I>>>10),I=y+(N^v&(R^N))+T[12]+1804603682&4294967295,y=v+(I<<7&4294967295|I>>>25),I=N+(R^y&(v^R))+T[13]+4254626195&4294967295,N=y+(I<<12&4294967295|I>>>20),I=R+(v^N&(y^v))+T[14]+2792965006&4294967295,R=N+(I<<17&4294967295|I>>>15),I=v+(y^R&(N^y))+T[15]+1236535329&4294967295,v=R+(I<<22&4294967295|I>>>10),I=y+(R^N&(v^R))+T[1]+4129170786&4294967295,y=v+(I<<5&4294967295|I>>>27),I=N+(v^R&(y^v))+T[6]+3225465664&4294967295,N=y+(I<<9&4294967295|I>>>23),I=R+(y^v&(N^y))+T[11]+643717713&4294967295,R=N+(I<<14&4294967295|I>>>18),I=v+(N^y&(R^N))+T[0]+3921069994&4294967295,v=R+(I<<20&4294967295|I>>>12),I=y+(R^N&(v^R))+T[5]+3593408605&4294967295,y=v+(I<<5&4294967295|I>>>27),I=N+(v^R&(y^v))+T[10]+38016083&4294967295,N=y+(I<<9&4294967295|I>>>23),I=R+(y^v&(N^y))+T[15]+3634488961&4294967295,R=N+(I<<14&4294967295|I>>>18),I=v+(N^y&(R^N))+T[4]+3889429448&4294967295,v=R+(I<<20&4294967295|I>>>12),I=y+(R^N&(v^R))+T[9]+568446438&4294967295,y=v+(I<<5&4294967295|I>>>27),I=N+(v^R&(y^v))+T[14]+3275163606&4294967295,N=y+(I<<9&4294967295|I>>>23),I=R+(y^v&(N^y))+T[3]+4107603335&4294967295,R=N+(I<<14&4294967295|I>>>18),I=v+(N^y&(R^N))+T[8]+1163531501&4294967295,v=R+(I<<20&4294967295|I>>>12),I=y+(R^N&(v^R))+T[13]+2850285829&4294967295,y=v+(I<<5&4294967295|I>>>27),I=N+(v^R&(y^v))+T[2]+4243563512&4294967295,N=y+(I<<9&4294967295|I>>>23),I=R+(y^v&(N^y))+T[7]+1735328473&4294967295,R=N+(I<<14&4294967295|I>>>18),I=v+(N^y&(R^N))+T[12]+2368359562&4294967295,v=R+(I<<20&4294967295|I>>>12),I=y+(v^R^N)+T[5]+4294588738&4294967295,y=v+(I<<4&4294967295|I>>>28),I=N+(y^v^R)+T[8]+2272392833&4294967295,N=y+(I<<11&4294967295|I>>>21),I=R+(N^y^v)+T[11]+1839030562&4294967295,R=N+(I<<16&4294967295|I>>>16),I=v+(R^N^y)+T[14]+4259657740&4294967295,v=R+(I<<23&4294967295|I>>>9),I=y+(v^R^N)+T[1]+2763975236&4294967295,y=v+(I<<4&4294967295|I>>>28),I=N+(y^v^R)+T[4]+1272893353&4294967295,N=y+(I<<11&4294967295|I>>>21),I=R+(N^y^v)+T[7]+4139469664&4294967295,R=N+(I<<16&4294967295|I>>>16),I=v+(R^N^y)+T[10]+3200236656&4294967295,v=R+(I<<23&4294967295|I>>>9),I=y+(v^R^N)+T[13]+681279174&4294967295,y=v+(I<<4&4294967295|I>>>28),I=N+(y^v^R)+T[0]+3936430074&4294967295,N=y+(I<<11&4294967295|I>>>21),I=R+(N^y^v)+T[3]+3572445317&4294967295,R=N+(I<<16&4294967295|I>>>16),I=v+(R^N^y)+T[6]+76029189&4294967295,v=R+(I<<23&4294967295|I>>>9),I=y+(v^R^N)+T[9]+3654602809&4294967295,y=v+(I<<4&4294967295|I>>>28),I=N+(y^v^R)+T[12]+3873151461&4294967295,N=y+(I<<11&4294967295|I>>>21),I=R+(N^y^v)+T[15]+530742520&4294967295,R=N+(I<<16&4294967295|I>>>16),I=v+(R^N^y)+T[2]+3299628645&4294967295,v=R+(I<<23&4294967295|I>>>9),I=y+(R^(v|~N))+T[0]+4096336452&4294967295,y=v+(I<<6&4294967295|I>>>26),I=N+(v^(y|~R))+T[7]+1126891415&4294967295,N=y+(I<<10&4294967295|I>>>22),I=R+(y^(N|~v))+T[14]+2878612391&4294967295,R=N+(I<<15&4294967295|I>>>17),I=v+(N^(R|~y))+T[5]+4237533241&4294967295,v=R+(I<<21&4294967295|I>>>11),I=y+(R^(v|~N))+T[12]+1700485571&4294967295,y=v+(I<<6&4294967295|I>>>26),I=N+(v^(y|~R))+T[3]+2399980690&4294967295,N=y+(I<<10&4294967295|I>>>22),I=R+(y^(N|~v))+T[10]+4293915773&4294967295,R=N+(I<<15&4294967295|I>>>17),I=v+(N^(R|~y))+T[1]+2240044497&4294967295,v=R+(I<<21&4294967295|I>>>11),I=y+(R^(v|~N))+T[8]+1873313359&4294967295,y=v+(I<<6&4294967295|I>>>26),I=N+(v^(y|~R))+T[15]+4264355552&4294967295,N=y+(I<<10&4294967295|I>>>22),I=R+(y^(N|~v))+T[6]+2734768916&4294967295,R=N+(I<<15&4294967295|I>>>17),I=v+(N^(R|~y))+T[13]+1309151649&4294967295,v=R+(I<<21&4294967295|I>>>11),I=y+(R^(v|~N))+T[4]+4149444226&4294967295,y=v+(I<<6&4294967295|I>>>26),I=N+(v^(y|~R))+T[11]+3174756917&4294967295,N=y+(I<<10&4294967295|I>>>22),I=R+(y^(N|~v))+T[2]+718787259&4294967295,R=N+(I<<15&4294967295|I>>>17),I=v+(N^(R|~y))+T[9]+3951481745&4294967295,E.g[0]=E.g[0]+y&4294967295,E.g[1]=E.g[1]+(R+(I<<21&4294967295|I>>>11))&4294967295,E.g[2]=E.g[2]+R&4294967295,E.g[3]=E.g[3]+N&4294967295}r.prototype.u=function(E,y){y===void 0&&(y=E.length);for(var v=y-this.blockSize,T=this.B,R=this.h,N=0;N<y;){if(R==0)for(;N<=v;)i(this,E,N),N+=this.blockSize;if(typeof E=="string"){for(;N<y;)if(T[R++]=E.charCodeAt(N++),R==this.blockSize){i(this,T),R=0;break}}else for(;N<y;)if(T[R++]=E[N++],R==this.blockSize){i(this,T),R=0;break}}this.h=R,this.o+=y},r.prototype.v=function(){var E=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);E[0]=128;for(var y=1;y<E.length-8;++y)E[y]=0;var v=8*this.o;for(y=E.length-8;y<E.length;++y)E[y]=v&255,v/=256;for(this.u(E),E=Array(16),y=v=0;4>y;++y)for(var T=0;32>T;T+=8)E[v++]=this.g[y]>>>T&255;return E};function s(E,y){var v=l;return Object.prototype.hasOwnProperty.call(v,E)?v[E]:v[E]=y(E)}function o(E,y){this.h=y;for(var v=[],T=!0,R=E.length-1;0<=R;R--){var N=E[R]|0;T&&N==y||(v[R]=N,T=!1)}this.g=v}var l={};function u(E){return-128<=E&&128>E?s(E,function(y){return new o([y|0],0>y?-1:0)}):new o([E|0],0>E?-1:0)}function h(E){if(isNaN(E)||!isFinite(E))return m;if(0>E)return O(h(-E));for(var y=[],v=1,T=0;E>=v;T++)y[T]=E/v|0,v*=4294967296;return new o(y,0)}function f(E,y){if(E.length==0)throw Error("number format error: empty string");if(y=y||10,2>y||36<y)throw Error("radix out of range: "+y);if(E.charAt(0)=="-")return O(f(E.substring(1),y));if(0<=E.indexOf("-"))throw Error('number format error: interior "-" character');for(var v=h(Math.pow(y,8)),T=m,R=0;R<E.length;R+=8){var N=Math.min(8,E.length-R),I=parseInt(E.substring(R,R+N),y);8>N?(N=h(Math.pow(y,N)),T=T.j(N).add(h(I))):(T=T.j(v),T=T.add(h(I)))}return T}var m=u(0),g=u(1),S=u(16777216);t=o.prototype,t.m=function(){if(P(this))return-O(this).m();for(var E=0,y=1,v=0;v<this.g.length;v++){var T=this.i(v);E+=(0<=T?T:4294967296+T)*y,y*=4294967296}return E},t.toString=function(E){if(E=E||10,2>E||36<E)throw Error("radix out of range: "+E);if(C(this))return"0";if(P(this))return"-"+O(this).toString(E);for(var y=h(Math.pow(E,6)),v=this,T="";;){var R=V(v,y).g;v=w(v,R.j(y));var N=((0<v.g.length?v.g[0]:v.h)>>>0).toString(E);if(v=R,C(v))return N+T;for(;6>N.length;)N="0"+N;T=N+T}},t.i=function(E){return 0>E?0:E<this.g.length?this.g[E]:this.h};function C(E){if(E.h!=0)return!1;for(var y=0;y<E.g.length;y++)if(E.g[y]!=0)return!1;return!0}function P(E){return E.h==-1}t.l=function(E){return E=w(this,E),P(E)?-1:C(E)?0:1};function O(E){for(var y=E.g.length,v=[],T=0;T<y;T++)v[T]=~E.g[T];return new o(v,~E.h).add(g)}t.abs=function(){return P(this)?O(this):this},t.add=function(E){for(var y=Math.max(this.g.length,E.g.length),v=[],T=0,R=0;R<=y;R++){var N=T+(this.i(R)&65535)+(E.i(R)&65535),I=(N>>>16)+(this.i(R)>>>16)+(E.i(R)>>>16);T=I>>>16,N&=65535,I&=65535,v[R]=I<<16|N}return new o(v,v[v.length-1]&-2147483648?-1:0)};function w(E,y){return E.add(O(y))}t.j=function(E){if(C(this)||C(E))return m;if(P(this))return P(E)?O(this).j(O(E)):O(O(this).j(E));if(P(E))return O(this.j(O(E)));if(0>this.l(S)&&0>E.l(S))return h(this.m()*E.m());for(var y=this.g.length+E.g.length,v=[],T=0;T<2*y;T++)v[T]=0;for(T=0;T<this.g.length;T++)for(var R=0;R<E.g.length;R++){var N=this.i(T)>>>16,I=this.i(T)&65535,Tt=E.i(R)>>>16,dr=E.i(R)&65535;v[2*T+2*R]+=I*dr,_(v,2*T+2*R),v[2*T+2*R+1]+=N*dr,_(v,2*T+2*R+1),v[2*T+2*R+1]+=I*Tt,_(v,2*T+2*R+1),v[2*T+2*R+2]+=N*Tt,_(v,2*T+2*R+2)}for(T=0;T<y;T++)v[T]=v[2*T+1]<<16|v[2*T];for(T=y;T<2*y;T++)v[T]=0;return new o(v,0)};function _(E,y){for(;(E[y]&65535)!=E[y];)E[y+1]+=E[y]>>>16,E[y]&=65535,y++}function A(E,y){this.g=E,this.h=y}function V(E,y){if(C(y))throw Error("division by zero");if(C(E))return new A(m,m);if(P(E))return y=V(O(E),y),new A(O(y.g),O(y.h));if(P(y))return y=V(E,O(y)),new A(O(y.g),y.h);if(30<E.g.length){if(P(E)||P(y))throw Error("slowDivide_ only works with positive integers.");for(var v=g,T=y;0>=T.l(E);)v=b(v),T=b(T);var R=U(v,1),N=U(T,1);for(T=U(T,2),v=U(v,2);!C(T);){var I=N.add(T);0>=I.l(E)&&(R=R.add(v),N=I),T=U(T,1),v=U(v,1)}return y=w(E,R.j(y)),new A(R,y)}for(R=m;0<=E.l(y);){for(v=Math.max(1,Math.floor(E.m()/y.m())),T=Math.ceil(Math.log(v)/Math.LN2),T=48>=T?1:Math.pow(2,T-48),N=h(v),I=N.j(y);P(I)||0<I.l(E);)v-=T,N=h(v),I=N.j(y);C(N)&&(N=g),R=R.add(N),E=w(E,I)}return new A(R,E)}t.A=function(E){return V(this,E).h},t.and=function(E){for(var y=Math.max(this.g.length,E.g.length),v=[],T=0;T<y;T++)v[T]=this.i(T)&E.i(T);return new o(v,this.h&E.h)},t.or=function(E){for(var y=Math.max(this.g.length,E.g.length),v=[],T=0;T<y;T++)v[T]=this.i(T)|E.i(T);return new o(v,this.h|E.h)},t.xor=function(E){for(var y=Math.max(this.g.length,E.g.length),v=[],T=0;T<y;T++)v[T]=this.i(T)^E.i(T);return new o(v,this.h^E.h)};function b(E){for(var y=E.g.length+1,v=[],T=0;T<y;T++)v[T]=E.i(T)<<1|E.i(T-1)>>>31;return new o(v,E.h)}function U(E,y){var v=y>>5;y%=32;for(var T=E.g.length-v,R=[],N=0;N<T;N++)R[N]=0<y?E.i(N+v)>>>y|E.i(N+v+1)<<32-y:E.i(N+v);return new o(R,E.h)}r.prototype.digest=r.prototype.v,r.prototype.reset=r.prototype.s,r.prototype.update=r.prototype.u,iE=r,o.prototype.add=o.prototype.add,o.prototype.multiply=o.prototype.j,o.prototype.modulo=o.prototype.A,o.prototype.compare=o.prototype.l,o.prototype.toNumber=o.prototype.m,o.prototype.toString=o.prototype.toString,o.prototype.getBits=o.prototype.i,o.fromNumber=h,o.fromString=f,Cr=o}).apply(typeof og<"u"?og:typeof self<"u"?self:typeof window<"u"?window:{});var ma=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var sE,ws,oE,La,yh,aE,lE,uE;(function(){var t,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(a,c,d){return a==Array.prototype||a==Object.prototype||(a[c]=d.value),a};function n(a){a=[typeof globalThis=="object"&&globalThis,a,typeof window=="object"&&window,typeof self=="object"&&self,typeof ma=="object"&&ma];for(var c=0;c<a.length;++c){var d=a[c];if(d&&d.Math==Math)return d}throw Error("Cannot find global object")}var r=n(this);function i(a,c){if(c)e:{var d=r;a=a.split(".");for(var p=0;p<a.length-1;p++){var k=a[p];if(!(k in d))break e;d=d[k]}a=a[a.length-1],p=d[a],c=c(p),c!=p&&c!=null&&e(d,a,{configurable:!0,writable:!0,value:c})}}function s(a,c){a instanceof String&&(a+="");var d=0,p=!1,k={next:function(){if(!p&&d<a.length){var x=d++;return{value:c(x,a[x]),done:!1}}return p=!0,{done:!0,value:void 0}}};return k[Symbol.iterator]=function(){return k},k}i("Array.prototype.values",function(a){return a||function(){return s(this,function(c,d){return d})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var o=o||{},l=this||self;function u(a){var c=typeof a;return c=c!="object"?c:a?Array.isArray(a)?"array":c:"null",c=="array"||c=="object"&&typeof a.length=="number"}function h(a){var c=typeof a;return c=="object"&&a!=null||c=="function"}function f(a,c,d){return a.call.apply(a.bind,arguments)}function m(a,c,d){if(!a)throw Error();if(2<arguments.length){var p=Array.prototype.slice.call(arguments,2);return function(){var k=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(k,p),a.apply(c,k)}}return function(){return a.apply(c,arguments)}}function g(a,c,d){return g=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?f:m,g.apply(null,arguments)}function S(a,c){var d=Array.prototype.slice.call(arguments,1);return function(){var p=d.slice();return p.push.apply(p,arguments),a.apply(this,p)}}function C(a,c){function d(){}d.prototype=c.prototype,a.aa=c.prototype,a.prototype=new d,a.prototype.constructor=a,a.Qb=function(p,k,x){for(var j=Array(arguments.length-2),ue=2;ue<arguments.length;ue++)j[ue-2]=arguments[ue];return c.prototype[k].apply(p,j)}}function P(a){const c=a.length;if(0<c){const d=Array(c);for(let p=0;p<c;p++)d[p]=a[p];return d}return[]}function O(a,c){for(let d=1;d<arguments.length;d++){const p=arguments[d];if(u(p)){const k=a.length||0,x=p.length||0;a.length=k+x;for(let j=0;j<x;j++)a[k+j]=p[j]}else a.push(p)}}class w{constructor(c,d){this.i=c,this.j=d,this.h=0,this.g=null}get(){let c;return 0<this.h?(this.h--,c=this.g,this.g=c.next,c.next=null):c=this.i(),c}}function _(a){return/^[\s\xa0]*$/.test(a)}function A(){var a=l.navigator;return a&&(a=a.userAgent)?a:""}function V(a){return V[" "](a),a}V[" "]=function(){};var b=A().indexOf("Gecko")!=-1&&!(A().toLowerCase().indexOf("webkit")!=-1&&A().indexOf("Edge")==-1)&&!(A().indexOf("Trident")!=-1||A().indexOf("MSIE")!=-1)&&A().indexOf("Edge")==-1;function U(a,c,d){for(const p in a)c.call(d,a[p],p,a)}function E(a,c){for(const d in a)c.call(void 0,a[d],d,a)}function y(a){const c={};for(const d in a)c[d]=a[d];return c}const v="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function T(a,c){let d,p;for(let k=1;k<arguments.length;k++){p=arguments[k];for(d in p)a[d]=p[d];for(let x=0;x<v.length;x++)d=v[x],Object.prototype.hasOwnProperty.call(p,d)&&(a[d]=p[d])}}function R(a){var c=1;a=a.split(":");const d=[];for(;0<c&&a.length;)d.push(a.shift()),c--;return a.length&&d.push(a.join(":")),d}function N(a){l.setTimeout(()=>{throw a},0)}function I(){var a=Q;let c=null;return a.g&&(c=a.g,a.g=a.g.next,a.g||(a.h=null),c.next=null),c}class Tt{constructor(){this.h=this.g=null}add(c,d){const p=dr.get();p.set(c,d),this.h?this.h.next=p:this.g=p,this.h=p}}var dr=new w(()=>new qi,a=>a.reset());class qi{constructor(){this.next=this.g=this.h=null}set(c,d){this.h=c,this.g=d,this.next=null}reset(){this.next=this.g=this.h=null}}let Jt,z=!1,Q=new Tt,J=()=>{const a=l.Promise.resolve(void 0);Jt=()=>{a.then(ge)}};var ge=()=>{for(var a;a=I();){try{a.h.call(a.g)}catch(d){N(d)}var c=dr;c.j(a),100>c.h&&(c.h++,a.next=c.g,c.g=a)}z=!1};function le(){this.s=this.s,this.C=this.C}le.prototype.s=!1,le.prototype.ma=function(){this.s||(this.s=!0,this.N())},le.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function Ie(a,c){this.type=a,this.g=this.target=c,this.defaultPrevented=!1}Ie.prototype.h=function(){this.defaultPrevented=!0};var Zt=function(){if(!l.addEventListener||!Object.defineProperty)return!1;var a=!1,c=Object.defineProperty({},"passive",{get:function(){a=!0}});try{const d=()=>{};l.addEventListener("test",d,c),l.removeEventListener("test",d,c)}catch{}return a}();function en(a,c){if(Ie.call(this,a?a.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,a){var d=this.type=a.type,p=a.changedTouches&&a.changedTouches.length?a.changedTouches[0]:null;if(this.target=a.target||a.srcElement,this.g=c,c=a.relatedTarget){if(b){e:{try{V(c.nodeName);var k=!0;break e}catch{}k=!1}k||(c=null)}}else d=="mouseover"?c=a.fromElement:d=="mouseout"&&(c=a.toElement);this.relatedTarget=c,p?(this.clientX=p.clientX!==void 0?p.clientX:p.pageX,this.clientY=p.clientY!==void 0?p.clientY:p.pageY,this.screenX=p.screenX||0,this.screenY=p.screenY||0):(this.clientX=a.clientX!==void 0?a.clientX:a.pageX,this.clientY=a.clientY!==void 0?a.clientY:a.pageY,this.screenX=a.screenX||0,this.screenY=a.screenY||0),this.button=a.button,this.key=a.key||"",this.ctrlKey=a.ctrlKey,this.altKey=a.altKey,this.shiftKey=a.shiftKey,this.metaKey=a.metaKey,this.pointerId=a.pointerId||0,this.pointerType=typeof a.pointerType=="string"?a.pointerType:tn[a.pointerType]||"",this.state=a.state,this.i=a,a.defaultPrevented&&en.aa.h.call(this)}}C(en,Ie);var tn={2:"touch",3:"pen",4:"mouse"};en.prototype.h=function(){en.aa.h.call(this);var a=this.i;a.preventDefault?a.preventDefault():a.returnValue=!1};var nn="closure_listenable_"+(1e6*Math.random()|0),xw=0;function Vw(a,c,d,p,k){this.listener=a,this.proxy=null,this.src=c,this.type=d,this.capture=!!p,this.ha=k,this.key=++xw,this.da=this.fa=!1}function Vo(a){a.da=!0,a.listener=null,a.proxy=null,a.src=null,a.ha=null}function Oo(a){this.src=a,this.g={},this.h=0}Oo.prototype.add=function(a,c,d,p,k){var x=a.toString();a=this.g[x],a||(a=this.g[x]=[],this.h++);var j=cu(a,c,p,k);return-1<j?(c=a[j],d||(c.fa=!1)):(c=new Vw(c,this.src,x,!!p,k),c.fa=d,a.push(c)),c};function uu(a,c){var d=c.type;if(d in a.g){var p=a.g[d],k=Array.prototype.indexOf.call(p,c,void 0),x;(x=0<=k)&&Array.prototype.splice.call(p,k,1),x&&(Vo(c),a.g[d].length==0&&(delete a.g[d],a.h--))}}function cu(a,c,d,p){for(var k=0;k<a.length;++k){var x=a[k];if(!x.da&&x.listener==c&&x.capture==!!d&&x.ha==p)return k}return-1}var hu="closure_lm_"+(1e6*Math.random()|0),du={};function If(a,c,d,p,k){if(Array.isArray(c)){for(var x=0;x<c.length;x++)If(a,c[x],d,p,k);return null}return d=Rf(d),a&&a[nn]?a.K(c,d,h(p)?!!p.capture:!1,k):Ow(a,c,d,!1,p,k)}function Ow(a,c,d,p,k,x){if(!c)throw Error("Invalid event type");var j=h(k)?!!k.capture:!!k,ue=pu(a);if(ue||(a[hu]=ue=new Oo(a)),d=ue.add(c,d,p,j,x),d.proxy)return d;if(p=Lw(),d.proxy=p,p.src=a,p.listener=d,a.addEventListener)Zt||(k=j),k===void 0&&(k=!1),a.addEventListener(c.toString(),p,k);else if(a.attachEvent)a.attachEvent(Af(c.toString()),p);else if(a.addListener&&a.removeListener)a.addListener(p);else throw Error("addEventListener and attachEvent are unavailable.");return d}function Lw(){function a(d){return c.call(a.src,a.listener,d)}const c=Mw;return a}function Sf(a,c,d,p,k){if(Array.isArray(c))for(var x=0;x<c.length;x++)Sf(a,c[x],d,p,k);else p=h(p)?!!p.capture:!!p,d=Rf(d),a&&a[nn]?(a=a.i,c=String(c).toString(),c in a.g&&(x=a.g[c],d=cu(x,d,p,k),-1<d&&(Vo(x[d]),Array.prototype.splice.call(x,d,1),x.length==0&&(delete a.g[c],a.h--)))):a&&(a=pu(a))&&(c=a.g[c.toString()],a=-1,c&&(a=cu(c,d,p,k)),(d=-1<a?c[a]:null)&&fu(d))}function fu(a){if(typeof a!="number"&&a&&!a.da){var c=a.src;if(c&&c[nn])uu(c.i,a);else{var d=a.type,p=a.proxy;c.removeEventListener?c.removeEventListener(d,p,a.capture):c.detachEvent?c.detachEvent(Af(d),p):c.addListener&&c.removeListener&&c.removeListener(p),(d=pu(c))?(uu(d,a),d.h==0&&(d.src=null,c[hu]=null)):Vo(a)}}}function Af(a){return a in du?du[a]:du[a]="on"+a}function Mw(a,c){if(a.da)a=!0;else{c=new en(c,this);var d=a.listener,p=a.ha||a.src;a.fa&&fu(a),a=d.call(p,c)}return a}function pu(a){return a=a[hu],a instanceof Oo?a:null}var mu="__closure_events_fn_"+(1e9*Math.random()>>>0);function Rf(a){return typeof a=="function"?a:(a[mu]||(a[mu]=function(c){return a.handleEvent(c)}),a[mu])}function We(){le.call(this),this.i=new Oo(this),this.M=this,this.F=null}C(We,le),We.prototype[nn]=!0,We.prototype.removeEventListener=function(a,c,d,p){Sf(this,a,c,d,p)};function tt(a,c){var d,p=a.F;if(p)for(d=[];p;p=p.F)d.push(p);if(a=a.M,p=c.type||c,typeof c=="string")c=new Ie(c,a);else if(c instanceof Ie)c.target=c.target||a;else{var k=c;c=new Ie(p,a),T(c,k)}if(k=!0,d)for(var x=d.length-1;0<=x;x--){var j=c.g=d[x];k=Lo(j,p,!0,c)&&k}if(j=c.g=a,k=Lo(j,p,!0,c)&&k,k=Lo(j,p,!1,c)&&k,d)for(x=0;x<d.length;x++)j=c.g=d[x],k=Lo(j,p,!1,c)&&k}We.prototype.N=function(){if(We.aa.N.call(this),this.i){var a=this.i,c;for(c in a.g){for(var d=a.g[c],p=0;p<d.length;p++)Vo(d[p]);delete a.g[c],a.h--}}this.F=null},We.prototype.K=function(a,c,d,p){return this.i.add(String(a),c,!1,d,p)},We.prototype.L=function(a,c,d,p){return this.i.add(String(a),c,!0,d,p)};function Lo(a,c,d,p){if(c=a.i.g[String(c)],!c)return!0;c=c.concat();for(var k=!0,x=0;x<c.length;++x){var j=c[x];if(j&&!j.da&&j.capture==d){var ue=j.listener,Me=j.ha||j.src;j.fa&&uu(a.i,j),k=ue.call(Me,p)!==!1&&k}}return k&&!p.defaultPrevented}function Cf(a,c,d){if(typeof a=="function")d&&(a=g(a,d));else if(a&&typeof a.handleEvent=="function")a=g(a.handleEvent,a);else throw Error("Invalid listener argument");return 2147483647<Number(c)?-1:l.setTimeout(a,c||0)}function Pf(a){a.g=Cf(()=>{a.g=null,a.i&&(a.i=!1,Pf(a))},a.l);const c=a.h;a.h=null,a.m.apply(null,c)}class Fw extends le{constructor(c,d){super(),this.m=c,this.l=d,this.h=null,this.i=!1,this.g=null}j(c){this.h=arguments,this.g?this.i=!0:Pf(this)}N(){super.N(),this.g&&(l.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Ki(a){le.call(this),this.h=a,this.g={}}C(Ki,le);var kf=[];function Nf(a){U(a.g,function(c,d){this.g.hasOwnProperty(d)&&fu(c)},a),a.g={}}Ki.prototype.N=function(){Ki.aa.N.call(this),Nf(this)},Ki.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var gu=l.JSON.stringify,bw=l.JSON.parse,Uw=class{stringify(a){return l.JSON.stringify(a,void 0)}parse(a){return l.JSON.parse(a,void 0)}};function yu(){}yu.prototype.h=null;function Df(a){return a.h||(a.h=a.i())}function xf(){}var Gi={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function _u(){Ie.call(this,"d")}C(_u,Ie);function vu(){Ie.call(this,"c")}C(vu,Ie);var fr={},Vf=null;function Mo(){return Vf=Vf||new We}fr.La="serverreachability";function Of(a){Ie.call(this,fr.La,a)}C(Of,Ie);function Qi(a){const c=Mo();tt(c,new Of(c))}fr.STAT_EVENT="statevent";function Lf(a,c){Ie.call(this,fr.STAT_EVENT,a),this.stat=c}C(Lf,Ie);function nt(a){const c=Mo();tt(c,new Lf(c,a))}fr.Ma="timingevent";function Mf(a,c){Ie.call(this,fr.Ma,a),this.size=c}C(Mf,Ie);function Yi(a,c){if(typeof a!="function")throw Error("Fn must not be null and must be a function");return l.setTimeout(function(){a()},c)}function Xi(){this.g=!0}Xi.prototype.xa=function(){this.g=!1};function jw(a,c,d,p,k,x){a.info(function(){if(a.g)if(x)for(var j="",ue=x.split("&"),Me=0;Me<ue.length;Me++){var ie=ue[Me].split("=");if(1<ie.length){var He=ie[0];ie=ie[1];var qe=He.split("_");j=2<=qe.length&&qe[1]=="type"?j+(He+"="+ie+"&"):j+(He+"=redacted&")}}else j=null;else j=x;return"XMLHTTP REQ ("+p+") [attempt "+k+"]: "+c+`
`+d+`
`+j})}function zw(a,c,d,p,k,x,j){a.info(function(){return"XMLHTTP RESP ("+p+") [ attempt "+k+"]: "+c+`
`+d+`
`+x+" "+j})}function Hr(a,c,d,p){a.info(function(){return"XMLHTTP TEXT ("+c+"): "+$w(a,d)+(p?" "+p:"")})}function Bw(a,c){a.info(function(){return"TIMEOUT: "+c})}Xi.prototype.info=function(){};function $w(a,c){if(!a.g)return c;if(!c)return null;try{var d=JSON.parse(c);if(d){for(a=0;a<d.length;a++)if(Array.isArray(d[a])){var p=d[a];if(!(2>p.length)){var k=p[1];if(Array.isArray(k)&&!(1>k.length)){var x=k[0];if(x!="noop"&&x!="stop"&&x!="close")for(var j=1;j<k.length;j++)k[j]=""}}}}return gu(d)}catch{return c}}var Fo={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},Ff={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},Eu;function bo(){}C(bo,yu),bo.prototype.g=function(){return new XMLHttpRequest},bo.prototype.i=function(){return{}},Eu=new bo;function Rn(a,c,d,p){this.j=a,this.i=c,this.l=d,this.R=p||1,this.U=new Ki(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new bf}function bf(){this.i=null,this.g="",this.h=!1}var Uf={},wu={};function Tu(a,c,d){a.L=1,a.v=Bo(rn(c)),a.m=d,a.P=!0,jf(a,null)}function jf(a,c){a.F=Date.now(),Uo(a),a.A=rn(a.v);var d=a.A,p=a.R;Array.isArray(p)||(p=[String(p)]),ep(d.i,"t",p),a.C=0,d=a.j.J,a.h=new bf,a.g=_p(a.j,d?c:null,!a.m),0<a.O&&(a.M=new Fw(g(a.Y,a,a.g),a.O)),c=a.U,d=a.g,p=a.ca;var k="readystatechange";Array.isArray(k)||(k&&(kf[0]=k.toString()),k=kf);for(var x=0;x<k.length;x++){var j=If(d,k[x],p||c.handleEvent,!1,c.h||c);if(!j)break;c.g[j.key]=j}c=a.H?y(a.H):{},a.m?(a.u||(a.u="POST"),c["Content-Type"]="application/x-www-form-urlencoded",a.g.ea(a.A,a.u,a.m,c)):(a.u="GET",a.g.ea(a.A,a.u,null,c)),Qi(),jw(a.i,a.u,a.A,a.l,a.R,a.m)}Rn.prototype.ca=function(a){a=a.target;const c=this.M;c&&sn(a)==3?c.j():this.Y(a)},Rn.prototype.Y=function(a){try{if(a==this.g)e:{const qe=sn(this.g);var c=this.g.Ba();const Gr=this.g.Z();if(!(3>qe)&&(qe!=3||this.g&&(this.h.h||this.g.oa()||ap(this.g)))){this.J||qe!=4||c==7||(c==8||0>=Gr?Qi(3):Qi(2)),Iu(this);var d=this.g.Z();this.X=d;t:if(zf(this)){var p=ap(this.g);a="";var k=p.length,x=sn(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){pr(this),Ji(this);var j="";break t}this.h.i=new l.TextDecoder}for(c=0;c<k;c++)this.h.h=!0,a+=this.h.i.decode(p[c],{stream:!(x&&c==k-1)});p.length=0,this.h.g+=a,this.C=0,j=this.h.g}else j=this.g.oa();if(this.o=d==200,zw(this.i,this.u,this.A,this.l,this.R,qe,d),this.o){if(this.T&&!this.K){t:{if(this.g){var ue,Me=this.g;if((ue=Me.g?Me.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!_(ue)){var ie=ue;break t}}ie=null}if(d=ie)Hr(this.i,this.l,d,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,Su(this,d);else{this.o=!1,this.s=3,nt(12),pr(this),Ji(this);break e}}if(this.P){d=!0;let Nt;for(;!this.J&&this.C<j.length;)if(Nt=Ww(this,j),Nt==wu){qe==4&&(this.s=4,nt(14),d=!1),Hr(this.i,this.l,null,"[Incomplete Response]");break}else if(Nt==Uf){this.s=4,nt(15),Hr(this.i,this.l,j,"[Invalid Chunk]"),d=!1;break}else Hr(this.i,this.l,Nt,null),Su(this,Nt);if(zf(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),qe!=4||j.length!=0||this.h.h||(this.s=1,nt(16),d=!1),this.o=this.o&&d,!d)Hr(this.i,this.l,j,"[Invalid Chunked Response]"),pr(this),Ji(this);else if(0<j.length&&!this.W){this.W=!0;var He=this.j;He.g==this&&He.ba&&!He.M&&(He.j.info("Great, no buffering proxy detected. Bytes received: "+j.length),Nu(He),He.M=!0,nt(11))}}else Hr(this.i,this.l,j,null),Su(this,j);qe==4&&pr(this),this.o&&!this.J&&(qe==4?pp(this.j,this):(this.o=!1,Uo(this)))}else aT(this.g),d==400&&0<j.indexOf("Unknown SID")?(this.s=3,nt(12)):(this.s=0,nt(13)),pr(this),Ji(this)}}}catch{}finally{}};function zf(a){return a.g?a.u=="GET"&&a.L!=2&&a.j.Ca:!1}function Ww(a,c){var d=a.C,p=c.indexOf(`
`,d);return p==-1?wu:(d=Number(c.substring(d,p)),isNaN(d)?Uf:(p+=1,p+d>c.length?wu:(c=c.slice(p,p+d),a.C=p+d,c)))}Rn.prototype.cancel=function(){this.J=!0,pr(this)};function Uo(a){a.S=Date.now()+a.I,Bf(a,a.I)}function Bf(a,c){if(a.B!=null)throw Error("WatchDog timer not null");a.B=Yi(g(a.ba,a),c)}function Iu(a){a.B&&(l.clearTimeout(a.B),a.B=null)}Rn.prototype.ba=function(){this.B=null;const a=Date.now();0<=a-this.S?(Bw(this.i,this.A),this.L!=2&&(Qi(),nt(17)),pr(this),this.s=2,Ji(this)):Bf(this,this.S-a)};function Ji(a){a.j.G==0||a.J||pp(a.j,a)}function pr(a){Iu(a);var c=a.M;c&&typeof c.ma=="function"&&c.ma(),a.M=null,Nf(a.U),a.g&&(c=a.g,a.g=null,c.abort(),c.ma())}function Su(a,c){try{var d=a.j;if(d.G!=0&&(d.g==a||Au(d.h,a))){if(!a.K&&Au(d.h,a)&&d.G==3){try{var p=d.Da.g.parse(c)}catch{p=null}if(Array.isArray(p)&&p.length==3){var k=p;if(k[0]==0){e:if(!d.u){if(d.g)if(d.g.F+3e3<a.F)Go(d),qo(d);else break e;ku(d),nt(18)}}else d.za=k[1],0<d.za-d.T&&37500>k[2]&&d.F&&d.v==0&&!d.C&&(d.C=Yi(g(d.Za,d),6e3));if(1>=Hf(d.h)&&d.ca){try{d.ca()}catch{}d.ca=void 0}}else gr(d,11)}else if((a.K||d.g==a)&&Go(d),!_(c))for(k=d.Da.g.parse(c),c=0;c<k.length;c++){let ie=k[c];if(d.T=ie[0],ie=ie[1],d.G==2)if(ie[0]=="c"){d.K=ie[1],d.ia=ie[2];const He=ie[3];He!=null&&(d.la=He,d.j.info("VER="+d.la));const qe=ie[4];qe!=null&&(d.Aa=qe,d.j.info("SVER="+d.Aa));const Gr=ie[5];Gr!=null&&typeof Gr=="number"&&0<Gr&&(p=1.5*Gr,d.L=p,d.j.info("backChannelRequestTimeoutMs_="+p)),p=d;const Nt=a.g;if(Nt){const Yo=Nt.g?Nt.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(Yo){var x=p.h;x.g||Yo.indexOf("spdy")==-1&&Yo.indexOf("quic")==-1&&Yo.indexOf("h2")==-1||(x.j=x.l,x.g=new Set,x.h&&(Ru(x,x.h),x.h=null))}if(p.D){const Du=Nt.g?Nt.g.getResponseHeader("X-HTTP-Session-Id"):null;Du&&(p.ya=Du,he(p.I,p.D,Du))}}d.G=3,d.l&&d.l.ua(),d.ba&&(d.R=Date.now()-a.F,d.j.info("Handshake RTT: "+d.R+"ms")),p=d;var j=a;if(p.qa=yp(p,p.J?p.ia:null,p.W),j.K){qf(p.h,j);var ue=j,Me=p.L;Me&&(ue.I=Me),ue.B&&(Iu(ue),Uo(ue)),p.g=j}else dp(p);0<d.i.length&&Ko(d)}else ie[0]!="stop"&&ie[0]!="close"||gr(d,7);else d.G==3&&(ie[0]=="stop"||ie[0]=="close"?ie[0]=="stop"?gr(d,7):Pu(d):ie[0]!="noop"&&d.l&&d.l.ta(ie),d.v=0)}}Qi(4)}catch{}}var Hw=class{constructor(a,c){this.g=a,this.map=c}};function $f(a){this.l=a||10,l.PerformanceNavigationTiming?(a=l.performance.getEntriesByType("navigation"),a=0<a.length&&(a[0].nextHopProtocol=="hq"||a[0].nextHopProtocol=="h2")):a=!!(l.chrome&&l.chrome.loadTimes&&l.chrome.loadTimes()&&l.chrome.loadTimes().wasFetchedViaSpdy),this.j=a?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function Wf(a){return a.h?!0:a.g?a.g.size>=a.j:!1}function Hf(a){return a.h?1:a.g?a.g.size:0}function Au(a,c){return a.h?a.h==c:a.g?a.g.has(c):!1}function Ru(a,c){a.g?a.g.add(c):a.h=c}function qf(a,c){a.h&&a.h==c?a.h=null:a.g&&a.g.has(c)&&a.g.delete(c)}$f.prototype.cancel=function(){if(this.i=Kf(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const a of this.g.values())a.cancel();this.g.clear()}};function Kf(a){if(a.h!=null)return a.i.concat(a.h.D);if(a.g!=null&&a.g.size!==0){let c=a.i;for(const d of a.g.values())c=c.concat(d.D);return c}return P(a.i)}function qw(a){if(a.V&&typeof a.V=="function")return a.V();if(typeof Map<"u"&&a instanceof Map||typeof Set<"u"&&a instanceof Set)return Array.from(a.values());if(typeof a=="string")return a.split("");if(u(a)){for(var c=[],d=a.length,p=0;p<d;p++)c.push(a[p]);return c}c=[],d=0;for(p in a)c[d++]=a[p];return c}function Kw(a){if(a.na&&typeof a.na=="function")return a.na();if(!a.V||typeof a.V!="function"){if(typeof Map<"u"&&a instanceof Map)return Array.from(a.keys());if(!(typeof Set<"u"&&a instanceof Set)){if(u(a)||typeof a=="string"){var c=[];a=a.length;for(var d=0;d<a;d++)c.push(d);return c}c=[],d=0;for(const p in a)c[d++]=p;return c}}}function Gf(a,c){if(a.forEach&&typeof a.forEach=="function")a.forEach(c,void 0);else if(u(a)||typeof a=="string")Array.prototype.forEach.call(a,c,void 0);else for(var d=Kw(a),p=qw(a),k=p.length,x=0;x<k;x++)c.call(void 0,p[x],d&&d[x],a)}var Qf=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function Gw(a,c){if(a){a=a.split("&");for(var d=0;d<a.length;d++){var p=a[d].indexOf("="),k=null;if(0<=p){var x=a[d].substring(0,p);k=a[d].substring(p+1)}else x=a[d];c(x,k?decodeURIComponent(k.replace(/\+/g," ")):"")}}}function mr(a){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,a instanceof mr){this.h=a.h,jo(this,a.j),this.o=a.o,this.g=a.g,zo(this,a.s),this.l=a.l;var c=a.i,d=new ts;d.i=c.i,c.g&&(d.g=new Map(c.g),d.h=c.h),Yf(this,d),this.m=a.m}else a&&(c=String(a).match(Qf))?(this.h=!1,jo(this,c[1]||"",!0),this.o=Zi(c[2]||""),this.g=Zi(c[3]||"",!0),zo(this,c[4]),this.l=Zi(c[5]||"",!0),Yf(this,c[6]||"",!0),this.m=Zi(c[7]||"")):(this.h=!1,this.i=new ts(null,this.h))}mr.prototype.toString=function(){var a=[],c=this.j;c&&a.push(es(c,Xf,!0),":");var d=this.g;return(d||c=="file")&&(a.push("//"),(c=this.o)&&a.push(es(c,Xf,!0),"@"),a.push(encodeURIComponent(String(d)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),d=this.s,d!=null&&a.push(":",String(d))),(d=this.l)&&(this.g&&d.charAt(0)!="/"&&a.push("/"),a.push(es(d,d.charAt(0)=="/"?Xw:Yw,!0))),(d=this.i.toString())&&a.push("?",d),(d=this.m)&&a.push("#",es(d,Zw)),a.join("")};function rn(a){return new mr(a)}function jo(a,c,d){a.j=d?Zi(c,!0):c,a.j&&(a.j=a.j.replace(/:$/,""))}function zo(a,c){if(c){if(c=Number(c),isNaN(c)||0>c)throw Error("Bad port number "+c);a.s=c}else a.s=null}function Yf(a,c,d){c instanceof ts?(a.i=c,eT(a.i,a.h)):(d||(c=es(c,Jw)),a.i=new ts(c,a.h))}function he(a,c,d){a.i.set(c,d)}function Bo(a){return he(a,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),a}function Zi(a,c){return a?c?decodeURI(a.replace(/%25/g,"%2525")):decodeURIComponent(a):""}function es(a,c,d){return typeof a=="string"?(a=encodeURI(a).replace(c,Qw),d&&(a=a.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),a):null}function Qw(a){return a=a.charCodeAt(0),"%"+(a>>4&15).toString(16)+(a&15).toString(16)}var Xf=/[#\/\?@]/g,Yw=/[#\?:]/g,Xw=/[#\?]/g,Jw=/[#\?@]/g,Zw=/#/g;function ts(a,c){this.h=this.g=null,this.i=a||null,this.j=!!c}function Cn(a){a.g||(a.g=new Map,a.h=0,a.i&&Gw(a.i,function(c,d){a.add(decodeURIComponent(c.replace(/\+/g," ")),d)}))}t=ts.prototype,t.add=function(a,c){Cn(this),this.i=null,a=qr(this,a);var d=this.g.get(a);return d||this.g.set(a,d=[]),d.push(c),this.h+=1,this};function Jf(a,c){Cn(a),c=qr(a,c),a.g.has(c)&&(a.i=null,a.h-=a.g.get(c).length,a.g.delete(c))}function Zf(a,c){return Cn(a),c=qr(a,c),a.g.has(c)}t.forEach=function(a,c){Cn(this),this.g.forEach(function(d,p){d.forEach(function(k){a.call(c,k,p,this)},this)},this)},t.na=function(){Cn(this);const a=Array.from(this.g.values()),c=Array.from(this.g.keys()),d=[];for(let p=0;p<c.length;p++){const k=a[p];for(let x=0;x<k.length;x++)d.push(c[p])}return d},t.V=function(a){Cn(this);let c=[];if(typeof a=="string")Zf(this,a)&&(c=c.concat(this.g.get(qr(this,a))));else{a=Array.from(this.g.values());for(let d=0;d<a.length;d++)c=c.concat(a[d])}return c},t.set=function(a,c){return Cn(this),this.i=null,a=qr(this,a),Zf(this,a)&&(this.h-=this.g.get(a).length),this.g.set(a,[c]),this.h+=1,this},t.get=function(a,c){return a?(a=this.V(a),0<a.length?String(a[0]):c):c};function ep(a,c,d){Jf(a,c),0<d.length&&(a.i=null,a.g.set(qr(a,c),P(d)),a.h+=d.length)}t.toString=function(){if(this.i)return this.i;if(!this.g)return"";const a=[],c=Array.from(this.g.keys());for(var d=0;d<c.length;d++){var p=c[d];const x=encodeURIComponent(String(p)),j=this.V(p);for(p=0;p<j.length;p++){var k=x;j[p]!==""&&(k+="="+encodeURIComponent(String(j[p]))),a.push(k)}}return this.i=a.join("&")};function qr(a,c){return c=String(c),a.j&&(c=c.toLowerCase()),c}function eT(a,c){c&&!a.j&&(Cn(a),a.i=null,a.g.forEach(function(d,p){var k=p.toLowerCase();p!=k&&(Jf(this,p),ep(this,k,d))},a)),a.j=c}function tT(a,c){const d=new Xi;if(l.Image){const p=new Image;p.onload=S(Pn,d,"TestLoadImage: loaded",!0,c,p),p.onerror=S(Pn,d,"TestLoadImage: error",!1,c,p),p.onabort=S(Pn,d,"TestLoadImage: abort",!1,c,p),p.ontimeout=S(Pn,d,"TestLoadImage: timeout",!1,c,p),l.setTimeout(function(){p.ontimeout&&p.ontimeout()},1e4),p.src=a}else c(!1)}function nT(a,c){const d=new Xi,p=new AbortController,k=setTimeout(()=>{p.abort(),Pn(d,"TestPingServer: timeout",!1,c)},1e4);fetch(a,{signal:p.signal}).then(x=>{clearTimeout(k),x.ok?Pn(d,"TestPingServer: ok",!0,c):Pn(d,"TestPingServer: server error",!1,c)}).catch(()=>{clearTimeout(k),Pn(d,"TestPingServer: error",!1,c)})}function Pn(a,c,d,p,k){try{k&&(k.onload=null,k.onerror=null,k.onabort=null,k.ontimeout=null),p(d)}catch{}}function rT(){this.g=new Uw}function iT(a,c,d){const p=d||"";try{Gf(a,function(k,x){let j=k;h(k)&&(j=gu(k)),c.push(p+x+"="+encodeURIComponent(j))})}catch(k){throw c.push(p+"type="+encodeURIComponent("_badmap")),k}}function $o(a){this.l=a.Ub||null,this.j=a.eb||!1}C($o,yu),$o.prototype.g=function(){return new Wo(this.l,this.j)},$o.prototype.i=function(a){return function(){return a}}({});function Wo(a,c){We.call(this),this.D=a,this.o=c,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}C(Wo,We),t=Wo.prototype,t.open=function(a,c){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=a,this.A=c,this.readyState=1,rs(this)},t.send=function(a){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const c={headers:this.u,method:this.B,credentials:this.m,cache:void 0};a&&(c.body=a),(this.D||l).fetch(new Request(this.A,c)).then(this.Sa.bind(this),this.ga.bind(this))},t.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,ns(this)),this.readyState=0},t.Sa=function(a){if(this.g&&(this.l=a,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=a.headers,this.readyState=2,rs(this)),this.g&&(this.readyState=3,rs(this),this.g)))if(this.responseType==="arraybuffer")a.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof l.ReadableStream<"u"&&"body"in a){if(this.j=a.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;tp(this)}else a.text().then(this.Ra.bind(this),this.ga.bind(this))};function tp(a){a.j.read().then(a.Pa.bind(a)).catch(a.ga.bind(a))}t.Pa=function(a){if(this.g){if(this.o&&a.value)this.response.push(a.value);else if(!this.o){var c=a.value?a.value:new Uint8Array(0);(c=this.v.decode(c,{stream:!a.done}))&&(this.response=this.responseText+=c)}a.done?ns(this):rs(this),this.readyState==3&&tp(this)}},t.Ra=function(a){this.g&&(this.response=this.responseText=a,ns(this))},t.Qa=function(a){this.g&&(this.response=a,ns(this))},t.ga=function(){this.g&&ns(this)};function ns(a){a.readyState=4,a.l=null,a.j=null,a.v=null,rs(a)}t.setRequestHeader=function(a,c){this.u.append(a,c)},t.getResponseHeader=function(a){return this.h&&this.h.get(a.toLowerCase())||""},t.getAllResponseHeaders=function(){if(!this.h)return"";const a=[],c=this.h.entries();for(var d=c.next();!d.done;)d=d.value,a.push(d[0]+": "+d[1]),d=c.next();return a.join(`\r
`)};function rs(a){a.onreadystatechange&&a.onreadystatechange.call(a)}Object.defineProperty(Wo.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(a){this.m=a?"include":"same-origin"}});function np(a){let c="";return U(a,function(d,p){c+=p,c+=":",c+=d,c+=`\r
`}),c}function Cu(a,c,d){e:{for(p in d){var p=!1;break e}p=!0}p||(d=np(d),typeof a=="string"?d!=null&&encodeURIComponent(String(d)):he(a,c,d))}function we(a){We.call(this),this.headers=new Map,this.o=a||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}C(we,We);var sT=/^https?$/i,oT=["POST","PUT"];t=we.prototype,t.Ha=function(a){this.J=a},t.ea=function(a,c,d,p){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+a);c=c?c.toUpperCase():"GET",this.D=a,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():Eu.g(),this.v=this.o?Df(this.o):Df(Eu),this.g.onreadystatechange=g(this.Ea,this);try{this.B=!0,this.g.open(c,String(a),!0),this.B=!1}catch(x){rp(this,x);return}if(a=d||"",d=new Map(this.headers),p)if(Object.getPrototypeOf(p)===Object.prototype)for(var k in p)d.set(k,p[k]);else if(typeof p.keys=="function"&&typeof p.get=="function")for(const x of p.keys())d.set(x,p.get(x));else throw Error("Unknown input type for opt_headers: "+String(p));p=Array.from(d.keys()).find(x=>x.toLowerCase()=="content-type"),k=l.FormData&&a instanceof l.FormData,!(0<=Array.prototype.indexOf.call(oT,c,void 0))||p||k||d.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[x,j]of d)this.g.setRequestHeader(x,j);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{op(this),this.u=!0,this.g.send(a),this.u=!1}catch(x){rp(this,x)}};function rp(a,c){a.h=!1,a.g&&(a.j=!0,a.g.abort(),a.j=!1),a.l=c,a.m=5,ip(a),Ho(a)}function ip(a){a.A||(a.A=!0,tt(a,"complete"),tt(a,"error"))}t.abort=function(a){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=a||7,tt(this,"complete"),tt(this,"abort"),Ho(this))},t.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),Ho(this,!0)),we.aa.N.call(this)},t.Ea=function(){this.s||(this.B||this.u||this.j?sp(this):this.bb())},t.bb=function(){sp(this)};function sp(a){if(a.h&&typeof o<"u"&&(!a.v[1]||sn(a)!=4||a.Z()!=2)){if(a.u&&sn(a)==4)Cf(a.Ea,0,a);else if(tt(a,"readystatechange"),sn(a)==4){a.h=!1;try{const j=a.Z();e:switch(j){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var c=!0;break e;default:c=!1}var d;if(!(d=c)){var p;if(p=j===0){var k=String(a.D).match(Qf)[1]||null;!k&&l.self&&l.self.location&&(k=l.self.location.protocol.slice(0,-1)),p=!sT.test(k?k.toLowerCase():"")}d=p}if(d)tt(a,"complete"),tt(a,"success");else{a.m=6;try{var x=2<sn(a)?a.g.statusText:""}catch{x=""}a.l=x+" ["+a.Z()+"]",ip(a)}}finally{Ho(a)}}}}function Ho(a,c){if(a.g){op(a);const d=a.g,p=a.v[0]?()=>{}:null;a.g=null,a.v=null,c||tt(a,"ready");try{d.onreadystatechange=p}catch{}}}function op(a){a.I&&(l.clearTimeout(a.I),a.I=null)}t.isActive=function(){return!!this.g};function sn(a){return a.g?a.g.readyState:0}t.Z=function(){try{return 2<sn(this)?this.g.status:-1}catch{return-1}},t.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},t.Oa=function(a){if(this.g){var c=this.g.responseText;return a&&c.indexOf(a)==0&&(c=c.substring(a.length)),bw(c)}};function ap(a){try{if(!a.g)return null;if("response"in a.g)return a.g.response;switch(a.H){case"":case"text":return a.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in a.g)return a.g.mozResponseArrayBuffer}return null}catch{return null}}function aT(a){const c={};a=(a.g&&2<=sn(a)&&a.g.getAllResponseHeaders()||"").split(`\r
`);for(let p=0;p<a.length;p++){if(_(a[p]))continue;var d=R(a[p]);const k=d[0];if(d=d[1],typeof d!="string")continue;d=d.trim();const x=c[k]||[];c[k]=x,x.push(d)}E(c,function(p){return p.join(", ")})}t.Ba=function(){return this.m},t.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function is(a,c,d){return d&&d.internalChannelParams&&d.internalChannelParams[a]||c}function lp(a){this.Aa=0,this.i=[],this.j=new Xi,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=is("failFast",!1,a),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=is("baseRetryDelayMs",5e3,a),this.cb=is("retryDelaySeedMs",1e4,a),this.Wa=is("forwardChannelMaxRetries",2,a),this.wa=is("forwardChannelRequestTimeoutMs",2e4,a),this.pa=a&&a.xmlHttpFactory||void 0,this.Xa=a&&a.Tb||void 0,this.Ca=a&&a.useFetchStreams||!1,this.L=void 0,this.J=a&&a.supportsCrossDomainXhr||!1,this.K="",this.h=new $f(a&&a.concurrentRequestLimit),this.Da=new rT,this.P=a&&a.fastHandshake||!1,this.O=a&&a.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=a&&a.Rb||!1,a&&a.xa&&this.j.xa(),a&&a.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&a&&a.detectBufferingProxy||!1,this.ja=void 0,a&&a.longPollingTimeout&&0<a.longPollingTimeout&&(this.ja=a.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}t=lp.prototype,t.la=8,t.G=1,t.connect=function(a,c,d,p){nt(0),this.W=a,this.H=c||{},d&&p!==void 0&&(this.H.OSID=d,this.H.OAID=p),this.F=this.X,this.I=yp(this,null,this.W),Ko(this)};function Pu(a){if(up(a),a.G==3){var c=a.U++,d=rn(a.I);if(he(d,"SID",a.K),he(d,"RID",c),he(d,"TYPE","terminate"),ss(a,d),c=new Rn(a,a.j,c),c.L=2,c.v=Bo(rn(d)),d=!1,l.navigator&&l.navigator.sendBeacon)try{d=l.navigator.sendBeacon(c.v.toString(),"")}catch{}!d&&l.Image&&(new Image().src=c.v,d=!0),d||(c.g=_p(c.j,null),c.g.ea(c.v)),c.F=Date.now(),Uo(c)}gp(a)}function qo(a){a.g&&(Nu(a),a.g.cancel(),a.g=null)}function up(a){qo(a),a.u&&(l.clearTimeout(a.u),a.u=null),Go(a),a.h.cancel(),a.s&&(typeof a.s=="number"&&l.clearTimeout(a.s),a.s=null)}function Ko(a){if(!Wf(a.h)&&!a.s){a.s=!0;var c=a.Ga;Jt||J(),z||(Jt(),z=!0),Q.add(c,a),a.B=0}}function lT(a,c){return Hf(a.h)>=a.h.j-(a.s?1:0)?!1:a.s?(a.i=c.D.concat(a.i),!0):a.G==1||a.G==2||a.B>=(a.Va?0:a.Wa)?!1:(a.s=Yi(g(a.Ga,a,c),mp(a,a.B)),a.B++,!0)}t.Ga=function(a){if(this.s)if(this.s=null,this.G==1){if(!a){this.U=Math.floor(1e5*Math.random()),a=this.U++;const k=new Rn(this,this.j,a);let x=this.o;if(this.S&&(x?(x=y(x),T(x,this.S)):x=this.S),this.m!==null||this.O||(k.H=x,x=null),this.P)e:{for(var c=0,d=0;d<this.i.length;d++){t:{var p=this.i[d];if("__data__"in p.map&&(p=p.map.__data__,typeof p=="string")){p=p.length;break t}p=void 0}if(p===void 0)break;if(c+=p,4096<c){c=d;break e}if(c===4096||d===this.i.length-1){c=d+1;break e}}c=1e3}else c=1e3;c=hp(this,k,c),d=rn(this.I),he(d,"RID",a),he(d,"CVER",22),this.D&&he(d,"X-HTTP-Session-Id",this.D),ss(this,d),x&&(this.O?c="headers="+encodeURIComponent(String(np(x)))+"&"+c:this.m&&Cu(d,this.m,x)),Ru(this.h,k),this.Ua&&he(d,"TYPE","init"),this.P?(he(d,"$req",c),he(d,"SID","null"),k.T=!0,Tu(k,d,null)):Tu(k,d,c),this.G=2}}else this.G==3&&(a?cp(this,a):this.i.length==0||Wf(this.h)||cp(this))};function cp(a,c){var d;c?d=c.l:d=a.U++;const p=rn(a.I);he(p,"SID",a.K),he(p,"RID",d),he(p,"AID",a.T),ss(a,p),a.m&&a.o&&Cu(p,a.m,a.o),d=new Rn(a,a.j,d,a.B+1),a.m===null&&(d.H=a.o),c&&(a.i=c.D.concat(a.i)),c=hp(a,d,1e3),d.I=Math.round(.5*a.wa)+Math.round(.5*a.wa*Math.random()),Ru(a.h,d),Tu(d,p,c)}function ss(a,c){a.H&&U(a.H,function(d,p){he(c,p,d)}),a.l&&Gf({},function(d,p){he(c,p,d)})}function hp(a,c,d){d=Math.min(a.i.length,d);var p=a.l?g(a.l.Na,a.l,a):null;e:{var k=a.i;let x=-1;for(;;){const j=["count="+d];x==-1?0<d?(x=k[0].g,j.push("ofs="+x)):x=0:j.push("ofs="+x);let ue=!0;for(let Me=0;Me<d;Me++){let ie=k[Me].g;const He=k[Me].map;if(ie-=x,0>ie)x=Math.max(0,k[Me].g-100),ue=!1;else try{iT(He,j,"req"+ie+"_")}catch{p&&p(He)}}if(ue){p=j.join("&");break e}}}return a=a.i.splice(0,d),c.D=a,p}function dp(a){if(!a.g&&!a.u){a.Y=1;var c=a.Fa;Jt||J(),z||(Jt(),z=!0),Q.add(c,a),a.v=0}}function ku(a){return a.g||a.u||3<=a.v?!1:(a.Y++,a.u=Yi(g(a.Fa,a),mp(a,a.v)),a.v++,!0)}t.Fa=function(){if(this.u=null,fp(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var a=2*this.R;this.j.info("BP detection timer enabled: "+a),this.A=Yi(g(this.ab,this),a)}},t.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,nt(10),qo(this),fp(this))};function Nu(a){a.A!=null&&(l.clearTimeout(a.A),a.A=null)}function fp(a){a.g=new Rn(a,a.j,"rpc",a.Y),a.m===null&&(a.g.H=a.o),a.g.O=0;var c=rn(a.qa);he(c,"RID","rpc"),he(c,"SID",a.K),he(c,"AID",a.T),he(c,"CI",a.F?"0":"1"),!a.F&&a.ja&&he(c,"TO",a.ja),he(c,"TYPE","xmlhttp"),ss(a,c),a.m&&a.o&&Cu(c,a.m,a.o),a.L&&(a.g.I=a.L);var d=a.g;a=a.ia,d.L=1,d.v=Bo(rn(c)),d.m=null,d.P=!0,jf(d,a)}t.Za=function(){this.C!=null&&(this.C=null,qo(this),ku(this),nt(19))};function Go(a){a.C!=null&&(l.clearTimeout(a.C),a.C=null)}function pp(a,c){var d=null;if(a.g==c){Go(a),Nu(a),a.g=null;var p=2}else if(Au(a.h,c))d=c.D,qf(a.h,c),p=1;else return;if(a.G!=0){if(c.o)if(p==1){d=c.m?c.m.length:0,c=Date.now()-c.F;var k=a.B;p=Mo(),tt(p,new Mf(p,d)),Ko(a)}else dp(a);else if(k=c.s,k==3||k==0&&0<c.X||!(p==1&&lT(a,c)||p==2&&ku(a)))switch(d&&0<d.length&&(c=a.h,c.i=c.i.concat(d)),k){case 1:gr(a,5);break;case 4:gr(a,10);break;case 3:gr(a,6);break;default:gr(a,2)}}}function mp(a,c){let d=a.Ta+Math.floor(Math.random()*a.cb);return a.isActive()||(d*=2),d*c}function gr(a,c){if(a.j.info("Error code "+c),c==2){var d=g(a.fb,a),p=a.Xa;const k=!p;p=new mr(p||"//www.google.com/images/cleardot.gif"),l.location&&l.location.protocol=="http"||jo(p,"https"),Bo(p),k?tT(p.toString(),d):nT(p.toString(),d)}else nt(2);a.G=0,a.l&&a.l.sa(c),gp(a),up(a)}t.fb=function(a){a?(this.j.info("Successfully pinged google.com"),nt(2)):(this.j.info("Failed to ping google.com"),nt(1))};function gp(a){if(a.G=0,a.ka=[],a.l){const c=Kf(a.h);(c.length!=0||a.i.length!=0)&&(O(a.ka,c),O(a.ka,a.i),a.h.i.length=0,P(a.i),a.i.length=0),a.l.ra()}}function yp(a,c,d){var p=d instanceof mr?rn(d):new mr(d);if(p.g!="")c&&(p.g=c+"."+p.g),zo(p,p.s);else{var k=l.location;p=k.protocol,c=c?c+"."+k.hostname:k.hostname,k=+k.port;var x=new mr(null);p&&jo(x,p),c&&(x.g=c),k&&zo(x,k),d&&(x.l=d),p=x}return d=a.D,c=a.ya,d&&c&&he(p,d,c),he(p,"VER",a.la),ss(a,p),p}function _p(a,c,d){if(c&&!a.J)throw Error("Can't create secondary domain capable XhrIo object.");return c=a.Ca&&!a.pa?new we(new $o({eb:d})):new we(a.pa),c.Ha(a.J),c}t.isActive=function(){return!!this.l&&this.l.isActive(this)};function vp(){}t=vp.prototype,t.ua=function(){},t.ta=function(){},t.sa=function(){},t.ra=function(){},t.isActive=function(){return!0},t.Na=function(){};function Qo(){}Qo.prototype.g=function(a,c){return new pt(a,c)};function pt(a,c){We.call(this),this.g=new lp(c),this.l=a,this.h=c&&c.messageUrlParams||null,a=c&&c.messageHeaders||null,c&&c.clientProtocolHeaderRequired&&(a?a["X-Client-Protocol"]="webchannel":a={"X-Client-Protocol":"webchannel"}),this.g.o=a,a=c&&c.initMessageHeaders||null,c&&c.messageContentType&&(a?a["X-WebChannel-Content-Type"]=c.messageContentType:a={"X-WebChannel-Content-Type":c.messageContentType}),c&&c.va&&(a?a["X-WebChannel-Client-Profile"]=c.va:a={"X-WebChannel-Client-Profile":c.va}),this.g.S=a,(a=c&&c.Sb)&&!_(a)&&(this.g.m=a),this.v=c&&c.supportsCrossDomainXhr||!1,this.u=c&&c.sendRawJson||!1,(c=c&&c.httpSessionIdParam)&&!_(c)&&(this.g.D=c,a=this.h,a!==null&&c in a&&(a=this.h,c in a&&delete a[c])),this.j=new Kr(this)}C(pt,We),pt.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},pt.prototype.close=function(){Pu(this.g)},pt.prototype.o=function(a){var c=this.g;if(typeof a=="string"){var d={};d.__data__=a,a=d}else this.u&&(d={},d.__data__=gu(a),a=d);c.i.push(new Hw(c.Ya++,a)),c.G==3&&Ko(c)},pt.prototype.N=function(){this.g.l=null,delete this.j,Pu(this.g),delete this.g,pt.aa.N.call(this)};function Ep(a){_u.call(this),a.__headers__&&(this.headers=a.__headers__,this.statusCode=a.__status__,delete a.__headers__,delete a.__status__);var c=a.__sm__;if(c){e:{for(const d in c){a=d;break e}a=void 0}(this.i=a)&&(a=this.i,c=c!==null&&a in c?c[a]:void 0),this.data=c}else this.data=a}C(Ep,_u);function wp(){vu.call(this),this.status=1}C(wp,vu);function Kr(a){this.g=a}C(Kr,vp),Kr.prototype.ua=function(){tt(this.g,"a")},Kr.prototype.ta=function(a){tt(this.g,new Ep(a))},Kr.prototype.sa=function(a){tt(this.g,new wp)},Kr.prototype.ra=function(){tt(this.g,"b")},Qo.prototype.createWebChannel=Qo.prototype.g,pt.prototype.send=pt.prototype.o,pt.prototype.open=pt.prototype.m,pt.prototype.close=pt.prototype.close,uE=function(){return new Qo},lE=function(){return Mo()},aE=fr,yh={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},Fo.NO_ERROR=0,Fo.TIMEOUT=8,Fo.HTTP_ERROR=6,La=Fo,Ff.COMPLETE="complete",oE=Ff,xf.EventType=Gi,Gi.OPEN="a",Gi.CLOSE="b",Gi.ERROR="c",Gi.MESSAGE="d",We.prototype.listen=We.prototype.K,ws=xf,we.prototype.listenOnce=we.prototype.L,we.prototype.getLastError=we.prototype.Ka,we.prototype.getLastErrorCode=we.prototype.Ba,we.prototype.getStatus=we.prototype.Z,we.prototype.getResponseJson=we.prototype.Oa,we.prototype.getResponseText=we.prototype.oa,we.prototype.send=we.prototype.ea,we.prototype.setWithCredentials=we.prototype.Ha,sE=we}).apply(typeof ma<"u"?ma:typeof self<"u"?self:typeof window<"u"?window:{});const ag="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ye{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}Ye.UNAUTHENTICATED=new Ye(null),Ye.GOOGLE_CREDENTIALS=new Ye("google-credentials-uid"),Ye.FIRST_PARTY=new Ye("first-party-uid"),Ye.MOCK_USER=new Ye("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Bi="10.14.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const br=new Cd("@firebase/firestore");function ps(){return br.logLevel}function W(t,...e){if(br.logLevel<=te.DEBUG){const n=e.map(zd);br.debug(`Firestore (${Bi}): ${t}`,...n)}}function Tn(t,...e){if(br.logLevel<=te.ERROR){const n=e.map(zd);br.error(`Firestore (${Bi}): ${t}`,...n)}}function ki(t,...e){if(br.logLevel<=te.WARN){const n=e.map(zd);br.warn(`Firestore (${Bi}): ${t}`,...n)}}function zd(t){if(typeof t=="string")return t;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/return function(n){return JSON.stringify(n)}(t)}catch{return t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function G(t="Unexpected state"){const e=`FIRESTORE (${Bi}) INTERNAL ASSERTION FAILED: `+t;throw Tn(e),new Error(e)}function ae(t,e){t||G()}function X(t,e){return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const L={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class $ extends An{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pr{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cE{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class xC{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(Ye.UNAUTHENTICATED))}shutdown(){}}class VC{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class OC{constructor(e){this.t=e,this.currentUser=Ye.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){ae(this.o===void 0);let r=this.i;const i=u=>this.i!==r?(r=this.i,n(u)):Promise.resolve();let s=new Pr;this.o=()=>{this.i++,this.currentUser=this.u(),s.resolve(),s=new Pr,e.enqueueRetryable(()=>i(this.currentUser))};const o=()=>{const u=s;e.enqueueRetryable(async()=>{await u.promise,await i(this.currentUser)})},l=u=>{W("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=u,this.o&&(this.auth.addAuthTokenListener(this.o),o())};this.t.onInit(u=>l(u)),setTimeout(()=>{if(!this.auth){const u=this.t.getImmediate({optional:!0});u?l(u):(W("FirebaseAuthCredentialsProvider","Auth not yet detected"),s.resolve(),s=new Pr)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==e?(W("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(ae(typeof r.accessToken=="string"),new cE(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return ae(e===null||typeof e=="string"),new Ye(e)}}class LC{constructor(e,n,r){this.l=e,this.h=n,this.P=r,this.type="FirstParty",this.user=Ye.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const e=this.T();return e&&this.I.set("Authorization",e),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class MC{constructor(e,n,r){this.l=e,this.h=n,this.P=r}getToken(){return Promise.resolve(new LC(this.l,this.h,this.P))}start(e,n){e.enqueueRetryable(()=>n(Ye.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class FC{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class bC{constructor(e){this.A=e,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(e,n){ae(this.o===void 0);const r=s=>{s.error!=null&&W("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${s.error.message}`);const o=s.token!==this.R;return this.R=s.token,W("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(s.token):Promise.resolve()};this.o=s=>{e.enqueueRetryable(()=>r(s))};const i=s=>{W("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=s,this.o&&this.appCheck.addTokenListener(this.o)};this.A.onInit(s=>i(s)),setTimeout(()=>{if(!this.appCheck){const s=this.A.getImmediate({optional:!0});s?i(s):W("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(ae(typeof n.token=="string"),this.R=n.token,new FC(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function UC(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hE{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let r="";for(;r.length<20;){const i=UC(40);for(let s=0;s<i.length;++s)r.length<20&&i[s]<n&&(r+=e.charAt(i[s]%e.length))}return r}}function se(t,e){return t<e?-1:t>e?1:0}function Ni(t,e,n){return t.length===e.length&&t.every((r,i)=>n(r,e[i]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class De{constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new $(L.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new $(L.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new $(L.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new $(L.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return De.fromMillis(Date.now())}static fromDate(e){return De.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor(1e6*(e-1e3*n));return new De(n,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?se(this.nanoseconds,e.nanoseconds):se(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Y{constructor(e){this.timestamp=e}static fromTimestamp(e){return new Y(e)}static min(){return new Y(new De(0,0))}static max(){return new Y(new De(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oo{constructor(e,n,r){n===void 0?n=0:n>e.length&&G(),r===void 0?r=e.length-n:r>e.length-n&&G(),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return oo.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof oo?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let i=0;i<r;i++){const s=e.get(i),o=n.get(i);if(s<o)return-1;if(s>o)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class fe extends oo{construct(e,n,r){return new fe(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new $(L.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(i=>i.length>0))}return new fe(n)}static emptyPath(){return new fe([])}}const jC=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Ue extends oo{construct(e,n,r){return new Ue(e,n,r)}static isValidIdentifier(e){return jC.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Ue.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new Ue(["__name__"])}static fromServerFormat(e){const n=[];let r="",i=0;const s=()=>{if(r.length===0)throw new $(L.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;i<e.length;){const l=e[i];if(l==="\\"){if(i+1===e.length)throw new $(L.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const u=e[i+1];if(u!=="\\"&&u!=="."&&u!=="`")throw new $(L.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=u,i+=2}else l==="`"?(o=!o,i++):l!=="."||o?(r+=l,i++):(s(),i++)}if(s(),o)throw new $(L.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new Ue(n)}static emptyPath(){return new Ue([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class H{constructor(e){this.path=e}static fromPath(e){return new H(fe.fromString(e))}static fromName(e){return new H(fe.fromString(e).popFirst(5))}static empty(){return new H(fe.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&fe.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return fe.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new H(new fe(e.slice()))}}function zC(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,i=Y.fromTimestamp(r===1e9?new De(n+1,0):new De(n,r));return new nr(i,H.empty(),e)}function BC(t){return new nr(t.readTime,t.key,-1)}class nr{constructor(e,n,r){this.readTime=e,this.documentKey=n,this.largestBatchId=r}static min(){return new nr(Y.min(),H.empty(),-1)}static max(){return new nr(Y.max(),H.empty(),-1)}}function $C(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=H.comparator(t.documentKey,e.documentKey),n!==0?n:se(t.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const WC="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class HC{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ao(t){if(t.code!==L.FAILED_PRECONDITION||t.message!==WC)throw t;W("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class M{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&G(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new M((r,i)=>{this.nextCallback=s=>{this.wrapSuccess(e,s).next(r,i)},this.catchCallback=s=>{this.wrapFailure(n,s).next(r,i)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof M?n:M.resolve(n)}catch(n){return M.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):M.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):M.reject(n)}static resolve(e){return new M((n,r)=>{n(e)})}static reject(e){return new M((n,r)=>{r(e)})}static waitFor(e){return new M((n,r)=>{let i=0,s=0,o=!1;e.forEach(l=>{++i,l.next(()=>{++s,o&&s===i&&n()},u=>r(u))}),o=!0,s===i&&n()})}static or(e){let n=M.resolve(!1);for(const r of e)n=n.next(i=>i?M.resolve(i):r());return n}static forEach(e,n){const r=[];return e.forEach((i,s)=>{r.push(n.call(this,i,s))}),this.waitFor(r)}static mapArray(e,n){return new M((r,i)=>{const s=e.length,o=new Array(s);let l=0;for(let u=0;u<s;u++){const h=u;n(e[h]).next(f=>{o[h]=f,++l,l===s&&r(o)},f=>i(f))}})}static doWhile(e,n){return new M((r,i)=>{const s=()=>{e()===!0?n().next(()=>{s()},i):r()};s()})}}function qC(t){const e=t.match(/Android ([\d.]+)/i),n=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(n)}function Ro(t){return t.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bd{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=r=>this.ie(r),this.se=r=>n.writeSequenceNumber(r))}ie(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.se&&this.se(e),e}}Bd.oe=-1;function Ql(t){return t==null}function _l(t){return t===0&&1/t==-1/0}function KC(t){return typeof t=="number"&&Number.isInteger(t)&&!_l(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lg(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function $r(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function dE(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ee{constructor(e,n){this.comparator=e,this.root=n||be.EMPTY}insert(e,n){return new Ee(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,be.BLACK,null,null))}remove(e){return new Ee(this.comparator,this.root.remove(e,this.comparator).copy(null,null,be.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const i=this.comparator(e,r.key);if(i===0)return n+r.left.size;i<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,r)=>(e(n,r),!1))}toString(){const e=[];return this.inorderTraversal((n,r)=>(e.push(`${n}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new ga(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new ga(this.root,e,this.comparator,!1)}getReverseIterator(){return new ga(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new ga(this.root,e,this.comparator,!0)}}class ga{constructor(e,n,r,i){this.isReverse=i,this.nodeStack=[];let s=1;for(;!e.isEmpty();)if(s=n?r(e.key,n):1,n&&i&&(s*=-1),s<0)e=this.isReverse?e.left:e.right;else{if(s===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class be{constructor(e,n,r,i,s){this.key=e,this.value=n,this.color=r??be.RED,this.left=i??be.EMPTY,this.right=s??be.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,i,s){return new be(e??this.key,n??this.value,r??this.color,i??this.left,s??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let i=this;const s=r(e,i.key);return i=s<0?i.copy(null,null,null,i.left.insert(e,n,r),null):s===0?i.copy(null,n,null,null,null):i.copy(null,null,null,null,i.right.insert(e,n,r)),i.fixUp()}removeMin(){if(this.left.isEmpty())return be.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,i=this;if(n(e,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(e,n),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),n(e,i.key)===0){if(i.right.isEmpty())return be.EMPTY;r=i.right.min(),i=i.copy(r.key,r.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(e,n))}return i.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,be.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,be.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw G();const e=this.left.check();if(e!==this.right.check())throw G();return e+(this.isRed()?0:1)}}be.EMPTY=null,be.RED=!0,be.BLACK=!1;be.EMPTY=new class{constructor(){this.size=0}get key(){throw G()}get value(){throw G()}get color(){throw G()}get left(){throw G()}get right(){throw G()}copy(e,n,r,i,s){return this}insert(e,n,r){return new be(e,n)}remove(e,n){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ze{constructor(e){this.comparator=e,this.data=new Ee(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,r)=>(e(n),!1))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const i=r.getNext();if(this.comparator(i.key,e[1])>=0)return;n(i.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new ug(this.data.getIterator())}getIteratorFrom(e){return new ug(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(r=>{n=n.add(r)}),n}isEqual(e){if(!(e instanceof ze)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(this.comparator(i,s)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new ze(this.comparator);return n.data=e,n}}class ug{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yt{constructor(e){this.fields=e,e.sort(Ue.comparator)}static empty(){return new yt([])}unionWith(e){let n=new ze(Ue.comparator);for(const r of this.fields)n=n.add(r);for(const r of e)n=n.add(r);return new yt(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return Ni(this.fields,e.fields,(n,r)=>n.isEqual(r))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fE extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $e{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(i){try{return atob(i)}catch(s){throw typeof DOMException<"u"&&s instanceof DOMException?new fE("Invalid base64 string: "+s):s}}(e);return new $e(n)}static fromUint8Array(e){const n=function(i){let s="";for(let o=0;o<i.length;++o)s+=String.fromCharCode(i[o]);return s}(e);return new $e(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(n){return btoa(n)}(this.binaryString)}toUint8Array(){return function(n){const r=new Uint8Array(n.length);for(let i=0;i<n.length;i++)r[i]=n.charCodeAt(i);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return se(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}$e.EMPTY_BYTE_STRING=new $e("");const GC=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function rr(t){if(ae(!!t),typeof t=="string"){let e=0;const n=GC.exec(t);if(ae(!!n),n[1]){let i=n[1];i=(i+"000000000").substr(0,9),e=Number(i)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:Se(t.seconds),nanos:Se(t.nanos)}}function Se(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function Ur(t){return typeof t=="string"?$e.fromBase64String(t):$e.fromUint8Array(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $d(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function Wd(t){const e=t.mapValue.fields.__previous_value__;return $d(e)?Wd(e):e}function ao(t){const e=rr(t.mapValue.fields.__local_write_time__.timestampValue);return new De(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class QC{constructor(e,n,r,i,s,o,l,u,h){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=i,this.ssl=s,this.forceLongPolling=o,this.autoDetectLongPolling=l,this.longPollingOptions=u,this.useFetchStreams=h}}class lo{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new lo("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof lo&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ya={mapValue:{}};function jr(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?$d(t)?4:XC(t)?9007199254740991:YC(t)?10:11:G()}function Xt(t,e){if(t===e)return!0;const n=jr(t);if(n!==jr(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return ao(t).isEqual(ao(e));case 3:return function(i,s){if(typeof i.timestampValue=="string"&&typeof s.timestampValue=="string"&&i.timestampValue.length===s.timestampValue.length)return i.timestampValue===s.timestampValue;const o=rr(i.timestampValue),l=rr(s.timestampValue);return o.seconds===l.seconds&&o.nanos===l.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(i,s){return Ur(i.bytesValue).isEqual(Ur(s.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(i,s){return Se(i.geoPointValue.latitude)===Se(s.geoPointValue.latitude)&&Se(i.geoPointValue.longitude)===Se(s.geoPointValue.longitude)}(t,e);case 2:return function(i,s){if("integerValue"in i&&"integerValue"in s)return Se(i.integerValue)===Se(s.integerValue);if("doubleValue"in i&&"doubleValue"in s){const o=Se(i.doubleValue),l=Se(s.doubleValue);return o===l?_l(o)===_l(l):isNaN(o)&&isNaN(l)}return!1}(t,e);case 9:return Ni(t.arrayValue.values||[],e.arrayValue.values||[],Xt);case 10:case 11:return function(i,s){const o=i.mapValue.fields||{},l=s.mapValue.fields||{};if(lg(o)!==lg(l))return!1;for(const u in o)if(o.hasOwnProperty(u)&&(l[u]===void 0||!Xt(o[u],l[u])))return!1;return!0}(t,e);default:return G()}}function uo(t,e){return(t.values||[]).find(n=>Xt(n,e))!==void 0}function Di(t,e){if(t===e)return 0;const n=jr(t),r=jr(e);if(n!==r)return se(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return se(t.booleanValue,e.booleanValue);case 2:return function(s,o){const l=Se(s.integerValue||s.doubleValue),u=Se(o.integerValue||o.doubleValue);return l<u?-1:l>u?1:l===u?0:isNaN(l)?isNaN(u)?0:-1:1}(t,e);case 3:return cg(t.timestampValue,e.timestampValue);case 4:return cg(ao(t),ao(e));case 5:return se(t.stringValue,e.stringValue);case 6:return function(s,o){const l=Ur(s),u=Ur(o);return l.compareTo(u)}(t.bytesValue,e.bytesValue);case 7:return function(s,o){const l=s.split("/"),u=o.split("/");for(let h=0;h<l.length&&h<u.length;h++){const f=se(l[h],u[h]);if(f!==0)return f}return se(l.length,u.length)}(t.referenceValue,e.referenceValue);case 8:return function(s,o){const l=se(Se(s.latitude),Se(o.latitude));return l!==0?l:se(Se(s.longitude),Se(o.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return hg(t.arrayValue,e.arrayValue);case 10:return function(s,o){var l,u,h,f;const m=s.fields||{},g=o.fields||{},S=(l=m.value)===null||l===void 0?void 0:l.arrayValue,C=(u=g.value)===null||u===void 0?void 0:u.arrayValue,P=se(((h=S==null?void 0:S.values)===null||h===void 0?void 0:h.length)||0,((f=C==null?void 0:C.values)===null||f===void 0?void 0:f.length)||0);return P!==0?P:hg(S,C)}(t.mapValue,e.mapValue);case 11:return function(s,o){if(s===ya.mapValue&&o===ya.mapValue)return 0;if(s===ya.mapValue)return 1;if(o===ya.mapValue)return-1;const l=s.fields||{},u=Object.keys(l),h=o.fields||{},f=Object.keys(h);u.sort(),f.sort();for(let m=0;m<u.length&&m<f.length;++m){const g=se(u[m],f[m]);if(g!==0)return g;const S=Di(l[u[m]],h[f[m]]);if(S!==0)return S}return se(u.length,f.length)}(t.mapValue,e.mapValue);default:throw G()}}function cg(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return se(t,e);const n=rr(t),r=rr(e),i=se(n.seconds,r.seconds);return i!==0?i:se(n.nanos,r.nanos)}function hg(t,e){const n=t.values||[],r=e.values||[];for(let i=0;i<n.length&&i<r.length;++i){const s=Di(n[i],r[i]);if(s)return s}return se(n.length,r.length)}function xi(t){return _h(t)}function _h(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(n){const r=rr(n);return`time(${r.seconds},${r.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?function(n){return Ur(n).toBase64()}(t.bytesValue):"referenceValue"in t?function(n){return H.fromName(n).toString()}(t.referenceValue):"geoPointValue"in t?function(n){return`geo(${n.latitude},${n.longitude})`}(t.geoPointValue):"arrayValue"in t?function(n){let r="[",i=!0;for(const s of n.values||[])i?i=!1:r+=",",r+=_h(s);return r+"]"}(t.arrayValue):"mapValue"in t?function(n){const r=Object.keys(n.fields||{}).sort();let i="{",s=!0;for(const o of r)s?s=!1:i+=",",i+=`${o}:${_h(n.fields[o])}`;return i+"}"}(t.mapValue):G()}function dg(t,e){return{referenceValue:`projects/${t.projectId}/databases/${t.database}/documents/${e.path.canonicalString()}`}}function vh(t){return!!t&&"integerValue"in t}function Hd(t){return!!t&&"arrayValue"in t}function fg(t){return!!t&&"nullValue"in t}function pg(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function Ma(t){return!!t&&"mapValue"in t}function YC(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="__vector__"}function Ls(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return $r(t.mapValue.fields,(n,r)=>e.mapValue.fields[n]=Ls(r)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=Ls(t.arrayValue.values[n]);return e}return Object.assign({},t)}function XC(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lt{constructor(e){this.value=e}static empty(){return new lt({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!Ma(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=Ls(n)}setAll(e){let n=Ue.emptyPath(),r={},i=[];e.forEach((o,l)=>{if(!n.isImmediateParentOf(l)){const u=this.getFieldsMap(n);this.applyChanges(u,r,i),r={},i=[],n=l.popLast()}o?r[l.lastSegment()]=Ls(o):i.push(l.lastSegment())});const s=this.getFieldsMap(n);this.applyChanges(s,r,i)}delete(e){const n=this.field(e.popLast());Ma(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return Xt(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let i=n.mapValue.fields[e.get(r)];Ma(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=i),n=i}return n.mapValue.fields}applyChanges(e,n,r){$r(n,(i,s)=>e[i]=s);for(const i of r)delete e[i]}clone(){return new lt(Ls(this.value))}}function pE(t){const e=[];return $r(t.fields,(n,r)=>{const i=new Ue([n]);if(Ma(r)){const s=pE(r.mapValue).fields;if(s.length===0)e.push(i);else for(const o of s)e.push(i.child(o))}else e.push(i)}),new yt(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Je{constructor(e,n,r,i,s,o,l){this.key=e,this.documentType=n,this.version=r,this.readTime=i,this.createTime=s,this.data=o,this.documentState=l}static newInvalidDocument(e){return new Je(e,0,Y.min(),Y.min(),Y.min(),lt.empty(),0)}static newFoundDocument(e,n,r,i){return new Je(e,1,n,Y.min(),r,i,0)}static newNoDocument(e,n){return new Je(e,2,n,Y.min(),Y.min(),lt.empty(),0)}static newUnknownDocument(e,n){return new Je(e,3,n,Y.min(),Y.min(),lt.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(Y.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=lt.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=lt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=Y.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof Je&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new Je(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vl{constructor(e,n){this.position=e,this.inclusive=n}}function mg(t,e,n){let r=0;for(let i=0;i<t.position.length;i++){const s=e[i],o=t.position[i];if(s.field.isKeyField()?r=H.comparator(H.fromName(o.referenceValue),n.key):r=Di(o,n.data.field(s.field)),s.dir==="desc"&&(r*=-1),r!==0)break}return r}function gg(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!Xt(t.position[n],e.position[n]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class El{constructor(e,n="asc"){this.field=e,this.dir=n}}function JC(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mE{}class Pe extends mE{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,r):new eP(e,n,r):n==="array-contains"?new rP(e,r):n==="in"?new iP(e,r):n==="not-in"?new sP(e,r):n==="array-contains-any"?new oP(e,r):new Pe(e,n,r)}static createKeyFieldInFilter(e,n,r){return n==="in"?new tP(e,r):new nP(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison(Di(n,this.value)):n!==null&&jr(this.value)===jr(n)&&this.matchesComparison(Di(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return G()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class zt extends mE{constructor(e,n){super(),this.filters=e,this.op=n,this.ae=null}static create(e,n){return new zt(e,n)}matches(e){return gE(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.ae!==null||(this.ae=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.ae}getFilters(){return Object.assign([],this.filters)}}function gE(t){return t.op==="and"}function yE(t){return ZC(t)&&gE(t)}function ZC(t){for(const e of t.filters)if(e instanceof zt)return!1;return!0}function Eh(t){if(t instanceof Pe)return t.field.canonicalString()+t.op.toString()+xi(t.value);if(yE(t))return t.filters.map(e=>Eh(e)).join(",");{const e=t.filters.map(n=>Eh(n)).join(",");return`${t.op}(${e})`}}function _E(t,e){return t instanceof Pe?function(r,i){return i instanceof Pe&&r.op===i.op&&r.field.isEqual(i.field)&&Xt(r.value,i.value)}(t,e):t instanceof zt?function(r,i){return i instanceof zt&&r.op===i.op&&r.filters.length===i.filters.length?r.filters.reduce((s,o,l)=>s&&_E(o,i.filters[l]),!0):!1}(t,e):void G()}function vE(t){return t instanceof Pe?function(n){return`${n.field.canonicalString()} ${n.op} ${xi(n.value)}`}(t):t instanceof zt?function(n){return n.op.toString()+" {"+n.getFilters().map(vE).join(" ,")+"}"}(t):"Filter"}class eP extends Pe{constructor(e,n,r){super(e,n,r),this.key=H.fromName(r.referenceValue)}matches(e){const n=H.comparator(e.key,this.key);return this.matchesComparison(n)}}class tP extends Pe{constructor(e,n){super(e,"in",n),this.keys=EE("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class nP extends Pe{constructor(e,n){super(e,"not-in",n),this.keys=EE("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function EE(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(r=>H.fromName(r.referenceValue))}class rP extends Pe{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return Hd(n)&&uo(n.arrayValue,this.value)}}class iP extends Pe{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&uo(this.value.arrayValue,n)}}class sP extends Pe{constructor(e,n){super(e,"not-in",n)}matches(e){if(uo(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!uo(this.value.arrayValue,n)}}class oP extends Pe{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!Hd(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>uo(this.value.arrayValue,r))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aP{constructor(e,n=null,r=[],i=[],s=null,o=null,l=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=i,this.limit=s,this.startAt=o,this.endAt=l,this.ue=null}}function yg(t,e=null,n=[],r=[],i=null,s=null,o=null){return new aP(t,e,n,r,i,s,o)}function qd(t){const e=X(t);if(e.ue===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(r=>Eh(r)).join(","),n+="|ob:",n+=e.orderBy.map(r=>function(s){return s.field.canonicalString()+s.dir}(r)).join(","),Ql(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>xi(r)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>xi(r)).join(",")),e.ue=n}return e.ue}function Kd(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!JC(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!_E(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!gg(t.startAt,e.startAt)&&gg(t.endAt,e.endAt)}function wh(t){return H.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Co{constructor(e,n=null,r=[],i=[],s=null,o="F",l=null,u=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=i,this.limit=s,this.limitType=o,this.startAt=l,this.endAt=u,this.ce=null,this.le=null,this.he=null,this.startAt,this.endAt}}function lP(t,e,n,r,i,s,o,l){return new Co(t,e,n,r,i,s,o,l)}function Gd(t){return new Co(t)}function _g(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function wE(t){return t.collectionGroup!==null}function Ms(t){const e=X(t);if(e.ce===null){e.ce=[];const n=new Set;for(const s of e.explicitOrderBy)e.ce.push(s),n.add(s.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(o){let l=new ze(Ue.comparator);return o.filters.forEach(u=>{u.getFlattenedFilters().forEach(h=>{h.isInequality()&&(l=l.add(h.field))})}),l})(e).forEach(s=>{n.has(s.canonicalString())||s.isKeyField()||e.ce.push(new El(s,r))}),n.has(Ue.keyField().canonicalString())||e.ce.push(new El(Ue.keyField(),r))}return e.ce}function Qt(t){const e=X(t);return e.le||(e.le=uP(e,Ms(t))),e.le}function uP(t,e){if(t.limitType==="F")return yg(t.path,t.collectionGroup,e,t.filters,t.limit,t.startAt,t.endAt);{e=e.map(i=>{const s=i.dir==="desc"?"asc":"desc";return new El(i.field,s)});const n=t.endAt?new vl(t.endAt.position,t.endAt.inclusive):null,r=t.startAt?new vl(t.startAt.position,t.startAt.inclusive):null;return yg(t.path,t.collectionGroup,e,t.filters,t.limit,n,r)}}function Th(t,e){const n=t.filters.concat([e]);return new Co(t.path,t.collectionGroup,t.explicitOrderBy.slice(),n,t.limit,t.limitType,t.startAt,t.endAt)}function Ih(t,e,n){return new Co(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function Yl(t,e){return Kd(Qt(t),Qt(e))&&t.limitType===e.limitType}function TE(t){return`${qd(Qt(t))}|lt:${t.limitType}`}function Yr(t){return`Query(target=${function(n){let r=n.path.canonicalString();return n.collectionGroup!==null&&(r+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(r+=`, filters: [${n.filters.map(i=>vE(i)).join(", ")}]`),Ql(n.limit)||(r+=", limit: "+n.limit),n.orderBy.length>0&&(r+=`, orderBy: [${n.orderBy.map(i=>function(o){return`${o.field.canonicalString()} (${o.dir})`}(i)).join(", ")}]`),n.startAt&&(r+=", startAt: ",r+=n.startAt.inclusive?"b:":"a:",r+=n.startAt.position.map(i=>xi(i)).join(",")),n.endAt&&(r+=", endAt: ",r+=n.endAt.inclusive?"a:":"b:",r+=n.endAt.position.map(i=>xi(i)).join(",")),`Target(${r})`}(Qt(t))}; limitType=${t.limitType})`}function Xl(t,e){return e.isFoundDocument()&&function(r,i){const s=i.key.path;return r.collectionGroup!==null?i.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(s):H.isDocumentKey(r.path)?r.path.isEqual(s):r.path.isImmediateParentOf(s)}(t,e)&&function(r,i){for(const s of Ms(r))if(!s.field.isKeyField()&&i.data.field(s.field)===null)return!1;return!0}(t,e)&&function(r,i){for(const s of r.filters)if(!s.matches(i))return!1;return!0}(t,e)&&function(r,i){return!(r.startAt&&!function(o,l,u){const h=mg(o,l,u);return o.inclusive?h<=0:h<0}(r.startAt,Ms(r),i)||r.endAt&&!function(o,l,u){const h=mg(o,l,u);return o.inclusive?h>=0:h>0}(r.endAt,Ms(r),i))}(t,e)}function cP(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function IE(t){return(e,n)=>{let r=!1;for(const i of Ms(t)){const s=hP(i,e,n);if(s!==0)return s;r=r||i.field.isKeyField()}return 0}}function hP(t,e,n){const r=t.field.isKeyField()?H.comparator(e.key,n.key):function(s,o,l){const u=o.data.field(s),h=l.data.field(s);return u!==null&&h!==null?Di(u,h):G()}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return G()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $i{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r!==void 0){for(const[i,s]of r)if(this.equalsFn(i,e))return s}}has(e){return this.get(e)!==void 0}set(e,n){const r=this.mapKeyFn(e),i=this.inner[r];if(i===void 0)return this.inner[r]=[[e,n]],void this.innerSize++;for(let s=0;s<i.length;s++)if(this.equalsFn(i[s][0],e))return void(i[s]=[e,n]);i.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return!1;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],e))return r.length===1?delete this.inner[n]:r.splice(i,1),this.innerSize--,!0;return!1}forEach(e){$r(this.inner,(n,r)=>{for(const[i,s]of r)e(i,s)})}isEmpty(){return dE(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dP=new Ee(H.comparator);function In(){return dP}const SE=new Ee(H.comparator);function Ts(...t){let e=SE;for(const n of t)e=e.insert(n.key,n);return e}function AE(t){let e=SE;return t.forEach((n,r)=>e=e.insert(n,r.overlayedDocument)),e}function Sr(){return Fs()}function RE(){return Fs()}function Fs(){return new $i(t=>t.toString(),(t,e)=>t.isEqual(e))}const fP=new Ee(H.comparator),pP=new ze(H.comparator);function ee(...t){let e=pP;for(const n of t)e=e.add(n);return e}const mP=new ze(se);function gP(){return mP}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qd(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:_l(e)?"-0":e}}function CE(t){return{integerValue:""+t}}function yP(t,e){return KC(e)?CE(e):Qd(t,e)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jl{constructor(){this._=void 0}}function _P(t,e,n){return t instanceof co?function(i,s){const o={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:i.seconds,nanos:i.nanoseconds}}}};return s&&$d(s)&&(s=Wd(s)),s&&(o.fields.__previous_value__=s),{mapValue:o}}(n,e):t instanceof ho?kE(t,e):t instanceof fo?NE(t,e):function(i,s){const o=PE(i,s),l=vg(o)+vg(i.Pe);return vh(o)&&vh(i.Pe)?CE(l):Qd(i.serializer,l)}(t,e)}function vP(t,e,n){return t instanceof ho?kE(t,e):t instanceof fo?NE(t,e):n}function PE(t,e){return t instanceof wl?function(r){return vh(r)||function(s){return!!s&&"doubleValue"in s}(r)}(e)?e:{integerValue:0}:null}class co extends Jl{}class ho extends Jl{constructor(e){super(),this.elements=e}}function kE(t,e){const n=DE(e);for(const r of t.elements)n.some(i=>Xt(i,r))||n.push(r);return{arrayValue:{values:n}}}class fo extends Jl{constructor(e){super(),this.elements=e}}function NE(t,e){let n=DE(e);for(const r of t.elements)n=n.filter(i=>!Xt(i,r));return{arrayValue:{values:n}}}class wl extends Jl{constructor(e,n){super(),this.serializer=e,this.Pe=n}}function vg(t){return Se(t.integerValue||t.doubleValue)}function DE(t){return Hd(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class EP{constructor(e,n){this.field=e,this.transform=n}}function wP(t,e){return t.field.isEqual(e.field)&&function(r,i){return r instanceof ho&&i instanceof ho||r instanceof fo&&i instanceof fo?Ni(r.elements,i.elements,Xt):r instanceof wl&&i instanceof wl?Xt(r.Pe,i.Pe):r instanceof co&&i instanceof co}(t.transform,e.transform)}class TP{constructor(e,n){this.version=e,this.transformResults=n}}class Ut{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new Ut}static exists(e){return new Ut(void 0,e)}static updateTime(e){return new Ut(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Fa(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class Zl{}function xE(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new Yd(t.key,Ut.none()):new Po(t.key,t.data,Ut.none());{const n=t.data,r=lt.empty();let i=new ze(Ue.comparator);for(let s of e.fields)if(!i.has(s)){let o=n.field(s);o===null&&s.length>1&&(s=s.popLast(),o=n.field(s)),o===null?r.delete(s):r.set(s,o),i=i.add(s)}return new hr(t.key,r,new yt(i.toArray()),Ut.none())}}function IP(t,e,n){t instanceof Po?function(i,s,o){const l=i.value.clone(),u=wg(i.fieldTransforms,s,o.transformResults);l.setAll(u),s.convertToFoundDocument(o.version,l).setHasCommittedMutations()}(t,e,n):t instanceof hr?function(i,s,o){if(!Fa(i.precondition,s))return void s.convertToUnknownDocument(o.version);const l=wg(i.fieldTransforms,s,o.transformResults),u=s.data;u.setAll(VE(i)),u.setAll(l),s.convertToFoundDocument(o.version,u).setHasCommittedMutations()}(t,e,n):function(i,s,o){s.convertToNoDocument(o.version).setHasCommittedMutations()}(0,e,n)}function bs(t,e,n,r){return t instanceof Po?function(s,o,l,u){if(!Fa(s.precondition,o))return l;const h=s.value.clone(),f=Tg(s.fieldTransforms,u,o);return h.setAll(f),o.convertToFoundDocument(o.version,h).setHasLocalMutations(),null}(t,e,n,r):t instanceof hr?function(s,o,l,u){if(!Fa(s.precondition,o))return l;const h=Tg(s.fieldTransforms,u,o),f=o.data;return f.setAll(VE(s)),f.setAll(h),o.convertToFoundDocument(o.version,f).setHasLocalMutations(),l===null?null:l.unionWith(s.fieldMask.fields).unionWith(s.fieldTransforms.map(m=>m.field))}(t,e,n,r):function(s,o,l){return Fa(s.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):l}(t,e,n)}function SP(t,e){let n=null;for(const r of t.fieldTransforms){const i=e.data.field(r.field),s=PE(r.transform,i||null);s!=null&&(n===null&&(n=lt.empty()),n.set(r.field,s))}return n||null}function Eg(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(r,i){return r===void 0&&i===void 0||!(!r||!i)&&Ni(r,i,(s,o)=>wP(s,o))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class Po extends Zl{constructor(e,n,r,i=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class hr extends Zl{constructor(e,n,r,i,s=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=i,this.fieldTransforms=s,this.type=1}getFieldMask(){return this.fieldMask}}function VE(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}}),e}function wg(t,e,n){const r=new Map;ae(t.length===n.length);for(let i=0;i<n.length;i++){const s=t[i],o=s.transform,l=e.data.field(s.field);r.set(s.field,vP(o,l,n[i]))}return r}function Tg(t,e,n){const r=new Map;for(const i of t){const s=i.transform,o=n.data.field(i.field);r.set(i.field,_P(s,o,e))}return r}class Yd extends Zl{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class AP extends Zl{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class RP{constructor(e,n,r,i){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=i}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let i=0;i<this.mutations.length;i++){const s=this.mutations[i];s.key.isEqual(e.key)&&IP(s,e,r[i])}}applyToLocalView(e,n){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(n=bs(r,e,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(n=bs(r,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const r=RE();return this.mutations.forEach(i=>{const s=e.get(i.key),o=s.overlayedDocument;let l=this.applyToLocalView(o,s.mutatedFields);l=n.has(i.key)?null:l;const u=xE(o,l);u!==null&&r.set(i.key,u),o.isValidDocument()||o.convertToNoDocument(Y.min())}),r}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),ee())}isEqual(e){return this.batchId===e.batchId&&Ni(this.mutations,e.mutations,(n,r)=>Eg(n,r))&&Ni(this.baseMutations,e.baseMutations,(n,r)=>Eg(n,r))}}class Xd{constructor(e,n,r,i){this.batch=e,this.commitVersion=n,this.mutationResults=r,this.docVersions=i}static from(e,n,r){ae(e.mutations.length===r.length);let i=function(){return fP}();const s=e.mutations;for(let o=0;o<s.length;o++)i=i.insert(s[o].key,r[o].version);return new Xd(e,n,r,i)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class CP{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class PP{constructor(e,n){this.count=e,this.unchangedNames=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Re,ne;function kP(t){switch(t){default:return G();case L.CANCELLED:case L.UNKNOWN:case L.DEADLINE_EXCEEDED:case L.RESOURCE_EXHAUSTED:case L.INTERNAL:case L.UNAVAILABLE:case L.UNAUTHENTICATED:return!1;case L.INVALID_ARGUMENT:case L.NOT_FOUND:case L.ALREADY_EXISTS:case L.PERMISSION_DENIED:case L.FAILED_PRECONDITION:case L.ABORTED:case L.OUT_OF_RANGE:case L.UNIMPLEMENTED:case L.DATA_LOSS:return!0}}function OE(t){if(t===void 0)return Tn("GRPC error has no .code"),L.UNKNOWN;switch(t){case Re.OK:return L.OK;case Re.CANCELLED:return L.CANCELLED;case Re.UNKNOWN:return L.UNKNOWN;case Re.DEADLINE_EXCEEDED:return L.DEADLINE_EXCEEDED;case Re.RESOURCE_EXHAUSTED:return L.RESOURCE_EXHAUSTED;case Re.INTERNAL:return L.INTERNAL;case Re.UNAVAILABLE:return L.UNAVAILABLE;case Re.UNAUTHENTICATED:return L.UNAUTHENTICATED;case Re.INVALID_ARGUMENT:return L.INVALID_ARGUMENT;case Re.NOT_FOUND:return L.NOT_FOUND;case Re.ALREADY_EXISTS:return L.ALREADY_EXISTS;case Re.PERMISSION_DENIED:return L.PERMISSION_DENIED;case Re.FAILED_PRECONDITION:return L.FAILED_PRECONDITION;case Re.ABORTED:return L.ABORTED;case Re.OUT_OF_RANGE:return L.OUT_OF_RANGE;case Re.UNIMPLEMENTED:return L.UNIMPLEMENTED;case Re.DATA_LOSS:return L.DATA_LOSS;default:return G()}}(ne=Re||(Re={}))[ne.OK=0]="OK",ne[ne.CANCELLED=1]="CANCELLED",ne[ne.UNKNOWN=2]="UNKNOWN",ne[ne.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",ne[ne.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",ne[ne.NOT_FOUND=5]="NOT_FOUND",ne[ne.ALREADY_EXISTS=6]="ALREADY_EXISTS",ne[ne.PERMISSION_DENIED=7]="PERMISSION_DENIED",ne[ne.UNAUTHENTICATED=16]="UNAUTHENTICATED",ne[ne.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",ne[ne.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",ne[ne.ABORTED=10]="ABORTED",ne[ne.OUT_OF_RANGE=11]="OUT_OF_RANGE",ne[ne.UNIMPLEMENTED=12]="UNIMPLEMENTED",ne[ne.INTERNAL=13]="INTERNAL",ne[ne.UNAVAILABLE=14]="UNAVAILABLE",ne[ne.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function NP(){return new TextEncoder}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const DP=new Cr([4294967295,4294967295],0);function Ig(t){const e=NP().encode(t),n=new iE;return n.update(e),new Uint8Array(n.digest())}function Sg(t){const e=new DataView(t.buffer),n=e.getUint32(0,!0),r=e.getUint32(4,!0),i=e.getUint32(8,!0),s=e.getUint32(12,!0);return[new Cr([n,r],0),new Cr([i,s],0)]}class Jd{constructor(e,n,r){if(this.bitmap=e,this.padding=n,this.hashCount=r,n<0||n>=8)throw new Is(`Invalid padding: ${n}`);if(r<0)throw new Is(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new Is(`Invalid hash count: ${r}`);if(e.length===0&&n!==0)throw new Is(`Invalid padding when bitmap length is 0: ${n}`);this.Ie=8*e.length-n,this.Te=Cr.fromNumber(this.Ie)}Ee(e,n,r){let i=e.add(n.multiply(Cr.fromNumber(r)));return i.compare(DP)===1&&(i=new Cr([i.getBits(0),i.getBits(1)],0)),i.modulo(this.Te).toNumber()}de(e){return(this.bitmap[Math.floor(e/8)]&1<<e%8)!=0}mightContain(e){if(this.Ie===0)return!1;const n=Ig(e),[r,i]=Sg(n);for(let s=0;s<this.hashCount;s++){const o=this.Ee(r,i,s);if(!this.de(o))return!1}return!0}static create(e,n,r){const i=e%8==0?0:8-e%8,s=new Uint8Array(Math.ceil(e/8)),o=new Jd(s,i,n);return r.forEach(l=>o.insert(l)),o}insert(e){if(this.Ie===0)return;const n=Ig(e),[r,i]=Sg(n);for(let s=0;s<this.hashCount;s++){const o=this.Ee(r,i,s);this.Ae(o)}}Ae(e){const n=Math.floor(e/8),r=e%8;this.bitmap[n]|=1<<r}}class Is extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eu{constructor(e,n,r,i,s){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=i,this.resolvedLimboDocuments=s}static createSynthesizedRemoteEventForCurrentChange(e,n,r){const i=new Map;return i.set(e,ko.createSynthesizedTargetChangeForCurrentChange(e,n,r)),new eu(Y.min(),i,new Ee(se),In(),ee())}}class ko{constructor(e,n,r,i,s){this.resumeToken=e,this.current=n,this.addedDocuments=r,this.modifiedDocuments=i,this.removedDocuments=s}static createSynthesizedTargetChangeForCurrentChange(e,n,r){return new ko(r,n,ee(),ee(),ee())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ba{constructor(e,n,r,i){this.Re=e,this.removedTargetIds=n,this.key=r,this.Ve=i}}class LE{constructor(e,n){this.targetId=e,this.me=n}}class ME{constructor(e,n,r=$e.EMPTY_BYTE_STRING,i=null){this.state=e,this.targetIds=n,this.resumeToken=r,this.cause=i}}class Ag{constructor(){this.fe=0,this.ge=Cg(),this.pe=$e.EMPTY_BYTE_STRING,this.ye=!1,this.we=!0}get current(){return this.ye}get resumeToken(){return this.pe}get Se(){return this.fe!==0}get be(){return this.we}De(e){e.approximateByteSize()>0&&(this.we=!0,this.pe=e)}ve(){let e=ee(),n=ee(),r=ee();return this.ge.forEach((i,s)=>{switch(s){case 0:e=e.add(i);break;case 2:n=n.add(i);break;case 1:r=r.add(i);break;default:G()}}),new ko(this.pe,this.ye,e,n,r)}Ce(){this.we=!1,this.ge=Cg()}Fe(e,n){this.we=!0,this.ge=this.ge.insert(e,n)}Me(e){this.we=!0,this.ge=this.ge.remove(e)}xe(){this.fe+=1}Oe(){this.fe-=1,ae(this.fe>=0)}Ne(){this.we=!0,this.ye=!0}}class xP{constructor(e){this.Le=e,this.Be=new Map,this.ke=In(),this.qe=Rg(),this.Qe=new Ee(se)}Ke(e){for(const n of e.Re)e.Ve&&e.Ve.isFoundDocument()?this.$e(n,e.Ve):this.Ue(n,e.key,e.Ve);for(const n of e.removedTargetIds)this.Ue(n,e.key,e.Ve)}We(e){this.forEachTarget(e,n=>{const r=this.Ge(n);switch(e.state){case 0:this.ze(n)&&r.De(e.resumeToken);break;case 1:r.Oe(),r.Se||r.Ce(),r.De(e.resumeToken);break;case 2:r.Oe(),r.Se||this.removeTarget(n);break;case 3:this.ze(n)&&(r.Ne(),r.De(e.resumeToken));break;case 4:this.ze(n)&&(this.je(n),r.De(e.resumeToken));break;default:G()}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.Be.forEach((r,i)=>{this.ze(i)&&n(i)})}He(e){const n=e.targetId,r=e.me.count,i=this.Je(n);if(i){const s=i.target;if(wh(s))if(r===0){const o=new H(s.path);this.Ue(n,o,Je.newNoDocument(o,Y.min()))}else ae(r===1);else{const o=this.Ye(n);if(o!==r){const l=this.Ze(e),u=l?this.Xe(l,e,o):1;if(u!==0){this.je(n);const h=u===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Qe=this.Qe.insert(n,h)}}}}}Ze(e){const n=e.me.unchangedNames;if(!n||!n.bits)return null;const{bits:{bitmap:r="",padding:i=0},hashCount:s=0}=n;let o,l;try{o=Ur(r).toUint8Array()}catch(u){if(u instanceof fE)return ki("Decoding the base64 bloom filter in existence filter failed ("+u.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw u}try{l=new Jd(o,i,s)}catch(u){return ki(u instanceof Is?"BloomFilter error: ":"Applying bloom filter failed: ",u),null}return l.Ie===0?null:l}Xe(e,n,r){return n.me.count===r-this.nt(e,n.targetId)?0:2}nt(e,n){const r=this.Le.getRemoteKeysForTarget(n);let i=0;return r.forEach(s=>{const o=this.Le.tt(),l=`projects/${o.projectId}/databases/${o.database}/documents/${s.path.canonicalString()}`;e.mightContain(l)||(this.Ue(n,s,null),i++)}),i}rt(e){const n=new Map;this.Be.forEach((s,o)=>{const l=this.Je(o);if(l){if(s.current&&wh(l.target)){const u=new H(l.target.path);this.ke.get(u)!==null||this.it(o,u)||this.Ue(o,u,Je.newNoDocument(u,e))}s.be&&(n.set(o,s.ve()),s.Ce())}});let r=ee();this.qe.forEach((s,o)=>{let l=!0;o.forEachWhile(u=>{const h=this.Je(u);return!h||h.purpose==="TargetPurposeLimboResolution"||(l=!1,!1)}),l&&(r=r.add(s))}),this.ke.forEach((s,o)=>o.setReadTime(e));const i=new eu(e,n,this.Qe,this.ke,r);return this.ke=In(),this.qe=Rg(),this.Qe=new Ee(se),i}$e(e,n){if(!this.ze(e))return;const r=this.it(e,n.key)?2:0;this.Ge(e).Fe(n.key,r),this.ke=this.ke.insert(n.key,n),this.qe=this.qe.insert(n.key,this.st(n.key).add(e))}Ue(e,n,r){if(!this.ze(e))return;const i=this.Ge(e);this.it(e,n)?i.Fe(n,1):i.Me(n),this.qe=this.qe.insert(n,this.st(n).delete(e)),r&&(this.ke=this.ke.insert(n,r))}removeTarget(e){this.Be.delete(e)}Ye(e){const n=this.Ge(e).ve();return this.Le.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}xe(e){this.Ge(e).xe()}Ge(e){let n=this.Be.get(e);return n||(n=new Ag,this.Be.set(e,n)),n}st(e){let n=this.qe.get(e);return n||(n=new ze(se),this.qe=this.qe.insert(e,n)),n}ze(e){const n=this.Je(e)!==null;return n||W("WatchChangeAggregator","Detected inactive target",e),n}Je(e){const n=this.Be.get(e);return n&&n.Se?null:this.Le.ot(e)}je(e){this.Be.set(e,new Ag),this.Le.getRemoteKeysForTarget(e).forEach(n=>{this.Ue(e,n,null)})}it(e,n){return this.Le.getRemoteKeysForTarget(e).has(n)}}function Rg(){return new Ee(H.comparator)}function Cg(){return new Ee(H.comparator)}const VP={asc:"ASCENDING",desc:"DESCENDING"},OP={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},LP={and:"AND",or:"OR"};class MP{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function Sh(t,e){return t.useProto3Json||Ql(e)?e:{value:e}}function Tl(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function FE(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function FP(t,e){return Tl(t,e.toTimestamp())}function Yt(t){return ae(!!t),Y.fromTimestamp(function(n){const r=rr(n);return new De(r.seconds,r.nanos)}(t))}function Zd(t,e){return Ah(t,e).canonicalString()}function Ah(t,e){const n=function(i){return new fe(["projects",i.projectId,"databases",i.database])}(t).child("documents");return e===void 0?n:n.child(e)}function bE(t){const e=fe.fromString(t);return ae($E(e)),e}function Rh(t,e){return Zd(t.databaseId,e.path)}function hc(t,e){const n=bE(e);if(n.get(1)!==t.databaseId.projectId)throw new $(L.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new $(L.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new H(jE(n))}function UE(t,e){return Zd(t.databaseId,e)}function bP(t){const e=bE(t);return e.length===4?fe.emptyPath():jE(e)}function Ch(t){return new fe(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function jE(t){return ae(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function Pg(t,e,n){return{name:Rh(t,e),fields:n.value.mapValue.fields}}function UP(t,e){let n;if("targetChange"in e){e.targetChange;const r=function(h){return h==="NO_CHANGE"?0:h==="ADD"?1:h==="REMOVE"?2:h==="CURRENT"?3:h==="RESET"?4:G()}(e.targetChange.targetChangeType||"NO_CHANGE"),i=e.targetChange.targetIds||[],s=function(h,f){return h.useProto3Json?(ae(f===void 0||typeof f=="string"),$e.fromBase64String(f||"")):(ae(f===void 0||f instanceof Buffer||f instanceof Uint8Array),$e.fromUint8Array(f||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,l=o&&function(h){const f=h.code===void 0?L.UNKNOWN:OE(h.code);return new $(f,h.message||"")}(o);n=new ME(r,i,s,l||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const i=hc(t,r.document.name),s=Yt(r.document.updateTime),o=r.document.createTime?Yt(r.document.createTime):Y.min(),l=new lt({mapValue:{fields:r.document.fields}}),u=Je.newFoundDocument(i,s,o,l),h=r.targetIds||[],f=r.removedTargetIds||[];n=new ba(h,f,u.key,u)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const i=hc(t,r.document),s=r.readTime?Yt(r.readTime):Y.min(),o=Je.newNoDocument(i,s),l=r.removedTargetIds||[];n=new ba([],l,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const i=hc(t,r.document),s=r.removedTargetIds||[];n=new ba([],s,i,null)}else{if(!("filter"in e))return G();{e.filter;const r=e.filter;r.targetId;const{count:i=0,unchangedNames:s}=r,o=new PP(i,s),l=r.targetId;n=new LE(l,o)}}return n}function jP(t,e){let n;if(e instanceof Po)n={update:Pg(t,e.key,e.value)};else if(e instanceof Yd)n={delete:Rh(t,e.key)};else if(e instanceof hr)n={update:Pg(t,e.key,e.data),updateMask:QP(e.fieldMask)};else{if(!(e instanceof AP))return G();n={verify:Rh(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(r=>function(s,o){const l=o.transform;if(l instanceof co)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(l instanceof ho)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:l.elements}};if(l instanceof fo)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:l.elements}};if(l instanceof wl)return{fieldPath:o.field.canonicalString(),increment:l.Pe};throw G()}(0,r))),e.precondition.isNone||(n.currentDocument=function(i,s){return s.updateTime!==void 0?{updateTime:FP(i,s.updateTime)}:s.exists!==void 0?{exists:s.exists}:G()}(t,e.precondition)),n}function zP(t,e){return t&&t.length>0?(ae(e!==void 0),t.map(n=>function(i,s){let o=i.updateTime?Yt(i.updateTime):Yt(s);return o.isEqual(Y.min())&&(o=Yt(s)),new TP(o,i.transformResults||[])}(n,e))):[]}function BP(t,e){return{documents:[UE(t,e.path)]}}function $P(t,e){const n={structuredQuery:{}},r=e.path;let i;e.collectionGroup!==null?(i=r,n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(i=r.popLast(),n.structuredQuery.from=[{collectionId:r.lastSegment()}]),n.parent=UE(t,i);const s=function(h){if(h.length!==0)return BE(zt.create(h,"and"))}(e.filters);s&&(n.structuredQuery.where=s);const o=function(h){if(h.length!==0)return h.map(f=>function(g){return{field:Xr(g.field),direction:qP(g.dir)}}(f))}(e.orderBy);o&&(n.structuredQuery.orderBy=o);const l=Sh(t,e.limit);return l!==null&&(n.structuredQuery.limit=l),e.startAt&&(n.structuredQuery.startAt=function(h){return{before:h.inclusive,values:h.position}}(e.startAt)),e.endAt&&(n.structuredQuery.endAt=function(h){return{before:!h.inclusive,values:h.position}}(e.endAt)),{_t:n,parent:i}}function WP(t){let e=bP(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let i=null;if(r>0){ae(r===1);const f=n.from[0];f.allDescendants?i=f.collectionId:e=e.child(f.collectionId)}let s=[];n.where&&(s=function(m){const g=zE(m);return g instanceof zt&&yE(g)?g.getFilters():[g]}(n.where));let o=[];n.orderBy&&(o=function(m){return m.map(g=>function(C){return new El(Jr(C.field),function(O){switch(O){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(C.direction))}(g))}(n.orderBy));let l=null;n.limit&&(l=function(m){let g;return g=typeof m=="object"?m.value:m,Ql(g)?null:g}(n.limit));let u=null;n.startAt&&(u=function(m){const g=!!m.before,S=m.values||[];return new vl(S,g)}(n.startAt));let h=null;return n.endAt&&(h=function(m){const g=!m.before,S=m.values||[];return new vl(S,g)}(n.endAt)),lP(e,i,o,s,l,"F",u,h)}function HP(t,e){const n=function(i){switch(i){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return G()}}(e.purpose);return n==null?null:{"goog-listen-tags":n}}function zE(t){return t.unaryFilter!==void 0?function(n){switch(n.unaryFilter.op){case"IS_NAN":const r=Jr(n.unaryFilter.field);return Pe.create(r,"==",{doubleValue:NaN});case"IS_NULL":const i=Jr(n.unaryFilter.field);return Pe.create(i,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const s=Jr(n.unaryFilter.field);return Pe.create(s,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=Jr(n.unaryFilter.field);return Pe.create(o,"!=",{nullValue:"NULL_VALUE"});default:return G()}}(t):t.fieldFilter!==void 0?function(n){return Pe.create(Jr(n.fieldFilter.field),function(i){switch(i){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return G()}}(n.fieldFilter.op),n.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(n){return zt.create(n.compositeFilter.filters.map(r=>zE(r)),function(i){switch(i){case"AND":return"and";case"OR":return"or";default:return G()}}(n.compositeFilter.op))}(t):G()}function qP(t){return VP[t]}function KP(t){return OP[t]}function GP(t){return LP[t]}function Xr(t){return{fieldPath:t.canonicalString()}}function Jr(t){return Ue.fromServerFormat(t.fieldPath)}function BE(t){return t instanceof Pe?function(n){if(n.op==="=="){if(pg(n.value))return{unaryFilter:{field:Xr(n.field),op:"IS_NAN"}};if(fg(n.value))return{unaryFilter:{field:Xr(n.field),op:"IS_NULL"}}}else if(n.op==="!="){if(pg(n.value))return{unaryFilter:{field:Xr(n.field),op:"IS_NOT_NAN"}};if(fg(n.value))return{unaryFilter:{field:Xr(n.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Xr(n.field),op:KP(n.op),value:n.value}}}(t):t instanceof zt?function(n){const r=n.getFilters().map(i=>BE(i));return r.length===1?r[0]:{compositeFilter:{op:GP(n.op),filters:r}}}(t):G()}function QP(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function $E(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jn{constructor(e,n,r,i,s=Y.min(),o=Y.min(),l=$e.EMPTY_BYTE_STRING,u=null){this.target=e,this.targetId=n,this.purpose=r,this.sequenceNumber=i,this.snapshotVersion=s,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=l,this.expectedCount=u}withSequenceNumber(e){return new jn(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,n){return new jn(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new jn(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new jn(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class YP{constructor(e){this.ct=e}}function XP(t){const e=WP({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?Ih(e,e.limit,"L"):e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class JP{constructor(){this.un=new ZP}addToCollectionParentIndex(e,n){return this.un.add(n),M.resolve()}getCollectionParents(e,n){return M.resolve(this.un.getEntries(n))}addFieldIndex(e,n){return M.resolve()}deleteFieldIndex(e,n){return M.resolve()}deleteAllFieldIndexes(e){return M.resolve()}createTargetIndexes(e,n){return M.resolve()}getDocumentsMatchingTarget(e,n){return M.resolve(null)}getIndexType(e,n){return M.resolve(0)}getFieldIndexes(e,n){return M.resolve([])}getNextCollectionGroupToUpdate(e){return M.resolve(null)}getMinOffset(e,n){return M.resolve(nr.min())}getMinOffsetFromCollectionGroup(e,n){return M.resolve(nr.min())}updateCollectionGroup(e,n,r){return M.resolve()}updateIndexEntries(e,n){return M.resolve()}}class ZP{constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n]||new ze(fe.comparator),s=!i.has(r);return this.index[n]=i.add(r),s}has(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n];return i&&i.has(r)}getEntries(e){return(this.index[e]||new ze(fe.comparator)).toArray()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vi{constructor(e){this.Ln=e}next(){return this.Ln+=2,this.Ln}static Bn(){return new Vi(0)}static kn(){return new Vi(-1)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ek{constructor(){this.changes=new $i(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,Je.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?M.resolve(r):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tk{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nk{constructor(e,n,r,i){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=i}getDocument(e,n){let r=null;return this.documentOverlayCache.getOverlay(e,n).next(i=>(r=i,this.remoteDocumentCache.getEntry(e,n))).next(i=>(r!==null&&bs(r.mutation,i,yt.empty(),De.now()),i))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.getLocalViewOfDocuments(e,r,ee()).next(()=>r))}getLocalViewOfDocuments(e,n,r=ee()){const i=Sr();return this.populateOverlays(e,i,n).next(()=>this.computeViews(e,n,i,r).next(s=>{let o=Ts();return s.forEach((l,u)=>{o=o.insert(l,u.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const r=Sr();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,ee()))}populateOverlays(e,n,r){const i=[];return r.forEach(s=>{n.has(s)||i.push(s)}),this.documentOverlayCache.getOverlays(e,i).next(s=>{s.forEach((o,l)=>{n.set(o,l)})})}computeViews(e,n,r,i){let s=In();const o=Fs(),l=function(){return Fs()}();return n.forEach((u,h)=>{const f=r.get(h.key);i.has(h.key)&&(f===void 0||f.mutation instanceof hr)?s=s.insert(h.key,h):f!==void 0?(o.set(h.key,f.mutation.getFieldMask()),bs(f.mutation,h,f.mutation.getFieldMask(),De.now())):o.set(h.key,yt.empty())}),this.recalculateAndSaveOverlays(e,s).next(u=>(u.forEach((h,f)=>o.set(h,f)),n.forEach((h,f)=>{var m;return l.set(h,new tk(f,(m=o.get(h))!==null&&m!==void 0?m:null))}),l))}recalculateAndSaveOverlays(e,n){const r=Fs();let i=new Ee((o,l)=>o-l),s=ee();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const l of o)l.keys().forEach(u=>{const h=n.get(u);if(h===null)return;let f=r.get(u)||yt.empty();f=l.applyToLocalView(h,f),r.set(u,f);const m=(i.get(l.batchId)||ee()).add(u);i=i.insert(l.batchId,m)})}).next(()=>{const o=[],l=i.getReverseIterator();for(;l.hasNext();){const u=l.getNext(),h=u.key,f=u.value,m=RE();f.forEach(g=>{if(!s.has(g)){const S=xE(n.get(g),r.get(g));S!==null&&m.set(g,S),s=s.add(g)}}),o.push(this.documentOverlayCache.saveOverlays(e,h,m))}return M.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,n,r,i){return function(o){return H.isDocumentKey(o.path)&&o.collectionGroup===null&&o.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):wE(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,r,i):this.getDocumentsMatchingCollectionQuery(e,n,r,i)}getNextDocuments(e,n,r,i){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,r,i).next(s=>{const o=i-s.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,r.largestBatchId,i-s.size):M.resolve(Sr());let l=-1,u=s;return o.next(h=>M.forEach(h,(f,m)=>(l<m.largestBatchId&&(l=m.largestBatchId),s.get(f)?M.resolve():this.remoteDocumentCache.getEntry(e,f).next(g=>{u=u.insert(f,g)}))).next(()=>this.populateOverlays(e,h,s)).next(()=>this.computeViews(e,u,h,ee())).next(f=>({batchId:l,changes:AE(f)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new H(n)).next(r=>{let i=Ts();return r.isFoundDocument()&&(i=i.insert(r.key,r)),i})}getDocumentsMatchingCollectionGroupQuery(e,n,r,i){const s=n.collectionGroup;let o=Ts();return this.indexManager.getCollectionParents(e,s).next(l=>M.forEach(l,u=>{const h=function(m,g){return new Co(g,null,m.explicitOrderBy.slice(),m.filters.slice(),m.limit,m.limitType,m.startAt,m.endAt)}(n,u.child(s));return this.getDocumentsMatchingCollectionQuery(e,h,r,i).next(f=>{f.forEach((m,g)=>{o=o.insert(m,g)})})}).next(()=>o))}getDocumentsMatchingCollectionQuery(e,n,r,i){let s;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,r.largestBatchId).next(o=>(s=o,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,r,s,i))).next(o=>{s.forEach((u,h)=>{const f=h.getKey();o.get(f)===null&&(o=o.insert(f,Je.newInvalidDocument(f)))});let l=Ts();return o.forEach((u,h)=>{const f=s.get(u);f!==void 0&&bs(f.mutation,h,yt.empty(),De.now()),Xl(n,h)&&(l=l.insert(u,h))}),l})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rk{constructor(e){this.serializer=e,this.hr=new Map,this.Pr=new Map}getBundleMetadata(e,n){return M.resolve(this.hr.get(n))}saveBundleMetadata(e,n){return this.hr.set(n.id,function(i){return{id:i.id,version:i.version,createTime:Yt(i.createTime)}}(n)),M.resolve()}getNamedQuery(e,n){return M.resolve(this.Pr.get(n))}saveNamedQuery(e,n){return this.Pr.set(n.name,function(i){return{name:i.name,query:XP(i.bundledQuery),readTime:Yt(i.readTime)}}(n)),M.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ik{constructor(){this.overlays=new Ee(H.comparator),this.Ir=new Map}getOverlay(e,n){return M.resolve(this.overlays.get(n))}getOverlays(e,n){const r=Sr();return M.forEach(n,i=>this.getOverlay(e,i).next(s=>{s!==null&&r.set(i,s)})).next(()=>r)}saveOverlays(e,n,r){return r.forEach((i,s)=>{this.ht(e,n,s)}),M.resolve()}removeOverlaysForBatchId(e,n,r){const i=this.Ir.get(r);return i!==void 0&&(i.forEach(s=>this.overlays=this.overlays.remove(s)),this.Ir.delete(r)),M.resolve()}getOverlaysForCollection(e,n,r){const i=Sr(),s=n.length+1,o=new H(n.child("")),l=this.overlays.getIteratorFrom(o);for(;l.hasNext();){const u=l.getNext().value,h=u.getKey();if(!n.isPrefixOf(h.path))break;h.path.length===s&&u.largestBatchId>r&&i.set(u.getKey(),u)}return M.resolve(i)}getOverlaysForCollectionGroup(e,n,r,i){let s=new Ee((h,f)=>h-f);const o=this.overlays.getIterator();for(;o.hasNext();){const h=o.getNext().value;if(h.getKey().getCollectionGroup()===n&&h.largestBatchId>r){let f=s.get(h.largestBatchId);f===null&&(f=Sr(),s=s.insert(h.largestBatchId,f)),f.set(h.getKey(),h)}}const l=Sr(),u=s.getIterator();for(;u.hasNext()&&(u.getNext().value.forEach((h,f)=>l.set(h,f)),!(l.size()>=i)););return M.resolve(l)}ht(e,n,r){const i=this.overlays.get(r.key);if(i!==null){const o=this.Ir.get(i.largestBatchId).delete(r.key);this.Ir.set(i.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new CP(n,r));let s=this.Ir.get(n);s===void 0&&(s=ee(),this.Ir.set(n,s)),this.Ir.set(n,s.add(r.key))}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sk{constructor(){this.sessionToken=$e.EMPTY_BYTE_STRING}getSessionToken(e){return M.resolve(this.sessionToken)}setSessionToken(e,n){return this.sessionToken=n,M.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ef{constructor(){this.Tr=new ze(Ve.Er),this.dr=new ze(Ve.Ar)}isEmpty(){return this.Tr.isEmpty()}addReference(e,n){const r=new Ve(e,n);this.Tr=this.Tr.add(r),this.dr=this.dr.add(r)}Rr(e,n){e.forEach(r=>this.addReference(r,n))}removeReference(e,n){this.Vr(new Ve(e,n))}mr(e,n){e.forEach(r=>this.removeReference(r,n))}gr(e){const n=new H(new fe([])),r=new Ve(n,e),i=new Ve(n,e+1),s=[];return this.dr.forEachInRange([r,i],o=>{this.Vr(o),s.push(o.key)}),s}pr(){this.Tr.forEach(e=>this.Vr(e))}Vr(e){this.Tr=this.Tr.delete(e),this.dr=this.dr.delete(e)}yr(e){const n=new H(new fe([])),r=new Ve(n,e),i=new Ve(n,e+1);let s=ee();return this.dr.forEachInRange([r,i],o=>{s=s.add(o.key)}),s}containsKey(e){const n=new Ve(e,0),r=this.Tr.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class Ve{constructor(e,n){this.key=e,this.wr=n}static Er(e,n){return H.comparator(e.key,n.key)||se(e.wr,n.wr)}static Ar(e,n){return se(e.wr,n.wr)||H.comparator(e.key,n.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ok{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.Sr=1,this.br=new ze(Ve.Er)}checkEmpty(e){return M.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,r,i){const s=this.Sr;this.Sr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new RP(s,n,r,i);this.mutationQueue.push(o);for(const l of i)this.br=this.br.add(new Ve(l.key,s)),this.indexManager.addToCollectionParentIndex(e,l.key.path.popLast());return M.resolve(o)}lookupMutationBatch(e,n){return M.resolve(this.Dr(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,i=this.vr(r),s=i<0?0:i;return M.resolve(this.mutationQueue.length>s?this.mutationQueue[s]:null)}getHighestUnacknowledgedBatchId(){return M.resolve(this.mutationQueue.length===0?-1:this.Sr-1)}getAllMutationBatches(e){return M.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new Ve(n,0),i=new Ve(n,Number.POSITIVE_INFINITY),s=[];return this.br.forEachInRange([r,i],o=>{const l=this.Dr(o.wr);s.push(l)}),M.resolve(s)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new ze(se);return n.forEach(i=>{const s=new Ve(i,0),o=new Ve(i,Number.POSITIVE_INFINITY);this.br.forEachInRange([s,o],l=>{r=r.add(l.wr)})}),M.resolve(this.Cr(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,i=r.length+1;let s=r;H.isDocumentKey(s)||(s=s.child(""));const o=new Ve(new H(s),0);let l=new ze(se);return this.br.forEachWhile(u=>{const h=u.key.path;return!!r.isPrefixOf(h)&&(h.length===i&&(l=l.add(u.wr)),!0)},o),M.resolve(this.Cr(l))}Cr(e){const n=[];return e.forEach(r=>{const i=this.Dr(r);i!==null&&n.push(i)}),n}removeMutationBatch(e,n){ae(this.Fr(n.batchId,"removed")===0),this.mutationQueue.shift();let r=this.br;return M.forEach(n.mutations,i=>{const s=new Ve(i.key,n.batchId);return r=r.delete(s),this.referenceDelegate.markPotentiallyOrphaned(e,i.key)}).next(()=>{this.br=r})}On(e){}containsKey(e,n){const r=new Ve(n,0),i=this.br.firstAfterOrEqual(r);return M.resolve(n.isEqual(i&&i.key))}performConsistencyCheck(e){return this.mutationQueue.length,M.resolve()}Fr(e,n){return this.vr(e)}vr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Dr(e){const n=this.vr(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ak{constructor(e){this.Mr=e,this.docs=function(){return new Ee(H.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const r=n.key,i=this.docs.get(r),s=i?i.size:0,o=this.Mr(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:o}),this.size+=o-s,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return M.resolve(r?r.document.mutableCopy():Je.newInvalidDocument(n))}getEntries(e,n){let r=In();return n.forEach(i=>{const s=this.docs.get(i);r=r.insert(i,s?s.document.mutableCopy():Je.newInvalidDocument(i))}),M.resolve(r)}getDocumentsMatchingQuery(e,n,r,i){let s=In();const o=n.path,l=new H(o.child("")),u=this.docs.getIteratorFrom(l);for(;u.hasNext();){const{key:h,value:{document:f}}=u.getNext();if(!o.isPrefixOf(h.path))break;h.path.length>o.length+1||$C(BC(f),r)<=0||(i.has(f.key)||Xl(n,f))&&(s=s.insert(f.key,f.mutableCopy()))}return M.resolve(s)}getAllFromCollectionGroup(e,n,r,i){G()}Or(e,n){return M.forEach(this.docs,r=>n(r))}newChangeBuffer(e){return new lk(this)}getSize(e){return M.resolve(this.size)}}class lk extends ek{constructor(e){super(),this.cr=e}applyChanges(e){const n=[];return this.changes.forEach((r,i)=>{i.isValidDocument()?n.push(this.cr.addEntry(e,i)):this.cr.removeEntry(r)}),M.waitFor(n)}getFromCache(e,n){return this.cr.getEntry(e,n)}getAllFromCache(e,n){return this.cr.getEntries(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uk{constructor(e){this.persistence=e,this.Nr=new $i(n=>qd(n),Kd),this.lastRemoteSnapshotVersion=Y.min(),this.highestTargetId=0,this.Lr=0,this.Br=new ef,this.targetCount=0,this.kr=Vi.Bn()}forEachTarget(e,n){return this.Nr.forEach((r,i)=>n(i)),M.resolve()}getLastRemoteSnapshotVersion(e){return M.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return M.resolve(this.Lr)}allocateTargetId(e){return this.highestTargetId=this.kr.next(),M.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.Lr&&(this.Lr=n),M.resolve()}Kn(e){this.Nr.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.kr=new Vi(n),this.highestTargetId=n),e.sequenceNumber>this.Lr&&(this.Lr=e.sequenceNumber)}addTargetData(e,n){return this.Kn(n),this.targetCount+=1,M.resolve()}updateTargetData(e,n){return this.Kn(n),M.resolve()}removeTargetData(e,n){return this.Nr.delete(n.target),this.Br.gr(n.targetId),this.targetCount-=1,M.resolve()}removeTargets(e,n,r){let i=0;const s=[];return this.Nr.forEach((o,l)=>{l.sequenceNumber<=n&&r.get(l.targetId)===null&&(this.Nr.delete(o),s.push(this.removeMatchingKeysForTargetId(e,l.targetId)),i++)}),M.waitFor(s).next(()=>i)}getTargetCount(e){return M.resolve(this.targetCount)}getTargetData(e,n){const r=this.Nr.get(n)||null;return M.resolve(r)}addMatchingKeys(e,n,r){return this.Br.Rr(n,r),M.resolve()}removeMatchingKeys(e,n,r){this.Br.mr(n,r);const i=this.persistence.referenceDelegate,s=[];return i&&n.forEach(o=>{s.push(i.markPotentiallyOrphaned(e,o))}),M.waitFor(s)}removeMatchingKeysForTargetId(e,n){return this.Br.gr(n),M.resolve()}getMatchingKeysForTargetId(e,n){const r=this.Br.yr(n);return M.resolve(r)}containsKey(e,n){return M.resolve(this.Br.containsKey(n))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ck{constructor(e,n){this.qr={},this.overlays={},this.Qr=new Bd(0),this.Kr=!1,this.Kr=!0,this.$r=new sk,this.referenceDelegate=e(this),this.Ur=new uk(this),this.indexManager=new JP,this.remoteDocumentCache=function(i){return new ak(i)}(r=>this.referenceDelegate.Wr(r)),this.serializer=new YP(n),this.Gr=new rk(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.Kr=!1,Promise.resolve()}get started(){return this.Kr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new ik,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let r=this.qr[e.toKey()];return r||(r=new ok(n,this.referenceDelegate),this.qr[e.toKey()]=r),r}getGlobalsCache(){return this.$r}getTargetCache(){return this.Ur}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Gr}runTransaction(e,n,r){W("MemoryPersistence","Starting transaction:",e);const i=new hk(this.Qr.next());return this.referenceDelegate.zr(),r(i).next(s=>this.referenceDelegate.jr(i).next(()=>s)).toPromise().then(s=>(i.raiseOnCommittedEvent(),s))}Hr(e,n){return M.or(Object.values(this.qr).map(r=>()=>r.containsKey(e,n)))}}class hk extends HC{constructor(e){super(),this.currentSequenceNumber=e}}class tf{constructor(e){this.persistence=e,this.Jr=new ef,this.Yr=null}static Zr(e){return new tf(e)}get Xr(){if(this.Yr)return this.Yr;throw G()}addReference(e,n,r){return this.Jr.addReference(r,n),this.Xr.delete(r.toString()),M.resolve()}removeReference(e,n,r){return this.Jr.removeReference(r,n),this.Xr.add(r.toString()),M.resolve()}markPotentiallyOrphaned(e,n){return this.Xr.add(n.toString()),M.resolve()}removeTarget(e,n){this.Jr.gr(n.targetId).forEach(i=>this.Xr.add(i.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next(i=>{i.forEach(s=>this.Xr.add(s.toString()))}).next(()=>r.removeTargetData(e,n))}zr(){this.Yr=new Set}jr(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return M.forEach(this.Xr,r=>{const i=H.fromPath(r);return this.ei(e,i).next(s=>{s||n.removeEntry(i,Y.min())})}).next(()=>(this.Yr=null,n.apply(e)))}updateLimboDocument(e,n){return this.ei(e,n).next(r=>{r?this.Xr.delete(n.toString()):this.Xr.add(n.toString())})}Wr(e){return 0}ei(e,n){return M.or([()=>M.resolve(this.Jr.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Hr(e,n)])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nf{constructor(e,n,r,i){this.targetId=e,this.fromCache=n,this.$i=r,this.Ui=i}static Wi(e,n){let r=ee(),i=ee();for(const s of n.docChanges)switch(s.type){case 0:r=r.add(s.doc.key);break;case 1:i=i.add(s.doc.key)}return new nf(e,n.fromCache,r,i)}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dk{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fk{constructor(){this.Gi=!1,this.zi=!1,this.ji=100,this.Hi=function(){return ZI()?8:qC(et())>0?6:4}()}initialize(e,n){this.Ji=e,this.indexManager=n,this.Gi=!0}getDocumentsMatchingQuery(e,n,r,i){const s={result:null};return this.Yi(e,n).next(o=>{s.result=o}).next(()=>{if(!s.result)return this.Zi(e,n,i,r).next(o=>{s.result=o})}).next(()=>{if(s.result)return;const o=new dk;return this.Xi(e,n,o).next(l=>{if(s.result=l,this.zi)return this.es(e,n,o,l.size)})}).next(()=>s.result)}es(e,n,r,i){return r.documentReadCount<this.ji?(ps()<=te.DEBUG&&W("QueryEngine","SDK will not create cache indexes for query:",Yr(n),"since it only creates cache indexes for collection contains","more than or equal to",this.ji,"documents"),M.resolve()):(ps()<=te.DEBUG&&W("QueryEngine","Query:",Yr(n),"scans",r.documentReadCount,"local documents and returns",i,"documents as results."),r.documentReadCount>this.Hi*i?(ps()<=te.DEBUG&&W("QueryEngine","The SDK decides to create cache indexes for query:",Yr(n),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,Qt(n))):M.resolve())}Yi(e,n){if(_g(n))return M.resolve(null);let r=Qt(n);return this.indexManager.getIndexType(e,r).next(i=>i===0?null:(n.limit!==null&&i===1&&(n=Ih(n,null,"F"),r=Qt(n)),this.indexManager.getDocumentsMatchingTarget(e,r).next(s=>{const o=ee(...s);return this.Ji.getDocuments(e,o).next(l=>this.indexManager.getMinOffset(e,r).next(u=>{const h=this.ts(n,l);return this.ns(n,h,o,u.readTime)?this.Yi(e,Ih(n,null,"F")):this.rs(e,h,n,u)}))})))}Zi(e,n,r,i){return _g(n)||i.isEqual(Y.min())?M.resolve(null):this.Ji.getDocuments(e,r).next(s=>{const o=this.ts(n,s);return this.ns(n,o,r,i)?M.resolve(null):(ps()<=te.DEBUG&&W("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),Yr(n)),this.rs(e,o,n,zC(i,-1)).next(l=>l))})}ts(e,n){let r=new ze(IE(e));return n.forEach((i,s)=>{Xl(e,s)&&(r=r.add(s))}),r}ns(e,n,r,i){if(e.limit===null)return!1;if(r.size!==n.size)return!0;const s=e.limitType==="F"?n.last():n.first();return!!s&&(s.hasPendingWrites||s.version.compareTo(i)>0)}Xi(e,n,r){return ps()<=te.DEBUG&&W("QueryEngine","Using full collection scan to execute query:",Yr(n)),this.Ji.getDocumentsMatchingQuery(e,n,nr.min(),r)}rs(e,n,r,i){return this.Ji.getDocumentsMatchingQuery(e,r,i).next(s=>(n.forEach(o=>{s=s.insert(o.key,o)}),s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pk{constructor(e,n,r,i){this.persistence=e,this.ss=n,this.serializer=i,this.os=new Ee(se),this._s=new $i(s=>qd(s),Kd),this.us=new Map,this.cs=e.getRemoteDocumentCache(),this.Ur=e.getTargetCache(),this.Gr=e.getBundleCache(),this.ls(r)}ls(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new nk(this.cs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.cs.setIndexManager(this.indexManager),this.ss.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.os))}}function mk(t,e,n,r){return new pk(t,e,n,r)}async function WE(t,e){const n=X(t);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let i;return n.mutationQueue.getAllMutationBatches(r).next(s=>(i=s,n.ls(e),n.mutationQueue.getAllMutationBatches(r))).next(s=>{const o=[],l=[];let u=ee();for(const h of i){o.push(h.batchId);for(const f of h.mutations)u=u.add(f.key)}for(const h of s){l.push(h.batchId);for(const f of h.mutations)u=u.add(f.key)}return n.localDocuments.getDocuments(r,u).next(h=>({hs:h,removedBatchIds:o,addedBatchIds:l}))})})}function gk(t,e){const n=X(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const i=e.batch.keys(),s=n.cs.newChangeBuffer({trackRemovals:!0});return function(l,u,h,f){const m=h.batch,g=m.keys();let S=M.resolve();return g.forEach(C=>{S=S.next(()=>f.getEntry(u,C)).next(P=>{const O=h.docVersions.get(C);ae(O!==null),P.version.compareTo(O)<0&&(m.applyToRemoteDocument(P,h),P.isValidDocument()&&(P.setReadTime(h.commitVersion),f.addEntry(P)))})}),S.next(()=>l.mutationQueue.removeMutationBatch(u,m))}(n,r,e,s).next(()=>s.apply(r)).next(()=>n.mutationQueue.performConsistencyCheck(r)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(r,i,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(l){let u=ee();for(let h=0;h<l.mutationResults.length;++h)l.mutationResults[h].transformResults.length>0&&(u=u.add(l.batch.mutations[h].key));return u}(e))).next(()=>n.localDocuments.getDocuments(r,i))})}function HE(t){const e=X(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.Ur.getLastRemoteSnapshotVersion(n))}function yk(t,e){const n=X(t),r=e.snapshotVersion;let i=n.os;return n.persistence.runTransaction("Apply remote event","readwrite-primary",s=>{const o=n.cs.newChangeBuffer({trackRemovals:!0});i=n.os;const l=[];e.targetChanges.forEach((f,m)=>{const g=i.get(m);if(!g)return;l.push(n.Ur.removeMatchingKeys(s,f.removedDocuments,m).next(()=>n.Ur.addMatchingKeys(s,f.addedDocuments,m)));let S=g.withSequenceNumber(s.currentSequenceNumber);e.targetMismatches.get(m)!==null?S=S.withResumeToken($e.EMPTY_BYTE_STRING,Y.min()).withLastLimboFreeSnapshotVersion(Y.min()):f.resumeToken.approximateByteSize()>0&&(S=S.withResumeToken(f.resumeToken,r)),i=i.insert(m,S),function(P,O,w){return P.resumeToken.approximateByteSize()===0||O.snapshotVersion.toMicroseconds()-P.snapshotVersion.toMicroseconds()>=3e8?!0:w.addedDocuments.size+w.modifiedDocuments.size+w.removedDocuments.size>0}(g,S,f)&&l.push(n.Ur.updateTargetData(s,S))});let u=In(),h=ee();if(e.documentUpdates.forEach(f=>{e.resolvedLimboDocuments.has(f)&&l.push(n.persistence.referenceDelegate.updateLimboDocument(s,f))}),l.push(_k(s,o,e.documentUpdates).next(f=>{u=f.Ps,h=f.Is})),!r.isEqual(Y.min())){const f=n.Ur.getLastRemoteSnapshotVersion(s).next(m=>n.Ur.setTargetsMetadata(s,s.currentSequenceNumber,r));l.push(f)}return M.waitFor(l).next(()=>o.apply(s)).next(()=>n.localDocuments.getLocalViewOfDocuments(s,u,h)).next(()=>u)}).then(s=>(n.os=i,s))}function _k(t,e,n){let r=ee(),i=ee();return n.forEach(s=>r=r.add(s)),e.getEntries(t,r).next(s=>{let o=In();return n.forEach((l,u)=>{const h=s.get(l);u.isFoundDocument()!==h.isFoundDocument()&&(i=i.add(l)),u.isNoDocument()&&u.version.isEqual(Y.min())?(e.removeEntry(l,u.readTime),o=o.insert(l,u)):!h.isValidDocument()||u.version.compareTo(h.version)>0||u.version.compareTo(h.version)===0&&h.hasPendingWrites?(e.addEntry(u),o=o.insert(l,u)):W("LocalStore","Ignoring outdated watch update for ",l,". Current version:",h.version," Watch version:",u.version)}),{Ps:o,Is:i}})}function vk(t,e){const n=X(t);return n.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function Ek(t,e){const n=X(t);return n.persistence.runTransaction("Allocate target","readwrite",r=>{let i;return n.Ur.getTargetData(r,e).next(s=>s?(i=s,M.resolve(i)):n.Ur.allocateTargetId(r).next(o=>(i=new jn(e,o,"TargetPurposeListen",r.currentSequenceNumber),n.Ur.addTargetData(r,i).next(()=>i))))}).then(r=>{const i=n.os.get(r.targetId);return(i===null||r.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(n.os=n.os.insert(r.targetId,r),n._s.set(e,r.targetId)),r})}async function Ph(t,e,n){const r=X(t),i=r.os.get(e),s=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",s,o=>r.persistence.referenceDelegate.removeTarget(o,i))}catch(o){if(!Ro(o))throw o;W("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}r.os=r.os.remove(e),r._s.delete(i.target)}function kg(t,e,n){const r=X(t);let i=Y.min(),s=ee();return r.persistence.runTransaction("Execute query","readwrite",o=>function(u,h,f){const m=X(u),g=m._s.get(f);return g!==void 0?M.resolve(m.os.get(g)):m.Ur.getTargetData(h,f)}(r,o,Qt(e)).next(l=>{if(l)return i=l.lastLimboFreeSnapshotVersion,r.Ur.getMatchingKeysForTargetId(o,l.targetId).next(u=>{s=u})}).next(()=>r.ss.getDocumentsMatchingQuery(o,e,n?i:Y.min(),n?s:ee())).next(l=>(wk(r,cP(e),l),{documents:l,Ts:s})))}function wk(t,e,n){let r=t.us.get(e)||Y.min();n.forEach((i,s)=>{s.readTime.compareTo(r)>0&&(r=s.readTime)}),t.us.set(e,r)}class Ng{constructor(){this.activeTargetIds=gP()}fs(e){this.activeTargetIds=this.activeTargetIds.add(e)}gs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Vs(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class Tk{constructor(){this.so=new Ng,this.oo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e,n=!0){return n&&this.so.fs(e),this.oo[e]||"not-current"}updateQueryState(e,n,r){this.oo[e]=n}removeLocalQueryTarget(e){this.so.gs(e)}isLocalQueryTarget(e){return this.so.activeTargetIds.has(e)}clearQueryState(e){delete this.oo[e]}getAllActiveQueryTargets(){return this.so.activeTargetIds}isActiveQueryTarget(e){return this.so.activeTargetIds.has(e)}start(){return this.so=new Ng,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ik{_o(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dg{constructor(){this.ao=()=>this.uo(),this.co=()=>this.lo(),this.ho=[],this.Po()}_o(e){this.ho.push(e)}shutdown(){window.removeEventListener("online",this.ao),window.removeEventListener("offline",this.co)}Po(){window.addEventListener("online",this.ao),window.addEventListener("offline",this.co)}uo(){W("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.ho)e(0)}lo(){W("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.ho)e(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let _a=null;function dc(){return _a===null?_a=function(){return 268435456+Math.round(2147483648*Math.random())}():_a++,"0x"+_a.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Sk={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ak{constructor(e){this.Io=e.Io,this.To=e.To}Eo(e){this.Ao=e}Ro(e){this.Vo=e}mo(e){this.fo=e}onMessage(e){this.po=e}close(){this.To()}send(e){this.Io(e)}yo(){this.Ao()}wo(){this.Vo()}So(e){this.fo(e)}bo(e){this.po(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qe="WebChannelConnection";class Rk extends class{constructor(n){this.databaseInfo=n,this.databaseId=n.databaseId;const r=n.ssl?"https":"http",i=encodeURIComponent(this.databaseId.projectId),s=encodeURIComponent(this.databaseId.database);this.Do=r+"://"+n.host,this.vo=`projects/${i}/databases/${s}`,this.Co=this.databaseId.database==="(default)"?`project_id=${i}`:`project_id=${i}&database_id=${s}`}get Fo(){return!1}Mo(n,r,i,s,o){const l=dc(),u=this.xo(n,r.toUriEncodedString());W("RestConnection",`Sending RPC '${n}' ${l}:`,u,i);const h={"google-cloud-resource-prefix":this.vo,"x-goog-request-params":this.Co};return this.Oo(h,s,o),this.No(n,u,h,i).then(f=>(W("RestConnection",`Received RPC '${n}' ${l}: `,f),f),f=>{throw ki("RestConnection",`RPC '${n}' ${l} failed with error: `,f,"url: ",u,"request:",i),f})}Lo(n,r,i,s,o,l){return this.Mo(n,r,i,s,o)}Oo(n,r,i){n["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+Bi}(),n["Content-Type"]="text/plain",this.databaseInfo.appId&&(n["X-Firebase-GMPID"]=this.databaseInfo.appId),r&&r.headers.forEach((s,o)=>n[o]=s),i&&i.headers.forEach((s,o)=>n[o]=s)}xo(n,r){const i=Sk[n];return`${this.Do}/v1/${r}:${i}`}terminate(){}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}No(e,n,r,i){const s=dc();return new Promise((o,l)=>{const u=new sE;u.setWithCredentials(!0),u.listenOnce(oE.COMPLETE,()=>{try{switch(u.getLastErrorCode()){case La.NO_ERROR:const f=u.getResponseJson();W(Qe,`XHR for RPC '${e}' ${s} received:`,JSON.stringify(f)),o(f);break;case La.TIMEOUT:W(Qe,`RPC '${e}' ${s} timed out`),l(new $(L.DEADLINE_EXCEEDED,"Request time out"));break;case La.HTTP_ERROR:const m=u.getStatus();if(W(Qe,`RPC '${e}' ${s} failed with status:`,m,"response text:",u.getResponseText()),m>0){let g=u.getResponseJson();Array.isArray(g)&&(g=g[0]);const S=g==null?void 0:g.error;if(S&&S.status&&S.message){const C=function(O){const w=O.toLowerCase().replace(/_/g,"-");return Object.values(L).indexOf(w)>=0?w:L.UNKNOWN}(S.status);l(new $(C,S.message))}else l(new $(L.UNKNOWN,"Server responded with status "+u.getStatus()))}else l(new $(L.UNAVAILABLE,"Connection failed."));break;default:G()}}finally{W(Qe,`RPC '${e}' ${s} completed.`)}});const h=JSON.stringify(i);W(Qe,`RPC '${e}' ${s} sending request:`,i),u.send(n,"POST",h,r,15)})}Bo(e,n,r){const i=dc(),s=[this.Do,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=uE(),l=lE(),u={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},h=this.longPollingOptions.timeoutSeconds;h!==void 0&&(u.longPollingTimeout=Math.round(1e3*h)),this.useFetchStreams&&(u.useFetchStreams=!0),this.Oo(u.initMessageHeaders,n,r),u.encodeInitMessageHeaders=!0;const f=s.join("");W(Qe,`Creating RPC '${e}' stream ${i}: ${f}`,u);const m=o.createWebChannel(f,u);let g=!1,S=!1;const C=new Ak({Io:O=>{S?W(Qe,`Not sending because RPC '${e}' stream ${i} is closed:`,O):(g||(W(Qe,`Opening RPC '${e}' stream ${i} transport.`),m.open(),g=!0),W(Qe,`RPC '${e}' stream ${i} sending:`,O),m.send(O))},To:()=>m.close()}),P=(O,w,_)=>{O.listen(w,A=>{try{_(A)}catch(V){setTimeout(()=>{throw V},0)}})};return P(m,ws.EventType.OPEN,()=>{S||(W(Qe,`RPC '${e}' stream ${i} transport opened.`),C.yo())}),P(m,ws.EventType.CLOSE,()=>{S||(S=!0,W(Qe,`RPC '${e}' stream ${i} transport closed`),C.So())}),P(m,ws.EventType.ERROR,O=>{S||(S=!0,ki(Qe,`RPC '${e}' stream ${i} transport errored:`,O),C.So(new $(L.UNAVAILABLE,"The operation could not be completed")))}),P(m,ws.EventType.MESSAGE,O=>{var w;if(!S){const _=O.data[0];ae(!!_);const A=_,V=A.error||((w=A[0])===null||w===void 0?void 0:w.error);if(V){W(Qe,`RPC '${e}' stream ${i} received error:`,V);const b=V.status;let U=function(v){const T=Re[v];if(T!==void 0)return OE(T)}(b),E=V.message;U===void 0&&(U=L.INTERNAL,E="Unknown error status: "+b+" with message "+V.message),S=!0,C.So(new $(U,E)),m.close()}else W(Qe,`RPC '${e}' stream ${i} received:`,_),C.bo(_)}}),P(l,aE.STAT_EVENT,O=>{O.stat===yh.PROXY?W(Qe,`RPC '${e}' stream ${i} detected buffering proxy`):O.stat===yh.NOPROXY&&W(Qe,`RPC '${e}' stream ${i} detected no buffering proxy`)}),setTimeout(()=>{C.wo()},0),C}}function fc(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tu(t){return new MP(t,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qE{constructor(e,n,r=1e3,i=1.5,s=6e4){this.ui=e,this.timerId=n,this.ko=r,this.qo=i,this.Qo=s,this.Ko=0,this.$o=null,this.Uo=Date.now(),this.reset()}reset(){this.Ko=0}Wo(){this.Ko=this.Qo}Go(e){this.cancel();const n=Math.floor(this.Ko+this.zo()),r=Math.max(0,Date.now()-this.Uo),i=Math.max(0,n-r);i>0&&W("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.Ko} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.$o=this.ui.enqueueAfterDelay(this.timerId,i,()=>(this.Uo=Date.now(),e())),this.Ko*=this.qo,this.Ko<this.ko&&(this.Ko=this.ko),this.Ko>this.Qo&&(this.Ko=this.Qo)}jo(){this.$o!==null&&(this.$o.skipDelay(),this.$o=null)}cancel(){this.$o!==null&&(this.$o.cancel(),this.$o=null)}zo(){return(Math.random()-.5)*this.Ko}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class KE{constructor(e,n,r,i,s,o,l,u){this.ui=e,this.Ho=r,this.Jo=i,this.connection=s,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=l,this.listener=u,this.state=0,this.Yo=0,this.Zo=null,this.Xo=null,this.stream=null,this.e_=0,this.t_=new qE(e,n)}n_(){return this.state===1||this.state===5||this.r_()}r_(){return this.state===2||this.state===3}start(){this.e_=0,this.state!==4?this.auth():this.i_()}async stop(){this.n_()&&await this.close(0)}s_(){this.state=0,this.t_.reset()}o_(){this.r_()&&this.Zo===null&&(this.Zo=this.ui.enqueueAfterDelay(this.Ho,6e4,()=>this.__()))}a_(e){this.u_(),this.stream.send(e)}async __(){if(this.r_())return this.close(0)}u_(){this.Zo&&(this.Zo.cancel(),this.Zo=null)}c_(){this.Xo&&(this.Xo.cancel(),this.Xo=null)}async close(e,n){this.u_(),this.c_(),this.t_.cancel(),this.Yo++,e!==4?this.t_.reset():n&&n.code===L.RESOURCE_EXHAUSTED?(Tn(n.toString()),Tn("Using maximum backoff delay to prevent overloading the backend."),this.t_.Wo()):n&&n.code===L.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.l_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.mo(n)}l_(){}auth(){this.state=1;const e=this.h_(this.Yo),n=this.Yo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,i])=>{this.Yo===n&&this.P_(r,i)},r=>{e(()=>{const i=new $(L.UNKNOWN,"Fetching auth token failed: "+r.message);return this.I_(i)})})}P_(e,n){const r=this.h_(this.Yo);this.stream=this.T_(e,n),this.stream.Eo(()=>{r(()=>this.listener.Eo())}),this.stream.Ro(()=>{r(()=>(this.state=2,this.Xo=this.ui.enqueueAfterDelay(this.Jo,1e4,()=>(this.r_()&&(this.state=3),Promise.resolve())),this.listener.Ro()))}),this.stream.mo(i=>{r(()=>this.I_(i))}),this.stream.onMessage(i=>{r(()=>++this.e_==1?this.E_(i):this.onNext(i))})}i_(){this.state=5,this.t_.Go(async()=>{this.state=0,this.start()})}I_(e){return W("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}h_(e){return n=>{this.ui.enqueueAndForget(()=>this.Yo===e?n():(W("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class Ck extends KE{constructor(e,n,r,i,s,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,i,o),this.serializer=s}T_(e,n){return this.connection.Bo("Listen",e,n)}E_(e){return this.onNext(e)}onNext(e){this.t_.reset();const n=UP(this.serializer,e),r=function(s){if(!("targetChange"in s))return Y.min();const o=s.targetChange;return o.targetIds&&o.targetIds.length?Y.min():o.readTime?Yt(o.readTime):Y.min()}(e);return this.listener.d_(n,r)}A_(e){const n={};n.database=Ch(this.serializer),n.addTarget=function(s,o){let l;const u=o.target;if(l=wh(u)?{documents:BP(s,u)}:{query:$P(s,u)._t},l.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){l.resumeToken=FE(s,o.resumeToken);const h=Sh(s,o.expectedCount);h!==null&&(l.expectedCount=h)}else if(o.snapshotVersion.compareTo(Y.min())>0){l.readTime=Tl(s,o.snapshotVersion.toTimestamp());const h=Sh(s,o.expectedCount);h!==null&&(l.expectedCount=h)}return l}(this.serializer,e);const r=HP(this.serializer,e);r&&(n.labels=r),this.a_(n)}R_(e){const n={};n.database=Ch(this.serializer),n.removeTarget=e,this.a_(n)}}class Pk extends KE{constructor(e,n,r,i,s,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,i,o),this.serializer=s}get V_(){return this.e_>0}start(){this.lastStreamToken=void 0,super.start()}l_(){this.V_&&this.m_([])}T_(e,n){return this.connection.Bo("Write",e,n)}E_(e){return ae(!!e.streamToken),this.lastStreamToken=e.streamToken,ae(!e.writeResults||e.writeResults.length===0),this.listener.f_()}onNext(e){ae(!!e.streamToken),this.lastStreamToken=e.streamToken,this.t_.reset();const n=zP(e.writeResults,e.commitTime),r=Yt(e.commitTime);return this.listener.g_(r,n)}p_(){const e={};e.database=Ch(this.serializer),this.a_(e)}m_(e){const n={streamToken:this.lastStreamToken,writes:e.map(r=>jP(this.serializer,r))};this.a_(n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kk extends class{}{constructor(e,n,r,i){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=r,this.serializer=i,this.y_=!1}w_(){if(this.y_)throw new $(L.FAILED_PRECONDITION,"The client has already been terminated.")}Mo(e,n,r,i){return this.w_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,o])=>this.connection.Mo(e,Ah(n,r),i,s,o)).catch(s=>{throw s.name==="FirebaseError"?(s.code===L.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new $(L.UNKNOWN,s.toString())})}Lo(e,n,r,i,s){return this.w_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,l])=>this.connection.Lo(e,Ah(n,r),i,o,l,s)).catch(o=>{throw o.name==="FirebaseError"?(o.code===L.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new $(L.UNKNOWN,o.toString())})}terminate(){this.y_=!0,this.connection.terminate()}}class Nk{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.S_=0,this.b_=null,this.D_=!0}v_(){this.S_===0&&(this.C_("Unknown"),this.b_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.b_=null,this.F_("Backend didn't respond within 10 seconds."),this.C_("Offline"),Promise.resolve())))}M_(e){this.state==="Online"?this.C_("Unknown"):(this.S_++,this.S_>=1&&(this.x_(),this.F_(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.C_("Offline")))}set(e){this.x_(),this.S_=0,e==="Online"&&(this.D_=!1),this.C_(e)}C_(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}F_(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.D_?(Tn(n),this.D_=!1):W("OnlineStateTracker",n)}x_(){this.b_!==null&&(this.b_.cancel(),this.b_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dk{constructor(e,n,r,i,s){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.O_=[],this.N_=new Map,this.L_=new Set,this.B_=[],this.k_=s,this.k_._o(o=>{r.enqueueAndForget(async()=>{Wr(this)&&(W("RemoteStore","Restarting streams for network reachability change."),await async function(u){const h=X(u);h.L_.add(4),await No(h),h.q_.set("Unknown"),h.L_.delete(4),await nu(h)}(this))})}),this.q_=new Nk(r,i)}}async function nu(t){if(Wr(t))for(const e of t.B_)await e(!0)}async function No(t){for(const e of t.B_)await e(!1)}function GE(t,e){const n=X(t);n.N_.has(e.targetId)||(n.N_.set(e.targetId,e),af(n)?of(n):Wi(n).r_()&&sf(n,e))}function rf(t,e){const n=X(t),r=Wi(n);n.N_.delete(e),r.r_()&&QE(n,e),n.N_.size===0&&(r.r_()?r.o_():Wr(n)&&n.q_.set("Unknown"))}function sf(t,e){if(t.Q_.xe(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(Y.min())>0){const n=t.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(n)}Wi(t).A_(e)}function QE(t,e){t.Q_.xe(e),Wi(t).R_(e)}function of(t){t.Q_=new xP({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),ot:e=>t.N_.get(e)||null,tt:()=>t.datastore.serializer.databaseId}),Wi(t).start(),t.q_.v_()}function af(t){return Wr(t)&&!Wi(t).n_()&&t.N_.size>0}function Wr(t){return X(t).L_.size===0}function YE(t){t.Q_=void 0}async function xk(t){t.q_.set("Online")}async function Vk(t){t.N_.forEach((e,n)=>{sf(t,e)})}async function Ok(t,e){YE(t),af(t)?(t.q_.M_(e),of(t)):t.q_.set("Unknown")}async function Lk(t,e,n){if(t.q_.set("Online"),e instanceof ME&&e.state===2&&e.cause)try{await async function(i,s){const o=s.cause;for(const l of s.targetIds)i.N_.has(l)&&(await i.remoteSyncer.rejectListen(l,o),i.N_.delete(l),i.Q_.removeTarget(l))}(t,e)}catch(r){W("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),r),await Il(t,r)}else if(e instanceof ba?t.Q_.Ke(e):e instanceof LE?t.Q_.He(e):t.Q_.We(e),!n.isEqual(Y.min()))try{const r=await HE(t.localStore);n.compareTo(r)>=0&&await function(s,o){const l=s.Q_.rt(o);return l.targetChanges.forEach((u,h)=>{if(u.resumeToken.approximateByteSize()>0){const f=s.N_.get(h);f&&s.N_.set(h,f.withResumeToken(u.resumeToken,o))}}),l.targetMismatches.forEach((u,h)=>{const f=s.N_.get(u);if(!f)return;s.N_.set(u,f.withResumeToken($e.EMPTY_BYTE_STRING,f.snapshotVersion)),QE(s,u);const m=new jn(f.target,u,h,f.sequenceNumber);sf(s,m)}),s.remoteSyncer.applyRemoteEvent(l)}(t,n)}catch(r){W("RemoteStore","Failed to raise snapshot:",r),await Il(t,r)}}async function Il(t,e,n){if(!Ro(e))throw e;t.L_.add(1),await No(t),t.q_.set("Offline"),n||(n=()=>HE(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{W("RemoteStore","Retrying IndexedDB access"),await n(),t.L_.delete(1),await nu(t)})}function XE(t,e){return e().catch(n=>Il(t,n,e))}async function ru(t){const e=X(t),n=ir(e);let r=e.O_.length>0?e.O_[e.O_.length-1].batchId:-1;for(;Mk(e);)try{const i=await vk(e.localStore,r);if(i===null){e.O_.length===0&&n.o_();break}r=i.batchId,Fk(e,i)}catch(i){await Il(e,i)}JE(e)&&ZE(e)}function Mk(t){return Wr(t)&&t.O_.length<10}function Fk(t,e){t.O_.push(e);const n=ir(t);n.r_()&&n.V_&&n.m_(e.mutations)}function JE(t){return Wr(t)&&!ir(t).n_()&&t.O_.length>0}function ZE(t){ir(t).start()}async function bk(t){ir(t).p_()}async function Uk(t){const e=ir(t);for(const n of t.O_)e.m_(n.mutations)}async function jk(t,e,n){const r=t.O_.shift(),i=Xd.from(r,e,n);await XE(t,()=>t.remoteSyncer.applySuccessfulWrite(i)),await ru(t)}async function zk(t,e){e&&ir(t).V_&&await async function(r,i){if(function(o){return kP(o)&&o!==L.ABORTED}(i.code)){const s=r.O_.shift();ir(r).s_(),await XE(r,()=>r.remoteSyncer.rejectFailedWrite(s.batchId,i)),await ru(r)}}(t,e),JE(t)&&ZE(t)}async function xg(t,e){const n=X(t);n.asyncQueue.verifyOperationInProgress(),W("RemoteStore","RemoteStore received new credentials");const r=Wr(n);n.L_.add(3),await No(n),r&&n.q_.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.L_.delete(3),await nu(n)}async function Bk(t,e){const n=X(t);e?(n.L_.delete(2),await nu(n)):e||(n.L_.add(2),await No(n),n.q_.set("Unknown"))}function Wi(t){return t.K_||(t.K_=function(n,r,i){const s=X(n);return s.w_(),new Ck(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(t.datastore,t.asyncQueue,{Eo:xk.bind(null,t),Ro:Vk.bind(null,t),mo:Ok.bind(null,t),d_:Lk.bind(null,t)}),t.B_.push(async e=>{e?(t.K_.s_(),af(t)?of(t):t.q_.set("Unknown")):(await t.K_.stop(),YE(t))})),t.K_}function ir(t){return t.U_||(t.U_=function(n,r,i){const s=X(n);return s.w_(),new Pk(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(t.datastore,t.asyncQueue,{Eo:()=>Promise.resolve(),Ro:bk.bind(null,t),mo:zk.bind(null,t),f_:Uk.bind(null,t),g_:jk.bind(null,t)}),t.B_.push(async e=>{e?(t.U_.s_(),await ru(t)):(await t.U_.stop(),t.O_.length>0&&(W("RemoteStore",`Stopping write stream with ${t.O_.length} pending writes`),t.O_=[]))})),t.U_}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lf{constructor(e,n,r,i,s){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=i,this.removalCallback=s,this.deferred=new Pr,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,n,r,i,s){const o=Date.now()+r,l=new lf(e,n,o,i,s);return l.start(r),l}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new $(L.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function uf(t,e){if(Tn("AsyncQueue",`${e}: ${t}`),Ro(t))return new $(L.UNAVAILABLE,`${e}: ${t}`);throw t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ei{constructor(e){this.comparator=e?(n,r)=>e(n,r)||H.comparator(n.key,r.key):(n,r)=>H.comparator(n.key,r.key),this.keyedMap=Ts(),this.sortedSet=new Ee(this.comparator)}static emptySet(e){return new Ei(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,r)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof Ei)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(!i.isEqual(s))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const r=new Ei;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=n,r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vg{constructor(){this.W_=new Ee(H.comparator)}track(e){const n=e.doc.key,r=this.W_.get(n);r?e.type!==0&&r.type===3?this.W_=this.W_.insert(n,e):e.type===3&&r.type!==1?this.W_=this.W_.insert(n,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.W_=this.W_.insert(n,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.W_=this.W_.insert(n,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.W_=this.W_.remove(n):e.type===1&&r.type===2?this.W_=this.W_.insert(n,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.W_=this.W_.insert(n,{type:2,doc:e.doc}):G():this.W_=this.W_.insert(n,e)}G_(){const e=[];return this.W_.inorderTraversal((n,r)=>{e.push(r)}),e}}class Oi{constructor(e,n,r,i,s,o,l,u,h){this.query=e,this.docs=n,this.oldDocs=r,this.docChanges=i,this.mutatedKeys=s,this.fromCache=o,this.syncStateChanged=l,this.excludesMetadataChanges=u,this.hasCachedResults=h}static fromInitialDocuments(e,n,r,i,s){const o=[];return n.forEach(l=>{o.push({type:0,doc:l})}),new Oi(e,n,Ei.emptySet(n),o,r,i,!0,!1,s)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Yl(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,r=e.docChanges;if(n.length!==r.length)return!1;for(let i=0;i<n.length;i++)if(n[i].type!==r[i].type||!n[i].doc.isEqual(r[i].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $k{constructor(){this.z_=void 0,this.j_=[]}H_(){return this.j_.some(e=>e.J_())}}class Wk{constructor(){this.queries=Og(),this.onlineState="Unknown",this.Y_=new Set}terminate(){(function(n,r){const i=X(n),s=i.queries;i.queries=Og(),s.forEach((o,l)=>{for(const u of l.j_)u.onError(r)})})(this,new $(L.ABORTED,"Firestore shutting down"))}}function Og(){return new $i(t=>TE(t),Yl)}async function Hk(t,e){const n=X(t);let r=3;const i=e.query;let s=n.queries.get(i);s?!s.H_()&&e.J_()&&(r=2):(s=new $k,r=e.J_()?0:1);try{switch(r){case 0:s.z_=await n.onListen(i,!0);break;case 1:s.z_=await n.onListen(i,!1);break;case 2:await n.onFirstRemoteStoreListen(i)}}catch(o){const l=uf(o,`Initialization of query '${Yr(e.query)}' failed`);return void e.onError(l)}n.queries.set(i,s),s.j_.push(e),e.Z_(n.onlineState),s.z_&&e.X_(s.z_)&&cf(n)}async function qk(t,e){const n=X(t),r=e.query;let i=3;const s=n.queries.get(r);if(s){const o=s.j_.indexOf(e);o>=0&&(s.j_.splice(o,1),s.j_.length===0?i=e.J_()?0:1:!s.H_()&&e.J_()&&(i=2))}switch(i){case 0:return n.queries.delete(r),n.onUnlisten(r,!0);case 1:return n.queries.delete(r),n.onUnlisten(r,!1);case 2:return n.onLastRemoteStoreUnlisten(r);default:return}}function Kk(t,e){const n=X(t);let r=!1;for(const i of e){const s=i.query,o=n.queries.get(s);if(o){for(const l of o.j_)l.X_(i)&&(r=!0);o.z_=i}}r&&cf(n)}function Gk(t,e,n){const r=X(t),i=r.queries.get(e);if(i)for(const s of i.j_)s.onError(n);r.queries.delete(e)}function cf(t){t.Y_.forEach(e=>{e.next()})}var kh,Lg;(Lg=kh||(kh={})).ea="default",Lg.Cache="cache";class Qk{constructor(e,n,r){this.query=e,this.ta=n,this.na=!1,this.ra=null,this.onlineState="Unknown",this.options=r||{}}X_(e){if(!this.options.includeMetadataChanges){const r=[];for(const i of e.docChanges)i.type!==3&&r.push(i);e=new Oi(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.na?this.ia(e)&&(this.ta.next(e),n=!0):this.sa(e,this.onlineState)&&(this.oa(e),n=!0),this.ra=e,n}onError(e){this.ta.error(e)}Z_(e){this.onlineState=e;let n=!1;return this.ra&&!this.na&&this.sa(this.ra,e)&&(this.oa(this.ra),n=!0),n}sa(e,n){if(!e.fromCache||!this.J_())return!0;const r=n!=="Offline";return(!this.options._a||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}ia(e){if(e.docChanges.length>0)return!0;const n=this.ra&&this.ra.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}oa(e){e=Oi.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.na=!0,this.ta.next(e)}J_(){return this.options.source!==kh.Cache}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ew{constructor(e){this.key=e}}class tw{constructor(e){this.key=e}}class Yk{constructor(e,n){this.query=e,this.Ta=n,this.Ea=null,this.hasCachedResults=!1,this.current=!1,this.da=ee(),this.mutatedKeys=ee(),this.Aa=IE(e),this.Ra=new Ei(this.Aa)}get Va(){return this.Ta}ma(e,n){const r=n?n.fa:new Vg,i=n?n.Ra:this.Ra;let s=n?n.mutatedKeys:this.mutatedKeys,o=i,l=!1;const u=this.query.limitType==="F"&&i.size===this.query.limit?i.last():null,h=this.query.limitType==="L"&&i.size===this.query.limit?i.first():null;if(e.inorderTraversal((f,m)=>{const g=i.get(f),S=Xl(this.query,m)?m:null,C=!!g&&this.mutatedKeys.has(g.key),P=!!S&&(S.hasLocalMutations||this.mutatedKeys.has(S.key)&&S.hasCommittedMutations);let O=!1;g&&S?g.data.isEqual(S.data)?C!==P&&(r.track({type:3,doc:S}),O=!0):this.ga(g,S)||(r.track({type:2,doc:S}),O=!0,(u&&this.Aa(S,u)>0||h&&this.Aa(S,h)<0)&&(l=!0)):!g&&S?(r.track({type:0,doc:S}),O=!0):g&&!S&&(r.track({type:1,doc:g}),O=!0,(u||h)&&(l=!0)),O&&(S?(o=o.add(S),s=P?s.add(f):s.delete(f)):(o=o.delete(f),s=s.delete(f)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const f=this.query.limitType==="F"?o.last():o.first();o=o.delete(f.key),s=s.delete(f.key),r.track({type:1,doc:f})}return{Ra:o,fa:r,ns:l,mutatedKeys:s}}ga(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,r,i){const s=this.Ra;this.Ra=e.Ra,this.mutatedKeys=e.mutatedKeys;const o=e.fa.G_();o.sort((f,m)=>function(S,C){const P=O=>{switch(O){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return G()}};return P(S)-P(C)}(f.type,m.type)||this.Aa(f.doc,m.doc)),this.pa(r),i=i!=null&&i;const l=n&&!i?this.ya():[],u=this.da.size===0&&this.current&&!i?1:0,h=u!==this.Ea;return this.Ea=u,o.length!==0||h?{snapshot:new Oi(this.query,e.Ra,s,o,e.mutatedKeys,u===0,h,!1,!!r&&r.resumeToken.approximateByteSize()>0),wa:l}:{wa:l}}Z_(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({Ra:this.Ra,fa:new Vg,mutatedKeys:this.mutatedKeys,ns:!1},!1)):{wa:[]}}Sa(e){return!this.Ta.has(e)&&!!this.Ra.has(e)&&!this.Ra.get(e).hasLocalMutations}pa(e){e&&(e.addedDocuments.forEach(n=>this.Ta=this.Ta.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.Ta=this.Ta.delete(n)),this.current=e.current)}ya(){if(!this.current)return[];const e=this.da;this.da=ee(),this.Ra.forEach(r=>{this.Sa(r.key)&&(this.da=this.da.add(r.key))});const n=[];return e.forEach(r=>{this.da.has(r)||n.push(new tw(r))}),this.da.forEach(r=>{e.has(r)||n.push(new ew(r))}),n}ba(e){this.Ta=e.Ts,this.da=ee();const n=this.ma(e.documents);return this.applyChanges(n,!0)}Da(){return Oi.fromInitialDocuments(this.query,this.Ra,this.mutatedKeys,this.Ea===0,this.hasCachedResults)}}class Xk{constructor(e,n,r){this.query=e,this.targetId=n,this.view=r}}class Jk{constructor(e){this.key=e,this.va=!1}}class Zk{constructor(e,n,r,i,s,o){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=i,this.currentUser=s,this.maxConcurrentLimboResolutions=o,this.Ca={},this.Fa=new $i(l=>TE(l),Yl),this.Ma=new Map,this.xa=new Set,this.Oa=new Ee(H.comparator),this.Na=new Map,this.La=new ef,this.Ba={},this.ka=new Map,this.qa=Vi.kn(),this.onlineState="Unknown",this.Qa=void 0}get isPrimaryClient(){return this.Qa===!0}}async function e1(t,e,n=!0){const r=aw(t);let i;const s=r.Fa.get(e);return s?(r.sharedClientState.addLocalQueryTarget(s.targetId),i=s.view.Da()):i=await nw(r,e,n,!0),i}async function t1(t,e){const n=aw(t);await nw(n,e,!0,!1)}async function nw(t,e,n,r){const i=await Ek(t.localStore,Qt(e)),s=i.targetId,o=t.sharedClientState.addLocalQueryTarget(s,n);let l;return r&&(l=await n1(t,e,s,o==="current",i.resumeToken)),t.isPrimaryClient&&n&&GE(t.remoteStore,i),l}async function n1(t,e,n,r,i){t.Ka=(m,g,S)=>async function(P,O,w,_){let A=O.view.ma(w);A.ns&&(A=await kg(P.localStore,O.query,!1).then(({documents:E})=>O.view.ma(E,A)));const V=_&&_.targetChanges.get(O.targetId),b=_&&_.targetMismatches.get(O.targetId)!=null,U=O.view.applyChanges(A,P.isPrimaryClient,V,b);return Fg(P,O.targetId,U.wa),U.snapshot}(t,m,g,S);const s=await kg(t.localStore,e,!0),o=new Yk(e,s.Ts),l=o.ma(s.documents),u=ko.createSynthesizedTargetChangeForCurrentChange(n,r&&t.onlineState!=="Offline",i),h=o.applyChanges(l,t.isPrimaryClient,u);Fg(t,n,h.wa);const f=new Xk(e,n,o);return t.Fa.set(e,f),t.Ma.has(n)?t.Ma.get(n).push(e):t.Ma.set(n,[e]),h.snapshot}async function r1(t,e,n){const r=X(t),i=r.Fa.get(e),s=r.Ma.get(i.targetId);if(s.length>1)return r.Ma.set(i.targetId,s.filter(o=>!Yl(o,e))),void r.Fa.delete(e);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(i.targetId),r.sharedClientState.isActiveQueryTarget(i.targetId)||await Ph(r.localStore,i.targetId,!1).then(()=>{r.sharedClientState.clearQueryState(i.targetId),n&&rf(r.remoteStore,i.targetId),Nh(r,i.targetId)}).catch(Ao)):(Nh(r,i.targetId),await Ph(r.localStore,i.targetId,!0))}async function i1(t,e){const n=X(t),r=n.Fa.get(e),i=n.Ma.get(r.targetId);n.isPrimaryClient&&i.length===1&&(n.sharedClientState.removeLocalQueryTarget(r.targetId),rf(n.remoteStore,r.targetId))}async function s1(t,e,n){const r=d1(t);try{const i=await function(o,l){const u=X(o),h=De.now(),f=l.reduce((S,C)=>S.add(C.key),ee());let m,g;return u.persistence.runTransaction("Locally write mutations","readwrite",S=>{let C=In(),P=ee();return u.cs.getEntries(S,f).next(O=>{C=O,C.forEach((w,_)=>{_.isValidDocument()||(P=P.add(w))})}).next(()=>u.localDocuments.getOverlayedDocuments(S,C)).next(O=>{m=O;const w=[];for(const _ of l){const A=SP(_,m.get(_.key).overlayedDocument);A!=null&&w.push(new hr(_.key,A,pE(A.value.mapValue),Ut.exists(!0)))}return u.mutationQueue.addMutationBatch(S,h,w,l)}).next(O=>{g=O;const w=O.applyToLocalDocumentSet(m,P);return u.documentOverlayCache.saveOverlays(S,O.batchId,w)})}).then(()=>({batchId:g.batchId,changes:AE(m)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(i.batchId),function(o,l,u){let h=o.Ba[o.currentUser.toKey()];h||(h=new Ee(se)),h=h.insert(l,u),o.Ba[o.currentUser.toKey()]=h}(r,i.batchId,n),await Do(r,i.changes),await ru(r.remoteStore)}catch(i){const s=uf(i,"Failed to persist write");n.reject(s)}}async function rw(t,e){const n=X(t);try{const r=await yk(n.localStore,e);e.targetChanges.forEach((i,s)=>{const o=n.Na.get(s);o&&(ae(i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size<=1),i.addedDocuments.size>0?o.va=!0:i.modifiedDocuments.size>0?ae(o.va):i.removedDocuments.size>0&&(ae(o.va),o.va=!1))}),await Do(n,r,e)}catch(r){await Ao(r)}}function Mg(t,e,n){const r=X(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const i=[];r.Fa.forEach((s,o)=>{const l=o.view.Z_(e);l.snapshot&&i.push(l.snapshot)}),function(o,l){const u=X(o);u.onlineState=l;let h=!1;u.queries.forEach((f,m)=>{for(const g of m.j_)g.Z_(l)&&(h=!0)}),h&&cf(u)}(r.eventManager,e),i.length&&r.Ca.d_(i),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function o1(t,e,n){const r=X(t);r.sharedClientState.updateQueryState(e,"rejected",n);const i=r.Na.get(e),s=i&&i.key;if(s){let o=new Ee(H.comparator);o=o.insert(s,Je.newNoDocument(s,Y.min()));const l=ee().add(s),u=new eu(Y.min(),new Map,new Ee(se),o,l);await rw(r,u),r.Oa=r.Oa.remove(s),r.Na.delete(e),hf(r)}else await Ph(r.localStore,e,!1).then(()=>Nh(r,e,n)).catch(Ao)}async function a1(t,e){const n=X(t),r=e.batch.batchId;try{const i=await gk(n.localStore,e);sw(n,r,null),iw(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await Do(n,i)}catch(i){await Ao(i)}}async function l1(t,e,n){const r=X(t);try{const i=await function(o,l){const u=X(o);return u.persistence.runTransaction("Reject batch","readwrite-primary",h=>{let f;return u.mutationQueue.lookupMutationBatch(h,l).next(m=>(ae(m!==null),f=m.keys(),u.mutationQueue.removeMutationBatch(h,m))).next(()=>u.mutationQueue.performConsistencyCheck(h)).next(()=>u.documentOverlayCache.removeOverlaysForBatchId(h,f,l)).next(()=>u.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(h,f)).next(()=>u.localDocuments.getDocuments(h,f))})}(r.localStore,e);sw(r,e,n),iw(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await Do(r,i)}catch(i){await Ao(i)}}function iw(t,e){(t.ka.get(e)||[]).forEach(n=>{n.resolve()}),t.ka.delete(e)}function sw(t,e,n){const r=X(t);let i=r.Ba[r.currentUser.toKey()];if(i){const s=i.get(e);s&&(n?s.reject(n):s.resolve(),i=i.remove(e)),r.Ba[r.currentUser.toKey()]=i}}function Nh(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t.Ma.get(e))t.Fa.delete(r),n&&t.Ca.$a(r,n);t.Ma.delete(e),t.isPrimaryClient&&t.La.gr(e).forEach(r=>{t.La.containsKey(r)||ow(t,r)})}function ow(t,e){t.xa.delete(e.path.canonicalString());const n=t.Oa.get(e);n!==null&&(rf(t.remoteStore,n),t.Oa=t.Oa.remove(e),t.Na.delete(n),hf(t))}function Fg(t,e,n){for(const r of n)r instanceof ew?(t.La.addReference(r.key,e),u1(t,r)):r instanceof tw?(W("SyncEngine","Document no longer in limbo: "+r.key),t.La.removeReference(r.key,e),t.La.containsKey(r.key)||ow(t,r.key)):G()}function u1(t,e){const n=e.key,r=n.path.canonicalString();t.Oa.get(n)||t.xa.has(r)||(W("SyncEngine","New document in limbo: "+n),t.xa.add(r),hf(t))}function hf(t){for(;t.xa.size>0&&t.Oa.size<t.maxConcurrentLimboResolutions;){const e=t.xa.values().next().value;t.xa.delete(e);const n=new H(fe.fromString(e)),r=t.qa.next();t.Na.set(r,new Jk(n)),t.Oa=t.Oa.insert(n,r),GE(t.remoteStore,new jn(Qt(Gd(n.path)),r,"TargetPurposeLimboResolution",Bd.oe))}}async function Do(t,e,n){const r=X(t),i=[],s=[],o=[];r.Fa.isEmpty()||(r.Fa.forEach((l,u)=>{o.push(r.Ka(u,e,n).then(h=>{var f;if((h||n)&&r.isPrimaryClient){const m=h?!h.fromCache:(f=n==null?void 0:n.targetChanges.get(u.targetId))===null||f===void 0?void 0:f.current;r.sharedClientState.updateQueryState(u.targetId,m?"current":"not-current")}if(h){i.push(h);const m=nf.Wi(u.targetId,h);s.push(m)}}))}),await Promise.all(o),r.Ca.d_(i),await async function(u,h){const f=X(u);try{await f.persistence.runTransaction("notifyLocalViewChanges","readwrite",m=>M.forEach(h,g=>M.forEach(g.$i,S=>f.persistence.referenceDelegate.addReference(m,g.targetId,S)).next(()=>M.forEach(g.Ui,S=>f.persistence.referenceDelegate.removeReference(m,g.targetId,S)))))}catch(m){if(!Ro(m))throw m;W("LocalStore","Failed to update sequence numbers: "+m)}for(const m of h){const g=m.targetId;if(!m.fromCache){const S=f.os.get(g),C=S.snapshotVersion,P=S.withLastLimboFreeSnapshotVersion(C);f.os=f.os.insert(g,P)}}}(r.localStore,s))}async function c1(t,e){const n=X(t);if(!n.currentUser.isEqual(e)){W("SyncEngine","User change. New user:",e.toKey());const r=await WE(n.localStore,e);n.currentUser=e,function(s,o){s.ka.forEach(l=>{l.forEach(u=>{u.reject(new $(L.CANCELLED,o))})}),s.ka.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await Do(n,r.hs)}}function h1(t,e){const n=X(t),r=n.Na.get(e);if(r&&r.va)return ee().add(r.key);{let i=ee();const s=n.Ma.get(e);if(!s)return i;for(const o of s){const l=n.Fa.get(o);i=i.unionWith(l.view.Va)}return i}}function aw(t){const e=X(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=rw.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=h1.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=o1.bind(null,e),e.Ca.d_=Kk.bind(null,e.eventManager),e.Ca.$a=Gk.bind(null,e.eventManager),e}function d1(t){const e=X(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=a1.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=l1.bind(null,e),e}class Sl{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=tu(e.databaseInfo.databaseId),this.sharedClientState=this.Wa(e),this.persistence=this.Ga(e),await this.persistence.start(),this.localStore=this.za(e),this.gcScheduler=this.ja(e,this.localStore),this.indexBackfillerScheduler=this.Ha(e,this.localStore)}ja(e,n){return null}Ha(e,n){return null}za(e){return mk(this.persistence,new fk,e.initialUser,this.serializer)}Ga(e){return new ck(tf.Zr,this.serializer)}Wa(e){return new Tk}async terminate(){var e,n;(e=this.gcScheduler)===null||e===void 0||e.stop(),(n=this.indexBackfillerScheduler)===null||n===void 0||n.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}Sl.provider={build:()=>new Sl};class Dh{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>Mg(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=c1.bind(null,this.syncEngine),await Bk(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new Wk}()}createDatastore(e){const n=tu(e.databaseInfo.databaseId),r=function(s){return new Rk(s)}(e.databaseInfo);return function(s,o,l,u){return new kk(s,o,l,u)}(e.authCredentials,e.appCheckCredentials,r,n)}createRemoteStore(e){return function(r,i,s,o,l){return new Dk(r,i,s,o,l)}(this.localStore,this.datastore,e.asyncQueue,n=>Mg(this.syncEngine,n,0),function(){return Dg.D()?new Dg:new Ik}())}createSyncEngine(e,n){return function(i,s,o,l,u,h,f){const m=new Zk(i,s,o,l,u,h);return f&&(m.Qa=!0),m}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}async terminate(){var e,n;await async function(i){const s=X(i);W("RemoteStore","RemoteStore shutting down."),s.L_.add(5),await No(s),s.k_.shutdown(),s.q_.set("Unknown")}(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate(),(n=this.eventManager)===null||n===void 0||n.terminate()}}Dh.provider={build:()=>new Dh};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class f1{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.Ya(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.Ya(this.observer.error,e):Tn("Uncaught Error in snapshot listener:",e.toString()))}Za(){this.muted=!0}Ya(e,n){setTimeout(()=>{this.muted||e(n)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class p1{constructor(e,n,r,i,s){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=i,this.user=Ye.UNAUTHENTICATED,this.clientId=hE.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=s,this.authCredentials.start(r,async o=>{W("FirestoreClient","Received user=",o.uid),await this.authCredentialListener(o),this.user=o}),this.appCheckCredentials.start(r,o=>(W("FirestoreClient","Received new app check token=",o),this.appCheckCredentialListener(o,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new Pr;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=uf(n,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function pc(t,e){t.asyncQueue.verifyOperationInProgress(),W("FirestoreClient","Initializing OfflineComponentProvider");const n=t.configuration;await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener(async i=>{r.isEqual(i)||(await WE(e.localStore,i),r=i)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t._offlineComponents=e}async function bg(t,e){t.asyncQueue.verifyOperationInProgress();const n=await m1(t);W("FirestoreClient","Initializing OnlineComponentProvider"),await e.initialize(n,t.configuration),t.setCredentialChangeListener(r=>xg(e.remoteStore,r)),t.setAppCheckTokenChangeListener((r,i)=>xg(e.remoteStore,i)),t._onlineComponents=e}async function m1(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){W("FirestoreClient","Using user provided OfflineComponentProvider");try{await pc(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!function(i){return i.name==="FirebaseError"?i.code===L.FAILED_PRECONDITION||i.code===L.UNIMPLEMENTED:!(typeof DOMException<"u"&&i instanceof DOMException)||i.code===22||i.code===20||i.code===11}(n))throw n;ki("Error using user provided cache. Falling back to memory cache: "+n),await pc(t,new Sl)}}else W("FirestoreClient","Using default OfflineComponentProvider"),await pc(t,new Sl);return t._offlineComponents}async function lw(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(W("FirestoreClient","Using user provided OnlineComponentProvider"),await bg(t,t._uninitializedComponentsProvider._online)):(W("FirestoreClient","Using default OnlineComponentProvider"),await bg(t,new Dh))),t._onlineComponents}function g1(t){return lw(t).then(e=>e.syncEngine)}async function Ug(t){const e=await lw(t),n=e.eventManager;return n.onListen=e1.bind(null,e.syncEngine),n.onUnlisten=r1.bind(null,e.syncEngine),n.onFirstRemoteStoreListen=t1.bind(null,e.syncEngine),n.onLastRemoteStoreUnlisten=i1.bind(null,e.syncEngine),n}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function uw(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jg=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cw(t,e,n){if(!n)throw new $(L.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function y1(t,e,n,r){if(e===!0&&r===!0)throw new $(L.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function zg(t){if(!H.isDocumentKey(t))throw new $(L.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function Bg(t){if(H.isDocumentKey(t))throw new $(L.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function iu(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":G()}function Jn(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new $(L.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=iu(t);throw new $(L.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $g{constructor(e){var n,r;if(e.host===void 0){if(e.ssl!==void 0)throw new $(L.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new $(L.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}y1("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=uw((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(s){if(s.timeoutSeconds!==void 0){if(isNaN(s.timeoutSeconds))throw new $(L.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (must not be NaN)`);if(s.timeoutSeconds<5)throw new $(L.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (minimum allowed value is 5)`);if(s.timeoutSeconds>30)throw new $(L.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,i){return r.timeoutSeconds===i.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class su{constructor(e,n,r,i){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new $g({}),this._settingsFrozen=!1,this._terminateTask="notTerminated"}get app(){if(!this._app)throw new $(L.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new $(L.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new $g(e),e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new xC;switch(r.type){case"firstParty":return new MC(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new $(L.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const r=jg.get(n);r&&(W("ComponentProvider","Removing Datastore"),jg.delete(n),r.terminate())}(this),Promise.resolve()}}function _1(t,e,n,r={}){var i;const s=(t=Jn(t,su))._getSettings(),o=`${e}:${n}`;if(s.host!=="firestore.googleapis.com"&&s.host!==o&&ki("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),t._setSettings(Object.assign(Object.assign({},s),{host:o,ssl:!1})),r.mockUserToken){let l,u;if(typeof r.mockUserToken=="string")l=r.mockUserToken,u=Ye.MOCK_USER;else{l=qI(r.mockUserToken,(i=t._app)===null||i===void 0?void 0:i.options.projectId);const h=r.mockUserToken.sub||r.mockUserToken.user_id;if(!h)throw new $(L.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");u=new Ye(h)}t._authCredentials=new VC(new cE(l,u))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hi{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new Hi(this.firestore,e,this._query)}}class ft{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Zn(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new ft(this.firestore,e,this._key)}}class Zn extends Hi{constructor(e,n,r){super(e,n,Gd(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new ft(this.firestore,null,new H(e))}withConverter(e){return new Zn(this.firestore,e,this._path)}}function Al(t,e,...n){if(t=xe(t),cw("collection","path",e),t instanceof su){const r=fe.fromString(e,...n);return Bg(r),new Zn(t,null,r)}{if(!(t instanceof ft||t instanceof Zn))throw new $(L.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(fe.fromString(e,...n));return Bg(r),new Zn(t.firestore,null,r)}}function kr(t,e,...n){if(t=xe(t),arguments.length===1&&(e=hE.newId()),cw("doc","path",e),t instanceof su){const r=fe.fromString(e,...n);return zg(r),new ft(t,null,new H(r))}{if(!(t instanceof ft||t instanceof Zn))throw new $(L.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(fe.fromString(e,...n));return zg(r),new ft(t.firestore,t instanceof Zn?t.converter:null,new H(r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wg{constructor(e=Promise.resolve()){this.Pu=[],this.Iu=!1,this.Tu=[],this.Eu=null,this.du=!1,this.Au=!1,this.Ru=[],this.t_=new qE(this,"async_queue_retry"),this.Vu=()=>{const r=fc();r&&W("AsyncQueue","Visibility state changed to "+r.visibilityState),this.t_.jo()},this.mu=e;const n=fc();n&&typeof n.addEventListener=="function"&&n.addEventListener("visibilitychange",this.Vu)}get isShuttingDown(){return this.Iu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.fu(),this.gu(e)}enterRestrictedMode(e){if(!this.Iu){this.Iu=!0,this.Au=e||!1;const n=fc();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.Vu)}}enqueue(e){if(this.fu(),this.Iu)return new Promise(()=>{});const n=new Pr;return this.gu(()=>this.Iu&&this.Au?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Pu.push(e),this.pu()))}async pu(){if(this.Pu.length!==0){try{await this.Pu[0](),this.Pu.shift(),this.t_.reset()}catch(e){if(!Ro(e))throw e;W("AsyncQueue","Operation failed with retryable error: "+e)}this.Pu.length>0&&this.t_.Go(()=>this.pu())}}gu(e){const n=this.mu.then(()=>(this.du=!0,e().catch(r=>{this.Eu=r,this.du=!1;const i=function(o){let l=o.message||"";return o.stack&&(l=o.stack.includes(o.message)?o.stack:o.message+`
`+o.stack),l}(r);throw Tn("INTERNAL UNHANDLED ERROR: ",i),r}).then(r=>(this.du=!1,r))));return this.mu=n,n}enqueueAfterDelay(e,n,r){this.fu(),this.Ru.indexOf(e)>-1&&(n=0);const i=lf.createAndSchedule(this,e,n,r,s=>this.yu(s));return this.Tu.push(i),i}fu(){this.Eu&&G()}verifyOperationInProgress(){}async wu(){let e;do e=this.mu,await e;while(e!==this.mu)}Su(e){for(const n of this.Tu)if(n.timerId===e)return!0;return!1}bu(e){return this.wu().then(()=>{this.Tu.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.Tu)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.wu()})}Du(e){this.Ru.push(e)}yu(e){const n=this.Tu.indexOf(e);this.Tu.splice(n,1)}}function Hg(t){return function(n,r){if(typeof n!="object"||n===null)return!1;const i=n;for(const s of r)if(s in i&&typeof i[s]=="function")return!0;return!1}(t,["next","error","complete"])}class Li extends su{constructor(e,n,r,i){super(e,n,r,i),this.type="firestore",this._queue=new Wg,this._persistenceKey=(i==null?void 0:i.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new Wg(e),this._firestoreClient=void 0,await e}}}function v1(t,e){const n=typeof t=="object"?t:Tv(),r=typeof t=="string"?t:"(default)",i=kd(n,"firestore").getImmediate({identifier:r});if(!i._initialized){const s=WI("firestore");s&&_1(i,...s)}return i}function hw(t){if(t._terminated)throw new $(L.FAILED_PRECONDITION,"The client has already been terminated.");return t._firestoreClient||E1(t),t._firestoreClient}function E1(t){var e,n,r;const i=t._freezeSettings(),s=function(l,u,h,f){return new QC(l,u,h,f.host,f.ssl,f.experimentalForceLongPolling,f.experimentalAutoDetectLongPolling,uw(f.experimentalLongPollingOptions),f.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,i);t._componentsProvider||!((n=i.localCache)===null||n===void 0)&&n._offlineComponentProvider&&(!((r=i.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(t._componentsProvider={_offline:i.localCache._offlineComponentProvider,_online:i.localCache._onlineComponentProvider}),t._firestoreClient=new p1(t._authCredentials,t._appCheckCredentials,t._queue,s,t._componentsProvider&&function(l){const u=l==null?void 0:l._online.build();return{_offline:l==null?void 0:l._offline.build(u),_online:u}}(t._componentsProvider))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mi{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Mi($e.fromBase64String(e))}catch(n){throw new $(L.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new Mi($e.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ou{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new $(L.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Ue(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class au{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class df{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new $(L.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new $(L.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return se(this._lat,e._lat)||se(this._long,e._long)}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ff{constructor(e){this._values=(e||[]).map(n=>n)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(r,i){if(r.length!==i.length)return!1;for(let s=0;s<r.length;++s)if(r[s]!==i[s])return!1;return!0}(this._values,e._values)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const w1=/^__.*__$/;class T1{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return this.fieldMask!==null?new hr(e,this.data,this.fieldMask,n,this.fieldTransforms):new Po(e,this.data,n,this.fieldTransforms)}}class dw{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return new hr(e,this.data,this.fieldMask,n,this.fieldTransforms)}}function fw(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw G()}}class pf{constructor(e,n,r,i,s,o){this.settings=e,this.databaseId=n,this.serializer=r,this.ignoreUndefinedProperties=i,s===void 0&&this.vu(),this.fieldTransforms=s||[],this.fieldMask=o||[]}get path(){return this.settings.path}get Cu(){return this.settings.Cu}Fu(e){return new pf(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Mu(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.Fu({path:r,xu:!1});return i.Ou(e),i}Nu(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.Fu({path:r,xu:!1});return i.vu(),i}Lu(e){return this.Fu({path:void 0,xu:!0})}Bu(e){return Rl(e,this.settings.methodName,this.settings.ku||!1,this.path,this.settings.qu)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}vu(){if(this.path)for(let e=0;e<this.path.length;e++)this.Ou(this.path.get(e))}Ou(e){if(e.length===0)throw this.Bu("Document fields must not be empty");if(fw(this.Cu)&&w1.test(e))throw this.Bu('Document fields cannot begin and end with "__"')}}class I1{constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=r||tu(e)}Qu(e,n,r,i=!1){return new pf({Cu:e,methodName:n,qu:r,path:Ue.emptyPath(),xu:!1,ku:i},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function mf(t){const e=t._freezeSettings(),n=tu(t._databaseId);return new I1(t._databaseId,!!e.ignoreUndefinedProperties,n)}function S1(t,e,n,r,i,s={}){const o=t.Qu(s.merge||s.mergeFields?2:0,e,n,i);yf("Data must be an object, but it was:",o,r);const l=pw(r,o);let u,h;if(s.merge)u=new yt(o.fieldMask),h=o.fieldTransforms;else if(s.mergeFields){const f=[];for(const m of s.mergeFields){const g=xh(e,m,n);if(!o.contains(g))throw new $(L.INVALID_ARGUMENT,`Field '${g}' is specified in your field mask but missing from your input data.`);gw(f,g)||f.push(g)}u=new yt(f),h=o.fieldTransforms.filter(m=>u.covers(m.field))}else u=null,h=o.fieldTransforms;return new T1(new lt(l),u,h)}class lu extends au{_toFieldTransform(e){if(e.Cu!==2)throw e.Cu===1?e.Bu(`${this._methodName}() can only appear at the top level of your update data`):e.Bu(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof lu}}class gf extends au{_toFieldTransform(e){return new EP(e.path,new co)}isEqual(e){return e instanceof gf}}function A1(t,e,n,r){const i=t.Qu(1,e,n);yf("Data must be an object, but it was:",i,r);const s=[],o=lt.empty();$r(r,(u,h)=>{const f=_f(e,u,n);h=xe(h);const m=i.Nu(f);if(h instanceof lu)s.push(f);else{const g=xo(h,m);g!=null&&(s.push(f),o.set(f,g))}});const l=new yt(s);return new dw(o,l,i.fieldTransforms)}function R1(t,e,n,r,i,s){const o=t.Qu(1,e,n),l=[xh(e,r,n)],u=[i];if(s.length%2!=0)throw new $(L.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let g=0;g<s.length;g+=2)l.push(xh(e,s[g])),u.push(s[g+1]);const h=[],f=lt.empty();for(let g=l.length-1;g>=0;--g)if(!gw(h,l[g])){const S=l[g];let C=u[g];C=xe(C);const P=o.Nu(S);if(C instanceof lu)h.push(S);else{const O=xo(C,P);O!=null&&(h.push(S),f.set(S,O))}}const m=new yt(h);return new dw(f,m,o.fieldTransforms)}function C1(t,e,n,r=!1){return xo(n,t.Qu(r?4:3,e))}function xo(t,e){if(mw(t=xe(t)))return yf("Unsupported field value:",e,t),pw(t,e);if(t instanceof au)return function(r,i){if(!fw(i.Cu))throw i.Bu(`${r._methodName}() can only be used with update() and set()`);if(!i.path)throw i.Bu(`${r._methodName}() is not currently supported inside arrays`);const s=r._toFieldTransform(i);s&&i.fieldTransforms.push(s)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.xu&&e.Cu!==4)throw e.Bu("Nested arrays are not supported");return function(r,i){const s=[];let o=0;for(const l of r){let u=xo(l,i.Lu(o));u==null&&(u={nullValue:"NULL_VALUE"}),s.push(u),o++}return{arrayValue:{values:s}}}(t,e)}return function(r,i){if((r=xe(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return yP(i.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const s=De.fromDate(r);return{timestampValue:Tl(i.serializer,s)}}if(r instanceof De){const s=new De(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:Tl(i.serializer,s)}}if(r instanceof df)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof Mi)return{bytesValue:FE(i.serializer,r._byteString)};if(r instanceof ft){const s=i.databaseId,o=r.firestore._databaseId;if(!o.isEqual(s))throw i.Bu(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${s.projectId}/${s.database}`);return{referenceValue:Zd(r.firestore._databaseId||i.databaseId,r._key.path)}}if(r instanceof ff)return function(o,l){return{mapValue:{fields:{__type__:{stringValue:"__vector__"},value:{arrayValue:{values:o.toArray().map(u=>{if(typeof u!="number")throw l.Bu("VectorValues must only contain numeric values.");return Qd(l.serializer,u)})}}}}}}(r,i);throw i.Bu(`Unsupported field value: ${iu(r)}`)}(t,e)}function pw(t,e){const n={};return dE(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):$r(t,(r,i)=>{const s=xo(i,e.Mu(r));s!=null&&(n[r]=s)}),{mapValue:{fields:n}}}function mw(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof De||t instanceof df||t instanceof Mi||t instanceof ft||t instanceof au||t instanceof ff)}function yf(t,e,n){if(!mw(n)||!function(i){return typeof i=="object"&&i!==null&&(Object.getPrototypeOf(i)===Object.prototype||Object.getPrototypeOf(i)===null)}(n)){const r=iu(n);throw r==="an object"?e.Bu(t+" a custom object"):e.Bu(t+" "+r)}}function xh(t,e,n){if((e=xe(e))instanceof ou)return e._internalPath;if(typeof e=="string")return _f(t,e);throw Rl("Field path arguments must be of type string or ",t,!1,void 0,n)}const P1=new RegExp("[~\\*/\\[\\]]");function _f(t,e,n){if(e.search(P1)>=0)throw Rl(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new ou(...e.split("."))._internalPath}catch{throw Rl(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function Rl(t,e,n,r,i){const s=r&&!r.isEmpty(),o=i!==void 0;let l=`Function ${e}() called with invalid data`;n&&(l+=" (via `toFirestore()`)"),l+=". ";let u="";return(s||o)&&(u+=" (found",s&&(u+=` in field ${r}`),o&&(u+=` in document ${i}`),u+=")"),new $(L.INVALID_ARGUMENT,l+t+u)}function gw(t,e){return t.some(n=>n.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yw{constructor(e,n,r,i,s){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=i,this._converter=s}get id(){return this._key.path.lastSegment()}get ref(){return new ft(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new k1(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(_w("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class k1 extends yw{data(){return super.data()}}function _w(t,e){return typeof e=="string"?_f(t,e):e instanceof ou?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function N1(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new $(L.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class vf{}class D1 extends vf{}function vw(t,e,...n){let r=[];e instanceof vf&&r.push(e),r=r.concat(n),function(s){const o=s.filter(u=>u instanceof wf).length,l=s.filter(u=>u instanceof Ef).length;if(o>1||o>0&&l>0)throw new $(L.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(r);for(const i of r)t=i._apply(t);return t}class Ef extends D1{constructor(e,n,r){super(),this._field=e,this._op=n,this._value=r,this.type="where"}static _create(e,n,r){return new Ef(e,n,r)}_apply(e){const n=this._parse(e);return Ew(e._query,n),new Hi(e.firestore,e.converter,Th(e._query,n))}_parse(e){const n=mf(e.firestore);return function(s,o,l,u,h,f,m){let g;if(h.isKeyField()){if(f==="array-contains"||f==="array-contains-any")throw new $(L.INVALID_ARGUMENT,`Invalid Query. You can't perform '${f}' queries on documentId().`);if(f==="in"||f==="not-in"){Kg(m,f);const S=[];for(const C of m)S.push(qg(u,s,C));g={arrayValue:{values:S}}}else g=qg(u,s,m)}else f!=="in"&&f!=="not-in"&&f!=="array-contains-any"||Kg(m,f),g=C1(l,o,m,f==="in"||f==="not-in");return Pe.create(h,f,g)}(e._query,"where",n,e.firestore._databaseId,this._field,this._op,this._value)}}class wf extends vf{constructor(e,n){super(),this.type=e,this._queryConstraints=n}static _create(e,n){return new wf(e,n)}_parse(e){const n=this._queryConstraints.map(r=>r._parse(e)).filter(r=>r.getFilters().length>0);return n.length===1?n[0]:zt.create(n,this._getOperator())}_apply(e){const n=this._parse(e);return n.getFilters().length===0?e:(function(i,s){let o=i;const l=s.getFlattenedFilters();for(const u of l)Ew(o,u),o=Th(o,u)}(e._query,n),new Hi(e.firestore,e.converter,Th(e._query,n)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}function qg(t,e,n){if(typeof(n=xe(n))=="string"){if(n==="")throw new $(L.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!wE(e)&&n.indexOf("/")!==-1)throw new $(L.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const r=e.path.child(fe.fromString(n));if(!H.isDocumentKey(r))throw new $(L.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return dg(t,new H(r))}if(n instanceof ft)return dg(t,n._key);throw new $(L.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${iu(n)}.`)}function Kg(t,e){if(!Array.isArray(t)||t.length===0)throw new $(L.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function Ew(t,e){const n=function(i,s){for(const o of i)for(const l of o.getFlattenedFilters())if(s.indexOf(l.op)>=0)return l.op;return null}(t.filters,function(i){switch(i){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(n!==null)throw n===e.op?new $(L.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new $(L.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${n.toString()}' filters.`)}class x1{convertValue(e,n="none"){switch(jr(e)){case 0:return null;case 1:return e.booleanValue;case 2:return Se(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(Ur(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 11:return this.convertObject(e.mapValue,n);case 10:return this.convertVectorValue(e.mapValue);default:throw G()}}convertObject(e,n){return this.convertObjectMap(e.fields,n)}convertObjectMap(e,n="none"){const r={};return $r(e,(i,s)=>{r[i]=this.convertValue(s,n)}),r}convertVectorValue(e){var n,r,i;const s=(i=(r=(n=e.fields)===null||n===void 0?void 0:n.value.arrayValue)===null||r===void 0?void 0:r.values)===null||i===void 0?void 0:i.map(o=>Se(o.doubleValue));return new ff(s)}convertGeoPoint(e){return new df(Se(e.latitude),Se(e.longitude))}convertArray(e,n){return(e.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(e,n){switch(n){case"previous":const r=Wd(e);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(ao(e));default:return null}}convertTimestamp(e){const n=rr(e);return new De(n.seconds,n.nanos)}convertDocumentKey(e,n){const r=fe.fromString(e);ae($E(r));const i=new lo(r.get(1),r.get(3)),s=new H(r.popFirst(5));return i.isEqual(n)||Tn(`Document ${s} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function V1(t,e,n){let r;return r=t?t.toFirestore(e):e,r}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ss{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class ww extends yw{constructor(e,n,r,i,s,o){super(e,n,r,i,o),this._firestore=e,this._firestoreImpl=e,this.metadata=s}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new Ua(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const r=this._document.data.field(_w("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}}class Ua extends ww{data(e={}){return super.data(e)}}class O1{constructor(e,n,r,i){this._firestore=e,this._userDataWriter=n,this._snapshot=i,this.metadata=new Ss(i.hasPendingWrites,i.fromCache),this.query=r}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(r=>{e.call(n,new Ua(this._firestore,this._userDataWriter,r.key,r,new Ss(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new $(L.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(i,s){if(i._snapshot.oldDocs.isEmpty()){let o=0;return i._snapshot.docChanges.map(l=>{const u=new Ua(i._firestore,i._userDataWriter,l.doc.key,l.doc,new Ss(i._snapshot.mutatedKeys.has(l.doc.key),i._snapshot.fromCache),i.query.converter);return l.doc,{type:"added",doc:u,oldIndex:-1,newIndex:o++}})}{let o=i._snapshot.oldDocs;return i._snapshot.docChanges.filter(l=>s||l.type!==3).map(l=>{const u=new Ua(i._firestore,i._userDataWriter,l.doc.key,l.doc,new Ss(i._snapshot.mutatedKeys.has(l.doc.key),i._snapshot.fromCache),i.query.converter);let h=-1,f=-1;return l.type!==0&&(h=o.indexOf(l.doc.key),o=o.delete(l.doc.key)),l.type!==1&&(o=o.add(l.doc),f=o.indexOf(l.doc.key)),{type:L1(l.type),doc:u,oldIndex:h,newIndex:f}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function L1(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return G()}}class Tw extends x1{constructor(e){super(),this.firestore=e}convertBytes(e){return new Mi(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new ft(this.firestore,null,n)}}function Cl(t,e,n,...r){t=Jn(t,ft);const i=Jn(t.firestore,Li),s=mf(i);let o;return o=typeof(e=xe(e))=="string"||e instanceof ou?R1(s,"updateDoc",t._key,e,n,r):A1(s,"updateDoc",t._key,e),Tf(i,[o.toMutation(t._key,Ut.exists(!0))])}function Iw(t){return Tf(Jn(t.firestore,Li),[new Yd(t._key,Ut.none())])}function Sw(t,e){const n=Jn(t.firestore,Li),r=kr(t),i=V1(t.converter,e);return Tf(n,[S1(mf(t.firestore),"addDoc",r._key,i,t.converter!==null,{}).toMutation(r._key,Ut.exists(!1))]).then(()=>r)}function Aw(t,...e){var n,r,i;t=xe(t);let s={includeMetadataChanges:!1,source:"default"},o=0;typeof e[o]!="object"||Hg(e[o])||(s=e[o],o++);const l={includeMetadataChanges:s.includeMetadataChanges,source:s.source};if(Hg(e[o])){const m=e[o];e[o]=(n=m.next)===null||n===void 0?void 0:n.bind(m),e[o+1]=(r=m.error)===null||r===void 0?void 0:r.bind(m),e[o+2]=(i=m.complete)===null||i===void 0?void 0:i.bind(m)}let u,h,f;if(t instanceof ft)h=Jn(t.firestore,Li),f=Gd(t._key.path),u={next:m=>{e[o]&&e[o](M1(h,t,m))},error:e[o+1],complete:e[o+2]};else{const m=Jn(t,Hi);h=Jn(m.firestore,Li),f=m._query;const g=new Tw(h);u={next:S=>{e[o]&&e[o](new O1(h,g,m,S))},error:e[o+1],complete:e[o+2]},N1(t._query)}return function(g,S,C,P){const O=new f1(P),w=new Qk(S,O,C);return g.asyncQueue.enqueueAndForget(async()=>Hk(await Ug(g),w)),()=>{O.Za(),g.asyncQueue.enqueueAndForget(async()=>qk(await Ug(g),w))}}(hw(h),f,l,u)}function Tf(t,e){return function(r,i){const s=new Pr;return r.asyncQueue.enqueueAndForget(async()=>s1(await g1(r),i,s)),s.promise}(hw(t),e)}function M1(t,e,n){const r=n.docs.get(e._key),i=new Tw(t);return new ww(t,i,e._key,r,new Ss(n.hasPendingWrites,n.fromCache),e.converter)}function Rw(){return new gf("serverTimestamp")}(function(e,n=!0){(function(i){Bi=i})(ji),Pi(new Lr("firestore",(r,{instanceIdentifier:i,options:s})=>{const o=r.getProvider("app").getImmediate(),l=new Li(new OC(r.getProvider("auth-internal")),new bC(r.getProvider("app-check-internal")),function(h,f){if(!Object.prototype.hasOwnProperty.apply(h.options,["projectId"]))throw new $(L.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new lo(h.options.projectId,f)}(o,i),o);return s=Object.assign({useFetchStreams:n},s),l._setSettings(s),l},"PUBLIC").setMultipleInstances(!0)),Xn(ag,"4.7.3",e),Xn(ag,"4.7.3","esm2017")})();const F1={apiKey:"AIzaSyATzSj1SSu6ucZHHQ83Kpo61222n4UqxW0",authDomain:"todo-app-a4892.firebaseapp.com",projectId:"todo-app-a4892",storageBucket:"todo-app-a4892.firebasestorage.app",messagingSenderId:"1020300473825",appId:"1:1020300473825:web:0db516501754f69a1f4ea0"},Cw=wv(F1),Us=PC(Cw),Ht=v1(Cw),Pw=K.createContext(null);function b1({children:t}){const[e,n]=K.useState(void 0);return K.useEffect(()=>gR(Us,i=>{n(i)}),[]),D.jsx(Pw.Provider,{value:{user:e},children:t})}function kw(){return K.useContext(Pw)}function U1(){const[t,e]=K.useState("signin"),[n,r]=K.useState(""),[i,s]=K.useState(""),[o,l]=K.useState(""),[u,h]=K.useState(!1);async function f(){l(""),h(!0);try{t==="signup"?await dR(Us,n,i):await fR(Us,n,i)}catch(g){l(Gg(g.code))}finally{h(!1)}}async function m(){l("");try{const g=new ln;await FR(Us,g)}catch(g){l(Gg(g.code))}}return D.jsx("div",{className:"auth-page",children:D.jsxs("div",{className:"auth-card",children:[D.jsx("h1",{className:"app-header",children:"Doto Todo app"}),D.jsx("button",{className:"btn-google",onClick:m,children:"Continue with Google"}),D.jsx("div",{className:"auth-divider",children:D.jsx("span",{children:"or"})}),D.jsxs("div",{className:"form",children:[D.jsx("div",{className:"form-field",children:D.jsx("input",{className:"form-input",type:"email",placeholder:"Email",value:n,onChange:g=>r(g.target.value)})}),D.jsx("div",{className:"form-field",children:D.jsx("input",{className:"form-input",type:"password",placeholder:"Password",value:i,onChange:g=>s(g.target.value)})}),o&&D.jsx("p",{className:"form-error",children:o}),D.jsx("button",{className:"btn-primary",onClick:f,disabled:u,children:u?"Please wait...":t==="signup"?"Create account":"Sign in"})]}),D.jsxs("p",{className:"auth-toggle",children:[t==="signin"?"Don't have an account? ":"Already have an account? ",D.jsx("button",{className:"btn-link",onClick:()=>{e(t==="signin"?"signup":"signin"),l("")},children:t==="signin"?"Sign up":"Sign in"})]})]})})}function Gg(t){return{"auth/email-already-in-use":"That email is already registered.","auth/invalid-email":"Please enter a valid email.","auth/weak-password":"Password must be at least 6 characters.","auth/invalid-credential":"Incorrect email or password.","auth/popup-closed-by-user":"Sign-in window was closed."}[t]||"Something went wrong. Please try again."}function Pl({title:t}){const e={};return!t||t.trim()===""?e.title="Title is required":t.length>200&&(e.title="Title must be less than 200 characters"),e}function Qg({date:t}){const e={};if(!t||t.trim()==="")e.date="Date is required";else{const n=new Date(t);isNaN(n.getTime())&&(e.date="Please enter a valid date")}return e}const j1=15;function Nw(t){const e=t.getFullYear(),n=String(t.getMonth()+1).padStart(2,"0"),r=String(t.getDate()).padStart(2,"0");return`${e}-${n}-${r}`}function z1(t,e){const n=Nw(e),r=t.date===n,i=r&&t.dateNotifiedFor!==n;let s=!1,o=!1;if(t.time&&r){const[l,u]=t.time.split(":").map(Number),h=new Date(e);h.setHours(l,u,0,0);const m=(h.getTime()-e.getTime())/(1e3*60);s=m>=0&&m<=j1&&t.timeNotifiedFor!==n,o=m>=-1&&m<=1&&t.nowNotifiedFor!==n}return{shouldNotifyDate:i,shouldNotifyTime:s,shouldNotifyNow:o}}async function Dw(){return"Notification"in window?Notification.permission==="granted"||Notification.permission==="denied"?Notification.permission:await Notification.requestPermission():"unsupported"}const Yg={high:1,normal:2,low:3};function B1(t){return[...t].sort((e,n)=>{const r=Xg(e.dueDate,e.dueTime),i=Xg(n.dueDate,n.dueTime);return r!==i?r-i:Yg[e.priority]-Yg[n.priority]})}function Xg(t,e){if(!t)return 1/0;const n=new Date(t);if(e){const[r,i]=e.split(":");n.setHours(parseInt(r),parseInt(i),0,0)}return n}function $1(t){const[e,n]=K.useState([]),[r,i]=K.useState(!0),[s,o]=K.useState({});K.useEffect(()=>{if(!t)return;const g=vw(Al(Ht,"users",t,"todos"));return Aw(g,C=>{const P=C.docs.map(w=>({id:w.id,...w.data()})),O=B1(P);n(O),i(!1)})},[t]);async function l({title:g,note:S="",priority:C="normal",dueDate:P=null,dueTime:O=null}){const w=Pl({title:g});return Object.keys(w).length>0?(o(w),!1):(o({}),P&&await Dw(),await Sw(Al(Ht,"users",t,"todos"),{title:g.trim(),note:S,priority:C,dueDate:P,dueTime:O,completed:!1,createdAt:Rw()}),!0)}async function u(g,S){await Cl(kr(Ht,"users",t,"todos",g),{completed:!S})}async function h(g){await Iw(kr(Ht,"users",t,"todos",g))}const f=K.useCallback(async(g,S)=>{const C={...S.title!==void 0?Pl({title:S.title}):{}};return Object.keys(C).length>0?(o(C),!1):(o({}),await Cl(kr(Ht,"users",t,"todos",g),S),!0)},[t]);function m(){o({})}return{todos:e,loading:r,errors:s,addTodo:l,toggleTodo:u,deleteTodo:h,updateTodo:f,clearErrors:m}}function W1(t){return[...t].sort((e,n)=>{const r=Jg(e.date,e.time,e.repeat),i=Jg(n.date,n.time,n.repeat);return r-i})}function Jg(t,e,n){const r=new Date;r.setHours(0,0,0,0);const i=new Date(t);if(e){const[s,o]=e.split(":");i.setHours(parseInt(s),parseInt(o),0,0)}return n==="yearly"&&(i.setFullYear(r.getFullYear()),i<r&&i.setFullYear(r.getFullYear()+1)),i}function H1(t){const[e,n]=K.useState([]),[r,i]=K.useState(!0),[s,o]=K.useState({});K.useEffect(()=>{if(!t)return;const g=vw(Al(Ht,"users",t,"dates"));return Aw(g,C=>{const P=C.docs.map(w=>({id:w.id,...w.data()})),O=W1(P);n(O),i(!1)})},[t]);async function l({title:g,note:S="",date:C,time:P="",repeat:O="none"}){const w={...Pl({title:g}),...Qg({date:C})};return Object.keys(w).length>0?(o(w),!1):(o({}),C&&await Dw(),await Sw(Al(Ht,"users",t,"dates"),{title:g.trim(),note:S.trim(),date:C,time:P,repeat:O,createdAt:Rw()}),!0)}async function u(g,S){await Cl(kr(Ht,"users",t,"dates",g),{completed:!S})}async function h(g){await Iw(kr(Ht,"users",t,"dates",g))}const f=K.useCallback(async(g,S)=>{const C={...S.title!==void 0?Pl({title:S.title}):{},...S.date!==void 0?Qg({date:S.date}):{}};return Object.keys(C).length>0?(o(C),!1):(o({}),await Cl(kr(Ht,"users",t,"dates",g),S),!0)},[t]);function m(){o({})}return{dates:e,loading:r,errors:s,addDate:l,toggleDate:u,deleteDate:h,updateDate:f,clearErrors:m}}const q1=60*1e3;function K1(t){K.useEffect(()=>{if(Notification.permission!=="granted")return;function e(){console.log("runCheck firing",new Date);const r=new Date,i=Nw(r);for(const s of t)for(const o of s.items){const{shouldNotifyDate:l,shouldNotifyTime:u,shouldNotifyNow:h}=z1(o,r);l&&(new Notification("Due today",{body:o.title}),s.updateItem(o.id,{dateNotifiedFor:i})),u&&(new Notification("Coming up soon",{body:o.title}),s.updateItem(o.id,{timeNotifiedFor:i})),h&&(new Notification("Starting now",{body:o.title}),s.updateItem(o.id,{nowNotifiedFor:i}))}}const n=setInterval(e,q1);return()=>clearInterval(n)},[t])}function Zg({todo:t,onToggle:e,onUpdate:n,onDelete:r,errors:i,clearErrors:s}){const[o,l]=K.useState(!1),[u,h]=K.useState(t.title),[f,m]=K.useState(t.note||""),[g,S]=K.useState(t.priority),[C,P]=K.useState(t.dueDate||""),[O,w]=K.useState(t.dueTime||"");async function _(){await n(t.id,{title:u,note:f,priority:g,dueDate:C,dueTime:O})&&l(!1)}function A(){l(!0),s()}function V(){h(t.title),m(t.note),S(t.priority),P(t.dueDate),w(t.dueTime),l(!1),s()}return o?D.jsx("div",{className:"item item-editing",children:D.jsxs("div",{className:"form edit-form",children:[D.jsx("div",{className:"form-field",children:D.jsx("input",{className:"form-input",value:u,onChange:b=>h(b.target.value)})}),D.jsx("div",{className:"form-field",children:D.jsx("textarea",{className:"form-textarea",value:f,onChange:b=>m(b.target.value)})}),D.jsx("div",{className:"form-field",children:D.jsxs("select",{className:"form-select",value:g,onChange:b=>S(b.target.value),children:[D.jsx("option",{value:"high",children:"High"}),D.jsx("option",{value:"normal",children:"Normal"}),D.jsx("option",{value:"low",children:"Low"})]})}),D.jsx("div",{className:"form-field",children:D.jsx("input",{className:"form-input",type:"date",value:C,onChange:b=>P(b.target.value)})}),D.jsx("div",{className:"form-field",children:D.jsx("input",{className:"form-input",type:"time",value:O,onChange:b=>w(b.target.value)})}),i.title&&D.jsx("p",{className:"form-error",children:i.title}),D.jsxs("div",{className:"form-actions",children:[D.jsx("button",{className:"btn-primary",onClick:_,children:"Save"}),D.jsx("button",{className:"btn-secondary",onClick:V,children:"Cancel"})]})]})}):D.jsxs("div",{className:"item",children:[D.jsxs("div",{className:"item-main",children:[D.jsx("input",{type:"checkbox",checked:t.completed,onChange:()=>e(t.id,t.completed)}),D.jsxs("div",{className:t.completed?"item-content item-content-done":"item-content",children:[t.title&&D.jsx("p",{children:t.title}),t.note&&D.jsx("p",{children:t.note}),t.dueDate&&D.jsxs("p",{children:["Due: ",t.dueDate]}),t.dueTime&&D.jsxs("p",{children:["Time: ",t.dueTime]}),D.jsxs("p",{children:["Priority: ",t.priority]})]})]}),D.jsxs("div",{className:"item-actions",children:[D.jsx("button",{className:"btn-primary",onClick:A,children:"Edit"}),D.jsx("button",{className:"btn-secondary",onClick:()=>r(t.id),children:"Delete"})]})]})}function G1({todos:t,loading:e,errors:n,onToggle:r,onUpdate:i,onDelete:s,clearErrors:o}){const l=t.filter(h=>!h.completed),u=t.filter(h=>h.completed);return e?D.jsx("p",{children:"Loading..."}):D.jsxs("div",{className:"todo-items-col",children:[D.jsx("h2",{children:"My Tasks"}),l.length===0&&D.jsx("p",{children:"No tasks yet — add one above!"}),l.map(h=>D.jsx(Zg,{todo:h,onToggle:r,onUpdate:i,onDelete:s,errors:n,clearErrors:o},h.id)),u.length>0&&D.jsxs("div",{children:[D.jsxs("p",{children:["Completed (",u.length,")"]}),u.map(h=>D.jsx(Zg,{todo:h,onToggle:r,onUpdate:i,onDelete:s,errors:n,clearErrors:o},h.id))]})]})}function Q1({onAdd:t,errors:e,onSuccess:n,onCancel:r}){const[i,s]=K.useState(""),[o,l]=K.useState(""),[u,h]=K.useState("normal"),[f,m]=K.useState(""),[g,S]=K.useState("");async function C(){await t({title:i,note:o,priority:u,dueDate:f,dueTime:g})&&(s(""),l(""),h("normal"),m(""),S(""),n==null||n())}return D.jsxs("div",{className:"form",children:[D.jsx("div",{className:"form-field",children:D.jsx("input",{className:"form-input",type:"text",placeholder:"Task title",value:i,onChange:P=>s(P.target.value)})}),D.jsx("div",{className:"form-field",children:D.jsx("textarea",{className:"form-textarea",placeholder:"Note (optional)",value:o,onChange:P=>l(P.target.value)})}),D.jsx("div",{className:"form-field",children:D.jsxs("select",{className:"form-select",value:u,onChange:P=>h(P.target.value),children:[D.jsx("option",{value:"high",children:"High"}),D.jsx("option",{value:"normal",children:"Normal"}),D.jsx("option",{value:"low",children:"Low"})]})}),D.jsxs("div",{className:"form-row",children:[D.jsx("input",{className:"form-input",type:"date",value:f,onChange:P=>m(P.target.value)}),D.jsx("input",{className:"form-input",type:"time",value:g,onChange:P=>S(P.target.value)})]}),e.title&&D.jsx("p",{className:"form-error",children:e.title}),D.jsxs("div",{className:"form-actions",children:[D.jsx("button",{className:"btn-primary",onClick:C,children:"Add Task"}),D.jsx("button",{className:"btn-secondary",onClick:r,children:"Cancel"})]})]})}function ey({date:t,onToggle:e,onUpdate:n,onDelete:r,errors:i,clearErrors:s}){const[o,l]=K.useState(!1),[u,h]=K.useState(t.title),[f,m]=K.useState(t.note||""),[g,S]=K.useState(t.date),[C,P]=K.useState(t.time||"");async function O(){await n(t.id,{title:u,note:f,date:g,time:C})&&l(!1)}function w(){l(!0),s()}function _(){h(t.title),m(t.note),S(t.date),P(t.time),l(!1),s()}return o?D.jsx("div",{className:"item item-editing",children:D.jsxs("div",{className:"form edit-form",children:[D.jsx("div",{className:"form-field",children:D.jsx("input",{className:"form-input",value:u,onChange:A=>h(A.target.value)})}),D.jsx("div",{className:"form-field",children:D.jsx("textarea",{className:"form-textarea",value:f,onChange:A=>m(A.target.value)})}),D.jsx("div",{className:"form-field",children:D.jsx("input",{className:"form-input",type:"date",value:g,onChange:A=>S(A.target.value)})}),D.jsx("div",{className:"form-field",children:D.jsx("input",{className:"form-input",type:"time",value:C,onChange:A=>P(A.target.value)})}),i.title&&D.jsx("p",{className:"form-error",children:i.title}),i.date&&D.jsx("p",{className:"form-error",children:i.date}),D.jsxs("div",{className:"form-actions",children:[D.jsx("button",{className:"btn-primary",onClick:O,children:"Save"}),D.jsx("button",{className:"btn-secondary",onClick:_,children:"Cancel"})]})]})}):D.jsxs("div",{className:"item",children:[D.jsxs("div",{className:"item-main",children:[D.jsx("input",{type:"checkbox",checked:t.completed,onChange:()=>e(t.id,t.completed)}),D.jsxs("div",{className:t.completed?"item-content item-content-done":"item-content",children:[t.title&&D.jsx("p",{children:t.title}),t.note&&D.jsx("p",{children:t.note}),t.date&&D.jsxs("p",{children:["Date: ",t.date]}),t.time&&D.jsxs("p",{children:["Time: ",t.time]}),t.repeat==="yearly"&&D.jsx("span",{children:" 🔁 Repeats yearly"})]})]}),D.jsxs("div",{className:"item-actions",children:[D.jsx("button",{className:"btn-primary",onClick:w,children:"Edit"}),D.jsx("button",{className:"btn-secondary",onClick:()=>r(t.id),children:"Delete"})]})]})}function Y1({dates:t,loading:e,errors:n,onAdd:r,onToggle:i,onUpdate:s,onDelete:o,clearErrors:l}){const u=t.filter(f=>!f.completed),h=t.filter(f=>f.completed);return e?D.jsx("p",{children:"Loading..."}):D.jsxs("div",{className:"todo-date-col",children:[D.jsx("h2",{children:"My Dates"}),u.length===0&&D.jsx("p",{children:"No dates yet — add one above!"}),u.map(f=>D.jsx(ey,{date:f,onToggle:i,onUpdate:s,onDelete:o,errors:n,clearErrors:l},f.id)),h.length>0&&D.jsxs("div",{children:[D.jsxs("p",{children:["Completed (",h.length,")"]}),h.map(f=>D.jsx(ey,{date:f,onToggle:i,onUpdate:s,onDelete:o,errors:n,clearErrors:l},f.id))]})]})}function X1({onAdd:t,errors:e,onSuccess:n,onCancel:r}){const[i,s]=K.useState(""),[o,l]=K.useState(""),[u,h]=K.useState(""),[f,m]=K.useState(""),[g,S]=K.useState("none");async function C(){await t({title:i,note:o,date:u,time:f,repeat:g})&&(s(""),l(""),h(""),m(""),S("none"),n==null||n())}return D.jsxs("div",{className:"form",children:[D.jsx("div",{className:"form-field",children:D.jsx("input",{className:"form-input",type:"text",placeholder:"Date title",value:i,onChange:P=>s(P.target.value)})}),D.jsx("div",{className:"form-field",children:D.jsx("textarea",{className:"form-textarea",placeholder:"Note (optional)",value:o,onChange:P=>l(P.target.value)})}),D.jsxs("div",{className:"form-row",children:[D.jsx("input",{className:"form-input",type:"date",value:u,onChange:P=>h(P.target.value)}),D.jsx("input",{className:"form-input",type:"time",value:f,onChange:P=>m(P.target.value)})]}),D.jsx("div",{className:"form-field",children:D.jsxs("select",{className:"form-select",value:g,onChange:P=>S(P.target.value),children:[D.jsx("option",{value:"none",children:"Does not repeat"}),D.jsx("option",{value:"yearly",children:"Repeats yearly"})]})}),e.title&&D.jsx("p",{className:"form-error",children:e.title}),e.date&&D.jsx("p",{className:"form-error",children:e.date}),D.jsxs("div",{className:"form-actions",children:[D.jsx("button",{className:"btn-primary",onClick:C,children:"Add Date"}),D.jsx("button",{className:"btn-secondary",onClick:r,children:"Cancel"})]})]})}function J1(){const{user:t}=kw(),{dates:e,loading:n,errors:r,addDate:i,toggleDate:s,updateDate:o,deleteDate:l,clearErrors:u}=H1(t.uid),{todos:h,loading:f,errors:m,addTodo:g,toggleTodo:S,updateTodo:C,deleteTodo:P,clearErrors:O}=$1(t.uid),[w,_]=K.useState(!1),[A,V]=K.useState(null);function b(y){V(y),_(!0),O(),u()}function U(){_(!1),V(null),O(),u()}const E=K.useMemo(()=>[{items:h.map(y=>({...y,date:y.dueDate,time:y.dueTime})),updateItem:C},{items:e,updateItem:o}],[h,e,C,o]);return K1(E),D.jsxs("div",{className:"app-container",children:[D.jsxs("header",{className:"app-header-container",children:[D.jsx("h1",{className:"app-header",children:"Doto Todo app"}),D.jsxs("p",{children:["Welcome, ",t.email]}),D.jsx("button",{className:"btn-secondary",onClick:()=>yR(Us),children:"Sign out"})]}),D.jsxs("main",{children:[D.jsxs("div",{className:"todo-list-container",children:[D.jsx(Y1,{dates:e,errors:r,loading:n,onToggle:s,onUpdate:o,onDelete:l,clearErrors:u}),D.jsx(G1,{todos:h,errors:m,loading:f,onToggle:S,onUpdate:C,onDelete:P,clearErrors:O})]}),D.jsx("button",{className:"add-button",onClick:()=>_(!0),children:"+"}),w&&!A&&D.jsx("div",{className:"modal-overlay",children:D.jsx("div",{className:"modal-card",children:D.jsxs("div",{className:"add-choice-buttons",children:[D.jsx("button",{className:"btn-primary",onClick:()=>b("todo"),children:"Add Task"}),D.jsx("button",{className:"btn-primary",onClick:()=>b("date"),children:"Add Date"}),D.jsx("button",{className:"btn-secondary",onClick:U,children:"Cancel"})]})})}),w&&A==="todo"&&D.jsx("div",{className:"modal-overlay",children:D.jsx("div",{className:"modal-card",children:D.jsx(Q1,{onAdd:g,errors:m,onSuccess:U,onCancel:U})})}),w&&A==="date"&&D.jsx("div",{className:"modal-overlay",children:D.jsx("div",{className:"modal-card",children:D.jsx(X1,{onAdd:i,errors:r,onSuccess:U,onCancel:U})})})]})]})}function Z1(){const{user:t}=kw();return t===void 0?D.jsx("p",{children:"Loading..."}):t===null?D.jsx(U1,{}):D.jsx(J1,{})}mc.createRoot(document.getElementById("root")).render(D.jsx(AT.StrictMode,{children:D.jsx(b1,{children:D.jsx(Z1,{})})}));
