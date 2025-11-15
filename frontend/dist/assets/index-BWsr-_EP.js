(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const u of document.querySelectorAll('link[rel="modulepreload"]'))o(u);new MutationObserver(u=>{for(const d of u)if(d.type==="childList")for(const p of d.addedNodes)p.tagName==="LINK"&&p.rel==="modulepreload"&&o(p)}).observe(document,{childList:!0,subtree:!0});function c(u){const d={};return u.integrity&&(d.integrity=u.integrity),u.referrerPolicy&&(d.referrerPolicy=u.referrerPolicy),u.crossOrigin==="use-credentials"?d.credentials="include":u.crossOrigin==="anonymous"?d.credentials="omit":d.credentials="same-origin",d}function o(u){if(u.ep)return;u.ep=!0;const d=c(u);fetch(u.href,d)}})();var Tr=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function G0(l){return l&&l.__esModule&&Object.prototype.hasOwnProperty.call(l,"default")?l.default:l}var gc={exports:{}},Wl={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var qm;function yg(){if(qm)return Wl;qm=1;var l=Symbol.for("react.transitional.element"),r=Symbol.for("react.fragment");function c(o,u,d){var p=null;if(d!==void 0&&(p=""+d),u.key!==void 0&&(p=""+u.key),"key"in u){d={};for(var v in u)v!=="key"&&(d[v]=u[v])}else d=u;return u=d.ref,{$$typeof:l,type:o,key:p,ref:u!==void 0?u:null,props:d}}return Wl.Fragment=r,Wl.jsx=c,Wl.jsxs=c,Wl}var Fm;function bg(){return Fm||(Fm=1,gc.exports=yg()),gc.exports}var f=bg(),vc={exports:{}},he={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ym;function xg(){if(Ym)return he;Ym=1;var l=Symbol.for("react.transitional.element"),r=Symbol.for("react.portal"),c=Symbol.for("react.fragment"),o=Symbol.for("react.strict_mode"),u=Symbol.for("react.profiler"),d=Symbol.for("react.consumer"),p=Symbol.for("react.context"),v=Symbol.for("react.forward_ref"),g=Symbol.for("react.suspense"),h=Symbol.for("react.memo"),b=Symbol.for("react.lazy"),S=Symbol.iterator;function N(O){return O===null||typeof O!="object"?null:(O=S&&O[S]||O["@@iterator"],typeof O=="function"?O:null)}var j={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},x=Object.assign,T={};function E(O,G,ae){this.props=O,this.context=G,this.refs=T,this.updater=ae||j}E.prototype.isReactComponent={},E.prototype.setState=function(O,G){if(typeof O!="object"&&typeof O!="function"&&O!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,O,G,"setState")},E.prototype.forceUpdate=function(O){this.updater.enqueueForceUpdate(this,O,"forceUpdate")};function _(){}_.prototype=E.prototype;function M(O,G,ae){this.props=O,this.context=G,this.refs=T,this.updater=ae||j}var C=M.prototype=new _;C.constructor=M,x(C,E.prototype),C.isPureReactComponent=!0;var Q=Array.isArray,X={H:null,A:null,T:null,S:null},$=Object.prototype.hasOwnProperty;function J(O,G,ae,ne,I,pe){return ae=pe.ref,{$$typeof:l,type:O,key:G,ref:ae!==void 0?ae:null,props:pe}}function ie(O,G){return J(O.type,G,void 0,void 0,void 0,O.props)}function Y(O){return typeof O=="object"&&O!==null&&O.$$typeof===l}function Z(O){var G={"=":"=0",":":"=2"};return"$"+O.replace(/[=:]/g,function(ae){return G[ae]})}var W=/\/+/g;function U(O,G){return typeof O=="object"&&O!==null&&O.key!=null?Z(""+O.key):G.toString(36)}function ee(){}function P(O){switch(O.status){case"fulfilled":return O.value;case"rejected":throw O.reason;default:switch(typeof O.status=="string"?O.then(ee,ee):(O.status="pending",O.then(function(G){O.status==="pending"&&(O.status="fulfilled",O.value=G)},function(G){O.status==="pending"&&(O.status="rejected",O.reason=G)})),O.status){case"fulfilled":return O.value;case"rejected":throw O.reason}}throw O}function Se(O,G,ae,ne,I){var pe=typeof O;(pe==="undefined"||pe==="boolean")&&(O=null);var fe=!1;if(O===null)fe=!0;else switch(pe){case"bigint":case"string":case"number":fe=!0;break;case"object":switch(O.$$typeof){case l:case r:fe=!0;break;case b:return fe=O._init,Se(fe(O._payload),G,ae,ne,I)}}if(fe)return I=I(O),fe=ne===""?"."+U(O,0):ne,Q(I)?(ae="",fe!=null&&(ae=fe.replace(W,"$&/")+"/"),Se(I,G,ae,"",function(Ee){return Ee})):I!=null&&(Y(I)&&(I=ie(I,ae+(I.key==null||O&&O.key===I.key?"":(""+I.key).replace(W,"$&/")+"/")+fe)),G.push(I)),1;fe=0;var ze=ne===""?".":ne+":";if(Q(O))for(var ce=0;ce<O.length;ce++)ne=O[ce],pe=ze+U(ne,ce),fe+=Se(ne,G,ae,pe,I);else if(ce=N(O),typeof ce=="function")for(O=ce.call(O),ce=0;!(ne=O.next()).done;)ne=ne.value,pe=ze+U(ne,ce++),fe+=Se(ne,G,ae,pe,I);else if(pe==="object"){if(typeof O.then=="function")return Se(P(O),G,ae,ne,I);throw G=String(O),Error("Objects are not valid as a React child (found: "+(G==="[object Object]"?"object with keys {"+Object.keys(O).join(", ")+"}":G)+"). If you meant to render a collection of children, use an array instead.")}return fe}function K(O,G,ae){if(O==null)return O;var ne=[],I=0;return Se(O,ne,"","",function(pe){return G.call(ae,pe,I++)}),ne}function se(O){if(O._status===-1){var G=O._result;G=G(),G.then(function(ae){(O._status===0||O._status===-1)&&(O._status=1,O._result=ae)},function(ae){(O._status===0||O._status===-1)&&(O._status=2,O._result=ae)}),O._status===-1&&(O._status=0,O._result=G)}if(O._status===1)return O._result.default;throw O._result}var te=typeof reportError=="function"?reportError:function(O){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var G=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof O=="object"&&O!==null&&typeof O.message=="string"?String(O.message):String(O),error:O});if(!window.dispatchEvent(G))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",O);return}console.error(O)};function be(){}return he.Children={map:K,forEach:function(O,G,ae){K(O,function(){G.apply(this,arguments)},ae)},count:function(O){var G=0;return K(O,function(){G++}),G},toArray:function(O){return K(O,function(G){return G})||[]},only:function(O){if(!Y(O))throw Error("React.Children.only expected to receive a single React element child.");return O}},he.Component=E,he.Fragment=c,he.Profiler=u,he.PureComponent=M,he.StrictMode=o,he.Suspense=g,he.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=X,he.act=function(){throw Error("act(...) is not supported in production builds of React.")},he.cache=function(O){return function(){return O.apply(null,arguments)}},he.cloneElement=function(O,G,ae){if(O==null)throw Error("The argument must be a React element, but you passed "+O+".");var ne=x({},O.props),I=O.key,pe=void 0;if(G!=null)for(fe in G.ref!==void 0&&(pe=void 0),G.key!==void 0&&(I=""+G.key),G)!$.call(G,fe)||fe==="key"||fe==="__self"||fe==="__source"||fe==="ref"&&G.ref===void 0||(ne[fe]=G[fe]);var fe=arguments.length-2;if(fe===1)ne.children=ae;else if(1<fe){for(var ze=Array(fe),ce=0;ce<fe;ce++)ze[ce]=arguments[ce+2];ne.children=ze}return J(O.type,I,void 0,void 0,pe,ne)},he.createContext=function(O){return O={$$typeof:p,_currentValue:O,_currentValue2:O,_threadCount:0,Provider:null,Consumer:null},O.Provider=O,O.Consumer={$$typeof:d,_context:O},O},he.createElement=function(O,G,ae){var ne,I={},pe=null;if(G!=null)for(ne in G.key!==void 0&&(pe=""+G.key),G)$.call(G,ne)&&ne!=="key"&&ne!=="__self"&&ne!=="__source"&&(I[ne]=G[ne]);var fe=arguments.length-2;if(fe===1)I.children=ae;else if(1<fe){for(var ze=Array(fe),ce=0;ce<fe;ce++)ze[ce]=arguments[ce+2];I.children=ze}if(O&&O.defaultProps)for(ne in fe=O.defaultProps,fe)I[ne]===void 0&&(I[ne]=fe[ne]);return J(O,pe,void 0,void 0,null,I)},he.createRef=function(){return{current:null}},he.forwardRef=function(O){return{$$typeof:v,render:O}},he.isValidElement=Y,he.lazy=function(O){return{$$typeof:b,_payload:{_status:-1,_result:O},_init:se}},he.memo=function(O,G){return{$$typeof:h,type:O,compare:G===void 0?null:G}},he.startTransition=function(O){var G=X.T,ae={};X.T=ae;try{var ne=O(),I=X.S;I!==null&&I(ae,ne),typeof ne=="object"&&ne!==null&&typeof ne.then=="function"&&ne.then(be,te)}catch(pe){te(pe)}finally{X.T=G}},he.unstable_useCacheRefresh=function(){return X.H.useCacheRefresh()},he.use=function(O){return X.H.use(O)},he.useActionState=function(O,G,ae){return X.H.useActionState(O,G,ae)},he.useCallback=function(O,G){return X.H.useCallback(O,G)},he.useContext=function(O){return X.H.useContext(O)},he.useDebugValue=function(){},he.useDeferredValue=function(O,G){return X.H.useDeferredValue(O,G)},he.useEffect=function(O,G){return X.H.useEffect(O,G)},he.useId=function(){return X.H.useId()},he.useImperativeHandle=function(O,G,ae){return X.H.useImperativeHandle(O,G,ae)},he.useInsertionEffect=function(O,G){return X.H.useInsertionEffect(O,G)},he.useLayoutEffect=function(O,G){return X.H.useLayoutEffect(O,G)},he.useMemo=function(O,G){return X.H.useMemo(O,G)},he.useOptimistic=function(O,G){return X.H.useOptimistic(O,G)},he.useReducer=function(O,G,ae){return X.H.useReducer(O,G,ae)},he.useRef=function(O){return X.H.useRef(O)},he.useState=function(O){return X.H.useState(O)},he.useSyncExternalStore=function(O,G,ae){return X.H.useSyncExternalStore(O,G,ae)},he.useTransition=function(){return X.H.useTransition()},he.version="19.0.0",he}var Gm;function ma(){return Gm||(Gm=1,vc.exports=xg()),vc.exports}var D=ma();const Bt=G0(D);var yc={exports:{}},Pl={},bc={exports:{}},xc={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Xm;function wg(){return Xm||(Xm=1,function(l){function r(K,se){var te=K.length;K.push(se);e:for(;0<te;){var be=te-1>>>1,O=K[be];if(0<u(O,se))K[be]=se,K[te]=O,te=be;else break e}}function c(K){return K.length===0?null:K[0]}function o(K){if(K.length===0)return null;var se=K[0],te=K.pop();if(te!==se){K[0]=te;e:for(var be=0,O=K.length,G=O>>>1;be<G;){var ae=2*(be+1)-1,ne=K[ae],I=ae+1,pe=K[I];if(0>u(ne,te))I<O&&0>u(pe,ne)?(K[be]=pe,K[I]=te,be=I):(K[be]=ne,K[ae]=te,be=ae);else if(I<O&&0>u(pe,te))K[be]=pe,K[I]=te,be=I;else break e}}return se}function u(K,se){var te=K.sortIndex-se.sortIndex;return te!==0?te:K.id-se.id}if(l.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var d=performance;l.unstable_now=function(){return d.now()}}else{var p=Date,v=p.now();l.unstable_now=function(){return p.now()-v}}var g=[],h=[],b=1,S=null,N=3,j=!1,x=!1,T=!1,E=typeof setTimeout=="function"?setTimeout:null,_=typeof clearTimeout=="function"?clearTimeout:null,M=typeof setImmediate<"u"?setImmediate:null;function C(K){for(var se=c(h);se!==null;){if(se.callback===null)o(h);else if(se.startTime<=K)o(h),se.sortIndex=se.expirationTime,r(g,se);else break;se=c(h)}}function Q(K){if(T=!1,C(K),!x)if(c(g)!==null)x=!0,P();else{var se=c(h);se!==null&&Se(Q,se.startTime-K)}}var X=!1,$=-1,J=5,ie=-1;function Y(){return!(l.unstable_now()-ie<J)}function Z(){if(X){var K=l.unstable_now();ie=K;var se=!0;try{e:{x=!1,T&&(T=!1,_($),$=-1),j=!0;var te=N;try{t:{for(C(K),S=c(g);S!==null&&!(S.expirationTime>K&&Y());){var be=S.callback;if(typeof be=="function"){S.callback=null,N=S.priorityLevel;var O=be(S.expirationTime<=K);if(K=l.unstable_now(),typeof O=="function"){S.callback=O,C(K),se=!0;break t}S===c(g)&&o(g),C(K)}else o(g);S=c(g)}if(S!==null)se=!0;else{var G=c(h);G!==null&&Se(Q,G.startTime-K),se=!1}}break e}finally{S=null,N=te,j=!1}se=void 0}}finally{se?W():X=!1}}}var W;if(typeof M=="function")W=function(){M(Z)};else if(typeof MessageChannel<"u"){var U=new MessageChannel,ee=U.port2;U.port1.onmessage=Z,W=function(){ee.postMessage(null)}}else W=function(){E(Z,0)};function P(){X||(X=!0,W())}function Se(K,se){$=E(function(){K(l.unstable_now())},se)}l.unstable_IdlePriority=5,l.unstable_ImmediatePriority=1,l.unstable_LowPriority=4,l.unstable_NormalPriority=3,l.unstable_Profiling=null,l.unstable_UserBlockingPriority=2,l.unstable_cancelCallback=function(K){K.callback=null},l.unstable_continueExecution=function(){x||j||(x=!0,P())},l.unstable_forceFrameRate=function(K){0>K||125<K?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):J=0<K?Math.floor(1e3/K):5},l.unstable_getCurrentPriorityLevel=function(){return N},l.unstable_getFirstCallbackNode=function(){return c(g)},l.unstable_next=function(K){switch(N){case 1:case 2:case 3:var se=3;break;default:se=N}var te=N;N=se;try{return K()}finally{N=te}},l.unstable_pauseExecution=function(){},l.unstable_requestPaint=function(){},l.unstable_runWithPriority=function(K,se){switch(K){case 1:case 2:case 3:case 4:case 5:break;default:K=3}var te=N;N=K;try{return se()}finally{N=te}},l.unstable_scheduleCallback=function(K,se,te){var be=l.unstable_now();switch(typeof te=="object"&&te!==null?(te=te.delay,te=typeof te=="number"&&0<te?be+te:be):te=be,K){case 1:var O=-1;break;case 2:O=250;break;case 5:O=1073741823;break;case 4:O=1e4;break;default:O=5e3}return O=te+O,K={id:b++,callback:se,priorityLevel:K,startTime:te,expirationTime:O,sortIndex:-1},te>be?(K.sortIndex=te,r(h,K),c(g)===null&&K===c(h)&&(T?(_($),$=-1):T=!0,Se(Q,te-be))):(K.sortIndex=O,r(g,K),x||j||(x=!0,P())),K},l.unstable_shouldYield=Y,l.unstable_wrapCallback=function(K){var se=N;return function(){var te=N;N=se;try{return K.apply(this,arguments)}finally{N=te}}}}(xc)),xc}var Vm;function Sg(){return Vm||(Vm=1,bc.exports=wg()),bc.exports}var wc={exports:{}},lt={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Qm;function Eg(){if(Qm)return lt;Qm=1;var l=ma();function r(g){var h="https://react.dev/errors/"+g;if(1<arguments.length){h+="?args[]="+encodeURIComponent(arguments[1]);for(var b=2;b<arguments.length;b++)h+="&args[]="+encodeURIComponent(arguments[b])}return"Minified React error #"+g+"; visit "+h+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function c(){}var o={d:{f:c,r:function(){throw Error(r(522))},D:c,C:c,L:c,m:c,X:c,S:c,M:c},p:0,findDOMNode:null},u=Symbol.for("react.portal");function d(g,h,b){var S=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:u,key:S==null?null:""+S,children:g,containerInfo:h,implementation:b}}var p=l.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function v(g,h){if(g==="font")return"";if(typeof h=="string")return h==="use-credentials"?h:""}return lt.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=o,lt.createPortal=function(g,h){var b=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!h||h.nodeType!==1&&h.nodeType!==9&&h.nodeType!==11)throw Error(r(299));return d(g,h,null,b)},lt.flushSync=function(g){var h=p.T,b=o.p;try{if(p.T=null,o.p=2,g)return g()}finally{p.T=h,o.p=b,o.d.f()}},lt.preconnect=function(g,h){typeof g=="string"&&(h?(h=h.crossOrigin,h=typeof h=="string"?h==="use-credentials"?h:"":void 0):h=null,o.d.C(g,h))},lt.prefetchDNS=function(g){typeof g=="string"&&o.d.D(g)},lt.preinit=function(g,h){if(typeof g=="string"&&h&&typeof h.as=="string"){var b=h.as,S=v(b,h.crossOrigin),N=typeof h.integrity=="string"?h.integrity:void 0,j=typeof h.fetchPriority=="string"?h.fetchPriority:void 0;b==="style"?o.d.S(g,typeof h.precedence=="string"?h.precedence:void 0,{crossOrigin:S,integrity:N,fetchPriority:j}):b==="script"&&o.d.X(g,{crossOrigin:S,integrity:N,fetchPriority:j,nonce:typeof h.nonce=="string"?h.nonce:void 0})}},lt.preinitModule=function(g,h){if(typeof g=="string")if(typeof h=="object"&&h!==null){if(h.as==null||h.as==="script"){var b=v(h.as,h.crossOrigin);o.d.M(g,{crossOrigin:b,integrity:typeof h.integrity=="string"?h.integrity:void 0,nonce:typeof h.nonce=="string"?h.nonce:void 0})}}else h==null&&o.d.M(g)},lt.preload=function(g,h){if(typeof g=="string"&&typeof h=="object"&&h!==null&&typeof h.as=="string"){var b=h.as,S=v(b,h.crossOrigin);o.d.L(g,b,{crossOrigin:S,integrity:typeof h.integrity=="string"?h.integrity:void 0,nonce:typeof h.nonce=="string"?h.nonce:void 0,type:typeof h.type=="string"?h.type:void 0,fetchPriority:typeof h.fetchPriority=="string"?h.fetchPriority:void 0,referrerPolicy:typeof h.referrerPolicy=="string"?h.referrerPolicy:void 0,imageSrcSet:typeof h.imageSrcSet=="string"?h.imageSrcSet:void 0,imageSizes:typeof h.imageSizes=="string"?h.imageSizes:void 0,media:typeof h.media=="string"?h.media:void 0})}},lt.preloadModule=function(g,h){if(typeof g=="string")if(h){var b=v(h.as,h.crossOrigin);o.d.m(g,{as:typeof h.as=="string"&&h.as!=="script"?h.as:void 0,crossOrigin:b,integrity:typeof h.integrity=="string"?h.integrity:void 0})}else o.d.m(g)},lt.requestFormReset=function(g){o.d.r(g)},lt.unstable_batchedUpdates=function(g,h){return g(h)},lt.useFormState=function(g,h,b){return p.H.useFormState(g,h,b)},lt.useFormStatus=function(){return p.H.useHostTransitionStatus()},lt.version="19.0.0",lt}var Zm;function Fc(){if(Zm)return wc.exports;Zm=1;function l(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(l)}catch(r){console.error(r)}}return l(),wc.exports=Eg(),wc.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Km;function jg(){if(Km)return Pl;Km=1;var l=Sg(),r=ma(),c=Fc();function o(e){var t="https://react.dev/errors/"+e;if(1<arguments.length){t+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)t+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function u(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}var d=Symbol.for("react.element"),p=Symbol.for("react.transitional.element"),v=Symbol.for("react.portal"),g=Symbol.for("react.fragment"),h=Symbol.for("react.strict_mode"),b=Symbol.for("react.profiler"),S=Symbol.for("react.provider"),N=Symbol.for("react.consumer"),j=Symbol.for("react.context"),x=Symbol.for("react.forward_ref"),T=Symbol.for("react.suspense"),E=Symbol.for("react.suspense_list"),_=Symbol.for("react.memo"),M=Symbol.for("react.lazy"),C=Symbol.for("react.offscreen"),Q=Symbol.for("react.memo_cache_sentinel"),X=Symbol.iterator;function $(e){return e===null||typeof e!="object"?null:(e=X&&e[X]||e["@@iterator"],typeof e=="function"?e:null)}var J=Symbol.for("react.client.reference");function ie(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===J?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case g:return"Fragment";case v:return"Portal";case b:return"Profiler";case h:return"StrictMode";case T:return"Suspense";case E:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case j:return(e.displayName||"Context")+".Provider";case N:return(e._context.displayName||"Context")+".Consumer";case x:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case _:return t=e.displayName||null,t!==null?t:ie(e.type)||"Memo";case M:t=e._payload,e=e._init;try{return ie(e(t))}catch{}}return null}var Y=r.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,Z=Object.assign,W,U;function ee(e){if(W===void 0)try{throw Error()}catch(a){var t=a.stack.trim().match(/\n( *(at )?)/);W=t&&t[1]||"",U=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+W+e+U}var P=!1;function Se(e,t){if(!e||P)return"";P=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var n={DetermineComponentFrameRoot:function(){try{if(t){var V=function(){throw Error()};if(Object.defineProperty(V.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(V,[])}catch(L){var B=L}Reflect.construct(e,[],V)}else{try{V.call()}catch(L){B=L}e.call(V.prototype)}}else{try{throw Error()}catch(L){B=L}(V=e())&&typeof V.catch=="function"&&V.catch(function(){})}}catch(L){if(L&&B&&typeof L.stack=="string")return[L.stack,B.stack]}return[null,null]}};n.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var i=Object.getOwnPropertyDescriptor(n.DetermineComponentFrameRoot,"name");i&&i.configurable&&Object.defineProperty(n.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var s=n.DetermineComponentFrameRoot(),m=s[0],y=s[1];if(m&&y){var w=m.split(`
`),A=y.split(`
`);for(i=n=0;n<w.length&&!w[n].includes("DetermineComponentFrameRoot");)n++;for(;i<A.length&&!A[i].includes("DetermineComponentFrameRoot");)i++;if(n===w.length||i===A.length)for(n=w.length-1,i=A.length-1;1<=n&&0<=i&&w[n]!==A[i];)i--;for(;1<=n&&0<=i;n--,i--)if(w[n]!==A[i]){if(n!==1||i!==1)do if(n--,i--,0>i||w[n]!==A[i]){var q=`
`+w[n].replace(" at new "," at ");return e.displayName&&q.includes("<anonymous>")&&(q=q.replace("<anonymous>",e.displayName)),q}while(1<=n&&0<=i);break}}}finally{P=!1,Error.prepareStackTrace=a}return(a=e?e.displayName||e.name:"")?ee(a):""}function K(e){switch(e.tag){case 26:case 27:case 5:return ee(e.type);case 16:return ee("Lazy");case 13:return ee("Suspense");case 19:return ee("SuspenseList");case 0:case 15:return e=Se(e.type,!1),e;case 11:return e=Se(e.type.render,!1),e;case 1:return e=Se(e.type,!0),e;default:return""}}function se(e){try{var t="";do t+=K(e),e=e.return;while(e);return t}catch(a){return`
Error generating stack: `+a.message+`
`+a.stack}}function te(e){var t=e,a=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,(t.flags&4098)!==0&&(a=t.return),e=t.return;while(e)}return t.tag===3?a:null}function be(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function O(e){if(te(e)!==e)throw Error(o(188))}function G(e){var t=e.alternate;if(!t){if(t=te(e),t===null)throw Error(o(188));return t!==e?null:e}for(var a=e,n=t;;){var i=a.return;if(i===null)break;var s=i.alternate;if(s===null){if(n=i.return,n!==null){a=n;continue}break}if(i.child===s.child){for(s=i.child;s;){if(s===a)return O(i),e;if(s===n)return O(i),t;s=s.sibling}throw Error(o(188))}if(a.return!==n.return)a=i,n=s;else{for(var m=!1,y=i.child;y;){if(y===a){m=!0,a=i,n=s;break}if(y===n){m=!0,n=i,a=s;break}y=y.sibling}if(!m){for(y=s.child;y;){if(y===a){m=!0,a=s,n=i;break}if(y===n){m=!0,n=s,a=i;break}y=y.sibling}if(!m)throw Error(o(189))}}if(a.alternate!==n)throw Error(o(190))}if(a.tag!==3)throw Error(o(188));return a.stateNode.current===a?e:t}function ae(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e;for(e=e.child;e!==null;){if(t=ae(e),t!==null)return t;e=e.sibling}return null}var ne=Array.isArray,I=c.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,pe={pending:!1,data:null,method:null,action:null},fe=[],ze=-1;function ce(e){return{current:e}}function Ee(e){0>ze||(e.current=fe[ze],fe[ze]=null,ze--)}function je(e,t){ze++,fe[ze]=e.current,e.current=t}var tt=ce(null),Ua=ce(null),pa=ce(null),fi=ce(null);function di(e,t){switch(je(pa,t),je(Ua,e),je(tt,null),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)&&(t=t.namespaceURI)?hm(t):0;break;default:if(e=e===8?t.parentNode:t,t=e.tagName,e=e.namespaceURI)e=hm(e),t=gm(e,t);else switch(t){case"svg":t=1;break;case"math":t=2;break;default:t=0}}Ee(tt),je(tt,t)}function pn(){Ee(tt),Ee(Ua),Ee(pa)}function rs(e){e.memoizedState!==null&&je(fi,e);var t=tt.current,a=gm(t,e.type);t!==a&&(je(Ua,e),je(tt,a))}function mi(e){Ua.current===e&&(Ee(tt),Ee(Ua)),fi.current===e&&(Ee(fi),Ql._currentValue=pe)}var ss=Object.prototype.hasOwnProperty,os=l.unstable_scheduleCallback,cs=l.unstable_cancelCallback,$p=l.unstable_shouldYield,Wp=l.unstable_requestPaint,Lt=l.unstable_now,Pp=l.unstable_getCurrentPriorityLevel,nu=l.unstable_ImmediatePriority,lu=l.unstable_UserBlockingPriority,pi=l.unstable_NormalPriority,Ip=l.unstable_LowPriority,iu=l.unstable_IdlePriority,eh=l.log,th=l.unstable_setDisableYieldValue,tl=null,mt=null;function ah(e){if(mt&&typeof mt.onCommitFiberRoot=="function")try{mt.onCommitFiberRoot(tl,e,void 0,(e.current.flags&128)===128)}catch{}}function ha(e){if(typeof eh=="function"&&th(e),mt&&typeof mt.setStrictMode=="function")try{mt.setStrictMode(tl,e)}catch{}}var pt=Math.clz32?Math.clz32:ih,nh=Math.log,lh=Math.LN2;function ih(e){return e>>>=0,e===0?32:31-(nh(e)/lh|0)|0}var hi=128,gi=4194304;function qa(e){var t=e&42;if(t!==0)return t;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194176;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function vi(e,t){var a=e.pendingLanes;if(a===0)return 0;var n=0,i=e.suspendedLanes,s=e.pingedLanes,m=e.warmLanes;e=e.finishedLanes!==0;var y=a&134217727;return y!==0?(a=y&~i,a!==0?n=qa(a):(s&=y,s!==0?n=qa(s):e||(m=y&~m,m!==0&&(n=qa(m))))):(y=a&~i,y!==0?n=qa(y):s!==0?n=qa(s):e||(m=a&~m,m!==0&&(n=qa(m)))),n===0?0:t!==0&&t!==n&&(t&i)===0&&(i=n&-n,m=t&-t,i>=m||i===32&&(m&4194176)!==0)?t:n}function al(e,t){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&t)===0}function rh(e,t){switch(e){case 1:case 2:case 4:case 8:return t+250;case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function ru(){var e=hi;return hi<<=1,(hi&4194176)===0&&(hi=128),e}function su(){var e=gi;return gi<<=1,(gi&62914560)===0&&(gi=4194304),e}function us(e){for(var t=[],a=0;31>a;a++)t.push(e);return t}function nl(e,t){e.pendingLanes|=t,t!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function sh(e,t,a,n,i,s){var m=e.pendingLanes;e.pendingLanes=a,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=a,e.entangledLanes&=a,e.errorRecoveryDisabledLanes&=a,e.shellSuspendCounter=0;var y=e.entanglements,w=e.expirationTimes,A=e.hiddenUpdates;for(a=m&~a;0<a;){var q=31-pt(a),V=1<<q;y[q]=0,w[q]=-1;var B=A[q];if(B!==null)for(A[q]=null,q=0;q<B.length;q++){var L=B[q];L!==null&&(L.lane&=-536870913)}a&=~V}n!==0&&ou(e,n,0),s!==0&&i===0&&e.tag!==0&&(e.suspendedLanes|=s&~(m&~t))}function ou(e,t,a){e.pendingLanes|=t,e.suspendedLanes&=~t;var n=31-pt(t);e.entangledLanes|=t,e.entanglements[n]=e.entanglements[n]|1073741824|a&4194218}function cu(e,t){var a=e.entangledLanes|=t;for(e=e.entanglements;a;){var n=31-pt(a),i=1<<n;i&t|e[n]&t&&(e[n]|=t),a&=~i}}function uu(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function fu(){var e=I.p;return e!==0?e:(e=window.event,e===void 0?32:Mm(e.type))}function oh(e,t){var a=I.p;try{return I.p=e,t()}finally{I.p=a}}var ga=Math.random().toString(36).slice(2),at="__reactFiber$"+ga,ot="__reactProps$"+ga,hn="__reactContainer$"+ga,fs="__reactEvents$"+ga,ch="__reactListeners$"+ga,uh="__reactHandles$"+ga,du="__reactResources$"+ga,ll="__reactMarker$"+ga;function ds(e){delete e[at],delete e[ot],delete e[fs],delete e[ch],delete e[uh]}function Fa(e){var t=e[at];if(t)return t;for(var a=e.parentNode;a;){if(t=a[hn]||a[at]){if(a=t.alternate,t.child!==null||a!==null&&a.child!==null)for(e=bm(e);e!==null;){if(a=e[at])return a;e=bm(e)}return t}e=a,a=e.parentNode}return null}function gn(e){if(e=e[at]||e[hn]){var t=e.tag;if(t===5||t===6||t===13||t===26||t===27||t===3)return e}return null}function il(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e.stateNode;throw Error(o(33))}function vn(e){var t=e[du];return t||(t=e[du]={hoistableStyles:new Map,hoistableScripts:new Map}),t}function Ze(e){e[ll]=!0}var mu=new Set,pu={};function Ya(e,t){yn(e,t),yn(e+"Capture",t)}function yn(e,t){for(pu[e]=t,e=0;e<t.length;e++)mu.add(t[e])}var Kt=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),fh=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),hu={},gu={};function dh(e){return ss.call(gu,e)?!0:ss.call(hu,e)?!1:fh.test(e)?gu[e]=!0:(hu[e]=!0,!1)}function yi(e,t,a){if(dh(t))if(a===null)e.removeAttribute(t);else{switch(typeof a){case"undefined":case"function":case"symbol":e.removeAttribute(t);return;case"boolean":var n=t.toLowerCase().slice(0,5);if(n!=="data-"&&n!=="aria-"){e.removeAttribute(t);return}}e.setAttribute(t,""+a)}}function bi(e,t,a){if(a===null)e.removeAttribute(t);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(t);return}e.setAttribute(t,""+a)}}function Jt(e,t,a,n){if(n===null)e.removeAttribute(a);else{switch(typeof n){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(a);return}e.setAttributeNS(t,a,""+n)}}function xt(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function vu(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function mh(e){var t=vu(e)?"checked":"value",a=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),n=""+e[t];if(!e.hasOwnProperty(t)&&typeof a<"u"&&typeof a.get=="function"&&typeof a.set=="function"){var i=a.get,s=a.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(m){n=""+m,s.call(this,m)}}),Object.defineProperty(e,t,{enumerable:a.enumerable}),{getValue:function(){return n},setValue:function(m){n=""+m},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function xi(e){e._valueTracker||(e._valueTracker=mh(e))}function yu(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var a=t.getValue(),n="";return e&&(n=vu(e)?e.checked?"true":"false":e.value),e=n,e!==a?(t.setValue(e),!0):!1}function wi(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var ph=/[\n"\\]/g;function wt(e){return e.replace(ph,function(t){return"\\"+t.charCodeAt(0).toString(16)+" "})}function ms(e,t,a,n,i,s,m,y){e.name="",m!=null&&typeof m!="function"&&typeof m!="symbol"&&typeof m!="boolean"?e.type=m:e.removeAttribute("type"),t!=null?m==="number"?(t===0&&e.value===""||e.value!=t)&&(e.value=""+xt(t)):e.value!==""+xt(t)&&(e.value=""+xt(t)):m!=="submit"&&m!=="reset"||e.removeAttribute("value"),t!=null?ps(e,m,xt(t)):a!=null?ps(e,m,xt(a)):n!=null&&e.removeAttribute("value"),i==null&&s!=null&&(e.defaultChecked=!!s),i!=null&&(e.checked=i&&typeof i!="function"&&typeof i!="symbol"),y!=null&&typeof y!="function"&&typeof y!="symbol"&&typeof y!="boolean"?e.name=""+xt(y):e.removeAttribute("name")}function bu(e,t,a,n,i,s,m,y){if(s!=null&&typeof s!="function"&&typeof s!="symbol"&&typeof s!="boolean"&&(e.type=s),t!=null||a!=null){if(!(s!=="submit"&&s!=="reset"||t!=null))return;a=a!=null?""+xt(a):"",t=t!=null?""+xt(t):a,y||t===e.value||(e.value=t),e.defaultValue=t}n=n??i,n=typeof n!="function"&&typeof n!="symbol"&&!!n,e.checked=y?e.checked:!!n,e.defaultChecked=!!n,m!=null&&typeof m!="function"&&typeof m!="symbol"&&typeof m!="boolean"&&(e.name=m)}function ps(e,t,a){t==="number"&&wi(e.ownerDocument)===e||e.defaultValue===""+a||(e.defaultValue=""+a)}function bn(e,t,a,n){if(e=e.options,t){t={};for(var i=0;i<a.length;i++)t["$"+a[i]]=!0;for(a=0;a<e.length;a++)i=t.hasOwnProperty("$"+e[a].value),e[a].selected!==i&&(e[a].selected=i),i&&n&&(e[a].defaultSelected=!0)}else{for(a=""+xt(a),t=null,i=0;i<e.length;i++){if(e[i].value===a){e[i].selected=!0,n&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function xu(e,t,a){if(t!=null&&(t=""+xt(t),t!==e.value&&(e.value=t),a==null)){e.defaultValue!==t&&(e.defaultValue=t);return}e.defaultValue=a!=null?""+xt(a):""}function wu(e,t,a,n){if(t==null){if(n!=null){if(a!=null)throw Error(o(92));if(ne(n)){if(1<n.length)throw Error(o(93));n=n[0]}a=n}a==null&&(a=""),t=a}a=xt(t),e.defaultValue=a,n=e.textContent,n===a&&n!==""&&n!==null&&(e.value=n)}function xn(e,t){if(t){var a=e.firstChild;if(a&&a===e.lastChild&&a.nodeType===3){a.nodeValue=t;return}}e.textContent=t}var hh=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Su(e,t,a){var n=t.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?n?e.setProperty(t,""):t==="float"?e.cssFloat="":e[t]="":n?e.setProperty(t,a):typeof a!="number"||a===0||hh.has(t)?t==="float"?e.cssFloat=a:e[t]=(""+a).trim():e[t]=a+"px"}function Eu(e,t,a){if(t!=null&&typeof t!="object")throw Error(o(62));if(e=e.style,a!=null){for(var n in a)!a.hasOwnProperty(n)||t!=null&&t.hasOwnProperty(n)||(n.indexOf("--")===0?e.setProperty(n,""):n==="float"?e.cssFloat="":e[n]="");for(var i in t)n=t[i],t.hasOwnProperty(i)&&a[i]!==n&&Su(e,i,n)}else for(var s in t)t.hasOwnProperty(s)&&Su(e,s,t[s])}function hs(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var gh=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),vh=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Si(e){return vh.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}var gs=null;function vs(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var wn=null,Sn=null;function ju(e){var t=gn(e);if(t&&(e=t.stateNode)){var a=e[ot]||null;e:switch(e=t.stateNode,t.type){case"input":if(ms(e,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),t=a.name,a.type==="radio"&&t!=null){for(a=e;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+wt(""+t)+'"][type="radio"]'),t=0;t<a.length;t++){var n=a[t];if(n!==e&&n.form===e.form){var i=n[ot]||null;if(!i)throw Error(o(90));ms(n,i.value,i.defaultValue,i.defaultValue,i.checked,i.defaultChecked,i.type,i.name)}}for(t=0;t<a.length;t++)n=a[t],n.form===e.form&&yu(n)}break e;case"textarea":xu(e,a.value,a.defaultValue);break e;case"select":t=a.value,t!=null&&bn(e,!!a.multiple,t,!1)}}}var ys=!1;function Tu(e,t,a){if(ys)return e(t,a);ys=!0;try{var n=e(t);return n}finally{if(ys=!1,(wn!==null||Sn!==null)&&(ir(),wn&&(t=wn,e=Sn,Sn=wn=null,ju(t),e)))for(t=0;t<e.length;t++)ju(e[t])}}function rl(e,t){var a=e.stateNode;if(a===null)return null;var n=a[ot]||null;if(n===null)return null;a=n[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(n=!n.disabled)||(e=e.type,n=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!n;break e;default:e=!1}if(e)return null;if(a&&typeof a!="function")throw Error(o(231,t,typeof a));return a}var bs=!1;if(Kt)try{var sl={};Object.defineProperty(sl,"passive",{get:function(){bs=!0}}),window.addEventListener("test",sl,sl),window.removeEventListener("test",sl,sl)}catch{bs=!1}var va=null,xs=null,Ei=null;function Ou(){if(Ei)return Ei;var e,t=xs,a=t.length,n,i="value"in va?va.value:va.textContent,s=i.length;for(e=0;e<a&&t[e]===i[e];e++);var m=a-e;for(n=1;n<=m&&t[a-n]===i[s-n];n++);return Ei=i.slice(e,1<n?1-n:void 0)}function ji(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Ti(){return!0}function Nu(){return!1}function ct(e){function t(a,n,i,s,m){this._reactName=a,this._targetInst=i,this.type=n,this.nativeEvent=s,this.target=m,this.currentTarget=null;for(var y in e)e.hasOwnProperty(y)&&(a=e[y],this[y]=a?a(s):s[y]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?Ti:Nu,this.isPropagationStopped=Nu,this}return Z(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=Ti)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=Ti)},persist:function(){},isPersistent:Ti}),t}var Ga={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Oi=ct(Ga),ol=Z({},Ga,{view:0,detail:0}),yh=ct(ol),ws,Ss,cl,Ni=Z({},ol,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:js,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==cl&&(cl&&e.type==="mousemove"?(ws=e.screenX-cl.screenX,Ss=e.screenY-cl.screenY):Ss=ws=0,cl=e),ws)},movementY:function(e){return"movementY"in e?e.movementY:Ss}}),Ru=ct(Ni),bh=Z({},Ni,{dataTransfer:0}),xh=ct(bh),wh=Z({},ol,{relatedTarget:0}),Es=ct(wh),Sh=Z({},Ga,{animationName:0,elapsedTime:0,pseudoElement:0}),Eh=ct(Sh),jh=Z({},Ga,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Th=ct(jh),Oh=Z({},Ga,{data:0}),Au=ct(Oh),Nh={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Rh={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Ah={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function _h(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=Ah[e])?!!t[e]:!1}function js(){return _h}var Ch=Z({},ol,{key:function(e){if(e.key){var t=Nh[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=ji(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Rh[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:js,charCode:function(e){return e.type==="keypress"?ji(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?ji(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),zh=ct(Ch),Dh=Z({},Ni,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),_u=ct(Dh),Mh=Z({},ol,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:js}),kh=ct(Mh),Bh=Z({},Ga,{propertyName:0,elapsedTime:0,pseudoElement:0}),Hh=ct(Bh),Lh=Z({},Ni,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Uh=ct(Lh),qh=Z({},Ga,{newState:0,oldState:0}),Fh=ct(qh),Yh=[9,13,27,32],Ts=Kt&&"CompositionEvent"in window,ul=null;Kt&&"documentMode"in document&&(ul=document.documentMode);var Gh=Kt&&"TextEvent"in window&&!ul,Cu=Kt&&(!Ts||ul&&8<ul&&11>=ul),zu=" ",Du=!1;function Mu(e,t){switch(e){case"keyup":return Yh.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function ku(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var En=!1;function Xh(e,t){switch(e){case"compositionend":return ku(t);case"keypress":return t.which!==32?null:(Du=!0,zu);case"textInput":return e=t.data,e===zu&&Du?null:e;default:return null}}function Vh(e,t){if(En)return e==="compositionend"||!Ts&&Mu(e,t)?(e=Ou(),Ei=xs=va=null,En=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Cu&&t.locale!=="ko"?null:t.data;default:return null}}var Qh={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Bu(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!Qh[e.type]:t==="textarea"}function Hu(e,t,a,n){wn?Sn?Sn.push(n):Sn=[n]:wn=n,t=ur(t,"onChange"),0<t.length&&(a=new Oi("onChange","change",null,a,n),e.push({event:a,listeners:t}))}var fl=null,dl=null;function Zh(e){um(e,0)}function Ri(e){var t=il(e);if(yu(t))return e}function Lu(e,t){if(e==="change")return t}var Uu=!1;if(Kt){var Os;if(Kt){var Ns="oninput"in document;if(!Ns){var qu=document.createElement("div");qu.setAttribute("oninput","return;"),Ns=typeof qu.oninput=="function"}Os=Ns}else Os=!1;Uu=Os&&(!document.documentMode||9<document.documentMode)}function Fu(){fl&&(fl.detachEvent("onpropertychange",Yu),dl=fl=null)}function Yu(e){if(e.propertyName==="value"&&Ri(dl)){var t=[];Hu(t,dl,e,vs(e)),Tu(Zh,t)}}function Kh(e,t,a){e==="focusin"?(Fu(),fl=t,dl=a,fl.attachEvent("onpropertychange",Yu)):e==="focusout"&&Fu()}function Jh(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Ri(dl)}function $h(e,t){if(e==="click")return Ri(t)}function Wh(e,t){if(e==="input"||e==="change")return Ri(t)}function Ph(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var ht=typeof Object.is=="function"?Object.is:Ph;function ml(e,t){if(ht(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var a=Object.keys(e),n=Object.keys(t);if(a.length!==n.length)return!1;for(n=0;n<a.length;n++){var i=a[n];if(!ss.call(t,i)||!ht(e[i],t[i]))return!1}return!0}function Gu(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Xu(e,t){var a=Gu(e);e=0;for(var n;a;){if(a.nodeType===3){if(n=e+a.textContent.length,e<=t&&n>=t)return{node:a,offset:t-e};e=n}e:{for(;a;){if(a.nextSibling){a=a.nextSibling;break e}a=a.parentNode}a=void 0}a=Gu(a)}}function Vu(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Vu(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Qu(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var t=wi(e.document);t instanceof e.HTMLIFrameElement;){try{var a=typeof t.contentWindow.location.href=="string"}catch{a=!1}if(a)e=t.contentWindow;else break;t=wi(e.document)}return t}function Rs(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function Ih(e,t){var a=Qu(t);t=e.focusedElem;var n=e.selectionRange;if(a!==t&&t&&t.ownerDocument&&Vu(t.ownerDocument.documentElement,t)){if(n!==null&&Rs(t)){if(e=n.start,a=n.end,a===void 0&&(a=e),"selectionStart"in t)t.selectionStart=e,t.selectionEnd=Math.min(a,t.value.length);else if(a=(e=t.ownerDocument||document)&&e.defaultView||window,a.getSelection){a=a.getSelection();var i=t.textContent.length,s=Math.min(n.start,i);n=n.end===void 0?s:Math.min(n.end,i),!a.extend&&s>n&&(i=n,n=s,s=i),i=Xu(t,s);var m=Xu(t,n);i&&m&&(a.rangeCount!==1||a.anchorNode!==i.node||a.anchorOffset!==i.offset||a.focusNode!==m.node||a.focusOffset!==m.offset)&&(e=e.createRange(),e.setStart(i.node,i.offset),a.removeAllRanges(),s>n?(a.addRange(e),a.extend(m.node,m.offset)):(e.setEnd(m.node,m.offset),a.addRange(e)))}}for(e=[],a=t;a=a.parentNode;)a.nodeType===1&&e.push({element:a,left:a.scrollLeft,top:a.scrollTop});for(typeof t.focus=="function"&&t.focus(),t=0;t<e.length;t++)a=e[t],a.element.scrollLeft=a.left,a.element.scrollTop=a.top}}var e1=Kt&&"documentMode"in document&&11>=document.documentMode,jn=null,As=null,pl=null,_s=!1;function Zu(e,t,a){var n=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;_s||jn==null||jn!==wi(n)||(n=jn,"selectionStart"in n&&Rs(n)?n={start:n.selectionStart,end:n.selectionEnd}:(n=(n.ownerDocument&&n.ownerDocument.defaultView||window).getSelection(),n={anchorNode:n.anchorNode,anchorOffset:n.anchorOffset,focusNode:n.focusNode,focusOffset:n.focusOffset}),pl&&ml(pl,n)||(pl=n,n=ur(As,"onSelect"),0<n.length&&(t=new Oi("onSelect","select",null,t,a),e.push({event:t,listeners:n}),t.target=jn)))}function Xa(e,t){var a={};return a[e.toLowerCase()]=t.toLowerCase(),a["Webkit"+e]="webkit"+t,a["Moz"+e]="moz"+t,a}var Tn={animationend:Xa("Animation","AnimationEnd"),animationiteration:Xa("Animation","AnimationIteration"),animationstart:Xa("Animation","AnimationStart"),transitionrun:Xa("Transition","TransitionRun"),transitionstart:Xa("Transition","TransitionStart"),transitioncancel:Xa("Transition","TransitionCancel"),transitionend:Xa("Transition","TransitionEnd")},Cs={},Ku={};Kt&&(Ku=document.createElement("div").style,"AnimationEvent"in window||(delete Tn.animationend.animation,delete Tn.animationiteration.animation,delete Tn.animationstart.animation),"TransitionEvent"in window||delete Tn.transitionend.transition);function Va(e){if(Cs[e])return Cs[e];if(!Tn[e])return e;var t=Tn[e],a;for(a in t)if(t.hasOwnProperty(a)&&a in Ku)return Cs[e]=t[a];return e}var Ju=Va("animationend"),$u=Va("animationiteration"),Wu=Va("animationstart"),t1=Va("transitionrun"),a1=Va("transitionstart"),n1=Va("transitioncancel"),Pu=Va("transitionend"),Iu=new Map,ef="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll scrollEnd toggle touchMove waiting wheel".split(" ");function zt(e,t){Iu.set(e,t),Ya(t,[e])}var St=[],On=0,zs=0;function Ai(){for(var e=On,t=zs=On=0;t<e;){var a=St[t];St[t++]=null;var n=St[t];St[t++]=null;var i=St[t];St[t++]=null;var s=St[t];if(St[t++]=null,n!==null&&i!==null){var m=n.pending;m===null?i.next=i:(i.next=m.next,m.next=i),n.pending=i}s!==0&&tf(a,i,s)}}function _i(e,t,a,n){St[On++]=e,St[On++]=t,St[On++]=a,St[On++]=n,zs|=n,e.lanes|=n,e=e.alternate,e!==null&&(e.lanes|=n)}function Ds(e,t,a,n){return _i(e,t,a,n),Ci(e)}function ya(e,t){return _i(e,null,null,t),Ci(e)}function tf(e,t,a){e.lanes|=a;var n=e.alternate;n!==null&&(n.lanes|=a);for(var i=!1,s=e.return;s!==null;)s.childLanes|=a,n=s.alternate,n!==null&&(n.childLanes|=a),s.tag===22&&(e=s.stateNode,e===null||e._visibility&1||(i=!0)),e=s,s=s.return;i&&t!==null&&e.tag===3&&(s=e.stateNode,i=31-pt(a),s=s.hiddenUpdates,e=s[i],e===null?s[i]=[t]:e.push(t),t.lane=a|536870912)}function Ci(e){if(50<Ul)throw Ul=0,qo=null,Error(o(185));for(var t=e.return;t!==null;)e=t,t=e.return;return e.tag===3?e.stateNode:null}var Nn={},af=new WeakMap;function Et(e,t){if(typeof e=="object"&&e!==null){var a=af.get(e);return a!==void 0?a:(t={value:e,source:t,stack:se(t)},af.set(e,t),t)}return{value:e,source:t,stack:se(t)}}var Rn=[],An=0,zi=null,Di=0,jt=[],Tt=0,Qa=null,$t=1,Wt="";function Za(e,t){Rn[An++]=Di,Rn[An++]=zi,zi=e,Di=t}function nf(e,t,a){jt[Tt++]=$t,jt[Tt++]=Wt,jt[Tt++]=Qa,Qa=e;var n=$t;e=Wt;var i=32-pt(n)-1;n&=~(1<<i),a+=1;var s=32-pt(t)+i;if(30<s){var m=i-i%5;s=(n&(1<<m)-1).toString(32),n>>=m,i-=m,$t=1<<32-pt(t)+i|a<<i|n,Wt=s+e}else $t=1<<s|a<<i|n,Wt=e}function Ms(e){e.return!==null&&(Za(e,1),nf(e,1,0))}function ks(e){for(;e===zi;)zi=Rn[--An],Rn[An]=null,Di=Rn[--An],Rn[An]=null;for(;e===Qa;)Qa=jt[--Tt],jt[Tt]=null,Wt=jt[--Tt],jt[Tt]=null,$t=jt[--Tt],jt[Tt]=null}var rt=null,We=null,Te=!1,Dt=null,Ut=!1,Bs=Error(o(519));function Ka(e){var t=Error(o(418,""));throw vl(Et(t,e)),Bs}function lf(e){var t=e.stateNode,a=e.type,n=e.memoizedProps;switch(t[at]=e,t[ot]=n,a){case"dialog":xe("cancel",t),xe("close",t);break;case"iframe":case"object":case"embed":xe("load",t);break;case"video":case"audio":for(a=0;a<Fl.length;a++)xe(Fl[a],t);break;case"source":xe("error",t);break;case"img":case"image":case"link":xe("error",t),xe("load",t);break;case"details":xe("toggle",t);break;case"input":xe("invalid",t),bu(t,n.value,n.defaultValue,n.checked,n.defaultChecked,n.type,n.name,!0),xi(t);break;case"select":xe("invalid",t);break;case"textarea":xe("invalid",t),wu(t,n.value,n.defaultValue,n.children),xi(t)}a=n.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||t.textContent===""+a||n.suppressHydrationWarning===!0||pm(t.textContent,a)?(n.popover!=null&&(xe("beforetoggle",t),xe("toggle",t)),n.onScroll!=null&&xe("scroll",t),n.onScrollEnd!=null&&xe("scrollend",t),n.onClick!=null&&(t.onclick=fr),t=!0):t=!1,t||Ka(e)}function rf(e){for(rt=e.return;rt;)switch(rt.tag){case 3:case 27:Ut=!0;return;case 5:case 13:Ut=!1;return;default:rt=rt.return}}function hl(e){if(e!==rt)return!1;if(!Te)return rf(e),Te=!0,!1;var t=!1,a;if((a=e.tag!==3&&e.tag!==27)&&((a=e.tag===5)&&(a=e.type,a=!(a!=="form"&&a!=="button")||nc(e.type,e.memoizedProps)),a=!a),a&&(t=!0),t&&We&&Ka(e),rf(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(o(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8)if(a=e.data,a==="/$"){if(t===0){We=kt(e.nextSibling);break e}t--}else a!=="$"&&a!=="$!"&&a!=="$?"||t++;e=e.nextSibling}We=null}}else We=rt?kt(e.stateNode.nextSibling):null;return!0}function gl(){We=rt=null,Te=!1}function vl(e){Dt===null?Dt=[e]:Dt.push(e)}var yl=Error(o(460)),sf=Error(o(474)),Hs={then:function(){}};function of(e){return e=e.status,e==="fulfilled"||e==="rejected"}function Mi(){}function cf(e,t,a){switch(a=e[a],a===void 0?e.push(t):a!==t&&(t.then(Mi,Mi),t=a),t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,e===yl?Error(o(483)):e;default:if(typeof t.status=="string")t.then(Mi,Mi);else{if(e=_e,e!==null&&100<e.shellSuspendCounter)throw Error(o(482));e=t,e.status="pending",e.then(function(n){if(t.status==="pending"){var i=t;i.status="fulfilled",i.value=n}},function(n){if(t.status==="pending"){var i=t;i.status="rejected",i.reason=n}})}switch(t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,e===yl?Error(o(483)):e}throw bl=t,yl}}var bl=null;function uf(){if(bl===null)throw Error(o(459));var e=bl;return bl=null,e}var _n=null,xl=0;function ki(e){var t=xl;return xl+=1,_n===null&&(_n=[]),cf(_n,e,t)}function wl(e,t){t=t.props.ref,e.ref=t!==void 0?t:null}function Bi(e,t){throw t.$$typeof===d?Error(o(525)):(e=Object.prototype.toString.call(t),Error(o(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)))}function ff(e){var t=e._init;return t(e._payload)}function df(e){function t(z,R){if(e){var k=z.deletions;k===null?(z.deletions=[R],z.flags|=16):k.push(R)}}function a(z,R){if(!e)return null;for(;R!==null;)t(z,R),R=R.sibling;return null}function n(z){for(var R=new Map;z!==null;)z.key!==null?R.set(z.key,z):R.set(z.index,z),z=z.sibling;return R}function i(z,R){return z=_a(z,R),z.index=0,z.sibling=null,z}function s(z,R,k){return z.index=k,e?(k=z.alternate,k!==null?(k=k.index,k<R?(z.flags|=33554434,R):k):(z.flags|=33554434,R)):(z.flags|=1048576,R)}function m(z){return e&&z.alternate===null&&(z.flags|=33554434),z}function y(z,R,k,F){return R===null||R.tag!==6?(R=zo(k,z.mode,F),R.return=z,R):(R=i(R,k),R.return=z,R)}function w(z,R,k,F){var le=k.type;return le===g?q(z,R,k.props.children,F,k.key):R!==null&&(R.elementType===le||typeof le=="object"&&le!==null&&le.$$typeof===M&&ff(le)===R.type)?(R=i(R,k.props),wl(R,k),R.return=z,R):(R=er(k.type,k.key,k.props,null,z.mode,F),wl(R,k),R.return=z,R)}function A(z,R,k,F){return R===null||R.tag!==4||R.stateNode.containerInfo!==k.containerInfo||R.stateNode.implementation!==k.implementation?(R=Do(k,z.mode,F),R.return=z,R):(R=i(R,k.children||[]),R.return=z,R)}function q(z,R,k,F,le){return R===null||R.tag!==7?(R=ln(k,z.mode,F,le),R.return=z,R):(R=i(R,k),R.return=z,R)}function V(z,R,k){if(typeof R=="string"&&R!==""||typeof R=="number"||typeof R=="bigint")return R=zo(""+R,z.mode,k),R.return=z,R;if(typeof R=="object"&&R!==null){switch(R.$$typeof){case p:return k=er(R.type,R.key,R.props,null,z.mode,k),wl(k,R),k.return=z,k;case v:return R=Do(R,z.mode,k),R.return=z,R;case M:var F=R._init;return R=F(R._payload),V(z,R,k)}if(ne(R)||$(R))return R=ln(R,z.mode,k,null),R.return=z,R;if(typeof R.then=="function")return V(z,ki(R),k);if(R.$$typeof===j)return V(z,Wi(z,R),k);Bi(z,R)}return null}function B(z,R,k,F){var le=R!==null?R.key:null;if(typeof k=="string"&&k!==""||typeof k=="number"||typeof k=="bigint")return le!==null?null:y(z,R,""+k,F);if(typeof k=="object"&&k!==null){switch(k.$$typeof){case p:return k.key===le?w(z,R,k,F):null;case v:return k.key===le?A(z,R,k,F):null;case M:return le=k._init,k=le(k._payload),B(z,R,k,F)}if(ne(k)||$(k))return le!==null?null:q(z,R,k,F,null);if(typeof k.then=="function")return B(z,R,ki(k),F);if(k.$$typeof===j)return B(z,R,Wi(z,k),F);Bi(z,k)}return null}function L(z,R,k,F,le){if(typeof F=="string"&&F!==""||typeof F=="number"||typeof F=="bigint")return z=z.get(k)||null,y(R,z,""+F,le);if(typeof F=="object"&&F!==null){switch(F.$$typeof){case p:return z=z.get(F.key===null?k:F.key)||null,w(R,z,F,le);case v:return z=z.get(F.key===null?k:F.key)||null,A(R,z,F,le);case M:var ve=F._init;return F=ve(F._payload),L(z,R,k,F,le)}if(ne(F)||$(F))return z=z.get(k)||null,q(R,z,F,le,null);if(typeof F.then=="function")return L(z,R,k,ki(F),le);if(F.$$typeof===j)return L(z,R,k,Wi(R,F),le);Bi(R,F)}return null}function re(z,R,k,F){for(var le=null,ve=null,oe=R,ue=R=0,$e=null;oe!==null&&ue<k.length;ue++){oe.index>ue?($e=oe,oe=null):$e=oe.sibling;var Oe=B(z,oe,k[ue],F);if(Oe===null){oe===null&&(oe=$e);break}e&&oe&&Oe.alternate===null&&t(z,oe),R=s(Oe,R,ue),ve===null?le=Oe:ve.sibling=Oe,ve=Oe,oe=$e}if(ue===k.length)return a(z,oe),Te&&Za(z,ue),le;if(oe===null){for(;ue<k.length;ue++)oe=V(z,k[ue],F),oe!==null&&(R=s(oe,R,ue),ve===null?le=oe:ve.sibling=oe,ve=oe);return Te&&Za(z,ue),le}for(oe=n(oe);ue<k.length;ue++)$e=L(oe,z,ue,k[ue],F),$e!==null&&(e&&$e.alternate!==null&&oe.delete($e.key===null?ue:$e.key),R=s($e,R,ue),ve===null?le=$e:ve.sibling=$e,ve=$e);return e&&oe.forEach(function(Ha){return t(z,Ha)}),Te&&Za(z,ue),le}function de(z,R,k,F){if(k==null)throw Error(o(151));for(var le=null,ve=null,oe=R,ue=R=0,$e=null,Oe=k.next();oe!==null&&!Oe.done;ue++,Oe=k.next()){oe.index>ue?($e=oe,oe=null):$e=oe.sibling;var Ha=B(z,oe,Oe.value,F);if(Ha===null){oe===null&&(oe=$e);break}e&&oe&&Ha.alternate===null&&t(z,oe),R=s(Ha,R,ue),ve===null?le=Ha:ve.sibling=Ha,ve=Ha,oe=$e}if(Oe.done)return a(z,oe),Te&&Za(z,ue),le;if(oe===null){for(;!Oe.done;ue++,Oe=k.next())Oe=V(z,Oe.value,F),Oe!==null&&(R=s(Oe,R,ue),ve===null?le=Oe:ve.sibling=Oe,ve=Oe);return Te&&Za(z,ue),le}for(oe=n(oe);!Oe.done;ue++,Oe=k.next())Oe=L(oe,z,ue,Oe.value,F),Oe!==null&&(e&&Oe.alternate!==null&&oe.delete(Oe.key===null?ue:Oe.key),R=s(Oe,R,ue),ve===null?le=Oe:ve.sibling=Oe,ve=Oe);return e&&oe.forEach(function(vg){return t(z,vg)}),Te&&Za(z,ue),le}function Ue(z,R,k,F){if(typeof k=="object"&&k!==null&&k.type===g&&k.key===null&&(k=k.props.children),typeof k=="object"&&k!==null){switch(k.$$typeof){case p:e:{for(var le=k.key;R!==null;){if(R.key===le){if(le=k.type,le===g){if(R.tag===7){a(z,R.sibling),F=i(R,k.props.children),F.return=z,z=F;break e}}else if(R.elementType===le||typeof le=="object"&&le!==null&&le.$$typeof===M&&ff(le)===R.type){a(z,R.sibling),F=i(R,k.props),wl(F,k),F.return=z,z=F;break e}a(z,R);break}else t(z,R);R=R.sibling}k.type===g?(F=ln(k.props.children,z.mode,F,k.key),F.return=z,z=F):(F=er(k.type,k.key,k.props,null,z.mode,F),wl(F,k),F.return=z,z=F)}return m(z);case v:e:{for(le=k.key;R!==null;){if(R.key===le)if(R.tag===4&&R.stateNode.containerInfo===k.containerInfo&&R.stateNode.implementation===k.implementation){a(z,R.sibling),F=i(R,k.children||[]),F.return=z,z=F;break e}else{a(z,R);break}else t(z,R);R=R.sibling}F=Do(k,z.mode,F),F.return=z,z=F}return m(z);case M:return le=k._init,k=le(k._payload),Ue(z,R,k,F)}if(ne(k))return re(z,R,k,F);if($(k)){if(le=$(k),typeof le!="function")throw Error(o(150));return k=le.call(k),de(z,R,k,F)}if(typeof k.then=="function")return Ue(z,R,ki(k),F);if(k.$$typeof===j)return Ue(z,R,Wi(z,k),F);Bi(z,k)}return typeof k=="string"&&k!==""||typeof k=="number"||typeof k=="bigint"?(k=""+k,R!==null&&R.tag===6?(a(z,R.sibling),F=i(R,k),F.return=z,z=F):(a(z,R),F=zo(k,z.mode,F),F.return=z,z=F),m(z)):a(z,R)}return function(z,R,k,F){try{xl=0;var le=Ue(z,R,k,F);return _n=null,le}catch(oe){if(oe===yl)throw oe;var ve=At(29,oe,null,z.mode);return ve.lanes=F,ve.return=z,ve}finally{}}}var Ja=df(!0),mf=df(!1),Cn=ce(null),Hi=ce(0);function pf(e,t){e=oa,je(Hi,e),je(Cn,t),oa=e|t.baseLanes}function Ls(){je(Hi,oa),je(Cn,Cn.current)}function Us(){oa=Hi.current,Ee(Cn),Ee(Hi)}var Ot=ce(null),qt=null;function ba(e){var t=e.alternate;je(Ve,Ve.current&1),je(Ot,e),qt===null&&(t===null||Cn.current!==null||t.memoizedState!==null)&&(qt=e)}function hf(e){if(e.tag===22){if(je(Ve,Ve.current),je(Ot,e),qt===null){var t=e.alternate;t!==null&&t.memoizedState!==null&&(qt=e)}}else xa()}function xa(){je(Ve,Ve.current),je(Ot,Ot.current)}function Pt(e){Ee(Ot),qt===e&&(qt=null),Ee(Ve)}var Ve=ce(0);function Li(e){for(var t=e;t!==null;){if(t.tag===13){var a=t.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||a.data==="$?"||a.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if((t.flags&128)!==0)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var l1=typeof AbortController<"u"?AbortController:function(){var e=[],t=this.signal={aborted:!1,addEventListener:function(a,n){e.push(n)}};this.abort=function(){t.aborted=!0,e.forEach(function(a){return a()})}},i1=l.unstable_scheduleCallback,r1=l.unstable_NormalPriority,Qe={$$typeof:j,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function qs(){return{controller:new l1,data:new Map,refCount:0}}function Sl(e){e.refCount--,e.refCount===0&&i1(r1,function(){e.controller.abort()})}var El=null,Fs=0,zn=0,Dn=null;function s1(e,t){if(El===null){var a=El=[];Fs=0,zn=Ko(),Dn={status:"pending",value:void 0,then:function(n){a.push(n)}}}return Fs++,t.then(gf,gf),t}function gf(){if(--Fs===0&&El!==null){Dn!==null&&(Dn.status="fulfilled");var e=El;El=null,zn=0,Dn=null;for(var t=0;t<e.length;t++)(0,e[t])()}}function o1(e,t){var a=[],n={status:"pending",value:null,reason:null,then:function(i){a.push(i)}};return e.then(function(){n.status="fulfilled",n.value=t;for(var i=0;i<a.length;i++)(0,a[i])(t)},function(i){for(n.status="rejected",n.reason=i,i=0;i<a.length;i++)(0,a[i])(void 0)}),n}var vf=Y.S;Y.S=function(e,t){typeof t=="object"&&t!==null&&typeof t.then=="function"&&s1(e,t),vf!==null&&vf(e,t)};var $a=ce(null);function Ys(){var e=$a.current;return e!==null?e:_e.pooledCache}function Ui(e,t){t===null?je($a,$a.current):je($a,t.pool)}function yf(){var e=Ys();return e===null?null:{parent:Qe._currentValue,pool:e}}var wa=0,ge=null,Ne=null,Ye=null,qi=!1,Mn=!1,Wa=!1,Fi=0,jl=0,kn=null,c1=0;function Fe(){throw Error(o(321))}function Gs(e,t){if(t===null)return!1;for(var a=0;a<t.length&&a<e.length;a++)if(!ht(e[a],t[a]))return!1;return!0}function Xs(e,t,a,n,i,s){return wa=s,ge=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,Y.H=e===null||e.memoizedState===null?Pa:Sa,Wa=!1,s=a(n,i),Wa=!1,Mn&&(s=xf(t,a,n,i)),bf(e),s}function bf(e){Y.H=Ft;var t=Ne!==null&&Ne.next!==null;if(wa=0,Ye=Ne=ge=null,qi=!1,jl=0,kn=null,t)throw Error(o(300));e===null||Ke||(e=e.dependencies,e!==null&&$i(e)&&(Ke=!0))}function xf(e,t,a,n){ge=e;var i=0;do{if(Mn&&(kn=null),jl=0,Mn=!1,25<=i)throw Error(o(301));if(i+=1,Ye=Ne=null,e.updateQueue!=null){var s=e.updateQueue;s.lastEffect=null,s.events=null,s.stores=null,s.memoCache!=null&&(s.memoCache.index=0)}Y.H=Ia,s=t(a,n)}while(Mn);return s}function u1(){var e=Y.H,t=e.useState()[0];return t=typeof t.then=="function"?Tl(t):t,e=e.useState()[0],(Ne!==null?Ne.memoizedState:null)!==e&&(ge.flags|=1024),t}function Vs(){var e=Fi!==0;return Fi=0,e}function Qs(e,t,a){t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~a}function Zs(e){if(qi){for(e=e.memoizedState;e!==null;){var t=e.queue;t!==null&&(t.pending=null),e=e.next}qi=!1}wa=0,Ye=Ne=ge=null,Mn=!1,jl=Fi=0,kn=null}function ut(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Ye===null?ge.memoizedState=Ye=e:Ye=Ye.next=e,Ye}function Ge(){if(Ne===null){var e=ge.alternate;e=e!==null?e.memoizedState:null}else e=Ne.next;var t=Ye===null?ge.memoizedState:Ye.next;if(t!==null)Ye=t,Ne=e;else{if(e===null)throw ge.alternate===null?Error(o(467)):Error(o(310));Ne=e,e={memoizedState:Ne.memoizedState,baseState:Ne.baseState,baseQueue:Ne.baseQueue,queue:Ne.queue,next:null},Ye===null?ge.memoizedState=Ye=e:Ye=Ye.next=e}return Ye}var Yi;Yi=function(){return{lastEffect:null,events:null,stores:null,memoCache:null}};function Tl(e){var t=jl;return jl+=1,kn===null&&(kn=[]),e=cf(kn,e,t),t=ge,(Ye===null?t.memoizedState:Ye.next)===null&&(t=t.alternate,Y.H=t===null||t.memoizedState===null?Pa:Sa),e}function Gi(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return Tl(e);if(e.$$typeof===j)return nt(e)}throw Error(o(438,String(e)))}function Ks(e){var t=null,a=ge.updateQueue;if(a!==null&&(t=a.memoCache),t==null){var n=ge.alternate;n!==null&&(n=n.updateQueue,n!==null&&(n=n.memoCache,n!=null&&(t={data:n.data.map(function(i){return i.slice()}),index:0})))}if(t==null&&(t={data:[],index:0}),a===null&&(a=Yi(),ge.updateQueue=a),a.memoCache=t,a=t.data[t.index],a===void 0)for(a=t.data[t.index]=Array(e),n=0;n<e;n++)a[n]=Q;return t.index++,a}function It(e,t){return typeof t=="function"?t(e):t}function Xi(e){var t=Ge();return Js(t,Ne,e)}function Js(e,t,a){var n=e.queue;if(n===null)throw Error(o(311));n.lastRenderedReducer=a;var i=e.baseQueue,s=n.pending;if(s!==null){if(i!==null){var m=i.next;i.next=s.next,s.next=m}t.baseQueue=i=s,n.pending=null}if(s=e.baseState,i===null)e.memoizedState=s;else{t=i.next;var y=m=null,w=null,A=t,q=!1;do{var V=A.lane&-536870913;if(V!==A.lane?(we&V)===V:(wa&V)===V){var B=A.revertLane;if(B===0)w!==null&&(w=w.next={lane:0,revertLane:0,action:A.action,hasEagerState:A.hasEagerState,eagerState:A.eagerState,next:null}),V===zn&&(q=!0);else if((wa&B)===B){A=A.next,B===zn&&(q=!0);continue}else V={lane:0,revertLane:A.revertLane,action:A.action,hasEagerState:A.hasEagerState,eagerState:A.eagerState,next:null},w===null?(y=w=V,m=s):w=w.next=V,ge.lanes|=B,Ca|=B;V=A.action,Wa&&a(s,V),s=A.hasEagerState?A.eagerState:a(s,V)}else B={lane:V,revertLane:A.revertLane,action:A.action,hasEagerState:A.hasEagerState,eagerState:A.eagerState,next:null},w===null?(y=w=B,m=s):w=w.next=B,ge.lanes|=V,Ca|=V;A=A.next}while(A!==null&&A!==t);if(w===null?m=s:w.next=y,!ht(s,e.memoizedState)&&(Ke=!0,q&&(a=Dn,a!==null)))throw a;e.memoizedState=s,e.baseState=m,e.baseQueue=w,n.lastRenderedState=s}return i===null&&(n.lanes=0),[e.memoizedState,n.dispatch]}function $s(e){var t=Ge(),a=t.queue;if(a===null)throw Error(o(311));a.lastRenderedReducer=e;var n=a.dispatch,i=a.pending,s=t.memoizedState;if(i!==null){a.pending=null;var m=i=i.next;do s=e(s,m.action),m=m.next;while(m!==i);ht(s,t.memoizedState)||(Ke=!0),t.memoizedState=s,t.baseQueue===null&&(t.baseState=s),a.lastRenderedState=s}return[s,n]}function wf(e,t,a){var n=ge,i=Ge(),s=Te;if(s){if(a===void 0)throw Error(o(407));a=a()}else a=t();var m=!ht((Ne||i).memoizedState,a);if(m&&(i.memoizedState=a,Ke=!0),i=i.queue,Is(jf.bind(null,n,i,e),[e]),i.getSnapshot!==t||m||Ye!==null&&Ye.memoizedState.tag&1){if(n.flags|=2048,Bn(9,Ef.bind(null,n,i,a,t),{destroy:void 0},null),_e===null)throw Error(o(349));s||(wa&60)!==0||Sf(n,t,a)}return a}function Sf(e,t,a){e.flags|=16384,e={getSnapshot:t,value:a},t=ge.updateQueue,t===null?(t=Yi(),ge.updateQueue=t,t.stores=[e]):(a=t.stores,a===null?t.stores=[e]:a.push(e))}function Ef(e,t,a,n){t.value=a,t.getSnapshot=n,Tf(t)&&Of(e)}function jf(e,t,a){return a(function(){Tf(t)&&Of(e)})}function Tf(e){var t=e.getSnapshot;e=e.value;try{var a=t();return!ht(e,a)}catch{return!0}}function Of(e){var t=ya(e,2);t!==null&&st(t,e,2)}function Ws(e){var t=ut();if(typeof e=="function"){var a=e;if(e=a(),Wa){ha(!0);try{a()}finally{ha(!1)}}}return t.memoizedState=t.baseState=e,t.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:It,lastRenderedState:e},t}function Nf(e,t,a,n){return e.baseState=a,Js(e,Ne,typeof n=="function"?n:It)}function f1(e,t,a,n,i){if(Zi(e))throw Error(o(485));if(e=t.action,e!==null){var s={payload:i,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(m){s.listeners.push(m)}};Y.T!==null?a(!0):s.isTransition=!1,n(s),a=t.pending,a===null?(s.next=t.pending=s,Rf(t,s)):(s.next=a.next,t.pending=a.next=s)}}function Rf(e,t){var a=t.action,n=t.payload,i=e.state;if(t.isTransition){var s=Y.T,m={};Y.T=m;try{var y=a(i,n),w=Y.S;w!==null&&w(m,y),Af(e,t,y)}catch(A){Ps(e,t,A)}finally{Y.T=s}}else try{s=a(i,n),Af(e,t,s)}catch(A){Ps(e,t,A)}}function Af(e,t,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(n){_f(e,t,n)},function(n){return Ps(e,t,n)}):_f(e,t,a)}function _f(e,t,a){t.status="fulfilled",t.value=a,Cf(t),e.state=a,t=e.pending,t!==null&&(a=t.next,a===t?e.pending=null:(a=a.next,t.next=a,Rf(e,a)))}function Ps(e,t,a){var n=e.pending;if(e.pending=null,n!==null){n=n.next;do t.status="rejected",t.reason=a,Cf(t),t=t.next;while(t!==n)}e.action=null}function Cf(e){e=e.listeners;for(var t=0;t<e.length;t++)(0,e[t])()}function zf(e,t){return t}function Df(e,t){if(Te){var a=_e.formState;if(a!==null){e:{var n=ge;if(Te){if(We){t:{for(var i=We,s=Ut;i.nodeType!==8;){if(!s){i=null;break t}if(i=kt(i.nextSibling),i===null){i=null;break t}}s=i.data,i=s==="F!"||s==="F"?i:null}if(i){We=kt(i.nextSibling),n=i.data==="F!";break e}}Ka(n)}n=!1}n&&(t=a[0])}}return a=ut(),a.memoizedState=a.baseState=t,n={pending:null,lanes:0,dispatch:null,lastRenderedReducer:zf,lastRenderedState:t},a.queue=n,a=Wf.bind(null,ge,n),n.dispatch=a,n=Ws(!1),s=lo.bind(null,ge,!1,n.queue),n=ut(),i={state:t,dispatch:null,action:e,pending:null},n.queue=i,a=f1.bind(null,ge,i,s,a),i.dispatch=a,n.memoizedState=e,[t,a,!1]}function Mf(e){var t=Ge();return kf(t,Ne,e)}function kf(e,t,a){t=Js(e,t,zf)[0],e=Xi(It)[0],t=typeof t=="object"&&t!==null&&typeof t.then=="function"?Tl(t):t;var n=Ge(),i=n.queue,s=i.dispatch;return a!==n.memoizedState&&(ge.flags|=2048,Bn(9,d1.bind(null,i,a),{destroy:void 0},null)),[t,s,e]}function d1(e,t){e.action=t}function Bf(e){var t=Ge(),a=Ne;if(a!==null)return kf(t,a,e);Ge(),t=t.memoizedState,a=Ge();var n=a.queue.dispatch;return a.memoizedState=e,[t,n,!1]}function Bn(e,t,a,n){return e={tag:e,create:t,inst:a,deps:n,next:null},t=ge.updateQueue,t===null&&(t=Yi(),ge.updateQueue=t),a=t.lastEffect,a===null?t.lastEffect=e.next=e:(n=a.next,a.next=e,e.next=n,t.lastEffect=e),e}function Hf(){return Ge().memoizedState}function Vi(e,t,a,n){var i=ut();ge.flags|=e,i.memoizedState=Bn(1|t,a,{destroy:void 0},n===void 0?null:n)}function Qi(e,t,a,n){var i=Ge();n=n===void 0?null:n;var s=i.memoizedState.inst;Ne!==null&&n!==null&&Gs(n,Ne.memoizedState.deps)?i.memoizedState=Bn(t,a,s,n):(ge.flags|=e,i.memoizedState=Bn(1|t,a,s,n))}function Lf(e,t){Vi(8390656,8,e,t)}function Is(e,t){Qi(2048,8,e,t)}function Uf(e,t){return Qi(4,2,e,t)}function qf(e,t){return Qi(4,4,e,t)}function Ff(e,t){if(typeof t=="function"){e=e();var a=t(e);return function(){typeof a=="function"?a():t(null)}}if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function Yf(e,t,a){a=a!=null?a.concat([e]):null,Qi(4,4,Ff.bind(null,t,e),a)}function eo(){}function Gf(e,t){var a=Ge();t=t===void 0?null:t;var n=a.memoizedState;return t!==null&&Gs(t,n[1])?n[0]:(a.memoizedState=[e,t],e)}function Xf(e,t){var a=Ge();t=t===void 0?null:t;var n=a.memoizedState;if(t!==null&&Gs(t,n[1]))return n[0];if(n=e(),Wa){ha(!0);try{e()}finally{ha(!1)}}return a.memoizedState=[n,t],n}function to(e,t,a){return a===void 0||(wa&1073741824)!==0?e.memoizedState=t:(e.memoizedState=a,e=Qd(),ge.lanes|=e,Ca|=e,a)}function Vf(e,t,a,n){return ht(a,t)?a:Cn.current!==null?(e=to(e,a,n),ht(e,t)||(Ke=!0),e):(wa&42)===0?(Ke=!0,e.memoizedState=a):(e=Qd(),ge.lanes|=e,Ca|=e,t)}function Qf(e,t,a,n,i){var s=I.p;I.p=s!==0&&8>s?s:8;var m=Y.T,y={};Y.T=y,lo(e,!1,t,a);try{var w=i(),A=Y.S;if(A!==null&&A(y,w),w!==null&&typeof w=="object"&&typeof w.then=="function"){var q=o1(w,n);Ol(e,t,q,bt(e))}else Ol(e,t,n,bt(e))}catch(V){Ol(e,t,{then:function(){},status:"rejected",reason:V},bt())}finally{I.p=s,Y.T=m}}function m1(){}function ao(e,t,a,n){if(e.tag!==5)throw Error(o(476));var i=Zf(e).queue;Qf(e,i,t,pe,a===null?m1:function(){return Kf(e),a(n)})}function Zf(e){var t=e.memoizedState;if(t!==null)return t;t={memoizedState:pe,baseState:pe,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:It,lastRenderedState:pe},next:null};var a={};return t.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:It,lastRenderedState:a},next:null},e.memoizedState=t,e=e.alternate,e!==null&&(e.memoizedState=t),t}function Kf(e){var t=Zf(e).next.queue;Ol(e,t,{},bt())}function no(){return nt(Ql)}function Jf(){return Ge().memoizedState}function $f(){return Ge().memoizedState}function p1(e){for(var t=e.return;t!==null;){switch(t.tag){case 24:case 3:var a=bt();e=Ta(a);var n=Oa(t,e,a);n!==null&&(st(n,t,a),Al(n,t,a)),t={cache:qs()},e.payload=t;return}t=t.return}}function h1(e,t,a){var n=bt();a={lane:n,revertLane:0,action:a,hasEagerState:!1,eagerState:null,next:null},Zi(e)?Pf(t,a):(a=Ds(e,t,a,n),a!==null&&(st(a,e,n),If(a,t,n)))}function Wf(e,t,a){var n=bt();Ol(e,t,a,n)}function Ol(e,t,a,n){var i={lane:n,revertLane:0,action:a,hasEagerState:!1,eagerState:null,next:null};if(Zi(e))Pf(t,i);else{var s=e.alternate;if(e.lanes===0&&(s===null||s.lanes===0)&&(s=t.lastRenderedReducer,s!==null))try{var m=t.lastRenderedState,y=s(m,a);if(i.hasEagerState=!0,i.eagerState=y,ht(y,m))return _i(e,t,i,0),_e===null&&Ai(),!1}catch{}finally{}if(a=Ds(e,t,i,n),a!==null)return st(a,e,n),If(a,t,n),!0}return!1}function lo(e,t,a,n){if(n={lane:2,revertLane:Ko(),action:n,hasEagerState:!1,eagerState:null,next:null},Zi(e)){if(t)throw Error(o(479))}else t=Ds(e,a,n,2),t!==null&&st(t,e,2)}function Zi(e){var t=e.alternate;return e===ge||t!==null&&t===ge}function Pf(e,t){Mn=qi=!0;var a=e.pending;a===null?t.next=t:(t.next=a.next,a.next=t),e.pending=t}function If(e,t,a){if((a&4194176)!==0){var n=t.lanes;n&=e.pendingLanes,a|=n,t.lanes=a,cu(e,a)}}var Ft={readContext:nt,use:Gi,useCallback:Fe,useContext:Fe,useEffect:Fe,useImperativeHandle:Fe,useLayoutEffect:Fe,useInsertionEffect:Fe,useMemo:Fe,useReducer:Fe,useRef:Fe,useState:Fe,useDebugValue:Fe,useDeferredValue:Fe,useTransition:Fe,useSyncExternalStore:Fe,useId:Fe};Ft.useCacheRefresh=Fe,Ft.useMemoCache=Fe,Ft.useHostTransitionStatus=Fe,Ft.useFormState=Fe,Ft.useActionState=Fe,Ft.useOptimistic=Fe;var Pa={readContext:nt,use:Gi,useCallback:function(e,t){return ut().memoizedState=[e,t===void 0?null:t],e},useContext:nt,useEffect:Lf,useImperativeHandle:function(e,t,a){a=a!=null?a.concat([e]):null,Vi(4194308,4,Ff.bind(null,t,e),a)},useLayoutEffect:function(e,t){return Vi(4194308,4,e,t)},useInsertionEffect:function(e,t){Vi(4,2,e,t)},useMemo:function(e,t){var a=ut();t=t===void 0?null:t;var n=e();if(Wa){ha(!0);try{e()}finally{ha(!1)}}return a.memoizedState=[n,t],n},useReducer:function(e,t,a){var n=ut();if(a!==void 0){var i=a(t);if(Wa){ha(!0);try{a(t)}finally{ha(!1)}}}else i=t;return n.memoizedState=n.baseState=i,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:i},n.queue=e,e=e.dispatch=h1.bind(null,ge,e),[n.memoizedState,e]},useRef:function(e){var t=ut();return e={current:e},t.memoizedState=e},useState:function(e){e=Ws(e);var t=e.queue,a=Wf.bind(null,ge,t);return t.dispatch=a,[e.memoizedState,a]},useDebugValue:eo,useDeferredValue:function(e,t){var a=ut();return to(a,e,t)},useTransition:function(){var e=Ws(!1);return e=Qf.bind(null,ge,e.queue,!0,!1),ut().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,t,a){var n=ge,i=ut();if(Te){if(a===void 0)throw Error(o(407));a=a()}else{if(a=t(),_e===null)throw Error(o(349));(we&60)!==0||Sf(n,t,a)}i.memoizedState=a;var s={value:a,getSnapshot:t};return i.queue=s,Lf(jf.bind(null,n,s,e),[e]),n.flags|=2048,Bn(9,Ef.bind(null,n,s,a,t),{destroy:void 0},null),a},useId:function(){var e=ut(),t=_e.identifierPrefix;if(Te){var a=Wt,n=$t;a=(n&~(1<<32-pt(n)-1)).toString(32)+a,t=":"+t+"R"+a,a=Fi++,0<a&&(t+="H"+a.toString(32)),t+=":"}else a=c1++,t=":"+t+"r"+a.toString(32)+":";return e.memoizedState=t},useCacheRefresh:function(){return ut().memoizedState=p1.bind(null,ge)}};Pa.useMemoCache=Ks,Pa.useHostTransitionStatus=no,Pa.useFormState=Df,Pa.useActionState=Df,Pa.useOptimistic=function(e){var t=ut();t.memoizedState=t.baseState=e;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return t.queue=a,t=lo.bind(null,ge,!0,a),a.dispatch=t,[e,t]};var Sa={readContext:nt,use:Gi,useCallback:Gf,useContext:nt,useEffect:Is,useImperativeHandle:Yf,useInsertionEffect:Uf,useLayoutEffect:qf,useMemo:Xf,useReducer:Xi,useRef:Hf,useState:function(){return Xi(It)},useDebugValue:eo,useDeferredValue:function(e,t){var a=Ge();return Vf(a,Ne.memoizedState,e,t)},useTransition:function(){var e=Xi(It)[0],t=Ge().memoizedState;return[typeof e=="boolean"?e:Tl(e),t]},useSyncExternalStore:wf,useId:Jf};Sa.useCacheRefresh=$f,Sa.useMemoCache=Ks,Sa.useHostTransitionStatus=no,Sa.useFormState=Mf,Sa.useActionState=Mf,Sa.useOptimistic=function(e,t){var a=Ge();return Nf(a,Ne,e,t)};var Ia={readContext:nt,use:Gi,useCallback:Gf,useContext:nt,useEffect:Is,useImperativeHandle:Yf,useInsertionEffect:Uf,useLayoutEffect:qf,useMemo:Xf,useReducer:$s,useRef:Hf,useState:function(){return $s(It)},useDebugValue:eo,useDeferredValue:function(e,t){var a=Ge();return Ne===null?to(a,e,t):Vf(a,Ne.memoizedState,e,t)},useTransition:function(){var e=$s(It)[0],t=Ge().memoizedState;return[typeof e=="boolean"?e:Tl(e),t]},useSyncExternalStore:wf,useId:Jf};Ia.useCacheRefresh=$f,Ia.useMemoCache=Ks,Ia.useHostTransitionStatus=no,Ia.useFormState=Bf,Ia.useActionState=Bf,Ia.useOptimistic=function(e,t){var a=Ge();return Ne!==null?Nf(a,Ne,e,t):(a.baseState=e,[e,a.queue.dispatch])};function io(e,t,a,n){t=e.memoizedState,a=a(n,t),a=a==null?t:Z({},t,a),e.memoizedState=a,e.lanes===0&&(e.updateQueue.baseState=a)}var ro={isMounted:function(e){return(e=e._reactInternals)?te(e)===e:!1},enqueueSetState:function(e,t,a){e=e._reactInternals;var n=bt(),i=Ta(n);i.payload=t,a!=null&&(i.callback=a),t=Oa(e,i,n),t!==null&&(st(t,e,n),Al(t,e,n))},enqueueReplaceState:function(e,t,a){e=e._reactInternals;var n=bt(),i=Ta(n);i.tag=1,i.payload=t,a!=null&&(i.callback=a),t=Oa(e,i,n),t!==null&&(st(t,e,n),Al(t,e,n))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var a=bt(),n=Ta(a);n.tag=2,t!=null&&(n.callback=t),t=Oa(e,n,a),t!==null&&(st(t,e,a),Al(t,e,a))}};function ed(e,t,a,n,i,s,m){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(n,s,m):t.prototype&&t.prototype.isPureReactComponent?!ml(a,n)||!ml(i,s):!0}function td(e,t,a,n){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(a,n),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(a,n),t.state!==e&&ro.enqueueReplaceState(t,t.state,null)}function en(e,t){var a=t;if("ref"in t){a={};for(var n in t)n!=="ref"&&(a[n]=t[n])}if(e=e.defaultProps){a===t&&(a=Z({},a));for(var i in e)a[i]===void 0&&(a[i]=e[i])}return a}var Ki=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var t=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)};function ad(e){Ki(e)}function nd(e){console.error(e)}function ld(e){Ki(e)}function Ji(e,t){try{var a=e.onUncaughtError;a(t.value,{componentStack:t.stack})}catch(n){setTimeout(function(){throw n})}}function id(e,t,a){try{var n=e.onCaughtError;n(a.value,{componentStack:a.stack,errorBoundary:t.tag===1?t.stateNode:null})}catch(i){setTimeout(function(){throw i})}}function so(e,t,a){return a=Ta(a),a.tag=3,a.payload={element:null},a.callback=function(){Ji(e,t)},a}function rd(e){return e=Ta(e),e.tag=3,e}function sd(e,t,a,n){var i=a.type.getDerivedStateFromError;if(typeof i=="function"){var s=n.value;e.payload=function(){return i(s)},e.callback=function(){id(t,a,n)}}var m=a.stateNode;m!==null&&typeof m.componentDidCatch=="function"&&(e.callback=function(){id(t,a,n),typeof i!="function"&&(za===null?za=new Set([this]):za.add(this));var y=n.stack;this.componentDidCatch(n.value,{componentStack:y!==null?y:""})})}function g1(e,t,a,n,i){if(a.flags|=32768,n!==null&&typeof n=="object"&&typeof n.then=="function"){if(t=a.alternate,t!==null&&Rl(t,a,i,!0),a=Ot.current,a!==null){switch(a.tag){case 13:return qt===null?Go():a.alternate===null&&Le===0&&(Le=3),a.flags&=-257,a.flags|=65536,a.lanes=i,n===Hs?a.flags|=16384:(t=a.updateQueue,t===null?a.updateQueue=new Set([n]):t.add(n),Vo(e,n,i)),!1;case 22:return a.flags|=65536,n===Hs?a.flags|=16384:(t=a.updateQueue,t===null?(t={transitions:null,markerInstances:null,retryQueue:new Set([n])},a.updateQueue=t):(a=t.retryQueue,a===null?t.retryQueue=new Set([n]):a.add(n)),Vo(e,n,i)),!1}throw Error(o(435,a.tag))}return Vo(e,n,i),Go(),!1}if(Te)return t=Ot.current,t!==null?((t.flags&65536)===0&&(t.flags|=256),t.flags|=65536,t.lanes=i,n!==Bs&&(e=Error(o(422),{cause:n}),vl(Et(e,a)))):(n!==Bs&&(t=Error(o(423),{cause:n}),vl(Et(t,a))),e=e.current.alternate,e.flags|=65536,i&=-i,e.lanes|=i,n=Et(n,a),i=so(e.stateNode,n,i),Eo(e,i),Le!==4&&(Le=2)),!1;var s=Error(o(520),{cause:n});if(s=Et(s,a),Hl===null?Hl=[s]:Hl.push(s),Le!==4&&(Le=2),t===null)return!0;n=Et(n,a),a=t;do{switch(a.tag){case 3:return a.flags|=65536,e=i&-i,a.lanes|=e,e=so(a.stateNode,n,e),Eo(a,e),!1;case 1:if(t=a.type,s=a.stateNode,(a.flags&128)===0&&(typeof t.getDerivedStateFromError=="function"||s!==null&&typeof s.componentDidCatch=="function"&&(za===null||!za.has(s))))return a.flags|=65536,i&=-i,a.lanes|=i,i=rd(i),sd(i,e,a,n),Eo(a,i),!1}a=a.return}while(a!==null);return!1}var od=Error(o(461)),Ke=!1;function Pe(e,t,a,n){t.child=e===null?mf(t,null,a,n):Ja(t,e.child,a,n)}function cd(e,t,a,n,i){a=a.render;var s=t.ref;if("ref"in n){var m={};for(var y in n)y!=="ref"&&(m[y]=n[y])}else m=n;return an(t),n=Xs(e,t,a,m,s,i),y=Vs(),e!==null&&!Ke?(Qs(e,t,i),ea(e,t,i)):(Te&&y&&Ms(t),t.flags|=1,Pe(e,t,n,i),t.child)}function ud(e,t,a,n,i){if(e===null){var s=a.type;return typeof s=="function"&&!Co(s)&&s.defaultProps===void 0&&a.compare===null?(t.tag=15,t.type=s,fd(e,t,s,n,i)):(e=er(a.type,null,n,t,t.mode,i),e.ref=t.ref,e.return=t,t.child=e)}if(s=e.child,!vo(e,i)){var m=s.memoizedProps;if(a=a.compare,a=a!==null?a:ml,a(m,n)&&e.ref===t.ref)return ea(e,t,i)}return t.flags|=1,e=_a(s,n),e.ref=t.ref,e.return=t,t.child=e}function fd(e,t,a,n,i){if(e!==null){var s=e.memoizedProps;if(ml(s,n)&&e.ref===t.ref)if(Ke=!1,t.pendingProps=n=s,vo(e,i))(e.flags&131072)!==0&&(Ke=!0);else return t.lanes=e.lanes,ea(e,t,i)}return oo(e,t,a,n,i)}function dd(e,t,a){var n=t.pendingProps,i=n.children,s=(t.stateNode._pendingVisibility&2)!==0,m=e!==null?e.memoizedState:null;if(Nl(e,t),n.mode==="hidden"||s){if((t.flags&128)!==0){if(n=m!==null?m.baseLanes|a:a,e!==null){for(i=t.child=e.child,s=0;i!==null;)s=s|i.lanes|i.childLanes,i=i.sibling;t.childLanes=s&~n}else t.childLanes=0,t.child=null;return md(e,t,n,a)}if((a&536870912)!==0)t.memoizedState={baseLanes:0,cachePool:null},e!==null&&Ui(t,m!==null?m.cachePool:null),m!==null?pf(t,m):Ls(),hf(t);else return t.lanes=t.childLanes=536870912,md(e,t,m!==null?m.baseLanes|a:a,a)}else m!==null?(Ui(t,m.cachePool),pf(t,m),xa(),t.memoizedState=null):(e!==null&&Ui(t,null),Ls(),xa());return Pe(e,t,i,a),t.child}function md(e,t,a,n){var i=Ys();return i=i===null?null:{parent:Qe._currentValue,pool:i},t.memoizedState={baseLanes:a,cachePool:i},e!==null&&Ui(t,null),Ls(),hf(t),e!==null&&Rl(e,t,n,!0),null}function Nl(e,t){var a=t.ref;if(a===null)e!==null&&e.ref!==null&&(t.flags|=2097664);else{if(typeof a!="function"&&typeof a!="object")throw Error(o(284));(e===null||e.ref!==a)&&(t.flags|=2097664)}}function oo(e,t,a,n,i){return an(t),a=Xs(e,t,a,n,void 0,i),n=Vs(),e!==null&&!Ke?(Qs(e,t,i),ea(e,t,i)):(Te&&n&&Ms(t),t.flags|=1,Pe(e,t,a,i),t.child)}function pd(e,t,a,n,i,s){return an(t),t.updateQueue=null,a=xf(t,n,a,i),bf(e),n=Vs(),e!==null&&!Ke?(Qs(e,t,s),ea(e,t,s)):(Te&&n&&Ms(t),t.flags|=1,Pe(e,t,a,s),t.child)}function hd(e,t,a,n,i){if(an(t),t.stateNode===null){var s=Nn,m=a.contextType;typeof m=="object"&&m!==null&&(s=nt(m)),s=new a(n,s),t.memoizedState=s.state!==null&&s.state!==void 0?s.state:null,s.updater=ro,t.stateNode=s,s._reactInternals=t,s=t.stateNode,s.props=n,s.state=t.memoizedState,s.refs={},wo(t),m=a.contextType,s.context=typeof m=="object"&&m!==null?nt(m):Nn,s.state=t.memoizedState,m=a.getDerivedStateFromProps,typeof m=="function"&&(io(t,a,m,n),s.state=t.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof s.getSnapshotBeforeUpdate=="function"||typeof s.UNSAFE_componentWillMount!="function"&&typeof s.componentWillMount!="function"||(m=s.state,typeof s.componentWillMount=="function"&&s.componentWillMount(),typeof s.UNSAFE_componentWillMount=="function"&&s.UNSAFE_componentWillMount(),m!==s.state&&ro.enqueueReplaceState(s,s.state,null),Cl(t,n,s,i),_l(),s.state=t.memoizedState),typeof s.componentDidMount=="function"&&(t.flags|=4194308),n=!0}else if(e===null){s=t.stateNode;var y=t.memoizedProps,w=en(a,y);s.props=w;var A=s.context,q=a.contextType;m=Nn,typeof q=="object"&&q!==null&&(m=nt(q));var V=a.getDerivedStateFromProps;q=typeof V=="function"||typeof s.getSnapshotBeforeUpdate=="function",y=t.pendingProps!==y,q||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(y||A!==m)&&td(t,s,n,m),ja=!1;var B=t.memoizedState;s.state=B,Cl(t,n,s,i),_l(),A=t.memoizedState,y||B!==A||ja?(typeof V=="function"&&(io(t,a,V,n),A=t.memoizedState),(w=ja||ed(t,a,w,n,B,A,m))?(q||typeof s.UNSAFE_componentWillMount!="function"&&typeof s.componentWillMount!="function"||(typeof s.componentWillMount=="function"&&s.componentWillMount(),typeof s.UNSAFE_componentWillMount=="function"&&s.UNSAFE_componentWillMount()),typeof s.componentDidMount=="function"&&(t.flags|=4194308)):(typeof s.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=n,t.memoizedState=A),s.props=n,s.state=A,s.context=m,n=w):(typeof s.componentDidMount=="function"&&(t.flags|=4194308),n=!1)}else{s=t.stateNode,So(e,t),m=t.memoizedProps,q=en(a,m),s.props=q,V=t.pendingProps,B=s.context,A=a.contextType,w=Nn,typeof A=="object"&&A!==null&&(w=nt(A)),y=a.getDerivedStateFromProps,(A=typeof y=="function"||typeof s.getSnapshotBeforeUpdate=="function")||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(m!==V||B!==w)&&td(t,s,n,w),ja=!1,B=t.memoizedState,s.state=B,Cl(t,n,s,i),_l();var L=t.memoizedState;m!==V||B!==L||ja||e!==null&&e.dependencies!==null&&$i(e.dependencies)?(typeof y=="function"&&(io(t,a,y,n),L=t.memoizedState),(q=ja||ed(t,a,q,n,B,L,w)||e!==null&&e.dependencies!==null&&$i(e.dependencies))?(A||typeof s.UNSAFE_componentWillUpdate!="function"&&typeof s.componentWillUpdate!="function"||(typeof s.componentWillUpdate=="function"&&s.componentWillUpdate(n,L,w),typeof s.UNSAFE_componentWillUpdate=="function"&&s.UNSAFE_componentWillUpdate(n,L,w)),typeof s.componentDidUpdate=="function"&&(t.flags|=4),typeof s.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof s.componentDidUpdate!="function"||m===e.memoizedProps&&B===e.memoizedState||(t.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||m===e.memoizedProps&&B===e.memoizedState||(t.flags|=1024),t.memoizedProps=n,t.memoizedState=L),s.props=n,s.state=L,s.context=w,n=q):(typeof s.componentDidUpdate!="function"||m===e.memoizedProps&&B===e.memoizedState||(t.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||m===e.memoizedProps&&B===e.memoizedState||(t.flags|=1024),n=!1)}return s=n,Nl(e,t),n=(t.flags&128)!==0,s||n?(s=t.stateNode,a=n&&typeof a.getDerivedStateFromError!="function"?null:s.render(),t.flags|=1,e!==null&&n?(t.child=Ja(t,e.child,null,i),t.child=Ja(t,null,a,i)):Pe(e,t,a,i),t.memoizedState=s.state,e=t.child):e=ea(e,t,i),e}function gd(e,t,a,n){return gl(),t.flags|=256,Pe(e,t,a,n),t.child}var co={dehydrated:null,treeContext:null,retryLane:0};function uo(e){return{baseLanes:e,cachePool:yf()}}function fo(e,t,a){return e=e!==null?e.childLanes&~a:0,t&&(e|=_t),e}function vd(e,t,a){var n=t.pendingProps,i=!1,s=(t.flags&128)!==0,m;if((m=s)||(m=e!==null&&e.memoizedState===null?!1:(Ve.current&2)!==0),m&&(i=!0,t.flags&=-129),m=(t.flags&32)!==0,t.flags&=-33,e===null){if(Te){if(i?ba(t):xa(),Te){var y=We,w;if(w=y){e:{for(w=y,y=Ut;w.nodeType!==8;){if(!y){y=null;break e}if(w=kt(w.nextSibling),w===null){y=null;break e}}y=w}y!==null?(t.memoizedState={dehydrated:y,treeContext:Qa!==null?{id:$t,overflow:Wt}:null,retryLane:536870912},w=At(18,null,null,0),w.stateNode=y,w.return=t,t.child=w,rt=t,We=null,w=!0):w=!1}w||Ka(t)}if(y=t.memoizedState,y!==null&&(y=y.dehydrated,y!==null))return y.data==="$!"?t.lanes=16:t.lanes=536870912,null;Pt(t)}return y=n.children,n=n.fallback,i?(xa(),i=t.mode,y=po({mode:"hidden",children:y},i),n=ln(n,i,a,null),y.return=t,n.return=t,y.sibling=n,t.child=y,i=t.child,i.memoizedState=uo(a),i.childLanes=fo(e,m,a),t.memoizedState=co,n):(ba(t),mo(t,y))}if(w=e.memoizedState,w!==null&&(y=w.dehydrated,y!==null)){if(s)t.flags&256?(ba(t),t.flags&=-257,t=ho(e,t,a)):t.memoizedState!==null?(xa(),t.child=e.child,t.flags|=128,t=null):(xa(),i=n.fallback,y=t.mode,n=po({mode:"visible",children:n.children},y),i=ln(i,y,a,null),i.flags|=2,n.return=t,i.return=t,n.sibling=i,t.child=n,Ja(t,e.child,null,a),n=t.child,n.memoizedState=uo(a),n.childLanes=fo(e,m,a),t.memoizedState=co,t=i);else if(ba(t),y.data==="$!"){if(m=y.nextSibling&&y.nextSibling.dataset,m)var A=m.dgst;m=A,n=Error(o(419)),n.stack="",n.digest=m,vl({value:n,source:null,stack:null}),t=ho(e,t,a)}else if(Ke||Rl(e,t,a,!1),m=(a&e.childLanes)!==0,Ke||m){if(m=_e,m!==null){if(n=a&-a,(n&42)!==0)n=1;else switch(n){case 2:n=1;break;case 8:n=4;break;case 32:n=16;break;case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:n=64;break;case 268435456:n=134217728;break;default:n=0}if(n=(n&(m.suspendedLanes|a))!==0?0:n,n!==0&&n!==w.retryLane)throw w.retryLane=n,ya(e,n),st(m,e,n),od}y.data==="$?"||Go(),t=ho(e,t,a)}else y.data==="$?"?(t.flags|=128,t.child=e.child,t=C1.bind(null,e),y._reactRetry=t,t=null):(e=w.treeContext,We=kt(y.nextSibling),rt=t,Te=!0,Dt=null,Ut=!1,e!==null&&(jt[Tt++]=$t,jt[Tt++]=Wt,jt[Tt++]=Qa,$t=e.id,Wt=e.overflow,Qa=t),t=mo(t,n.children),t.flags|=4096);return t}return i?(xa(),i=n.fallback,y=t.mode,w=e.child,A=w.sibling,n=_a(w,{mode:"hidden",children:n.children}),n.subtreeFlags=w.subtreeFlags&31457280,A!==null?i=_a(A,i):(i=ln(i,y,a,null),i.flags|=2),i.return=t,n.return=t,n.sibling=i,t.child=n,n=i,i=t.child,y=e.child.memoizedState,y===null?y=uo(a):(w=y.cachePool,w!==null?(A=Qe._currentValue,w=w.parent!==A?{parent:A,pool:A}:w):w=yf(),y={baseLanes:y.baseLanes|a,cachePool:w}),i.memoizedState=y,i.childLanes=fo(e,m,a),t.memoizedState=co,n):(ba(t),a=e.child,e=a.sibling,a=_a(a,{mode:"visible",children:n.children}),a.return=t,a.sibling=null,e!==null&&(m=t.deletions,m===null?(t.deletions=[e],t.flags|=16):m.push(e)),t.child=a,t.memoizedState=null,a)}function mo(e,t){return t=po({mode:"visible",children:t},e.mode),t.return=e,e.child=t}function po(e,t){return Gd(e,t,0,null)}function ho(e,t,a){return Ja(t,e.child,null,a),e=mo(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function yd(e,t,a){e.lanes|=t;var n=e.alternate;n!==null&&(n.lanes|=t),bo(e.return,t,a)}function go(e,t,a,n,i){var s=e.memoizedState;s===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:n,tail:a,tailMode:i}:(s.isBackwards=t,s.rendering=null,s.renderingStartTime=0,s.last=n,s.tail=a,s.tailMode=i)}function bd(e,t,a){var n=t.pendingProps,i=n.revealOrder,s=n.tail;if(Pe(e,t,n.children,a),n=Ve.current,(n&2)!==0)n=n&1|2,t.flags|=128;else{if(e!==null&&(e.flags&128)!==0)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&yd(e,a,t);else if(e.tag===19)yd(e,a,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}n&=1}switch(je(Ve,n),i){case"forwards":for(a=t.child,i=null;a!==null;)e=a.alternate,e!==null&&Li(e)===null&&(i=a),a=a.sibling;a=i,a===null?(i=t.child,t.child=null):(i=a.sibling,a.sibling=null),go(t,!1,i,a,s);break;case"backwards":for(a=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&Li(e)===null){t.child=i;break}e=i.sibling,i.sibling=a,a=i,i=e}go(t,!0,a,null,s);break;case"together":go(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function ea(e,t,a){if(e!==null&&(t.dependencies=e.dependencies),Ca|=t.lanes,(a&t.childLanes)===0)if(e!==null){if(Rl(e,t,a,!1),(a&t.childLanes)===0)return null}else return null;if(e!==null&&t.child!==e.child)throw Error(o(153));if(t.child!==null){for(e=t.child,a=_a(e,e.pendingProps),t.child=a,a.return=t;e.sibling!==null;)e=e.sibling,a=a.sibling=_a(e,e.pendingProps),a.return=t;a.sibling=null}return t.child}function vo(e,t){return(e.lanes&t)!==0?!0:(e=e.dependencies,!!(e!==null&&$i(e)))}function v1(e,t,a){switch(t.tag){case 3:di(t,t.stateNode.containerInfo),Ea(t,Qe,e.memoizedState.cache),gl();break;case 27:case 5:rs(t);break;case 4:di(t,t.stateNode.containerInfo);break;case 10:Ea(t,t.type,t.memoizedProps.value);break;case 13:var n=t.memoizedState;if(n!==null)return n.dehydrated!==null?(ba(t),t.flags|=128,null):(a&t.child.childLanes)!==0?vd(e,t,a):(ba(t),e=ea(e,t,a),e!==null?e.sibling:null);ba(t);break;case 19:var i=(e.flags&128)!==0;if(n=(a&t.childLanes)!==0,n||(Rl(e,t,a,!1),n=(a&t.childLanes)!==0),i){if(n)return bd(e,t,a);t.flags|=128}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),je(Ve,Ve.current),n)break;return null;case 22:case 23:return t.lanes=0,dd(e,t,a);case 24:Ea(t,Qe,e.memoizedState.cache)}return ea(e,t,a)}function xd(e,t,a){if(e!==null)if(e.memoizedProps!==t.pendingProps)Ke=!0;else{if(!vo(e,a)&&(t.flags&128)===0)return Ke=!1,v1(e,t,a);Ke=(e.flags&131072)!==0}else Ke=!1,Te&&(t.flags&1048576)!==0&&nf(t,Di,t.index);switch(t.lanes=0,t.tag){case 16:e:{e=t.pendingProps;var n=t.elementType,i=n._init;if(n=i(n._payload),t.type=n,typeof n=="function")Co(n)?(e=en(n,e),t.tag=1,t=hd(null,t,n,e,a)):(t.tag=0,t=oo(null,t,n,e,a));else{if(n!=null){if(i=n.$$typeof,i===x){t.tag=11,t=cd(null,t,n,e,a);break e}else if(i===_){t.tag=14,t=ud(null,t,n,e,a);break e}}throw t=ie(n)||n,Error(o(306,t,""))}}return t;case 0:return oo(e,t,t.type,t.pendingProps,a);case 1:return n=t.type,i=en(n,t.pendingProps),hd(e,t,n,i,a);case 3:e:{if(di(t,t.stateNode.containerInfo),e===null)throw Error(o(387));var s=t.pendingProps;i=t.memoizedState,n=i.element,So(e,t),Cl(t,s,null,a);var m=t.memoizedState;if(s=m.cache,Ea(t,Qe,s),s!==i.cache&&xo(t,[Qe],a,!0),_l(),s=m.element,i.isDehydrated)if(i={element:s,isDehydrated:!1,cache:m.cache},t.updateQueue.baseState=i,t.memoizedState=i,t.flags&256){t=gd(e,t,s,a);break e}else if(s!==n){n=Et(Error(o(424)),t),vl(n),t=gd(e,t,s,a);break e}else for(We=kt(t.stateNode.containerInfo.firstChild),rt=t,Te=!0,Dt=null,Ut=!0,a=mf(t,null,s,a),t.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling;else{if(gl(),s===n){t=ea(e,t,a);break e}Pe(e,t,s,a)}t=t.child}return t;case 26:return Nl(e,t),e===null?(a=Em(t.type,null,t.pendingProps,null))?t.memoizedState=a:Te||(a=t.type,e=t.pendingProps,n=dr(pa.current).createElement(a),n[at]=t,n[ot]=e,Ie(n,a,e),Ze(n),t.stateNode=n):t.memoizedState=Em(t.type,e.memoizedProps,t.pendingProps,e.memoizedState),null;case 27:return rs(t),e===null&&Te&&(n=t.stateNode=xm(t.type,t.pendingProps,pa.current),rt=t,Ut=!0,We=kt(n.firstChild)),n=t.pendingProps.children,e!==null||Te?Pe(e,t,n,a):t.child=Ja(t,null,n,a),Nl(e,t),t.child;case 5:return e===null&&Te&&((i=n=We)&&(n=Z1(n,t.type,t.pendingProps,Ut),n!==null?(t.stateNode=n,rt=t,We=kt(n.firstChild),Ut=!1,i=!0):i=!1),i||Ka(t)),rs(t),i=t.type,s=t.pendingProps,m=e!==null?e.memoizedProps:null,n=s.children,nc(i,s)?n=null:m!==null&&nc(i,m)&&(t.flags|=32),t.memoizedState!==null&&(i=Xs(e,t,u1,null,null,a),Ql._currentValue=i),Nl(e,t),Pe(e,t,n,a),t.child;case 6:return e===null&&Te&&((e=a=We)&&(a=K1(a,t.pendingProps,Ut),a!==null?(t.stateNode=a,rt=t,We=null,e=!0):e=!1),e||Ka(t)),null;case 13:return vd(e,t,a);case 4:return di(t,t.stateNode.containerInfo),n=t.pendingProps,e===null?t.child=Ja(t,null,n,a):Pe(e,t,n,a),t.child;case 11:return cd(e,t,t.type,t.pendingProps,a);case 7:return Pe(e,t,t.pendingProps,a),t.child;case 8:return Pe(e,t,t.pendingProps.children,a),t.child;case 12:return Pe(e,t,t.pendingProps.children,a),t.child;case 10:return n=t.pendingProps,Ea(t,t.type,n.value),Pe(e,t,n.children,a),t.child;case 9:return i=t.type._context,n=t.pendingProps.children,an(t),i=nt(i),n=n(i),t.flags|=1,Pe(e,t,n,a),t.child;case 14:return ud(e,t,t.type,t.pendingProps,a);case 15:return fd(e,t,t.type,t.pendingProps,a);case 19:return bd(e,t,a);case 22:return dd(e,t,a);case 24:return an(t),n=nt(Qe),e===null?(i=Ys(),i===null&&(i=_e,s=qs(),i.pooledCache=s,s.refCount++,s!==null&&(i.pooledCacheLanes|=a),i=s),t.memoizedState={parent:n,cache:i},wo(t),Ea(t,Qe,i)):((e.lanes&a)!==0&&(So(e,t),Cl(t,null,null,a),_l()),i=e.memoizedState,s=t.memoizedState,i.parent!==n?(i={parent:n,cache:n},t.memoizedState=i,t.lanes===0&&(t.memoizedState=t.updateQueue.baseState=i),Ea(t,Qe,n)):(n=s.cache,Ea(t,Qe,n),n!==i.cache&&xo(t,[Qe],a,!0))),Pe(e,t,t.pendingProps.children,a),t.child;case 29:throw t.pendingProps}throw Error(o(156,t.tag))}var yo=ce(null),tn=null,ta=null;function Ea(e,t,a){je(yo,t._currentValue),t._currentValue=a}function aa(e){e._currentValue=yo.current,Ee(yo)}function bo(e,t,a){for(;e!==null;){var n=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,n!==null&&(n.childLanes|=t)):n!==null&&(n.childLanes&t)!==t&&(n.childLanes|=t),e===a)break;e=e.return}}function xo(e,t,a,n){var i=e.child;for(i!==null&&(i.return=e);i!==null;){var s=i.dependencies;if(s!==null){var m=i.child;s=s.firstContext;e:for(;s!==null;){var y=s;s=i;for(var w=0;w<t.length;w++)if(y.context===t[w]){s.lanes|=a,y=s.alternate,y!==null&&(y.lanes|=a),bo(s.return,a,e),n||(m=null);break e}s=y.next}}else if(i.tag===18){if(m=i.return,m===null)throw Error(o(341));m.lanes|=a,s=m.alternate,s!==null&&(s.lanes|=a),bo(m,a,e),m=null}else m=i.child;if(m!==null)m.return=i;else for(m=i;m!==null;){if(m===e){m=null;break}if(i=m.sibling,i!==null){i.return=m.return,m=i;break}m=m.return}i=m}}function Rl(e,t,a,n){e=null;for(var i=t,s=!1;i!==null;){if(!s){if((i.flags&524288)!==0)s=!0;else if((i.flags&262144)!==0)break}if(i.tag===10){var m=i.alternate;if(m===null)throw Error(o(387));if(m=m.memoizedProps,m!==null){var y=i.type;ht(i.pendingProps.value,m.value)||(e!==null?e.push(y):e=[y])}}else if(i===fi.current){if(m=i.alternate,m===null)throw Error(o(387));m.memoizedState.memoizedState!==i.memoizedState.memoizedState&&(e!==null?e.push(Ql):e=[Ql])}i=i.return}e!==null&&xo(t,e,a,n),t.flags|=262144}function $i(e){for(e=e.firstContext;e!==null;){if(!ht(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function an(e){tn=e,ta=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function nt(e){return wd(tn,e)}function Wi(e,t){return tn===null&&an(e),wd(e,t)}function wd(e,t){var a=t._currentValue;if(t={context:t,memoizedValue:a,next:null},ta===null){if(e===null)throw Error(o(308));ta=t,e.dependencies={lanes:0,firstContext:t},e.flags|=524288}else ta=ta.next=t;return a}var ja=!1;function wo(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function So(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function Ta(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function Oa(e,t,a){var n=e.updateQueue;if(n===null)return null;if(n=n.shared,(ke&2)!==0){var i=n.pending;return i===null?t.next=t:(t.next=i.next,i.next=t),n.pending=t,t=Ci(e),tf(e,null,a),t}return _i(e,n,t,a),Ci(e)}function Al(e,t,a){if(t=t.updateQueue,t!==null&&(t=t.shared,(a&4194176)!==0)){var n=t.lanes;n&=e.pendingLanes,a|=n,t.lanes=a,cu(e,a)}}function Eo(e,t){var a=e.updateQueue,n=e.alternate;if(n!==null&&(n=n.updateQueue,a===n)){var i=null,s=null;if(a=a.firstBaseUpdate,a!==null){do{var m={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};s===null?i=s=m:s=s.next=m,a=a.next}while(a!==null);s===null?i=s=t:s=s.next=t}else i=s=t;a={baseState:n.baseState,firstBaseUpdate:i,lastBaseUpdate:s,shared:n.shared,callbacks:n.callbacks},e.updateQueue=a;return}e=a.lastBaseUpdate,e===null?a.firstBaseUpdate=t:e.next=t,a.lastBaseUpdate=t}var jo=!1;function _l(){if(jo){var e=Dn;if(e!==null)throw e}}function Cl(e,t,a,n){jo=!1;var i=e.updateQueue;ja=!1;var s=i.firstBaseUpdate,m=i.lastBaseUpdate,y=i.shared.pending;if(y!==null){i.shared.pending=null;var w=y,A=w.next;w.next=null,m===null?s=A:m.next=A,m=w;var q=e.alternate;q!==null&&(q=q.updateQueue,y=q.lastBaseUpdate,y!==m&&(y===null?q.firstBaseUpdate=A:y.next=A,q.lastBaseUpdate=w))}if(s!==null){var V=i.baseState;m=0,q=A=w=null,y=s;do{var B=y.lane&-536870913,L=B!==y.lane;if(L?(we&B)===B:(n&B)===B){B!==0&&B===zn&&(jo=!0),q!==null&&(q=q.next={lane:0,tag:y.tag,payload:y.payload,callback:null,next:null});e:{var re=e,de=y;B=t;var Ue=a;switch(de.tag){case 1:if(re=de.payload,typeof re=="function"){V=re.call(Ue,V,B);break e}V=re;break e;case 3:re.flags=re.flags&-65537|128;case 0:if(re=de.payload,B=typeof re=="function"?re.call(Ue,V,B):re,B==null)break e;V=Z({},V,B);break e;case 2:ja=!0}}B=y.callback,B!==null&&(e.flags|=64,L&&(e.flags|=8192),L=i.callbacks,L===null?i.callbacks=[B]:L.push(B))}else L={lane:B,tag:y.tag,payload:y.payload,callback:y.callback,next:null},q===null?(A=q=L,w=V):q=q.next=L,m|=B;if(y=y.next,y===null){if(y=i.shared.pending,y===null)break;L=y,y=L.next,L.next=null,i.lastBaseUpdate=L,i.shared.pending=null}}while(!0);q===null&&(w=V),i.baseState=w,i.firstBaseUpdate=A,i.lastBaseUpdate=q,s===null&&(i.shared.lanes=0),Ca|=m,e.lanes=m,e.memoizedState=V}}function Sd(e,t){if(typeof e!="function")throw Error(o(191,e));e.call(t)}function Ed(e,t){var a=e.callbacks;if(a!==null)for(e.callbacks=null,e=0;e<a.length;e++)Sd(a[e],t)}function zl(e,t){try{var a=t.updateQueue,n=a!==null?a.lastEffect:null;if(n!==null){var i=n.next;a=i;do{if((a.tag&e)===e){n=void 0;var s=a.create,m=a.inst;n=s(),m.destroy=n}a=a.next}while(a!==i)}}catch(y){Ae(t,t.return,y)}}function Na(e,t,a){try{var n=t.updateQueue,i=n!==null?n.lastEffect:null;if(i!==null){var s=i.next;n=s;do{if((n.tag&e)===e){var m=n.inst,y=m.destroy;if(y!==void 0){m.destroy=void 0,i=t;var w=a;try{y()}catch(A){Ae(i,w,A)}}}n=n.next}while(n!==s)}}catch(A){Ae(t,t.return,A)}}function jd(e){var t=e.updateQueue;if(t!==null){var a=e.stateNode;try{Ed(t,a)}catch(n){Ae(e,e.return,n)}}}function Td(e,t,a){a.props=en(e.type,e.memoizedProps),a.state=e.memoizedState;try{a.componentWillUnmount()}catch(n){Ae(e,t,n)}}function nn(e,t){try{var a=e.ref;if(a!==null){var n=e.stateNode;switch(e.tag){case 26:case 27:case 5:var i=n;break;default:i=n}typeof a=="function"?e.refCleanup=a(i):a.current=i}}catch(s){Ae(e,t,s)}}function gt(e,t){var a=e.ref,n=e.refCleanup;if(a!==null)if(typeof n=="function")try{n()}catch(i){Ae(e,t,i)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(i){Ae(e,t,i)}else a.current=null}function Od(e){var t=e.type,a=e.memoizedProps,n=e.stateNode;try{e:switch(t){case"button":case"input":case"select":case"textarea":a.autoFocus&&n.focus();break e;case"img":a.src?n.src=a.src:a.srcSet&&(n.srcset=a.srcSet)}}catch(i){Ae(e,e.return,i)}}function Nd(e,t,a){try{var n=e.stateNode;Y1(n,e.type,a,t),n[ot]=t}catch(i){Ae(e,e.return,i)}}function Rd(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27||e.tag===4}function To(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Rd(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==27&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Oo(e,t,a){var n=e.tag;if(n===5||n===6)e=e.stateNode,t?a.nodeType===8?a.parentNode.insertBefore(e,t):a.insertBefore(e,t):(a.nodeType===8?(t=a.parentNode,t.insertBefore(e,a)):(t=a,t.appendChild(e)),a=a._reactRootContainer,a!=null||t.onclick!==null||(t.onclick=fr));else if(n!==4&&n!==27&&(e=e.child,e!==null))for(Oo(e,t,a),e=e.sibling;e!==null;)Oo(e,t,a),e=e.sibling}function Pi(e,t,a){var n=e.tag;if(n===5||n===6)e=e.stateNode,t?a.insertBefore(e,t):a.appendChild(e);else if(n!==4&&n!==27&&(e=e.child,e!==null))for(Pi(e,t,a),e=e.sibling;e!==null;)Pi(e,t,a),e=e.sibling}var na=!1,He=!1,No=!1,Ad=typeof WeakSet=="function"?WeakSet:Set,Je=null,_d=!1;function y1(e,t){if(e=e.containerInfo,tc=yr,e=Qu(e),Rs(e)){if("selectionStart"in e)var a={start:e.selectionStart,end:e.selectionEnd};else e:{a=(a=e.ownerDocument)&&a.defaultView||window;var n=a.getSelection&&a.getSelection();if(n&&n.rangeCount!==0){a=n.anchorNode;var i=n.anchorOffset,s=n.focusNode;n=n.focusOffset;try{a.nodeType,s.nodeType}catch{a=null;break e}var m=0,y=-1,w=-1,A=0,q=0,V=e,B=null;t:for(;;){for(var L;V!==a||i!==0&&V.nodeType!==3||(y=m+i),V!==s||n!==0&&V.nodeType!==3||(w=m+n),V.nodeType===3&&(m+=V.nodeValue.length),(L=V.firstChild)!==null;)B=V,V=L;for(;;){if(V===e)break t;if(B===a&&++A===i&&(y=m),B===s&&++q===n&&(w=m),(L=V.nextSibling)!==null)break;V=B,B=V.parentNode}V=L}a=y===-1||w===-1?null:{start:y,end:w}}else a=null}a=a||{start:0,end:0}}else a=null;for(ac={focusedElem:e,selectionRange:a},yr=!1,Je=t;Je!==null;)if(t=Je,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,Je=e;else for(;Je!==null;){switch(t=Je,s=t.alternate,e=t.flags,t.tag){case 0:break;case 11:case 15:break;case 1:if((e&1024)!==0&&s!==null){e=void 0,a=t,i=s.memoizedProps,s=s.memoizedState,n=a.stateNode;try{var re=en(a.type,i,a.elementType===a.type);e=n.getSnapshotBeforeUpdate(re,s),n.__reactInternalSnapshotBeforeUpdate=e}catch(de){Ae(a,a.return,de)}}break;case 3:if((e&1024)!==0){if(e=t.stateNode.containerInfo,a=e.nodeType,a===9)rc(e);else if(a===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":rc(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(o(163))}if(e=t.sibling,e!==null){e.return=t.return,Je=e;break}Je=t.return}return re=_d,_d=!1,re}function Cd(e,t,a){var n=a.flags;switch(a.tag){case 0:case 11:case 15:ia(e,a),n&4&&zl(5,a);break;case 1:if(ia(e,a),n&4)if(e=a.stateNode,t===null)try{e.componentDidMount()}catch(y){Ae(a,a.return,y)}else{var i=en(a.type,t.memoizedProps);t=t.memoizedState;try{e.componentDidUpdate(i,t,e.__reactInternalSnapshotBeforeUpdate)}catch(y){Ae(a,a.return,y)}}n&64&&jd(a),n&512&&nn(a,a.return);break;case 3:if(ia(e,a),n&64&&(n=a.updateQueue,n!==null)){if(e=null,a.child!==null)switch(a.child.tag){case 27:case 5:e=a.child.stateNode;break;case 1:e=a.child.stateNode}try{Ed(n,e)}catch(y){Ae(a,a.return,y)}}break;case 26:ia(e,a),n&512&&nn(a,a.return);break;case 27:case 5:ia(e,a),t===null&&n&4&&Od(a),n&512&&nn(a,a.return);break;case 12:ia(e,a);break;case 13:ia(e,a),n&4&&Md(e,a);break;case 22:if(i=a.memoizedState!==null||na,!i){t=t!==null&&t.memoizedState!==null||He;var s=na,m=He;na=i,(He=t)&&!m?Ra(e,a,(a.subtreeFlags&8772)!==0):ia(e,a),na=s,He=m}n&512&&(a.memoizedProps.mode==="manual"?nn(a,a.return):gt(a,a.return));break;default:ia(e,a)}}function zd(e){var t=e.alternate;t!==null&&(e.alternate=null,zd(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&ds(t)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var Xe=null,vt=!1;function la(e,t,a){for(a=a.child;a!==null;)Dd(e,t,a),a=a.sibling}function Dd(e,t,a){if(mt&&typeof mt.onCommitFiberUnmount=="function")try{mt.onCommitFiberUnmount(tl,a)}catch{}switch(a.tag){case 26:He||gt(a,t),la(e,t,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:He||gt(a,t);var n=Xe,i=vt;for(Xe=a.stateNode,la(e,t,a),a=a.stateNode,t=a.attributes;t.length;)a.removeAttributeNode(t[0]);ds(a),Xe=n,vt=i;break;case 5:He||gt(a,t);case 6:i=Xe;var s=vt;if(Xe=null,la(e,t,a),Xe=i,vt=s,Xe!==null)if(vt)try{e=Xe,n=a.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)}catch(m){Ae(a,t,m)}else try{Xe.removeChild(a.stateNode)}catch(m){Ae(a,t,m)}break;case 18:Xe!==null&&(vt?(t=Xe,a=a.stateNode,t.nodeType===8?ic(t.parentNode,a):t.nodeType===1&&ic(t,a),$l(t)):ic(Xe,a.stateNode));break;case 4:n=Xe,i=vt,Xe=a.stateNode.containerInfo,vt=!0,la(e,t,a),Xe=n,vt=i;break;case 0:case 11:case 14:case 15:He||Na(2,a,t),He||Na(4,a,t),la(e,t,a);break;case 1:He||(gt(a,t),n=a.stateNode,typeof n.componentWillUnmount=="function"&&Td(a,t,n)),la(e,t,a);break;case 21:la(e,t,a);break;case 22:He||gt(a,t),He=(n=He)||a.memoizedState!==null,la(e,t,a),He=n;break;default:la(e,t,a)}}function Md(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{$l(e)}catch(a){Ae(t,t.return,a)}}function b1(e){switch(e.tag){case 13:case 19:var t=e.stateNode;return t===null&&(t=e.stateNode=new Ad),t;case 22:return e=e.stateNode,t=e._retryCache,t===null&&(t=e._retryCache=new Ad),t;default:throw Error(o(435,e.tag))}}function Ro(e,t){var a=b1(e);t.forEach(function(n){var i=z1.bind(null,e,n);a.has(n)||(a.add(n),n.then(i,i))})}function Nt(e,t){var a=t.deletions;if(a!==null)for(var n=0;n<a.length;n++){var i=a[n],s=e,m=t,y=m;e:for(;y!==null;){switch(y.tag){case 27:case 5:Xe=y.stateNode,vt=!1;break e;case 3:Xe=y.stateNode.containerInfo,vt=!0;break e;case 4:Xe=y.stateNode.containerInfo,vt=!0;break e}y=y.return}if(Xe===null)throw Error(o(160));Dd(s,m,i),Xe=null,vt=!1,s=i.alternate,s!==null&&(s.return=null),i.return=null}if(t.subtreeFlags&13878)for(t=t.child;t!==null;)kd(t,e),t=t.sibling}var Mt=null;function kd(e,t){var a=e.alternate,n=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:Nt(t,e),Rt(e),n&4&&(Na(3,e,e.return),zl(3,e),Na(5,e,e.return));break;case 1:Nt(t,e),Rt(e),n&512&&(He||a===null||gt(a,a.return)),n&64&&na&&(e=e.updateQueue,e!==null&&(n=e.callbacks,n!==null&&(a=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=a===null?n:a.concat(n))));break;case 26:var i=Mt;if(Nt(t,e),Rt(e),n&512&&(He||a===null||gt(a,a.return)),n&4){var s=a!==null?a.memoizedState:null;if(n=e.memoizedState,a===null)if(n===null)if(e.stateNode===null){e:{n=e.type,a=e.memoizedProps,i=i.ownerDocument||i;t:switch(n){case"title":s=i.getElementsByTagName("title")[0],(!s||s[ll]||s[at]||s.namespaceURI==="http://www.w3.org/2000/svg"||s.hasAttribute("itemprop"))&&(s=i.createElement(n),i.head.insertBefore(s,i.querySelector("head > title"))),Ie(s,n,a),s[at]=e,Ze(s),n=s;break e;case"link":var m=Om("link","href",i).get(n+(a.href||""));if(m){for(var y=0;y<m.length;y++)if(s=m[y],s.getAttribute("href")===(a.href==null?null:a.href)&&s.getAttribute("rel")===(a.rel==null?null:a.rel)&&s.getAttribute("title")===(a.title==null?null:a.title)&&s.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){m.splice(y,1);break t}}s=i.createElement(n),Ie(s,n,a),i.head.appendChild(s);break;case"meta":if(m=Om("meta","content",i).get(n+(a.content||""))){for(y=0;y<m.length;y++)if(s=m[y],s.getAttribute("content")===(a.content==null?null:""+a.content)&&s.getAttribute("name")===(a.name==null?null:a.name)&&s.getAttribute("property")===(a.property==null?null:a.property)&&s.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&s.getAttribute("charset")===(a.charSet==null?null:a.charSet)){m.splice(y,1);break t}}s=i.createElement(n),Ie(s,n,a),i.head.appendChild(s);break;default:throw Error(o(468,n))}s[at]=e,Ze(s),n=s}e.stateNode=n}else Nm(i,e.type,e.stateNode);else e.stateNode=Tm(i,n,e.memoizedProps);else s!==n?(s===null?a.stateNode!==null&&(a=a.stateNode,a.parentNode.removeChild(a)):s.count--,n===null?Nm(i,e.type,e.stateNode):Tm(i,n,e.memoizedProps)):n===null&&e.stateNode!==null&&Nd(e,e.memoizedProps,a.memoizedProps)}break;case 27:if(n&4&&e.alternate===null){i=e.stateNode,s=e.memoizedProps;try{for(var w=i.firstChild;w;){var A=w.nextSibling,q=w.nodeName;w[ll]||q==="HEAD"||q==="BODY"||q==="SCRIPT"||q==="STYLE"||q==="LINK"&&w.rel.toLowerCase()==="stylesheet"||i.removeChild(w),w=A}for(var V=e.type,B=i.attributes;B.length;)i.removeAttributeNode(B[0]);Ie(i,V,s),i[at]=e,i[ot]=s}catch(re){Ae(e,e.return,re)}}case 5:if(Nt(t,e),Rt(e),n&512&&(He||a===null||gt(a,a.return)),e.flags&32){i=e.stateNode;try{xn(i,"")}catch(re){Ae(e,e.return,re)}}n&4&&e.stateNode!=null&&(i=e.memoizedProps,Nd(e,i,a!==null?a.memoizedProps:i)),n&1024&&(No=!0);break;case 6:if(Nt(t,e),Rt(e),n&4){if(e.stateNode===null)throw Error(o(162));n=e.memoizedProps,a=e.stateNode;try{a.nodeValue=n}catch(re){Ae(e,e.return,re)}}break;case 3:if(hr=null,i=Mt,Mt=mr(t.containerInfo),Nt(t,e),Mt=i,Rt(e),n&4&&a!==null&&a.memoizedState.isDehydrated)try{$l(t.containerInfo)}catch(re){Ae(e,e.return,re)}No&&(No=!1,Bd(e));break;case 4:n=Mt,Mt=mr(e.stateNode.containerInfo),Nt(t,e),Rt(e),Mt=n;break;case 12:Nt(t,e),Rt(e);break;case 13:Nt(t,e),Rt(e),e.child.flags&8192&&e.memoizedState!==null!=(a!==null&&a.memoizedState!==null)&&(Ho=Lt()),n&4&&(n=e.updateQueue,n!==null&&(e.updateQueue=null,Ro(e,n)));break;case 22:if(n&512&&(He||a===null||gt(a,a.return)),w=e.memoizedState!==null,A=a!==null&&a.memoizedState!==null,q=na,V=He,na=q||w,He=V||A,Nt(t,e),He=V,na=q,Rt(e),t=e.stateNode,t._current=e,t._visibility&=-3,t._visibility|=t._pendingVisibility&2,n&8192&&(t._visibility=w?t._visibility&-2:t._visibility|1,w&&(t=na||He,a===null||A||t||Hn(e)),e.memoizedProps===null||e.memoizedProps.mode!=="manual"))e:for(a=null,t=e;;){if(t.tag===5||t.tag===26||t.tag===27){if(a===null){A=a=t;try{if(i=A.stateNode,w)s=i.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none";else{m=A.stateNode,y=A.memoizedProps.style;var L=y!=null&&y.hasOwnProperty("display")?y.display:null;m.style.display=L==null||typeof L=="boolean"?"":(""+L).trim()}}catch(re){Ae(A,A.return,re)}}}else if(t.tag===6){if(a===null){A=t;try{A.stateNode.nodeValue=w?"":A.memoizedProps}catch(re){Ae(A,A.return,re)}}}else if((t.tag!==22&&t.tag!==23||t.memoizedState===null||t===e)&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;a===t&&(a=null),t=t.return}a===t&&(a=null),t.sibling.return=t.return,t=t.sibling}n&4&&(n=e.updateQueue,n!==null&&(a=n.retryQueue,a!==null&&(n.retryQueue=null,Ro(e,a))));break;case 19:Nt(t,e),Rt(e),n&4&&(n=e.updateQueue,n!==null&&(e.updateQueue=null,Ro(e,n)));break;case 21:break;default:Nt(t,e),Rt(e)}}function Rt(e){var t=e.flags;if(t&2){try{if(e.tag!==27){e:{for(var a=e.return;a!==null;){if(Rd(a)){var n=a;break e}a=a.return}throw Error(o(160))}switch(n.tag){case 27:var i=n.stateNode,s=To(e);Pi(e,s,i);break;case 5:var m=n.stateNode;n.flags&32&&(xn(m,""),n.flags&=-33);var y=To(e);Pi(e,y,m);break;case 3:case 4:var w=n.stateNode.containerInfo,A=To(e);Oo(e,A,w);break;default:throw Error(o(161))}}}catch(q){Ae(e,e.return,q)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function Bd(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var t=e;Bd(t),t.tag===5&&t.flags&1024&&t.stateNode.reset(),e=e.sibling}}function ia(e,t){if(t.subtreeFlags&8772)for(t=t.child;t!==null;)Cd(e,t.alternate,t),t=t.sibling}function Hn(e){for(e=e.child;e!==null;){var t=e;switch(t.tag){case 0:case 11:case 14:case 15:Na(4,t,t.return),Hn(t);break;case 1:gt(t,t.return);var a=t.stateNode;typeof a.componentWillUnmount=="function"&&Td(t,t.return,a),Hn(t);break;case 26:case 27:case 5:gt(t,t.return),Hn(t);break;case 22:gt(t,t.return),t.memoizedState===null&&Hn(t);break;default:Hn(t)}e=e.sibling}}function Ra(e,t,a){for(a=a&&(t.subtreeFlags&8772)!==0,t=t.child;t!==null;){var n=t.alternate,i=e,s=t,m=s.flags;switch(s.tag){case 0:case 11:case 15:Ra(i,s,a),zl(4,s);break;case 1:if(Ra(i,s,a),n=s,i=n.stateNode,typeof i.componentDidMount=="function")try{i.componentDidMount()}catch(A){Ae(n,n.return,A)}if(n=s,i=n.updateQueue,i!==null){var y=n.stateNode;try{var w=i.shared.hiddenCallbacks;if(w!==null)for(i.shared.hiddenCallbacks=null,i=0;i<w.length;i++)Sd(w[i],y)}catch(A){Ae(n,n.return,A)}}a&&m&64&&jd(s),nn(s,s.return);break;case 26:case 27:case 5:Ra(i,s,a),a&&n===null&&m&4&&Od(s),nn(s,s.return);break;case 12:Ra(i,s,a);break;case 13:Ra(i,s,a),a&&m&4&&Md(i,s);break;case 22:s.memoizedState===null&&Ra(i,s,a),nn(s,s.return);break;default:Ra(i,s,a)}t=t.sibling}}function Ao(e,t){var a=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),e=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(e=t.memoizedState.cachePool.pool),e!==a&&(e!=null&&e.refCount++,a!=null&&Sl(a))}function _o(e,t){e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&Sl(e))}function Aa(e,t,a,n){if(t.subtreeFlags&10256)for(t=t.child;t!==null;)Hd(e,t,a,n),t=t.sibling}function Hd(e,t,a,n){var i=t.flags;switch(t.tag){case 0:case 11:case 15:Aa(e,t,a,n),i&2048&&zl(9,t);break;case 3:Aa(e,t,a,n),i&2048&&(e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&Sl(e)));break;case 12:if(i&2048){Aa(e,t,a,n),e=t.stateNode;try{var s=t.memoizedProps,m=s.id,y=s.onPostCommit;typeof y=="function"&&y(m,t.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(w){Ae(t,t.return,w)}}else Aa(e,t,a,n);break;case 23:break;case 22:s=t.stateNode,t.memoizedState!==null?s._visibility&4?Aa(e,t,a,n):Dl(e,t):s._visibility&4?Aa(e,t,a,n):(s._visibility|=4,Ln(e,t,a,n,(t.subtreeFlags&10256)!==0)),i&2048&&Ao(t.alternate,t);break;case 24:Aa(e,t,a,n),i&2048&&_o(t.alternate,t);break;default:Aa(e,t,a,n)}}function Ln(e,t,a,n,i){for(i=i&&(t.subtreeFlags&10256)!==0,t=t.child;t!==null;){var s=e,m=t,y=a,w=n,A=m.flags;switch(m.tag){case 0:case 11:case 15:Ln(s,m,y,w,i),zl(8,m);break;case 23:break;case 22:var q=m.stateNode;m.memoizedState!==null?q._visibility&4?Ln(s,m,y,w,i):Dl(s,m):(q._visibility|=4,Ln(s,m,y,w,i)),i&&A&2048&&Ao(m.alternate,m);break;case 24:Ln(s,m,y,w,i),i&&A&2048&&_o(m.alternate,m);break;default:Ln(s,m,y,w,i)}t=t.sibling}}function Dl(e,t){if(t.subtreeFlags&10256)for(t=t.child;t!==null;){var a=e,n=t,i=n.flags;switch(n.tag){case 22:Dl(a,n),i&2048&&Ao(n.alternate,n);break;case 24:Dl(a,n),i&2048&&_o(n.alternate,n);break;default:Dl(a,n)}t=t.sibling}}var Ml=8192;function Un(e){if(e.subtreeFlags&Ml)for(e=e.child;e!==null;)Ld(e),e=e.sibling}function Ld(e){switch(e.tag){case 26:Un(e),e.flags&Ml&&e.memoizedState!==null&&sg(Mt,e.memoizedState,e.memoizedProps);break;case 5:Un(e);break;case 3:case 4:var t=Mt;Mt=mr(e.stateNode.containerInfo),Un(e),Mt=t;break;case 22:e.memoizedState===null&&(t=e.alternate,t!==null&&t.memoizedState!==null?(t=Ml,Ml=16777216,Un(e),Ml=t):Un(e));break;default:Un(e)}}function Ud(e){var t=e.alternate;if(t!==null&&(e=t.child,e!==null)){t.child=null;do t=e.sibling,e.sibling=null,e=t;while(e!==null)}}function kl(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var a=0;a<t.length;a++){var n=t[a];Je=n,Fd(n,e)}Ud(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)qd(e),e=e.sibling}function qd(e){switch(e.tag){case 0:case 11:case 15:kl(e),e.flags&2048&&Na(9,e,e.return);break;case 3:kl(e);break;case 12:kl(e);break;case 22:var t=e.stateNode;e.memoizedState!==null&&t._visibility&4&&(e.return===null||e.return.tag!==13)?(t._visibility&=-5,Ii(e)):kl(e);break;default:kl(e)}}function Ii(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var a=0;a<t.length;a++){var n=t[a];Je=n,Fd(n,e)}Ud(e)}for(e=e.child;e!==null;){switch(t=e,t.tag){case 0:case 11:case 15:Na(8,t,t.return),Ii(t);break;case 22:a=t.stateNode,a._visibility&4&&(a._visibility&=-5,Ii(t));break;default:Ii(t)}e=e.sibling}}function Fd(e,t){for(;Je!==null;){var a=Je;switch(a.tag){case 0:case 11:case 15:Na(8,a,t);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var n=a.memoizedState.cachePool.pool;n!=null&&n.refCount++}break;case 24:Sl(a.memoizedState.cache)}if(n=a.child,n!==null)n.return=a,Je=n;else e:for(a=e;Je!==null;){n=Je;var i=n.sibling,s=n.return;if(zd(n),n===a){Je=null;break e}if(i!==null){i.return=s,Je=i;break e}Je=s}}}function x1(e,t,a,n){this.tag=e,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=n,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function At(e,t,a,n){return new x1(e,t,a,n)}function Co(e){return e=e.prototype,!(!e||!e.isReactComponent)}function _a(e,t){var a=e.alternate;return a===null?(a=At(e.tag,t,e.key,e.mode),a.elementType=e.elementType,a.type=e.type,a.stateNode=e.stateNode,a.alternate=e,e.alternate=a):(a.pendingProps=t,a.type=e.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=e.flags&31457280,a.childLanes=e.childLanes,a.lanes=e.lanes,a.child=e.child,a.memoizedProps=e.memoizedProps,a.memoizedState=e.memoizedState,a.updateQueue=e.updateQueue,t=e.dependencies,a.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},a.sibling=e.sibling,a.index=e.index,a.ref=e.ref,a.refCleanup=e.refCleanup,a}function Yd(e,t){e.flags&=31457282;var a=e.alternate;return a===null?(e.childLanes=0,e.lanes=t,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=a.childLanes,e.lanes=a.lanes,e.child=a.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=a.memoizedProps,e.memoizedState=a.memoizedState,e.updateQueue=a.updateQueue,e.type=a.type,t=a.dependencies,e.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),e}function er(e,t,a,n,i,s){var m=0;if(n=e,typeof e=="function")Co(e)&&(m=1);else if(typeof e=="string")m=ig(e,a,tt.current)?26:e==="html"||e==="head"||e==="body"?27:5;else e:switch(e){case g:return ln(a.children,i,s,t);case h:m=8,i|=24;break;case b:return e=At(12,a,t,i|2),e.elementType=b,e.lanes=s,e;case T:return e=At(13,a,t,i),e.elementType=T,e.lanes=s,e;case E:return e=At(19,a,t,i),e.elementType=E,e.lanes=s,e;case C:return Gd(a,i,s,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case S:case j:m=10;break e;case N:m=9;break e;case x:m=11;break e;case _:m=14;break e;case M:m=16,n=null;break e}m=29,a=Error(o(130,e===null?"null":typeof e,"")),n=null}return t=At(m,a,t,i),t.elementType=e,t.type=n,t.lanes=s,t}function ln(e,t,a,n){return e=At(7,e,n,t),e.lanes=a,e}function Gd(e,t,a,n){e=At(22,e,n,t),e.elementType=C,e.lanes=a;var i={_visibility:1,_pendingVisibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null,_current:null,detach:function(){var s=i._current;if(s===null)throw Error(o(456));if((i._pendingVisibility&2)===0){var m=ya(s,2);m!==null&&(i._pendingVisibility|=2,st(m,s,2))}},attach:function(){var s=i._current;if(s===null)throw Error(o(456));if((i._pendingVisibility&2)!==0){var m=ya(s,2);m!==null&&(i._pendingVisibility&=-3,st(m,s,2))}}};return e.stateNode=i,e}function zo(e,t,a){return e=At(6,e,null,t),e.lanes=a,e}function Do(e,t,a){return t=At(4,e.children!==null?e.children:[],e.key,t),t.lanes=a,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function ra(e){e.flags|=4}function Xd(e,t){if(t.type!=="stylesheet"||(t.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!Rm(t)){if(t=Ot.current,t!==null&&((we&4194176)===we?qt!==null:(we&62914560)!==we&&(we&536870912)===0||t!==qt))throw bl=Hs,sf;e.flags|=8192}}function tr(e,t){t!==null&&(e.flags|=4),e.flags&16384&&(t=e.tag!==22?su():536870912,e.lanes|=t,Fn|=t)}function Bl(e,t){if(!Te)switch(e.tailMode){case"hidden":t=e.tail;for(var a=null;t!==null;)t.alternate!==null&&(a=t),t=t.sibling;a===null?e.tail=null:a.sibling=null;break;case"collapsed":a=e.tail;for(var n=null;a!==null;)a.alternate!==null&&(n=a),a=a.sibling;n===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:n.sibling=null}}function Me(e){var t=e.alternate!==null&&e.alternate.child===e.child,a=0,n=0;if(t)for(var i=e.child;i!==null;)a|=i.lanes|i.childLanes,n|=i.subtreeFlags&31457280,n|=i.flags&31457280,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)a|=i.lanes|i.childLanes,n|=i.subtreeFlags,n|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=n,e.childLanes=a,t}function w1(e,t,a){var n=t.pendingProps;switch(ks(t),t.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Me(t),null;case 1:return Me(t),null;case 3:return a=t.stateNode,n=null,e!==null&&(n=e.memoizedState.cache),t.memoizedState.cache!==n&&(t.flags|=2048),aa(Qe),pn(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(e===null||e.child===null)&&(hl(t)?ra(t):e===null||e.memoizedState.isDehydrated&&(t.flags&256)===0||(t.flags|=1024,Dt!==null&&(Fo(Dt),Dt=null))),Me(t),null;case 26:return a=t.memoizedState,e===null?(ra(t),a!==null?(Me(t),Xd(t,a)):(Me(t),t.flags&=-16777217)):a?a!==e.memoizedState?(ra(t),Me(t),Xd(t,a)):(Me(t),t.flags&=-16777217):(e.memoizedProps!==n&&ra(t),Me(t),t.flags&=-16777217),null;case 27:mi(t),a=pa.current;var i=t.type;if(e!==null&&t.stateNode!=null)e.memoizedProps!==n&&ra(t);else{if(!n){if(t.stateNode===null)throw Error(o(166));return Me(t),null}e=tt.current,hl(t)?lf(t):(e=xm(i,n,a),t.stateNode=e,ra(t))}return Me(t),null;case 5:if(mi(t),a=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==n&&ra(t);else{if(!n){if(t.stateNode===null)throw Error(o(166));return Me(t),null}if(e=tt.current,hl(t))lf(t);else{switch(i=dr(pa.current),e){case 1:e=i.createElementNS("http://www.w3.org/2000/svg",a);break;case 2:e=i.createElementNS("http://www.w3.org/1998/Math/MathML",a);break;default:switch(a){case"svg":e=i.createElementNS("http://www.w3.org/2000/svg",a);break;case"math":e=i.createElementNS("http://www.w3.org/1998/Math/MathML",a);break;case"script":e=i.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild);break;case"select":e=typeof n.is=="string"?i.createElement("select",{is:n.is}):i.createElement("select"),n.multiple?e.multiple=!0:n.size&&(e.size=n.size);break;default:e=typeof n.is=="string"?i.createElement(a,{is:n.is}):i.createElement(a)}}e[at]=t,e[ot]=n;e:for(i=t.child;i!==null;){if(i.tag===5||i.tag===6)e.appendChild(i.stateNode);else if(i.tag!==4&&i.tag!==27&&i.child!==null){i.child.return=i,i=i.child;continue}if(i===t)break e;for(;i.sibling===null;){if(i.return===null||i.return===t)break e;i=i.return}i.sibling.return=i.return,i=i.sibling}t.stateNode=e;e:switch(Ie(e,a,n),a){case"button":case"input":case"select":case"textarea":e=!!n.autoFocus;break e;case"img":e=!0;break e;default:e=!1}e&&ra(t)}}return Me(t),t.flags&=-16777217,null;case 6:if(e&&t.stateNode!=null)e.memoizedProps!==n&&ra(t);else{if(typeof n!="string"&&t.stateNode===null)throw Error(o(166));if(e=pa.current,hl(t)){if(e=t.stateNode,a=t.memoizedProps,n=null,i=rt,i!==null)switch(i.tag){case 27:case 5:n=i.memoizedProps}e[at]=t,e=!!(e.nodeValue===a||n!==null&&n.suppressHydrationWarning===!0||pm(e.nodeValue,a)),e||Ka(t)}else e=dr(e).createTextNode(n),e[at]=t,t.stateNode=e}return Me(t),null;case 13:if(n=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(i=hl(t),n!==null&&n.dehydrated!==null){if(e===null){if(!i)throw Error(o(318));if(i=t.memoizedState,i=i!==null?i.dehydrated:null,!i)throw Error(o(317));i[at]=t}else gl(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;Me(t),i=!1}else Dt!==null&&(Fo(Dt),Dt=null),i=!0;if(!i)return t.flags&256?(Pt(t),t):(Pt(t),null)}if(Pt(t),(t.flags&128)!==0)return t.lanes=a,t;if(a=n!==null,e=e!==null&&e.memoizedState!==null,a){n=t.child,i=null,n.alternate!==null&&n.alternate.memoizedState!==null&&n.alternate.memoizedState.cachePool!==null&&(i=n.alternate.memoizedState.cachePool.pool);var s=null;n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(s=n.memoizedState.cachePool.pool),s!==i&&(n.flags|=2048)}return a!==e&&a&&(t.child.flags|=8192),tr(t,t.updateQueue),Me(t),null;case 4:return pn(),e===null&&Po(t.stateNode.containerInfo),Me(t),null;case 10:return aa(t.type),Me(t),null;case 19:if(Ee(Ve),i=t.memoizedState,i===null)return Me(t),null;if(n=(t.flags&128)!==0,s=i.rendering,s===null)if(n)Bl(i,!1);else{if(Le!==0||e!==null&&(e.flags&128)!==0)for(e=t.child;e!==null;){if(s=Li(e),s!==null){for(t.flags|=128,Bl(i,!1),e=s.updateQueue,t.updateQueue=e,tr(t,e),t.subtreeFlags=0,e=a,a=t.child;a!==null;)Yd(a,e),a=a.sibling;return je(Ve,Ve.current&1|2),t.child}e=e.sibling}i.tail!==null&&Lt()>ar&&(t.flags|=128,n=!0,Bl(i,!1),t.lanes=4194304)}else{if(!n)if(e=Li(s),e!==null){if(t.flags|=128,n=!0,e=e.updateQueue,t.updateQueue=e,tr(t,e),Bl(i,!0),i.tail===null&&i.tailMode==="hidden"&&!s.alternate&&!Te)return Me(t),null}else 2*Lt()-i.renderingStartTime>ar&&a!==536870912&&(t.flags|=128,n=!0,Bl(i,!1),t.lanes=4194304);i.isBackwards?(s.sibling=t.child,t.child=s):(e=i.last,e!==null?e.sibling=s:t.child=s,i.last=s)}return i.tail!==null?(t=i.tail,i.rendering=t,i.tail=t.sibling,i.renderingStartTime=Lt(),t.sibling=null,e=Ve.current,je(Ve,n?e&1|2:e&1),t):(Me(t),null);case 22:case 23:return Pt(t),Us(),n=t.memoizedState!==null,e!==null?e.memoizedState!==null!==n&&(t.flags|=8192):n&&(t.flags|=8192),n?(a&536870912)!==0&&(t.flags&128)===0&&(Me(t),t.subtreeFlags&6&&(t.flags|=8192)):Me(t),a=t.updateQueue,a!==null&&tr(t,a.retryQueue),a=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),n=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(n=t.memoizedState.cachePool.pool),n!==a&&(t.flags|=2048),e!==null&&Ee($a),null;case 24:return a=null,e!==null&&(a=e.memoizedState.cache),t.memoizedState.cache!==a&&(t.flags|=2048),aa(Qe),Me(t),null;case 25:return null}throw Error(o(156,t.tag))}function S1(e,t){switch(ks(t),t.tag){case 1:return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return aa(Qe),pn(),e=t.flags,(e&65536)!==0&&(e&128)===0?(t.flags=e&-65537|128,t):null;case 26:case 27:case 5:return mi(t),null;case 13:if(Pt(t),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(o(340));gl()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return Ee(Ve),null;case 4:return pn(),null;case 10:return aa(t.type),null;case 22:case 23:return Pt(t),Us(),e!==null&&Ee($a),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 24:return aa(Qe),null;case 25:return null;default:return null}}function Vd(e,t){switch(ks(t),t.tag){case 3:aa(Qe),pn();break;case 26:case 27:case 5:mi(t);break;case 4:pn();break;case 13:Pt(t);break;case 19:Ee(Ve);break;case 10:aa(t.type);break;case 22:case 23:Pt(t),Us(),e!==null&&Ee($a);break;case 24:aa(Qe)}}var E1={getCacheForType:function(e){var t=nt(Qe),a=t.data.get(e);return a===void 0&&(a=e(),t.data.set(e,a)),a}},j1=typeof WeakMap=="function"?WeakMap:Map,ke=0,_e=null,ye=null,we=0,Ce=0,yt=null,sa=!1,qn=!1,Mo=!1,oa=0,Le=0,Ca=0,rn=0,ko=0,_t=0,Fn=0,Hl=null,Yt=null,Bo=!1,Ho=0,ar=1/0,nr=null,za=null,lr=!1,sn=null,Ll=0,Lo=0,Uo=null,Ul=0,qo=null;function bt(){if((ke&2)!==0&&we!==0)return we&-we;if(Y.T!==null){var e=zn;return e!==0?e:Ko()}return fu()}function Qd(){_t===0&&(_t=(we&536870912)===0||Te?ru():536870912);var e=Ot.current;return e!==null&&(e.flags|=32),_t}function st(e,t,a){(e===_e&&Ce===2||e.cancelPendingCommit!==null)&&(Yn(e,0),ca(e,we,_t,!1)),nl(e,a),((ke&2)===0||e!==_e)&&(e===_e&&((ke&2)===0&&(rn|=a),Le===4&&ca(e,we,_t,!1)),Gt(e))}function Zd(e,t,a){if((ke&6)!==0)throw Error(o(327));var n=!a&&(t&60)===0&&(t&e.expiredLanes)===0||al(e,t),i=n?N1(e,t):Xo(e,t,!0),s=n;do{if(i===0){qn&&!n&&ca(e,t,0,!1);break}else if(i===6)ca(e,t,0,!sa);else{if(a=e.current.alternate,s&&!T1(a)){i=Xo(e,t,!1),s=!1;continue}if(i===2){if(s=t,e.errorRecoveryDisabledLanes&s)var m=0;else m=e.pendingLanes&-536870913,m=m!==0?m:m&536870912?536870912:0;if(m!==0){t=m;e:{var y=e;i=Hl;var w=y.current.memoizedState.isDehydrated;if(w&&(Yn(y,m).flags|=256),m=Xo(y,m,!1),m!==2){if(Mo&&!w){y.errorRecoveryDisabledLanes|=s,rn|=s,i=4;break e}s=Yt,Yt=i,s!==null&&Fo(s)}i=m}if(s=!1,i!==2)continue}}if(i===1){Yn(e,0),ca(e,t,0,!0);break}e:{switch(n=e,i){case 0:case 1:throw Error(o(345));case 4:if((t&4194176)===t){ca(n,t,_t,!sa);break e}break;case 2:Yt=null;break;case 3:case 5:break;default:throw Error(o(329))}if(n.finishedWork=a,n.finishedLanes=t,(t&62914560)===t&&(s=Ho+300-Lt(),10<s)){if(ca(n,t,_t,!sa),vi(n,0)!==0)break e;n.timeoutHandle=vm(Kd.bind(null,n,a,Yt,nr,Bo,t,_t,rn,Fn,sa,2,-0,0),s);break e}Kd(n,a,Yt,nr,Bo,t,_t,rn,Fn,sa,0,-0,0)}}break}while(!0);Gt(e)}function Fo(e){Yt===null?Yt=e:Yt.push.apply(Yt,e)}function Kd(e,t,a,n,i,s,m,y,w,A,q,V,B){var L=t.subtreeFlags;if((L&8192||(L&16785408)===16785408)&&(Vl={stylesheets:null,count:0,unsuspend:rg},Ld(t),t=og(),t!==null)){e.cancelPendingCommit=t(tm.bind(null,e,a,n,i,m,y,w,1,V,B)),ca(e,s,m,!A);return}tm(e,a,n,i,m,y,w,q,V,B)}function T1(e){for(var t=e;;){var a=t.tag;if((a===0||a===11||a===15)&&t.flags&16384&&(a=t.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var n=0;n<a.length;n++){var i=a[n],s=i.getSnapshot;i=i.value;try{if(!ht(s(),i))return!1}catch{return!1}}if(a=t.child,t.subtreeFlags&16384&&a!==null)a.return=t,t=a;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function ca(e,t,a,n){t&=~ko,t&=~rn,e.suspendedLanes|=t,e.pingedLanes&=~t,n&&(e.warmLanes|=t),n=e.expirationTimes;for(var i=t;0<i;){var s=31-pt(i),m=1<<s;n[s]=-1,i&=~m}a!==0&&ou(e,a,t)}function ir(){return(ke&6)===0?(ql(0),!1):!0}function Yo(){if(ye!==null){if(Ce===0)var e=ye.return;else e=ye,ta=tn=null,Zs(e),_n=null,xl=0,e=ye;for(;e!==null;)Vd(e.alternate,e),e=e.return;ye=null}}function Yn(e,t){e.finishedWork=null,e.finishedLanes=0;var a=e.timeoutHandle;a!==-1&&(e.timeoutHandle=-1,X1(a)),a=e.cancelPendingCommit,a!==null&&(e.cancelPendingCommit=null,a()),Yo(),_e=e,ye=a=_a(e.current,null),we=t,Ce=0,yt=null,sa=!1,qn=al(e,t),Mo=!1,Fn=_t=ko=rn=Ca=Le=0,Yt=Hl=null,Bo=!1,(t&8)!==0&&(t|=t&32);var n=e.entangledLanes;if(n!==0)for(e=e.entanglements,n&=t;0<n;){var i=31-pt(n),s=1<<i;t|=e[i],n&=~s}return oa=t,Ai(),a}function Jd(e,t){ge=null,Y.H=Ft,t===yl?(t=uf(),Ce=3):t===sf?(t=uf(),Ce=4):Ce=t===od?8:t!==null&&typeof t=="object"&&typeof t.then=="function"?6:1,yt=t,ye===null&&(Le=1,Ji(e,Et(t,e.current)))}function $d(){var e=Y.H;return Y.H=Ft,e===null?Ft:e}function Wd(){var e=Y.A;return Y.A=E1,e}function Go(){Le=4,sa||(we&4194176)!==we&&Ot.current!==null||(qn=!0),(Ca&134217727)===0&&(rn&134217727)===0||_e===null||ca(_e,we,_t,!1)}function Xo(e,t,a){var n=ke;ke|=2;var i=$d(),s=Wd();(_e!==e||we!==t)&&(nr=null,Yn(e,t)),t=!1;var m=Le;e:do try{if(Ce!==0&&ye!==null){var y=ye,w=yt;switch(Ce){case 8:Yo(),m=6;break e;case 3:case 2:case 6:Ot.current===null&&(t=!0);var A=Ce;if(Ce=0,yt=null,Gn(e,y,w,A),a&&qn){m=0;break e}break;default:A=Ce,Ce=0,yt=null,Gn(e,y,w,A)}}O1(),m=Le;break}catch(q){Jd(e,q)}while(!0);return t&&e.shellSuspendCounter++,ta=tn=null,ke=n,Y.H=i,Y.A=s,ye===null&&(_e=null,we=0,Ai()),m}function O1(){for(;ye!==null;)Pd(ye)}function N1(e,t){var a=ke;ke|=2;var n=$d(),i=Wd();_e!==e||we!==t?(nr=null,ar=Lt()+500,Yn(e,t)):qn=al(e,t);e:do try{if(Ce!==0&&ye!==null){t=ye;var s=yt;t:switch(Ce){case 1:Ce=0,yt=null,Gn(e,t,s,1);break;case 2:if(of(s)){Ce=0,yt=null,Id(t);break}t=function(){Ce===2&&_e===e&&(Ce=7),Gt(e)},s.then(t,t);break e;case 3:Ce=7;break e;case 4:Ce=5;break e;case 7:of(s)?(Ce=0,yt=null,Id(t)):(Ce=0,yt=null,Gn(e,t,s,7));break;case 5:var m=null;switch(ye.tag){case 26:m=ye.memoizedState;case 5:case 27:var y=ye;if(!m||Rm(m)){Ce=0,yt=null;var w=y.sibling;if(w!==null)ye=w;else{var A=y.return;A!==null?(ye=A,rr(A)):ye=null}break t}}Ce=0,yt=null,Gn(e,t,s,5);break;case 6:Ce=0,yt=null,Gn(e,t,s,6);break;case 8:Yo(),Le=6;break e;default:throw Error(o(462))}}R1();break}catch(q){Jd(e,q)}while(!0);return ta=tn=null,Y.H=n,Y.A=i,ke=a,ye!==null?0:(_e=null,we=0,Ai(),Le)}function R1(){for(;ye!==null&&!$p();)Pd(ye)}function Pd(e){var t=xd(e.alternate,e,oa);e.memoizedProps=e.pendingProps,t===null?rr(e):ye=t}function Id(e){var t=e,a=t.alternate;switch(t.tag){case 15:case 0:t=pd(a,t,t.pendingProps,t.type,void 0,we);break;case 11:t=pd(a,t,t.pendingProps,t.type.render,t.ref,we);break;case 5:Zs(t);default:Vd(a,t),t=ye=Yd(t,oa),t=xd(a,t,oa)}e.memoizedProps=e.pendingProps,t===null?rr(e):ye=t}function Gn(e,t,a,n){ta=tn=null,Zs(t),_n=null,xl=0;var i=t.return;try{if(g1(e,i,t,a,we)){Le=1,Ji(e,Et(a,e.current)),ye=null;return}}catch(s){if(i!==null)throw ye=i,s;Le=1,Ji(e,Et(a,e.current)),ye=null;return}t.flags&32768?(Te||n===1?e=!0:qn||(we&536870912)!==0?e=!1:(sa=e=!0,(n===2||n===3||n===6)&&(n=Ot.current,n!==null&&n.tag===13&&(n.flags|=16384))),em(t,e)):rr(t)}function rr(e){var t=e;do{if((t.flags&32768)!==0){em(t,sa);return}e=t.return;var a=w1(t.alternate,t,oa);if(a!==null){ye=a;return}if(t=t.sibling,t!==null){ye=t;return}ye=t=e}while(t!==null);Le===0&&(Le=5)}function em(e,t){do{var a=S1(e.alternate,e);if(a!==null){a.flags&=32767,ye=a;return}if(a=e.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!t&&(e=e.sibling,e!==null)){ye=e;return}ye=e=a}while(e!==null);Le=6,ye=null}function tm(e,t,a,n,i,s,m,y,w,A){var q=Y.T,V=I.p;try{I.p=2,Y.T=null,A1(e,t,a,n,V,i,s,m,y,w,A)}finally{Y.T=q,I.p=V}}function A1(e,t,a,n,i,s,m,y){do Xn();while(sn!==null);if((ke&6)!==0)throw Error(o(327));var w=e.finishedWork;if(n=e.finishedLanes,w===null)return null;if(e.finishedWork=null,e.finishedLanes=0,w===e.current)throw Error(o(177));e.callbackNode=null,e.callbackPriority=0,e.cancelPendingCommit=null;var A=w.lanes|w.childLanes;if(A|=zs,sh(e,n,A,s,m,y),e===_e&&(ye=_e=null,we=0),(w.subtreeFlags&10256)===0&&(w.flags&10256)===0||lr||(lr=!0,Lo=A,Uo=a,D1(pi,function(){return Xn(),null})),a=(w.flags&15990)!==0,(w.subtreeFlags&15990)!==0||a?(a=Y.T,Y.T=null,s=I.p,I.p=2,m=ke,ke|=4,y1(e,w),kd(w,e),Ih(ac,e.containerInfo),yr=!!tc,ac=tc=null,e.current=w,Cd(e,w.alternate,w),Wp(),ke=m,I.p=s,Y.T=a):e.current=w,lr?(lr=!1,sn=e,Ll=n):am(e,A),A=e.pendingLanes,A===0&&(za=null),ah(w.stateNode),Gt(e),t!==null)for(i=e.onRecoverableError,w=0;w<t.length;w++)A=t[w],i(A.value,{componentStack:A.stack});return(Ll&3)!==0&&Xn(),A=e.pendingLanes,(n&4194218)!==0&&(A&42)!==0?e===qo?Ul++:(Ul=0,qo=e):Ul=0,ql(0),null}function am(e,t){(e.pooledCacheLanes&=t)===0&&(t=e.pooledCache,t!=null&&(e.pooledCache=null,Sl(t)))}function Xn(){if(sn!==null){var e=sn,t=Lo;Lo=0;var a=uu(Ll),n=Y.T,i=I.p;try{if(I.p=32>a?32:a,Y.T=null,sn===null)var s=!1;else{a=Uo,Uo=null;var m=sn,y=Ll;if(sn=null,Ll=0,(ke&6)!==0)throw Error(o(331));var w=ke;if(ke|=4,qd(m.current),Hd(m,m.current,y,a),ke=w,ql(0,!1),mt&&typeof mt.onPostCommitFiberRoot=="function")try{mt.onPostCommitFiberRoot(tl,m)}catch{}s=!0}return s}finally{I.p=i,Y.T=n,am(e,t)}}return!1}function nm(e,t,a){t=Et(a,t),t=so(e.stateNode,t,2),e=Oa(e,t,2),e!==null&&(nl(e,2),Gt(e))}function Ae(e,t,a){if(e.tag===3)nm(e,e,a);else for(;t!==null;){if(t.tag===3){nm(t,e,a);break}else if(t.tag===1){var n=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof n.componentDidCatch=="function"&&(za===null||!za.has(n))){e=Et(a,e),a=rd(2),n=Oa(t,a,2),n!==null&&(sd(a,n,t,e),nl(n,2),Gt(n));break}}t=t.return}}function Vo(e,t,a){var n=e.pingCache;if(n===null){n=e.pingCache=new j1;var i=new Set;n.set(t,i)}else i=n.get(t),i===void 0&&(i=new Set,n.set(t,i));i.has(a)||(Mo=!0,i.add(a),e=_1.bind(null,e,t,a),t.then(e,e))}function _1(e,t,a){var n=e.pingCache;n!==null&&n.delete(t),e.pingedLanes|=e.suspendedLanes&a,e.warmLanes&=~a,_e===e&&(we&a)===a&&(Le===4||Le===3&&(we&62914560)===we&&300>Lt()-Ho?(ke&2)===0&&Yn(e,0):ko|=a,Fn===we&&(Fn=0)),Gt(e)}function lm(e,t){t===0&&(t=su()),e=ya(e,t),e!==null&&(nl(e,t),Gt(e))}function C1(e){var t=e.memoizedState,a=0;t!==null&&(a=t.retryLane),lm(e,a)}function z1(e,t){var a=0;switch(e.tag){case 13:var n=e.stateNode,i=e.memoizedState;i!==null&&(a=i.retryLane);break;case 19:n=e.stateNode;break;case 22:n=e.stateNode._retryCache;break;default:throw Error(o(314))}n!==null&&n.delete(t),lm(e,a)}function D1(e,t){return os(e,t)}var sr=null,Vn=null,Qo=!1,or=!1,Zo=!1,on=0;function Gt(e){e!==Vn&&e.next===null&&(Vn===null?sr=Vn=e:Vn=Vn.next=e),or=!0,Qo||(Qo=!0,k1(M1))}function ql(e,t){if(!Zo&&or){Zo=!0;do for(var a=!1,n=sr;n!==null;){if(e!==0){var i=n.pendingLanes;if(i===0)var s=0;else{var m=n.suspendedLanes,y=n.pingedLanes;s=(1<<31-pt(42|e)+1)-1,s&=i&~(m&~y),s=s&201326677?s&201326677|1:s?s|2:0}s!==0&&(a=!0,sm(n,s))}else s=we,s=vi(n,n===_e?s:0),(s&3)===0||al(n,s)||(a=!0,sm(n,s));n=n.next}while(a);Zo=!1}}function M1(){or=Qo=!1;var e=0;on!==0&&(G1()&&(e=on),on=0);for(var t=Lt(),a=null,n=sr;n!==null;){var i=n.next,s=im(n,t);s===0?(n.next=null,a===null?sr=i:a.next=i,i===null&&(Vn=a)):(a=n,(e!==0||(s&3)!==0)&&(or=!0)),n=i}ql(e)}function im(e,t){for(var a=e.suspendedLanes,n=e.pingedLanes,i=e.expirationTimes,s=e.pendingLanes&-62914561;0<s;){var m=31-pt(s),y=1<<m,w=i[m];w===-1?((y&a)===0||(y&n)!==0)&&(i[m]=rh(y,t)):w<=t&&(e.expiredLanes|=y),s&=~y}if(t=_e,a=we,a=vi(e,e===t?a:0),n=e.callbackNode,a===0||e===t&&Ce===2||e.cancelPendingCommit!==null)return n!==null&&n!==null&&cs(n),e.callbackNode=null,e.callbackPriority=0;if((a&3)===0||al(e,a)){if(t=a&-a,t===e.callbackPriority)return t;switch(n!==null&&cs(n),uu(a)){case 2:case 8:a=lu;break;case 32:a=pi;break;case 268435456:a=iu;break;default:a=pi}return n=rm.bind(null,e),a=os(a,n),e.callbackPriority=t,e.callbackNode=a,t}return n!==null&&n!==null&&cs(n),e.callbackPriority=2,e.callbackNode=null,2}function rm(e,t){var a=e.callbackNode;if(Xn()&&e.callbackNode!==a)return null;var n=we;return n=vi(e,e===_e?n:0),n===0?null:(Zd(e,n,t),im(e,Lt()),e.callbackNode!=null&&e.callbackNode===a?rm.bind(null,e):null)}function sm(e,t){if(Xn())return null;Zd(e,t,!0)}function k1(e){V1(function(){(ke&6)!==0?os(nu,e):e()})}function Ko(){return on===0&&(on=ru()),on}function om(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:Si(""+e)}function cm(e,t){var a=t.ownerDocument.createElement("input");return a.name=t.name,a.value=t.value,e.id&&a.setAttribute("form",e.id),t.parentNode.insertBefore(a,t),e=new FormData(e),a.parentNode.removeChild(a),e}function B1(e,t,a,n,i){if(t==="submit"&&a&&a.stateNode===i){var s=om((i[ot]||null).action),m=n.submitter;m&&(t=(t=m[ot]||null)?om(t.formAction):m.getAttribute("formAction"),t!==null&&(s=t,m=null));var y=new Oi("action","action",null,n,i);e.push({event:y,listeners:[{instance:null,listener:function(){if(n.defaultPrevented){if(on!==0){var w=m?cm(i,m):new FormData(i);ao(a,{pending:!0,data:w,method:i.method,action:s},null,w)}}else typeof s=="function"&&(y.preventDefault(),w=m?cm(i,m):new FormData(i),ao(a,{pending:!0,data:w,method:i.method,action:s},s,w))},currentTarget:i}]})}}for(var Jo=0;Jo<ef.length;Jo++){var $o=ef[Jo],H1=$o.toLowerCase(),L1=$o[0].toUpperCase()+$o.slice(1);zt(H1,"on"+L1)}zt(Ju,"onAnimationEnd"),zt($u,"onAnimationIteration"),zt(Wu,"onAnimationStart"),zt("dblclick","onDoubleClick"),zt("focusin","onFocus"),zt("focusout","onBlur"),zt(t1,"onTransitionRun"),zt(a1,"onTransitionStart"),zt(n1,"onTransitionCancel"),zt(Pu,"onTransitionEnd"),yn("onMouseEnter",["mouseout","mouseover"]),yn("onMouseLeave",["mouseout","mouseover"]),yn("onPointerEnter",["pointerout","pointerover"]),yn("onPointerLeave",["pointerout","pointerover"]),Ya("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),Ya("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),Ya("onBeforeInput",["compositionend","keypress","textInput","paste"]),Ya("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),Ya("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),Ya("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Fl="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),U1=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Fl));function um(e,t){t=(t&4)!==0;for(var a=0;a<e.length;a++){var n=e[a],i=n.event;n=n.listeners;e:{var s=void 0;if(t)for(var m=n.length-1;0<=m;m--){var y=n[m],w=y.instance,A=y.currentTarget;if(y=y.listener,w!==s&&i.isPropagationStopped())break e;s=y,i.currentTarget=A;try{s(i)}catch(q){Ki(q)}i.currentTarget=null,s=w}else for(m=0;m<n.length;m++){if(y=n[m],w=y.instance,A=y.currentTarget,y=y.listener,w!==s&&i.isPropagationStopped())break e;s=y,i.currentTarget=A;try{s(i)}catch(q){Ki(q)}i.currentTarget=null,s=w}}}}function xe(e,t){var a=t[fs];a===void 0&&(a=t[fs]=new Set);var n=e+"__bubble";a.has(n)||(fm(t,e,2,!1),a.add(n))}function Wo(e,t,a){var n=0;t&&(n|=4),fm(a,e,n,t)}var cr="_reactListening"+Math.random().toString(36).slice(2);function Po(e){if(!e[cr]){e[cr]=!0,mu.forEach(function(a){a!=="selectionchange"&&(U1.has(a)||Wo(a,!1,e),Wo(a,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[cr]||(t[cr]=!0,Wo("selectionchange",!1,t))}}function fm(e,t,a,n){switch(Mm(t)){case 2:var i=fg;break;case 8:i=dg;break;default:i=fc}a=i.bind(null,t,a,e),i=void 0,!bs||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(i=!0),n?i!==void 0?e.addEventListener(t,a,{capture:!0,passive:i}):e.addEventListener(t,a,!0):i!==void 0?e.addEventListener(t,a,{passive:i}):e.addEventListener(t,a,!1)}function Io(e,t,a,n,i){var s=n;if((t&1)===0&&(t&2)===0&&n!==null)e:for(;;){if(n===null)return;var m=n.tag;if(m===3||m===4){var y=n.stateNode.containerInfo;if(y===i||y.nodeType===8&&y.parentNode===i)break;if(m===4)for(m=n.return;m!==null;){var w=m.tag;if((w===3||w===4)&&(w=m.stateNode.containerInfo,w===i||w.nodeType===8&&w.parentNode===i))return;m=m.return}for(;y!==null;){if(m=Fa(y),m===null)return;if(w=m.tag,w===5||w===6||w===26||w===27){n=s=m;continue e}y=y.parentNode}}n=n.return}Tu(function(){var A=s,q=vs(a),V=[];e:{var B=Iu.get(e);if(B!==void 0){var L=Oi,re=e;switch(e){case"keypress":if(ji(a)===0)break e;case"keydown":case"keyup":L=zh;break;case"focusin":re="focus",L=Es;break;case"focusout":re="blur",L=Es;break;case"beforeblur":case"afterblur":L=Es;break;case"click":if(a.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":L=Ru;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":L=xh;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":L=kh;break;case Ju:case $u:case Wu:L=Eh;break;case Pu:L=Hh;break;case"scroll":case"scrollend":L=yh;break;case"wheel":L=Uh;break;case"copy":case"cut":case"paste":L=Th;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":L=_u;break;case"toggle":case"beforetoggle":L=Fh}var de=(t&4)!==0,Ue=!de&&(e==="scroll"||e==="scrollend"),z=de?B!==null?B+"Capture":null:B;de=[];for(var R=A,k;R!==null;){var F=R;if(k=F.stateNode,F=F.tag,F!==5&&F!==26&&F!==27||k===null||z===null||(F=rl(R,z),F!=null&&de.push(Yl(R,F,k))),Ue)break;R=R.return}0<de.length&&(B=new L(B,re,null,a,q),V.push({event:B,listeners:de}))}}if((t&7)===0){e:{if(B=e==="mouseover"||e==="pointerover",L=e==="mouseout"||e==="pointerout",B&&a!==gs&&(re=a.relatedTarget||a.fromElement)&&(Fa(re)||re[hn]))break e;if((L||B)&&(B=q.window===q?q:(B=q.ownerDocument)?B.defaultView||B.parentWindow:window,L?(re=a.relatedTarget||a.toElement,L=A,re=re?Fa(re):null,re!==null&&(Ue=te(re),de=re.tag,re!==Ue||de!==5&&de!==27&&de!==6)&&(re=null)):(L=null,re=A),L!==re)){if(de=Ru,F="onMouseLeave",z="onMouseEnter",R="mouse",(e==="pointerout"||e==="pointerover")&&(de=_u,F="onPointerLeave",z="onPointerEnter",R="pointer"),Ue=L==null?B:il(L),k=re==null?B:il(re),B=new de(F,R+"leave",L,a,q),B.target=Ue,B.relatedTarget=k,F=null,Fa(q)===A&&(de=new de(z,R+"enter",re,a,q),de.target=k,de.relatedTarget=Ue,F=de),Ue=F,L&&re)t:{for(de=L,z=re,R=0,k=de;k;k=Qn(k))R++;for(k=0,F=z;F;F=Qn(F))k++;for(;0<R-k;)de=Qn(de),R--;for(;0<k-R;)z=Qn(z),k--;for(;R--;){if(de===z||z!==null&&de===z.alternate)break t;de=Qn(de),z=Qn(z)}de=null}else de=null;L!==null&&dm(V,B,L,de,!1),re!==null&&Ue!==null&&dm(V,Ue,re,de,!0)}}e:{if(B=A?il(A):window,L=B.nodeName&&B.nodeName.toLowerCase(),L==="select"||L==="input"&&B.type==="file")var le=Lu;else if(Bu(B))if(Uu)le=Wh;else{le=Jh;var ve=Kh}else L=B.nodeName,!L||L.toLowerCase()!=="input"||B.type!=="checkbox"&&B.type!=="radio"?A&&hs(A.elementType)&&(le=Lu):le=$h;if(le&&(le=le(e,A))){Hu(V,le,a,q);break e}ve&&ve(e,B,A),e==="focusout"&&A&&B.type==="number"&&A.memoizedProps.value!=null&&ps(B,"number",B.value)}switch(ve=A?il(A):window,e){case"focusin":(Bu(ve)||ve.contentEditable==="true")&&(jn=ve,As=A,pl=null);break;case"focusout":pl=As=jn=null;break;case"mousedown":_s=!0;break;case"contextmenu":case"mouseup":case"dragend":_s=!1,Zu(V,a,q);break;case"selectionchange":if(e1)break;case"keydown":case"keyup":Zu(V,a,q)}var oe;if(Ts)e:{switch(e){case"compositionstart":var ue="onCompositionStart";break e;case"compositionend":ue="onCompositionEnd";break e;case"compositionupdate":ue="onCompositionUpdate";break e}ue=void 0}else En?Mu(e,a)&&(ue="onCompositionEnd"):e==="keydown"&&a.keyCode===229&&(ue="onCompositionStart");ue&&(Cu&&a.locale!=="ko"&&(En||ue!=="onCompositionStart"?ue==="onCompositionEnd"&&En&&(oe=Ou()):(va=q,xs="value"in va?va.value:va.textContent,En=!0)),ve=ur(A,ue),0<ve.length&&(ue=new Au(ue,e,null,a,q),V.push({event:ue,listeners:ve}),oe?ue.data=oe:(oe=ku(a),oe!==null&&(ue.data=oe)))),(oe=Gh?Xh(e,a):Vh(e,a))&&(ue=ur(A,"onBeforeInput"),0<ue.length&&(ve=new Au("onBeforeInput","beforeinput",null,a,q),V.push({event:ve,listeners:ue}),ve.data=oe)),B1(V,e,A,a,q)}um(V,t)})}function Yl(e,t,a){return{instance:e,listener:t,currentTarget:a}}function ur(e,t){for(var a=t+"Capture",n=[];e!==null;){var i=e,s=i.stateNode;i=i.tag,i!==5&&i!==26&&i!==27||s===null||(i=rl(e,a),i!=null&&n.unshift(Yl(e,i,s)),i=rl(e,t),i!=null&&n.push(Yl(e,i,s))),e=e.return}return n}function Qn(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function dm(e,t,a,n,i){for(var s=t._reactName,m=[];a!==null&&a!==n;){var y=a,w=y.alternate,A=y.stateNode;if(y=y.tag,w!==null&&w===n)break;y!==5&&y!==26&&y!==27||A===null||(w=A,i?(A=rl(a,s),A!=null&&m.unshift(Yl(a,A,w))):i||(A=rl(a,s),A!=null&&m.push(Yl(a,A,w)))),a=a.return}m.length!==0&&e.push({event:t,listeners:m})}var q1=/\r\n?/g,F1=/\u0000|\uFFFD/g;function mm(e){return(typeof e=="string"?e:""+e).replace(q1,`
`).replace(F1,"")}function pm(e,t){return t=mm(t),mm(e)===t}function fr(){}function Re(e,t,a,n,i,s){switch(a){case"children":typeof n=="string"?t==="body"||t==="textarea"&&n===""||xn(e,n):(typeof n=="number"||typeof n=="bigint")&&t!=="body"&&xn(e,""+n);break;case"className":bi(e,"class",n);break;case"tabIndex":bi(e,"tabindex",n);break;case"dir":case"role":case"viewBox":case"width":case"height":bi(e,a,n);break;case"style":Eu(e,n,s);break;case"data":if(t!=="object"){bi(e,"data",n);break}case"src":case"href":if(n===""&&(t!=="a"||a!=="href")){e.removeAttribute(a);break}if(n==null||typeof n=="function"||typeof n=="symbol"||typeof n=="boolean"){e.removeAttribute(a);break}n=Si(""+n),e.setAttribute(a,n);break;case"action":case"formAction":if(typeof n=="function"){e.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof s=="function"&&(a==="formAction"?(t!=="input"&&Re(e,t,"name",i.name,i,null),Re(e,t,"formEncType",i.formEncType,i,null),Re(e,t,"formMethod",i.formMethod,i,null),Re(e,t,"formTarget",i.formTarget,i,null)):(Re(e,t,"encType",i.encType,i,null),Re(e,t,"method",i.method,i,null),Re(e,t,"target",i.target,i,null)));if(n==null||typeof n=="symbol"||typeof n=="boolean"){e.removeAttribute(a);break}n=Si(""+n),e.setAttribute(a,n);break;case"onClick":n!=null&&(e.onclick=fr);break;case"onScroll":n!=null&&xe("scroll",e);break;case"onScrollEnd":n!=null&&xe("scrollend",e);break;case"dangerouslySetInnerHTML":if(n!=null){if(typeof n!="object"||!("__html"in n))throw Error(o(61));if(a=n.__html,a!=null){if(i.children!=null)throw Error(o(60));e.innerHTML=a}}break;case"multiple":e.multiple=n&&typeof n!="function"&&typeof n!="symbol";break;case"muted":e.muted=n&&typeof n!="function"&&typeof n!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(n==null||typeof n=="function"||typeof n=="boolean"||typeof n=="symbol"){e.removeAttribute("xlink:href");break}a=Si(""+n),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":n!=null&&typeof n!="function"&&typeof n!="symbol"?e.setAttribute(a,""+n):e.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":n&&typeof n!="function"&&typeof n!="symbol"?e.setAttribute(a,""):e.removeAttribute(a);break;case"capture":case"download":n===!0?e.setAttribute(a,""):n!==!1&&n!=null&&typeof n!="function"&&typeof n!="symbol"?e.setAttribute(a,n):e.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":n!=null&&typeof n!="function"&&typeof n!="symbol"&&!isNaN(n)&&1<=n?e.setAttribute(a,n):e.removeAttribute(a);break;case"rowSpan":case"start":n==null||typeof n=="function"||typeof n=="symbol"||isNaN(n)?e.removeAttribute(a):e.setAttribute(a,n);break;case"popover":xe("beforetoggle",e),xe("toggle",e),yi(e,"popover",n);break;case"xlinkActuate":Jt(e,"http://www.w3.org/1999/xlink","xlink:actuate",n);break;case"xlinkArcrole":Jt(e,"http://www.w3.org/1999/xlink","xlink:arcrole",n);break;case"xlinkRole":Jt(e,"http://www.w3.org/1999/xlink","xlink:role",n);break;case"xlinkShow":Jt(e,"http://www.w3.org/1999/xlink","xlink:show",n);break;case"xlinkTitle":Jt(e,"http://www.w3.org/1999/xlink","xlink:title",n);break;case"xlinkType":Jt(e,"http://www.w3.org/1999/xlink","xlink:type",n);break;case"xmlBase":Jt(e,"http://www.w3.org/XML/1998/namespace","xml:base",n);break;case"xmlLang":Jt(e,"http://www.w3.org/XML/1998/namespace","xml:lang",n);break;case"xmlSpace":Jt(e,"http://www.w3.org/XML/1998/namespace","xml:space",n);break;case"is":yi(e,"is",n);break;case"innerText":case"textContent":break;default:(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")&&(a=gh.get(a)||a,yi(e,a,n))}}function ec(e,t,a,n,i,s){switch(a){case"style":Eu(e,n,s);break;case"dangerouslySetInnerHTML":if(n!=null){if(typeof n!="object"||!("__html"in n))throw Error(o(61));if(a=n.__html,a!=null){if(i.children!=null)throw Error(o(60));e.innerHTML=a}}break;case"children":typeof n=="string"?xn(e,n):(typeof n=="number"||typeof n=="bigint")&&xn(e,""+n);break;case"onScroll":n!=null&&xe("scroll",e);break;case"onScrollEnd":n!=null&&xe("scrollend",e);break;case"onClick":n!=null&&(e.onclick=fr);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!pu.hasOwnProperty(a))e:{if(a[0]==="o"&&a[1]==="n"&&(i=a.endsWith("Capture"),t=a.slice(2,i?a.length-7:void 0),s=e[ot]||null,s=s!=null?s[a]:null,typeof s=="function"&&e.removeEventListener(t,s,i),typeof n=="function")){typeof s!="function"&&s!==null&&(a in e?e[a]=null:e.hasAttribute(a)&&e.removeAttribute(a)),e.addEventListener(t,n,i);break e}a in e?e[a]=n:n===!0?e.setAttribute(a,""):yi(e,a,n)}}}function Ie(e,t,a){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":xe("error",e),xe("load",e);var n=!1,i=!1,s;for(s in a)if(a.hasOwnProperty(s)){var m=a[s];if(m!=null)switch(s){case"src":n=!0;break;case"srcSet":i=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(o(137,t));default:Re(e,t,s,m,a,null)}}i&&Re(e,t,"srcSet",a.srcSet,a,null),n&&Re(e,t,"src",a.src,a,null);return;case"input":xe("invalid",e);var y=s=m=i=null,w=null,A=null;for(n in a)if(a.hasOwnProperty(n)){var q=a[n];if(q!=null)switch(n){case"name":i=q;break;case"type":m=q;break;case"checked":w=q;break;case"defaultChecked":A=q;break;case"value":s=q;break;case"defaultValue":y=q;break;case"children":case"dangerouslySetInnerHTML":if(q!=null)throw Error(o(137,t));break;default:Re(e,t,n,q,a,null)}}bu(e,s,y,w,A,m,i,!1),xi(e);return;case"select":xe("invalid",e),n=m=s=null;for(i in a)if(a.hasOwnProperty(i)&&(y=a[i],y!=null))switch(i){case"value":s=y;break;case"defaultValue":m=y;break;case"multiple":n=y;default:Re(e,t,i,y,a,null)}t=s,a=m,e.multiple=!!n,t!=null?bn(e,!!n,t,!1):a!=null&&bn(e,!!n,a,!0);return;case"textarea":xe("invalid",e),s=i=n=null;for(m in a)if(a.hasOwnProperty(m)&&(y=a[m],y!=null))switch(m){case"value":n=y;break;case"defaultValue":i=y;break;case"children":s=y;break;case"dangerouslySetInnerHTML":if(y!=null)throw Error(o(91));break;default:Re(e,t,m,y,a,null)}wu(e,n,i,s),xi(e);return;case"option":for(w in a)if(a.hasOwnProperty(w)&&(n=a[w],n!=null))switch(w){case"selected":e.selected=n&&typeof n!="function"&&typeof n!="symbol";break;default:Re(e,t,w,n,a,null)}return;case"dialog":xe("cancel",e),xe("close",e);break;case"iframe":case"object":xe("load",e);break;case"video":case"audio":for(n=0;n<Fl.length;n++)xe(Fl[n],e);break;case"image":xe("error",e),xe("load",e);break;case"details":xe("toggle",e);break;case"embed":case"source":case"link":xe("error",e),xe("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(A in a)if(a.hasOwnProperty(A)&&(n=a[A],n!=null))switch(A){case"children":case"dangerouslySetInnerHTML":throw Error(o(137,t));default:Re(e,t,A,n,a,null)}return;default:if(hs(t)){for(q in a)a.hasOwnProperty(q)&&(n=a[q],n!==void 0&&ec(e,t,q,n,a,void 0));return}}for(y in a)a.hasOwnProperty(y)&&(n=a[y],n!=null&&Re(e,t,y,n,a,null))}function Y1(e,t,a,n){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var i=null,s=null,m=null,y=null,w=null,A=null,q=null;for(L in a){var V=a[L];if(a.hasOwnProperty(L)&&V!=null)switch(L){case"checked":break;case"value":break;case"defaultValue":w=V;default:n.hasOwnProperty(L)||Re(e,t,L,null,n,V)}}for(var B in n){var L=n[B];if(V=a[B],n.hasOwnProperty(B)&&(L!=null||V!=null))switch(B){case"type":s=L;break;case"name":i=L;break;case"checked":A=L;break;case"defaultChecked":q=L;break;case"value":m=L;break;case"defaultValue":y=L;break;case"children":case"dangerouslySetInnerHTML":if(L!=null)throw Error(o(137,t));break;default:L!==V&&Re(e,t,B,L,n,V)}}ms(e,m,y,w,A,q,s,i);return;case"select":L=m=y=B=null;for(s in a)if(w=a[s],a.hasOwnProperty(s)&&w!=null)switch(s){case"value":break;case"multiple":L=w;default:n.hasOwnProperty(s)||Re(e,t,s,null,n,w)}for(i in n)if(s=n[i],w=a[i],n.hasOwnProperty(i)&&(s!=null||w!=null))switch(i){case"value":B=s;break;case"defaultValue":y=s;break;case"multiple":m=s;default:s!==w&&Re(e,t,i,s,n,w)}t=y,a=m,n=L,B!=null?bn(e,!!a,B,!1):!!n!=!!a&&(t!=null?bn(e,!!a,t,!0):bn(e,!!a,a?[]:"",!1));return;case"textarea":L=B=null;for(y in a)if(i=a[y],a.hasOwnProperty(y)&&i!=null&&!n.hasOwnProperty(y))switch(y){case"value":break;case"children":break;default:Re(e,t,y,null,n,i)}for(m in n)if(i=n[m],s=a[m],n.hasOwnProperty(m)&&(i!=null||s!=null))switch(m){case"value":B=i;break;case"defaultValue":L=i;break;case"children":break;case"dangerouslySetInnerHTML":if(i!=null)throw Error(o(91));break;default:i!==s&&Re(e,t,m,i,n,s)}xu(e,B,L);return;case"option":for(var re in a)if(B=a[re],a.hasOwnProperty(re)&&B!=null&&!n.hasOwnProperty(re))switch(re){case"selected":e.selected=!1;break;default:Re(e,t,re,null,n,B)}for(w in n)if(B=n[w],L=a[w],n.hasOwnProperty(w)&&B!==L&&(B!=null||L!=null))switch(w){case"selected":e.selected=B&&typeof B!="function"&&typeof B!="symbol";break;default:Re(e,t,w,B,n,L)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var de in a)B=a[de],a.hasOwnProperty(de)&&B!=null&&!n.hasOwnProperty(de)&&Re(e,t,de,null,n,B);for(A in n)if(B=n[A],L=a[A],n.hasOwnProperty(A)&&B!==L&&(B!=null||L!=null))switch(A){case"children":case"dangerouslySetInnerHTML":if(B!=null)throw Error(o(137,t));break;default:Re(e,t,A,B,n,L)}return;default:if(hs(t)){for(var Ue in a)B=a[Ue],a.hasOwnProperty(Ue)&&B!==void 0&&!n.hasOwnProperty(Ue)&&ec(e,t,Ue,void 0,n,B);for(q in n)B=n[q],L=a[q],!n.hasOwnProperty(q)||B===L||B===void 0&&L===void 0||ec(e,t,q,B,n,L);return}}for(var z in a)B=a[z],a.hasOwnProperty(z)&&B!=null&&!n.hasOwnProperty(z)&&Re(e,t,z,null,n,B);for(V in n)B=n[V],L=a[V],!n.hasOwnProperty(V)||B===L||B==null&&L==null||Re(e,t,V,B,n,L)}var tc=null,ac=null;function dr(e){return e.nodeType===9?e:e.ownerDocument}function hm(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function gm(e,t){if(e===0)switch(t){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&t==="foreignObject"?0:e}function nc(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.children=="bigint"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var lc=null;function G1(){var e=window.event;return e&&e.type==="popstate"?e===lc?!1:(lc=e,!0):(lc=null,!1)}var vm=typeof setTimeout=="function"?setTimeout:void 0,X1=typeof clearTimeout=="function"?clearTimeout:void 0,ym=typeof Promise=="function"?Promise:void 0,V1=typeof queueMicrotask=="function"?queueMicrotask:typeof ym<"u"?function(e){return ym.resolve(null).then(e).catch(Q1)}:vm;function Q1(e){setTimeout(function(){throw e})}function ic(e,t){var a=t,n=0;do{var i=a.nextSibling;if(e.removeChild(a),i&&i.nodeType===8)if(a=i.data,a==="/$"){if(n===0){e.removeChild(i),$l(t);return}n--}else a!=="$"&&a!=="$?"&&a!=="$!"||n++;a=i}while(a);$l(t)}function rc(e){var t=e.firstChild;for(t&&t.nodeType===10&&(t=t.nextSibling);t;){var a=t;switch(t=t.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":rc(a),ds(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}e.removeChild(a)}}function Z1(e,t,a,n){for(;e.nodeType===1;){var i=a;if(e.nodeName.toLowerCase()!==t.toLowerCase()){if(!n&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(n){if(!e[ll])switch(t){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(s=e.getAttribute("rel"),s==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(s!==i.rel||e.getAttribute("href")!==(i.href==null?null:i.href)||e.getAttribute("crossorigin")!==(i.crossOrigin==null?null:i.crossOrigin)||e.getAttribute("title")!==(i.title==null?null:i.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(s=e.getAttribute("src"),(s!==(i.src==null?null:i.src)||e.getAttribute("type")!==(i.type==null?null:i.type)||e.getAttribute("crossorigin")!==(i.crossOrigin==null?null:i.crossOrigin))&&s&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(t==="input"&&e.type==="hidden"){var s=i.name==null?null:""+i.name;if(i.type==="hidden"&&e.getAttribute("name")===s)return e}else return e;if(e=kt(e.nextSibling),e===null)break}return null}function K1(e,t,a){if(t==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!a||(e=kt(e.nextSibling),e===null))return null;return e}function kt(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?"||t==="F!"||t==="F")break;if(t==="/$")return null}}return e}function bm(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var a=e.data;if(a==="$"||a==="$!"||a==="$?"){if(t===0)return e;t--}else a==="/$"&&t++}e=e.previousSibling}return null}function xm(e,t,a){switch(t=dr(a),e){case"html":if(e=t.documentElement,!e)throw Error(o(452));return e;case"head":if(e=t.head,!e)throw Error(o(453));return e;case"body":if(e=t.body,!e)throw Error(o(454));return e;default:throw Error(o(451))}}var Ct=new Map,wm=new Set;function mr(e){return typeof e.getRootNode=="function"?e.getRootNode():e.ownerDocument}var ua=I.d;I.d={f:J1,r:$1,D:W1,C:P1,L:I1,m:eg,X:ag,S:tg,M:ng};function J1(){var e=ua.f(),t=ir();return e||t}function $1(e){var t=gn(e);t!==null&&t.tag===5&&t.type==="form"?Kf(t):ua.r(e)}var Zn=typeof document>"u"?null:document;function Sm(e,t,a){var n=Zn;if(n&&typeof t=="string"&&t){var i=wt(t);i='link[rel="'+e+'"][href="'+i+'"]',typeof a=="string"&&(i+='[crossorigin="'+a+'"]'),wm.has(i)||(wm.add(i),e={rel:e,crossOrigin:a,href:t},n.querySelector(i)===null&&(t=n.createElement("link"),Ie(t,"link",e),Ze(t),n.head.appendChild(t)))}}function W1(e){ua.D(e),Sm("dns-prefetch",e,null)}function P1(e,t){ua.C(e,t),Sm("preconnect",e,t)}function I1(e,t,a){ua.L(e,t,a);var n=Zn;if(n&&e&&t){var i='link[rel="preload"][as="'+wt(t)+'"]';t==="image"&&a&&a.imageSrcSet?(i+='[imagesrcset="'+wt(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(i+='[imagesizes="'+wt(a.imageSizes)+'"]')):i+='[href="'+wt(e)+'"]';var s=i;switch(t){case"style":s=Kn(e);break;case"script":s=Jn(e)}Ct.has(s)||(e=Z({rel:"preload",href:t==="image"&&a&&a.imageSrcSet?void 0:e,as:t},a),Ct.set(s,e),n.querySelector(i)!==null||t==="style"&&n.querySelector(Gl(s))||t==="script"&&n.querySelector(Xl(s))||(t=n.createElement("link"),Ie(t,"link",e),Ze(t),n.head.appendChild(t)))}}function eg(e,t){ua.m(e,t);var a=Zn;if(a&&e){var n=t&&typeof t.as=="string"?t.as:"script",i='link[rel="modulepreload"][as="'+wt(n)+'"][href="'+wt(e)+'"]',s=i;switch(n){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":s=Jn(e)}if(!Ct.has(s)&&(e=Z({rel:"modulepreload",href:e},t),Ct.set(s,e),a.querySelector(i)===null)){switch(n){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(Xl(s)))return}n=a.createElement("link"),Ie(n,"link",e),Ze(n),a.head.appendChild(n)}}}function tg(e,t,a){ua.S(e,t,a);var n=Zn;if(n&&e){var i=vn(n).hoistableStyles,s=Kn(e);t=t||"default";var m=i.get(s);if(!m){var y={loading:0,preload:null};if(m=n.querySelector(Gl(s)))y.loading=5;else{e=Z({rel:"stylesheet",href:e,"data-precedence":t},a),(a=Ct.get(s))&&sc(e,a);var w=m=n.createElement("link");Ze(w),Ie(w,"link",e),w._p=new Promise(function(A,q){w.onload=A,w.onerror=q}),w.addEventListener("load",function(){y.loading|=1}),w.addEventListener("error",function(){y.loading|=2}),y.loading|=4,pr(m,t,n)}m={type:"stylesheet",instance:m,count:1,state:y},i.set(s,m)}}}function ag(e,t){ua.X(e,t);var a=Zn;if(a&&e){var n=vn(a).hoistableScripts,i=Jn(e),s=n.get(i);s||(s=a.querySelector(Xl(i)),s||(e=Z({src:e,async:!0},t),(t=Ct.get(i))&&oc(e,t),s=a.createElement("script"),Ze(s),Ie(s,"link",e),a.head.appendChild(s)),s={type:"script",instance:s,count:1,state:null},n.set(i,s))}}function ng(e,t){ua.M(e,t);var a=Zn;if(a&&e){var n=vn(a).hoistableScripts,i=Jn(e),s=n.get(i);s||(s=a.querySelector(Xl(i)),s||(e=Z({src:e,async:!0,type:"module"},t),(t=Ct.get(i))&&oc(e,t),s=a.createElement("script"),Ze(s),Ie(s,"link",e),a.head.appendChild(s)),s={type:"script",instance:s,count:1,state:null},n.set(i,s))}}function Em(e,t,a,n){var i=(i=pa.current)?mr(i):null;if(!i)throw Error(o(446));switch(e){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(t=Kn(a.href),a=vn(i).hoistableStyles,n=a.get(t),n||(n={type:"style",instance:null,count:0,state:null},a.set(t,n)),n):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){e=Kn(a.href);var s=vn(i).hoistableStyles,m=s.get(e);if(m||(i=i.ownerDocument||i,m={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},s.set(e,m),(s=i.querySelector(Gl(e)))&&!s._p&&(m.instance=s,m.state.loading=5),Ct.has(e)||(a={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},Ct.set(e,a),s||lg(i,e,a,m.state))),t&&n===null)throw Error(o(528,""));return m}if(t&&n!==null)throw Error(o(529,""));return null;case"script":return t=a.async,a=a.src,typeof a=="string"&&t&&typeof t!="function"&&typeof t!="symbol"?(t=Jn(a),a=vn(i).hoistableScripts,n=a.get(t),n||(n={type:"script",instance:null,count:0,state:null},a.set(t,n)),n):{type:"void",instance:null,count:0,state:null};default:throw Error(o(444,e))}}function Kn(e){return'href="'+wt(e)+'"'}function Gl(e){return'link[rel="stylesheet"]['+e+"]"}function jm(e){return Z({},e,{"data-precedence":e.precedence,precedence:null})}function lg(e,t,a,n){e.querySelector('link[rel="preload"][as="style"]['+t+"]")?n.loading=1:(t=e.createElement("link"),n.preload=t,t.addEventListener("load",function(){return n.loading|=1}),t.addEventListener("error",function(){return n.loading|=2}),Ie(t,"link",a),Ze(t),e.head.appendChild(t))}function Jn(e){return'[src="'+wt(e)+'"]'}function Xl(e){return"script[async]"+e}function Tm(e,t,a){if(t.count++,t.instance===null)switch(t.type){case"style":var n=e.querySelector('style[data-href~="'+wt(a.href)+'"]');if(n)return t.instance=n,Ze(n),n;var i=Z({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return n=(e.ownerDocument||e).createElement("style"),Ze(n),Ie(n,"style",i),pr(n,a.precedence,e),t.instance=n;case"stylesheet":i=Kn(a.href);var s=e.querySelector(Gl(i));if(s)return t.state.loading|=4,t.instance=s,Ze(s),s;n=jm(a),(i=Ct.get(i))&&sc(n,i),s=(e.ownerDocument||e).createElement("link"),Ze(s);var m=s;return m._p=new Promise(function(y,w){m.onload=y,m.onerror=w}),Ie(s,"link",n),t.state.loading|=4,pr(s,a.precedence,e),t.instance=s;case"script":return s=Jn(a.src),(i=e.querySelector(Xl(s)))?(t.instance=i,Ze(i),i):(n=a,(i=Ct.get(s))&&(n=Z({},a),oc(n,i)),e=e.ownerDocument||e,i=e.createElement("script"),Ze(i),Ie(i,"link",n),e.head.appendChild(i),t.instance=i);case"void":return null;default:throw Error(o(443,t.type))}else t.type==="stylesheet"&&(t.state.loading&4)===0&&(n=t.instance,t.state.loading|=4,pr(n,a.precedence,e));return t.instance}function pr(e,t,a){for(var n=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),i=n.length?n[n.length-1]:null,s=i,m=0;m<n.length;m++){var y=n[m];if(y.dataset.precedence===t)s=y;else if(s!==i)break}s?s.parentNode.insertBefore(e,s.nextSibling):(t=a.nodeType===9?a.head:a,t.insertBefore(e,t.firstChild))}function sc(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.title==null&&(e.title=t.title)}function oc(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.integrity==null&&(e.integrity=t.integrity)}var hr=null;function Om(e,t,a){if(hr===null){var n=new Map,i=hr=new Map;i.set(a,n)}else i=hr,n=i.get(a),n||(n=new Map,i.set(a,n));if(n.has(e))return n;for(n.set(e,null),a=a.getElementsByTagName(e),i=0;i<a.length;i++){var s=a[i];if(!(s[ll]||s[at]||e==="link"&&s.getAttribute("rel")==="stylesheet")&&s.namespaceURI!=="http://www.w3.org/2000/svg"){var m=s.getAttribute(t)||"";m=e+m;var y=n.get(m);y?y.push(s):n.set(m,[s])}}return n}function Nm(e,t,a){e=e.ownerDocument||e,e.head.insertBefore(a,t==="title"?e.querySelector("head > title"):null)}function ig(e,t,a){if(a===1||t.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof t.precedence!="string"||typeof t.href!="string"||t.href==="")break;return!0;case"link":if(typeof t.rel!="string"||typeof t.href!="string"||t.href===""||t.onLoad||t.onError)break;switch(t.rel){case"stylesheet":return e=t.disabled,typeof t.precedence=="string"&&e==null;default:return!0}case"script":if(t.async&&typeof t.async!="function"&&typeof t.async!="symbol"&&!t.onLoad&&!t.onError&&t.src&&typeof t.src=="string")return!0}return!1}function Rm(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}var Vl=null;function rg(){}function sg(e,t,a){if(Vl===null)throw Error(o(475));var n=Vl;if(t.type==="stylesheet"&&(typeof a.media!="string"||matchMedia(a.media).matches!==!1)&&(t.state.loading&4)===0){if(t.instance===null){var i=Kn(a.href),s=e.querySelector(Gl(i));if(s){e=s._p,e!==null&&typeof e=="object"&&typeof e.then=="function"&&(n.count++,n=gr.bind(n),e.then(n,n)),t.state.loading|=4,t.instance=s,Ze(s);return}s=e.ownerDocument||e,a=jm(a),(i=Ct.get(i))&&sc(a,i),s=s.createElement("link"),Ze(s);var m=s;m._p=new Promise(function(y,w){m.onload=y,m.onerror=w}),Ie(s,"link",a),t.instance=s}n.stylesheets===null&&(n.stylesheets=new Map),n.stylesheets.set(t,e),(e=t.state.preload)&&(t.state.loading&3)===0&&(n.count++,t=gr.bind(n),e.addEventListener("load",t),e.addEventListener("error",t))}}function og(){if(Vl===null)throw Error(o(475));var e=Vl;return e.stylesheets&&e.count===0&&cc(e,e.stylesheets),0<e.count?function(t){var a=setTimeout(function(){if(e.stylesheets&&cc(e,e.stylesheets),e.unsuspend){var n=e.unsuspend;e.unsuspend=null,n()}},6e4);return e.unsuspend=t,function(){e.unsuspend=null,clearTimeout(a)}}:null}function gr(){if(this.count--,this.count===0){if(this.stylesheets)cc(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var vr=null;function cc(e,t){e.stylesheets=null,e.unsuspend!==null&&(e.count++,vr=new Map,t.forEach(cg,e),vr=null,gr.call(e))}function cg(e,t){if(!(t.state.loading&4)){var a=vr.get(e);if(a)var n=a.get(null);else{a=new Map,vr.set(e,a);for(var i=e.querySelectorAll("link[data-precedence],style[data-precedence]"),s=0;s<i.length;s++){var m=i[s];(m.nodeName==="LINK"||m.getAttribute("media")!=="not all")&&(a.set(m.dataset.precedence,m),n=m)}n&&a.set(null,n)}i=t.instance,m=i.getAttribute("data-precedence"),s=a.get(m)||n,s===n&&a.set(null,i),a.set(m,i),this.count++,n=gr.bind(this),i.addEventListener("load",n),i.addEventListener("error",n),s?s.parentNode.insertBefore(i,s.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(i,e.firstChild)),t.state.loading|=4}}var Ql={$$typeof:j,Provider:null,Consumer:null,_currentValue:pe,_currentValue2:pe,_threadCount:0};function ug(e,t,a,n,i,s,m,y){this.tag=1,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=us(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.finishedLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=us(0),this.hiddenUpdates=us(null),this.identifierPrefix=n,this.onUncaughtError=i,this.onCaughtError=s,this.onRecoverableError=m,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=y,this.incompleteTransitions=new Map}function Am(e,t,a,n,i,s,m,y,w,A,q,V){return e=new ug(e,t,a,m,y,w,A,V),t=1,s===!0&&(t|=24),s=At(3,null,null,t),e.current=s,s.stateNode=e,t=qs(),t.refCount++,e.pooledCache=t,t.refCount++,s.memoizedState={element:n,isDehydrated:a,cache:t},wo(s),e}function _m(e){return e?(e=Nn,e):Nn}function Cm(e,t,a,n,i,s){i=_m(i),n.context===null?n.context=i:n.pendingContext=i,n=Ta(t),n.payload={element:a},s=s===void 0?null:s,s!==null&&(n.callback=s),a=Oa(e,n,t),a!==null&&(st(a,e,t),Al(a,e,t))}function zm(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var a=e.retryLane;e.retryLane=a!==0&&a<t?a:t}}function uc(e,t){zm(e,t),(e=e.alternate)&&zm(e,t)}function Dm(e){if(e.tag===13){var t=ya(e,67108864);t!==null&&st(t,e,67108864),uc(e,67108864)}}var yr=!0;function fg(e,t,a,n){var i=Y.T;Y.T=null;var s=I.p;try{I.p=2,fc(e,t,a,n)}finally{I.p=s,Y.T=i}}function dg(e,t,a,n){var i=Y.T;Y.T=null;var s=I.p;try{I.p=8,fc(e,t,a,n)}finally{I.p=s,Y.T=i}}function fc(e,t,a,n){if(yr){var i=dc(n);if(i===null)Io(e,t,n,br,a),km(e,n);else if(pg(i,e,t,a,n))n.stopPropagation();else if(km(e,n),t&4&&-1<mg.indexOf(e)){for(;i!==null;){var s=gn(i);if(s!==null)switch(s.tag){case 3:if(s=s.stateNode,s.current.memoizedState.isDehydrated){var m=qa(s.pendingLanes);if(m!==0){var y=s;for(y.pendingLanes|=2,y.entangledLanes|=2;m;){var w=1<<31-pt(m);y.entanglements[1]|=w,m&=~w}Gt(s),(ke&6)===0&&(ar=Lt()+500,ql(0))}}break;case 13:y=ya(s,2),y!==null&&st(y,s,2),ir(),uc(s,2)}if(s=dc(n),s===null&&Io(e,t,n,br,a),s===i)break;i=s}i!==null&&n.stopPropagation()}else Io(e,t,n,null,a)}}function dc(e){return e=vs(e),mc(e)}var br=null;function mc(e){if(br=null,e=Fa(e),e!==null){var t=te(e);if(t===null)e=null;else{var a=t.tag;if(a===13){if(e=be(t),e!==null)return e;e=null}else if(a===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null)}}return br=e,null}function Mm(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(Pp()){case nu:return 2;case lu:return 8;case pi:case Ip:return 32;case iu:return 268435456;default:return 32}default:return 32}}var pc=!1,Da=null,Ma=null,ka=null,Zl=new Map,Kl=new Map,Ba=[],mg="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function km(e,t){switch(e){case"focusin":case"focusout":Da=null;break;case"dragenter":case"dragleave":Ma=null;break;case"mouseover":case"mouseout":ka=null;break;case"pointerover":case"pointerout":Zl.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Kl.delete(t.pointerId)}}function Jl(e,t,a,n,i,s){return e===null||e.nativeEvent!==s?(e={blockedOn:t,domEventName:a,eventSystemFlags:n,nativeEvent:s,targetContainers:[i]},t!==null&&(t=gn(t),t!==null&&Dm(t)),e):(e.eventSystemFlags|=n,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function pg(e,t,a,n,i){switch(t){case"focusin":return Da=Jl(Da,e,t,a,n,i),!0;case"dragenter":return Ma=Jl(Ma,e,t,a,n,i),!0;case"mouseover":return ka=Jl(ka,e,t,a,n,i),!0;case"pointerover":var s=i.pointerId;return Zl.set(s,Jl(Zl.get(s)||null,e,t,a,n,i)),!0;case"gotpointercapture":return s=i.pointerId,Kl.set(s,Jl(Kl.get(s)||null,e,t,a,n,i)),!0}return!1}function Bm(e){var t=Fa(e.target);if(t!==null){var a=te(t);if(a!==null){if(t=a.tag,t===13){if(t=be(a),t!==null){e.blockedOn=t,oh(e.priority,function(){if(a.tag===13){var n=bt(),i=ya(a,n);i!==null&&st(i,a,n),uc(a,n)}});return}}else if(t===3&&a.stateNode.current.memoizedState.isDehydrated){e.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}e.blockedOn=null}function xr(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var a=dc(e.nativeEvent);if(a===null){a=e.nativeEvent;var n=new a.constructor(a.type,a);gs=n,a.target.dispatchEvent(n),gs=null}else return t=gn(a),t!==null&&Dm(t),e.blockedOn=a,!1;t.shift()}return!0}function Hm(e,t,a){xr(e)&&a.delete(t)}function hg(){pc=!1,Da!==null&&xr(Da)&&(Da=null),Ma!==null&&xr(Ma)&&(Ma=null),ka!==null&&xr(ka)&&(ka=null),Zl.forEach(Hm),Kl.forEach(Hm)}function wr(e,t){e.blockedOn===t&&(e.blockedOn=null,pc||(pc=!0,l.unstable_scheduleCallback(l.unstable_NormalPriority,hg)))}var Sr=null;function Lm(e){Sr!==e&&(Sr=e,l.unstable_scheduleCallback(l.unstable_NormalPriority,function(){Sr===e&&(Sr=null);for(var t=0;t<e.length;t+=3){var a=e[t],n=e[t+1],i=e[t+2];if(typeof n!="function"){if(mc(n||a)===null)continue;break}var s=gn(a);s!==null&&(e.splice(t,3),t-=3,ao(s,{pending:!0,data:i,method:a.method,action:n},n,i))}}))}function $l(e){function t(w){return wr(w,e)}Da!==null&&wr(Da,e),Ma!==null&&wr(Ma,e),ka!==null&&wr(ka,e),Zl.forEach(t),Kl.forEach(t);for(var a=0;a<Ba.length;a++){var n=Ba[a];n.blockedOn===e&&(n.blockedOn=null)}for(;0<Ba.length&&(a=Ba[0],a.blockedOn===null);)Bm(a),a.blockedOn===null&&Ba.shift();if(a=(e.ownerDocument||e).$$reactFormReplay,a!=null)for(n=0;n<a.length;n+=3){var i=a[n],s=a[n+1],m=i[ot]||null;if(typeof s=="function")m||Lm(a);else if(m){var y=null;if(s&&s.hasAttribute("formAction")){if(i=s,m=s[ot]||null)y=m.formAction;else if(mc(i)!==null)continue}else y=m.action;typeof y=="function"?a[n+1]=y:(a.splice(n,3),n-=3),Lm(a)}}}function hc(e){this._internalRoot=e}Er.prototype.render=hc.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(o(409));var a=t.current,n=bt();Cm(a,n,e,t,null,null)},Er.prototype.unmount=hc.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;e.tag===0&&Xn(),Cm(e.current,2,null,e,null,null),ir(),t[hn]=null}};function Er(e){this._internalRoot=e}Er.prototype.unstable_scheduleHydration=function(e){if(e){var t=fu();e={blockedOn:null,target:e,priority:t};for(var a=0;a<Ba.length&&t!==0&&t<Ba[a].priority;a++);Ba.splice(a,0,e),a===0&&Bm(e)}};var Um=r.version;if(Um!=="19.0.0")throw Error(o(527,Um,"19.0.0"));I.findDOMNode=function(e){var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(o(188)):(e=Object.keys(e).join(","),Error(o(268,e)));return e=G(t),e=e!==null?ae(e):null,e=e===null?null:e.stateNode,e};var gg={bundleType:0,version:"19.0.0",rendererPackageName:"react-dom",currentDispatcherRef:Y,findFiberByHostInstance:Fa,reconcilerVersion:"19.0.0"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var jr=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!jr.isDisabled&&jr.supportsFiber)try{tl=jr.inject(gg),mt=jr}catch{}}return Pl.createRoot=function(e,t){if(!u(e))throw Error(o(299));var a=!1,n="",i=ad,s=nd,m=ld,y=null;return t!=null&&(t.unstable_strictMode===!0&&(a=!0),t.identifierPrefix!==void 0&&(n=t.identifierPrefix),t.onUncaughtError!==void 0&&(i=t.onUncaughtError),t.onCaughtError!==void 0&&(s=t.onCaughtError),t.onRecoverableError!==void 0&&(m=t.onRecoverableError),t.unstable_transitionCallbacks!==void 0&&(y=t.unstable_transitionCallbacks)),t=Am(e,1,!1,null,null,a,n,i,s,m,y,null),e[hn]=t.current,Po(e.nodeType===8?e.parentNode:e),new hc(t)},Pl.hydrateRoot=function(e,t,a){if(!u(e))throw Error(o(299));var n=!1,i="",s=ad,m=nd,y=ld,w=null,A=null;return a!=null&&(a.unstable_strictMode===!0&&(n=!0),a.identifierPrefix!==void 0&&(i=a.identifierPrefix),a.onUncaughtError!==void 0&&(s=a.onUncaughtError),a.onCaughtError!==void 0&&(m=a.onCaughtError),a.onRecoverableError!==void 0&&(y=a.onRecoverableError),a.unstable_transitionCallbacks!==void 0&&(w=a.unstable_transitionCallbacks),a.formState!==void 0&&(A=a.formState)),t=Am(e,1,!0,t,a??null,n,i,s,m,y,w,A),t.context=_m(null),a=t.current,n=bt(),i=Ta(n),i.callback=null,Oa(a,i,n),t.current.lanes=n,nl(t,n),Gt(t),e[hn]=t.current,Po(e),new Er(t)},Pl.version="19.0.0",Pl}var Jm;function Tg(){if(Jm)return yc.exports;Jm=1;function l(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(l)}catch(r){console.error(r)}}return l(),yc.exports=jg(),yc.exports}var Og=Tg();const Ng=G0(Og);/**
 * react-router v7.9.5
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */var $m="popstate";function Rg(l={}){function r(o,u){let{pathname:d,search:p,hash:v}=o.location;return Dc("",{pathname:d,search:p,hash:v},u.state&&u.state.usr||null,u.state&&u.state.key||"default")}function c(o,u){return typeof u=="string"?u:ai(u)}return _g(r,c,null,l)}function Be(l,r){if(l===!1||l===null||typeof l>"u")throw new Error(r)}function Vt(l,r){if(!l){typeof console<"u"&&console.warn(r);try{throw new Error(r)}catch{}}}function Ag(){return Math.random().toString(36).substring(2,10)}function Wm(l,r){return{usr:l.state,key:l.key,idx:r}}function Dc(l,r,c=null,o){return{pathname:typeof l=="string"?l:l.pathname,search:"",hash:"",...typeof r=="string"?Wn(r):r,state:c,key:r&&r.key||o||Ag()}}function ai({pathname:l="/",search:r="",hash:c=""}){return r&&r!=="?"&&(l+=r.charAt(0)==="?"?r:"?"+r),c&&c!=="#"&&(l+=c.charAt(0)==="#"?c:"#"+c),l}function Wn(l){let r={};if(l){let c=l.indexOf("#");c>=0&&(r.hash=l.substring(c),l=l.substring(0,c));let o=l.indexOf("?");o>=0&&(r.search=l.substring(o),l=l.substring(0,o)),l&&(r.pathname=l)}return r}function _g(l,r,c,o={}){let{window:u=document.defaultView,v5Compat:d=!1}=o,p=u.history,v="POP",g=null,h=b();h==null&&(h=0,p.replaceState({...p.state,idx:h},""));function b(){return(p.state||{idx:null}).idx}function S(){v="POP";let E=b(),_=E==null?null:E-h;h=E,g&&g({action:v,location:T.location,delta:_})}function N(E,_){v="PUSH";let M=Dc(T.location,E,_);h=b()+1;let C=Wm(M,h),Q=T.createHref(M);try{p.pushState(C,"",Q)}catch(X){if(X instanceof DOMException&&X.name==="DataCloneError")throw X;u.location.assign(Q)}d&&g&&g({action:v,location:T.location,delta:1})}function j(E,_){v="REPLACE";let M=Dc(T.location,E,_);h=b();let C=Wm(M,h),Q=T.createHref(M);p.replaceState(C,"",Q),d&&g&&g({action:v,location:T.location,delta:0})}function x(E){return Cg(E)}let T={get action(){return v},get location(){return l(u,p)},listen(E){if(g)throw new Error("A history only accepts one active listener");return u.addEventListener($m,S),g=E,()=>{u.removeEventListener($m,S),g=null}},createHref(E){return r(u,E)},createURL:x,encodeLocation(E){let _=x(E);return{pathname:_.pathname,search:_.search,hash:_.hash}},push:N,replace:j,go(E){return p.go(E)}};return T}function Cg(l,r=!1){let c="http://localhost";typeof window<"u"&&(c=window.location.origin!=="null"?window.location.origin:window.location.href),Be(c,"No window.location.(origin|href) available to create URL");let o=typeof l=="string"?l:ai(l);return o=o.replace(/ $/,"%20"),!r&&o.startsWith("//")&&(o=c+o),new URL(o,c)}function X0(l,r,c="/"){return zg(l,r,c,!1)}function zg(l,r,c,o){let u=typeof r=="string"?Wn(r):r,d=da(u.pathname||"/",c);if(d==null)return null;let p=V0(l);Dg(p);let v=null;for(let g=0;v==null&&g<p.length;++g){let h=Xg(d);v=Yg(p[g],h,o)}return v}function V0(l,r=[],c=[],o="",u=!1){let d=(p,v,g=u,h)=>{let b={relativePath:h===void 0?p.path||"":h,caseSensitive:p.caseSensitive===!0,childrenIndex:v,route:p};if(b.relativePath.startsWith("/")){if(!b.relativePath.startsWith(o)&&g)return;Be(b.relativePath.startsWith(o),`Absolute route path "${b.relativePath}" nested under path "${o}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),b.relativePath=b.relativePath.slice(o.length)}let S=fa([o,b.relativePath]),N=c.concat(b);p.children&&p.children.length>0&&(Be(p.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${S}".`),V0(p.children,r,N,S,g)),!(p.path==null&&!p.index)&&r.push({path:S,score:qg(S,p.index),routesMeta:N})};return l.forEach((p,v)=>{var g;if(p.path===""||!((g=p.path)!=null&&g.includes("?")))d(p,v);else for(let h of Q0(p.path))d(p,v,!0,h)}),r}function Q0(l){let r=l.split("/");if(r.length===0)return[];let[c,...o]=r,u=c.endsWith("?"),d=c.replace(/\?$/,"");if(o.length===0)return u?[d,""]:[d];let p=Q0(o.join("/")),v=[];return v.push(...p.map(g=>g===""?d:[d,g].join("/"))),u&&v.push(...p),v.map(g=>l.startsWith("/")&&g===""?"/":g)}function Dg(l){l.sort((r,c)=>r.score!==c.score?c.score-r.score:Fg(r.routesMeta.map(o=>o.childrenIndex),c.routesMeta.map(o=>o.childrenIndex)))}var Mg=/^:[\w-]+$/,kg=3,Bg=2,Hg=1,Lg=10,Ug=-2,Pm=l=>l==="*";function qg(l,r){let c=l.split("/"),o=c.length;return c.some(Pm)&&(o+=Ug),r&&(o+=Bg),c.filter(u=>!Pm(u)).reduce((u,d)=>u+(Mg.test(d)?kg:d===""?Hg:Lg),o)}function Fg(l,r){return l.length===r.length&&l.slice(0,-1).every((o,u)=>o===r[u])?l[l.length-1]-r[r.length-1]:0}function Yg(l,r,c=!1){let{routesMeta:o}=l,u={},d="/",p=[];for(let v=0;v<o.length;++v){let g=o[v],h=v===o.length-1,b=d==="/"?r:r.slice(d.length)||"/",S=Qr({path:g.relativePath,caseSensitive:g.caseSensitive,end:h},b),N=g.route;if(!S&&h&&c&&!o[o.length-1].route.index&&(S=Qr({path:g.relativePath,caseSensitive:g.caseSensitive,end:!1},b)),!S)return null;Object.assign(u,S.params),p.push({params:u,pathname:fa([d,S.pathname]),pathnameBase:Kg(fa([d,S.pathnameBase])),route:N}),S.pathnameBase!=="/"&&(d=fa([d,S.pathnameBase]))}return p}function Qr(l,r){typeof l=="string"&&(l={path:l,caseSensitive:!1,end:!0});let[c,o]=Gg(l.path,l.caseSensitive,l.end),u=r.match(c);if(!u)return null;let d=u[0],p=d.replace(/(.)\/+$/,"$1"),v=u.slice(1);return{params:o.reduce((h,{paramName:b,isOptional:S},N)=>{if(b==="*"){let x=v[N]||"";p=d.slice(0,d.length-x.length).replace(/(.)\/+$/,"$1")}const j=v[N];return S&&!j?h[b]=void 0:h[b]=(j||"").replace(/%2F/g,"/"),h},{}),pathname:d,pathnameBase:p,pattern:l}}function Gg(l,r=!1,c=!0){Vt(l==="*"||!l.endsWith("*")||l.endsWith("/*"),`Route path "${l}" will be treated as if it were "${l.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${l.replace(/\*$/,"/*")}".`);let o=[],u="^"+l.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(p,v,g)=>(o.push({paramName:v,isOptional:g!=null}),g?"/?([^\\/]+)?":"/([^\\/]+)")).replace(/\/([\w-]+)\?(\/|$)/g,"(/$1)?$2");return l.endsWith("*")?(o.push({paramName:"*"}),u+=l==="*"||l==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):c?u+="\\/*$":l!==""&&l!=="/"&&(u+="(?:(?=\\/|$))"),[new RegExp(u,r?void 0:"i"),o]}function Xg(l){try{return l.split("/").map(r=>decodeURIComponent(r).replace(/\//g,"%2F")).join("/")}catch(r){return Vt(!1,`The URL path "${l}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${r}).`),l}}function da(l,r){if(r==="/")return l;if(!l.toLowerCase().startsWith(r.toLowerCase()))return null;let c=r.endsWith("/")?r.length-1:r.length,o=l.charAt(c);return o&&o!=="/"?null:l.slice(c)||"/"}function Vg(l,r="/"){let{pathname:c,search:o="",hash:u=""}=typeof l=="string"?Wn(l):l;return{pathname:c?c.startsWith("/")?c:Qg(c,r):r,search:Jg(o),hash:$g(u)}}function Qg(l,r){let c=r.replace(/\/+$/,"").split("/");return l.split("/").forEach(u=>{u===".."?c.length>1&&c.pop():u!=="."&&c.push(u)}),c.length>1?c.join("/"):"/"}function Sc(l,r,c,o){return`Cannot include a '${l}' character in a manually specified \`to.${r}\` field [${JSON.stringify(o)}].  Please separate it out to the \`to.${c}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function Zg(l){return l.filter((r,c)=>c===0||r.route.path&&r.route.path.length>0)}function Z0(l){let r=Zg(l);return r.map((c,o)=>o===r.length-1?c.pathname:c.pathnameBase)}function K0(l,r,c,o=!1){let u;typeof l=="string"?u=Wn(l):(u={...l},Be(!u.pathname||!u.pathname.includes("?"),Sc("?","pathname","search",u)),Be(!u.pathname||!u.pathname.includes("#"),Sc("#","pathname","hash",u)),Be(!u.search||!u.search.includes("#"),Sc("#","search","hash",u)));let d=l===""||u.pathname==="",p=d?"/":u.pathname,v;if(p==null)v=c;else{let S=r.length-1;if(!o&&p.startsWith("..")){let N=p.split("/");for(;N[0]==="..";)N.shift(),S-=1;u.pathname=N.join("/")}v=S>=0?r[S]:"/"}let g=Vg(u,v),h=p&&p!=="/"&&p.endsWith("/"),b=(d||p===".")&&c.endsWith("/");return!g.pathname.endsWith("/")&&(h||b)&&(g.pathname+="/"),g}var fa=l=>l.join("/").replace(/\/\/+/g,"/"),Kg=l=>l.replace(/\/+$/,"").replace(/^\/*/,"/"),Jg=l=>!l||l==="?"?"":l.startsWith("?")?l:"?"+l,$g=l=>!l||l==="#"?"":l.startsWith("#")?l:"#"+l;function Wg(l){return l!=null&&typeof l.status=="number"&&typeof l.statusText=="string"&&typeof l.internal=="boolean"&&"data"in l}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");var J0=["POST","PUT","PATCH","DELETE"];new Set(J0);var Pg=["GET",...J0];new Set(Pg);var Pn=D.createContext(null);Pn.displayName="DataRouter";var $r=D.createContext(null);$r.displayName="DataRouterState";D.createContext(!1);var $0=D.createContext({isTransitioning:!1});$0.displayName="ViewTransition";var Ig=D.createContext(new Map);Ig.displayName="Fetchers";var e2=D.createContext(null);e2.displayName="Await";var Qt=D.createContext(null);Qt.displayName="Navigation";var ni=D.createContext(null);ni.displayName="Location";var Zt=D.createContext({outlet:null,matches:[],isDataRoute:!1});Zt.displayName="Route";var Yc=D.createContext(null);Yc.displayName="RouteError";function t2(l,{relative:r}={}){Be(li(),"useHref() may be used only in the context of a <Router> component.");let{basename:c,navigator:o}=D.useContext(Qt),{hash:u,pathname:d,search:p}=ii(l,{relative:r}),v=d;return c!=="/"&&(v=d==="/"?c:fa([c,d])),o.createHref({pathname:v,search:p,hash:u})}function li(){return D.useContext(ni)!=null}function mn(){return Be(li(),"useLocation() may be used only in the context of a <Router> component."),D.useContext(ni).location}var W0="You should call navigate() in a React.useEffect(), not when your component is first rendered.";function P0(l){D.useContext(Qt).static||D.useLayoutEffect(l)}function Gc(){let{isDataRoute:l}=D.useContext(Zt);return l?h2():a2()}function a2(){Be(li(),"useNavigate() may be used only in the context of a <Router> component.");let l=D.useContext(Pn),{basename:r,navigator:c}=D.useContext(Qt),{matches:o}=D.useContext(Zt),{pathname:u}=mn(),d=JSON.stringify(Z0(o)),p=D.useRef(!1);return P0(()=>{p.current=!0}),D.useCallback((g,h={})=>{if(Vt(p.current,W0),!p.current)return;if(typeof g=="number"){c.go(g);return}let b=K0(g,JSON.parse(d),u,h.relative==="path");l==null&&r!=="/"&&(b.pathname=b.pathname==="/"?r:fa([r,b.pathname])),(h.replace?c.replace:c.push)(b,h.state,h)},[r,c,d,u,l])}D.createContext(null);function n2(){let{matches:l}=D.useContext(Zt),r=l[l.length-1];return r?r.params:{}}function ii(l,{relative:r}={}){let{matches:c}=D.useContext(Zt),{pathname:o}=mn(),u=JSON.stringify(Z0(c));return D.useMemo(()=>K0(l,JSON.parse(u),o,r==="path"),[l,u,o,r])}function l2(l,r){return I0(l,r)}function I0(l,r,c,o,u){var M;Be(li(),"useRoutes() may be used only in the context of a <Router> component.");let{navigator:d}=D.useContext(Qt),{matches:p}=D.useContext(Zt),v=p[p.length-1],g=v?v.params:{},h=v?v.pathname:"/",b=v?v.pathnameBase:"/",S=v&&v.route;{let C=S&&S.path||"";ep(h,!S||C.endsWith("*")||C.endsWith("*?"),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${h}" (under <Route path="${C}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${C}"> to <Route path="${C==="/"?"*":`${C}/*`}">.`)}let N=mn(),j;if(r){let C=typeof r=="string"?Wn(r):r;Be(b==="/"||((M=C.pathname)==null?void 0:M.startsWith(b)),`When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${b}" but pathname "${C.pathname}" was given in the \`location\` prop.`),j=C}else j=N;let x=j.pathname||"/",T=x;if(b!=="/"){let C=b.replace(/^\//,"").split("/");T="/"+x.replace(/^\//,"").split("/").slice(C.length).join("/")}let E=X0(l,{pathname:T});Vt(S||E!=null,`No routes matched location "${j.pathname}${j.search}${j.hash}" `),Vt(E==null||E[E.length-1].route.element!==void 0||E[E.length-1].route.Component!==void 0||E[E.length-1].route.lazy!==void 0,`Matched leaf route at location "${j.pathname}${j.search}${j.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);let _=c2(E&&E.map(C=>Object.assign({},C,{params:Object.assign({},g,C.params),pathname:fa([b,d.encodeLocation?d.encodeLocation(C.pathname.replace(/\?/g,"%3F").replace(/#/g,"%23")).pathname:C.pathname]),pathnameBase:C.pathnameBase==="/"?b:fa([b,d.encodeLocation?d.encodeLocation(C.pathnameBase.replace(/\?/g,"%3F").replace(/#/g,"%23")).pathname:C.pathnameBase])})),p,c,o,u);return r&&_?D.createElement(ni.Provider,{value:{location:{pathname:"/",search:"",hash:"",state:null,key:"default",...j},navigationType:"POP"}},_):_}function i2(){let l=p2(),r=Wg(l)?`${l.status} ${l.statusText}`:l instanceof Error?l.message:JSON.stringify(l),c=l instanceof Error?l.stack:null,o="rgba(200,200,200, 0.5)",u={padding:"0.5rem",backgroundColor:o},d={padding:"2px 4px",backgroundColor:o},p=null;return console.error("Error handled by React Router default ErrorBoundary:",l),p=D.createElement(D.Fragment,null,D.createElement("p",null,"💿 Hey developer 👋"),D.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",D.createElement("code",{style:d},"ErrorBoundary")," or"," ",D.createElement("code",{style:d},"errorElement")," prop on your route.")),D.createElement(D.Fragment,null,D.createElement("h2",null,"Unexpected Application Error!"),D.createElement("h3",{style:{fontStyle:"italic"}},r),c?D.createElement("pre",{style:u},c):null,p)}var r2=D.createElement(i2,null),s2=class extends D.Component{constructor(l){super(l),this.state={location:l.location,revalidation:l.revalidation,error:l.error}}static getDerivedStateFromError(l){return{error:l}}static getDerivedStateFromProps(l,r){return r.location!==l.location||r.revalidation!=="idle"&&l.revalidation==="idle"?{error:l.error,location:l.location,revalidation:l.revalidation}:{error:l.error!==void 0?l.error:r.error,location:r.location,revalidation:l.revalidation||r.revalidation}}componentDidCatch(l,r){this.props.unstable_onError?this.props.unstable_onError(l,r):console.error("React Router caught the following error during render",l)}render(){return this.state.error!==void 0?D.createElement(Zt.Provider,{value:this.props.routeContext},D.createElement(Yc.Provider,{value:this.state.error,children:this.props.component})):this.props.children}};function o2({routeContext:l,match:r,children:c}){let o=D.useContext(Pn);return o&&o.static&&o.staticContext&&(r.route.errorElement||r.route.ErrorBoundary)&&(o.staticContext._deepestRenderedBoundaryId=r.route.id),D.createElement(Zt.Provider,{value:l},c)}function c2(l,r=[],c=null,o=null,u=null){if(l==null){if(!c)return null;if(c.errors)l=c.matches;else if(r.length===0&&!c.initialized&&c.matches.length>0)l=c.matches;else return null}let d=l,p=c==null?void 0:c.errors;if(p!=null){let h=d.findIndex(b=>b.route.id&&(p==null?void 0:p[b.route.id])!==void 0);Be(h>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(p).join(",")}`),d=d.slice(0,Math.min(d.length,h+1))}let v=!1,g=-1;if(c)for(let h=0;h<d.length;h++){let b=d[h];if((b.route.HydrateFallback||b.route.hydrateFallbackElement)&&(g=h),b.route.id){let{loaderData:S,errors:N}=c,j=b.route.loader&&!S.hasOwnProperty(b.route.id)&&(!N||N[b.route.id]===void 0);if(b.route.lazy||j){v=!0,g>=0?d=d.slice(0,g+1):d=[d[0]];break}}}return d.reduceRight((h,b,S)=>{let N,j=!1,x=null,T=null;c&&(N=p&&b.route.id?p[b.route.id]:void 0,x=b.route.errorElement||r2,v&&(g<0&&S===0?(ep("route-fallback",!1,"No `HydrateFallback` element provided to render during initial hydration"),j=!0,T=null):g===S&&(j=!0,T=b.route.hydrateFallbackElement||null)));let E=r.concat(d.slice(0,S+1)),_=()=>{let M;return N?M=x:j?M=T:b.route.Component?M=D.createElement(b.route.Component,null):b.route.element?M=b.route.element:M=h,D.createElement(o2,{match:b,routeContext:{outlet:h,matches:E,isDataRoute:c!=null},children:M})};return c&&(b.route.ErrorBoundary||b.route.errorElement||S===0)?D.createElement(s2,{location:c.location,revalidation:c.revalidation,component:x,error:N,children:_(),routeContext:{outlet:null,matches:E,isDataRoute:!0},unstable_onError:o}):_()},null)}function Xc(l){return`${l} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function u2(l){let r=D.useContext(Pn);return Be(r,Xc(l)),r}function f2(l){let r=D.useContext($r);return Be(r,Xc(l)),r}function d2(l){let r=D.useContext(Zt);return Be(r,Xc(l)),r}function Vc(l){let r=d2(l),c=r.matches[r.matches.length-1];return Be(c.route.id,`${l} can only be used on routes that contain a unique "id"`),c.route.id}function m2(){return Vc("useRouteId")}function p2(){var o;let l=D.useContext(Yc),r=f2("useRouteError"),c=Vc("useRouteError");return l!==void 0?l:(o=r.errors)==null?void 0:o[c]}function h2(){let{router:l}=u2("useNavigate"),r=Vc("useNavigate"),c=D.useRef(!1);return P0(()=>{c.current=!0}),D.useCallback(async(u,d={})=>{Vt(c.current,W0),c.current&&(typeof u=="number"?l.navigate(u):await l.navigate(u,{fromRouteId:r,...d}))},[l,r])}var Im={};function ep(l,r,c){!r&&!Im[l]&&(Im[l]=!0,Vt(!1,c))}D.memo(g2);function g2({routes:l,future:r,state:c,unstable_onError:o}){return I0(l,void 0,c,o,r)}function Mc(l){Be(!1,"A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.")}function v2({basename:l="/",children:r=null,location:c,navigationType:o="POP",navigator:u,static:d=!1}){Be(!li(),"You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");let p=l.replace(/^\/*/,"/"),v=D.useMemo(()=>({basename:p,navigator:u,static:d,future:{}}),[p,u,d]);typeof c=="string"&&(c=Wn(c));let{pathname:g="/",search:h="",hash:b="",state:S=null,key:N="default"}=c,j=D.useMemo(()=>{let x=da(g,p);return x==null?null:{location:{pathname:x,search:h,hash:b,state:S,key:N},navigationType:o}},[p,g,h,b,S,N,o]);return Vt(j!=null,`<Router basename="${p}"> is not able to match the URL "${g}${h}${b}" because it does not start with the basename, so the <Router> won't render anything.`),j==null?null:D.createElement(Qt.Provider,{value:v},D.createElement(ni.Provider,{children:r,value:j}))}function y2({children:l,location:r}){return l2(kc(l),r)}function kc(l,r=[]){let c=[];return D.Children.forEach(l,(o,u)=>{if(!D.isValidElement(o))return;let d=[...r,u];if(o.type===D.Fragment){c.push.apply(c,kc(o.props.children,d));return}Be(o.type===Mc,`[${typeof o.type=="string"?o.type:o.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`),Be(!o.props.index||!o.props.children,"An index route cannot have child routes.");let p={id:o.props.id||d.join("-"),caseSensitive:o.props.caseSensitive,element:o.props.element,Component:o.props.Component,index:o.props.index,path:o.props.path,middleware:o.props.middleware,loader:o.props.loader,action:o.props.action,hydrateFallbackElement:o.props.hydrateFallbackElement,HydrateFallback:o.props.HydrateFallback,errorElement:o.props.errorElement,ErrorBoundary:o.props.ErrorBoundary,hasErrorBoundary:o.props.hasErrorBoundary===!0||o.props.ErrorBoundary!=null||o.props.errorElement!=null,shouldRevalidate:o.props.shouldRevalidate,handle:o.props.handle,lazy:o.props.lazy};o.props.children&&(p.children=kc(o.props.children,d)),c.push(p)}),c}var Fr="get",Yr="application/x-www-form-urlencoded";function Wr(l){return l!=null&&typeof l.tagName=="string"}function b2(l){return Wr(l)&&l.tagName.toLowerCase()==="button"}function x2(l){return Wr(l)&&l.tagName.toLowerCase()==="form"}function w2(l){return Wr(l)&&l.tagName.toLowerCase()==="input"}function S2(l){return!!(l.metaKey||l.altKey||l.ctrlKey||l.shiftKey)}function E2(l,r){return l.button===0&&(!r||r==="_self")&&!S2(l)}var Or=null;function j2(){if(Or===null)try{new FormData(document.createElement("form"),0),Or=!1}catch{Or=!0}return Or}var T2=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function Ec(l){return l!=null&&!T2.has(l)?(Vt(!1,`"${l}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${Yr}"`),null):l}function O2(l,r){let c,o,u,d,p;if(x2(l)){let v=l.getAttribute("action");o=v?da(v,r):null,c=l.getAttribute("method")||Fr,u=Ec(l.getAttribute("enctype"))||Yr,d=new FormData(l)}else if(b2(l)||w2(l)&&(l.type==="submit"||l.type==="image")){let v=l.form;if(v==null)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');let g=l.getAttribute("formaction")||v.getAttribute("action");if(o=g?da(g,r):null,c=l.getAttribute("formmethod")||v.getAttribute("method")||Fr,u=Ec(l.getAttribute("formenctype"))||Ec(v.getAttribute("enctype"))||Yr,d=new FormData(v,l),!j2()){let{name:h,type:b,value:S}=l;if(b==="image"){let N=h?`${h}.`:"";d.append(`${N}x`,"0"),d.append(`${N}y`,"0")}else h&&d.append(h,S)}}else{if(Wr(l))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');c=Fr,o=null,u=Yr,p=l}return d&&u==="text/plain"&&(p=d,d=void 0),{action:o,method:c.toLowerCase(),encType:u,formData:d,body:p}}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");function Qc(l,r){if(l===!1||l===null||typeof l>"u")throw new Error(r)}function N2(l,r,c){let o=typeof l=="string"?new URL(l,typeof window>"u"?"server://singlefetch/":window.location.origin):l;return o.pathname==="/"?o.pathname=`_root.${c}`:r&&da(o.pathname,r)==="/"?o.pathname=`${r.replace(/\/$/,"")}/_root.${c}`:o.pathname=`${o.pathname.replace(/\/$/,"")}.${c}`,o}async function R2(l,r){if(l.id in r)return r[l.id];try{let c=await import(l.module);return r[l.id]=c,c}catch(c){return console.error(`Error loading route module \`${l.module}\`, reloading page...`),console.error(c),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function A2(l){return l==null?!1:l.href==null?l.rel==="preload"&&typeof l.imageSrcSet=="string"&&typeof l.imageSizes=="string":typeof l.rel=="string"&&typeof l.href=="string"}async function _2(l,r,c){let o=await Promise.all(l.map(async u=>{let d=r.routes[u.route.id];if(d){let p=await R2(d,c);return p.links?p.links():[]}return[]}));return M2(o.flat(1).filter(A2).filter(u=>u.rel==="stylesheet"||u.rel==="preload").map(u=>u.rel==="stylesheet"?{...u,rel:"prefetch",as:"style"}:{...u,rel:"prefetch"}))}function e0(l,r,c,o,u,d){let p=(g,h)=>c[h]?g.route.id!==c[h].route.id:!0,v=(g,h)=>{var b;return c[h].pathname!==g.pathname||((b=c[h].route.path)==null?void 0:b.endsWith("*"))&&c[h].params["*"]!==g.params["*"]};return d==="assets"?r.filter((g,h)=>p(g,h)||v(g,h)):d==="data"?r.filter((g,h)=>{var S;let b=o.routes[g.route.id];if(!b||!b.hasLoader)return!1;if(p(g,h)||v(g,h))return!0;if(g.route.shouldRevalidate){let N=g.route.shouldRevalidate({currentUrl:new URL(u.pathname+u.search+u.hash,window.origin),currentParams:((S=c[0])==null?void 0:S.params)||{},nextUrl:new URL(l,window.origin),nextParams:g.params,defaultShouldRevalidate:!0});if(typeof N=="boolean")return N}return!0}):[]}function C2(l,r,{includeHydrateFallback:c}={}){return z2(l.map(o=>{let u=r.routes[o.route.id];if(!u)return[];let d=[u.module];return u.clientActionModule&&(d=d.concat(u.clientActionModule)),u.clientLoaderModule&&(d=d.concat(u.clientLoaderModule)),c&&u.hydrateFallbackModule&&(d=d.concat(u.hydrateFallbackModule)),u.imports&&(d=d.concat(u.imports)),d}).flat(1))}function z2(l){return[...new Set(l)]}function D2(l){let r={},c=Object.keys(l).sort();for(let o of c)r[o]=l[o];return r}function M2(l,r){let c=new Set;return new Set(r),l.reduce((o,u)=>{let d=JSON.stringify(D2(u));return c.has(d)||(c.add(d),o.push({key:d,link:u})),o},[])}function tp(){let l=D.useContext(Pn);return Qc(l,"You must render this element inside a <DataRouterContext.Provider> element"),l}function k2(){let l=D.useContext($r);return Qc(l,"You must render this element inside a <DataRouterStateContext.Provider> element"),l}var Zc=D.createContext(void 0);Zc.displayName="FrameworkContext";function ap(){let l=D.useContext(Zc);return Qc(l,"You must render this element inside a <HydratedRouter> element"),l}function B2(l,r){let c=D.useContext(Zc),[o,u]=D.useState(!1),[d,p]=D.useState(!1),{onFocus:v,onBlur:g,onMouseEnter:h,onMouseLeave:b,onTouchStart:S}=r,N=D.useRef(null);D.useEffect(()=>{if(l==="render"&&p(!0),l==="viewport"){let T=_=>{_.forEach(M=>{p(M.isIntersecting)})},E=new IntersectionObserver(T,{threshold:.5});return N.current&&E.observe(N.current),()=>{E.disconnect()}}},[l]),D.useEffect(()=>{if(o){let T=setTimeout(()=>{p(!0)},100);return()=>{clearTimeout(T)}}},[o]);let j=()=>{u(!0)},x=()=>{u(!1),p(!1)};return c?l!=="intent"?[d,N,{}]:[d,N,{onFocus:Il(v,j),onBlur:Il(g,x),onMouseEnter:Il(h,j),onMouseLeave:Il(b,x),onTouchStart:Il(S,j)}]:[!1,N,{}]}function Il(l,r){return c=>{l&&l(c),c.defaultPrevented||r(c)}}function H2({page:l,...r}){let{router:c}=tp(),o=D.useMemo(()=>X0(c.routes,l,c.basename),[c.routes,l,c.basename]);return o?D.createElement(U2,{page:l,matches:o,...r}):null}function L2(l){let{manifest:r,routeModules:c}=ap(),[o,u]=D.useState([]);return D.useEffect(()=>{let d=!1;return _2(l,r,c).then(p=>{d||u(p)}),()=>{d=!0}},[l,r,c]),o}function U2({page:l,matches:r,...c}){let o=mn(),{manifest:u,routeModules:d}=ap(),{basename:p}=tp(),{loaderData:v,matches:g}=k2(),h=D.useMemo(()=>e0(l,r,g,u,o,"data"),[l,r,g,u,o]),b=D.useMemo(()=>e0(l,r,g,u,o,"assets"),[l,r,g,u,o]),S=D.useMemo(()=>{if(l===o.pathname+o.search+o.hash)return[];let x=new Set,T=!1;if(r.forEach(_=>{var C;let M=u.routes[_.route.id];!M||!M.hasLoader||(!h.some(Q=>Q.route.id===_.route.id)&&_.route.id in v&&((C=d[_.route.id])!=null&&C.shouldRevalidate)||M.hasClientLoader?T=!0:x.add(_.route.id))}),x.size===0)return[];let E=N2(l,p,"data");return T&&x.size>0&&E.searchParams.set("_routes",r.filter(_=>x.has(_.route.id)).map(_=>_.route.id).join(",")),[E.pathname+E.search]},[p,v,o,u,h,r,l,d]),N=D.useMemo(()=>C2(b,u),[b,u]),j=L2(b);return D.createElement(D.Fragment,null,S.map(x=>D.createElement("link",{key:x,rel:"prefetch",as:"fetch",href:x,...c})),N.map(x=>D.createElement("link",{key:x,rel:"modulepreload",href:x,...c})),j.map(({key:x,link:T})=>D.createElement("link",{key:x,nonce:c.nonce,...T})))}function q2(...l){return r=>{l.forEach(c=>{typeof c=="function"?c(r):c!=null&&(c.current=r)})}}var np=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";try{np&&(window.__reactRouterVersion="7.9.5")}catch{}function F2({basename:l,children:r,window:c}){let o=D.useRef();o.current==null&&(o.current=Rg({window:c,v5Compat:!0}));let u=o.current,[d,p]=D.useState({action:u.action,location:u.location}),v=D.useCallback(g=>{D.startTransition(()=>p(g))},[p]);return D.useLayoutEffect(()=>u.listen(v),[u,v]),D.createElement(v2,{basename:l,children:r,location:d.location,navigationType:d.action,navigator:u})}var lp=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,ip=D.forwardRef(function({onClick:r,discover:c="render",prefetch:o="none",relative:u,reloadDocument:d,replace:p,state:v,target:g,to:h,preventScrollReset:b,viewTransition:S,...N},j){let{basename:x}=D.useContext(Qt),T=typeof h=="string"&&lp.test(h),E,_=!1;if(typeof h=="string"&&T&&(E=h,np))try{let Y=new URL(window.location.href),Z=h.startsWith("//")?new URL(Y.protocol+h):new URL(h),W=da(Z.pathname,x);Z.origin===Y.origin&&W!=null?h=W+Z.search+Z.hash:_=!0}catch{Vt(!1,`<Link to="${h}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}let M=t2(h,{relative:u}),[C,Q,X]=B2(o,N),$=V2(h,{replace:p,state:v,target:g,preventScrollReset:b,relative:u,viewTransition:S});function J(Y){r&&r(Y),Y.defaultPrevented||$(Y)}let ie=D.createElement("a",{...N,...X,href:E||M,onClick:_||d?r:J,ref:q2(j,Q),target:g,"data-discover":!T&&c==="render"?"true":void 0});return C&&!T?D.createElement(D.Fragment,null,ie,D.createElement(H2,{page:M})):ie});ip.displayName="Link";var Y2=D.forwardRef(function({"aria-current":r="page",caseSensitive:c=!1,className:o="",end:u=!1,style:d,to:p,viewTransition:v,children:g,...h},b){let S=ii(p,{relative:h.relative}),N=mn(),j=D.useContext($r),{navigator:x,basename:T}=D.useContext(Qt),E=j!=null&&$2(S)&&v===!0,_=x.encodeLocation?x.encodeLocation(S).pathname:S.pathname,M=N.pathname,C=j&&j.navigation&&j.navigation.location?j.navigation.location.pathname:null;c||(M=M.toLowerCase(),C=C?C.toLowerCase():null,_=_.toLowerCase()),C&&T&&(C=da(C,T)||C);const Q=_!=="/"&&_.endsWith("/")?_.length-1:_.length;let X=M===_||!u&&M.startsWith(_)&&M.charAt(Q)==="/",$=C!=null&&(C===_||!u&&C.startsWith(_)&&C.charAt(_.length)==="/"),J={isActive:X,isPending:$,isTransitioning:E},ie=X?r:void 0,Y;typeof o=="function"?Y=o(J):Y=[o,X?"active":null,$?"pending":null,E?"transitioning":null].filter(Boolean).join(" ");let Z=typeof d=="function"?d(J):d;return D.createElement(ip,{...h,"aria-current":ie,className:Y,ref:b,style:Z,to:p,viewTransition:v},typeof g=="function"?g(J):g)});Y2.displayName="NavLink";var G2=D.forwardRef(({discover:l="render",fetcherKey:r,navigate:c,reloadDocument:o,replace:u,state:d,method:p=Fr,action:v,onSubmit:g,relative:h,preventScrollReset:b,viewTransition:S,...N},j)=>{let x=K2(),T=J2(v,{relative:h}),E=p.toLowerCase()==="get"?"get":"post",_=typeof v=="string"&&lp.test(v),M=C=>{if(g&&g(C),C.defaultPrevented)return;C.preventDefault();let Q=C.nativeEvent.submitter,X=(Q==null?void 0:Q.getAttribute("formmethod"))||p;x(Q||C.currentTarget,{fetcherKey:r,method:X,navigate:c,replace:u,state:d,relative:h,preventScrollReset:b,viewTransition:S})};return D.createElement("form",{ref:j,method:E,action:T,onSubmit:o?g:M,...N,"data-discover":!_&&l==="render"?"true":void 0})});G2.displayName="Form";function X2(l){return`${l} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function rp(l){let r=D.useContext(Pn);return Be(r,X2(l)),r}function V2(l,{target:r,replace:c,state:o,preventScrollReset:u,relative:d,viewTransition:p}={}){let v=Gc(),g=mn(),h=ii(l,{relative:d});return D.useCallback(b=>{if(E2(b,r)){b.preventDefault();let S=c!==void 0?c:ai(g)===ai(h);v(l,{replace:S,state:o,preventScrollReset:u,relative:d,viewTransition:p})}},[g,v,h,c,o,r,l,u,d,p])}var Q2=0,Z2=()=>`__${String(++Q2)}__`;function K2(){let{router:l}=rp("useSubmit"),{basename:r}=D.useContext(Qt),c=m2();return D.useCallback(async(o,u={})=>{let{action:d,method:p,encType:v,formData:g,body:h}=O2(o,r);if(u.navigate===!1){let b=u.fetcherKey||Z2();await l.fetch(b,c,u.action||d,{preventScrollReset:u.preventScrollReset,formData:g,body:h,formMethod:u.method||p,formEncType:u.encType||v,flushSync:u.flushSync})}else await l.navigate(u.action||d,{preventScrollReset:u.preventScrollReset,formData:g,body:h,formMethod:u.method||p,formEncType:u.encType||v,replace:u.replace,state:u.state,fromRouteId:c,flushSync:u.flushSync,viewTransition:u.viewTransition})},[l,r,c])}function J2(l,{relative:r}={}){let{basename:c}=D.useContext(Qt),o=D.useContext(Zt);Be(o,"useFormAction must be used inside a RouteContext");let[u]=o.matches.slice(-1),d={...ii(l||".",{relative:r})},p=mn();if(l==null){d.search=p.search;let v=new URLSearchParams(d.search),g=v.getAll("index");if(g.some(b=>b==="")){v.delete("index"),g.filter(S=>S).forEach(S=>v.append("index",S));let b=v.toString();d.search=b?`?${b}`:""}}return(!l||l===".")&&u.route.index&&(d.search=d.search?d.search.replace(/^\?/,"?index&"):"?index"),c!=="/"&&(d.pathname=d.pathname==="/"?c:fa([c,d.pathname])),ai(d)}function $2(l,{relative:r}={}){let c=D.useContext($0);Be(c!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:o}=rp("useViewTransitionState"),u=ii(l,{relative:r});if(!c.isTransitioning)return!1;let d=da(c.currentLocation.pathname,o)||c.currentLocation.pathname,p=da(c.nextLocation.pathname,o)||c.nextLocation.pathname;return Qr(u.pathname,p)!=null||Qr(u.pathname,d)!=null}var De={},Nr={},Rr={},Ar={},jc,t0;function W2(){if(t0)return jc;t0=1;var l="Expected a function",r=NaN,c="[object Symbol]",o=/^\s+|\s+$/g,u=/^[-+]0x[0-9a-f]+$/i,d=/^0b[01]+$/i,p=/^0o[0-7]+$/i,v=parseInt,g=typeof Tr=="object"&&Tr&&Tr.Object===Object&&Tr,h=typeof self=="object"&&self&&self.Object===Object&&self,b=g||h||Function("return this")(),S=Object.prototype,N=S.toString,j=Math.max,x=Math.min,T=function(){return b.Date.now()};function E($,J,ie){var Y,Z,W,U,ee,P,Se=0,K=!1,se=!1,te=!0;if(typeof $!="function")throw new TypeError(l);J=X(J)||0,M(ie)&&(K=!!ie.leading,se="maxWait"in ie,W=se?j(X(ie.maxWait)||0,J):W,te="trailing"in ie?!!ie.trailing:te);function be(ce){var Ee=Y,je=Z;return Y=Z=void 0,Se=ce,U=$.apply(je,Ee),U}function O(ce){return Se=ce,ee=setTimeout(ne,J),K?be(ce):U}function G(ce){var Ee=ce-P,je=ce-Se,tt=J-Ee;return se?x(tt,W-je):tt}function ae(ce){var Ee=ce-P,je=ce-Se;return P===void 0||Ee>=J||Ee<0||se&&je>=W}function ne(){var ce=T();if(ae(ce))return I(ce);ee=setTimeout(ne,G(ce))}function I(ce){return ee=void 0,te&&Y?be(ce):(Y=Z=void 0,U)}function pe(){ee!==void 0&&clearTimeout(ee),Se=0,Y=P=Z=ee=void 0}function fe(){return ee===void 0?U:I(T())}function ze(){var ce=T(),Ee=ae(ce);if(Y=arguments,Z=this,P=ce,Ee){if(ee===void 0)return O(P);if(se)return ee=setTimeout(ne,J),be(P)}return ee===void 0&&(ee=setTimeout(ne,J)),U}return ze.cancel=pe,ze.flush=fe,ze}function _($,J,ie){var Y=!0,Z=!0;if(typeof $!="function")throw new TypeError(l);return M(ie)&&(Y="leading"in ie?!!ie.leading:Y,Z="trailing"in ie?!!ie.trailing:Z),E($,J,{leading:Y,maxWait:J,trailing:Z})}function M($){var J=typeof $;return!!$&&(J=="object"||J=="function")}function C($){return!!$&&typeof $=="object"}function Q($){return typeof $=="symbol"||C($)&&N.call($)==c}function X($){if(typeof $=="number")return $;if(Q($))return r;if(M($)){var J=typeof $.valueOf=="function"?$.valueOf():$;$=M(J)?J+"":J}if(typeof $!="string")return $===0?$:+$;$=$.replace(o,"");var ie=d.test($);return ie||p.test($)?v($.slice(2),ie?2:8):u.test($)?r:+$}return jc=_,jc}var ei={},a0;function Kc(){if(a0)return ei;a0=1,Object.defineProperty(ei,"__esModule",{value:!0}),ei.addPassiveEventListener=function(c,o,u){var d=u.name;d||(d=o,console.warn("Listener must be a named function.")),l.has(o)||l.set(o,new Set);var p=l.get(o);if(!p.has(d)){var v=function(){var g=!1;try{var h=Object.defineProperty({},"passive",{get:function(){g=!0}});window.addEventListener("test",null,h)}catch{}return g}();c.addEventListener(o,u,v?{passive:!0}:!1),p.add(d)}},ei.removePassiveEventListener=function(c,o,u){c.removeEventListener(o,u),l.get(o).delete(u.name||o)};var l=new Map;return ei}var n0;function Jc(){if(n0)return Ar;n0=1,Object.defineProperty(Ar,"__esModule",{value:!0});var l=W2(),r=o(l),c=Kc();function o(p){return p&&p.__esModule?p:{default:p}}var u=function(v){var g=arguments.length>1&&arguments[1]!==void 0?arguments[1]:66;return(0,r.default)(v,g)},d={spyCallbacks:[],spySetState:[],scrollSpyContainers:[],mount:function(v,g){if(v){var h=u(function(b){d.scrollHandler(v)},g);return d.scrollSpyContainers.push(v),(0,c.addPassiveEventListener)(v,"scroll",h),function(){(0,c.removePassiveEventListener)(v,"scroll",h),d.scrollSpyContainers.splice(d.scrollSpyContainers.indexOf(v),1)}}return function(){}},isMounted:function(v){return d.scrollSpyContainers.indexOf(v)!==-1},currentPositionX:function(v){if(v===document){var g=window.scrollY!==void 0,h=(document.compatMode||"")==="CSS1Compat";return g?window.scrollX:h?document.documentElement.scrollLeft:document.body.scrollLeft}else return v.scrollLeft},currentPositionY:function(v){if(v===document){var g=window.scrollX!==void 0,h=(document.compatMode||"")==="CSS1Compat";return g?window.scrollY:h?document.documentElement.scrollTop:document.body.scrollTop}else return v.scrollTop},scrollHandler:function(v){var g=d.scrollSpyContainers[d.scrollSpyContainers.indexOf(v)].spyCallbacks||[];g.forEach(function(h){return h(d.currentPositionX(v),d.currentPositionY(v))})},addStateHandler:function(v){d.spySetState.push(v)},addSpyHandler:function(v,g){var h=d.scrollSpyContainers[d.scrollSpyContainers.indexOf(g)];h.spyCallbacks||(h.spyCallbacks=[]),h.spyCallbacks.push(v)},updateStates:function(){d.spySetState.forEach(function(v){return v()})},unmount:function(v,g){d.scrollSpyContainers.forEach(function(h){return h.spyCallbacks&&h.spyCallbacks.length&&h.spyCallbacks.indexOf(g)>-1&&h.spyCallbacks.splice(h.spyCallbacks.indexOf(g),1)}),d.spySetState&&d.spySetState.length&&d.spySetState.indexOf(v)>-1&&d.spySetState.splice(d.spySetState.indexOf(v),1),document.removeEventListener("scroll",d.scrollHandler)},update:function(){return d.scrollSpyContainers.forEach(function(v){return d.scrollHandler(v)})}};return Ar.default=d,Ar}var _r={},Cr={},l0;function Pr(){if(l0)return Cr;l0=1,Object.defineProperty(Cr,"__esModule",{value:!0});var l=function(v,g){var h=v.indexOf("#")===0?v.substring(1):v,b=h?"#"+h:"",S=window&&window.location,N=b?S.pathname+S.search+b:S.pathname+S.search;g?history.pushState(history.state,"",N):history.replaceState(history.state,"",N)},r=function(){return window.location.hash.replace(/^#/,"")},c=function(v){return function(g){return v.contains?v!=g&&v.contains(g):!!(v.compareDocumentPosition(g)&16)}},o=function(v){return getComputedStyle(v).position!=="static"},u=function(v,g){for(var h=v.offsetTop,b=v.offsetParent;b&&!g(b);)h+=b.offsetTop,b=b.offsetParent;return{offsetTop:h,offsetParent:b}},d=function(v,g,h){if(h)return v===document?g.getBoundingClientRect().left+(window.scrollX||window.pageXOffset):getComputedStyle(v).position!=="static"?g.offsetLeft:g.offsetLeft-v.offsetLeft;if(v===document)return g.getBoundingClientRect().top+(window.scrollY||window.pageYOffset);if(o(v)){if(g.offsetParent!==v){var b=function(E){return E===v||E===document},S=u(g,b),N=S.offsetTop,j=S.offsetParent;if(j!==v)throw new Error("Seems containerElement is not an ancestor of the Element");return N}return g.offsetTop}if(g.offsetParent===v.offsetParent)return g.offsetTop-v.offsetTop;var x=function(E){return E===document};return u(g,x).offsetTop-u(v,x).offsetTop};return Cr.default={updateHash:l,getHash:r,filterElementInContainer:c,scrollOffset:d},Cr}var zr={},Dr={},i0;function P2(){return i0||(i0=1,Object.defineProperty(Dr,"__esModule",{value:!0}),Dr.default={defaultEasing:function(r){return r<.5?Math.pow(r*2,2)/2:1-Math.pow((1-r)*2,2)/2},linear:function(r){return r},easeInQuad:function(r){return r*r},easeOutQuad:function(r){return r*(2-r)},easeInOutQuad:function(r){return r<.5?2*r*r:-1+(4-2*r)*r},easeInCubic:function(r){return r*r*r},easeOutCubic:function(r){return--r*r*r+1},easeInOutCubic:function(r){return r<.5?4*r*r*r:(r-1)*(2*r-2)*(2*r-2)+1},easeInQuart:function(r){return r*r*r*r},easeOutQuart:function(r){return 1- --r*r*r*r},easeInOutQuart:function(r){return r<.5?8*r*r*r*r:1-8*--r*r*r*r},easeInQuint:function(r){return r*r*r*r*r},easeOutQuint:function(r){return 1+--r*r*r*r*r},easeInOutQuint:function(r){return r<.5?16*r*r*r*r*r:1+16*--r*r*r*r*r}}),Dr}var Mr={},r0;function I2(){if(r0)return Mr;r0=1,Object.defineProperty(Mr,"__esModule",{value:!0});var l=Kc(),r=["mousedown","wheel","touchmove","keydown"];return Mr.default={subscribe:function(o){return typeof document<"u"&&r.forEach(function(u){return(0,l.addPassiveEventListener)(document,u,o)})}},Mr}var kr={},s0;function $c(){if(s0)return kr;s0=1,Object.defineProperty(kr,"__esModule",{value:!0});var l={registered:{},scrollEvent:{register:function(c,o){l.registered[c]=o},remove:function(c){l.registered[c]=null}}};return kr.default=l,kr}var o0;function sp(){if(o0)return zr;o0=1,Object.defineProperty(zr,"__esModule",{value:!0});var l=Object.assign||function(Z){for(var W=1;W<arguments.length;W++){var U=arguments[W];for(var ee in U)Object.prototype.hasOwnProperty.call(U,ee)&&(Z[ee]=U[ee])}return Z},r=Pr();g(r);var c=P2(),o=g(c),u=I2(),d=g(u),p=$c(),v=g(p);function g(Z){return Z&&Z.__esModule?Z:{default:Z}}var h=function(W){return o.default[W.smooth]||o.default.defaultEasing},b=function(W){return typeof W=="function"?W:function(){return W}},S=function(){if(typeof window<"u")return window.requestAnimationFrame||window.webkitRequestAnimationFrame},N=function(){return S()||function(Z,W,U){window.setTimeout(Z,U||1e3/60,new Date().getTime())}}(),j=function(){return{currentPosition:0,startPosition:0,targetPosition:0,progress:0,duration:0,cancel:!1,target:null,containerElement:null,to:null,start:null,delta:null,percent:null,delayTimeout:null}},x=function(W){var U=W.data.containerElement;if(U&&U!==document&&U!==document.body)return U.scrollLeft;var ee=window.pageXOffset!==void 0,P=(document.compatMode||"")==="CSS1Compat";return ee?window.pageXOffset:P?document.documentElement.scrollLeft:document.body.scrollLeft},T=function(W){var U=W.data.containerElement;if(U&&U!==document&&U!==document.body)return U.scrollTop;var ee=window.pageXOffset!==void 0,P=(document.compatMode||"")==="CSS1Compat";return ee?window.pageYOffset:P?document.documentElement.scrollTop:document.body.scrollTop},E=function(W){var U=W.data.containerElement;if(U&&U!==document&&U!==document.body)return U.scrollWidth-U.offsetWidth;var ee=document.body,P=document.documentElement;return Math.max(ee.scrollWidth,ee.offsetWidth,P.clientWidth,P.scrollWidth,P.offsetWidth)},_=function(W){var U=W.data.containerElement;if(U&&U!==document&&U!==document.body)return U.scrollHeight-U.offsetHeight;var ee=document.body,P=document.documentElement;return Math.max(ee.scrollHeight,ee.offsetHeight,P.clientHeight,P.scrollHeight,P.offsetHeight)},M=function Z(W,U,ee){var P=U.data;if(!U.ignoreCancelEvents&&P.cancel){v.default.registered.end&&v.default.registered.end(P.to,P.target,P.currentPositionY);return}if(P.delta=Math.round(P.targetPosition-P.startPosition),P.start===null&&(P.start=ee),P.progress=ee-P.start,P.percent=P.progress>=P.duration?1:W(P.progress/P.duration),P.currentPosition=P.startPosition+Math.ceil(P.delta*P.percent),P.containerElement&&P.containerElement!==document&&P.containerElement!==document.body?U.horizontal?P.containerElement.scrollLeft=P.currentPosition:P.containerElement.scrollTop=P.currentPosition:U.horizontal?window.scrollTo(P.currentPosition,0):window.scrollTo(0,P.currentPosition),P.percent<1){var Se=Z.bind(null,W,U);N.call(window,Se);return}v.default.registered.end&&v.default.registered.end(P.to,P.target,P.currentPosition)},C=function(W){W.data.containerElement=W?W.containerId?document.getElementById(W.containerId):W.container&&W.container.nodeType?W.container:document:null},Q=function(W,U,ee,P){U.data=U.data||j(),window.clearTimeout(U.data.delayTimeout);var Se=function(){U.data.cancel=!0};if(d.default.subscribe(Se),C(U),U.data.start=null,U.data.cancel=!1,U.data.startPosition=U.horizontal?x(U):T(U),U.data.targetPosition=U.absolute?W:W+U.data.startPosition,U.data.startPosition===U.data.targetPosition){v.default.registered.end&&v.default.registered.end(U.data.to,U.data.target,U.data.currentPosition);return}U.data.delta=Math.round(U.data.targetPosition-U.data.startPosition),U.data.duration=b(U.duration)(U.data.delta),U.data.duration=isNaN(parseFloat(U.data.duration))?1e3:parseFloat(U.data.duration),U.data.to=ee,U.data.target=P;var K=h(U),se=M.bind(null,K,U);if(U&&U.delay>0){U.data.delayTimeout=window.setTimeout(function(){v.default.registered.begin&&v.default.registered.begin(U.data.to,U.data.target),N.call(window,se)},U.delay);return}v.default.registered.begin&&v.default.registered.begin(U.data.to,U.data.target),N.call(window,se)},X=function(W){return W=l({},W),W.data=W.data||j(),W.absolute=!0,W},$=function(W){Q(0,X(W))},J=function(W,U){Q(W,X(U))},ie=function(W){W=X(W),C(W),Q(W.horizontal?E(W):_(W),W)},Y=function(W,U){U=X(U),C(U);var ee=U.horizontal?x(U):T(U);Q(W+ee,U)};return zr.default={animateTopScroll:Q,getAnimationType:h,scrollToTop:$,scrollToBottom:ie,scrollTo:J,scrollMore:Y},zr}var c0;function Ir(){if(c0)return _r;c0=1,Object.defineProperty(_r,"__esModule",{value:!0});var l=Object.assign||function(b){for(var S=1;S<arguments.length;S++){var N=arguments[S];for(var j in N)Object.prototype.hasOwnProperty.call(N,j)&&(b[j]=N[j])}return b},r=Pr(),c=v(r),o=sp(),u=v(o),d=$c(),p=v(d);function v(b){return b&&b.__esModule?b:{default:b}}var g={},h=void 0;return _r.default={unmount:function(){g={}},register:function(S,N){g[S]=N},unregister:function(S){delete g[S]},get:function(S){return g[S]||document.getElementById(S)||document.getElementsByName(S)[0]||document.getElementsByClassName(S)[0]},setActiveLink:function(S){return h=S},getActiveLink:function(){return h},scrollTo:function(S,N){var j=this.get(S);if(!j){console.warn("target Element not found");return}N=l({},N,{absolute:!1});var x=N.containerId,T=N.container,E=void 0;x?E=document.getElementById(x):T&&T.nodeType?E=T:E=document,N.absolute=!0;var _=N.horizontal,M=c.default.scrollOffset(E,j,_)+(N.offset||0);if(!N.smooth){p.default.registered.begin&&p.default.registered.begin(S,j),E===document?N.horizontal?window.scrollTo(M,0):window.scrollTo(0,M):E.scrollTop=M,p.default.registered.end&&p.default.registered.end(S,j);return}u.default.animateTopScroll(M,N,S,j)}},_r}var Tc={exports:{}},Oc,u0;function ev(){if(u0)return Oc;u0=1;var l="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";return Oc=l,Oc}var Nc,f0;function tv(){if(f0)return Nc;f0=1;var l=ev();function r(){}function c(){}return c.resetWarningCache=r,Nc=function(){function o(p,v,g,h,b,S){if(S!==l){var N=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw N.name="Invariant Violation",N}}o.isRequired=o;function u(){return o}var d={array:o,bigint:o,bool:o,func:o,number:o,object:o,string:o,symbol:o,any:o,arrayOf:u,element:o,elementType:o,instanceOf:u,node:o,objectOf:u,oneOf:u,oneOfType:u,shape:u,exact:u,checkPropTypes:c,resetWarningCache:r};return d.PropTypes=d,d},Nc}var d0;function es(){return d0||(d0=1,Tc.exports=tv()()),Tc.exports}var Br={},m0;function op(){if(m0)return Br;m0=1,Object.defineProperty(Br,"__esModule",{value:!0}),Kc();var l=Pr(),r=c(l);function c(u){return u&&u.__esModule?u:{default:u}}var o={mountFlag:!1,initialized:!1,scroller:null,containers:{},mount:function(d){this.scroller=d,this.handleHashChange=this.handleHashChange.bind(this),window.addEventListener("hashchange",this.handleHashChange),this.initStateFromHash(),this.mountFlag=!0},mapContainer:function(d,p){this.containers[d]=p},isMounted:function(){return this.mountFlag},isInitialized:function(){return this.initialized},initStateFromHash:function(){var d=this,p=this.getHash();p?window.setTimeout(function(){d.scrollTo(p,!0),d.initialized=!0},10):this.initialized=!0},scrollTo:function(d,p){var v=this.scroller,g=v.get(d);if(g&&(p||d!==v.getActiveLink())){var h=this.containers[d]||document;v.scrollTo(d,{container:h})}},getHash:function(){return r.default.getHash()},changeHash:function(d,p){this.isInitialized()&&r.default.getHash()!==d&&r.default.updateHash(d,p)},handleHashChange:function(){this.scrollTo(this.getHash())},unmount:function(){this.scroller=null,this.containers=null,window.removeEventListener("hashchange",this.handleHashChange)}};return Br.default=o,Br}var p0;function Wc(){if(p0)return Rr;p0=1,Object.defineProperty(Rr,"__esModule",{value:!0});var l=Object.assign||function(_){for(var M=1;M<arguments.length;M++){var C=arguments[M];for(var Q in C)Object.prototype.hasOwnProperty.call(C,Q)&&(_[Q]=C[Q])}return _},r=function(){function _(M,C){for(var Q=0;Q<C.length;Q++){var X=C[Q];X.enumerable=X.enumerable||!1,X.configurable=!0,"value"in X&&(X.writable=!0),Object.defineProperty(M,X.key,X)}}return function(M,C,Q){return C&&_(M.prototype,C),Q&&_(M,Q),M}}(),c=ma(),o=N(c),u=Jc(),d=N(u),p=Ir(),v=N(p),g=es(),h=N(g),b=op(),S=N(b);function N(_){return _&&_.__esModule?_:{default:_}}function j(_,M){if(!(_ instanceof M))throw new TypeError("Cannot call a class as a function")}function x(_,M){if(!_)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return M&&(typeof M=="object"||typeof M=="function")?M:_}function T(_,M){if(typeof M!="function"&&M!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof M);_.prototype=Object.create(M&&M.prototype,{constructor:{value:_,enumerable:!1,writable:!0,configurable:!0}}),M&&(Object.setPrototypeOf?Object.setPrototypeOf(_,M):_.__proto__=M)}var E={to:h.default.string.isRequired,containerId:h.default.string,container:h.default.object,activeClass:h.default.string,activeStyle:h.default.object,spy:h.default.bool,horizontal:h.default.bool,smooth:h.default.oneOfType([h.default.bool,h.default.string]),offset:h.default.number,delay:h.default.number,isDynamic:h.default.bool,onClick:h.default.func,duration:h.default.oneOfType([h.default.number,h.default.func]),absolute:h.default.bool,onSetActive:h.default.func,onSetInactive:h.default.func,ignoreCancelEvents:h.default.bool,hashSpy:h.default.bool,saveHashHistory:h.default.bool,spyThrottle:h.default.number};return Rr.default=function(_,M){var C=M||v.default,Q=function($){T(J,$);function J(ie){j(this,J);var Y=x(this,(J.__proto__||Object.getPrototypeOf(J)).call(this,ie));return X.call(Y),Y.state={active:!1},Y.beforeUnmountCallbacks=[],Y}return r(J,[{key:"getScrollSpyContainer",value:function(){var Y=this.props.containerId,Z=this.props.container;return Y&&!Z?document.getElementById(Y):Z&&Z.nodeType?Z:document}},{key:"componentDidMount",value:function(){if(this.props.spy||this.props.hashSpy){var Y=this.getScrollSpyContainer();if(!d.default.isMounted(Y)){var Z=d.default.mount(Y,this.props.spyThrottle);this.beforeUnmountCallbacks.push(Z)}this.props.hashSpy&&(S.default.isMounted()||S.default.mount(C),S.default.mapContainer(this.props.to,Y)),d.default.addSpyHandler(this.spyHandler,Y),this.setState({container:Y})}}},{key:"componentWillUnmount",value:function(){d.default.unmount(this.stateHandler,this.spyHandler),this.beforeUnmountCallbacks.forEach(function(Y){return Y()})}},{key:"render",value:function(){var Y="";this.state&&this.state.active?Y=((this.props.className||"")+" "+(this.props.activeClass||"active")).trim():Y=this.props.className;var Z={};this.state&&this.state.active?Z=l({},this.props.style,this.props.activeStyle):Z=l({},this.props.style);var W=l({},this.props);for(var U in E)W.hasOwnProperty(U)&&delete W[U];return W.className=Y,W.style=Z,W.onClick=this.handleClick,o.default.createElement(_,W)}}]),J}(o.default.PureComponent),X=function(){var J=this;this.scrollTo=function(ie,Y){C.scrollTo(ie,l({},J.state,Y))},this.handleClick=function(ie){J.props.onClick&&J.props.onClick(ie),ie.stopPropagation&&ie.stopPropagation(),ie.preventDefault&&ie.preventDefault(),J.scrollTo(J.props.to,J.props)},this.spyHandler=function(ie,Y){var Z=J.getScrollSpyContainer();if(!(S.default.isMounted()&&!S.default.isInitialized())){var W=J.props.horizontal,U=J.props.to,ee=null,P=void 0,Se=void 0;if(W){var K=0,se=0,te=0;if(Z.getBoundingClientRect){var be=Z.getBoundingClientRect();te=be.left}if(!ee||J.props.isDynamic){if(ee=C.get(U),!ee)return;var O=ee.getBoundingClientRect();K=O.left-te+ie,se=K+O.width}var G=ie-J.props.offset;P=G>=Math.floor(K)&&G<Math.floor(se),Se=G<Math.floor(K)||G>=Math.floor(se)}else{var ae=0,ne=0,I=0;if(Z.getBoundingClientRect){var pe=Z.getBoundingClientRect();I=pe.top}if(!ee||J.props.isDynamic){if(ee=C.get(U),!ee)return;var fe=ee.getBoundingClientRect();ae=fe.top-I+Y,ne=ae+fe.height}var ze=Y-J.props.offset;P=ze>=Math.floor(ae)&&ze<Math.floor(ne),Se=ze<Math.floor(ae)||ze>=Math.floor(ne)}var ce=C.getActiveLink();if(Se){if(U===ce&&C.setActiveLink(void 0),J.props.hashSpy&&S.default.getHash()===U){var Ee=J.props.saveHashHistory,je=Ee===void 0?!1:Ee;S.default.changeHash("",je)}J.props.spy&&J.state.active&&(J.setState({active:!1}),J.props.onSetInactive&&J.props.onSetInactive(U,ee))}if(P&&(ce!==U||J.state.active===!1)){C.setActiveLink(U);var tt=J.props.saveHashHistory,Ua=tt===void 0?!1:tt;J.props.hashSpy&&S.default.changeHash(U,Ua),J.props.spy&&(J.setState({active:!0}),J.props.onSetActive&&J.props.onSetActive(U,ee))}}}};return Q.propTypes=E,Q.defaultProps={offset:0},Q},Rr}var h0;function av(){if(h0)return Nr;h0=1,Object.defineProperty(Nr,"__esModule",{value:!0});var l=ma(),r=u(l),c=Wc(),o=u(c);function u(h){return h&&h.__esModule?h:{default:h}}function d(h,b){if(!(h instanceof b))throw new TypeError("Cannot call a class as a function")}function p(h,b){if(!h)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return b&&(typeof b=="object"||typeof b=="function")?b:h}function v(h,b){if(typeof b!="function"&&b!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof b);h.prototype=Object.create(b&&b.prototype,{constructor:{value:h,enumerable:!1,writable:!0,configurable:!0}}),b&&(Object.setPrototypeOf?Object.setPrototypeOf(h,b):h.__proto__=b)}var g=function(h){v(b,h);function b(){var S,N,j,x;d(this,b);for(var T=arguments.length,E=Array(T),_=0;_<T;_++)E[_]=arguments[_];return x=(N=(j=p(this,(S=b.__proto__||Object.getPrototypeOf(b)).call.apply(S,[this].concat(E))),j),j.render=function(){return r.default.createElement("a",j.props,j.props.children)},N),p(j,x)}return b}(r.default.Component);return Nr.default=(0,o.default)(g),Nr}var Hr={},g0;function nv(){if(g0)return Hr;g0=1,Object.defineProperty(Hr,"__esModule",{value:!0});var l=function(){function b(S,N){for(var j=0;j<N.length;j++){var x=N[j];x.enumerable=x.enumerable||!1,x.configurable=!0,"value"in x&&(x.writable=!0),Object.defineProperty(S,x.key,x)}}return function(S,N,j){return N&&b(S.prototype,N),j&&b(S,j),S}}(),r=ma(),c=d(r),o=Wc(),u=d(o);function d(b){return b&&b.__esModule?b:{default:b}}function p(b,S){if(!(b instanceof S))throw new TypeError("Cannot call a class as a function")}function v(b,S){if(!b)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return S&&(typeof S=="object"||typeof S=="function")?S:b}function g(b,S){if(typeof S!="function"&&S!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof S);b.prototype=Object.create(S&&S.prototype,{constructor:{value:b,enumerable:!1,writable:!0,configurable:!0}}),S&&(Object.setPrototypeOf?Object.setPrototypeOf(b,S):b.__proto__=S)}var h=function(b){g(S,b);function S(){return p(this,S),v(this,(S.__proto__||Object.getPrototypeOf(S)).apply(this,arguments))}return l(S,[{key:"render",value:function(){return c.default.createElement("button",this.props,this.props.children)}}]),S}(c.default.Component);return Hr.default=(0,u.default)(h),Hr}var Lr={},Ur={},v0;function cp(){if(v0)return Ur;v0=1,Object.defineProperty(Ur,"__esModule",{value:!0});var l=Object.assign||function(j){for(var x=1;x<arguments.length;x++){var T=arguments[x];for(var E in T)Object.prototype.hasOwnProperty.call(T,E)&&(j[E]=T[E])}return j},r=function(){function j(x,T){for(var E=0;E<T.length;E++){var _=T[E];_.enumerable=_.enumerable||!1,_.configurable=!0,"value"in _&&(_.writable=!0),Object.defineProperty(x,_.key,_)}}return function(x,T,E){return T&&j(x.prototype,T),E&&j(x,E),x}}(),c=ma(),o=h(c),u=Fc();h(u);var d=Ir(),p=h(d),v=es(),g=h(v);function h(j){return j&&j.__esModule?j:{default:j}}function b(j,x){if(!(j instanceof x))throw new TypeError("Cannot call a class as a function")}function S(j,x){if(!j)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return x&&(typeof x=="object"||typeof x=="function")?x:j}function N(j,x){if(typeof x!="function"&&x!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof x);j.prototype=Object.create(x&&x.prototype,{constructor:{value:j,enumerable:!1,writable:!0,configurable:!0}}),x&&(Object.setPrototypeOf?Object.setPrototypeOf(j,x):j.__proto__=x)}return Ur.default=function(j){var x=function(T){N(E,T);function E(_){b(this,E);var M=S(this,(E.__proto__||Object.getPrototypeOf(E)).call(this,_));return M.childBindings={domNode:null},M}return r(E,[{key:"componentDidMount",value:function(){if(typeof window>"u")return!1;this.registerElems(this.props.name)}},{key:"componentDidUpdate",value:function(M){this.props.name!==M.name&&this.registerElems(this.props.name)}},{key:"componentWillUnmount",value:function(){if(typeof window>"u")return!1;p.default.unregister(this.props.name)}},{key:"registerElems",value:function(M){p.default.register(M,this.childBindings.domNode)}},{key:"render",value:function(){return o.default.createElement(j,l({},this.props,{parentBindings:this.childBindings}))}}]),E}(o.default.Component);return x.propTypes={name:g.default.string,id:g.default.string},x},Ur}var y0;function lv(){if(y0)return Lr;y0=1,Object.defineProperty(Lr,"__esModule",{value:!0});var l=Object.assign||function(j){for(var x=1;x<arguments.length;x++){var T=arguments[x];for(var E in T)Object.prototype.hasOwnProperty.call(T,E)&&(j[E]=T[E])}return j},r=function(){function j(x,T){for(var E=0;E<T.length;E++){var _=T[E];_.enumerable=_.enumerable||!1,_.configurable=!0,"value"in _&&(_.writable=!0),Object.defineProperty(x,_.key,_)}}return function(x,T,E){return T&&j(x.prototype,T),E&&j(x,E),x}}(),c=ma(),o=g(c),u=cp(),d=g(u),p=es(),v=g(p);function g(j){return j&&j.__esModule?j:{default:j}}function h(j,x){if(!(j instanceof x))throw new TypeError("Cannot call a class as a function")}function b(j,x){if(!j)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return x&&(typeof x=="object"||typeof x=="function")?x:j}function S(j,x){if(typeof x!="function"&&x!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof x);j.prototype=Object.create(x&&x.prototype,{constructor:{value:j,enumerable:!1,writable:!0,configurable:!0}}),x&&(Object.setPrototypeOf?Object.setPrototypeOf(j,x):j.__proto__=x)}var N=function(j){S(x,j);function x(){return h(this,x),b(this,(x.__proto__||Object.getPrototypeOf(x)).apply(this,arguments))}return r(x,[{key:"render",value:function(){var E=this,_=l({},this.props);return delete _.name,_.parentBindings&&delete _.parentBindings,o.default.createElement("div",l({},_,{ref:function(C){E.props.parentBindings.domNode=C}}),this.props.children)}}]),x}(o.default.Component);return N.propTypes={name:v.default.string,id:v.default.string},Lr.default=(0,d.default)(N),Lr}var Rc,b0;function iv(){if(b0)return Rc;b0=1;var l=Object.assign||function(N){for(var j=1;j<arguments.length;j++){var x=arguments[j];for(var T in x)Object.prototype.hasOwnProperty.call(x,T)&&(N[T]=x[T])}return N},r=function(){function N(j,x){for(var T=0;T<x.length;T++){var E=x[T];E.enumerable=E.enumerable||!1,E.configurable=!0,"value"in E&&(E.writable=!0),Object.defineProperty(j,E.key,E)}}return function(j,x,T){return x&&N(j.prototype,x),T&&N(j,T),j}}();function c(N,j){if(!(N instanceof j))throw new TypeError("Cannot call a class as a function")}function o(N,j){if(!N)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return j&&(typeof j=="object"||typeof j=="function")?j:N}function u(N,j){if(typeof j!="function"&&j!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof j);N.prototype=Object.create(j&&j.prototype,{constructor:{value:N,enumerable:!1,writable:!0,configurable:!0}}),j&&(Object.setPrototypeOf?Object.setPrototypeOf(N,j):N.__proto__=j)}var d=ma();Fc(),Pr();var p=Jc(),v=Ir(),g=es(),h=op(),b={to:g.string.isRequired,containerId:g.string,container:g.object,activeClass:g.string,spy:g.bool,smooth:g.oneOfType([g.bool,g.string]),offset:g.number,delay:g.number,isDynamic:g.bool,onClick:g.func,duration:g.oneOfType([g.number,g.func]),absolute:g.bool,onSetActive:g.func,onSetInactive:g.func,ignoreCancelEvents:g.bool,hashSpy:g.bool,spyThrottle:g.number},S={Scroll:function(j,x){console.warn("Helpers.Scroll is deprecated since v1.7.0");var T=x||v,E=function(M){u(C,M);function C(Q){c(this,C);var X=o(this,(C.__proto__||Object.getPrototypeOf(C)).call(this,Q));return _.call(X),X.state={active:!1},X}return r(C,[{key:"getScrollSpyContainer",value:function(){var X=this.props.containerId,$=this.props.container;return X?document.getElementById(X):$&&$.nodeType?$:document}},{key:"componentDidMount",value:function(){if(this.props.spy||this.props.hashSpy){var X=this.getScrollSpyContainer();p.isMounted(X)||p.mount(X,this.props.spyThrottle),this.props.hashSpy&&(h.isMounted()||h.mount(T),h.mapContainer(this.props.to,X)),this.props.spy&&p.addStateHandler(this.stateHandler),p.addSpyHandler(this.spyHandler,X),this.setState({container:X})}}},{key:"componentWillUnmount",value:function(){p.unmount(this.stateHandler,this.spyHandler)}},{key:"render",value:function(){var X="";this.state&&this.state.active?X=((this.props.className||"")+" "+(this.props.activeClass||"active")).trim():X=this.props.className;var $=l({},this.props);for(var J in b)$.hasOwnProperty(J)&&delete $[J];return $.className=X,$.onClick=this.handleClick,d.createElement(j,$)}}]),C}(d.Component),_=function(){var C=this;this.scrollTo=function(Q,X){T.scrollTo(Q,l({},C.state,X))},this.handleClick=function(Q){C.props.onClick&&C.props.onClick(Q),Q.stopPropagation&&Q.stopPropagation(),Q.preventDefault&&Q.preventDefault(),C.scrollTo(C.props.to,C.props)},this.stateHandler=function(){T.getActiveLink()!==C.props.to&&(C.state!==null&&C.state.active&&C.props.onSetInactive&&C.props.onSetInactive(),C.setState({active:!1}))},this.spyHandler=function(Q){var X=C.getScrollSpyContainer();if(!(h.isMounted()&&!h.isInitialized())){var $=C.props.to,J=null,ie=0,Y=0,Z=0;if(X.getBoundingClientRect){var W=X.getBoundingClientRect();Z=W.top}if(!J||C.props.isDynamic){if(J=T.get($),!J)return;var U=J.getBoundingClientRect();ie=U.top-Z+Q,Y=ie+U.height}var ee=Q-C.props.offset,P=ee>=Math.floor(ie)&&ee<Math.floor(Y),Se=ee<Math.floor(ie)||ee>=Math.floor(Y),K=T.getActiveLink();if(Se)return $===K&&T.setActiveLink(void 0),C.props.hashSpy&&h.getHash()===$&&h.changeHash(),C.props.spy&&C.state.active&&(C.setState({active:!1}),C.props.onSetInactive&&C.props.onSetInactive()),p.updateStates();if(P&&K!==$)return T.setActiveLink($),C.props.hashSpy&&h.changeHash($),C.props.spy&&(C.setState({active:!0}),C.props.onSetActive&&C.props.onSetActive($)),p.updateStates()}}};return E.propTypes=b,E.defaultProps={offset:0},E},Element:function(j){console.warn("Helpers.Element is deprecated since v1.7.0");var x=function(T){u(E,T);function E(_){c(this,E);var M=o(this,(E.__proto__||Object.getPrototypeOf(E)).call(this,_));return M.childBindings={domNode:null},M}return r(E,[{key:"componentDidMount",value:function(){if(typeof window>"u")return!1;this.registerElems(this.props.name)}},{key:"componentDidUpdate",value:function(M){this.props.name!==M.name&&this.registerElems(this.props.name)}},{key:"componentWillUnmount",value:function(){if(typeof window>"u")return!1;v.unregister(this.props.name)}},{key:"registerElems",value:function(M){v.register(M,this.childBindings.domNode)}},{key:"render",value:function(){return d.createElement(j,l({},this.props,{parentBindings:this.childBindings}))}}]),E}(d.Component);return x.propTypes={name:g.string,id:g.string},x}};return Rc=S,Rc}var x0;function rv(){if(x0)return De;x0=1,Object.defineProperty(De,"__esModule",{value:!0}),De.Helpers=De.ScrollElement=De.ScrollLink=De.animateScroll=De.scrollSpy=De.Events=De.scroller=De.Element=De.Button=De.Link=void 0;var l=av(),r=Q(l),c=nv(),o=Q(c),u=lv(),d=Q(u),p=Ir(),v=Q(p),g=$c(),h=Q(g),b=Jc(),S=Q(b),N=sp(),j=Q(N),x=Wc(),T=Q(x),E=cp(),_=Q(E),M=iv(),C=Q(M);function Q(X){return X&&X.__esModule?X:{default:X}}return De.Link=r.default,De.Button=o.default,De.Element=d.default,De.scroller=v.default,De.Events=h.default,De.scrollSpy=S.default,De.animateScroll=j.default,De.ScrollLink=T.default,De.ScrollElement=_.default,De.Helpers=C.default,De.default={Link:r.default,Button:o.default,Element:d.default,scroller:v.default,Events:h.default,scrollSpy:S.default,animateScroll:j.default,ScrollLink:T.default,ScrollElement:_.default,Helpers:C.default},De}var cn=rv();function up(){const[l,r]=D.useState(!1),[c,o]=D.useState("dark"),u=D.useRef(null);D.useEffect(()=>{const g=localStorage.getItem("theme")||"dark";o(g),document.documentElement.setAttribute("data-theme",g)},[]);const d=D.useCallback(()=>{const g=c==="dark"?"light":"dark";o(g),document.documentElement.setAttribute("data-theme",g),localStorage.setItem("theme",g)},[c]),p=D.useCallback(g=>{const h=document.getElementById(g);h&&(h.scrollIntoView({behavior:"smooth"}),window.innerWidth<=900&&r(!1))},[]);D.useEffect(()=>{function g(h){u.current&&!u.current.contains(h.target)&&!h.target.closest(".header-menu-toggle")&&r(!1)}return document.addEventListener("mousedown",g),()=>document.removeEventListener("mousedown",g)},[]);const v=[{name:"Accueil",id:"home"},{name:"A Propos",id:"about"},{name:"Projets",id:"projects"},{name:"Services",id:"services"},{name:"Blog",id:"news"},{name:"Equipe",id:"team"},{name:"Nous Contacter",id:"contacts"}];return f.jsxs("header",{className:"header",children:[f.jsx("div",{className:"header-logo",children:"DigiScia"}),f.jsxs("button",{className:"header-menu-toggle",onClick:()=>r(!l),"aria-expanded":l,"aria-label":"Toggle navigation menu",children:[f.jsx("span",{}),f.jsx("span",{}),f.jsx("span",{})]}),f.jsx("nav",{className:`header-navbar ${l?"active":""}`,ref:u,"aria-hidden":!l&&window.innerWidth<=900,children:f.jsx("ul",{children:v.map(g=>f.jsx("li",{children:f.jsx("a",{href:`#${g.id}`,onClick:h=>{h.preventDefault(),p(g.id)},children:g.name})},g.id))})}),f.jsx("div",{className:"header-theme-toggle",children:f.jsxs("label",{className:"switch",htmlFor:"themeToggle",children:[f.jsx("input",{id:"themeToggle",type:"checkbox",className:"input",checked:c==="light",onChange:d,"aria-label":`Switch to ${c==="dark"?"light":"dark"} mode`}),f.jsx("span",{className:"slider"})]})})]})}function fp(){const l=new Date().getFullYear(),r=[{name:"LinkedIn",href:"https://www.linkedin.com",icon:f.jsx("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"currentColor",children:f.jsx("path",{d:"M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"})})},{name:"Instagram",href:"https://www.instagram.com",icon:f.jsx("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"currentColor",children:f.jsx("path",{d:"M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"})})},{name:"Facebook",href:"https://www.facebook.com",icon:f.jsx("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"currentColor",children:f.jsx("path",{d:"M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"})})},{name:"Discord",href:"https://discord.gg/enKs5Pm8",icon:f.jsx("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"currentColor",children:f.jsx("path",{d:"M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028 14.09 14.09 0 0 0 1.226-1.994.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z"})})}],c=[{icon:f.jsxs("svg",{width:"18",height:"18",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[f.jsx("path",{d:"M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"}),f.jsx("circle",{cx:"12",cy:"10",r:"3"})]}),text:"Ouagadougou, Burkina Faso",type:"location"},{icon:f.jsx("svg",{width:"18",height:"18",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:f.jsx("path",{d:"M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"})}),lines:["+212 716-990681","+226 57 28 70 25"],type:"phone"},{icon:f.jsxs("svg",{width:"18",height:"18",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[f.jsx("path",{d:"M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"}),f.jsx("polyline",{points:"22,6 12,13 2,6"})]}),text:"digiscia.infos@gmail.com",type:"email"}];return f.jsxs(f.Fragment,{children:[f.jsx("style",{children:`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=Space+Grotesk:wght@500;600;700&display=swap');

        .footer {
          background: var(--navy);
          color: var(--white);
          padding: 4rem 0 2rem;
          margin-top: 6rem;
          position: relative;
        }

        .footer::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 1px;
          background: linear-gradient(
            to right,
            transparent,
            rgba(255, 255, 255, 0.1) 20%,
            rgba(255, 255, 255, 0.1) 80%,
            transparent
          );
        }

        .footer-container {
          max-width: 1400px;
          margin: 0 auto;
          padding: 0 1.5rem;
        }

        .footer-grid {
          display: grid;
          grid-template-columns: 2fr 1fr 1fr;
          gap: 3rem;
          margin-bottom: 3rem;
        }

        .footer-brand {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
        }

        .footer-logo-container {
          display: flex;
          align-items: center;
          gap: 0.75rem;
        }

        .footer-logo-icon {
          width: 42px;
          height: 42px;
          background: var(--white);
          border-radius: 10px;
          display: flex;
          align-items: center;
          justify-content: center;
          position: relative;
          overflow: hidden;
        }

        .footer-logo-icon::before {
          content: '';
          position: absolute;
          width: 100%;
          height: 100%;
          background: linear-gradient(135deg, transparent 0%, rgba(0, 0, 102, 0.1) 100%);
        }

        .footer-logo-icon svg {
          width: 28px;
          height: 28px;
          position: relative;
          z-index: 1;
        }

        .footer-logo-text {
          font-family: 'Space Grotesk', sans-serif;
          font-size: 1.75rem;
          font-weight: 700;
          color: var(--white);
          letter-spacing: -0.02em;
        }

        .footer-description {
          color: rgba(255, 255, 255, 0.7);
          line-height: 1.6;
          font-size: 0.9375rem;
          max-width: 420px;
        }

        .footer-section {
          display: flex;
          flex-direction: column;
          gap: 1.25rem;
        }

        .footer-title {
          font-size: 0.875rem;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 0.05em;
          color: var(--white);
          margin-bottom: 0.5rem;
          opacity: 0.9;
        }

        .contact-item {
          display: flex;
          align-items: flex-start;
          gap: 0.75rem;
          color: rgba(255, 255, 255, 0.7);
          font-size: 0.9375rem;
          line-height: 1.6;
          transition: var(--transition);
        }

        .contact-item:hover {
          color: var(--white);
          transform: translateX(4px);
        }

        .contact-icon {
          color: rgba(58, 94, 235, 0.9);
          flex-shrink: 0;
          margin-top: 2px;
        }

        .phone-lines {
          display: flex;
          flex-direction: column;
          gap: 0.25rem;
        }

        .social-links {
          display: flex;
          gap: 0.75rem;
          flex-wrap: wrap;
        }

        .social-link {
          width: 46px;
          height: 46px;
          border-radius: 12px;
          background: rgba(255, 255, 255, 0.08);
          border: 1px solid rgba(255, 255, 255, 0.12);
          display: flex;
          align-items: center;
          justify-content: center;
          color: rgba(255, 255, 255, 0.8);
          transition: var(--transition);
          text-decoration: none;
        }

        .social-link:hover {
          background: rgba(47, 98, 239, 0.2);
          color: var(--navy);
          border-color: var(--white);
          transform: translateY(-4px);
          box-shadow: 0 8px 24px rgba(255, 255, 255, 0.2);
        }

        .footer-divider {
          height: 1px;
          background: linear-gradient(
            to right,
            transparent,
            rgba(255, 255, 255, 0.1) 20%,
            rgba(255, 255, 255, 0.1) 80%,
            transparent
          );
          margin: 2rem 0;
        }

        .footer-bottom {
          display: flex;
          align-items: center;
          justify-content: space-between;
          color: rgba(255, 255, 255, 0.6);
          font-size: 0.875rem;
        }

        .footer-copyright {
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }

        .footer-links {
          display: flex;
          gap: 2rem;
        }

        .footer-link {
          color: rgba(255, 255, 255, 0.6);
          text-decoration: none;
          transition: var(--transition);
        }

        .footer-link:hover {
          color: var(--white);
        }

        @media (max-width: 1024px) {
          .footer-grid {
            grid-template-columns: 1fr 1fr;
            gap: 2.5rem;
          }

          .footer-brand {
            grid-column: 1 / -1;
          }
        }

        @media (max-width: 768px) {
          .footer {
            padding: 3rem 0 1.5rem;
            margin-top: 4rem;
          }

          .footer-container {
            padding: 0 1rem;
          }

          .footer-grid {
            grid-template-columns: 1fr;
            gap: 2rem;
          }

          .footer-bottom {
            flex-direction: column;
            gap: 1rem;
            text-align: center;
          }

          .footer-links {
            flex-direction: column;
            gap: 0.75rem;
          }

          .footer-logo-text {
            font-size: 1.5rem;
          }

          .footer-logo-icon {
            width: 38px;
            height: 38px;
          }

          .footer-logo-icon svg {
            width: 24px;
            height: 24px;
          }
        }

        @media (max-width: 480px) {
          .footer {
            padding: 2rem 0 1rem;
          }

          .footer-container {
            padding: 0 0.75rem;
          }

          .footer-logo-text {
            font-size: 1.375rem;
          }

          .footer-logo-icon {
            width: 36px;
            height: 36px;
          }

          .footer-logo-icon svg {
            width: 22px;
            height: 22px;
          }

          .social-link {
            width: 42px;
            height: 42px;
          }
        }
      `}),f.jsx("footer",{className:"footer",children:f.jsxs("div",{className:"footer-container",children:[f.jsxs("div",{className:"footer-grid",children:[f.jsxs("div",{className:"footer-brand",children:[f.jsxs("div",{className:"footer-logo-container",children:[f.jsx("div",{className:"footer-logo-icon",children:f.jsx("svg",{viewBox:"0 0 100 100",fill:"#000033",children:f.jsx("path",{d:"M30,30 L30,70 L45,70 C55,70 62,63 62,52 C62,48 60,44 57,41 C60,38 62,34 62,30 C62,19 55,12 45,12 L30,12 Z M40,22 L45,22 C49,22 52,25 52,30 C52,35 49,38 45,38 L40,38 Z M40,48 L45,48 C49,48 52,51 52,56 C52,61 49,64 45,64 L40,64 Z"})})}),f.jsx("span",{className:"footer-logo-text",children:"DigiScia"})]}),f.jsx("p",{className:"footer-description",children:"Excellence en solutions numériques. Nous transformons vos idées en réalité digitale avec expertise et innovation."})]}),f.jsxs("div",{className:"footer-section",children:[f.jsx("h3",{className:"footer-title",children:"Contact"}),c.map((o,u)=>f.jsxs("div",{className:"contact-item",children:[f.jsx("span",{className:"contact-icon",children:o.icon}),o.type==="phone"?f.jsx("div",{className:"phone-lines",children:o.lines.map((d,p)=>f.jsx("span",{children:d},p))}):f.jsx("span",{children:o.text})]},u))]}),f.jsxs("div",{className:"footer-section",children:[f.jsx("h3",{className:"footer-title",children:"Suivez-nous"}),f.jsx("div",{className:"social-links",children:r.map(o=>f.jsx("a",{href:o.href,target:"_blank",rel:"noopener noreferrer",className:"social-link","aria-label":o.name,children:o.icon},o.name))})]})]}),f.jsx("div",{className:"footer-divider"}),f.jsxs("div",{className:"footer-bottom",children:[f.jsx("div",{className:"footer-copyright",children:f.jsxs("span",{children:["© ",l," DigiScia. Tous droits réservés."]})}),f.jsxs("div",{className:"footer-links",children:[f.jsx("a",{href:"#privacy",className:"footer-link",children:"Confidentialité"}),f.jsx("a",{href:"#terms",className:"footer-link",children:"Conditions"}),f.jsx("a",{href:"#legal",className:"footer-link",children:"Mentions légales"})]})]})]})})]})}const sv="/assets/logobleu-DSiZOGcL.jpg",dp=D.memo(()=>{const l=["Data Science","Intelligence Artificielle","Management de Données","Automatisation","Agents IA","Analyse de Données","Aide à la decision","Ingenierie de Données","Securité des Données","Applications Web & Mobile"],[r,c]=D.useState(0),[o,u]=D.useState(0),[d,p]=D.useState(!1),[v,g]=D.useState(""),h=120,b=60,S=2e3;return D.useEffect(()=>{const N=l[r];if(d)if(o>0){const j=setTimeout(()=>{g(N.substring(0,o-1)),u(o-1)},b);return()=>clearTimeout(j)}else p(!1),c(j=>(j+1)%l.length);else if(o<N.length){const j=setTimeout(()=>{g(N.substring(0,o+1)),u(o+1)},h);return()=>clearTimeout(j)}else{const j=setTimeout(()=>{p(!0)},S);return()=>clearTimeout(j)}},[o,d,r,l]),f.jsxs("span",{className:"tagline-text",children:[v,f.jsx("span",{className:"typing-cursor","aria-hidden":"true",children:"_"})]})});dp.displayName="TaglineRotator";function ov(){const[l,r]=D.useState([]),c=D.useRef(null);D.useEffect(()=>{r((()=>{const v=window.innerWidth<768?30:50;return Array.from({length:v},(g,h)=>({id:h,x:Math.random()*100,y:Math.random()*100,vx:(Math.random()-.5)*.05,vy:(Math.random()-.5)*.05,size:Math.random()*2+1}))})())},[]),D.useEffect(()=>{const p=c.current;if(!p)return;const v=p.getContext("2d");let g,h=l;const b=()=>{p.width=window.innerWidth,p.height=window.innerHeight};b(),window.addEventListener("resize",b);const S=()=>{p&&(v.clearRect(0,0,p.width,p.height),h=h.map(N=>{let j=N.x+N.vx,x=N.y+N.vy;return(j<0||j>100)&&(N.vx*=-1),(x<0||x>100)&&(N.vy*=-1),{...N,x:j,y:x}}),v.lineWidth=.5,h.forEach((N,j)=>{h.slice(j+1).forEach(x=>{const T=(x.x-N.x)*p.width/100,E=(x.y-N.y)*p.height/100,_=Math.sqrt(T*T+E*E);if(_<150){const M=(1-_/150)*.3;v.strokeStyle=`rgba(91, 124, 255, ${M})`,v.beginPath(),v.moveTo(N.x*p.width/100,N.y*p.height/100),v.lineTo(x.x*p.width/100,x.y*p.height/100),v.stroke()}})}),h.forEach(N=>{v.fillStyle="rgba(91, 124, 255, 0.8)",v.beginPath(),v.arc(N.x*p.width/100,N.y*p.height/100,N.size,0,Math.PI*2),v.fill()}),g=requestAnimationFrame(S))};return h.length>0&&S(),()=>{cancelAnimationFrame(g),window.removeEventListener("resize",b)}},[l]);const o=D.useCallback(()=>{window.open("https://wa.me/212716990681","_blank")},[]),u=D.useCallback(p=>{p.preventDefault();const v=document.getElementById("contacts");v&&v.scrollIntoView({behavior:"smooth"})},[]),d=D.useCallback(()=>{window.scrollBy({top:window.innerHeight,behavior:"smooth"})},[]);return f.jsxs("section",{id:"home",className:"home-container",children:[f.jsx("canvas",{ref:c,className:"constellation-canvas","aria-hidden":"true"}),f.jsx("div",{className:"gradient-overlay","aria-hidden":"true"}),f.jsx("div",{className:"hero-section",children:f.jsxs("div",{className:"hero-content",children:[f.jsx("div",{className:"logo-container",children:f.jsx("img",{src:sv,alt:"DigiScia Logo",className:"hero-logo"})}),f.jsxs("div",{className:"hero-text",children:[f.jsx("h1",{className:"welcome-text",children:"Bienvenue sur"}),f.jsx("h2",{className:"brand-name",children:"DigiScia"}),f.jsx("h3",{className:"tagline",children:f.jsx(dp,{})}),f.jsxs("div",{className:"cta-buttons",children:[f.jsx("button",{className:"cta-button sponsoring",onClick:o,"aria-label":"Ouvrir WhatsApp pour un partenariat",children:"Partenariat"}),f.jsx("a",{href:"#contacts",className:"cta-button contact",onClick:u,"aria-label":"Naviguer vers la section contact",children:"Nous Contacter"})]})]})]})}),f.jsxs("div",{className:"scroll-indicator",onClick:d,"aria-label":"Défiler vers le bas",role:"button",tabIndex:0,children:[f.jsx("span",{className:"scroll-indicator-text",children:"Scroll"}),f.jsx("div",{className:"scroll-indicator-icon"})]})]})}var mp={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},w0=Bt.createContext&&Bt.createContext(mp),cv=["attr","size","title"];function uv(l,r){if(l==null)return{};var c=fv(l,r),o,u;if(Object.getOwnPropertySymbols){var d=Object.getOwnPropertySymbols(l);for(u=0;u<d.length;u++)o=d[u],!(r.indexOf(o)>=0)&&Object.prototype.propertyIsEnumerable.call(l,o)&&(c[o]=l[o])}return c}function fv(l,r){if(l==null)return{};var c={};for(var o in l)if(Object.prototype.hasOwnProperty.call(l,o)){if(r.indexOf(o)>=0)continue;c[o]=l[o]}return c}function Zr(){return Zr=Object.assign?Object.assign.bind():function(l){for(var r=1;r<arguments.length;r++){var c=arguments[r];for(var o in c)Object.prototype.hasOwnProperty.call(c,o)&&(l[o]=c[o])}return l},Zr.apply(this,arguments)}function S0(l,r){var c=Object.keys(l);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(l);r&&(o=o.filter(function(u){return Object.getOwnPropertyDescriptor(l,u).enumerable})),c.push.apply(c,o)}return c}function Kr(l){for(var r=1;r<arguments.length;r++){var c=arguments[r]!=null?arguments[r]:{};r%2?S0(Object(c),!0).forEach(function(o){dv(l,o,c[o])}):Object.getOwnPropertyDescriptors?Object.defineProperties(l,Object.getOwnPropertyDescriptors(c)):S0(Object(c)).forEach(function(o){Object.defineProperty(l,o,Object.getOwnPropertyDescriptor(c,o))})}return l}function dv(l,r,c){return r=mv(r),r in l?Object.defineProperty(l,r,{value:c,enumerable:!0,configurable:!0,writable:!0}):l[r]=c,l}function mv(l){var r=pv(l,"string");return typeof r=="symbol"?r:r+""}function pv(l,r){if(typeof l!="object"||!l)return l;var c=l[Symbol.toPrimitive];if(c!==void 0){var o=c.call(l,r);if(typeof o!="object")return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return(r==="string"?String:Number)(l)}function pp(l){return l&&l.map((r,c)=>Bt.createElement(r.tag,Kr({key:c},r.attr),pp(r.child)))}function La(l){return r=>Bt.createElement(hv,Zr({attr:Kr({},l.attr)},r),pp(l.child))}function hv(l){var r=c=>{var{attr:o,size:u,title:d}=l,p=uv(l,cv),v=u||c.size||"1em",g;return c.className&&(g=c.className),l.className&&(g=(g?g+" ":"")+l.className),Bt.createElement("svg",Zr({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},c.attr,o,p,{className:g,style:Kr(Kr({color:l.color||c.color},c.style),l.style),height:v,width:v,xmlns:"http://www.w3.org/2000/svg"}),d&&Bt.createElement("title",null,d),l.children)};return w0!==void 0?Bt.createElement(w0.Consumer,null,c=>r(c)):r(mp)}function E0(l){return La({attr:{viewBox:"0 0 576 512"},child:[{tag:"path",attr:{d:"M208 0c-29.9 0-54.7 20.5-61.8 48.2-.8 0-1.4-.2-2.2-.2-35.3 0-64 28.7-64 64 0 4.8.6 9.5 1.7 14C52.5 138 32 166.6 32 200c0 12.6 3.2 24.3 8.3 34.9C16.3 248.7 0 274.3 0 304c0 33.3 20.4 61.9 49.4 73.9-.9 4.6-1.4 9.3-1.4 14.1 0 39.8 32.2 72 72 72 4.1 0 8.1-.5 12-1.2 9.6 28.5 36.2 49.2 68 49.2 39.8 0 72-32.2 72-72V64c0-35.3-28.7-64-64-64zm368 304c0-29.7-16.3-55.3-40.3-69.1 5.2-10.6 8.3-22.3 8.3-34.9 0-33.4-20.5-62-49.7-74 1-4.5 1.7-9.2 1.7-14 0-35.3-28.7-64-64-64-.8 0-1.5.2-2.2.2C422.7 20.5 397.9 0 368 0c-35.3 0-64 28.6-64 64v376c0 39.8 32.2 72 72 72 31.8 0 58.4-20.7 68-49.2 3.9.7 7.9 1.2 12 1.2 39.8 0 72-32.2 72-72 0-4.8-.5-9.5-1.4-14.1 29-12 49.4-40.6 49.4-73.9z"},child:[]}]})(l)}function j0(l){return La({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M496 384H64V80c0-8.84-7.16-16-16-16H16C7.16 64 0 71.16 0 80v336c0 17.67 14.33 32 32 32h464c8.84 0 16-7.16 16-16v-32c0-8.84-7.16-16-16-16zM464 96H345.94c-21.38 0-32.09 25.85-16.97 40.97l32.4 32.4L288 242.75l-73.37-73.37c-12.5-12.5-32.76-12.5-45.25 0l-68.69 68.69c-6.25 6.25-6.25 16.38 0 22.63l22.62 22.62c6.25 6.25 16.38 6.25 22.63 0L192 237.25l73.37 73.37c12.5 12.5 32.76 12.5 45.25 0l96-96 32.4 32.4c15.12 15.12 40.97 4.41 40.97-16.97V112c.01-8.84-7.15-16-15.99-16z"},child:[]}]})(l)}function gv(l){return La({attr:{viewBox:"0 0 640 512"},child:[{tag:"path",attr:{d:"M512.1 191l-8.2 14.3c-3 5.3-9.4 7.5-15.1 5.4-11.8-4.4-22.6-10.7-32.1-18.6-4.6-3.8-5.8-10.5-2.8-15.7l8.2-14.3c-6.9-8-12.3-17.3-15.9-27.4h-16.5c-6 0-11.2-4.3-12.2-10.3-2-12-2.1-24.6 0-37.1 1-6 6.2-10.4 12.2-10.4h16.5c3.6-10.1 9-19.4 15.9-27.4l-8.2-14.3c-3-5.2-1.9-11.9 2.8-15.7 9.5-7.9 20.4-14.2 32.1-18.6 5.7-2.1 12.1.1 15.1 5.4l8.2 14.3c10.5-1.9 21.2-1.9 31.7 0L552 6.3c3-5.3 9.4-7.5 15.1-5.4 11.8 4.4 22.6 10.7 32.1 18.6 4.6 3.8 5.8 10.5 2.8 15.7l-8.2 14.3c6.9 8 12.3 17.3 15.9 27.4h16.5c6 0 11.2 4.3 12.2 10.3 2 12 2.1 24.6 0 37.1-1 6-6.2 10.4-12.2 10.4h-16.5c-3.6 10.1-9 19.4-15.9 27.4l8.2 14.3c3 5.2 1.9 11.9-2.8 15.7-9.5 7.9-20.4 14.2-32.1 18.6-5.7 2.1-12.1-.1-15.1-5.4l-8.2-14.3c-10.4 1.9-21.2 1.9-31.7 0zm-10.5-58.8c38.5 29.6 82.4-14.3 52.8-52.8-38.5-29.7-82.4 14.3-52.8 52.8zM386.3 286.1l33.7 16.8c10.1 5.8 14.5 18.1 10.5 29.1-8.9 24.2-26.4 46.4-42.6 65.8-7.4 8.9-20.2 11.1-30.3 5.3l-29.1-16.8c-16 13.7-34.6 24.6-54.9 31.7v33.6c0 11.6-8.3 21.6-19.7 23.6-24.6 4.2-50.4 4.4-75.9 0-11.5-2-20-11.9-20-23.6V418c-20.3-7.2-38.9-18-54.9-31.7L74 403c-10 5.8-22.9 3.6-30.3-5.3-16.2-19.4-33.3-41.6-42.2-65.7-4-10.9.4-23.2 10.5-29.1l33.3-16.8c-3.9-20.9-3.9-42.4 0-63.4L12 205.8c-10.1-5.8-14.6-18.1-10.5-29 8.9-24.2 26-46.4 42.2-65.8 7.4-8.9 20.2-11.1 30.3-5.3l29.1 16.8c16-13.7 34.6-24.6 54.9-31.7V57.1c0-11.5 8.2-21.5 19.6-23.5 24.6-4.2 50.5-4.4 76-.1 11.5 2 20 11.9 20 23.6v33.6c20.3 7.2 38.9 18 54.9 31.7l29.1-16.8c10-5.8 22.9-3.6 30.3 5.3 16.2 19.4 33.2 41.6 42.1 65.8 4 10.9.1 23.2-10 29.1l-33.7 16.8c3.9 21 3.9 42.5 0 63.5zm-117.6 21.1c59.2-77-28.7-164.9-105.7-105.7-59.2 77 28.7 164.9 105.7 105.7zm243.4 182.7l-8.2 14.3c-3 5.3-9.4 7.5-15.1 5.4-11.8-4.4-22.6-10.7-32.1-18.6-4.6-3.8-5.8-10.5-2.8-15.7l8.2-14.3c-6.9-8-12.3-17.3-15.9-27.4h-16.5c-6 0-11.2-4.3-12.2-10.3-2-12-2.1-24.6 0-37.1 1-6 6.2-10.4 12.2-10.4h16.5c3.6-10.1 9-19.4 15.9-27.4l-8.2-14.3c-3-5.2-1.9-11.9 2.8-15.7 9.5-7.9 20.4-14.2 32.1-18.6 5.7-2.1 12.1.1 15.1 5.4l8.2 14.3c10.5-1.9 21.2-1.9 31.7 0l8.2-14.3c3-5.3 9.4-7.5 15.1-5.4 11.8 4.4 22.6 10.7 32.1 18.6 4.6 3.8 5.8 10.5 2.8 15.7l-8.2 14.3c6.9 8 12.3 17.3 15.9 27.4h16.5c6 0 11.2 4.3 12.2 10.3 2 12 2.1 24.6 0 37.1-1 6-6.2 10.4-12.2 10.4h-16.5c-3.6 10.1-9 19.4-15.9 27.4l8.2 14.3c3 5.2 1.9 11.9-2.8 15.7-9.5 7.9-20.4 14.2-32.1 18.6-5.7 2.1-12.1-.1-15.1-5.4l-8.2-14.3c-10.4 1.9-21.2 1.9-31.7 0zM501.6 431c38.5 29.6 82.4-14.3 52.8-52.8-38.5-29.6-82.4 14.3-52.8 52.8z"},child:[]}]})(l)}function T0(l){return La({attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M448 73.143v45.714C448 159.143 347.667 192 224 192S0 159.143 0 118.857V73.143C0 32.857 100.333 0 224 0s224 32.857 224 73.143zM448 176v102.857C448 319.143 347.667 352 224 352S0 319.143 0 278.857V176c48.125 33.143 136.208 48.572 224 48.572S399.874 209.143 448 176zm0 160v102.857C448 479.143 347.667 512 224 512S0 479.143 0 438.857V336c48.125 33.143 136.208 48.572 224 48.572S399.874 369.143 448 336z"},child:[]}]})(l)}function vv(l){return La({attr:{viewBox:"0 0 640 512"},child:[{tag:"path",attr:{d:"M255.03 261.65c6.25 6.25 16.38 6.25 22.63 0l11.31-11.31c6.25-6.25 6.25-16.38 0-22.63L253.25 192l35.71-35.72c6.25-6.25 6.25-16.38 0-22.63l-11.31-11.31c-6.25-6.25-16.38-6.25-22.63 0l-58.34 58.34c-6.25 6.25-6.25 16.38 0 22.63l58.35 58.34zm96.01-11.3l11.31 11.31c6.25 6.25 16.38 6.25 22.63 0l58.34-58.34c6.25-6.25 6.25-16.38 0-22.63l-58.34-58.34c-6.25-6.25-16.38-6.25-22.63 0l-11.31 11.31c-6.25 6.25-6.25 16.38 0 22.63L386.75 192l-35.71 35.72c-6.25 6.25-6.25 16.38 0 22.63zM624 416H381.54c-.74 19.81-14.71 32-32.74 32H288c-18.69 0-33.02-17.47-32.77-32H16c-8.8 0-16 7.2-16 16v16c0 35.2 28.8 64 64 64h512c35.2 0 64-28.8 64-64v-16c0-8.8-7.2-16-16-16zM576 48c0-26.4-21.6-48-48-48H112C85.6 0 64 21.6 64 48v336h512V48zm-64 272H128V64h384v256z"},child:[]}]})(l)}function yv(l){return La({attr:{viewBox:"0 0 352 512"},child:[{tag:"path",attr:{d:"M96.06 454.35c.01 6.29 1.87 12.45 5.36 17.69l17.09 25.69a31.99 31.99 0 0 0 26.64 14.28h61.71a31.99 31.99 0 0 0 26.64-14.28l17.09-25.69a31.989 31.989 0 0 0 5.36-17.69l.04-38.35H96.01l.05 38.35zM0 176c0 44.37 16.45 84.85 43.56 115.78 16.52 18.85 42.36 58.23 52.21 91.45.04.26.07.52.11.78h160.24c.04-.26.07-.51.11-.78 9.85-33.22 35.69-72.6 52.21-91.45C335.55 260.85 352 220.37 352 176 352 78.61 272.91-.3 175.45 0 73.44.31 0 82.97 0 176zm176-80c-44.11 0-80 35.89-80 80 0 8.84-7.16 16-16 16s-16-7.16-16-16c0-61.76 50.24-112 112-112 8.84 0 16 7.16 16 16s-7.16 16-16 16z"},child:[]}]})(l)}function bv(l){return La({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M466.5 83.7l-192-80a48.15 48.15 0 0 0-36.9 0l-192 80C27.7 91.1 16 108.6 16 128c0 198.5 114.5 335.7 221.5 380.3 11.8 4.9 25.1 4.9 36.9 0C360.1 472.6 496 349.3 496 128c0-19.4-11.7-36.9-29.5-44.3zM256.1 446.3l-.1-381 175.9 73.3c-3.3 151.4-82.1 261.1-175.8 307.7z"},child:[]}]})(l)}function xv(l){return La({attr:{viewBox:"0 0 640 512"},child:[{tag:"path",attr:{d:"M96 224c35.3 0 64-28.7 64-64s-28.7-64-64-64-64 28.7-64 64 28.7 64 64 64zm448 0c35.3 0 64-28.7 64-64s-28.7-64-64-64-64 28.7-64 64 28.7 64 64 64zm32 32h-64c-17.6 0-33.5 7.1-45.1 18.6 40.3 22.1 68.9 62 75.1 109.4h66c17.7 0 32-14.3 32-32v-32c0-35.3-28.7-64-64-64zm-256 0c61.9 0 112-50.1 112-112S381.9 32 320 32 208 82.1 208 144s50.1 112 112 112zm76.8 32h-8.3c-20.8 10-43.9 16-68.5 16s-47.6-6-68.5-16h-8.3C179.6 288 128 339.6 128 403.2V432c0 26.5 21.5 48 48 48h288c26.5 0 48-21.5 48-48v-28.8c0-63.6-51.6-115.2-115.2-115.2zm-223.7-13.4C161.5 263.1 145.6 256 128 256H64c-35.3 0-64 28.7-64 64v32c0 17.7 14.3 32 32 32h65.9c6.3-47.4 34.9-87.3 75.2-109.4z"},child:[]}]})(l)}const wv=`
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
`,Sv=({icon:l,label:r,description:c})=>{const[o,u]=D.useState(!1);return f.jsxs("div",{className:"tech-icon",onMouseEnter:()=>u(!0),onMouseLeave:()=>u(!1),children:[f.jsx("div",{className:`icon-circle ${o?"hovered":""}`,children:f.jsx(l,{})}),f.jsx("h4",{children:r}),f.jsx("p",{className:o?"visible":"",children:c})]})},Ev=({icon:l,title:r,description:c})=>f.jsxs("div",{className:"value-card",children:[f.jsx("div",{className:"value-icon",children:f.jsx(l,{})}),f.jsx("h4",{children:r}),f.jsx("p",{children:c})]});function jv(){const l=[{icon:E0,label:"Intelligence Artificielle",description:"Solutions d'IA adaptées à vos besoins métiers"},{icon:T0,label:"Ingénierie des Données",description:"Architecture et pipelines de données robustes"},{icon:j0,label:"Data Science",description:"Analyse avancée et modélisation prédictive"},{icon:vv,label:"Développement",description:"Applications web et mobile innovantes"}],r=[{icon:bv,title:"Sécurité & Conformité",description:"Respect des normes RGPD et sécurisation de vos données"},{icon:xv,title:"Approche Collaborative",description:"Co-construction avec vos équipes pour un transfert de compétences"},{icon:yv,title:"Innovation Continue",description:"Veille technologique et adoption des dernières innovations"}];return f.jsxs(f.Fragment,{children:[f.jsx("style",{children:wv}),f.jsxs("section",{className:"about-container",id:"about",children:[f.jsx("div",{className:"animated-particles",children:[...Array(15)].map((c,o)=>f.jsx("div",{className:"particle",style:{"--delay":`${Math.random()*10}s`,"--duration":`${Math.random()*20+15}s`,width:`${Math.random()*6+2}px`,height:`${Math.random()*6+2}px`,left:`${Math.random()*100}%`,top:`${Math.random()*100}%`}},o))}),f.jsxs("div",{className:"about-inner",children:[f.jsx("div",{className:"about-header",children:f.jsxs("div",{className:"header-content",children:[f.jsxs("h1",{className:"about-title",children:["Transformez vos ",f.jsx("span",{className:"gradient-text",children:"données"})," en",f.jsx("span",{className:"gradient-text",children:" avantage concurrentiel"})]}),f.jsx("p",{className:"about-subtitle",children:"DigiScia accompagne les entreprises dans leur transition numérique pour exploiter leurs données, devenir data-driven et placer l'intelligence des données au cœur de leur stratégie."})]})}),f.jsxs("div",{className:"about-main",children:[f.jsxs("div",{className:"about-content",children:[f.jsxs("div",{className:"intro-section glass-card",children:[f.jsx("h2",{children:"Qui sommes-nous ?"}),f.jsxs("p",{className:"intro-text",children:[f.jsx("strong",{children:"DigiScia"})," est une Entreprise de Services Numériques (ESN) spécialisée en science des données et intelligence artificielle. Nous aidons les organisations à ",f.jsx("span",{className:"highlight",children:"transformer leurs données en insights actionnables"}),"et à construire une culture data-driven durable."]}),f.jsxs("p",{className:"intro-text",children:["Notre expertise couvre l'ensemble de la chaîne de valeur de la donnée : de la collecte et l'ingénierie des données jusqu'au déploiement de solutions d'IA en production, en garantissant ",f.jsx("span",{className:"highlight",children:"sécurité, conformité et performance"}),"."]})]}),f.jsxs("div",{className:"expertise-section",children:[f.jsx("h2",{children:"Notre Expertise"}),f.jsx("div",{className:"tech-grid",children:l.map((c,o)=>f.jsx(Sv,{icon:c.icon,label:c.label,description:c.description},o))})]})]}),f.jsx("div",{className:"about-visual",children:f.jsxs("div",{className:"data-flow-illustration",children:[f.jsx("div",{className:"data-node node-1",children:f.jsx(T0,{})}),f.jsx("div",{className:"data-node node-2",children:f.jsx(gv,{})}),f.jsx("div",{className:"data-node node-3",children:f.jsx(E0,{})}),f.jsx("div",{className:"data-node node-4",children:f.jsx(j0,{})}),f.jsxs("div",{className:"connection-lines",children:[f.jsx("div",{className:"line line-1"}),f.jsx("div",{className:"line line-2"}),f.jsx("div",{className:"line line-3"})]})]})})]}),f.jsxs("div",{className:"values-section",children:[f.jsx("h2",{children:"Nos Valeurs"}),f.jsx("div",{className:"values-grid",children:r.map((c,o)=>f.jsx(Ev,{icon:c.icon,title:c.title,description:c.description},o))})]})]})]})]})}const Tv=`
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
`,Ac={Rocket:()=>f.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[f.jsx("path",{d:"M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z"}),f.jsx("path",{d:"m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z"}),f.jsx("path",{d:"M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0"}),f.jsx("path",{d:"M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5"})]}),CheckCircle:()=>f.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[f.jsx("path",{d:"M22 11.08V12a10 10 0 1 1-5.93-9.14"}),f.jsx("polyline",{points:"22 4 12 14.01 9 11.01"})]}),Code:()=>f.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[f.jsx("polyline",{points:"16 18 22 12 16 6"}),f.jsx("polyline",{points:"8 6 2 12 8 18"})]})},Ov=[{id:1,title:"DigiScia Academy",description:"Solution d'analyse prédictive basée sur l'IA pour optimiser les processus métiers et prendre des décisions data-driven en temps réel.",status:"Terminé",date:"2024-01-15",category:"Education",image:"https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop&q=80",color:"#5B7CFF"},{id:2,title:"SimpleOQuotidien",description:"Architecture de data lake moderne pour centraliser et gouverner l'ensemble des données de l'entreprise avec une sécurité renforcée.",status:"En cours",date:"2023-12-10",category:"Software Development",image:"https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&h=600&fit=crop&q=80",color:"#8BA3FF"},{id:3,title:"DigiScia Store",description:"Tableaux de bord interactifs en temps réel pour le suivi des KPIs métiers avec visualisations avancées et alertes intelligentes.",status:"En cours",date:"2024-02-20",category:"Software Development",image:"https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop&q=80",color:"#B8AEFF"},{id:4,title:"Domus IA",description:"Tableaux de bord interactifs en temps réel pour le suivi des KPIs métiers avec visualisations avancées et alertes intelligentes.",status:"En cours",date:"2024-02-20",category:"Agentic AI",image:"https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop&q=80",color:"#B8AEFF"},{id:5,title:"Rapidos",description:"Tableaux de bord interactifs en temps réel pour le suivi des KPIs métiers avec visualisations avancées et alertes intelligentes.",status:"En cours",date:"2024-02-20",category:"Agentic AI",image:"https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop&q=80",color:"#B8AEFF"},{id:6,title:"GulmuLLM",description:"Tableaux de bord interactifs en temps réel pour le suivi des KPIs métiers avec visualisations avancées et alertes intelligentes.",status:"En cours",date:"2024-02-20",category:"LLM",image:"https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop&q=80",color:"#B8AEFF"}];function Nv(){const[l,r]=D.useState([]),[c,o]=D.useState(!0),[u,d]=D.useState(null),p=D.useCallback(g=>{switch(g){case"En cours":return f.jsx(Ac.Rocket,{});case"Terminé":return f.jsx(Ac.CheckCircle,{});default:return f.jsx(Ac.Code,{})}},[]);D.useCallback(g=>new Date(g).toLocaleDateString("fr-FR",{day:"numeric",month:"long",year:"numeric"}),[]),D.useEffect(()=>{let g=!0;return(async()=>{try{o(!0),await new Promise(b=>setTimeout(b,1e3)),g&&(r(Ov),o(!1))}catch(b){console.error("Erreur lors de la récupération des projets:",b),g&&(d("Impossible de charger les projets. Veuillez réessayer plus tard."),o(!1))}})(),()=>{g=!1}},[]);const v=D.useMemo(()=>c?f.jsxs("div",{className:"loading-container",children:[f.jsx("div",{className:"loading-spinner"}),f.jsx("p",{className:"loading-text",children:"Chargement des projets..."})]}):u?f.jsxs("div",{className:"error-message",children:[f.jsx("p",{children:u}),f.jsx("button",{className:"retry-button",onClick:()=>window.location.reload(),children:"Réessayer"})]}):l.length===0?f.jsx("div",{className:"no-projects-message",children:f.jsx("p",{children:"Aucun projet disponible pour le moment."})}):l.map((g,h)=>f.jsxs("div",{className:"project-card",style:{"--card-color":g.color,animationDelay:`${h*.1}s`},children:[f.jsx("div",{className:"project-card-header"}),f.jsx("div",{className:"project-status-icon",children:p(g.status)}),f.jsxs("div",{className:"project-card-content",children:[f.jsx("h2",{className:"project-card-title",children:g.title}),f.jsx("p",{className:"project-description",children:g.description}),g.image&&f.jsx("div",{className:"project-image",children:f.jsx("img",{src:g.image,alt:g.title,loading:"lazy"})}),f.jsxs("div",{className:"project-meta",children:[f.jsxs("div",{className:"meta-item",children:[f.jsx("div",{className:"meta-label",children:"Statut"}),f.jsx("div",{className:"meta-value",children:f.jsxs("span",{className:`status-badge ${g.status==="En cours"?"in-progress":"completed"}`,children:[f.jsx("span",{className:"status-dot"}),g.status]})})]}),f.jsxs("div",{className:"meta-item",children:[f.jsx("div",{className:"meta-label",children:"Catégorie"}),f.jsx("div",{className:"meta-value",children:g.category})]})]})]})]},g.id)),[l,c,u,p]);return f.jsxs(f.Fragment,{children:[f.jsx("style",{children:Tv}),f.jsxs("section",{id:"projects",className:"projects-section",children:[f.jsx("div",{className:"grid-background","aria-hidden":"true"}),f.jsxs("div",{className:"projects-content",children:[f.jsxs("div",{className:"projects-header",children:[f.jsx("h1",{className:"projects-title",children:"Nos Projets Innovants"}),f.jsx("p",{className:"projects-subtitle",children:"Découvrez nos réalisations en Data Science et Intelligence Artificielle"})]}),f.jsx("div",{className:"projects-grid",children:v})]})]})]})}const Rv=`
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
`,Av=()=>f.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[f.jsx("circle",{cx:"12",cy:"12",r:"10"}),f.jsx("line",{x1:"2",y1:"12",x2:"22",y2:"12"}),f.jsx("path",{d:"M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"})]}),_v=()=>f.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[f.jsx("path",{d:"M12 2L2 7l10 5 10-5-10-5z"}),f.jsx("path",{d:"M2 17l10 5 10-5"}),f.jsx("path",{d:"M2 12l10 5 10-5"})]}),Cv=()=>f.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[f.jsx("ellipse",{cx:"12",cy:"5",rx:"9",ry:"3"}),f.jsx("path",{d:"M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"}),f.jsx("path",{d:"M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"})]}),zv=()=>f.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[f.jsx("line",{x1:"12",y1:"20",x2:"12",y2:"10"}),f.jsx("line",{x1:"18",y1:"20",x2:"18",y2:"4"}),f.jsx("line",{x1:"6",y1:"20",x2:"6",y2:"16"})]}),Dv=()=>f.jsx("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:f.jsx("path",{d:"M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z"})}),Mv=()=>f.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[f.jsx("polyline",{points:"16 18 22 12 16 6"}),f.jsx("polyline",{points:"8 6 2 12 8 18"})]}),kv=()=>f.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[f.jsx("line",{x1:"5",y1:"12",x2:"19",y2:"12"}),f.jsx("polyline",{points:"12 5 19 12 12 19"})]}),Bv=()=>f.jsx("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:f.jsx("path",{d:"M12 3L14 10L21 12L14 14L12 21L10 14L3 12L10 10L12 3Z"})}),hp=Bt.memo(({service:l,onClose:r})=>{const c=o=>{o.target===o.currentTarget&&r()};return D.useEffect(()=>{const o=u=>{u.key==="Escape"&&r()};return document.addEventListener("keydown",o),()=>document.removeEventListener("keydown",o)},[r]),f.jsx("div",{className:"service-modal active",onClick:c,role:"dialog","aria-modal":"true","aria-labelledby":"modal-title",children:f.jsxs("div",{className:"modal-content",role:"document",children:[f.jsxs("div",{className:"modal-header",children:[f.jsx("h3",{id:"modal-title",className:"modal-title",children:l.title}),f.jsx("button",{className:"modal-close-btn",onClick:r,"aria-label":"Fermer la fenêtre",children:"×"})]}),f.jsxs("div",{className:"modal-body",children:[f.jsx("p",{children:l.fullDescription}),l.features&&l.features.length>0&&f.jsxs(f.Fragment,{children:[f.jsx("h4",{children:"Points Clés"}),f.jsx("ul",{children:l.features.map((o,u)=>f.jsx("li",{children:o},u))})]}),l.useCases&&f.jsxs(f.Fragment,{children:[f.jsx("h4",{children:"Cas d'Usage"}),f.jsx("p",{children:l.useCases})]})]})]})})});hp.displayName="ServiceDetailModal";const gp=Bt.memo(()=>f.jsxs("div",{className:"skeleton-card",role:"status","aria-label":"Chargement du service",children:[f.jsx("div",{className:"skeleton-icon"}),f.jsx("div",{className:"skeleton-title"}),f.jsx("div",{className:"skeleton-text"}),f.jsx("div",{className:"skeleton-text"}),f.jsx("div",{className:"skeleton-text"})]}));gp.displayName="ServiceCardSkeleton";const vp=Bt.memo(({service:l,index:r,onServiceClick:c})=>{const o=D.useCallback(()=>{c==null||c(l)},[c,l]),u=D.useCallback(d=>{(d.key==="Enter"||d.key===" ")&&(d.preventDefault(),o())},[o]);return f.jsxs("article",{className:`service-card stagger-${r+1}`,role:"button",tabIndex:"0",onClick:o,onKeyDown:u,"aria-label":`En savoir plus sur ${l.title}`,style:{"--card-gradient-start":l.gradientStart,"--card-gradient-end":l.gradientEnd},children:[f.jsx("div",{className:"service-category",children:l.category}),f.jsx("div",{className:"service-icon",children:l.icon}),f.jsx("h3",{className:"service-card-title",children:l.title}),f.jsx("p",{className:"service-card-description",children:l.description}),f.jsxs("span",{className:"service-card-link",children:["En savoir plus",f.jsx(kv,{})]})]})});vp.displayName="ServiceCard";function Hv(){const[l,r]=D.useState(!0),[c,o]=D.useState(null);D.useEffect(()=>{const h=setTimeout(()=>{r(!1)},1200);return()=>clearTimeout(h)},[]);const u=D.useMemo(()=>[{id:"web-mobile",title:"Développement Web & Mobile",description:"Applications web modernes et mobiles avec les dernières technologies React, Vue.js et React Native.",icon:f.jsx(Av,{}),category:"Développement",gradientStart:"#5B7CFF",gradientEnd:"#8BA3FF",fullDescription:"Nous concevons et développons des applications web robustes et des expériences mobiles fluides, en utilisant des frameworks de pointe comme React, Vue.js pour le web, et React Native pour des applications multiplateformes performantes. Nos solutions sont responsives, optimisées pour la performance et l'expérience utilisateur, et conçues pour évoluer avec vos besoins.",features:["Développement Front-end (React, Vue.js, Angular)","Développement Back-end (Node.js, Python, PHP)","Applications Mobiles NATIVES et Hybrides (React Native, Flutter)","UX/UI Design intuitif et responsive","Intégration d'API et microservices"],useCases:"Sites e-commerce, plateformes SaaS, applications métier, portails clients, MVP de startups."},{id:"ai",title:"Intelligence Artificielle",description:"Solutions d'IA personnalisées, machine learning et deep learning pour automatiser vos processus.",icon:f.jsx(_v,{}),category:"IA & ML",gradientStart:"#8B5CF6",gradientEnd:"#A78BFA",fullDescription:"Exploitez le potentiel de l'intelligence artificielle pour transformer vos opérations. Nous développons des modèles de Machine Learning et de Deep Learning sur mesure, de la reconnaissance d'images à l'analyse prédictive, en passant par le traitement du langage naturel (NLP). Nos solutions IA sont intégrées de manière transparente à votre infrastructure existante.",features:["Machine Learning & Deep Learning","Traitement du Langage Naturel (NLP)","Vision par Ordinateur","Analyse Prédictive et Recommandation","Bots conversationnels et assistants virtuels"],useCases:"Optimisation de processus, personnalisation de l'expérience client, détection de fraudes, maintenance prédictive, analyse de données non structurées."},{id:"governance",title:"Governance des Données",description:"Stratégies de gouvernance des données pour assurer qualité, sécurité et conformité.",icon:f.jsx(Cv,{}),category:"Gouvernance",gradientStart:"#06B6D4",gradientEnd:"#22D3EE",fullDescription:"La gouvernance des données est essentielle pour une gestion efficace et conforme de votre patrimoine informationnel. Nous vous aidons à établir des politiques, des processus et des rôles clairs pour garantir la qualité, la sécurité, la confidentialité et la conformité réglementaire de vos données, tout en maximisant leur valeur pour votre entreprise.",features:["Audit et Évaluation de la Maturité des Données","Définition de Politiques de Données","Gestion de la Qualité des Données (DQM)","Conformité Réglementaire (RGPD, HIPAA, etc.)","Sécurité et Confidentialité des Données"],useCases:"Mise en conformité RGPD, amélioration de la fiabilité des rapports, réduction des risques liés aux données, optimisation des processus décisionnels."},{id:"bi",title:"Business Intelligence",description:"Tableaux de bord interactifs et rapports analytiques pour une prise de décision éclairée.",icon:f.jsx(zv,{}),category:"Analytics",gradientStart:"#10B981",gradientEnd:"#34D399",fullDescription:"Transformez vos données brutes en informations exploitables avec nos solutions de Business Intelligence. Nous concevons et implémentons des tableaux de bord interactifs, des rapports personnalisés et des outils d'analyse avancés qui vous offrent une vue à 360 degrés de vos performances, facilitant ainsi la prise de décisions stratégiques.",features:["Conception et Développement de Tableaux de Bord","Reporting Automatisé","Analyse Ad-hoc et Exploration de Données","Intégration de Sources de Données Multiples","Formation et Support aux Utilisateurs"],useCases:"Suivi des ventes, analyse financière, optimisation marketing, performance opérationnelle, compréhension du comportement client."},{id:"data-management",title:"Management des données",description:"Architecture et gestion de bases de données scalables pour optimiser vos performances.",icon:f.jsx(Dv,{}),category:"Infrastructure",gradientStart:"#F59E0B",gradientEnd:"#FBBF24",fullDescription:"Une gestion de données efficace est le pilier de toute stratégie digitale réussie. Nous vous accompagnons dans la conception, l'implémentation et la maintenance de vos infrastructures de données, qu'il s'agisse de bases de données relationnelles, NoSQL, ou de data lakes. Nous nous assurons que vos données sont accessibles, sécurisées et performantes.",features:["Modélisation et Conception de Bases de Données","Optimisation des Performances (SQL/NoSQL)","Migration de Données","Sécurité et Sauvegarde des Données","Intégration et ETL (Extract, Transform, Load)"],useCases:"Centralisation des données, amélioration des temps de réponse des applications, préparation des données pour l'analyse, réduction des coûts de stockage."},{id:"devops",title:"DevOps & Cloud",description:"Infrastructure cloud moderne, CI/CD et automatisation pour accélérer vos déploiements.",icon:f.jsx(Mv,{}),category:"Cloud",gradientStart:"#EF4444",gradientEnd:"#F87171",fullDescription:"Accélérez le cycle de vie de vos applications et optimisez votre infrastructure avec nos services DevOps et Cloud. Nous mettons en place des pipelines CI/CD robustes, des infrastructures as Code (IaC) et des stratégies de déploiement continu sur les principales plateformes cloud (AWS, Azure, GCP), garantissant rapidité, fiabilité et scalabilité.",features:["Mise en place de CI/CD (Jenkins, GitLab CI, GitHub Actions)","Infrastructure as Code (Terraform, Ansible)","Conteneurisation (Docker, Kubernetes)","Migration et Optimisation Cloud (AWS, Azure, GCP)","Surveillance et Logging (Prometheus, Grafana, ELK Stack)"],useCases:"Déploiement rapide de nouvelles fonctionnalités, réduction des erreurs de production, scalabilité des applications, optimisation des coûts cloud."}],[]),d=D.useCallback(h=>{o(h)},[]),p=D.useCallback(()=>{o(null)},[]),v=D.useMemo(()=>f.jsx("div",{className:"services-grid",role:"list",children:u.map((h,b)=>f.jsx(vp,{service:h,index:b,onServiceClick:d},h.id))}),[u,d]),g=D.useMemo(()=>f.jsx("div",{className:"services-grid","aria-busy":"true",children:Array.from({length:6},(h,b)=>f.jsx(gp,{},`skeleton-${b}`))}),[]);return f.jsxs(f.Fragment,{children:[f.jsx("style",{children:Rv}),f.jsxs("section",{className:"services-section",id:"services","aria-labelledby":"services-title",children:[f.jsx("div",{className:"grid-overlay","aria-hidden":"true"}),f.jsxs("div",{className:"services-container",children:[f.jsxs("header",{className:"services-header",children:[f.jsxs("div",{className:"services-badge",children:[f.jsx(Bv,{className:"badge-icon"}),"Nos Expertises"]}),f.jsx("h2",{id:"services-title",className:"services-title",children:"Services & Solutions"}),f.jsx("p",{className:"services-subtitle",children:"Des solutions technologiques sur mesure pour transformer votre vision en réalité digitale et propulser votre entreprise vers le futur"})]}),l?g:v]}),c&&f.jsx(hp,{service:c,onClose:p})]})]})}function yp(l,r){return function(){return l.apply(r,arguments)}}const{toString:Lv}=Object.prototype,{getPrototypeOf:Pc}=Object,{iterator:ts,toStringTag:bp}=Symbol,as=(l=>r=>{const c=Lv.call(r);return l[c]||(l[c]=c.slice(8,-1).toLowerCase())})(Object.create(null)),Ht=l=>(l=l.toLowerCase(),r=>as(r)===l),ns=l=>r=>typeof r===l,{isArray:In}=Array,$n=ns("undefined");function ri(l){return l!==null&&!$n(l)&&l.constructor!==null&&!$n(l.constructor)&&ft(l.constructor.isBuffer)&&l.constructor.isBuffer(l)}const xp=Ht("ArrayBuffer");function Uv(l){let r;return typeof ArrayBuffer<"u"&&ArrayBuffer.isView?r=ArrayBuffer.isView(l):r=l&&l.buffer&&xp(l.buffer),r}const qv=ns("string"),ft=ns("function"),wp=ns("number"),si=l=>l!==null&&typeof l=="object",Fv=l=>l===!0||l===!1,Gr=l=>{if(as(l)!=="object")return!1;const r=Pc(l);return(r===null||r===Object.prototype||Object.getPrototypeOf(r)===null)&&!(bp in l)&&!(ts in l)},Yv=l=>{if(!si(l)||ri(l))return!1;try{return Object.keys(l).length===0&&Object.getPrototypeOf(l)===Object.prototype}catch{return!1}},Gv=Ht("Date"),Xv=Ht("File"),Vv=Ht("Blob"),Qv=Ht("FileList"),Zv=l=>si(l)&&ft(l.pipe),Kv=l=>{let r;return l&&(typeof FormData=="function"&&l instanceof FormData||ft(l.append)&&((r=as(l))==="formdata"||r==="object"&&ft(l.toString)&&l.toString()==="[object FormData]"))},Jv=Ht("URLSearchParams"),[$v,Wv,Pv,Iv]=["ReadableStream","Request","Response","Headers"].map(Ht),ey=l=>l.trim?l.trim():l.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"");function oi(l,r,{allOwnKeys:c=!1}={}){if(l===null||typeof l>"u")return;let o,u;if(typeof l!="object"&&(l=[l]),In(l))for(o=0,u=l.length;o<u;o++)r.call(null,l[o],o,l);else{if(ri(l))return;const d=c?Object.getOwnPropertyNames(l):Object.keys(l),p=d.length;let v;for(o=0;o<p;o++)v=d[o],r.call(null,l[v],v,l)}}function Sp(l,r){if(ri(l))return null;r=r.toLowerCase();const c=Object.keys(l);let o=c.length,u;for(;o-- >0;)if(u=c[o],r===u.toLowerCase())return u;return null}const un=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:global,Ep=l=>!$n(l)&&l!==un;function Bc(){const{caseless:l,skipUndefined:r}=Ep(this)&&this||{},c={},o=(u,d)=>{const p=l&&Sp(c,d)||d;Gr(c[p])&&Gr(u)?c[p]=Bc(c[p],u):Gr(u)?c[p]=Bc({},u):In(u)?c[p]=u.slice():(!r||!$n(u))&&(c[p]=u)};for(let u=0,d=arguments.length;u<d;u++)arguments[u]&&oi(arguments[u],o);return c}const ty=(l,r,c,{allOwnKeys:o}={})=>(oi(r,(u,d)=>{c&&ft(u)?l[d]=yp(u,c):l[d]=u},{allOwnKeys:o}),l),ay=l=>(l.charCodeAt(0)===65279&&(l=l.slice(1)),l),ny=(l,r,c,o)=>{l.prototype=Object.create(r.prototype,o),l.prototype.constructor=l,Object.defineProperty(l,"super",{value:r.prototype}),c&&Object.assign(l.prototype,c)},ly=(l,r,c,o)=>{let u,d,p;const v={};if(r=r||{},l==null)return r;do{for(u=Object.getOwnPropertyNames(l),d=u.length;d-- >0;)p=u[d],(!o||o(p,l,r))&&!v[p]&&(r[p]=l[p],v[p]=!0);l=c!==!1&&Pc(l)}while(l&&(!c||c(l,r))&&l!==Object.prototype);return r},iy=(l,r,c)=>{l=String(l),(c===void 0||c>l.length)&&(c=l.length),c-=r.length;const o=l.indexOf(r,c);return o!==-1&&o===c},ry=l=>{if(!l)return null;if(In(l))return l;let r=l.length;if(!wp(r))return null;const c=new Array(r);for(;r-- >0;)c[r]=l[r];return c},sy=(l=>r=>l&&r instanceof l)(typeof Uint8Array<"u"&&Pc(Uint8Array)),oy=(l,r)=>{const o=(l&&l[ts]).call(l);let u;for(;(u=o.next())&&!u.done;){const d=u.value;r.call(l,d[0],d[1])}},cy=(l,r)=>{let c;const o=[];for(;(c=l.exec(r))!==null;)o.push(c);return o},uy=Ht("HTMLFormElement"),fy=l=>l.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g,function(c,o,u){return o.toUpperCase()+u}),O0=(({hasOwnProperty:l})=>(r,c)=>l.call(r,c))(Object.prototype),dy=Ht("RegExp"),jp=(l,r)=>{const c=Object.getOwnPropertyDescriptors(l),o={};oi(c,(u,d)=>{let p;(p=r(u,d,l))!==!1&&(o[d]=p||u)}),Object.defineProperties(l,o)},my=l=>{jp(l,(r,c)=>{if(ft(l)&&["arguments","caller","callee"].indexOf(c)!==-1)return!1;const o=l[c];if(ft(o)){if(r.enumerable=!1,"writable"in r){r.writable=!1;return}r.set||(r.set=()=>{throw Error("Can not rewrite read-only method '"+c+"'")})}})},py=(l,r)=>{const c={},o=u=>{u.forEach(d=>{c[d]=!0})};return In(l)?o(l):o(String(l).split(r)),c},hy=()=>{},gy=(l,r)=>l!=null&&Number.isFinite(l=+l)?l:r;function vy(l){return!!(l&&ft(l.append)&&l[bp]==="FormData"&&l[ts])}const yy=l=>{const r=new Array(10),c=(o,u)=>{if(si(o)){if(r.indexOf(o)>=0)return;if(ri(o))return o;if(!("toJSON"in o)){r[u]=o;const d=In(o)?[]:{};return oi(o,(p,v)=>{const g=c(p,u+1);!$n(g)&&(d[v]=g)}),r[u]=void 0,d}}return o};return c(l,0)},by=Ht("AsyncFunction"),xy=l=>l&&(si(l)||ft(l))&&ft(l.then)&&ft(l.catch),Tp=((l,r)=>l?setImmediate:r?((c,o)=>(un.addEventListener("message",({source:u,data:d})=>{u===un&&d===c&&o.length&&o.shift()()},!1),u=>{o.push(u),un.postMessage(c,"*")}))(`axios@${Math.random()}`,[]):c=>setTimeout(c))(typeof setImmediate=="function",ft(un.postMessage)),wy=typeof queueMicrotask<"u"?queueMicrotask.bind(un):typeof process<"u"&&process.nextTick||Tp,Sy=l=>l!=null&&ft(l[ts]),H={isArray:In,isArrayBuffer:xp,isBuffer:ri,isFormData:Kv,isArrayBufferView:Uv,isString:qv,isNumber:wp,isBoolean:Fv,isObject:si,isPlainObject:Gr,isEmptyObject:Yv,isReadableStream:$v,isRequest:Wv,isResponse:Pv,isHeaders:Iv,isUndefined:$n,isDate:Gv,isFile:Xv,isBlob:Vv,isRegExp:dy,isFunction:ft,isStream:Zv,isURLSearchParams:Jv,isTypedArray:sy,isFileList:Qv,forEach:oi,merge:Bc,extend:ty,trim:ey,stripBOM:ay,inherits:ny,toFlatObject:ly,kindOf:as,kindOfTest:Ht,endsWith:iy,toArray:ry,forEachEntry:oy,matchAll:cy,isHTMLForm:uy,hasOwnProperty:O0,hasOwnProp:O0,reduceDescriptors:jp,freezeMethods:my,toObjectSet:py,toCamelCase:fy,noop:hy,toFiniteNumber:gy,findKey:Sp,global:un,isContextDefined:Ep,isSpecCompliantForm:vy,toJSONObject:yy,isAsyncFn:by,isThenable:xy,setImmediate:Tp,asap:wy,isIterable:Sy};function me(l,r,c,o,u){Error.call(this),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=new Error().stack,this.message=l,this.name="AxiosError",r&&(this.code=r),c&&(this.config=c),o&&(this.request=o),u&&(this.response=u,this.status=u.status?u.status:null)}H.inherits(me,Error,{toJSON:function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:H.toJSONObject(this.config),code:this.code,status:this.status}}});const Op=me.prototype,Np={};["ERR_BAD_OPTION_VALUE","ERR_BAD_OPTION","ECONNABORTED","ETIMEDOUT","ERR_NETWORK","ERR_FR_TOO_MANY_REDIRECTS","ERR_DEPRECATED","ERR_BAD_RESPONSE","ERR_BAD_REQUEST","ERR_CANCELED","ERR_NOT_SUPPORT","ERR_INVALID_URL"].forEach(l=>{Np[l]={value:l}});Object.defineProperties(me,Np);Object.defineProperty(Op,"isAxiosError",{value:!0});me.from=(l,r,c,o,u,d)=>{const p=Object.create(Op);H.toFlatObject(l,p,function(b){return b!==Error.prototype},h=>h!=="isAxiosError");const v=l&&l.message?l.message:"Error",g=r==null&&l?l.code:r;return me.call(p,v,g,c,o,u),l&&p.cause==null&&Object.defineProperty(p,"cause",{value:l,configurable:!0}),p.name=l&&l.name||"Error",d&&Object.assign(p,d),p};const Ey=null;function Hc(l){return H.isPlainObject(l)||H.isArray(l)}function Rp(l){return H.endsWith(l,"[]")?l.slice(0,-2):l}function N0(l,r,c){return l?l.concat(r).map(function(u,d){return u=Rp(u),!c&&d?"["+u+"]":u}).join(c?".":""):r}function jy(l){return H.isArray(l)&&!l.some(Hc)}const Ty=H.toFlatObject(H,{},null,function(r){return/^is[A-Z]/.test(r)});function ls(l,r,c){if(!H.isObject(l))throw new TypeError("target must be an object");r=r||new FormData,c=H.toFlatObject(c,{metaTokens:!0,dots:!1,indexes:!1},!1,function(T,E){return!H.isUndefined(E[T])});const o=c.metaTokens,u=c.visitor||b,d=c.dots,p=c.indexes,g=(c.Blob||typeof Blob<"u"&&Blob)&&H.isSpecCompliantForm(r);if(!H.isFunction(u))throw new TypeError("visitor must be a function");function h(x){if(x===null)return"";if(H.isDate(x))return x.toISOString();if(H.isBoolean(x))return x.toString();if(!g&&H.isBlob(x))throw new me("Blob is not supported. Use a Buffer instead.");return H.isArrayBuffer(x)||H.isTypedArray(x)?g&&typeof Blob=="function"?new Blob([x]):Buffer.from(x):x}function b(x,T,E){let _=x;if(x&&!E&&typeof x=="object"){if(H.endsWith(T,"{}"))T=o?T:T.slice(0,-2),x=JSON.stringify(x);else if(H.isArray(x)&&jy(x)||(H.isFileList(x)||H.endsWith(T,"[]"))&&(_=H.toArray(x)))return T=Rp(T),_.forEach(function(C,Q){!(H.isUndefined(C)||C===null)&&r.append(p===!0?N0([T],Q,d):p===null?T:T+"[]",h(C))}),!1}return Hc(x)?!0:(r.append(N0(E,T,d),h(x)),!1)}const S=[],N=Object.assign(Ty,{defaultVisitor:b,convertValue:h,isVisitable:Hc});function j(x,T){if(!H.isUndefined(x)){if(S.indexOf(x)!==-1)throw Error("Circular reference detected in "+T.join("."));S.push(x),H.forEach(x,function(_,M){(!(H.isUndefined(_)||_===null)&&u.call(r,_,H.isString(M)?M.trim():M,T,N))===!0&&j(_,T?T.concat(M):[M])}),S.pop()}}if(!H.isObject(l))throw new TypeError("data must be an object");return j(l),r}function R0(l){const r={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+","%00":"\0"};return encodeURIComponent(l).replace(/[!'()~]|%20|%00/g,function(o){return r[o]})}function Ic(l,r){this._pairs=[],l&&ls(l,this,r)}const Ap=Ic.prototype;Ap.append=function(r,c){this._pairs.push([r,c])};Ap.toString=function(r){const c=r?function(o){return r.call(this,o,R0)}:R0;return this._pairs.map(function(u){return c(u[0])+"="+c(u[1])},"").join("&")};function Oy(l){return encodeURIComponent(l).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+")}function _p(l,r,c){if(!r)return l;const o=c&&c.encode||Oy;H.isFunction(c)&&(c={serialize:c});const u=c&&c.serialize;let d;if(u?d=u(r,c):d=H.isURLSearchParams(r)?r.toString():new Ic(r,c).toString(o),d){const p=l.indexOf("#");p!==-1&&(l=l.slice(0,p)),l+=(l.indexOf("?")===-1?"?":"&")+d}return l}class A0{constructor(){this.handlers=[]}use(r,c,o){return this.handlers.push({fulfilled:r,rejected:c,synchronous:o?o.synchronous:!1,runWhen:o?o.runWhen:null}),this.handlers.length-1}eject(r){this.handlers[r]&&(this.handlers[r]=null)}clear(){this.handlers&&(this.handlers=[])}forEach(r){H.forEach(this.handlers,function(o){o!==null&&r(o)})}}const Cp={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1},Ny=typeof URLSearchParams<"u"?URLSearchParams:Ic,Ry=typeof FormData<"u"?FormData:null,Ay=typeof Blob<"u"?Blob:null,_y={isBrowser:!0,classes:{URLSearchParams:Ny,FormData:Ry,Blob:Ay},protocols:["http","https","file","blob","url","data"]},eu=typeof window<"u"&&typeof document<"u",Lc=typeof navigator=="object"&&navigator||void 0,Cy=eu&&(!Lc||["ReactNative","NativeScript","NS"].indexOf(Lc.product)<0),zy=typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope&&typeof self.importScripts=="function",Dy=eu&&window.location.href||"http://localhost",My=Object.freeze(Object.defineProperty({__proto__:null,hasBrowserEnv:eu,hasStandardBrowserEnv:Cy,hasStandardBrowserWebWorkerEnv:zy,navigator:Lc,origin:Dy},Symbol.toStringTag,{value:"Module"})),it={...My,..._y};function ky(l,r){return ls(l,new it.classes.URLSearchParams,{visitor:function(c,o,u,d){return it.isNode&&H.isBuffer(c)?(this.append(o,c.toString("base64")),!1):d.defaultVisitor.apply(this,arguments)},...r})}function By(l){return H.matchAll(/\w+|\[(\w*)]/g,l).map(r=>r[0]==="[]"?"":r[1]||r[0])}function Hy(l){const r={},c=Object.keys(l);let o;const u=c.length;let d;for(o=0;o<u;o++)d=c[o],r[d]=l[d];return r}function zp(l){function r(c,o,u,d){let p=c[d++];if(p==="__proto__")return!0;const v=Number.isFinite(+p),g=d>=c.length;return p=!p&&H.isArray(u)?u.length:p,g?(H.hasOwnProp(u,p)?u[p]=[u[p],o]:u[p]=o,!v):((!u[p]||!H.isObject(u[p]))&&(u[p]=[]),r(c,o,u[p],d)&&H.isArray(u[p])&&(u[p]=Hy(u[p])),!v)}if(H.isFormData(l)&&H.isFunction(l.entries)){const c={};return H.forEachEntry(l,(o,u)=>{r(By(o),u,c,0)}),c}return null}function Ly(l,r,c){if(H.isString(l))try{return(r||JSON.parse)(l),H.trim(l)}catch(o){if(o.name!=="SyntaxError")throw o}return(c||JSON.stringify)(l)}const ci={transitional:Cp,adapter:["xhr","http","fetch"],transformRequest:[function(r,c){const o=c.getContentType()||"",u=o.indexOf("application/json")>-1,d=H.isObject(r);if(d&&H.isHTMLForm(r)&&(r=new FormData(r)),H.isFormData(r))return u?JSON.stringify(zp(r)):r;if(H.isArrayBuffer(r)||H.isBuffer(r)||H.isStream(r)||H.isFile(r)||H.isBlob(r)||H.isReadableStream(r))return r;if(H.isArrayBufferView(r))return r.buffer;if(H.isURLSearchParams(r))return c.setContentType("application/x-www-form-urlencoded;charset=utf-8",!1),r.toString();let v;if(d){if(o.indexOf("application/x-www-form-urlencoded")>-1)return ky(r,this.formSerializer).toString();if((v=H.isFileList(r))||o.indexOf("multipart/form-data")>-1){const g=this.env&&this.env.FormData;return ls(v?{"files[]":r}:r,g&&new g,this.formSerializer)}}return d||u?(c.setContentType("application/json",!1),Ly(r)):r}],transformResponse:[function(r){const c=this.transitional||ci.transitional,o=c&&c.forcedJSONParsing,u=this.responseType==="json";if(H.isResponse(r)||H.isReadableStream(r))return r;if(r&&H.isString(r)&&(o&&!this.responseType||u)){const p=!(c&&c.silentJSONParsing)&&u;try{return JSON.parse(r,this.parseReviver)}catch(v){if(p)throw v.name==="SyntaxError"?me.from(v,me.ERR_BAD_RESPONSE,this,null,this.response):v}}return r}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:it.classes.FormData,Blob:it.classes.Blob},validateStatus:function(r){return r>=200&&r<300},headers:{common:{Accept:"application/json, text/plain, */*","Content-Type":void 0}}};H.forEach(["delete","get","head","post","put","patch"],l=>{ci.headers[l]={}});const Uy=H.toObjectSet(["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"]),qy=l=>{const r={};let c,o,u;return l&&l.split(`
`).forEach(function(p){u=p.indexOf(":"),c=p.substring(0,u).trim().toLowerCase(),o=p.substring(u+1).trim(),!(!c||r[c]&&Uy[c])&&(c==="set-cookie"?r[c]?r[c].push(o):r[c]=[o]:r[c]=r[c]?r[c]+", "+o:o)}),r},_0=Symbol("internals");function ti(l){return l&&String(l).trim().toLowerCase()}function Xr(l){return l===!1||l==null?l:H.isArray(l)?l.map(Xr):String(l)}function Fy(l){const r=Object.create(null),c=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;let o;for(;o=c.exec(l);)r[o[1]]=o[2];return r}const Yy=l=>/^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(l.trim());function _c(l,r,c,o,u){if(H.isFunction(o))return o.call(this,r,c);if(u&&(r=c),!!H.isString(r)){if(H.isString(o))return r.indexOf(o)!==-1;if(H.isRegExp(o))return o.test(r)}}function Gy(l){return l.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,(r,c,o)=>c.toUpperCase()+o)}function Xy(l,r){const c=H.toCamelCase(" "+r);["get","set","has"].forEach(o=>{Object.defineProperty(l,o+c,{value:function(u,d,p){return this[o].call(this,r,u,d,p)},configurable:!0})})}let dt=class{constructor(r){r&&this.set(r)}set(r,c,o){const u=this;function d(v,g,h){const b=ti(g);if(!b)throw new Error("header name must be a non-empty string");const S=H.findKey(u,b);(!S||u[S]===void 0||h===!0||h===void 0&&u[S]!==!1)&&(u[S||g]=Xr(v))}const p=(v,g)=>H.forEach(v,(h,b)=>d(h,b,g));if(H.isPlainObject(r)||r instanceof this.constructor)p(r,c);else if(H.isString(r)&&(r=r.trim())&&!Yy(r))p(qy(r),c);else if(H.isObject(r)&&H.isIterable(r)){let v={},g,h;for(const b of r){if(!H.isArray(b))throw TypeError("Object iterator must return a key-value pair");v[h=b[0]]=(g=v[h])?H.isArray(g)?[...g,b[1]]:[g,b[1]]:b[1]}p(v,c)}else r!=null&&d(c,r,o);return this}get(r,c){if(r=ti(r),r){const o=H.findKey(this,r);if(o){const u=this[o];if(!c)return u;if(c===!0)return Fy(u);if(H.isFunction(c))return c.call(this,u,o);if(H.isRegExp(c))return c.exec(u);throw new TypeError("parser must be boolean|regexp|function")}}}has(r,c){if(r=ti(r),r){const o=H.findKey(this,r);return!!(o&&this[o]!==void 0&&(!c||_c(this,this[o],o,c)))}return!1}delete(r,c){const o=this;let u=!1;function d(p){if(p=ti(p),p){const v=H.findKey(o,p);v&&(!c||_c(o,o[v],v,c))&&(delete o[v],u=!0)}}return H.isArray(r)?r.forEach(d):d(r),u}clear(r){const c=Object.keys(this);let o=c.length,u=!1;for(;o--;){const d=c[o];(!r||_c(this,this[d],d,r,!0))&&(delete this[d],u=!0)}return u}normalize(r){const c=this,o={};return H.forEach(this,(u,d)=>{const p=H.findKey(o,d);if(p){c[p]=Xr(u),delete c[d];return}const v=r?Gy(d):String(d).trim();v!==d&&delete c[d],c[v]=Xr(u),o[v]=!0}),this}concat(...r){return this.constructor.concat(this,...r)}toJSON(r){const c=Object.create(null);return H.forEach(this,(o,u)=>{o!=null&&o!==!1&&(c[u]=r&&H.isArray(o)?o.join(", "):o)}),c}[Symbol.iterator](){return Object.entries(this.toJSON())[Symbol.iterator]()}toString(){return Object.entries(this.toJSON()).map(([r,c])=>r+": "+c).join(`
`)}getSetCookie(){return this.get("set-cookie")||[]}get[Symbol.toStringTag](){return"AxiosHeaders"}static from(r){return r instanceof this?r:new this(r)}static concat(r,...c){const o=new this(r);return c.forEach(u=>o.set(u)),o}static accessor(r){const o=(this[_0]=this[_0]={accessors:{}}).accessors,u=this.prototype;function d(p){const v=ti(p);o[v]||(Xy(u,p),o[v]=!0)}return H.isArray(r)?r.forEach(d):d(r),this}};dt.accessor(["Content-Type","Content-Length","Accept","Accept-Encoding","User-Agent","Authorization"]);H.reduceDescriptors(dt.prototype,({value:l},r)=>{let c=r[0].toUpperCase()+r.slice(1);return{get:()=>l,set(o){this[c]=o}}});H.freezeMethods(dt);function Cc(l,r){const c=this||ci,o=r||c,u=dt.from(o.headers);let d=o.data;return H.forEach(l,function(v){d=v.call(c,d,u.normalize(),r?r.status:void 0)}),u.normalize(),d}function Dp(l){return!!(l&&l.__CANCEL__)}function el(l,r,c){me.call(this,l??"canceled",me.ERR_CANCELED,r,c),this.name="CanceledError"}H.inherits(el,me,{__CANCEL__:!0});function Mp(l,r,c){const o=c.config.validateStatus;!c.status||!o||o(c.status)?l(c):r(new me("Request failed with status code "+c.status,[me.ERR_BAD_REQUEST,me.ERR_BAD_RESPONSE][Math.floor(c.status/100)-4],c.config,c.request,c))}function Vy(l){const r=/^([-+\w]{1,25})(:?\/\/|:)/.exec(l);return r&&r[1]||""}function Qy(l,r){l=l||10;const c=new Array(l),o=new Array(l);let u=0,d=0,p;return r=r!==void 0?r:1e3,function(g){const h=Date.now(),b=o[d];p||(p=h),c[u]=g,o[u]=h;let S=d,N=0;for(;S!==u;)N+=c[S++],S=S%l;if(u=(u+1)%l,u===d&&(d=(d+1)%l),h-p<r)return;const j=b&&h-b;return j?Math.round(N*1e3/j):void 0}}function Zy(l,r){let c=0,o=1e3/r,u,d;const p=(h,b=Date.now())=>{c=b,u=null,d&&(clearTimeout(d),d=null),l(...h)};return[(...h)=>{const b=Date.now(),S=b-c;S>=o?p(h,b):(u=h,d||(d=setTimeout(()=>{d=null,p(u)},o-S)))},()=>u&&p(u)]}const Jr=(l,r,c=3)=>{let o=0;const u=Qy(50,250);return Zy(d=>{const p=d.loaded,v=d.lengthComputable?d.total:void 0,g=p-o,h=u(g),b=p<=v;o=p;const S={loaded:p,total:v,progress:v?p/v:void 0,bytes:g,rate:h||void 0,estimated:h&&v&&b?(v-p)/h:void 0,event:d,lengthComputable:v!=null,[r?"download":"upload"]:!0};l(S)},c)},C0=(l,r)=>{const c=l!=null;return[o=>r[0]({lengthComputable:c,total:l,loaded:o}),r[1]]},z0=l=>(...r)=>H.asap(()=>l(...r)),Ky=it.hasStandardBrowserEnv?((l,r)=>c=>(c=new URL(c,it.origin),l.protocol===c.protocol&&l.host===c.host&&(r||l.port===c.port)))(new URL(it.origin),it.navigator&&/(msie|trident)/i.test(it.navigator.userAgent)):()=>!0,Jy=it.hasStandardBrowserEnv?{write(l,r,c,o,u,d,p){if(typeof document>"u")return;const v=[`${l}=${encodeURIComponent(r)}`];H.isNumber(c)&&v.push(`expires=${new Date(c).toUTCString()}`),H.isString(o)&&v.push(`path=${o}`),H.isString(u)&&v.push(`domain=${u}`),d===!0&&v.push("secure"),H.isString(p)&&v.push(`SameSite=${p}`),document.cookie=v.join("; ")},read(l){if(typeof document>"u")return null;const r=document.cookie.match(new RegExp("(?:^|; )"+l+"=([^;]*)"));return r?decodeURIComponent(r[1]):null},remove(l){this.write(l,"",Date.now()-864e5,"/")}}:{write(){},read(){return null},remove(){}};function $y(l){return/^([a-z][a-z\d+\-.]*:)?\/\//i.test(l)}function Wy(l,r){return r?l.replace(/\/?\/$/,"")+"/"+r.replace(/^\/+/,""):l}function kp(l,r,c){let o=!$y(r);return l&&(o||c==!1)?Wy(l,r):r}const D0=l=>l instanceof dt?{...l}:l;function dn(l,r){r=r||{};const c={};function o(h,b,S,N){return H.isPlainObject(h)&&H.isPlainObject(b)?H.merge.call({caseless:N},h,b):H.isPlainObject(b)?H.merge({},b):H.isArray(b)?b.slice():b}function u(h,b,S,N){if(H.isUndefined(b)){if(!H.isUndefined(h))return o(void 0,h,S,N)}else return o(h,b,S,N)}function d(h,b){if(!H.isUndefined(b))return o(void 0,b)}function p(h,b){if(H.isUndefined(b)){if(!H.isUndefined(h))return o(void 0,h)}else return o(void 0,b)}function v(h,b,S){if(S in r)return o(h,b);if(S in l)return o(void 0,h)}const g={url:d,method:d,data:d,baseURL:p,transformRequest:p,transformResponse:p,paramsSerializer:p,timeout:p,timeoutMessage:p,withCredentials:p,withXSRFToken:p,adapter:p,responseType:p,xsrfCookieName:p,xsrfHeaderName:p,onUploadProgress:p,onDownloadProgress:p,decompress:p,maxContentLength:p,maxBodyLength:p,beforeRedirect:p,transport:p,httpAgent:p,httpsAgent:p,cancelToken:p,socketPath:p,responseEncoding:p,validateStatus:v,headers:(h,b,S)=>u(D0(h),D0(b),S,!0)};return H.forEach(Object.keys({...l,...r}),function(b){const S=g[b]||u,N=S(l[b],r[b],b);H.isUndefined(N)&&S!==v||(c[b]=N)}),c}const Bp=l=>{const r=dn({},l);let{data:c,withXSRFToken:o,xsrfHeaderName:u,xsrfCookieName:d,headers:p,auth:v}=r;if(r.headers=p=dt.from(p),r.url=_p(kp(r.baseURL,r.url,r.allowAbsoluteUrls),l.params,l.paramsSerializer),v&&p.set("Authorization","Basic "+btoa((v.username||"")+":"+(v.password?unescape(encodeURIComponent(v.password)):""))),H.isFormData(c)){if(it.hasStandardBrowserEnv||it.hasStandardBrowserWebWorkerEnv)p.setContentType(void 0);else if(H.isFunction(c.getHeaders)){const g=c.getHeaders(),h=["content-type","content-length"];Object.entries(g).forEach(([b,S])=>{h.includes(b.toLowerCase())&&p.set(b,S)})}}if(it.hasStandardBrowserEnv&&(o&&H.isFunction(o)&&(o=o(r)),o||o!==!1&&Ky(r.url))){const g=u&&d&&Jy.read(d);g&&p.set(u,g)}return r},Py=typeof XMLHttpRequest<"u",Iy=Py&&function(l){return new Promise(function(c,o){const u=Bp(l);let d=u.data;const p=dt.from(u.headers).normalize();let{responseType:v,onUploadProgress:g,onDownloadProgress:h}=u,b,S,N,j,x;function T(){j&&j(),x&&x(),u.cancelToken&&u.cancelToken.unsubscribe(b),u.signal&&u.signal.removeEventListener("abort",b)}let E=new XMLHttpRequest;E.open(u.method.toUpperCase(),u.url,!0),E.timeout=u.timeout;function _(){if(!E)return;const C=dt.from("getAllResponseHeaders"in E&&E.getAllResponseHeaders()),X={data:!v||v==="text"||v==="json"?E.responseText:E.response,status:E.status,statusText:E.statusText,headers:C,config:l,request:E};Mp(function(J){c(J),T()},function(J){o(J),T()},X),E=null}"onloadend"in E?E.onloadend=_:E.onreadystatechange=function(){!E||E.readyState!==4||E.status===0&&!(E.responseURL&&E.responseURL.indexOf("file:")===0)||setTimeout(_)},E.onabort=function(){E&&(o(new me("Request aborted",me.ECONNABORTED,l,E)),E=null)},E.onerror=function(Q){const X=Q&&Q.message?Q.message:"Network Error",$=new me(X,me.ERR_NETWORK,l,E);$.event=Q||null,o($),E=null},E.ontimeout=function(){let Q=u.timeout?"timeout of "+u.timeout+"ms exceeded":"timeout exceeded";const X=u.transitional||Cp;u.timeoutErrorMessage&&(Q=u.timeoutErrorMessage),o(new me(Q,X.clarifyTimeoutError?me.ETIMEDOUT:me.ECONNABORTED,l,E)),E=null},d===void 0&&p.setContentType(null),"setRequestHeader"in E&&H.forEach(p.toJSON(),function(Q,X){E.setRequestHeader(X,Q)}),H.isUndefined(u.withCredentials)||(E.withCredentials=!!u.withCredentials),v&&v!=="json"&&(E.responseType=u.responseType),h&&([N,x]=Jr(h,!0),E.addEventListener("progress",N)),g&&E.upload&&([S,j]=Jr(g),E.upload.addEventListener("progress",S),E.upload.addEventListener("loadend",j)),(u.cancelToken||u.signal)&&(b=C=>{E&&(o(!C||C.type?new el(null,l,E):C),E.abort(),E=null)},u.cancelToken&&u.cancelToken.subscribe(b),u.signal&&(u.signal.aborted?b():u.signal.addEventListener("abort",b)));const M=Vy(u.url);if(M&&it.protocols.indexOf(M)===-1){o(new me("Unsupported protocol "+M+":",me.ERR_BAD_REQUEST,l));return}E.send(d||null)})},e5=(l,r)=>{const{length:c}=l=l?l.filter(Boolean):[];if(r||c){let o=new AbortController,u;const d=function(h){if(!u){u=!0,v();const b=h instanceof Error?h:this.reason;o.abort(b instanceof me?b:new el(b instanceof Error?b.message:b))}};let p=r&&setTimeout(()=>{p=null,d(new me(`timeout ${r} of ms exceeded`,me.ETIMEDOUT))},r);const v=()=>{l&&(p&&clearTimeout(p),p=null,l.forEach(h=>{h.unsubscribe?h.unsubscribe(d):h.removeEventListener("abort",d)}),l=null)};l.forEach(h=>h.addEventListener("abort",d));const{signal:g}=o;return g.unsubscribe=()=>H.asap(v),g}},t5=function*(l,r){let c=l.byteLength;if(c<r){yield l;return}let o=0,u;for(;o<c;)u=o+r,yield l.slice(o,u),o=u},a5=async function*(l,r){for await(const c of n5(l))yield*t5(c,r)},n5=async function*(l){if(l[Symbol.asyncIterator]){yield*l;return}const r=l.getReader();try{for(;;){const{done:c,value:o}=await r.read();if(c)break;yield o}}finally{await r.cancel()}},M0=(l,r,c,o)=>{const u=a5(l,r);let d=0,p,v=g=>{p||(p=!0,o&&o(g))};return new ReadableStream({async pull(g){try{const{done:h,value:b}=await u.next();if(h){v(),g.close();return}let S=b.byteLength;if(c){let N=d+=S;c(N)}g.enqueue(new Uint8Array(b))}catch(h){throw v(h),h}},cancel(g){return v(g),u.return()}},{highWaterMark:2})},k0=64*1024,{isFunction:qr}=H,l5=(({Request:l,Response:r})=>({Request:l,Response:r}))(H.global),{ReadableStream:B0,TextEncoder:H0}=H.global,L0=(l,...r)=>{try{return!!l(...r)}catch{return!1}},i5=l=>{l=H.merge.call({skipUndefined:!0},l5,l);const{fetch:r,Request:c,Response:o}=l,u=r?qr(r):typeof fetch=="function",d=qr(c),p=qr(o);if(!u)return!1;const v=u&&qr(B0),g=u&&(typeof H0=="function"?(x=>T=>x.encode(T))(new H0):async x=>new Uint8Array(await new c(x).arrayBuffer())),h=d&&v&&L0(()=>{let x=!1;const T=new c(it.origin,{body:new B0,method:"POST",get duplex(){return x=!0,"half"}}).headers.has("Content-Type");return x&&!T}),b=p&&v&&L0(()=>H.isReadableStream(new o("").body)),S={stream:b&&(x=>x.body)};u&&["text","arrayBuffer","blob","formData","stream"].forEach(x=>{!S[x]&&(S[x]=(T,E)=>{let _=T&&T[x];if(_)return _.call(T);throw new me(`Response type '${x}' is not supported`,me.ERR_NOT_SUPPORT,E)})});const N=async x=>{if(x==null)return 0;if(H.isBlob(x))return x.size;if(H.isSpecCompliantForm(x))return(await new c(it.origin,{method:"POST",body:x}).arrayBuffer()).byteLength;if(H.isArrayBufferView(x)||H.isArrayBuffer(x))return x.byteLength;if(H.isURLSearchParams(x)&&(x=x+""),H.isString(x))return(await g(x)).byteLength},j=async(x,T)=>{const E=H.toFiniteNumber(x.getContentLength());return E??N(T)};return async x=>{let{url:T,method:E,data:_,signal:M,cancelToken:C,timeout:Q,onDownloadProgress:X,onUploadProgress:$,responseType:J,headers:ie,withCredentials:Y="same-origin",fetchOptions:Z}=Bp(x),W=r||fetch;J=J?(J+"").toLowerCase():"text";let U=e5([M,C&&C.toAbortSignal()],Q),ee=null;const P=U&&U.unsubscribe&&(()=>{U.unsubscribe()});let Se;try{if($&&h&&E!=="get"&&E!=="head"&&(Se=await j(ie,_))!==0){let G=new c(T,{method:"POST",body:_,duplex:"half"}),ae;if(H.isFormData(_)&&(ae=G.headers.get("content-type"))&&ie.setContentType(ae),G.body){const[ne,I]=C0(Se,Jr(z0($)));_=M0(G.body,k0,ne,I)}}H.isString(Y)||(Y=Y?"include":"omit");const K=d&&"credentials"in c.prototype,se={...Z,signal:U,method:E.toUpperCase(),headers:ie.normalize().toJSON(),body:_,duplex:"half",credentials:K?Y:void 0};ee=d&&new c(T,se);let te=await(d?W(ee,Z):W(T,se));const be=b&&(J==="stream"||J==="response");if(b&&(X||be&&P)){const G={};["status","statusText","headers"].forEach(pe=>{G[pe]=te[pe]});const ae=H.toFiniteNumber(te.headers.get("content-length")),[ne,I]=X&&C0(ae,Jr(z0(X),!0))||[];te=new o(M0(te.body,k0,ne,()=>{I&&I(),P&&P()}),G)}J=J||"text";let O=await S[H.findKey(S,J)||"text"](te,x);return!be&&P&&P(),await new Promise((G,ae)=>{Mp(G,ae,{data:O,headers:dt.from(te.headers),status:te.status,statusText:te.statusText,config:x,request:ee})})}catch(K){throw P&&P(),K&&K.name==="TypeError"&&/Load failed|fetch/i.test(K.message)?Object.assign(new me("Network Error",me.ERR_NETWORK,x,ee),{cause:K.cause||K}):me.from(K,K&&K.code,x,ee)}}},r5=new Map,Hp=l=>{let r=l&&l.env||{};const{fetch:c,Request:o,Response:u}=r,d=[o,u,c];let p=d.length,v=p,g,h,b=r5;for(;v--;)g=d[v],h=b.get(g),h===void 0&&b.set(g,h=v?new Map:i5(r)),b=h;return h};Hp();const tu={http:Ey,xhr:Iy,fetch:{get:Hp}};H.forEach(tu,(l,r)=>{if(l){try{Object.defineProperty(l,"name",{value:r})}catch{}Object.defineProperty(l,"adapterName",{value:r})}});const U0=l=>`- ${l}`,s5=l=>H.isFunction(l)||l===null||l===!1;function o5(l,r){l=H.isArray(l)?l:[l];const{length:c}=l;let o,u;const d={};for(let p=0;p<c;p++){o=l[p];let v;if(u=o,!s5(o)&&(u=tu[(v=String(o)).toLowerCase()],u===void 0))throw new me(`Unknown adapter '${v}'`);if(u&&(H.isFunction(u)||(u=u.get(r))))break;d[v||"#"+p]=u}if(!u){const p=Object.entries(d).map(([g,h])=>`adapter ${g} `+(h===!1?"is not supported by the environment":"is not available in the build"));let v=c?p.length>1?`since :
`+p.map(U0).join(`
`):" "+U0(p[0]):"as no adapter specified";throw new me("There is no suitable adapter to dispatch the request "+v,"ERR_NOT_SUPPORT")}return u}const Lp={getAdapter:o5,adapters:tu};function zc(l){if(l.cancelToken&&l.cancelToken.throwIfRequested(),l.signal&&l.signal.aborted)throw new el(null,l)}function q0(l){return zc(l),l.headers=dt.from(l.headers),l.data=Cc.call(l,l.transformRequest),["post","put","patch"].indexOf(l.method)!==-1&&l.headers.setContentType("application/x-www-form-urlencoded",!1),Lp.getAdapter(l.adapter||ci.adapter,l)(l).then(function(o){return zc(l),o.data=Cc.call(l,l.transformResponse,o),o.headers=dt.from(o.headers),o},function(o){return Dp(o)||(zc(l),o&&o.response&&(o.response.data=Cc.call(l,l.transformResponse,o.response),o.response.headers=dt.from(o.response.headers))),Promise.reject(o)})}const Up="1.13.2",is={};["object","boolean","number","function","string","symbol"].forEach((l,r)=>{is[l]=function(o){return typeof o===l||"a"+(r<1?"n ":" ")+l}});const F0={};is.transitional=function(r,c,o){function u(d,p){return"[Axios v"+Up+"] Transitional option '"+d+"'"+p+(o?". "+o:"")}return(d,p,v)=>{if(r===!1)throw new me(u(p," has been removed"+(c?" in "+c:"")),me.ERR_DEPRECATED);return c&&!F0[p]&&(F0[p]=!0,console.warn(u(p," has been deprecated since v"+c+" and will be removed in the near future"))),r?r(d,p,v):!0}};is.spelling=function(r){return(c,o)=>(console.warn(`${o} is likely a misspelling of ${r}`),!0)};function c5(l,r,c){if(typeof l!="object")throw new me("options must be an object",me.ERR_BAD_OPTION_VALUE);const o=Object.keys(l);let u=o.length;for(;u-- >0;){const d=o[u],p=r[d];if(p){const v=l[d],g=v===void 0||p(v,d,l);if(g!==!0)throw new me("option "+d+" must be "+g,me.ERR_BAD_OPTION_VALUE);continue}if(c!==!0)throw new me("Unknown option "+d,me.ERR_BAD_OPTION)}}const Vr={assertOptions:c5,validators:is},Xt=Vr.validators;let fn=class{constructor(r){this.defaults=r||{},this.interceptors={request:new A0,response:new A0}}async request(r,c){try{return await this._request(r,c)}catch(o){if(o instanceof Error){let u={};Error.captureStackTrace?Error.captureStackTrace(u):u=new Error;const d=u.stack?u.stack.replace(/^.+\n/,""):"";try{o.stack?d&&!String(o.stack).endsWith(d.replace(/^.+\n.+\n/,""))&&(o.stack+=`
`+d):o.stack=d}catch{}}throw o}}_request(r,c){typeof r=="string"?(c=c||{},c.url=r):c=r||{},c=dn(this.defaults,c);const{transitional:o,paramsSerializer:u,headers:d}=c;o!==void 0&&Vr.assertOptions(o,{silentJSONParsing:Xt.transitional(Xt.boolean),forcedJSONParsing:Xt.transitional(Xt.boolean),clarifyTimeoutError:Xt.transitional(Xt.boolean)},!1),u!=null&&(H.isFunction(u)?c.paramsSerializer={serialize:u}:Vr.assertOptions(u,{encode:Xt.function,serialize:Xt.function},!0)),c.allowAbsoluteUrls!==void 0||(this.defaults.allowAbsoluteUrls!==void 0?c.allowAbsoluteUrls=this.defaults.allowAbsoluteUrls:c.allowAbsoluteUrls=!0),Vr.assertOptions(c,{baseUrl:Xt.spelling("baseURL"),withXsrfToken:Xt.spelling("withXSRFToken")},!0),c.method=(c.method||this.defaults.method||"get").toLowerCase();let p=d&&H.merge(d.common,d[c.method]);d&&H.forEach(["delete","get","head","post","put","patch","common"],x=>{delete d[x]}),c.headers=dt.concat(p,d);const v=[];let g=!0;this.interceptors.request.forEach(function(T){typeof T.runWhen=="function"&&T.runWhen(c)===!1||(g=g&&T.synchronous,v.unshift(T.fulfilled,T.rejected))});const h=[];this.interceptors.response.forEach(function(T){h.push(T.fulfilled,T.rejected)});let b,S=0,N;if(!g){const x=[q0.bind(this),void 0];for(x.unshift(...v),x.push(...h),N=x.length,b=Promise.resolve(c);S<N;)b=b.then(x[S++],x[S++]);return b}N=v.length;let j=c;for(;S<N;){const x=v[S++],T=v[S++];try{j=x(j)}catch(E){T.call(this,E);break}}try{b=q0.call(this,j)}catch(x){return Promise.reject(x)}for(S=0,N=h.length;S<N;)b=b.then(h[S++],h[S++]);return b}getUri(r){r=dn(this.defaults,r);const c=kp(r.baseURL,r.url,r.allowAbsoluteUrls);return _p(c,r.params,r.paramsSerializer)}};H.forEach(["delete","get","head","options"],function(r){fn.prototype[r]=function(c,o){return this.request(dn(o||{},{method:r,url:c,data:(o||{}).data}))}});H.forEach(["post","put","patch"],function(r){function c(o){return function(d,p,v){return this.request(dn(v||{},{method:r,headers:o?{"Content-Type":"multipart/form-data"}:{},url:d,data:p}))}}fn.prototype[r]=c(),fn.prototype[r+"Form"]=c(!0)});let u5=class qp{constructor(r){if(typeof r!="function")throw new TypeError("executor must be a function.");let c;this.promise=new Promise(function(d){c=d});const o=this;this.promise.then(u=>{if(!o._listeners)return;let d=o._listeners.length;for(;d-- >0;)o._listeners[d](u);o._listeners=null}),this.promise.then=u=>{let d;const p=new Promise(v=>{o.subscribe(v),d=v}).then(u);return p.cancel=function(){o.unsubscribe(d)},p},r(function(d,p,v){o.reason||(o.reason=new el(d,p,v),c(o.reason))})}throwIfRequested(){if(this.reason)throw this.reason}subscribe(r){if(this.reason){r(this.reason);return}this._listeners?this._listeners.push(r):this._listeners=[r]}unsubscribe(r){if(!this._listeners)return;const c=this._listeners.indexOf(r);c!==-1&&this._listeners.splice(c,1)}toAbortSignal(){const r=new AbortController,c=o=>{r.abort(o)};return this.subscribe(c),r.signal.unsubscribe=()=>this.unsubscribe(c),r.signal}static source(){let r;return{token:new qp(function(u){r=u}),cancel:r}}};function f5(l){return function(c){return l.apply(null,c)}}function d5(l){return H.isObject(l)&&l.isAxiosError===!0}const Uc={Continue:100,SwitchingProtocols:101,Processing:102,EarlyHints:103,Ok:200,Created:201,Accepted:202,NonAuthoritativeInformation:203,NoContent:204,ResetContent:205,PartialContent:206,MultiStatus:207,AlreadyReported:208,ImUsed:226,MultipleChoices:300,MovedPermanently:301,Found:302,SeeOther:303,NotModified:304,UseProxy:305,Unused:306,TemporaryRedirect:307,PermanentRedirect:308,BadRequest:400,Unauthorized:401,PaymentRequired:402,Forbidden:403,NotFound:404,MethodNotAllowed:405,NotAcceptable:406,ProxyAuthenticationRequired:407,RequestTimeout:408,Conflict:409,Gone:410,LengthRequired:411,PreconditionFailed:412,PayloadTooLarge:413,UriTooLong:414,UnsupportedMediaType:415,RangeNotSatisfiable:416,ExpectationFailed:417,ImATeapot:418,MisdirectedRequest:421,UnprocessableEntity:422,Locked:423,FailedDependency:424,TooEarly:425,UpgradeRequired:426,PreconditionRequired:428,TooManyRequests:429,RequestHeaderFieldsTooLarge:431,UnavailableForLegalReasons:451,InternalServerError:500,NotImplemented:501,BadGateway:502,ServiceUnavailable:503,GatewayTimeout:504,HttpVersionNotSupported:505,VariantAlsoNegotiates:506,InsufficientStorage:507,LoopDetected:508,NotExtended:510,NetworkAuthenticationRequired:511,WebServerIsDown:521,ConnectionTimedOut:522,OriginIsUnreachable:523,TimeoutOccurred:524,SslHandshakeFailed:525,InvalidSslCertificate:526};Object.entries(Uc).forEach(([l,r])=>{Uc[r]=l});function Fp(l){const r=new fn(l),c=yp(fn.prototype.request,r);return H.extend(c,fn.prototype,r,{allOwnKeys:!0}),H.extend(c,r,null,{allOwnKeys:!0}),c.create=function(u){return Fp(dn(l,u))},c}const qe=Fp(ci);qe.Axios=fn;qe.CanceledError=el;qe.CancelToken=u5;qe.isCancel=Dp;qe.VERSION=Up;qe.toFormData=ls;qe.AxiosError=me;qe.Cancel=qe.CanceledError;qe.all=function(r){return Promise.all(r)};qe.spread=f5;qe.isAxiosError=d5;qe.mergeConfig=dn;qe.AxiosHeaders=dt;qe.formToJSON=l=>zp(H.isHTMLForm(l)?new FormData(l):l);qe.getAdapter=Lp.getAdapter;qe.HttpStatusCode=Uc;qe.default=qe;const{Axios:I5,AxiosError:eb,CanceledError:tb,isCancel:ab,CancelToken:nb,VERSION:lb,all:ib,Cancel:rb,isAxiosError:sb,spread:ob,toFormData:cb,AxiosHeaders:ub,HttpStatusCode:fb,formToJSON:db,getAdapter:mb,mergeConfig:pb}=qe,m5="http://127.0.0.1:8000",p5=qe.create({baseURL:m5,headers:{"Content-Type":"application/json"}}),qc=async()=>{try{return(await p5.get("http://127.0.0.1:8000/api/v1/news/")).data}catch(l){return console.error("Erreur lors de la création de la prise de contact :",l),[]}};function h5(){return f.jsxs(f.Fragment,{children:[f.jsx("style",{children:`
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
      `}),f.jsxs("div",{className:"la-loading-container",children:[f.jsx("div",{className:"la-particles",children:[...Array(9)].map((l,r)=>f.jsx("div",{className:"la-particle"},r))}),f.jsxs("div",{className:"la-spinner-wrapper",children:[f.jsx("div",{className:"la-spinner-outer"}),f.jsx("div",{className:"la-spinner-middle"}),f.jsx("div",{className:"la-spinner"})]}),f.jsxs("div",{className:"la-loading-content",children:[f.jsx("div",{className:"la-loading-text",children:"Chargement des actualités"}),f.jsx("div",{className:"la-loading-subtext",children:"Récupération des dernières informations..."}),f.jsxs("div",{className:"la-progress-dots",children:[f.jsx("div",{className:"la-dot"}),f.jsx("div",{className:"la-dot"}),f.jsx("div",{className:"la-dot"})]})]}),f.jsxs("div",{className:"la-loading-tips",children:[f.jsxs("div",{className:"la-tip-card",children:[f.jsx("div",{className:"la-tip-icon",children:"📰"}),f.jsx("div",{className:"la-tip-text",children:"Découvrez nos dernières innovations et projets en cours"})]}),f.jsxs("div",{className:"la-tip-card",children:[f.jsx("div",{className:"la-tip-icon",children:"🚀"}),f.jsx("div",{className:"la-tip-text",children:"Restez informé des tendances tech et des actualités du secteur"})]}),f.jsxs("div",{className:"la-tip-card",children:[f.jsx("div",{className:"la-tip-icon",children:"💡"}),f.jsx("div",{className:"la-tip-text",children:"Explorez nos success stories et témoignages clients"})]})]})]})]})}const g5=`
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
`,v5=()=>f.jsxs("svg",{className:"date-icon",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[f.jsx("rect",{x:"3",y:"4",width:"18",height:"18",rx:"2",ry:"2"}),f.jsx("line",{x1:"16",y1:"2",x2:"16",y2:"6"}),f.jsx("line",{x1:"8",y1:"2",x2:"8",y2:"6"}),f.jsx("line",{x1:"3",y1:"10",x2:"21",y2:"10"})]}),y5=()=>f.jsx("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:f.jsx("polyline",{points:"20 6 9 17 4 12"})});function b5(){const[l,r]=D.useState(""),[c,o]=D.useState(!1),[u,d]=D.useState([]),[p,v]=D.useState(""),[g,h]=D.useState(!0),b=D.useRef(null),S=Gc();D.useEffect(()=>{async function M(){h(!0);try{const C=await qc();Array.isArray(C)?d(C.sort((Q,X)=>new Date(X.date)-new Date(Q.date))):(console.error("fetchNews() n'a pas retourné un tableau :",C),d([]))}catch(C){console.error("Erreur lors de la récupération des actualités :",C),d([])}finally{h(!1)}}M()},[]);const N=M=>{r(M.target.value),v("")},j=async M=>{M.preventDefault();try{await qe.post("http://127.0.0.1:8000/api/v1/suscribers/create",{email:l}),o(!0),r(""),v("")}catch(C){console.error("Erreur lors de l'inscription à la newsletter :",C),C.response&&C.response.data?C.response.data.email&&Array.isArray(C.response.data.email)?v("Vous êtes déjà inscrit 😉!"):v("Une erreur est survenue. Veuillez réessayer."):C.request?v("Impossible de joindre le serveur."):v("Une erreur s'est produite. Veuillez réessayer.")}},x=M=>{var Q;const C=M==="left"?-350:350;(Q=b.current)==null||Q.scrollBy({left:C,behavior:"smooth"})},T=M=>M.toLowerCase().replace(/[^\w\s-]/g,"").replace(/\s+/g,"-").replace(/--+/g,"-"),E=M=>{const C=T(M.title);localStorage.setItem("currentArticle",JSON.stringify(M)),S(`/article/${M.id}/${C}`),window.scrollTo(0,0)},_=M=>{if(!M)return"";try{return new Date(M).toLocaleDateString("fr-FR",{year:"numeric",month:"long",day:"numeric",hour:"2-digit",minute:"2-digit"})}catch(C){return console.error("Erreur formatage date:",C,M),"Date invalide"}};return f.jsxs(f.Fragment,{children:[f.jsx("style",{children:g5}),f.jsxs("section",{className:"news-section",id:"news",children:[f.jsx("div",{className:"grid-pattern","aria-hidden":"true"}),f.jsxs("div",{className:"news-container",children:[f.jsxs("header",{className:"news-header",children:[f.jsx("div",{className:"news-badge",children:"📰 Actualités"}),f.jsx("h2",{className:"news-title",children:"Dernières Nouvelles"}),f.jsx("p",{className:"news-subtitle",children:"Restez informé des dernières actualités, innovations et événements de DigiScia"})]}),f.jsxs("div",{className:"carousel-wrapper",children:[f.jsx("button",{className:"carousel-nav carousel-prev",onClick:()=>x("left"),"aria-label":"Article précédent",children:"‹"}),f.jsx("div",{className:"news-carousel",ref:b,children:g?f.jsx(h5,{}):u.length>0?u.map(M=>f.jsxs("article",{className:"news-card",children:[f.jsxs("div",{className:"news-image-container",children:[f.jsx("img",{src:M.image,alt:M.title,className:"news-image",loading:"lazy",onError:C=>{C.target.src="/images/placeholder.jpg"}}),f.jsx("div",{className:"news-overlay",children:f.jsx("button",{className:"read-more-btn","aria-label":`Lire: ${M.title}`,onClick:()=>E(M),children:"Lire l'article"})})]}),f.jsxs("div",{className:"news-content",children:[f.jsxs("div",{className:"news-date",children:[f.jsx(v5,{}),_(M.date)]}),f.jsx("h3",{className:"news-card-title",children:M.title})]})]},M.id)):f.jsx("div",{className:"loading-state",children:f.jsx("p",{className:"loading-text",children:"Aucune actualité disponible."})})}),f.jsx("button",{className:"carousel-nav carousel-next",onClick:()=>x("right"),"aria-label":"Article suivant",children:"›"})]}),f.jsxs("div",{className:"newsletter-section",children:[f.jsx("h3",{className:"newsletter-title",children:"Restez Connecté"}),f.jsx("p",{className:"newsletter-description",children:"Inscrivez-vous à notre newsletter pour recevoir nos dernières actualités"}),c?f.jsxs("div",{className:"thank-you-message",children:[f.jsx(y5,{}),"Merci de faire partie de notre communauté !"]}):f.jsxs("div",{children:[f.jsxs("form",{onSubmit:j,className:"newsletter-form",children:[f.jsx("input",{type:"email",value:l,onChange:N,placeholder:"votre.email@exemple.com",className:"newsletter-input","aria-label":"Adresse email",required:!0}),f.jsx("button",{type:"submit",className:"newsletter-btn",children:"S'inscrire"})]}),p&&f.jsx("div",{className:"error-message",role:"alert",children:p})]})]})]})]})]})}const x5="/assets/fidele-D00H2YQJ.jpg",w5="/assets/souleymane-CTbS3LDQ.jpg",S5="/assets/sylvius-CWrvX6wv.jpg",E5="/assets/narcisse-DEnjGynH.jpg",j5="/assets/philjacq-p5O9FleB.jpg",T5="/assets/abdel-Wflnv7Gu.jpg",O5=`
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

.team-section {
  position: relative;
  min-height: 100vh;
  width: 100%;
  background: #00093D;
  padding: clamp(3rem, 6vw, 6rem) clamp(1rem, 4vw, 2rem);
  overflow: hidden;
}

/* Fond animé */
.team-section::before {
  content: '';
  position: fixed;
  top: -30%;
  left: -20%;
  width: 80%;
  height: 120%;
  background: radial-gradient(circle, rgba(91, 124, 255, 0.1) 0%, transparent 70%);
  animation: floatBg 30s infinite ease-in-out;
  pointer-events: none;
  z-index: 0;
}

.team-section::after {
  content: '';
  position: fixed;
  bottom: -30%;
  right: -20%;
  width: 70%;
  height: 100%;
  background: radial-gradient(circle, rgba(139, 163, 255, 0.08) 0%, transparent 70%);
  animation: floatBg 25s infinite ease-in-out reverse;
  pointer-events: none;
  z-index: 0;
}

@keyframes floatBg {
  0%, 100% { transform: translate(0, 0) scale(1); }
  50% { transform: translate(-30px, -30px) scale(1.1); }
}

.grid-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: 
    radial-gradient(circle, rgba(91, 124, 255, 0.1) 1px, transparent 1px);
  background-size: 50px 50px;
  opacity: 0.3;
  pointer-events: none;
  z-index: 0;
}

.team-container {
  position: relative;
  z-index: 1;
  max-width: 1400px;
  margin: 0 auto;
}

/* Header */
.team-header {
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

.team-badge {
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

.team-title {
  font-size: clamp(2rem, 6vw, 3.5rem);
  font-weight: 700;
  font-family: 'Space Grotesk', sans-serif;
  color: #FFFFFF;
  margin-bottom: clamp(0.75rem, 2vw, 1rem);
  letter-spacing: -0.02em;
  line-height: 1.2;
}

.team-subtitle {
  font-size: clamp(1rem, 2.5vw, 1.2rem);
  color: #B8C5E0;
  font-weight: 300;
  max-width: 700px;
  margin: 0 auto;
  line-height: 1.6;
}

/* Grille d'équipe */
.team-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(min(280px, 100%), 1fr));
  gap: clamp(2rem, 4vw, 3rem);
}

/* Carte membre */
.member-card {
  position: relative;
  background: rgba(255, 255, 255, 0.03);
  backdrop-filter: blur(40px);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 24px;
  padding: 0;
  overflow: hidden;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;
  opacity: 0;
  animation: cardFadeIn 0.6s ease-out forwards;
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

.member-card.stagger-1 { animation-delay: 0.1s; }
.member-card.stagger-2 { animation-delay: 0.2s; }
.member-card.stagger-3 { animation-delay: 0.3s; }
.member-card.stagger-4 { animation-delay: 0.4s; }
.member-card.stagger-5 { animation-delay: 0.5s; }
.member-card.stagger-6 { animation-delay: 0.6s; }

.member-card:hover {
  transform: translateY(-8px);
  border-color: rgba(91, 124, 255, 0.3);
  box-shadow: 0 20px 60px rgba(91, 124, 255, 0.25);
  background: rgba(255, 255, 255, 0.05);
}

/* Photo du membre */
.member-photo-container {
  position: relative;
  width: 100%;
  height: clamp(280px, 35vw, 350px);
  overflow: hidden;
  background: linear-gradient(135deg, rgba(91, 124, 255, 0.1) 0%, rgba(139, 163, 255, 0.1) 100%);
}

.member-photo {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.6s cubic-bezier(0.4, 0, 0.2, 1);
}

.member-card:hover .member-photo {
  transform: scale(1.08);
}

.photo-overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(180deg, transparent 0%, rgba(0, 9, 61, 0.95) 80%);
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding: clamp(1.5rem, 3vw, 2rem);
  opacity: 1;
  transition: opacity 0.4s ease;
}

.member-name {
  font-size: clamp(1.3rem, 3vw, 1.6rem);
  font-weight: 600;
  font-family: 'Space Grotesk', sans-serif;
  color: #FFFFFF;
  margin-bottom: clamp(0.25rem, 0.5vw, 0.5rem);
  line-height: 1.2;
}

.member-role-badge {
  display: inline-block;
  padding: clamp(0.35rem, 1vw, 0.45rem) clamp(0.75rem, 2vw, 1rem);
  background: rgba(91, 124, 255, 0.2);
  border: 1px solid rgba(91, 124, 255, 0.4);
  border-radius: 20px;
  font-size: clamp(0.8rem, 1.8vw, 0.9rem);
  font-weight: 500;
  color: #8BA3FF;
  letter-spacing: 0.02em;
}

/* Contenu détaillé */
.member-content {
  padding: clamp(1.5rem, 3vw, 2rem);
}

.member-role {
  font-size: clamp(1.1rem, 2.5vw, 1.25rem);
  font-weight: 600;
  font-family: 'Space Grotesk', sans-serif;
  color: #5B7CFF;
  margin-bottom: clamp(0.75rem, 1.5vw, 1rem);
  line-height: 1.3;
}

.member-skills {
  font-size: clamp(0.95rem, 2vw, 1.05rem);
  color: #B8C5E0;
  line-height: 1.7;
  font-weight: 300;
}

/* Indicateur d'info */
.info-indicator {
  position: absolute;
  bottom: clamp(1rem, 2vw, 1.5rem);
  right: clamp(1rem, 2vw, 1.5rem);
  width: clamp(32px, 6vw, 40px);
  height: clamp(32px, 6vw, 40px);
  background: rgba(91, 124, 255, 0.2);
  border: 1px solid rgba(91, 124, 255, 0.4);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transform: scale(0.8);
  transition: all 0.3s ease;
}

.member-card:hover .info-indicator {
  opacity: 1;
  transform: scale(1);
}

.info-indicator svg {
  width: 18px;
  height: 18px;
  color: #5B7CFF;
}

/* Modal détails */
.member-modal {
  position: fixed;
  inset: 0;
  background: rgba(0, 9, 61, 0.95);
  backdrop-filter: blur(20px);
  z-index: 1000;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: clamp(1rem, 4vw, 2rem);
  opacity: 0;
  pointer-events: none;
  transition: opacity 0.3s ease;
}

.member-modal.active {
  opacity: 1;
  pointer-events: all;
}

.modal-content {
  position: relative;
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(40px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 24px;
  padding: clamp(2rem, 4vw, 3rem);
  max-width: 600px;
  width: 100%;
  max-height: 90vh;
  overflow-y: auto;
  transform: scale(0.9);
  transition: transform 0.3s ease;
}

.member-modal.active .modal-content {
  transform: scale(1);
}

.modal-close {
  position: absolute;
  top: clamp(1rem, 2vw, 1.5rem);
  right: clamp(1rem, 2vw, 1.5rem);
  width: 36px;
  height: 36px;
  background: rgba(239, 68, 68, 0.1);
  border: 1px solid rgba(239, 68, 68, 0.3);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.3s ease;
}

.modal-close:hover {
  background: rgba(239, 68, 68, 0.2);
  transform: scale(1.1);
}

.modal-close svg {
  width: 20px;
  height: 20px;
  color: #F87171;
}

.modal-header {
  margin-bottom: clamp(1.5rem, 3vw, 2rem);
}

.modal-name {
  font-size: clamp(1.8rem, 4vw, 2.5rem);
  font-weight: 700;
  font-family: 'Space Grotesk', sans-serif;
  color: #FFFFFF;
  margin-bottom: 0.5rem;
}

.modal-role {
  font-size: clamp(1.1rem, 2.5vw, 1.3rem);
  color: #5B7CFF;
  font-weight: 600;
}

.modal-divider {
  width: 100%;
  height: 1px;
  background: rgba(255, 255, 255, 0.1);
  margin: clamp(1.5rem, 3vw, 2rem) 0;
}

.modal-section-title {
  font-size: clamp(1.1rem, 2.5vw, 1.25rem);
  font-weight: 600;
  font-family: 'Space Grotesk', sans-serif;
  color: #FFFFFF;
  margin-bottom: clamp(0.75rem, 1.5vw, 1rem);
}

.modal-skills {
  font-size: clamp(1rem, 2vw, 1.1rem);
  color: #B8C5E0;
  line-height: 1.8;
  font-weight: 300;
}

/* Responsive */
@media (max-width: 768px) {
  .team-grid {
    grid-template-columns: repeat(auto-fit, minmax(min(260px, 100%), 1fr));
    gap: 1.5rem;
  }
}

@media (max-width: 480px) {
  .team-section {
    padding: clamp(2rem, 5vw, 3rem) clamp(0.75rem, 3vw, 1rem);
  }
  
  .team-grid {
    grid-template-columns: 1fr;
  }
}

@media (min-width: 769px) and (max-width: 1024px) {
  .team-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (min-width: 1025px) {
  .team-grid {
    grid-template-columns: repeat(3, 1fr);
  }
}

@media (prefers-reduced-motion: reduce) {
  * {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
  
  .member-card {
    opacity: 1;
  }
}
`,N5=()=>f.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[f.jsx("circle",{cx:"12",cy:"12",r:"10"}),f.jsx("line",{x1:"12",y1:"16",x2:"12",y2:"12"}),f.jsx("line",{x1:"12",y1:"8",x2:"12.01",y2:"8"})]}),R5=()=>f.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[f.jsx("line",{x1:"18",y1:"6",x2:"6",y2:"18"}),f.jsx("line",{x1:"6",y1:"6",x2:"18",y2:"18"})]}),A5=[{name:"Fidele YONLI",role:"Founder & CEO & Head of Innovation",skills:"Développeur web Fullstack, Business Intelligence & Data Analyst, Data/AI/Machine Learning Engineer",image:x5},{name:"Souleymane TRAORÉ",role:"CTO & Lead Developer",skills:"Developpeur web/mobile Fullstack, AI Engineer spécialisé en deep learning et computer vision",image:w5},{name:"Abdel Nasser SAVADOGO",role:"Responsable DigiScia Media",skills:"Expert gestion de projets IT, pilote des initiatives stratégiques en garantissant le respect des délais, budgets et exigences techniques",image:T5},{name:"Sylvius NITIEMA",role:"Resposnable DigiScia Academy",skills:"Expert en géosciences appliquées, spécialiste dans le management des données geospatiales et le traitement des données géophysiques",image:S5},{name:"Narcisse SIEHO",role:"Responsable DigiScia Store",skills:"Ingénieur en Productique & Mecatronique/Developpeur Web, Expert en Automatisme et Robotique/Consultant support Technique à Alten",image:E5},{name:"Phil Jacq OUEDRAOGO",role:"Responsable Gestion de Projet",skills:"Expert gestion de projets IT, pilote des initiatives stratégiques en garantissant le respect des délais, budgets et exigences techniques",image:j5}];function _5(){const[l,r]=D.useState(null),c=u=>{r(u)},o=()=>{r(null)};return f.jsxs(f.Fragment,{children:[f.jsx("style",{children:O5}),f.jsxs("section",{className:"team-section",id:"team",children:[f.jsx("div",{className:"grid-overlay","aria-hidden":"true"}),f.jsxs("div",{className:"team-container",children:[f.jsxs("header",{className:"team-header",children:[f.jsx("div",{className:"team-badge",children:"👥 Notre Équipe"}),f.jsx("h2",{className:"team-title",children:"Les Experts DigiScia"}),f.jsx("p",{className:"team-subtitle",children:"Une équipe passionnée de data scientists, ingénieurs et consultants dédiés à votre transformation digitale"})]}),f.jsx("div",{className:"team-grid",children:A5.map((u,d)=>f.jsxs("article",{className:`member-card stagger-${d+1}`,onClick:()=>c(u),role:"button",tabIndex:0,"aria-label":`En savoir plus sur ${u.name}`,children:[f.jsxs("div",{className:"member-photo-container",children:[f.jsx("img",{src:u.image,alt:u.name,className:"member-photo",loading:"lazy"}),f.jsxs("div",{className:"photo-overlay",children:[f.jsx("h3",{className:"member-name",children:u.name}),f.jsx("span",{className:"member-role-badge",children:u.role})]})]}),f.jsx("div",{className:"member-content",children:f.jsx("p",{className:"member-skills",children:u.skills})}),f.jsx("div",{className:"info-indicator",children:f.jsx(N5,{})})]},d))})]}),f.jsx("div",{className:`member-modal ${l?"active":""}`,onClick:o,children:l&&f.jsxs("div",{className:"modal-content",onClick:u=>u.stopPropagation(),children:[f.jsx("button",{className:"modal-close",onClick:o,"aria-label":"Fermer",children:f.jsx(R5,{})}),f.jsxs("div",{className:"modal-header",children:[f.jsx("h3",{className:"modal-name",children:l.name}),f.jsx("p",{className:"modal-role",children:l.role})]}),f.jsx("div",{className:"modal-divider"}),f.jsx("h4",{className:"modal-section-title",children:"Expertise & Compétences"}),f.jsx("p",{className:"modal-skills",children:l.skills})]})})]})]})}class ui{constructor(r=0,c="Network Error"){this.status=r,this.text=c}}const C5=()=>{if(!(typeof localStorage>"u"))return{get:l=>Promise.resolve(localStorage.getItem(l)),set:(l,r)=>Promise.resolve(localStorage.setItem(l,r)),remove:l=>Promise.resolve(localStorage.removeItem(l))}},et={origin:"https://api.emailjs.com",blockHeadless:!1,storageProvider:C5()},au=l=>l?typeof l=="string"?{publicKey:l}:l.toString()==="[object Object]"?l:{}:{},z5=(l,r="https://api.emailjs.com")=>{if(!l)return;const c=au(l);et.publicKey=c.publicKey,et.blockHeadless=c.blockHeadless,et.storageProvider=c.storageProvider,et.blockList=c.blockList,et.limitRate=c.limitRate,et.origin=c.origin||r},Yp=async(l,r,c={})=>{const o=await fetch(et.origin+l,{method:"POST",headers:c,body:r}),u=await o.text(),d=new ui(o.status,u);if(o.ok)return d;throw d},Gp=(l,r,c)=>{if(!l||typeof l!="string")throw"The public key is required. Visit https://dashboard.emailjs.com/admin/account";if(!r||typeof r!="string")throw"The service ID is required. Visit https://dashboard.emailjs.com/admin";if(!c||typeof c!="string")throw"The template ID is required. Visit https://dashboard.emailjs.com/admin/templates"},D5=l=>{if(l&&l.toString()!=="[object Object]")throw"The template params have to be the object. Visit https://www.emailjs.com/docs/sdk/send/"},Xp=l=>l.webdriver||!l.languages||l.languages.length===0,Vp=()=>new ui(451,"Unavailable For Headless Browser"),M5=(l,r)=>{if(!Array.isArray(l))throw"The BlockList list has to be an array";if(typeof r!="string")throw"The BlockList watchVariable has to be a string"},k5=l=>{var r;return!((r=l.list)!=null&&r.length)||!l.watchVariable},B5=(l,r)=>l instanceof FormData?l.get(r):l[r],Qp=(l,r)=>{if(k5(l))return!1;M5(l.list,l.watchVariable);const c=B5(r,l.watchVariable);return typeof c!="string"?!1:l.list.includes(c)},Zp=()=>new ui(403,"Forbidden"),H5=(l,r)=>{if(typeof l!="number"||l<0)throw"The LimitRate throttle has to be a positive number";if(r&&typeof r!="string")throw"The LimitRate ID has to be a non-empty string"},L5=async(l,r,c)=>{const o=Number(await c.get(l)||0);return r-Date.now()+o},Kp=async(l,r,c)=>{if(!r.throttle||!c)return!1;H5(r.throttle,r.id);const o=r.id||l;return await L5(o,r.throttle,c)>0?!0:(await c.set(o,Date.now().toString()),!1)},Jp=()=>new ui(429,"Too Many Requests"),U5=async(l,r,c,o)=>{const u=au(o),d=u.publicKey||et.publicKey,p=u.blockHeadless||et.blockHeadless,v=u.storageProvider||et.storageProvider,g={...et.blockList,...u.blockList},h={...et.limitRate,...u.limitRate};return p&&Xp(navigator)?Promise.reject(Vp()):(Gp(d,l,r),D5(c),c&&Qp(g,c)?Promise.reject(Zp()):await Kp(location.pathname,h,v)?Promise.reject(Jp()):Yp("/api/v1.0/email/send",JSON.stringify({lib_version:"4.4.1",user_id:d,service_id:l,template_id:r,template_params:c}),{"Content-type":"application/json"}))},q5=l=>{if(!l||l.nodeName!=="FORM")throw"The 3rd parameter is expected to be the HTML form element or the style selector of the form"},F5=l=>typeof l=="string"?document.querySelector(l):l,Y5=async(l,r,c,o)=>{const u=au(o),d=u.publicKey||et.publicKey,p=u.blockHeadless||et.blockHeadless,v=et.storageProvider||u.storageProvider,g={...et.blockList,...u.blockList},h={...et.limitRate,...u.limitRate};if(p&&Xp(navigator))return Promise.reject(Vp());const b=F5(c);Gp(d,l,r),q5(b);const S=new FormData(b);return Qp(g,S)?Promise.reject(Zp()):await Kp(location.pathname,h,v)?Promise.reject(Jp()):(S.append("lib_version","4.4.1"),S.append("service_id",l),S.append("template_id",r),S.append("user_id",d),Yp("/api/v1.0/email/send-form",S))},G5={init:z5,send:U5,sendForm:Y5,EmailJSResponseStatus:ui};function X5(){return f.jsxs("div",{className:"card",children:[f.jsx("a",{className:"socialContainer containerOne",href:"https://www.instagram.com/digisciaa/",target:"_blank",rel:"noopener noreferrer","aria-label":"Suivez-nous sur Instagram",children:f.jsx("svg",{viewBox:"0 0 16 16",className:"socialSvg instagramSvg",children:f.jsx("path",{d:"M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z"})})}),f.jsx("a",{className:"socialContainer containerTwo",href:"https://web.facebook.com/DigiScia/",target:"_blank",rel:"noopener noreferrer","aria-label":"Suivez-nous sur Facebook",children:f.jsx("svg",{viewBox:"0 0 320 512",className:"socialSvg facebookSvg",children:f.jsx("path",{d:"M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"})})}),f.jsx("a",{className:"socialContainer containerThree",href:"https://www.linkedin.com/company/digiscia/",target:"_blank",rel:"noopener noreferrer","aria-label":"Suivez-nous sur LinkedIn",children:f.jsx("svg",{viewBox:"0 0 448 512",className:"socialSvg linkdinSvg",children:f.jsx("path",{d:"M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"})})}),f.jsx("a",{className:"socialContainer containerFive",href:"https://discord.gg/enKs5Pm8",target:"_blank",rel:"noopener noreferrer","aria-label":"Rejoignez-nous sur Discord",children:f.jsx("svg",{viewBox:"0 0 640 512",className:"socialSvg discordSvg",children:f.jsx("path",{d:"M524.531,69.836a1.5,1.5,0,0,0-.764-.7A485.065,485.065,0,0,0,404.081,32.03a1.816,1.816,0,0,0-1.923.91,337.461,337.461,0,0,0-14.9,30.6,447.848,447.848,0,0,0-134.426,0,309.541,309.541,0,0,0-15.135-30.6,1.89,1.89,0,0,0-1.924-.91A483.689,483.689,0,0,0,116.085,69.137a1.712,1.712,0,0,0-.788.676C39.068,183.651,18.186,294.69,28.43,404.354a2.016,2.016,0,0,0,.765,1.375A487.666,487.666,0,0,0,176.02,479.918a1.9,1.9,0,0,0,2.063-.676A348.2,348.2,0,0,0,208.12,430.4a1.86,1.86,0,0,0-1.019-2.588,321.173,321.173,0,0,1-45.868-21.853,1.885,1.885,0,0,1-.185-3.126c3.082-2.309,6.166-4.711,9.109-7.137a1.819,1.819,0,0,1,1.9-.256c96.229,43.917,200.41,43.917,295.5,0a1.812,1.812,0,0,1,1.924.233c2.944,2.426,6.027,4.851,9.132,7.16a1.884,1.884,0,0,1-.162,3.126,301.407,301.407,0,0,1-45.89,21.83,1.875,1.875,0,0,0-1,2.611,391.055,391.055,0,0,0,30.014,48.815,1.864,1.864,0,0,0,2.063.7A486.048,486.048,0,0,0,610.7,405.729a1.882,1.882,0,0,0,.765-1.352C623.729,277.594,590.933,167.465,524.531,69.836ZM222.491,337.58c-28.972,0-52.844-26.587-52.844-59.239S193.056,219.1,222.491,219.1c29.665,0,53.306,26.82,52.843,59.239C275.334,310.993,251.924,337.58,222.491,337.58Zm195.38,0c-28.971,0-52.843-26.587-52.843-59.239S388.437,219.1,417.871,219.1c29.667,0,53.307,26.82,52.844,59.239C470.715,310.993,447.538,337.58,417.871,337.58Z"})})})]})}const Y0={telephone:"",subject:"",email:"",message:""},V5=()=>f.jsxs("div",{className:"confirmation-message",children:[f.jsx("div",{className:"confirmation-icon",children:"✓"}),f.jsx("p",{children:"Merci de nous faire confiance! Notre équipe vous recontactera très bientôt!"})]}),Q5=({message:l})=>f.jsx("div",{className:"error-message",children:f.jsx("p",{children:l})});function Z5(){const l=D.useRef(),[r,c]=D.useState(Y0),[o,u]=D.useState(!1),[d,p]=D.useState({}),[v,g]=D.useState(!1),[h,b]=D.useState(""),S=x=>{const{name:T,value:E}=x.target;c(_=>({..._,[T]:E})),d[T]&&p(_=>({..._,[T]:null}))},N=()=>{const x={};return r.telephone||(x.telephone="Le téléphone est requis"),r.email||(x.email="L'email est requis"),r.message||(x.message="Un message est requis"),x},j=x=>{x.preventDefault();const T=N();if(Object.keys(T).length>0){p(T),u(!1),b("");return}p({}),b(""),g(!0),u(!1),G5.sendForm("service_fcvhskh","template_wglutjo",l.current,"7XluHeKjHpwQ_1CfB").then(E=>{console.log("E-mail envoyé!",E.text),u(!0),c(Y0),setTimeout(()=>u(!1),5e3)},E=>{console.error("Erreur d'envoi:",E.text),b("Une erreur est survenue. Veuillez réessayer plus tard.")}).finally(()=>{g(!1)})};return f.jsx("section",{className:"contact-section",id:"contacts",children:f.jsxs("div",{className:"contact-content",children:[f.jsxs("div",{className:"social-container",children:[f.jsx("h2",{className:"social-title",children:"Suivez-nous"}),f.jsx("p",{className:"social-subtitle",children:"Rejoignez notre communauté et restez à l'affût de nos dernières actualités."}),f.jsx(X5,{})]}),f.jsxs("div",{className:"contact-form-container",children:[f.jsx("h1",{className:"contact-title",children:"Contactez-nous"}),o&&f.jsx(V5,{}),h&&f.jsx(Q5,{message:h}),f.jsx("form",{ref:l,className:"contact-form",onSubmit:j,noValidate:!0,children:f.jsxs("div",{className:"form-grid",children:[f.jsxs("div",{className:"form-group grid-col-span-3",children:[f.jsx("label",{htmlFor:"email",className:"sr-only",children:"Email*"}),f.jsx("input",{type:"email",id:"email",name:"email",placeholder:"Email e.g john.dossy@gmail.com",value:r.email,onChange:S,required:!0,className:d.email?"input-error":"",disabled:v}),d.email&&f.jsx("span",{className:"error-text",children:d.email})]}),f.jsxs("div",{className:"form-group grid-col-span-3",children:[f.jsx("label",{htmlFor:"telephone",className:"sr-only",children:"Téléphone"}),f.jsx("input",{type:"tel",id:"telephone",name:"telephone",placeholder:"Téléphone e.g +226******* ",value:r.telephone,onChange:S,required:!0,className:d.telephone?"input-error":"",disabled:v}),d.telephone&&f.jsx("span",{className:"error-text",children:d.telephone})]}),f.jsxs("div",{className:"form-group grid-col-span-6",children:[f.jsx("label",{htmlFor:"subject",className:"sr-only",children:"Objet"}),f.jsx("input",{type:"text",id:"subject",name:"subject",placeholder:"Objet",value:r.subject,onChange:S,disabled:v})]}),f.jsxs("div",{className:"form-group grid-col-span-6",children:[f.jsx("label",{htmlFor:"message",className:"sr-only",children:"Message"}),f.jsx("textarea",{id:"message",name:"message",rows:"5",placeholder:"Ecrivez votre Message",value:r.message,onChange:S,required:!0,className:d.message?"input-error":"",disabled:v}),d.message&&f.jsx("span",{className:"error-text",children:d.message})]}),f.jsx("div",{className:"form-group-submit grid-col-span-6",children:f.jsx("button",{type:"submit",className:"contact-submit",disabled:v,children:v?"Envoi en cours...":"Envoyer"})})]})})]})]})})}function K5(){const{id:l}=n2(),[r,c]=D.useState(null),[o,u]=D.useState(!0),[d,p]=D.useState(null),[v,g]=D.useState([]),h=Gc(),b=D.useCallback(async(T,E)=>!T||!Array.isArray(E)?[]:E.filter(_=>_.id!==T.id&&(T.tags&&_.tags&&_.tags.some(M=>T.tags.includes(M))||T.author&&_.author===T.author)).slice(0,3),[]),S=D.useCallback(async()=>{try{u(!0);const T=localStorage.getItem("currentArticle");if(T)try{const _=JSON.parse(T);if(_.id.toString()===l){c(_);const M=await qc();if(Array.isArray(M)){const C=await b(_,M);g(C)}u(!1);return}}catch(_){console.error("Erreur lors de la lecture de l'article stocké:",_)}const E=await qc();if(Array.isArray(E)){const _=E.find(M=>M.id.toString()===l);if(_){c(_),localStorage.setItem("currentArticle",JSON.stringify(_));const M=await b(_,E);g(M)}else p("Article non trouvé")}else p("Format de données invalide")}catch(T){console.error("Erreur lors de la récupération de l'article:",T),p("Impossible de charger l'article")}finally{u(!1)}},[l,b]);D.useEffect(()=>{S(),window.scrollTo(0,0)},[S]);const N=()=>{h("/"),setTimeout(()=>{const T=document.getElementById("news");T&&T.scrollIntoView({behavior:"smooth"})},100)},j=T=>{localStorage.setItem("currentArticle",JSON.stringify(T));const E=T.title.toLowerCase().replace(/[^\w\s-]/g,"").replace(/\s+/g,"-").replace(/--+/g,"-");h(`/article/${T.id}/${E}`),window.scrollTo(0,0)},x=T=>{if(!T)return"";try{const E=T.split(".")[0],_=/(\d{4})-(\d{2})-(\d{2}) (\d{2}):(\d{2}):(\d{2})/,M=E.match(_);if(M){const[Q,X,$,J,ie,Y]=M;return`${X}-${$}-${J} ${ie}:${Y}`}const C=new Date(T);if(!isNaN(C.getTime())){const Q=C.getFullYear(),X=String(C.getMonth()+1).padStart(2,"0"),$=String(C.getDate()).padStart(2,"0"),J=String(C.getHours()).padStart(2,"0"),ie=String(C.getMinutes()).padStart(2,"0");return`${Q}-${X}-${$} ${J}:${ie}`}return"Date invalide"}catch(E){return console.error("Erreur lors du formatage de la date article:",E,T),"Date invalide"}};return o?f.jsx("div",{className:"article-page full-width",children:f.jsx("div",{className:"article-container full-width-container",children:f.jsxs("div",{className:"article-loading",children:[f.jsx("div",{className:"loading-spinner"}),f.jsx("p",{children:"Chargement de l'article..."})]})})}):d?f.jsx("div",{className:"article-page full-width",children:f.jsx("div",{className:"article-container full-width-container",children:f.jsxs("div",{className:"article-error",children:[f.jsx("span",{className:"error-icon",children:"⚠️"}),f.jsx("h2",{children:"Erreur"}),f.jsx("p",{children:d}),f.jsx("button",{className:"return-button",onClick:N,children:"Retourner aux actualités"})]})})}):r?f.jsx("div",{className:"article-page full-width",children:f.jsxs("div",{className:"article-container full-width-container",children:[f.jsxs("article",{className:"article-content",children:[f.jsx("div",{className:"mobile-return",children:f.jsx("button",{className:"back-button",onClick:N,"aria-label":"Retour aux actualités",children:"❮ Retour"})}),f.jsxs("header",{className:"article-header",children:[f.jsx("h1",{className:"article-title",children:r.title}),f.jsx("p",{className:"article-date",children:x(r.date)}),r.author&&f.jsxs("p",{className:"article-author-header",children:["Par ",r.author]})]}),f.jsx("div",{className:"article-featured-image-container",children:f.jsx("img",{src:r.image,alt:r.title||"Image de l'article",className:"article-featured-image",onError:T=>{T.target.src="/images/placeholder.jpg"},loading:"lazy"})}),f.jsx("div",{className:"article-body",children:r.content?f.jsx("div",{dangerouslySetInnerHTML:{__html:r.content}}):r.excerpt?f.jsx("div",{className:"article-excerpt",children:r.excerpt}):f.jsx("div",{className:"article-no-content",children:f.jsx("p",{children:"Aucun contenu disponible pour cet article."})})}),f.jsxs("footer",{className:"article-footer",children:[f.jsxs("div",{className:"article-meta",children:[r.author&&f.jsxs("div",{className:"article-author",children:[f.jsx("strong",{children:"Auteur:"})," ",r.author]}),r.tags&&r.tags.length>0&&f.jsxs("div",{className:"article-tags",children:[f.jsx("strong",{children:"Tags:"}),f.jsx("div",{className:"tags-container",children:r.tags.map((T,E)=>f.jsx("span",{className:"tag-item",children:T},E))})]})]}),f.jsx("button",{className:"return-button",onClick:N,children:"Retourner aux actualités"})]})]}),v.length>0&&f.jsxs("div",{className:"related-articles-section",children:[f.jsx("h3",{className:"related-title",children:"Articles similaires"}),f.jsx("div",{className:"related-articles-container",children:v.map(T=>f.jsxs("div",{className:"related-article-card",onClick:()=>j(T),children:[f.jsx("div",{className:"related-article-image-container",children:f.jsx("img",{src:T.image,alt:T.title,className:"related-article-image",onError:E=>{E.target.src="/images/placeholder.jpg"},loading:"lazy"})}),f.jsxs("div",{className:"related-article-content",children:[f.jsx("h4",{className:"related-article-title",children:T.title}),f.jsx("p",{className:"related-article-date",children:x(T.date)})]})]},T.id))})]})]})}):f.jsx("div",{className:"article-page full-width",children:f.jsx("div",{className:"article-container full-width-container",children:f.jsxs("div",{className:"article-error",children:[f.jsx("span",{className:"error-icon",children:"🔍"}),f.jsx("h2",{children:"Article introuvable"}),f.jsx("p",{children:"L'article que vous recherchez n'existe pas ou a été déplacé."}),f.jsx("button",{className:"return-button",onClick:N,children:"Retourner aux actualités"})]})})})}function J5(){return f.jsxs(f.Fragment,{children:[f.jsx(up,{})," ",f.jsxs("main",{children:[f.jsx(cn.Element,{name:"home",children:f.jsx(ov,{})}),f.jsx(cn.Element,{name:"about",children:f.jsx(jv,{})}),f.jsx(cn.Element,{name:"projects",children:f.jsx(Nv,{})}),f.jsx(cn.Element,{name:"services",children:f.jsx(Hv,{})}),f.jsx(cn.Element,{name:"news",children:f.jsx(b5,{})}),f.jsx(cn.Element,{name:"team",children:f.jsx(_5,{})}),f.jsx(cn.Element,{name:"contact",children:f.jsx(Z5,{})})]}),f.jsx(fp,{})]})}function $5(){return f.jsx(F2,{children:f.jsx("div",{className:"app-container",children:f.jsxs(y2,{children:[f.jsx(Mc,{path:"/",element:f.jsx(J5,{})}),f.jsx(Mc,{path:"/article/:id/:slug",element:f.jsxs(f.Fragment,{children:[f.jsx(up,{}),f.jsx(K5,{}),f.jsx(fp,{})]})})]})})})}Ng.createRoot(document.getElementById("root")).render(f.jsx(Bt.StrictMode,{children:f.jsx($5,{})}));
