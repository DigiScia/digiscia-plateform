(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const c of document.querySelectorAll('link[rel="modulepreload"]'))o(c);new MutationObserver(c=>{for(const d of c)if(d.type==="childList")for(const h of d.addedNodes)h.tagName==="LINK"&&h.rel==="modulepreload"&&o(h)}).observe(document,{childList:!0,subtree:!0});function u(c){const d={};return c.integrity&&(d.integrity=c.integrity),c.referrerPolicy&&(d.referrerPolicy=c.referrerPolicy),c.crossOrigin==="use-credentials"?d.credentials="include":c.crossOrigin==="anonymous"?d.credentials="omit":d.credentials="same-origin",d}function o(c){if(c.ep)return;c.ep=!0;const d=u(c);fetch(c.href,d)}})();var Tr=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function G0(l){return l&&l.__esModule&&Object.prototype.hasOwnProperty.call(l,"default")?l.default:l}var gu={exports:{}},Wl={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var qm;function y2(){if(qm)return Wl;qm=1;var l=Symbol.for("react.transitional.element"),r=Symbol.for("react.fragment");function u(o,c,d){var h=null;if(d!==void 0&&(h=""+d),c.key!==void 0&&(h=""+c.key),"key"in c){d={};for(var v in c)v!=="key"&&(d[v]=c[v])}else d=c;return c=d.ref,{$$typeof:l,type:o,key:h,ref:c!==void 0?c:null,props:d}}return Wl.Fragment=r,Wl.jsx=u,Wl.jsxs=u,Wl}var Ym;function b2(){return Ym||(Ym=1,gu.exports=y2()),gu.exports}var f=b2(),vu={exports:{}},pe={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Fm;function x2(){if(Fm)return pe;Fm=1;var l=Symbol.for("react.transitional.element"),r=Symbol.for("react.portal"),u=Symbol.for("react.fragment"),o=Symbol.for("react.strict_mode"),c=Symbol.for("react.profiler"),d=Symbol.for("react.consumer"),h=Symbol.for("react.context"),v=Symbol.for("react.forward_ref"),g=Symbol.for("react.suspense"),p=Symbol.for("react.memo"),b=Symbol.for("react.lazy"),w=Symbol.iterator;function R(O){return O===null||typeof O!="object"?null:(O=w&&O[w]||O["@@iterator"],typeof O=="function"?O:null)}var j={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},x=Object.assign,T={};function E(O,G,ae){this.props=O,this.context=G,this.refs=T,this.updater=ae||j}E.prototype.isReactComponent={},E.prototype.setState=function(O,G){if(typeof O!="object"&&typeof O!="function"&&O!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,O,G,"setState")},E.prototype.forceUpdate=function(O){this.updater.enqueueForceUpdate(this,O,"forceUpdate")};function _(){}_.prototype=E.prototype;function M(O,G,ae){this.props=O,this.context=G,this.refs=T,this.updater=ae||j}var C=M.prototype=new _;C.constructor=M,x(C,E.prototype),C.isPureReactComponent=!0;var Q=Array.isArray,V={H:null,A:null,T:null,S:null},$=Object.prototype.hasOwnProperty;function J(O,G,ae,ne,I,he){return ae=he.ref,{$$typeof:l,type:O,key:G,ref:ae!==void 0?ae:null,props:he}}function ie(O,G){return J(O.type,G,void 0,void 0,void 0,O.props)}function F(O){return typeof O=="object"&&O!==null&&O.$$typeof===l}function Z(O){var G={"=":"=0",":":"=2"};return"$"+O.replace(/[=:]/g,function(ae){return G[ae]})}var W=/\/+/g;function U(O,G){return typeof O=="object"&&O!==null&&O.key!=null?Z(""+O.key):G.toString(36)}function ee(){}function P(O){switch(O.status){case"fulfilled":return O.value;case"rejected":throw O.reason;default:switch(typeof O.status=="string"?O.then(ee,ee):(O.status="pending",O.then(function(G){O.status==="pending"&&(O.status="fulfilled",O.value=G)},function(G){O.status==="pending"&&(O.status="rejected",O.reason=G)})),O.status){case"fulfilled":return O.value;case"rejected":throw O.reason}}throw O}function we(O,G,ae,ne,I){var he=typeof O;(he==="undefined"||he==="boolean")&&(O=null);var fe=!1;if(O===null)fe=!0;else switch(he){case"bigint":case"string":case"number":fe=!0;break;case"object":switch(O.$$typeof){case l:case r:fe=!0;break;case b:return fe=O._init,we(fe(O._payload),G,ae,ne,I)}}if(fe)return I=I(O),fe=ne===""?"."+U(O,0):ne,Q(I)?(ae="",fe!=null&&(ae=fe.replace(W,"$&/")+"/"),we(I,G,ae,"",function(Ee){return Ee})):I!=null&&(F(I)&&(I=ie(I,ae+(I.key==null||O&&O.key===I.key?"":(""+I.key).replace(W,"$&/")+"/")+fe)),G.push(I)),1;fe=0;var ze=ne===""?".":ne+":";if(Q(O))for(var ue=0;ue<O.length;ue++)ne=O[ue],he=ze+U(ne,ue),fe+=we(ne,G,ae,he,I);else if(ue=R(O),typeof ue=="function")for(O=ue.call(O),ue=0;!(ne=O.next()).done;)ne=ne.value,he=ze+U(ne,ue++),fe+=we(ne,G,ae,he,I);else if(he==="object"){if(typeof O.then=="function")return we(P(O),G,ae,ne,I);throw G=String(O),Error("Objects are not valid as a React child (found: "+(G==="[object Object]"?"object with keys {"+Object.keys(O).join(", ")+"}":G)+"). If you meant to render a collection of children, use an array instead.")}return fe}function K(O,G,ae){if(O==null)return O;var ne=[],I=0;return we(O,ne,"","",function(he){return G.call(ae,he,I++)}),ne}function se(O){if(O._status===-1){var G=O._result;G=G(),G.then(function(ae){(O._status===0||O._status===-1)&&(O._status=1,O._result=ae)},function(ae){(O._status===0||O._status===-1)&&(O._status=2,O._result=ae)}),O._status===-1&&(O._status=0,O._result=G)}if(O._status===1)return O._result.default;throw O._result}var te=typeof reportError=="function"?reportError:function(O){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var G=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof O=="object"&&O!==null&&typeof O.message=="string"?String(O.message):String(O),error:O});if(!window.dispatchEvent(G))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",O);return}console.error(O)};function be(){}return pe.Children={map:K,forEach:function(O,G,ae){K(O,function(){G.apply(this,arguments)},ae)},count:function(O){var G=0;return K(O,function(){G++}),G},toArray:function(O){return K(O,function(G){return G})||[]},only:function(O){if(!F(O))throw Error("React.Children.only expected to receive a single React element child.");return O}},pe.Component=E,pe.Fragment=u,pe.Profiler=c,pe.PureComponent=M,pe.StrictMode=o,pe.Suspense=g,pe.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=V,pe.act=function(){throw Error("act(...) is not supported in production builds of React.")},pe.cache=function(O){return function(){return O.apply(null,arguments)}},pe.cloneElement=function(O,G,ae){if(O==null)throw Error("The argument must be a React element, but you passed "+O+".");var ne=x({},O.props),I=O.key,he=void 0;if(G!=null)for(fe in G.ref!==void 0&&(he=void 0),G.key!==void 0&&(I=""+G.key),G)!$.call(G,fe)||fe==="key"||fe==="__self"||fe==="__source"||fe==="ref"&&G.ref===void 0||(ne[fe]=G[fe]);var fe=arguments.length-2;if(fe===1)ne.children=ae;else if(1<fe){for(var ze=Array(fe),ue=0;ue<fe;ue++)ze[ue]=arguments[ue+2];ne.children=ze}return J(O.type,I,void 0,void 0,he,ne)},pe.createContext=function(O){return O={$$typeof:h,_currentValue:O,_currentValue2:O,_threadCount:0,Provider:null,Consumer:null},O.Provider=O,O.Consumer={$$typeof:d,_context:O},O},pe.createElement=function(O,G,ae){var ne,I={},he=null;if(G!=null)for(ne in G.key!==void 0&&(he=""+G.key),G)$.call(G,ne)&&ne!=="key"&&ne!=="__self"&&ne!=="__source"&&(I[ne]=G[ne]);var fe=arguments.length-2;if(fe===1)I.children=ae;else if(1<fe){for(var ze=Array(fe),ue=0;ue<fe;ue++)ze[ue]=arguments[ue+2];I.children=ze}if(O&&O.defaultProps)for(ne in fe=O.defaultProps,fe)I[ne]===void 0&&(I[ne]=fe[ne]);return J(O,he,void 0,void 0,null,I)},pe.createRef=function(){return{current:null}},pe.forwardRef=function(O){return{$$typeof:v,render:O}},pe.isValidElement=F,pe.lazy=function(O){return{$$typeof:b,_payload:{_status:-1,_result:O},_init:se}},pe.memo=function(O,G){return{$$typeof:p,type:O,compare:G===void 0?null:G}},pe.startTransition=function(O){var G=V.T,ae={};V.T=ae;try{var ne=O(),I=V.S;I!==null&&I(ae,ne),typeof ne=="object"&&ne!==null&&typeof ne.then=="function"&&ne.then(be,te)}catch(he){te(he)}finally{V.T=G}},pe.unstable_useCacheRefresh=function(){return V.H.useCacheRefresh()},pe.use=function(O){return V.H.use(O)},pe.useActionState=function(O,G,ae){return V.H.useActionState(O,G,ae)},pe.useCallback=function(O,G){return V.H.useCallback(O,G)},pe.useContext=function(O){return V.H.useContext(O)},pe.useDebugValue=function(){},pe.useDeferredValue=function(O,G){return V.H.useDeferredValue(O,G)},pe.useEffect=function(O,G){return V.H.useEffect(O,G)},pe.useId=function(){return V.H.useId()},pe.useImperativeHandle=function(O,G,ae){return V.H.useImperativeHandle(O,G,ae)},pe.useInsertionEffect=function(O,G){return V.H.useInsertionEffect(O,G)},pe.useLayoutEffect=function(O,G){return V.H.useLayoutEffect(O,G)},pe.useMemo=function(O,G){return V.H.useMemo(O,G)},pe.useOptimistic=function(O,G){return V.H.useOptimistic(O,G)},pe.useReducer=function(O,G,ae){return V.H.useReducer(O,G,ae)},pe.useRef=function(O){return V.H.useRef(O)},pe.useState=function(O){return V.H.useState(O)},pe.useSyncExternalStore=function(O,G,ae){return V.H.useSyncExternalStore(O,G,ae)},pe.useTransition=function(){return V.H.useTransition()},pe.version="19.0.0",pe}var Gm;function ma(){return Gm||(Gm=1,vu.exports=x2()),vu.exports}var D=ma();const Bt=G0(D);var yu={exports:{}},Pl={},bu={exports:{}},xu={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Vm;function S2(){return Vm||(Vm=1,function(l){function r(K,se){var te=K.length;K.push(se);e:for(;0<te;){var be=te-1>>>1,O=K[be];if(0<c(O,se))K[be]=se,K[te]=O,te=be;else break e}}function u(K){return K.length===0?null:K[0]}function o(K){if(K.length===0)return null;var se=K[0],te=K.pop();if(te!==se){K[0]=te;e:for(var be=0,O=K.length,G=O>>>1;be<G;){var ae=2*(be+1)-1,ne=K[ae],I=ae+1,he=K[I];if(0>c(ne,te))I<O&&0>c(he,ne)?(K[be]=he,K[I]=te,be=I):(K[be]=ne,K[ae]=te,be=ae);else if(I<O&&0>c(he,te))K[be]=he,K[I]=te,be=I;else break e}}return se}function c(K,se){var te=K.sortIndex-se.sortIndex;return te!==0?te:K.id-se.id}if(l.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var d=performance;l.unstable_now=function(){return d.now()}}else{var h=Date,v=h.now();l.unstable_now=function(){return h.now()-v}}var g=[],p=[],b=1,w=null,R=3,j=!1,x=!1,T=!1,E=typeof setTimeout=="function"?setTimeout:null,_=typeof clearTimeout=="function"?clearTimeout:null,M=typeof setImmediate<"u"?setImmediate:null;function C(K){for(var se=u(p);se!==null;){if(se.callback===null)o(p);else if(se.startTime<=K)o(p),se.sortIndex=se.expirationTime,r(g,se);else break;se=u(p)}}function Q(K){if(T=!1,C(K),!x)if(u(g)!==null)x=!0,P();else{var se=u(p);se!==null&&we(Q,se.startTime-K)}}var V=!1,$=-1,J=5,ie=-1;function F(){return!(l.unstable_now()-ie<J)}function Z(){if(V){var K=l.unstable_now();ie=K;var se=!0;try{e:{x=!1,T&&(T=!1,_($),$=-1),j=!0;var te=R;try{t:{for(C(K),w=u(g);w!==null&&!(w.expirationTime>K&&F());){var be=w.callback;if(typeof be=="function"){w.callback=null,R=w.priorityLevel;var O=be(w.expirationTime<=K);if(K=l.unstable_now(),typeof O=="function"){w.callback=O,C(K),se=!0;break t}w===u(g)&&o(g),C(K)}else o(g);w=u(g)}if(w!==null)se=!0;else{var G=u(p);G!==null&&we(Q,G.startTime-K),se=!1}}break e}finally{w=null,R=te,j=!1}se=void 0}}finally{se?W():V=!1}}}var W;if(typeof M=="function")W=function(){M(Z)};else if(typeof MessageChannel<"u"){var U=new MessageChannel,ee=U.port2;U.port1.onmessage=Z,W=function(){ee.postMessage(null)}}else W=function(){E(Z,0)};function P(){V||(V=!0,W())}function we(K,se){$=E(function(){K(l.unstable_now())},se)}l.unstable_IdlePriority=5,l.unstable_ImmediatePriority=1,l.unstable_LowPriority=4,l.unstable_NormalPriority=3,l.unstable_Profiling=null,l.unstable_UserBlockingPriority=2,l.unstable_cancelCallback=function(K){K.callback=null},l.unstable_continueExecution=function(){x||j||(x=!0,P())},l.unstable_forceFrameRate=function(K){0>K||125<K?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):J=0<K?Math.floor(1e3/K):5},l.unstable_getCurrentPriorityLevel=function(){return R},l.unstable_getFirstCallbackNode=function(){return u(g)},l.unstable_next=function(K){switch(R){case 1:case 2:case 3:var se=3;break;default:se=R}var te=R;R=se;try{return K()}finally{R=te}},l.unstable_pauseExecution=function(){},l.unstable_requestPaint=function(){},l.unstable_runWithPriority=function(K,se){switch(K){case 1:case 2:case 3:case 4:case 5:break;default:K=3}var te=R;R=K;try{return se()}finally{R=te}},l.unstable_scheduleCallback=function(K,se,te){var be=l.unstable_now();switch(typeof te=="object"&&te!==null?(te=te.delay,te=typeof te=="number"&&0<te?be+te:be):te=be,K){case 1:var O=-1;break;case 2:O=250;break;case 5:O=1073741823;break;case 4:O=1e4;break;default:O=5e3}return O=te+O,K={id:b++,callback:se,priorityLevel:K,startTime:te,expirationTime:O,sortIndex:-1},te>be?(K.sortIndex=te,r(p,K),u(g)===null&&K===u(p)&&(T?(_($),$=-1):T=!0,we(Q,te-be))):(K.sortIndex=O,r(g,K),x||j||(x=!0,P())),K},l.unstable_shouldYield=F,l.unstable_wrapCallback=function(K){var se=R;return function(){var te=R;R=se;try{return K.apply(this,arguments)}finally{R=te}}}}(xu)),xu}var Xm;function w2(){return Xm||(Xm=1,bu.exports=S2()),bu.exports}var Su={exports:{}},lt={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Qm;function E2(){if(Qm)return lt;Qm=1;var l=ma();function r(g){var p="https://react.dev/errors/"+g;if(1<arguments.length){p+="?args[]="+encodeURIComponent(arguments[1]);for(var b=2;b<arguments.length;b++)p+="&args[]="+encodeURIComponent(arguments[b])}return"Minified React error #"+g+"; visit "+p+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function u(){}var o={d:{f:u,r:function(){throw Error(r(522))},D:u,C:u,L:u,m:u,X:u,S:u,M:u},p:0,findDOMNode:null},c=Symbol.for("react.portal");function d(g,p,b){var w=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:c,key:w==null?null:""+w,children:g,containerInfo:p,implementation:b}}var h=l.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function v(g,p){if(g==="font")return"";if(typeof p=="string")return p==="use-credentials"?p:""}return lt.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=o,lt.createPortal=function(g,p){var b=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!p||p.nodeType!==1&&p.nodeType!==9&&p.nodeType!==11)throw Error(r(299));return d(g,p,null,b)},lt.flushSync=function(g){var p=h.T,b=o.p;try{if(h.T=null,o.p=2,g)return g()}finally{h.T=p,o.p=b,o.d.f()}},lt.preconnect=function(g,p){typeof g=="string"&&(p?(p=p.crossOrigin,p=typeof p=="string"?p==="use-credentials"?p:"":void 0):p=null,o.d.C(g,p))},lt.prefetchDNS=function(g){typeof g=="string"&&o.d.D(g)},lt.preinit=function(g,p){if(typeof g=="string"&&p&&typeof p.as=="string"){var b=p.as,w=v(b,p.crossOrigin),R=typeof p.integrity=="string"?p.integrity:void 0,j=typeof p.fetchPriority=="string"?p.fetchPriority:void 0;b==="style"?o.d.S(g,typeof p.precedence=="string"?p.precedence:void 0,{crossOrigin:w,integrity:R,fetchPriority:j}):b==="script"&&o.d.X(g,{crossOrigin:w,integrity:R,fetchPriority:j,nonce:typeof p.nonce=="string"?p.nonce:void 0})}},lt.preinitModule=function(g,p){if(typeof g=="string")if(typeof p=="object"&&p!==null){if(p.as==null||p.as==="script"){var b=v(p.as,p.crossOrigin);o.d.M(g,{crossOrigin:b,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0})}}else p==null&&o.d.M(g)},lt.preload=function(g,p){if(typeof g=="string"&&typeof p=="object"&&p!==null&&typeof p.as=="string"){var b=p.as,w=v(b,p.crossOrigin);o.d.L(g,b,{crossOrigin:w,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0,type:typeof p.type=="string"?p.type:void 0,fetchPriority:typeof p.fetchPriority=="string"?p.fetchPriority:void 0,referrerPolicy:typeof p.referrerPolicy=="string"?p.referrerPolicy:void 0,imageSrcSet:typeof p.imageSrcSet=="string"?p.imageSrcSet:void 0,imageSizes:typeof p.imageSizes=="string"?p.imageSizes:void 0,media:typeof p.media=="string"?p.media:void 0})}},lt.preloadModule=function(g,p){if(typeof g=="string")if(p){var b=v(p.as,p.crossOrigin);o.d.m(g,{as:typeof p.as=="string"&&p.as!=="script"?p.as:void 0,crossOrigin:b,integrity:typeof p.integrity=="string"?p.integrity:void 0})}else o.d.m(g)},lt.requestFormReset=function(g){o.d.r(g)},lt.unstable_batchedUpdates=function(g,p){return g(p)},lt.useFormState=function(g,p,b){return h.H.useFormState(g,p,b)},lt.useFormStatus=function(){return h.H.useHostTransitionStatus()},lt.version="19.0.0",lt}var Zm;function Yu(){if(Zm)return Su.exports;Zm=1;function l(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(l)}catch(r){console.error(r)}}return l(),Su.exports=E2(),Su.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Km;function j2(){if(Km)return Pl;Km=1;var l=w2(),r=ma(),u=Yu();function o(e){var t="https://react.dev/errors/"+e;if(1<arguments.length){t+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)t+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function c(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}var d=Symbol.for("react.element"),h=Symbol.for("react.transitional.element"),v=Symbol.for("react.portal"),g=Symbol.for("react.fragment"),p=Symbol.for("react.strict_mode"),b=Symbol.for("react.profiler"),w=Symbol.for("react.provider"),R=Symbol.for("react.consumer"),j=Symbol.for("react.context"),x=Symbol.for("react.forward_ref"),T=Symbol.for("react.suspense"),E=Symbol.for("react.suspense_list"),_=Symbol.for("react.memo"),M=Symbol.for("react.lazy"),C=Symbol.for("react.offscreen"),Q=Symbol.for("react.memo_cache_sentinel"),V=Symbol.iterator;function $(e){return e===null||typeof e!="object"?null:(e=V&&e[V]||e["@@iterator"],typeof e=="function"?e:null)}var J=Symbol.for("react.client.reference");function ie(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===J?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case g:return"Fragment";case v:return"Portal";case b:return"Profiler";case p:return"StrictMode";case T:return"Suspense";case E:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case j:return(e.displayName||"Context")+".Provider";case R:return(e._context.displayName||"Context")+".Consumer";case x:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case _:return t=e.displayName||null,t!==null?t:ie(e.type)||"Memo";case M:t=e._payload,e=e._init;try{return ie(e(t))}catch{}}return null}var F=r.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,Z=Object.assign,W,U;function ee(e){if(W===void 0)try{throw Error()}catch(a){var t=a.stack.trim().match(/\n( *(at )?)/);W=t&&t[1]||"",U=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+W+e+U}var P=!1;function we(e,t){if(!e||P)return"";P=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var n={DetermineComponentFrameRoot:function(){try{if(t){var X=function(){throw Error()};if(Object.defineProperty(X.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(X,[])}catch(L){var B=L}Reflect.construct(e,[],X)}else{try{X.call()}catch(L){B=L}e.call(X.prototype)}}else{try{throw Error()}catch(L){B=L}(X=e())&&typeof X.catch=="function"&&X.catch(function(){})}}catch(L){if(L&&B&&typeof L.stack=="string")return[L.stack,B.stack]}return[null,null]}};n.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var i=Object.getOwnPropertyDescriptor(n.DetermineComponentFrameRoot,"name");i&&i.configurable&&Object.defineProperty(n.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var s=n.DetermineComponentFrameRoot(),m=s[0],y=s[1];if(m&&y){var S=m.split(`
`),N=y.split(`
`);for(i=n=0;n<S.length&&!S[n].includes("DetermineComponentFrameRoot");)n++;for(;i<N.length&&!N[i].includes("DetermineComponentFrameRoot");)i++;if(n===S.length||i===N.length)for(n=S.length-1,i=N.length-1;1<=n&&0<=i&&S[n]!==N[i];)i--;for(;1<=n&&0<=i;n--,i--)if(S[n]!==N[i]){if(n!==1||i!==1)do if(n--,i--,0>i||S[n]!==N[i]){var q=`
`+S[n].replace(" at new "," at ");return e.displayName&&q.includes("<anonymous>")&&(q=q.replace("<anonymous>",e.displayName)),q}while(1<=n&&0<=i);break}}}finally{P=!1,Error.prepareStackTrace=a}return(a=e?e.displayName||e.name:"")?ee(a):""}function K(e){switch(e.tag){case 26:case 27:case 5:return ee(e.type);case 16:return ee("Lazy");case 13:return ee("Suspense");case 19:return ee("SuspenseList");case 0:case 15:return e=we(e.type,!1),e;case 11:return e=we(e.type.render,!1),e;case 1:return e=we(e.type,!0),e;default:return""}}function se(e){try{var t="";do t+=K(e),e=e.return;while(e);return t}catch(a){return`
Error generating stack: `+a.message+`
`+a.stack}}function te(e){var t=e,a=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,(t.flags&4098)!==0&&(a=t.return),e=t.return;while(e)}return t.tag===3?a:null}function be(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function O(e){if(te(e)!==e)throw Error(o(188))}function G(e){var t=e.alternate;if(!t){if(t=te(e),t===null)throw Error(o(188));return t!==e?null:e}for(var a=e,n=t;;){var i=a.return;if(i===null)break;var s=i.alternate;if(s===null){if(n=i.return,n!==null){a=n;continue}break}if(i.child===s.child){for(s=i.child;s;){if(s===a)return O(i),e;if(s===n)return O(i),t;s=s.sibling}throw Error(o(188))}if(a.return!==n.return)a=i,n=s;else{for(var m=!1,y=i.child;y;){if(y===a){m=!0,a=i,n=s;break}if(y===n){m=!0,n=i,a=s;break}y=y.sibling}if(!m){for(y=s.child;y;){if(y===a){m=!0,a=s,n=i;break}if(y===n){m=!0,n=s,a=i;break}y=y.sibling}if(!m)throw Error(o(189))}}if(a.alternate!==n)throw Error(o(190))}if(a.tag!==3)throw Error(o(188));return a.stateNode.current===a?e:t}function ae(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e;for(e=e.child;e!==null;){if(t=ae(e),t!==null)return t;e=e.sibling}return null}var ne=Array.isArray,I=u.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,he={pending:!1,data:null,method:null,action:null},fe=[],ze=-1;function ue(e){return{current:e}}function Ee(e){0>ze||(e.current=fe[ze],fe[ze]=null,ze--)}function je(e,t){ze++,fe[ze]=e.current,e.current=t}var tt=ue(null),Ua=ue(null),ha=ue(null),fi=ue(null);function di(e,t){switch(je(ha,t),je(Ua,e),je(tt,null),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)&&(t=t.namespaceURI)?pm(t):0;break;default:if(e=e===8?t.parentNode:t,t=e.tagName,e=e.namespaceURI)e=pm(e),t=gm(e,t);else switch(t){case"svg":t=1;break;case"math":t=2;break;default:t=0}}Ee(tt),je(tt,t)}function hn(){Ee(tt),Ee(Ua),Ee(ha)}function rs(e){e.memoizedState!==null&&je(fi,e);var t=tt.current,a=gm(t,e.type);t!==a&&(je(Ua,e),je(tt,a))}function mi(e){Ua.current===e&&(Ee(tt),Ee(Ua)),fi.current===e&&(Ee(fi),Ql._currentValue=he)}var ss=Object.prototype.hasOwnProperty,os=l.unstable_scheduleCallback,us=l.unstable_cancelCallback,$h=l.unstable_shouldYield,Wh=l.unstable_requestPaint,Lt=l.unstable_now,Ph=l.unstable_getCurrentPriorityLevel,nc=l.unstable_ImmediatePriority,lc=l.unstable_UserBlockingPriority,hi=l.unstable_NormalPriority,Ih=l.unstable_LowPriority,ic=l.unstable_IdlePriority,ep=l.log,tp=l.unstable_setDisableYieldValue,tl=null,mt=null;function ap(e){if(mt&&typeof mt.onCommitFiberRoot=="function")try{mt.onCommitFiberRoot(tl,e,void 0,(e.current.flags&128)===128)}catch{}}function pa(e){if(typeof ep=="function"&&tp(e),mt&&typeof mt.setStrictMode=="function")try{mt.setStrictMode(tl,e)}catch{}}var ht=Math.clz32?Math.clz32:ip,np=Math.log,lp=Math.LN2;function ip(e){return e>>>=0,e===0?32:31-(np(e)/lp|0)|0}var pi=128,gi=4194304;function qa(e){var t=e&42;if(t!==0)return t;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194176;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function vi(e,t){var a=e.pendingLanes;if(a===0)return 0;var n=0,i=e.suspendedLanes,s=e.pingedLanes,m=e.warmLanes;e=e.finishedLanes!==0;var y=a&134217727;return y!==0?(a=y&~i,a!==0?n=qa(a):(s&=y,s!==0?n=qa(s):e||(m=y&~m,m!==0&&(n=qa(m))))):(y=a&~i,y!==0?n=qa(y):s!==0?n=qa(s):e||(m=a&~m,m!==0&&(n=qa(m)))),n===0?0:t!==0&&t!==n&&(t&i)===0&&(i=n&-n,m=t&-t,i>=m||i===32&&(m&4194176)!==0)?t:n}function al(e,t){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&t)===0}function rp(e,t){switch(e){case 1:case 2:case 4:case 8:return t+250;case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function rc(){var e=pi;return pi<<=1,(pi&4194176)===0&&(pi=128),e}function sc(){var e=gi;return gi<<=1,(gi&62914560)===0&&(gi=4194304),e}function cs(e){for(var t=[],a=0;31>a;a++)t.push(e);return t}function nl(e,t){e.pendingLanes|=t,t!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function sp(e,t,a,n,i,s){var m=e.pendingLanes;e.pendingLanes=a,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=a,e.entangledLanes&=a,e.errorRecoveryDisabledLanes&=a,e.shellSuspendCounter=0;var y=e.entanglements,S=e.expirationTimes,N=e.hiddenUpdates;for(a=m&~a;0<a;){var q=31-ht(a),X=1<<q;y[q]=0,S[q]=-1;var B=N[q];if(B!==null)for(N[q]=null,q=0;q<B.length;q++){var L=B[q];L!==null&&(L.lane&=-536870913)}a&=~X}n!==0&&oc(e,n,0),s!==0&&i===0&&e.tag!==0&&(e.suspendedLanes|=s&~(m&~t))}function oc(e,t,a){e.pendingLanes|=t,e.suspendedLanes&=~t;var n=31-ht(t);e.entangledLanes|=t,e.entanglements[n]=e.entanglements[n]|1073741824|a&4194218}function uc(e,t){var a=e.entangledLanes|=t;for(e=e.entanglements;a;){var n=31-ht(a),i=1<<n;i&t|e[n]&t&&(e[n]|=t),a&=~i}}function cc(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function fc(){var e=I.p;return e!==0?e:(e=window.event,e===void 0?32:Mm(e.type))}function op(e,t){var a=I.p;try{return I.p=e,t()}finally{I.p=a}}var ga=Math.random().toString(36).slice(2),at="__reactFiber$"+ga,ot="__reactProps$"+ga,pn="__reactContainer$"+ga,fs="__reactEvents$"+ga,up="__reactListeners$"+ga,cp="__reactHandles$"+ga,dc="__reactResources$"+ga,ll="__reactMarker$"+ga;function ds(e){delete e[at],delete e[ot],delete e[fs],delete e[up],delete e[cp]}function Ya(e){var t=e[at];if(t)return t;for(var a=e.parentNode;a;){if(t=a[pn]||a[at]){if(a=t.alternate,t.child!==null||a!==null&&a.child!==null)for(e=bm(e);e!==null;){if(a=e[at])return a;e=bm(e)}return t}e=a,a=e.parentNode}return null}function gn(e){if(e=e[at]||e[pn]){var t=e.tag;if(t===5||t===6||t===13||t===26||t===27||t===3)return e}return null}function il(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e.stateNode;throw Error(o(33))}function vn(e){var t=e[dc];return t||(t=e[dc]={hoistableStyles:new Map,hoistableScripts:new Map}),t}function Ze(e){e[ll]=!0}var mc=new Set,hc={};function Fa(e,t){yn(e,t),yn(e+"Capture",t)}function yn(e,t){for(hc[e]=t,e=0;e<t.length;e++)mc.add(t[e])}var Kt=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),fp=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),pc={},gc={};function dp(e){return ss.call(gc,e)?!0:ss.call(pc,e)?!1:fp.test(e)?gc[e]=!0:(pc[e]=!0,!1)}function yi(e,t,a){if(dp(t))if(a===null)e.removeAttribute(t);else{switch(typeof a){case"undefined":case"function":case"symbol":e.removeAttribute(t);return;case"boolean":var n=t.toLowerCase().slice(0,5);if(n!=="data-"&&n!=="aria-"){e.removeAttribute(t);return}}e.setAttribute(t,""+a)}}function bi(e,t,a){if(a===null)e.removeAttribute(t);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(t);return}e.setAttribute(t,""+a)}}function Jt(e,t,a,n){if(n===null)e.removeAttribute(a);else{switch(typeof n){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(a);return}e.setAttributeNS(t,a,""+n)}}function xt(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function vc(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function mp(e){var t=vc(e)?"checked":"value",a=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),n=""+e[t];if(!e.hasOwnProperty(t)&&typeof a<"u"&&typeof a.get=="function"&&typeof a.set=="function"){var i=a.get,s=a.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(m){n=""+m,s.call(this,m)}}),Object.defineProperty(e,t,{enumerable:a.enumerable}),{getValue:function(){return n},setValue:function(m){n=""+m},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function xi(e){e._valueTracker||(e._valueTracker=mp(e))}function yc(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var a=t.getValue(),n="";return e&&(n=vc(e)?e.checked?"true":"false":e.value),e=n,e!==a?(t.setValue(e),!0):!1}function Si(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var hp=/[\n"\\]/g;function St(e){return e.replace(hp,function(t){return"\\"+t.charCodeAt(0).toString(16)+" "})}function ms(e,t,a,n,i,s,m,y){e.name="",m!=null&&typeof m!="function"&&typeof m!="symbol"&&typeof m!="boolean"?e.type=m:e.removeAttribute("type"),t!=null?m==="number"?(t===0&&e.value===""||e.value!=t)&&(e.value=""+xt(t)):e.value!==""+xt(t)&&(e.value=""+xt(t)):m!=="submit"&&m!=="reset"||e.removeAttribute("value"),t!=null?hs(e,m,xt(t)):a!=null?hs(e,m,xt(a)):n!=null&&e.removeAttribute("value"),i==null&&s!=null&&(e.defaultChecked=!!s),i!=null&&(e.checked=i&&typeof i!="function"&&typeof i!="symbol"),y!=null&&typeof y!="function"&&typeof y!="symbol"&&typeof y!="boolean"?e.name=""+xt(y):e.removeAttribute("name")}function bc(e,t,a,n,i,s,m,y){if(s!=null&&typeof s!="function"&&typeof s!="symbol"&&typeof s!="boolean"&&(e.type=s),t!=null||a!=null){if(!(s!=="submit"&&s!=="reset"||t!=null))return;a=a!=null?""+xt(a):"",t=t!=null?""+xt(t):a,y||t===e.value||(e.value=t),e.defaultValue=t}n=n??i,n=typeof n!="function"&&typeof n!="symbol"&&!!n,e.checked=y?e.checked:!!n,e.defaultChecked=!!n,m!=null&&typeof m!="function"&&typeof m!="symbol"&&typeof m!="boolean"&&(e.name=m)}function hs(e,t,a){t==="number"&&Si(e.ownerDocument)===e||e.defaultValue===""+a||(e.defaultValue=""+a)}function bn(e,t,a,n){if(e=e.options,t){t={};for(var i=0;i<a.length;i++)t["$"+a[i]]=!0;for(a=0;a<e.length;a++)i=t.hasOwnProperty("$"+e[a].value),e[a].selected!==i&&(e[a].selected=i),i&&n&&(e[a].defaultSelected=!0)}else{for(a=""+xt(a),t=null,i=0;i<e.length;i++){if(e[i].value===a){e[i].selected=!0,n&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function xc(e,t,a){if(t!=null&&(t=""+xt(t),t!==e.value&&(e.value=t),a==null)){e.defaultValue!==t&&(e.defaultValue=t);return}e.defaultValue=a!=null?""+xt(a):""}function Sc(e,t,a,n){if(t==null){if(n!=null){if(a!=null)throw Error(o(92));if(ne(n)){if(1<n.length)throw Error(o(93));n=n[0]}a=n}a==null&&(a=""),t=a}a=xt(t),e.defaultValue=a,n=e.textContent,n===a&&n!==""&&n!==null&&(e.value=n)}function xn(e,t){if(t){var a=e.firstChild;if(a&&a===e.lastChild&&a.nodeType===3){a.nodeValue=t;return}}e.textContent=t}var pp=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function wc(e,t,a){var n=t.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?n?e.setProperty(t,""):t==="float"?e.cssFloat="":e[t]="":n?e.setProperty(t,a):typeof a!="number"||a===0||pp.has(t)?t==="float"?e.cssFloat=a:e[t]=(""+a).trim():e[t]=a+"px"}function Ec(e,t,a){if(t!=null&&typeof t!="object")throw Error(o(62));if(e=e.style,a!=null){for(var n in a)!a.hasOwnProperty(n)||t!=null&&t.hasOwnProperty(n)||(n.indexOf("--")===0?e.setProperty(n,""):n==="float"?e.cssFloat="":e[n]="");for(var i in t)n=t[i],t.hasOwnProperty(i)&&a[i]!==n&&wc(e,i,n)}else for(var s in t)t.hasOwnProperty(s)&&wc(e,s,t[s])}function ps(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var gp=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),vp=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function wi(e){return vp.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}var gs=null;function vs(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Sn=null,wn=null;function jc(e){var t=gn(e);if(t&&(e=t.stateNode)){var a=e[ot]||null;e:switch(e=t.stateNode,t.type){case"input":if(ms(e,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),t=a.name,a.type==="radio"&&t!=null){for(a=e;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+St(""+t)+'"][type="radio"]'),t=0;t<a.length;t++){var n=a[t];if(n!==e&&n.form===e.form){var i=n[ot]||null;if(!i)throw Error(o(90));ms(n,i.value,i.defaultValue,i.defaultValue,i.checked,i.defaultChecked,i.type,i.name)}}for(t=0;t<a.length;t++)n=a[t],n.form===e.form&&yc(n)}break e;case"textarea":xc(e,a.value,a.defaultValue);break e;case"select":t=a.value,t!=null&&bn(e,!!a.multiple,t,!1)}}}var ys=!1;function Tc(e,t,a){if(ys)return e(t,a);ys=!0;try{var n=e(t);return n}finally{if(ys=!1,(Sn!==null||wn!==null)&&(ir(),Sn&&(t=Sn,e=wn,wn=Sn=null,jc(t),e)))for(t=0;t<e.length;t++)jc(e[t])}}function rl(e,t){var a=e.stateNode;if(a===null)return null;var n=a[ot]||null;if(n===null)return null;a=n[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(n=!n.disabled)||(e=e.type,n=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!n;break e;default:e=!1}if(e)return null;if(a&&typeof a!="function")throw Error(o(231,t,typeof a));return a}var bs=!1;if(Kt)try{var sl={};Object.defineProperty(sl,"passive",{get:function(){bs=!0}}),window.addEventListener("test",sl,sl),window.removeEventListener("test",sl,sl)}catch{bs=!1}var va=null,xs=null,Ei=null;function Oc(){if(Ei)return Ei;var e,t=xs,a=t.length,n,i="value"in va?va.value:va.textContent,s=i.length;for(e=0;e<a&&t[e]===i[e];e++);var m=a-e;for(n=1;n<=m&&t[a-n]===i[s-n];n++);return Ei=i.slice(e,1<n?1-n:void 0)}function ji(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Ti(){return!0}function Rc(){return!1}function ut(e){function t(a,n,i,s,m){this._reactName=a,this._targetInst=i,this.type=n,this.nativeEvent=s,this.target=m,this.currentTarget=null;for(var y in e)e.hasOwnProperty(y)&&(a=e[y],this[y]=a?a(s):s[y]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?Ti:Rc,this.isPropagationStopped=Rc,this}return Z(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=Ti)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=Ti)},persist:function(){},isPersistent:Ti}),t}var Ga={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Oi=ut(Ga),ol=Z({},Ga,{view:0,detail:0}),yp=ut(ol),Ss,ws,ul,Ri=Z({},ol,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:js,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==ul&&(ul&&e.type==="mousemove"?(Ss=e.screenX-ul.screenX,ws=e.screenY-ul.screenY):ws=Ss=0,ul=e),Ss)},movementY:function(e){return"movementY"in e?e.movementY:ws}}),Ac=ut(Ri),bp=Z({},Ri,{dataTransfer:0}),xp=ut(bp),Sp=Z({},ol,{relatedTarget:0}),Es=ut(Sp),wp=Z({},Ga,{animationName:0,elapsedTime:0,pseudoElement:0}),Ep=ut(wp),jp=Z({},Ga,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Tp=ut(jp),Op=Z({},Ga,{data:0}),Nc=ut(Op),Rp={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Ap={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Np={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function _p(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=Np[e])?!!t[e]:!1}function js(){return _p}var Cp=Z({},ol,{key:function(e){if(e.key){var t=Rp[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=ji(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Ap[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:js,charCode:function(e){return e.type==="keypress"?ji(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?ji(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),zp=ut(Cp),Dp=Z({},Ri,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),_c=ut(Dp),Mp=Z({},ol,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:js}),kp=ut(Mp),Bp=Z({},Ga,{propertyName:0,elapsedTime:0,pseudoElement:0}),Hp=ut(Bp),Lp=Z({},Ri,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Up=ut(Lp),qp=Z({},Ga,{newState:0,oldState:0}),Yp=ut(qp),Fp=[9,13,27,32],Ts=Kt&&"CompositionEvent"in window,cl=null;Kt&&"documentMode"in document&&(cl=document.documentMode);var Gp=Kt&&"TextEvent"in window&&!cl,Cc=Kt&&(!Ts||cl&&8<cl&&11>=cl),zc=" ",Dc=!1;function Mc(e,t){switch(e){case"keyup":return Fp.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function kc(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var En=!1;function Vp(e,t){switch(e){case"compositionend":return kc(t);case"keypress":return t.which!==32?null:(Dc=!0,zc);case"textInput":return e=t.data,e===zc&&Dc?null:e;default:return null}}function Xp(e,t){if(En)return e==="compositionend"||!Ts&&Mc(e,t)?(e=Oc(),Ei=xs=va=null,En=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Cc&&t.locale!=="ko"?null:t.data;default:return null}}var Qp={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Bc(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!Qp[e.type]:t==="textarea"}function Hc(e,t,a,n){Sn?wn?wn.push(n):wn=[n]:Sn=n,t=cr(t,"onChange"),0<t.length&&(a=new Oi("onChange","change",null,a,n),e.push({event:a,listeners:t}))}var fl=null,dl=null;function Zp(e){cm(e,0)}function Ai(e){var t=il(e);if(yc(t))return e}function Lc(e,t){if(e==="change")return t}var Uc=!1;if(Kt){var Os;if(Kt){var Rs="oninput"in document;if(!Rs){var qc=document.createElement("div");qc.setAttribute("oninput","return;"),Rs=typeof qc.oninput=="function"}Os=Rs}else Os=!1;Uc=Os&&(!document.documentMode||9<document.documentMode)}function Yc(){fl&&(fl.detachEvent("onpropertychange",Fc),dl=fl=null)}function Fc(e){if(e.propertyName==="value"&&Ai(dl)){var t=[];Hc(t,dl,e,vs(e)),Tc(Zp,t)}}function Kp(e,t,a){e==="focusin"?(Yc(),fl=t,dl=a,fl.attachEvent("onpropertychange",Fc)):e==="focusout"&&Yc()}function Jp(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Ai(dl)}function $p(e,t){if(e==="click")return Ai(t)}function Wp(e,t){if(e==="input"||e==="change")return Ai(t)}function Pp(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var pt=typeof Object.is=="function"?Object.is:Pp;function ml(e,t){if(pt(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var a=Object.keys(e),n=Object.keys(t);if(a.length!==n.length)return!1;for(n=0;n<a.length;n++){var i=a[n];if(!ss.call(t,i)||!pt(e[i],t[i]))return!1}return!0}function Gc(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Vc(e,t){var a=Gc(e);e=0;for(var n;a;){if(a.nodeType===3){if(n=e+a.textContent.length,e<=t&&n>=t)return{node:a,offset:t-e};e=n}e:{for(;a;){if(a.nextSibling){a=a.nextSibling;break e}a=a.parentNode}a=void 0}a=Gc(a)}}function Xc(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Xc(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Qc(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var t=Si(e.document);t instanceof e.HTMLIFrameElement;){try{var a=typeof t.contentWindow.location.href=="string"}catch{a=!1}if(a)e=t.contentWindow;else break;t=Si(e.document)}return t}function As(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function Ip(e,t){var a=Qc(t);t=e.focusedElem;var n=e.selectionRange;if(a!==t&&t&&t.ownerDocument&&Xc(t.ownerDocument.documentElement,t)){if(n!==null&&As(t)){if(e=n.start,a=n.end,a===void 0&&(a=e),"selectionStart"in t)t.selectionStart=e,t.selectionEnd=Math.min(a,t.value.length);else if(a=(e=t.ownerDocument||document)&&e.defaultView||window,a.getSelection){a=a.getSelection();var i=t.textContent.length,s=Math.min(n.start,i);n=n.end===void 0?s:Math.min(n.end,i),!a.extend&&s>n&&(i=n,n=s,s=i),i=Vc(t,s);var m=Vc(t,n);i&&m&&(a.rangeCount!==1||a.anchorNode!==i.node||a.anchorOffset!==i.offset||a.focusNode!==m.node||a.focusOffset!==m.offset)&&(e=e.createRange(),e.setStart(i.node,i.offset),a.removeAllRanges(),s>n?(a.addRange(e),a.extend(m.node,m.offset)):(e.setEnd(m.node,m.offset),a.addRange(e)))}}for(e=[],a=t;a=a.parentNode;)a.nodeType===1&&e.push({element:a,left:a.scrollLeft,top:a.scrollTop});for(typeof t.focus=="function"&&t.focus(),t=0;t<e.length;t++)a=e[t],a.element.scrollLeft=a.left,a.element.scrollTop=a.top}}var e1=Kt&&"documentMode"in document&&11>=document.documentMode,jn=null,Ns=null,hl=null,_s=!1;function Zc(e,t,a){var n=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;_s||jn==null||jn!==Si(n)||(n=jn,"selectionStart"in n&&As(n)?n={start:n.selectionStart,end:n.selectionEnd}:(n=(n.ownerDocument&&n.ownerDocument.defaultView||window).getSelection(),n={anchorNode:n.anchorNode,anchorOffset:n.anchorOffset,focusNode:n.focusNode,focusOffset:n.focusOffset}),hl&&ml(hl,n)||(hl=n,n=cr(Ns,"onSelect"),0<n.length&&(t=new Oi("onSelect","select",null,t,a),e.push({event:t,listeners:n}),t.target=jn)))}function Va(e,t){var a={};return a[e.toLowerCase()]=t.toLowerCase(),a["Webkit"+e]="webkit"+t,a["Moz"+e]="moz"+t,a}var Tn={animationend:Va("Animation","AnimationEnd"),animationiteration:Va("Animation","AnimationIteration"),animationstart:Va("Animation","AnimationStart"),transitionrun:Va("Transition","TransitionRun"),transitionstart:Va("Transition","TransitionStart"),transitioncancel:Va("Transition","TransitionCancel"),transitionend:Va("Transition","TransitionEnd")},Cs={},Kc={};Kt&&(Kc=document.createElement("div").style,"AnimationEvent"in window||(delete Tn.animationend.animation,delete Tn.animationiteration.animation,delete Tn.animationstart.animation),"TransitionEvent"in window||delete Tn.transitionend.transition);function Xa(e){if(Cs[e])return Cs[e];if(!Tn[e])return e;var t=Tn[e],a;for(a in t)if(t.hasOwnProperty(a)&&a in Kc)return Cs[e]=t[a];return e}var Jc=Xa("animationend"),$c=Xa("animationiteration"),Wc=Xa("animationstart"),t1=Xa("transitionrun"),a1=Xa("transitionstart"),n1=Xa("transitioncancel"),Pc=Xa("transitionend"),Ic=new Map,ef="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll scrollEnd toggle touchMove waiting wheel".split(" ");function zt(e,t){Ic.set(e,t),Fa(t,[e])}var wt=[],On=0,zs=0;function Ni(){for(var e=On,t=zs=On=0;t<e;){var a=wt[t];wt[t++]=null;var n=wt[t];wt[t++]=null;var i=wt[t];wt[t++]=null;var s=wt[t];if(wt[t++]=null,n!==null&&i!==null){var m=n.pending;m===null?i.next=i:(i.next=m.next,m.next=i),n.pending=i}s!==0&&tf(a,i,s)}}function _i(e,t,a,n){wt[On++]=e,wt[On++]=t,wt[On++]=a,wt[On++]=n,zs|=n,e.lanes|=n,e=e.alternate,e!==null&&(e.lanes|=n)}function Ds(e,t,a,n){return _i(e,t,a,n),Ci(e)}function ya(e,t){return _i(e,null,null,t),Ci(e)}function tf(e,t,a){e.lanes|=a;var n=e.alternate;n!==null&&(n.lanes|=a);for(var i=!1,s=e.return;s!==null;)s.childLanes|=a,n=s.alternate,n!==null&&(n.childLanes|=a),s.tag===22&&(e=s.stateNode,e===null||e._visibility&1||(i=!0)),e=s,s=s.return;i&&t!==null&&e.tag===3&&(s=e.stateNode,i=31-ht(a),s=s.hiddenUpdates,e=s[i],e===null?s[i]=[t]:e.push(t),t.lane=a|536870912)}function Ci(e){if(50<Ul)throw Ul=0,qo=null,Error(o(185));for(var t=e.return;t!==null;)e=t,t=e.return;return e.tag===3?e.stateNode:null}var Rn={},af=new WeakMap;function Et(e,t){if(typeof e=="object"&&e!==null){var a=af.get(e);return a!==void 0?a:(t={value:e,source:t,stack:se(t)},af.set(e,t),t)}return{value:e,source:t,stack:se(t)}}var An=[],Nn=0,zi=null,Di=0,jt=[],Tt=0,Qa=null,$t=1,Wt="";function Za(e,t){An[Nn++]=Di,An[Nn++]=zi,zi=e,Di=t}function nf(e,t,a){jt[Tt++]=$t,jt[Tt++]=Wt,jt[Tt++]=Qa,Qa=e;var n=$t;e=Wt;var i=32-ht(n)-1;n&=~(1<<i),a+=1;var s=32-ht(t)+i;if(30<s){var m=i-i%5;s=(n&(1<<m)-1).toString(32),n>>=m,i-=m,$t=1<<32-ht(t)+i|a<<i|n,Wt=s+e}else $t=1<<s|a<<i|n,Wt=e}function Ms(e){e.return!==null&&(Za(e,1),nf(e,1,0))}function ks(e){for(;e===zi;)zi=An[--Nn],An[Nn]=null,Di=An[--Nn],An[Nn]=null;for(;e===Qa;)Qa=jt[--Tt],jt[Tt]=null,Wt=jt[--Tt],jt[Tt]=null,$t=jt[--Tt],jt[Tt]=null}var rt=null,We=null,Te=!1,Dt=null,Ut=!1,Bs=Error(o(519));function Ka(e){var t=Error(o(418,""));throw vl(Et(t,e)),Bs}function lf(e){var t=e.stateNode,a=e.type,n=e.memoizedProps;switch(t[at]=e,t[ot]=n,a){case"dialog":xe("cancel",t),xe("close",t);break;case"iframe":case"object":case"embed":xe("load",t);break;case"video":case"audio":for(a=0;a<Yl.length;a++)xe(Yl[a],t);break;case"source":xe("error",t);break;case"img":case"image":case"link":xe("error",t),xe("load",t);break;case"details":xe("toggle",t);break;case"input":xe("invalid",t),bc(t,n.value,n.defaultValue,n.checked,n.defaultChecked,n.type,n.name,!0),xi(t);break;case"select":xe("invalid",t);break;case"textarea":xe("invalid",t),Sc(t,n.value,n.defaultValue,n.children),xi(t)}a=n.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||t.textContent===""+a||n.suppressHydrationWarning===!0||hm(t.textContent,a)?(n.popover!=null&&(xe("beforetoggle",t),xe("toggle",t)),n.onScroll!=null&&xe("scroll",t),n.onScrollEnd!=null&&xe("scrollend",t),n.onClick!=null&&(t.onclick=fr),t=!0):t=!1,t||Ka(e)}function rf(e){for(rt=e.return;rt;)switch(rt.tag){case 3:case 27:Ut=!0;return;case 5:case 13:Ut=!1;return;default:rt=rt.return}}function pl(e){if(e!==rt)return!1;if(!Te)return rf(e),Te=!0,!1;var t=!1,a;if((a=e.tag!==3&&e.tag!==27)&&((a=e.tag===5)&&(a=e.type,a=!(a!=="form"&&a!=="button")||nu(e.type,e.memoizedProps)),a=!a),a&&(t=!0),t&&We&&Ka(e),rf(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(o(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8)if(a=e.data,a==="/$"){if(t===0){We=kt(e.nextSibling);break e}t--}else a!=="$"&&a!=="$!"&&a!=="$?"||t++;e=e.nextSibling}We=null}}else We=rt?kt(e.stateNode.nextSibling):null;return!0}function gl(){We=rt=null,Te=!1}function vl(e){Dt===null?Dt=[e]:Dt.push(e)}var yl=Error(o(460)),sf=Error(o(474)),Hs={then:function(){}};function of(e){return e=e.status,e==="fulfilled"||e==="rejected"}function Mi(){}function uf(e,t,a){switch(a=e[a],a===void 0?e.push(t):a!==t&&(t.then(Mi,Mi),t=a),t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,e===yl?Error(o(483)):e;default:if(typeof t.status=="string")t.then(Mi,Mi);else{if(e=_e,e!==null&&100<e.shellSuspendCounter)throw Error(o(482));e=t,e.status="pending",e.then(function(n){if(t.status==="pending"){var i=t;i.status="fulfilled",i.value=n}},function(n){if(t.status==="pending"){var i=t;i.status="rejected",i.reason=n}})}switch(t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,e===yl?Error(o(483)):e}throw bl=t,yl}}var bl=null;function cf(){if(bl===null)throw Error(o(459));var e=bl;return bl=null,e}var _n=null,xl=0;function ki(e){var t=xl;return xl+=1,_n===null&&(_n=[]),uf(_n,e,t)}function Sl(e,t){t=t.props.ref,e.ref=t!==void 0?t:null}function Bi(e,t){throw t.$$typeof===d?Error(o(525)):(e=Object.prototype.toString.call(t),Error(o(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)))}function ff(e){var t=e._init;return t(e._payload)}function df(e){function t(z,A){if(e){var k=z.deletions;k===null?(z.deletions=[A],z.flags|=16):k.push(A)}}function a(z,A){if(!e)return null;for(;A!==null;)t(z,A),A=A.sibling;return null}function n(z){for(var A=new Map;z!==null;)z.key!==null?A.set(z.key,z):A.set(z.index,z),z=z.sibling;return A}function i(z,A){return z=_a(z,A),z.index=0,z.sibling=null,z}function s(z,A,k){return z.index=k,e?(k=z.alternate,k!==null?(k=k.index,k<A?(z.flags|=33554434,A):k):(z.flags|=33554434,A)):(z.flags|=1048576,A)}function m(z){return e&&z.alternate===null&&(z.flags|=33554434),z}function y(z,A,k,Y){return A===null||A.tag!==6?(A=zo(k,z.mode,Y),A.return=z,A):(A=i(A,k),A.return=z,A)}function S(z,A,k,Y){var le=k.type;return le===g?q(z,A,k.props.children,Y,k.key):A!==null&&(A.elementType===le||typeof le=="object"&&le!==null&&le.$$typeof===M&&ff(le)===A.type)?(A=i(A,k.props),Sl(A,k),A.return=z,A):(A=er(k.type,k.key,k.props,null,z.mode,Y),Sl(A,k),A.return=z,A)}function N(z,A,k,Y){return A===null||A.tag!==4||A.stateNode.containerInfo!==k.containerInfo||A.stateNode.implementation!==k.implementation?(A=Do(k,z.mode,Y),A.return=z,A):(A=i(A,k.children||[]),A.return=z,A)}function q(z,A,k,Y,le){return A===null||A.tag!==7?(A=ln(k,z.mode,Y,le),A.return=z,A):(A=i(A,k),A.return=z,A)}function X(z,A,k){if(typeof A=="string"&&A!==""||typeof A=="number"||typeof A=="bigint")return A=zo(""+A,z.mode,k),A.return=z,A;if(typeof A=="object"&&A!==null){switch(A.$$typeof){case h:return k=er(A.type,A.key,A.props,null,z.mode,k),Sl(k,A),k.return=z,k;case v:return A=Do(A,z.mode,k),A.return=z,A;case M:var Y=A._init;return A=Y(A._payload),X(z,A,k)}if(ne(A)||$(A))return A=ln(A,z.mode,k,null),A.return=z,A;if(typeof A.then=="function")return X(z,ki(A),k);if(A.$$typeof===j)return X(z,Wi(z,A),k);Bi(z,A)}return null}function B(z,A,k,Y){var le=A!==null?A.key:null;if(typeof k=="string"&&k!==""||typeof k=="number"||typeof k=="bigint")return le!==null?null:y(z,A,""+k,Y);if(typeof k=="object"&&k!==null){switch(k.$$typeof){case h:return k.key===le?S(z,A,k,Y):null;case v:return k.key===le?N(z,A,k,Y):null;case M:return le=k._init,k=le(k._payload),B(z,A,k,Y)}if(ne(k)||$(k))return le!==null?null:q(z,A,k,Y,null);if(typeof k.then=="function")return B(z,A,ki(k),Y);if(k.$$typeof===j)return B(z,A,Wi(z,k),Y);Bi(z,k)}return null}function L(z,A,k,Y,le){if(typeof Y=="string"&&Y!==""||typeof Y=="number"||typeof Y=="bigint")return z=z.get(k)||null,y(A,z,""+Y,le);if(typeof Y=="object"&&Y!==null){switch(Y.$$typeof){case h:return z=z.get(Y.key===null?k:Y.key)||null,S(A,z,Y,le);case v:return z=z.get(Y.key===null?k:Y.key)||null,N(A,z,Y,le);case M:var ve=Y._init;return Y=ve(Y._payload),L(z,A,k,Y,le)}if(ne(Y)||$(Y))return z=z.get(k)||null,q(A,z,Y,le,null);if(typeof Y.then=="function")return L(z,A,k,ki(Y),le);if(Y.$$typeof===j)return L(z,A,k,Wi(A,Y),le);Bi(A,Y)}return null}function re(z,A,k,Y){for(var le=null,ve=null,oe=A,ce=A=0,$e=null;oe!==null&&ce<k.length;ce++){oe.index>ce?($e=oe,oe=null):$e=oe.sibling;var Oe=B(z,oe,k[ce],Y);if(Oe===null){oe===null&&(oe=$e);break}e&&oe&&Oe.alternate===null&&t(z,oe),A=s(Oe,A,ce),ve===null?le=Oe:ve.sibling=Oe,ve=Oe,oe=$e}if(ce===k.length)return a(z,oe),Te&&Za(z,ce),le;if(oe===null){for(;ce<k.length;ce++)oe=X(z,k[ce],Y),oe!==null&&(A=s(oe,A,ce),ve===null?le=oe:ve.sibling=oe,ve=oe);return Te&&Za(z,ce),le}for(oe=n(oe);ce<k.length;ce++)$e=L(oe,z,ce,k[ce],Y),$e!==null&&(e&&$e.alternate!==null&&oe.delete($e.key===null?ce:$e.key),A=s($e,A,ce),ve===null?le=$e:ve.sibling=$e,ve=$e);return e&&oe.forEach(function(Ha){return t(z,Ha)}),Te&&Za(z,ce),le}function de(z,A,k,Y){if(k==null)throw Error(o(151));for(var le=null,ve=null,oe=A,ce=A=0,$e=null,Oe=k.next();oe!==null&&!Oe.done;ce++,Oe=k.next()){oe.index>ce?($e=oe,oe=null):$e=oe.sibling;var Ha=B(z,oe,Oe.value,Y);if(Ha===null){oe===null&&(oe=$e);break}e&&oe&&Ha.alternate===null&&t(z,oe),A=s(Ha,A,ce),ve===null?le=Ha:ve.sibling=Ha,ve=Ha,oe=$e}if(Oe.done)return a(z,oe),Te&&Za(z,ce),le;if(oe===null){for(;!Oe.done;ce++,Oe=k.next())Oe=X(z,Oe.value,Y),Oe!==null&&(A=s(Oe,A,ce),ve===null?le=Oe:ve.sibling=Oe,ve=Oe);return Te&&Za(z,ce),le}for(oe=n(oe);!Oe.done;ce++,Oe=k.next())Oe=L(oe,z,ce,Oe.value,Y),Oe!==null&&(e&&Oe.alternate!==null&&oe.delete(Oe.key===null?ce:Oe.key),A=s(Oe,A,ce),ve===null?le=Oe:ve.sibling=Oe,ve=Oe);return e&&oe.forEach(function(v2){return t(z,v2)}),Te&&Za(z,ce),le}function Ue(z,A,k,Y){if(typeof k=="object"&&k!==null&&k.type===g&&k.key===null&&(k=k.props.children),typeof k=="object"&&k!==null){switch(k.$$typeof){case h:e:{for(var le=k.key;A!==null;){if(A.key===le){if(le=k.type,le===g){if(A.tag===7){a(z,A.sibling),Y=i(A,k.props.children),Y.return=z,z=Y;break e}}else if(A.elementType===le||typeof le=="object"&&le!==null&&le.$$typeof===M&&ff(le)===A.type){a(z,A.sibling),Y=i(A,k.props),Sl(Y,k),Y.return=z,z=Y;break e}a(z,A);break}else t(z,A);A=A.sibling}k.type===g?(Y=ln(k.props.children,z.mode,Y,k.key),Y.return=z,z=Y):(Y=er(k.type,k.key,k.props,null,z.mode,Y),Sl(Y,k),Y.return=z,z=Y)}return m(z);case v:e:{for(le=k.key;A!==null;){if(A.key===le)if(A.tag===4&&A.stateNode.containerInfo===k.containerInfo&&A.stateNode.implementation===k.implementation){a(z,A.sibling),Y=i(A,k.children||[]),Y.return=z,z=Y;break e}else{a(z,A);break}else t(z,A);A=A.sibling}Y=Do(k,z.mode,Y),Y.return=z,z=Y}return m(z);case M:return le=k._init,k=le(k._payload),Ue(z,A,k,Y)}if(ne(k))return re(z,A,k,Y);if($(k)){if(le=$(k),typeof le!="function")throw Error(o(150));return k=le.call(k),de(z,A,k,Y)}if(typeof k.then=="function")return Ue(z,A,ki(k),Y);if(k.$$typeof===j)return Ue(z,A,Wi(z,k),Y);Bi(z,k)}return typeof k=="string"&&k!==""||typeof k=="number"||typeof k=="bigint"?(k=""+k,A!==null&&A.tag===6?(a(z,A.sibling),Y=i(A,k),Y.return=z,z=Y):(a(z,A),Y=zo(k,z.mode,Y),Y.return=z,z=Y),m(z)):a(z,A)}return function(z,A,k,Y){try{xl=0;var le=Ue(z,A,k,Y);return _n=null,le}catch(oe){if(oe===yl)throw oe;var ve=Nt(29,oe,null,z.mode);return ve.lanes=Y,ve.return=z,ve}finally{}}}var Ja=df(!0),mf=df(!1),Cn=ue(null),Hi=ue(0);function hf(e,t){e=oa,je(Hi,e),je(Cn,t),oa=e|t.baseLanes}function Ls(){je(Hi,oa),je(Cn,Cn.current)}function Us(){oa=Hi.current,Ee(Cn),Ee(Hi)}var Ot=ue(null),qt=null;function ba(e){var t=e.alternate;je(Xe,Xe.current&1),je(Ot,e),qt===null&&(t===null||Cn.current!==null||t.memoizedState!==null)&&(qt=e)}function pf(e){if(e.tag===22){if(je(Xe,Xe.current),je(Ot,e),qt===null){var t=e.alternate;t!==null&&t.memoizedState!==null&&(qt=e)}}else xa()}function xa(){je(Xe,Xe.current),je(Ot,Ot.current)}function Pt(e){Ee(Ot),qt===e&&(qt=null),Ee(Xe)}var Xe=ue(0);function Li(e){for(var t=e;t!==null;){if(t.tag===13){var a=t.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||a.data==="$?"||a.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if((t.flags&128)!==0)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var l1=typeof AbortController<"u"?AbortController:function(){var e=[],t=this.signal={aborted:!1,addEventListener:function(a,n){e.push(n)}};this.abort=function(){t.aborted=!0,e.forEach(function(a){return a()})}},i1=l.unstable_scheduleCallback,r1=l.unstable_NormalPriority,Qe={$$typeof:j,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function qs(){return{controller:new l1,data:new Map,refCount:0}}function wl(e){e.refCount--,e.refCount===0&&i1(r1,function(){e.controller.abort()})}var El=null,Ys=0,zn=0,Dn=null;function s1(e,t){if(El===null){var a=El=[];Ys=0,zn=Ko(),Dn={status:"pending",value:void 0,then:function(n){a.push(n)}}}return Ys++,t.then(gf,gf),t}function gf(){if(--Ys===0&&El!==null){Dn!==null&&(Dn.status="fulfilled");var e=El;El=null,zn=0,Dn=null;for(var t=0;t<e.length;t++)(0,e[t])()}}function o1(e,t){var a=[],n={status:"pending",value:null,reason:null,then:function(i){a.push(i)}};return e.then(function(){n.status="fulfilled",n.value=t;for(var i=0;i<a.length;i++)(0,a[i])(t)},function(i){for(n.status="rejected",n.reason=i,i=0;i<a.length;i++)(0,a[i])(void 0)}),n}var vf=F.S;F.S=function(e,t){typeof t=="object"&&t!==null&&typeof t.then=="function"&&s1(e,t),vf!==null&&vf(e,t)};var $a=ue(null);function Fs(){var e=$a.current;return e!==null?e:_e.pooledCache}function Ui(e,t){t===null?je($a,$a.current):je($a,t.pool)}function yf(){var e=Fs();return e===null?null:{parent:Qe._currentValue,pool:e}}var Sa=0,ge=null,Re=null,Fe=null,qi=!1,Mn=!1,Wa=!1,Yi=0,jl=0,kn=null,u1=0;function Ye(){throw Error(o(321))}function Gs(e,t){if(t===null)return!1;for(var a=0;a<t.length&&a<e.length;a++)if(!pt(e[a],t[a]))return!1;return!0}function Vs(e,t,a,n,i,s){return Sa=s,ge=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,F.H=e===null||e.memoizedState===null?Pa:wa,Wa=!1,s=a(n,i),Wa=!1,Mn&&(s=xf(t,a,n,i)),bf(e),s}function bf(e){F.H=Yt;var t=Re!==null&&Re.next!==null;if(Sa=0,Fe=Re=ge=null,qi=!1,jl=0,kn=null,t)throw Error(o(300));e===null||Ke||(e=e.dependencies,e!==null&&$i(e)&&(Ke=!0))}function xf(e,t,a,n){ge=e;var i=0;do{if(Mn&&(kn=null),jl=0,Mn=!1,25<=i)throw Error(o(301));if(i+=1,Fe=Re=null,e.updateQueue!=null){var s=e.updateQueue;s.lastEffect=null,s.events=null,s.stores=null,s.memoCache!=null&&(s.memoCache.index=0)}F.H=Ia,s=t(a,n)}while(Mn);return s}function c1(){var e=F.H,t=e.useState()[0];return t=typeof t.then=="function"?Tl(t):t,e=e.useState()[0],(Re!==null?Re.memoizedState:null)!==e&&(ge.flags|=1024),t}function Xs(){var e=Yi!==0;return Yi=0,e}function Qs(e,t,a){t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~a}function Zs(e){if(qi){for(e=e.memoizedState;e!==null;){var t=e.queue;t!==null&&(t.pending=null),e=e.next}qi=!1}Sa=0,Fe=Re=ge=null,Mn=!1,jl=Yi=0,kn=null}function ct(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Fe===null?ge.memoizedState=Fe=e:Fe=Fe.next=e,Fe}function Ge(){if(Re===null){var e=ge.alternate;e=e!==null?e.memoizedState:null}else e=Re.next;var t=Fe===null?ge.memoizedState:Fe.next;if(t!==null)Fe=t,Re=e;else{if(e===null)throw ge.alternate===null?Error(o(467)):Error(o(310));Re=e,e={memoizedState:Re.memoizedState,baseState:Re.baseState,baseQueue:Re.baseQueue,queue:Re.queue,next:null},Fe===null?ge.memoizedState=Fe=e:Fe=Fe.next=e}return Fe}var Fi;Fi=function(){return{lastEffect:null,events:null,stores:null,memoCache:null}};function Tl(e){var t=jl;return jl+=1,kn===null&&(kn=[]),e=uf(kn,e,t),t=ge,(Fe===null?t.memoizedState:Fe.next)===null&&(t=t.alternate,F.H=t===null||t.memoizedState===null?Pa:wa),e}function Gi(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return Tl(e);if(e.$$typeof===j)return nt(e)}throw Error(o(438,String(e)))}function Ks(e){var t=null,a=ge.updateQueue;if(a!==null&&(t=a.memoCache),t==null){var n=ge.alternate;n!==null&&(n=n.updateQueue,n!==null&&(n=n.memoCache,n!=null&&(t={data:n.data.map(function(i){return i.slice()}),index:0})))}if(t==null&&(t={data:[],index:0}),a===null&&(a=Fi(),ge.updateQueue=a),a.memoCache=t,a=t.data[t.index],a===void 0)for(a=t.data[t.index]=Array(e),n=0;n<e;n++)a[n]=Q;return t.index++,a}function It(e,t){return typeof t=="function"?t(e):t}function Vi(e){var t=Ge();return Js(t,Re,e)}function Js(e,t,a){var n=e.queue;if(n===null)throw Error(o(311));n.lastRenderedReducer=a;var i=e.baseQueue,s=n.pending;if(s!==null){if(i!==null){var m=i.next;i.next=s.next,s.next=m}t.baseQueue=i=s,n.pending=null}if(s=e.baseState,i===null)e.memoizedState=s;else{t=i.next;var y=m=null,S=null,N=t,q=!1;do{var X=N.lane&-536870913;if(X!==N.lane?(Se&X)===X:(Sa&X)===X){var B=N.revertLane;if(B===0)S!==null&&(S=S.next={lane:0,revertLane:0,action:N.action,hasEagerState:N.hasEagerState,eagerState:N.eagerState,next:null}),X===zn&&(q=!0);else if((Sa&B)===B){N=N.next,B===zn&&(q=!0);continue}else X={lane:0,revertLane:N.revertLane,action:N.action,hasEagerState:N.hasEagerState,eagerState:N.eagerState,next:null},S===null?(y=S=X,m=s):S=S.next=X,ge.lanes|=B,Ca|=B;X=N.action,Wa&&a(s,X),s=N.hasEagerState?N.eagerState:a(s,X)}else B={lane:X,revertLane:N.revertLane,action:N.action,hasEagerState:N.hasEagerState,eagerState:N.eagerState,next:null},S===null?(y=S=B,m=s):S=S.next=B,ge.lanes|=X,Ca|=X;N=N.next}while(N!==null&&N!==t);if(S===null?m=s:S.next=y,!pt(s,e.memoizedState)&&(Ke=!0,q&&(a=Dn,a!==null)))throw a;e.memoizedState=s,e.baseState=m,e.baseQueue=S,n.lastRenderedState=s}return i===null&&(n.lanes=0),[e.memoizedState,n.dispatch]}function $s(e){var t=Ge(),a=t.queue;if(a===null)throw Error(o(311));a.lastRenderedReducer=e;var n=a.dispatch,i=a.pending,s=t.memoizedState;if(i!==null){a.pending=null;var m=i=i.next;do s=e(s,m.action),m=m.next;while(m!==i);pt(s,t.memoizedState)||(Ke=!0),t.memoizedState=s,t.baseQueue===null&&(t.baseState=s),a.lastRenderedState=s}return[s,n]}function Sf(e,t,a){var n=ge,i=Ge(),s=Te;if(s){if(a===void 0)throw Error(o(407));a=a()}else a=t();var m=!pt((Re||i).memoizedState,a);if(m&&(i.memoizedState=a,Ke=!0),i=i.queue,Is(jf.bind(null,n,i,e),[e]),i.getSnapshot!==t||m||Fe!==null&&Fe.memoizedState.tag&1){if(n.flags|=2048,Bn(9,Ef.bind(null,n,i,a,t),{destroy:void 0},null),_e===null)throw Error(o(349));s||(Sa&60)!==0||wf(n,t,a)}return a}function wf(e,t,a){e.flags|=16384,e={getSnapshot:t,value:a},t=ge.updateQueue,t===null?(t=Fi(),ge.updateQueue=t,t.stores=[e]):(a=t.stores,a===null?t.stores=[e]:a.push(e))}function Ef(e,t,a,n){t.value=a,t.getSnapshot=n,Tf(t)&&Of(e)}function jf(e,t,a){return a(function(){Tf(t)&&Of(e)})}function Tf(e){var t=e.getSnapshot;e=e.value;try{var a=t();return!pt(e,a)}catch{return!0}}function Of(e){var t=ya(e,2);t!==null&&st(t,e,2)}function Ws(e){var t=ct();if(typeof e=="function"){var a=e;if(e=a(),Wa){pa(!0);try{a()}finally{pa(!1)}}}return t.memoizedState=t.baseState=e,t.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:It,lastRenderedState:e},t}function Rf(e,t,a,n){return e.baseState=a,Js(e,Re,typeof n=="function"?n:It)}function f1(e,t,a,n,i){if(Zi(e))throw Error(o(485));if(e=t.action,e!==null){var s={payload:i,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(m){s.listeners.push(m)}};F.T!==null?a(!0):s.isTransition=!1,n(s),a=t.pending,a===null?(s.next=t.pending=s,Af(t,s)):(s.next=a.next,t.pending=a.next=s)}}function Af(e,t){var a=t.action,n=t.payload,i=e.state;if(t.isTransition){var s=F.T,m={};F.T=m;try{var y=a(i,n),S=F.S;S!==null&&S(m,y),Nf(e,t,y)}catch(N){Ps(e,t,N)}finally{F.T=s}}else try{s=a(i,n),Nf(e,t,s)}catch(N){Ps(e,t,N)}}function Nf(e,t,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(n){_f(e,t,n)},function(n){return Ps(e,t,n)}):_f(e,t,a)}function _f(e,t,a){t.status="fulfilled",t.value=a,Cf(t),e.state=a,t=e.pending,t!==null&&(a=t.next,a===t?e.pending=null:(a=a.next,t.next=a,Af(e,a)))}function Ps(e,t,a){var n=e.pending;if(e.pending=null,n!==null){n=n.next;do t.status="rejected",t.reason=a,Cf(t),t=t.next;while(t!==n)}e.action=null}function Cf(e){e=e.listeners;for(var t=0;t<e.length;t++)(0,e[t])()}function zf(e,t){return t}function Df(e,t){if(Te){var a=_e.formState;if(a!==null){e:{var n=ge;if(Te){if(We){t:{for(var i=We,s=Ut;i.nodeType!==8;){if(!s){i=null;break t}if(i=kt(i.nextSibling),i===null){i=null;break t}}s=i.data,i=s==="F!"||s==="F"?i:null}if(i){We=kt(i.nextSibling),n=i.data==="F!";break e}}Ka(n)}n=!1}n&&(t=a[0])}}return a=ct(),a.memoizedState=a.baseState=t,n={pending:null,lanes:0,dispatch:null,lastRenderedReducer:zf,lastRenderedState:t},a.queue=n,a=Wf.bind(null,ge,n),n.dispatch=a,n=Ws(!1),s=lo.bind(null,ge,!1,n.queue),n=ct(),i={state:t,dispatch:null,action:e,pending:null},n.queue=i,a=f1.bind(null,ge,i,s,a),i.dispatch=a,n.memoizedState=e,[t,a,!1]}function Mf(e){var t=Ge();return kf(t,Re,e)}function kf(e,t,a){t=Js(e,t,zf)[0],e=Vi(It)[0],t=typeof t=="object"&&t!==null&&typeof t.then=="function"?Tl(t):t;var n=Ge(),i=n.queue,s=i.dispatch;return a!==n.memoizedState&&(ge.flags|=2048,Bn(9,d1.bind(null,i,a),{destroy:void 0},null)),[t,s,e]}function d1(e,t){e.action=t}function Bf(e){var t=Ge(),a=Re;if(a!==null)return kf(t,a,e);Ge(),t=t.memoizedState,a=Ge();var n=a.queue.dispatch;return a.memoizedState=e,[t,n,!1]}function Bn(e,t,a,n){return e={tag:e,create:t,inst:a,deps:n,next:null},t=ge.updateQueue,t===null&&(t=Fi(),ge.updateQueue=t),a=t.lastEffect,a===null?t.lastEffect=e.next=e:(n=a.next,a.next=e,e.next=n,t.lastEffect=e),e}function Hf(){return Ge().memoizedState}function Xi(e,t,a,n){var i=ct();ge.flags|=e,i.memoizedState=Bn(1|t,a,{destroy:void 0},n===void 0?null:n)}function Qi(e,t,a,n){var i=Ge();n=n===void 0?null:n;var s=i.memoizedState.inst;Re!==null&&n!==null&&Gs(n,Re.memoizedState.deps)?i.memoizedState=Bn(t,a,s,n):(ge.flags|=e,i.memoizedState=Bn(1|t,a,s,n))}function Lf(e,t){Xi(8390656,8,e,t)}function Is(e,t){Qi(2048,8,e,t)}function Uf(e,t){return Qi(4,2,e,t)}function qf(e,t){return Qi(4,4,e,t)}function Yf(e,t){if(typeof t=="function"){e=e();var a=t(e);return function(){typeof a=="function"?a():t(null)}}if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function Ff(e,t,a){a=a!=null?a.concat([e]):null,Qi(4,4,Yf.bind(null,t,e),a)}function eo(){}function Gf(e,t){var a=Ge();t=t===void 0?null:t;var n=a.memoizedState;return t!==null&&Gs(t,n[1])?n[0]:(a.memoizedState=[e,t],e)}function Vf(e,t){var a=Ge();t=t===void 0?null:t;var n=a.memoizedState;if(t!==null&&Gs(t,n[1]))return n[0];if(n=e(),Wa){pa(!0);try{e()}finally{pa(!1)}}return a.memoizedState=[n,t],n}function to(e,t,a){return a===void 0||(Sa&1073741824)!==0?e.memoizedState=t:(e.memoizedState=a,e=Qd(),ge.lanes|=e,Ca|=e,a)}function Xf(e,t,a,n){return pt(a,t)?a:Cn.current!==null?(e=to(e,a,n),pt(e,t)||(Ke=!0),e):(Sa&42)===0?(Ke=!0,e.memoizedState=a):(e=Qd(),ge.lanes|=e,Ca|=e,t)}function Qf(e,t,a,n,i){var s=I.p;I.p=s!==0&&8>s?s:8;var m=F.T,y={};F.T=y,lo(e,!1,t,a);try{var S=i(),N=F.S;if(N!==null&&N(y,S),S!==null&&typeof S=="object"&&typeof S.then=="function"){var q=o1(S,n);Ol(e,t,q,bt(e))}else Ol(e,t,n,bt(e))}catch(X){Ol(e,t,{then:function(){},status:"rejected",reason:X},bt())}finally{I.p=s,F.T=m}}function m1(){}function ao(e,t,a,n){if(e.tag!==5)throw Error(o(476));var i=Zf(e).queue;Qf(e,i,t,he,a===null?m1:function(){return Kf(e),a(n)})}function Zf(e){var t=e.memoizedState;if(t!==null)return t;t={memoizedState:he,baseState:he,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:It,lastRenderedState:he},next:null};var a={};return t.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:It,lastRenderedState:a},next:null},e.memoizedState=t,e=e.alternate,e!==null&&(e.memoizedState=t),t}function Kf(e){var t=Zf(e).next.queue;Ol(e,t,{},bt())}function no(){return nt(Ql)}function Jf(){return Ge().memoizedState}function $f(){return Ge().memoizedState}function h1(e){for(var t=e.return;t!==null;){switch(t.tag){case 24:case 3:var a=bt();e=Ta(a);var n=Oa(t,e,a);n!==null&&(st(n,t,a),Nl(n,t,a)),t={cache:qs()},e.payload=t;return}t=t.return}}function p1(e,t,a){var n=bt();a={lane:n,revertLane:0,action:a,hasEagerState:!1,eagerState:null,next:null},Zi(e)?Pf(t,a):(a=Ds(e,t,a,n),a!==null&&(st(a,e,n),If(a,t,n)))}function Wf(e,t,a){var n=bt();Ol(e,t,a,n)}function Ol(e,t,a,n){var i={lane:n,revertLane:0,action:a,hasEagerState:!1,eagerState:null,next:null};if(Zi(e))Pf(t,i);else{var s=e.alternate;if(e.lanes===0&&(s===null||s.lanes===0)&&(s=t.lastRenderedReducer,s!==null))try{var m=t.lastRenderedState,y=s(m,a);if(i.hasEagerState=!0,i.eagerState=y,pt(y,m))return _i(e,t,i,0),_e===null&&Ni(),!1}catch{}finally{}if(a=Ds(e,t,i,n),a!==null)return st(a,e,n),If(a,t,n),!0}return!1}function lo(e,t,a,n){if(n={lane:2,revertLane:Ko(),action:n,hasEagerState:!1,eagerState:null,next:null},Zi(e)){if(t)throw Error(o(479))}else t=Ds(e,a,n,2),t!==null&&st(t,e,2)}function Zi(e){var t=e.alternate;return e===ge||t!==null&&t===ge}function Pf(e,t){Mn=qi=!0;var a=e.pending;a===null?t.next=t:(t.next=a.next,a.next=t),e.pending=t}function If(e,t,a){if((a&4194176)!==0){var n=t.lanes;n&=e.pendingLanes,a|=n,t.lanes=a,uc(e,a)}}var Yt={readContext:nt,use:Gi,useCallback:Ye,useContext:Ye,useEffect:Ye,useImperativeHandle:Ye,useLayoutEffect:Ye,useInsertionEffect:Ye,useMemo:Ye,useReducer:Ye,useRef:Ye,useState:Ye,useDebugValue:Ye,useDeferredValue:Ye,useTransition:Ye,useSyncExternalStore:Ye,useId:Ye};Yt.useCacheRefresh=Ye,Yt.useMemoCache=Ye,Yt.useHostTransitionStatus=Ye,Yt.useFormState=Ye,Yt.useActionState=Ye,Yt.useOptimistic=Ye;var Pa={readContext:nt,use:Gi,useCallback:function(e,t){return ct().memoizedState=[e,t===void 0?null:t],e},useContext:nt,useEffect:Lf,useImperativeHandle:function(e,t,a){a=a!=null?a.concat([e]):null,Xi(4194308,4,Yf.bind(null,t,e),a)},useLayoutEffect:function(e,t){return Xi(4194308,4,e,t)},useInsertionEffect:function(e,t){Xi(4,2,e,t)},useMemo:function(e,t){var a=ct();t=t===void 0?null:t;var n=e();if(Wa){pa(!0);try{e()}finally{pa(!1)}}return a.memoizedState=[n,t],n},useReducer:function(e,t,a){var n=ct();if(a!==void 0){var i=a(t);if(Wa){pa(!0);try{a(t)}finally{pa(!1)}}}else i=t;return n.memoizedState=n.baseState=i,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:i},n.queue=e,e=e.dispatch=p1.bind(null,ge,e),[n.memoizedState,e]},useRef:function(e){var t=ct();return e={current:e},t.memoizedState=e},useState:function(e){e=Ws(e);var t=e.queue,a=Wf.bind(null,ge,t);return t.dispatch=a,[e.memoizedState,a]},useDebugValue:eo,useDeferredValue:function(e,t){var a=ct();return to(a,e,t)},useTransition:function(){var e=Ws(!1);return e=Qf.bind(null,ge,e.queue,!0,!1),ct().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,t,a){var n=ge,i=ct();if(Te){if(a===void 0)throw Error(o(407));a=a()}else{if(a=t(),_e===null)throw Error(o(349));(Se&60)!==0||wf(n,t,a)}i.memoizedState=a;var s={value:a,getSnapshot:t};return i.queue=s,Lf(jf.bind(null,n,s,e),[e]),n.flags|=2048,Bn(9,Ef.bind(null,n,s,a,t),{destroy:void 0},null),a},useId:function(){var e=ct(),t=_e.identifierPrefix;if(Te){var a=Wt,n=$t;a=(n&~(1<<32-ht(n)-1)).toString(32)+a,t=":"+t+"R"+a,a=Yi++,0<a&&(t+="H"+a.toString(32)),t+=":"}else a=u1++,t=":"+t+"r"+a.toString(32)+":";return e.memoizedState=t},useCacheRefresh:function(){return ct().memoizedState=h1.bind(null,ge)}};Pa.useMemoCache=Ks,Pa.useHostTransitionStatus=no,Pa.useFormState=Df,Pa.useActionState=Df,Pa.useOptimistic=function(e){var t=ct();t.memoizedState=t.baseState=e;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return t.queue=a,t=lo.bind(null,ge,!0,a),a.dispatch=t,[e,t]};var wa={readContext:nt,use:Gi,useCallback:Gf,useContext:nt,useEffect:Is,useImperativeHandle:Ff,useInsertionEffect:Uf,useLayoutEffect:qf,useMemo:Vf,useReducer:Vi,useRef:Hf,useState:function(){return Vi(It)},useDebugValue:eo,useDeferredValue:function(e,t){var a=Ge();return Xf(a,Re.memoizedState,e,t)},useTransition:function(){var e=Vi(It)[0],t=Ge().memoizedState;return[typeof e=="boolean"?e:Tl(e),t]},useSyncExternalStore:Sf,useId:Jf};wa.useCacheRefresh=$f,wa.useMemoCache=Ks,wa.useHostTransitionStatus=no,wa.useFormState=Mf,wa.useActionState=Mf,wa.useOptimistic=function(e,t){var a=Ge();return Rf(a,Re,e,t)};var Ia={readContext:nt,use:Gi,useCallback:Gf,useContext:nt,useEffect:Is,useImperativeHandle:Ff,useInsertionEffect:Uf,useLayoutEffect:qf,useMemo:Vf,useReducer:$s,useRef:Hf,useState:function(){return $s(It)},useDebugValue:eo,useDeferredValue:function(e,t){var a=Ge();return Re===null?to(a,e,t):Xf(a,Re.memoizedState,e,t)},useTransition:function(){var e=$s(It)[0],t=Ge().memoizedState;return[typeof e=="boolean"?e:Tl(e),t]},useSyncExternalStore:Sf,useId:Jf};Ia.useCacheRefresh=$f,Ia.useMemoCache=Ks,Ia.useHostTransitionStatus=no,Ia.useFormState=Bf,Ia.useActionState=Bf,Ia.useOptimistic=function(e,t){var a=Ge();return Re!==null?Rf(a,Re,e,t):(a.baseState=e,[e,a.queue.dispatch])};function io(e,t,a,n){t=e.memoizedState,a=a(n,t),a=a==null?t:Z({},t,a),e.memoizedState=a,e.lanes===0&&(e.updateQueue.baseState=a)}var ro={isMounted:function(e){return(e=e._reactInternals)?te(e)===e:!1},enqueueSetState:function(e,t,a){e=e._reactInternals;var n=bt(),i=Ta(n);i.payload=t,a!=null&&(i.callback=a),t=Oa(e,i,n),t!==null&&(st(t,e,n),Nl(t,e,n))},enqueueReplaceState:function(e,t,a){e=e._reactInternals;var n=bt(),i=Ta(n);i.tag=1,i.payload=t,a!=null&&(i.callback=a),t=Oa(e,i,n),t!==null&&(st(t,e,n),Nl(t,e,n))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var a=bt(),n=Ta(a);n.tag=2,t!=null&&(n.callback=t),t=Oa(e,n,a),t!==null&&(st(t,e,a),Nl(t,e,a))}};function ed(e,t,a,n,i,s,m){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(n,s,m):t.prototype&&t.prototype.isPureReactComponent?!ml(a,n)||!ml(i,s):!0}function td(e,t,a,n){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(a,n),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(a,n),t.state!==e&&ro.enqueueReplaceState(t,t.state,null)}function en(e,t){var a=t;if("ref"in t){a={};for(var n in t)n!=="ref"&&(a[n]=t[n])}if(e=e.defaultProps){a===t&&(a=Z({},a));for(var i in e)a[i]===void 0&&(a[i]=e[i])}return a}var Ki=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var t=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)};function ad(e){Ki(e)}function nd(e){console.error(e)}function ld(e){Ki(e)}function Ji(e,t){try{var a=e.onUncaughtError;a(t.value,{componentStack:t.stack})}catch(n){setTimeout(function(){throw n})}}function id(e,t,a){try{var n=e.onCaughtError;n(a.value,{componentStack:a.stack,errorBoundary:t.tag===1?t.stateNode:null})}catch(i){setTimeout(function(){throw i})}}function so(e,t,a){return a=Ta(a),a.tag=3,a.payload={element:null},a.callback=function(){Ji(e,t)},a}function rd(e){return e=Ta(e),e.tag=3,e}function sd(e,t,a,n){var i=a.type.getDerivedStateFromError;if(typeof i=="function"){var s=n.value;e.payload=function(){return i(s)},e.callback=function(){id(t,a,n)}}var m=a.stateNode;m!==null&&typeof m.componentDidCatch=="function"&&(e.callback=function(){id(t,a,n),typeof i!="function"&&(za===null?za=new Set([this]):za.add(this));var y=n.stack;this.componentDidCatch(n.value,{componentStack:y!==null?y:""})})}function g1(e,t,a,n,i){if(a.flags|=32768,n!==null&&typeof n=="object"&&typeof n.then=="function"){if(t=a.alternate,t!==null&&Al(t,a,i,!0),a=Ot.current,a!==null){switch(a.tag){case 13:return qt===null?Go():a.alternate===null&&Le===0&&(Le=3),a.flags&=-257,a.flags|=65536,a.lanes=i,n===Hs?a.flags|=16384:(t=a.updateQueue,t===null?a.updateQueue=new Set([n]):t.add(n),Xo(e,n,i)),!1;case 22:return a.flags|=65536,n===Hs?a.flags|=16384:(t=a.updateQueue,t===null?(t={transitions:null,markerInstances:null,retryQueue:new Set([n])},a.updateQueue=t):(a=t.retryQueue,a===null?t.retryQueue=new Set([n]):a.add(n)),Xo(e,n,i)),!1}throw Error(o(435,a.tag))}return Xo(e,n,i),Go(),!1}if(Te)return t=Ot.current,t!==null?((t.flags&65536)===0&&(t.flags|=256),t.flags|=65536,t.lanes=i,n!==Bs&&(e=Error(o(422),{cause:n}),vl(Et(e,a)))):(n!==Bs&&(t=Error(o(423),{cause:n}),vl(Et(t,a))),e=e.current.alternate,e.flags|=65536,i&=-i,e.lanes|=i,n=Et(n,a),i=so(e.stateNode,n,i),Eo(e,i),Le!==4&&(Le=2)),!1;var s=Error(o(520),{cause:n});if(s=Et(s,a),Hl===null?Hl=[s]:Hl.push(s),Le!==4&&(Le=2),t===null)return!0;n=Et(n,a),a=t;do{switch(a.tag){case 3:return a.flags|=65536,e=i&-i,a.lanes|=e,e=so(a.stateNode,n,e),Eo(a,e),!1;case 1:if(t=a.type,s=a.stateNode,(a.flags&128)===0&&(typeof t.getDerivedStateFromError=="function"||s!==null&&typeof s.componentDidCatch=="function"&&(za===null||!za.has(s))))return a.flags|=65536,i&=-i,a.lanes|=i,i=rd(i),sd(i,e,a,n),Eo(a,i),!1}a=a.return}while(a!==null);return!1}var od=Error(o(461)),Ke=!1;function Pe(e,t,a,n){t.child=e===null?mf(t,null,a,n):Ja(t,e.child,a,n)}function ud(e,t,a,n,i){a=a.render;var s=t.ref;if("ref"in n){var m={};for(var y in n)y!=="ref"&&(m[y]=n[y])}else m=n;return an(t),n=Vs(e,t,a,m,s,i),y=Xs(),e!==null&&!Ke?(Qs(e,t,i),ea(e,t,i)):(Te&&y&&Ms(t),t.flags|=1,Pe(e,t,n,i),t.child)}function cd(e,t,a,n,i){if(e===null){var s=a.type;return typeof s=="function"&&!Co(s)&&s.defaultProps===void 0&&a.compare===null?(t.tag=15,t.type=s,fd(e,t,s,n,i)):(e=er(a.type,null,n,t,t.mode,i),e.ref=t.ref,e.return=t,t.child=e)}if(s=e.child,!vo(e,i)){var m=s.memoizedProps;if(a=a.compare,a=a!==null?a:ml,a(m,n)&&e.ref===t.ref)return ea(e,t,i)}return t.flags|=1,e=_a(s,n),e.ref=t.ref,e.return=t,t.child=e}function fd(e,t,a,n,i){if(e!==null){var s=e.memoizedProps;if(ml(s,n)&&e.ref===t.ref)if(Ke=!1,t.pendingProps=n=s,vo(e,i))(e.flags&131072)!==0&&(Ke=!0);else return t.lanes=e.lanes,ea(e,t,i)}return oo(e,t,a,n,i)}function dd(e,t,a){var n=t.pendingProps,i=n.children,s=(t.stateNode._pendingVisibility&2)!==0,m=e!==null?e.memoizedState:null;if(Rl(e,t),n.mode==="hidden"||s){if((t.flags&128)!==0){if(n=m!==null?m.baseLanes|a:a,e!==null){for(i=t.child=e.child,s=0;i!==null;)s=s|i.lanes|i.childLanes,i=i.sibling;t.childLanes=s&~n}else t.childLanes=0,t.child=null;return md(e,t,n,a)}if((a&536870912)!==0)t.memoizedState={baseLanes:0,cachePool:null},e!==null&&Ui(t,m!==null?m.cachePool:null),m!==null?hf(t,m):Ls(),pf(t);else return t.lanes=t.childLanes=536870912,md(e,t,m!==null?m.baseLanes|a:a,a)}else m!==null?(Ui(t,m.cachePool),hf(t,m),xa(),t.memoizedState=null):(e!==null&&Ui(t,null),Ls(),xa());return Pe(e,t,i,a),t.child}function md(e,t,a,n){var i=Fs();return i=i===null?null:{parent:Qe._currentValue,pool:i},t.memoizedState={baseLanes:a,cachePool:i},e!==null&&Ui(t,null),Ls(),pf(t),e!==null&&Al(e,t,n,!0),null}function Rl(e,t){var a=t.ref;if(a===null)e!==null&&e.ref!==null&&(t.flags|=2097664);else{if(typeof a!="function"&&typeof a!="object")throw Error(o(284));(e===null||e.ref!==a)&&(t.flags|=2097664)}}function oo(e,t,a,n,i){return an(t),a=Vs(e,t,a,n,void 0,i),n=Xs(),e!==null&&!Ke?(Qs(e,t,i),ea(e,t,i)):(Te&&n&&Ms(t),t.flags|=1,Pe(e,t,a,i),t.child)}function hd(e,t,a,n,i,s){return an(t),t.updateQueue=null,a=xf(t,n,a,i),bf(e),n=Xs(),e!==null&&!Ke?(Qs(e,t,s),ea(e,t,s)):(Te&&n&&Ms(t),t.flags|=1,Pe(e,t,a,s),t.child)}function pd(e,t,a,n,i){if(an(t),t.stateNode===null){var s=Rn,m=a.contextType;typeof m=="object"&&m!==null&&(s=nt(m)),s=new a(n,s),t.memoizedState=s.state!==null&&s.state!==void 0?s.state:null,s.updater=ro,t.stateNode=s,s._reactInternals=t,s=t.stateNode,s.props=n,s.state=t.memoizedState,s.refs={},So(t),m=a.contextType,s.context=typeof m=="object"&&m!==null?nt(m):Rn,s.state=t.memoizedState,m=a.getDerivedStateFromProps,typeof m=="function"&&(io(t,a,m,n),s.state=t.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof s.getSnapshotBeforeUpdate=="function"||typeof s.UNSAFE_componentWillMount!="function"&&typeof s.componentWillMount!="function"||(m=s.state,typeof s.componentWillMount=="function"&&s.componentWillMount(),typeof s.UNSAFE_componentWillMount=="function"&&s.UNSAFE_componentWillMount(),m!==s.state&&ro.enqueueReplaceState(s,s.state,null),Cl(t,n,s,i),_l(),s.state=t.memoizedState),typeof s.componentDidMount=="function"&&(t.flags|=4194308),n=!0}else if(e===null){s=t.stateNode;var y=t.memoizedProps,S=en(a,y);s.props=S;var N=s.context,q=a.contextType;m=Rn,typeof q=="object"&&q!==null&&(m=nt(q));var X=a.getDerivedStateFromProps;q=typeof X=="function"||typeof s.getSnapshotBeforeUpdate=="function",y=t.pendingProps!==y,q||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(y||N!==m)&&td(t,s,n,m),ja=!1;var B=t.memoizedState;s.state=B,Cl(t,n,s,i),_l(),N=t.memoizedState,y||B!==N||ja?(typeof X=="function"&&(io(t,a,X,n),N=t.memoizedState),(S=ja||ed(t,a,S,n,B,N,m))?(q||typeof s.UNSAFE_componentWillMount!="function"&&typeof s.componentWillMount!="function"||(typeof s.componentWillMount=="function"&&s.componentWillMount(),typeof s.UNSAFE_componentWillMount=="function"&&s.UNSAFE_componentWillMount()),typeof s.componentDidMount=="function"&&(t.flags|=4194308)):(typeof s.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=n,t.memoizedState=N),s.props=n,s.state=N,s.context=m,n=S):(typeof s.componentDidMount=="function"&&(t.flags|=4194308),n=!1)}else{s=t.stateNode,wo(e,t),m=t.memoizedProps,q=en(a,m),s.props=q,X=t.pendingProps,B=s.context,N=a.contextType,S=Rn,typeof N=="object"&&N!==null&&(S=nt(N)),y=a.getDerivedStateFromProps,(N=typeof y=="function"||typeof s.getSnapshotBeforeUpdate=="function")||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(m!==X||B!==S)&&td(t,s,n,S),ja=!1,B=t.memoizedState,s.state=B,Cl(t,n,s,i),_l();var L=t.memoizedState;m!==X||B!==L||ja||e!==null&&e.dependencies!==null&&$i(e.dependencies)?(typeof y=="function"&&(io(t,a,y,n),L=t.memoizedState),(q=ja||ed(t,a,q,n,B,L,S)||e!==null&&e.dependencies!==null&&$i(e.dependencies))?(N||typeof s.UNSAFE_componentWillUpdate!="function"&&typeof s.componentWillUpdate!="function"||(typeof s.componentWillUpdate=="function"&&s.componentWillUpdate(n,L,S),typeof s.UNSAFE_componentWillUpdate=="function"&&s.UNSAFE_componentWillUpdate(n,L,S)),typeof s.componentDidUpdate=="function"&&(t.flags|=4),typeof s.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof s.componentDidUpdate!="function"||m===e.memoizedProps&&B===e.memoizedState||(t.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||m===e.memoizedProps&&B===e.memoizedState||(t.flags|=1024),t.memoizedProps=n,t.memoizedState=L),s.props=n,s.state=L,s.context=S,n=q):(typeof s.componentDidUpdate!="function"||m===e.memoizedProps&&B===e.memoizedState||(t.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||m===e.memoizedProps&&B===e.memoizedState||(t.flags|=1024),n=!1)}return s=n,Rl(e,t),n=(t.flags&128)!==0,s||n?(s=t.stateNode,a=n&&typeof a.getDerivedStateFromError!="function"?null:s.render(),t.flags|=1,e!==null&&n?(t.child=Ja(t,e.child,null,i),t.child=Ja(t,null,a,i)):Pe(e,t,a,i),t.memoizedState=s.state,e=t.child):e=ea(e,t,i),e}function gd(e,t,a,n){return gl(),t.flags|=256,Pe(e,t,a,n),t.child}var uo={dehydrated:null,treeContext:null,retryLane:0};function co(e){return{baseLanes:e,cachePool:yf()}}function fo(e,t,a){return e=e!==null?e.childLanes&~a:0,t&&(e|=_t),e}function vd(e,t,a){var n=t.pendingProps,i=!1,s=(t.flags&128)!==0,m;if((m=s)||(m=e!==null&&e.memoizedState===null?!1:(Xe.current&2)!==0),m&&(i=!0,t.flags&=-129),m=(t.flags&32)!==0,t.flags&=-33,e===null){if(Te){if(i?ba(t):xa(),Te){var y=We,S;if(S=y){e:{for(S=y,y=Ut;S.nodeType!==8;){if(!y){y=null;break e}if(S=kt(S.nextSibling),S===null){y=null;break e}}y=S}y!==null?(t.memoizedState={dehydrated:y,treeContext:Qa!==null?{id:$t,overflow:Wt}:null,retryLane:536870912},S=Nt(18,null,null,0),S.stateNode=y,S.return=t,t.child=S,rt=t,We=null,S=!0):S=!1}S||Ka(t)}if(y=t.memoizedState,y!==null&&(y=y.dehydrated,y!==null))return y.data==="$!"?t.lanes=16:t.lanes=536870912,null;Pt(t)}return y=n.children,n=n.fallback,i?(xa(),i=t.mode,y=ho({mode:"hidden",children:y},i),n=ln(n,i,a,null),y.return=t,n.return=t,y.sibling=n,t.child=y,i=t.child,i.memoizedState=co(a),i.childLanes=fo(e,m,a),t.memoizedState=uo,n):(ba(t),mo(t,y))}if(S=e.memoizedState,S!==null&&(y=S.dehydrated,y!==null)){if(s)t.flags&256?(ba(t),t.flags&=-257,t=po(e,t,a)):t.memoizedState!==null?(xa(),t.child=e.child,t.flags|=128,t=null):(xa(),i=n.fallback,y=t.mode,n=ho({mode:"visible",children:n.children},y),i=ln(i,y,a,null),i.flags|=2,n.return=t,i.return=t,n.sibling=i,t.child=n,Ja(t,e.child,null,a),n=t.child,n.memoizedState=co(a),n.childLanes=fo(e,m,a),t.memoizedState=uo,t=i);else if(ba(t),y.data==="$!"){if(m=y.nextSibling&&y.nextSibling.dataset,m)var N=m.dgst;m=N,n=Error(o(419)),n.stack="",n.digest=m,vl({value:n,source:null,stack:null}),t=po(e,t,a)}else if(Ke||Al(e,t,a,!1),m=(a&e.childLanes)!==0,Ke||m){if(m=_e,m!==null){if(n=a&-a,(n&42)!==0)n=1;else switch(n){case 2:n=1;break;case 8:n=4;break;case 32:n=16;break;case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:n=64;break;case 268435456:n=134217728;break;default:n=0}if(n=(n&(m.suspendedLanes|a))!==0?0:n,n!==0&&n!==S.retryLane)throw S.retryLane=n,ya(e,n),st(m,e,n),od}y.data==="$?"||Go(),t=po(e,t,a)}else y.data==="$?"?(t.flags|=128,t.child=e.child,t=C1.bind(null,e),y._reactRetry=t,t=null):(e=S.treeContext,We=kt(y.nextSibling),rt=t,Te=!0,Dt=null,Ut=!1,e!==null&&(jt[Tt++]=$t,jt[Tt++]=Wt,jt[Tt++]=Qa,$t=e.id,Wt=e.overflow,Qa=t),t=mo(t,n.children),t.flags|=4096);return t}return i?(xa(),i=n.fallback,y=t.mode,S=e.child,N=S.sibling,n=_a(S,{mode:"hidden",children:n.children}),n.subtreeFlags=S.subtreeFlags&31457280,N!==null?i=_a(N,i):(i=ln(i,y,a,null),i.flags|=2),i.return=t,n.return=t,n.sibling=i,t.child=n,n=i,i=t.child,y=e.child.memoizedState,y===null?y=co(a):(S=y.cachePool,S!==null?(N=Qe._currentValue,S=S.parent!==N?{parent:N,pool:N}:S):S=yf(),y={baseLanes:y.baseLanes|a,cachePool:S}),i.memoizedState=y,i.childLanes=fo(e,m,a),t.memoizedState=uo,n):(ba(t),a=e.child,e=a.sibling,a=_a(a,{mode:"visible",children:n.children}),a.return=t,a.sibling=null,e!==null&&(m=t.deletions,m===null?(t.deletions=[e],t.flags|=16):m.push(e)),t.child=a,t.memoizedState=null,a)}function mo(e,t){return t=ho({mode:"visible",children:t},e.mode),t.return=e,e.child=t}function ho(e,t){return Gd(e,t,0,null)}function po(e,t,a){return Ja(t,e.child,null,a),e=mo(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function yd(e,t,a){e.lanes|=t;var n=e.alternate;n!==null&&(n.lanes|=t),bo(e.return,t,a)}function go(e,t,a,n,i){var s=e.memoizedState;s===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:n,tail:a,tailMode:i}:(s.isBackwards=t,s.rendering=null,s.renderingStartTime=0,s.last=n,s.tail=a,s.tailMode=i)}function bd(e,t,a){var n=t.pendingProps,i=n.revealOrder,s=n.tail;if(Pe(e,t,n.children,a),n=Xe.current,(n&2)!==0)n=n&1|2,t.flags|=128;else{if(e!==null&&(e.flags&128)!==0)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&yd(e,a,t);else if(e.tag===19)yd(e,a,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}n&=1}switch(je(Xe,n),i){case"forwards":for(a=t.child,i=null;a!==null;)e=a.alternate,e!==null&&Li(e)===null&&(i=a),a=a.sibling;a=i,a===null?(i=t.child,t.child=null):(i=a.sibling,a.sibling=null),go(t,!1,i,a,s);break;case"backwards":for(a=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&Li(e)===null){t.child=i;break}e=i.sibling,i.sibling=a,a=i,i=e}go(t,!0,a,null,s);break;case"together":go(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function ea(e,t,a){if(e!==null&&(t.dependencies=e.dependencies),Ca|=t.lanes,(a&t.childLanes)===0)if(e!==null){if(Al(e,t,a,!1),(a&t.childLanes)===0)return null}else return null;if(e!==null&&t.child!==e.child)throw Error(o(153));if(t.child!==null){for(e=t.child,a=_a(e,e.pendingProps),t.child=a,a.return=t;e.sibling!==null;)e=e.sibling,a=a.sibling=_a(e,e.pendingProps),a.return=t;a.sibling=null}return t.child}function vo(e,t){return(e.lanes&t)!==0?!0:(e=e.dependencies,!!(e!==null&&$i(e)))}function v1(e,t,a){switch(t.tag){case 3:di(t,t.stateNode.containerInfo),Ea(t,Qe,e.memoizedState.cache),gl();break;case 27:case 5:rs(t);break;case 4:di(t,t.stateNode.containerInfo);break;case 10:Ea(t,t.type,t.memoizedProps.value);break;case 13:var n=t.memoizedState;if(n!==null)return n.dehydrated!==null?(ba(t),t.flags|=128,null):(a&t.child.childLanes)!==0?vd(e,t,a):(ba(t),e=ea(e,t,a),e!==null?e.sibling:null);ba(t);break;case 19:var i=(e.flags&128)!==0;if(n=(a&t.childLanes)!==0,n||(Al(e,t,a,!1),n=(a&t.childLanes)!==0),i){if(n)return bd(e,t,a);t.flags|=128}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),je(Xe,Xe.current),n)break;return null;case 22:case 23:return t.lanes=0,dd(e,t,a);case 24:Ea(t,Qe,e.memoizedState.cache)}return ea(e,t,a)}function xd(e,t,a){if(e!==null)if(e.memoizedProps!==t.pendingProps)Ke=!0;else{if(!vo(e,a)&&(t.flags&128)===0)return Ke=!1,v1(e,t,a);Ke=(e.flags&131072)!==0}else Ke=!1,Te&&(t.flags&1048576)!==0&&nf(t,Di,t.index);switch(t.lanes=0,t.tag){case 16:e:{e=t.pendingProps;var n=t.elementType,i=n._init;if(n=i(n._payload),t.type=n,typeof n=="function")Co(n)?(e=en(n,e),t.tag=1,t=pd(null,t,n,e,a)):(t.tag=0,t=oo(null,t,n,e,a));else{if(n!=null){if(i=n.$$typeof,i===x){t.tag=11,t=ud(null,t,n,e,a);break e}else if(i===_){t.tag=14,t=cd(null,t,n,e,a);break e}}throw t=ie(n)||n,Error(o(306,t,""))}}return t;case 0:return oo(e,t,t.type,t.pendingProps,a);case 1:return n=t.type,i=en(n,t.pendingProps),pd(e,t,n,i,a);case 3:e:{if(di(t,t.stateNode.containerInfo),e===null)throw Error(o(387));var s=t.pendingProps;i=t.memoizedState,n=i.element,wo(e,t),Cl(t,s,null,a);var m=t.memoizedState;if(s=m.cache,Ea(t,Qe,s),s!==i.cache&&xo(t,[Qe],a,!0),_l(),s=m.element,i.isDehydrated)if(i={element:s,isDehydrated:!1,cache:m.cache},t.updateQueue.baseState=i,t.memoizedState=i,t.flags&256){t=gd(e,t,s,a);break e}else if(s!==n){n=Et(Error(o(424)),t),vl(n),t=gd(e,t,s,a);break e}else for(We=kt(t.stateNode.containerInfo.firstChild),rt=t,Te=!0,Dt=null,Ut=!0,a=mf(t,null,s,a),t.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling;else{if(gl(),s===n){t=ea(e,t,a);break e}Pe(e,t,s,a)}t=t.child}return t;case 26:return Rl(e,t),e===null?(a=Em(t.type,null,t.pendingProps,null))?t.memoizedState=a:Te||(a=t.type,e=t.pendingProps,n=dr(ha.current).createElement(a),n[at]=t,n[ot]=e,Ie(n,a,e),Ze(n),t.stateNode=n):t.memoizedState=Em(t.type,e.memoizedProps,t.pendingProps,e.memoizedState),null;case 27:return rs(t),e===null&&Te&&(n=t.stateNode=xm(t.type,t.pendingProps,ha.current),rt=t,Ut=!0,We=kt(n.firstChild)),n=t.pendingProps.children,e!==null||Te?Pe(e,t,n,a):t.child=Ja(t,null,n,a),Rl(e,t),t.child;case 5:return e===null&&Te&&((i=n=We)&&(n=Z1(n,t.type,t.pendingProps,Ut),n!==null?(t.stateNode=n,rt=t,We=kt(n.firstChild),Ut=!1,i=!0):i=!1),i||Ka(t)),rs(t),i=t.type,s=t.pendingProps,m=e!==null?e.memoizedProps:null,n=s.children,nu(i,s)?n=null:m!==null&&nu(i,m)&&(t.flags|=32),t.memoizedState!==null&&(i=Vs(e,t,c1,null,null,a),Ql._currentValue=i),Rl(e,t),Pe(e,t,n,a),t.child;case 6:return e===null&&Te&&((e=a=We)&&(a=K1(a,t.pendingProps,Ut),a!==null?(t.stateNode=a,rt=t,We=null,e=!0):e=!1),e||Ka(t)),null;case 13:return vd(e,t,a);case 4:return di(t,t.stateNode.containerInfo),n=t.pendingProps,e===null?t.child=Ja(t,null,n,a):Pe(e,t,n,a),t.child;case 11:return ud(e,t,t.type,t.pendingProps,a);case 7:return Pe(e,t,t.pendingProps,a),t.child;case 8:return Pe(e,t,t.pendingProps.children,a),t.child;case 12:return Pe(e,t,t.pendingProps.children,a),t.child;case 10:return n=t.pendingProps,Ea(t,t.type,n.value),Pe(e,t,n.children,a),t.child;case 9:return i=t.type._context,n=t.pendingProps.children,an(t),i=nt(i),n=n(i),t.flags|=1,Pe(e,t,n,a),t.child;case 14:return cd(e,t,t.type,t.pendingProps,a);case 15:return fd(e,t,t.type,t.pendingProps,a);case 19:return bd(e,t,a);case 22:return dd(e,t,a);case 24:return an(t),n=nt(Qe),e===null?(i=Fs(),i===null&&(i=_e,s=qs(),i.pooledCache=s,s.refCount++,s!==null&&(i.pooledCacheLanes|=a),i=s),t.memoizedState={parent:n,cache:i},So(t),Ea(t,Qe,i)):((e.lanes&a)!==0&&(wo(e,t),Cl(t,null,null,a),_l()),i=e.memoizedState,s=t.memoizedState,i.parent!==n?(i={parent:n,cache:n},t.memoizedState=i,t.lanes===0&&(t.memoizedState=t.updateQueue.baseState=i),Ea(t,Qe,n)):(n=s.cache,Ea(t,Qe,n),n!==i.cache&&xo(t,[Qe],a,!0))),Pe(e,t,t.pendingProps.children,a),t.child;case 29:throw t.pendingProps}throw Error(o(156,t.tag))}var yo=ue(null),tn=null,ta=null;function Ea(e,t,a){je(yo,t._currentValue),t._currentValue=a}function aa(e){e._currentValue=yo.current,Ee(yo)}function bo(e,t,a){for(;e!==null;){var n=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,n!==null&&(n.childLanes|=t)):n!==null&&(n.childLanes&t)!==t&&(n.childLanes|=t),e===a)break;e=e.return}}function xo(e,t,a,n){var i=e.child;for(i!==null&&(i.return=e);i!==null;){var s=i.dependencies;if(s!==null){var m=i.child;s=s.firstContext;e:for(;s!==null;){var y=s;s=i;for(var S=0;S<t.length;S++)if(y.context===t[S]){s.lanes|=a,y=s.alternate,y!==null&&(y.lanes|=a),bo(s.return,a,e),n||(m=null);break e}s=y.next}}else if(i.tag===18){if(m=i.return,m===null)throw Error(o(341));m.lanes|=a,s=m.alternate,s!==null&&(s.lanes|=a),bo(m,a,e),m=null}else m=i.child;if(m!==null)m.return=i;else for(m=i;m!==null;){if(m===e){m=null;break}if(i=m.sibling,i!==null){i.return=m.return,m=i;break}m=m.return}i=m}}function Al(e,t,a,n){e=null;for(var i=t,s=!1;i!==null;){if(!s){if((i.flags&524288)!==0)s=!0;else if((i.flags&262144)!==0)break}if(i.tag===10){var m=i.alternate;if(m===null)throw Error(o(387));if(m=m.memoizedProps,m!==null){var y=i.type;pt(i.pendingProps.value,m.value)||(e!==null?e.push(y):e=[y])}}else if(i===fi.current){if(m=i.alternate,m===null)throw Error(o(387));m.memoizedState.memoizedState!==i.memoizedState.memoizedState&&(e!==null?e.push(Ql):e=[Ql])}i=i.return}e!==null&&xo(t,e,a,n),t.flags|=262144}function $i(e){for(e=e.firstContext;e!==null;){if(!pt(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function an(e){tn=e,ta=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function nt(e){return Sd(tn,e)}function Wi(e,t){return tn===null&&an(e),Sd(e,t)}function Sd(e,t){var a=t._currentValue;if(t={context:t,memoizedValue:a,next:null},ta===null){if(e===null)throw Error(o(308));ta=t,e.dependencies={lanes:0,firstContext:t},e.flags|=524288}else ta=ta.next=t;return a}var ja=!1;function So(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function wo(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function Ta(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function Oa(e,t,a){var n=e.updateQueue;if(n===null)return null;if(n=n.shared,(ke&2)!==0){var i=n.pending;return i===null?t.next=t:(t.next=i.next,i.next=t),n.pending=t,t=Ci(e),tf(e,null,a),t}return _i(e,n,t,a),Ci(e)}function Nl(e,t,a){if(t=t.updateQueue,t!==null&&(t=t.shared,(a&4194176)!==0)){var n=t.lanes;n&=e.pendingLanes,a|=n,t.lanes=a,uc(e,a)}}function Eo(e,t){var a=e.updateQueue,n=e.alternate;if(n!==null&&(n=n.updateQueue,a===n)){var i=null,s=null;if(a=a.firstBaseUpdate,a!==null){do{var m={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};s===null?i=s=m:s=s.next=m,a=a.next}while(a!==null);s===null?i=s=t:s=s.next=t}else i=s=t;a={baseState:n.baseState,firstBaseUpdate:i,lastBaseUpdate:s,shared:n.shared,callbacks:n.callbacks},e.updateQueue=a;return}e=a.lastBaseUpdate,e===null?a.firstBaseUpdate=t:e.next=t,a.lastBaseUpdate=t}var jo=!1;function _l(){if(jo){var e=Dn;if(e!==null)throw e}}function Cl(e,t,a,n){jo=!1;var i=e.updateQueue;ja=!1;var s=i.firstBaseUpdate,m=i.lastBaseUpdate,y=i.shared.pending;if(y!==null){i.shared.pending=null;var S=y,N=S.next;S.next=null,m===null?s=N:m.next=N,m=S;var q=e.alternate;q!==null&&(q=q.updateQueue,y=q.lastBaseUpdate,y!==m&&(y===null?q.firstBaseUpdate=N:y.next=N,q.lastBaseUpdate=S))}if(s!==null){var X=i.baseState;m=0,q=N=S=null,y=s;do{var B=y.lane&-536870913,L=B!==y.lane;if(L?(Se&B)===B:(n&B)===B){B!==0&&B===zn&&(jo=!0),q!==null&&(q=q.next={lane:0,tag:y.tag,payload:y.payload,callback:null,next:null});e:{var re=e,de=y;B=t;var Ue=a;switch(de.tag){case 1:if(re=de.payload,typeof re=="function"){X=re.call(Ue,X,B);break e}X=re;break e;case 3:re.flags=re.flags&-65537|128;case 0:if(re=de.payload,B=typeof re=="function"?re.call(Ue,X,B):re,B==null)break e;X=Z({},X,B);break e;case 2:ja=!0}}B=y.callback,B!==null&&(e.flags|=64,L&&(e.flags|=8192),L=i.callbacks,L===null?i.callbacks=[B]:L.push(B))}else L={lane:B,tag:y.tag,payload:y.payload,callback:y.callback,next:null},q===null?(N=q=L,S=X):q=q.next=L,m|=B;if(y=y.next,y===null){if(y=i.shared.pending,y===null)break;L=y,y=L.next,L.next=null,i.lastBaseUpdate=L,i.shared.pending=null}}while(!0);q===null&&(S=X),i.baseState=S,i.firstBaseUpdate=N,i.lastBaseUpdate=q,s===null&&(i.shared.lanes=0),Ca|=m,e.lanes=m,e.memoizedState=X}}function wd(e,t){if(typeof e!="function")throw Error(o(191,e));e.call(t)}function Ed(e,t){var a=e.callbacks;if(a!==null)for(e.callbacks=null,e=0;e<a.length;e++)wd(a[e],t)}function zl(e,t){try{var a=t.updateQueue,n=a!==null?a.lastEffect:null;if(n!==null){var i=n.next;a=i;do{if((a.tag&e)===e){n=void 0;var s=a.create,m=a.inst;n=s(),m.destroy=n}a=a.next}while(a!==i)}}catch(y){Ne(t,t.return,y)}}function Ra(e,t,a){try{var n=t.updateQueue,i=n!==null?n.lastEffect:null;if(i!==null){var s=i.next;n=s;do{if((n.tag&e)===e){var m=n.inst,y=m.destroy;if(y!==void 0){m.destroy=void 0,i=t;var S=a;try{y()}catch(N){Ne(i,S,N)}}}n=n.next}while(n!==s)}}catch(N){Ne(t,t.return,N)}}function jd(e){var t=e.updateQueue;if(t!==null){var a=e.stateNode;try{Ed(t,a)}catch(n){Ne(e,e.return,n)}}}function Td(e,t,a){a.props=en(e.type,e.memoizedProps),a.state=e.memoizedState;try{a.componentWillUnmount()}catch(n){Ne(e,t,n)}}function nn(e,t){try{var a=e.ref;if(a!==null){var n=e.stateNode;switch(e.tag){case 26:case 27:case 5:var i=n;break;default:i=n}typeof a=="function"?e.refCleanup=a(i):a.current=i}}catch(s){Ne(e,t,s)}}function gt(e,t){var a=e.ref,n=e.refCleanup;if(a!==null)if(typeof n=="function")try{n()}catch(i){Ne(e,t,i)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(i){Ne(e,t,i)}else a.current=null}function Od(e){var t=e.type,a=e.memoizedProps,n=e.stateNode;try{e:switch(t){case"button":case"input":case"select":case"textarea":a.autoFocus&&n.focus();break e;case"img":a.src?n.src=a.src:a.srcSet&&(n.srcset=a.srcSet)}}catch(i){Ne(e,e.return,i)}}function Rd(e,t,a){try{var n=e.stateNode;F1(n,e.type,a,t),n[ot]=t}catch(i){Ne(e,e.return,i)}}function Ad(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27||e.tag===4}function To(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Ad(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==27&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Oo(e,t,a){var n=e.tag;if(n===5||n===6)e=e.stateNode,t?a.nodeType===8?a.parentNode.insertBefore(e,t):a.insertBefore(e,t):(a.nodeType===8?(t=a.parentNode,t.insertBefore(e,a)):(t=a,t.appendChild(e)),a=a._reactRootContainer,a!=null||t.onclick!==null||(t.onclick=fr));else if(n!==4&&n!==27&&(e=e.child,e!==null))for(Oo(e,t,a),e=e.sibling;e!==null;)Oo(e,t,a),e=e.sibling}function Pi(e,t,a){var n=e.tag;if(n===5||n===6)e=e.stateNode,t?a.insertBefore(e,t):a.appendChild(e);else if(n!==4&&n!==27&&(e=e.child,e!==null))for(Pi(e,t,a),e=e.sibling;e!==null;)Pi(e,t,a),e=e.sibling}var na=!1,He=!1,Ro=!1,Nd=typeof WeakSet=="function"?WeakSet:Set,Je=null,_d=!1;function y1(e,t){if(e=e.containerInfo,tu=yr,e=Qc(e),As(e)){if("selectionStart"in e)var a={start:e.selectionStart,end:e.selectionEnd};else e:{a=(a=e.ownerDocument)&&a.defaultView||window;var n=a.getSelection&&a.getSelection();if(n&&n.rangeCount!==0){a=n.anchorNode;var i=n.anchorOffset,s=n.focusNode;n=n.focusOffset;try{a.nodeType,s.nodeType}catch{a=null;break e}var m=0,y=-1,S=-1,N=0,q=0,X=e,B=null;t:for(;;){for(var L;X!==a||i!==0&&X.nodeType!==3||(y=m+i),X!==s||n!==0&&X.nodeType!==3||(S=m+n),X.nodeType===3&&(m+=X.nodeValue.length),(L=X.firstChild)!==null;)B=X,X=L;for(;;){if(X===e)break t;if(B===a&&++N===i&&(y=m),B===s&&++q===n&&(S=m),(L=X.nextSibling)!==null)break;X=B,B=X.parentNode}X=L}a=y===-1||S===-1?null:{start:y,end:S}}else a=null}a=a||{start:0,end:0}}else a=null;for(au={focusedElem:e,selectionRange:a},yr=!1,Je=t;Je!==null;)if(t=Je,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,Je=e;else for(;Je!==null;){switch(t=Je,s=t.alternate,e=t.flags,t.tag){case 0:break;case 11:case 15:break;case 1:if((e&1024)!==0&&s!==null){e=void 0,a=t,i=s.memoizedProps,s=s.memoizedState,n=a.stateNode;try{var re=en(a.type,i,a.elementType===a.type);e=n.getSnapshotBeforeUpdate(re,s),n.__reactInternalSnapshotBeforeUpdate=e}catch(de){Ne(a,a.return,de)}}break;case 3:if((e&1024)!==0){if(e=t.stateNode.containerInfo,a=e.nodeType,a===9)ru(e);else if(a===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":ru(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(o(163))}if(e=t.sibling,e!==null){e.return=t.return,Je=e;break}Je=t.return}return re=_d,_d=!1,re}function Cd(e,t,a){var n=a.flags;switch(a.tag){case 0:case 11:case 15:ia(e,a),n&4&&zl(5,a);break;case 1:if(ia(e,a),n&4)if(e=a.stateNode,t===null)try{e.componentDidMount()}catch(y){Ne(a,a.return,y)}else{var i=en(a.type,t.memoizedProps);t=t.memoizedState;try{e.componentDidUpdate(i,t,e.__reactInternalSnapshotBeforeUpdate)}catch(y){Ne(a,a.return,y)}}n&64&&jd(a),n&512&&nn(a,a.return);break;case 3:if(ia(e,a),n&64&&(n=a.updateQueue,n!==null)){if(e=null,a.child!==null)switch(a.child.tag){case 27:case 5:e=a.child.stateNode;break;case 1:e=a.child.stateNode}try{Ed(n,e)}catch(y){Ne(a,a.return,y)}}break;case 26:ia(e,a),n&512&&nn(a,a.return);break;case 27:case 5:ia(e,a),t===null&&n&4&&Od(a),n&512&&nn(a,a.return);break;case 12:ia(e,a);break;case 13:ia(e,a),n&4&&Md(e,a);break;case 22:if(i=a.memoizedState!==null||na,!i){t=t!==null&&t.memoizedState!==null||He;var s=na,m=He;na=i,(He=t)&&!m?Aa(e,a,(a.subtreeFlags&8772)!==0):ia(e,a),na=s,He=m}n&512&&(a.memoizedProps.mode==="manual"?nn(a,a.return):gt(a,a.return));break;default:ia(e,a)}}function zd(e){var t=e.alternate;t!==null&&(e.alternate=null,zd(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&ds(t)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var Ve=null,vt=!1;function la(e,t,a){for(a=a.child;a!==null;)Dd(e,t,a),a=a.sibling}function Dd(e,t,a){if(mt&&typeof mt.onCommitFiberUnmount=="function")try{mt.onCommitFiberUnmount(tl,a)}catch{}switch(a.tag){case 26:He||gt(a,t),la(e,t,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:He||gt(a,t);var n=Ve,i=vt;for(Ve=a.stateNode,la(e,t,a),a=a.stateNode,t=a.attributes;t.length;)a.removeAttributeNode(t[0]);ds(a),Ve=n,vt=i;break;case 5:He||gt(a,t);case 6:i=Ve;var s=vt;if(Ve=null,la(e,t,a),Ve=i,vt=s,Ve!==null)if(vt)try{e=Ve,n=a.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)}catch(m){Ne(a,t,m)}else try{Ve.removeChild(a.stateNode)}catch(m){Ne(a,t,m)}break;case 18:Ve!==null&&(vt?(t=Ve,a=a.stateNode,t.nodeType===8?iu(t.parentNode,a):t.nodeType===1&&iu(t,a),$l(t)):iu(Ve,a.stateNode));break;case 4:n=Ve,i=vt,Ve=a.stateNode.containerInfo,vt=!0,la(e,t,a),Ve=n,vt=i;break;case 0:case 11:case 14:case 15:He||Ra(2,a,t),He||Ra(4,a,t),la(e,t,a);break;case 1:He||(gt(a,t),n=a.stateNode,typeof n.componentWillUnmount=="function"&&Td(a,t,n)),la(e,t,a);break;case 21:la(e,t,a);break;case 22:He||gt(a,t),He=(n=He)||a.memoizedState!==null,la(e,t,a),He=n;break;default:la(e,t,a)}}function Md(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{$l(e)}catch(a){Ne(t,t.return,a)}}function b1(e){switch(e.tag){case 13:case 19:var t=e.stateNode;return t===null&&(t=e.stateNode=new Nd),t;case 22:return e=e.stateNode,t=e._retryCache,t===null&&(t=e._retryCache=new Nd),t;default:throw Error(o(435,e.tag))}}function Ao(e,t){var a=b1(e);t.forEach(function(n){var i=z1.bind(null,e,n);a.has(n)||(a.add(n),n.then(i,i))})}function Rt(e,t){var a=t.deletions;if(a!==null)for(var n=0;n<a.length;n++){var i=a[n],s=e,m=t,y=m;e:for(;y!==null;){switch(y.tag){case 27:case 5:Ve=y.stateNode,vt=!1;break e;case 3:Ve=y.stateNode.containerInfo,vt=!0;break e;case 4:Ve=y.stateNode.containerInfo,vt=!0;break e}y=y.return}if(Ve===null)throw Error(o(160));Dd(s,m,i),Ve=null,vt=!1,s=i.alternate,s!==null&&(s.return=null),i.return=null}if(t.subtreeFlags&13878)for(t=t.child;t!==null;)kd(t,e),t=t.sibling}var Mt=null;function kd(e,t){var a=e.alternate,n=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:Rt(t,e),At(e),n&4&&(Ra(3,e,e.return),zl(3,e),Ra(5,e,e.return));break;case 1:Rt(t,e),At(e),n&512&&(He||a===null||gt(a,a.return)),n&64&&na&&(e=e.updateQueue,e!==null&&(n=e.callbacks,n!==null&&(a=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=a===null?n:a.concat(n))));break;case 26:var i=Mt;if(Rt(t,e),At(e),n&512&&(He||a===null||gt(a,a.return)),n&4){var s=a!==null?a.memoizedState:null;if(n=e.memoizedState,a===null)if(n===null)if(e.stateNode===null){e:{n=e.type,a=e.memoizedProps,i=i.ownerDocument||i;t:switch(n){case"title":s=i.getElementsByTagName("title")[0],(!s||s[ll]||s[at]||s.namespaceURI==="http://www.w3.org/2000/svg"||s.hasAttribute("itemprop"))&&(s=i.createElement(n),i.head.insertBefore(s,i.querySelector("head > title"))),Ie(s,n,a),s[at]=e,Ze(s),n=s;break e;case"link":var m=Om("link","href",i).get(n+(a.href||""));if(m){for(var y=0;y<m.length;y++)if(s=m[y],s.getAttribute("href")===(a.href==null?null:a.href)&&s.getAttribute("rel")===(a.rel==null?null:a.rel)&&s.getAttribute("title")===(a.title==null?null:a.title)&&s.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){m.splice(y,1);break t}}s=i.createElement(n),Ie(s,n,a),i.head.appendChild(s);break;case"meta":if(m=Om("meta","content",i).get(n+(a.content||""))){for(y=0;y<m.length;y++)if(s=m[y],s.getAttribute("content")===(a.content==null?null:""+a.content)&&s.getAttribute("name")===(a.name==null?null:a.name)&&s.getAttribute("property")===(a.property==null?null:a.property)&&s.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&s.getAttribute("charset")===(a.charSet==null?null:a.charSet)){m.splice(y,1);break t}}s=i.createElement(n),Ie(s,n,a),i.head.appendChild(s);break;default:throw Error(o(468,n))}s[at]=e,Ze(s),n=s}e.stateNode=n}else Rm(i,e.type,e.stateNode);else e.stateNode=Tm(i,n,e.memoizedProps);else s!==n?(s===null?a.stateNode!==null&&(a=a.stateNode,a.parentNode.removeChild(a)):s.count--,n===null?Rm(i,e.type,e.stateNode):Tm(i,n,e.memoizedProps)):n===null&&e.stateNode!==null&&Rd(e,e.memoizedProps,a.memoizedProps)}break;case 27:if(n&4&&e.alternate===null){i=e.stateNode,s=e.memoizedProps;try{for(var S=i.firstChild;S;){var N=S.nextSibling,q=S.nodeName;S[ll]||q==="HEAD"||q==="BODY"||q==="SCRIPT"||q==="STYLE"||q==="LINK"&&S.rel.toLowerCase()==="stylesheet"||i.removeChild(S),S=N}for(var X=e.type,B=i.attributes;B.length;)i.removeAttributeNode(B[0]);Ie(i,X,s),i[at]=e,i[ot]=s}catch(re){Ne(e,e.return,re)}}case 5:if(Rt(t,e),At(e),n&512&&(He||a===null||gt(a,a.return)),e.flags&32){i=e.stateNode;try{xn(i,"")}catch(re){Ne(e,e.return,re)}}n&4&&e.stateNode!=null&&(i=e.memoizedProps,Rd(e,i,a!==null?a.memoizedProps:i)),n&1024&&(Ro=!0);break;case 6:if(Rt(t,e),At(e),n&4){if(e.stateNode===null)throw Error(o(162));n=e.memoizedProps,a=e.stateNode;try{a.nodeValue=n}catch(re){Ne(e,e.return,re)}}break;case 3:if(pr=null,i=Mt,Mt=mr(t.containerInfo),Rt(t,e),Mt=i,At(e),n&4&&a!==null&&a.memoizedState.isDehydrated)try{$l(t.containerInfo)}catch(re){Ne(e,e.return,re)}Ro&&(Ro=!1,Bd(e));break;case 4:n=Mt,Mt=mr(e.stateNode.containerInfo),Rt(t,e),At(e),Mt=n;break;case 12:Rt(t,e),At(e);break;case 13:Rt(t,e),At(e),e.child.flags&8192&&e.memoizedState!==null!=(a!==null&&a.memoizedState!==null)&&(Ho=Lt()),n&4&&(n=e.updateQueue,n!==null&&(e.updateQueue=null,Ao(e,n)));break;case 22:if(n&512&&(He||a===null||gt(a,a.return)),S=e.memoizedState!==null,N=a!==null&&a.memoizedState!==null,q=na,X=He,na=q||S,He=X||N,Rt(t,e),He=X,na=q,At(e),t=e.stateNode,t._current=e,t._visibility&=-3,t._visibility|=t._pendingVisibility&2,n&8192&&(t._visibility=S?t._visibility&-2:t._visibility|1,S&&(t=na||He,a===null||N||t||Hn(e)),e.memoizedProps===null||e.memoizedProps.mode!=="manual"))e:for(a=null,t=e;;){if(t.tag===5||t.tag===26||t.tag===27){if(a===null){N=a=t;try{if(i=N.stateNode,S)s=i.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none";else{m=N.stateNode,y=N.memoizedProps.style;var L=y!=null&&y.hasOwnProperty("display")?y.display:null;m.style.display=L==null||typeof L=="boolean"?"":(""+L).trim()}}catch(re){Ne(N,N.return,re)}}}else if(t.tag===6){if(a===null){N=t;try{N.stateNode.nodeValue=S?"":N.memoizedProps}catch(re){Ne(N,N.return,re)}}}else if((t.tag!==22&&t.tag!==23||t.memoizedState===null||t===e)&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;a===t&&(a=null),t=t.return}a===t&&(a=null),t.sibling.return=t.return,t=t.sibling}n&4&&(n=e.updateQueue,n!==null&&(a=n.retryQueue,a!==null&&(n.retryQueue=null,Ao(e,a))));break;case 19:Rt(t,e),At(e),n&4&&(n=e.updateQueue,n!==null&&(e.updateQueue=null,Ao(e,n)));break;case 21:break;default:Rt(t,e),At(e)}}function At(e){var t=e.flags;if(t&2){try{if(e.tag!==27){e:{for(var a=e.return;a!==null;){if(Ad(a)){var n=a;break e}a=a.return}throw Error(o(160))}switch(n.tag){case 27:var i=n.stateNode,s=To(e);Pi(e,s,i);break;case 5:var m=n.stateNode;n.flags&32&&(xn(m,""),n.flags&=-33);var y=To(e);Pi(e,y,m);break;case 3:case 4:var S=n.stateNode.containerInfo,N=To(e);Oo(e,N,S);break;default:throw Error(o(161))}}}catch(q){Ne(e,e.return,q)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function Bd(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var t=e;Bd(t),t.tag===5&&t.flags&1024&&t.stateNode.reset(),e=e.sibling}}function ia(e,t){if(t.subtreeFlags&8772)for(t=t.child;t!==null;)Cd(e,t.alternate,t),t=t.sibling}function Hn(e){for(e=e.child;e!==null;){var t=e;switch(t.tag){case 0:case 11:case 14:case 15:Ra(4,t,t.return),Hn(t);break;case 1:gt(t,t.return);var a=t.stateNode;typeof a.componentWillUnmount=="function"&&Td(t,t.return,a),Hn(t);break;case 26:case 27:case 5:gt(t,t.return),Hn(t);break;case 22:gt(t,t.return),t.memoizedState===null&&Hn(t);break;default:Hn(t)}e=e.sibling}}function Aa(e,t,a){for(a=a&&(t.subtreeFlags&8772)!==0,t=t.child;t!==null;){var n=t.alternate,i=e,s=t,m=s.flags;switch(s.tag){case 0:case 11:case 15:Aa(i,s,a),zl(4,s);break;case 1:if(Aa(i,s,a),n=s,i=n.stateNode,typeof i.componentDidMount=="function")try{i.componentDidMount()}catch(N){Ne(n,n.return,N)}if(n=s,i=n.updateQueue,i!==null){var y=n.stateNode;try{var S=i.shared.hiddenCallbacks;if(S!==null)for(i.shared.hiddenCallbacks=null,i=0;i<S.length;i++)wd(S[i],y)}catch(N){Ne(n,n.return,N)}}a&&m&64&&jd(s),nn(s,s.return);break;case 26:case 27:case 5:Aa(i,s,a),a&&n===null&&m&4&&Od(s),nn(s,s.return);break;case 12:Aa(i,s,a);break;case 13:Aa(i,s,a),a&&m&4&&Md(i,s);break;case 22:s.memoizedState===null&&Aa(i,s,a),nn(s,s.return);break;default:Aa(i,s,a)}t=t.sibling}}function No(e,t){var a=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),e=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(e=t.memoizedState.cachePool.pool),e!==a&&(e!=null&&e.refCount++,a!=null&&wl(a))}function _o(e,t){e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&wl(e))}function Na(e,t,a,n){if(t.subtreeFlags&10256)for(t=t.child;t!==null;)Hd(e,t,a,n),t=t.sibling}function Hd(e,t,a,n){var i=t.flags;switch(t.tag){case 0:case 11:case 15:Na(e,t,a,n),i&2048&&zl(9,t);break;case 3:Na(e,t,a,n),i&2048&&(e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&wl(e)));break;case 12:if(i&2048){Na(e,t,a,n),e=t.stateNode;try{var s=t.memoizedProps,m=s.id,y=s.onPostCommit;typeof y=="function"&&y(m,t.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(S){Ne(t,t.return,S)}}else Na(e,t,a,n);break;case 23:break;case 22:s=t.stateNode,t.memoizedState!==null?s._visibility&4?Na(e,t,a,n):Dl(e,t):s._visibility&4?Na(e,t,a,n):(s._visibility|=4,Ln(e,t,a,n,(t.subtreeFlags&10256)!==0)),i&2048&&No(t.alternate,t);break;case 24:Na(e,t,a,n),i&2048&&_o(t.alternate,t);break;default:Na(e,t,a,n)}}function Ln(e,t,a,n,i){for(i=i&&(t.subtreeFlags&10256)!==0,t=t.child;t!==null;){var s=e,m=t,y=a,S=n,N=m.flags;switch(m.tag){case 0:case 11:case 15:Ln(s,m,y,S,i),zl(8,m);break;case 23:break;case 22:var q=m.stateNode;m.memoizedState!==null?q._visibility&4?Ln(s,m,y,S,i):Dl(s,m):(q._visibility|=4,Ln(s,m,y,S,i)),i&&N&2048&&No(m.alternate,m);break;case 24:Ln(s,m,y,S,i),i&&N&2048&&_o(m.alternate,m);break;default:Ln(s,m,y,S,i)}t=t.sibling}}function Dl(e,t){if(t.subtreeFlags&10256)for(t=t.child;t!==null;){var a=e,n=t,i=n.flags;switch(n.tag){case 22:Dl(a,n),i&2048&&No(n.alternate,n);break;case 24:Dl(a,n),i&2048&&_o(n.alternate,n);break;default:Dl(a,n)}t=t.sibling}}var Ml=8192;function Un(e){if(e.subtreeFlags&Ml)for(e=e.child;e!==null;)Ld(e),e=e.sibling}function Ld(e){switch(e.tag){case 26:Un(e),e.flags&Ml&&e.memoizedState!==null&&s2(Mt,e.memoizedState,e.memoizedProps);break;case 5:Un(e);break;case 3:case 4:var t=Mt;Mt=mr(e.stateNode.containerInfo),Un(e),Mt=t;break;case 22:e.memoizedState===null&&(t=e.alternate,t!==null&&t.memoizedState!==null?(t=Ml,Ml=16777216,Un(e),Ml=t):Un(e));break;default:Un(e)}}function Ud(e){var t=e.alternate;if(t!==null&&(e=t.child,e!==null)){t.child=null;do t=e.sibling,e.sibling=null,e=t;while(e!==null)}}function kl(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var a=0;a<t.length;a++){var n=t[a];Je=n,Yd(n,e)}Ud(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)qd(e),e=e.sibling}function qd(e){switch(e.tag){case 0:case 11:case 15:kl(e),e.flags&2048&&Ra(9,e,e.return);break;case 3:kl(e);break;case 12:kl(e);break;case 22:var t=e.stateNode;e.memoizedState!==null&&t._visibility&4&&(e.return===null||e.return.tag!==13)?(t._visibility&=-5,Ii(e)):kl(e);break;default:kl(e)}}function Ii(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var a=0;a<t.length;a++){var n=t[a];Je=n,Yd(n,e)}Ud(e)}for(e=e.child;e!==null;){switch(t=e,t.tag){case 0:case 11:case 15:Ra(8,t,t.return),Ii(t);break;case 22:a=t.stateNode,a._visibility&4&&(a._visibility&=-5,Ii(t));break;default:Ii(t)}e=e.sibling}}function Yd(e,t){for(;Je!==null;){var a=Je;switch(a.tag){case 0:case 11:case 15:Ra(8,a,t);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var n=a.memoizedState.cachePool.pool;n!=null&&n.refCount++}break;case 24:wl(a.memoizedState.cache)}if(n=a.child,n!==null)n.return=a,Je=n;else e:for(a=e;Je!==null;){n=Je;var i=n.sibling,s=n.return;if(zd(n),n===a){Je=null;break e}if(i!==null){i.return=s,Je=i;break e}Je=s}}}function x1(e,t,a,n){this.tag=e,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=n,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Nt(e,t,a,n){return new x1(e,t,a,n)}function Co(e){return e=e.prototype,!(!e||!e.isReactComponent)}function _a(e,t){var a=e.alternate;return a===null?(a=Nt(e.tag,t,e.key,e.mode),a.elementType=e.elementType,a.type=e.type,a.stateNode=e.stateNode,a.alternate=e,e.alternate=a):(a.pendingProps=t,a.type=e.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=e.flags&31457280,a.childLanes=e.childLanes,a.lanes=e.lanes,a.child=e.child,a.memoizedProps=e.memoizedProps,a.memoizedState=e.memoizedState,a.updateQueue=e.updateQueue,t=e.dependencies,a.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},a.sibling=e.sibling,a.index=e.index,a.ref=e.ref,a.refCleanup=e.refCleanup,a}function Fd(e,t){e.flags&=31457282;var a=e.alternate;return a===null?(e.childLanes=0,e.lanes=t,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=a.childLanes,e.lanes=a.lanes,e.child=a.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=a.memoizedProps,e.memoizedState=a.memoizedState,e.updateQueue=a.updateQueue,e.type=a.type,t=a.dependencies,e.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),e}function er(e,t,a,n,i,s){var m=0;if(n=e,typeof e=="function")Co(e)&&(m=1);else if(typeof e=="string")m=i2(e,a,tt.current)?26:e==="html"||e==="head"||e==="body"?27:5;else e:switch(e){case g:return ln(a.children,i,s,t);case p:m=8,i|=24;break;case b:return e=Nt(12,a,t,i|2),e.elementType=b,e.lanes=s,e;case T:return e=Nt(13,a,t,i),e.elementType=T,e.lanes=s,e;case E:return e=Nt(19,a,t,i),e.elementType=E,e.lanes=s,e;case C:return Gd(a,i,s,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case w:case j:m=10;break e;case R:m=9;break e;case x:m=11;break e;case _:m=14;break e;case M:m=16,n=null;break e}m=29,a=Error(o(130,e===null?"null":typeof e,"")),n=null}return t=Nt(m,a,t,i),t.elementType=e,t.type=n,t.lanes=s,t}function ln(e,t,a,n){return e=Nt(7,e,n,t),e.lanes=a,e}function Gd(e,t,a,n){e=Nt(22,e,n,t),e.elementType=C,e.lanes=a;var i={_visibility:1,_pendingVisibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null,_current:null,detach:function(){var s=i._current;if(s===null)throw Error(o(456));if((i._pendingVisibility&2)===0){var m=ya(s,2);m!==null&&(i._pendingVisibility|=2,st(m,s,2))}},attach:function(){var s=i._current;if(s===null)throw Error(o(456));if((i._pendingVisibility&2)!==0){var m=ya(s,2);m!==null&&(i._pendingVisibility&=-3,st(m,s,2))}}};return e.stateNode=i,e}function zo(e,t,a){return e=Nt(6,e,null,t),e.lanes=a,e}function Do(e,t,a){return t=Nt(4,e.children!==null?e.children:[],e.key,t),t.lanes=a,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function ra(e){e.flags|=4}function Vd(e,t){if(t.type!=="stylesheet"||(t.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!Am(t)){if(t=Ot.current,t!==null&&((Se&4194176)===Se?qt!==null:(Se&62914560)!==Se&&(Se&536870912)===0||t!==qt))throw bl=Hs,sf;e.flags|=8192}}function tr(e,t){t!==null&&(e.flags|=4),e.flags&16384&&(t=e.tag!==22?sc():536870912,e.lanes|=t,Yn|=t)}function Bl(e,t){if(!Te)switch(e.tailMode){case"hidden":t=e.tail;for(var a=null;t!==null;)t.alternate!==null&&(a=t),t=t.sibling;a===null?e.tail=null:a.sibling=null;break;case"collapsed":a=e.tail;for(var n=null;a!==null;)a.alternate!==null&&(n=a),a=a.sibling;n===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:n.sibling=null}}function Me(e){var t=e.alternate!==null&&e.alternate.child===e.child,a=0,n=0;if(t)for(var i=e.child;i!==null;)a|=i.lanes|i.childLanes,n|=i.subtreeFlags&31457280,n|=i.flags&31457280,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)a|=i.lanes|i.childLanes,n|=i.subtreeFlags,n|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=n,e.childLanes=a,t}function S1(e,t,a){var n=t.pendingProps;switch(ks(t),t.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Me(t),null;case 1:return Me(t),null;case 3:return a=t.stateNode,n=null,e!==null&&(n=e.memoizedState.cache),t.memoizedState.cache!==n&&(t.flags|=2048),aa(Qe),hn(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(e===null||e.child===null)&&(pl(t)?ra(t):e===null||e.memoizedState.isDehydrated&&(t.flags&256)===0||(t.flags|=1024,Dt!==null&&(Yo(Dt),Dt=null))),Me(t),null;case 26:return a=t.memoizedState,e===null?(ra(t),a!==null?(Me(t),Vd(t,a)):(Me(t),t.flags&=-16777217)):a?a!==e.memoizedState?(ra(t),Me(t),Vd(t,a)):(Me(t),t.flags&=-16777217):(e.memoizedProps!==n&&ra(t),Me(t),t.flags&=-16777217),null;case 27:mi(t),a=ha.current;var i=t.type;if(e!==null&&t.stateNode!=null)e.memoizedProps!==n&&ra(t);else{if(!n){if(t.stateNode===null)throw Error(o(166));return Me(t),null}e=tt.current,pl(t)?lf(t):(e=xm(i,n,a),t.stateNode=e,ra(t))}return Me(t),null;case 5:if(mi(t),a=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==n&&ra(t);else{if(!n){if(t.stateNode===null)throw Error(o(166));return Me(t),null}if(e=tt.current,pl(t))lf(t);else{switch(i=dr(ha.current),e){case 1:e=i.createElementNS("http://www.w3.org/2000/svg",a);break;case 2:e=i.createElementNS("http://www.w3.org/1998/Math/MathML",a);break;default:switch(a){case"svg":e=i.createElementNS("http://www.w3.org/2000/svg",a);break;case"math":e=i.createElementNS("http://www.w3.org/1998/Math/MathML",a);break;case"script":e=i.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild);break;case"select":e=typeof n.is=="string"?i.createElement("select",{is:n.is}):i.createElement("select"),n.multiple?e.multiple=!0:n.size&&(e.size=n.size);break;default:e=typeof n.is=="string"?i.createElement(a,{is:n.is}):i.createElement(a)}}e[at]=t,e[ot]=n;e:for(i=t.child;i!==null;){if(i.tag===5||i.tag===6)e.appendChild(i.stateNode);else if(i.tag!==4&&i.tag!==27&&i.child!==null){i.child.return=i,i=i.child;continue}if(i===t)break e;for(;i.sibling===null;){if(i.return===null||i.return===t)break e;i=i.return}i.sibling.return=i.return,i=i.sibling}t.stateNode=e;e:switch(Ie(e,a,n),a){case"button":case"input":case"select":case"textarea":e=!!n.autoFocus;break e;case"img":e=!0;break e;default:e=!1}e&&ra(t)}}return Me(t),t.flags&=-16777217,null;case 6:if(e&&t.stateNode!=null)e.memoizedProps!==n&&ra(t);else{if(typeof n!="string"&&t.stateNode===null)throw Error(o(166));if(e=ha.current,pl(t)){if(e=t.stateNode,a=t.memoizedProps,n=null,i=rt,i!==null)switch(i.tag){case 27:case 5:n=i.memoizedProps}e[at]=t,e=!!(e.nodeValue===a||n!==null&&n.suppressHydrationWarning===!0||hm(e.nodeValue,a)),e||Ka(t)}else e=dr(e).createTextNode(n),e[at]=t,t.stateNode=e}return Me(t),null;case 13:if(n=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(i=pl(t),n!==null&&n.dehydrated!==null){if(e===null){if(!i)throw Error(o(318));if(i=t.memoizedState,i=i!==null?i.dehydrated:null,!i)throw Error(o(317));i[at]=t}else gl(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;Me(t),i=!1}else Dt!==null&&(Yo(Dt),Dt=null),i=!0;if(!i)return t.flags&256?(Pt(t),t):(Pt(t),null)}if(Pt(t),(t.flags&128)!==0)return t.lanes=a,t;if(a=n!==null,e=e!==null&&e.memoizedState!==null,a){n=t.child,i=null,n.alternate!==null&&n.alternate.memoizedState!==null&&n.alternate.memoizedState.cachePool!==null&&(i=n.alternate.memoizedState.cachePool.pool);var s=null;n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(s=n.memoizedState.cachePool.pool),s!==i&&(n.flags|=2048)}return a!==e&&a&&(t.child.flags|=8192),tr(t,t.updateQueue),Me(t),null;case 4:return hn(),e===null&&Po(t.stateNode.containerInfo),Me(t),null;case 10:return aa(t.type),Me(t),null;case 19:if(Ee(Xe),i=t.memoizedState,i===null)return Me(t),null;if(n=(t.flags&128)!==0,s=i.rendering,s===null)if(n)Bl(i,!1);else{if(Le!==0||e!==null&&(e.flags&128)!==0)for(e=t.child;e!==null;){if(s=Li(e),s!==null){for(t.flags|=128,Bl(i,!1),e=s.updateQueue,t.updateQueue=e,tr(t,e),t.subtreeFlags=0,e=a,a=t.child;a!==null;)Fd(a,e),a=a.sibling;return je(Xe,Xe.current&1|2),t.child}e=e.sibling}i.tail!==null&&Lt()>ar&&(t.flags|=128,n=!0,Bl(i,!1),t.lanes=4194304)}else{if(!n)if(e=Li(s),e!==null){if(t.flags|=128,n=!0,e=e.updateQueue,t.updateQueue=e,tr(t,e),Bl(i,!0),i.tail===null&&i.tailMode==="hidden"&&!s.alternate&&!Te)return Me(t),null}else 2*Lt()-i.renderingStartTime>ar&&a!==536870912&&(t.flags|=128,n=!0,Bl(i,!1),t.lanes=4194304);i.isBackwards?(s.sibling=t.child,t.child=s):(e=i.last,e!==null?e.sibling=s:t.child=s,i.last=s)}return i.tail!==null?(t=i.tail,i.rendering=t,i.tail=t.sibling,i.renderingStartTime=Lt(),t.sibling=null,e=Xe.current,je(Xe,n?e&1|2:e&1),t):(Me(t),null);case 22:case 23:return Pt(t),Us(),n=t.memoizedState!==null,e!==null?e.memoizedState!==null!==n&&(t.flags|=8192):n&&(t.flags|=8192),n?(a&536870912)!==0&&(t.flags&128)===0&&(Me(t),t.subtreeFlags&6&&(t.flags|=8192)):Me(t),a=t.updateQueue,a!==null&&tr(t,a.retryQueue),a=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),n=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(n=t.memoizedState.cachePool.pool),n!==a&&(t.flags|=2048),e!==null&&Ee($a),null;case 24:return a=null,e!==null&&(a=e.memoizedState.cache),t.memoizedState.cache!==a&&(t.flags|=2048),aa(Qe),Me(t),null;case 25:return null}throw Error(o(156,t.tag))}function w1(e,t){switch(ks(t),t.tag){case 1:return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return aa(Qe),hn(),e=t.flags,(e&65536)!==0&&(e&128)===0?(t.flags=e&-65537|128,t):null;case 26:case 27:case 5:return mi(t),null;case 13:if(Pt(t),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(o(340));gl()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return Ee(Xe),null;case 4:return hn(),null;case 10:return aa(t.type),null;case 22:case 23:return Pt(t),Us(),e!==null&&Ee($a),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 24:return aa(Qe),null;case 25:return null;default:return null}}function Xd(e,t){switch(ks(t),t.tag){case 3:aa(Qe),hn();break;case 26:case 27:case 5:mi(t);break;case 4:hn();break;case 13:Pt(t);break;case 19:Ee(Xe);break;case 10:aa(t.type);break;case 22:case 23:Pt(t),Us(),e!==null&&Ee($a);break;case 24:aa(Qe)}}var E1={getCacheForType:function(e){var t=nt(Qe),a=t.data.get(e);return a===void 0&&(a=e(),t.data.set(e,a)),a}},j1=typeof WeakMap=="function"?WeakMap:Map,ke=0,_e=null,ye=null,Se=0,Ce=0,yt=null,sa=!1,qn=!1,Mo=!1,oa=0,Le=0,Ca=0,rn=0,ko=0,_t=0,Yn=0,Hl=null,Ft=null,Bo=!1,Ho=0,ar=1/0,nr=null,za=null,lr=!1,sn=null,Ll=0,Lo=0,Uo=null,Ul=0,qo=null;function bt(){if((ke&2)!==0&&Se!==0)return Se&-Se;if(F.T!==null){var e=zn;return e!==0?e:Ko()}return fc()}function Qd(){_t===0&&(_t=(Se&536870912)===0||Te?rc():536870912);var e=Ot.current;return e!==null&&(e.flags|=32),_t}function st(e,t,a){(e===_e&&Ce===2||e.cancelPendingCommit!==null)&&(Fn(e,0),ua(e,Se,_t,!1)),nl(e,a),((ke&2)===0||e!==_e)&&(e===_e&&((ke&2)===0&&(rn|=a),Le===4&&ua(e,Se,_t,!1)),Gt(e))}function Zd(e,t,a){if((ke&6)!==0)throw Error(o(327));var n=!a&&(t&60)===0&&(t&e.expiredLanes)===0||al(e,t),i=n?R1(e,t):Vo(e,t,!0),s=n;do{if(i===0){qn&&!n&&ua(e,t,0,!1);break}else if(i===6)ua(e,t,0,!sa);else{if(a=e.current.alternate,s&&!T1(a)){i=Vo(e,t,!1),s=!1;continue}if(i===2){if(s=t,e.errorRecoveryDisabledLanes&s)var m=0;else m=e.pendingLanes&-536870913,m=m!==0?m:m&536870912?536870912:0;if(m!==0){t=m;e:{var y=e;i=Hl;var S=y.current.memoizedState.isDehydrated;if(S&&(Fn(y,m).flags|=256),m=Vo(y,m,!1),m!==2){if(Mo&&!S){y.errorRecoveryDisabledLanes|=s,rn|=s,i=4;break e}s=Ft,Ft=i,s!==null&&Yo(s)}i=m}if(s=!1,i!==2)continue}}if(i===1){Fn(e,0),ua(e,t,0,!0);break}e:{switch(n=e,i){case 0:case 1:throw Error(o(345));case 4:if((t&4194176)===t){ua(n,t,_t,!sa);break e}break;case 2:Ft=null;break;case 3:case 5:break;default:throw Error(o(329))}if(n.finishedWork=a,n.finishedLanes=t,(t&62914560)===t&&(s=Ho+300-Lt(),10<s)){if(ua(n,t,_t,!sa),vi(n,0)!==0)break e;n.timeoutHandle=vm(Kd.bind(null,n,a,Ft,nr,Bo,t,_t,rn,Yn,sa,2,-0,0),s);break e}Kd(n,a,Ft,nr,Bo,t,_t,rn,Yn,sa,0,-0,0)}}break}while(!0);Gt(e)}function Yo(e){Ft===null?Ft=e:Ft.push.apply(Ft,e)}function Kd(e,t,a,n,i,s,m,y,S,N,q,X,B){var L=t.subtreeFlags;if((L&8192||(L&16785408)===16785408)&&(Xl={stylesheets:null,count:0,unsuspend:r2},Ld(t),t=o2(),t!==null)){e.cancelPendingCommit=t(tm.bind(null,e,a,n,i,m,y,S,1,X,B)),ua(e,s,m,!N);return}tm(e,a,n,i,m,y,S,q,X,B)}function T1(e){for(var t=e;;){var a=t.tag;if((a===0||a===11||a===15)&&t.flags&16384&&(a=t.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var n=0;n<a.length;n++){var i=a[n],s=i.getSnapshot;i=i.value;try{if(!pt(s(),i))return!1}catch{return!1}}if(a=t.child,t.subtreeFlags&16384&&a!==null)a.return=t,t=a;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function ua(e,t,a,n){t&=~ko,t&=~rn,e.suspendedLanes|=t,e.pingedLanes&=~t,n&&(e.warmLanes|=t),n=e.expirationTimes;for(var i=t;0<i;){var s=31-ht(i),m=1<<s;n[s]=-1,i&=~m}a!==0&&oc(e,a,t)}function ir(){return(ke&6)===0?(ql(0),!1):!0}function Fo(){if(ye!==null){if(Ce===0)var e=ye.return;else e=ye,ta=tn=null,Zs(e),_n=null,xl=0,e=ye;for(;e!==null;)Xd(e.alternate,e),e=e.return;ye=null}}function Fn(e,t){e.finishedWork=null,e.finishedLanes=0;var a=e.timeoutHandle;a!==-1&&(e.timeoutHandle=-1,V1(a)),a=e.cancelPendingCommit,a!==null&&(e.cancelPendingCommit=null,a()),Fo(),_e=e,ye=a=_a(e.current,null),Se=t,Ce=0,yt=null,sa=!1,qn=al(e,t),Mo=!1,Yn=_t=ko=rn=Ca=Le=0,Ft=Hl=null,Bo=!1,(t&8)!==0&&(t|=t&32);var n=e.entangledLanes;if(n!==0)for(e=e.entanglements,n&=t;0<n;){var i=31-ht(n),s=1<<i;t|=e[i],n&=~s}return oa=t,Ni(),a}function Jd(e,t){ge=null,F.H=Yt,t===yl?(t=cf(),Ce=3):t===sf?(t=cf(),Ce=4):Ce=t===od?8:t!==null&&typeof t=="object"&&typeof t.then=="function"?6:1,yt=t,ye===null&&(Le=1,Ji(e,Et(t,e.current)))}function $d(){var e=F.H;return F.H=Yt,e===null?Yt:e}function Wd(){var e=F.A;return F.A=E1,e}function Go(){Le=4,sa||(Se&4194176)!==Se&&Ot.current!==null||(qn=!0),(Ca&134217727)===0&&(rn&134217727)===0||_e===null||ua(_e,Se,_t,!1)}function Vo(e,t,a){var n=ke;ke|=2;var i=$d(),s=Wd();(_e!==e||Se!==t)&&(nr=null,Fn(e,t)),t=!1;var m=Le;e:do try{if(Ce!==0&&ye!==null){var y=ye,S=yt;switch(Ce){case 8:Fo(),m=6;break e;case 3:case 2:case 6:Ot.current===null&&(t=!0);var N=Ce;if(Ce=0,yt=null,Gn(e,y,S,N),a&&qn){m=0;break e}break;default:N=Ce,Ce=0,yt=null,Gn(e,y,S,N)}}O1(),m=Le;break}catch(q){Jd(e,q)}while(!0);return t&&e.shellSuspendCounter++,ta=tn=null,ke=n,F.H=i,F.A=s,ye===null&&(_e=null,Se=0,Ni()),m}function O1(){for(;ye!==null;)Pd(ye)}function R1(e,t){var a=ke;ke|=2;var n=$d(),i=Wd();_e!==e||Se!==t?(nr=null,ar=Lt()+500,Fn(e,t)):qn=al(e,t);e:do try{if(Ce!==0&&ye!==null){t=ye;var s=yt;t:switch(Ce){case 1:Ce=0,yt=null,Gn(e,t,s,1);break;case 2:if(of(s)){Ce=0,yt=null,Id(t);break}t=function(){Ce===2&&_e===e&&(Ce=7),Gt(e)},s.then(t,t);break e;case 3:Ce=7;break e;case 4:Ce=5;break e;case 7:of(s)?(Ce=0,yt=null,Id(t)):(Ce=0,yt=null,Gn(e,t,s,7));break;case 5:var m=null;switch(ye.tag){case 26:m=ye.memoizedState;case 5:case 27:var y=ye;if(!m||Am(m)){Ce=0,yt=null;var S=y.sibling;if(S!==null)ye=S;else{var N=y.return;N!==null?(ye=N,rr(N)):ye=null}break t}}Ce=0,yt=null,Gn(e,t,s,5);break;case 6:Ce=0,yt=null,Gn(e,t,s,6);break;case 8:Fo(),Le=6;break e;default:throw Error(o(462))}}A1();break}catch(q){Jd(e,q)}while(!0);return ta=tn=null,F.H=n,F.A=i,ke=a,ye!==null?0:(_e=null,Se=0,Ni(),Le)}function A1(){for(;ye!==null&&!$h();)Pd(ye)}function Pd(e){var t=xd(e.alternate,e,oa);e.memoizedProps=e.pendingProps,t===null?rr(e):ye=t}function Id(e){var t=e,a=t.alternate;switch(t.tag){case 15:case 0:t=hd(a,t,t.pendingProps,t.type,void 0,Se);break;case 11:t=hd(a,t,t.pendingProps,t.type.render,t.ref,Se);break;case 5:Zs(t);default:Xd(a,t),t=ye=Fd(t,oa),t=xd(a,t,oa)}e.memoizedProps=e.pendingProps,t===null?rr(e):ye=t}function Gn(e,t,a,n){ta=tn=null,Zs(t),_n=null,xl=0;var i=t.return;try{if(g1(e,i,t,a,Se)){Le=1,Ji(e,Et(a,e.current)),ye=null;return}}catch(s){if(i!==null)throw ye=i,s;Le=1,Ji(e,Et(a,e.current)),ye=null;return}t.flags&32768?(Te||n===1?e=!0:qn||(Se&536870912)!==0?e=!1:(sa=e=!0,(n===2||n===3||n===6)&&(n=Ot.current,n!==null&&n.tag===13&&(n.flags|=16384))),em(t,e)):rr(t)}function rr(e){var t=e;do{if((t.flags&32768)!==0){em(t,sa);return}e=t.return;var a=S1(t.alternate,t,oa);if(a!==null){ye=a;return}if(t=t.sibling,t!==null){ye=t;return}ye=t=e}while(t!==null);Le===0&&(Le=5)}function em(e,t){do{var a=w1(e.alternate,e);if(a!==null){a.flags&=32767,ye=a;return}if(a=e.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!t&&(e=e.sibling,e!==null)){ye=e;return}ye=e=a}while(e!==null);Le=6,ye=null}function tm(e,t,a,n,i,s,m,y,S,N){var q=F.T,X=I.p;try{I.p=2,F.T=null,N1(e,t,a,n,X,i,s,m,y,S,N)}finally{F.T=q,I.p=X}}function N1(e,t,a,n,i,s,m,y){do Vn();while(sn!==null);if((ke&6)!==0)throw Error(o(327));var S=e.finishedWork;if(n=e.finishedLanes,S===null)return null;if(e.finishedWork=null,e.finishedLanes=0,S===e.current)throw Error(o(177));e.callbackNode=null,e.callbackPriority=0,e.cancelPendingCommit=null;var N=S.lanes|S.childLanes;if(N|=zs,sp(e,n,N,s,m,y),e===_e&&(ye=_e=null,Se=0),(S.subtreeFlags&10256)===0&&(S.flags&10256)===0||lr||(lr=!0,Lo=N,Uo=a,D1(hi,function(){return Vn(),null})),a=(S.flags&15990)!==0,(S.subtreeFlags&15990)!==0||a?(a=F.T,F.T=null,s=I.p,I.p=2,m=ke,ke|=4,y1(e,S),kd(S,e),Ip(au,e.containerInfo),yr=!!tu,au=tu=null,e.current=S,Cd(e,S.alternate,S),Wh(),ke=m,I.p=s,F.T=a):e.current=S,lr?(lr=!1,sn=e,Ll=n):am(e,N),N=e.pendingLanes,N===0&&(za=null),ap(S.stateNode),Gt(e),t!==null)for(i=e.onRecoverableError,S=0;S<t.length;S++)N=t[S],i(N.value,{componentStack:N.stack});return(Ll&3)!==0&&Vn(),N=e.pendingLanes,(n&4194218)!==0&&(N&42)!==0?e===qo?Ul++:(Ul=0,qo=e):Ul=0,ql(0),null}function am(e,t){(e.pooledCacheLanes&=t)===0&&(t=e.pooledCache,t!=null&&(e.pooledCache=null,wl(t)))}function Vn(){if(sn!==null){var e=sn,t=Lo;Lo=0;var a=cc(Ll),n=F.T,i=I.p;try{if(I.p=32>a?32:a,F.T=null,sn===null)var s=!1;else{a=Uo,Uo=null;var m=sn,y=Ll;if(sn=null,Ll=0,(ke&6)!==0)throw Error(o(331));var S=ke;if(ke|=4,qd(m.current),Hd(m,m.current,y,a),ke=S,ql(0,!1),mt&&typeof mt.onPostCommitFiberRoot=="function")try{mt.onPostCommitFiberRoot(tl,m)}catch{}s=!0}return s}finally{I.p=i,F.T=n,am(e,t)}}return!1}function nm(e,t,a){t=Et(a,t),t=so(e.stateNode,t,2),e=Oa(e,t,2),e!==null&&(nl(e,2),Gt(e))}function Ne(e,t,a){if(e.tag===3)nm(e,e,a);else for(;t!==null;){if(t.tag===3){nm(t,e,a);break}else if(t.tag===1){var n=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof n.componentDidCatch=="function"&&(za===null||!za.has(n))){e=Et(a,e),a=rd(2),n=Oa(t,a,2),n!==null&&(sd(a,n,t,e),nl(n,2),Gt(n));break}}t=t.return}}function Xo(e,t,a){var n=e.pingCache;if(n===null){n=e.pingCache=new j1;var i=new Set;n.set(t,i)}else i=n.get(t),i===void 0&&(i=new Set,n.set(t,i));i.has(a)||(Mo=!0,i.add(a),e=_1.bind(null,e,t,a),t.then(e,e))}function _1(e,t,a){var n=e.pingCache;n!==null&&n.delete(t),e.pingedLanes|=e.suspendedLanes&a,e.warmLanes&=~a,_e===e&&(Se&a)===a&&(Le===4||Le===3&&(Se&62914560)===Se&&300>Lt()-Ho?(ke&2)===0&&Fn(e,0):ko|=a,Yn===Se&&(Yn=0)),Gt(e)}function lm(e,t){t===0&&(t=sc()),e=ya(e,t),e!==null&&(nl(e,t),Gt(e))}function C1(e){var t=e.memoizedState,a=0;t!==null&&(a=t.retryLane),lm(e,a)}function z1(e,t){var a=0;switch(e.tag){case 13:var n=e.stateNode,i=e.memoizedState;i!==null&&(a=i.retryLane);break;case 19:n=e.stateNode;break;case 22:n=e.stateNode._retryCache;break;default:throw Error(o(314))}n!==null&&n.delete(t),lm(e,a)}function D1(e,t){return os(e,t)}var sr=null,Xn=null,Qo=!1,or=!1,Zo=!1,on=0;function Gt(e){e!==Xn&&e.next===null&&(Xn===null?sr=Xn=e:Xn=Xn.next=e),or=!0,Qo||(Qo=!0,k1(M1))}function ql(e,t){if(!Zo&&or){Zo=!0;do for(var a=!1,n=sr;n!==null;){if(e!==0){var i=n.pendingLanes;if(i===0)var s=0;else{var m=n.suspendedLanes,y=n.pingedLanes;s=(1<<31-ht(42|e)+1)-1,s&=i&~(m&~y),s=s&201326677?s&201326677|1:s?s|2:0}s!==0&&(a=!0,sm(n,s))}else s=Se,s=vi(n,n===_e?s:0),(s&3)===0||al(n,s)||(a=!0,sm(n,s));n=n.next}while(a);Zo=!1}}function M1(){or=Qo=!1;var e=0;on!==0&&(G1()&&(e=on),on=0);for(var t=Lt(),a=null,n=sr;n!==null;){var i=n.next,s=im(n,t);s===0?(n.next=null,a===null?sr=i:a.next=i,i===null&&(Xn=a)):(a=n,(e!==0||(s&3)!==0)&&(or=!0)),n=i}ql(e)}function im(e,t){for(var a=e.suspendedLanes,n=e.pingedLanes,i=e.expirationTimes,s=e.pendingLanes&-62914561;0<s;){var m=31-ht(s),y=1<<m,S=i[m];S===-1?((y&a)===0||(y&n)!==0)&&(i[m]=rp(y,t)):S<=t&&(e.expiredLanes|=y),s&=~y}if(t=_e,a=Se,a=vi(e,e===t?a:0),n=e.callbackNode,a===0||e===t&&Ce===2||e.cancelPendingCommit!==null)return n!==null&&n!==null&&us(n),e.callbackNode=null,e.callbackPriority=0;if((a&3)===0||al(e,a)){if(t=a&-a,t===e.callbackPriority)return t;switch(n!==null&&us(n),cc(a)){case 2:case 8:a=lc;break;case 32:a=hi;break;case 268435456:a=ic;break;default:a=hi}return n=rm.bind(null,e),a=os(a,n),e.callbackPriority=t,e.callbackNode=a,t}return n!==null&&n!==null&&us(n),e.callbackPriority=2,e.callbackNode=null,2}function rm(e,t){var a=e.callbackNode;if(Vn()&&e.callbackNode!==a)return null;var n=Se;return n=vi(e,e===_e?n:0),n===0?null:(Zd(e,n,t),im(e,Lt()),e.callbackNode!=null&&e.callbackNode===a?rm.bind(null,e):null)}function sm(e,t){if(Vn())return null;Zd(e,t,!0)}function k1(e){X1(function(){(ke&6)!==0?os(nc,e):e()})}function Ko(){return on===0&&(on=rc()),on}function om(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:wi(""+e)}function um(e,t){var a=t.ownerDocument.createElement("input");return a.name=t.name,a.value=t.value,e.id&&a.setAttribute("form",e.id),t.parentNode.insertBefore(a,t),e=new FormData(e),a.parentNode.removeChild(a),e}function B1(e,t,a,n,i){if(t==="submit"&&a&&a.stateNode===i){var s=om((i[ot]||null).action),m=n.submitter;m&&(t=(t=m[ot]||null)?om(t.formAction):m.getAttribute("formAction"),t!==null&&(s=t,m=null));var y=new Oi("action","action",null,n,i);e.push({event:y,listeners:[{instance:null,listener:function(){if(n.defaultPrevented){if(on!==0){var S=m?um(i,m):new FormData(i);ao(a,{pending:!0,data:S,method:i.method,action:s},null,S)}}else typeof s=="function"&&(y.preventDefault(),S=m?um(i,m):new FormData(i),ao(a,{pending:!0,data:S,method:i.method,action:s},s,S))},currentTarget:i}]})}}for(var Jo=0;Jo<ef.length;Jo++){var $o=ef[Jo],H1=$o.toLowerCase(),L1=$o[0].toUpperCase()+$o.slice(1);zt(H1,"on"+L1)}zt(Jc,"onAnimationEnd"),zt($c,"onAnimationIteration"),zt(Wc,"onAnimationStart"),zt("dblclick","onDoubleClick"),zt("focusin","onFocus"),zt("focusout","onBlur"),zt(t1,"onTransitionRun"),zt(a1,"onTransitionStart"),zt(n1,"onTransitionCancel"),zt(Pc,"onTransitionEnd"),yn("onMouseEnter",["mouseout","mouseover"]),yn("onMouseLeave",["mouseout","mouseover"]),yn("onPointerEnter",["pointerout","pointerover"]),yn("onPointerLeave",["pointerout","pointerover"]),Fa("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),Fa("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),Fa("onBeforeInput",["compositionend","keypress","textInput","paste"]),Fa("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),Fa("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),Fa("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Yl="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),U1=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Yl));function cm(e,t){t=(t&4)!==0;for(var a=0;a<e.length;a++){var n=e[a],i=n.event;n=n.listeners;e:{var s=void 0;if(t)for(var m=n.length-1;0<=m;m--){var y=n[m],S=y.instance,N=y.currentTarget;if(y=y.listener,S!==s&&i.isPropagationStopped())break e;s=y,i.currentTarget=N;try{s(i)}catch(q){Ki(q)}i.currentTarget=null,s=S}else for(m=0;m<n.length;m++){if(y=n[m],S=y.instance,N=y.currentTarget,y=y.listener,S!==s&&i.isPropagationStopped())break e;s=y,i.currentTarget=N;try{s(i)}catch(q){Ki(q)}i.currentTarget=null,s=S}}}}function xe(e,t){var a=t[fs];a===void 0&&(a=t[fs]=new Set);var n=e+"__bubble";a.has(n)||(fm(t,e,2,!1),a.add(n))}function Wo(e,t,a){var n=0;t&&(n|=4),fm(a,e,n,t)}var ur="_reactListening"+Math.random().toString(36).slice(2);function Po(e){if(!e[ur]){e[ur]=!0,mc.forEach(function(a){a!=="selectionchange"&&(U1.has(a)||Wo(a,!1,e),Wo(a,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[ur]||(t[ur]=!0,Wo("selectionchange",!1,t))}}function fm(e,t,a,n){switch(Mm(t)){case 2:var i=f2;break;case 8:i=d2;break;default:i=fu}a=i.bind(null,t,a,e),i=void 0,!bs||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(i=!0),n?i!==void 0?e.addEventListener(t,a,{capture:!0,passive:i}):e.addEventListener(t,a,!0):i!==void 0?e.addEventListener(t,a,{passive:i}):e.addEventListener(t,a,!1)}function Io(e,t,a,n,i){var s=n;if((t&1)===0&&(t&2)===0&&n!==null)e:for(;;){if(n===null)return;var m=n.tag;if(m===3||m===4){var y=n.stateNode.containerInfo;if(y===i||y.nodeType===8&&y.parentNode===i)break;if(m===4)for(m=n.return;m!==null;){var S=m.tag;if((S===3||S===4)&&(S=m.stateNode.containerInfo,S===i||S.nodeType===8&&S.parentNode===i))return;m=m.return}for(;y!==null;){if(m=Ya(y),m===null)return;if(S=m.tag,S===5||S===6||S===26||S===27){n=s=m;continue e}y=y.parentNode}}n=n.return}Tc(function(){var N=s,q=vs(a),X=[];e:{var B=Ic.get(e);if(B!==void 0){var L=Oi,re=e;switch(e){case"keypress":if(ji(a)===0)break e;case"keydown":case"keyup":L=zp;break;case"focusin":re="focus",L=Es;break;case"focusout":re="blur",L=Es;break;case"beforeblur":case"afterblur":L=Es;break;case"click":if(a.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":L=Ac;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":L=xp;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":L=kp;break;case Jc:case $c:case Wc:L=Ep;break;case Pc:L=Hp;break;case"scroll":case"scrollend":L=yp;break;case"wheel":L=Up;break;case"copy":case"cut":case"paste":L=Tp;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":L=_c;break;case"toggle":case"beforetoggle":L=Yp}var de=(t&4)!==0,Ue=!de&&(e==="scroll"||e==="scrollend"),z=de?B!==null?B+"Capture":null:B;de=[];for(var A=N,k;A!==null;){var Y=A;if(k=Y.stateNode,Y=Y.tag,Y!==5&&Y!==26&&Y!==27||k===null||z===null||(Y=rl(A,z),Y!=null&&de.push(Fl(A,Y,k))),Ue)break;A=A.return}0<de.length&&(B=new L(B,re,null,a,q),X.push({event:B,listeners:de}))}}if((t&7)===0){e:{if(B=e==="mouseover"||e==="pointerover",L=e==="mouseout"||e==="pointerout",B&&a!==gs&&(re=a.relatedTarget||a.fromElement)&&(Ya(re)||re[pn]))break e;if((L||B)&&(B=q.window===q?q:(B=q.ownerDocument)?B.defaultView||B.parentWindow:window,L?(re=a.relatedTarget||a.toElement,L=N,re=re?Ya(re):null,re!==null&&(Ue=te(re),de=re.tag,re!==Ue||de!==5&&de!==27&&de!==6)&&(re=null)):(L=null,re=N),L!==re)){if(de=Ac,Y="onMouseLeave",z="onMouseEnter",A="mouse",(e==="pointerout"||e==="pointerover")&&(de=_c,Y="onPointerLeave",z="onPointerEnter",A="pointer"),Ue=L==null?B:il(L),k=re==null?B:il(re),B=new de(Y,A+"leave",L,a,q),B.target=Ue,B.relatedTarget=k,Y=null,Ya(q)===N&&(de=new de(z,A+"enter",re,a,q),de.target=k,de.relatedTarget=Ue,Y=de),Ue=Y,L&&re)t:{for(de=L,z=re,A=0,k=de;k;k=Qn(k))A++;for(k=0,Y=z;Y;Y=Qn(Y))k++;for(;0<A-k;)de=Qn(de),A--;for(;0<k-A;)z=Qn(z),k--;for(;A--;){if(de===z||z!==null&&de===z.alternate)break t;de=Qn(de),z=Qn(z)}de=null}else de=null;L!==null&&dm(X,B,L,de,!1),re!==null&&Ue!==null&&dm(X,Ue,re,de,!0)}}e:{if(B=N?il(N):window,L=B.nodeName&&B.nodeName.toLowerCase(),L==="select"||L==="input"&&B.type==="file")var le=Lc;else if(Bc(B))if(Uc)le=Wp;else{le=Jp;var ve=Kp}else L=B.nodeName,!L||L.toLowerCase()!=="input"||B.type!=="checkbox"&&B.type!=="radio"?N&&ps(N.elementType)&&(le=Lc):le=$p;if(le&&(le=le(e,N))){Hc(X,le,a,q);break e}ve&&ve(e,B,N),e==="focusout"&&N&&B.type==="number"&&N.memoizedProps.value!=null&&hs(B,"number",B.value)}switch(ve=N?il(N):window,e){case"focusin":(Bc(ve)||ve.contentEditable==="true")&&(jn=ve,Ns=N,hl=null);break;case"focusout":hl=Ns=jn=null;break;case"mousedown":_s=!0;break;case"contextmenu":case"mouseup":case"dragend":_s=!1,Zc(X,a,q);break;case"selectionchange":if(e1)break;case"keydown":case"keyup":Zc(X,a,q)}var oe;if(Ts)e:{switch(e){case"compositionstart":var ce="onCompositionStart";break e;case"compositionend":ce="onCompositionEnd";break e;case"compositionupdate":ce="onCompositionUpdate";break e}ce=void 0}else En?Mc(e,a)&&(ce="onCompositionEnd"):e==="keydown"&&a.keyCode===229&&(ce="onCompositionStart");ce&&(Cc&&a.locale!=="ko"&&(En||ce!=="onCompositionStart"?ce==="onCompositionEnd"&&En&&(oe=Oc()):(va=q,xs="value"in va?va.value:va.textContent,En=!0)),ve=cr(N,ce),0<ve.length&&(ce=new Nc(ce,e,null,a,q),X.push({event:ce,listeners:ve}),oe?ce.data=oe:(oe=kc(a),oe!==null&&(ce.data=oe)))),(oe=Gp?Vp(e,a):Xp(e,a))&&(ce=cr(N,"onBeforeInput"),0<ce.length&&(ve=new Nc("onBeforeInput","beforeinput",null,a,q),X.push({event:ve,listeners:ce}),ve.data=oe)),B1(X,e,N,a,q)}cm(X,t)})}function Fl(e,t,a){return{instance:e,listener:t,currentTarget:a}}function cr(e,t){for(var a=t+"Capture",n=[];e!==null;){var i=e,s=i.stateNode;i=i.tag,i!==5&&i!==26&&i!==27||s===null||(i=rl(e,a),i!=null&&n.unshift(Fl(e,i,s)),i=rl(e,t),i!=null&&n.push(Fl(e,i,s))),e=e.return}return n}function Qn(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function dm(e,t,a,n,i){for(var s=t._reactName,m=[];a!==null&&a!==n;){var y=a,S=y.alternate,N=y.stateNode;if(y=y.tag,S!==null&&S===n)break;y!==5&&y!==26&&y!==27||N===null||(S=N,i?(N=rl(a,s),N!=null&&m.unshift(Fl(a,N,S))):i||(N=rl(a,s),N!=null&&m.push(Fl(a,N,S)))),a=a.return}m.length!==0&&e.push({event:t,listeners:m})}var q1=/\r\n?/g,Y1=/\u0000|\uFFFD/g;function mm(e){return(typeof e=="string"?e:""+e).replace(q1,`
`).replace(Y1,"")}function hm(e,t){return t=mm(t),mm(e)===t}function fr(){}function Ae(e,t,a,n,i,s){switch(a){case"children":typeof n=="string"?t==="body"||t==="textarea"&&n===""||xn(e,n):(typeof n=="number"||typeof n=="bigint")&&t!=="body"&&xn(e,""+n);break;case"className":bi(e,"class",n);break;case"tabIndex":bi(e,"tabindex",n);break;case"dir":case"role":case"viewBox":case"width":case"height":bi(e,a,n);break;case"style":Ec(e,n,s);break;case"data":if(t!=="object"){bi(e,"data",n);break}case"src":case"href":if(n===""&&(t!=="a"||a!=="href")){e.removeAttribute(a);break}if(n==null||typeof n=="function"||typeof n=="symbol"||typeof n=="boolean"){e.removeAttribute(a);break}n=wi(""+n),e.setAttribute(a,n);break;case"action":case"formAction":if(typeof n=="function"){e.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof s=="function"&&(a==="formAction"?(t!=="input"&&Ae(e,t,"name",i.name,i,null),Ae(e,t,"formEncType",i.formEncType,i,null),Ae(e,t,"formMethod",i.formMethod,i,null),Ae(e,t,"formTarget",i.formTarget,i,null)):(Ae(e,t,"encType",i.encType,i,null),Ae(e,t,"method",i.method,i,null),Ae(e,t,"target",i.target,i,null)));if(n==null||typeof n=="symbol"||typeof n=="boolean"){e.removeAttribute(a);break}n=wi(""+n),e.setAttribute(a,n);break;case"onClick":n!=null&&(e.onclick=fr);break;case"onScroll":n!=null&&xe("scroll",e);break;case"onScrollEnd":n!=null&&xe("scrollend",e);break;case"dangerouslySetInnerHTML":if(n!=null){if(typeof n!="object"||!("__html"in n))throw Error(o(61));if(a=n.__html,a!=null){if(i.children!=null)throw Error(o(60));e.innerHTML=a}}break;case"multiple":e.multiple=n&&typeof n!="function"&&typeof n!="symbol";break;case"muted":e.muted=n&&typeof n!="function"&&typeof n!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(n==null||typeof n=="function"||typeof n=="boolean"||typeof n=="symbol"){e.removeAttribute("xlink:href");break}a=wi(""+n),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":n!=null&&typeof n!="function"&&typeof n!="symbol"?e.setAttribute(a,""+n):e.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":n&&typeof n!="function"&&typeof n!="symbol"?e.setAttribute(a,""):e.removeAttribute(a);break;case"capture":case"download":n===!0?e.setAttribute(a,""):n!==!1&&n!=null&&typeof n!="function"&&typeof n!="symbol"?e.setAttribute(a,n):e.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":n!=null&&typeof n!="function"&&typeof n!="symbol"&&!isNaN(n)&&1<=n?e.setAttribute(a,n):e.removeAttribute(a);break;case"rowSpan":case"start":n==null||typeof n=="function"||typeof n=="symbol"||isNaN(n)?e.removeAttribute(a):e.setAttribute(a,n);break;case"popover":xe("beforetoggle",e),xe("toggle",e),yi(e,"popover",n);break;case"xlinkActuate":Jt(e,"http://www.w3.org/1999/xlink","xlink:actuate",n);break;case"xlinkArcrole":Jt(e,"http://www.w3.org/1999/xlink","xlink:arcrole",n);break;case"xlinkRole":Jt(e,"http://www.w3.org/1999/xlink","xlink:role",n);break;case"xlinkShow":Jt(e,"http://www.w3.org/1999/xlink","xlink:show",n);break;case"xlinkTitle":Jt(e,"http://www.w3.org/1999/xlink","xlink:title",n);break;case"xlinkType":Jt(e,"http://www.w3.org/1999/xlink","xlink:type",n);break;case"xmlBase":Jt(e,"http://www.w3.org/XML/1998/namespace","xml:base",n);break;case"xmlLang":Jt(e,"http://www.w3.org/XML/1998/namespace","xml:lang",n);break;case"xmlSpace":Jt(e,"http://www.w3.org/XML/1998/namespace","xml:space",n);break;case"is":yi(e,"is",n);break;case"innerText":case"textContent":break;default:(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")&&(a=gp.get(a)||a,yi(e,a,n))}}function eu(e,t,a,n,i,s){switch(a){case"style":Ec(e,n,s);break;case"dangerouslySetInnerHTML":if(n!=null){if(typeof n!="object"||!("__html"in n))throw Error(o(61));if(a=n.__html,a!=null){if(i.children!=null)throw Error(o(60));e.innerHTML=a}}break;case"children":typeof n=="string"?xn(e,n):(typeof n=="number"||typeof n=="bigint")&&xn(e,""+n);break;case"onScroll":n!=null&&xe("scroll",e);break;case"onScrollEnd":n!=null&&xe("scrollend",e);break;case"onClick":n!=null&&(e.onclick=fr);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!hc.hasOwnProperty(a))e:{if(a[0]==="o"&&a[1]==="n"&&(i=a.endsWith("Capture"),t=a.slice(2,i?a.length-7:void 0),s=e[ot]||null,s=s!=null?s[a]:null,typeof s=="function"&&e.removeEventListener(t,s,i),typeof n=="function")){typeof s!="function"&&s!==null&&(a in e?e[a]=null:e.hasAttribute(a)&&e.removeAttribute(a)),e.addEventListener(t,n,i);break e}a in e?e[a]=n:n===!0?e.setAttribute(a,""):yi(e,a,n)}}}function Ie(e,t,a){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":xe("error",e),xe("load",e);var n=!1,i=!1,s;for(s in a)if(a.hasOwnProperty(s)){var m=a[s];if(m!=null)switch(s){case"src":n=!0;break;case"srcSet":i=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(o(137,t));default:Ae(e,t,s,m,a,null)}}i&&Ae(e,t,"srcSet",a.srcSet,a,null),n&&Ae(e,t,"src",a.src,a,null);return;case"input":xe("invalid",e);var y=s=m=i=null,S=null,N=null;for(n in a)if(a.hasOwnProperty(n)){var q=a[n];if(q!=null)switch(n){case"name":i=q;break;case"type":m=q;break;case"checked":S=q;break;case"defaultChecked":N=q;break;case"value":s=q;break;case"defaultValue":y=q;break;case"children":case"dangerouslySetInnerHTML":if(q!=null)throw Error(o(137,t));break;default:Ae(e,t,n,q,a,null)}}bc(e,s,y,S,N,m,i,!1),xi(e);return;case"select":xe("invalid",e),n=m=s=null;for(i in a)if(a.hasOwnProperty(i)&&(y=a[i],y!=null))switch(i){case"value":s=y;break;case"defaultValue":m=y;break;case"multiple":n=y;default:Ae(e,t,i,y,a,null)}t=s,a=m,e.multiple=!!n,t!=null?bn(e,!!n,t,!1):a!=null&&bn(e,!!n,a,!0);return;case"textarea":xe("invalid",e),s=i=n=null;for(m in a)if(a.hasOwnProperty(m)&&(y=a[m],y!=null))switch(m){case"value":n=y;break;case"defaultValue":i=y;break;case"children":s=y;break;case"dangerouslySetInnerHTML":if(y!=null)throw Error(o(91));break;default:Ae(e,t,m,y,a,null)}Sc(e,n,i,s),xi(e);return;case"option":for(S in a)if(a.hasOwnProperty(S)&&(n=a[S],n!=null))switch(S){case"selected":e.selected=n&&typeof n!="function"&&typeof n!="symbol";break;default:Ae(e,t,S,n,a,null)}return;case"dialog":xe("cancel",e),xe("close",e);break;case"iframe":case"object":xe("load",e);break;case"video":case"audio":for(n=0;n<Yl.length;n++)xe(Yl[n],e);break;case"image":xe("error",e),xe("load",e);break;case"details":xe("toggle",e);break;case"embed":case"source":case"link":xe("error",e),xe("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(N in a)if(a.hasOwnProperty(N)&&(n=a[N],n!=null))switch(N){case"children":case"dangerouslySetInnerHTML":throw Error(o(137,t));default:Ae(e,t,N,n,a,null)}return;default:if(ps(t)){for(q in a)a.hasOwnProperty(q)&&(n=a[q],n!==void 0&&eu(e,t,q,n,a,void 0));return}}for(y in a)a.hasOwnProperty(y)&&(n=a[y],n!=null&&Ae(e,t,y,n,a,null))}function F1(e,t,a,n){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var i=null,s=null,m=null,y=null,S=null,N=null,q=null;for(L in a){var X=a[L];if(a.hasOwnProperty(L)&&X!=null)switch(L){case"checked":break;case"value":break;case"defaultValue":S=X;default:n.hasOwnProperty(L)||Ae(e,t,L,null,n,X)}}for(var B in n){var L=n[B];if(X=a[B],n.hasOwnProperty(B)&&(L!=null||X!=null))switch(B){case"type":s=L;break;case"name":i=L;break;case"checked":N=L;break;case"defaultChecked":q=L;break;case"value":m=L;break;case"defaultValue":y=L;break;case"children":case"dangerouslySetInnerHTML":if(L!=null)throw Error(o(137,t));break;default:L!==X&&Ae(e,t,B,L,n,X)}}ms(e,m,y,S,N,q,s,i);return;case"select":L=m=y=B=null;for(s in a)if(S=a[s],a.hasOwnProperty(s)&&S!=null)switch(s){case"value":break;case"multiple":L=S;default:n.hasOwnProperty(s)||Ae(e,t,s,null,n,S)}for(i in n)if(s=n[i],S=a[i],n.hasOwnProperty(i)&&(s!=null||S!=null))switch(i){case"value":B=s;break;case"defaultValue":y=s;break;case"multiple":m=s;default:s!==S&&Ae(e,t,i,s,n,S)}t=y,a=m,n=L,B!=null?bn(e,!!a,B,!1):!!n!=!!a&&(t!=null?bn(e,!!a,t,!0):bn(e,!!a,a?[]:"",!1));return;case"textarea":L=B=null;for(y in a)if(i=a[y],a.hasOwnProperty(y)&&i!=null&&!n.hasOwnProperty(y))switch(y){case"value":break;case"children":break;default:Ae(e,t,y,null,n,i)}for(m in n)if(i=n[m],s=a[m],n.hasOwnProperty(m)&&(i!=null||s!=null))switch(m){case"value":B=i;break;case"defaultValue":L=i;break;case"children":break;case"dangerouslySetInnerHTML":if(i!=null)throw Error(o(91));break;default:i!==s&&Ae(e,t,m,i,n,s)}xc(e,B,L);return;case"option":for(var re in a)if(B=a[re],a.hasOwnProperty(re)&&B!=null&&!n.hasOwnProperty(re))switch(re){case"selected":e.selected=!1;break;default:Ae(e,t,re,null,n,B)}for(S in n)if(B=n[S],L=a[S],n.hasOwnProperty(S)&&B!==L&&(B!=null||L!=null))switch(S){case"selected":e.selected=B&&typeof B!="function"&&typeof B!="symbol";break;default:Ae(e,t,S,B,n,L)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var de in a)B=a[de],a.hasOwnProperty(de)&&B!=null&&!n.hasOwnProperty(de)&&Ae(e,t,de,null,n,B);for(N in n)if(B=n[N],L=a[N],n.hasOwnProperty(N)&&B!==L&&(B!=null||L!=null))switch(N){case"children":case"dangerouslySetInnerHTML":if(B!=null)throw Error(o(137,t));break;default:Ae(e,t,N,B,n,L)}return;default:if(ps(t)){for(var Ue in a)B=a[Ue],a.hasOwnProperty(Ue)&&B!==void 0&&!n.hasOwnProperty(Ue)&&eu(e,t,Ue,void 0,n,B);for(q in n)B=n[q],L=a[q],!n.hasOwnProperty(q)||B===L||B===void 0&&L===void 0||eu(e,t,q,B,n,L);return}}for(var z in a)B=a[z],a.hasOwnProperty(z)&&B!=null&&!n.hasOwnProperty(z)&&Ae(e,t,z,null,n,B);for(X in n)B=n[X],L=a[X],!n.hasOwnProperty(X)||B===L||B==null&&L==null||Ae(e,t,X,B,n,L)}var tu=null,au=null;function dr(e){return e.nodeType===9?e:e.ownerDocument}function pm(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function gm(e,t){if(e===0)switch(t){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&t==="foreignObject"?0:e}function nu(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.children=="bigint"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var lu=null;function G1(){var e=window.event;return e&&e.type==="popstate"?e===lu?!1:(lu=e,!0):(lu=null,!1)}var vm=typeof setTimeout=="function"?setTimeout:void 0,V1=typeof clearTimeout=="function"?clearTimeout:void 0,ym=typeof Promise=="function"?Promise:void 0,X1=typeof queueMicrotask=="function"?queueMicrotask:typeof ym<"u"?function(e){return ym.resolve(null).then(e).catch(Q1)}:vm;function Q1(e){setTimeout(function(){throw e})}function iu(e,t){var a=t,n=0;do{var i=a.nextSibling;if(e.removeChild(a),i&&i.nodeType===8)if(a=i.data,a==="/$"){if(n===0){e.removeChild(i),$l(t);return}n--}else a!=="$"&&a!=="$?"&&a!=="$!"||n++;a=i}while(a);$l(t)}function ru(e){var t=e.firstChild;for(t&&t.nodeType===10&&(t=t.nextSibling);t;){var a=t;switch(t=t.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":ru(a),ds(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}e.removeChild(a)}}function Z1(e,t,a,n){for(;e.nodeType===1;){var i=a;if(e.nodeName.toLowerCase()!==t.toLowerCase()){if(!n&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(n){if(!e[ll])switch(t){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(s=e.getAttribute("rel"),s==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(s!==i.rel||e.getAttribute("href")!==(i.href==null?null:i.href)||e.getAttribute("crossorigin")!==(i.crossOrigin==null?null:i.crossOrigin)||e.getAttribute("title")!==(i.title==null?null:i.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(s=e.getAttribute("src"),(s!==(i.src==null?null:i.src)||e.getAttribute("type")!==(i.type==null?null:i.type)||e.getAttribute("crossorigin")!==(i.crossOrigin==null?null:i.crossOrigin))&&s&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(t==="input"&&e.type==="hidden"){var s=i.name==null?null:""+i.name;if(i.type==="hidden"&&e.getAttribute("name")===s)return e}else return e;if(e=kt(e.nextSibling),e===null)break}return null}function K1(e,t,a){if(t==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!a||(e=kt(e.nextSibling),e===null))return null;return e}function kt(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?"||t==="F!"||t==="F")break;if(t==="/$")return null}}return e}function bm(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var a=e.data;if(a==="$"||a==="$!"||a==="$?"){if(t===0)return e;t--}else a==="/$"&&t++}e=e.previousSibling}return null}function xm(e,t,a){switch(t=dr(a),e){case"html":if(e=t.documentElement,!e)throw Error(o(452));return e;case"head":if(e=t.head,!e)throw Error(o(453));return e;case"body":if(e=t.body,!e)throw Error(o(454));return e;default:throw Error(o(451))}}var Ct=new Map,Sm=new Set;function mr(e){return typeof e.getRootNode=="function"?e.getRootNode():e.ownerDocument}var ca=I.d;I.d={f:J1,r:$1,D:W1,C:P1,L:I1,m:e2,X:a2,S:t2,M:n2};function J1(){var e=ca.f(),t=ir();return e||t}function $1(e){var t=gn(e);t!==null&&t.tag===5&&t.type==="form"?Kf(t):ca.r(e)}var Zn=typeof document>"u"?null:document;function wm(e,t,a){var n=Zn;if(n&&typeof t=="string"&&t){var i=St(t);i='link[rel="'+e+'"][href="'+i+'"]',typeof a=="string"&&(i+='[crossorigin="'+a+'"]'),Sm.has(i)||(Sm.add(i),e={rel:e,crossOrigin:a,href:t},n.querySelector(i)===null&&(t=n.createElement("link"),Ie(t,"link",e),Ze(t),n.head.appendChild(t)))}}function W1(e){ca.D(e),wm("dns-prefetch",e,null)}function P1(e,t){ca.C(e,t),wm("preconnect",e,t)}function I1(e,t,a){ca.L(e,t,a);var n=Zn;if(n&&e&&t){var i='link[rel="preload"][as="'+St(t)+'"]';t==="image"&&a&&a.imageSrcSet?(i+='[imagesrcset="'+St(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(i+='[imagesizes="'+St(a.imageSizes)+'"]')):i+='[href="'+St(e)+'"]';var s=i;switch(t){case"style":s=Kn(e);break;case"script":s=Jn(e)}Ct.has(s)||(e=Z({rel:"preload",href:t==="image"&&a&&a.imageSrcSet?void 0:e,as:t},a),Ct.set(s,e),n.querySelector(i)!==null||t==="style"&&n.querySelector(Gl(s))||t==="script"&&n.querySelector(Vl(s))||(t=n.createElement("link"),Ie(t,"link",e),Ze(t),n.head.appendChild(t)))}}function e2(e,t){ca.m(e,t);var a=Zn;if(a&&e){var n=t&&typeof t.as=="string"?t.as:"script",i='link[rel="modulepreload"][as="'+St(n)+'"][href="'+St(e)+'"]',s=i;switch(n){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":s=Jn(e)}if(!Ct.has(s)&&(e=Z({rel:"modulepreload",href:e},t),Ct.set(s,e),a.querySelector(i)===null)){switch(n){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(Vl(s)))return}n=a.createElement("link"),Ie(n,"link",e),Ze(n),a.head.appendChild(n)}}}function t2(e,t,a){ca.S(e,t,a);var n=Zn;if(n&&e){var i=vn(n).hoistableStyles,s=Kn(e);t=t||"default";var m=i.get(s);if(!m){var y={loading:0,preload:null};if(m=n.querySelector(Gl(s)))y.loading=5;else{e=Z({rel:"stylesheet",href:e,"data-precedence":t},a),(a=Ct.get(s))&&su(e,a);var S=m=n.createElement("link");Ze(S),Ie(S,"link",e),S._p=new Promise(function(N,q){S.onload=N,S.onerror=q}),S.addEventListener("load",function(){y.loading|=1}),S.addEventListener("error",function(){y.loading|=2}),y.loading|=4,hr(m,t,n)}m={type:"stylesheet",instance:m,count:1,state:y},i.set(s,m)}}}function a2(e,t){ca.X(e,t);var a=Zn;if(a&&e){var n=vn(a).hoistableScripts,i=Jn(e),s=n.get(i);s||(s=a.querySelector(Vl(i)),s||(e=Z({src:e,async:!0},t),(t=Ct.get(i))&&ou(e,t),s=a.createElement("script"),Ze(s),Ie(s,"link",e),a.head.appendChild(s)),s={type:"script",instance:s,count:1,state:null},n.set(i,s))}}function n2(e,t){ca.M(e,t);var a=Zn;if(a&&e){var n=vn(a).hoistableScripts,i=Jn(e),s=n.get(i);s||(s=a.querySelector(Vl(i)),s||(e=Z({src:e,async:!0,type:"module"},t),(t=Ct.get(i))&&ou(e,t),s=a.createElement("script"),Ze(s),Ie(s,"link",e),a.head.appendChild(s)),s={type:"script",instance:s,count:1,state:null},n.set(i,s))}}function Em(e,t,a,n){var i=(i=ha.current)?mr(i):null;if(!i)throw Error(o(446));switch(e){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(t=Kn(a.href),a=vn(i).hoistableStyles,n=a.get(t),n||(n={type:"style",instance:null,count:0,state:null},a.set(t,n)),n):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){e=Kn(a.href);var s=vn(i).hoistableStyles,m=s.get(e);if(m||(i=i.ownerDocument||i,m={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},s.set(e,m),(s=i.querySelector(Gl(e)))&&!s._p&&(m.instance=s,m.state.loading=5),Ct.has(e)||(a={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},Ct.set(e,a),s||l2(i,e,a,m.state))),t&&n===null)throw Error(o(528,""));return m}if(t&&n!==null)throw Error(o(529,""));return null;case"script":return t=a.async,a=a.src,typeof a=="string"&&t&&typeof t!="function"&&typeof t!="symbol"?(t=Jn(a),a=vn(i).hoistableScripts,n=a.get(t),n||(n={type:"script",instance:null,count:0,state:null},a.set(t,n)),n):{type:"void",instance:null,count:0,state:null};default:throw Error(o(444,e))}}function Kn(e){return'href="'+St(e)+'"'}function Gl(e){return'link[rel="stylesheet"]['+e+"]"}function jm(e){return Z({},e,{"data-precedence":e.precedence,precedence:null})}function l2(e,t,a,n){e.querySelector('link[rel="preload"][as="style"]['+t+"]")?n.loading=1:(t=e.createElement("link"),n.preload=t,t.addEventListener("load",function(){return n.loading|=1}),t.addEventListener("error",function(){return n.loading|=2}),Ie(t,"link",a),Ze(t),e.head.appendChild(t))}function Jn(e){return'[src="'+St(e)+'"]'}function Vl(e){return"script[async]"+e}function Tm(e,t,a){if(t.count++,t.instance===null)switch(t.type){case"style":var n=e.querySelector('style[data-href~="'+St(a.href)+'"]');if(n)return t.instance=n,Ze(n),n;var i=Z({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return n=(e.ownerDocument||e).createElement("style"),Ze(n),Ie(n,"style",i),hr(n,a.precedence,e),t.instance=n;case"stylesheet":i=Kn(a.href);var s=e.querySelector(Gl(i));if(s)return t.state.loading|=4,t.instance=s,Ze(s),s;n=jm(a),(i=Ct.get(i))&&su(n,i),s=(e.ownerDocument||e).createElement("link"),Ze(s);var m=s;return m._p=new Promise(function(y,S){m.onload=y,m.onerror=S}),Ie(s,"link",n),t.state.loading|=4,hr(s,a.precedence,e),t.instance=s;case"script":return s=Jn(a.src),(i=e.querySelector(Vl(s)))?(t.instance=i,Ze(i),i):(n=a,(i=Ct.get(s))&&(n=Z({},a),ou(n,i)),e=e.ownerDocument||e,i=e.createElement("script"),Ze(i),Ie(i,"link",n),e.head.appendChild(i),t.instance=i);case"void":return null;default:throw Error(o(443,t.type))}else t.type==="stylesheet"&&(t.state.loading&4)===0&&(n=t.instance,t.state.loading|=4,hr(n,a.precedence,e));return t.instance}function hr(e,t,a){for(var n=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),i=n.length?n[n.length-1]:null,s=i,m=0;m<n.length;m++){var y=n[m];if(y.dataset.precedence===t)s=y;else if(s!==i)break}s?s.parentNode.insertBefore(e,s.nextSibling):(t=a.nodeType===9?a.head:a,t.insertBefore(e,t.firstChild))}function su(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.title==null&&(e.title=t.title)}function ou(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.integrity==null&&(e.integrity=t.integrity)}var pr=null;function Om(e,t,a){if(pr===null){var n=new Map,i=pr=new Map;i.set(a,n)}else i=pr,n=i.get(a),n||(n=new Map,i.set(a,n));if(n.has(e))return n;for(n.set(e,null),a=a.getElementsByTagName(e),i=0;i<a.length;i++){var s=a[i];if(!(s[ll]||s[at]||e==="link"&&s.getAttribute("rel")==="stylesheet")&&s.namespaceURI!=="http://www.w3.org/2000/svg"){var m=s.getAttribute(t)||"";m=e+m;var y=n.get(m);y?y.push(s):n.set(m,[s])}}return n}function Rm(e,t,a){e=e.ownerDocument||e,e.head.insertBefore(a,t==="title"?e.querySelector("head > title"):null)}function i2(e,t,a){if(a===1||t.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof t.precedence!="string"||typeof t.href!="string"||t.href==="")break;return!0;case"link":if(typeof t.rel!="string"||typeof t.href!="string"||t.href===""||t.onLoad||t.onError)break;switch(t.rel){case"stylesheet":return e=t.disabled,typeof t.precedence=="string"&&e==null;default:return!0}case"script":if(t.async&&typeof t.async!="function"&&typeof t.async!="symbol"&&!t.onLoad&&!t.onError&&t.src&&typeof t.src=="string")return!0}return!1}function Am(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}var Xl=null;function r2(){}function s2(e,t,a){if(Xl===null)throw Error(o(475));var n=Xl;if(t.type==="stylesheet"&&(typeof a.media!="string"||matchMedia(a.media).matches!==!1)&&(t.state.loading&4)===0){if(t.instance===null){var i=Kn(a.href),s=e.querySelector(Gl(i));if(s){e=s._p,e!==null&&typeof e=="object"&&typeof e.then=="function"&&(n.count++,n=gr.bind(n),e.then(n,n)),t.state.loading|=4,t.instance=s,Ze(s);return}s=e.ownerDocument||e,a=jm(a),(i=Ct.get(i))&&su(a,i),s=s.createElement("link"),Ze(s);var m=s;m._p=new Promise(function(y,S){m.onload=y,m.onerror=S}),Ie(s,"link",a),t.instance=s}n.stylesheets===null&&(n.stylesheets=new Map),n.stylesheets.set(t,e),(e=t.state.preload)&&(t.state.loading&3)===0&&(n.count++,t=gr.bind(n),e.addEventListener("load",t),e.addEventListener("error",t))}}function o2(){if(Xl===null)throw Error(o(475));var e=Xl;return e.stylesheets&&e.count===0&&uu(e,e.stylesheets),0<e.count?function(t){var a=setTimeout(function(){if(e.stylesheets&&uu(e,e.stylesheets),e.unsuspend){var n=e.unsuspend;e.unsuspend=null,n()}},6e4);return e.unsuspend=t,function(){e.unsuspend=null,clearTimeout(a)}}:null}function gr(){if(this.count--,this.count===0){if(this.stylesheets)uu(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var vr=null;function uu(e,t){e.stylesheets=null,e.unsuspend!==null&&(e.count++,vr=new Map,t.forEach(u2,e),vr=null,gr.call(e))}function u2(e,t){if(!(t.state.loading&4)){var a=vr.get(e);if(a)var n=a.get(null);else{a=new Map,vr.set(e,a);for(var i=e.querySelectorAll("link[data-precedence],style[data-precedence]"),s=0;s<i.length;s++){var m=i[s];(m.nodeName==="LINK"||m.getAttribute("media")!=="not all")&&(a.set(m.dataset.precedence,m),n=m)}n&&a.set(null,n)}i=t.instance,m=i.getAttribute("data-precedence"),s=a.get(m)||n,s===n&&a.set(null,i),a.set(m,i),this.count++,n=gr.bind(this),i.addEventListener("load",n),i.addEventListener("error",n),s?s.parentNode.insertBefore(i,s.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(i,e.firstChild)),t.state.loading|=4}}var Ql={$$typeof:j,Provider:null,Consumer:null,_currentValue:he,_currentValue2:he,_threadCount:0};function c2(e,t,a,n,i,s,m,y){this.tag=1,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=cs(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.finishedLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=cs(0),this.hiddenUpdates=cs(null),this.identifierPrefix=n,this.onUncaughtError=i,this.onCaughtError=s,this.onRecoverableError=m,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=y,this.incompleteTransitions=new Map}function Nm(e,t,a,n,i,s,m,y,S,N,q,X){return e=new c2(e,t,a,m,y,S,N,X),t=1,s===!0&&(t|=24),s=Nt(3,null,null,t),e.current=s,s.stateNode=e,t=qs(),t.refCount++,e.pooledCache=t,t.refCount++,s.memoizedState={element:n,isDehydrated:a,cache:t},So(s),e}function _m(e){return e?(e=Rn,e):Rn}function Cm(e,t,a,n,i,s){i=_m(i),n.context===null?n.context=i:n.pendingContext=i,n=Ta(t),n.payload={element:a},s=s===void 0?null:s,s!==null&&(n.callback=s),a=Oa(e,n,t),a!==null&&(st(a,e,t),Nl(a,e,t))}function zm(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var a=e.retryLane;e.retryLane=a!==0&&a<t?a:t}}function cu(e,t){zm(e,t),(e=e.alternate)&&zm(e,t)}function Dm(e){if(e.tag===13){var t=ya(e,67108864);t!==null&&st(t,e,67108864),cu(e,67108864)}}var yr=!0;function f2(e,t,a,n){var i=F.T;F.T=null;var s=I.p;try{I.p=2,fu(e,t,a,n)}finally{I.p=s,F.T=i}}function d2(e,t,a,n){var i=F.T;F.T=null;var s=I.p;try{I.p=8,fu(e,t,a,n)}finally{I.p=s,F.T=i}}function fu(e,t,a,n){if(yr){var i=du(n);if(i===null)Io(e,t,n,br,a),km(e,n);else if(h2(i,e,t,a,n))n.stopPropagation();else if(km(e,n),t&4&&-1<m2.indexOf(e)){for(;i!==null;){var s=gn(i);if(s!==null)switch(s.tag){case 3:if(s=s.stateNode,s.current.memoizedState.isDehydrated){var m=qa(s.pendingLanes);if(m!==0){var y=s;for(y.pendingLanes|=2,y.entangledLanes|=2;m;){var S=1<<31-ht(m);y.entanglements[1]|=S,m&=~S}Gt(s),(ke&6)===0&&(ar=Lt()+500,ql(0))}}break;case 13:y=ya(s,2),y!==null&&st(y,s,2),ir(),cu(s,2)}if(s=du(n),s===null&&Io(e,t,n,br,a),s===i)break;i=s}i!==null&&n.stopPropagation()}else Io(e,t,n,null,a)}}function du(e){return e=vs(e),mu(e)}var br=null;function mu(e){if(br=null,e=Ya(e),e!==null){var t=te(e);if(t===null)e=null;else{var a=t.tag;if(a===13){if(e=be(t),e!==null)return e;e=null}else if(a===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null)}}return br=e,null}function Mm(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(Ph()){case nc:return 2;case lc:return 8;case hi:case Ih:return 32;case ic:return 268435456;default:return 32}default:return 32}}var hu=!1,Da=null,Ma=null,ka=null,Zl=new Map,Kl=new Map,Ba=[],m2="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function km(e,t){switch(e){case"focusin":case"focusout":Da=null;break;case"dragenter":case"dragleave":Ma=null;break;case"mouseover":case"mouseout":ka=null;break;case"pointerover":case"pointerout":Zl.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Kl.delete(t.pointerId)}}function Jl(e,t,a,n,i,s){return e===null||e.nativeEvent!==s?(e={blockedOn:t,domEventName:a,eventSystemFlags:n,nativeEvent:s,targetContainers:[i]},t!==null&&(t=gn(t),t!==null&&Dm(t)),e):(e.eventSystemFlags|=n,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function h2(e,t,a,n,i){switch(t){case"focusin":return Da=Jl(Da,e,t,a,n,i),!0;case"dragenter":return Ma=Jl(Ma,e,t,a,n,i),!0;case"mouseover":return ka=Jl(ka,e,t,a,n,i),!0;case"pointerover":var s=i.pointerId;return Zl.set(s,Jl(Zl.get(s)||null,e,t,a,n,i)),!0;case"gotpointercapture":return s=i.pointerId,Kl.set(s,Jl(Kl.get(s)||null,e,t,a,n,i)),!0}return!1}function Bm(e){var t=Ya(e.target);if(t!==null){var a=te(t);if(a!==null){if(t=a.tag,t===13){if(t=be(a),t!==null){e.blockedOn=t,op(e.priority,function(){if(a.tag===13){var n=bt(),i=ya(a,n);i!==null&&st(i,a,n),cu(a,n)}});return}}else if(t===3&&a.stateNode.current.memoizedState.isDehydrated){e.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}e.blockedOn=null}function xr(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var a=du(e.nativeEvent);if(a===null){a=e.nativeEvent;var n=new a.constructor(a.type,a);gs=n,a.target.dispatchEvent(n),gs=null}else return t=gn(a),t!==null&&Dm(t),e.blockedOn=a,!1;t.shift()}return!0}function Hm(e,t,a){xr(e)&&a.delete(t)}function p2(){hu=!1,Da!==null&&xr(Da)&&(Da=null),Ma!==null&&xr(Ma)&&(Ma=null),ka!==null&&xr(ka)&&(ka=null),Zl.forEach(Hm),Kl.forEach(Hm)}function Sr(e,t){e.blockedOn===t&&(e.blockedOn=null,hu||(hu=!0,l.unstable_scheduleCallback(l.unstable_NormalPriority,p2)))}var wr=null;function Lm(e){wr!==e&&(wr=e,l.unstable_scheduleCallback(l.unstable_NormalPriority,function(){wr===e&&(wr=null);for(var t=0;t<e.length;t+=3){var a=e[t],n=e[t+1],i=e[t+2];if(typeof n!="function"){if(mu(n||a)===null)continue;break}var s=gn(a);s!==null&&(e.splice(t,3),t-=3,ao(s,{pending:!0,data:i,method:a.method,action:n},n,i))}}))}function $l(e){function t(S){return Sr(S,e)}Da!==null&&Sr(Da,e),Ma!==null&&Sr(Ma,e),ka!==null&&Sr(ka,e),Zl.forEach(t),Kl.forEach(t);for(var a=0;a<Ba.length;a++){var n=Ba[a];n.blockedOn===e&&(n.blockedOn=null)}for(;0<Ba.length&&(a=Ba[0],a.blockedOn===null);)Bm(a),a.blockedOn===null&&Ba.shift();if(a=(e.ownerDocument||e).$$reactFormReplay,a!=null)for(n=0;n<a.length;n+=3){var i=a[n],s=a[n+1],m=i[ot]||null;if(typeof s=="function")m||Lm(a);else if(m){var y=null;if(s&&s.hasAttribute("formAction")){if(i=s,m=s[ot]||null)y=m.formAction;else if(mu(i)!==null)continue}else y=m.action;typeof y=="function"?a[n+1]=y:(a.splice(n,3),n-=3),Lm(a)}}}function pu(e){this._internalRoot=e}Er.prototype.render=pu.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(o(409));var a=t.current,n=bt();Cm(a,n,e,t,null,null)},Er.prototype.unmount=pu.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;e.tag===0&&Vn(),Cm(e.current,2,null,e,null,null),ir(),t[pn]=null}};function Er(e){this._internalRoot=e}Er.prototype.unstable_scheduleHydration=function(e){if(e){var t=fc();e={blockedOn:null,target:e,priority:t};for(var a=0;a<Ba.length&&t!==0&&t<Ba[a].priority;a++);Ba.splice(a,0,e),a===0&&Bm(e)}};var Um=r.version;if(Um!=="19.0.0")throw Error(o(527,Um,"19.0.0"));I.findDOMNode=function(e){var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(o(188)):(e=Object.keys(e).join(","),Error(o(268,e)));return e=G(t),e=e!==null?ae(e):null,e=e===null?null:e.stateNode,e};var g2={bundleType:0,version:"19.0.0",rendererPackageName:"react-dom",currentDispatcherRef:F,findFiberByHostInstance:Ya,reconcilerVersion:"19.0.0"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var jr=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!jr.isDisabled&&jr.supportsFiber)try{tl=jr.inject(g2),mt=jr}catch{}}return Pl.createRoot=function(e,t){if(!c(e))throw Error(o(299));var a=!1,n="",i=ad,s=nd,m=ld,y=null;return t!=null&&(t.unstable_strictMode===!0&&(a=!0),t.identifierPrefix!==void 0&&(n=t.identifierPrefix),t.onUncaughtError!==void 0&&(i=t.onUncaughtError),t.onCaughtError!==void 0&&(s=t.onCaughtError),t.onRecoverableError!==void 0&&(m=t.onRecoverableError),t.unstable_transitionCallbacks!==void 0&&(y=t.unstable_transitionCallbacks)),t=Nm(e,1,!1,null,null,a,n,i,s,m,y,null),e[pn]=t.current,Po(e.nodeType===8?e.parentNode:e),new pu(t)},Pl.hydrateRoot=function(e,t,a){if(!c(e))throw Error(o(299));var n=!1,i="",s=ad,m=nd,y=ld,S=null,N=null;return a!=null&&(a.unstable_strictMode===!0&&(n=!0),a.identifierPrefix!==void 0&&(i=a.identifierPrefix),a.onUncaughtError!==void 0&&(s=a.onUncaughtError),a.onCaughtError!==void 0&&(m=a.onCaughtError),a.onRecoverableError!==void 0&&(y=a.onRecoverableError),a.unstable_transitionCallbacks!==void 0&&(S=a.unstable_transitionCallbacks),a.formState!==void 0&&(N=a.formState)),t=Nm(e,1,!0,t,a??null,n,i,s,m,y,S,N),t.context=_m(null),a=t.current,n=bt(),i=Ta(n),i.callback=null,Oa(a,i,n),t.current.lanes=n,nl(t,n),Gt(t),e[pn]=t.current,Po(e),new Er(t)},Pl.version="19.0.0",Pl}var Jm;function T2(){if(Jm)return yu.exports;Jm=1;function l(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(l)}catch(r){console.error(r)}}return l(),yu.exports=j2(),yu.exports}var O2=T2();const R2=G0(O2);/**
 * react-router v7.9.5
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */var $m="popstate";function A2(l={}){function r(o,c){let{pathname:d,search:h,hash:v}=o.location;return Du("",{pathname:d,search:h,hash:v},c.state&&c.state.usr||null,c.state&&c.state.key||"default")}function u(o,c){return typeof c=="string"?c:ai(c)}return _2(r,u,null,l)}function Be(l,r){if(l===!1||l===null||typeof l>"u")throw new Error(r)}function Xt(l,r){if(!l){typeof console<"u"&&console.warn(r);try{throw new Error(r)}catch{}}}function N2(){return Math.random().toString(36).substring(2,10)}function Wm(l,r){return{usr:l.state,key:l.key,idx:r}}function Du(l,r,u=null,o){return{pathname:typeof l=="string"?l:l.pathname,search:"",hash:"",...typeof r=="string"?Wn(r):r,state:u,key:r&&r.key||o||N2()}}function ai({pathname:l="/",search:r="",hash:u=""}){return r&&r!=="?"&&(l+=r.charAt(0)==="?"?r:"?"+r),u&&u!=="#"&&(l+=u.charAt(0)==="#"?u:"#"+u),l}function Wn(l){let r={};if(l){let u=l.indexOf("#");u>=0&&(r.hash=l.substring(u),l=l.substring(0,u));let o=l.indexOf("?");o>=0&&(r.search=l.substring(o),l=l.substring(0,o)),l&&(r.pathname=l)}return r}function _2(l,r,u,o={}){let{window:c=document.defaultView,v5Compat:d=!1}=o,h=c.history,v="POP",g=null,p=b();p==null&&(p=0,h.replaceState({...h.state,idx:p},""));function b(){return(h.state||{idx:null}).idx}function w(){v="POP";let E=b(),_=E==null?null:E-p;p=E,g&&g({action:v,location:T.location,delta:_})}function R(E,_){v="PUSH";let M=Du(T.location,E,_);p=b()+1;let C=Wm(M,p),Q=T.createHref(M);try{h.pushState(C,"",Q)}catch(V){if(V instanceof DOMException&&V.name==="DataCloneError")throw V;c.location.assign(Q)}d&&g&&g({action:v,location:T.location,delta:1})}function j(E,_){v="REPLACE";let M=Du(T.location,E,_);p=b();let C=Wm(M,p),Q=T.createHref(M);h.replaceState(C,"",Q),d&&g&&g({action:v,location:T.location,delta:0})}function x(E){return C2(E)}let T={get action(){return v},get location(){return l(c,h)},listen(E){if(g)throw new Error("A history only accepts one active listener");return c.addEventListener($m,w),g=E,()=>{c.removeEventListener($m,w),g=null}},createHref(E){return r(c,E)},createURL:x,encodeLocation(E){let _=x(E);return{pathname:_.pathname,search:_.search,hash:_.hash}},push:R,replace:j,go(E){return h.go(E)}};return T}function C2(l,r=!1){let u="http://localhost";typeof window<"u"&&(u=window.location.origin!=="null"?window.location.origin:window.location.href),Be(u,"No window.location.(origin|href) available to create URL");let o=typeof l=="string"?l:ai(l);return o=o.replace(/ $/,"%20"),!r&&o.startsWith("//")&&(o=u+o),new URL(o,u)}function V0(l,r,u="/"){return z2(l,r,u,!1)}function z2(l,r,u,o){let c=typeof r=="string"?Wn(r):r,d=da(c.pathname||"/",u);if(d==null)return null;let h=X0(l);D2(h);let v=null;for(let g=0;v==null&&g<h.length;++g){let p=V2(d);v=F2(h[g],p,o)}return v}function X0(l,r=[],u=[],o="",c=!1){let d=(h,v,g=c,p)=>{let b={relativePath:p===void 0?h.path||"":p,caseSensitive:h.caseSensitive===!0,childrenIndex:v,route:h};if(b.relativePath.startsWith("/")){if(!b.relativePath.startsWith(o)&&g)return;Be(b.relativePath.startsWith(o),`Absolute route path "${b.relativePath}" nested under path "${o}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),b.relativePath=b.relativePath.slice(o.length)}let w=fa([o,b.relativePath]),R=u.concat(b);h.children&&h.children.length>0&&(Be(h.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${w}".`),X0(h.children,r,R,w,g)),!(h.path==null&&!h.index)&&r.push({path:w,score:q2(w,h.index),routesMeta:R})};return l.forEach((h,v)=>{var g;if(h.path===""||!((g=h.path)!=null&&g.includes("?")))d(h,v);else for(let p of Q0(h.path))d(h,v,!0,p)}),r}function Q0(l){let r=l.split("/");if(r.length===0)return[];let[u,...o]=r,c=u.endsWith("?"),d=u.replace(/\?$/,"");if(o.length===0)return c?[d,""]:[d];let h=Q0(o.join("/")),v=[];return v.push(...h.map(g=>g===""?d:[d,g].join("/"))),c&&v.push(...h),v.map(g=>l.startsWith("/")&&g===""?"/":g)}function D2(l){l.sort((r,u)=>r.score!==u.score?u.score-r.score:Y2(r.routesMeta.map(o=>o.childrenIndex),u.routesMeta.map(o=>o.childrenIndex)))}var M2=/^:[\w-]+$/,k2=3,B2=2,H2=1,L2=10,U2=-2,Pm=l=>l==="*";function q2(l,r){let u=l.split("/"),o=u.length;return u.some(Pm)&&(o+=U2),r&&(o+=B2),u.filter(c=>!Pm(c)).reduce((c,d)=>c+(M2.test(d)?k2:d===""?H2:L2),o)}function Y2(l,r){return l.length===r.length&&l.slice(0,-1).every((o,c)=>o===r[c])?l[l.length-1]-r[r.length-1]:0}function F2(l,r,u=!1){let{routesMeta:o}=l,c={},d="/",h=[];for(let v=0;v<o.length;++v){let g=o[v],p=v===o.length-1,b=d==="/"?r:r.slice(d.length)||"/",w=Qr({path:g.relativePath,caseSensitive:g.caseSensitive,end:p},b),R=g.route;if(!w&&p&&u&&!o[o.length-1].route.index&&(w=Qr({path:g.relativePath,caseSensitive:g.caseSensitive,end:!1},b)),!w)return null;Object.assign(c,w.params),h.push({params:c,pathname:fa([d,w.pathname]),pathnameBase:K2(fa([d,w.pathnameBase])),route:R}),w.pathnameBase!=="/"&&(d=fa([d,w.pathnameBase]))}return h}function Qr(l,r){typeof l=="string"&&(l={path:l,caseSensitive:!1,end:!0});let[u,o]=G2(l.path,l.caseSensitive,l.end),c=r.match(u);if(!c)return null;let d=c[0],h=d.replace(/(.)\/+$/,"$1"),v=c.slice(1);return{params:o.reduce((p,{paramName:b,isOptional:w},R)=>{if(b==="*"){let x=v[R]||"";h=d.slice(0,d.length-x.length).replace(/(.)\/+$/,"$1")}const j=v[R];return w&&!j?p[b]=void 0:p[b]=(j||"").replace(/%2F/g,"/"),p},{}),pathname:d,pathnameBase:h,pattern:l}}function G2(l,r=!1,u=!0){Xt(l==="*"||!l.endsWith("*")||l.endsWith("/*"),`Route path "${l}" will be treated as if it were "${l.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${l.replace(/\*$/,"/*")}".`);let o=[],c="^"+l.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(h,v,g)=>(o.push({paramName:v,isOptional:g!=null}),g?"/?([^\\/]+)?":"/([^\\/]+)")).replace(/\/([\w-]+)\?(\/|$)/g,"(/$1)?$2");return l.endsWith("*")?(o.push({paramName:"*"}),c+=l==="*"||l==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):u?c+="\\/*$":l!==""&&l!=="/"&&(c+="(?:(?=\\/|$))"),[new RegExp(c,r?void 0:"i"),o]}function V2(l){try{return l.split("/").map(r=>decodeURIComponent(r).replace(/\//g,"%2F")).join("/")}catch(r){return Xt(!1,`The URL path "${l}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${r}).`),l}}function da(l,r){if(r==="/")return l;if(!l.toLowerCase().startsWith(r.toLowerCase()))return null;let u=r.endsWith("/")?r.length-1:r.length,o=l.charAt(u);return o&&o!=="/"?null:l.slice(u)||"/"}function X2(l,r="/"){let{pathname:u,search:o="",hash:c=""}=typeof l=="string"?Wn(l):l;return{pathname:u?u.startsWith("/")?u:Q2(u,r):r,search:J2(o),hash:$2(c)}}function Q2(l,r){let u=r.replace(/\/+$/,"").split("/");return l.split("/").forEach(c=>{c===".."?u.length>1&&u.pop():c!=="."&&u.push(c)}),u.length>1?u.join("/"):"/"}function wu(l,r,u,o){return`Cannot include a '${l}' character in a manually specified \`to.${r}\` field [${JSON.stringify(o)}].  Please separate it out to the \`to.${u}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function Z2(l){return l.filter((r,u)=>u===0||r.route.path&&r.route.path.length>0)}function Z0(l){let r=Z2(l);return r.map((u,o)=>o===r.length-1?u.pathname:u.pathnameBase)}function K0(l,r,u,o=!1){let c;typeof l=="string"?c=Wn(l):(c={...l},Be(!c.pathname||!c.pathname.includes("?"),wu("?","pathname","search",c)),Be(!c.pathname||!c.pathname.includes("#"),wu("#","pathname","hash",c)),Be(!c.search||!c.search.includes("#"),wu("#","search","hash",c)));let d=l===""||c.pathname==="",h=d?"/":c.pathname,v;if(h==null)v=u;else{let w=r.length-1;if(!o&&h.startsWith("..")){let R=h.split("/");for(;R[0]==="..";)R.shift(),w-=1;c.pathname=R.join("/")}v=w>=0?r[w]:"/"}let g=X2(c,v),p=h&&h!=="/"&&h.endsWith("/"),b=(d||h===".")&&u.endsWith("/");return!g.pathname.endsWith("/")&&(p||b)&&(g.pathname+="/"),g}var fa=l=>l.join("/").replace(/\/\/+/g,"/"),K2=l=>l.replace(/\/+$/,"").replace(/^\/*/,"/"),J2=l=>!l||l==="?"?"":l.startsWith("?")?l:"?"+l,$2=l=>!l||l==="#"?"":l.startsWith("#")?l:"#"+l;function W2(l){return l!=null&&typeof l.status=="number"&&typeof l.statusText=="string"&&typeof l.internal=="boolean"&&"data"in l}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");var J0=["POST","PUT","PATCH","DELETE"];new Set(J0);var P2=["GET",...J0];new Set(P2);var Pn=D.createContext(null);Pn.displayName="DataRouter";var $r=D.createContext(null);$r.displayName="DataRouterState";D.createContext(!1);var $0=D.createContext({isTransitioning:!1});$0.displayName="ViewTransition";var I2=D.createContext(new Map);I2.displayName="Fetchers";var eg=D.createContext(null);eg.displayName="Await";var Qt=D.createContext(null);Qt.displayName="Navigation";var ni=D.createContext(null);ni.displayName="Location";var Zt=D.createContext({outlet:null,matches:[],isDataRoute:!1});Zt.displayName="Route";var Fu=D.createContext(null);Fu.displayName="RouteError";function tg(l,{relative:r}={}){Be(li(),"useHref() may be used only in the context of a <Router> component.");let{basename:u,navigator:o}=D.useContext(Qt),{hash:c,pathname:d,search:h}=ii(l,{relative:r}),v=d;return u!=="/"&&(v=d==="/"?u:fa([u,d])),o.createHref({pathname:v,search:h,hash:c})}function li(){return D.useContext(ni)!=null}function mn(){return Be(li(),"useLocation() may be used only in the context of a <Router> component."),D.useContext(ni).location}var W0="You should call navigate() in a React.useEffect(), not when your component is first rendered.";function P0(l){D.useContext(Qt).static||D.useLayoutEffect(l)}function Gu(){let{isDataRoute:l}=D.useContext(Zt);return l?pg():ag()}function ag(){Be(li(),"useNavigate() may be used only in the context of a <Router> component.");let l=D.useContext(Pn),{basename:r,navigator:u}=D.useContext(Qt),{matches:o}=D.useContext(Zt),{pathname:c}=mn(),d=JSON.stringify(Z0(o)),h=D.useRef(!1);return P0(()=>{h.current=!0}),D.useCallback((g,p={})=>{if(Xt(h.current,W0),!h.current)return;if(typeof g=="number"){u.go(g);return}let b=K0(g,JSON.parse(d),c,p.relative==="path");l==null&&r!=="/"&&(b.pathname=b.pathname==="/"?r:fa([r,b.pathname])),(p.replace?u.replace:u.push)(b,p.state,p)},[r,u,d,c,l])}D.createContext(null);function ng(){let{matches:l}=D.useContext(Zt),r=l[l.length-1];return r?r.params:{}}function ii(l,{relative:r}={}){let{matches:u}=D.useContext(Zt),{pathname:o}=mn(),c=JSON.stringify(Z0(u));return D.useMemo(()=>K0(l,JSON.parse(c),o,r==="path"),[l,c,o,r])}function lg(l,r){return I0(l,r)}function I0(l,r,u,o,c){var M;Be(li(),"useRoutes() may be used only in the context of a <Router> component.");let{navigator:d}=D.useContext(Qt),{matches:h}=D.useContext(Zt),v=h[h.length-1],g=v?v.params:{},p=v?v.pathname:"/",b=v?v.pathnameBase:"/",w=v&&v.route;{let C=w&&w.path||"";eh(p,!w||C.endsWith("*")||C.endsWith("*?"),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${p}" (under <Route path="${C}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${C}"> to <Route path="${C==="/"?"*":`${C}/*`}">.`)}let R=mn(),j;if(r){let C=typeof r=="string"?Wn(r):r;Be(b==="/"||((M=C.pathname)==null?void 0:M.startsWith(b)),`When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${b}" but pathname "${C.pathname}" was given in the \`location\` prop.`),j=C}else j=R;let x=j.pathname||"/",T=x;if(b!=="/"){let C=b.replace(/^\//,"").split("/");T="/"+x.replace(/^\//,"").split("/").slice(C.length).join("/")}let E=V0(l,{pathname:T});Xt(w||E!=null,`No routes matched location "${j.pathname}${j.search}${j.hash}" `),Xt(E==null||E[E.length-1].route.element!==void 0||E[E.length-1].route.Component!==void 0||E[E.length-1].route.lazy!==void 0,`Matched leaf route at location "${j.pathname}${j.search}${j.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);let _=ug(E&&E.map(C=>Object.assign({},C,{params:Object.assign({},g,C.params),pathname:fa([b,d.encodeLocation?d.encodeLocation(C.pathname.replace(/\?/g,"%3F").replace(/#/g,"%23")).pathname:C.pathname]),pathnameBase:C.pathnameBase==="/"?b:fa([b,d.encodeLocation?d.encodeLocation(C.pathnameBase.replace(/\?/g,"%3F").replace(/#/g,"%23")).pathname:C.pathnameBase])})),h,u,o,c);return r&&_?D.createElement(ni.Provider,{value:{location:{pathname:"/",search:"",hash:"",state:null,key:"default",...j},navigationType:"POP"}},_):_}function ig(){let l=hg(),r=W2(l)?`${l.status} ${l.statusText}`:l instanceof Error?l.message:JSON.stringify(l),u=l instanceof Error?l.stack:null,o="rgba(200,200,200, 0.5)",c={padding:"0.5rem",backgroundColor:o},d={padding:"2px 4px",backgroundColor:o},h=null;return console.error("Error handled by React Router default ErrorBoundary:",l),h=D.createElement(D.Fragment,null,D.createElement("p",null,"💿 Hey developer 👋"),D.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",D.createElement("code",{style:d},"ErrorBoundary")," or"," ",D.createElement("code",{style:d},"errorElement")," prop on your route.")),D.createElement(D.Fragment,null,D.createElement("h2",null,"Unexpected Application Error!"),D.createElement("h3",{style:{fontStyle:"italic"}},r),u?D.createElement("pre",{style:c},u):null,h)}var rg=D.createElement(ig,null),sg=class extends D.Component{constructor(l){super(l),this.state={location:l.location,revalidation:l.revalidation,error:l.error}}static getDerivedStateFromError(l){return{error:l}}static getDerivedStateFromProps(l,r){return r.location!==l.location||r.revalidation!=="idle"&&l.revalidation==="idle"?{error:l.error,location:l.location,revalidation:l.revalidation}:{error:l.error!==void 0?l.error:r.error,location:r.location,revalidation:l.revalidation||r.revalidation}}componentDidCatch(l,r){this.props.unstable_onError?this.props.unstable_onError(l,r):console.error("React Router caught the following error during render",l)}render(){return this.state.error!==void 0?D.createElement(Zt.Provider,{value:this.props.routeContext},D.createElement(Fu.Provider,{value:this.state.error,children:this.props.component})):this.props.children}};function og({routeContext:l,match:r,children:u}){let o=D.useContext(Pn);return o&&o.static&&o.staticContext&&(r.route.errorElement||r.route.ErrorBoundary)&&(o.staticContext._deepestRenderedBoundaryId=r.route.id),D.createElement(Zt.Provider,{value:l},u)}function ug(l,r=[],u=null,o=null,c=null){if(l==null){if(!u)return null;if(u.errors)l=u.matches;else if(r.length===0&&!u.initialized&&u.matches.length>0)l=u.matches;else return null}let d=l,h=u==null?void 0:u.errors;if(h!=null){let p=d.findIndex(b=>b.route.id&&(h==null?void 0:h[b.route.id])!==void 0);Be(p>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(h).join(",")}`),d=d.slice(0,Math.min(d.length,p+1))}let v=!1,g=-1;if(u)for(let p=0;p<d.length;p++){let b=d[p];if((b.route.HydrateFallback||b.route.hydrateFallbackElement)&&(g=p),b.route.id){let{loaderData:w,errors:R}=u,j=b.route.loader&&!w.hasOwnProperty(b.route.id)&&(!R||R[b.route.id]===void 0);if(b.route.lazy||j){v=!0,g>=0?d=d.slice(0,g+1):d=[d[0]];break}}}return d.reduceRight((p,b,w)=>{let R,j=!1,x=null,T=null;u&&(R=h&&b.route.id?h[b.route.id]:void 0,x=b.route.errorElement||rg,v&&(g<0&&w===0?(eh("route-fallback",!1,"No `HydrateFallback` element provided to render during initial hydration"),j=!0,T=null):g===w&&(j=!0,T=b.route.hydrateFallbackElement||null)));let E=r.concat(d.slice(0,w+1)),_=()=>{let M;return R?M=x:j?M=T:b.route.Component?M=D.createElement(b.route.Component,null):b.route.element?M=b.route.element:M=p,D.createElement(og,{match:b,routeContext:{outlet:p,matches:E,isDataRoute:u!=null},children:M})};return u&&(b.route.ErrorBoundary||b.route.errorElement||w===0)?D.createElement(sg,{location:u.location,revalidation:u.revalidation,component:x,error:R,children:_(),routeContext:{outlet:null,matches:E,isDataRoute:!0},unstable_onError:o}):_()},null)}function Vu(l){return`${l} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function cg(l){let r=D.useContext(Pn);return Be(r,Vu(l)),r}function fg(l){let r=D.useContext($r);return Be(r,Vu(l)),r}function dg(l){let r=D.useContext(Zt);return Be(r,Vu(l)),r}function Xu(l){let r=dg(l),u=r.matches[r.matches.length-1];return Be(u.route.id,`${l} can only be used on routes that contain a unique "id"`),u.route.id}function mg(){return Xu("useRouteId")}function hg(){var o;let l=D.useContext(Fu),r=fg("useRouteError"),u=Xu("useRouteError");return l!==void 0?l:(o=r.errors)==null?void 0:o[u]}function pg(){let{router:l}=cg("useNavigate"),r=Xu("useNavigate"),u=D.useRef(!1);return P0(()=>{u.current=!0}),D.useCallback(async(c,d={})=>{Xt(u.current,W0),u.current&&(typeof c=="number"?l.navigate(c):await l.navigate(c,{fromRouteId:r,...d}))},[l,r])}var Im={};function eh(l,r,u){!r&&!Im[l]&&(Im[l]=!0,Xt(!1,u))}D.memo(gg);function gg({routes:l,future:r,state:u,unstable_onError:o}){return I0(l,void 0,u,o,r)}function Mu(l){Be(!1,"A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.")}function vg({basename:l="/",children:r=null,location:u,navigationType:o="POP",navigator:c,static:d=!1}){Be(!li(),"You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");let h=l.replace(/^\/*/,"/"),v=D.useMemo(()=>({basename:h,navigator:c,static:d,future:{}}),[h,c,d]);typeof u=="string"&&(u=Wn(u));let{pathname:g="/",search:p="",hash:b="",state:w=null,key:R="default"}=u,j=D.useMemo(()=>{let x=da(g,h);return x==null?null:{location:{pathname:x,search:p,hash:b,state:w,key:R},navigationType:o}},[h,g,p,b,w,R,o]);return Xt(j!=null,`<Router basename="${h}"> is not able to match the URL "${g}${p}${b}" because it does not start with the basename, so the <Router> won't render anything.`),j==null?null:D.createElement(Qt.Provider,{value:v},D.createElement(ni.Provider,{children:r,value:j}))}function yg({children:l,location:r}){return lg(ku(l),r)}function ku(l,r=[]){let u=[];return D.Children.forEach(l,(o,c)=>{if(!D.isValidElement(o))return;let d=[...r,c];if(o.type===D.Fragment){u.push.apply(u,ku(o.props.children,d));return}Be(o.type===Mu,`[${typeof o.type=="string"?o.type:o.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`),Be(!o.props.index||!o.props.children,"An index route cannot have child routes.");let h={id:o.props.id||d.join("-"),caseSensitive:o.props.caseSensitive,element:o.props.element,Component:o.props.Component,index:o.props.index,path:o.props.path,middleware:o.props.middleware,loader:o.props.loader,action:o.props.action,hydrateFallbackElement:o.props.hydrateFallbackElement,HydrateFallback:o.props.HydrateFallback,errorElement:o.props.errorElement,ErrorBoundary:o.props.ErrorBoundary,hasErrorBoundary:o.props.hasErrorBoundary===!0||o.props.ErrorBoundary!=null||o.props.errorElement!=null,shouldRevalidate:o.props.shouldRevalidate,handle:o.props.handle,lazy:o.props.lazy};o.props.children&&(h.children=ku(o.props.children,d)),u.push(h)}),u}var Yr="get",Fr="application/x-www-form-urlencoded";function Wr(l){return l!=null&&typeof l.tagName=="string"}function bg(l){return Wr(l)&&l.tagName.toLowerCase()==="button"}function xg(l){return Wr(l)&&l.tagName.toLowerCase()==="form"}function Sg(l){return Wr(l)&&l.tagName.toLowerCase()==="input"}function wg(l){return!!(l.metaKey||l.altKey||l.ctrlKey||l.shiftKey)}function Eg(l,r){return l.button===0&&(!r||r==="_self")&&!wg(l)}var Or=null;function jg(){if(Or===null)try{new FormData(document.createElement("form"),0),Or=!1}catch{Or=!0}return Or}var Tg=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function Eu(l){return l!=null&&!Tg.has(l)?(Xt(!1,`"${l}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${Fr}"`),null):l}function Og(l,r){let u,o,c,d,h;if(xg(l)){let v=l.getAttribute("action");o=v?da(v,r):null,u=l.getAttribute("method")||Yr,c=Eu(l.getAttribute("enctype"))||Fr,d=new FormData(l)}else if(bg(l)||Sg(l)&&(l.type==="submit"||l.type==="image")){let v=l.form;if(v==null)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');let g=l.getAttribute("formaction")||v.getAttribute("action");if(o=g?da(g,r):null,u=l.getAttribute("formmethod")||v.getAttribute("method")||Yr,c=Eu(l.getAttribute("formenctype"))||Eu(v.getAttribute("enctype"))||Fr,d=new FormData(v,l),!jg()){let{name:p,type:b,value:w}=l;if(b==="image"){let R=p?`${p}.`:"";d.append(`${R}x`,"0"),d.append(`${R}y`,"0")}else p&&d.append(p,w)}}else{if(Wr(l))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');u=Yr,o=null,c=Fr,h=l}return d&&c==="text/plain"&&(h=d,d=void 0),{action:o,method:u.toLowerCase(),encType:c,formData:d,body:h}}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");function Qu(l,r){if(l===!1||l===null||typeof l>"u")throw new Error(r)}function Rg(l,r,u){let o=typeof l=="string"?new URL(l,typeof window>"u"?"server://singlefetch/":window.location.origin):l;return o.pathname==="/"?o.pathname=`_root.${u}`:r&&da(o.pathname,r)==="/"?o.pathname=`${r.replace(/\/$/,"")}/_root.${u}`:o.pathname=`${o.pathname.replace(/\/$/,"")}.${u}`,o}async function Ag(l,r){if(l.id in r)return r[l.id];try{let u=await import(l.module);return r[l.id]=u,u}catch(u){return console.error(`Error loading route module \`${l.module}\`, reloading page...`),console.error(u),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function Ng(l){return l==null?!1:l.href==null?l.rel==="preload"&&typeof l.imageSrcSet=="string"&&typeof l.imageSizes=="string":typeof l.rel=="string"&&typeof l.href=="string"}async function _g(l,r,u){let o=await Promise.all(l.map(async c=>{let d=r.routes[c.route.id];if(d){let h=await Ag(d,u);return h.links?h.links():[]}return[]}));return Mg(o.flat(1).filter(Ng).filter(c=>c.rel==="stylesheet"||c.rel==="preload").map(c=>c.rel==="stylesheet"?{...c,rel:"prefetch",as:"style"}:{...c,rel:"prefetch"}))}function e0(l,r,u,o,c,d){let h=(g,p)=>u[p]?g.route.id!==u[p].route.id:!0,v=(g,p)=>{var b;return u[p].pathname!==g.pathname||((b=u[p].route.path)==null?void 0:b.endsWith("*"))&&u[p].params["*"]!==g.params["*"]};return d==="assets"?r.filter((g,p)=>h(g,p)||v(g,p)):d==="data"?r.filter((g,p)=>{var w;let b=o.routes[g.route.id];if(!b||!b.hasLoader)return!1;if(h(g,p)||v(g,p))return!0;if(g.route.shouldRevalidate){let R=g.route.shouldRevalidate({currentUrl:new URL(c.pathname+c.search+c.hash,window.origin),currentParams:((w=u[0])==null?void 0:w.params)||{},nextUrl:new URL(l,window.origin),nextParams:g.params,defaultShouldRevalidate:!0});if(typeof R=="boolean")return R}return!0}):[]}function Cg(l,r,{includeHydrateFallback:u}={}){return zg(l.map(o=>{let c=r.routes[o.route.id];if(!c)return[];let d=[c.module];return c.clientActionModule&&(d=d.concat(c.clientActionModule)),c.clientLoaderModule&&(d=d.concat(c.clientLoaderModule)),u&&c.hydrateFallbackModule&&(d=d.concat(c.hydrateFallbackModule)),c.imports&&(d=d.concat(c.imports)),d}).flat(1))}function zg(l){return[...new Set(l)]}function Dg(l){let r={},u=Object.keys(l).sort();for(let o of u)r[o]=l[o];return r}function Mg(l,r){let u=new Set;return new Set(r),l.reduce((o,c)=>{let d=JSON.stringify(Dg(c));return u.has(d)||(u.add(d),o.push({key:d,link:c})),o},[])}function th(){let l=D.useContext(Pn);return Qu(l,"You must render this element inside a <DataRouterContext.Provider> element"),l}function kg(){let l=D.useContext($r);return Qu(l,"You must render this element inside a <DataRouterStateContext.Provider> element"),l}var Zu=D.createContext(void 0);Zu.displayName="FrameworkContext";function ah(){let l=D.useContext(Zu);return Qu(l,"You must render this element inside a <HydratedRouter> element"),l}function Bg(l,r){let u=D.useContext(Zu),[o,c]=D.useState(!1),[d,h]=D.useState(!1),{onFocus:v,onBlur:g,onMouseEnter:p,onMouseLeave:b,onTouchStart:w}=r,R=D.useRef(null);D.useEffect(()=>{if(l==="render"&&h(!0),l==="viewport"){let T=_=>{_.forEach(M=>{h(M.isIntersecting)})},E=new IntersectionObserver(T,{threshold:.5});return R.current&&E.observe(R.current),()=>{E.disconnect()}}},[l]),D.useEffect(()=>{if(o){let T=setTimeout(()=>{h(!0)},100);return()=>{clearTimeout(T)}}},[o]);let j=()=>{c(!0)},x=()=>{c(!1),h(!1)};return u?l!=="intent"?[d,R,{}]:[d,R,{onFocus:Il(v,j),onBlur:Il(g,x),onMouseEnter:Il(p,j),onMouseLeave:Il(b,x),onTouchStart:Il(w,j)}]:[!1,R,{}]}function Il(l,r){return u=>{l&&l(u),u.defaultPrevented||r(u)}}function Hg({page:l,...r}){let{router:u}=th(),o=D.useMemo(()=>V0(u.routes,l,u.basename),[u.routes,l,u.basename]);return o?D.createElement(Ug,{page:l,matches:o,...r}):null}function Lg(l){let{manifest:r,routeModules:u}=ah(),[o,c]=D.useState([]);return D.useEffect(()=>{let d=!1;return _g(l,r,u).then(h=>{d||c(h)}),()=>{d=!0}},[l,r,u]),o}function Ug({page:l,matches:r,...u}){let o=mn(),{manifest:c,routeModules:d}=ah(),{basename:h}=th(),{loaderData:v,matches:g}=kg(),p=D.useMemo(()=>e0(l,r,g,c,o,"data"),[l,r,g,c,o]),b=D.useMemo(()=>e0(l,r,g,c,o,"assets"),[l,r,g,c,o]),w=D.useMemo(()=>{if(l===o.pathname+o.search+o.hash)return[];let x=new Set,T=!1;if(r.forEach(_=>{var C;let M=c.routes[_.route.id];!M||!M.hasLoader||(!p.some(Q=>Q.route.id===_.route.id)&&_.route.id in v&&((C=d[_.route.id])!=null&&C.shouldRevalidate)||M.hasClientLoader?T=!0:x.add(_.route.id))}),x.size===0)return[];let E=Rg(l,h,"data");return T&&x.size>0&&E.searchParams.set("_routes",r.filter(_=>x.has(_.route.id)).map(_=>_.route.id).join(",")),[E.pathname+E.search]},[h,v,o,c,p,r,l,d]),R=D.useMemo(()=>Cg(b,c),[b,c]),j=Lg(b);return D.createElement(D.Fragment,null,w.map(x=>D.createElement("link",{key:x,rel:"prefetch",as:"fetch",href:x,...u})),R.map(x=>D.createElement("link",{key:x,rel:"modulepreload",href:x,...u})),j.map(({key:x,link:T})=>D.createElement("link",{key:x,nonce:u.nonce,...T})))}function qg(...l){return r=>{l.forEach(u=>{typeof u=="function"?u(r):u!=null&&(u.current=r)})}}var nh=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";try{nh&&(window.__reactRouterVersion="7.9.5")}catch{}function Yg({basename:l,children:r,window:u}){let o=D.useRef();o.current==null&&(o.current=A2({window:u,v5Compat:!0}));let c=o.current,[d,h]=D.useState({action:c.action,location:c.location}),v=D.useCallback(g=>{D.startTransition(()=>h(g))},[h]);return D.useLayoutEffect(()=>c.listen(v),[c,v]),D.createElement(vg,{basename:l,children:r,location:d.location,navigationType:d.action,navigator:c})}var lh=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,ih=D.forwardRef(function({onClick:r,discover:u="render",prefetch:o="none",relative:c,reloadDocument:d,replace:h,state:v,target:g,to:p,preventScrollReset:b,viewTransition:w,...R},j){let{basename:x}=D.useContext(Qt),T=typeof p=="string"&&lh.test(p),E,_=!1;if(typeof p=="string"&&T&&(E=p,nh))try{let F=new URL(window.location.href),Z=p.startsWith("//")?new URL(F.protocol+p):new URL(p),W=da(Z.pathname,x);Z.origin===F.origin&&W!=null?p=W+Z.search+Z.hash:_=!0}catch{Xt(!1,`<Link to="${p}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}let M=tg(p,{relative:c}),[C,Q,V]=Bg(o,R),$=Xg(p,{replace:h,state:v,target:g,preventScrollReset:b,relative:c,viewTransition:w});function J(F){r&&r(F),F.defaultPrevented||$(F)}let ie=D.createElement("a",{...R,...V,href:E||M,onClick:_||d?r:J,ref:qg(j,Q),target:g,"data-discover":!T&&u==="render"?"true":void 0});return C&&!T?D.createElement(D.Fragment,null,ie,D.createElement(Hg,{page:M})):ie});ih.displayName="Link";var Fg=D.forwardRef(function({"aria-current":r="page",caseSensitive:u=!1,className:o="",end:c=!1,style:d,to:h,viewTransition:v,children:g,...p},b){let w=ii(h,{relative:p.relative}),R=mn(),j=D.useContext($r),{navigator:x,basename:T}=D.useContext(Qt),E=j!=null&&$g(w)&&v===!0,_=x.encodeLocation?x.encodeLocation(w).pathname:w.pathname,M=R.pathname,C=j&&j.navigation&&j.navigation.location?j.navigation.location.pathname:null;u||(M=M.toLowerCase(),C=C?C.toLowerCase():null,_=_.toLowerCase()),C&&T&&(C=da(C,T)||C);const Q=_!=="/"&&_.endsWith("/")?_.length-1:_.length;let V=M===_||!c&&M.startsWith(_)&&M.charAt(Q)==="/",$=C!=null&&(C===_||!c&&C.startsWith(_)&&C.charAt(_.length)==="/"),J={isActive:V,isPending:$,isTransitioning:E},ie=V?r:void 0,F;typeof o=="function"?F=o(J):F=[o,V?"active":null,$?"pending":null,E?"transitioning":null].filter(Boolean).join(" ");let Z=typeof d=="function"?d(J):d;return D.createElement(ih,{...p,"aria-current":ie,className:F,ref:b,style:Z,to:h,viewTransition:v},typeof g=="function"?g(J):g)});Fg.displayName="NavLink";var Gg=D.forwardRef(({discover:l="render",fetcherKey:r,navigate:u,reloadDocument:o,replace:c,state:d,method:h=Yr,action:v,onSubmit:g,relative:p,preventScrollReset:b,viewTransition:w,...R},j)=>{let x=Kg(),T=Jg(v,{relative:p}),E=h.toLowerCase()==="get"?"get":"post",_=typeof v=="string"&&lh.test(v),M=C=>{if(g&&g(C),C.defaultPrevented)return;C.preventDefault();let Q=C.nativeEvent.submitter,V=(Q==null?void 0:Q.getAttribute("formmethod"))||h;x(Q||C.currentTarget,{fetcherKey:r,method:V,navigate:u,replace:c,state:d,relative:p,preventScrollReset:b,viewTransition:w})};return D.createElement("form",{ref:j,method:E,action:T,onSubmit:o?g:M,...R,"data-discover":!_&&l==="render"?"true":void 0})});Gg.displayName="Form";function Vg(l){return`${l} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function rh(l){let r=D.useContext(Pn);return Be(r,Vg(l)),r}function Xg(l,{target:r,replace:u,state:o,preventScrollReset:c,relative:d,viewTransition:h}={}){let v=Gu(),g=mn(),p=ii(l,{relative:d});return D.useCallback(b=>{if(Eg(b,r)){b.preventDefault();let w=u!==void 0?u:ai(g)===ai(p);v(l,{replace:w,state:o,preventScrollReset:c,relative:d,viewTransition:h})}},[g,v,p,u,o,r,l,c,d,h])}var Qg=0,Zg=()=>`__${String(++Qg)}__`;function Kg(){let{router:l}=rh("useSubmit"),{basename:r}=D.useContext(Qt),u=mg();return D.useCallback(async(o,c={})=>{let{action:d,method:h,encType:v,formData:g,body:p}=Og(o,r);if(c.navigate===!1){let b=c.fetcherKey||Zg();await l.fetch(b,u,c.action||d,{preventScrollReset:c.preventScrollReset,formData:g,body:p,formMethod:c.method||h,formEncType:c.encType||v,flushSync:c.flushSync})}else await l.navigate(c.action||d,{preventScrollReset:c.preventScrollReset,formData:g,body:p,formMethod:c.method||h,formEncType:c.encType||v,replace:c.replace,state:c.state,fromRouteId:u,flushSync:c.flushSync,viewTransition:c.viewTransition})},[l,r,u])}function Jg(l,{relative:r}={}){let{basename:u}=D.useContext(Qt),o=D.useContext(Zt);Be(o,"useFormAction must be used inside a RouteContext");let[c]=o.matches.slice(-1),d={...ii(l||".",{relative:r})},h=mn();if(l==null){d.search=h.search;let v=new URLSearchParams(d.search),g=v.getAll("index");if(g.some(b=>b==="")){v.delete("index"),g.filter(w=>w).forEach(w=>v.append("index",w));let b=v.toString();d.search=b?`?${b}`:""}}return(!l||l===".")&&c.route.index&&(d.search=d.search?d.search.replace(/^\?/,"?index&"):"?index"),u!=="/"&&(d.pathname=d.pathname==="/"?u:fa([u,d.pathname])),ai(d)}function $g(l,{relative:r}={}){let u=D.useContext($0);Be(u!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:o}=rh("useViewTransitionState"),c=ii(l,{relative:r});if(!u.isTransitioning)return!1;let d=da(u.currentLocation.pathname,o)||u.currentLocation.pathname,h=da(u.nextLocation.pathname,o)||u.nextLocation.pathname;return Qr(c.pathname,h)!=null||Qr(c.pathname,d)!=null}var De={},Rr={},Ar={},Nr={},ju,t0;function Wg(){if(t0)return ju;t0=1;var l="Expected a function",r=NaN,u="[object Symbol]",o=/^\s+|\s+$/g,c=/^[-+]0x[0-9a-f]+$/i,d=/^0b[01]+$/i,h=/^0o[0-7]+$/i,v=parseInt,g=typeof Tr=="object"&&Tr&&Tr.Object===Object&&Tr,p=typeof self=="object"&&self&&self.Object===Object&&self,b=g||p||Function("return this")(),w=Object.prototype,R=w.toString,j=Math.max,x=Math.min,T=function(){return b.Date.now()};function E($,J,ie){var F,Z,W,U,ee,P,we=0,K=!1,se=!1,te=!0;if(typeof $!="function")throw new TypeError(l);J=V(J)||0,M(ie)&&(K=!!ie.leading,se="maxWait"in ie,W=se?j(V(ie.maxWait)||0,J):W,te="trailing"in ie?!!ie.trailing:te);function be(ue){var Ee=F,je=Z;return F=Z=void 0,we=ue,U=$.apply(je,Ee),U}function O(ue){return we=ue,ee=setTimeout(ne,J),K?be(ue):U}function G(ue){var Ee=ue-P,je=ue-we,tt=J-Ee;return se?x(tt,W-je):tt}function ae(ue){var Ee=ue-P,je=ue-we;return P===void 0||Ee>=J||Ee<0||se&&je>=W}function ne(){var ue=T();if(ae(ue))return I(ue);ee=setTimeout(ne,G(ue))}function I(ue){return ee=void 0,te&&F?be(ue):(F=Z=void 0,U)}function he(){ee!==void 0&&clearTimeout(ee),we=0,F=P=Z=ee=void 0}function fe(){return ee===void 0?U:I(T())}function ze(){var ue=T(),Ee=ae(ue);if(F=arguments,Z=this,P=ue,Ee){if(ee===void 0)return O(P);if(se)return ee=setTimeout(ne,J),be(P)}return ee===void 0&&(ee=setTimeout(ne,J)),U}return ze.cancel=he,ze.flush=fe,ze}function _($,J,ie){var F=!0,Z=!0;if(typeof $!="function")throw new TypeError(l);return M(ie)&&(F="leading"in ie?!!ie.leading:F,Z="trailing"in ie?!!ie.trailing:Z),E($,J,{leading:F,maxWait:J,trailing:Z})}function M($){var J=typeof $;return!!$&&(J=="object"||J=="function")}function C($){return!!$&&typeof $=="object"}function Q($){return typeof $=="symbol"||C($)&&R.call($)==u}function V($){if(typeof $=="number")return $;if(Q($))return r;if(M($)){var J=typeof $.valueOf=="function"?$.valueOf():$;$=M(J)?J+"":J}if(typeof $!="string")return $===0?$:+$;$=$.replace(o,"");var ie=d.test($);return ie||h.test($)?v($.slice(2),ie?2:8):c.test($)?r:+$}return ju=_,ju}var ei={},a0;function Ku(){if(a0)return ei;a0=1,Object.defineProperty(ei,"__esModule",{value:!0}),ei.addPassiveEventListener=function(u,o,c){var d=c.name;d||(d=o,console.warn("Listener must be a named function.")),l.has(o)||l.set(o,new Set);var h=l.get(o);if(!h.has(d)){var v=function(){var g=!1;try{var p=Object.defineProperty({},"passive",{get:function(){g=!0}});window.addEventListener("test",null,p)}catch{}return g}();u.addEventListener(o,c,v?{passive:!0}:!1),h.add(d)}},ei.removePassiveEventListener=function(u,o,c){u.removeEventListener(o,c),l.get(o).delete(c.name||o)};var l=new Map;return ei}var n0;function Ju(){if(n0)return Nr;n0=1,Object.defineProperty(Nr,"__esModule",{value:!0});var l=Wg(),r=o(l),u=Ku();function o(h){return h&&h.__esModule?h:{default:h}}var c=function(v){var g=arguments.length>1&&arguments[1]!==void 0?arguments[1]:66;return(0,r.default)(v,g)},d={spyCallbacks:[],spySetState:[],scrollSpyContainers:[],mount:function(v,g){if(v){var p=c(function(b){d.scrollHandler(v)},g);return d.scrollSpyContainers.push(v),(0,u.addPassiveEventListener)(v,"scroll",p),function(){(0,u.removePassiveEventListener)(v,"scroll",p),d.scrollSpyContainers.splice(d.scrollSpyContainers.indexOf(v),1)}}return function(){}},isMounted:function(v){return d.scrollSpyContainers.indexOf(v)!==-1},currentPositionX:function(v){if(v===document){var g=window.scrollY!==void 0,p=(document.compatMode||"")==="CSS1Compat";return g?window.scrollX:p?document.documentElement.scrollLeft:document.body.scrollLeft}else return v.scrollLeft},currentPositionY:function(v){if(v===document){var g=window.scrollX!==void 0,p=(document.compatMode||"")==="CSS1Compat";return g?window.scrollY:p?document.documentElement.scrollTop:document.body.scrollTop}else return v.scrollTop},scrollHandler:function(v){var g=d.scrollSpyContainers[d.scrollSpyContainers.indexOf(v)].spyCallbacks||[];g.forEach(function(p){return p(d.currentPositionX(v),d.currentPositionY(v))})},addStateHandler:function(v){d.spySetState.push(v)},addSpyHandler:function(v,g){var p=d.scrollSpyContainers[d.scrollSpyContainers.indexOf(g)];p.spyCallbacks||(p.spyCallbacks=[]),p.spyCallbacks.push(v)},updateStates:function(){d.spySetState.forEach(function(v){return v()})},unmount:function(v,g){d.scrollSpyContainers.forEach(function(p){return p.spyCallbacks&&p.spyCallbacks.length&&p.spyCallbacks.indexOf(g)>-1&&p.spyCallbacks.splice(p.spyCallbacks.indexOf(g),1)}),d.spySetState&&d.spySetState.length&&d.spySetState.indexOf(v)>-1&&d.spySetState.splice(d.spySetState.indexOf(v),1),document.removeEventListener("scroll",d.scrollHandler)},update:function(){return d.scrollSpyContainers.forEach(function(v){return d.scrollHandler(v)})}};return Nr.default=d,Nr}var _r={},Cr={},l0;function Pr(){if(l0)return Cr;l0=1,Object.defineProperty(Cr,"__esModule",{value:!0});var l=function(v,g){var p=v.indexOf("#")===0?v.substring(1):v,b=p?"#"+p:"",w=window&&window.location,R=b?w.pathname+w.search+b:w.pathname+w.search;g?history.pushState(history.state,"",R):history.replaceState(history.state,"",R)},r=function(){return window.location.hash.replace(/^#/,"")},u=function(v){return function(g){return v.contains?v!=g&&v.contains(g):!!(v.compareDocumentPosition(g)&16)}},o=function(v){return getComputedStyle(v).position!=="static"},c=function(v,g){for(var p=v.offsetTop,b=v.offsetParent;b&&!g(b);)p+=b.offsetTop,b=b.offsetParent;return{offsetTop:p,offsetParent:b}},d=function(v,g,p){if(p)return v===document?g.getBoundingClientRect().left+(window.scrollX||window.pageXOffset):getComputedStyle(v).position!=="static"?g.offsetLeft:g.offsetLeft-v.offsetLeft;if(v===document)return g.getBoundingClientRect().top+(window.scrollY||window.pageYOffset);if(o(v)){if(g.offsetParent!==v){var b=function(E){return E===v||E===document},w=c(g,b),R=w.offsetTop,j=w.offsetParent;if(j!==v)throw new Error("Seems containerElement is not an ancestor of the Element");return R}return g.offsetTop}if(g.offsetParent===v.offsetParent)return g.offsetTop-v.offsetTop;var x=function(E){return E===document};return c(g,x).offsetTop-c(v,x).offsetTop};return Cr.default={updateHash:l,getHash:r,filterElementInContainer:u,scrollOffset:d},Cr}var zr={},Dr={},i0;function Pg(){return i0||(i0=1,Object.defineProperty(Dr,"__esModule",{value:!0}),Dr.default={defaultEasing:function(r){return r<.5?Math.pow(r*2,2)/2:1-Math.pow((1-r)*2,2)/2},linear:function(r){return r},easeInQuad:function(r){return r*r},easeOutQuad:function(r){return r*(2-r)},easeInOutQuad:function(r){return r<.5?2*r*r:-1+(4-2*r)*r},easeInCubic:function(r){return r*r*r},easeOutCubic:function(r){return--r*r*r+1},easeInOutCubic:function(r){return r<.5?4*r*r*r:(r-1)*(2*r-2)*(2*r-2)+1},easeInQuart:function(r){return r*r*r*r},easeOutQuart:function(r){return 1- --r*r*r*r},easeInOutQuart:function(r){return r<.5?8*r*r*r*r:1-8*--r*r*r*r},easeInQuint:function(r){return r*r*r*r*r},easeOutQuint:function(r){return 1+--r*r*r*r*r},easeInOutQuint:function(r){return r<.5?16*r*r*r*r*r:1+16*--r*r*r*r*r}}),Dr}var Mr={},r0;function Ig(){if(r0)return Mr;r0=1,Object.defineProperty(Mr,"__esModule",{value:!0});var l=Ku(),r=["mousedown","wheel","touchmove","keydown"];return Mr.default={subscribe:function(o){return typeof document<"u"&&r.forEach(function(c){return(0,l.addPassiveEventListener)(document,c,o)})}},Mr}var kr={},s0;function $u(){if(s0)return kr;s0=1,Object.defineProperty(kr,"__esModule",{value:!0});var l={registered:{},scrollEvent:{register:function(u,o){l.registered[u]=o},remove:function(u){l.registered[u]=null}}};return kr.default=l,kr}var o0;function sh(){if(o0)return zr;o0=1,Object.defineProperty(zr,"__esModule",{value:!0});var l=Object.assign||function(Z){for(var W=1;W<arguments.length;W++){var U=arguments[W];for(var ee in U)Object.prototype.hasOwnProperty.call(U,ee)&&(Z[ee]=U[ee])}return Z},r=Pr();g(r);var u=Pg(),o=g(u),c=Ig(),d=g(c),h=$u(),v=g(h);function g(Z){return Z&&Z.__esModule?Z:{default:Z}}var p=function(W){return o.default[W.smooth]||o.default.defaultEasing},b=function(W){return typeof W=="function"?W:function(){return W}},w=function(){if(typeof window<"u")return window.requestAnimationFrame||window.webkitRequestAnimationFrame},R=function(){return w()||function(Z,W,U){window.setTimeout(Z,U||1e3/60,new Date().getTime())}}(),j=function(){return{currentPosition:0,startPosition:0,targetPosition:0,progress:0,duration:0,cancel:!1,target:null,containerElement:null,to:null,start:null,delta:null,percent:null,delayTimeout:null}},x=function(W){var U=W.data.containerElement;if(U&&U!==document&&U!==document.body)return U.scrollLeft;var ee=window.pageXOffset!==void 0,P=(document.compatMode||"")==="CSS1Compat";return ee?window.pageXOffset:P?document.documentElement.scrollLeft:document.body.scrollLeft},T=function(W){var U=W.data.containerElement;if(U&&U!==document&&U!==document.body)return U.scrollTop;var ee=window.pageXOffset!==void 0,P=(document.compatMode||"")==="CSS1Compat";return ee?window.pageYOffset:P?document.documentElement.scrollTop:document.body.scrollTop},E=function(W){var U=W.data.containerElement;if(U&&U!==document&&U!==document.body)return U.scrollWidth-U.offsetWidth;var ee=document.body,P=document.documentElement;return Math.max(ee.scrollWidth,ee.offsetWidth,P.clientWidth,P.scrollWidth,P.offsetWidth)},_=function(W){var U=W.data.containerElement;if(U&&U!==document&&U!==document.body)return U.scrollHeight-U.offsetHeight;var ee=document.body,P=document.documentElement;return Math.max(ee.scrollHeight,ee.offsetHeight,P.clientHeight,P.scrollHeight,P.offsetHeight)},M=function Z(W,U,ee){var P=U.data;if(!U.ignoreCancelEvents&&P.cancel){v.default.registered.end&&v.default.registered.end(P.to,P.target,P.currentPositionY);return}if(P.delta=Math.round(P.targetPosition-P.startPosition),P.start===null&&(P.start=ee),P.progress=ee-P.start,P.percent=P.progress>=P.duration?1:W(P.progress/P.duration),P.currentPosition=P.startPosition+Math.ceil(P.delta*P.percent),P.containerElement&&P.containerElement!==document&&P.containerElement!==document.body?U.horizontal?P.containerElement.scrollLeft=P.currentPosition:P.containerElement.scrollTop=P.currentPosition:U.horizontal?window.scrollTo(P.currentPosition,0):window.scrollTo(0,P.currentPosition),P.percent<1){var we=Z.bind(null,W,U);R.call(window,we);return}v.default.registered.end&&v.default.registered.end(P.to,P.target,P.currentPosition)},C=function(W){W.data.containerElement=W?W.containerId?document.getElementById(W.containerId):W.container&&W.container.nodeType?W.container:document:null},Q=function(W,U,ee,P){U.data=U.data||j(),window.clearTimeout(U.data.delayTimeout);var we=function(){U.data.cancel=!0};if(d.default.subscribe(we),C(U),U.data.start=null,U.data.cancel=!1,U.data.startPosition=U.horizontal?x(U):T(U),U.data.targetPosition=U.absolute?W:W+U.data.startPosition,U.data.startPosition===U.data.targetPosition){v.default.registered.end&&v.default.registered.end(U.data.to,U.data.target,U.data.currentPosition);return}U.data.delta=Math.round(U.data.targetPosition-U.data.startPosition),U.data.duration=b(U.duration)(U.data.delta),U.data.duration=isNaN(parseFloat(U.data.duration))?1e3:parseFloat(U.data.duration),U.data.to=ee,U.data.target=P;var K=p(U),se=M.bind(null,K,U);if(U&&U.delay>0){U.data.delayTimeout=window.setTimeout(function(){v.default.registered.begin&&v.default.registered.begin(U.data.to,U.data.target),R.call(window,se)},U.delay);return}v.default.registered.begin&&v.default.registered.begin(U.data.to,U.data.target),R.call(window,se)},V=function(W){return W=l({},W),W.data=W.data||j(),W.absolute=!0,W},$=function(W){Q(0,V(W))},J=function(W,U){Q(W,V(U))},ie=function(W){W=V(W),C(W),Q(W.horizontal?E(W):_(W),W)},F=function(W,U){U=V(U),C(U);var ee=U.horizontal?x(U):T(U);Q(W+ee,U)};return zr.default={animateTopScroll:Q,getAnimationType:p,scrollToTop:$,scrollToBottom:ie,scrollTo:J,scrollMore:F},zr}var u0;function Ir(){if(u0)return _r;u0=1,Object.defineProperty(_r,"__esModule",{value:!0});var l=Object.assign||function(b){for(var w=1;w<arguments.length;w++){var R=arguments[w];for(var j in R)Object.prototype.hasOwnProperty.call(R,j)&&(b[j]=R[j])}return b},r=Pr(),u=v(r),o=sh(),c=v(o),d=$u(),h=v(d);function v(b){return b&&b.__esModule?b:{default:b}}var g={},p=void 0;return _r.default={unmount:function(){g={}},register:function(w,R){g[w]=R},unregister:function(w){delete g[w]},get:function(w){return g[w]||document.getElementById(w)||document.getElementsByName(w)[0]||document.getElementsByClassName(w)[0]},setActiveLink:function(w){return p=w},getActiveLink:function(){return p},scrollTo:function(w,R){var j=this.get(w);if(!j){console.warn("target Element not found");return}R=l({},R,{absolute:!1});var x=R.containerId,T=R.container,E=void 0;x?E=document.getElementById(x):T&&T.nodeType?E=T:E=document,R.absolute=!0;var _=R.horizontal,M=u.default.scrollOffset(E,j,_)+(R.offset||0);if(!R.smooth){h.default.registered.begin&&h.default.registered.begin(w,j),E===document?R.horizontal?window.scrollTo(M,0):window.scrollTo(0,M):E.scrollTop=M,h.default.registered.end&&h.default.registered.end(w,j);return}c.default.animateTopScroll(M,R,w,j)}},_r}var Tu={exports:{}},Ou,c0;function ev(){if(c0)return Ou;c0=1;var l="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";return Ou=l,Ou}var Ru,f0;function tv(){if(f0)return Ru;f0=1;var l=ev();function r(){}function u(){}return u.resetWarningCache=r,Ru=function(){function o(h,v,g,p,b,w){if(w!==l){var R=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw R.name="Invariant Violation",R}}o.isRequired=o;function c(){return o}var d={array:o,bigint:o,bool:o,func:o,number:o,object:o,string:o,symbol:o,any:o,arrayOf:c,element:o,elementType:o,instanceOf:c,node:o,objectOf:c,oneOf:c,oneOfType:c,shape:c,exact:c,checkPropTypes:u,resetWarningCache:r};return d.PropTypes=d,d},Ru}var d0;function es(){return d0||(d0=1,Tu.exports=tv()()),Tu.exports}var Br={},m0;function oh(){if(m0)return Br;m0=1,Object.defineProperty(Br,"__esModule",{value:!0}),Ku();var l=Pr(),r=u(l);function u(c){return c&&c.__esModule?c:{default:c}}var o={mountFlag:!1,initialized:!1,scroller:null,containers:{},mount:function(d){this.scroller=d,this.handleHashChange=this.handleHashChange.bind(this),window.addEventListener("hashchange",this.handleHashChange),this.initStateFromHash(),this.mountFlag=!0},mapContainer:function(d,h){this.containers[d]=h},isMounted:function(){return this.mountFlag},isInitialized:function(){return this.initialized},initStateFromHash:function(){var d=this,h=this.getHash();h?window.setTimeout(function(){d.scrollTo(h,!0),d.initialized=!0},10):this.initialized=!0},scrollTo:function(d,h){var v=this.scroller,g=v.get(d);if(g&&(h||d!==v.getActiveLink())){var p=this.containers[d]||document;v.scrollTo(d,{container:p})}},getHash:function(){return r.default.getHash()},changeHash:function(d,h){this.isInitialized()&&r.default.getHash()!==d&&r.default.updateHash(d,h)},handleHashChange:function(){this.scrollTo(this.getHash())},unmount:function(){this.scroller=null,this.containers=null,window.removeEventListener("hashchange",this.handleHashChange)}};return Br.default=o,Br}var h0;function Wu(){if(h0)return Ar;h0=1,Object.defineProperty(Ar,"__esModule",{value:!0});var l=Object.assign||function(_){for(var M=1;M<arguments.length;M++){var C=arguments[M];for(var Q in C)Object.prototype.hasOwnProperty.call(C,Q)&&(_[Q]=C[Q])}return _},r=function(){function _(M,C){for(var Q=0;Q<C.length;Q++){var V=C[Q];V.enumerable=V.enumerable||!1,V.configurable=!0,"value"in V&&(V.writable=!0),Object.defineProperty(M,V.key,V)}}return function(M,C,Q){return C&&_(M.prototype,C),Q&&_(M,Q),M}}(),u=ma(),o=R(u),c=Ju(),d=R(c),h=Ir(),v=R(h),g=es(),p=R(g),b=oh(),w=R(b);function R(_){return _&&_.__esModule?_:{default:_}}function j(_,M){if(!(_ instanceof M))throw new TypeError("Cannot call a class as a function")}function x(_,M){if(!_)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return M&&(typeof M=="object"||typeof M=="function")?M:_}function T(_,M){if(typeof M!="function"&&M!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof M);_.prototype=Object.create(M&&M.prototype,{constructor:{value:_,enumerable:!1,writable:!0,configurable:!0}}),M&&(Object.setPrototypeOf?Object.setPrototypeOf(_,M):_.__proto__=M)}var E={to:p.default.string.isRequired,containerId:p.default.string,container:p.default.object,activeClass:p.default.string,activeStyle:p.default.object,spy:p.default.bool,horizontal:p.default.bool,smooth:p.default.oneOfType([p.default.bool,p.default.string]),offset:p.default.number,delay:p.default.number,isDynamic:p.default.bool,onClick:p.default.func,duration:p.default.oneOfType([p.default.number,p.default.func]),absolute:p.default.bool,onSetActive:p.default.func,onSetInactive:p.default.func,ignoreCancelEvents:p.default.bool,hashSpy:p.default.bool,saveHashHistory:p.default.bool,spyThrottle:p.default.number};return Ar.default=function(_,M){var C=M||v.default,Q=function($){T(J,$);function J(ie){j(this,J);var F=x(this,(J.__proto__||Object.getPrototypeOf(J)).call(this,ie));return V.call(F),F.state={active:!1},F.beforeUnmountCallbacks=[],F}return r(J,[{key:"getScrollSpyContainer",value:function(){var F=this.props.containerId,Z=this.props.container;return F&&!Z?document.getElementById(F):Z&&Z.nodeType?Z:document}},{key:"componentDidMount",value:function(){if(this.props.spy||this.props.hashSpy){var F=this.getScrollSpyContainer();if(!d.default.isMounted(F)){var Z=d.default.mount(F,this.props.spyThrottle);this.beforeUnmountCallbacks.push(Z)}this.props.hashSpy&&(w.default.isMounted()||w.default.mount(C),w.default.mapContainer(this.props.to,F)),d.default.addSpyHandler(this.spyHandler,F),this.setState({container:F})}}},{key:"componentWillUnmount",value:function(){d.default.unmount(this.stateHandler,this.spyHandler),this.beforeUnmountCallbacks.forEach(function(F){return F()})}},{key:"render",value:function(){var F="";this.state&&this.state.active?F=((this.props.className||"")+" "+(this.props.activeClass||"active")).trim():F=this.props.className;var Z={};this.state&&this.state.active?Z=l({},this.props.style,this.props.activeStyle):Z=l({},this.props.style);var W=l({},this.props);for(var U in E)W.hasOwnProperty(U)&&delete W[U];return W.className=F,W.style=Z,W.onClick=this.handleClick,o.default.createElement(_,W)}}]),J}(o.default.PureComponent),V=function(){var J=this;this.scrollTo=function(ie,F){C.scrollTo(ie,l({},J.state,F))},this.handleClick=function(ie){J.props.onClick&&J.props.onClick(ie),ie.stopPropagation&&ie.stopPropagation(),ie.preventDefault&&ie.preventDefault(),J.scrollTo(J.props.to,J.props)},this.spyHandler=function(ie,F){var Z=J.getScrollSpyContainer();if(!(w.default.isMounted()&&!w.default.isInitialized())){var W=J.props.horizontal,U=J.props.to,ee=null,P=void 0,we=void 0;if(W){var K=0,se=0,te=0;if(Z.getBoundingClientRect){var be=Z.getBoundingClientRect();te=be.left}if(!ee||J.props.isDynamic){if(ee=C.get(U),!ee)return;var O=ee.getBoundingClientRect();K=O.left-te+ie,se=K+O.width}var G=ie-J.props.offset;P=G>=Math.floor(K)&&G<Math.floor(se),we=G<Math.floor(K)||G>=Math.floor(se)}else{var ae=0,ne=0,I=0;if(Z.getBoundingClientRect){var he=Z.getBoundingClientRect();I=he.top}if(!ee||J.props.isDynamic){if(ee=C.get(U),!ee)return;var fe=ee.getBoundingClientRect();ae=fe.top-I+F,ne=ae+fe.height}var ze=F-J.props.offset;P=ze>=Math.floor(ae)&&ze<Math.floor(ne),we=ze<Math.floor(ae)||ze>=Math.floor(ne)}var ue=C.getActiveLink();if(we){if(U===ue&&C.setActiveLink(void 0),J.props.hashSpy&&w.default.getHash()===U){var Ee=J.props.saveHashHistory,je=Ee===void 0?!1:Ee;w.default.changeHash("",je)}J.props.spy&&J.state.active&&(J.setState({active:!1}),J.props.onSetInactive&&J.props.onSetInactive(U,ee))}if(P&&(ue!==U||J.state.active===!1)){C.setActiveLink(U);var tt=J.props.saveHashHistory,Ua=tt===void 0?!1:tt;J.props.hashSpy&&w.default.changeHash(U,Ua),J.props.spy&&(J.setState({active:!0}),J.props.onSetActive&&J.props.onSetActive(U,ee))}}}};return Q.propTypes=E,Q.defaultProps={offset:0},Q},Ar}var p0;function av(){if(p0)return Rr;p0=1,Object.defineProperty(Rr,"__esModule",{value:!0});var l=ma(),r=c(l),u=Wu(),o=c(u);function c(p){return p&&p.__esModule?p:{default:p}}function d(p,b){if(!(p instanceof b))throw new TypeError("Cannot call a class as a function")}function h(p,b){if(!p)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return b&&(typeof b=="object"||typeof b=="function")?b:p}function v(p,b){if(typeof b!="function"&&b!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof b);p.prototype=Object.create(b&&b.prototype,{constructor:{value:p,enumerable:!1,writable:!0,configurable:!0}}),b&&(Object.setPrototypeOf?Object.setPrototypeOf(p,b):p.__proto__=b)}var g=function(p){v(b,p);function b(){var w,R,j,x;d(this,b);for(var T=arguments.length,E=Array(T),_=0;_<T;_++)E[_]=arguments[_];return x=(R=(j=h(this,(w=b.__proto__||Object.getPrototypeOf(b)).call.apply(w,[this].concat(E))),j),j.render=function(){return r.default.createElement("a",j.props,j.props.children)},R),h(j,x)}return b}(r.default.Component);return Rr.default=(0,o.default)(g),Rr}var Hr={},g0;function nv(){if(g0)return Hr;g0=1,Object.defineProperty(Hr,"__esModule",{value:!0});var l=function(){function b(w,R){for(var j=0;j<R.length;j++){var x=R[j];x.enumerable=x.enumerable||!1,x.configurable=!0,"value"in x&&(x.writable=!0),Object.defineProperty(w,x.key,x)}}return function(w,R,j){return R&&b(w.prototype,R),j&&b(w,j),w}}(),r=ma(),u=d(r),o=Wu(),c=d(o);function d(b){return b&&b.__esModule?b:{default:b}}function h(b,w){if(!(b instanceof w))throw new TypeError("Cannot call a class as a function")}function v(b,w){if(!b)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return w&&(typeof w=="object"||typeof w=="function")?w:b}function g(b,w){if(typeof w!="function"&&w!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof w);b.prototype=Object.create(w&&w.prototype,{constructor:{value:b,enumerable:!1,writable:!0,configurable:!0}}),w&&(Object.setPrototypeOf?Object.setPrototypeOf(b,w):b.__proto__=w)}var p=function(b){g(w,b);function w(){return h(this,w),v(this,(w.__proto__||Object.getPrototypeOf(w)).apply(this,arguments))}return l(w,[{key:"render",value:function(){return u.default.createElement("button",this.props,this.props.children)}}]),w}(u.default.Component);return Hr.default=(0,c.default)(p),Hr}var Lr={},Ur={},v0;function uh(){if(v0)return Ur;v0=1,Object.defineProperty(Ur,"__esModule",{value:!0});var l=Object.assign||function(j){for(var x=1;x<arguments.length;x++){var T=arguments[x];for(var E in T)Object.prototype.hasOwnProperty.call(T,E)&&(j[E]=T[E])}return j},r=function(){function j(x,T){for(var E=0;E<T.length;E++){var _=T[E];_.enumerable=_.enumerable||!1,_.configurable=!0,"value"in _&&(_.writable=!0),Object.defineProperty(x,_.key,_)}}return function(x,T,E){return T&&j(x.prototype,T),E&&j(x,E),x}}(),u=ma(),o=p(u),c=Yu();p(c);var d=Ir(),h=p(d),v=es(),g=p(v);function p(j){return j&&j.__esModule?j:{default:j}}function b(j,x){if(!(j instanceof x))throw new TypeError("Cannot call a class as a function")}function w(j,x){if(!j)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return x&&(typeof x=="object"||typeof x=="function")?x:j}function R(j,x){if(typeof x!="function"&&x!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof x);j.prototype=Object.create(x&&x.prototype,{constructor:{value:j,enumerable:!1,writable:!0,configurable:!0}}),x&&(Object.setPrototypeOf?Object.setPrototypeOf(j,x):j.__proto__=x)}return Ur.default=function(j){var x=function(T){R(E,T);function E(_){b(this,E);var M=w(this,(E.__proto__||Object.getPrototypeOf(E)).call(this,_));return M.childBindings={domNode:null},M}return r(E,[{key:"componentDidMount",value:function(){if(typeof window>"u")return!1;this.registerElems(this.props.name)}},{key:"componentDidUpdate",value:function(M){this.props.name!==M.name&&this.registerElems(this.props.name)}},{key:"componentWillUnmount",value:function(){if(typeof window>"u")return!1;h.default.unregister(this.props.name)}},{key:"registerElems",value:function(M){h.default.register(M,this.childBindings.domNode)}},{key:"render",value:function(){return o.default.createElement(j,l({},this.props,{parentBindings:this.childBindings}))}}]),E}(o.default.Component);return x.propTypes={name:g.default.string,id:g.default.string},x},Ur}var y0;function lv(){if(y0)return Lr;y0=1,Object.defineProperty(Lr,"__esModule",{value:!0});var l=Object.assign||function(j){for(var x=1;x<arguments.length;x++){var T=arguments[x];for(var E in T)Object.prototype.hasOwnProperty.call(T,E)&&(j[E]=T[E])}return j},r=function(){function j(x,T){for(var E=0;E<T.length;E++){var _=T[E];_.enumerable=_.enumerable||!1,_.configurable=!0,"value"in _&&(_.writable=!0),Object.defineProperty(x,_.key,_)}}return function(x,T,E){return T&&j(x.prototype,T),E&&j(x,E),x}}(),u=ma(),o=g(u),c=uh(),d=g(c),h=es(),v=g(h);function g(j){return j&&j.__esModule?j:{default:j}}function p(j,x){if(!(j instanceof x))throw new TypeError("Cannot call a class as a function")}function b(j,x){if(!j)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return x&&(typeof x=="object"||typeof x=="function")?x:j}function w(j,x){if(typeof x!="function"&&x!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof x);j.prototype=Object.create(x&&x.prototype,{constructor:{value:j,enumerable:!1,writable:!0,configurable:!0}}),x&&(Object.setPrototypeOf?Object.setPrototypeOf(j,x):j.__proto__=x)}var R=function(j){w(x,j);function x(){return p(this,x),b(this,(x.__proto__||Object.getPrototypeOf(x)).apply(this,arguments))}return r(x,[{key:"render",value:function(){var E=this,_=l({},this.props);return delete _.name,_.parentBindings&&delete _.parentBindings,o.default.createElement("div",l({},_,{ref:function(C){E.props.parentBindings.domNode=C}}),this.props.children)}}]),x}(o.default.Component);return R.propTypes={name:v.default.string,id:v.default.string},Lr.default=(0,d.default)(R),Lr}var Au,b0;function iv(){if(b0)return Au;b0=1;var l=Object.assign||function(R){for(var j=1;j<arguments.length;j++){var x=arguments[j];for(var T in x)Object.prototype.hasOwnProperty.call(x,T)&&(R[T]=x[T])}return R},r=function(){function R(j,x){for(var T=0;T<x.length;T++){var E=x[T];E.enumerable=E.enumerable||!1,E.configurable=!0,"value"in E&&(E.writable=!0),Object.defineProperty(j,E.key,E)}}return function(j,x,T){return x&&R(j.prototype,x),T&&R(j,T),j}}();function u(R,j){if(!(R instanceof j))throw new TypeError("Cannot call a class as a function")}function o(R,j){if(!R)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return j&&(typeof j=="object"||typeof j=="function")?j:R}function c(R,j){if(typeof j!="function"&&j!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof j);R.prototype=Object.create(j&&j.prototype,{constructor:{value:R,enumerable:!1,writable:!0,configurable:!0}}),j&&(Object.setPrototypeOf?Object.setPrototypeOf(R,j):R.__proto__=j)}var d=ma();Yu(),Pr();var h=Ju(),v=Ir(),g=es(),p=oh(),b={to:g.string.isRequired,containerId:g.string,container:g.object,activeClass:g.string,spy:g.bool,smooth:g.oneOfType([g.bool,g.string]),offset:g.number,delay:g.number,isDynamic:g.bool,onClick:g.func,duration:g.oneOfType([g.number,g.func]),absolute:g.bool,onSetActive:g.func,onSetInactive:g.func,ignoreCancelEvents:g.bool,hashSpy:g.bool,spyThrottle:g.number},w={Scroll:function(j,x){console.warn("Helpers.Scroll is deprecated since v1.7.0");var T=x||v,E=function(M){c(C,M);function C(Q){u(this,C);var V=o(this,(C.__proto__||Object.getPrototypeOf(C)).call(this,Q));return _.call(V),V.state={active:!1},V}return r(C,[{key:"getScrollSpyContainer",value:function(){var V=this.props.containerId,$=this.props.container;return V?document.getElementById(V):$&&$.nodeType?$:document}},{key:"componentDidMount",value:function(){if(this.props.spy||this.props.hashSpy){var V=this.getScrollSpyContainer();h.isMounted(V)||h.mount(V,this.props.spyThrottle),this.props.hashSpy&&(p.isMounted()||p.mount(T),p.mapContainer(this.props.to,V)),this.props.spy&&h.addStateHandler(this.stateHandler),h.addSpyHandler(this.spyHandler,V),this.setState({container:V})}}},{key:"componentWillUnmount",value:function(){h.unmount(this.stateHandler,this.spyHandler)}},{key:"render",value:function(){var V="";this.state&&this.state.active?V=((this.props.className||"")+" "+(this.props.activeClass||"active")).trim():V=this.props.className;var $=l({},this.props);for(var J in b)$.hasOwnProperty(J)&&delete $[J];return $.className=V,$.onClick=this.handleClick,d.createElement(j,$)}}]),C}(d.Component),_=function(){var C=this;this.scrollTo=function(Q,V){T.scrollTo(Q,l({},C.state,V))},this.handleClick=function(Q){C.props.onClick&&C.props.onClick(Q),Q.stopPropagation&&Q.stopPropagation(),Q.preventDefault&&Q.preventDefault(),C.scrollTo(C.props.to,C.props)},this.stateHandler=function(){T.getActiveLink()!==C.props.to&&(C.state!==null&&C.state.active&&C.props.onSetInactive&&C.props.onSetInactive(),C.setState({active:!1}))},this.spyHandler=function(Q){var V=C.getScrollSpyContainer();if(!(p.isMounted()&&!p.isInitialized())){var $=C.props.to,J=null,ie=0,F=0,Z=0;if(V.getBoundingClientRect){var W=V.getBoundingClientRect();Z=W.top}if(!J||C.props.isDynamic){if(J=T.get($),!J)return;var U=J.getBoundingClientRect();ie=U.top-Z+Q,F=ie+U.height}var ee=Q-C.props.offset,P=ee>=Math.floor(ie)&&ee<Math.floor(F),we=ee<Math.floor(ie)||ee>=Math.floor(F),K=T.getActiveLink();if(we)return $===K&&T.setActiveLink(void 0),C.props.hashSpy&&p.getHash()===$&&p.changeHash(),C.props.spy&&C.state.active&&(C.setState({active:!1}),C.props.onSetInactive&&C.props.onSetInactive()),h.updateStates();if(P&&K!==$)return T.setActiveLink($),C.props.hashSpy&&p.changeHash($),C.props.spy&&(C.setState({active:!0}),C.props.onSetActive&&C.props.onSetActive($)),h.updateStates()}}};return E.propTypes=b,E.defaultProps={offset:0},E},Element:function(j){console.warn("Helpers.Element is deprecated since v1.7.0");var x=function(T){c(E,T);function E(_){u(this,E);var M=o(this,(E.__proto__||Object.getPrototypeOf(E)).call(this,_));return M.childBindings={domNode:null},M}return r(E,[{key:"componentDidMount",value:function(){if(typeof window>"u")return!1;this.registerElems(this.props.name)}},{key:"componentDidUpdate",value:function(M){this.props.name!==M.name&&this.registerElems(this.props.name)}},{key:"componentWillUnmount",value:function(){if(typeof window>"u")return!1;v.unregister(this.props.name)}},{key:"registerElems",value:function(M){v.register(M,this.childBindings.domNode)}},{key:"render",value:function(){return d.createElement(j,l({},this.props,{parentBindings:this.childBindings}))}}]),E}(d.Component);return x.propTypes={name:g.string,id:g.string},x}};return Au=w,Au}var x0;function rv(){if(x0)return De;x0=1,Object.defineProperty(De,"__esModule",{value:!0}),De.Helpers=De.ScrollElement=De.ScrollLink=De.animateScroll=De.scrollSpy=De.Events=De.scroller=De.Element=De.Button=De.Link=void 0;var l=av(),r=Q(l),u=nv(),o=Q(u),c=lv(),d=Q(c),h=Ir(),v=Q(h),g=$u(),p=Q(g),b=Ju(),w=Q(b),R=sh(),j=Q(R),x=Wu(),T=Q(x),E=uh(),_=Q(E),M=iv(),C=Q(M);function Q(V){return V&&V.__esModule?V:{default:V}}return De.Link=r.default,De.Button=o.default,De.Element=d.default,De.scroller=v.default,De.Events=p.default,De.scrollSpy=w.default,De.animateScroll=j.default,De.ScrollLink=T.default,De.ScrollElement=_.default,De.Helpers=C.default,De.default={Link:r.default,Button:o.default,Element:d.default,scroller:v.default,Events:p.default,scrollSpy:w.default,animateScroll:j.default,ScrollLink:T.default,ScrollElement:_.default,Helpers:C.default},De}var un=rv();function ch(){const[l,r]=D.useState(!1),[u,o]=D.useState("dark"),c=D.useRef(null);D.useEffect(()=>{const g=localStorage.getItem("theme")||"dark";o(g),document.documentElement.setAttribute("data-theme",g)},[]);const d=D.useCallback(()=>{const g=u==="dark"?"light":"dark";o(g),document.documentElement.setAttribute("data-theme",g),localStorage.setItem("theme",g)},[u]),h=D.useCallback(g=>{const p=document.getElementById(g);p&&(p.scrollIntoView({behavior:"smooth"}),window.innerWidth<=900&&r(!1))},[]);D.useEffect(()=>{function g(p){c.current&&!c.current.contains(p.target)&&!p.target.closest(".header-menu-toggle")&&r(!1)}return document.addEventListener("mousedown",g),()=>document.removeEventListener("mousedown",g)},[]);const v=[{name:"Accueil",id:"home"},{name:"A Propos",id:"about"},{name:"Projets",id:"projects"},{name:"Services",id:"services"},{name:"Blog",id:"news"},{name:"Equipe",id:"team"},{name:"Nous Contacter",id:"contacts"}];return f.jsxs("header",{className:"header",children:[f.jsx("div",{className:"header-logo",children:"DigiScia"}),f.jsxs("button",{className:"header-menu-toggle",onClick:()=>r(!l),"aria-expanded":l,"aria-label":"Toggle navigation menu",children:[f.jsx("span",{}),f.jsx("span",{}),f.jsx("span",{})]}),f.jsx("nav",{className:`header-navbar ${l?"active":""}`,ref:c,"aria-hidden":!l&&window.innerWidth<=900,children:f.jsx("ul",{children:v.map(g=>f.jsx("li",{children:f.jsx("a",{href:`#${g.id}`,onClick:p=>{p.preventDefault(),h(g.id)},children:g.name})},g.id))})}),f.jsx("div",{className:"header-theme-toggle",children:f.jsxs("label",{className:"switch",htmlFor:"themeToggle",children:[f.jsx("input",{id:"themeToggle",type:"checkbox",className:"input",checked:u==="light",onChange:d,"aria-label":`Switch to ${u==="dark"?"light":"dark"} mode`}),f.jsx("span",{className:"slider"})]})})]})}function fh(){const l=new Date().getFullYear(),r=[{name:"LinkedIn",href:"https://www.linkedin.com",icon:f.jsx("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"currentColor",children:f.jsx("path",{d:"M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"})})},{name:"Instagram",href:"https://www.instagram.com",icon:f.jsx("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"currentColor",children:f.jsx("path",{d:"M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"})})},{name:"Facebook",href:"https://www.facebook.com",icon:f.jsx("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"currentColor",children:f.jsx("path",{d:"M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"})})},{name:"Discord",href:"https://discord.gg/enKs5Pm8",icon:f.jsx("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"currentColor",children:f.jsx("path",{d:"M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028 14.09 14.09 0 0 0 1.226-1.994.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z"})})}],u=[{icon:f.jsxs("svg",{width:"18",height:"18",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[f.jsx("path",{d:"M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"}),f.jsx("circle",{cx:"12",cy:"10",r:"3"})]}),text:"Ouagadougou, Burkina Faso",type:"location"},{icon:f.jsx("svg",{width:"18",height:"18",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:f.jsx("path",{d:"M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"})}),lines:["+212 716-990681","+226 57 28 70 25"],type:"phone"},{icon:f.jsxs("svg",{width:"18",height:"18",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[f.jsx("path",{d:"M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"}),f.jsx("polyline",{points:"22,6 12,13 2,6"})]}),text:"digiscia.infos@gmail.com",type:"email"}];return f.jsx(f.Fragment,{children:f.jsx("footer",{className:"footer",children:f.jsxs("div",{className:"footer-container",children:[f.jsxs("div",{className:"footer-grid",children:[f.jsxs("div",{className:"footer-brand",children:[f.jsxs("div",{className:"footer-logo-container",children:[f.jsx("div",{className:"footer-logo-icon",children:f.jsx("svg",{viewBox:"0 0 100 100",fill:"#000033",children:f.jsx("path",{d:"M30,30 L30,70 L45,70 C55,70 62,63 62,52 C62,48 60,44 57,41 C60,38 62,34 62,30 C62,19 55,12 45,12 L30,12 Z M40,22 L45,22 C49,22 52,25 52,30 C52,35 49,38 45,38 L40,38 Z M40,48 L45,48 C49,48 52,51 52,56 C52,61 49,64 45,64 L40,64 Z"})})}),f.jsx("span",{className:"footer-logo-text",children:"DigiScia"})]}),f.jsx("p",{className:"footer-description",children:"Excellence en solutions numériques. Nous transformons vos idées en réalité digitale avec expertise et innovation."})]}),f.jsxs("div",{className:"footer-section",children:[f.jsx("h3",{className:"footer-title",children:"Contact"}),u.map((o,c)=>f.jsxs("div",{className:"contact-item",children:[f.jsx("span",{className:"contact-icon",children:o.icon}),o.type==="phone"?f.jsx("div",{className:"phone-lines",children:o.lines.map((d,h)=>f.jsx("span",{children:d},h))}):f.jsx("span",{children:o.text})]},c))]}),f.jsxs("div",{className:"footer-section",children:[f.jsx("h3",{className:"footer-title",children:"Suivez-nous"}),f.jsx("div",{className:"social-links",children:r.map(o=>f.jsx("a",{href:o.href,target:"_blank",rel:"noopener noreferrer",className:"social-link","aria-label":o.name,children:o.icon},o.name))})]})]}),f.jsx("div",{className:"footer-divider"}),f.jsxs("div",{className:"footer-bottom",children:[f.jsx("div",{className:"footer-copyright",children:f.jsxs("span",{children:["© ",l," DigiScia. Tous droits réservés."]})}),f.jsxs("div",{className:"footer-links",children:[f.jsx("a",{href:"#privacy",className:"footer-link",children:"Confidentialité"}),f.jsx("a",{href:"#terms",className:"footer-link",children:"Conditions"}),f.jsx("a",{href:"#legal",className:"footer-link",children:"Mentions légales"})]})]})]})})})}const sv="/assets/logobleu-DSiZOGcL.jpg",dh=D.memo(()=>{const l=["Data Science","Intelligence Artificielle","Management de Données","Automatisation","Agents IA","Analyse de Données","Aide à la decision","Ingenierie de Données","Securité des Données","Applications Web & Mobile"],[r,u]=D.useState(0),[o,c]=D.useState(0),[d,h]=D.useState(!1),[v,g]=D.useState(""),p=120,b=60,w=2e3;return D.useEffect(()=>{const R=l[r];if(d)if(o>0){const j=setTimeout(()=>{g(R.substring(0,o-1)),c(o-1)},b);return()=>clearTimeout(j)}else h(!1),u(j=>(j+1)%l.length);else if(o<R.length){const j=setTimeout(()=>{g(R.substring(0,o+1)),c(o+1)},p);return()=>clearTimeout(j)}else{const j=setTimeout(()=>{h(!0)},w);return()=>clearTimeout(j)}},[o,d,r,l]),f.jsxs("span",{className:"tagline-text",children:[v,f.jsx("span",{className:"typing-cursor","aria-hidden":"true",children:"_"})]})});dh.displayName="TaglineRotator";function ov(){const[l,r]=D.useState([]),u=D.useRef(null);D.useEffect(()=>{r((()=>{const v=window.innerWidth<768?30:50;return Array.from({length:v},(g,p)=>({id:p,x:Math.random()*100,y:Math.random()*100,vx:(Math.random()-.5)*.05,vy:(Math.random()-.5)*.05,size:Math.random()*2+1}))})())},[]),D.useEffect(()=>{const h=u.current;if(!h)return;const v=h.getContext("2d");let g,p=l;const b=()=>{h.width=window.innerWidth,h.height=window.innerHeight};b(),window.addEventListener("resize",b);const w=()=>{h&&(v.clearRect(0,0,h.width,h.height),p=p.map(R=>{let j=R.x+R.vx,x=R.y+R.vy;return(j<0||j>100)&&(R.vx*=-1),(x<0||x>100)&&(R.vy*=-1),{...R,x:j,y:x}}),v.lineWidth=.5,p.forEach((R,j)=>{p.slice(j+1).forEach(x=>{const T=(x.x-R.x)*h.width/100,E=(x.y-R.y)*h.height/100,_=Math.sqrt(T*T+E*E);if(_<150){const M=(1-_/150)*.3;v.strokeStyle=`rgba(91, 124, 255, ${M})`,v.beginPath(),v.moveTo(R.x*h.width/100,R.y*h.height/100),v.lineTo(x.x*h.width/100,x.y*h.height/100),v.stroke()}})}),p.forEach(R=>{v.fillStyle="rgba(91, 124, 255, 0.8)",v.beginPath(),v.arc(R.x*h.width/100,R.y*h.height/100,R.size,0,Math.PI*2),v.fill()}),g=requestAnimationFrame(w))};return p.length>0&&w(),()=>{cancelAnimationFrame(g),window.removeEventListener("resize",b)}},[l]);const o=D.useCallback(()=>{window.open("https://wa.me/212716990681","_blank")},[]),c=D.useCallback(h=>{h.preventDefault();const v=document.getElementById("contacts");v&&v.scrollIntoView({behavior:"smooth"})},[]),d=D.useCallback(()=>{window.scrollBy({top:window.innerHeight,behavior:"smooth"})},[]);return f.jsxs("section",{id:"home",className:"home-container",children:[f.jsx("canvas",{ref:u,className:"constellation-canvas","aria-hidden":"true"}),f.jsx("div",{className:"gradient-overlay","aria-hidden":"true"}),f.jsx("div",{className:"hero-section",children:f.jsxs("div",{className:"hero-content",children:[f.jsx("div",{className:"logo-container",children:f.jsx("img",{src:sv,alt:"DigiScia Logo",className:"hero-logo"})}),f.jsxs("div",{className:"hero-text",children:[f.jsx("h1",{className:"welcome-text",children:"Bienvenue sur"}),f.jsx("h2",{className:"brand-name",children:"DigiScia"}),f.jsx("h3",{className:"tagline",children:f.jsx(dh,{})}),f.jsxs("div",{className:"cta-buttons",children:[f.jsx("button",{className:"cta-button sponsoring",onClick:o,"aria-label":"Ouvrir WhatsApp pour un partenariat",children:"Partenariat"}),f.jsx("a",{href:"#contacts",className:"cta-button contact",onClick:c,"aria-label":"Naviguer vers la section contact",children:"Nous Contacter"})]})]})]})}),f.jsxs("div",{className:"scroll-indicator",onClick:d,"aria-label":"Défiler vers le bas",role:"button",tabIndex:0,children:[f.jsx("span",{className:"scroll-indicator-text",children:"Scroll"}),f.jsx("div",{className:"scroll-indicator-icon"})]})]})}var mh={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},S0=Bt.createContext&&Bt.createContext(mh),uv=["attr","size","title"];function cv(l,r){if(l==null)return{};var u=fv(l,r),o,c;if(Object.getOwnPropertySymbols){var d=Object.getOwnPropertySymbols(l);for(c=0;c<d.length;c++)o=d[c],!(r.indexOf(o)>=0)&&Object.prototype.propertyIsEnumerable.call(l,o)&&(u[o]=l[o])}return u}function fv(l,r){if(l==null)return{};var u={};for(var o in l)if(Object.prototype.hasOwnProperty.call(l,o)){if(r.indexOf(o)>=0)continue;u[o]=l[o]}return u}function Zr(){return Zr=Object.assign?Object.assign.bind():function(l){for(var r=1;r<arguments.length;r++){var u=arguments[r];for(var o in u)Object.prototype.hasOwnProperty.call(u,o)&&(l[o]=u[o])}return l},Zr.apply(this,arguments)}function w0(l,r){var u=Object.keys(l);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(l);r&&(o=o.filter(function(c){return Object.getOwnPropertyDescriptor(l,c).enumerable})),u.push.apply(u,o)}return u}function Kr(l){for(var r=1;r<arguments.length;r++){var u=arguments[r]!=null?arguments[r]:{};r%2?w0(Object(u),!0).forEach(function(o){dv(l,o,u[o])}):Object.getOwnPropertyDescriptors?Object.defineProperties(l,Object.getOwnPropertyDescriptors(u)):w0(Object(u)).forEach(function(o){Object.defineProperty(l,o,Object.getOwnPropertyDescriptor(u,o))})}return l}function dv(l,r,u){return r=mv(r),r in l?Object.defineProperty(l,r,{value:u,enumerable:!0,configurable:!0,writable:!0}):l[r]=u,l}function mv(l){var r=hv(l,"string");return typeof r=="symbol"?r:r+""}function hv(l,r){if(typeof l!="object"||!l)return l;var u=l[Symbol.toPrimitive];if(u!==void 0){var o=u.call(l,r);if(typeof o!="object")return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return(r==="string"?String:Number)(l)}function hh(l){return l&&l.map((r,u)=>Bt.createElement(r.tag,Kr({key:u},r.attr),hh(r.child)))}function La(l){return r=>Bt.createElement(pv,Zr({attr:Kr({},l.attr)},r),hh(l.child))}function pv(l){var r=u=>{var{attr:o,size:c,title:d}=l,h=cv(l,uv),v=c||u.size||"1em",g;return u.className&&(g=u.className),l.className&&(g=(g?g+" ":"")+l.className),Bt.createElement("svg",Zr({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},u.attr,o,h,{className:g,style:Kr(Kr({color:l.color||u.color},u.style),l.style),height:v,width:v,xmlns:"http://www.w3.org/2000/svg"}),d&&Bt.createElement("title",null,d),l.children)};return S0!==void 0?Bt.createElement(S0.Consumer,null,u=>r(u)):r(mh)}function E0(l){return La({attr:{viewBox:"0 0 576 512"},child:[{tag:"path",attr:{d:"M208 0c-29.9 0-54.7 20.5-61.8 48.2-.8 0-1.4-.2-2.2-.2-35.3 0-64 28.7-64 64 0 4.8.6 9.5 1.7 14C52.5 138 32 166.6 32 200c0 12.6 3.2 24.3 8.3 34.9C16.3 248.7 0 274.3 0 304c0 33.3 20.4 61.9 49.4 73.9-.9 4.6-1.4 9.3-1.4 14.1 0 39.8 32.2 72 72 72 4.1 0 8.1-.5 12-1.2 9.6 28.5 36.2 49.2 68 49.2 39.8 0 72-32.2 72-72V64c0-35.3-28.7-64-64-64zm368 304c0-29.7-16.3-55.3-40.3-69.1 5.2-10.6 8.3-22.3 8.3-34.9 0-33.4-20.5-62-49.7-74 1-4.5 1.7-9.2 1.7-14 0-35.3-28.7-64-64-64-.8 0-1.5.2-2.2.2C422.7 20.5 397.9 0 368 0c-35.3 0-64 28.6-64 64v376c0 39.8 32.2 72 72 72 31.8 0 58.4-20.7 68-49.2 3.9.7 7.9 1.2 12 1.2 39.8 0 72-32.2 72-72 0-4.8-.5-9.5-1.4-14.1 29-12 49.4-40.6 49.4-73.9z"},child:[]}]})(l)}function j0(l){return La({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M496 384H64V80c0-8.84-7.16-16-16-16H16C7.16 64 0 71.16 0 80v336c0 17.67 14.33 32 32 32h464c8.84 0 16-7.16 16-16v-32c0-8.84-7.16-16-16-16zM464 96H345.94c-21.38 0-32.09 25.85-16.97 40.97l32.4 32.4L288 242.75l-73.37-73.37c-12.5-12.5-32.76-12.5-45.25 0l-68.69 68.69c-6.25 6.25-6.25 16.38 0 22.63l22.62 22.62c6.25 6.25 16.38 6.25 22.63 0L192 237.25l73.37 73.37c12.5 12.5 32.76 12.5 45.25 0l96-96 32.4 32.4c15.12 15.12 40.97 4.41 40.97-16.97V112c.01-8.84-7.15-16-15.99-16z"},child:[]}]})(l)}function gv(l){return La({attr:{viewBox:"0 0 640 512"},child:[{tag:"path",attr:{d:"M512.1 191l-8.2 14.3c-3 5.3-9.4 7.5-15.1 5.4-11.8-4.4-22.6-10.7-32.1-18.6-4.6-3.8-5.8-10.5-2.8-15.7l8.2-14.3c-6.9-8-12.3-17.3-15.9-27.4h-16.5c-6 0-11.2-4.3-12.2-10.3-2-12-2.1-24.6 0-37.1 1-6 6.2-10.4 12.2-10.4h16.5c3.6-10.1 9-19.4 15.9-27.4l-8.2-14.3c-3-5.2-1.9-11.9 2.8-15.7 9.5-7.9 20.4-14.2 32.1-18.6 5.7-2.1 12.1.1 15.1 5.4l8.2 14.3c10.5-1.9 21.2-1.9 31.7 0L552 6.3c3-5.3 9.4-7.5 15.1-5.4 11.8 4.4 22.6 10.7 32.1 18.6 4.6 3.8 5.8 10.5 2.8 15.7l-8.2 14.3c6.9 8 12.3 17.3 15.9 27.4h16.5c6 0 11.2 4.3 12.2 10.3 2 12 2.1 24.6 0 37.1-1 6-6.2 10.4-12.2 10.4h-16.5c-3.6 10.1-9 19.4-15.9 27.4l8.2 14.3c3 5.2 1.9 11.9-2.8 15.7-9.5 7.9-20.4 14.2-32.1 18.6-5.7 2.1-12.1-.1-15.1-5.4l-8.2-14.3c-10.4 1.9-21.2 1.9-31.7 0zm-10.5-58.8c38.5 29.6 82.4-14.3 52.8-52.8-38.5-29.7-82.4 14.3-52.8 52.8zM386.3 286.1l33.7 16.8c10.1 5.8 14.5 18.1 10.5 29.1-8.9 24.2-26.4 46.4-42.6 65.8-7.4 8.9-20.2 11.1-30.3 5.3l-29.1-16.8c-16 13.7-34.6 24.6-54.9 31.7v33.6c0 11.6-8.3 21.6-19.7 23.6-24.6 4.2-50.4 4.4-75.9 0-11.5-2-20-11.9-20-23.6V418c-20.3-7.2-38.9-18-54.9-31.7L74 403c-10 5.8-22.9 3.6-30.3-5.3-16.2-19.4-33.3-41.6-42.2-65.7-4-10.9.4-23.2 10.5-29.1l33.3-16.8c-3.9-20.9-3.9-42.4 0-63.4L12 205.8c-10.1-5.8-14.6-18.1-10.5-29 8.9-24.2 26-46.4 42.2-65.8 7.4-8.9 20.2-11.1 30.3-5.3l29.1 16.8c16-13.7 34.6-24.6 54.9-31.7V57.1c0-11.5 8.2-21.5 19.6-23.5 24.6-4.2 50.5-4.4 76-.1 11.5 2 20 11.9 20 23.6v33.6c20.3 7.2 38.9 18 54.9 31.7l29.1-16.8c10-5.8 22.9-3.6 30.3 5.3 16.2 19.4 33.2 41.6 42.1 65.8 4 10.9.1 23.2-10 29.1l-33.7 16.8c3.9 21 3.9 42.5 0 63.5zm-117.6 21.1c59.2-77-28.7-164.9-105.7-105.7-59.2 77 28.7 164.9 105.7 105.7zm243.4 182.7l-8.2 14.3c-3 5.3-9.4 7.5-15.1 5.4-11.8-4.4-22.6-10.7-32.1-18.6-4.6-3.8-5.8-10.5-2.8-15.7l8.2-14.3c-6.9-8-12.3-17.3-15.9-27.4h-16.5c-6 0-11.2-4.3-12.2-10.3-2-12-2.1-24.6 0-37.1 1-6 6.2-10.4 12.2-10.4h16.5c3.6-10.1 9-19.4 15.9-27.4l-8.2-14.3c-3-5.2-1.9-11.9 2.8-15.7 9.5-7.9 20.4-14.2 32.1-18.6 5.7-2.1 12.1.1 15.1 5.4l8.2 14.3c10.5-1.9 21.2-1.9 31.7 0l8.2-14.3c3-5.3 9.4-7.5 15.1-5.4 11.8 4.4 22.6 10.7 32.1 18.6 4.6 3.8 5.8 10.5 2.8 15.7l-8.2 14.3c6.9 8 12.3 17.3 15.9 27.4h16.5c6 0 11.2 4.3 12.2 10.3 2 12 2.1 24.6 0 37.1-1 6-6.2 10.4-12.2 10.4h-16.5c-3.6 10.1-9 19.4-15.9 27.4l8.2 14.3c3 5.2 1.9 11.9-2.8 15.7-9.5 7.9-20.4 14.2-32.1 18.6-5.7 2.1-12.1-.1-15.1-5.4l-8.2-14.3c-10.4 1.9-21.2 1.9-31.7 0zM501.6 431c38.5 29.6 82.4-14.3 52.8-52.8-38.5-29.6-82.4 14.3-52.8 52.8z"},child:[]}]})(l)}function T0(l){return La({attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M448 73.143v45.714C448 159.143 347.667 192 224 192S0 159.143 0 118.857V73.143C0 32.857 100.333 0 224 0s224 32.857 224 73.143zM448 176v102.857C448 319.143 347.667 352 224 352S0 319.143 0 278.857V176c48.125 33.143 136.208 48.572 224 48.572S399.874 209.143 448 176zm0 160v102.857C448 479.143 347.667 512 224 512S0 479.143 0 438.857V336c48.125 33.143 136.208 48.572 224 48.572S399.874 369.143 448 336z"},child:[]}]})(l)}function vv(l){return La({attr:{viewBox:"0 0 640 512"},child:[{tag:"path",attr:{d:"M255.03 261.65c6.25 6.25 16.38 6.25 22.63 0l11.31-11.31c6.25-6.25 6.25-16.38 0-22.63L253.25 192l35.71-35.72c6.25-6.25 6.25-16.38 0-22.63l-11.31-11.31c-6.25-6.25-16.38-6.25-22.63 0l-58.34 58.34c-6.25 6.25-6.25 16.38 0 22.63l58.35 58.34zm96.01-11.3l11.31 11.31c6.25 6.25 16.38 6.25 22.63 0l58.34-58.34c6.25-6.25 6.25-16.38 0-22.63l-58.34-58.34c-6.25-6.25-16.38-6.25-22.63 0l-11.31 11.31c-6.25 6.25-6.25 16.38 0 22.63L386.75 192l-35.71 35.72c-6.25 6.25-6.25 16.38 0 22.63zM624 416H381.54c-.74 19.81-14.71 32-32.74 32H288c-18.69 0-33.02-17.47-32.77-32H16c-8.8 0-16 7.2-16 16v16c0 35.2 28.8 64 64 64h512c35.2 0 64-28.8 64-64v-16c0-8.8-7.2-16-16-16zM576 48c0-26.4-21.6-48-48-48H112C85.6 0 64 21.6 64 48v336h512V48zm-64 272H128V64h384v256z"},child:[]}]})(l)}function yv(l){return La({attr:{viewBox:"0 0 352 512"},child:[{tag:"path",attr:{d:"M96.06 454.35c.01 6.29 1.87 12.45 5.36 17.69l17.09 25.69a31.99 31.99 0 0 0 26.64 14.28h61.71a31.99 31.99 0 0 0 26.64-14.28l17.09-25.69a31.989 31.989 0 0 0 5.36-17.69l.04-38.35H96.01l.05 38.35zM0 176c0 44.37 16.45 84.85 43.56 115.78 16.52 18.85 42.36 58.23 52.21 91.45.04.26.07.52.11.78h160.24c.04-.26.07-.51.11-.78 9.85-33.22 35.69-72.6 52.21-91.45C335.55 260.85 352 220.37 352 176 352 78.61 272.91-.3 175.45 0 73.44.31 0 82.97 0 176zm176-80c-44.11 0-80 35.89-80 80 0 8.84-7.16 16-16 16s-16-7.16-16-16c0-61.76 50.24-112 112-112 8.84 0 16 7.16 16 16s-7.16 16-16 16z"},child:[]}]})(l)}function bv(l){return La({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M466.5 83.7l-192-80a48.15 48.15 0 0 0-36.9 0l-192 80C27.7 91.1 16 108.6 16 128c0 198.5 114.5 335.7 221.5 380.3 11.8 4.9 25.1 4.9 36.9 0C360.1 472.6 496 349.3 496 128c0-19.4-11.7-36.9-29.5-44.3zM256.1 446.3l-.1-381 175.9 73.3c-3.3 151.4-82.1 261.1-175.8 307.7z"},child:[]}]})(l)}function xv(l){return La({attr:{viewBox:"0 0 640 512"},child:[{tag:"path",attr:{d:"M96 224c35.3 0 64-28.7 64-64s-28.7-64-64-64-64 28.7-64 64 28.7 64 64 64zm448 0c35.3 0 64-28.7 64-64s-28.7-64-64-64-64 28.7-64 64 28.7 64 64 64zm32 32h-64c-17.6 0-33.5 7.1-45.1 18.6 40.3 22.1 68.9 62 75.1 109.4h66c17.7 0 32-14.3 32-32v-32c0-35.3-28.7-64-64-64zm-256 0c61.9 0 112-50.1 112-112S381.9 32 320 32 208 82.1 208 144s50.1 112 112 112zm76.8 32h-8.3c-20.8 10-43.9 16-68.5 16s-47.6-6-68.5-16h-8.3C179.6 288 128 339.6 128 403.2V432c0 26.5 21.5 48 48 48h288c26.5 0 48-21.5 48-48v-28.8c0-63.6-51.6-115.2-115.2-115.2zm-223.7-13.4C161.5 263.1 145.6 256 128 256H64c-35.3 0-64 28.7-64 64v32c0 17.7 14.3 32 32 32h65.9c6.3-47.4 34.9-87.3 75.2-109.4z"},child:[]}]})(l)}const Sv=`
@import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;600;700&family=Inter:wght@300;400;500;600&display=swap');

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: 'Inter', sans-serif;
  background: #00093D;
  color: #FFFFFF;
  overflow-x: hidden;
}

.about-container {
  position: relative;
  min-height: 100vh;
  width: 100%;
  background: #00093D;
  padding: clamp(2rem, 5vw, 5rem) clamp(1rem, 4vw, 2rem);
  overflow-x: hidden;
}

.about-container::before {
  content: '';
  position: fixed;
  top: -50%;
  right: -20%;
  width: 80%;
  height: 150%;
  background: radial-gradient(circle, rgba(91, 124, 255, 0.08) 0%, transparent 70%);
  z-index: 0;
  pointer-events: none;
}

.about-inner {
  width: 100%;
  max-width: 1400px;
  margin: 0 auto;
  position: relative;
  z-index: 1;
}

.animated-particles {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 0;
  overflow: hidden;
  pointer-events: none;
}

.particle {
  position: absolute;
  background: rgba(91, 124, 255, 0.4);
  border-radius: 50%;
  opacity: 0.05;
  filter: blur(1px);
  animation: float var(--duration) infinite linear;
  animation-delay: var(--delay);
}

@keyframes float {
  0% {
    transform: translateY(100vh) translateX(0) rotate(0deg);
    opacity: 0;
  }
  10% {
    opacity: 0.05;
  }
  90% {
    opacity: 0.05;
  }
  100% {
    transform: translateY(-100vh) translateX(100px) rotate(360deg);
    opacity: 0;
  }
}

.about-header {
  text-align: center;
  margin-bottom: clamp(4rem, 8vw, 8rem);
  position: relative;
  z-index: 1;
  animation: fadeInUp 1s ease-out;
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.about-title {
  font-size: clamp(2.5rem, 6vw, 5rem);
  font-weight: 700;
  line-height: 1.1;
  margin-bottom: clamp(1.5rem, 3vw, 2rem);
  font-family: 'Space Grotesk', sans-serif;
  letter-spacing: -0.02em;
}

.gradient-text {
  background: linear-gradient(135deg, #5B7CFF 0%, #FFFFFF 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  display: inline-block;
  font-weight: 700;
}

.about-subtitle {
  font-size: clamp(1.1rem, 2.5vw, 1.5rem);
  color: #B8C5E0;
  line-height: 1.7;
  max-width: 800px;
  margin: 0 auto;
  font-weight: 300;
  letter-spacing: -0.01em;
}

.about-main {
  display: grid;
  grid-template-columns: 1fr;
  gap: clamp(3rem, 6vw, 6rem);
  margin-bottom: clamp(4rem, 8vw, 8rem);
  position: relative;
  z-index: 1;
}

@media (min-width: 1024px) {
  .about-main {
    grid-template-columns: 1.2fr 0.8fr;
    align-items: start;
  }
}

.glass-card {
  background: rgba(255, 255, 255, 0.03);
  backdrop-filter: blur(40px);
  -webkit-backdrop-filter: blur(40px);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 24px;
  padding: clamp(2rem, 4vw, 3rem);
  box-shadow: 0 2px 40px rgba(91, 124, 255, 0.08);
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
}

.glass-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 4px 60px rgba(91, 124, 255, 0.12);
  border-color: rgba(91, 124, 255, 0.2);
  background: rgba(255, 255, 255, 0.06);
}

.about-content h2 {
  font-size: clamp(1.8rem, 4vw, 2.8rem);
  font-weight: 600;
  margin-bottom: clamp(1.5rem, 3vw, 2rem);
  position: relative;
  font-family: 'Space Grotesk', sans-serif;
  letter-spacing: -0.01em;
}

.about-content h2::after {
  content: '';
  position: absolute;
  bottom: -12px;
  left: 0;
  width: 60px;
  height: 3px;
  background: #5B7CFF;
  border-radius: 2px;
}

.intro-section {
  margin-bottom: clamp(2rem, 4vw, 3rem);
}

.intro-text {
  font-size: clamp(1rem, 2.2vw, 1.15rem);
  line-height: 1.8;
  color: #B8C5E0;
  margin-bottom: clamp(1rem, 2vw, 1.5rem);
  font-weight: 300;
}

.intro-text:last-child {
  margin-bottom: 0;
}

.highlight {
  color: #5B7CFF;
  font-weight: 500;
  background: linear-gradient(to right, rgba(91, 124, 255, 0.15) 0%, rgba(91, 124, 255, 0.15) 100%);
  padding: 0 4px;
  border-radius: 3px;
}

.expertise-section h2 {
  margin-bottom: clamp(2rem, 4vw, 3rem);
  text-align: center;
}

.tech-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(min(240px, 100%), 1fr));
  gap: clamp(1.5rem, 3vw, 2rem);
}

.tech-icon {
  text-align: center;
  padding: clamp(1.5rem, 3vw, 2rem);
  background: rgba(255, 255, 255, 0.05);
  border-radius: 20px;
  border: 1px solid rgba(255, 255, 255, 0.06);
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;
  backdrop-filter: blur(40px);
  -webkit-backdrop-filter: blur(40px);
  position: relative;
  overflow: hidden;
}

.tech-icon:hover {
  transform: translateY(-8px);
  border-color: rgba(91, 124, 255, 0.3);
  box-shadow: 0 0 60px rgba(91, 124, 255, 0.25);
  background: rgba(255, 255, 255, 0.08);
}

.icon-circle {
  position: relative;
  width: clamp(64px, 12vw, 80px);
  height: clamp(64px, 12vw, 80px);
  margin: 0 auto clamp(1rem, 2vw, 1.5rem);
  border-radius: 50%;
  background: linear-gradient(135deg, rgba(91, 124, 255, 0.2) 0%, rgba(91, 124, 255, 0.05) 100%);
  border: 2px solid rgba(91, 124, 255, 0.3);
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
}

.icon-circle.hovered {
  transform: scale(1.1);
  box-shadow: 0 0 40px rgba(91, 124, 255, 0.4);
  border-color: rgba(91, 124, 255, 0.6);
}

.icon-circle svg {
  font-size: clamp(1.5rem, 4vw, 2rem);
  color: #5B7CFF;
}

.tech-icon h4 {
  font-size: clamp(1rem, 2.2vw, 1.1rem);
  font-weight: 600;
  color: #FFFFFF;
  margin-bottom: clamp(0.5rem, 1vw, 0.75rem);
  font-family: 'Space Grotesk', sans-serif;
}

.tech-icon p {
  font-size: clamp(0.85rem, 1.8vw, 0.95rem);
  color: #7A8AB5;
  opacity: 0;
  transform: translateY(10px);
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  line-height: 1.6;
  font-weight: 300;
}

.tech-icon p.visible {
  opacity: 1;
  transform: translateY(0);
}

.about-visual {
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: clamp(300px, 50vw, 500px);
  position: relative;
}

.data-flow-illustration {
  position: relative;
  width: clamp(250px, 50vw, 400px);
  height: clamp(250px, 50vw, 400px);
}

.data-node {
  position: absolute;
  width: clamp(48px, 10vw, 72px);
  height: clamp(48px, 10vw, 72px);
  border-radius: 50%;
  background: linear-gradient(135deg, rgba(91, 124, 255, 0.2) 0%, rgba(91, 124, 255, 0.05) 100%);
  border: 2px solid rgba(91, 124, 255, 0.3);
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 4px 24px rgba(91, 124, 255, 0.2);
  animation: pulse 3s infinite ease-in-out;
}

.data-node svg {
  font-size: clamp(1.2rem, 3vw, 1.8rem);
  color: #5B7CFF;
}

.node-1 { top: 0; left: 50%; transform: translateX(-50%); animation-delay: 0s; }
.node-2 { top: 50%; right: 0; transform: translateY(-50%); animation-delay: 0.5s; }
.node-3 { bottom: 0; left: 50%; transform: translateX(-50%); animation-delay: 1s; }
.node-4 { top: 50%; left: 0; transform: translateY(-50%); animation-delay: 1.5s; }

@keyframes pulse {
  0%, 100% { 
    transform: scale(1) translateX(-50%); 
    box-shadow: 0 4px 24px rgba(91, 124, 255, 0.2);
  }
  50% { 
    transform: scale(1.08) translateX(-50%); 
    box-shadow: 0 8px 40px rgba(91, 124, 255, 0.4);
  }
}

.node-2 {
  animation-name: pulse2;
}
@keyframes pulse2 {
  0%, 100% { 
    transform: scale(1) translateY(-50%); 
    box-shadow: 0 4px 24px rgba(91, 124, 255, 0.2);
  }
  50% { 
    transform: scale(1.08) translateY(-50%); 
    box-shadow: 0 8px 40px rgba(91, 124, 255, 0.4);
  }
}

.node-4 {
  animation-name: pulse4;
}
@keyframes pulse4 {
  0%, 100% { 
    transform: scale(1) translateY(-50%); 
    box-shadow: 0 4px 24px rgba(91, 124, 255, 0.2);
  }
  50% { 
    transform: scale(1.08) translateY(-50%); 
    box-shadow: 0 8px 40px rgba(91, 124, 255, 0.4);
  }
}

.connection-lines {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

.line {
  position: absolute;
  background: linear-gradient(90deg, 
    rgba(91, 124, 255, 0) 0%, 
    rgba(91, 124, 255, 0.4) 50%, 
    rgba(91, 124, 255, 0) 100%
  );
  opacity: 0.3;
  animation: flow 4s infinite ease-in-out;
  filter: blur(1px);
}

@keyframes flow {
  0%, 100% { opacity: 0.2; }
  50% { opacity: 0.6; }
}

.line-1 {
  top: 20%;
  left: 50%;
  width: 2px;
  height: 30%;
  transform: translateX(-50%) rotate(45deg);
  transform-origin: top;
}

.line-2 {
  top: 50%;
  right: 20%;
  width: 30%;
  height: 2px;
  transform: translateY(-50%) rotate(45deg);
  animation-delay: 0.5s;
}

.line-3 {
  bottom: 20%;
  left: 50%;
  width: 2px;
  height: 30%;
  transform: translateX(-50%) rotate(-45deg);
  transform-origin: bottom;
  animation-delay: 1s;
}

.values-section {
  margin-bottom: clamp(4rem, 8vw, 8rem);
  position: relative;
  z-index: 1;
}

.values-section h2 {
  text-align: center;
  font-size: clamp(1.8rem, 4vw, 2.8rem);
  font-weight: 600;
  margin-bottom: clamp(2rem, 4vw, 3rem);
  font-family: 'Space Grotesk', sans-serif;
  letter-spacing: -0.01em;
}

.values-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(min(280px, 100%), 1fr));
  gap: clamp(1.5rem, 3vw, 2rem);
}

.value-card {
  text-align: center;
  padding: clamp(2rem, 4vw, 2.5rem);
  background: rgba(255, 255, 255, 0.05);
  border-radius: 20px;
  border: 1px solid rgba(255, 255, 255, 0.06);
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  backdrop-filter: blur(40px);
  -webkit-backdrop-filter: blur(40px);
}

.value-card:hover {
  transform: translateY(-8px);
  border-color: rgba(91, 124, 255, 0.3);
  box-shadow: 0 0 60px rgba(91, 124, 255, 0.25);
  background: rgba(255, 255, 255, 0.08);
}

.value-icon {
  width: clamp(56px, 10vw, 72px);
  height: clamp(56px, 10vw, 72px);
  margin: 0 auto clamp(1rem, 2vw, 1.5rem);
  border-radius: 50%;
  background: linear-gradient(135deg, rgba(91, 124, 255, 0.2) 0%, rgba(91, 124, 255, 0.05) 100%);
  border: 2px solid rgba(91, 124, 255, 0.3);
  display: flex;
  align-items: center;
  justify-content: center;
}

.value-icon svg {
  font-size: clamp(1.3rem, 3vw, 1.6rem);
  color: #5B7CFF;
}

.value-card h4 {
  font-size: clamp(1.1rem, 2.2vw, 1.25rem);
  font-weight: 600;
  margin-bottom: clamp(0.75rem, 1.5vw, 1rem);
  font-family: 'Space Grotesk', sans-serif;
}

.value-card p {
  color: #B8C5E0;
  line-height: 1.7;
  font-size: clamp(0.95rem, 2vw, 1.05rem);
  font-weight: 300;
}

@media (prefers-reduced-motion: reduce) {
  * {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
}
`,wv=({icon:l,label:r,description:u})=>{const[o,c]=D.useState(!1);return f.jsxs("div",{className:"tech-icon",onMouseEnter:()=>c(!0),onMouseLeave:()=>c(!1),children:[f.jsx("div",{className:`icon-circle ${o?"hovered":""}`,children:f.jsx(l,{})}),f.jsx("h4",{children:r}),f.jsx("p",{className:o?"visible":"",children:u})]})},Ev=({icon:l,title:r,description:u})=>f.jsxs("div",{className:"value-card",children:[f.jsx("div",{className:"value-icon",children:f.jsx(l,{})}),f.jsx("h4",{children:r}),f.jsx("p",{children:u})]});function jv(){const l=[{icon:E0,label:"Intelligence Artificielle",description:"Solutions d'IA adaptées à vos besoins métiers"},{icon:T0,label:"Ingénierie des Données",description:"Architecture et pipelines de données robustes"},{icon:j0,label:"Data Science",description:"Analyse avancée et modélisation prédictive"},{icon:vv,label:"Développement",description:"Applications web et mobile innovantes"}],r=[{icon:bv,title:"Sécurité & Conformité",description:"Respect des normes RGPD et sécurisation de vos données"},{icon:xv,title:"Approche Collaborative",description:"Co-construction avec vos équipes pour un transfert de compétences"},{icon:yv,title:"Innovation Continue",description:"Veille technologique et adoption des dernières innovations"}];return f.jsxs(f.Fragment,{children:[f.jsx("style",{children:Sv}),f.jsxs("section",{className:"about-container",id:"about",children:[f.jsx("div",{className:"animated-particles",children:[...Array(15)].map((u,o)=>f.jsx("div",{className:"particle",style:{"--delay":`${Math.random()*10}s`,"--duration":`${Math.random()*20+15}s`,width:`${Math.random()*6+2}px`,height:`${Math.random()*6+2}px`,left:`${Math.random()*100}%`,top:`${Math.random()*100}%`}},o))}),f.jsxs("div",{className:"about-inner",children:[f.jsx("div",{className:"about-header",children:f.jsxs("div",{className:"header-content",children:[f.jsxs("h1",{className:"about-title",children:["Transformez vos ",f.jsx("span",{className:"gradient-text",children:"données"})," en",f.jsx("span",{className:"gradient-text",children:" avantage concurrentiel"})]}),f.jsx("p",{className:"about-subtitle",children:"DigiScia accompagne les entreprises dans leur transition numérique pour exploiter leurs données, devenir data-driven et placer l'intelligence des données au cœur de leur stratégie."})]})}),f.jsxs("div",{className:"about-main",children:[f.jsxs("div",{className:"about-content",children:[f.jsxs("div",{className:"intro-section glass-card",children:[f.jsx("h2",{children:"Qui sommes-nous ?"}),f.jsxs("p",{className:"intro-text",children:[f.jsx("strong",{children:"DigiScia"})," est une Entreprise de Services Numériques (ESN) spécialisée en science des données et intelligence artificielle. Nous aidons les organisations à ",f.jsx("span",{className:"highlight",children:"transformer leurs données en insights actionnables"}),"et à construire une culture data-driven durable."]}),f.jsxs("p",{className:"intro-text",children:["Notre expertise couvre l'ensemble de la chaîne de valeur de la donnée : de la collecte et l'ingénierie des données jusqu'au déploiement de solutions d'IA en production, en garantissant ",f.jsx("span",{className:"highlight",children:"sécurité, conformité et performance"}),"."]})]}),f.jsxs("div",{className:"expertise-section",children:[f.jsx("h2",{children:"Notre Expertise"}),f.jsx("div",{className:"tech-grid",children:l.map((u,o)=>f.jsx(wv,{icon:u.icon,label:u.label,description:u.description},o))})]})]}),f.jsx("div",{className:"about-visual",children:f.jsxs("div",{className:"data-flow-illustration",children:[f.jsx("div",{className:"data-node node-1",children:f.jsx(T0,{})}),f.jsx("div",{className:"data-node node-2",children:f.jsx(gv,{})}),f.jsx("div",{className:"data-node node-3",children:f.jsx(E0,{})}),f.jsx("div",{className:"data-node node-4",children:f.jsx(j0,{})}),f.jsxs("div",{className:"connection-lines",children:[f.jsx("div",{className:"line line-1"}),f.jsx("div",{className:"line line-2"}),f.jsx("div",{className:"line line-3"})]})]})})]}),f.jsxs("div",{className:"values-section",children:[f.jsx("h2",{children:"Nos Valeurs"}),f.jsx("div",{className:"values-grid",children:r.map((u,o)=>f.jsx(Ev,{icon:u.icon,title:u.title,description:u.description},o))})]})]})]})]})}const Tv=`
@import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;600;700&family=Inter:wght@300;400;500;600&display=swap');

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: 'Inter', sans-serif;
  background: #00093D;
  color: #FFFFFF;
  overflow-x: hidden;
}

.projects-section {
  position: relative;
  min-height: 100vh;
  width: 100%;
  background: #00093D;
  padding: clamp(3rem, 6vw, 6rem) clamp(1rem, 4vw, 2rem);
  overflow: hidden;
}

/* Fond animé subtil */
.projects-section::before {
  content: '';
  position: fixed;
  top: -50%;
  left: -20%;
  width: 100%;
  height: 150%;
  background: radial-gradient(circle, rgba(91, 124, 255, 0.08) 0%, transparent 70%);
  animation: floatBackground 25s infinite ease-in-out;
  pointer-events: none;
  z-index: 0;
}

@keyframes floatBackground {
  0%, 100% { transform: translate(0, 0) scale(1); }
  33% { transform: translate(-20px, -20px) scale(1.05); }
  66% { transform: translate(20px, 20px) scale(0.95); }
}

/* Grille de fond */
.grid-background {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: 0.02;
  background-image: 
    linear-gradient(rgba(91, 124, 255, 0.3) 1px, transparent 1px),
    linear-gradient(90deg, rgba(91, 124, 255, 0.3) 1px, transparent 1px);
  background-size: 50px 50px;
  pointer-events: none;
  z-index: 0;
}

.projects-content {
  position: relative;
  z-index: 1;
  width: 100%;
  max-width: 1400px;
  margin: 0 auto;
}

/* Titre principal */
.projects-header {
  text-align: center;
  margin-bottom: clamp(3rem, 6vw, 5rem);
  animation: fadeInUp 0.8s ease-out;
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.projects-title {
  font-size: clamp(2rem, 6vw, 3.5rem);
  font-weight: 700;
  font-family: 'Space Grotesk', sans-serif;
  color: #FFFFFF;
  margin-bottom: clamp(0.75rem, 2vw, 1rem);
  letter-spacing: -0.02em;
  line-height: 1.2;
}

.projects-subtitle {
  font-size: clamp(1rem, 2.5vw, 1.2rem);
  color: #B8C5E0;
  font-weight: 300;
  max-width: 600px;
  margin: 0 auto;
  line-height: 1.6;
}

/* Grille de projets */
.projects-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(min(320px, 100%), 1fr));
  gap: clamp(1.5rem, 3vw, 2rem);
  width: 100%;
}

/* Carte projet */
.project-card {
  position: relative;
  background: rgba(255, 255, 255, 0.03);
  backdrop-filter: blur(40px);
  -webkit-backdrop-filter: blur(40px);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 20px;
  padding: 0;
  overflow: hidden;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  opacity: 0;
  animation: cardFadeIn 0.6s ease-out forwards;
  display: flex;
  flex-direction: column;
  height: 100%;
}

@keyframes cardFadeIn {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.project-card:hover {
  transform: translateY(-8px);
  border-color: rgba(91, 124, 255, 0.3);
  box-shadow: 0 20px 60px rgba(91, 124, 255, 0.25);
  background: rgba(255, 255, 255, 0.05);
}

/* En-tête de carte avec bande colorée */
.project-card-header {
  position: relative;
  height: 6px;
  background: linear-gradient(90deg, var(--card-color) 0%, rgba(91, 124, 255, 0.5) 100%);
  border-radius: 20px 20px 0 0;
}

/* Icône de statut */
.project-status-icon {
  position: absolute;
  top: clamp(1rem, 2vw, 1.5rem);
  right: clamp(1rem, 2vw, 1.5rem);
  width: clamp(36px, 6vw, 48px);
  height: clamp(36px, 6vw, 48px);
  border-radius: 50%;
  background: linear-gradient(135deg, rgba(91, 124, 255, 0.2) 0%, rgba(91, 124, 255, 0.05) 100%);
  border: 2px solid rgba(91, 124, 255, 0.3);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 2;
  transition: all 0.3s ease;
}

.project-card:hover .project-status-icon {
  transform: scale(1.1) rotate(10deg);
  box-shadow: 0 0 20px rgba(91, 124, 255, 0.4);
}

.project-status-icon svg {
  width: clamp(18px, 3vw, 24px);
  height: clamp(18px, 3vw, 24px);
  color: #5B7CFF;
}

/* Contenu de la carte */
.project-card-content {
  padding: clamp(1.5rem, 3vw, 2rem);
  display: flex;
  flex-direction: column;
  flex: 1;
}

.project-card-title {
  font-size: clamp(1.3rem, 3vw, 1.6rem);
  font-weight: 600;
  font-family: 'Space Grotesk', sans-serif;
  color: #FFFFFF;
  margin-bottom: clamp(0.75rem, 1.5vw, 1rem);
  line-height: 1.3;
  letter-spacing: -0.01em;
  padding-right: clamp(2.5rem, 4vw, 3.5rem);
}

.project-description {
  font-size: clamp(0.95rem, 2vw, 1.05rem);
  color: #B8C5E0;
  line-height: 1.7;
  margin-bottom: clamp(1.25rem, 2.5vw, 1.5rem);
  font-weight: 300;
  flex-grow: 1;
}

/* Image du projet */
.project-image {
  width: 100%;
  height: clamp(180px, 30vw, 240px);
  border-radius: 12px;
  overflow: hidden;
  margin-bottom: clamp(1rem, 2vw, 1.5rem);
  position: relative;
  background: rgba(91, 124, 255, 0.05);
}

.project-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.6s cubic-bezier(0.4, 0, 0.2, 1);
}

.project-card:hover .project-image img {
  transform: scale(1.08);
}

.project-image::after {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(180deg, transparent 0%, rgba(0, 9, 61, 0.3) 100%);
  pointer-events: none;
}

/* Métadonnées */
.project-meta {
  display: flex;
  gap: clamp(1rem, 2vw, 1.5rem);
  flex-wrap: wrap;
  margin-top: auto;
  padding-top: clamp(1rem, 2vw, 1.5rem);
  border-top: 1px solid rgba(255, 255, 255, 0.06);
}

.meta-item {
  flex: 1;
  min-width: clamp(120px, 30%, 150px);
}

.meta-label {
  font-size: clamp(0.75rem, 1.8vw, 0.85rem);
  color: #7A8AB5;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  margin-bottom: clamp(0.25rem, 0.5vw, 0.5rem);
  font-weight: 500;
}

.meta-value {
  font-size: clamp(0.9rem, 2vw, 1rem);
  color: #FFFFFF;
  font-weight: 500;
  font-family: 'Space Grotesk', sans-serif;
}

/* Badge de statut */
.status-badge {
  display: inline-flex;
  align-items: center;
  gap: 0.4rem;
  padding: clamp(0.35rem, 1vw, 0.45rem) clamp(0.75rem, 2vw, 1rem);
  border-radius: 20px;
  font-size: clamp(0.8rem, 1.8vw, 0.9rem);
  font-weight: 500;
  white-space: nowrap;
}

.status-badge.in-progress {
  background: linear-gradient(135deg, rgba(255, 152, 0, 0.2) 0%, rgba(255, 152, 0, 0.1) 100%);
  color: #FFB74D;
  border: 1px solid rgba(255, 152, 0, 0.3);
}

.status-badge.completed {
  background: linear-gradient(135deg, rgba(76, 175, 80, 0.2) 0%, rgba(76, 175, 80, 0.1) 100%);
  color: #81C784;
  border: 1px solid rgba(76, 175, 80, 0.3);
}

.status-dot {
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: currentColor;
  animation: pulse 2s ease-in-out infinite;
}

@keyframes pulse {
  0%, 100% { opacity: 1; transform: scale(1); }
  50% { opacity: 0.6; transform: scale(0.8); }
}

/* États de chargement */
.loading-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: clamp(3rem, 6vw, 5rem);
  text-align: center;
  grid-column: 1 / -1;
}

.loading-spinner {
  width: clamp(40px, 8vw, 50px);
  height: clamp(40px, 8vw, 50px);
  border: 3px solid rgba(91, 124, 255, 0.2);
  border-radius: 50%;
  border-top-color: #5B7CFF;
  animation: spin 0.8s linear infinite;
  margin-bottom: 1.5rem;
}

@keyframes spin {
  to { transform: rotate(360deg); }
}

.loading-text {
  font-size: clamp(1rem, 2.5vw, 1.1rem);
  color: #B8C5E0;
  font-weight: 300;
}

/* Message d'erreur */
.error-message, .no-projects-message {
  grid-column: 1 / -1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: clamp(2rem, 4vw, 3rem);
  text-align: center;
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid rgba(255, 87, 87, 0.2);
  border-radius: 20px;
  backdrop-filter: blur(40px);
  -webkit-backdrop-filter: blur(40px);
  max-width: 600px;
  margin: 0 auto;
  width: 100%;
}

.no-projects-message {
  border-color: rgba(91, 124, 255, 0.2);
}

.error-message p, .no-projects-message p {
  font-size: clamp(1rem, 2.5vw, 1.1rem);
  color: #B8C5E0;
  margin-bottom: 1.5rem;
  line-height: 1.6;
}

.retry-button {
  padding: clamp(0.75rem, 2vw, 0.9rem) clamp(1.5rem, 3vw, 2rem);
  font-size: clamp(0.95rem, 2vw, 1rem);
  font-weight: 600;
  font-family: 'Space Grotesk', sans-serif;
  background: linear-gradient(135deg, #5B7CFF 0%, #8BA3FF 100%);
  color: #FFFFFF;
  border: none;
  border-radius: 50px;
  cursor: pointer;
  transition: all 0.3s ease;
  letter-spacing: 0.02em;
}

.retry-button:hover {
  transform: translateY(-2px);
  box-shadow: 0 10px 30px rgba(91, 124, 255, 0.4);
}

.retry-button:active {
  transform: scale(0.95);
}

/* Responsive Design */
@media (max-width: 768px) {
  .projects-grid {
    grid-template-columns: 1fr;
  }
  
  .project-meta {
    flex-direction: column;
    gap: 1rem;
  }
  
  .meta-item {
    flex: none;
  }
}

@media (max-width: 480px) {
  .projects-section {
    padding: clamp(2rem, 5vw, 3rem) clamp(1rem, 4vw, 1.5rem);
  }
  
  .project-image {
    height: 200px;
  }
}

/* Tablettes */
@media (min-width: 769px) and (max-width: 1024px) {
  .projects-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

/* Grands écrans */
@media (min-width: 1025px) {
  .projects-grid {
    grid-template-columns: repeat(3, 1fr);
  }
}

/* Mode paysage mobile */
@media (max-height: 600px) and (orientation: landscape) {
  .projects-section {
    min-height: auto;
    padding: clamp(1.5rem, 4vw, 2rem) clamp(1rem, 4vw, 2rem);
  }
  
  .projects-header {
    margin-bottom: 2rem;
  }
  
  .project-image {
    height: 150px;
  }
}

/* Préférences utilisateur */
@media (prefers-reduced-motion: reduce) {
  * {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
  
  .project-card {
    opacity: 1;
  }
  
  .project-card:hover {
    transform: none;
  }
  
  .project-image img {
    transform: none;
  }
}

/* Contraste élevé */
@media (prefers-contrast: high) {
  .project-card {
    border-width: 2px;
    border-color: rgba(255, 255, 255, 0.2);
  }
  
  .project-card-header {
    height: 8px;
  }
}

/* Support des encoches */
@supports (padding: max(0px)) {
  .projects-section {
    padding-left: max(clamp(1rem, 4vw, 2rem), env(safe-area-inset-left));
    padding-right: max(clamp(1rem, 4vw, 2rem), env(safe-area-inset-right));
  }
}
`,Nu={Rocket:()=>f.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[f.jsx("path",{d:"M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z"}),f.jsx("path",{d:"m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z"}),f.jsx("path",{d:"M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0"}),f.jsx("path",{d:"M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5"})]}),CheckCircle:()=>f.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[f.jsx("path",{d:"M22 11.08V12a10 10 0 1 1-5.93-9.14"}),f.jsx("polyline",{points:"22 4 12 14.01 9 11.01"})]}),Code:()=>f.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[f.jsx("polyline",{points:"16 18 22 12 16 6"}),f.jsx("polyline",{points:"8 6 2 12 8 18"})]})},Ov=[{id:1,title:"DigiScia Academy",description:"Solution d'analyse prédictive basée sur l'IA pour optimiser les processus métiers et prendre des décisions data-driven en temps réel.",status:"Terminé",date:"2024-01-15",category:"Education",image:"https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop&q=80",color:"#5B7CFF"},{id:2,title:"SimpleOQuotidien",description:"Architecture de data lake moderne pour centraliser et gouverner l'ensemble des données de l'entreprise avec une sécurité renforcée.",status:"En cours",date:"2023-12-10",category:"Software Development",image:"https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&h=600&fit=crop&q=80",color:"#8BA3FF"},{id:3,title:"DigiScia Store",description:"Tableaux de bord interactifs en temps réel pour le suivi des KPIs métiers avec visualisations avancées et alertes intelligentes.",status:"En cours",date:"2024-02-20",category:"Software Development",image:"https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop&q=80",color:"#B8AEFF"},{id:4,title:"Domus IA",description:"Tableaux de bord interactifs en temps réel pour le suivi des KPIs métiers avec visualisations avancées et alertes intelligentes.",status:"En cours",date:"2024-02-20",category:"Agentic AI",image:"https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop&q=80",color:"#B8AEFF"},{id:5,title:"Rapidos",description:"Tableaux de bord interactifs en temps réel pour le suivi des KPIs métiers avec visualisations avancées et alertes intelligentes.",status:"En cours",date:"2024-02-20",category:"Agentic AI",image:"https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop&q=80",color:"#B8AEFF"},{id:6,title:"GulmuLLM",description:"Tableaux de bord interactifs en temps réel pour le suivi des KPIs métiers avec visualisations avancées et alertes intelligentes.",status:"En cours",date:"2024-02-20",category:"LLM",image:"https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop&q=80",color:"#B8AEFF"}];function Rv(){const[l,r]=D.useState([]),[u,o]=D.useState(!0),[c,d]=D.useState(null),h=D.useCallback(g=>{switch(g){case"En cours":return f.jsx(Nu.Rocket,{});case"Terminé":return f.jsx(Nu.CheckCircle,{});default:return f.jsx(Nu.Code,{})}},[]);D.useCallback(g=>new Date(g).toLocaleDateString("fr-FR",{day:"numeric",month:"long",year:"numeric"}),[]),D.useEffect(()=>{let g=!0;return(async()=>{try{o(!0),await new Promise(b=>setTimeout(b,1e3)),g&&(r(Ov),o(!1))}catch(b){console.error("Erreur lors de la récupération des projets:",b),g&&(d("Impossible de charger les projets. Veuillez réessayer plus tard."),o(!1))}})(),()=>{g=!1}},[]);const v=D.useMemo(()=>u?f.jsxs("div",{className:"loading-container",children:[f.jsx("div",{className:"loading-spinner"}),f.jsx("p",{className:"loading-text",children:"Chargement des projets..."})]}):c?f.jsxs("div",{className:"error-message",children:[f.jsx("p",{children:c}),f.jsx("button",{className:"retry-button",onClick:()=>window.location.reload(),children:"Réessayer"})]}):l.length===0?f.jsx("div",{className:"no-projects-message",children:f.jsx("p",{children:"Aucun projet disponible pour le moment."})}):l.map((g,p)=>f.jsxs("div",{className:"project-card",style:{"--card-color":g.color,animationDelay:`${p*.1}s`},children:[f.jsx("div",{className:"project-card-header"}),f.jsx("div",{className:"project-status-icon",children:h(g.status)}),f.jsxs("div",{className:"project-card-content",children:[f.jsx("h2",{className:"project-card-title",children:g.title}),f.jsx("p",{className:"project-description",children:g.description}),g.image&&f.jsx("div",{className:"project-image",children:f.jsx("img",{src:g.image,alt:g.title,loading:"lazy"})}),f.jsxs("div",{className:"project-meta",children:[f.jsxs("div",{className:"meta-item",children:[f.jsx("div",{className:"meta-label",children:"Statut"}),f.jsx("div",{className:"meta-value",children:f.jsxs("span",{className:`status-badge ${g.status==="En cours"?"in-progress":"completed"}`,children:[f.jsx("span",{className:"status-dot"}),g.status]})})]}),f.jsxs("div",{className:"meta-item",children:[f.jsx("div",{className:"meta-label",children:"Catégorie"}),f.jsx("div",{className:"meta-value",children:g.category})]})]})]})]},g.id)),[l,u,c,h]);return f.jsxs(f.Fragment,{children:[f.jsx("style",{children:Tv}),f.jsxs("section",{id:"projects",className:"projects-section",children:[f.jsx("div",{className:"grid-background","aria-hidden":"true"}),f.jsxs("div",{className:"projects-content",children:[f.jsxs("div",{className:"projects-header",children:[f.jsx("h1",{className:"projects-title",children:"Nos Projets Innovants"}),f.jsx("p",{className:"projects-subtitle",children:"Découvrez nos réalisations en Data Science et Intelligence Artificielle"})]}),f.jsx("div",{className:"projects-grid",children:v})]})]})]})}const Av=`
@import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;600;700&family=Inter:wght@300;400;500;600&display=swap');

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: 'Inter', sans-serif;
  background: #00093D;
  color: #FFFFFF;
  overflow-x: hidden;
}

.services-section {
  position: relative;
  min-height: 100vh;
  width: 100%;
  background: #00093D;
  padding: clamp(3rem, 6vw, 6rem) clamp(1rem, 4vw, 2rem);
  overflow: hidden;
}

/* Fond animé avec gradient */
.services-section::before {
  content: '';
  position: fixed;
  top: -30%;
  left: -10%;
  width: 80%;
  height: 120%;
  background: radial-gradient(circle, rgba(91, 124, 255, 0.15) 0%, transparent 70%);
  animation: floatGradient 30s infinite ease-in-out;
  pointer-events: none;
  z-index: 0;
}

.services-section::after {
  content: '';
  position: fixed;
  bottom: -30%;
  right: -10%;
  width: 70%;
  height: 100%;
  background: radial-gradient(circle, rgba(139, 163, 255, 0.1) 0%, transparent 70%);
  animation: floatGradient 25s infinite ease-in-out reverse;
  pointer-events: none;
  z-index: 0;
}

@keyframes floatGradient {
  0%, 100% { transform: translate(0, 0) scale(1); }
  33% { transform: translate(-20px, -30px) scale(1.1); }
  66% { transform: translate(20px, 30px) scale(0.9); }
}

/* Grille de points décorative */
.grid-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: 
    radial-gradient(circle, rgba(91, 124, 255, 0.15) 1px, transparent 1px);
  background-size: 50px 50px;
  opacity: 0.3;
  pointer-events: none;
  z-index: 0;
}

.services-container {
  position: relative;
  z-index: 1;
  max-width: 1400px;
  margin: 0 auto;
}

/* Header de la section */
.services-header {
  text-align: center;
  margin-bottom: clamp(3rem, 6vw, 5rem);
  animation: fadeInUp 0.8s ease-out;
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.services-badge {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  background: rgba(91, 124, 255, 0.1);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  border: 1px solid rgba(91, 124, 255, 0.3);
  padding: clamp(0.5rem, 1.5vw, 0.65rem) clamp(1rem, 2.5vw, 1.25rem);
  border-radius: 50px;
  font-size: clamp(0.8rem, 2vw, 0.9rem);
  font-weight: 500;
  color: #B8C5E0;
  margin-bottom: 1.5rem;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  transition: all 0.3s ease;
}

.services-badge:hover {
  transform: translateY(-2px);
  border-color: #5B7CFF;
  background: rgba(91, 124, 255, 0.15);
}

.badge-icon {
  width: 16px;
  height: 16px;
  animation: rotate 3s linear infinite;
}

@keyframes rotate {
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
}

.services-title {
  font-size: clamp(2rem, 6vw, 3.5rem);
  font-weight: 700;
  font-family: 'Space Grotesk', sans-serif;
  color: #FFFFFF;
  margin-bottom: clamp(0.75rem, 2vw, 1rem);
  letter-spacing: -0.02em;
  line-height: 1.2;
}

.services-subtitle {
  font-size: clamp(1rem, 2.5vw, 1.2rem);
  color: #B8C5E0;
  font-weight: 300;
  max-width: 700px;
  margin: 0 auto;
  line-height: 1.6;
}

/* Grille des services */
.services-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(min(320px, 100%), 1fr));
  gap: clamp(1.5rem, 3vw, 2rem);
}

/* Carte de service */
.service-card {
  position: relative;
  background: rgba(255, 255, 255, 0.03);
  backdrop-filter: blur(40px);
  -webkit-backdrop-filter: blur(40px);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 24px;
  padding: clamp(1.5rem, 3vw, 2rem);
  min-height: 300px;
  display: flex;
  flex-direction: column;
  cursor: pointer;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  opacity: 0;
  animation: cardFadeIn 0.6s ease-out forwards;
  overflow: hidden;
}

@keyframes cardFadeIn {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.service-card.stagger-1 { animation-delay: 0.1s; }
.service-card.stagger-2 { animation-delay: 0.2s; }
.service-card.stagger-3 { animation-delay: 0.3s; }
.service-card.stagger-4 { animation-delay: 0.4s; }
.service-card.stagger-5 { animation-delay: 0.5s; }
.service-card.stagger-6 { animation-delay: 0.6s; }

/* Barre de couleur supérieure */
.service-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 4px;
  background: linear-gradient(90deg, var(--card-gradient-start), var(--card-gradient-end));
  transform: scaleX(0);
  transform-origin: left;
  transition: transform 0.5s cubic-bezier(0.4, 0, 0.2, 1);
}

.service-card:hover::before {
  transform: scaleX(1);
}

.service-card:hover {
  transform: translateY(-8px);
  border-color: rgba(91, 124, 255, 0.3);
  box-shadow: 0 20px 60px rgba(91, 124, 255, 0.25);
  background: rgba(255, 255, 255, 0.05);
}

/* Icône du service */
.service-icon {
  width: clamp(56px, 10vw, 72px);
  height: clamp(56px, 10vw, 72px);
  background: linear-gradient(135deg, rgba(91, 124, 255, 0.2) 0%, rgba(91, 124, 255, 0.05) 100%);
  border: 2px solid rgba(91, 124, 255, 0.3);
  border-radius: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: clamp(1rem, 2vw, 1.5rem);
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
  overflow: hidden;
}

.service-card:hover .service-icon {
  transform: scale(1.1) rotate(5deg);
  box-shadow: 0 10px 30px rgba(91, 124, 255, 0.3);
  border-color: #5B7CFF;
}

.service-icon::after {
  content: '';
  position: absolute;
  top: -50%;
  left: -50%;
  width: 200%;
  height: 200%;
  background: radial-gradient(circle, rgba(255, 255, 255, 0.2) 0%, transparent 70%);
  opacity: 0;
  transition: opacity 0.4s ease;
}

.service-card:hover .service-icon::after {
  opacity: 1;
}

.service-icon svg {
  width: clamp(28px, 5vw, 36px);
  height: clamp(28px, 5vw, 36px);
  color: #5B7CFF;
  z-index: 1;
  transition: all 0.3s ease;
}

.service-card:hover .service-icon svg {
  color: #8BA3FF;
}

/* Contenu de la carte */
.service-card-title {
  font-size: clamp(1.2rem, 3vw, 1.4rem);
  font-weight: 600;
  font-family: 'Space Grotesk', sans-serif;
  color: #FFFFFF;
  margin-bottom: clamp(0.75rem, 1.5vw, 1rem);
  line-height: 1.3;
  letter-spacing: -0.01em;
}

.service-card-description {
  font-size: clamp(0.95rem, 2vw, 1.05rem);
  color: #B8C5E0;
  line-height: 1.7;
  margin-bottom: clamp(1.25rem, 2.5vw, 1.5rem);
  font-weight: 300;
  flex-grow: 1;
}

/* Lien "En savoir plus" */
.service-card-link {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  font-size: clamp(0.9rem, 2vw, 1rem);
  font-weight: 500;
  color: #5B7CFF;
  text-decoration: none;
  transition: all 0.3s ease;
  margin-top: auto;
}

.service-card:hover .service-card-link {
  gap: 0.75rem;
  color: #8BA3FF;
}

.service-card-link svg {
  width: 18px;
  height: 18px;
  transition: transform 0.3s ease;
}

.service-card:hover .service-card-link svg {
  transform: translateX(4px);
}

/* Badge de catégorie */
.service-category {
  position: absolute;
  top: clamp(1rem, 2vw, 1.5rem);
  right: clamp(1rem, 2vw, 1.5rem);
  padding: clamp(0.3rem, 1vw, 0.4rem) clamp(0.6rem, 1.5vw, 0.8rem);
  background: rgba(91, 124, 255, 0.15);
  border: 1px solid rgba(91, 124, 255, 0.3);
  border-radius: 20px;
  font-size: clamp(0.7rem, 1.5vw, 0.8rem);
  font-weight: 500;
  color: #8BA3FF;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  opacity: 0;
  transform: translateY(-10px);
  transition: all 0.3s ease;
}

.service-card:hover .service-category {
  opacity: 1;
  transform: translateY(0);
}

/* Skeleton loading */
.skeleton-card {
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 24px;
  padding: clamp(1.5rem, 3vw, 2rem);
  min-height: 300px;
  position: relative;
  overflow: hidden;
}

.skeleton-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(
    90deg,
    transparent,
    rgba(91, 124, 255, 0.1),
    transparent
  );
  animation: shimmer 2s infinite;
}

@keyframes shimmer {
  0% { left: -100%; }
  100% { left: 100%; }
}

.skeleton-icon {
  width: clamp(56px, 10vw, 72px);
  height: clamp(56px, 10vw, 72px);
  background: rgba(91, 124, 255, 0.1);
  border-radius: 16px;
  margin-bottom: clamp(1rem, 2vw, 1.5rem);
}

.skeleton-title {
  height: 24px;
  background: rgba(91, 124, 255, 0.1);
  border-radius: 6px;
  margin-bottom: 1rem;
  width: 80%;
}

.skeleton-text {
  height: 16px;
  background: rgba(91, 124, 255, 0.05);
  border-radius: 4px;
  margin-bottom: 0.5rem;
}

.skeleton-text:first-of-type { width: 100%; }
.skeleton-text:nth-of-type(2) { width: 90%; }
.skeleton-text:last-of-type { width: 70%; }

/* === STYLES DU MODAL === */
.service-modal {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 9, 61, 0.85);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  z-index: 1000;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1rem;
  opacity: 0;
  pointer-events: none;
  transition: opacity 0.3s ease;
}

.service-modal.active {
  opacity: 1;
  pointer-events: all;
}

.modal-content {
  background: rgba(10, 20, 70, 0.8);
  border: 1px solid rgba(91, 124, 255, 0.3);
  border-radius: 24px;
  padding: clamp(1.5rem, 4vw, 3rem);
  max-width: 800px;
  width: 100%;
  max-height: 90vh;
  overflow-y: auto;
  transform: scale(0.95);
  transition: transform 0.3s ease;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.4);
}

.service-modal.active .modal-content {
  transform: scale(1);
}

.modal-header {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 1.5rem;
  margin-bottom: 1.5rem;
  padding-bottom: 1.5rem;
  border-bottom: 1px solid rgba(91, 124, 255, 0.2);
}

.modal-title {
  font-family: 'Space Grotesk', sans-serif;
  font-size: clamp(1.5rem, 4vw, 2rem);
  font-weight: 600;
  color: #FFFFFF;
  line-height: 1.2;
}

.modal-close-btn {
  background: rgba(91, 124, 255, 0.1);
  border: 1px solid rgba(91, 124, 255, 0.3);
  border-radius: 50%;
  width: 40px;
  height: 40px;
  color: #B8C5E0;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  transition: all 0.3s ease;
  flex-shrink: 0;
}

.modal-close-btn:hover {
  background: rgba(91, 124, 255, 0.2);
  color: #FFFFFF;
  transform: rotate(90deg);
}

.modal-body {
  color: #B8C5E0;
  line-height: 1.7;
}

.modal-body p {
  font-size: clamp(1rem, 2vw, 1.1rem);
  margin-bottom: 1.5rem;
}

.modal-body h4 {
  font-family: 'Space Grotesk', sans-serif;
  font-size: clamp(1.1rem, 2.5vw, 1.25rem);
  font-weight: 600;
  color: #8BA3FF;
  margin-top: 2rem;
  margin-bottom: 1rem;
  letter-spacing: 0.02em;
}

.modal-body ul {
  list-style: none;
  padding-left: 0;
}

.modal-body li {
  position: relative;
  padding-left: 1.75rem;
  margin-bottom: 0.75rem;
  font-size: clamp(0.95rem, 2vw, 1rem);
}

.modal-body li::before {
  content: '✓';
  position: absolute;
  left: 0;
  top: 0;
  color: #5B7CFF;
  font-weight: 600;
  font-size: 1.2rem;
}

/* === FIN STYLES MODAL === */


/* Responsive Design */
@media (max-width: 768px) {
  .services-grid {
    grid-template-columns: 1fr;
  }
  
  .services-section {
    padding: clamp(2rem, 5vw, 3rem) clamp(1rem, 4vw, 1.5rem);
  }
  
  .service-card {
    min-height: 260px;
  }
  
  .modal-content {
    padding: clamp(1.5rem, 5vw, 2rem);
  }
}

@media (max-width: 480px) {
  .service-category {
    position: static;
    margin-bottom: 1rem;
    opacity: 1;
    transform: none;
    display: inline-block;
  }
}

/* Préférences utilisateur */
@media (prefers-reduced-motion: reduce) {
  * {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
  
  .service-card {
    opacity: 1;
  }
  
  .service-card:hover {
    transform: none;
  }
  
  .service-icon {
    transform: none;
  }
}

/* Support des encoches */
@supports (padding: max(0px)) {
  .services-section {
    padding-left: max(clamp(1rem, 4vw, 2rem), env(safe-area-inset-left));
    padding-right: max(clamp(1rem, 4vw, 2rem), env(safe-area-inset-right));
  }
}
`,Nv=()=>f.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[f.jsx("circle",{cx:"12",cy:"12",r:"10"}),f.jsx("line",{x1:"2",y1:"12",x2:"22",y2:"12"}),f.jsx("path",{d:"M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"})]}),_v=()=>f.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[f.jsx("path",{d:"M12 2L2 7l10 5 10-5-10-5z"}),f.jsx("path",{d:"M2 17l10 5 10-5"}),f.jsx("path",{d:"M2 12l10 5 10-5"})]}),Cv=()=>f.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[f.jsx("ellipse",{cx:"12",cy:"5",rx:"9",ry:"3"}),f.jsx("path",{d:"M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"}),f.jsx("path",{d:"M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"})]}),zv=()=>f.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[f.jsx("line",{x1:"12",y1:"20",x2:"12",y2:"10"}),f.jsx("line",{x1:"18",y1:"20",x2:"18",y2:"4"}),f.jsx("line",{x1:"6",y1:"20",x2:"6",y2:"16"})]}),Dv=()=>f.jsx("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:f.jsx("path",{d:"M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z"})}),Mv=()=>f.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[f.jsx("polyline",{points:"16 18 22 12 16 6"}),f.jsx("polyline",{points:"8 6 2 12 8 18"})]}),kv=()=>f.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[f.jsx("line",{x1:"5",y1:"12",x2:"19",y2:"12"}),f.jsx("polyline",{points:"12 5 19 12 12 19"})]}),Bv=()=>f.jsx("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:f.jsx("path",{d:"M12 3L14 10L21 12L14 14L12 21L10 14L3 12L10 10L12 3Z"})}),ph=Bt.memo(({service:l,onClose:r})=>{const u=o=>{o.target===o.currentTarget&&r()};return D.useEffect(()=>{const o=c=>{c.key==="Escape"&&r()};return document.addEventListener("keydown",o),()=>document.removeEventListener("keydown",o)},[r]),f.jsx("div",{className:"service-modal active",onClick:u,role:"dialog","aria-modal":"true","aria-labelledby":"modal-title",children:f.jsxs("div",{className:"modal-content",role:"document",children:[f.jsxs("div",{className:"modal-header",children:[f.jsx("h3",{id:"modal-title",className:"modal-title",children:l.title}),f.jsx("button",{className:"modal-close-btn",onClick:r,"aria-label":"Fermer la fenêtre",children:"×"})]}),f.jsxs("div",{className:"modal-body",children:[f.jsx("p",{children:l.fullDescription}),l.features&&l.features.length>0&&f.jsxs(f.Fragment,{children:[f.jsx("h4",{children:"Points Clés"}),f.jsx("ul",{children:l.features.map((o,c)=>f.jsx("li",{children:o},c))})]}),l.useCases&&f.jsxs(f.Fragment,{children:[f.jsx("h4",{children:"Cas d'Usage"}),f.jsx("p",{children:l.useCases})]})]})]})})});ph.displayName="ServiceDetailModal";const gh=Bt.memo(()=>f.jsxs("div",{className:"skeleton-card",role:"status","aria-label":"Chargement du service",children:[f.jsx("div",{className:"skeleton-icon"}),f.jsx("div",{className:"skeleton-title"}),f.jsx("div",{className:"skeleton-text"}),f.jsx("div",{className:"skeleton-text"}),f.jsx("div",{className:"skeleton-text"})]}));gh.displayName="ServiceCardSkeleton";const vh=Bt.memo(({service:l,index:r,onServiceClick:u})=>{const o=D.useCallback(()=>{u==null||u(l)},[u,l]),c=D.useCallback(d=>{(d.key==="Enter"||d.key===" ")&&(d.preventDefault(),o())},[o]);return f.jsxs("article",{className:`service-card stagger-${r+1}`,role:"button",tabIndex:"0",onClick:o,onKeyDown:c,"aria-label":`En savoir plus sur ${l.title}`,style:{"--card-gradient-start":l.gradientStart,"--card-gradient-end":l.gradientEnd},children:[f.jsx("div",{className:"service-category",children:l.category}),f.jsx("div",{className:"service-icon",children:l.icon}),f.jsx("h3",{className:"service-card-title",children:l.title}),f.jsx("p",{className:"service-card-description",children:l.description}),f.jsxs("span",{className:"service-card-link",children:["En savoir plus",f.jsx(kv,{})]})]})});vh.displayName="ServiceCard";function Hv(){const[l,r]=D.useState(!0),[u,o]=D.useState(null);D.useEffect(()=>{const p=setTimeout(()=>{r(!1)},1200);return()=>clearTimeout(p)},[]);const c=D.useMemo(()=>[{id:"web-mobile",title:"Développement Web & Mobile",description:"Applications web modernes et mobiles avec les dernières technologies React, Vue.js et React Native.",icon:f.jsx(Nv,{}),category:"Développement",gradientStart:"#5B7CFF",gradientEnd:"#8BA3FF",fullDescription:"Nous concevons et développons des applications web robustes et des expériences mobiles fluides, en utilisant des frameworks de pointe comme React, Vue.js pour le web, et React Native pour des applications multiplateformes performantes. Nos solutions sont responsives, optimisées pour la performance et l'expérience utilisateur, et conçues pour évoluer avec vos besoins.",features:["Développement Front-end (React, Vue.js, Angular)","Développement Back-end (Node.js, Python, PHP)","Applications Mobiles NATIVES et Hybrides (React Native, Flutter)","UX/UI Design intuitif et responsive","Intégration d'API et microservices"],useCases:"Sites e-commerce, plateformes SaaS, applications métier, portails clients, MVP de startups."},{id:"ai",title:"Intelligence Artificielle",description:"Solutions d'IA personnalisées, machine learning et deep learning pour automatiser vos processus.",icon:f.jsx(_v,{}),category:"IA & ML",gradientStart:"#8B5CF6",gradientEnd:"#A78BFA",fullDescription:"Exploitez le potentiel de l'intelligence artificielle pour transformer vos opérations. Nous développons des modèles de Machine Learning et de Deep Learning sur mesure, de la reconnaissance d'images à l'analyse prédictive, en passant par le traitement du langage naturel (NLP). Nos solutions IA sont intégrées de manière transparente à votre infrastructure existante.",features:["Machine Learning & Deep Learning","Traitement du Langage Naturel (NLP)","Vision par Ordinateur","Analyse Prédictive et Recommandation","Bots conversationnels et assistants virtuels"],useCases:"Optimisation de processus, personnalisation de l'expérience client, détection de fraudes, maintenance prédictive, analyse de données non structurées."},{id:"governance",title:"Governance des Données",description:"Stratégies de gouvernance des données pour assurer qualité, sécurité et conformité.",icon:f.jsx(Cv,{}),category:"Gouvernance",gradientStart:"#06B6D4",gradientEnd:"#22D3EE",fullDescription:"La gouvernance des données est essentielle pour une gestion efficace et conforme de votre patrimoine informationnel. Nous vous aidons à établir des politiques, des processus et des rôles clairs pour garantir la qualité, la sécurité, la confidentialité et la conformité réglementaire de vos données, tout en maximisant leur valeur pour votre entreprise.",features:["Audit et Évaluation de la Maturité des Données","Définition de Politiques de Données","Gestion de la Qualité des Données (DQM)","Conformité Réglementaire (RGPD, HIPAA, etc.)","Sécurité et Confidentialité des Données"],useCases:"Mise en conformité RGPD, amélioration de la fiabilité des rapports, réduction des risques liés aux données, optimisation des processus décisionnels."},{id:"bi",title:"Business Intelligence",description:"Tableaux de bord interactifs et rapports analytiques pour une prise de décision éclairée.",icon:f.jsx(zv,{}),category:"Analytics",gradientStart:"#10B981",gradientEnd:"#34D399",fullDescription:"Transformez vos données brutes en informations exploitables avec nos solutions de Business Intelligence. Nous concevons et implémentons des tableaux de bord interactifs, des rapports personnalisés et des outils d'analyse avancés qui vous offrent une vue à 360 degrés de vos performances, facilitant ainsi la prise de décisions stratégiques.",features:["Conception et Développement de Tableaux de Bord","Reporting Automatisé","Analyse Ad-hoc et Exploration de Données","Intégration de Sources de Données Multiples","Formation et Support aux Utilisateurs"],useCases:"Suivi des ventes, analyse financière, optimisation marketing, performance opérationnelle, compréhension du comportement client."},{id:"data-management",title:"Management des données",description:"Architecture et gestion de bases de données scalables pour optimiser vos performances.",icon:f.jsx(Dv,{}),category:"Infrastructure",gradientStart:"#F59E0B",gradientEnd:"#FBBF24",fullDescription:"Une gestion de données efficace est le pilier de toute stratégie digitale réussie. Nous vous accompagnons dans la conception, l'implémentation et la maintenance de vos infrastructures de données, qu'il s'agisse de bases de données relationnelles, NoSQL, ou de data lakes. Nous nous assurons que vos données sont accessibles, sécurisées et performantes.",features:["Modélisation et Conception de Bases de Données","Optimisation des Performances (SQL/NoSQL)","Migration de Données","Sécurité et Sauvegarde des Données","Intégration et ETL (Extract, Transform, Load)"],useCases:"Centralisation des données, amélioration des temps de réponse des applications, préparation des données pour l'analyse, réduction des coûts de stockage."},{id:"devops",title:"DevOps & Cloud",description:"Infrastructure cloud moderne, CI/CD et automatisation pour accélérer vos déploiements.",icon:f.jsx(Mv,{}),category:"Cloud",gradientStart:"#EF4444",gradientEnd:"#F87171",fullDescription:"Accélérez le cycle de vie de vos applications et optimisez votre infrastructure avec nos services DevOps et Cloud. Nous mettons en place des pipelines CI/CD robustes, des infrastructures as Code (IaC) et des stratégies de déploiement continu sur les principales plateformes cloud (AWS, Azure, GCP), garantissant rapidité, fiabilité et scalabilité.",features:["Mise en place de CI/CD (Jenkins, GitLab CI, GitHub Actions)","Infrastructure as Code (Terraform, Ansible)","Conteneurisation (Docker, Kubernetes)","Migration et Optimisation Cloud (AWS, Azure, GCP)","Surveillance et Logging (Prometheus, Grafana, ELK Stack)"],useCases:"Déploiement rapide de nouvelles fonctionnalités, réduction des erreurs de production, scalabilité des applications, optimisation des coûts cloud."}],[]),d=D.useCallback(p=>{o(p)},[]),h=D.useCallback(()=>{o(null)},[]),v=D.useMemo(()=>f.jsx("div",{className:"services-grid",role:"list",children:c.map((p,b)=>f.jsx(vh,{service:p,index:b,onServiceClick:d},p.id))}),[c,d]),g=D.useMemo(()=>f.jsx("div",{className:"services-grid","aria-busy":"true",children:Array.from({length:6},(p,b)=>f.jsx(gh,{},`skeleton-${b}`))}),[]);return f.jsxs(f.Fragment,{children:[f.jsx("style",{children:Av}),f.jsxs("section",{className:"services-section",id:"services","aria-labelledby":"services-title",children:[f.jsx("div",{className:"grid-overlay","aria-hidden":"true"}),f.jsxs("div",{className:"services-container",children:[f.jsxs("header",{className:"services-header",children:[f.jsxs("div",{className:"services-badge",children:[f.jsx(Bv,{className:"badge-icon"}),"Nos Expertises"]}),f.jsx("h2",{id:"services-title",className:"services-title",children:"Services & Solutions"}),f.jsx("p",{className:"services-subtitle",children:"Des solutions technologiques sur mesure pour transformer votre vision en réalité digitale et propulser votre entreprise vers le futur"})]}),l?g:v]}),u&&f.jsx(ph,{service:u,onClose:h})]})]})}function yh(l,r){return function(){return l.apply(r,arguments)}}const{toString:Lv}=Object.prototype,{getPrototypeOf:Pu}=Object,{iterator:ts,toStringTag:bh}=Symbol,as=(l=>r=>{const u=Lv.call(r);return l[u]||(l[u]=u.slice(8,-1).toLowerCase())})(Object.create(null)),Ht=l=>(l=l.toLowerCase(),r=>as(r)===l),ns=l=>r=>typeof r===l,{isArray:In}=Array,$n=ns("undefined");function ri(l){return l!==null&&!$n(l)&&l.constructor!==null&&!$n(l.constructor)&&ft(l.constructor.isBuffer)&&l.constructor.isBuffer(l)}const xh=Ht("ArrayBuffer");function Uv(l){let r;return typeof ArrayBuffer<"u"&&ArrayBuffer.isView?r=ArrayBuffer.isView(l):r=l&&l.buffer&&xh(l.buffer),r}const qv=ns("string"),ft=ns("function"),Sh=ns("number"),si=l=>l!==null&&typeof l=="object",Yv=l=>l===!0||l===!1,Gr=l=>{if(as(l)!=="object")return!1;const r=Pu(l);return(r===null||r===Object.prototype||Object.getPrototypeOf(r)===null)&&!(bh in l)&&!(ts in l)},Fv=l=>{if(!si(l)||ri(l))return!1;try{return Object.keys(l).length===0&&Object.getPrototypeOf(l)===Object.prototype}catch{return!1}},Gv=Ht("Date"),Vv=Ht("File"),Xv=Ht("Blob"),Qv=Ht("FileList"),Zv=l=>si(l)&&ft(l.pipe),Kv=l=>{let r;return l&&(typeof FormData=="function"&&l instanceof FormData||ft(l.append)&&((r=as(l))==="formdata"||r==="object"&&ft(l.toString)&&l.toString()==="[object FormData]"))},Jv=Ht("URLSearchParams"),[$v,Wv,Pv,Iv]=["ReadableStream","Request","Response","Headers"].map(Ht),ey=l=>l.trim?l.trim():l.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"");function oi(l,r,{allOwnKeys:u=!1}={}){if(l===null||typeof l>"u")return;let o,c;if(typeof l!="object"&&(l=[l]),In(l))for(o=0,c=l.length;o<c;o++)r.call(null,l[o],o,l);else{if(ri(l))return;const d=u?Object.getOwnPropertyNames(l):Object.keys(l),h=d.length;let v;for(o=0;o<h;o++)v=d[o],r.call(null,l[v],v,l)}}function wh(l,r){if(ri(l))return null;r=r.toLowerCase();const u=Object.keys(l);let o=u.length,c;for(;o-- >0;)if(c=u[o],r===c.toLowerCase())return c;return null}const cn=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:global,Eh=l=>!$n(l)&&l!==cn;function Bu(){const{caseless:l,skipUndefined:r}=Eh(this)&&this||{},u={},o=(c,d)=>{const h=l&&wh(u,d)||d;Gr(u[h])&&Gr(c)?u[h]=Bu(u[h],c):Gr(c)?u[h]=Bu({},c):In(c)?u[h]=c.slice():(!r||!$n(c))&&(u[h]=c)};for(let c=0,d=arguments.length;c<d;c++)arguments[c]&&oi(arguments[c],o);return u}const ty=(l,r,u,{allOwnKeys:o}={})=>(oi(r,(c,d)=>{u&&ft(c)?l[d]=yh(c,u):l[d]=c},{allOwnKeys:o}),l),ay=l=>(l.charCodeAt(0)===65279&&(l=l.slice(1)),l),ny=(l,r,u,o)=>{l.prototype=Object.create(r.prototype,o),l.prototype.constructor=l,Object.defineProperty(l,"super",{value:r.prototype}),u&&Object.assign(l.prototype,u)},ly=(l,r,u,o)=>{let c,d,h;const v={};if(r=r||{},l==null)return r;do{for(c=Object.getOwnPropertyNames(l),d=c.length;d-- >0;)h=c[d],(!o||o(h,l,r))&&!v[h]&&(r[h]=l[h],v[h]=!0);l=u!==!1&&Pu(l)}while(l&&(!u||u(l,r))&&l!==Object.prototype);return r},iy=(l,r,u)=>{l=String(l),(u===void 0||u>l.length)&&(u=l.length),u-=r.length;const o=l.indexOf(r,u);return o!==-1&&o===u},ry=l=>{if(!l)return null;if(In(l))return l;let r=l.length;if(!Sh(r))return null;const u=new Array(r);for(;r-- >0;)u[r]=l[r];return u},sy=(l=>r=>l&&r instanceof l)(typeof Uint8Array<"u"&&Pu(Uint8Array)),oy=(l,r)=>{const o=(l&&l[ts]).call(l);let c;for(;(c=o.next())&&!c.done;){const d=c.value;r.call(l,d[0],d[1])}},uy=(l,r)=>{let u;const o=[];for(;(u=l.exec(r))!==null;)o.push(u);return o},cy=Ht("HTMLFormElement"),fy=l=>l.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g,function(u,o,c){return o.toUpperCase()+c}),O0=(({hasOwnProperty:l})=>(r,u)=>l.call(r,u))(Object.prototype),dy=Ht("RegExp"),jh=(l,r)=>{const u=Object.getOwnPropertyDescriptors(l),o={};oi(u,(c,d)=>{let h;(h=r(c,d,l))!==!1&&(o[d]=h||c)}),Object.defineProperties(l,o)},my=l=>{jh(l,(r,u)=>{if(ft(l)&&["arguments","caller","callee"].indexOf(u)!==-1)return!1;const o=l[u];if(ft(o)){if(r.enumerable=!1,"writable"in r){r.writable=!1;return}r.set||(r.set=()=>{throw Error("Can not rewrite read-only method '"+u+"'")})}})},hy=(l,r)=>{const u={},o=c=>{c.forEach(d=>{u[d]=!0})};return In(l)?o(l):o(String(l).split(r)),u},py=()=>{},gy=(l,r)=>l!=null&&Number.isFinite(l=+l)?l:r;function vy(l){return!!(l&&ft(l.append)&&l[bh]==="FormData"&&l[ts])}const yy=l=>{const r=new Array(10),u=(o,c)=>{if(si(o)){if(r.indexOf(o)>=0)return;if(ri(o))return o;if(!("toJSON"in o)){r[c]=o;const d=In(o)?[]:{};return oi(o,(h,v)=>{const g=u(h,c+1);!$n(g)&&(d[v]=g)}),r[c]=void 0,d}}return o};return u(l,0)},by=Ht("AsyncFunction"),xy=l=>l&&(si(l)||ft(l))&&ft(l.then)&&ft(l.catch),Th=((l,r)=>l?setImmediate:r?((u,o)=>(cn.addEventListener("message",({source:c,data:d})=>{c===cn&&d===u&&o.length&&o.shift()()},!1),c=>{o.push(c),cn.postMessage(u,"*")}))(`axios@${Math.random()}`,[]):u=>setTimeout(u))(typeof setImmediate=="function",ft(cn.postMessage)),Sy=typeof queueMicrotask<"u"?queueMicrotask.bind(cn):typeof process<"u"&&process.nextTick||Th,wy=l=>l!=null&&ft(l[ts]),H={isArray:In,isArrayBuffer:xh,isBuffer:ri,isFormData:Kv,isArrayBufferView:Uv,isString:qv,isNumber:Sh,isBoolean:Yv,isObject:si,isPlainObject:Gr,isEmptyObject:Fv,isReadableStream:$v,isRequest:Wv,isResponse:Pv,isHeaders:Iv,isUndefined:$n,isDate:Gv,isFile:Vv,isBlob:Xv,isRegExp:dy,isFunction:ft,isStream:Zv,isURLSearchParams:Jv,isTypedArray:sy,isFileList:Qv,forEach:oi,merge:Bu,extend:ty,trim:ey,stripBOM:ay,inherits:ny,toFlatObject:ly,kindOf:as,kindOfTest:Ht,endsWith:iy,toArray:ry,forEachEntry:oy,matchAll:uy,isHTMLForm:cy,hasOwnProperty:O0,hasOwnProp:O0,reduceDescriptors:jh,freezeMethods:my,toObjectSet:hy,toCamelCase:fy,noop:py,toFiniteNumber:gy,findKey:wh,global:cn,isContextDefined:Eh,isSpecCompliantForm:vy,toJSONObject:yy,isAsyncFn:by,isThenable:xy,setImmediate:Th,asap:Sy,isIterable:wy};function me(l,r,u,o,c){Error.call(this),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=new Error().stack,this.message=l,this.name="AxiosError",r&&(this.code=r),u&&(this.config=u),o&&(this.request=o),c&&(this.response=c,this.status=c.status?c.status:null)}H.inherits(me,Error,{toJSON:function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:H.toJSONObject(this.config),code:this.code,status:this.status}}});const Oh=me.prototype,Rh={};["ERR_BAD_OPTION_VALUE","ERR_BAD_OPTION","ECONNABORTED","ETIMEDOUT","ERR_NETWORK","ERR_FR_TOO_MANY_REDIRECTS","ERR_DEPRECATED","ERR_BAD_RESPONSE","ERR_BAD_REQUEST","ERR_CANCELED","ERR_NOT_SUPPORT","ERR_INVALID_URL"].forEach(l=>{Rh[l]={value:l}});Object.defineProperties(me,Rh);Object.defineProperty(Oh,"isAxiosError",{value:!0});me.from=(l,r,u,o,c,d)=>{const h=Object.create(Oh);H.toFlatObject(l,h,function(b){return b!==Error.prototype},p=>p!=="isAxiosError");const v=l&&l.message?l.message:"Error",g=r==null&&l?l.code:r;return me.call(h,v,g,u,o,c),l&&h.cause==null&&Object.defineProperty(h,"cause",{value:l,configurable:!0}),h.name=l&&l.name||"Error",d&&Object.assign(h,d),h};const Ey=null;function Hu(l){return H.isPlainObject(l)||H.isArray(l)}function Ah(l){return H.endsWith(l,"[]")?l.slice(0,-2):l}function R0(l,r,u){return l?l.concat(r).map(function(c,d){return c=Ah(c),!u&&d?"["+c+"]":c}).join(u?".":""):r}function jy(l){return H.isArray(l)&&!l.some(Hu)}const Ty=H.toFlatObject(H,{},null,function(r){return/^is[A-Z]/.test(r)});function ls(l,r,u){if(!H.isObject(l))throw new TypeError("target must be an object");r=r||new FormData,u=H.toFlatObject(u,{metaTokens:!0,dots:!1,indexes:!1},!1,function(T,E){return!H.isUndefined(E[T])});const o=u.metaTokens,c=u.visitor||b,d=u.dots,h=u.indexes,g=(u.Blob||typeof Blob<"u"&&Blob)&&H.isSpecCompliantForm(r);if(!H.isFunction(c))throw new TypeError("visitor must be a function");function p(x){if(x===null)return"";if(H.isDate(x))return x.toISOString();if(H.isBoolean(x))return x.toString();if(!g&&H.isBlob(x))throw new me("Blob is not supported. Use a Buffer instead.");return H.isArrayBuffer(x)||H.isTypedArray(x)?g&&typeof Blob=="function"?new Blob([x]):Buffer.from(x):x}function b(x,T,E){let _=x;if(x&&!E&&typeof x=="object"){if(H.endsWith(T,"{}"))T=o?T:T.slice(0,-2),x=JSON.stringify(x);else if(H.isArray(x)&&jy(x)||(H.isFileList(x)||H.endsWith(T,"[]"))&&(_=H.toArray(x)))return T=Ah(T),_.forEach(function(C,Q){!(H.isUndefined(C)||C===null)&&r.append(h===!0?R0([T],Q,d):h===null?T:T+"[]",p(C))}),!1}return Hu(x)?!0:(r.append(R0(E,T,d),p(x)),!1)}const w=[],R=Object.assign(Ty,{defaultVisitor:b,convertValue:p,isVisitable:Hu});function j(x,T){if(!H.isUndefined(x)){if(w.indexOf(x)!==-1)throw Error("Circular reference detected in "+T.join("."));w.push(x),H.forEach(x,function(_,M){(!(H.isUndefined(_)||_===null)&&c.call(r,_,H.isString(M)?M.trim():M,T,R))===!0&&j(_,T?T.concat(M):[M])}),w.pop()}}if(!H.isObject(l))throw new TypeError("data must be an object");return j(l),r}function A0(l){const r={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+","%00":"\0"};return encodeURIComponent(l).replace(/[!'()~]|%20|%00/g,function(o){return r[o]})}function Iu(l,r){this._pairs=[],l&&ls(l,this,r)}const Nh=Iu.prototype;Nh.append=function(r,u){this._pairs.push([r,u])};Nh.toString=function(r){const u=r?function(o){return r.call(this,o,A0)}:A0;return this._pairs.map(function(c){return u(c[0])+"="+u(c[1])},"").join("&")};function Oy(l){return encodeURIComponent(l).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+")}function _h(l,r,u){if(!r)return l;const o=u&&u.encode||Oy;H.isFunction(u)&&(u={serialize:u});const c=u&&u.serialize;let d;if(c?d=c(r,u):d=H.isURLSearchParams(r)?r.toString():new Iu(r,u).toString(o),d){const h=l.indexOf("#");h!==-1&&(l=l.slice(0,h)),l+=(l.indexOf("?")===-1?"?":"&")+d}return l}class N0{constructor(){this.handlers=[]}use(r,u,o){return this.handlers.push({fulfilled:r,rejected:u,synchronous:o?o.synchronous:!1,runWhen:o?o.runWhen:null}),this.handlers.length-1}eject(r){this.handlers[r]&&(this.handlers[r]=null)}clear(){this.handlers&&(this.handlers=[])}forEach(r){H.forEach(this.handlers,function(o){o!==null&&r(o)})}}const Ch={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1},Ry=typeof URLSearchParams<"u"?URLSearchParams:Iu,Ay=typeof FormData<"u"?FormData:null,Ny=typeof Blob<"u"?Blob:null,_y={isBrowser:!0,classes:{URLSearchParams:Ry,FormData:Ay,Blob:Ny},protocols:["http","https","file","blob","url","data"]},ec=typeof window<"u"&&typeof document<"u",Lu=typeof navigator=="object"&&navigator||void 0,Cy=ec&&(!Lu||["ReactNative","NativeScript","NS"].indexOf(Lu.product)<0),zy=typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope&&typeof self.importScripts=="function",Dy=ec&&window.location.href||"http://localhost",My=Object.freeze(Object.defineProperty({__proto__:null,hasBrowserEnv:ec,hasStandardBrowserEnv:Cy,hasStandardBrowserWebWorkerEnv:zy,navigator:Lu,origin:Dy},Symbol.toStringTag,{value:"Module"})),it={...My,..._y};function ky(l,r){return ls(l,new it.classes.URLSearchParams,{visitor:function(u,o,c,d){return it.isNode&&H.isBuffer(u)?(this.append(o,u.toString("base64")),!1):d.defaultVisitor.apply(this,arguments)},...r})}function By(l){return H.matchAll(/\w+|\[(\w*)]/g,l).map(r=>r[0]==="[]"?"":r[1]||r[0])}function Hy(l){const r={},u=Object.keys(l);let o;const c=u.length;let d;for(o=0;o<c;o++)d=u[o],r[d]=l[d];return r}function zh(l){function r(u,o,c,d){let h=u[d++];if(h==="__proto__")return!0;const v=Number.isFinite(+h),g=d>=u.length;return h=!h&&H.isArray(c)?c.length:h,g?(H.hasOwnProp(c,h)?c[h]=[c[h],o]:c[h]=o,!v):((!c[h]||!H.isObject(c[h]))&&(c[h]=[]),r(u,o,c[h],d)&&H.isArray(c[h])&&(c[h]=Hy(c[h])),!v)}if(H.isFormData(l)&&H.isFunction(l.entries)){const u={};return H.forEachEntry(l,(o,c)=>{r(By(o),c,u,0)}),u}return null}function Ly(l,r,u){if(H.isString(l))try{return(r||JSON.parse)(l),H.trim(l)}catch(o){if(o.name!=="SyntaxError")throw o}return(u||JSON.stringify)(l)}const ui={transitional:Ch,adapter:["xhr","http","fetch"],transformRequest:[function(r,u){const o=u.getContentType()||"",c=o.indexOf("application/json")>-1,d=H.isObject(r);if(d&&H.isHTMLForm(r)&&(r=new FormData(r)),H.isFormData(r))return c?JSON.stringify(zh(r)):r;if(H.isArrayBuffer(r)||H.isBuffer(r)||H.isStream(r)||H.isFile(r)||H.isBlob(r)||H.isReadableStream(r))return r;if(H.isArrayBufferView(r))return r.buffer;if(H.isURLSearchParams(r))return u.setContentType("application/x-www-form-urlencoded;charset=utf-8",!1),r.toString();let v;if(d){if(o.indexOf("application/x-www-form-urlencoded")>-1)return ky(r,this.formSerializer).toString();if((v=H.isFileList(r))||o.indexOf("multipart/form-data")>-1){const g=this.env&&this.env.FormData;return ls(v?{"files[]":r}:r,g&&new g,this.formSerializer)}}return d||c?(u.setContentType("application/json",!1),Ly(r)):r}],transformResponse:[function(r){const u=this.transitional||ui.transitional,o=u&&u.forcedJSONParsing,c=this.responseType==="json";if(H.isResponse(r)||H.isReadableStream(r))return r;if(r&&H.isString(r)&&(o&&!this.responseType||c)){const h=!(u&&u.silentJSONParsing)&&c;try{return JSON.parse(r,this.parseReviver)}catch(v){if(h)throw v.name==="SyntaxError"?me.from(v,me.ERR_BAD_RESPONSE,this,null,this.response):v}}return r}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:it.classes.FormData,Blob:it.classes.Blob},validateStatus:function(r){return r>=200&&r<300},headers:{common:{Accept:"application/json, text/plain, */*","Content-Type":void 0}}};H.forEach(["delete","get","head","post","put","patch"],l=>{ui.headers[l]={}});const Uy=H.toObjectSet(["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"]),qy=l=>{const r={};let u,o,c;return l&&l.split(`
`).forEach(function(h){c=h.indexOf(":"),u=h.substring(0,c).trim().toLowerCase(),o=h.substring(c+1).trim(),!(!u||r[u]&&Uy[u])&&(u==="set-cookie"?r[u]?r[u].push(o):r[u]=[o]:r[u]=r[u]?r[u]+", "+o:o)}),r},_0=Symbol("internals");function ti(l){return l&&String(l).trim().toLowerCase()}function Vr(l){return l===!1||l==null?l:H.isArray(l)?l.map(Vr):String(l)}function Yy(l){const r=Object.create(null),u=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;let o;for(;o=u.exec(l);)r[o[1]]=o[2];return r}const Fy=l=>/^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(l.trim());function _u(l,r,u,o,c){if(H.isFunction(o))return o.call(this,r,u);if(c&&(r=u),!!H.isString(r)){if(H.isString(o))return r.indexOf(o)!==-1;if(H.isRegExp(o))return o.test(r)}}function Gy(l){return l.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,(r,u,o)=>u.toUpperCase()+o)}function Vy(l,r){const u=H.toCamelCase(" "+r);["get","set","has"].forEach(o=>{Object.defineProperty(l,o+u,{value:function(c,d,h){return this[o].call(this,r,c,d,h)},configurable:!0})})}let dt=class{constructor(r){r&&this.set(r)}set(r,u,o){const c=this;function d(v,g,p){const b=ti(g);if(!b)throw new Error("header name must be a non-empty string");const w=H.findKey(c,b);(!w||c[w]===void 0||p===!0||p===void 0&&c[w]!==!1)&&(c[w||g]=Vr(v))}const h=(v,g)=>H.forEach(v,(p,b)=>d(p,b,g));if(H.isPlainObject(r)||r instanceof this.constructor)h(r,u);else if(H.isString(r)&&(r=r.trim())&&!Fy(r))h(qy(r),u);else if(H.isObject(r)&&H.isIterable(r)){let v={},g,p;for(const b of r){if(!H.isArray(b))throw TypeError("Object iterator must return a key-value pair");v[p=b[0]]=(g=v[p])?H.isArray(g)?[...g,b[1]]:[g,b[1]]:b[1]}h(v,u)}else r!=null&&d(u,r,o);return this}get(r,u){if(r=ti(r),r){const o=H.findKey(this,r);if(o){const c=this[o];if(!u)return c;if(u===!0)return Yy(c);if(H.isFunction(u))return u.call(this,c,o);if(H.isRegExp(u))return u.exec(c);throw new TypeError("parser must be boolean|regexp|function")}}}has(r,u){if(r=ti(r),r){const o=H.findKey(this,r);return!!(o&&this[o]!==void 0&&(!u||_u(this,this[o],o,u)))}return!1}delete(r,u){const o=this;let c=!1;function d(h){if(h=ti(h),h){const v=H.findKey(o,h);v&&(!u||_u(o,o[v],v,u))&&(delete o[v],c=!0)}}return H.isArray(r)?r.forEach(d):d(r),c}clear(r){const u=Object.keys(this);let o=u.length,c=!1;for(;o--;){const d=u[o];(!r||_u(this,this[d],d,r,!0))&&(delete this[d],c=!0)}return c}normalize(r){const u=this,o={};return H.forEach(this,(c,d)=>{const h=H.findKey(o,d);if(h){u[h]=Vr(c),delete u[d];return}const v=r?Gy(d):String(d).trim();v!==d&&delete u[d],u[v]=Vr(c),o[v]=!0}),this}concat(...r){return this.constructor.concat(this,...r)}toJSON(r){const u=Object.create(null);return H.forEach(this,(o,c)=>{o!=null&&o!==!1&&(u[c]=r&&H.isArray(o)?o.join(", "):o)}),u}[Symbol.iterator](){return Object.entries(this.toJSON())[Symbol.iterator]()}toString(){return Object.entries(this.toJSON()).map(([r,u])=>r+": "+u).join(`
`)}getSetCookie(){return this.get("set-cookie")||[]}get[Symbol.toStringTag](){return"AxiosHeaders"}static from(r){return r instanceof this?r:new this(r)}static concat(r,...u){const o=new this(r);return u.forEach(c=>o.set(c)),o}static accessor(r){const o=(this[_0]=this[_0]={accessors:{}}).accessors,c=this.prototype;function d(h){const v=ti(h);o[v]||(Vy(c,h),o[v]=!0)}return H.isArray(r)?r.forEach(d):d(r),this}};dt.accessor(["Content-Type","Content-Length","Accept","Accept-Encoding","User-Agent","Authorization"]);H.reduceDescriptors(dt.prototype,({value:l},r)=>{let u=r[0].toUpperCase()+r.slice(1);return{get:()=>l,set(o){this[u]=o}}});H.freezeMethods(dt);function Cu(l,r){const u=this||ui,o=r||u,c=dt.from(o.headers);let d=o.data;return H.forEach(l,function(v){d=v.call(u,d,c.normalize(),r?r.status:void 0)}),c.normalize(),d}function Dh(l){return!!(l&&l.__CANCEL__)}function el(l,r,u){me.call(this,l??"canceled",me.ERR_CANCELED,r,u),this.name="CanceledError"}H.inherits(el,me,{__CANCEL__:!0});function Mh(l,r,u){const o=u.config.validateStatus;!u.status||!o||o(u.status)?l(u):r(new me("Request failed with status code "+u.status,[me.ERR_BAD_REQUEST,me.ERR_BAD_RESPONSE][Math.floor(u.status/100)-4],u.config,u.request,u))}function Xy(l){const r=/^([-+\w]{1,25})(:?\/\/|:)/.exec(l);return r&&r[1]||""}function Qy(l,r){l=l||10;const u=new Array(l),o=new Array(l);let c=0,d=0,h;return r=r!==void 0?r:1e3,function(g){const p=Date.now(),b=o[d];h||(h=p),u[c]=g,o[c]=p;let w=d,R=0;for(;w!==c;)R+=u[w++],w=w%l;if(c=(c+1)%l,c===d&&(d=(d+1)%l),p-h<r)return;const j=b&&p-b;return j?Math.round(R*1e3/j):void 0}}function Zy(l,r){let u=0,o=1e3/r,c,d;const h=(p,b=Date.now())=>{u=b,c=null,d&&(clearTimeout(d),d=null),l(...p)};return[(...p)=>{const b=Date.now(),w=b-u;w>=o?h(p,b):(c=p,d||(d=setTimeout(()=>{d=null,h(c)},o-w)))},()=>c&&h(c)]}const Jr=(l,r,u=3)=>{let o=0;const c=Qy(50,250);return Zy(d=>{const h=d.loaded,v=d.lengthComputable?d.total:void 0,g=h-o,p=c(g),b=h<=v;o=h;const w={loaded:h,total:v,progress:v?h/v:void 0,bytes:g,rate:p||void 0,estimated:p&&v&&b?(v-h)/p:void 0,event:d,lengthComputable:v!=null,[r?"download":"upload"]:!0};l(w)},u)},C0=(l,r)=>{const u=l!=null;return[o=>r[0]({lengthComputable:u,total:l,loaded:o}),r[1]]},z0=l=>(...r)=>H.asap(()=>l(...r)),Ky=it.hasStandardBrowserEnv?((l,r)=>u=>(u=new URL(u,it.origin),l.protocol===u.protocol&&l.host===u.host&&(r||l.port===u.port)))(new URL(it.origin),it.navigator&&/(msie|trident)/i.test(it.navigator.userAgent)):()=>!0,Jy=it.hasStandardBrowserEnv?{write(l,r,u,o,c,d,h){if(typeof document>"u")return;const v=[`${l}=${encodeURIComponent(r)}`];H.isNumber(u)&&v.push(`expires=${new Date(u).toUTCString()}`),H.isString(o)&&v.push(`path=${o}`),H.isString(c)&&v.push(`domain=${c}`),d===!0&&v.push("secure"),H.isString(h)&&v.push(`SameSite=${h}`),document.cookie=v.join("; ")},read(l){if(typeof document>"u")return null;const r=document.cookie.match(new RegExp("(?:^|; )"+l+"=([^;]*)"));return r?decodeURIComponent(r[1]):null},remove(l){this.write(l,"",Date.now()-864e5,"/")}}:{write(){},read(){return null},remove(){}};function $y(l){return/^([a-z][a-z\d+\-.]*:)?\/\//i.test(l)}function Wy(l,r){return r?l.replace(/\/?\/$/,"")+"/"+r.replace(/^\/+/,""):l}function kh(l,r,u){let o=!$y(r);return l&&(o||u==!1)?Wy(l,r):r}const D0=l=>l instanceof dt?{...l}:l;function dn(l,r){r=r||{};const u={};function o(p,b,w,R){return H.isPlainObject(p)&&H.isPlainObject(b)?H.merge.call({caseless:R},p,b):H.isPlainObject(b)?H.merge({},b):H.isArray(b)?b.slice():b}function c(p,b,w,R){if(H.isUndefined(b)){if(!H.isUndefined(p))return o(void 0,p,w,R)}else return o(p,b,w,R)}function d(p,b){if(!H.isUndefined(b))return o(void 0,b)}function h(p,b){if(H.isUndefined(b)){if(!H.isUndefined(p))return o(void 0,p)}else return o(void 0,b)}function v(p,b,w){if(w in r)return o(p,b);if(w in l)return o(void 0,p)}const g={url:d,method:d,data:d,baseURL:h,transformRequest:h,transformResponse:h,paramsSerializer:h,timeout:h,timeoutMessage:h,withCredentials:h,withXSRFToken:h,adapter:h,responseType:h,xsrfCookieName:h,xsrfHeaderName:h,onUploadProgress:h,onDownloadProgress:h,decompress:h,maxContentLength:h,maxBodyLength:h,beforeRedirect:h,transport:h,httpAgent:h,httpsAgent:h,cancelToken:h,socketPath:h,responseEncoding:h,validateStatus:v,headers:(p,b,w)=>c(D0(p),D0(b),w,!0)};return H.forEach(Object.keys({...l,...r}),function(b){const w=g[b]||c,R=w(l[b],r[b],b);H.isUndefined(R)&&w!==v||(u[b]=R)}),u}const Bh=l=>{const r=dn({},l);let{data:u,withXSRFToken:o,xsrfHeaderName:c,xsrfCookieName:d,headers:h,auth:v}=r;if(r.headers=h=dt.from(h),r.url=_h(kh(r.baseURL,r.url,r.allowAbsoluteUrls),l.params,l.paramsSerializer),v&&h.set("Authorization","Basic "+btoa((v.username||"")+":"+(v.password?unescape(encodeURIComponent(v.password)):""))),H.isFormData(u)){if(it.hasStandardBrowserEnv||it.hasStandardBrowserWebWorkerEnv)h.setContentType(void 0);else if(H.isFunction(u.getHeaders)){const g=u.getHeaders(),p=["content-type","content-length"];Object.entries(g).forEach(([b,w])=>{p.includes(b.toLowerCase())&&h.set(b,w)})}}if(it.hasStandardBrowserEnv&&(o&&H.isFunction(o)&&(o=o(r)),o||o!==!1&&Ky(r.url))){const g=c&&d&&Jy.read(d);g&&h.set(c,g)}return r},Py=typeof XMLHttpRequest<"u",Iy=Py&&function(l){return new Promise(function(u,o){const c=Bh(l);let d=c.data;const h=dt.from(c.headers).normalize();let{responseType:v,onUploadProgress:g,onDownloadProgress:p}=c,b,w,R,j,x;function T(){j&&j(),x&&x(),c.cancelToken&&c.cancelToken.unsubscribe(b),c.signal&&c.signal.removeEventListener("abort",b)}let E=new XMLHttpRequest;E.open(c.method.toUpperCase(),c.url,!0),E.timeout=c.timeout;function _(){if(!E)return;const C=dt.from("getAllResponseHeaders"in E&&E.getAllResponseHeaders()),V={data:!v||v==="text"||v==="json"?E.responseText:E.response,status:E.status,statusText:E.statusText,headers:C,config:l,request:E};Mh(function(J){u(J),T()},function(J){o(J),T()},V),E=null}"onloadend"in E?E.onloadend=_:E.onreadystatechange=function(){!E||E.readyState!==4||E.status===0&&!(E.responseURL&&E.responseURL.indexOf("file:")===0)||setTimeout(_)},E.onabort=function(){E&&(o(new me("Request aborted",me.ECONNABORTED,l,E)),E=null)},E.onerror=function(Q){const V=Q&&Q.message?Q.message:"Network Error",$=new me(V,me.ERR_NETWORK,l,E);$.event=Q||null,o($),E=null},E.ontimeout=function(){let Q=c.timeout?"timeout of "+c.timeout+"ms exceeded":"timeout exceeded";const V=c.transitional||Ch;c.timeoutErrorMessage&&(Q=c.timeoutErrorMessage),o(new me(Q,V.clarifyTimeoutError?me.ETIMEDOUT:me.ECONNABORTED,l,E)),E=null},d===void 0&&h.setContentType(null),"setRequestHeader"in E&&H.forEach(h.toJSON(),function(Q,V){E.setRequestHeader(V,Q)}),H.isUndefined(c.withCredentials)||(E.withCredentials=!!c.withCredentials),v&&v!=="json"&&(E.responseType=c.responseType),p&&([R,x]=Jr(p,!0),E.addEventListener("progress",R)),g&&E.upload&&([w,j]=Jr(g),E.upload.addEventListener("progress",w),E.upload.addEventListener("loadend",j)),(c.cancelToken||c.signal)&&(b=C=>{E&&(o(!C||C.type?new el(null,l,E):C),E.abort(),E=null)},c.cancelToken&&c.cancelToken.subscribe(b),c.signal&&(c.signal.aborted?b():c.signal.addEventListener("abort",b)));const M=Xy(c.url);if(M&&it.protocols.indexOf(M)===-1){o(new me("Unsupported protocol "+M+":",me.ERR_BAD_REQUEST,l));return}E.send(d||null)})},eb=(l,r)=>{const{length:u}=l=l?l.filter(Boolean):[];if(r||u){let o=new AbortController,c;const d=function(p){if(!c){c=!0,v();const b=p instanceof Error?p:this.reason;o.abort(b instanceof me?b:new el(b instanceof Error?b.message:b))}};let h=r&&setTimeout(()=>{h=null,d(new me(`timeout ${r} of ms exceeded`,me.ETIMEDOUT))},r);const v=()=>{l&&(h&&clearTimeout(h),h=null,l.forEach(p=>{p.unsubscribe?p.unsubscribe(d):p.removeEventListener("abort",d)}),l=null)};l.forEach(p=>p.addEventListener("abort",d));const{signal:g}=o;return g.unsubscribe=()=>H.asap(v),g}},tb=function*(l,r){let u=l.byteLength;if(u<r){yield l;return}let o=0,c;for(;o<u;)c=o+r,yield l.slice(o,c),o=c},ab=async function*(l,r){for await(const u of nb(l))yield*tb(u,r)},nb=async function*(l){if(l[Symbol.asyncIterator]){yield*l;return}const r=l.getReader();try{for(;;){const{done:u,value:o}=await r.read();if(u)break;yield o}}finally{await r.cancel()}},M0=(l,r,u,o)=>{const c=ab(l,r);let d=0,h,v=g=>{h||(h=!0,o&&o(g))};return new ReadableStream({async pull(g){try{const{done:p,value:b}=await c.next();if(p){v(),g.close();return}let w=b.byteLength;if(u){let R=d+=w;u(R)}g.enqueue(new Uint8Array(b))}catch(p){throw v(p),p}},cancel(g){return v(g),c.return()}},{highWaterMark:2})},k0=64*1024,{isFunction:qr}=H,lb=(({Request:l,Response:r})=>({Request:l,Response:r}))(H.global),{ReadableStream:B0,TextEncoder:H0}=H.global,L0=(l,...r)=>{try{return!!l(...r)}catch{return!1}},ib=l=>{l=H.merge.call({skipUndefined:!0},lb,l);const{fetch:r,Request:u,Response:o}=l,c=r?qr(r):typeof fetch=="function",d=qr(u),h=qr(o);if(!c)return!1;const v=c&&qr(B0),g=c&&(typeof H0=="function"?(x=>T=>x.encode(T))(new H0):async x=>new Uint8Array(await new u(x).arrayBuffer())),p=d&&v&&L0(()=>{let x=!1;const T=new u(it.origin,{body:new B0,method:"POST",get duplex(){return x=!0,"half"}}).headers.has("Content-Type");return x&&!T}),b=h&&v&&L0(()=>H.isReadableStream(new o("").body)),w={stream:b&&(x=>x.body)};c&&["text","arrayBuffer","blob","formData","stream"].forEach(x=>{!w[x]&&(w[x]=(T,E)=>{let _=T&&T[x];if(_)return _.call(T);throw new me(`Response type '${x}' is not supported`,me.ERR_NOT_SUPPORT,E)})});const R=async x=>{if(x==null)return 0;if(H.isBlob(x))return x.size;if(H.isSpecCompliantForm(x))return(await new u(it.origin,{method:"POST",body:x}).arrayBuffer()).byteLength;if(H.isArrayBufferView(x)||H.isArrayBuffer(x))return x.byteLength;if(H.isURLSearchParams(x)&&(x=x+""),H.isString(x))return(await g(x)).byteLength},j=async(x,T)=>{const E=H.toFiniteNumber(x.getContentLength());return E??R(T)};return async x=>{let{url:T,method:E,data:_,signal:M,cancelToken:C,timeout:Q,onDownloadProgress:V,onUploadProgress:$,responseType:J,headers:ie,withCredentials:F="same-origin",fetchOptions:Z}=Bh(x),W=r||fetch;J=J?(J+"").toLowerCase():"text";let U=eb([M,C&&C.toAbortSignal()],Q),ee=null;const P=U&&U.unsubscribe&&(()=>{U.unsubscribe()});let we;try{if($&&p&&E!=="get"&&E!=="head"&&(we=await j(ie,_))!==0){let G=new u(T,{method:"POST",body:_,duplex:"half"}),ae;if(H.isFormData(_)&&(ae=G.headers.get("content-type"))&&ie.setContentType(ae),G.body){const[ne,I]=C0(we,Jr(z0($)));_=M0(G.body,k0,ne,I)}}H.isString(F)||(F=F?"include":"omit");const K=d&&"credentials"in u.prototype,se={...Z,signal:U,method:E.toUpperCase(),headers:ie.normalize().toJSON(),body:_,duplex:"half",credentials:K?F:void 0};ee=d&&new u(T,se);let te=await(d?W(ee,Z):W(T,se));const be=b&&(J==="stream"||J==="response");if(b&&(V||be&&P)){const G={};["status","statusText","headers"].forEach(he=>{G[he]=te[he]});const ae=H.toFiniteNumber(te.headers.get("content-length")),[ne,I]=V&&C0(ae,Jr(z0(V),!0))||[];te=new o(M0(te.body,k0,ne,()=>{I&&I(),P&&P()}),G)}J=J||"text";let O=await w[H.findKey(w,J)||"text"](te,x);return!be&&P&&P(),await new Promise((G,ae)=>{Mh(G,ae,{data:O,headers:dt.from(te.headers),status:te.status,statusText:te.statusText,config:x,request:ee})})}catch(K){throw P&&P(),K&&K.name==="TypeError"&&/Load failed|fetch/i.test(K.message)?Object.assign(new me("Network Error",me.ERR_NETWORK,x,ee),{cause:K.cause||K}):me.from(K,K&&K.code,x,ee)}}},rb=new Map,Hh=l=>{let r=l&&l.env||{};const{fetch:u,Request:o,Response:c}=r,d=[o,c,u];let h=d.length,v=h,g,p,b=rb;for(;v--;)g=d[v],p=b.get(g),p===void 0&&b.set(g,p=v?new Map:ib(r)),b=p;return p};Hh();const tc={http:Ey,xhr:Iy,fetch:{get:Hh}};H.forEach(tc,(l,r)=>{if(l){try{Object.defineProperty(l,"name",{value:r})}catch{}Object.defineProperty(l,"adapterName",{value:r})}});const U0=l=>`- ${l}`,sb=l=>H.isFunction(l)||l===null||l===!1;function ob(l,r){l=H.isArray(l)?l:[l];const{length:u}=l;let o,c;const d={};for(let h=0;h<u;h++){o=l[h];let v;if(c=o,!sb(o)&&(c=tc[(v=String(o)).toLowerCase()],c===void 0))throw new me(`Unknown adapter '${v}'`);if(c&&(H.isFunction(c)||(c=c.get(r))))break;d[v||"#"+h]=c}if(!c){const h=Object.entries(d).map(([g,p])=>`adapter ${g} `+(p===!1?"is not supported by the environment":"is not available in the build"));let v=u?h.length>1?`since :
`+h.map(U0).join(`
`):" "+U0(h[0]):"as no adapter specified";throw new me("There is no suitable adapter to dispatch the request "+v,"ERR_NOT_SUPPORT")}return c}const Lh={getAdapter:ob,adapters:tc};function zu(l){if(l.cancelToken&&l.cancelToken.throwIfRequested(),l.signal&&l.signal.aborted)throw new el(null,l)}function q0(l){return zu(l),l.headers=dt.from(l.headers),l.data=Cu.call(l,l.transformRequest),["post","put","patch"].indexOf(l.method)!==-1&&l.headers.setContentType("application/x-www-form-urlencoded",!1),Lh.getAdapter(l.adapter||ui.adapter,l)(l).then(function(o){return zu(l),o.data=Cu.call(l,l.transformResponse,o),o.headers=dt.from(o.headers),o},function(o){return Dh(o)||(zu(l),o&&o.response&&(o.response.data=Cu.call(l,l.transformResponse,o.response),o.response.headers=dt.from(o.response.headers))),Promise.reject(o)})}const Uh="1.13.2",is={};["object","boolean","number","function","string","symbol"].forEach((l,r)=>{is[l]=function(o){return typeof o===l||"a"+(r<1?"n ":" ")+l}});const Y0={};is.transitional=function(r,u,o){function c(d,h){return"[Axios v"+Uh+"] Transitional option '"+d+"'"+h+(o?". "+o:"")}return(d,h,v)=>{if(r===!1)throw new me(c(h," has been removed"+(u?" in "+u:"")),me.ERR_DEPRECATED);return u&&!Y0[h]&&(Y0[h]=!0,console.warn(c(h," has been deprecated since v"+u+" and will be removed in the near future"))),r?r(d,h,v):!0}};is.spelling=function(r){return(u,o)=>(console.warn(`${o} is likely a misspelling of ${r}`),!0)};function ub(l,r,u){if(typeof l!="object")throw new me("options must be an object",me.ERR_BAD_OPTION_VALUE);const o=Object.keys(l);let c=o.length;for(;c-- >0;){const d=o[c],h=r[d];if(h){const v=l[d],g=v===void 0||h(v,d,l);if(g!==!0)throw new me("option "+d+" must be "+g,me.ERR_BAD_OPTION_VALUE);continue}if(u!==!0)throw new me("Unknown option "+d,me.ERR_BAD_OPTION)}}const Xr={assertOptions:ub,validators:is},Vt=Xr.validators;let fn=class{constructor(r){this.defaults=r||{},this.interceptors={request:new N0,response:new N0}}async request(r,u){try{return await this._request(r,u)}catch(o){if(o instanceof Error){let c={};Error.captureStackTrace?Error.captureStackTrace(c):c=new Error;const d=c.stack?c.stack.replace(/^.+\n/,""):"";try{o.stack?d&&!String(o.stack).endsWith(d.replace(/^.+\n.+\n/,""))&&(o.stack+=`
`+d):o.stack=d}catch{}}throw o}}_request(r,u){typeof r=="string"?(u=u||{},u.url=r):u=r||{},u=dn(this.defaults,u);const{transitional:o,paramsSerializer:c,headers:d}=u;o!==void 0&&Xr.assertOptions(o,{silentJSONParsing:Vt.transitional(Vt.boolean),forcedJSONParsing:Vt.transitional(Vt.boolean),clarifyTimeoutError:Vt.transitional(Vt.boolean)},!1),c!=null&&(H.isFunction(c)?u.paramsSerializer={serialize:c}:Xr.assertOptions(c,{encode:Vt.function,serialize:Vt.function},!0)),u.allowAbsoluteUrls!==void 0||(this.defaults.allowAbsoluteUrls!==void 0?u.allowAbsoluteUrls=this.defaults.allowAbsoluteUrls:u.allowAbsoluteUrls=!0),Xr.assertOptions(u,{baseUrl:Vt.spelling("baseURL"),withXsrfToken:Vt.spelling("withXSRFToken")},!0),u.method=(u.method||this.defaults.method||"get").toLowerCase();let h=d&&H.merge(d.common,d[u.method]);d&&H.forEach(["delete","get","head","post","put","patch","common"],x=>{delete d[x]}),u.headers=dt.concat(h,d);const v=[];let g=!0;this.interceptors.request.forEach(function(T){typeof T.runWhen=="function"&&T.runWhen(u)===!1||(g=g&&T.synchronous,v.unshift(T.fulfilled,T.rejected))});const p=[];this.interceptors.response.forEach(function(T){p.push(T.fulfilled,T.rejected)});let b,w=0,R;if(!g){const x=[q0.bind(this),void 0];for(x.unshift(...v),x.push(...p),R=x.length,b=Promise.resolve(u);w<R;)b=b.then(x[w++],x[w++]);return b}R=v.length;let j=u;for(;w<R;){const x=v[w++],T=v[w++];try{j=x(j)}catch(E){T.call(this,E);break}}try{b=q0.call(this,j)}catch(x){return Promise.reject(x)}for(w=0,R=p.length;w<R;)b=b.then(p[w++],p[w++]);return b}getUri(r){r=dn(this.defaults,r);const u=kh(r.baseURL,r.url,r.allowAbsoluteUrls);return _h(u,r.params,r.paramsSerializer)}};H.forEach(["delete","get","head","options"],function(r){fn.prototype[r]=function(u,o){return this.request(dn(o||{},{method:r,url:u,data:(o||{}).data}))}});H.forEach(["post","put","patch"],function(r){function u(o){return function(d,h,v){return this.request(dn(v||{},{method:r,headers:o?{"Content-Type":"multipart/form-data"}:{},url:d,data:h}))}}fn.prototype[r]=u(),fn.prototype[r+"Form"]=u(!0)});let cb=class qh{constructor(r){if(typeof r!="function")throw new TypeError("executor must be a function.");let u;this.promise=new Promise(function(d){u=d});const o=this;this.promise.then(c=>{if(!o._listeners)return;let d=o._listeners.length;for(;d-- >0;)o._listeners[d](c);o._listeners=null}),this.promise.then=c=>{let d;const h=new Promise(v=>{o.subscribe(v),d=v}).then(c);return h.cancel=function(){o.unsubscribe(d)},h},r(function(d,h,v){o.reason||(o.reason=new el(d,h,v),u(o.reason))})}throwIfRequested(){if(this.reason)throw this.reason}subscribe(r){if(this.reason){r(this.reason);return}this._listeners?this._listeners.push(r):this._listeners=[r]}unsubscribe(r){if(!this._listeners)return;const u=this._listeners.indexOf(r);u!==-1&&this._listeners.splice(u,1)}toAbortSignal(){const r=new AbortController,u=o=>{r.abort(o)};return this.subscribe(u),r.signal.unsubscribe=()=>this.unsubscribe(u),r.signal}static source(){let r;return{token:new qh(function(c){r=c}),cancel:r}}};function fb(l){return function(u){return l.apply(null,u)}}function db(l){return H.isObject(l)&&l.isAxiosError===!0}const Uu={Continue:100,SwitchingProtocols:101,Processing:102,EarlyHints:103,Ok:200,Created:201,Accepted:202,NonAuthoritativeInformation:203,NoContent:204,ResetContent:205,PartialContent:206,MultiStatus:207,AlreadyReported:208,ImUsed:226,MultipleChoices:300,MovedPermanently:301,Found:302,SeeOther:303,NotModified:304,UseProxy:305,Unused:306,TemporaryRedirect:307,PermanentRedirect:308,BadRequest:400,Unauthorized:401,PaymentRequired:402,Forbidden:403,NotFound:404,MethodNotAllowed:405,NotAcceptable:406,ProxyAuthenticationRequired:407,RequestTimeout:408,Conflict:409,Gone:410,LengthRequired:411,PreconditionFailed:412,PayloadTooLarge:413,UriTooLong:414,UnsupportedMediaType:415,RangeNotSatisfiable:416,ExpectationFailed:417,ImATeapot:418,MisdirectedRequest:421,UnprocessableEntity:422,Locked:423,FailedDependency:424,TooEarly:425,UpgradeRequired:426,PreconditionRequired:428,TooManyRequests:429,RequestHeaderFieldsTooLarge:431,UnavailableForLegalReasons:451,InternalServerError:500,NotImplemented:501,BadGateway:502,ServiceUnavailable:503,GatewayTimeout:504,HttpVersionNotSupported:505,VariantAlsoNegotiates:506,InsufficientStorage:507,LoopDetected:508,NotExtended:510,NetworkAuthenticationRequired:511,WebServerIsDown:521,ConnectionTimedOut:522,OriginIsUnreachable:523,TimeoutOccurred:524,SslHandshakeFailed:525,InvalidSslCertificate:526};Object.entries(Uu).forEach(([l,r])=>{Uu[r]=l});function Yh(l){const r=new fn(l),u=yh(fn.prototype.request,r);return H.extend(u,fn.prototype,r,{allOwnKeys:!0}),H.extend(u,r,null,{allOwnKeys:!0}),u.create=function(c){return Yh(dn(l,c))},u}const qe=Yh(ui);qe.Axios=fn;qe.CanceledError=el;qe.CancelToken=cb;qe.isCancel=Dh;qe.VERSION=Uh;qe.toFormData=ls;qe.AxiosError=me;qe.Cancel=qe.CanceledError;qe.all=function(r){return Promise.all(r)};qe.spread=fb;qe.isAxiosError=db;qe.mergeConfig=dn;qe.AxiosHeaders=dt;qe.formToJSON=l=>zh(H.isHTMLForm(l)?new FormData(l):l);qe.getAdapter=Lh.getAdapter;qe.HttpStatusCode=Uu;qe.default=qe;const{Axios:Pb,AxiosError:Ib,CanceledError:e5,isCancel:t5,CancelToken:a5,VERSION:n5,all:l5,Cancel:i5,isAxiosError:r5,spread:s5,toFormData:o5,AxiosHeaders:u5,HttpStatusCode:c5,formToJSON:f5,getAdapter:d5,mergeConfig:m5}=qe,mb="https://digiscia-backend.fly.dev",hb=qe.create({baseURL:mb,headers:{"Content-Type":"application/json"}}),qu=async()=>{try{return(await hb.get("http://127.0.0.1:8000/api/v1/news/")).data}catch(l){return console.error("Erreur lors de la création de la prise de contact :",l),[]}};function pb(){return f.jsxs(f.Fragment,{children:[f.jsx("style",{children:`
        .la-loading-container {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          padding: clamp(3rem, 8vh, 6rem) clamp(1rem, 4vw, 2rem);
          min-height: 400px;
          position: relative;
          width: 100%; /* S'assure qu'il prend toute la largeur du carrousel */
        }

        /* Particle Background */
        .la-particles {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          overflow: hidden;
          pointer-events: none;
        }

        .la-particle {
          position: absolute;
          width: 4px;
          height: 4px;
          background: linear-gradient(135deg, #64ffda, #5B7CFF);
          border-radius: 50%;
          opacity: 0;
          animation: la-float-up 3s ease-in-out infinite;
        }

        .la-particle:nth-child(1) { left: 10%; animation-delay: 0s; }
        .la-particle:nth-child(2) { left: 20%; animation-delay: 0.5s; }
        .la-particle:nth-child(3) { left: 30%; animation-delay: 1s; }
        .la-particle:nth-child(4) { left: 40%; animation-delay: 1.5s; }
        .la-particle:nth-child(5) { left: 50%; animation-delay: 2s; }
        .la-particle:nth-child(6) { left: 60%; animation-delay: 0.7s; }
        .la-particle:nth-child(7) { left: 70%; animation-delay: 1.2s; }
        .la-particle:nth-child(8) { left: 80%; animation-delay: 1.8s; }
        .la-particle:nth-child(9) { left: 90%; animation-delay: 0.3s; }

        @keyframes la-float-up {
          0% {
            bottom: -10px;
            opacity: 0;
            transform: translateX(0) scale(1);
          }
          50% {
            opacity: 0.8;
            transform: translateX(20px) scale(1.2);
          }
          100% {
            bottom: 100%;
            opacity: 0;
            transform: translateX(-10px) scale(0.8);
          }
        }

        /* Main Spinner Container */
        .la-spinner-wrapper {
          position: relative;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: clamp(2rem, 5vh, 3rem);
          z-index: 1;
        }

        /* Outer Ring with Glow */
        .la-spinner-outer {
          position: absolute;
          width: clamp(80px, 15vw, 120px);
          height: clamp(80px, 15vw, 120px);
          border: 2px solid rgba(91, 124, 255, 0.1);
          border-radius: 50%;
          animation: la-pulse-ring 2s ease-in-out infinite;
        }

        @keyframes la-pulse-ring {
          0%, 100% {
            transform: scale(1);
            opacity: 0.3;
          }
          50% {
            transform: scale(1.1);
            opacity: 0.1;
          }
        }

        /* Middle Ring - Rotating */
        .la-spinner-middle {
          position: absolute;
          width: clamp(60px, 12vw, 90px);
          height: clamp(60px, 12vw, 90px);
          border: 3px solid transparent;
          border-top-color: #64ffda;
          border-right-color: #64ffda;
          border-radius: 50%;
          animation: la-spin-reverse 1.5s cubic-bezier(0.68, -0.55, 0.265, 1.55) infinite;
        }

        @keyframes la-spin-reverse {
          to { transform: rotate(-360deg); }
        }

        /* Main Spinner */
        .la-spinner {
          width: clamp(40px, 8vw, 60px);
          height: clamp(40px, 8vw, 60px);
          border: 4px solid rgba(91, 124, 255, 0.15);
          border-radius: 50%;
          border-top-color: #5B7CFF;
          border-right-color: #5B7CFF;
          animation: la-spin 1s cubic-bezier(0.68, -0.55, 0.265, 1.55) infinite;
          position: relative;
          box-shadow: 
            0 0 20px rgba(91, 124, 255, 0.3),
            inset 0 0 20px rgba(91, 124, 255, 0.1);
        }

        @keyframes la-spin {
          to { transform: rotate(360deg); }
        }

        /* Center Dot */
        .la-spinner::before {
          content: '';
          position: absolute;
          top: 50%;
          left: 50%;
          width: 8px;
          height: 8px;
          background: linear-gradient(135deg, #5B7CFF, #64ffda);
          border-radius: 50%;
          transform: translate(-50%, -50%);
          animation: la-pulse-dot 1s ease-in-out infinite;
          box-shadow: 0 0 15px rgba(91, 124, 255, 0.8);
        }

        @keyframes la-pulse-dot {
          0%, 100% {
            transform: translate(-50%, -50%) scale(1);
            opacity: 1;
          }
          50% {
            transform: translate(-50%, -50%) scale(1.5);
            opacity: 0.6;
          }
        }

        /* Content Area */
        .la-loading-content {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: clamp(0.75rem, 2vh, 1.25rem);
          z-index: 1;
        }

        /* Loading Text with Gradient */
        .la-loading-text {
          font-size: clamp(1rem, 2.5vw, 1.25rem);
          font-weight: 600;
          background: linear-gradient(135deg, #5B7CFF, #64ffda);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          animation: la-shimmer 2s ease-in-out infinite;
          background-size: 200% 200%;
          letter-spacing: 0.5px;
        }

        @keyframes la-shimmer {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }

        /* Subtext */
        .la-loading-subtext {
          font-size: clamp(0.875rem, 2vw, 1rem);
          color: #B8C5E0;
          opacity: 0;
          animation: la-fade-in-up 0.6s ease-out 0.3s forwards;
        }

        @keyframes la-fade-in-up {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 0.7;
            transform: translateY(0);
          }
        }

        /* Progress Dots */
        .la-progress-dots {
          display: flex;
          gap: 8px;
          margin-top: clamp(0.5rem, 2vh, 1rem);
        }

        .la-dot {
          width: 8px;
          height: 8px;
          background: #5B7CFF;
          border-radius: 50%;
          animation: la-bounce 1.4s ease-in-out infinite;
          opacity: 0.4;
        }

        .la-dot:nth-child(1) { animation-delay: 0s; }
        .la-dot:nth-child(2) { animation-delay: 0.2s; }
        .la-dot:nth-child(3) { animation-delay: 0.4s; }

        @keyframes la-bounce {
          0%, 80%, 100% {
            transform: scale(0.8);
            opacity: 0.4;
          }
          40% {
            transform: scale(1.2);
            opacity: 1;
          }
        }

        /* Info Cards - Animated Tips */
        .la-loading-tips {
          margin-top: clamp(2rem, 5vh, 3rem);
          display: flex;
          flex-direction: column;
          gap: clamp(0.75rem, 2vh, 1rem);
          max-width: 600px;
          width: 100%;
          opacity: 0;
          animation: la-fade-in-up 0.8s ease-out 0.6s forwards;
        }

        .la-tip-card {
          background: rgba(91, 124, 255, 0.05);
          border: 1px solid rgba(91, 124, 255, 0.15);
          border-radius: 12px;
          padding: clamp(0.75rem, 2vw, 1rem) clamp(1rem, 3vw, 1.5rem);
          display: flex;
          align-items: center;
          gap: clamp(0.75rem, 2vw, 1rem);
          transition: all 0.3s ease;
          backdrop-filter: blur(10px);
        }

        .la-tip-card:hover {
          background: rgba(91, 124, 255, 0.08);
          border-color: rgba(91, 124, 255, 0.3);
          transform: translateX(4px);
        }

        .la-tip-icon {
          width: clamp(32px, 6vw, 40px);
          height: clamp(32px, 6vw, 40px);
          background: linear-gradient(135deg, #5B7CFF, #64ffda);
          border-radius: 10px;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          color: white;
          font-size: clamp(1rem, 3vw, 1.25rem);
          box-shadow: 0 4px 12px rgba(91, 124, 255, 0.3);
        }

        .la-tip-text {
          font-size: clamp(0.875rem, 2vw, 1rem);
          color: #B8C5E0;
          line-height: 1.5;
        }

        /* Responsive Adjustments */
        @media (max-width: 768px) {
          .la-loading-tips {
            margin-top: clamp(1.5rem, 4vh, 2rem);
          }
          .la-particles {
            display: none;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .la-spinner,
          .la-spinner-middle,
          .la-spinner-outer,
          .la-particle,
          .la-dot {
            animation: none !important;
          }
          .la-spinner {
            opacity: 0.8;
          }
        }
      `}),f.jsxs("div",{className:"la-loading-container",children:[f.jsx("div",{className:"la-particles",children:[...Array(9)].map((l,r)=>f.jsx("div",{className:"la-particle"},r))}),f.jsxs("div",{className:"la-spinner-wrapper",children:[f.jsx("div",{className:"la-spinner-outer"}),f.jsx("div",{className:"la-spinner-middle"}),f.jsx("div",{className:"la-spinner"})]}),f.jsxs("div",{className:"la-loading-content",children:[f.jsx("div",{className:"la-loading-text",children:"Chargement des actualités"}),f.jsx("div",{className:"la-loading-subtext",children:"Récupération des dernières informations..."}),f.jsxs("div",{className:"la-progress-dots",children:[f.jsx("div",{className:"la-dot"}),f.jsx("div",{className:"la-dot"}),f.jsx("div",{className:"la-dot"})]})]}),f.jsxs("div",{className:"la-loading-tips",children:[f.jsxs("div",{className:"la-tip-card",children:[f.jsx("div",{className:"la-tip-icon",children:"📰"}),f.jsx("div",{className:"la-tip-text",children:"Découvrez nos dernières innovations et projets en cours"})]}),f.jsxs("div",{className:"la-tip-card",children:[f.jsx("div",{className:"la-tip-icon",children:"🚀"}),f.jsx("div",{className:"la-tip-text",children:"Restez informé des tendances tech et des actualités du secteur"})]}),f.jsxs("div",{className:"la-tip-card",children:[f.jsx("div",{className:"la-tip-icon",children:"💡"}),f.jsx("div",{className:"la-tip-text",children:"Explorez nos success stories et témoignages clients"})]})]})]})]})}const gb=`
@import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;600;700&family=Inter:wght@300;400;500;600&display=swap');

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: 'Inter', sans-serif;
  background: #00093D;
  color: #FFFFFF;
  overflow-x: hidden;
}

.news-section {
  position: relative;
  min-height: 100vh;
  width: 100%;
  background: #00093D;
  padding: clamp(3rem, 6vw, 6rem) clamp(1rem, 4vw, 2rem);
  overflow: hidden;
}

/* Fond animé */
.news-section::before {
  content: '';
  position: fixed;
  top: -40%;
  right: -10%;
  width: 70%;
  height: 120%;
  background: radial-gradient(circle, rgba(91, 124, 255, 0.12) 0%, transparent 70%);
  animation: float 25s infinite ease-in-out;
  pointer-events: none;
  z-index: 0;
}

@keyframes float {
  0%, 100% { transform: translate(0, 0) scale(1); }
  50% { transform: translate(-20px, -20px) scale(1.05); }
}

.grid-pattern {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: 0.02;
  background-image: 
    linear-gradient(rgba(91, 124, 255, 0.3) 1px, transparent 1px),
    linear-gradient(90deg, rgba(91, 124, 255, 0.3) 1px, transparent 1px);
  background-size: 40px 40px;
  pointer-events: none;
  z-index: 0;
}

.news-container {
  position: relative;
  z-index: 1;
  max-width: 1400px;
  margin: 0 auto;
}

/* Header */
.news-header {
  text-align: center;
  margin-bottom: clamp(3rem, 6vw, 5rem);
  animation: fadeInUp 0.8s ease-out;
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.news-badge {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  background: rgba(91, 124, 255, 0.1);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(91, 124, 255, 0.3);
  padding: clamp(0.5rem, 1.5vw, 0.65rem) clamp(1rem, 2.5vw, 1.25rem);
  border-radius: 50px;
  font-size: clamp(0.8rem, 2vw, 0.9rem);
  font-weight: 500;
  color: #B8C5E0;
  margin-bottom: 1.5rem;
  letter-spacing: 0.05em;
  text-transform: uppercase;
}

.news-title {
  font-size: clamp(2rem, 6vw, 3.5rem);
  font-weight: 700;
  font-family: 'Space Grotesk', sans-serif;
  color: #FFFFFF;
  margin-bottom: clamp(0.75rem, 2vw, 1rem);
  letter-spacing: -0.02em;
  line-height: 1.2;
}

.news-subtitle {
  font-size: clamp(1rem, 2.5vw, 1.2rem);
  color: #B8C5E0;
  font-weight: 300;
  max-width: 700px;
  margin: 0 auto;
  line-height: 1.6;
}

/* Carousel */
.carousel-wrapper {
  position: relative;
  margin-bottom: clamp(3rem, 6vw, 5rem);
}

.news-carousel {
  display: flex;
  gap: clamp(1.5rem, 3vw, 2rem);
  overflow-x: auto;
  scroll-behavior: smooth;
  scroll-snap-type: x mandatory;
  padding: clamp(1rem, 2vw, 1.5rem) 0;
  scrollbar-width: thin;
  scrollbar-color: rgba(91, 124, 255, 0.3) transparent;
  -webkit-overflow-scrolling: touch;
}

.news-carousel::-webkit-scrollbar {
  height: 6px;
}

.news-carousel::-webkit-scrollbar-track {
  background: rgba(255, 255, 255, 0.05);
  border-radius: 3px;
}

.news-carousel::-webkit-scrollbar-thumb {
  background: rgba(91, 124, 255, 0.5);
  border-radius: 3px;
}

.news-carousel::-webkit-scrollbar-thumb:hover {
  background: rgba(91, 124, 255, 0.7);
}

/* Boutons de navigation */
.carousel-nav {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  width: clamp(40px, 8vw, 50px);
  height: clamp(40px, 8vw, 50px);
  background: rgba(91, 124, 255, 0.2);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(91, 124, 255, 0.3);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  z-index: 10;
  color: #FFFFFF;
  font-size: clamp(1rem, 2vw, 1.2rem);
  transition: all 0.3s ease;
}

.carousel-nav:hover {
  background: rgba(91, 124, 255, 0.4);
  border-color: #5B7CFF;
  transform: translateY(-50%) scale(1.1);
}

.carousel-prev { left: clamp(-15px, -2vw, -25px); }
.carousel-next { right: clamp(-15px, -2vw, -25px); }

/* Carte d'actualité */
.news-card {
  flex: 0 0 clamp(280px, 40vw, 350px);
  scroll-snap-align: start;
  background: rgba(255, 255, 255, 0.03);
  backdrop-filter: blur(40px);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 20px;
  overflow: hidden;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  display: flex;
  flex-direction: column;
}

.news-card:hover {
  transform: translateY(-8px);
  border-color: rgba(91, 124, 255, 0.3);
  box-shadow: 0 20px 60px rgba(91, 124, 255, 0.25);
  background: rgba(255, 255, 255, 0.05);
}

.news-image-container {
  position: relative;
  width: 100%;
  height: clamp(180px, 25vw, 220px);
  overflow: hidden;
  background: rgba(91, 124, 255, 0.1);
}

.news-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.6s cubic-bezier(0.4, 0, 0.2, 1);
}

.news-card:hover .news-image {
  transform: scale(1.08);
}

.news-overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(180deg, transparent 0%, rgba(0, 9, 61, 0.9) 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transition: opacity 0.4s ease;
}

.news-card:hover .news-overlay {
  opacity: 1;
}

.read-more-btn {
  padding: clamp(0.6rem, 1.5vw, 0.75rem) clamp(1.5rem, 3vw, 2rem);
  background: linear-gradient(135deg, #5B7CFF 0%, #8BA3FF 100%);
  color: #FFFFFF;
  border: none;
  border-radius: 50px;
  font-family: 'Space Grotesk', sans-serif;
  font-size: clamp(0.9rem, 2vw, 1rem);
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  letter-spacing: 0.02em;
}

.read-more-btn:hover {
  transform: scale(1.05);
  box-shadow: 0 10px 30px rgba(91, 124, 255, 0.5);
}

.news-content {
  padding: clamp(1.25rem, 2.5vw, 1.75rem);
  flex: 1;
  display: flex;
  flex-direction: column;
}

.news-date {
  font-size: clamp(0.8rem, 1.8vw, 0.9rem);
  color: #7A8AB5;
  margin-bottom: clamp(0.5rem, 1vw, 0.75rem);
  font-weight: 500;
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.date-icon {
  width: 16px;
  height: 16px;
  color: #5B7CFF;
}

.news-card-title {
  font-size: clamp(1.1rem, 2.5vw, 1.3rem);
  font-weight: 600;
  font-family: 'Space Grotesk', sans-serif;
  color: #FFFFFF;
  line-height: 1.4;
  margin-bottom: clamp(0.75rem, 1.5vw, 1rem);
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

/* Newsletter */
.newsletter-section {
  background: rgba(255, 255, 255, 0.03);
  backdrop-filter: blur(40px);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 24px;
  padding: clamp(2rem, 4vw, 3rem);
  max-width: 700px;
  margin: 0 auto;
  text-align: center;
}

.newsletter-title {
  font-size: clamp(1.5rem, 4vw, 2rem);
  font-weight: 600;
  font-family: 'Space Grotesk', sans-serif;
  color: #FFFFFF;
  margin-bottom: clamp(0.5rem, 1vw, 0.75rem);
}

.newsletter-description {
  font-size: clamp(0.95rem, 2vw, 1.05rem);
  color: #B8C5E0;
  margin-bottom: clamp(1.5rem, 3vw, 2rem);
  line-height: 1.6;
}

.newsletter-form {
  display: flex;
  gap: clamp(0.75rem, 2vw, 1rem);
  flex-wrap: wrap;
  justify-content: center;
}

.newsletter-input {
  flex: 1;
  min-width: 250px;
  padding: clamp(0.75rem, 2vw, 1rem) clamp(1rem, 2.5vw, 1.5rem);
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 50px;
  color: #FFFFFF;
  font-size: clamp(0.95rem, 2vw, 1rem);
  font-family: 'Inter', sans-serif;
  transition: all 0.3s ease;
}

.newsletter-input::placeholder {
  color: #7A8AB5;
}

.newsletter-input:focus {
  outline: none;
  border-color: #5B7CFF;
  background: rgba(255, 255, 255, 0.08);
}

.newsletter-btn {
  padding: clamp(0.75rem, 2vw, 1rem) clamp(1.5rem, 3vw, 2rem);
  background: linear-gradient(135deg, #5B7CFF 0%, #8BA3FF 100%);
  color: #FFFFFF;
  border: none;
  border-radius: 50px;
  font-family: 'Space Grotesk', sans-serif;
  font-size: clamp(0.95rem, 2vw, 1rem);
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  letter-spacing: 0.02em;
  white-space: nowrap;
}

.newsletter-btn:hover {
  transform: translateY(-2px);
  box-shadow: 0 10px 30px rgba(91, 124, 255, 0.4);
}

.thank-you-message {
  padding: clamp(1rem, 2vw, 1.5rem);
  background: rgba(76, 175, 80, 0.1);
  border: 1px solid rgba(76, 175, 80, 0.3);
  border-radius: 16px;
  color: #81C784;
  font-size: clamp(1rem, 2vw, 1.1rem);
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.75rem;
}

.error-message {
  margin-top: 1rem;
  padding: 0.75rem 1rem;
  background: rgba(239, 68, 68, 0.1);
  border: 1px solid rgba(239, 68, 68, 0.3);
  border-radius: 12px;
  color: #F87171;
  font-size: clamp(0.9rem, 2vw, 1rem);
}

.loading-state {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: clamp(3rem, 6vw, 5rem);
  text-align: center;
  width: 100%;
}

.loading-text {
  font-size: clamp(1rem, 2.5vw, 1.1rem);
  color: #B8C5E0;
}

/* Responsive */
@media (max-width: 768px) {
  .carousel-nav {
    display: none;
  }
  
  .news-card {
    flex: 0 0 clamp(260px, 70vw, 300px);
  }
  
  .newsletter-form {
    flex-direction: column;
  }
  
  .newsletter-input {
    min-width: 100%;
  }
}

@media (max-width: 480px) {
  .news-section {
    padding: clamp(2rem, 5vw, 3rem) clamp(0.75rem, 3vw, 1rem);
  }
  
  .news-card {
    flex: 0 0 clamp(240px, 85vw, 280px);
  }
}

@media (prefers-reduced-motion: reduce) {
  * {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
}
`,vb=()=>f.jsxs("svg",{className:"date-icon",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[f.jsx("rect",{x:"3",y:"4",width:"18",height:"18",rx:"2",ry:"2"}),f.jsx("line",{x1:"16",y1:"2",x2:"16",y2:"6"}),f.jsx("line",{x1:"8",y1:"2",x2:"8",y2:"6"}),f.jsx("line",{x1:"3",y1:"10",x2:"21",y2:"10"})]}),yb=()=>f.jsx("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:f.jsx("polyline",{points:"20 6 9 17 4 12"})});function bb(){const[l,r]=D.useState(""),[u,o]=D.useState(!1),[c,d]=D.useState([]),[h,v]=D.useState(""),[g,p]=D.useState(!0),b=D.useRef(null),w=Gu();D.useEffect(()=>{async function M(){p(!0);try{const C=await qu();Array.isArray(C)?d(C.sort((Q,V)=>new Date(V.date)-new Date(Q.date))):(console.error("fetchNews() n'a pas retourné un tableau :",C),d([]))}catch(C){console.error("Erreur lors de la récupération des actualités :",C),d([])}finally{p(!1)}}M()},[]);const R=M=>{r(M.target.value),v("")},j=async M=>{M.preventDefault();try{await qe.post("http://127.0.0.1:8000/api/v1/suscribers/create",{email:l}),o(!0),r(""),v("")}catch(C){console.error("Erreur lors de l'inscription à la newsletter :",C),C.response&&C.response.data?C.response.data.email&&Array.isArray(C.response.data.email)?v("Vous êtes déjà inscrit 😉!"):v("Une erreur est survenue. Veuillez réessayer."):C.request?v("Impossible de joindre le serveur."):v("Une erreur s'est produite. Veuillez réessayer.")}},x=M=>{var Q;const C=M==="left"?-350:350;(Q=b.current)==null||Q.scrollBy({left:C,behavior:"smooth"})},T=M=>M.toLowerCase().replace(/[^\w\s-]/g,"").replace(/\s+/g,"-").replace(/--+/g,"-"),E=M=>{const C=T(M.title);localStorage.setItem("currentArticle",JSON.stringify(M)),w(`/article/${M.id}/${C}`),window.scrollTo(0,0)},_=M=>{if(!M)return"";try{return new Date(M).toLocaleDateString("fr-FR",{year:"numeric",month:"long",day:"numeric",hour:"2-digit",minute:"2-digit"})}catch(C){return console.error("Erreur formatage date:",C,M),"Date invalide"}};return f.jsxs(f.Fragment,{children:[f.jsx("style",{children:gb}),f.jsxs("section",{className:"news-section",id:"news",children:[f.jsx("div",{className:"grid-pattern","aria-hidden":"true"}),f.jsxs("div",{className:"news-container",children:[f.jsxs("header",{className:"news-header",children:[f.jsx("div",{className:"news-badge",children:"📰 Actualités"}),f.jsx("h2",{className:"news-title",children:"Dernières Nouvelles"}),f.jsx("p",{className:"news-subtitle",children:"Restez informé des dernières actualités, innovations et événements de DigiScia"})]}),f.jsxs("div",{className:"carousel-wrapper",children:[f.jsx("button",{className:"carousel-nav carousel-prev",onClick:()=>x("left"),"aria-label":"Article précédent",children:"‹"}),f.jsx("div",{className:"news-carousel",ref:b,children:g?f.jsx(pb,{}):c.length>0?c.map(M=>f.jsxs("article",{className:"news-card",children:[f.jsxs("div",{className:"news-image-container",children:[f.jsx("img",{src:M.image,alt:M.title,className:"news-image",loading:"lazy",onError:C=>{C.target.src="/images/placeholder.jpg"}}),f.jsx("div",{className:"news-overlay",children:f.jsx("button",{className:"read-more-btn","aria-label":`Lire: ${M.title}`,onClick:()=>E(M),children:"Lire l'article"})})]}),f.jsxs("div",{className:"news-content",children:[f.jsxs("div",{className:"news-date",children:[f.jsx(vb,{}),_(M.date)]}),f.jsx("h3",{className:"news-card-title",children:M.title})]})]},M.id)):f.jsx("div",{className:"loading-state",children:f.jsx("p",{className:"loading-text",children:"Aucune actualité disponible."})})}),f.jsx("button",{className:"carousel-nav carousel-next",onClick:()=>x("right"),"aria-label":"Article suivant",children:"›"})]}),f.jsxs("div",{className:"newsletter-section",children:[f.jsx("h3",{className:"newsletter-title",children:"Restez Connecté"}),f.jsx("p",{className:"newsletter-description",children:"Inscrivez-vous à notre newsletter pour recevoir nos dernières actualités"}),u?f.jsxs("div",{className:"thank-you-message",children:[f.jsx(yb,{}),"Merci de faire partie de notre communauté !"]}):f.jsxs("div",{children:[f.jsxs("form",{onSubmit:j,className:"newsletter-form",children:[f.jsx("input",{type:"email",value:l,onChange:R,placeholder:"votre.email@exemple.com",className:"newsletter-input","aria-label":"Adresse email",required:!0}),f.jsx("button",{type:"submit",className:"newsletter-btn",children:"S'inscrire"})]}),h&&f.jsx("div",{className:"error-message",role:"alert",children:h})]})]})]})]})]})}const xb="/assets/fidele-D00H2YQJ.jpg",Sb="/assets/honore-DE2cYyXr.jpg",wb="/assets/souleymane-Bt3fsUSO.jpg",Eb="/assets/sylvius-CWrvX6wv.jpg",jb="/assets/narcisse-DEnjGynH.jpg",Tb="/assets/philjacq-C_n6HwKZ.jpg",Ob="/assets/abdel-Wflnv7Gu.jpg",Rb=[{name:"YONLI Fidele",role:"Founder - CEO & Head of Innovation",skills:"Développeur web Fullstack, Business Intelligence & Data Analyst, Data/AI/Machine Learning Engineer, certifié Google Data Analytics, 2x certifié Microsoft",image:xb},{name:"Souleymane TRAORÉ",role:"CTO & Lead Developper",skills:"Developpeur web/mobile Fullstack, AI Engineer",image:wb},{name:"Abdel Nasser SAVADOGO",role:"Responsable DigiScia Media",skills:"Developpeur Fullstack & Réseaux Informatiques",image:Ob},{name:"NITIEMA Sylvius",role:"Responsable DigiScia Academy",skills:"Expert en géosciences appliquées, spécialiste dansa management des données geospatiales et le traitement des données géophysiques",image:Eb},{name:"SIEHO Narcisse",role:"Responsable DigiScia Store",skills:" Ingénieur en Productique & Mecatronique/Developpeur Web, Expert en Automatisme et Robotique/ Consultant support Technique à Alten",image:jb},{name:"YAO Honoré",role:"CFO & Partenariats",skills:"Consultant en Communication Financière et Relations Investisseurs, Certifié FMVA, CMSA, CBCA, FPWM et ESG de la Corporate Finance Institute, Certifié en Partenariats Publics Privés du Groupe de la Banque Mondiale",image:Sb},{name:"OUEDRAOGO Phil Jacq",role:"Suivi de Projet & Evaluation",skills:"Expert gestion de projets IT, Phil Jacq OUEDRAOGO pilote des initiatives stratégiques en garantissant le respect des délais, des budgets et des exigences techniques.",image:Tb}],Ab=({member:l})=>f.jsxs("div",{className:"book",children:[f.jsxs("div",{className:"book-content",children:[f.jsx("h2",{className:"team-card-name",children:l.role}),f.jsx("p",{className:"team-card-role",children:l.skills})]}),f.jsx("div",{className:"cover",style:{backgroundImage:`url(${l.image})`,backgroundSize:"cover",backgroundPosition:"center"},children:f.jsx("p",{children:l.name})})]});function Nb(){return f.jsxs("section",{className:"team-section",id:"team",children:[f.jsx("h1",{className:"team-title",children:"Notre Équipe"}),f.jsx("div",{className:"team-cards",children:Rb.map((l,r)=>f.jsx(Ab,{member:l},r))})]})}class ci{constructor(r=0,u="Network Error"){this.status=r,this.text=u}}const _b=()=>{if(!(typeof localStorage>"u"))return{get:l=>Promise.resolve(localStorage.getItem(l)),set:(l,r)=>Promise.resolve(localStorage.setItem(l,r)),remove:l=>Promise.resolve(localStorage.removeItem(l))}},et={origin:"https://api.emailjs.com",blockHeadless:!1,storageProvider:_b()},ac=l=>l?typeof l=="string"?{publicKey:l}:l.toString()==="[object Object]"?l:{}:{},Cb=(l,r="https://api.emailjs.com")=>{if(!l)return;const u=ac(l);et.publicKey=u.publicKey,et.blockHeadless=u.blockHeadless,et.storageProvider=u.storageProvider,et.blockList=u.blockList,et.limitRate=u.limitRate,et.origin=u.origin||r},Fh=async(l,r,u={})=>{const o=await fetch(et.origin+l,{method:"POST",headers:u,body:r}),c=await o.text(),d=new ci(o.status,c);if(o.ok)return d;throw d},Gh=(l,r,u)=>{if(!l||typeof l!="string")throw"The public key is required. Visit https://dashboard.emailjs.com/admin/account";if(!r||typeof r!="string")throw"The service ID is required. Visit https://dashboard.emailjs.com/admin";if(!u||typeof u!="string")throw"The template ID is required. Visit https://dashboard.emailjs.com/admin/templates"},zb=l=>{if(l&&l.toString()!=="[object Object]")throw"The template params have to be the object. Visit https://www.emailjs.com/docs/sdk/send/"},Vh=l=>l.webdriver||!l.languages||l.languages.length===0,Xh=()=>new ci(451,"Unavailable For Headless Browser"),Db=(l,r)=>{if(!Array.isArray(l))throw"The BlockList list has to be an array";if(typeof r!="string")throw"The BlockList watchVariable has to be a string"},Mb=l=>{var r;return!((r=l.list)!=null&&r.length)||!l.watchVariable},kb=(l,r)=>l instanceof FormData?l.get(r):l[r],Qh=(l,r)=>{if(Mb(l))return!1;Db(l.list,l.watchVariable);const u=kb(r,l.watchVariable);return typeof u!="string"?!1:l.list.includes(u)},Zh=()=>new ci(403,"Forbidden"),Bb=(l,r)=>{if(typeof l!="number"||l<0)throw"The LimitRate throttle has to be a positive number";if(r&&typeof r!="string")throw"The LimitRate ID has to be a non-empty string"},Hb=async(l,r,u)=>{const o=Number(await u.get(l)||0);return r-Date.now()+o},Kh=async(l,r,u)=>{if(!r.throttle||!u)return!1;Bb(r.throttle,r.id);const o=r.id||l;return await Hb(o,r.throttle,u)>0?!0:(await u.set(o,Date.now().toString()),!1)},Jh=()=>new ci(429,"Too Many Requests"),Lb=async(l,r,u,o)=>{const c=ac(o),d=c.publicKey||et.publicKey,h=c.blockHeadless||et.blockHeadless,v=c.storageProvider||et.storageProvider,g={...et.blockList,...c.blockList},p={...et.limitRate,...c.limitRate};return h&&Vh(navigator)?Promise.reject(Xh()):(Gh(d,l,r),zb(u),u&&Qh(g,u)?Promise.reject(Zh()):await Kh(location.pathname,p,v)?Promise.reject(Jh()):Fh("/api/v1.0/email/send",JSON.stringify({lib_version:"4.4.1",user_id:d,service_id:l,template_id:r,template_params:u}),{"Content-type":"application/json"}))},Ub=l=>{if(!l||l.nodeName!=="FORM")throw"The 3rd parameter is expected to be the HTML form element or the style selector of the form"},qb=l=>typeof l=="string"?document.querySelector(l):l,Yb=async(l,r,u,o)=>{const c=ac(o),d=c.publicKey||et.publicKey,h=c.blockHeadless||et.blockHeadless,v=et.storageProvider||c.storageProvider,g={...et.blockList,...c.blockList},p={...et.limitRate,...c.limitRate};if(h&&Vh(navigator))return Promise.reject(Xh());const b=qb(u);Gh(d,l,r),Ub(b);const w=new FormData(b);return Qh(g,w)?Promise.reject(Zh()):await Kh(location.pathname,p,v)?Promise.reject(Jh()):(w.append("lib_version","4.4.1"),w.append("service_id",l),w.append("template_id",r),w.append("user_id",d),Fh("/api/v1.0/email/send-form",w))},Fb={init:Cb,send:Lb,sendForm:Yb,EmailJSResponseStatus:ci};function Gb(){return f.jsxs("div",{className:"card",children:[f.jsx("a",{className:"socialContainer containerOne",href:"https://www.instagram.com/digisciaa/",target:"_blank",rel:"noopener noreferrer","aria-label":"Suivez-nous sur Instagram",children:f.jsx("svg",{viewBox:"0 0 16 16",className:"socialSvg instagramSvg",children:f.jsx("path",{d:"M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z"})})}),f.jsx("a",{className:"socialContainer containerTwo",href:"https://web.facebook.com/DigiScia/",target:"_blank",rel:"noopener noreferrer","aria-label":"Suivez-nous sur Facebook",children:f.jsx("svg",{viewBox:"0 0 320 512",className:"socialSvg facebookSvg",children:f.jsx("path",{d:"M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"})})}),f.jsx("a",{className:"socialContainer containerThree",href:"https://www.linkedin.com/company/digiscia/",target:"_blank",rel:"noopener noreferrer","aria-label":"Suivez-nous sur LinkedIn",children:f.jsx("svg",{viewBox:"0 0 448 512",className:"socialSvg linkdinSvg",children:f.jsx("path",{d:"M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"})})}),f.jsx("a",{className:"socialContainer containerFive",href:"https://discord.gg/enKs5Pm8",target:"_blank",rel:"noopener noreferrer","aria-label":"Rejoignez-nous sur Discord",children:f.jsx("svg",{viewBox:"0 0 640 512",className:"socialSvg discordSvg",children:f.jsx("path",{d:"M524.531,69.836a1.5,1.5,0,0,0-.764-.7A485.065,485.065,0,0,0,404.081,32.03a1.816,1.816,0,0,0-1.923.91,337.461,337.461,0,0,0-14.9,30.6,447.848,447.848,0,0,0-134.426,0,309.541,309.541,0,0,0-15.135-30.6,1.89,1.89,0,0,0-1.924-.91A483.689,483.689,0,0,0,116.085,69.137a1.712,1.712,0,0,0-.788.676C39.068,183.651,18.186,294.69,28.43,404.354a2.016,2.016,0,0,0,.765,1.375A487.666,487.666,0,0,0,176.02,479.918a1.9,1.9,0,0,0,2.063-.676A348.2,348.2,0,0,0,208.12,430.4a1.86,1.86,0,0,0-1.019-2.588,321.173,321.173,0,0,1-45.868-21.853,1.885,1.885,0,0,1-.185-3.126c3.082-2.309,6.166-4.711,9.109-7.137a1.819,1.819,0,0,1,1.9-.256c96.229,43.917,200.41,43.917,295.5,0a1.812,1.812,0,0,1,1.924.233c2.944,2.426,6.027,4.851,9.132,7.16a1.884,1.884,0,0,1-.162,3.126,301.407,301.407,0,0,1-45.89,21.83,1.875,1.875,0,0,0-1,2.611,391.055,391.055,0,0,0,30.014,48.815,1.864,1.864,0,0,0,2.063.7A486.048,486.048,0,0,0,610.7,405.729a1.882,1.882,0,0,0,.765-1.352C623.729,277.594,590.933,167.465,524.531,69.836ZM222.491,337.58c-28.972,0-52.844-26.587-52.844-59.239S193.056,219.1,222.491,219.1c29.665,0,53.306,26.82,52.843,59.239C275.334,310.993,251.924,337.58,222.491,337.58Zm195.38,0c-28.971,0-52.843-26.587-52.843-59.239S388.437,219.1,417.871,219.1c29.667,0,53.307,26.82,52.844,59.239C470.715,310.993,447.538,337.58,417.871,337.58Z"})})})]})}const F0={telephone:"",subject:"",email:"",message:""},Vb=()=>f.jsxs("div",{className:"confirmation-message",children:[f.jsx("div",{className:"confirmation-icon",children:"✓"}),f.jsx("p",{children:"Merci de nous faire confiance! Notre équipe vous recontactera très bientôt!"})]}),Xb=({message:l})=>f.jsx("div",{className:"error-message",children:f.jsx("p",{children:l})});function Qb(){const l=D.useRef(),[r,u]=D.useState(F0),[o,c]=D.useState(!1),[d,h]=D.useState({}),[v,g]=D.useState(!1),[p,b]=D.useState(""),w=x=>{const{name:T,value:E}=x.target;u(_=>({..._,[T]:E})),d[T]&&h(_=>({..._,[T]:null}))},R=()=>{const x={};return r.telephone||(x.telephone="Le téléphone est requis"),r.email||(x.email="L'email est requis"),r.message||(x.message="Un message est requis"),x},j=x=>{x.preventDefault();const T=R();if(Object.keys(T).length>0){h(T),c(!1),b("");return}h({}),b(""),g(!0),c(!1),Fb.sendForm("service_fcvhskh","template_wglutjo",l.current,"7XluHeKjHpwQ_1CfB").then(E=>{console.log("E-mail envoyé!",E.text),c(!0),u(F0),setTimeout(()=>c(!1),5e3)},E=>{console.error("Erreur d'envoi:",E.text),b("Une erreur est survenue. Veuillez réessayer plus tard.")}).finally(()=>{g(!1)})};return f.jsx("section",{className:"contact-section",id:"contacts",children:f.jsxs("div",{className:"contact-content",children:[f.jsxs("div",{className:"social-container",children:[f.jsx("h2",{className:"social-title",children:"Suivez-nous"}),f.jsx("p",{className:"social-subtitle",children:"Rejoignez notre communauté et restez à l'affût de nos dernières actualités."}),f.jsx(Gb,{})]}),f.jsxs("div",{className:"contact-form-container",children:[f.jsx("h1",{className:"contact-title",children:"Contactez-nous"}),o&&f.jsx(Vb,{}),p&&f.jsx(Xb,{message:p}),f.jsx("form",{ref:l,className:"contact-form",onSubmit:j,noValidate:!0,children:f.jsxs("div",{className:"form-grid",children:[f.jsxs("div",{className:"form-group grid-col-span-3",children:[f.jsx("label",{htmlFor:"email",className:"sr-only",children:"Email*"}),f.jsx("input",{type:"email",id:"email",name:"email",placeholder:"Email e.g john.dossy@gmail.com",value:r.email,onChange:w,required:!0,className:d.email?"input-error":"",disabled:v}),d.email&&f.jsx("span",{className:"error-text",children:d.email})]}),f.jsxs("div",{className:"form-group grid-col-span-3",children:[f.jsx("label",{htmlFor:"telephone",className:"sr-only",children:"Téléphone"}),f.jsx("input",{type:"tel",id:"telephone",name:"telephone",placeholder:"Téléphone e.g +226******* ",value:r.telephone,onChange:w,required:!0,className:d.telephone?"input-error":"",disabled:v}),d.telephone&&f.jsx("span",{className:"error-text",children:d.telephone})]}),f.jsxs("div",{className:"form-group grid-col-span-6",children:[f.jsx("label",{htmlFor:"subject",className:"sr-only",children:"Objet"}),f.jsx("input",{type:"text",id:"subject",name:"subject",placeholder:"Objet",value:r.subject,onChange:w,disabled:v})]}),f.jsxs("div",{className:"form-group grid-col-span-6",children:[f.jsx("label",{htmlFor:"message",className:"sr-only",children:"Message"}),f.jsx("textarea",{id:"message",name:"message",rows:"5",placeholder:"Ecrivez votre Message",value:r.message,onChange:w,required:!0,className:d.message?"input-error":"",disabled:v}),d.message&&f.jsx("span",{className:"error-text",children:d.message})]}),f.jsx("div",{className:"form-group-submit grid-col-span-6",children:f.jsx("button",{type:"submit",className:"contact-submit",disabled:v,children:v?"Envoi en cours...":"Envoyer"})})]})})]})]})})}function Zb(){const{id:l}=ng(),[r,u]=D.useState(null),[o,c]=D.useState(!0),[d,h]=D.useState(null),[v,g]=D.useState([]),p=Gu(),b=D.useCallback(async(T,E)=>!T||!Array.isArray(E)?[]:E.filter(_=>_.id!==T.id&&(T.tags&&_.tags&&_.tags.some(M=>T.tags.includes(M))||T.author&&_.author===T.author)).slice(0,3),[]),w=D.useCallback(async()=>{try{c(!0);const T=localStorage.getItem("currentArticle");if(T)try{const _=JSON.parse(T);if(_.id.toString()===l){u(_);const M=await qu();if(Array.isArray(M)){const C=await b(_,M);g(C)}c(!1);return}}catch(_){console.error("Erreur lors de la lecture de l'article stocké:",_)}const E=await qu();if(Array.isArray(E)){const _=E.find(M=>M.id.toString()===l);if(_){u(_),localStorage.setItem("currentArticle",JSON.stringify(_));const M=await b(_,E);g(M)}else h("Article non trouvé")}else h("Format de données invalide")}catch(T){console.error("Erreur lors de la récupération de l'article:",T),h("Impossible de charger l'article")}finally{c(!1)}},[l,b]);D.useEffect(()=>{w(),window.scrollTo(0,0)},[w]);const R=()=>{p("/"),setTimeout(()=>{const T=document.getElementById("news");T&&T.scrollIntoView({behavior:"smooth"})},100)},j=T=>{localStorage.setItem("currentArticle",JSON.stringify(T));const E=T.title.toLowerCase().replace(/[^\w\s-]/g,"").replace(/\s+/g,"-").replace(/--+/g,"-");p(`/article/${T.id}/${E}`),window.scrollTo(0,0)},x=T=>{if(!T)return"";try{const E=T.split(".")[0],_=/(\d{4})-(\d{2})-(\d{2}) (\d{2}):(\d{2}):(\d{2})/,M=E.match(_);if(M){const[Q,V,$,J,ie,F]=M;return`${V}-${$}-${J} ${ie}:${F}`}const C=new Date(T);if(!isNaN(C.getTime())){const Q=C.getFullYear(),V=String(C.getMonth()+1).padStart(2,"0"),$=String(C.getDate()).padStart(2,"0"),J=String(C.getHours()).padStart(2,"0"),ie=String(C.getMinutes()).padStart(2,"0");return`${Q}-${V}-${$} ${J}:${ie}`}return"Date invalide"}catch(E){return console.error("Erreur lors du formatage de la date article:",E,T),"Date invalide"}};return o?f.jsx("div",{className:"article-page full-width",children:f.jsx("div",{className:"article-container full-width-container",children:f.jsxs("div",{className:"article-loading",children:[f.jsx("div",{className:"loading-spinner"}),f.jsx("p",{children:"Chargement de l'article..."})]})})}):d?f.jsx("div",{className:"article-page full-width",children:f.jsx("div",{className:"article-container full-width-container",children:f.jsxs("div",{className:"article-error",children:[f.jsx("span",{className:"error-icon",children:"⚠️"}),f.jsx("h2",{children:"Erreur"}),f.jsx("p",{children:d}),f.jsx("button",{className:"return-button",onClick:R,children:"Retourner aux actualités"})]})})}):r?f.jsx("div",{className:"article-page full-width",children:f.jsxs("div",{className:"article-container full-width-container",children:[f.jsxs("article",{className:"article-content",children:[f.jsx("div",{className:"mobile-return",children:f.jsx("button",{className:"back-button",onClick:R,"aria-label":"Retour aux actualités",children:"❮ Retour"})}),f.jsxs("header",{className:"article-header",children:[f.jsx("h1",{className:"article-title",children:r.title}),f.jsx("p",{className:"article-date",children:x(r.date)}),r.author&&f.jsxs("p",{className:"article-author-header",children:["Par ",r.author]})]}),f.jsx("div",{className:"article-featured-image-container",children:f.jsx("img",{src:r.image,alt:r.title||"Image de l'article",className:"article-featured-image",onError:T=>{T.target.src="/images/placeholder.jpg"},loading:"lazy"})}),f.jsx("div",{className:"article-body",children:r.content?f.jsx("div",{dangerouslySetInnerHTML:{__html:r.content}}):r.excerpt?f.jsx("div",{className:"article-excerpt",children:r.excerpt}):f.jsx("div",{className:"article-no-content",children:f.jsx("p",{children:"Aucun contenu disponible pour cet article."})})}),f.jsxs("footer",{className:"article-footer",children:[f.jsxs("div",{className:"article-meta",children:[r.author&&f.jsxs("div",{className:"article-author",children:[f.jsx("strong",{children:"Auteur:"})," ",r.author]}),r.tags&&r.tags.length>0&&f.jsxs("div",{className:"article-tags",children:[f.jsx("strong",{children:"Tags:"}),f.jsx("div",{className:"tags-container",children:r.tags.map((T,E)=>f.jsx("span",{className:"tag-item",children:T},E))})]})]}),f.jsx("button",{className:"return-button",onClick:R,children:"Retourner aux actualités"})]})]}),v.length>0&&f.jsxs("div",{className:"related-articles-section",children:[f.jsx("h3",{className:"related-title",children:"Articles similaires"}),f.jsx("div",{className:"related-articles-container",children:v.map(T=>f.jsxs("div",{className:"related-article-card",onClick:()=>j(T),children:[f.jsx("div",{className:"related-article-image-container",children:f.jsx("img",{src:T.image,alt:T.title,className:"related-article-image",onError:E=>{E.target.src="/images/placeholder.jpg"},loading:"lazy"})}),f.jsxs("div",{className:"related-article-content",children:[f.jsx("h4",{className:"related-article-title",children:T.title}),f.jsx("p",{className:"related-article-date",children:x(T.date)})]})]},T.id))})]})]})}):f.jsx("div",{className:"article-page full-width",children:f.jsx("div",{className:"article-container full-width-container",children:f.jsxs("div",{className:"article-error",children:[f.jsx("span",{className:"error-icon",children:"🔍"}),f.jsx("h2",{children:"Article introuvable"}),f.jsx("p",{children:"L'article que vous recherchez n'existe pas ou a été déplacé."}),f.jsx("button",{className:"return-button",onClick:R,children:"Retourner aux actualités"})]})})})}function Kb(){return f.jsxs(f.Fragment,{children:[f.jsx(ch,{})," ",f.jsxs("main",{children:[f.jsx(un.Element,{name:"home",children:f.jsx(ov,{})}),f.jsx(un.Element,{name:"about",children:f.jsx(jv,{})}),f.jsx(un.Element,{name:"projects",children:f.jsx(Rv,{})}),f.jsx(un.Element,{name:"services",children:f.jsx(Hv,{})}),f.jsx(un.Element,{name:"news",children:f.jsx(bb,{})}),f.jsx(un.Element,{name:"team",children:f.jsx(Nb,{})}),f.jsx(un.Element,{name:"contact",children:f.jsx(Qb,{})})]}),f.jsx(fh,{})]})}function Jb(){return f.jsx(Yg,{children:f.jsx("div",{className:"app-container",children:f.jsxs(yg,{children:[f.jsx(Mu,{path:"/",element:f.jsx(Kb,{})}),f.jsx(Mu,{path:"/article/:id/:slug",element:f.jsxs(f.Fragment,{children:[f.jsx(ch,{}),f.jsx(Zb,{}),f.jsx(fh,{})]})})]})})})}R2.createRoot(document.getElementById("root")).render(f.jsx(Bt.StrictMode,{children:f.jsx(Jb,{})}));
