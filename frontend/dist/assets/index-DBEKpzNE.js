(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const c of document.querySelectorAll('link[rel="modulepreload"]'))s(c);new MutationObserver(c=>{for(const m of c)if(m.type==="childList")for(const h of m.addedNodes)h.tagName==="LINK"&&h.rel==="modulepreload"&&s(h)}).observe(document,{childList:!0,subtree:!0});function u(c){const m={};return c.integrity&&(m.integrity=c.integrity),c.referrerPolicy&&(m.referrerPolicy=c.referrerPolicy),c.crossOrigin==="use-credentials"?m.credentials="include":c.crossOrigin==="anonymous"?m.credentials="omit":m.credentials="same-origin",m}function s(c){if(c.ep)return;c.ep=!0;const m=u(c);fetch(c.href,m)}})();var Er=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function q0(l){return l&&l.__esModule&&Object.prototype.hasOwnProperty.call(l,"default")?l.default:l}var pu={exports:{}},$l={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Um;function o2(){if(Um)return $l;Um=1;var l=Symbol.for("react.transitional.element"),r=Symbol.for("react.fragment");function u(s,c,m){var h=null;if(m!==void 0&&(h=""+m),c.key!==void 0&&(h=""+c.key),"key"in c){m={};for(var v in c)v!=="key"&&(m[v]=c[v])}else m=c;return c=m.ref,{$$typeof:l,type:s,key:h,ref:c!==void 0?c:null,props:m}}return $l.Fragment=r,$l.jsx=u,$l.jsxs=u,$l}var Hm;function s2(){return Hm||(Hm=1,pu.exports=o2()),pu.exports}var f=s2(),hu={exports:{}},he={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Lm;function u2(){if(Lm)return he;Lm=1;var l=Symbol.for("react.transitional.element"),r=Symbol.for("react.portal"),u=Symbol.for("react.fragment"),s=Symbol.for("react.strict_mode"),c=Symbol.for("react.profiler"),m=Symbol.for("react.consumer"),h=Symbol.for("react.context"),v=Symbol.for("react.forward_ref"),g=Symbol.for("react.suspense"),p=Symbol.for("react.memo"),b=Symbol.for("react.lazy"),S=Symbol.iterator;function N(j){return j===null||typeof j!="object"?null:(j=S&&j[S]||j["@@iterator"],typeof j=="function"?j:null)}var T={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},x=Object.assign,O={};function E(j,G,ae){this.props=j,this.context=G,this.refs=O,this.updater=ae||T}E.prototype.isReactComponent={},E.prototype.setState=function(j,G){if(typeof j!="object"&&typeof j!="function"&&j!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,j,G,"setState")},E.prototype.forceUpdate=function(j){this.updater.enqueueForceUpdate(this,j,"forceUpdate")};function _(){}_.prototype=E.prototype;function M(j,G,ae){this.props=j,this.context=G,this.refs=O,this.updater=ae||T}var C=M.prototype=new _;C.constructor=M,x(C,E.prototype),C.isPureReactComponent=!0;var Q=Array.isArray,X={H:null,A:null,T:null,S:null},$=Object.prototype.hasOwnProperty;function J(j,G,ae,ne,I,pe){return ae=pe.ref,{$$typeof:l,type:j,key:G,ref:ae!==void 0?ae:null,props:pe}}function ie(j,G){return J(j.type,G,void 0,void 0,void 0,j.props)}function Y(j){return typeof j=="object"&&j!==null&&j.$$typeof===l}function Z(j){var G={"=":"=0",":":"=2"};return"$"+j.replace(/[=:]/g,function(ae){return G[ae]})}var W=/\/+/g;function L(j,G){return typeof j=="object"&&j!==null&&j.key!=null?Z(""+j.key):G.toString(36)}function ee(){}function P(j){switch(j.status){case"fulfilled":return j.value;case"rejected":throw j.reason;default:switch(typeof j.status=="string"?j.then(ee,ee):(j.status="pending",j.then(function(G){j.status==="pending"&&(j.status="fulfilled",j.value=G)},function(G){j.status==="pending"&&(j.status="rejected",j.reason=G)})),j.status){case"fulfilled":return j.value;case"rejected":throw j.reason}}throw j}function Se(j,G,ae,ne,I){var pe=typeof j;(pe==="undefined"||pe==="boolean")&&(j=null);var fe=!1;if(j===null)fe=!0;else switch(pe){case"bigint":case"string":case"number":fe=!0;break;case"object":switch(j.$$typeof){case l:case r:fe=!0;break;case b:return fe=j._init,Se(fe(j._payload),G,ae,ne,I)}}if(fe)return I=I(j),fe=ne===""?"."+L(j,0):ne,Q(I)?(ae="",fe!=null&&(ae=fe.replace(W,"$&/")+"/"),Se(I,G,ae,"",function(Ee){return Ee})):I!=null&&(Y(I)&&(I=ie(I,ae+(I.key==null||j&&j.key===I.key?"":(""+I.key).replace(W,"$&/")+"/")+fe)),G.push(I)),1;fe=0;var ze=ne===""?".":ne+":";if(Q(j))for(var ue=0;ue<j.length;ue++)ne=j[ue],pe=ze+L(ne,ue),fe+=Se(ne,G,ae,pe,I);else if(ue=N(j),typeof ue=="function")for(j=ue.call(j),ue=0;!(ne=j.next()).done;)ne=ne.value,pe=ze+L(ne,ue++),fe+=Se(ne,G,ae,pe,I);else if(pe==="object"){if(typeof j.then=="function")return Se(P(j),G,ae,ne,I);throw G=String(j),Error("Objects are not valid as a React child (found: "+(G==="[object Object]"?"object with keys {"+Object.keys(j).join(", ")+"}":G)+"). If you meant to render a collection of children, use an array instead.")}return fe}function K(j,G,ae){if(j==null)return j;var ne=[],I=0;return Se(j,ne,"","",function(pe){return G.call(ae,pe,I++)}),ne}function oe(j){if(j._status===-1){var G=j._result;G=G(),G.then(function(ae){(j._status===0||j._status===-1)&&(j._status=1,j._result=ae)},function(ae){(j._status===0||j._status===-1)&&(j._status=2,j._result=ae)}),j._status===-1&&(j._status=0,j._result=G)}if(j._status===1)return j._result.default;throw j._result}var te=typeof reportError=="function"?reportError:function(j){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var G=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof j=="object"&&j!==null&&typeof j.message=="string"?String(j.message):String(j),error:j});if(!window.dispatchEvent(G))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",j);return}console.error(j)};function be(){}return he.Children={map:K,forEach:function(j,G,ae){K(j,function(){G.apply(this,arguments)},ae)},count:function(j){var G=0;return K(j,function(){G++}),G},toArray:function(j){return K(j,function(G){return G})||[]},only:function(j){if(!Y(j))throw Error("React.Children.only expected to receive a single React element child.");return j}},he.Component=E,he.Fragment=u,he.Profiler=c,he.PureComponent=M,he.StrictMode=s,he.Suspense=g,he.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=X,he.act=function(){throw Error("act(...) is not supported in production builds of React.")},he.cache=function(j){return function(){return j.apply(null,arguments)}},he.cloneElement=function(j,G,ae){if(j==null)throw Error("The argument must be a React element, but you passed "+j+".");var ne=x({},j.props),I=j.key,pe=void 0;if(G!=null)for(fe in G.ref!==void 0&&(pe=void 0),G.key!==void 0&&(I=""+G.key),G)!$.call(G,fe)||fe==="key"||fe==="__self"||fe==="__source"||fe==="ref"&&G.ref===void 0||(ne[fe]=G[fe]);var fe=arguments.length-2;if(fe===1)ne.children=ae;else if(1<fe){for(var ze=Array(fe),ue=0;ue<fe;ue++)ze[ue]=arguments[ue+2];ne.children=ze}return J(j.type,I,void 0,void 0,pe,ne)},he.createContext=function(j){return j={$$typeof:h,_currentValue:j,_currentValue2:j,_threadCount:0,Provider:null,Consumer:null},j.Provider=j,j.Consumer={$$typeof:m,_context:j},j},he.createElement=function(j,G,ae){var ne,I={},pe=null;if(G!=null)for(ne in G.key!==void 0&&(pe=""+G.key),G)$.call(G,ne)&&ne!=="key"&&ne!=="__self"&&ne!=="__source"&&(I[ne]=G[ne]);var fe=arguments.length-2;if(fe===1)I.children=ae;else if(1<fe){for(var ze=Array(fe),ue=0;ue<fe;ue++)ze[ue]=arguments[ue+2];I.children=ze}if(j&&j.defaultProps)for(ne in fe=j.defaultProps,fe)I[ne]===void 0&&(I[ne]=fe[ne]);return J(j,pe,void 0,void 0,null,I)},he.createRef=function(){return{current:null}},he.forwardRef=function(j){return{$$typeof:v,render:j}},he.isValidElement=Y,he.lazy=function(j){return{$$typeof:b,_payload:{_status:-1,_result:j},_init:oe}},he.memo=function(j,G){return{$$typeof:p,type:j,compare:G===void 0?null:G}},he.startTransition=function(j){var G=X.T,ae={};X.T=ae;try{var ne=j(),I=X.S;I!==null&&I(ae,ne),typeof ne=="object"&&ne!==null&&typeof ne.then=="function"&&ne.then(be,te)}catch(pe){te(pe)}finally{X.T=G}},he.unstable_useCacheRefresh=function(){return X.H.useCacheRefresh()},he.use=function(j){return X.H.use(j)},he.useActionState=function(j,G,ae){return X.H.useActionState(j,G,ae)},he.useCallback=function(j,G){return X.H.useCallback(j,G)},he.useContext=function(j){return X.H.useContext(j)},he.useDebugValue=function(){},he.useDeferredValue=function(j,G){return X.H.useDeferredValue(j,G)},he.useEffect=function(j,G){return X.H.useEffect(j,G)},he.useId=function(){return X.H.useId()},he.useImperativeHandle=function(j,G,ae){return X.H.useImperativeHandle(j,G,ae)},he.useInsertionEffect=function(j,G){return X.H.useInsertionEffect(j,G)},he.useLayoutEffect=function(j,G){return X.H.useLayoutEffect(j,G)},he.useMemo=function(j,G){return X.H.useMemo(j,G)},he.useOptimistic=function(j,G){return X.H.useOptimistic(j,G)},he.useReducer=function(j,G,ae){return X.H.useReducer(j,G,ae)},he.useRef=function(j){return X.H.useRef(j)},he.useState=function(j){return X.H.useState(j)},he.useSyncExternalStore=function(j,G,ae){return X.H.useSyncExternalStore(j,G,ae)},he.useTransition=function(){return X.H.useTransition()},he.version="19.0.0",he}var qm;function da(){return qm||(qm=1,hu.exports=u2()),hu.exports}var D=da();const kt=q0(D);var gu={exports:{}},Wl={},vu={exports:{}},yu={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Fm;function c2(){return Fm||(Fm=1,function(l){function r(K,oe){var te=K.length;K.push(oe);e:for(;0<te;){var be=te-1>>>1,j=K[be];if(0<c(j,oe))K[be]=oe,K[te]=j,te=be;else break e}}function u(K){return K.length===0?null:K[0]}function s(K){if(K.length===0)return null;var oe=K[0],te=K.pop();if(te!==oe){K[0]=te;e:for(var be=0,j=K.length,G=j>>>1;be<G;){var ae=2*(be+1)-1,ne=K[ae],I=ae+1,pe=K[I];if(0>c(ne,te))I<j&&0>c(pe,ne)?(K[be]=pe,K[I]=te,be=I):(K[be]=ne,K[ae]=te,be=ae);else if(I<j&&0>c(pe,te))K[be]=pe,K[I]=te,be=I;else break e}}return oe}function c(K,oe){var te=K.sortIndex-oe.sortIndex;return te!==0?te:K.id-oe.id}if(l.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var m=performance;l.unstable_now=function(){return m.now()}}else{var h=Date,v=h.now();l.unstable_now=function(){return h.now()-v}}var g=[],p=[],b=1,S=null,N=3,T=!1,x=!1,O=!1,E=typeof setTimeout=="function"?setTimeout:null,_=typeof clearTimeout=="function"?clearTimeout:null,M=typeof setImmediate<"u"?setImmediate:null;function C(K){for(var oe=u(p);oe!==null;){if(oe.callback===null)s(p);else if(oe.startTime<=K)s(p),oe.sortIndex=oe.expirationTime,r(g,oe);else break;oe=u(p)}}function Q(K){if(O=!1,C(K),!x)if(u(g)!==null)x=!0,P();else{var oe=u(p);oe!==null&&Se(Q,oe.startTime-K)}}var X=!1,$=-1,J=5,ie=-1;function Y(){return!(l.unstable_now()-ie<J)}function Z(){if(X){var K=l.unstable_now();ie=K;var oe=!0;try{e:{x=!1,O&&(O=!1,_($),$=-1),T=!0;var te=N;try{t:{for(C(K),S=u(g);S!==null&&!(S.expirationTime>K&&Y());){var be=S.callback;if(typeof be=="function"){S.callback=null,N=S.priorityLevel;var j=be(S.expirationTime<=K);if(K=l.unstable_now(),typeof j=="function"){S.callback=j,C(K),oe=!0;break t}S===u(g)&&s(g),C(K)}else s(g);S=u(g)}if(S!==null)oe=!0;else{var G=u(p);G!==null&&Se(Q,G.startTime-K),oe=!1}}break e}finally{S=null,N=te,T=!1}oe=void 0}}finally{oe?W():X=!1}}}var W;if(typeof M=="function")W=function(){M(Z)};else if(typeof MessageChannel<"u"){var L=new MessageChannel,ee=L.port2;L.port1.onmessage=Z,W=function(){ee.postMessage(null)}}else W=function(){E(Z,0)};function P(){X||(X=!0,W())}function Se(K,oe){$=E(function(){K(l.unstable_now())},oe)}l.unstable_IdlePriority=5,l.unstable_ImmediatePriority=1,l.unstable_LowPriority=4,l.unstable_NormalPriority=3,l.unstable_Profiling=null,l.unstable_UserBlockingPriority=2,l.unstable_cancelCallback=function(K){K.callback=null},l.unstable_continueExecution=function(){x||T||(x=!0,P())},l.unstable_forceFrameRate=function(K){0>K||125<K?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):J=0<K?Math.floor(1e3/K):5},l.unstable_getCurrentPriorityLevel=function(){return N},l.unstable_getFirstCallbackNode=function(){return u(g)},l.unstable_next=function(K){switch(N){case 1:case 2:case 3:var oe=3;break;default:oe=N}var te=N;N=oe;try{return K()}finally{N=te}},l.unstable_pauseExecution=function(){},l.unstable_requestPaint=function(){},l.unstable_runWithPriority=function(K,oe){switch(K){case 1:case 2:case 3:case 4:case 5:break;default:K=3}var te=N;N=K;try{return oe()}finally{N=te}},l.unstable_scheduleCallback=function(K,oe,te){var be=l.unstable_now();switch(typeof te=="object"&&te!==null?(te=te.delay,te=typeof te=="number"&&0<te?be+te:be):te=be,K){case 1:var j=-1;break;case 2:j=250;break;case 5:j=1073741823;break;case 4:j=1e4;break;default:j=5e3}return j=te+j,K={id:b++,callback:oe,priorityLevel:K,startTime:te,expirationTime:j,sortIndex:-1},te>be?(K.sortIndex=te,r(p,K),u(g)===null&&K===u(p)&&(O?(_($),$=-1):O=!0,Se(Q,te-be))):(K.sortIndex=j,r(g,K),x||T||(x=!0,P())),K},l.unstable_shouldYield=Y,l.unstable_wrapCallback=function(K){var oe=N;return function(){var te=N;N=oe;try{return K.apply(this,arguments)}finally{N=te}}}}(yu)),yu}var Ym;function f2(){return Ym||(Ym=1,vu.exports=c2()),vu.exports}var bu={exports:{}},nt={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Gm;function d2(){if(Gm)return nt;Gm=1;var l=da();function r(g){var p="https://react.dev/errors/"+g;if(1<arguments.length){p+="?args[]="+encodeURIComponent(arguments[1]);for(var b=2;b<arguments.length;b++)p+="&args[]="+encodeURIComponent(arguments[b])}return"Minified React error #"+g+"; visit "+p+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function u(){}var s={d:{f:u,r:function(){throw Error(r(522))},D:u,C:u,L:u,m:u,X:u,S:u,M:u},p:0,findDOMNode:null},c=Symbol.for("react.portal");function m(g,p,b){var S=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:c,key:S==null?null:""+S,children:g,containerInfo:p,implementation:b}}var h=l.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function v(g,p){if(g==="font")return"";if(typeof p=="string")return p==="use-credentials"?p:""}return nt.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=s,nt.createPortal=function(g,p){var b=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!p||p.nodeType!==1&&p.nodeType!==9&&p.nodeType!==11)throw Error(r(299));return m(g,p,null,b)},nt.flushSync=function(g){var p=h.T,b=s.p;try{if(h.T=null,s.p=2,g)return g()}finally{h.T=p,s.p=b,s.d.f()}},nt.preconnect=function(g,p){typeof g=="string"&&(p?(p=p.crossOrigin,p=typeof p=="string"?p==="use-credentials"?p:"":void 0):p=null,s.d.C(g,p))},nt.prefetchDNS=function(g){typeof g=="string"&&s.d.D(g)},nt.preinit=function(g,p){if(typeof g=="string"&&p&&typeof p.as=="string"){var b=p.as,S=v(b,p.crossOrigin),N=typeof p.integrity=="string"?p.integrity:void 0,T=typeof p.fetchPriority=="string"?p.fetchPriority:void 0;b==="style"?s.d.S(g,typeof p.precedence=="string"?p.precedence:void 0,{crossOrigin:S,integrity:N,fetchPriority:T}):b==="script"&&s.d.X(g,{crossOrigin:S,integrity:N,fetchPriority:T,nonce:typeof p.nonce=="string"?p.nonce:void 0})}},nt.preinitModule=function(g,p){if(typeof g=="string")if(typeof p=="object"&&p!==null){if(p.as==null||p.as==="script"){var b=v(p.as,p.crossOrigin);s.d.M(g,{crossOrigin:b,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0})}}else p==null&&s.d.M(g)},nt.preload=function(g,p){if(typeof g=="string"&&typeof p=="object"&&p!==null&&typeof p.as=="string"){var b=p.as,S=v(b,p.crossOrigin);s.d.L(g,b,{crossOrigin:S,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0,type:typeof p.type=="string"?p.type:void 0,fetchPriority:typeof p.fetchPriority=="string"?p.fetchPriority:void 0,referrerPolicy:typeof p.referrerPolicy=="string"?p.referrerPolicy:void 0,imageSrcSet:typeof p.imageSrcSet=="string"?p.imageSrcSet:void 0,imageSizes:typeof p.imageSizes=="string"?p.imageSizes:void 0,media:typeof p.media=="string"?p.media:void 0})}},nt.preloadModule=function(g,p){if(typeof g=="string")if(p){var b=v(p.as,p.crossOrigin);s.d.m(g,{as:typeof p.as=="string"&&p.as!=="script"?p.as:void 0,crossOrigin:b,integrity:typeof p.integrity=="string"?p.integrity:void 0})}else s.d.m(g)},nt.requestFormReset=function(g){s.d.r(g)},nt.unstable_batchedUpdates=function(g,p){return g(p)},nt.useFormState=function(g,p,b){return h.H.useFormState(g,p,b)},nt.useFormStatus=function(){return h.H.useHostTransitionStatus()},nt.version="19.0.0",nt}var Xm;function Lu(){if(Xm)return bu.exports;Xm=1;function l(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(l)}catch(r){console.error(r)}}return l(),bu.exports=d2(),bu.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Vm;function m2(){if(Vm)return Wl;Vm=1;var l=f2(),r=da(),u=Lu();function s(e){var t="https://react.dev/errors/"+e;if(1<arguments.length){t+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)t+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function c(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}var m=Symbol.for("react.element"),h=Symbol.for("react.transitional.element"),v=Symbol.for("react.portal"),g=Symbol.for("react.fragment"),p=Symbol.for("react.strict_mode"),b=Symbol.for("react.profiler"),S=Symbol.for("react.provider"),N=Symbol.for("react.consumer"),T=Symbol.for("react.context"),x=Symbol.for("react.forward_ref"),O=Symbol.for("react.suspense"),E=Symbol.for("react.suspense_list"),_=Symbol.for("react.memo"),M=Symbol.for("react.lazy"),C=Symbol.for("react.offscreen"),Q=Symbol.for("react.memo_cache_sentinel"),X=Symbol.iterator;function $(e){return e===null||typeof e!="object"?null:(e=X&&e[X]||e["@@iterator"],typeof e=="function"?e:null)}var J=Symbol.for("react.client.reference");function ie(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===J?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case g:return"Fragment";case v:return"Portal";case b:return"Profiler";case p:return"StrictMode";case O:return"Suspense";case E:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case T:return(e.displayName||"Context")+".Provider";case N:return(e._context.displayName||"Context")+".Consumer";case x:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case _:return t=e.displayName||null,t!==null?t:ie(e.type)||"Memo";case M:t=e._payload,e=e._init;try{return ie(e(t))}catch{}}return null}var Y=r.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,Z=Object.assign,W,L;function ee(e){if(W===void 0)try{throw Error()}catch(a){var t=a.stack.trim().match(/\n( *(at )?)/);W=t&&t[1]||"",L=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+W+e+L}var P=!1;function Se(e,t){if(!e||P)return"";P=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var n={DetermineComponentFrameRoot:function(){try{if(t){var V=function(){throw Error()};if(Object.defineProperty(V.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(V,[])}catch(H){var B=H}Reflect.construct(e,[],V)}else{try{V.call()}catch(H){B=H}e.call(V.prototype)}}else{try{throw Error()}catch(H){B=H}(V=e())&&typeof V.catch=="function"&&V.catch(function(){})}}catch(H){if(H&&B&&typeof H.stack=="string")return[H.stack,B.stack]}return[null,null]}};n.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var i=Object.getOwnPropertyDescriptor(n.DetermineComponentFrameRoot,"name");i&&i.configurable&&Object.defineProperty(n.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var o=n.DetermineComponentFrameRoot(),d=o[0],y=o[1];if(d&&y){var w=d.split(`
`),R=y.split(`
`);for(i=n=0;n<w.length&&!w[n].includes("DetermineComponentFrameRoot");)n++;for(;i<R.length&&!R[i].includes("DetermineComponentFrameRoot");)i++;if(n===w.length||i===R.length)for(n=w.length-1,i=R.length-1;1<=n&&0<=i&&w[n]!==R[i];)i--;for(;1<=n&&0<=i;n--,i--)if(w[n]!==R[i]){if(n!==1||i!==1)do if(n--,i--,0>i||w[n]!==R[i]){var q=`
`+w[n].replace(" at new "," at ");return e.displayName&&q.includes("<anonymous>")&&(q=q.replace("<anonymous>",e.displayName)),q}while(1<=n&&0<=i);break}}}finally{P=!1,Error.prepareStackTrace=a}return(a=e?e.displayName||e.name:"")?ee(a):""}function K(e){switch(e.tag){case 26:case 27:case 5:return ee(e.type);case 16:return ee("Lazy");case 13:return ee("Suspense");case 19:return ee("SuspenseList");case 0:case 15:return e=Se(e.type,!1),e;case 11:return e=Se(e.type.render,!1),e;case 1:return e=Se(e.type,!0),e;default:return""}}function oe(e){try{var t="";do t+=K(e),e=e.return;while(e);return t}catch(a){return`
Error generating stack: `+a.message+`
`+a.stack}}function te(e){var t=e,a=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,(t.flags&4098)!==0&&(a=t.return),e=t.return;while(e)}return t.tag===3?a:null}function be(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function j(e){if(te(e)!==e)throw Error(s(188))}function G(e){var t=e.alternate;if(!t){if(t=te(e),t===null)throw Error(s(188));return t!==e?null:e}for(var a=e,n=t;;){var i=a.return;if(i===null)break;var o=i.alternate;if(o===null){if(n=i.return,n!==null){a=n;continue}break}if(i.child===o.child){for(o=i.child;o;){if(o===a)return j(i),e;if(o===n)return j(i),t;o=o.sibling}throw Error(s(188))}if(a.return!==n.return)a=i,n=o;else{for(var d=!1,y=i.child;y;){if(y===a){d=!0,a=i,n=o;break}if(y===n){d=!0,n=i,a=o;break}y=y.sibling}if(!d){for(y=o.child;y;){if(y===a){d=!0,a=o,n=i;break}if(y===n){d=!0,n=o,a=i;break}y=y.sibling}if(!d)throw Error(s(189))}}if(a.alternate!==n)throw Error(s(190))}if(a.tag!==3)throw Error(s(188));return a.stateNode.current===a?e:t}function ae(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e;for(e=e.child;e!==null;){if(t=ae(e),t!==null)return t;e=e.sibling}return null}var ne=Array.isArray,I=u.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,pe={pending:!1,data:null,method:null,action:null},fe=[],ze=-1;function ue(e){return{current:e}}function Ee(e){0>ze||(e.current=fe[ze],fe[ze]=null,ze--)}function je(e,t){ze++,fe[ze]=e.current,e.current=t}var et=ue(null),Ha=ue(null),ma=ue(null),ui=ue(null);function ci(e,t){switch(je(ma,t),je(Ha,e),je(et,null),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)&&(t=t.namespaceURI)?dm(t):0;break;default:if(e=e===8?t.parentNode:t,t=e.tagName,e=e.namespaceURI)e=dm(e),t=mm(e,t);else switch(t){case"svg":t=1;break;case"math":t=2;break;default:t=0}}Ee(et),je(et,t)}function mn(){Ee(et),Ee(Ha),Ee(ma)}function lo(e){e.memoizedState!==null&&je(ui,e);var t=et.current,a=mm(t,e.type);t!==a&&(je(Ha,e),je(et,a))}function fi(e){Ha.current===e&&(Ee(et),Ee(Ha)),ui.current===e&&(Ee(ui),Vl._currentValue=pe)}var io=Object.prototype.hasOwnProperty,ro=l.unstable_scheduleCallback,oo=l.unstable_cancelCallback,Lp=l.unstable_shouldYield,qp=l.unstable_requestPaint,Ut=l.unstable_now,Fp=l.unstable_getCurrentPriorityLevel,ec=l.unstable_ImmediatePriority,tc=l.unstable_UserBlockingPriority,di=l.unstable_NormalPriority,Yp=l.unstable_LowPriority,ac=l.unstable_IdlePriority,Gp=l.log,Xp=l.unstable_setDisableYieldValue,el=null,dt=null;function Vp(e){if(dt&&typeof dt.onCommitFiberRoot=="function")try{dt.onCommitFiberRoot(el,e,void 0,(e.current.flags&128)===128)}catch{}}function pa(e){if(typeof Gp=="function"&&Xp(e),dt&&typeof dt.setStrictMode=="function")try{dt.setStrictMode(el,e)}catch{}}var mt=Math.clz32?Math.clz32:Kp,Qp=Math.log,Zp=Math.LN2;function Kp(e){return e>>>=0,e===0?32:31-(Qp(e)/Zp|0)|0}var mi=128,pi=4194304;function La(e){var t=e&42;if(t!==0)return t;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194176;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function hi(e,t){var a=e.pendingLanes;if(a===0)return 0;var n=0,i=e.suspendedLanes,o=e.pingedLanes,d=e.warmLanes;e=e.finishedLanes!==0;var y=a&134217727;return y!==0?(a=y&~i,a!==0?n=La(a):(o&=y,o!==0?n=La(o):e||(d=y&~d,d!==0&&(n=La(d))))):(y=a&~i,y!==0?n=La(y):o!==0?n=La(o):e||(d=a&~d,d!==0&&(n=La(d)))),n===0?0:t!==0&&t!==n&&(t&i)===0&&(i=n&-n,d=t&-t,i>=d||i===32&&(d&4194176)!==0)?t:n}function tl(e,t){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&t)===0}function Jp(e,t){switch(e){case 1:case 2:case 4:case 8:return t+250;case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function nc(){var e=mi;return mi<<=1,(mi&4194176)===0&&(mi=128),e}function lc(){var e=pi;return pi<<=1,(pi&62914560)===0&&(pi=4194304),e}function so(e){for(var t=[],a=0;31>a;a++)t.push(e);return t}function al(e,t){e.pendingLanes|=t,t!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function $p(e,t,a,n,i,o){var d=e.pendingLanes;e.pendingLanes=a,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=a,e.entangledLanes&=a,e.errorRecoveryDisabledLanes&=a,e.shellSuspendCounter=0;var y=e.entanglements,w=e.expirationTimes,R=e.hiddenUpdates;for(a=d&~a;0<a;){var q=31-mt(a),V=1<<q;y[q]=0,w[q]=-1;var B=R[q];if(B!==null)for(R[q]=null,q=0;q<B.length;q++){var H=B[q];H!==null&&(H.lane&=-536870913)}a&=~V}n!==0&&ic(e,n,0),o!==0&&i===0&&e.tag!==0&&(e.suspendedLanes|=o&~(d&~t))}function ic(e,t,a){e.pendingLanes|=t,e.suspendedLanes&=~t;var n=31-mt(t);e.entangledLanes|=t,e.entanglements[n]=e.entanglements[n]|1073741824|a&4194218}function rc(e,t){var a=e.entangledLanes|=t;for(e=e.entanglements;a;){var n=31-mt(a),i=1<<n;i&t|e[n]&t&&(e[n]|=t),a&=~i}}function oc(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function sc(){var e=I.p;return e!==0?e:(e=window.event,e===void 0?32:_m(e.type))}function Wp(e,t){var a=I.p;try{return I.p=e,t()}finally{I.p=a}}var ha=Math.random().toString(36).slice(2),tt="__reactFiber$"+ha,ot="__reactProps$"+ha,pn="__reactContainer$"+ha,uo="__reactEvents$"+ha,Pp="__reactListeners$"+ha,Ip="__reactHandles$"+ha,uc="__reactResources$"+ha,nl="__reactMarker$"+ha;function co(e){delete e[tt],delete e[ot],delete e[uo],delete e[Pp],delete e[Ip]}function qa(e){var t=e[tt];if(t)return t;for(var a=e.parentNode;a;){if(t=a[pn]||a[tt]){if(a=t.alternate,t.child!==null||a!==null&&a.child!==null)for(e=gm(e);e!==null;){if(a=e[tt])return a;e=gm(e)}return t}e=a,a=e.parentNode}return null}function hn(e){if(e=e[tt]||e[pn]){var t=e.tag;if(t===5||t===6||t===13||t===26||t===27||t===3)return e}return null}function ll(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e.stateNode;throw Error(s(33))}function gn(e){var t=e[uc];return t||(t=e[uc]={hoistableStyles:new Map,hoistableScripts:new Map}),t}function Ze(e){e[nl]=!0}var cc=new Set,fc={};function Fa(e,t){vn(e,t),vn(e+"Capture",t)}function vn(e,t){for(fc[e]=t,e=0;e<t.length;e++)cc.add(t[e])}var Zt=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),eh=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),dc={},mc={};function th(e){return io.call(mc,e)?!0:io.call(dc,e)?!1:eh.test(e)?mc[e]=!0:(dc[e]=!0,!1)}function gi(e,t,a){if(th(t))if(a===null)e.removeAttribute(t);else{switch(typeof a){case"undefined":case"function":case"symbol":e.removeAttribute(t);return;case"boolean":var n=t.toLowerCase().slice(0,5);if(n!=="data-"&&n!=="aria-"){e.removeAttribute(t);return}}e.setAttribute(t,""+a)}}function vi(e,t,a){if(a===null)e.removeAttribute(t);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(t);return}e.setAttribute(t,""+a)}}function Kt(e,t,a,n){if(n===null)e.removeAttribute(a);else{switch(typeof n){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(a);return}e.setAttributeNS(t,a,""+n)}}function bt(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function pc(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function ah(e){var t=pc(e)?"checked":"value",a=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),n=""+e[t];if(!e.hasOwnProperty(t)&&typeof a<"u"&&typeof a.get=="function"&&typeof a.set=="function"){var i=a.get,o=a.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(d){n=""+d,o.call(this,d)}}),Object.defineProperty(e,t,{enumerable:a.enumerable}),{getValue:function(){return n},setValue:function(d){n=""+d},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function yi(e){e._valueTracker||(e._valueTracker=ah(e))}function hc(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var a=t.getValue(),n="";return e&&(n=pc(e)?e.checked?"true":"false":e.value),e=n,e!==a?(t.setValue(e),!0):!1}function bi(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var nh=/[\n"\\]/g;function xt(e){return e.replace(nh,function(t){return"\\"+t.charCodeAt(0).toString(16)+" "})}function fo(e,t,a,n,i,o,d,y){e.name="",d!=null&&typeof d!="function"&&typeof d!="symbol"&&typeof d!="boolean"?e.type=d:e.removeAttribute("type"),t!=null?d==="number"?(t===0&&e.value===""||e.value!=t)&&(e.value=""+bt(t)):e.value!==""+bt(t)&&(e.value=""+bt(t)):d!=="submit"&&d!=="reset"||e.removeAttribute("value"),t!=null?mo(e,d,bt(t)):a!=null?mo(e,d,bt(a)):n!=null&&e.removeAttribute("value"),i==null&&o!=null&&(e.defaultChecked=!!o),i!=null&&(e.checked=i&&typeof i!="function"&&typeof i!="symbol"),y!=null&&typeof y!="function"&&typeof y!="symbol"&&typeof y!="boolean"?e.name=""+bt(y):e.removeAttribute("name")}function gc(e,t,a,n,i,o,d,y){if(o!=null&&typeof o!="function"&&typeof o!="symbol"&&typeof o!="boolean"&&(e.type=o),t!=null||a!=null){if(!(o!=="submit"&&o!=="reset"||t!=null))return;a=a!=null?""+bt(a):"",t=t!=null?""+bt(t):a,y||t===e.value||(e.value=t),e.defaultValue=t}n=n??i,n=typeof n!="function"&&typeof n!="symbol"&&!!n,e.checked=y?e.checked:!!n,e.defaultChecked=!!n,d!=null&&typeof d!="function"&&typeof d!="symbol"&&typeof d!="boolean"&&(e.name=d)}function mo(e,t,a){t==="number"&&bi(e.ownerDocument)===e||e.defaultValue===""+a||(e.defaultValue=""+a)}function yn(e,t,a,n){if(e=e.options,t){t={};for(var i=0;i<a.length;i++)t["$"+a[i]]=!0;for(a=0;a<e.length;a++)i=t.hasOwnProperty("$"+e[a].value),e[a].selected!==i&&(e[a].selected=i),i&&n&&(e[a].defaultSelected=!0)}else{for(a=""+bt(a),t=null,i=0;i<e.length;i++){if(e[i].value===a){e[i].selected=!0,n&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function vc(e,t,a){if(t!=null&&(t=""+bt(t),t!==e.value&&(e.value=t),a==null)){e.defaultValue!==t&&(e.defaultValue=t);return}e.defaultValue=a!=null?""+bt(a):""}function yc(e,t,a,n){if(t==null){if(n!=null){if(a!=null)throw Error(s(92));if(ne(n)){if(1<n.length)throw Error(s(93));n=n[0]}a=n}a==null&&(a=""),t=a}a=bt(t),e.defaultValue=a,n=e.textContent,n===a&&n!==""&&n!==null&&(e.value=n)}function bn(e,t){if(t){var a=e.firstChild;if(a&&a===e.lastChild&&a.nodeType===3){a.nodeValue=t;return}}e.textContent=t}var lh=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function bc(e,t,a){var n=t.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?n?e.setProperty(t,""):t==="float"?e.cssFloat="":e[t]="":n?e.setProperty(t,a):typeof a!="number"||a===0||lh.has(t)?t==="float"?e.cssFloat=a:e[t]=(""+a).trim():e[t]=a+"px"}function xc(e,t,a){if(t!=null&&typeof t!="object")throw Error(s(62));if(e=e.style,a!=null){for(var n in a)!a.hasOwnProperty(n)||t!=null&&t.hasOwnProperty(n)||(n.indexOf("--")===0?e.setProperty(n,""):n==="float"?e.cssFloat="":e[n]="");for(var i in t)n=t[i],t.hasOwnProperty(i)&&a[i]!==n&&bc(e,i,n)}else for(var o in t)t.hasOwnProperty(o)&&bc(e,o,t[o])}function po(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var ih=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),rh=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function xi(e){return rh.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}var ho=null;function go(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var xn=null,wn=null;function wc(e){var t=hn(e);if(t&&(e=t.stateNode)){var a=e[ot]||null;e:switch(e=t.stateNode,t.type){case"input":if(fo(e,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),t=a.name,a.type==="radio"&&t!=null){for(a=e;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+xt(""+t)+'"][type="radio"]'),t=0;t<a.length;t++){var n=a[t];if(n!==e&&n.form===e.form){var i=n[ot]||null;if(!i)throw Error(s(90));fo(n,i.value,i.defaultValue,i.defaultValue,i.checked,i.defaultChecked,i.type,i.name)}}for(t=0;t<a.length;t++)n=a[t],n.form===e.form&&hc(n)}break e;case"textarea":vc(e,a.value,a.defaultValue);break e;case"select":t=a.value,t!=null&&yn(e,!!a.multiple,t,!1)}}}var vo=!1;function Sc(e,t,a){if(vo)return e(t,a);vo=!0;try{var n=e(t);return n}finally{if(vo=!1,(xn!==null||wn!==null)&&(nr(),xn&&(t=xn,e=wn,wn=xn=null,wc(t),e)))for(t=0;t<e.length;t++)wc(e[t])}}function il(e,t){var a=e.stateNode;if(a===null)return null;var n=a[ot]||null;if(n===null)return null;a=n[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(n=!n.disabled)||(e=e.type,n=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!n;break e;default:e=!1}if(e)return null;if(a&&typeof a!="function")throw Error(s(231,t,typeof a));return a}var yo=!1;if(Zt)try{var rl={};Object.defineProperty(rl,"passive",{get:function(){yo=!0}}),window.addEventListener("test",rl,rl),window.removeEventListener("test",rl,rl)}catch{yo=!1}var ga=null,bo=null,wi=null;function Ec(){if(wi)return wi;var e,t=bo,a=t.length,n,i="value"in ga?ga.value:ga.textContent,o=i.length;for(e=0;e<a&&t[e]===i[e];e++);var d=a-e;for(n=1;n<=d&&t[a-n]===i[o-n];n++);return wi=i.slice(e,1<n?1-n:void 0)}function Si(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Ei(){return!0}function jc(){return!1}function st(e){function t(a,n,i,o,d){this._reactName=a,this._targetInst=i,this.type=n,this.nativeEvent=o,this.target=d,this.currentTarget=null;for(var y in e)e.hasOwnProperty(y)&&(a=e[y],this[y]=a?a(o):o[y]);return this.isDefaultPrevented=(o.defaultPrevented!=null?o.defaultPrevented:o.returnValue===!1)?Ei:jc,this.isPropagationStopped=jc,this}return Z(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=Ei)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=Ei)},persist:function(){},isPersistent:Ei}),t}var Ya={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},ji=st(Ya),ol=Z({},Ya,{view:0,detail:0}),oh=st(ol),xo,wo,sl,Ti=Z({},ol,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Eo,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==sl&&(sl&&e.type==="mousemove"?(xo=e.screenX-sl.screenX,wo=e.screenY-sl.screenY):wo=xo=0,sl=e),xo)},movementY:function(e){return"movementY"in e?e.movementY:wo}}),Tc=st(Ti),sh=Z({},Ti,{dataTransfer:0}),uh=st(sh),ch=Z({},ol,{relatedTarget:0}),So=st(ch),fh=Z({},Ya,{animationName:0,elapsedTime:0,pseudoElement:0}),dh=st(fh),mh=Z({},Ya,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),ph=st(mh),hh=Z({},Ya,{data:0}),Oc=st(hh),gh={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},vh={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},yh={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function bh(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=yh[e])?!!t[e]:!1}function Eo(){return bh}var xh=Z({},ol,{key:function(e){if(e.key){var t=gh[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Si(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?vh[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Eo,charCode:function(e){return e.type==="keypress"?Si(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Si(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),wh=st(xh),Sh=Z({},Ti,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Nc=st(Sh),Eh=Z({},ol,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Eo}),jh=st(Eh),Th=Z({},Ya,{propertyName:0,elapsedTime:0,pseudoElement:0}),Oh=st(Th),Nh=Z({},Ti,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Ah=st(Nh),Rh=Z({},Ya,{newState:0,oldState:0}),Ch=st(Rh),_h=[9,13,27,32],jo=Zt&&"CompositionEvent"in window,ul=null;Zt&&"documentMode"in document&&(ul=document.documentMode);var zh=Zt&&"TextEvent"in window&&!ul,Ac=Zt&&(!jo||ul&&8<ul&&11>=ul),Rc=" ",Cc=!1;function _c(e,t){switch(e){case"keyup":return _h.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function zc(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Sn=!1;function Dh(e,t){switch(e){case"compositionend":return zc(t);case"keypress":return t.which!==32?null:(Cc=!0,Rc);case"textInput":return e=t.data,e===Rc&&Cc?null:e;default:return null}}function Mh(e,t){if(Sn)return e==="compositionend"||!jo&&_c(e,t)?(e=Ec(),wi=bo=ga=null,Sn=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Ac&&t.locale!=="ko"?null:t.data;default:return null}}var kh={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Dc(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!kh[e.type]:t==="textarea"}function Mc(e,t,a,n){xn?wn?wn.push(n):wn=[n]:xn=n,t=sr(t,"onChange"),0<t.length&&(a=new ji("onChange","change",null,a,n),e.push({event:a,listeners:t}))}var cl=null,fl=null;function Bh(e){om(e,0)}function Oi(e){var t=ll(e);if(hc(t))return e}function kc(e,t){if(e==="change")return t}var Bc=!1;if(Zt){var To;if(Zt){var Oo="oninput"in document;if(!Oo){var Uc=document.createElement("div");Uc.setAttribute("oninput","return;"),Oo=typeof Uc.oninput=="function"}To=Oo}else To=!1;Bc=To&&(!document.documentMode||9<document.documentMode)}function Hc(){cl&&(cl.detachEvent("onpropertychange",Lc),fl=cl=null)}function Lc(e){if(e.propertyName==="value"&&Oi(fl)){var t=[];Mc(t,fl,e,go(e)),Sc(Bh,t)}}function Uh(e,t,a){e==="focusin"?(Hc(),cl=t,fl=a,cl.attachEvent("onpropertychange",Lc)):e==="focusout"&&Hc()}function Hh(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Oi(fl)}function Lh(e,t){if(e==="click")return Oi(t)}function qh(e,t){if(e==="input"||e==="change")return Oi(t)}function Fh(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var pt=typeof Object.is=="function"?Object.is:Fh;function dl(e,t){if(pt(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var a=Object.keys(e),n=Object.keys(t);if(a.length!==n.length)return!1;for(n=0;n<a.length;n++){var i=a[n];if(!io.call(t,i)||!pt(e[i],t[i]))return!1}return!0}function qc(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Fc(e,t){var a=qc(e);e=0;for(var n;a;){if(a.nodeType===3){if(n=e+a.textContent.length,e<=t&&n>=t)return{node:a,offset:t-e};e=n}e:{for(;a;){if(a.nextSibling){a=a.nextSibling;break e}a=a.parentNode}a=void 0}a=qc(a)}}function Yc(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Yc(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Gc(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var t=bi(e.document);t instanceof e.HTMLIFrameElement;){try{var a=typeof t.contentWindow.location.href=="string"}catch{a=!1}if(a)e=t.contentWindow;else break;t=bi(e.document)}return t}function No(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function Yh(e,t){var a=Gc(t);t=e.focusedElem;var n=e.selectionRange;if(a!==t&&t&&t.ownerDocument&&Yc(t.ownerDocument.documentElement,t)){if(n!==null&&No(t)){if(e=n.start,a=n.end,a===void 0&&(a=e),"selectionStart"in t)t.selectionStart=e,t.selectionEnd=Math.min(a,t.value.length);else if(a=(e=t.ownerDocument||document)&&e.defaultView||window,a.getSelection){a=a.getSelection();var i=t.textContent.length,o=Math.min(n.start,i);n=n.end===void 0?o:Math.min(n.end,i),!a.extend&&o>n&&(i=n,n=o,o=i),i=Fc(t,o);var d=Fc(t,n);i&&d&&(a.rangeCount!==1||a.anchorNode!==i.node||a.anchorOffset!==i.offset||a.focusNode!==d.node||a.focusOffset!==d.offset)&&(e=e.createRange(),e.setStart(i.node,i.offset),a.removeAllRanges(),o>n?(a.addRange(e),a.extend(d.node,d.offset)):(e.setEnd(d.node,d.offset),a.addRange(e)))}}for(e=[],a=t;a=a.parentNode;)a.nodeType===1&&e.push({element:a,left:a.scrollLeft,top:a.scrollTop});for(typeof t.focus=="function"&&t.focus(),t=0;t<e.length;t++)a=e[t],a.element.scrollLeft=a.left,a.element.scrollTop=a.top}}var Gh=Zt&&"documentMode"in document&&11>=document.documentMode,En=null,Ao=null,ml=null,Ro=!1;function Xc(e,t,a){var n=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;Ro||En==null||En!==bi(n)||(n=En,"selectionStart"in n&&No(n)?n={start:n.selectionStart,end:n.selectionEnd}:(n=(n.ownerDocument&&n.ownerDocument.defaultView||window).getSelection(),n={anchorNode:n.anchorNode,anchorOffset:n.anchorOffset,focusNode:n.focusNode,focusOffset:n.focusOffset}),ml&&dl(ml,n)||(ml=n,n=sr(Ao,"onSelect"),0<n.length&&(t=new ji("onSelect","select",null,t,a),e.push({event:t,listeners:n}),t.target=En)))}function Ga(e,t){var a={};return a[e.toLowerCase()]=t.toLowerCase(),a["Webkit"+e]="webkit"+t,a["Moz"+e]="moz"+t,a}var jn={animationend:Ga("Animation","AnimationEnd"),animationiteration:Ga("Animation","AnimationIteration"),animationstart:Ga("Animation","AnimationStart"),transitionrun:Ga("Transition","TransitionRun"),transitionstart:Ga("Transition","TransitionStart"),transitioncancel:Ga("Transition","TransitionCancel"),transitionend:Ga("Transition","TransitionEnd")},Co={},Vc={};Zt&&(Vc=document.createElement("div").style,"AnimationEvent"in window||(delete jn.animationend.animation,delete jn.animationiteration.animation,delete jn.animationstart.animation),"TransitionEvent"in window||delete jn.transitionend.transition);function Xa(e){if(Co[e])return Co[e];if(!jn[e])return e;var t=jn[e],a;for(a in t)if(t.hasOwnProperty(a)&&a in Vc)return Co[e]=t[a];return e}var Qc=Xa("animationend"),Zc=Xa("animationiteration"),Kc=Xa("animationstart"),Xh=Xa("transitionrun"),Vh=Xa("transitionstart"),Qh=Xa("transitioncancel"),Jc=Xa("transitionend"),$c=new Map,Wc="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll scrollEnd toggle touchMove waiting wheel".split(" ");function _t(e,t){$c.set(e,t),Fa(t,[e])}var wt=[],Tn=0,_o=0;function Ni(){for(var e=Tn,t=_o=Tn=0;t<e;){var a=wt[t];wt[t++]=null;var n=wt[t];wt[t++]=null;var i=wt[t];wt[t++]=null;var o=wt[t];if(wt[t++]=null,n!==null&&i!==null){var d=n.pending;d===null?i.next=i:(i.next=d.next,d.next=i),n.pending=i}o!==0&&Pc(a,i,o)}}function Ai(e,t,a,n){wt[Tn++]=e,wt[Tn++]=t,wt[Tn++]=a,wt[Tn++]=n,_o|=n,e.lanes|=n,e=e.alternate,e!==null&&(e.lanes|=n)}function zo(e,t,a,n){return Ai(e,t,a,n),Ri(e)}function va(e,t){return Ai(e,null,null,t),Ri(e)}function Pc(e,t,a){e.lanes|=a;var n=e.alternate;n!==null&&(n.lanes|=a);for(var i=!1,o=e.return;o!==null;)o.childLanes|=a,n=o.alternate,n!==null&&(n.childLanes|=a),o.tag===22&&(e=o.stateNode,e===null||e._visibility&1||(i=!0)),e=o,o=o.return;i&&t!==null&&e.tag===3&&(o=e.stateNode,i=31-mt(a),o=o.hiddenUpdates,e=o[i],e===null?o[i]=[t]:e.push(t),t.lane=a|536870912)}function Ri(e){if(50<Hl)throw Hl=0,Hs=null,Error(s(185));for(var t=e.return;t!==null;)e=t,t=e.return;return e.tag===3?e.stateNode:null}var On={},Ic=new WeakMap;function St(e,t){if(typeof e=="object"&&e!==null){var a=Ic.get(e);return a!==void 0?a:(t={value:e,source:t,stack:oe(t)},Ic.set(e,t),t)}return{value:e,source:t,stack:oe(t)}}var Nn=[],An=0,Ci=null,_i=0,Et=[],jt=0,Va=null,Jt=1,$t="";function Qa(e,t){Nn[An++]=_i,Nn[An++]=Ci,Ci=e,_i=t}function ef(e,t,a){Et[jt++]=Jt,Et[jt++]=$t,Et[jt++]=Va,Va=e;var n=Jt;e=$t;var i=32-mt(n)-1;n&=~(1<<i),a+=1;var o=32-mt(t)+i;if(30<o){var d=i-i%5;o=(n&(1<<d)-1).toString(32),n>>=d,i-=d,Jt=1<<32-mt(t)+i|a<<i|n,$t=o+e}else Jt=1<<o|a<<i|n,$t=e}function Do(e){e.return!==null&&(Qa(e,1),ef(e,1,0))}function Mo(e){for(;e===Ci;)Ci=Nn[--An],Nn[An]=null,_i=Nn[--An],Nn[An]=null;for(;e===Va;)Va=Et[--jt],Et[jt]=null,$t=Et[--jt],Et[jt]=null,Jt=Et[--jt],Et[jt]=null}var it=null,We=null,Te=!1,zt=null,Ht=!1,ko=Error(s(519));function Za(e){var t=Error(s(418,""));throw gl(St(t,e)),ko}function tf(e){var t=e.stateNode,a=e.type,n=e.memoizedProps;switch(t[tt]=e,t[ot]=n,a){case"dialog":xe("cancel",t),xe("close",t);break;case"iframe":case"object":case"embed":xe("load",t);break;case"video":case"audio":for(a=0;a<ql.length;a++)xe(ql[a],t);break;case"source":xe("error",t);break;case"img":case"image":case"link":xe("error",t),xe("load",t);break;case"details":xe("toggle",t);break;case"input":xe("invalid",t),gc(t,n.value,n.defaultValue,n.checked,n.defaultChecked,n.type,n.name,!0),yi(t);break;case"select":xe("invalid",t);break;case"textarea":xe("invalid",t),yc(t,n.value,n.defaultValue,n.children),yi(t)}a=n.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||t.textContent===""+a||n.suppressHydrationWarning===!0||fm(t.textContent,a)?(n.popover!=null&&(xe("beforetoggle",t),xe("toggle",t)),n.onScroll!=null&&xe("scroll",t),n.onScrollEnd!=null&&xe("scrollend",t),n.onClick!=null&&(t.onclick=ur),t=!0):t=!1,t||Za(e)}function af(e){for(it=e.return;it;)switch(it.tag){case 3:case 27:Ht=!0;return;case 5:case 13:Ht=!1;return;default:it=it.return}}function pl(e){if(e!==it)return!1;if(!Te)return af(e),Te=!0,!1;var t=!1,a;if((a=e.tag!==3&&e.tag!==27)&&((a=e.tag===5)&&(a=e.type,a=!(a!=="form"&&a!=="button")||tu(e.type,e.memoizedProps)),a=!a),a&&(t=!0),t&&We&&Za(e),af(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(s(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8)if(a=e.data,a==="/$"){if(t===0){We=Mt(e.nextSibling);break e}t--}else a!=="$"&&a!=="$!"&&a!=="$?"||t++;e=e.nextSibling}We=null}}else We=it?Mt(e.stateNode.nextSibling):null;return!0}function hl(){We=it=null,Te=!1}function gl(e){zt===null?zt=[e]:zt.push(e)}var vl=Error(s(460)),nf=Error(s(474)),Bo={then:function(){}};function lf(e){return e=e.status,e==="fulfilled"||e==="rejected"}function zi(){}function rf(e,t,a){switch(a=e[a],a===void 0?e.push(t):a!==t&&(t.then(zi,zi),t=a),t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,e===vl?Error(s(483)):e;default:if(typeof t.status=="string")t.then(zi,zi);else{if(e=Ce,e!==null&&100<e.shellSuspendCounter)throw Error(s(482));e=t,e.status="pending",e.then(function(n){if(t.status==="pending"){var i=t;i.status="fulfilled",i.value=n}},function(n){if(t.status==="pending"){var i=t;i.status="rejected",i.reason=n}})}switch(t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,e===vl?Error(s(483)):e}throw yl=t,vl}}var yl=null;function of(){if(yl===null)throw Error(s(459));var e=yl;return yl=null,e}var Rn=null,bl=0;function Di(e){var t=bl;return bl+=1,Rn===null&&(Rn=[]),rf(Rn,e,t)}function xl(e,t){t=t.props.ref,e.ref=t!==void 0?t:null}function Mi(e,t){throw t.$$typeof===m?Error(s(525)):(e=Object.prototype.toString.call(t),Error(s(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)))}function sf(e){var t=e._init;return t(e._payload)}function uf(e){function t(z,A){if(e){var k=z.deletions;k===null?(z.deletions=[A],z.flags|=16):k.push(A)}}function a(z,A){if(!e)return null;for(;A!==null;)t(z,A),A=A.sibling;return null}function n(z){for(var A=new Map;z!==null;)z.key!==null?A.set(z.key,z):A.set(z.index,z),z=z.sibling;return A}function i(z,A){return z=Ra(z,A),z.index=0,z.sibling=null,z}function o(z,A,k){return z.index=k,e?(k=z.alternate,k!==null?(k=k.index,k<A?(z.flags|=33554434,A):k):(z.flags|=33554434,A)):(z.flags|=1048576,A)}function d(z){return e&&z.alternate===null&&(z.flags|=33554434),z}function y(z,A,k,F){return A===null||A.tag!==6?(A=Cs(k,z.mode,F),A.return=z,A):(A=i(A,k),A.return=z,A)}function w(z,A,k,F){var le=k.type;return le===g?q(z,A,k.props.children,F,k.key):A!==null&&(A.elementType===le||typeof le=="object"&&le!==null&&le.$$typeof===M&&sf(le)===A.type)?(A=i(A,k.props),xl(A,k),A.return=z,A):(A=Pi(k.type,k.key,k.props,null,z.mode,F),xl(A,k),A.return=z,A)}function R(z,A,k,F){return A===null||A.tag!==4||A.stateNode.containerInfo!==k.containerInfo||A.stateNode.implementation!==k.implementation?(A=_s(k,z.mode,F),A.return=z,A):(A=i(A,k.children||[]),A.return=z,A)}function q(z,A,k,F,le){return A===null||A.tag!==7?(A=nn(k,z.mode,F,le),A.return=z,A):(A=i(A,k),A.return=z,A)}function V(z,A,k){if(typeof A=="string"&&A!==""||typeof A=="number"||typeof A=="bigint")return A=Cs(""+A,z.mode,k),A.return=z,A;if(typeof A=="object"&&A!==null){switch(A.$$typeof){case h:return k=Pi(A.type,A.key,A.props,null,z.mode,k),xl(k,A),k.return=z,k;case v:return A=_s(A,z.mode,k),A.return=z,A;case M:var F=A._init;return A=F(A._payload),V(z,A,k)}if(ne(A)||$(A))return A=nn(A,z.mode,k,null),A.return=z,A;if(typeof A.then=="function")return V(z,Di(A),k);if(A.$$typeof===T)return V(z,Ji(z,A),k);Mi(z,A)}return null}function B(z,A,k,F){var le=A!==null?A.key:null;if(typeof k=="string"&&k!==""||typeof k=="number"||typeof k=="bigint")return le!==null?null:y(z,A,""+k,F);if(typeof k=="object"&&k!==null){switch(k.$$typeof){case h:return k.key===le?w(z,A,k,F):null;case v:return k.key===le?R(z,A,k,F):null;case M:return le=k._init,k=le(k._payload),B(z,A,k,F)}if(ne(k)||$(k))return le!==null?null:q(z,A,k,F,null);if(typeof k.then=="function")return B(z,A,Di(k),F);if(k.$$typeof===T)return B(z,A,Ji(z,k),F);Mi(z,k)}return null}function H(z,A,k,F,le){if(typeof F=="string"&&F!==""||typeof F=="number"||typeof F=="bigint")return z=z.get(k)||null,y(A,z,""+F,le);if(typeof F=="object"&&F!==null){switch(F.$$typeof){case h:return z=z.get(F.key===null?k:F.key)||null,w(A,z,F,le);case v:return z=z.get(F.key===null?k:F.key)||null,R(A,z,F,le);case M:var ve=F._init;return F=ve(F._payload),H(z,A,k,F,le)}if(ne(F)||$(F))return z=z.get(k)||null,q(A,z,F,le,null);if(typeof F.then=="function")return H(z,A,k,Di(F),le);if(F.$$typeof===T)return H(z,A,k,Ji(A,F),le);Mi(A,F)}return null}function re(z,A,k,F){for(var le=null,ve=null,se=A,ce=A=0,$e=null;se!==null&&ce<k.length;ce++){se.index>ce?($e=se,se=null):$e=se.sibling;var Oe=B(z,se,k[ce],F);if(Oe===null){se===null&&(se=$e);break}e&&se&&Oe.alternate===null&&t(z,se),A=o(Oe,A,ce),ve===null?le=Oe:ve.sibling=Oe,ve=Oe,se=$e}if(ce===k.length)return a(z,se),Te&&Qa(z,ce),le;if(se===null){for(;ce<k.length;ce++)se=V(z,k[ce],F),se!==null&&(A=o(se,A,ce),ve===null?le=se:ve.sibling=se,ve=se);return Te&&Qa(z,ce),le}for(se=n(se);ce<k.length;ce++)$e=H(se,z,ce,k[ce],F),$e!==null&&(e&&$e.alternate!==null&&se.delete($e.key===null?ce:$e.key),A=o($e,A,ce),ve===null?le=$e:ve.sibling=$e,ve=$e);return e&&se.forEach(function(Ba){return t(z,Ba)}),Te&&Qa(z,ce),le}function de(z,A,k,F){if(k==null)throw Error(s(151));for(var le=null,ve=null,se=A,ce=A=0,$e=null,Oe=k.next();se!==null&&!Oe.done;ce++,Oe=k.next()){se.index>ce?($e=se,se=null):$e=se.sibling;var Ba=B(z,se,Oe.value,F);if(Ba===null){se===null&&(se=$e);break}e&&se&&Ba.alternate===null&&t(z,se),A=o(Ba,A,ce),ve===null?le=Ba:ve.sibling=Ba,ve=Ba,se=$e}if(Oe.done)return a(z,se),Te&&Qa(z,ce),le;if(se===null){for(;!Oe.done;ce++,Oe=k.next())Oe=V(z,Oe.value,F),Oe!==null&&(A=o(Oe,A,ce),ve===null?le=Oe:ve.sibling=Oe,ve=Oe);return Te&&Qa(z,ce),le}for(se=n(se);!Oe.done;ce++,Oe=k.next())Oe=H(se,z,ce,Oe.value,F),Oe!==null&&(e&&Oe.alternate!==null&&se.delete(Oe.key===null?ce:Oe.key),A=o(Oe,A,ce),ve===null?le=Oe:ve.sibling=Oe,ve=Oe);return e&&se.forEach(function(r2){return t(z,r2)}),Te&&Qa(z,ce),le}function Le(z,A,k,F){if(typeof k=="object"&&k!==null&&k.type===g&&k.key===null&&(k=k.props.children),typeof k=="object"&&k!==null){switch(k.$$typeof){case h:e:{for(var le=k.key;A!==null;){if(A.key===le){if(le=k.type,le===g){if(A.tag===7){a(z,A.sibling),F=i(A,k.props.children),F.return=z,z=F;break e}}else if(A.elementType===le||typeof le=="object"&&le!==null&&le.$$typeof===M&&sf(le)===A.type){a(z,A.sibling),F=i(A,k.props),xl(F,k),F.return=z,z=F;break e}a(z,A);break}else t(z,A);A=A.sibling}k.type===g?(F=nn(k.props.children,z.mode,F,k.key),F.return=z,z=F):(F=Pi(k.type,k.key,k.props,null,z.mode,F),xl(F,k),F.return=z,z=F)}return d(z);case v:e:{for(le=k.key;A!==null;){if(A.key===le)if(A.tag===4&&A.stateNode.containerInfo===k.containerInfo&&A.stateNode.implementation===k.implementation){a(z,A.sibling),F=i(A,k.children||[]),F.return=z,z=F;break e}else{a(z,A);break}else t(z,A);A=A.sibling}F=_s(k,z.mode,F),F.return=z,z=F}return d(z);case M:return le=k._init,k=le(k._payload),Le(z,A,k,F)}if(ne(k))return re(z,A,k,F);if($(k)){if(le=$(k),typeof le!="function")throw Error(s(150));return k=le.call(k),de(z,A,k,F)}if(typeof k.then=="function")return Le(z,A,Di(k),F);if(k.$$typeof===T)return Le(z,A,Ji(z,k),F);Mi(z,k)}return typeof k=="string"&&k!==""||typeof k=="number"||typeof k=="bigint"?(k=""+k,A!==null&&A.tag===6?(a(z,A.sibling),F=i(A,k),F.return=z,z=F):(a(z,A),F=Cs(k,z.mode,F),F.return=z,z=F),d(z)):a(z,A)}return function(z,A,k,F){try{bl=0;var le=Le(z,A,k,F);return Rn=null,le}catch(se){if(se===vl)throw se;var ve=At(29,se,null,z.mode);return ve.lanes=F,ve.return=z,ve}finally{}}}var Ka=uf(!0),cf=uf(!1),Cn=ue(null),ki=ue(0);function ff(e,t){e=oa,je(ki,e),je(Cn,t),oa=e|t.baseLanes}function Uo(){je(ki,oa),je(Cn,Cn.current)}function Ho(){oa=ki.current,Ee(Cn),Ee(ki)}var Tt=ue(null),Lt=null;function ya(e){var t=e.alternate;je(Ve,Ve.current&1),je(Tt,e),Lt===null&&(t===null||Cn.current!==null||t.memoizedState!==null)&&(Lt=e)}function df(e){if(e.tag===22){if(je(Ve,Ve.current),je(Tt,e),Lt===null){var t=e.alternate;t!==null&&t.memoizedState!==null&&(Lt=e)}}else ba()}function ba(){je(Ve,Ve.current),je(Tt,Tt.current)}function Wt(e){Ee(Tt),Lt===e&&(Lt=null),Ee(Ve)}var Ve=ue(0);function Bi(e){for(var t=e;t!==null;){if(t.tag===13){var a=t.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||a.data==="$?"||a.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if((t.flags&128)!==0)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Zh=typeof AbortController<"u"?AbortController:function(){var e=[],t=this.signal={aborted:!1,addEventListener:function(a,n){e.push(n)}};this.abort=function(){t.aborted=!0,e.forEach(function(a){return a()})}},Kh=l.unstable_scheduleCallback,Jh=l.unstable_NormalPriority,Qe={$$typeof:T,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Lo(){return{controller:new Zh,data:new Map,refCount:0}}function wl(e){e.refCount--,e.refCount===0&&Kh(Jh,function(){e.controller.abort()})}var Sl=null,qo=0,_n=0,zn=null;function $h(e,t){if(Sl===null){var a=Sl=[];qo=0,_n=Qs(),zn={status:"pending",value:void 0,then:function(n){a.push(n)}}}return qo++,t.then(mf,mf),t}function mf(){if(--qo===0&&Sl!==null){zn!==null&&(zn.status="fulfilled");var e=Sl;Sl=null,_n=0,zn=null;for(var t=0;t<e.length;t++)(0,e[t])()}}function Wh(e,t){var a=[],n={status:"pending",value:null,reason:null,then:function(i){a.push(i)}};return e.then(function(){n.status="fulfilled",n.value=t;for(var i=0;i<a.length;i++)(0,a[i])(t)},function(i){for(n.status="rejected",n.reason=i,i=0;i<a.length;i++)(0,a[i])(void 0)}),n}var pf=Y.S;Y.S=function(e,t){typeof t=="object"&&t!==null&&typeof t.then=="function"&&$h(e,t),pf!==null&&pf(e,t)};var Ja=ue(null);function Fo(){var e=Ja.current;return e!==null?e:Ce.pooledCache}function Ui(e,t){t===null?je(Ja,Ja.current):je(Ja,t.pool)}function hf(){var e=Fo();return e===null?null:{parent:Qe._currentValue,pool:e}}var xa=0,ge=null,Ne=null,Ye=null,Hi=!1,Dn=!1,$a=!1,Li=0,El=0,Mn=null,Ph=0;function Fe(){throw Error(s(321))}function Yo(e,t){if(t===null)return!1;for(var a=0;a<t.length&&a<e.length;a++)if(!pt(e[a],t[a]))return!1;return!0}function Go(e,t,a,n,i,o){return xa=o,ge=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,Y.H=e===null||e.memoizedState===null?Wa:wa,$a=!1,o=a(n,i),$a=!1,Dn&&(o=vf(t,a,n,i)),gf(e),o}function gf(e){Y.H=qt;var t=Ne!==null&&Ne.next!==null;if(xa=0,Ye=Ne=ge=null,Hi=!1,El=0,Mn=null,t)throw Error(s(300));e===null||Ke||(e=e.dependencies,e!==null&&Ki(e)&&(Ke=!0))}function vf(e,t,a,n){ge=e;var i=0;do{if(Dn&&(Mn=null),El=0,Dn=!1,25<=i)throw Error(s(301));if(i+=1,Ye=Ne=null,e.updateQueue!=null){var o=e.updateQueue;o.lastEffect=null,o.events=null,o.stores=null,o.memoCache!=null&&(o.memoCache.index=0)}Y.H=Pa,o=t(a,n)}while(Dn);return o}function Ih(){var e=Y.H,t=e.useState()[0];return t=typeof t.then=="function"?jl(t):t,e=e.useState()[0],(Ne!==null?Ne.memoizedState:null)!==e&&(ge.flags|=1024),t}function Xo(){var e=Li!==0;return Li=0,e}function Vo(e,t,a){t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~a}function Qo(e){if(Hi){for(e=e.memoizedState;e!==null;){var t=e.queue;t!==null&&(t.pending=null),e=e.next}Hi=!1}xa=0,Ye=Ne=ge=null,Dn=!1,El=Li=0,Mn=null}function ut(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Ye===null?ge.memoizedState=Ye=e:Ye=Ye.next=e,Ye}function Ge(){if(Ne===null){var e=ge.alternate;e=e!==null?e.memoizedState:null}else e=Ne.next;var t=Ye===null?ge.memoizedState:Ye.next;if(t!==null)Ye=t,Ne=e;else{if(e===null)throw ge.alternate===null?Error(s(467)):Error(s(310));Ne=e,e={memoizedState:Ne.memoizedState,baseState:Ne.baseState,baseQueue:Ne.baseQueue,queue:Ne.queue,next:null},Ye===null?ge.memoizedState=Ye=e:Ye=Ye.next=e}return Ye}var qi;qi=function(){return{lastEffect:null,events:null,stores:null,memoCache:null}};function jl(e){var t=El;return El+=1,Mn===null&&(Mn=[]),e=rf(Mn,e,t),t=ge,(Ye===null?t.memoizedState:Ye.next)===null&&(t=t.alternate,Y.H=t===null||t.memoizedState===null?Wa:wa),e}function Fi(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return jl(e);if(e.$$typeof===T)return at(e)}throw Error(s(438,String(e)))}function Zo(e){var t=null,a=ge.updateQueue;if(a!==null&&(t=a.memoCache),t==null){var n=ge.alternate;n!==null&&(n=n.updateQueue,n!==null&&(n=n.memoCache,n!=null&&(t={data:n.data.map(function(i){return i.slice()}),index:0})))}if(t==null&&(t={data:[],index:0}),a===null&&(a=qi(),ge.updateQueue=a),a.memoCache=t,a=t.data[t.index],a===void 0)for(a=t.data[t.index]=Array(e),n=0;n<e;n++)a[n]=Q;return t.index++,a}function Pt(e,t){return typeof t=="function"?t(e):t}function Yi(e){var t=Ge();return Ko(t,Ne,e)}function Ko(e,t,a){var n=e.queue;if(n===null)throw Error(s(311));n.lastRenderedReducer=a;var i=e.baseQueue,o=n.pending;if(o!==null){if(i!==null){var d=i.next;i.next=o.next,o.next=d}t.baseQueue=i=o,n.pending=null}if(o=e.baseState,i===null)e.memoizedState=o;else{t=i.next;var y=d=null,w=null,R=t,q=!1;do{var V=R.lane&-536870913;if(V!==R.lane?(we&V)===V:(xa&V)===V){var B=R.revertLane;if(B===0)w!==null&&(w=w.next={lane:0,revertLane:0,action:R.action,hasEagerState:R.hasEagerState,eagerState:R.eagerState,next:null}),V===_n&&(q=!0);else if((xa&B)===B){R=R.next,B===_n&&(q=!0);continue}else V={lane:0,revertLane:R.revertLane,action:R.action,hasEagerState:R.hasEagerState,eagerState:R.eagerState,next:null},w===null?(y=w=V,d=o):w=w.next=V,ge.lanes|=B,Ca|=B;V=R.action,$a&&a(o,V),o=R.hasEagerState?R.eagerState:a(o,V)}else B={lane:V,revertLane:R.revertLane,action:R.action,hasEagerState:R.hasEagerState,eagerState:R.eagerState,next:null},w===null?(y=w=B,d=o):w=w.next=B,ge.lanes|=V,Ca|=V;R=R.next}while(R!==null&&R!==t);if(w===null?d=o:w.next=y,!pt(o,e.memoizedState)&&(Ke=!0,q&&(a=zn,a!==null)))throw a;e.memoizedState=o,e.baseState=d,e.baseQueue=w,n.lastRenderedState=o}return i===null&&(n.lanes=0),[e.memoizedState,n.dispatch]}function Jo(e){var t=Ge(),a=t.queue;if(a===null)throw Error(s(311));a.lastRenderedReducer=e;var n=a.dispatch,i=a.pending,o=t.memoizedState;if(i!==null){a.pending=null;var d=i=i.next;do o=e(o,d.action),d=d.next;while(d!==i);pt(o,t.memoizedState)||(Ke=!0),t.memoizedState=o,t.baseQueue===null&&(t.baseState=o),a.lastRenderedState=o}return[o,n]}function yf(e,t,a){var n=ge,i=Ge(),o=Te;if(o){if(a===void 0)throw Error(s(407));a=a()}else a=t();var d=!pt((Ne||i).memoizedState,a);if(d&&(i.memoizedState=a,Ke=!0),i=i.queue,Po(wf.bind(null,n,i,e),[e]),i.getSnapshot!==t||d||Ye!==null&&Ye.memoizedState.tag&1){if(n.flags|=2048,kn(9,xf.bind(null,n,i,a,t),{destroy:void 0},null),Ce===null)throw Error(s(349));o||(xa&60)!==0||bf(n,t,a)}return a}function bf(e,t,a){e.flags|=16384,e={getSnapshot:t,value:a},t=ge.updateQueue,t===null?(t=qi(),ge.updateQueue=t,t.stores=[e]):(a=t.stores,a===null?t.stores=[e]:a.push(e))}function xf(e,t,a,n){t.value=a,t.getSnapshot=n,Sf(t)&&Ef(e)}function wf(e,t,a){return a(function(){Sf(t)&&Ef(e)})}function Sf(e){var t=e.getSnapshot;e=e.value;try{var a=t();return!pt(e,a)}catch{return!0}}function Ef(e){var t=va(e,2);t!==null&&rt(t,e,2)}function $o(e){var t=ut();if(typeof e=="function"){var a=e;if(e=a(),$a){pa(!0);try{a()}finally{pa(!1)}}}return t.memoizedState=t.baseState=e,t.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Pt,lastRenderedState:e},t}function jf(e,t,a,n){return e.baseState=a,Ko(e,Ne,typeof n=="function"?n:Pt)}function e1(e,t,a,n,i){if(Vi(e))throw Error(s(485));if(e=t.action,e!==null){var o={payload:i,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(d){o.listeners.push(d)}};Y.T!==null?a(!0):o.isTransition=!1,n(o),a=t.pending,a===null?(o.next=t.pending=o,Tf(t,o)):(o.next=a.next,t.pending=a.next=o)}}function Tf(e,t){var a=t.action,n=t.payload,i=e.state;if(t.isTransition){var o=Y.T,d={};Y.T=d;try{var y=a(i,n),w=Y.S;w!==null&&w(d,y),Of(e,t,y)}catch(R){Wo(e,t,R)}finally{Y.T=o}}else try{o=a(i,n),Of(e,t,o)}catch(R){Wo(e,t,R)}}function Of(e,t,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(n){Nf(e,t,n)},function(n){return Wo(e,t,n)}):Nf(e,t,a)}function Nf(e,t,a){t.status="fulfilled",t.value=a,Af(t),e.state=a,t=e.pending,t!==null&&(a=t.next,a===t?e.pending=null:(a=a.next,t.next=a,Tf(e,a)))}function Wo(e,t,a){var n=e.pending;if(e.pending=null,n!==null){n=n.next;do t.status="rejected",t.reason=a,Af(t),t=t.next;while(t!==n)}e.action=null}function Af(e){e=e.listeners;for(var t=0;t<e.length;t++)(0,e[t])()}function Rf(e,t){return t}function Cf(e,t){if(Te){var a=Ce.formState;if(a!==null){e:{var n=ge;if(Te){if(We){t:{for(var i=We,o=Ht;i.nodeType!==8;){if(!o){i=null;break t}if(i=Mt(i.nextSibling),i===null){i=null;break t}}o=i.data,i=o==="F!"||o==="F"?i:null}if(i){We=Mt(i.nextSibling),n=i.data==="F!";break e}}Za(n)}n=!1}n&&(t=a[0])}}return a=ut(),a.memoizedState=a.baseState=t,n={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Rf,lastRenderedState:t},a.queue=n,a=Kf.bind(null,ge,n),n.dispatch=a,n=$o(!1),o=ns.bind(null,ge,!1,n.queue),n=ut(),i={state:t,dispatch:null,action:e,pending:null},n.queue=i,a=e1.bind(null,ge,i,o,a),i.dispatch=a,n.memoizedState=e,[t,a,!1]}function _f(e){var t=Ge();return zf(t,Ne,e)}function zf(e,t,a){t=Ko(e,t,Rf)[0],e=Yi(Pt)[0],t=typeof t=="object"&&t!==null&&typeof t.then=="function"?jl(t):t;var n=Ge(),i=n.queue,o=i.dispatch;return a!==n.memoizedState&&(ge.flags|=2048,kn(9,t1.bind(null,i,a),{destroy:void 0},null)),[t,o,e]}function t1(e,t){e.action=t}function Df(e){var t=Ge(),a=Ne;if(a!==null)return zf(t,a,e);Ge(),t=t.memoizedState,a=Ge();var n=a.queue.dispatch;return a.memoizedState=e,[t,n,!1]}function kn(e,t,a,n){return e={tag:e,create:t,inst:a,deps:n,next:null},t=ge.updateQueue,t===null&&(t=qi(),ge.updateQueue=t),a=t.lastEffect,a===null?t.lastEffect=e.next=e:(n=a.next,a.next=e,e.next=n,t.lastEffect=e),e}function Mf(){return Ge().memoizedState}function Gi(e,t,a,n){var i=ut();ge.flags|=e,i.memoizedState=kn(1|t,a,{destroy:void 0},n===void 0?null:n)}function Xi(e,t,a,n){var i=Ge();n=n===void 0?null:n;var o=i.memoizedState.inst;Ne!==null&&n!==null&&Yo(n,Ne.memoizedState.deps)?i.memoizedState=kn(t,a,o,n):(ge.flags|=e,i.memoizedState=kn(1|t,a,o,n))}function kf(e,t){Gi(8390656,8,e,t)}function Po(e,t){Xi(2048,8,e,t)}function Bf(e,t){return Xi(4,2,e,t)}function Uf(e,t){return Xi(4,4,e,t)}function Hf(e,t){if(typeof t=="function"){e=e();var a=t(e);return function(){typeof a=="function"?a():t(null)}}if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function Lf(e,t,a){a=a!=null?a.concat([e]):null,Xi(4,4,Hf.bind(null,t,e),a)}function Io(){}function qf(e,t){var a=Ge();t=t===void 0?null:t;var n=a.memoizedState;return t!==null&&Yo(t,n[1])?n[0]:(a.memoizedState=[e,t],e)}function Ff(e,t){var a=Ge();t=t===void 0?null:t;var n=a.memoizedState;if(t!==null&&Yo(t,n[1]))return n[0];if(n=e(),$a){pa(!0);try{e()}finally{pa(!1)}}return a.memoizedState=[n,t],n}function es(e,t,a){return a===void 0||(xa&1073741824)!==0?e.memoizedState=t:(e.memoizedState=a,e=Gd(),ge.lanes|=e,Ca|=e,a)}function Yf(e,t,a,n){return pt(a,t)?a:Cn.current!==null?(e=es(e,a,n),pt(e,t)||(Ke=!0),e):(xa&42)===0?(Ke=!0,e.memoizedState=a):(e=Gd(),ge.lanes|=e,Ca|=e,t)}function Gf(e,t,a,n,i){var o=I.p;I.p=o!==0&&8>o?o:8;var d=Y.T,y={};Y.T=y,ns(e,!1,t,a);try{var w=i(),R=Y.S;if(R!==null&&R(y,w),w!==null&&typeof w=="object"&&typeof w.then=="function"){var q=Wh(w,n);Tl(e,t,q,yt(e))}else Tl(e,t,n,yt(e))}catch(V){Tl(e,t,{then:function(){},status:"rejected",reason:V},yt())}finally{I.p=o,Y.T=d}}function a1(){}function ts(e,t,a,n){if(e.tag!==5)throw Error(s(476));var i=Xf(e).queue;Gf(e,i,t,pe,a===null?a1:function(){return Vf(e),a(n)})}function Xf(e){var t=e.memoizedState;if(t!==null)return t;t={memoizedState:pe,baseState:pe,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Pt,lastRenderedState:pe},next:null};var a={};return t.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Pt,lastRenderedState:a},next:null},e.memoizedState=t,e=e.alternate,e!==null&&(e.memoizedState=t),t}function Vf(e){var t=Xf(e).next.queue;Tl(e,t,{},yt())}function as(){return at(Vl)}function Qf(){return Ge().memoizedState}function Zf(){return Ge().memoizedState}function n1(e){for(var t=e.return;t!==null;){switch(t.tag){case 24:case 3:var a=yt();e=ja(a);var n=Ta(t,e,a);n!==null&&(rt(n,t,a),Al(n,t,a)),t={cache:Lo()},e.payload=t;return}t=t.return}}function l1(e,t,a){var n=yt();a={lane:n,revertLane:0,action:a,hasEagerState:!1,eagerState:null,next:null},Vi(e)?Jf(t,a):(a=zo(e,t,a,n),a!==null&&(rt(a,e,n),$f(a,t,n)))}function Kf(e,t,a){var n=yt();Tl(e,t,a,n)}function Tl(e,t,a,n){var i={lane:n,revertLane:0,action:a,hasEagerState:!1,eagerState:null,next:null};if(Vi(e))Jf(t,i);else{var o=e.alternate;if(e.lanes===0&&(o===null||o.lanes===0)&&(o=t.lastRenderedReducer,o!==null))try{var d=t.lastRenderedState,y=o(d,a);if(i.hasEagerState=!0,i.eagerState=y,pt(y,d))return Ai(e,t,i,0),Ce===null&&Ni(),!1}catch{}finally{}if(a=zo(e,t,i,n),a!==null)return rt(a,e,n),$f(a,t,n),!0}return!1}function ns(e,t,a,n){if(n={lane:2,revertLane:Qs(),action:n,hasEagerState:!1,eagerState:null,next:null},Vi(e)){if(t)throw Error(s(479))}else t=zo(e,a,n,2),t!==null&&rt(t,e,2)}function Vi(e){var t=e.alternate;return e===ge||t!==null&&t===ge}function Jf(e,t){Dn=Hi=!0;var a=e.pending;a===null?t.next=t:(t.next=a.next,a.next=t),e.pending=t}function $f(e,t,a){if((a&4194176)!==0){var n=t.lanes;n&=e.pendingLanes,a|=n,t.lanes=a,rc(e,a)}}var qt={readContext:at,use:Fi,useCallback:Fe,useContext:Fe,useEffect:Fe,useImperativeHandle:Fe,useLayoutEffect:Fe,useInsertionEffect:Fe,useMemo:Fe,useReducer:Fe,useRef:Fe,useState:Fe,useDebugValue:Fe,useDeferredValue:Fe,useTransition:Fe,useSyncExternalStore:Fe,useId:Fe};qt.useCacheRefresh=Fe,qt.useMemoCache=Fe,qt.useHostTransitionStatus=Fe,qt.useFormState=Fe,qt.useActionState=Fe,qt.useOptimistic=Fe;var Wa={readContext:at,use:Fi,useCallback:function(e,t){return ut().memoizedState=[e,t===void 0?null:t],e},useContext:at,useEffect:kf,useImperativeHandle:function(e,t,a){a=a!=null?a.concat([e]):null,Gi(4194308,4,Hf.bind(null,t,e),a)},useLayoutEffect:function(e,t){return Gi(4194308,4,e,t)},useInsertionEffect:function(e,t){Gi(4,2,e,t)},useMemo:function(e,t){var a=ut();t=t===void 0?null:t;var n=e();if($a){pa(!0);try{e()}finally{pa(!1)}}return a.memoizedState=[n,t],n},useReducer:function(e,t,a){var n=ut();if(a!==void 0){var i=a(t);if($a){pa(!0);try{a(t)}finally{pa(!1)}}}else i=t;return n.memoizedState=n.baseState=i,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:i},n.queue=e,e=e.dispatch=l1.bind(null,ge,e),[n.memoizedState,e]},useRef:function(e){var t=ut();return e={current:e},t.memoizedState=e},useState:function(e){e=$o(e);var t=e.queue,a=Kf.bind(null,ge,t);return t.dispatch=a,[e.memoizedState,a]},useDebugValue:Io,useDeferredValue:function(e,t){var a=ut();return es(a,e,t)},useTransition:function(){var e=$o(!1);return e=Gf.bind(null,ge,e.queue,!0,!1),ut().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,t,a){var n=ge,i=ut();if(Te){if(a===void 0)throw Error(s(407));a=a()}else{if(a=t(),Ce===null)throw Error(s(349));(we&60)!==0||bf(n,t,a)}i.memoizedState=a;var o={value:a,getSnapshot:t};return i.queue=o,kf(wf.bind(null,n,o,e),[e]),n.flags|=2048,kn(9,xf.bind(null,n,o,a,t),{destroy:void 0},null),a},useId:function(){var e=ut(),t=Ce.identifierPrefix;if(Te){var a=$t,n=Jt;a=(n&~(1<<32-mt(n)-1)).toString(32)+a,t=":"+t+"R"+a,a=Li++,0<a&&(t+="H"+a.toString(32)),t+=":"}else a=Ph++,t=":"+t+"r"+a.toString(32)+":";return e.memoizedState=t},useCacheRefresh:function(){return ut().memoizedState=n1.bind(null,ge)}};Wa.useMemoCache=Zo,Wa.useHostTransitionStatus=as,Wa.useFormState=Cf,Wa.useActionState=Cf,Wa.useOptimistic=function(e){var t=ut();t.memoizedState=t.baseState=e;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return t.queue=a,t=ns.bind(null,ge,!0,a),a.dispatch=t,[e,t]};var wa={readContext:at,use:Fi,useCallback:qf,useContext:at,useEffect:Po,useImperativeHandle:Lf,useInsertionEffect:Bf,useLayoutEffect:Uf,useMemo:Ff,useReducer:Yi,useRef:Mf,useState:function(){return Yi(Pt)},useDebugValue:Io,useDeferredValue:function(e,t){var a=Ge();return Yf(a,Ne.memoizedState,e,t)},useTransition:function(){var e=Yi(Pt)[0],t=Ge().memoizedState;return[typeof e=="boolean"?e:jl(e),t]},useSyncExternalStore:yf,useId:Qf};wa.useCacheRefresh=Zf,wa.useMemoCache=Zo,wa.useHostTransitionStatus=as,wa.useFormState=_f,wa.useActionState=_f,wa.useOptimistic=function(e,t){var a=Ge();return jf(a,Ne,e,t)};var Pa={readContext:at,use:Fi,useCallback:qf,useContext:at,useEffect:Po,useImperativeHandle:Lf,useInsertionEffect:Bf,useLayoutEffect:Uf,useMemo:Ff,useReducer:Jo,useRef:Mf,useState:function(){return Jo(Pt)},useDebugValue:Io,useDeferredValue:function(e,t){var a=Ge();return Ne===null?es(a,e,t):Yf(a,Ne.memoizedState,e,t)},useTransition:function(){var e=Jo(Pt)[0],t=Ge().memoizedState;return[typeof e=="boolean"?e:jl(e),t]},useSyncExternalStore:yf,useId:Qf};Pa.useCacheRefresh=Zf,Pa.useMemoCache=Zo,Pa.useHostTransitionStatus=as,Pa.useFormState=Df,Pa.useActionState=Df,Pa.useOptimistic=function(e,t){var a=Ge();return Ne!==null?jf(a,Ne,e,t):(a.baseState=e,[e,a.queue.dispatch])};function ls(e,t,a,n){t=e.memoizedState,a=a(n,t),a=a==null?t:Z({},t,a),e.memoizedState=a,e.lanes===0&&(e.updateQueue.baseState=a)}var is={isMounted:function(e){return(e=e._reactInternals)?te(e)===e:!1},enqueueSetState:function(e,t,a){e=e._reactInternals;var n=yt(),i=ja(n);i.payload=t,a!=null&&(i.callback=a),t=Ta(e,i,n),t!==null&&(rt(t,e,n),Al(t,e,n))},enqueueReplaceState:function(e,t,a){e=e._reactInternals;var n=yt(),i=ja(n);i.tag=1,i.payload=t,a!=null&&(i.callback=a),t=Ta(e,i,n),t!==null&&(rt(t,e,n),Al(t,e,n))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var a=yt(),n=ja(a);n.tag=2,t!=null&&(n.callback=t),t=Ta(e,n,a),t!==null&&(rt(t,e,a),Al(t,e,a))}};function Wf(e,t,a,n,i,o,d){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(n,o,d):t.prototype&&t.prototype.isPureReactComponent?!dl(a,n)||!dl(i,o):!0}function Pf(e,t,a,n){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(a,n),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(a,n),t.state!==e&&is.enqueueReplaceState(t,t.state,null)}function Ia(e,t){var a=t;if("ref"in t){a={};for(var n in t)n!=="ref"&&(a[n]=t[n])}if(e=e.defaultProps){a===t&&(a=Z({},a));for(var i in e)a[i]===void 0&&(a[i]=e[i])}return a}var Qi=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var t=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)};function If(e){Qi(e)}function ed(e){console.error(e)}function td(e){Qi(e)}function Zi(e,t){try{var a=e.onUncaughtError;a(t.value,{componentStack:t.stack})}catch(n){setTimeout(function(){throw n})}}function ad(e,t,a){try{var n=e.onCaughtError;n(a.value,{componentStack:a.stack,errorBoundary:t.tag===1?t.stateNode:null})}catch(i){setTimeout(function(){throw i})}}function rs(e,t,a){return a=ja(a),a.tag=3,a.payload={element:null},a.callback=function(){Zi(e,t)},a}function nd(e){return e=ja(e),e.tag=3,e}function ld(e,t,a,n){var i=a.type.getDerivedStateFromError;if(typeof i=="function"){var o=n.value;e.payload=function(){return i(o)},e.callback=function(){ad(t,a,n)}}var d=a.stateNode;d!==null&&typeof d.componentDidCatch=="function"&&(e.callback=function(){ad(t,a,n),typeof i!="function"&&(_a===null?_a=new Set([this]):_a.add(this));var y=n.stack;this.componentDidCatch(n.value,{componentStack:y!==null?y:""})})}function i1(e,t,a,n,i){if(a.flags|=32768,n!==null&&typeof n=="object"&&typeof n.then=="function"){if(t=a.alternate,t!==null&&Nl(t,a,i,!0),a=Tt.current,a!==null){switch(a.tag){case 13:return Lt===null?Fs():a.alternate===null&&He===0&&(He=3),a.flags&=-257,a.flags|=65536,a.lanes=i,n===Bo?a.flags|=16384:(t=a.updateQueue,t===null?a.updateQueue=new Set([n]):t.add(n),Gs(e,n,i)),!1;case 22:return a.flags|=65536,n===Bo?a.flags|=16384:(t=a.updateQueue,t===null?(t={transitions:null,markerInstances:null,retryQueue:new Set([n])},a.updateQueue=t):(a=t.retryQueue,a===null?t.retryQueue=new Set([n]):a.add(n)),Gs(e,n,i)),!1}throw Error(s(435,a.tag))}return Gs(e,n,i),Fs(),!1}if(Te)return t=Tt.current,t!==null?((t.flags&65536)===0&&(t.flags|=256),t.flags|=65536,t.lanes=i,n!==ko&&(e=Error(s(422),{cause:n}),gl(St(e,a)))):(n!==ko&&(t=Error(s(423),{cause:n}),gl(St(t,a))),e=e.current.alternate,e.flags|=65536,i&=-i,e.lanes|=i,n=St(n,a),i=rs(e.stateNode,n,i),ws(e,i),He!==4&&(He=2)),!1;var o=Error(s(520),{cause:n});if(o=St(o,a),Bl===null?Bl=[o]:Bl.push(o),He!==4&&(He=2),t===null)return!0;n=St(n,a),a=t;do{switch(a.tag){case 3:return a.flags|=65536,e=i&-i,a.lanes|=e,e=rs(a.stateNode,n,e),ws(a,e),!1;case 1:if(t=a.type,o=a.stateNode,(a.flags&128)===0&&(typeof t.getDerivedStateFromError=="function"||o!==null&&typeof o.componentDidCatch=="function"&&(_a===null||!_a.has(o))))return a.flags|=65536,i&=-i,a.lanes|=i,i=nd(i),ld(i,e,a,n),ws(a,i),!1}a=a.return}while(a!==null);return!1}var id=Error(s(461)),Ke=!1;function Pe(e,t,a,n){t.child=e===null?cf(t,null,a,n):Ka(t,e.child,a,n)}function rd(e,t,a,n,i){a=a.render;var o=t.ref;if("ref"in n){var d={};for(var y in n)y!=="ref"&&(d[y]=n[y])}else d=n;return tn(t),n=Go(e,t,a,d,o,i),y=Xo(),e!==null&&!Ke?(Vo(e,t,i),It(e,t,i)):(Te&&y&&Do(t),t.flags|=1,Pe(e,t,n,i),t.child)}function od(e,t,a,n,i){if(e===null){var o=a.type;return typeof o=="function"&&!Rs(o)&&o.defaultProps===void 0&&a.compare===null?(t.tag=15,t.type=o,sd(e,t,o,n,i)):(e=Pi(a.type,null,n,t,t.mode,i),e.ref=t.ref,e.return=t,t.child=e)}if(o=e.child,!hs(e,i)){var d=o.memoizedProps;if(a=a.compare,a=a!==null?a:dl,a(d,n)&&e.ref===t.ref)return It(e,t,i)}return t.flags|=1,e=Ra(o,n),e.ref=t.ref,e.return=t,t.child=e}function sd(e,t,a,n,i){if(e!==null){var o=e.memoizedProps;if(dl(o,n)&&e.ref===t.ref)if(Ke=!1,t.pendingProps=n=o,hs(e,i))(e.flags&131072)!==0&&(Ke=!0);else return t.lanes=e.lanes,It(e,t,i)}return os(e,t,a,n,i)}function ud(e,t,a){var n=t.pendingProps,i=n.children,o=(t.stateNode._pendingVisibility&2)!==0,d=e!==null?e.memoizedState:null;if(Ol(e,t),n.mode==="hidden"||o){if((t.flags&128)!==0){if(n=d!==null?d.baseLanes|a:a,e!==null){for(i=t.child=e.child,o=0;i!==null;)o=o|i.lanes|i.childLanes,i=i.sibling;t.childLanes=o&~n}else t.childLanes=0,t.child=null;return cd(e,t,n,a)}if((a&536870912)!==0)t.memoizedState={baseLanes:0,cachePool:null},e!==null&&Ui(t,d!==null?d.cachePool:null),d!==null?ff(t,d):Uo(),df(t);else return t.lanes=t.childLanes=536870912,cd(e,t,d!==null?d.baseLanes|a:a,a)}else d!==null?(Ui(t,d.cachePool),ff(t,d),ba(),t.memoizedState=null):(e!==null&&Ui(t,null),Uo(),ba());return Pe(e,t,i,a),t.child}function cd(e,t,a,n){var i=Fo();return i=i===null?null:{parent:Qe._currentValue,pool:i},t.memoizedState={baseLanes:a,cachePool:i},e!==null&&Ui(t,null),Uo(),df(t),e!==null&&Nl(e,t,n,!0),null}function Ol(e,t){var a=t.ref;if(a===null)e!==null&&e.ref!==null&&(t.flags|=2097664);else{if(typeof a!="function"&&typeof a!="object")throw Error(s(284));(e===null||e.ref!==a)&&(t.flags|=2097664)}}function os(e,t,a,n,i){return tn(t),a=Go(e,t,a,n,void 0,i),n=Xo(),e!==null&&!Ke?(Vo(e,t,i),It(e,t,i)):(Te&&n&&Do(t),t.flags|=1,Pe(e,t,a,i),t.child)}function fd(e,t,a,n,i,o){return tn(t),t.updateQueue=null,a=vf(t,n,a,i),gf(e),n=Xo(),e!==null&&!Ke?(Vo(e,t,o),It(e,t,o)):(Te&&n&&Do(t),t.flags|=1,Pe(e,t,a,o),t.child)}function dd(e,t,a,n,i){if(tn(t),t.stateNode===null){var o=On,d=a.contextType;typeof d=="object"&&d!==null&&(o=at(d)),o=new a(n,o),t.memoizedState=o.state!==null&&o.state!==void 0?o.state:null,o.updater=is,t.stateNode=o,o._reactInternals=t,o=t.stateNode,o.props=n,o.state=t.memoizedState,o.refs={},bs(t),d=a.contextType,o.context=typeof d=="object"&&d!==null?at(d):On,o.state=t.memoizedState,d=a.getDerivedStateFromProps,typeof d=="function"&&(ls(t,a,d,n),o.state=t.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof o.getSnapshotBeforeUpdate=="function"||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(d=o.state,typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount(),d!==o.state&&is.enqueueReplaceState(o,o.state,null),Cl(t,n,o,i),Rl(),o.state=t.memoizedState),typeof o.componentDidMount=="function"&&(t.flags|=4194308),n=!0}else if(e===null){o=t.stateNode;var y=t.memoizedProps,w=Ia(a,y);o.props=w;var R=o.context,q=a.contextType;d=On,typeof q=="object"&&q!==null&&(d=at(q));var V=a.getDerivedStateFromProps;q=typeof V=="function"||typeof o.getSnapshotBeforeUpdate=="function",y=t.pendingProps!==y,q||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(y||R!==d)&&Pf(t,o,n,d),Ea=!1;var B=t.memoizedState;o.state=B,Cl(t,n,o,i),Rl(),R=t.memoizedState,y||B!==R||Ea?(typeof V=="function"&&(ls(t,a,V,n),R=t.memoizedState),(w=Ea||Wf(t,a,w,n,B,R,d))?(q||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(t.flags|=4194308)):(typeof o.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=n,t.memoizedState=R),o.props=n,o.state=R,o.context=d,n=w):(typeof o.componentDidMount=="function"&&(t.flags|=4194308),n=!1)}else{o=t.stateNode,xs(e,t),d=t.memoizedProps,q=Ia(a,d),o.props=q,V=t.pendingProps,B=o.context,R=a.contextType,w=On,typeof R=="object"&&R!==null&&(w=at(R)),y=a.getDerivedStateFromProps,(R=typeof y=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(d!==V||B!==w)&&Pf(t,o,n,w),Ea=!1,B=t.memoizedState,o.state=B,Cl(t,n,o,i),Rl();var H=t.memoizedState;d!==V||B!==H||Ea||e!==null&&e.dependencies!==null&&Ki(e.dependencies)?(typeof y=="function"&&(ls(t,a,y,n),H=t.memoizedState),(q=Ea||Wf(t,a,q,n,B,H,w)||e!==null&&e.dependencies!==null&&Ki(e.dependencies))?(R||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(n,H,w),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(n,H,w)),typeof o.componentDidUpdate=="function"&&(t.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof o.componentDidUpdate!="function"||d===e.memoizedProps&&B===e.memoizedState||(t.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||d===e.memoizedProps&&B===e.memoizedState||(t.flags|=1024),t.memoizedProps=n,t.memoizedState=H),o.props=n,o.state=H,o.context=w,n=q):(typeof o.componentDidUpdate!="function"||d===e.memoizedProps&&B===e.memoizedState||(t.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||d===e.memoizedProps&&B===e.memoizedState||(t.flags|=1024),n=!1)}return o=n,Ol(e,t),n=(t.flags&128)!==0,o||n?(o=t.stateNode,a=n&&typeof a.getDerivedStateFromError!="function"?null:o.render(),t.flags|=1,e!==null&&n?(t.child=Ka(t,e.child,null,i),t.child=Ka(t,null,a,i)):Pe(e,t,a,i),t.memoizedState=o.state,e=t.child):e=It(e,t,i),e}function md(e,t,a,n){return hl(),t.flags|=256,Pe(e,t,a,n),t.child}var ss={dehydrated:null,treeContext:null,retryLane:0};function us(e){return{baseLanes:e,cachePool:hf()}}function cs(e,t,a){return e=e!==null?e.childLanes&~a:0,t&&(e|=Rt),e}function pd(e,t,a){var n=t.pendingProps,i=!1,o=(t.flags&128)!==0,d;if((d=o)||(d=e!==null&&e.memoizedState===null?!1:(Ve.current&2)!==0),d&&(i=!0,t.flags&=-129),d=(t.flags&32)!==0,t.flags&=-33,e===null){if(Te){if(i?ya(t):ba(),Te){var y=We,w;if(w=y){e:{for(w=y,y=Ht;w.nodeType!==8;){if(!y){y=null;break e}if(w=Mt(w.nextSibling),w===null){y=null;break e}}y=w}y!==null?(t.memoizedState={dehydrated:y,treeContext:Va!==null?{id:Jt,overflow:$t}:null,retryLane:536870912},w=At(18,null,null,0),w.stateNode=y,w.return=t,t.child=w,it=t,We=null,w=!0):w=!1}w||Za(t)}if(y=t.memoizedState,y!==null&&(y=y.dehydrated,y!==null))return y.data==="$!"?t.lanes=16:t.lanes=536870912,null;Wt(t)}return y=n.children,n=n.fallback,i?(ba(),i=t.mode,y=ds({mode:"hidden",children:y},i),n=nn(n,i,a,null),y.return=t,n.return=t,y.sibling=n,t.child=y,i=t.child,i.memoizedState=us(a),i.childLanes=cs(e,d,a),t.memoizedState=ss,n):(ya(t),fs(t,y))}if(w=e.memoizedState,w!==null&&(y=w.dehydrated,y!==null)){if(o)t.flags&256?(ya(t),t.flags&=-257,t=ms(e,t,a)):t.memoizedState!==null?(ba(),t.child=e.child,t.flags|=128,t=null):(ba(),i=n.fallback,y=t.mode,n=ds({mode:"visible",children:n.children},y),i=nn(i,y,a,null),i.flags|=2,n.return=t,i.return=t,n.sibling=i,t.child=n,Ka(t,e.child,null,a),n=t.child,n.memoizedState=us(a),n.childLanes=cs(e,d,a),t.memoizedState=ss,t=i);else if(ya(t),y.data==="$!"){if(d=y.nextSibling&&y.nextSibling.dataset,d)var R=d.dgst;d=R,n=Error(s(419)),n.stack="",n.digest=d,gl({value:n,source:null,stack:null}),t=ms(e,t,a)}else if(Ke||Nl(e,t,a,!1),d=(a&e.childLanes)!==0,Ke||d){if(d=Ce,d!==null){if(n=a&-a,(n&42)!==0)n=1;else switch(n){case 2:n=1;break;case 8:n=4;break;case 32:n=16;break;case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:n=64;break;case 268435456:n=134217728;break;default:n=0}if(n=(n&(d.suspendedLanes|a))!==0?0:n,n!==0&&n!==w.retryLane)throw w.retryLane=n,va(e,n),rt(d,e,n),id}y.data==="$?"||Fs(),t=ms(e,t,a)}else y.data==="$?"?(t.flags|=128,t.child=e.child,t=x1.bind(null,e),y._reactRetry=t,t=null):(e=w.treeContext,We=Mt(y.nextSibling),it=t,Te=!0,zt=null,Ht=!1,e!==null&&(Et[jt++]=Jt,Et[jt++]=$t,Et[jt++]=Va,Jt=e.id,$t=e.overflow,Va=t),t=fs(t,n.children),t.flags|=4096);return t}return i?(ba(),i=n.fallback,y=t.mode,w=e.child,R=w.sibling,n=Ra(w,{mode:"hidden",children:n.children}),n.subtreeFlags=w.subtreeFlags&31457280,R!==null?i=Ra(R,i):(i=nn(i,y,a,null),i.flags|=2),i.return=t,n.return=t,n.sibling=i,t.child=n,n=i,i=t.child,y=e.child.memoizedState,y===null?y=us(a):(w=y.cachePool,w!==null?(R=Qe._currentValue,w=w.parent!==R?{parent:R,pool:R}:w):w=hf(),y={baseLanes:y.baseLanes|a,cachePool:w}),i.memoizedState=y,i.childLanes=cs(e,d,a),t.memoizedState=ss,n):(ya(t),a=e.child,e=a.sibling,a=Ra(a,{mode:"visible",children:n.children}),a.return=t,a.sibling=null,e!==null&&(d=t.deletions,d===null?(t.deletions=[e],t.flags|=16):d.push(e)),t.child=a,t.memoizedState=null,a)}function fs(e,t){return t=ds({mode:"visible",children:t},e.mode),t.return=e,e.child=t}function ds(e,t){return qd(e,t,0,null)}function ms(e,t,a){return Ka(t,e.child,null,a),e=fs(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function hd(e,t,a){e.lanes|=t;var n=e.alternate;n!==null&&(n.lanes|=t),vs(e.return,t,a)}function ps(e,t,a,n,i){var o=e.memoizedState;o===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:n,tail:a,tailMode:i}:(o.isBackwards=t,o.rendering=null,o.renderingStartTime=0,o.last=n,o.tail=a,o.tailMode=i)}function gd(e,t,a){var n=t.pendingProps,i=n.revealOrder,o=n.tail;if(Pe(e,t,n.children,a),n=Ve.current,(n&2)!==0)n=n&1|2,t.flags|=128;else{if(e!==null&&(e.flags&128)!==0)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&hd(e,a,t);else if(e.tag===19)hd(e,a,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}n&=1}switch(je(Ve,n),i){case"forwards":for(a=t.child,i=null;a!==null;)e=a.alternate,e!==null&&Bi(e)===null&&(i=a),a=a.sibling;a=i,a===null?(i=t.child,t.child=null):(i=a.sibling,a.sibling=null),ps(t,!1,i,a,o);break;case"backwards":for(a=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&Bi(e)===null){t.child=i;break}e=i.sibling,i.sibling=a,a=i,i=e}ps(t,!0,a,null,o);break;case"together":ps(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function It(e,t,a){if(e!==null&&(t.dependencies=e.dependencies),Ca|=t.lanes,(a&t.childLanes)===0)if(e!==null){if(Nl(e,t,a,!1),(a&t.childLanes)===0)return null}else return null;if(e!==null&&t.child!==e.child)throw Error(s(153));if(t.child!==null){for(e=t.child,a=Ra(e,e.pendingProps),t.child=a,a.return=t;e.sibling!==null;)e=e.sibling,a=a.sibling=Ra(e,e.pendingProps),a.return=t;a.sibling=null}return t.child}function hs(e,t){return(e.lanes&t)!==0?!0:(e=e.dependencies,!!(e!==null&&Ki(e)))}function r1(e,t,a){switch(t.tag){case 3:ci(t,t.stateNode.containerInfo),Sa(t,Qe,e.memoizedState.cache),hl();break;case 27:case 5:lo(t);break;case 4:ci(t,t.stateNode.containerInfo);break;case 10:Sa(t,t.type,t.memoizedProps.value);break;case 13:var n=t.memoizedState;if(n!==null)return n.dehydrated!==null?(ya(t),t.flags|=128,null):(a&t.child.childLanes)!==0?pd(e,t,a):(ya(t),e=It(e,t,a),e!==null?e.sibling:null);ya(t);break;case 19:var i=(e.flags&128)!==0;if(n=(a&t.childLanes)!==0,n||(Nl(e,t,a,!1),n=(a&t.childLanes)!==0),i){if(n)return gd(e,t,a);t.flags|=128}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),je(Ve,Ve.current),n)break;return null;case 22:case 23:return t.lanes=0,ud(e,t,a);case 24:Sa(t,Qe,e.memoizedState.cache)}return It(e,t,a)}function vd(e,t,a){if(e!==null)if(e.memoizedProps!==t.pendingProps)Ke=!0;else{if(!hs(e,a)&&(t.flags&128)===0)return Ke=!1,r1(e,t,a);Ke=(e.flags&131072)!==0}else Ke=!1,Te&&(t.flags&1048576)!==0&&ef(t,_i,t.index);switch(t.lanes=0,t.tag){case 16:e:{e=t.pendingProps;var n=t.elementType,i=n._init;if(n=i(n._payload),t.type=n,typeof n=="function")Rs(n)?(e=Ia(n,e),t.tag=1,t=dd(null,t,n,e,a)):(t.tag=0,t=os(null,t,n,e,a));else{if(n!=null){if(i=n.$$typeof,i===x){t.tag=11,t=rd(null,t,n,e,a);break e}else if(i===_){t.tag=14,t=od(null,t,n,e,a);break e}}throw t=ie(n)||n,Error(s(306,t,""))}}return t;case 0:return os(e,t,t.type,t.pendingProps,a);case 1:return n=t.type,i=Ia(n,t.pendingProps),dd(e,t,n,i,a);case 3:e:{if(ci(t,t.stateNode.containerInfo),e===null)throw Error(s(387));var o=t.pendingProps;i=t.memoizedState,n=i.element,xs(e,t),Cl(t,o,null,a);var d=t.memoizedState;if(o=d.cache,Sa(t,Qe,o),o!==i.cache&&ys(t,[Qe],a,!0),Rl(),o=d.element,i.isDehydrated)if(i={element:o,isDehydrated:!1,cache:d.cache},t.updateQueue.baseState=i,t.memoizedState=i,t.flags&256){t=md(e,t,o,a);break e}else if(o!==n){n=St(Error(s(424)),t),gl(n),t=md(e,t,o,a);break e}else for(We=Mt(t.stateNode.containerInfo.firstChild),it=t,Te=!0,zt=null,Ht=!0,a=cf(t,null,o,a),t.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling;else{if(hl(),o===n){t=It(e,t,a);break e}Pe(e,t,o,a)}t=t.child}return t;case 26:return Ol(e,t),e===null?(a=xm(t.type,null,t.pendingProps,null))?t.memoizedState=a:Te||(a=t.type,e=t.pendingProps,n=cr(ma.current).createElement(a),n[tt]=t,n[ot]=e,Ie(n,a,e),Ze(n),t.stateNode=n):t.memoizedState=xm(t.type,e.memoizedProps,t.pendingProps,e.memoizedState),null;case 27:return lo(t),e===null&&Te&&(n=t.stateNode=vm(t.type,t.pendingProps,ma.current),it=t,Ht=!0,We=Mt(n.firstChild)),n=t.pendingProps.children,e!==null||Te?Pe(e,t,n,a):t.child=Ka(t,null,n,a),Ol(e,t),t.child;case 5:return e===null&&Te&&((i=n=We)&&(n=B1(n,t.type,t.pendingProps,Ht),n!==null?(t.stateNode=n,it=t,We=Mt(n.firstChild),Ht=!1,i=!0):i=!1),i||Za(t)),lo(t),i=t.type,o=t.pendingProps,d=e!==null?e.memoizedProps:null,n=o.children,tu(i,o)?n=null:d!==null&&tu(i,d)&&(t.flags|=32),t.memoizedState!==null&&(i=Go(e,t,Ih,null,null,a),Vl._currentValue=i),Ol(e,t),Pe(e,t,n,a),t.child;case 6:return e===null&&Te&&((e=a=We)&&(a=U1(a,t.pendingProps,Ht),a!==null?(t.stateNode=a,it=t,We=null,e=!0):e=!1),e||Za(t)),null;case 13:return pd(e,t,a);case 4:return ci(t,t.stateNode.containerInfo),n=t.pendingProps,e===null?t.child=Ka(t,null,n,a):Pe(e,t,n,a),t.child;case 11:return rd(e,t,t.type,t.pendingProps,a);case 7:return Pe(e,t,t.pendingProps,a),t.child;case 8:return Pe(e,t,t.pendingProps.children,a),t.child;case 12:return Pe(e,t,t.pendingProps.children,a),t.child;case 10:return n=t.pendingProps,Sa(t,t.type,n.value),Pe(e,t,n.children,a),t.child;case 9:return i=t.type._context,n=t.pendingProps.children,tn(t),i=at(i),n=n(i),t.flags|=1,Pe(e,t,n,a),t.child;case 14:return od(e,t,t.type,t.pendingProps,a);case 15:return sd(e,t,t.type,t.pendingProps,a);case 19:return gd(e,t,a);case 22:return ud(e,t,a);case 24:return tn(t),n=at(Qe),e===null?(i=Fo(),i===null&&(i=Ce,o=Lo(),i.pooledCache=o,o.refCount++,o!==null&&(i.pooledCacheLanes|=a),i=o),t.memoizedState={parent:n,cache:i},bs(t),Sa(t,Qe,i)):((e.lanes&a)!==0&&(xs(e,t),Cl(t,null,null,a),Rl()),i=e.memoizedState,o=t.memoizedState,i.parent!==n?(i={parent:n,cache:n},t.memoizedState=i,t.lanes===0&&(t.memoizedState=t.updateQueue.baseState=i),Sa(t,Qe,n)):(n=o.cache,Sa(t,Qe,n),n!==i.cache&&ys(t,[Qe],a,!0))),Pe(e,t,t.pendingProps.children,a),t.child;case 29:throw t.pendingProps}throw Error(s(156,t.tag))}var gs=ue(null),en=null,ea=null;function Sa(e,t,a){je(gs,t._currentValue),t._currentValue=a}function ta(e){e._currentValue=gs.current,Ee(gs)}function vs(e,t,a){for(;e!==null;){var n=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,n!==null&&(n.childLanes|=t)):n!==null&&(n.childLanes&t)!==t&&(n.childLanes|=t),e===a)break;e=e.return}}function ys(e,t,a,n){var i=e.child;for(i!==null&&(i.return=e);i!==null;){var o=i.dependencies;if(o!==null){var d=i.child;o=o.firstContext;e:for(;o!==null;){var y=o;o=i;for(var w=0;w<t.length;w++)if(y.context===t[w]){o.lanes|=a,y=o.alternate,y!==null&&(y.lanes|=a),vs(o.return,a,e),n||(d=null);break e}o=y.next}}else if(i.tag===18){if(d=i.return,d===null)throw Error(s(341));d.lanes|=a,o=d.alternate,o!==null&&(o.lanes|=a),vs(d,a,e),d=null}else d=i.child;if(d!==null)d.return=i;else for(d=i;d!==null;){if(d===e){d=null;break}if(i=d.sibling,i!==null){i.return=d.return,d=i;break}d=d.return}i=d}}function Nl(e,t,a,n){e=null;for(var i=t,o=!1;i!==null;){if(!o){if((i.flags&524288)!==0)o=!0;else if((i.flags&262144)!==0)break}if(i.tag===10){var d=i.alternate;if(d===null)throw Error(s(387));if(d=d.memoizedProps,d!==null){var y=i.type;pt(i.pendingProps.value,d.value)||(e!==null?e.push(y):e=[y])}}else if(i===ui.current){if(d=i.alternate,d===null)throw Error(s(387));d.memoizedState.memoizedState!==i.memoizedState.memoizedState&&(e!==null?e.push(Vl):e=[Vl])}i=i.return}e!==null&&ys(t,e,a,n),t.flags|=262144}function Ki(e){for(e=e.firstContext;e!==null;){if(!pt(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function tn(e){en=e,ea=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function at(e){return yd(en,e)}function Ji(e,t){return en===null&&tn(e),yd(e,t)}function yd(e,t){var a=t._currentValue;if(t={context:t,memoizedValue:a,next:null},ea===null){if(e===null)throw Error(s(308));ea=t,e.dependencies={lanes:0,firstContext:t},e.flags|=524288}else ea=ea.next=t;return a}var Ea=!1;function bs(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function xs(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function ja(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function Ta(e,t,a){var n=e.updateQueue;if(n===null)return null;if(n=n.shared,(ke&2)!==0){var i=n.pending;return i===null?t.next=t:(t.next=i.next,i.next=t),n.pending=t,t=Ri(e),Pc(e,null,a),t}return Ai(e,n,t,a),Ri(e)}function Al(e,t,a){if(t=t.updateQueue,t!==null&&(t=t.shared,(a&4194176)!==0)){var n=t.lanes;n&=e.pendingLanes,a|=n,t.lanes=a,rc(e,a)}}function ws(e,t){var a=e.updateQueue,n=e.alternate;if(n!==null&&(n=n.updateQueue,a===n)){var i=null,o=null;if(a=a.firstBaseUpdate,a!==null){do{var d={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};o===null?i=o=d:o=o.next=d,a=a.next}while(a!==null);o===null?i=o=t:o=o.next=t}else i=o=t;a={baseState:n.baseState,firstBaseUpdate:i,lastBaseUpdate:o,shared:n.shared,callbacks:n.callbacks},e.updateQueue=a;return}e=a.lastBaseUpdate,e===null?a.firstBaseUpdate=t:e.next=t,a.lastBaseUpdate=t}var Ss=!1;function Rl(){if(Ss){var e=zn;if(e!==null)throw e}}function Cl(e,t,a,n){Ss=!1;var i=e.updateQueue;Ea=!1;var o=i.firstBaseUpdate,d=i.lastBaseUpdate,y=i.shared.pending;if(y!==null){i.shared.pending=null;var w=y,R=w.next;w.next=null,d===null?o=R:d.next=R,d=w;var q=e.alternate;q!==null&&(q=q.updateQueue,y=q.lastBaseUpdate,y!==d&&(y===null?q.firstBaseUpdate=R:y.next=R,q.lastBaseUpdate=w))}if(o!==null){var V=i.baseState;d=0,q=R=w=null,y=o;do{var B=y.lane&-536870913,H=B!==y.lane;if(H?(we&B)===B:(n&B)===B){B!==0&&B===_n&&(Ss=!0),q!==null&&(q=q.next={lane:0,tag:y.tag,payload:y.payload,callback:null,next:null});e:{var re=e,de=y;B=t;var Le=a;switch(de.tag){case 1:if(re=de.payload,typeof re=="function"){V=re.call(Le,V,B);break e}V=re;break e;case 3:re.flags=re.flags&-65537|128;case 0:if(re=de.payload,B=typeof re=="function"?re.call(Le,V,B):re,B==null)break e;V=Z({},V,B);break e;case 2:Ea=!0}}B=y.callback,B!==null&&(e.flags|=64,H&&(e.flags|=8192),H=i.callbacks,H===null?i.callbacks=[B]:H.push(B))}else H={lane:B,tag:y.tag,payload:y.payload,callback:y.callback,next:null},q===null?(R=q=H,w=V):q=q.next=H,d|=B;if(y=y.next,y===null){if(y=i.shared.pending,y===null)break;H=y,y=H.next,H.next=null,i.lastBaseUpdate=H,i.shared.pending=null}}while(!0);q===null&&(w=V),i.baseState=w,i.firstBaseUpdate=R,i.lastBaseUpdate=q,o===null&&(i.shared.lanes=0),Ca|=d,e.lanes=d,e.memoizedState=V}}function bd(e,t){if(typeof e!="function")throw Error(s(191,e));e.call(t)}function xd(e,t){var a=e.callbacks;if(a!==null)for(e.callbacks=null,e=0;e<a.length;e++)bd(a[e],t)}function _l(e,t){try{var a=t.updateQueue,n=a!==null?a.lastEffect:null;if(n!==null){var i=n.next;a=i;do{if((a.tag&e)===e){n=void 0;var o=a.create,d=a.inst;n=o(),d.destroy=n}a=a.next}while(a!==i)}}catch(y){Re(t,t.return,y)}}function Oa(e,t,a){try{var n=t.updateQueue,i=n!==null?n.lastEffect:null;if(i!==null){var o=i.next;n=o;do{if((n.tag&e)===e){var d=n.inst,y=d.destroy;if(y!==void 0){d.destroy=void 0,i=t;var w=a;try{y()}catch(R){Re(i,w,R)}}}n=n.next}while(n!==o)}}catch(R){Re(t,t.return,R)}}function wd(e){var t=e.updateQueue;if(t!==null){var a=e.stateNode;try{xd(t,a)}catch(n){Re(e,e.return,n)}}}function Sd(e,t,a){a.props=Ia(e.type,e.memoizedProps),a.state=e.memoizedState;try{a.componentWillUnmount()}catch(n){Re(e,t,n)}}function an(e,t){try{var a=e.ref;if(a!==null){var n=e.stateNode;switch(e.tag){case 26:case 27:case 5:var i=n;break;default:i=n}typeof a=="function"?e.refCleanup=a(i):a.current=i}}catch(o){Re(e,t,o)}}function ht(e,t){var a=e.ref,n=e.refCleanup;if(a!==null)if(typeof n=="function")try{n()}catch(i){Re(e,t,i)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(i){Re(e,t,i)}else a.current=null}function Ed(e){var t=e.type,a=e.memoizedProps,n=e.stateNode;try{e:switch(t){case"button":case"input":case"select":case"textarea":a.autoFocus&&n.focus();break e;case"img":a.src?n.src=a.src:a.srcSet&&(n.srcset=a.srcSet)}}catch(i){Re(e,e.return,i)}}function jd(e,t,a){try{var n=e.stateNode;_1(n,e.type,a,t),n[ot]=t}catch(i){Re(e,e.return,i)}}function Td(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27||e.tag===4}function Es(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Td(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==27&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function js(e,t,a){var n=e.tag;if(n===5||n===6)e=e.stateNode,t?a.nodeType===8?a.parentNode.insertBefore(e,t):a.insertBefore(e,t):(a.nodeType===8?(t=a.parentNode,t.insertBefore(e,a)):(t=a,t.appendChild(e)),a=a._reactRootContainer,a!=null||t.onclick!==null||(t.onclick=ur));else if(n!==4&&n!==27&&(e=e.child,e!==null))for(js(e,t,a),e=e.sibling;e!==null;)js(e,t,a),e=e.sibling}function $i(e,t,a){var n=e.tag;if(n===5||n===6)e=e.stateNode,t?a.insertBefore(e,t):a.appendChild(e);else if(n!==4&&n!==27&&(e=e.child,e!==null))for($i(e,t,a),e=e.sibling;e!==null;)$i(e,t,a),e=e.sibling}var aa=!1,Ue=!1,Ts=!1,Od=typeof WeakSet=="function"?WeakSet:Set,Je=null,Nd=!1;function o1(e,t){if(e=e.containerInfo,Is=gr,e=Gc(e),No(e)){if("selectionStart"in e)var a={start:e.selectionStart,end:e.selectionEnd};else e:{a=(a=e.ownerDocument)&&a.defaultView||window;var n=a.getSelection&&a.getSelection();if(n&&n.rangeCount!==0){a=n.anchorNode;var i=n.anchorOffset,o=n.focusNode;n=n.focusOffset;try{a.nodeType,o.nodeType}catch{a=null;break e}var d=0,y=-1,w=-1,R=0,q=0,V=e,B=null;t:for(;;){for(var H;V!==a||i!==0&&V.nodeType!==3||(y=d+i),V!==o||n!==0&&V.nodeType!==3||(w=d+n),V.nodeType===3&&(d+=V.nodeValue.length),(H=V.firstChild)!==null;)B=V,V=H;for(;;){if(V===e)break t;if(B===a&&++R===i&&(y=d),B===o&&++q===n&&(w=d),(H=V.nextSibling)!==null)break;V=B,B=V.parentNode}V=H}a=y===-1||w===-1?null:{start:y,end:w}}else a=null}a=a||{start:0,end:0}}else a=null;for(eu={focusedElem:e,selectionRange:a},gr=!1,Je=t;Je!==null;)if(t=Je,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,Je=e;else for(;Je!==null;){switch(t=Je,o=t.alternate,e=t.flags,t.tag){case 0:break;case 11:case 15:break;case 1:if((e&1024)!==0&&o!==null){e=void 0,a=t,i=o.memoizedProps,o=o.memoizedState,n=a.stateNode;try{var re=Ia(a.type,i,a.elementType===a.type);e=n.getSnapshotBeforeUpdate(re,o),n.__reactInternalSnapshotBeforeUpdate=e}catch(de){Re(a,a.return,de)}}break;case 3:if((e&1024)!==0){if(e=t.stateNode.containerInfo,a=e.nodeType,a===9)lu(e);else if(a===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":lu(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(s(163))}if(e=t.sibling,e!==null){e.return=t.return,Je=e;break}Je=t.return}return re=Nd,Nd=!1,re}function Ad(e,t,a){var n=a.flags;switch(a.tag){case 0:case 11:case 15:la(e,a),n&4&&_l(5,a);break;case 1:if(la(e,a),n&4)if(e=a.stateNode,t===null)try{e.componentDidMount()}catch(y){Re(a,a.return,y)}else{var i=Ia(a.type,t.memoizedProps);t=t.memoizedState;try{e.componentDidUpdate(i,t,e.__reactInternalSnapshotBeforeUpdate)}catch(y){Re(a,a.return,y)}}n&64&&wd(a),n&512&&an(a,a.return);break;case 3:if(la(e,a),n&64&&(n=a.updateQueue,n!==null)){if(e=null,a.child!==null)switch(a.child.tag){case 27:case 5:e=a.child.stateNode;break;case 1:e=a.child.stateNode}try{xd(n,e)}catch(y){Re(a,a.return,y)}}break;case 26:la(e,a),n&512&&an(a,a.return);break;case 27:case 5:la(e,a),t===null&&n&4&&Ed(a),n&512&&an(a,a.return);break;case 12:la(e,a);break;case 13:la(e,a),n&4&&_d(e,a);break;case 22:if(i=a.memoizedState!==null||aa,!i){t=t!==null&&t.memoizedState!==null||Ue;var o=aa,d=Ue;aa=i,(Ue=t)&&!d?Na(e,a,(a.subtreeFlags&8772)!==0):la(e,a),aa=o,Ue=d}n&512&&(a.memoizedProps.mode==="manual"?an(a,a.return):ht(a,a.return));break;default:la(e,a)}}function Rd(e){var t=e.alternate;t!==null&&(e.alternate=null,Rd(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&co(t)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var Xe=null,gt=!1;function na(e,t,a){for(a=a.child;a!==null;)Cd(e,t,a),a=a.sibling}function Cd(e,t,a){if(dt&&typeof dt.onCommitFiberUnmount=="function")try{dt.onCommitFiberUnmount(el,a)}catch{}switch(a.tag){case 26:Ue||ht(a,t),na(e,t,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:Ue||ht(a,t);var n=Xe,i=gt;for(Xe=a.stateNode,na(e,t,a),a=a.stateNode,t=a.attributes;t.length;)a.removeAttributeNode(t[0]);co(a),Xe=n,gt=i;break;case 5:Ue||ht(a,t);case 6:i=Xe;var o=gt;if(Xe=null,na(e,t,a),Xe=i,gt=o,Xe!==null)if(gt)try{e=Xe,n=a.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)}catch(d){Re(a,t,d)}else try{Xe.removeChild(a.stateNode)}catch(d){Re(a,t,d)}break;case 18:Xe!==null&&(gt?(t=Xe,a=a.stateNode,t.nodeType===8?nu(t.parentNode,a):t.nodeType===1&&nu(t,a),Jl(t)):nu(Xe,a.stateNode));break;case 4:n=Xe,i=gt,Xe=a.stateNode.containerInfo,gt=!0,na(e,t,a),Xe=n,gt=i;break;case 0:case 11:case 14:case 15:Ue||Oa(2,a,t),Ue||Oa(4,a,t),na(e,t,a);break;case 1:Ue||(ht(a,t),n=a.stateNode,typeof n.componentWillUnmount=="function"&&Sd(a,t,n)),na(e,t,a);break;case 21:na(e,t,a);break;case 22:Ue||ht(a,t),Ue=(n=Ue)||a.memoizedState!==null,na(e,t,a),Ue=n;break;default:na(e,t,a)}}function _d(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{Jl(e)}catch(a){Re(t,t.return,a)}}function s1(e){switch(e.tag){case 13:case 19:var t=e.stateNode;return t===null&&(t=e.stateNode=new Od),t;case 22:return e=e.stateNode,t=e._retryCache,t===null&&(t=e._retryCache=new Od),t;default:throw Error(s(435,e.tag))}}function Os(e,t){var a=s1(e);t.forEach(function(n){var i=w1.bind(null,e,n);a.has(n)||(a.add(n),n.then(i,i))})}function Ot(e,t){var a=t.deletions;if(a!==null)for(var n=0;n<a.length;n++){var i=a[n],o=e,d=t,y=d;e:for(;y!==null;){switch(y.tag){case 27:case 5:Xe=y.stateNode,gt=!1;break e;case 3:Xe=y.stateNode.containerInfo,gt=!0;break e;case 4:Xe=y.stateNode.containerInfo,gt=!0;break e}y=y.return}if(Xe===null)throw Error(s(160));Cd(o,d,i),Xe=null,gt=!1,o=i.alternate,o!==null&&(o.return=null),i.return=null}if(t.subtreeFlags&13878)for(t=t.child;t!==null;)zd(t,e),t=t.sibling}var Dt=null;function zd(e,t){var a=e.alternate,n=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:Ot(t,e),Nt(e),n&4&&(Oa(3,e,e.return),_l(3,e),Oa(5,e,e.return));break;case 1:Ot(t,e),Nt(e),n&512&&(Ue||a===null||ht(a,a.return)),n&64&&aa&&(e=e.updateQueue,e!==null&&(n=e.callbacks,n!==null&&(a=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=a===null?n:a.concat(n))));break;case 26:var i=Dt;if(Ot(t,e),Nt(e),n&512&&(Ue||a===null||ht(a,a.return)),n&4){var o=a!==null?a.memoizedState:null;if(n=e.memoizedState,a===null)if(n===null)if(e.stateNode===null){e:{n=e.type,a=e.memoizedProps,i=i.ownerDocument||i;t:switch(n){case"title":o=i.getElementsByTagName("title")[0],(!o||o[nl]||o[tt]||o.namespaceURI==="http://www.w3.org/2000/svg"||o.hasAttribute("itemprop"))&&(o=i.createElement(n),i.head.insertBefore(o,i.querySelector("head > title"))),Ie(o,n,a),o[tt]=e,Ze(o),n=o;break e;case"link":var d=Em("link","href",i).get(n+(a.href||""));if(d){for(var y=0;y<d.length;y++)if(o=d[y],o.getAttribute("href")===(a.href==null?null:a.href)&&o.getAttribute("rel")===(a.rel==null?null:a.rel)&&o.getAttribute("title")===(a.title==null?null:a.title)&&o.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){d.splice(y,1);break t}}o=i.createElement(n),Ie(o,n,a),i.head.appendChild(o);break;case"meta":if(d=Em("meta","content",i).get(n+(a.content||""))){for(y=0;y<d.length;y++)if(o=d[y],o.getAttribute("content")===(a.content==null?null:""+a.content)&&o.getAttribute("name")===(a.name==null?null:a.name)&&o.getAttribute("property")===(a.property==null?null:a.property)&&o.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&o.getAttribute("charset")===(a.charSet==null?null:a.charSet)){d.splice(y,1);break t}}o=i.createElement(n),Ie(o,n,a),i.head.appendChild(o);break;default:throw Error(s(468,n))}o[tt]=e,Ze(o),n=o}e.stateNode=n}else jm(i,e.type,e.stateNode);else e.stateNode=Sm(i,n,e.memoizedProps);else o!==n?(o===null?a.stateNode!==null&&(a=a.stateNode,a.parentNode.removeChild(a)):o.count--,n===null?jm(i,e.type,e.stateNode):Sm(i,n,e.memoizedProps)):n===null&&e.stateNode!==null&&jd(e,e.memoizedProps,a.memoizedProps)}break;case 27:if(n&4&&e.alternate===null){i=e.stateNode,o=e.memoizedProps;try{for(var w=i.firstChild;w;){var R=w.nextSibling,q=w.nodeName;w[nl]||q==="HEAD"||q==="BODY"||q==="SCRIPT"||q==="STYLE"||q==="LINK"&&w.rel.toLowerCase()==="stylesheet"||i.removeChild(w),w=R}for(var V=e.type,B=i.attributes;B.length;)i.removeAttributeNode(B[0]);Ie(i,V,o),i[tt]=e,i[ot]=o}catch(re){Re(e,e.return,re)}}case 5:if(Ot(t,e),Nt(e),n&512&&(Ue||a===null||ht(a,a.return)),e.flags&32){i=e.stateNode;try{bn(i,"")}catch(re){Re(e,e.return,re)}}n&4&&e.stateNode!=null&&(i=e.memoizedProps,jd(e,i,a!==null?a.memoizedProps:i)),n&1024&&(Ts=!0);break;case 6:if(Ot(t,e),Nt(e),n&4){if(e.stateNode===null)throw Error(s(162));n=e.memoizedProps,a=e.stateNode;try{a.nodeValue=n}catch(re){Re(e,e.return,re)}}break;case 3:if(mr=null,i=Dt,Dt=fr(t.containerInfo),Ot(t,e),Dt=i,Nt(e),n&4&&a!==null&&a.memoizedState.isDehydrated)try{Jl(t.containerInfo)}catch(re){Re(e,e.return,re)}Ts&&(Ts=!1,Dd(e));break;case 4:n=Dt,Dt=fr(e.stateNode.containerInfo),Ot(t,e),Nt(e),Dt=n;break;case 12:Ot(t,e),Nt(e);break;case 13:Ot(t,e),Nt(e),e.child.flags&8192&&e.memoizedState!==null!=(a!==null&&a.memoizedState!==null)&&(ks=Ut()),n&4&&(n=e.updateQueue,n!==null&&(e.updateQueue=null,Os(e,n)));break;case 22:if(n&512&&(Ue||a===null||ht(a,a.return)),w=e.memoizedState!==null,R=a!==null&&a.memoizedState!==null,q=aa,V=Ue,aa=q||w,Ue=V||R,Ot(t,e),Ue=V,aa=q,Nt(e),t=e.stateNode,t._current=e,t._visibility&=-3,t._visibility|=t._pendingVisibility&2,n&8192&&(t._visibility=w?t._visibility&-2:t._visibility|1,w&&(t=aa||Ue,a===null||R||t||Bn(e)),e.memoizedProps===null||e.memoizedProps.mode!=="manual"))e:for(a=null,t=e;;){if(t.tag===5||t.tag===26||t.tag===27){if(a===null){R=a=t;try{if(i=R.stateNode,w)o=i.style,typeof o.setProperty=="function"?o.setProperty("display","none","important"):o.display="none";else{d=R.stateNode,y=R.memoizedProps.style;var H=y!=null&&y.hasOwnProperty("display")?y.display:null;d.style.display=H==null||typeof H=="boolean"?"":(""+H).trim()}}catch(re){Re(R,R.return,re)}}}else if(t.tag===6){if(a===null){R=t;try{R.stateNode.nodeValue=w?"":R.memoizedProps}catch(re){Re(R,R.return,re)}}}else if((t.tag!==22&&t.tag!==23||t.memoizedState===null||t===e)&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;a===t&&(a=null),t=t.return}a===t&&(a=null),t.sibling.return=t.return,t=t.sibling}n&4&&(n=e.updateQueue,n!==null&&(a=n.retryQueue,a!==null&&(n.retryQueue=null,Os(e,a))));break;case 19:Ot(t,e),Nt(e),n&4&&(n=e.updateQueue,n!==null&&(e.updateQueue=null,Os(e,n)));break;case 21:break;default:Ot(t,e),Nt(e)}}function Nt(e){var t=e.flags;if(t&2){try{if(e.tag!==27){e:{for(var a=e.return;a!==null;){if(Td(a)){var n=a;break e}a=a.return}throw Error(s(160))}switch(n.tag){case 27:var i=n.stateNode,o=Es(e);$i(e,o,i);break;case 5:var d=n.stateNode;n.flags&32&&(bn(d,""),n.flags&=-33);var y=Es(e);$i(e,y,d);break;case 3:case 4:var w=n.stateNode.containerInfo,R=Es(e);js(e,R,w);break;default:throw Error(s(161))}}}catch(q){Re(e,e.return,q)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function Dd(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var t=e;Dd(t),t.tag===5&&t.flags&1024&&t.stateNode.reset(),e=e.sibling}}function la(e,t){if(t.subtreeFlags&8772)for(t=t.child;t!==null;)Ad(e,t.alternate,t),t=t.sibling}function Bn(e){for(e=e.child;e!==null;){var t=e;switch(t.tag){case 0:case 11:case 14:case 15:Oa(4,t,t.return),Bn(t);break;case 1:ht(t,t.return);var a=t.stateNode;typeof a.componentWillUnmount=="function"&&Sd(t,t.return,a),Bn(t);break;case 26:case 27:case 5:ht(t,t.return),Bn(t);break;case 22:ht(t,t.return),t.memoizedState===null&&Bn(t);break;default:Bn(t)}e=e.sibling}}function Na(e,t,a){for(a=a&&(t.subtreeFlags&8772)!==0,t=t.child;t!==null;){var n=t.alternate,i=e,o=t,d=o.flags;switch(o.tag){case 0:case 11:case 15:Na(i,o,a),_l(4,o);break;case 1:if(Na(i,o,a),n=o,i=n.stateNode,typeof i.componentDidMount=="function")try{i.componentDidMount()}catch(R){Re(n,n.return,R)}if(n=o,i=n.updateQueue,i!==null){var y=n.stateNode;try{var w=i.shared.hiddenCallbacks;if(w!==null)for(i.shared.hiddenCallbacks=null,i=0;i<w.length;i++)bd(w[i],y)}catch(R){Re(n,n.return,R)}}a&&d&64&&wd(o),an(o,o.return);break;case 26:case 27:case 5:Na(i,o,a),a&&n===null&&d&4&&Ed(o),an(o,o.return);break;case 12:Na(i,o,a);break;case 13:Na(i,o,a),a&&d&4&&_d(i,o);break;case 22:o.memoizedState===null&&Na(i,o,a),an(o,o.return);break;default:Na(i,o,a)}t=t.sibling}}function Ns(e,t){var a=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),e=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(e=t.memoizedState.cachePool.pool),e!==a&&(e!=null&&e.refCount++,a!=null&&wl(a))}function As(e,t){e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&wl(e))}function Aa(e,t,a,n){if(t.subtreeFlags&10256)for(t=t.child;t!==null;)Md(e,t,a,n),t=t.sibling}function Md(e,t,a,n){var i=t.flags;switch(t.tag){case 0:case 11:case 15:Aa(e,t,a,n),i&2048&&_l(9,t);break;case 3:Aa(e,t,a,n),i&2048&&(e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&wl(e)));break;case 12:if(i&2048){Aa(e,t,a,n),e=t.stateNode;try{var o=t.memoizedProps,d=o.id,y=o.onPostCommit;typeof y=="function"&&y(d,t.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(w){Re(t,t.return,w)}}else Aa(e,t,a,n);break;case 23:break;case 22:o=t.stateNode,t.memoizedState!==null?o._visibility&4?Aa(e,t,a,n):zl(e,t):o._visibility&4?Aa(e,t,a,n):(o._visibility|=4,Un(e,t,a,n,(t.subtreeFlags&10256)!==0)),i&2048&&Ns(t.alternate,t);break;case 24:Aa(e,t,a,n),i&2048&&As(t.alternate,t);break;default:Aa(e,t,a,n)}}function Un(e,t,a,n,i){for(i=i&&(t.subtreeFlags&10256)!==0,t=t.child;t!==null;){var o=e,d=t,y=a,w=n,R=d.flags;switch(d.tag){case 0:case 11:case 15:Un(o,d,y,w,i),_l(8,d);break;case 23:break;case 22:var q=d.stateNode;d.memoizedState!==null?q._visibility&4?Un(o,d,y,w,i):zl(o,d):(q._visibility|=4,Un(o,d,y,w,i)),i&&R&2048&&Ns(d.alternate,d);break;case 24:Un(o,d,y,w,i),i&&R&2048&&As(d.alternate,d);break;default:Un(o,d,y,w,i)}t=t.sibling}}function zl(e,t){if(t.subtreeFlags&10256)for(t=t.child;t!==null;){var a=e,n=t,i=n.flags;switch(n.tag){case 22:zl(a,n),i&2048&&Ns(n.alternate,n);break;case 24:zl(a,n),i&2048&&As(n.alternate,n);break;default:zl(a,n)}t=t.sibling}}var Dl=8192;function Hn(e){if(e.subtreeFlags&Dl)for(e=e.child;e!==null;)kd(e),e=e.sibling}function kd(e){switch(e.tag){case 26:Hn(e),e.flags&Dl&&e.memoizedState!==null&&$1(Dt,e.memoizedState,e.memoizedProps);break;case 5:Hn(e);break;case 3:case 4:var t=Dt;Dt=fr(e.stateNode.containerInfo),Hn(e),Dt=t;break;case 22:e.memoizedState===null&&(t=e.alternate,t!==null&&t.memoizedState!==null?(t=Dl,Dl=16777216,Hn(e),Dl=t):Hn(e));break;default:Hn(e)}}function Bd(e){var t=e.alternate;if(t!==null&&(e=t.child,e!==null)){t.child=null;do t=e.sibling,e.sibling=null,e=t;while(e!==null)}}function Ml(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var a=0;a<t.length;a++){var n=t[a];Je=n,Hd(n,e)}Bd(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)Ud(e),e=e.sibling}function Ud(e){switch(e.tag){case 0:case 11:case 15:Ml(e),e.flags&2048&&Oa(9,e,e.return);break;case 3:Ml(e);break;case 12:Ml(e);break;case 22:var t=e.stateNode;e.memoizedState!==null&&t._visibility&4&&(e.return===null||e.return.tag!==13)?(t._visibility&=-5,Wi(e)):Ml(e);break;default:Ml(e)}}function Wi(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var a=0;a<t.length;a++){var n=t[a];Je=n,Hd(n,e)}Bd(e)}for(e=e.child;e!==null;){switch(t=e,t.tag){case 0:case 11:case 15:Oa(8,t,t.return),Wi(t);break;case 22:a=t.stateNode,a._visibility&4&&(a._visibility&=-5,Wi(t));break;default:Wi(t)}e=e.sibling}}function Hd(e,t){for(;Je!==null;){var a=Je;switch(a.tag){case 0:case 11:case 15:Oa(8,a,t);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var n=a.memoizedState.cachePool.pool;n!=null&&n.refCount++}break;case 24:wl(a.memoizedState.cache)}if(n=a.child,n!==null)n.return=a,Je=n;else e:for(a=e;Je!==null;){n=Je;var i=n.sibling,o=n.return;if(Rd(n),n===a){Je=null;break e}if(i!==null){i.return=o,Je=i;break e}Je=o}}}function u1(e,t,a,n){this.tag=e,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=n,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function At(e,t,a,n){return new u1(e,t,a,n)}function Rs(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Ra(e,t){var a=e.alternate;return a===null?(a=At(e.tag,t,e.key,e.mode),a.elementType=e.elementType,a.type=e.type,a.stateNode=e.stateNode,a.alternate=e,e.alternate=a):(a.pendingProps=t,a.type=e.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=e.flags&31457280,a.childLanes=e.childLanes,a.lanes=e.lanes,a.child=e.child,a.memoizedProps=e.memoizedProps,a.memoizedState=e.memoizedState,a.updateQueue=e.updateQueue,t=e.dependencies,a.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},a.sibling=e.sibling,a.index=e.index,a.ref=e.ref,a.refCleanup=e.refCleanup,a}function Ld(e,t){e.flags&=31457282;var a=e.alternate;return a===null?(e.childLanes=0,e.lanes=t,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=a.childLanes,e.lanes=a.lanes,e.child=a.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=a.memoizedProps,e.memoizedState=a.memoizedState,e.updateQueue=a.updateQueue,e.type=a.type,t=a.dependencies,e.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),e}function Pi(e,t,a,n,i,o){var d=0;if(n=e,typeof e=="function")Rs(e)&&(d=1);else if(typeof e=="string")d=K1(e,a,et.current)?26:e==="html"||e==="head"||e==="body"?27:5;else e:switch(e){case g:return nn(a.children,i,o,t);case p:d=8,i|=24;break;case b:return e=At(12,a,t,i|2),e.elementType=b,e.lanes=o,e;case O:return e=At(13,a,t,i),e.elementType=O,e.lanes=o,e;case E:return e=At(19,a,t,i),e.elementType=E,e.lanes=o,e;case C:return qd(a,i,o,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case S:case T:d=10;break e;case N:d=9;break e;case x:d=11;break e;case _:d=14;break e;case M:d=16,n=null;break e}d=29,a=Error(s(130,e===null?"null":typeof e,"")),n=null}return t=At(d,a,t,i),t.elementType=e,t.type=n,t.lanes=o,t}function nn(e,t,a,n){return e=At(7,e,n,t),e.lanes=a,e}function qd(e,t,a,n){e=At(22,e,n,t),e.elementType=C,e.lanes=a;var i={_visibility:1,_pendingVisibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null,_current:null,detach:function(){var o=i._current;if(o===null)throw Error(s(456));if((i._pendingVisibility&2)===0){var d=va(o,2);d!==null&&(i._pendingVisibility|=2,rt(d,o,2))}},attach:function(){var o=i._current;if(o===null)throw Error(s(456));if((i._pendingVisibility&2)!==0){var d=va(o,2);d!==null&&(i._pendingVisibility&=-3,rt(d,o,2))}}};return e.stateNode=i,e}function Cs(e,t,a){return e=At(6,e,null,t),e.lanes=a,e}function _s(e,t,a){return t=At(4,e.children!==null?e.children:[],e.key,t),t.lanes=a,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function ia(e){e.flags|=4}function Fd(e,t){if(t.type!=="stylesheet"||(t.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!Tm(t)){if(t=Tt.current,t!==null&&((we&4194176)===we?Lt!==null:(we&62914560)!==we&&(we&536870912)===0||t!==Lt))throw yl=Bo,nf;e.flags|=8192}}function Ii(e,t){t!==null&&(e.flags|=4),e.flags&16384&&(t=e.tag!==22?lc():536870912,e.lanes|=t,qn|=t)}function kl(e,t){if(!Te)switch(e.tailMode){case"hidden":t=e.tail;for(var a=null;t!==null;)t.alternate!==null&&(a=t),t=t.sibling;a===null?e.tail=null:a.sibling=null;break;case"collapsed":a=e.tail;for(var n=null;a!==null;)a.alternate!==null&&(n=a),a=a.sibling;n===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:n.sibling=null}}function Me(e){var t=e.alternate!==null&&e.alternate.child===e.child,a=0,n=0;if(t)for(var i=e.child;i!==null;)a|=i.lanes|i.childLanes,n|=i.subtreeFlags&31457280,n|=i.flags&31457280,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)a|=i.lanes|i.childLanes,n|=i.subtreeFlags,n|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=n,e.childLanes=a,t}function c1(e,t,a){var n=t.pendingProps;switch(Mo(t),t.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Me(t),null;case 1:return Me(t),null;case 3:return a=t.stateNode,n=null,e!==null&&(n=e.memoizedState.cache),t.memoizedState.cache!==n&&(t.flags|=2048),ta(Qe),mn(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(e===null||e.child===null)&&(pl(t)?ia(t):e===null||e.memoizedState.isDehydrated&&(t.flags&256)===0||(t.flags|=1024,zt!==null&&(Ls(zt),zt=null))),Me(t),null;case 26:return a=t.memoizedState,e===null?(ia(t),a!==null?(Me(t),Fd(t,a)):(Me(t),t.flags&=-16777217)):a?a!==e.memoizedState?(ia(t),Me(t),Fd(t,a)):(Me(t),t.flags&=-16777217):(e.memoizedProps!==n&&ia(t),Me(t),t.flags&=-16777217),null;case 27:fi(t),a=ma.current;var i=t.type;if(e!==null&&t.stateNode!=null)e.memoizedProps!==n&&ia(t);else{if(!n){if(t.stateNode===null)throw Error(s(166));return Me(t),null}e=et.current,pl(t)?tf(t):(e=vm(i,n,a),t.stateNode=e,ia(t))}return Me(t),null;case 5:if(fi(t),a=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==n&&ia(t);else{if(!n){if(t.stateNode===null)throw Error(s(166));return Me(t),null}if(e=et.current,pl(t))tf(t);else{switch(i=cr(ma.current),e){case 1:e=i.createElementNS("http://www.w3.org/2000/svg",a);break;case 2:e=i.createElementNS("http://www.w3.org/1998/Math/MathML",a);break;default:switch(a){case"svg":e=i.createElementNS("http://www.w3.org/2000/svg",a);break;case"math":e=i.createElementNS("http://www.w3.org/1998/Math/MathML",a);break;case"script":e=i.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild);break;case"select":e=typeof n.is=="string"?i.createElement("select",{is:n.is}):i.createElement("select"),n.multiple?e.multiple=!0:n.size&&(e.size=n.size);break;default:e=typeof n.is=="string"?i.createElement(a,{is:n.is}):i.createElement(a)}}e[tt]=t,e[ot]=n;e:for(i=t.child;i!==null;){if(i.tag===5||i.tag===6)e.appendChild(i.stateNode);else if(i.tag!==4&&i.tag!==27&&i.child!==null){i.child.return=i,i=i.child;continue}if(i===t)break e;for(;i.sibling===null;){if(i.return===null||i.return===t)break e;i=i.return}i.sibling.return=i.return,i=i.sibling}t.stateNode=e;e:switch(Ie(e,a,n),a){case"button":case"input":case"select":case"textarea":e=!!n.autoFocus;break e;case"img":e=!0;break e;default:e=!1}e&&ia(t)}}return Me(t),t.flags&=-16777217,null;case 6:if(e&&t.stateNode!=null)e.memoizedProps!==n&&ia(t);else{if(typeof n!="string"&&t.stateNode===null)throw Error(s(166));if(e=ma.current,pl(t)){if(e=t.stateNode,a=t.memoizedProps,n=null,i=it,i!==null)switch(i.tag){case 27:case 5:n=i.memoizedProps}e[tt]=t,e=!!(e.nodeValue===a||n!==null&&n.suppressHydrationWarning===!0||fm(e.nodeValue,a)),e||Za(t)}else e=cr(e).createTextNode(n),e[tt]=t,t.stateNode=e}return Me(t),null;case 13:if(n=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(i=pl(t),n!==null&&n.dehydrated!==null){if(e===null){if(!i)throw Error(s(318));if(i=t.memoizedState,i=i!==null?i.dehydrated:null,!i)throw Error(s(317));i[tt]=t}else hl(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;Me(t),i=!1}else zt!==null&&(Ls(zt),zt=null),i=!0;if(!i)return t.flags&256?(Wt(t),t):(Wt(t),null)}if(Wt(t),(t.flags&128)!==0)return t.lanes=a,t;if(a=n!==null,e=e!==null&&e.memoizedState!==null,a){n=t.child,i=null,n.alternate!==null&&n.alternate.memoizedState!==null&&n.alternate.memoizedState.cachePool!==null&&(i=n.alternate.memoizedState.cachePool.pool);var o=null;n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(o=n.memoizedState.cachePool.pool),o!==i&&(n.flags|=2048)}return a!==e&&a&&(t.child.flags|=8192),Ii(t,t.updateQueue),Me(t),null;case 4:return mn(),e===null&&$s(t.stateNode.containerInfo),Me(t),null;case 10:return ta(t.type),Me(t),null;case 19:if(Ee(Ve),i=t.memoizedState,i===null)return Me(t),null;if(n=(t.flags&128)!==0,o=i.rendering,o===null)if(n)kl(i,!1);else{if(He!==0||e!==null&&(e.flags&128)!==0)for(e=t.child;e!==null;){if(o=Bi(e),o!==null){for(t.flags|=128,kl(i,!1),e=o.updateQueue,t.updateQueue=e,Ii(t,e),t.subtreeFlags=0,e=a,a=t.child;a!==null;)Ld(a,e),a=a.sibling;return je(Ve,Ve.current&1|2),t.child}e=e.sibling}i.tail!==null&&Ut()>er&&(t.flags|=128,n=!0,kl(i,!1),t.lanes=4194304)}else{if(!n)if(e=Bi(o),e!==null){if(t.flags|=128,n=!0,e=e.updateQueue,t.updateQueue=e,Ii(t,e),kl(i,!0),i.tail===null&&i.tailMode==="hidden"&&!o.alternate&&!Te)return Me(t),null}else 2*Ut()-i.renderingStartTime>er&&a!==536870912&&(t.flags|=128,n=!0,kl(i,!1),t.lanes=4194304);i.isBackwards?(o.sibling=t.child,t.child=o):(e=i.last,e!==null?e.sibling=o:t.child=o,i.last=o)}return i.tail!==null?(t=i.tail,i.rendering=t,i.tail=t.sibling,i.renderingStartTime=Ut(),t.sibling=null,e=Ve.current,je(Ve,n?e&1|2:e&1),t):(Me(t),null);case 22:case 23:return Wt(t),Ho(),n=t.memoizedState!==null,e!==null?e.memoizedState!==null!==n&&(t.flags|=8192):n&&(t.flags|=8192),n?(a&536870912)!==0&&(t.flags&128)===0&&(Me(t),t.subtreeFlags&6&&(t.flags|=8192)):Me(t),a=t.updateQueue,a!==null&&Ii(t,a.retryQueue),a=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),n=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(n=t.memoizedState.cachePool.pool),n!==a&&(t.flags|=2048),e!==null&&Ee(Ja),null;case 24:return a=null,e!==null&&(a=e.memoizedState.cache),t.memoizedState.cache!==a&&(t.flags|=2048),ta(Qe),Me(t),null;case 25:return null}throw Error(s(156,t.tag))}function f1(e,t){switch(Mo(t),t.tag){case 1:return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return ta(Qe),mn(),e=t.flags,(e&65536)!==0&&(e&128)===0?(t.flags=e&-65537|128,t):null;case 26:case 27:case 5:return fi(t),null;case 13:if(Wt(t),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(s(340));hl()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return Ee(Ve),null;case 4:return mn(),null;case 10:return ta(t.type),null;case 22:case 23:return Wt(t),Ho(),e!==null&&Ee(Ja),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 24:return ta(Qe),null;case 25:return null;default:return null}}function Yd(e,t){switch(Mo(t),t.tag){case 3:ta(Qe),mn();break;case 26:case 27:case 5:fi(t);break;case 4:mn();break;case 13:Wt(t);break;case 19:Ee(Ve);break;case 10:ta(t.type);break;case 22:case 23:Wt(t),Ho(),e!==null&&Ee(Ja);break;case 24:ta(Qe)}}var d1={getCacheForType:function(e){var t=at(Qe),a=t.data.get(e);return a===void 0&&(a=e(),t.data.set(e,a)),a}},m1=typeof WeakMap=="function"?WeakMap:Map,ke=0,Ce=null,ye=null,we=0,_e=0,vt=null,ra=!1,Ln=!1,zs=!1,oa=0,He=0,Ca=0,ln=0,Ds=0,Rt=0,qn=0,Bl=null,Ft=null,Ms=!1,ks=0,er=1/0,tr=null,_a=null,ar=!1,rn=null,Ul=0,Bs=0,Us=null,Hl=0,Hs=null;function yt(){if((ke&2)!==0&&we!==0)return we&-we;if(Y.T!==null){var e=_n;return e!==0?e:Qs()}return sc()}function Gd(){Rt===0&&(Rt=(we&536870912)===0||Te?nc():536870912);var e=Tt.current;return e!==null&&(e.flags|=32),Rt}function rt(e,t,a){(e===Ce&&_e===2||e.cancelPendingCommit!==null)&&(Fn(e,0),sa(e,we,Rt,!1)),al(e,a),((ke&2)===0||e!==Ce)&&(e===Ce&&((ke&2)===0&&(ln|=a),He===4&&sa(e,we,Rt,!1)),Yt(e))}function Xd(e,t,a){if((ke&6)!==0)throw Error(s(327));var n=!a&&(t&60)===0&&(t&e.expiredLanes)===0||tl(e,t),i=n?g1(e,t):Ys(e,t,!0),o=n;do{if(i===0){Ln&&!n&&sa(e,t,0,!1);break}else if(i===6)sa(e,t,0,!ra);else{if(a=e.current.alternate,o&&!p1(a)){i=Ys(e,t,!1),o=!1;continue}if(i===2){if(o=t,e.errorRecoveryDisabledLanes&o)var d=0;else d=e.pendingLanes&-536870913,d=d!==0?d:d&536870912?536870912:0;if(d!==0){t=d;e:{var y=e;i=Bl;var w=y.current.memoizedState.isDehydrated;if(w&&(Fn(y,d).flags|=256),d=Ys(y,d,!1),d!==2){if(zs&&!w){y.errorRecoveryDisabledLanes|=o,ln|=o,i=4;break e}o=Ft,Ft=i,o!==null&&Ls(o)}i=d}if(o=!1,i!==2)continue}}if(i===1){Fn(e,0),sa(e,t,0,!0);break}e:{switch(n=e,i){case 0:case 1:throw Error(s(345));case 4:if((t&4194176)===t){sa(n,t,Rt,!ra);break e}break;case 2:Ft=null;break;case 3:case 5:break;default:throw Error(s(329))}if(n.finishedWork=a,n.finishedLanes=t,(t&62914560)===t&&(o=ks+300-Ut(),10<o)){if(sa(n,t,Rt,!ra),hi(n,0)!==0)break e;n.timeoutHandle=pm(Vd.bind(null,n,a,Ft,tr,Ms,t,Rt,ln,qn,ra,2,-0,0),o);break e}Vd(n,a,Ft,tr,Ms,t,Rt,ln,qn,ra,0,-0,0)}}break}while(!0);Yt(e)}function Ls(e){Ft===null?Ft=e:Ft.push.apply(Ft,e)}function Vd(e,t,a,n,i,o,d,y,w,R,q,V,B){var H=t.subtreeFlags;if((H&8192||(H&16785408)===16785408)&&(Xl={stylesheets:null,count:0,unsuspend:J1},kd(t),t=W1(),t!==null)){e.cancelPendingCommit=t(Pd.bind(null,e,a,n,i,d,y,w,1,V,B)),sa(e,o,d,!R);return}Pd(e,a,n,i,d,y,w,q,V,B)}function p1(e){for(var t=e;;){var a=t.tag;if((a===0||a===11||a===15)&&t.flags&16384&&(a=t.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var n=0;n<a.length;n++){var i=a[n],o=i.getSnapshot;i=i.value;try{if(!pt(o(),i))return!1}catch{return!1}}if(a=t.child,t.subtreeFlags&16384&&a!==null)a.return=t,t=a;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function sa(e,t,a,n){t&=~Ds,t&=~ln,e.suspendedLanes|=t,e.pingedLanes&=~t,n&&(e.warmLanes|=t),n=e.expirationTimes;for(var i=t;0<i;){var o=31-mt(i),d=1<<o;n[o]=-1,i&=~d}a!==0&&ic(e,a,t)}function nr(){return(ke&6)===0?(Ll(0),!1):!0}function qs(){if(ye!==null){if(_e===0)var e=ye.return;else e=ye,ea=en=null,Qo(e),Rn=null,bl=0,e=ye;for(;e!==null;)Yd(e.alternate,e),e=e.return;ye=null}}function Fn(e,t){e.finishedWork=null,e.finishedLanes=0;var a=e.timeoutHandle;a!==-1&&(e.timeoutHandle=-1,D1(a)),a=e.cancelPendingCommit,a!==null&&(e.cancelPendingCommit=null,a()),qs(),Ce=e,ye=a=Ra(e.current,null),we=t,_e=0,vt=null,ra=!1,Ln=tl(e,t),zs=!1,qn=Rt=Ds=ln=Ca=He=0,Ft=Bl=null,Ms=!1,(t&8)!==0&&(t|=t&32);var n=e.entangledLanes;if(n!==0)for(e=e.entanglements,n&=t;0<n;){var i=31-mt(n),o=1<<i;t|=e[i],n&=~o}return oa=t,Ni(),a}function Qd(e,t){ge=null,Y.H=qt,t===vl?(t=of(),_e=3):t===nf?(t=of(),_e=4):_e=t===id?8:t!==null&&typeof t=="object"&&typeof t.then=="function"?6:1,vt=t,ye===null&&(He=1,Zi(e,St(t,e.current)))}function Zd(){var e=Y.H;return Y.H=qt,e===null?qt:e}function Kd(){var e=Y.A;return Y.A=d1,e}function Fs(){He=4,ra||(we&4194176)!==we&&Tt.current!==null||(Ln=!0),(Ca&134217727)===0&&(ln&134217727)===0||Ce===null||sa(Ce,we,Rt,!1)}function Ys(e,t,a){var n=ke;ke|=2;var i=Zd(),o=Kd();(Ce!==e||we!==t)&&(tr=null,Fn(e,t)),t=!1;var d=He;e:do try{if(_e!==0&&ye!==null){var y=ye,w=vt;switch(_e){case 8:qs(),d=6;break e;case 3:case 2:case 6:Tt.current===null&&(t=!0);var R=_e;if(_e=0,vt=null,Yn(e,y,w,R),a&&Ln){d=0;break e}break;default:R=_e,_e=0,vt=null,Yn(e,y,w,R)}}h1(),d=He;break}catch(q){Qd(e,q)}while(!0);return t&&e.shellSuspendCounter++,ea=en=null,ke=n,Y.H=i,Y.A=o,ye===null&&(Ce=null,we=0,Ni()),d}function h1(){for(;ye!==null;)Jd(ye)}function g1(e,t){var a=ke;ke|=2;var n=Zd(),i=Kd();Ce!==e||we!==t?(tr=null,er=Ut()+500,Fn(e,t)):Ln=tl(e,t);e:do try{if(_e!==0&&ye!==null){t=ye;var o=vt;t:switch(_e){case 1:_e=0,vt=null,Yn(e,t,o,1);break;case 2:if(lf(o)){_e=0,vt=null,$d(t);break}t=function(){_e===2&&Ce===e&&(_e=7),Yt(e)},o.then(t,t);break e;case 3:_e=7;break e;case 4:_e=5;break e;case 7:lf(o)?(_e=0,vt=null,$d(t)):(_e=0,vt=null,Yn(e,t,o,7));break;case 5:var d=null;switch(ye.tag){case 26:d=ye.memoizedState;case 5:case 27:var y=ye;if(!d||Tm(d)){_e=0,vt=null;var w=y.sibling;if(w!==null)ye=w;else{var R=y.return;R!==null?(ye=R,lr(R)):ye=null}break t}}_e=0,vt=null,Yn(e,t,o,5);break;case 6:_e=0,vt=null,Yn(e,t,o,6);break;case 8:qs(),He=6;break e;default:throw Error(s(462))}}v1();break}catch(q){Qd(e,q)}while(!0);return ea=en=null,Y.H=n,Y.A=i,ke=a,ye!==null?0:(Ce=null,we=0,Ni(),He)}function v1(){for(;ye!==null&&!Lp();)Jd(ye)}function Jd(e){var t=vd(e.alternate,e,oa);e.memoizedProps=e.pendingProps,t===null?lr(e):ye=t}function $d(e){var t=e,a=t.alternate;switch(t.tag){case 15:case 0:t=fd(a,t,t.pendingProps,t.type,void 0,we);break;case 11:t=fd(a,t,t.pendingProps,t.type.render,t.ref,we);break;case 5:Qo(t);default:Yd(a,t),t=ye=Ld(t,oa),t=vd(a,t,oa)}e.memoizedProps=e.pendingProps,t===null?lr(e):ye=t}function Yn(e,t,a,n){ea=en=null,Qo(t),Rn=null,bl=0;var i=t.return;try{if(i1(e,i,t,a,we)){He=1,Zi(e,St(a,e.current)),ye=null;return}}catch(o){if(i!==null)throw ye=i,o;He=1,Zi(e,St(a,e.current)),ye=null;return}t.flags&32768?(Te||n===1?e=!0:Ln||(we&536870912)!==0?e=!1:(ra=e=!0,(n===2||n===3||n===6)&&(n=Tt.current,n!==null&&n.tag===13&&(n.flags|=16384))),Wd(t,e)):lr(t)}function lr(e){var t=e;do{if((t.flags&32768)!==0){Wd(t,ra);return}e=t.return;var a=c1(t.alternate,t,oa);if(a!==null){ye=a;return}if(t=t.sibling,t!==null){ye=t;return}ye=t=e}while(t!==null);He===0&&(He=5)}function Wd(e,t){do{var a=f1(e.alternate,e);if(a!==null){a.flags&=32767,ye=a;return}if(a=e.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!t&&(e=e.sibling,e!==null)){ye=e;return}ye=e=a}while(e!==null);He=6,ye=null}function Pd(e,t,a,n,i,o,d,y,w,R){var q=Y.T,V=I.p;try{I.p=2,Y.T=null,y1(e,t,a,n,V,i,o,d,y,w,R)}finally{Y.T=q,I.p=V}}function y1(e,t,a,n,i,o,d,y){do Gn();while(rn!==null);if((ke&6)!==0)throw Error(s(327));var w=e.finishedWork;if(n=e.finishedLanes,w===null)return null;if(e.finishedWork=null,e.finishedLanes=0,w===e.current)throw Error(s(177));e.callbackNode=null,e.callbackPriority=0,e.cancelPendingCommit=null;var R=w.lanes|w.childLanes;if(R|=_o,$p(e,n,R,o,d,y),e===Ce&&(ye=Ce=null,we=0),(w.subtreeFlags&10256)===0&&(w.flags&10256)===0||ar||(ar=!0,Bs=R,Us=a,S1(di,function(){return Gn(),null})),a=(w.flags&15990)!==0,(w.subtreeFlags&15990)!==0||a?(a=Y.T,Y.T=null,o=I.p,I.p=2,d=ke,ke|=4,o1(e,w),zd(w,e),Yh(eu,e.containerInfo),gr=!!Is,eu=Is=null,e.current=w,Ad(e,w.alternate,w),qp(),ke=d,I.p=o,Y.T=a):e.current=w,ar?(ar=!1,rn=e,Ul=n):Id(e,R),R=e.pendingLanes,R===0&&(_a=null),Vp(w.stateNode),Yt(e),t!==null)for(i=e.onRecoverableError,w=0;w<t.length;w++)R=t[w],i(R.value,{componentStack:R.stack});return(Ul&3)!==0&&Gn(),R=e.pendingLanes,(n&4194218)!==0&&(R&42)!==0?e===Hs?Hl++:(Hl=0,Hs=e):Hl=0,Ll(0),null}function Id(e,t){(e.pooledCacheLanes&=t)===0&&(t=e.pooledCache,t!=null&&(e.pooledCache=null,wl(t)))}function Gn(){if(rn!==null){var e=rn,t=Bs;Bs=0;var a=oc(Ul),n=Y.T,i=I.p;try{if(I.p=32>a?32:a,Y.T=null,rn===null)var o=!1;else{a=Us,Us=null;var d=rn,y=Ul;if(rn=null,Ul=0,(ke&6)!==0)throw Error(s(331));var w=ke;if(ke|=4,Ud(d.current),Md(d,d.current,y,a),ke=w,Ll(0,!1),dt&&typeof dt.onPostCommitFiberRoot=="function")try{dt.onPostCommitFiberRoot(el,d)}catch{}o=!0}return o}finally{I.p=i,Y.T=n,Id(e,t)}}return!1}function em(e,t,a){t=St(a,t),t=rs(e.stateNode,t,2),e=Ta(e,t,2),e!==null&&(al(e,2),Yt(e))}function Re(e,t,a){if(e.tag===3)em(e,e,a);else for(;t!==null;){if(t.tag===3){em(t,e,a);break}else if(t.tag===1){var n=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof n.componentDidCatch=="function"&&(_a===null||!_a.has(n))){e=St(a,e),a=nd(2),n=Ta(t,a,2),n!==null&&(ld(a,n,t,e),al(n,2),Yt(n));break}}t=t.return}}function Gs(e,t,a){var n=e.pingCache;if(n===null){n=e.pingCache=new m1;var i=new Set;n.set(t,i)}else i=n.get(t),i===void 0&&(i=new Set,n.set(t,i));i.has(a)||(zs=!0,i.add(a),e=b1.bind(null,e,t,a),t.then(e,e))}function b1(e,t,a){var n=e.pingCache;n!==null&&n.delete(t),e.pingedLanes|=e.suspendedLanes&a,e.warmLanes&=~a,Ce===e&&(we&a)===a&&(He===4||He===3&&(we&62914560)===we&&300>Ut()-ks?(ke&2)===0&&Fn(e,0):Ds|=a,qn===we&&(qn=0)),Yt(e)}function tm(e,t){t===0&&(t=lc()),e=va(e,t),e!==null&&(al(e,t),Yt(e))}function x1(e){var t=e.memoizedState,a=0;t!==null&&(a=t.retryLane),tm(e,a)}function w1(e,t){var a=0;switch(e.tag){case 13:var n=e.stateNode,i=e.memoizedState;i!==null&&(a=i.retryLane);break;case 19:n=e.stateNode;break;case 22:n=e.stateNode._retryCache;break;default:throw Error(s(314))}n!==null&&n.delete(t),tm(e,a)}function S1(e,t){return ro(e,t)}var ir=null,Xn=null,Xs=!1,rr=!1,Vs=!1,on=0;function Yt(e){e!==Xn&&e.next===null&&(Xn===null?ir=Xn=e:Xn=Xn.next=e),rr=!0,Xs||(Xs=!0,j1(E1))}function Ll(e,t){if(!Vs&&rr){Vs=!0;do for(var a=!1,n=ir;n!==null;){if(e!==0){var i=n.pendingLanes;if(i===0)var o=0;else{var d=n.suspendedLanes,y=n.pingedLanes;o=(1<<31-mt(42|e)+1)-1,o&=i&~(d&~y),o=o&201326677?o&201326677|1:o?o|2:0}o!==0&&(a=!0,lm(n,o))}else o=we,o=hi(n,n===Ce?o:0),(o&3)===0||tl(n,o)||(a=!0,lm(n,o));n=n.next}while(a);Vs=!1}}function E1(){rr=Xs=!1;var e=0;on!==0&&(z1()&&(e=on),on=0);for(var t=Ut(),a=null,n=ir;n!==null;){var i=n.next,o=am(n,t);o===0?(n.next=null,a===null?ir=i:a.next=i,i===null&&(Xn=a)):(a=n,(e!==0||(o&3)!==0)&&(rr=!0)),n=i}Ll(e)}function am(e,t){for(var a=e.suspendedLanes,n=e.pingedLanes,i=e.expirationTimes,o=e.pendingLanes&-62914561;0<o;){var d=31-mt(o),y=1<<d,w=i[d];w===-1?((y&a)===0||(y&n)!==0)&&(i[d]=Jp(y,t)):w<=t&&(e.expiredLanes|=y),o&=~y}if(t=Ce,a=we,a=hi(e,e===t?a:0),n=e.callbackNode,a===0||e===t&&_e===2||e.cancelPendingCommit!==null)return n!==null&&n!==null&&oo(n),e.callbackNode=null,e.callbackPriority=0;if((a&3)===0||tl(e,a)){if(t=a&-a,t===e.callbackPriority)return t;switch(n!==null&&oo(n),oc(a)){case 2:case 8:a=tc;break;case 32:a=di;break;case 268435456:a=ac;break;default:a=di}return n=nm.bind(null,e),a=ro(a,n),e.callbackPriority=t,e.callbackNode=a,t}return n!==null&&n!==null&&oo(n),e.callbackPriority=2,e.callbackNode=null,2}function nm(e,t){var a=e.callbackNode;if(Gn()&&e.callbackNode!==a)return null;var n=we;return n=hi(e,e===Ce?n:0),n===0?null:(Xd(e,n,t),am(e,Ut()),e.callbackNode!=null&&e.callbackNode===a?nm.bind(null,e):null)}function lm(e,t){if(Gn())return null;Xd(e,t,!0)}function j1(e){M1(function(){(ke&6)!==0?ro(ec,e):e()})}function Qs(){return on===0&&(on=nc()),on}function im(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:xi(""+e)}function rm(e,t){var a=t.ownerDocument.createElement("input");return a.name=t.name,a.value=t.value,e.id&&a.setAttribute("form",e.id),t.parentNode.insertBefore(a,t),e=new FormData(e),a.parentNode.removeChild(a),e}function T1(e,t,a,n,i){if(t==="submit"&&a&&a.stateNode===i){var o=im((i[ot]||null).action),d=n.submitter;d&&(t=(t=d[ot]||null)?im(t.formAction):d.getAttribute("formAction"),t!==null&&(o=t,d=null));var y=new ji("action","action",null,n,i);e.push({event:y,listeners:[{instance:null,listener:function(){if(n.defaultPrevented){if(on!==0){var w=d?rm(i,d):new FormData(i);ts(a,{pending:!0,data:w,method:i.method,action:o},null,w)}}else typeof o=="function"&&(y.preventDefault(),w=d?rm(i,d):new FormData(i),ts(a,{pending:!0,data:w,method:i.method,action:o},o,w))},currentTarget:i}]})}}for(var Zs=0;Zs<Wc.length;Zs++){var Ks=Wc[Zs],O1=Ks.toLowerCase(),N1=Ks[0].toUpperCase()+Ks.slice(1);_t(O1,"on"+N1)}_t(Qc,"onAnimationEnd"),_t(Zc,"onAnimationIteration"),_t(Kc,"onAnimationStart"),_t("dblclick","onDoubleClick"),_t("focusin","onFocus"),_t("focusout","onBlur"),_t(Xh,"onTransitionRun"),_t(Vh,"onTransitionStart"),_t(Qh,"onTransitionCancel"),_t(Jc,"onTransitionEnd"),vn("onMouseEnter",["mouseout","mouseover"]),vn("onMouseLeave",["mouseout","mouseover"]),vn("onPointerEnter",["pointerout","pointerover"]),vn("onPointerLeave",["pointerout","pointerover"]),Fa("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),Fa("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),Fa("onBeforeInput",["compositionend","keypress","textInput","paste"]),Fa("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),Fa("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),Fa("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var ql="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),A1=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(ql));function om(e,t){t=(t&4)!==0;for(var a=0;a<e.length;a++){var n=e[a],i=n.event;n=n.listeners;e:{var o=void 0;if(t)for(var d=n.length-1;0<=d;d--){var y=n[d],w=y.instance,R=y.currentTarget;if(y=y.listener,w!==o&&i.isPropagationStopped())break e;o=y,i.currentTarget=R;try{o(i)}catch(q){Qi(q)}i.currentTarget=null,o=w}else for(d=0;d<n.length;d++){if(y=n[d],w=y.instance,R=y.currentTarget,y=y.listener,w!==o&&i.isPropagationStopped())break e;o=y,i.currentTarget=R;try{o(i)}catch(q){Qi(q)}i.currentTarget=null,o=w}}}}function xe(e,t){var a=t[uo];a===void 0&&(a=t[uo]=new Set);var n=e+"__bubble";a.has(n)||(sm(t,e,2,!1),a.add(n))}function Js(e,t,a){var n=0;t&&(n|=4),sm(a,e,n,t)}var or="_reactListening"+Math.random().toString(36).slice(2);function $s(e){if(!e[or]){e[or]=!0,cc.forEach(function(a){a!=="selectionchange"&&(A1.has(a)||Js(a,!1,e),Js(a,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[or]||(t[or]=!0,Js("selectionchange",!1,t))}}function sm(e,t,a,n){switch(_m(t)){case 2:var i=e2;break;case 8:i=t2;break;default:i=uu}a=i.bind(null,t,a,e),i=void 0,!yo||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(i=!0),n?i!==void 0?e.addEventListener(t,a,{capture:!0,passive:i}):e.addEventListener(t,a,!0):i!==void 0?e.addEventListener(t,a,{passive:i}):e.addEventListener(t,a,!1)}function Ws(e,t,a,n,i){var o=n;if((t&1)===0&&(t&2)===0&&n!==null)e:for(;;){if(n===null)return;var d=n.tag;if(d===3||d===4){var y=n.stateNode.containerInfo;if(y===i||y.nodeType===8&&y.parentNode===i)break;if(d===4)for(d=n.return;d!==null;){var w=d.tag;if((w===3||w===4)&&(w=d.stateNode.containerInfo,w===i||w.nodeType===8&&w.parentNode===i))return;d=d.return}for(;y!==null;){if(d=qa(y),d===null)return;if(w=d.tag,w===5||w===6||w===26||w===27){n=o=d;continue e}y=y.parentNode}}n=n.return}Sc(function(){var R=o,q=go(a),V=[];e:{var B=$c.get(e);if(B!==void 0){var H=ji,re=e;switch(e){case"keypress":if(Si(a)===0)break e;case"keydown":case"keyup":H=wh;break;case"focusin":re="focus",H=So;break;case"focusout":re="blur",H=So;break;case"beforeblur":case"afterblur":H=So;break;case"click":if(a.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":H=Tc;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":H=uh;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":H=jh;break;case Qc:case Zc:case Kc:H=dh;break;case Jc:H=Oh;break;case"scroll":case"scrollend":H=oh;break;case"wheel":H=Ah;break;case"copy":case"cut":case"paste":H=ph;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":H=Nc;break;case"toggle":case"beforetoggle":H=Ch}var de=(t&4)!==0,Le=!de&&(e==="scroll"||e==="scrollend"),z=de?B!==null?B+"Capture":null:B;de=[];for(var A=R,k;A!==null;){var F=A;if(k=F.stateNode,F=F.tag,F!==5&&F!==26&&F!==27||k===null||z===null||(F=il(A,z),F!=null&&de.push(Fl(A,F,k))),Le)break;A=A.return}0<de.length&&(B=new H(B,re,null,a,q),V.push({event:B,listeners:de}))}}if((t&7)===0){e:{if(B=e==="mouseover"||e==="pointerover",H=e==="mouseout"||e==="pointerout",B&&a!==ho&&(re=a.relatedTarget||a.fromElement)&&(qa(re)||re[pn]))break e;if((H||B)&&(B=q.window===q?q:(B=q.ownerDocument)?B.defaultView||B.parentWindow:window,H?(re=a.relatedTarget||a.toElement,H=R,re=re?qa(re):null,re!==null&&(Le=te(re),de=re.tag,re!==Le||de!==5&&de!==27&&de!==6)&&(re=null)):(H=null,re=R),H!==re)){if(de=Tc,F="onMouseLeave",z="onMouseEnter",A="mouse",(e==="pointerout"||e==="pointerover")&&(de=Nc,F="onPointerLeave",z="onPointerEnter",A="pointer"),Le=H==null?B:ll(H),k=re==null?B:ll(re),B=new de(F,A+"leave",H,a,q),B.target=Le,B.relatedTarget=k,F=null,qa(q)===R&&(de=new de(z,A+"enter",re,a,q),de.target=k,de.relatedTarget=Le,F=de),Le=F,H&&re)t:{for(de=H,z=re,A=0,k=de;k;k=Vn(k))A++;for(k=0,F=z;F;F=Vn(F))k++;for(;0<A-k;)de=Vn(de),A--;for(;0<k-A;)z=Vn(z),k--;for(;A--;){if(de===z||z!==null&&de===z.alternate)break t;de=Vn(de),z=Vn(z)}de=null}else de=null;H!==null&&um(V,B,H,de,!1),re!==null&&Le!==null&&um(V,Le,re,de,!0)}}e:{if(B=R?ll(R):window,H=B.nodeName&&B.nodeName.toLowerCase(),H==="select"||H==="input"&&B.type==="file")var le=kc;else if(Dc(B))if(Bc)le=qh;else{le=Hh;var ve=Uh}else H=B.nodeName,!H||H.toLowerCase()!=="input"||B.type!=="checkbox"&&B.type!=="radio"?R&&po(R.elementType)&&(le=kc):le=Lh;if(le&&(le=le(e,R))){Mc(V,le,a,q);break e}ve&&ve(e,B,R),e==="focusout"&&R&&B.type==="number"&&R.memoizedProps.value!=null&&mo(B,"number",B.value)}switch(ve=R?ll(R):window,e){case"focusin":(Dc(ve)||ve.contentEditable==="true")&&(En=ve,Ao=R,ml=null);break;case"focusout":ml=Ao=En=null;break;case"mousedown":Ro=!0;break;case"contextmenu":case"mouseup":case"dragend":Ro=!1,Xc(V,a,q);break;case"selectionchange":if(Gh)break;case"keydown":case"keyup":Xc(V,a,q)}var se;if(jo)e:{switch(e){case"compositionstart":var ce="onCompositionStart";break e;case"compositionend":ce="onCompositionEnd";break e;case"compositionupdate":ce="onCompositionUpdate";break e}ce=void 0}else Sn?_c(e,a)&&(ce="onCompositionEnd"):e==="keydown"&&a.keyCode===229&&(ce="onCompositionStart");ce&&(Ac&&a.locale!=="ko"&&(Sn||ce!=="onCompositionStart"?ce==="onCompositionEnd"&&Sn&&(se=Ec()):(ga=q,bo="value"in ga?ga.value:ga.textContent,Sn=!0)),ve=sr(R,ce),0<ve.length&&(ce=new Oc(ce,e,null,a,q),V.push({event:ce,listeners:ve}),se?ce.data=se:(se=zc(a),se!==null&&(ce.data=se)))),(se=zh?Dh(e,a):Mh(e,a))&&(ce=sr(R,"onBeforeInput"),0<ce.length&&(ve=new Oc("onBeforeInput","beforeinput",null,a,q),V.push({event:ve,listeners:ce}),ve.data=se)),T1(V,e,R,a,q)}om(V,t)})}function Fl(e,t,a){return{instance:e,listener:t,currentTarget:a}}function sr(e,t){for(var a=t+"Capture",n=[];e!==null;){var i=e,o=i.stateNode;i=i.tag,i!==5&&i!==26&&i!==27||o===null||(i=il(e,a),i!=null&&n.unshift(Fl(e,i,o)),i=il(e,t),i!=null&&n.push(Fl(e,i,o))),e=e.return}return n}function Vn(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function um(e,t,a,n,i){for(var o=t._reactName,d=[];a!==null&&a!==n;){var y=a,w=y.alternate,R=y.stateNode;if(y=y.tag,w!==null&&w===n)break;y!==5&&y!==26&&y!==27||R===null||(w=R,i?(R=il(a,o),R!=null&&d.unshift(Fl(a,R,w))):i||(R=il(a,o),R!=null&&d.push(Fl(a,R,w)))),a=a.return}d.length!==0&&e.push({event:t,listeners:d})}var R1=/\r\n?/g,C1=/\u0000|\uFFFD/g;function cm(e){return(typeof e=="string"?e:""+e).replace(R1,`
`).replace(C1,"")}function fm(e,t){return t=cm(t),cm(e)===t}function ur(){}function Ae(e,t,a,n,i,o){switch(a){case"children":typeof n=="string"?t==="body"||t==="textarea"&&n===""||bn(e,n):(typeof n=="number"||typeof n=="bigint")&&t!=="body"&&bn(e,""+n);break;case"className":vi(e,"class",n);break;case"tabIndex":vi(e,"tabindex",n);break;case"dir":case"role":case"viewBox":case"width":case"height":vi(e,a,n);break;case"style":xc(e,n,o);break;case"data":if(t!=="object"){vi(e,"data",n);break}case"src":case"href":if(n===""&&(t!=="a"||a!=="href")){e.removeAttribute(a);break}if(n==null||typeof n=="function"||typeof n=="symbol"||typeof n=="boolean"){e.removeAttribute(a);break}n=xi(""+n),e.setAttribute(a,n);break;case"action":case"formAction":if(typeof n=="function"){e.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof o=="function"&&(a==="formAction"?(t!=="input"&&Ae(e,t,"name",i.name,i,null),Ae(e,t,"formEncType",i.formEncType,i,null),Ae(e,t,"formMethod",i.formMethod,i,null),Ae(e,t,"formTarget",i.formTarget,i,null)):(Ae(e,t,"encType",i.encType,i,null),Ae(e,t,"method",i.method,i,null),Ae(e,t,"target",i.target,i,null)));if(n==null||typeof n=="symbol"||typeof n=="boolean"){e.removeAttribute(a);break}n=xi(""+n),e.setAttribute(a,n);break;case"onClick":n!=null&&(e.onclick=ur);break;case"onScroll":n!=null&&xe("scroll",e);break;case"onScrollEnd":n!=null&&xe("scrollend",e);break;case"dangerouslySetInnerHTML":if(n!=null){if(typeof n!="object"||!("__html"in n))throw Error(s(61));if(a=n.__html,a!=null){if(i.children!=null)throw Error(s(60));e.innerHTML=a}}break;case"multiple":e.multiple=n&&typeof n!="function"&&typeof n!="symbol";break;case"muted":e.muted=n&&typeof n!="function"&&typeof n!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(n==null||typeof n=="function"||typeof n=="boolean"||typeof n=="symbol"){e.removeAttribute("xlink:href");break}a=xi(""+n),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":n!=null&&typeof n!="function"&&typeof n!="symbol"?e.setAttribute(a,""+n):e.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":n&&typeof n!="function"&&typeof n!="symbol"?e.setAttribute(a,""):e.removeAttribute(a);break;case"capture":case"download":n===!0?e.setAttribute(a,""):n!==!1&&n!=null&&typeof n!="function"&&typeof n!="symbol"?e.setAttribute(a,n):e.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":n!=null&&typeof n!="function"&&typeof n!="symbol"&&!isNaN(n)&&1<=n?e.setAttribute(a,n):e.removeAttribute(a);break;case"rowSpan":case"start":n==null||typeof n=="function"||typeof n=="symbol"||isNaN(n)?e.removeAttribute(a):e.setAttribute(a,n);break;case"popover":xe("beforetoggle",e),xe("toggle",e),gi(e,"popover",n);break;case"xlinkActuate":Kt(e,"http://www.w3.org/1999/xlink","xlink:actuate",n);break;case"xlinkArcrole":Kt(e,"http://www.w3.org/1999/xlink","xlink:arcrole",n);break;case"xlinkRole":Kt(e,"http://www.w3.org/1999/xlink","xlink:role",n);break;case"xlinkShow":Kt(e,"http://www.w3.org/1999/xlink","xlink:show",n);break;case"xlinkTitle":Kt(e,"http://www.w3.org/1999/xlink","xlink:title",n);break;case"xlinkType":Kt(e,"http://www.w3.org/1999/xlink","xlink:type",n);break;case"xmlBase":Kt(e,"http://www.w3.org/XML/1998/namespace","xml:base",n);break;case"xmlLang":Kt(e,"http://www.w3.org/XML/1998/namespace","xml:lang",n);break;case"xmlSpace":Kt(e,"http://www.w3.org/XML/1998/namespace","xml:space",n);break;case"is":gi(e,"is",n);break;case"innerText":case"textContent":break;default:(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")&&(a=ih.get(a)||a,gi(e,a,n))}}function Ps(e,t,a,n,i,o){switch(a){case"style":xc(e,n,o);break;case"dangerouslySetInnerHTML":if(n!=null){if(typeof n!="object"||!("__html"in n))throw Error(s(61));if(a=n.__html,a!=null){if(i.children!=null)throw Error(s(60));e.innerHTML=a}}break;case"children":typeof n=="string"?bn(e,n):(typeof n=="number"||typeof n=="bigint")&&bn(e,""+n);break;case"onScroll":n!=null&&xe("scroll",e);break;case"onScrollEnd":n!=null&&xe("scrollend",e);break;case"onClick":n!=null&&(e.onclick=ur);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!fc.hasOwnProperty(a))e:{if(a[0]==="o"&&a[1]==="n"&&(i=a.endsWith("Capture"),t=a.slice(2,i?a.length-7:void 0),o=e[ot]||null,o=o!=null?o[a]:null,typeof o=="function"&&e.removeEventListener(t,o,i),typeof n=="function")){typeof o!="function"&&o!==null&&(a in e?e[a]=null:e.hasAttribute(a)&&e.removeAttribute(a)),e.addEventListener(t,n,i);break e}a in e?e[a]=n:n===!0?e.setAttribute(a,""):gi(e,a,n)}}}function Ie(e,t,a){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":xe("error",e),xe("load",e);var n=!1,i=!1,o;for(o in a)if(a.hasOwnProperty(o)){var d=a[o];if(d!=null)switch(o){case"src":n=!0;break;case"srcSet":i=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(s(137,t));default:Ae(e,t,o,d,a,null)}}i&&Ae(e,t,"srcSet",a.srcSet,a,null),n&&Ae(e,t,"src",a.src,a,null);return;case"input":xe("invalid",e);var y=o=d=i=null,w=null,R=null;for(n in a)if(a.hasOwnProperty(n)){var q=a[n];if(q!=null)switch(n){case"name":i=q;break;case"type":d=q;break;case"checked":w=q;break;case"defaultChecked":R=q;break;case"value":o=q;break;case"defaultValue":y=q;break;case"children":case"dangerouslySetInnerHTML":if(q!=null)throw Error(s(137,t));break;default:Ae(e,t,n,q,a,null)}}gc(e,o,y,w,R,d,i,!1),yi(e);return;case"select":xe("invalid",e),n=d=o=null;for(i in a)if(a.hasOwnProperty(i)&&(y=a[i],y!=null))switch(i){case"value":o=y;break;case"defaultValue":d=y;break;case"multiple":n=y;default:Ae(e,t,i,y,a,null)}t=o,a=d,e.multiple=!!n,t!=null?yn(e,!!n,t,!1):a!=null&&yn(e,!!n,a,!0);return;case"textarea":xe("invalid",e),o=i=n=null;for(d in a)if(a.hasOwnProperty(d)&&(y=a[d],y!=null))switch(d){case"value":n=y;break;case"defaultValue":i=y;break;case"children":o=y;break;case"dangerouslySetInnerHTML":if(y!=null)throw Error(s(91));break;default:Ae(e,t,d,y,a,null)}yc(e,n,i,o),yi(e);return;case"option":for(w in a)if(a.hasOwnProperty(w)&&(n=a[w],n!=null))switch(w){case"selected":e.selected=n&&typeof n!="function"&&typeof n!="symbol";break;default:Ae(e,t,w,n,a,null)}return;case"dialog":xe("cancel",e),xe("close",e);break;case"iframe":case"object":xe("load",e);break;case"video":case"audio":for(n=0;n<ql.length;n++)xe(ql[n],e);break;case"image":xe("error",e),xe("load",e);break;case"details":xe("toggle",e);break;case"embed":case"source":case"link":xe("error",e),xe("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(R in a)if(a.hasOwnProperty(R)&&(n=a[R],n!=null))switch(R){case"children":case"dangerouslySetInnerHTML":throw Error(s(137,t));default:Ae(e,t,R,n,a,null)}return;default:if(po(t)){for(q in a)a.hasOwnProperty(q)&&(n=a[q],n!==void 0&&Ps(e,t,q,n,a,void 0));return}}for(y in a)a.hasOwnProperty(y)&&(n=a[y],n!=null&&Ae(e,t,y,n,a,null))}function _1(e,t,a,n){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var i=null,o=null,d=null,y=null,w=null,R=null,q=null;for(H in a){var V=a[H];if(a.hasOwnProperty(H)&&V!=null)switch(H){case"checked":break;case"value":break;case"defaultValue":w=V;default:n.hasOwnProperty(H)||Ae(e,t,H,null,n,V)}}for(var B in n){var H=n[B];if(V=a[B],n.hasOwnProperty(B)&&(H!=null||V!=null))switch(B){case"type":o=H;break;case"name":i=H;break;case"checked":R=H;break;case"defaultChecked":q=H;break;case"value":d=H;break;case"defaultValue":y=H;break;case"children":case"dangerouslySetInnerHTML":if(H!=null)throw Error(s(137,t));break;default:H!==V&&Ae(e,t,B,H,n,V)}}fo(e,d,y,w,R,q,o,i);return;case"select":H=d=y=B=null;for(o in a)if(w=a[o],a.hasOwnProperty(o)&&w!=null)switch(o){case"value":break;case"multiple":H=w;default:n.hasOwnProperty(o)||Ae(e,t,o,null,n,w)}for(i in n)if(o=n[i],w=a[i],n.hasOwnProperty(i)&&(o!=null||w!=null))switch(i){case"value":B=o;break;case"defaultValue":y=o;break;case"multiple":d=o;default:o!==w&&Ae(e,t,i,o,n,w)}t=y,a=d,n=H,B!=null?yn(e,!!a,B,!1):!!n!=!!a&&(t!=null?yn(e,!!a,t,!0):yn(e,!!a,a?[]:"",!1));return;case"textarea":H=B=null;for(y in a)if(i=a[y],a.hasOwnProperty(y)&&i!=null&&!n.hasOwnProperty(y))switch(y){case"value":break;case"children":break;default:Ae(e,t,y,null,n,i)}for(d in n)if(i=n[d],o=a[d],n.hasOwnProperty(d)&&(i!=null||o!=null))switch(d){case"value":B=i;break;case"defaultValue":H=i;break;case"children":break;case"dangerouslySetInnerHTML":if(i!=null)throw Error(s(91));break;default:i!==o&&Ae(e,t,d,i,n,o)}vc(e,B,H);return;case"option":for(var re in a)if(B=a[re],a.hasOwnProperty(re)&&B!=null&&!n.hasOwnProperty(re))switch(re){case"selected":e.selected=!1;break;default:Ae(e,t,re,null,n,B)}for(w in n)if(B=n[w],H=a[w],n.hasOwnProperty(w)&&B!==H&&(B!=null||H!=null))switch(w){case"selected":e.selected=B&&typeof B!="function"&&typeof B!="symbol";break;default:Ae(e,t,w,B,n,H)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var de in a)B=a[de],a.hasOwnProperty(de)&&B!=null&&!n.hasOwnProperty(de)&&Ae(e,t,de,null,n,B);for(R in n)if(B=n[R],H=a[R],n.hasOwnProperty(R)&&B!==H&&(B!=null||H!=null))switch(R){case"children":case"dangerouslySetInnerHTML":if(B!=null)throw Error(s(137,t));break;default:Ae(e,t,R,B,n,H)}return;default:if(po(t)){for(var Le in a)B=a[Le],a.hasOwnProperty(Le)&&B!==void 0&&!n.hasOwnProperty(Le)&&Ps(e,t,Le,void 0,n,B);for(q in n)B=n[q],H=a[q],!n.hasOwnProperty(q)||B===H||B===void 0&&H===void 0||Ps(e,t,q,B,n,H);return}}for(var z in a)B=a[z],a.hasOwnProperty(z)&&B!=null&&!n.hasOwnProperty(z)&&Ae(e,t,z,null,n,B);for(V in n)B=n[V],H=a[V],!n.hasOwnProperty(V)||B===H||B==null&&H==null||Ae(e,t,V,B,n,H)}var Is=null,eu=null;function cr(e){return e.nodeType===9?e:e.ownerDocument}function dm(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function mm(e,t){if(e===0)switch(t){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&t==="foreignObject"?0:e}function tu(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.children=="bigint"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var au=null;function z1(){var e=window.event;return e&&e.type==="popstate"?e===au?!1:(au=e,!0):(au=null,!1)}var pm=typeof setTimeout=="function"?setTimeout:void 0,D1=typeof clearTimeout=="function"?clearTimeout:void 0,hm=typeof Promise=="function"?Promise:void 0,M1=typeof queueMicrotask=="function"?queueMicrotask:typeof hm<"u"?function(e){return hm.resolve(null).then(e).catch(k1)}:pm;function k1(e){setTimeout(function(){throw e})}function nu(e,t){var a=t,n=0;do{var i=a.nextSibling;if(e.removeChild(a),i&&i.nodeType===8)if(a=i.data,a==="/$"){if(n===0){e.removeChild(i),Jl(t);return}n--}else a!=="$"&&a!=="$?"&&a!=="$!"||n++;a=i}while(a);Jl(t)}function lu(e){var t=e.firstChild;for(t&&t.nodeType===10&&(t=t.nextSibling);t;){var a=t;switch(t=t.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":lu(a),co(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}e.removeChild(a)}}function B1(e,t,a,n){for(;e.nodeType===1;){var i=a;if(e.nodeName.toLowerCase()!==t.toLowerCase()){if(!n&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(n){if(!e[nl])switch(t){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(o=e.getAttribute("rel"),o==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(o!==i.rel||e.getAttribute("href")!==(i.href==null?null:i.href)||e.getAttribute("crossorigin")!==(i.crossOrigin==null?null:i.crossOrigin)||e.getAttribute("title")!==(i.title==null?null:i.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(o=e.getAttribute("src"),(o!==(i.src==null?null:i.src)||e.getAttribute("type")!==(i.type==null?null:i.type)||e.getAttribute("crossorigin")!==(i.crossOrigin==null?null:i.crossOrigin))&&o&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(t==="input"&&e.type==="hidden"){var o=i.name==null?null:""+i.name;if(i.type==="hidden"&&e.getAttribute("name")===o)return e}else return e;if(e=Mt(e.nextSibling),e===null)break}return null}function U1(e,t,a){if(t==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!a||(e=Mt(e.nextSibling),e===null))return null;return e}function Mt(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?"||t==="F!"||t==="F")break;if(t==="/$")return null}}return e}function gm(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var a=e.data;if(a==="$"||a==="$!"||a==="$?"){if(t===0)return e;t--}else a==="/$"&&t++}e=e.previousSibling}return null}function vm(e,t,a){switch(t=cr(a),e){case"html":if(e=t.documentElement,!e)throw Error(s(452));return e;case"head":if(e=t.head,!e)throw Error(s(453));return e;case"body":if(e=t.body,!e)throw Error(s(454));return e;default:throw Error(s(451))}}var Ct=new Map,ym=new Set;function fr(e){return typeof e.getRootNode=="function"?e.getRootNode():e.ownerDocument}var ua=I.d;I.d={f:H1,r:L1,D:q1,C:F1,L:Y1,m:G1,X:V1,S:X1,M:Q1};function H1(){var e=ua.f(),t=nr();return e||t}function L1(e){var t=hn(e);t!==null&&t.tag===5&&t.type==="form"?Vf(t):ua.r(e)}var Qn=typeof document>"u"?null:document;function bm(e,t,a){var n=Qn;if(n&&typeof t=="string"&&t){var i=xt(t);i='link[rel="'+e+'"][href="'+i+'"]',typeof a=="string"&&(i+='[crossorigin="'+a+'"]'),ym.has(i)||(ym.add(i),e={rel:e,crossOrigin:a,href:t},n.querySelector(i)===null&&(t=n.createElement("link"),Ie(t,"link",e),Ze(t),n.head.appendChild(t)))}}function q1(e){ua.D(e),bm("dns-prefetch",e,null)}function F1(e,t){ua.C(e,t),bm("preconnect",e,t)}function Y1(e,t,a){ua.L(e,t,a);var n=Qn;if(n&&e&&t){var i='link[rel="preload"][as="'+xt(t)+'"]';t==="image"&&a&&a.imageSrcSet?(i+='[imagesrcset="'+xt(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(i+='[imagesizes="'+xt(a.imageSizes)+'"]')):i+='[href="'+xt(e)+'"]';var o=i;switch(t){case"style":o=Zn(e);break;case"script":o=Kn(e)}Ct.has(o)||(e=Z({rel:"preload",href:t==="image"&&a&&a.imageSrcSet?void 0:e,as:t},a),Ct.set(o,e),n.querySelector(i)!==null||t==="style"&&n.querySelector(Yl(o))||t==="script"&&n.querySelector(Gl(o))||(t=n.createElement("link"),Ie(t,"link",e),Ze(t),n.head.appendChild(t)))}}function G1(e,t){ua.m(e,t);var a=Qn;if(a&&e){var n=t&&typeof t.as=="string"?t.as:"script",i='link[rel="modulepreload"][as="'+xt(n)+'"][href="'+xt(e)+'"]',o=i;switch(n){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":o=Kn(e)}if(!Ct.has(o)&&(e=Z({rel:"modulepreload",href:e},t),Ct.set(o,e),a.querySelector(i)===null)){switch(n){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(Gl(o)))return}n=a.createElement("link"),Ie(n,"link",e),Ze(n),a.head.appendChild(n)}}}function X1(e,t,a){ua.S(e,t,a);var n=Qn;if(n&&e){var i=gn(n).hoistableStyles,o=Zn(e);t=t||"default";var d=i.get(o);if(!d){var y={loading:0,preload:null};if(d=n.querySelector(Yl(o)))y.loading=5;else{e=Z({rel:"stylesheet",href:e,"data-precedence":t},a),(a=Ct.get(o))&&iu(e,a);var w=d=n.createElement("link");Ze(w),Ie(w,"link",e),w._p=new Promise(function(R,q){w.onload=R,w.onerror=q}),w.addEventListener("load",function(){y.loading|=1}),w.addEventListener("error",function(){y.loading|=2}),y.loading|=4,dr(d,t,n)}d={type:"stylesheet",instance:d,count:1,state:y},i.set(o,d)}}}function V1(e,t){ua.X(e,t);var a=Qn;if(a&&e){var n=gn(a).hoistableScripts,i=Kn(e),o=n.get(i);o||(o=a.querySelector(Gl(i)),o||(e=Z({src:e,async:!0},t),(t=Ct.get(i))&&ru(e,t),o=a.createElement("script"),Ze(o),Ie(o,"link",e),a.head.appendChild(o)),o={type:"script",instance:o,count:1,state:null},n.set(i,o))}}function Q1(e,t){ua.M(e,t);var a=Qn;if(a&&e){var n=gn(a).hoistableScripts,i=Kn(e),o=n.get(i);o||(o=a.querySelector(Gl(i)),o||(e=Z({src:e,async:!0,type:"module"},t),(t=Ct.get(i))&&ru(e,t),o=a.createElement("script"),Ze(o),Ie(o,"link",e),a.head.appendChild(o)),o={type:"script",instance:o,count:1,state:null},n.set(i,o))}}function xm(e,t,a,n){var i=(i=ma.current)?fr(i):null;if(!i)throw Error(s(446));switch(e){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(t=Zn(a.href),a=gn(i).hoistableStyles,n=a.get(t),n||(n={type:"style",instance:null,count:0,state:null},a.set(t,n)),n):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){e=Zn(a.href);var o=gn(i).hoistableStyles,d=o.get(e);if(d||(i=i.ownerDocument||i,d={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},o.set(e,d),(o=i.querySelector(Yl(e)))&&!o._p&&(d.instance=o,d.state.loading=5),Ct.has(e)||(a={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},Ct.set(e,a),o||Z1(i,e,a,d.state))),t&&n===null)throw Error(s(528,""));return d}if(t&&n!==null)throw Error(s(529,""));return null;case"script":return t=a.async,a=a.src,typeof a=="string"&&t&&typeof t!="function"&&typeof t!="symbol"?(t=Kn(a),a=gn(i).hoistableScripts,n=a.get(t),n||(n={type:"script",instance:null,count:0,state:null},a.set(t,n)),n):{type:"void",instance:null,count:0,state:null};default:throw Error(s(444,e))}}function Zn(e){return'href="'+xt(e)+'"'}function Yl(e){return'link[rel="stylesheet"]['+e+"]"}function wm(e){return Z({},e,{"data-precedence":e.precedence,precedence:null})}function Z1(e,t,a,n){e.querySelector('link[rel="preload"][as="style"]['+t+"]")?n.loading=1:(t=e.createElement("link"),n.preload=t,t.addEventListener("load",function(){return n.loading|=1}),t.addEventListener("error",function(){return n.loading|=2}),Ie(t,"link",a),Ze(t),e.head.appendChild(t))}function Kn(e){return'[src="'+xt(e)+'"]'}function Gl(e){return"script[async]"+e}function Sm(e,t,a){if(t.count++,t.instance===null)switch(t.type){case"style":var n=e.querySelector('style[data-href~="'+xt(a.href)+'"]');if(n)return t.instance=n,Ze(n),n;var i=Z({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return n=(e.ownerDocument||e).createElement("style"),Ze(n),Ie(n,"style",i),dr(n,a.precedence,e),t.instance=n;case"stylesheet":i=Zn(a.href);var o=e.querySelector(Yl(i));if(o)return t.state.loading|=4,t.instance=o,Ze(o),o;n=wm(a),(i=Ct.get(i))&&iu(n,i),o=(e.ownerDocument||e).createElement("link"),Ze(o);var d=o;return d._p=new Promise(function(y,w){d.onload=y,d.onerror=w}),Ie(o,"link",n),t.state.loading|=4,dr(o,a.precedence,e),t.instance=o;case"script":return o=Kn(a.src),(i=e.querySelector(Gl(o)))?(t.instance=i,Ze(i),i):(n=a,(i=Ct.get(o))&&(n=Z({},a),ru(n,i)),e=e.ownerDocument||e,i=e.createElement("script"),Ze(i),Ie(i,"link",n),e.head.appendChild(i),t.instance=i);case"void":return null;default:throw Error(s(443,t.type))}else t.type==="stylesheet"&&(t.state.loading&4)===0&&(n=t.instance,t.state.loading|=4,dr(n,a.precedence,e));return t.instance}function dr(e,t,a){for(var n=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),i=n.length?n[n.length-1]:null,o=i,d=0;d<n.length;d++){var y=n[d];if(y.dataset.precedence===t)o=y;else if(o!==i)break}o?o.parentNode.insertBefore(e,o.nextSibling):(t=a.nodeType===9?a.head:a,t.insertBefore(e,t.firstChild))}function iu(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.title==null&&(e.title=t.title)}function ru(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.integrity==null&&(e.integrity=t.integrity)}var mr=null;function Em(e,t,a){if(mr===null){var n=new Map,i=mr=new Map;i.set(a,n)}else i=mr,n=i.get(a),n||(n=new Map,i.set(a,n));if(n.has(e))return n;for(n.set(e,null),a=a.getElementsByTagName(e),i=0;i<a.length;i++){var o=a[i];if(!(o[nl]||o[tt]||e==="link"&&o.getAttribute("rel")==="stylesheet")&&o.namespaceURI!=="http://www.w3.org/2000/svg"){var d=o.getAttribute(t)||"";d=e+d;var y=n.get(d);y?y.push(o):n.set(d,[o])}}return n}function jm(e,t,a){e=e.ownerDocument||e,e.head.insertBefore(a,t==="title"?e.querySelector("head > title"):null)}function K1(e,t,a){if(a===1||t.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof t.precedence!="string"||typeof t.href!="string"||t.href==="")break;return!0;case"link":if(typeof t.rel!="string"||typeof t.href!="string"||t.href===""||t.onLoad||t.onError)break;switch(t.rel){case"stylesheet":return e=t.disabled,typeof t.precedence=="string"&&e==null;default:return!0}case"script":if(t.async&&typeof t.async!="function"&&typeof t.async!="symbol"&&!t.onLoad&&!t.onError&&t.src&&typeof t.src=="string")return!0}return!1}function Tm(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}var Xl=null;function J1(){}function $1(e,t,a){if(Xl===null)throw Error(s(475));var n=Xl;if(t.type==="stylesheet"&&(typeof a.media!="string"||matchMedia(a.media).matches!==!1)&&(t.state.loading&4)===0){if(t.instance===null){var i=Zn(a.href),o=e.querySelector(Yl(i));if(o){e=o._p,e!==null&&typeof e=="object"&&typeof e.then=="function"&&(n.count++,n=pr.bind(n),e.then(n,n)),t.state.loading|=4,t.instance=o,Ze(o);return}o=e.ownerDocument||e,a=wm(a),(i=Ct.get(i))&&iu(a,i),o=o.createElement("link"),Ze(o);var d=o;d._p=new Promise(function(y,w){d.onload=y,d.onerror=w}),Ie(o,"link",a),t.instance=o}n.stylesheets===null&&(n.stylesheets=new Map),n.stylesheets.set(t,e),(e=t.state.preload)&&(t.state.loading&3)===0&&(n.count++,t=pr.bind(n),e.addEventListener("load",t),e.addEventListener("error",t))}}function W1(){if(Xl===null)throw Error(s(475));var e=Xl;return e.stylesheets&&e.count===0&&ou(e,e.stylesheets),0<e.count?function(t){var a=setTimeout(function(){if(e.stylesheets&&ou(e,e.stylesheets),e.unsuspend){var n=e.unsuspend;e.unsuspend=null,n()}},6e4);return e.unsuspend=t,function(){e.unsuspend=null,clearTimeout(a)}}:null}function pr(){if(this.count--,this.count===0){if(this.stylesheets)ou(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var hr=null;function ou(e,t){e.stylesheets=null,e.unsuspend!==null&&(e.count++,hr=new Map,t.forEach(P1,e),hr=null,pr.call(e))}function P1(e,t){if(!(t.state.loading&4)){var a=hr.get(e);if(a)var n=a.get(null);else{a=new Map,hr.set(e,a);for(var i=e.querySelectorAll("link[data-precedence],style[data-precedence]"),o=0;o<i.length;o++){var d=i[o];(d.nodeName==="LINK"||d.getAttribute("media")!=="not all")&&(a.set(d.dataset.precedence,d),n=d)}n&&a.set(null,n)}i=t.instance,d=i.getAttribute("data-precedence"),o=a.get(d)||n,o===n&&a.set(null,i),a.set(d,i),this.count++,n=pr.bind(this),i.addEventListener("load",n),i.addEventListener("error",n),o?o.parentNode.insertBefore(i,o.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(i,e.firstChild)),t.state.loading|=4}}var Vl={$$typeof:T,Provider:null,Consumer:null,_currentValue:pe,_currentValue2:pe,_threadCount:0};function I1(e,t,a,n,i,o,d,y){this.tag=1,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=so(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.finishedLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=so(0),this.hiddenUpdates=so(null),this.identifierPrefix=n,this.onUncaughtError=i,this.onCaughtError=o,this.onRecoverableError=d,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=y,this.incompleteTransitions=new Map}function Om(e,t,a,n,i,o,d,y,w,R,q,V){return e=new I1(e,t,a,d,y,w,R,V),t=1,o===!0&&(t|=24),o=At(3,null,null,t),e.current=o,o.stateNode=e,t=Lo(),t.refCount++,e.pooledCache=t,t.refCount++,o.memoizedState={element:n,isDehydrated:a,cache:t},bs(o),e}function Nm(e){return e?(e=On,e):On}function Am(e,t,a,n,i,o){i=Nm(i),n.context===null?n.context=i:n.pendingContext=i,n=ja(t),n.payload={element:a},o=o===void 0?null:o,o!==null&&(n.callback=o),a=Ta(e,n,t),a!==null&&(rt(a,e,t),Al(a,e,t))}function Rm(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var a=e.retryLane;e.retryLane=a!==0&&a<t?a:t}}function su(e,t){Rm(e,t),(e=e.alternate)&&Rm(e,t)}function Cm(e){if(e.tag===13){var t=va(e,67108864);t!==null&&rt(t,e,67108864),su(e,67108864)}}var gr=!0;function e2(e,t,a,n){var i=Y.T;Y.T=null;var o=I.p;try{I.p=2,uu(e,t,a,n)}finally{I.p=o,Y.T=i}}function t2(e,t,a,n){var i=Y.T;Y.T=null;var o=I.p;try{I.p=8,uu(e,t,a,n)}finally{I.p=o,Y.T=i}}function uu(e,t,a,n){if(gr){var i=cu(n);if(i===null)Ws(e,t,n,vr,a),zm(e,n);else if(n2(i,e,t,a,n))n.stopPropagation();else if(zm(e,n),t&4&&-1<a2.indexOf(e)){for(;i!==null;){var o=hn(i);if(o!==null)switch(o.tag){case 3:if(o=o.stateNode,o.current.memoizedState.isDehydrated){var d=La(o.pendingLanes);if(d!==0){var y=o;for(y.pendingLanes|=2,y.entangledLanes|=2;d;){var w=1<<31-mt(d);y.entanglements[1]|=w,d&=~w}Yt(o),(ke&6)===0&&(er=Ut()+500,Ll(0))}}break;case 13:y=va(o,2),y!==null&&rt(y,o,2),nr(),su(o,2)}if(o=cu(n),o===null&&Ws(e,t,n,vr,a),o===i)break;i=o}i!==null&&n.stopPropagation()}else Ws(e,t,n,null,a)}}function cu(e){return e=go(e),fu(e)}var vr=null;function fu(e){if(vr=null,e=qa(e),e!==null){var t=te(e);if(t===null)e=null;else{var a=t.tag;if(a===13){if(e=be(t),e!==null)return e;e=null}else if(a===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null)}}return vr=e,null}function _m(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(Fp()){case ec:return 2;case tc:return 8;case di:case Yp:return 32;case ac:return 268435456;default:return 32}default:return 32}}var du=!1,za=null,Da=null,Ma=null,Ql=new Map,Zl=new Map,ka=[],a2="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function zm(e,t){switch(e){case"focusin":case"focusout":za=null;break;case"dragenter":case"dragleave":Da=null;break;case"mouseover":case"mouseout":Ma=null;break;case"pointerover":case"pointerout":Ql.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Zl.delete(t.pointerId)}}function Kl(e,t,a,n,i,o){return e===null||e.nativeEvent!==o?(e={blockedOn:t,domEventName:a,eventSystemFlags:n,nativeEvent:o,targetContainers:[i]},t!==null&&(t=hn(t),t!==null&&Cm(t)),e):(e.eventSystemFlags|=n,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function n2(e,t,a,n,i){switch(t){case"focusin":return za=Kl(za,e,t,a,n,i),!0;case"dragenter":return Da=Kl(Da,e,t,a,n,i),!0;case"mouseover":return Ma=Kl(Ma,e,t,a,n,i),!0;case"pointerover":var o=i.pointerId;return Ql.set(o,Kl(Ql.get(o)||null,e,t,a,n,i)),!0;case"gotpointercapture":return o=i.pointerId,Zl.set(o,Kl(Zl.get(o)||null,e,t,a,n,i)),!0}return!1}function Dm(e){var t=qa(e.target);if(t!==null){var a=te(t);if(a!==null){if(t=a.tag,t===13){if(t=be(a),t!==null){e.blockedOn=t,Wp(e.priority,function(){if(a.tag===13){var n=yt(),i=va(a,n);i!==null&&rt(i,a,n),su(a,n)}});return}}else if(t===3&&a.stateNode.current.memoizedState.isDehydrated){e.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}e.blockedOn=null}function yr(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var a=cu(e.nativeEvent);if(a===null){a=e.nativeEvent;var n=new a.constructor(a.type,a);ho=n,a.target.dispatchEvent(n),ho=null}else return t=hn(a),t!==null&&Cm(t),e.blockedOn=a,!1;t.shift()}return!0}function Mm(e,t,a){yr(e)&&a.delete(t)}function l2(){du=!1,za!==null&&yr(za)&&(za=null),Da!==null&&yr(Da)&&(Da=null),Ma!==null&&yr(Ma)&&(Ma=null),Ql.forEach(Mm),Zl.forEach(Mm)}function br(e,t){e.blockedOn===t&&(e.blockedOn=null,du||(du=!0,l.unstable_scheduleCallback(l.unstable_NormalPriority,l2)))}var xr=null;function km(e){xr!==e&&(xr=e,l.unstable_scheduleCallback(l.unstable_NormalPriority,function(){xr===e&&(xr=null);for(var t=0;t<e.length;t+=3){var a=e[t],n=e[t+1],i=e[t+2];if(typeof n!="function"){if(fu(n||a)===null)continue;break}var o=hn(a);o!==null&&(e.splice(t,3),t-=3,ts(o,{pending:!0,data:i,method:a.method,action:n},n,i))}}))}function Jl(e){function t(w){return br(w,e)}za!==null&&br(za,e),Da!==null&&br(Da,e),Ma!==null&&br(Ma,e),Ql.forEach(t),Zl.forEach(t);for(var a=0;a<ka.length;a++){var n=ka[a];n.blockedOn===e&&(n.blockedOn=null)}for(;0<ka.length&&(a=ka[0],a.blockedOn===null);)Dm(a),a.blockedOn===null&&ka.shift();if(a=(e.ownerDocument||e).$$reactFormReplay,a!=null)for(n=0;n<a.length;n+=3){var i=a[n],o=a[n+1],d=i[ot]||null;if(typeof o=="function")d||km(a);else if(d){var y=null;if(o&&o.hasAttribute("formAction")){if(i=o,d=o[ot]||null)y=d.formAction;else if(fu(i)!==null)continue}else y=d.action;typeof y=="function"?a[n+1]=y:(a.splice(n,3),n-=3),km(a)}}}function mu(e){this._internalRoot=e}wr.prototype.render=mu.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(s(409));var a=t.current,n=yt();Am(a,n,e,t,null,null)},wr.prototype.unmount=mu.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;e.tag===0&&Gn(),Am(e.current,2,null,e,null,null),nr(),t[pn]=null}};function wr(e){this._internalRoot=e}wr.prototype.unstable_scheduleHydration=function(e){if(e){var t=sc();e={blockedOn:null,target:e,priority:t};for(var a=0;a<ka.length&&t!==0&&t<ka[a].priority;a++);ka.splice(a,0,e),a===0&&Dm(e)}};var Bm=r.version;if(Bm!=="19.0.0")throw Error(s(527,Bm,"19.0.0"));I.findDOMNode=function(e){var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(s(188)):(e=Object.keys(e).join(","),Error(s(268,e)));return e=G(t),e=e!==null?ae(e):null,e=e===null?null:e.stateNode,e};var i2={bundleType:0,version:"19.0.0",rendererPackageName:"react-dom",currentDispatcherRef:Y,findFiberByHostInstance:qa,reconcilerVersion:"19.0.0"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Sr=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Sr.isDisabled&&Sr.supportsFiber)try{el=Sr.inject(i2),dt=Sr}catch{}}return Wl.createRoot=function(e,t){if(!c(e))throw Error(s(299));var a=!1,n="",i=If,o=ed,d=td,y=null;return t!=null&&(t.unstable_strictMode===!0&&(a=!0),t.identifierPrefix!==void 0&&(n=t.identifierPrefix),t.onUncaughtError!==void 0&&(i=t.onUncaughtError),t.onCaughtError!==void 0&&(o=t.onCaughtError),t.onRecoverableError!==void 0&&(d=t.onRecoverableError),t.unstable_transitionCallbacks!==void 0&&(y=t.unstable_transitionCallbacks)),t=Om(e,1,!1,null,null,a,n,i,o,d,y,null),e[pn]=t.current,$s(e.nodeType===8?e.parentNode:e),new mu(t)},Wl.hydrateRoot=function(e,t,a){if(!c(e))throw Error(s(299));var n=!1,i="",o=If,d=ed,y=td,w=null,R=null;return a!=null&&(a.unstable_strictMode===!0&&(n=!0),a.identifierPrefix!==void 0&&(i=a.identifierPrefix),a.onUncaughtError!==void 0&&(o=a.onUncaughtError),a.onCaughtError!==void 0&&(d=a.onCaughtError),a.onRecoverableError!==void 0&&(y=a.onRecoverableError),a.unstable_transitionCallbacks!==void 0&&(w=a.unstable_transitionCallbacks),a.formState!==void 0&&(R=a.formState)),t=Om(e,1,!0,t,a??null,n,i,o,d,y,w,R),t.context=Nm(null),a=t.current,n=yt(),i=ja(n),i.callback=null,Ta(a,i,n),t.current.lanes=n,al(t,n),Yt(t),e[pn]=t.current,$s(e),new wr(t)},Wl.version="19.0.0",Wl}var Qm;function p2(){if(Qm)return gu.exports;Qm=1;function l(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(l)}catch(r){console.error(r)}}return l(),gu.exports=m2(),gu.exports}var h2=p2();const g2=q0(h2);/**
 * react-router v7.9.5
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */var Zm="popstate";function v2(l={}){function r(s,c){let{pathname:m,search:h,hash:v}=s.location;return _u("",{pathname:m,search:h,hash:v},c.state&&c.state.usr||null,c.state&&c.state.key||"default")}function u(s,c){return typeof c=="string"?c:ti(c)}return b2(r,u,null,l)}function Be(l,r){if(l===!1||l===null||typeof l>"u")throw new Error(r)}function Xt(l,r){if(!l){typeof console<"u"&&console.warn(r);try{throw new Error(r)}catch{}}}function y2(){return Math.random().toString(36).substring(2,10)}function Km(l,r){return{usr:l.state,key:l.key,idx:r}}function _u(l,r,u=null,s){return{pathname:typeof l=="string"?l:l.pathname,search:"",hash:"",...typeof r=="string"?$n(r):r,state:u,key:r&&r.key||s||y2()}}function ti({pathname:l="/",search:r="",hash:u=""}){return r&&r!=="?"&&(l+=r.charAt(0)==="?"?r:"?"+r),u&&u!=="#"&&(l+=u.charAt(0)==="#"?u:"#"+u),l}function $n(l){let r={};if(l){let u=l.indexOf("#");u>=0&&(r.hash=l.substring(u),l=l.substring(0,u));let s=l.indexOf("?");s>=0&&(r.search=l.substring(s),l=l.substring(0,s)),l&&(r.pathname=l)}return r}function b2(l,r,u,s={}){let{window:c=document.defaultView,v5Compat:m=!1}=s,h=c.history,v="POP",g=null,p=b();p==null&&(p=0,h.replaceState({...h.state,idx:p},""));function b(){return(h.state||{idx:null}).idx}function S(){v="POP";let E=b(),_=E==null?null:E-p;p=E,g&&g({action:v,location:O.location,delta:_})}function N(E,_){v="PUSH";let M=_u(O.location,E,_);p=b()+1;let C=Km(M,p),Q=O.createHref(M);try{h.pushState(C,"",Q)}catch(X){if(X instanceof DOMException&&X.name==="DataCloneError")throw X;c.location.assign(Q)}m&&g&&g({action:v,location:O.location,delta:1})}function T(E,_){v="REPLACE";let M=_u(O.location,E,_);p=b();let C=Km(M,p),Q=O.createHref(M);h.replaceState(C,"",Q),m&&g&&g({action:v,location:O.location,delta:0})}function x(E){return x2(E)}let O={get action(){return v},get location(){return l(c,h)},listen(E){if(g)throw new Error("A history only accepts one active listener");return c.addEventListener(Zm,S),g=E,()=>{c.removeEventListener(Zm,S),g=null}},createHref(E){return r(c,E)},createURL:x,encodeLocation(E){let _=x(E);return{pathname:_.pathname,search:_.search,hash:_.hash}},push:N,replace:T,go(E){return h.go(E)}};return O}function x2(l,r=!1){let u="http://localhost";typeof window<"u"&&(u=window.location.origin!=="null"?window.location.origin:window.location.href),Be(u,"No window.location.(origin|href) available to create URL");let s=typeof l=="string"?l:ti(l);return s=s.replace(/ $/,"%20"),!r&&s.startsWith("//")&&(s=u+s),new URL(s,u)}function F0(l,r,u="/"){return w2(l,r,u,!1)}function w2(l,r,u,s){let c=typeof r=="string"?$n(r):r,m=fa(c.pathname||"/",u);if(m==null)return null;let h=Y0(l);S2(h);let v=null;for(let g=0;v==null&&g<h.length;++g){let p=D2(m);v=_2(h[g],p,s)}return v}function Y0(l,r=[],u=[],s="",c=!1){let m=(h,v,g=c,p)=>{let b={relativePath:p===void 0?h.path||"":p,caseSensitive:h.caseSensitive===!0,childrenIndex:v,route:h};if(b.relativePath.startsWith("/")){if(!b.relativePath.startsWith(s)&&g)return;Be(b.relativePath.startsWith(s),`Absolute route path "${b.relativePath}" nested under path "${s}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),b.relativePath=b.relativePath.slice(s.length)}let S=ca([s,b.relativePath]),N=u.concat(b);h.children&&h.children.length>0&&(Be(h.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${S}".`),Y0(h.children,r,N,S,g)),!(h.path==null&&!h.index)&&r.push({path:S,score:R2(S,h.index),routesMeta:N})};return l.forEach((h,v)=>{var g;if(h.path===""||!((g=h.path)!=null&&g.includes("?")))m(h,v);else for(let p of G0(h.path))m(h,v,!0,p)}),r}function G0(l){let r=l.split("/");if(r.length===0)return[];let[u,...s]=r,c=u.endsWith("?"),m=u.replace(/\?$/,"");if(s.length===0)return c?[m,""]:[m];let h=G0(s.join("/")),v=[];return v.push(...h.map(g=>g===""?m:[m,g].join("/"))),c&&v.push(...h),v.map(g=>l.startsWith("/")&&g===""?"/":g)}function S2(l){l.sort((r,u)=>r.score!==u.score?u.score-r.score:C2(r.routesMeta.map(s=>s.childrenIndex),u.routesMeta.map(s=>s.childrenIndex)))}var E2=/^:[\w-]+$/,j2=3,T2=2,O2=1,N2=10,A2=-2,Jm=l=>l==="*";function R2(l,r){let u=l.split("/"),s=u.length;return u.some(Jm)&&(s+=A2),r&&(s+=T2),u.filter(c=>!Jm(c)).reduce((c,m)=>c+(E2.test(m)?j2:m===""?O2:N2),s)}function C2(l,r){return l.length===r.length&&l.slice(0,-1).every((s,c)=>s===r[c])?l[l.length-1]-r[r.length-1]:0}function _2(l,r,u=!1){let{routesMeta:s}=l,c={},m="/",h=[];for(let v=0;v<s.length;++v){let g=s[v],p=v===s.length-1,b=m==="/"?r:r.slice(m.length)||"/",S=Xr({path:g.relativePath,caseSensitive:g.caseSensitive,end:p},b),N=g.route;if(!S&&p&&u&&!s[s.length-1].route.index&&(S=Xr({path:g.relativePath,caseSensitive:g.caseSensitive,end:!1},b)),!S)return null;Object.assign(c,S.params),h.push({params:c,pathname:ca([m,S.pathname]),pathnameBase:U2(ca([m,S.pathnameBase])),route:N}),S.pathnameBase!=="/"&&(m=ca([m,S.pathnameBase]))}return h}function Xr(l,r){typeof l=="string"&&(l={path:l,caseSensitive:!1,end:!0});let[u,s]=z2(l.path,l.caseSensitive,l.end),c=r.match(u);if(!c)return null;let m=c[0],h=m.replace(/(.)\/+$/,"$1"),v=c.slice(1);return{params:s.reduce((p,{paramName:b,isOptional:S},N)=>{if(b==="*"){let x=v[N]||"";h=m.slice(0,m.length-x.length).replace(/(.)\/+$/,"$1")}const T=v[N];return S&&!T?p[b]=void 0:p[b]=(T||"").replace(/%2F/g,"/"),p},{}),pathname:m,pathnameBase:h,pattern:l}}function z2(l,r=!1,u=!0){Xt(l==="*"||!l.endsWith("*")||l.endsWith("/*"),`Route path "${l}" will be treated as if it were "${l.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${l.replace(/\*$/,"/*")}".`);let s=[],c="^"+l.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(h,v,g)=>(s.push({paramName:v,isOptional:g!=null}),g?"/?([^\\/]+)?":"/([^\\/]+)")).replace(/\/([\w-]+)\?(\/|$)/g,"(/$1)?$2");return l.endsWith("*")?(s.push({paramName:"*"}),c+=l==="*"||l==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):u?c+="\\/*$":l!==""&&l!=="/"&&(c+="(?:(?=\\/|$))"),[new RegExp(c,r?void 0:"i"),s]}function D2(l){try{return l.split("/").map(r=>decodeURIComponent(r).replace(/\//g,"%2F")).join("/")}catch(r){return Xt(!1,`The URL path "${l}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${r}).`),l}}function fa(l,r){if(r==="/")return l;if(!l.toLowerCase().startsWith(r.toLowerCase()))return null;let u=r.endsWith("/")?r.length-1:r.length,s=l.charAt(u);return s&&s!=="/"?null:l.slice(u)||"/"}function M2(l,r="/"){let{pathname:u,search:s="",hash:c=""}=typeof l=="string"?$n(l):l;return{pathname:u?u.startsWith("/")?u:k2(u,r):r,search:H2(s),hash:L2(c)}}function k2(l,r){let u=r.replace(/\/+$/,"").split("/");return l.split("/").forEach(c=>{c===".."?u.length>1&&u.pop():c!=="."&&u.push(c)}),u.length>1?u.join("/"):"/"}function xu(l,r,u,s){return`Cannot include a '${l}' character in a manually specified \`to.${r}\` field [${JSON.stringify(s)}].  Please separate it out to the \`to.${u}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function B2(l){return l.filter((r,u)=>u===0||r.route.path&&r.route.path.length>0)}function X0(l){let r=B2(l);return r.map((u,s)=>s===r.length-1?u.pathname:u.pathnameBase)}function V0(l,r,u,s=!1){let c;typeof l=="string"?c=$n(l):(c={...l},Be(!c.pathname||!c.pathname.includes("?"),xu("?","pathname","search",c)),Be(!c.pathname||!c.pathname.includes("#"),xu("#","pathname","hash",c)),Be(!c.search||!c.search.includes("#"),xu("#","search","hash",c)));let m=l===""||c.pathname==="",h=m?"/":c.pathname,v;if(h==null)v=u;else{let S=r.length-1;if(!s&&h.startsWith("..")){let N=h.split("/");for(;N[0]==="..";)N.shift(),S-=1;c.pathname=N.join("/")}v=S>=0?r[S]:"/"}let g=M2(c,v),p=h&&h!=="/"&&h.endsWith("/"),b=(m||h===".")&&u.endsWith("/");return!g.pathname.endsWith("/")&&(p||b)&&(g.pathname+="/"),g}var ca=l=>l.join("/").replace(/\/\/+/g,"/"),U2=l=>l.replace(/\/+$/,"").replace(/^\/*/,"/"),H2=l=>!l||l==="?"?"":l.startsWith("?")?l:"?"+l,L2=l=>!l||l==="#"?"":l.startsWith("#")?l:"#"+l;function q2(l){return l!=null&&typeof l.status=="number"&&typeof l.statusText=="string"&&typeof l.internal=="boolean"&&"data"in l}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");var Q0=["POST","PUT","PATCH","DELETE"];new Set(Q0);var F2=["GET",...Q0];new Set(F2);var Wn=D.createContext(null);Wn.displayName="DataRouter";var Kr=D.createContext(null);Kr.displayName="DataRouterState";D.createContext(!1);var Z0=D.createContext({isTransitioning:!1});Z0.displayName="ViewTransition";var Y2=D.createContext(new Map);Y2.displayName="Fetchers";var G2=D.createContext(null);G2.displayName="Await";var Vt=D.createContext(null);Vt.displayName="Navigation";var ai=D.createContext(null);ai.displayName="Location";var Qt=D.createContext({outlet:null,matches:[],isDataRoute:!1});Qt.displayName="Route";var qu=D.createContext(null);qu.displayName="RouteError";function X2(l,{relative:r}={}){Be(ni(),"useHref() may be used only in the context of a <Router> component.");let{basename:u,navigator:s}=D.useContext(Vt),{hash:c,pathname:m,search:h}=li(l,{relative:r}),v=m;return u!=="/"&&(v=m==="/"?u:ca([u,m])),s.createHref({pathname:v,search:h,hash:c})}function ni(){return D.useContext(ai)!=null}function dn(){return Be(ni(),"useLocation() may be used only in the context of a <Router> component."),D.useContext(ai).location}var K0="You should call navigate() in a React.useEffect(), not when your component is first rendered.";function J0(l){D.useContext(Vt).static||D.useLayoutEffect(l)}function Fu(){let{isDataRoute:l}=D.useContext(Qt);return l?lg():V2()}function V2(){Be(ni(),"useNavigate() may be used only in the context of a <Router> component.");let l=D.useContext(Wn),{basename:r,navigator:u}=D.useContext(Vt),{matches:s}=D.useContext(Qt),{pathname:c}=dn(),m=JSON.stringify(X0(s)),h=D.useRef(!1);return J0(()=>{h.current=!0}),D.useCallback((g,p={})=>{if(Xt(h.current,K0),!h.current)return;if(typeof g=="number"){u.go(g);return}let b=V0(g,JSON.parse(m),c,p.relative==="path");l==null&&r!=="/"&&(b.pathname=b.pathname==="/"?r:ca([r,b.pathname])),(p.replace?u.replace:u.push)(b,p.state,p)},[r,u,m,c,l])}D.createContext(null);function Q2(){let{matches:l}=D.useContext(Qt),r=l[l.length-1];return r?r.params:{}}function li(l,{relative:r}={}){let{matches:u}=D.useContext(Qt),{pathname:s}=dn(),c=JSON.stringify(X0(u));return D.useMemo(()=>V0(l,JSON.parse(c),s,r==="path"),[l,c,s,r])}function Z2(l,r){return $0(l,r)}function $0(l,r,u,s,c){var M;Be(ni(),"useRoutes() may be used only in the context of a <Router> component.");let{navigator:m}=D.useContext(Vt),{matches:h}=D.useContext(Qt),v=h[h.length-1],g=v?v.params:{},p=v?v.pathname:"/",b=v?v.pathnameBase:"/",S=v&&v.route;{let C=S&&S.path||"";W0(p,!S||C.endsWith("*")||C.endsWith("*?"),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${p}" (under <Route path="${C}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${C}"> to <Route path="${C==="/"?"*":`${C}/*`}">.`)}let N=dn(),T;if(r){let C=typeof r=="string"?$n(r):r;Be(b==="/"||((M=C.pathname)==null?void 0:M.startsWith(b)),`When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${b}" but pathname "${C.pathname}" was given in the \`location\` prop.`),T=C}else T=N;let x=T.pathname||"/",O=x;if(b!=="/"){let C=b.replace(/^\//,"").split("/");O="/"+x.replace(/^\//,"").split("/").slice(C.length).join("/")}let E=F0(l,{pathname:O});Xt(S||E!=null,`No routes matched location "${T.pathname}${T.search}${T.hash}" `),Xt(E==null||E[E.length-1].route.element!==void 0||E[E.length-1].route.Component!==void 0||E[E.length-1].route.lazy!==void 0,`Matched leaf route at location "${T.pathname}${T.search}${T.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);let _=P2(E&&E.map(C=>Object.assign({},C,{params:Object.assign({},g,C.params),pathname:ca([b,m.encodeLocation?m.encodeLocation(C.pathname.replace(/\?/g,"%3F").replace(/#/g,"%23")).pathname:C.pathname]),pathnameBase:C.pathnameBase==="/"?b:ca([b,m.encodeLocation?m.encodeLocation(C.pathnameBase.replace(/\?/g,"%3F").replace(/#/g,"%23")).pathname:C.pathnameBase])})),h,u,s,c);return r&&_?D.createElement(ai.Provider,{value:{location:{pathname:"/",search:"",hash:"",state:null,key:"default",...T},navigationType:"POP"}},_):_}function K2(){let l=ng(),r=q2(l)?`${l.status} ${l.statusText}`:l instanceof Error?l.message:JSON.stringify(l),u=l instanceof Error?l.stack:null,s="rgba(200,200,200, 0.5)",c={padding:"0.5rem",backgroundColor:s},m={padding:"2px 4px",backgroundColor:s},h=null;return console.error("Error handled by React Router default ErrorBoundary:",l),h=D.createElement(D.Fragment,null,D.createElement("p",null,"💿 Hey developer 👋"),D.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",D.createElement("code",{style:m},"ErrorBoundary")," or"," ",D.createElement("code",{style:m},"errorElement")," prop on your route.")),D.createElement(D.Fragment,null,D.createElement("h2",null,"Unexpected Application Error!"),D.createElement("h3",{style:{fontStyle:"italic"}},r),u?D.createElement("pre",{style:c},u):null,h)}var J2=D.createElement(K2,null),$2=class extends D.Component{constructor(l){super(l),this.state={location:l.location,revalidation:l.revalidation,error:l.error}}static getDerivedStateFromError(l){return{error:l}}static getDerivedStateFromProps(l,r){return r.location!==l.location||r.revalidation!=="idle"&&l.revalidation==="idle"?{error:l.error,location:l.location,revalidation:l.revalidation}:{error:l.error!==void 0?l.error:r.error,location:r.location,revalidation:l.revalidation||r.revalidation}}componentDidCatch(l,r){this.props.unstable_onError?this.props.unstable_onError(l,r):console.error("React Router caught the following error during render",l)}render(){return this.state.error!==void 0?D.createElement(Qt.Provider,{value:this.props.routeContext},D.createElement(qu.Provider,{value:this.state.error,children:this.props.component})):this.props.children}};function W2({routeContext:l,match:r,children:u}){let s=D.useContext(Wn);return s&&s.static&&s.staticContext&&(r.route.errorElement||r.route.ErrorBoundary)&&(s.staticContext._deepestRenderedBoundaryId=r.route.id),D.createElement(Qt.Provider,{value:l},u)}function P2(l,r=[],u=null,s=null,c=null){if(l==null){if(!u)return null;if(u.errors)l=u.matches;else if(r.length===0&&!u.initialized&&u.matches.length>0)l=u.matches;else return null}let m=l,h=u==null?void 0:u.errors;if(h!=null){let p=m.findIndex(b=>b.route.id&&(h==null?void 0:h[b.route.id])!==void 0);Be(p>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(h).join(",")}`),m=m.slice(0,Math.min(m.length,p+1))}let v=!1,g=-1;if(u)for(let p=0;p<m.length;p++){let b=m[p];if((b.route.HydrateFallback||b.route.hydrateFallbackElement)&&(g=p),b.route.id){let{loaderData:S,errors:N}=u,T=b.route.loader&&!S.hasOwnProperty(b.route.id)&&(!N||N[b.route.id]===void 0);if(b.route.lazy||T){v=!0,g>=0?m=m.slice(0,g+1):m=[m[0]];break}}}return m.reduceRight((p,b,S)=>{let N,T=!1,x=null,O=null;u&&(N=h&&b.route.id?h[b.route.id]:void 0,x=b.route.errorElement||J2,v&&(g<0&&S===0?(W0("route-fallback",!1,"No `HydrateFallback` element provided to render during initial hydration"),T=!0,O=null):g===S&&(T=!0,O=b.route.hydrateFallbackElement||null)));let E=r.concat(m.slice(0,S+1)),_=()=>{let M;return N?M=x:T?M=O:b.route.Component?M=D.createElement(b.route.Component,null):b.route.element?M=b.route.element:M=p,D.createElement(W2,{match:b,routeContext:{outlet:p,matches:E,isDataRoute:u!=null},children:M})};return u&&(b.route.ErrorBoundary||b.route.errorElement||S===0)?D.createElement($2,{location:u.location,revalidation:u.revalidation,component:x,error:N,children:_(),routeContext:{outlet:null,matches:E,isDataRoute:!0},unstable_onError:s}):_()},null)}function Yu(l){return`${l} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function I2(l){let r=D.useContext(Wn);return Be(r,Yu(l)),r}function eg(l){let r=D.useContext(Kr);return Be(r,Yu(l)),r}function tg(l){let r=D.useContext(Qt);return Be(r,Yu(l)),r}function Gu(l){let r=tg(l),u=r.matches[r.matches.length-1];return Be(u.route.id,`${l} can only be used on routes that contain a unique "id"`),u.route.id}function ag(){return Gu("useRouteId")}function ng(){var s;let l=D.useContext(qu),r=eg("useRouteError"),u=Gu("useRouteError");return l!==void 0?l:(s=r.errors)==null?void 0:s[u]}function lg(){let{router:l}=I2("useNavigate"),r=Gu("useNavigate"),u=D.useRef(!1);return J0(()=>{u.current=!0}),D.useCallback(async(c,m={})=>{Xt(u.current,K0),u.current&&(typeof c=="number"?l.navigate(c):await l.navigate(c,{fromRouteId:r,...m}))},[l,r])}var $m={};function W0(l,r,u){!r&&!$m[l]&&($m[l]=!0,Xt(!1,u))}D.memo(ig);function ig({routes:l,future:r,state:u,unstable_onError:s}){return $0(l,void 0,u,s,r)}function zu(l){Be(!1,"A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.")}function rg({basename:l="/",children:r=null,location:u,navigationType:s="POP",navigator:c,static:m=!1}){Be(!ni(),"You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");let h=l.replace(/^\/*/,"/"),v=D.useMemo(()=>({basename:h,navigator:c,static:m,future:{}}),[h,c,m]);typeof u=="string"&&(u=$n(u));let{pathname:g="/",search:p="",hash:b="",state:S=null,key:N="default"}=u,T=D.useMemo(()=>{let x=fa(g,h);return x==null?null:{location:{pathname:x,search:p,hash:b,state:S,key:N},navigationType:s}},[h,g,p,b,S,N,s]);return Xt(T!=null,`<Router basename="${h}"> is not able to match the URL "${g}${p}${b}" because it does not start with the basename, so the <Router> won't render anything.`),T==null?null:D.createElement(Vt.Provider,{value:v},D.createElement(ai.Provider,{children:r,value:T}))}function og({children:l,location:r}){return Z2(Du(l),r)}function Du(l,r=[]){let u=[];return D.Children.forEach(l,(s,c)=>{if(!D.isValidElement(s))return;let m=[...r,c];if(s.type===D.Fragment){u.push.apply(u,Du(s.props.children,m));return}Be(s.type===zu,`[${typeof s.type=="string"?s.type:s.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`),Be(!s.props.index||!s.props.children,"An index route cannot have child routes.");let h={id:s.props.id||m.join("-"),caseSensitive:s.props.caseSensitive,element:s.props.element,Component:s.props.Component,index:s.props.index,path:s.props.path,middleware:s.props.middleware,loader:s.props.loader,action:s.props.action,hydrateFallbackElement:s.props.hydrateFallbackElement,HydrateFallback:s.props.HydrateFallback,errorElement:s.props.errorElement,ErrorBoundary:s.props.ErrorBoundary,hasErrorBoundary:s.props.hasErrorBoundary===!0||s.props.ErrorBoundary!=null||s.props.errorElement!=null,shouldRevalidate:s.props.shouldRevalidate,handle:s.props.handle,lazy:s.props.lazy};s.props.children&&(h.children=Du(s.props.children,m)),u.push(h)}),u}var Lr="get",qr="application/x-www-form-urlencoded";function Jr(l){return l!=null&&typeof l.tagName=="string"}function sg(l){return Jr(l)&&l.tagName.toLowerCase()==="button"}function ug(l){return Jr(l)&&l.tagName.toLowerCase()==="form"}function cg(l){return Jr(l)&&l.tagName.toLowerCase()==="input"}function fg(l){return!!(l.metaKey||l.altKey||l.ctrlKey||l.shiftKey)}function dg(l,r){return l.button===0&&(!r||r==="_self")&&!fg(l)}var jr=null;function mg(){if(jr===null)try{new FormData(document.createElement("form"),0),jr=!1}catch{jr=!0}return jr}var pg=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function wu(l){return l!=null&&!pg.has(l)?(Xt(!1,`"${l}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${qr}"`),null):l}function hg(l,r){let u,s,c,m,h;if(ug(l)){let v=l.getAttribute("action");s=v?fa(v,r):null,u=l.getAttribute("method")||Lr,c=wu(l.getAttribute("enctype"))||qr,m=new FormData(l)}else if(sg(l)||cg(l)&&(l.type==="submit"||l.type==="image")){let v=l.form;if(v==null)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');let g=l.getAttribute("formaction")||v.getAttribute("action");if(s=g?fa(g,r):null,u=l.getAttribute("formmethod")||v.getAttribute("method")||Lr,c=wu(l.getAttribute("formenctype"))||wu(v.getAttribute("enctype"))||qr,m=new FormData(v,l),!mg()){let{name:p,type:b,value:S}=l;if(b==="image"){let N=p?`${p}.`:"";m.append(`${N}x`,"0"),m.append(`${N}y`,"0")}else p&&m.append(p,S)}}else{if(Jr(l))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');u=Lr,s=null,c=qr,h=l}return m&&c==="text/plain"&&(h=m,m=void 0),{action:s,method:u.toLowerCase(),encType:c,formData:m,body:h}}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");function Xu(l,r){if(l===!1||l===null||typeof l>"u")throw new Error(r)}function gg(l,r,u){let s=typeof l=="string"?new URL(l,typeof window>"u"?"server://singlefetch/":window.location.origin):l;return s.pathname==="/"?s.pathname=`_root.${u}`:r&&fa(s.pathname,r)==="/"?s.pathname=`${r.replace(/\/$/,"")}/_root.${u}`:s.pathname=`${s.pathname.replace(/\/$/,"")}.${u}`,s}async function vg(l,r){if(l.id in r)return r[l.id];try{let u=await import(l.module);return r[l.id]=u,u}catch(u){return console.error(`Error loading route module \`${l.module}\`, reloading page...`),console.error(u),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function yg(l){return l==null?!1:l.href==null?l.rel==="preload"&&typeof l.imageSrcSet=="string"&&typeof l.imageSizes=="string":typeof l.rel=="string"&&typeof l.href=="string"}async function bg(l,r,u){let s=await Promise.all(l.map(async c=>{let m=r.routes[c.route.id];if(m){let h=await vg(m,u);return h.links?h.links():[]}return[]}));return Eg(s.flat(1).filter(yg).filter(c=>c.rel==="stylesheet"||c.rel==="preload").map(c=>c.rel==="stylesheet"?{...c,rel:"prefetch",as:"style"}:{...c,rel:"prefetch"}))}function Wm(l,r,u,s,c,m){let h=(g,p)=>u[p]?g.route.id!==u[p].route.id:!0,v=(g,p)=>{var b;return u[p].pathname!==g.pathname||((b=u[p].route.path)==null?void 0:b.endsWith("*"))&&u[p].params["*"]!==g.params["*"]};return m==="assets"?r.filter((g,p)=>h(g,p)||v(g,p)):m==="data"?r.filter((g,p)=>{var S;let b=s.routes[g.route.id];if(!b||!b.hasLoader)return!1;if(h(g,p)||v(g,p))return!0;if(g.route.shouldRevalidate){let N=g.route.shouldRevalidate({currentUrl:new URL(c.pathname+c.search+c.hash,window.origin),currentParams:((S=u[0])==null?void 0:S.params)||{},nextUrl:new URL(l,window.origin),nextParams:g.params,defaultShouldRevalidate:!0});if(typeof N=="boolean")return N}return!0}):[]}function xg(l,r,{includeHydrateFallback:u}={}){return wg(l.map(s=>{let c=r.routes[s.route.id];if(!c)return[];let m=[c.module];return c.clientActionModule&&(m=m.concat(c.clientActionModule)),c.clientLoaderModule&&(m=m.concat(c.clientLoaderModule)),u&&c.hydrateFallbackModule&&(m=m.concat(c.hydrateFallbackModule)),c.imports&&(m=m.concat(c.imports)),m}).flat(1))}function wg(l){return[...new Set(l)]}function Sg(l){let r={},u=Object.keys(l).sort();for(let s of u)r[s]=l[s];return r}function Eg(l,r){let u=new Set;return new Set(r),l.reduce((s,c)=>{let m=JSON.stringify(Sg(c));return u.has(m)||(u.add(m),s.push({key:m,link:c})),s},[])}function P0(){let l=D.useContext(Wn);return Xu(l,"You must render this element inside a <DataRouterContext.Provider> element"),l}function jg(){let l=D.useContext(Kr);return Xu(l,"You must render this element inside a <DataRouterStateContext.Provider> element"),l}var Vu=D.createContext(void 0);Vu.displayName="FrameworkContext";function I0(){let l=D.useContext(Vu);return Xu(l,"You must render this element inside a <HydratedRouter> element"),l}function Tg(l,r){let u=D.useContext(Vu),[s,c]=D.useState(!1),[m,h]=D.useState(!1),{onFocus:v,onBlur:g,onMouseEnter:p,onMouseLeave:b,onTouchStart:S}=r,N=D.useRef(null);D.useEffect(()=>{if(l==="render"&&h(!0),l==="viewport"){let O=_=>{_.forEach(M=>{h(M.isIntersecting)})},E=new IntersectionObserver(O,{threshold:.5});return N.current&&E.observe(N.current),()=>{E.disconnect()}}},[l]),D.useEffect(()=>{if(s){let O=setTimeout(()=>{h(!0)},100);return()=>{clearTimeout(O)}}},[s]);let T=()=>{c(!0)},x=()=>{c(!1),h(!1)};return u?l!=="intent"?[m,N,{}]:[m,N,{onFocus:Pl(v,T),onBlur:Pl(g,x),onMouseEnter:Pl(p,T),onMouseLeave:Pl(b,x),onTouchStart:Pl(S,T)}]:[!1,N,{}]}function Pl(l,r){return u=>{l&&l(u),u.defaultPrevented||r(u)}}function Og({page:l,...r}){let{router:u}=P0(),s=D.useMemo(()=>F0(u.routes,l,u.basename),[u.routes,l,u.basename]);return s?D.createElement(Ag,{page:l,matches:s,...r}):null}function Ng(l){let{manifest:r,routeModules:u}=I0(),[s,c]=D.useState([]);return D.useEffect(()=>{let m=!1;return bg(l,r,u).then(h=>{m||c(h)}),()=>{m=!0}},[l,r,u]),s}function Ag({page:l,matches:r,...u}){let s=dn(),{manifest:c,routeModules:m}=I0(),{basename:h}=P0(),{loaderData:v,matches:g}=jg(),p=D.useMemo(()=>Wm(l,r,g,c,s,"data"),[l,r,g,c,s]),b=D.useMemo(()=>Wm(l,r,g,c,s,"assets"),[l,r,g,c,s]),S=D.useMemo(()=>{if(l===s.pathname+s.search+s.hash)return[];let x=new Set,O=!1;if(r.forEach(_=>{var C;let M=c.routes[_.route.id];!M||!M.hasLoader||(!p.some(Q=>Q.route.id===_.route.id)&&_.route.id in v&&((C=m[_.route.id])!=null&&C.shouldRevalidate)||M.hasClientLoader?O=!0:x.add(_.route.id))}),x.size===0)return[];let E=gg(l,h,"data");return O&&x.size>0&&E.searchParams.set("_routes",r.filter(_=>x.has(_.route.id)).map(_=>_.route.id).join(",")),[E.pathname+E.search]},[h,v,s,c,p,r,l,m]),N=D.useMemo(()=>xg(b,c),[b,c]),T=Ng(b);return D.createElement(D.Fragment,null,S.map(x=>D.createElement("link",{key:x,rel:"prefetch",as:"fetch",href:x,...u})),N.map(x=>D.createElement("link",{key:x,rel:"modulepreload",href:x,...u})),T.map(({key:x,link:O})=>D.createElement("link",{key:x,nonce:u.nonce,...O})))}function Rg(...l){return r=>{l.forEach(u=>{typeof u=="function"?u(r):u!=null&&(u.current=r)})}}var ep=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";try{ep&&(window.__reactRouterVersion="7.9.5")}catch{}function Cg({basename:l,children:r,window:u}){let s=D.useRef();s.current==null&&(s.current=v2({window:u,v5Compat:!0}));let c=s.current,[m,h]=D.useState({action:c.action,location:c.location}),v=D.useCallback(g=>{D.startTransition(()=>h(g))},[h]);return D.useLayoutEffect(()=>c.listen(v),[c,v]),D.createElement(rg,{basename:l,children:r,location:m.location,navigationType:m.action,navigator:c})}var tp=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,ap=D.forwardRef(function({onClick:r,discover:u="render",prefetch:s="none",relative:c,reloadDocument:m,replace:h,state:v,target:g,to:p,preventScrollReset:b,viewTransition:S,...N},T){let{basename:x}=D.useContext(Vt),O=typeof p=="string"&&tp.test(p),E,_=!1;if(typeof p=="string"&&O&&(E=p,ep))try{let Y=new URL(window.location.href),Z=p.startsWith("//")?new URL(Y.protocol+p):new URL(p),W=fa(Z.pathname,x);Z.origin===Y.origin&&W!=null?p=W+Z.search+Z.hash:_=!0}catch{Xt(!1,`<Link to="${p}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}let M=X2(p,{relative:c}),[C,Q,X]=Tg(s,N),$=Mg(p,{replace:h,state:v,target:g,preventScrollReset:b,relative:c,viewTransition:S});function J(Y){r&&r(Y),Y.defaultPrevented||$(Y)}let ie=D.createElement("a",{...N,...X,href:E||M,onClick:_||m?r:J,ref:Rg(T,Q),target:g,"data-discover":!O&&u==="render"?"true":void 0});return C&&!O?D.createElement(D.Fragment,null,ie,D.createElement(Og,{page:M})):ie});ap.displayName="Link";var _g=D.forwardRef(function({"aria-current":r="page",caseSensitive:u=!1,className:s="",end:c=!1,style:m,to:h,viewTransition:v,children:g,...p},b){let S=li(h,{relative:p.relative}),N=dn(),T=D.useContext(Kr),{navigator:x,basename:O}=D.useContext(Vt),E=T!=null&&Lg(S)&&v===!0,_=x.encodeLocation?x.encodeLocation(S).pathname:S.pathname,M=N.pathname,C=T&&T.navigation&&T.navigation.location?T.navigation.location.pathname:null;u||(M=M.toLowerCase(),C=C?C.toLowerCase():null,_=_.toLowerCase()),C&&O&&(C=fa(C,O)||C);const Q=_!=="/"&&_.endsWith("/")?_.length-1:_.length;let X=M===_||!c&&M.startsWith(_)&&M.charAt(Q)==="/",$=C!=null&&(C===_||!c&&C.startsWith(_)&&C.charAt(_.length)==="/"),J={isActive:X,isPending:$,isTransitioning:E},ie=X?r:void 0,Y;typeof s=="function"?Y=s(J):Y=[s,X?"active":null,$?"pending":null,E?"transitioning":null].filter(Boolean).join(" ");let Z=typeof m=="function"?m(J):m;return D.createElement(ap,{...p,"aria-current":ie,className:Y,ref:b,style:Z,to:h,viewTransition:v},typeof g=="function"?g(J):g)});_g.displayName="NavLink";var zg=D.forwardRef(({discover:l="render",fetcherKey:r,navigate:u,reloadDocument:s,replace:c,state:m,method:h=Lr,action:v,onSubmit:g,relative:p,preventScrollReset:b,viewTransition:S,...N},T)=>{let x=Ug(),O=Hg(v,{relative:p}),E=h.toLowerCase()==="get"?"get":"post",_=typeof v=="string"&&tp.test(v),M=C=>{if(g&&g(C),C.defaultPrevented)return;C.preventDefault();let Q=C.nativeEvent.submitter,X=(Q==null?void 0:Q.getAttribute("formmethod"))||h;x(Q||C.currentTarget,{fetcherKey:r,method:X,navigate:u,replace:c,state:m,relative:p,preventScrollReset:b,viewTransition:S})};return D.createElement("form",{ref:T,method:E,action:O,onSubmit:s?g:M,...N,"data-discover":!_&&l==="render"?"true":void 0})});zg.displayName="Form";function Dg(l){return`${l} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function np(l){let r=D.useContext(Wn);return Be(r,Dg(l)),r}function Mg(l,{target:r,replace:u,state:s,preventScrollReset:c,relative:m,viewTransition:h}={}){let v=Fu(),g=dn(),p=li(l,{relative:m});return D.useCallback(b=>{if(dg(b,r)){b.preventDefault();let S=u!==void 0?u:ti(g)===ti(p);v(l,{replace:S,state:s,preventScrollReset:c,relative:m,viewTransition:h})}},[g,v,p,u,s,r,l,c,m,h])}var kg=0,Bg=()=>`__${String(++kg)}__`;function Ug(){let{router:l}=np("useSubmit"),{basename:r}=D.useContext(Vt),u=ag();return D.useCallback(async(s,c={})=>{let{action:m,method:h,encType:v,formData:g,body:p}=hg(s,r);if(c.navigate===!1){let b=c.fetcherKey||Bg();await l.fetch(b,u,c.action||m,{preventScrollReset:c.preventScrollReset,formData:g,body:p,formMethod:c.method||h,formEncType:c.encType||v,flushSync:c.flushSync})}else await l.navigate(c.action||m,{preventScrollReset:c.preventScrollReset,formData:g,body:p,formMethod:c.method||h,formEncType:c.encType||v,replace:c.replace,state:c.state,fromRouteId:u,flushSync:c.flushSync,viewTransition:c.viewTransition})},[l,r,u])}function Hg(l,{relative:r}={}){let{basename:u}=D.useContext(Vt),s=D.useContext(Qt);Be(s,"useFormAction must be used inside a RouteContext");let[c]=s.matches.slice(-1),m={...li(l||".",{relative:r})},h=dn();if(l==null){m.search=h.search;let v=new URLSearchParams(m.search),g=v.getAll("index");if(g.some(b=>b==="")){v.delete("index"),g.filter(S=>S).forEach(S=>v.append("index",S));let b=v.toString();m.search=b?`?${b}`:""}}return(!l||l===".")&&c.route.index&&(m.search=m.search?m.search.replace(/^\?/,"?index&"):"?index"),u!=="/"&&(m.pathname=m.pathname==="/"?u:ca([u,m.pathname])),ti(m)}function Lg(l,{relative:r}={}){let u=D.useContext(Z0);Be(u!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:s}=np("useViewTransitionState"),c=li(l,{relative:r});if(!u.isTransitioning)return!1;let m=fa(u.currentLocation.pathname,s)||u.currentLocation.pathname,h=fa(u.nextLocation.pathname,s)||u.nextLocation.pathname;return Xr(c.pathname,h)!=null||Xr(c.pathname,m)!=null}var De={},Tr={},Or={},Nr={},Su,Pm;function qg(){if(Pm)return Su;Pm=1;var l="Expected a function",r=NaN,u="[object Symbol]",s=/^\s+|\s+$/g,c=/^[-+]0x[0-9a-f]+$/i,m=/^0b[01]+$/i,h=/^0o[0-7]+$/i,v=parseInt,g=typeof Er=="object"&&Er&&Er.Object===Object&&Er,p=typeof self=="object"&&self&&self.Object===Object&&self,b=g||p||Function("return this")(),S=Object.prototype,N=S.toString,T=Math.max,x=Math.min,O=function(){return b.Date.now()};function E($,J,ie){var Y,Z,W,L,ee,P,Se=0,K=!1,oe=!1,te=!0;if(typeof $!="function")throw new TypeError(l);J=X(J)||0,M(ie)&&(K=!!ie.leading,oe="maxWait"in ie,W=oe?T(X(ie.maxWait)||0,J):W,te="trailing"in ie?!!ie.trailing:te);function be(ue){var Ee=Y,je=Z;return Y=Z=void 0,Se=ue,L=$.apply(je,Ee),L}function j(ue){return Se=ue,ee=setTimeout(ne,J),K?be(ue):L}function G(ue){var Ee=ue-P,je=ue-Se,et=J-Ee;return oe?x(et,W-je):et}function ae(ue){var Ee=ue-P,je=ue-Se;return P===void 0||Ee>=J||Ee<0||oe&&je>=W}function ne(){var ue=O();if(ae(ue))return I(ue);ee=setTimeout(ne,G(ue))}function I(ue){return ee=void 0,te&&Y?be(ue):(Y=Z=void 0,L)}function pe(){ee!==void 0&&clearTimeout(ee),Se=0,Y=P=Z=ee=void 0}function fe(){return ee===void 0?L:I(O())}function ze(){var ue=O(),Ee=ae(ue);if(Y=arguments,Z=this,P=ue,Ee){if(ee===void 0)return j(P);if(oe)return ee=setTimeout(ne,J),be(P)}return ee===void 0&&(ee=setTimeout(ne,J)),L}return ze.cancel=pe,ze.flush=fe,ze}function _($,J,ie){var Y=!0,Z=!0;if(typeof $!="function")throw new TypeError(l);return M(ie)&&(Y="leading"in ie?!!ie.leading:Y,Z="trailing"in ie?!!ie.trailing:Z),E($,J,{leading:Y,maxWait:J,trailing:Z})}function M($){var J=typeof $;return!!$&&(J=="object"||J=="function")}function C($){return!!$&&typeof $=="object"}function Q($){return typeof $=="symbol"||C($)&&N.call($)==u}function X($){if(typeof $=="number")return $;if(Q($))return r;if(M($)){var J=typeof $.valueOf=="function"?$.valueOf():$;$=M(J)?J+"":J}if(typeof $!="string")return $===0?$:+$;$=$.replace(s,"");var ie=m.test($);return ie||h.test($)?v($.slice(2),ie?2:8):c.test($)?r:+$}return Su=_,Su}var Il={},Im;function Qu(){if(Im)return Il;Im=1,Object.defineProperty(Il,"__esModule",{value:!0}),Il.addPassiveEventListener=function(u,s,c){var m=c.name;m||(m=s,console.warn("Listener must be a named function.")),l.has(s)||l.set(s,new Set);var h=l.get(s);if(!h.has(m)){var v=function(){var g=!1;try{var p=Object.defineProperty({},"passive",{get:function(){g=!0}});window.addEventListener("test",null,p)}catch{}return g}();u.addEventListener(s,c,v?{passive:!0}:!1),h.add(m)}},Il.removePassiveEventListener=function(u,s,c){u.removeEventListener(s,c),l.get(s).delete(c.name||s)};var l=new Map;return Il}var e0;function Zu(){if(e0)return Nr;e0=1,Object.defineProperty(Nr,"__esModule",{value:!0});var l=qg(),r=s(l),u=Qu();function s(h){return h&&h.__esModule?h:{default:h}}var c=function(v){var g=arguments.length>1&&arguments[1]!==void 0?arguments[1]:66;return(0,r.default)(v,g)},m={spyCallbacks:[],spySetState:[],scrollSpyContainers:[],mount:function(v,g){if(v){var p=c(function(b){m.scrollHandler(v)},g);return m.scrollSpyContainers.push(v),(0,u.addPassiveEventListener)(v,"scroll",p),function(){(0,u.removePassiveEventListener)(v,"scroll",p),m.scrollSpyContainers.splice(m.scrollSpyContainers.indexOf(v),1)}}return function(){}},isMounted:function(v){return m.scrollSpyContainers.indexOf(v)!==-1},currentPositionX:function(v){if(v===document){var g=window.scrollY!==void 0,p=(document.compatMode||"")==="CSS1Compat";return g?window.scrollX:p?document.documentElement.scrollLeft:document.body.scrollLeft}else return v.scrollLeft},currentPositionY:function(v){if(v===document){var g=window.scrollX!==void 0,p=(document.compatMode||"")==="CSS1Compat";return g?window.scrollY:p?document.documentElement.scrollTop:document.body.scrollTop}else return v.scrollTop},scrollHandler:function(v){var g=m.scrollSpyContainers[m.scrollSpyContainers.indexOf(v)].spyCallbacks||[];g.forEach(function(p){return p(m.currentPositionX(v),m.currentPositionY(v))})},addStateHandler:function(v){m.spySetState.push(v)},addSpyHandler:function(v,g){var p=m.scrollSpyContainers[m.scrollSpyContainers.indexOf(g)];p.spyCallbacks||(p.spyCallbacks=[]),p.spyCallbacks.push(v)},updateStates:function(){m.spySetState.forEach(function(v){return v()})},unmount:function(v,g){m.scrollSpyContainers.forEach(function(p){return p.spyCallbacks&&p.spyCallbacks.length&&p.spyCallbacks.indexOf(g)>-1&&p.spyCallbacks.splice(p.spyCallbacks.indexOf(g),1)}),m.spySetState&&m.spySetState.length&&m.spySetState.indexOf(v)>-1&&m.spySetState.splice(m.spySetState.indexOf(v),1),document.removeEventListener("scroll",m.scrollHandler)},update:function(){return m.scrollSpyContainers.forEach(function(v){return m.scrollHandler(v)})}};return Nr.default=m,Nr}var Ar={},Rr={},t0;function $r(){if(t0)return Rr;t0=1,Object.defineProperty(Rr,"__esModule",{value:!0});var l=function(v,g){var p=v.indexOf("#")===0?v.substring(1):v,b=p?"#"+p:"",S=window&&window.location,N=b?S.pathname+S.search+b:S.pathname+S.search;g?history.pushState(history.state,"",N):history.replaceState(history.state,"",N)},r=function(){return window.location.hash.replace(/^#/,"")},u=function(v){return function(g){return v.contains?v!=g&&v.contains(g):!!(v.compareDocumentPosition(g)&16)}},s=function(v){return getComputedStyle(v).position!=="static"},c=function(v,g){for(var p=v.offsetTop,b=v.offsetParent;b&&!g(b);)p+=b.offsetTop,b=b.offsetParent;return{offsetTop:p,offsetParent:b}},m=function(v,g,p){if(p)return v===document?g.getBoundingClientRect().left+(window.scrollX||window.pageXOffset):getComputedStyle(v).position!=="static"?g.offsetLeft:g.offsetLeft-v.offsetLeft;if(v===document)return g.getBoundingClientRect().top+(window.scrollY||window.pageYOffset);if(s(v)){if(g.offsetParent!==v){var b=function(E){return E===v||E===document},S=c(g,b),N=S.offsetTop,T=S.offsetParent;if(T!==v)throw new Error("Seems containerElement is not an ancestor of the Element");return N}return g.offsetTop}if(g.offsetParent===v.offsetParent)return g.offsetTop-v.offsetTop;var x=function(E){return E===document};return c(g,x).offsetTop-c(v,x).offsetTop};return Rr.default={updateHash:l,getHash:r,filterElementInContainer:u,scrollOffset:m},Rr}var Cr={},_r={},a0;function Fg(){return a0||(a0=1,Object.defineProperty(_r,"__esModule",{value:!0}),_r.default={defaultEasing:function(r){return r<.5?Math.pow(r*2,2)/2:1-Math.pow((1-r)*2,2)/2},linear:function(r){return r},easeInQuad:function(r){return r*r},easeOutQuad:function(r){return r*(2-r)},easeInOutQuad:function(r){return r<.5?2*r*r:-1+(4-2*r)*r},easeInCubic:function(r){return r*r*r},easeOutCubic:function(r){return--r*r*r+1},easeInOutCubic:function(r){return r<.5?4*r*r*r:(r-1)*(2*r-2)*(2*r-2)+1},easeInQuart:function(r){return r*r*r*r},easeOutQuart:function(r){return 1- --r*r*r*r},easeInOutQuart:function(r){return r<.5?8*r*r*r*r:1-8*--r*r*r*r},easeInQuint:function(r){return r*r*r*r*r},easeOutQuint:function(r){return 1+--r*r*r*r*r},easeInOutQuint:function(r){return r<.5?16*r*r*r*r*r:1+16*--r*r*r*r*r}}),_r}var zr={},n0;function Yg(){if(n0)return zr;n0=1,Object.defineProperty(zr,"__esModule",{value:!0});var l=Qu(),r=["mousedown","wheel","touchmove","keydown"];return zr.default={subscribe:function(s){return typeof document<"u"&&r.forEach(function(c){return(0,l.addPassiveEventListener)(document,c,s)})}},zr}var Dr={},l0;function Ku(){if(l0)return Dr;l0=1,Object.defineProperty(Dr,"__esModule",{value:!0});var l={registered:{},scrollEvent:{register:function(u,s){l.registered[u]=s},remove:function(u){l.registered[u]=null}}};return Dr.default=l,Dr}var i0;function lp(){if(i0)return Cr;i0=1,Object.defineProperty(Cr,"__esModule",{value:!0});var l=Object.assign||function(Z){for(var W=1;W<arguments.length;W++){var L=arguments[W];for(var ee in L)Object.prototype.hasOwnProperty.call(L,ee)&&(Z[ee]=L[ee])}return Z},r=$r();g(r);var u=Fg(),s=g(u),c=Yg(),m=g(c),h=Ku(),v=g(h);function g(Z){return Z&&Z.__esModule?Z:{default:Z}}var p=function(W){return s.default[W.smooth]||s.default.defaultEasing},b=function(W){return typeof W=="function"?W:function(){return W}},S=function(){if(typeof window<"u")return window.requestAnimationFrame||window.webkitRequestAnimationFrame},N=function(){return S()||function(Z,W,L){window.setTimeout(Z,L||1e3/60,new Date().getTime())}}(),T=function(){return{currentPosition:0,startPosition:0,targetPosition:0,progress:0,duration:0,cancel:!1,target:null,containerElement:null,to:null,start:null,delta:null,percent:null,delayTimeout:null}},x=function(W){var L=W.data.containerElement;if(L&&L!==document&&L!==document.body)return L.scrollLeft;var ee=window.pageXOffset!==void 0,P=(document.compatMode||"")==="CSS1Compat";return ee?window.pageXOffset:P?document.documentElement.scrollLeft:document.body.scrollLeft},O=function(W){var L=W.data.containerElement;if(L&&L!==document&&L!==document.body)return L.scrollTop;var ee=window.pageXOffset!==void 0,P=(document.compatMode||"")==="CSS1Compat";return ee?window.pageYOffset:P?document.documentElement.scrollTop:document.body.scrollTop},E=function(W){var L=W.data.containerElement;if(L&&L!==document&&L!==document.body)return L.scrollWidth-L.offsetWidth;var ee=document.body,P=document.documentElement;return Math.max(ee.scrollWidth,ee.offsetWidth,P.clientWidth,P.scrollWidth,P.offsetWidth)},_=function(W){var L=W.data.containerElement;if(L&&L!==document&&L!==document.body)return L.scrollHeight-L.offsetHeight;var ee=document.body,P=document.documentElement;return Math.max(ee.scrollHeight,ee.offsetHeight,P.clientHeight,P.scrollHeight,P.offsetHeight)},M=function Z(W,L,ee){var P=L.data;if(!L.ignoreCancelEvents&&P.cancel){v.default.registered.end&&v.default.registered.end(P.to,P.target,P.currentPositionY);return}if(P.delta=Math.round(P.targetPosition-P.startPosition),P.start===null&&(P.start=ee),P.progress=ee-P.start,P.percent=P.progress>=P.duration?1:W(P.progress/P.duration),P.currentPosition=P.startPosition+Math.ceil(P.delta*P.percent),P.containerElement&&P.containerElement!==document&&P.containerElement!==document.body?L.horizontal?P.containerElement.scrollLeft=P.currentPosition:P.containerElement.scrollTop=P.currentPosition:L.horizontal?window.scrollTo(P.currentPosition,0):window.scrollTo(0,P.currentPosition),P.percent<1){var Se=Z.bind(null,W,L);N.call(window,Se);return}v.default.registered.end&&v.default.registered.end(P.to,P.target,P.currentPosition)},C=function(W){W.data.containerElement=W?W.containerId?document.getElementById(W.containerId):W.container&&W.container.nodeType?W.container:document:null},Q=function(W,L,ee,P){L.data=L.data||T(),window.clearTimeout(L.data.delayTimeout);var Se=function(){L.data.cancel=!0};if(m.default.subscribe(Se),C(L),L.data.start=null,L.data.cancel=!1,L.data.startPosition=L.horizontal?x(L):O(L),L.data.targetPosition=L.absolute?W:W+L.data.startPosition,L.data.startPosition===L.data.targetPosition){v.default.registered.end&&v.default.registered.end(L.data.to,L.data.target,L.data.currentPosition);return}L.data.delta=Math.round(L.data.targetPosition-L.data.startPosition),L.data.duration=b(L.duration)(L.data.delta),L.data.duration=isNaN(parseFloat(L.data.duration))?1e3:parseFloat(L.data.duration),L.data.to=ee,L.data.target=P;var K=p(L),oe=M.bind(null,K,L);if(L&&L.delay>0){L.data.delayTimeout=window.setTimeout(function(){v.default.registered.begin&&v.default.registered.begin(L.data.to,L.data.target),N.call(window,oe)},L.delay);return}v.default.registered.begin&&v.default.registered.begin(L.data.to,L.data.target),N.call(window,oe)},X=function(W){return W=l({},W),W.data=W.data||T(),W.absolute=!0,W},$=function(W){Q(0,X(W))},J=function(W,L){Q(W,X(L))},ie=function(W){W=X(W),C(W),Q(W.horizontal?E(W):_(W),W)},Y=function(W,L){L=X(L),C(L);var ee=L.horizontal?x(L):O(L);Q(W+ee,L)};return Cr.default={animateTopScroll:Q,getAnimationType:p,scrollToTop:$,scrollToBottom:ie,scrollTo:J,scrollMore:Y},Cr}var r0;function Wr(){if(r0)return Ar;r0=1,Object.defineProperty(Ar,"__esModule",{value:!0});var l=Object.assign||function(b){for(var S=1;S<arguments.length;S++){var N=arguments[S];for(var T in N)Object.prototype.hasOwnProperty.call(N,T)&&(b[T]=N[T])}return b},r=$r(),u=v(r),s=lp(),c=v(s),m=Ku(),h=v(m);function v(b){return b&&b.__esModule?b:{default:b}}var g={},p=void 0;return Ar.default={unmount:function(){g={}},register:function(S,N){g[S]=N},unregister:function(S){delete g[S]},get:function(S){return g[S]||document.getElementById(S)||document.getElementsByName(S)[0]||document.getElementsByClassName(S)[0]},setActiveLink:function(S){return p=S},getActiveLink:function(){return p},scrollTo:function(S,N){var T=this.get(S);if(!T){console.warn("target Element not found");return}N=l({},N,{absolute:!1});var x=N.containerId,O=N.container,E=void 0;x?E=document.getElementById(x):O&&O.nodeType?E=O:E=document,N.absolute=!0;var _=N.horizontal,M=u.default.scrollOffset(E,T,_)+(N.offset||0);if(!N.smooth){h.default.registered.begin&&h.default.registered.begin(S,T),E===document?N.horizontal?window.scrollTo(M,0):window.scrollTo(0,M):E.scrollTop=M,h.default.registered.end&&h.default.registered.end(S,T);return}c.default.animateTopScroll(M,N,S,T)}},Ar}var Eu={exports:{}},ju,o0;function Gg(){if(o0)return ju;o0=1;var l="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";return ju=l,ju}var Tu,s0;function Xg(){if(s0)return Tu;s0=1;var l=Gg();function r(){}function u(){}return u.resetWarningCache=r,Tu=function(){function s(h,v,g,p,b,S){if(S!==l){var N=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw N.name="Invariant Violation",N}}s.isRequired=s;function c(){return s}var m={array:s,bigint:s,bool:s,func:s,number:s,object:s,string:s,symbol:s,any:s,arrayOf:c,element:s,elementType:s,instanceOf:c,node:s,objectOf:c,oneOf:c,oneOfType:c,shape:c,exact:c,checkPropTypes:u,resetWarningCache:r};return m.PropTypes=m,m},Tu}var u0;function Pr(){return u0||(u0=1,Eu.exports=Xg()()),Eu.exports}var Mr={},c0;function ip(){if(c0)return Mr;c0=1,Object.defineProperty(Mr,"__esModule",{value:!0}),Qu();var l=$r(),r=u(l);function u(c){return c&&c.__esModule?c:{default:c}}var s={mountFlag:!1,initialized:!1,scroller:null,containers:{},mount:function(m){this.scroller=m,this.handleHashChange=this.handleHashChange.bind(this),window.addEventListener("hashchange",this.handleHashChange),this.initStateFromHash(),this.mountFlag=!0},mapContainer:function(m,h){this.containers[m]=h},isMounted:function(){return this.mountFlag},isInitialized:function(){return this.initialized},initStateFromHash:function(){var m=this,h=this.getHash();h?window.setTimeout(function(){m.scrollTo(h,!0),m.initialized=!0},10):this.initialized=!0},scrollTo:function(m,h){var v=this.scroller,g=v.get(m);if(g&&(h||m!==v.getActiveLink())){var p=this.containers[m]||document;v.scrollTo(m,{container:p})}},getHash:function(){return r.default.getHash()},changeHash:function(m,h){this.isInitialized()&&r.default.getHash()!==m&&r.default.updateHash(m,h)},handleHashChange:function(){this.scrollTo(this.getHash())},unmount:function(){this.scroller=null,this.containers=null,window.removeEventListener("hashchange",this.handleHashChange)}};return Mr.default=s,Mr}var f0;function Ju(){if(f0)return Or;f0=1,Object.defineProperty(Or,"__esModule",{value:!0});var l=Object.assign||function(_){for(var M=1;M<arguments.length;M++){var C=arguments[M];for(var Q in C)Object.prototype.hasOwnProperty.call(C,Q)&&(_[Q]=C[Q])}return _},r=function(){function _(M,C){for(var Q=0;Q<C.length;Q++){var X=C[Q];X.enumerable=X.enumerable||!1,X.configurable=!0,"value"in X&&(X.writable=!0),Object.defineProperty(M,X.key,X)}}return function(M,C,Q){return C&&_(M.prototype,C),Q&&_(M,Q),M}}(),u=da(),s=N(u),c=Zu(),m=N(c),h=Wr(),v=N(h),g=Pr(),p=N(g),b=ip(),S=N(b);function N(_){return _&&_.__esModule?_:{default:_}}function T(_,M){if(!(_ instanceof M))throw new TypeError("Cannot call a class as a function")}function x(_,M){if(!_)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return M&&(typeof M=="object"||typeof M=="function")?M:_}function O(_,M){if(typeof M!="function"&&M!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof M);_.prototype=Object.create(M&&M.prototype,{constructor:{value:_,enumerable:!1,writable:!0,configurable:!0}}),M&&(Object.setPrototypeOf?Object.setPrototypeOf(_,M):_.__proto__=M)}var E={to:p.default.string.isRequired,containerId:p.default.string,container:p.default.object,activeClass:p.default.string,activeStyle:p.default.object,spy:p.default.bool,horizontal:p.default.bool,smooth:p.default.oneOfType([p.default.bool,p.default.string]),offset:p.default.number,delay:p.default.number,isDynamic:p.default.bool,onClick:p.default.func,duration:p.default.oneOfType([p.default.number,p.default.func]),absolute:p.default.bool,onSetActive:p.default.func,onSetInactive:p.default.func,ignoreCancelEvents:p.default.bool,hashSpy:p.default.bool,saveHashHistory:p.default.bool,spyThrottle:p.default.number};return Or.default=function(_,M){var C=M||v.default,Q=function($){O(J,$);function J(ie){T(this,J);var Y=x(this,(J.__proto__||Object.getPrototypeOf(J)).call(this,ie));return X.call(Y),Y.state={active:!1},Y.beforeUnmountCallbacks=[],Y}return r(J,[{key:"getScrollSpyContainer",value:function(){var Y=this.props.containerId,Z=this.props.container;return Y&&!Z?document.getElementById(Y):Z&&Z.nodeType?Z:document}},{key:"componentDidMount",value:function(){if(this.props.spy||this.props.hashSpy){var Y=this.getScrollSpyContainer();if(!m.default.isMounted(Y)){var Z=m.default.mount(Y,this.props.spyThrottle);this.beforeUnmountCallbacks.push(Z)}this.props.hashSpy&&(S.default.isMounted()||S.default.mount(C),S.default.mapContainer(this.props.to,Y)),m.default.addSpyHandler(this.spyHandler,Y),this.setState({container:Y})}}},{key:"componentWillUnmount",value:function(){m.default.unmount(this.stateHandler,this.spyHandler),this.beforeUnmountCallbacks.forEach(function(Y){return Y()})}},{key:"render",value:function(){var Y="";this.state&&this.state.active?Y=((this.props.className||"")+" "+(this.props.activeClass||"active")).trim():Y=this.props.className;var Z={};this.state&&this.state.active?Z=l({},this.props.style,this.props.activeStyle):Z=l({},this.props.style);var W=l({},this.props);for(var L in E)W.hasOwnProperty(L)&&delete W[L];return W.className=Y,W.style=Z,W.onClick=this.handleClick,s.default.createElement(_,W)}}]),J}(s.default.PureComponent),X=function(){var J=this;this.scrollTo=function(ie,Y){C.scrollTo(ie,l({},J.state,Y))},this.handleClick=function(ie){J.props.onClick&&J.props.onClick(ie),ie.stopPropagation&&ie.stopPropagation(),ie.preventDefault&&ie.preventDefault(),J.scrollTo(J.props.to,J.props)},this.spyHandler=function(ie,Y){var Z=J.getScrollSpyContainer();if(!(S.default.isMounted()&&!S.default.isInitialized())){var W=J.props.horizontal,L=J.props.to,ee=null,P=void 0,Se=void 0;if(W){var K=0,oe=0,te=0;if(Z.getBoundingClientRect){var be=Z.getBoundingClientRect();te=be.left}if(!ee||J.props.isDynamic){if(ee=C.get(L),!ee)return;var j=ee.getBoundingClientRect();K=j.left-te+ie,oe=K+j.width}var G=ie-J.props.offset;P=G>=Math.floor(K)&&G<Math.floor(oe),Se=G<Math.floor(K)||G>=Math.floor(oe)}else{var ae=0,ne=0,I=0;if(Z.getBoundingClientRect){var pe=Z.getBoundingClientRect();I=pe.top}if(!ee||J.props.isDynamic){if(ee=C.get(L),!ee)return;var fe=ee.getBoundingClientRect();ae=fe.top-I+Y,ne=ae+fe.height}var ze=Y-J.props.offset;P=ze>=Math.floor(ae)&&ze<Math.floor(ne),Se=ze<Math.floor(ae)||ze>=Math.floor(ne)}var ue=C.getActiveLink();if(Se){if(L===ue&&C.setActiveLink(void 0),J.props.hashSpy&&S.default.getHash()===L){var Ee=J.props.saveHashHistory,je=Ee===void 0?!1:Ee;S.default.changeHash("",je)}J.props.spy&&J.state.active&&(J.setState({active:!1}),J.props.onSetInactive&&J.props.onSetInactive(L,ee))}if(P&&(ue!==L||J.state.active===!1)){C.setActiveLink(L);var et=J.props.saveHashHistory,Ha=et===void 0?!1:et;J.props.hashSpy&&S.default.changeHash(L,Ha),J.props.spy&&(J.setState({active:!0}),J.props.onSetActive&&J.props.onSetActive(L,ee))}}}};return Q.propTypes=E,Q.defaultProps={offset:0},Q},Or}var d0;function Vg(){if(d0)return Tr;d0=1,Object.defineProperty(Tr,"__esModule",{value:!0});var l=da(),r=c(l),u=Ju(),s=c(u);function c(p){return p&&p.__esModule?p:{default:p}}function m(p,b){if(!(p instanceof b))throw new TypeError("Cannot call a class as a function")}function h(p,b){if(!p)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return b&&(typeof b=="object"||typeof b=="function")?b:p}function v(p,b){if(typeof b!="function"&&b!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof b);p.prototype=Object.create(b&&b.prototype,{constructor:{value:p,enumerable:!1,writable:!0,configurable:!0}}),b&&(Object.setPrototypeOf?Object.setPrototypeOf(p,b):p.__proto__=b)}var g=function(p){v(b,p);function b(){var S,N,T,x;m(this,b);for(var O=arguments.length,E=Array(O),_=0;_<O;_++)E[_]=arguments[_];return x=(N=(T=h(this,(S=b.__proto__||Object.getPrototypeOf(b)).call.apply(S,[this].concat(E))),T),T.render=function(){return r.default.createElement("a",T.props,T.props.children)},N),h(T,x)}return b}(r.default.Component);return Tr.default=(0,s.default)(g),Tr}var kr={},m0;function Qg(){if(m0)return kr;m0=1,Object.defineProperty(kr,"__esModule",{value:!0});var l=function(){function b(S,N){for(var T=0;T<N.length;T++){var x=N[T];x.enumerable=x.enumerable||!1,x.configurable=!0,"value"in x&&(x.writable=!0),Object.defineProperty(S,x.key,x)}}return function(S,N,T){return N&&b(S.prototype,N),T&&b(S,T),S}}(),r=da(),u=m(r),s=Ju(),c=m(s);function m(b){return b&&b.__esModule?b:{default:b}}function h(b,S){if(!(b instanceof S))throw new TypeError("Cannot call a class as a function")}function v(b,S){if(!b)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return S&&(typeof S=="object"||typeof S=="function")?S:b}function g(b,S){if(typeof S!="function"&&S!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof S);b.prototype=Object.create(S&&S.prototype,{constructor:{value:b,enumerable:!1,writable:!0,configurable:!0}}),S&&(Object.setPrototypeOf?Object.setPrototypeOf(b,S):b.__proto__=S)}var p=function(b){g(S,b);function S(){return h(this,S),v(this,(S.__proto__||Object.getPrototypeOf(S)).apply(this,arguments))}return l(S,[{key:"render",value:function(){return u.default.createElement("button",this.props,this.props.children)}}]),S}(u.default.Component);return kr.default=(0,c.default)(p),kr}var Br={},Ur={},p0;function rp(){if(p0)return Ur;p0=1,Object.defineProperty(Ur,"__esModule",{value:!0});var l=Object.assign||function(T){for(var x=1;x<arguments.length;x++){var O=arguments[x];for(var E in O)Object.prototype.hasOwnProperty.call(O,E)&&(T[E]=O[E])}return T},r=function(){function T(x,O){for(var E=0;E<O.length;E++){var _=O[E];_.enumerable=_.enumerable||!1,_.configurable=!0,"value"in _&&(_.writable=!0),Object.defineProperty(x,_.key,_)}}return function(x,O,E){return O&&T(x.prototype,O),E&&T(x,E),x}}(),u=da(),s=p(u),c=Lu();p(c);var m=Wr(),h=p(m),v=Pr(),g=p(v);function p(T){return T&&T.__esModule?T:{default:T}}function b(T,x){if(!(T instanceof x))throw new TypeError("Cannot call a class as a function")}function S(T,x){if(!T)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return x&&(typeof x=="object"||typeof x=="function")?x:T}function N(T,x){if(typeof x!="function"&&x!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof x);T.prototype=Object.create(x&&x.prototype,{constructor:{value:T,enumerable:!1,writable:!0,configurable:!0}}),x&&(Object.setPrototypeOf?Object.setPrototypeOf(T,x):T.__proto__=x)}return Ur.default=function(T){var x=function(O){N(E,O);function E(_){b(this,E);var M=S(this,(E.__proto__||Object.getPrototypeOf(E)).call(this,_));return M.childBindings={domNode:null},M}return r(E,[{key:"componentDidMount",value:function(){if(typeof window>"u")return!1;this.registerElems(this.props.name)}},{key:"componentDidUpdate",value:function(M){this.props.name!==M.name&&this.registerElems(this.props.name)}},{key:"componentWillUnmount",value:function(){if(typeof window>"u")return!1;h.default.unregister(this.props.name)}},{key:"registerElems",value:function(M){h.default.register(M,this.childBindings.domNode)}},{key:"render",value:function(){return s.default.createElement(T,l({},this.props,{parentBindings:this.childBindings}))}}]),E}(s.default.Component);return x.propTypes={name:g.default.string,id:g.default.string},x},Ur}var h0;function Zg(){if(h0)return Br;h0=1,Object.defineProperty(Br,"__esModule",{value:!0});var l=Object.assign||function(T){for(var x=1;x<arguments.length;x++){var O=arguments[x];for(var E in O)Object.prototype.hasOwnProperty.call(O,E)&&(T[E]=O[E])}return T},r=function(){function T(x,O){for(var E=0;E<O.length;E++){var _=O[E];_.enumerable=_.enumerable||!1,_.configurable=!0,"value"in _&&(_.writable=!0),Object.defineProperty(x,_.key,_)}}return function(x,O,E){return O&&T(x.prototype,O),E&&T(x,E),x}}(),u=da(),s=g(u),c=rp(),m=g(c),h=Pr(),v=g(h);function g(T){return T&&T.__esModule?T:{default:T}}function p(T,x){if(!(T instanceof x))throw new TypeError("Cannot call a class as a function")}function b(T,x){if(!T)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return x&&(typeof x=="object"||typeof x=="function")?x:T}function S(T,x){if(typeof x!="function"&&x!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof x);T.prototype=Object.create(x&&x.prototype,{constructor:{value:T,enumerable:!1,writable:!0,configurable:!0}}),x&&(Object.setPrototypeOf?Object.setPrototypeOf(T,x):T.__proto__=x)}var N=function(T){S(x,T);function x(){return p(this,x),b(this,(x.__proto__||Object.getPrototypeOf(x)).apply(this,arguments))}return r(x,[{key:"render",value:function(){var E=this,_=l({},this.props);return delete _.name,_.parentBindings&&delete _.parentBindings,s.default.createElement("div",l({},_,{ref:function(C){E.props.parentBindings.domNode=C}}),this.props.children)}}]),x}(s.default.Component);return N.propTypes={name:v.default.string,id:v.default.string},Br.default=(0,m.default)(N),Br}var Ou,g0;function Kg(){if(g0)return Ou;g0=1;var l=Object.assign||function(N){for(var T=1;T<arguments.length;T++){var x=arguments[T];for(var O in x)Object.prototype.hasOwnProperty.call(x,O)&&(N[O]=x[O])}return N},r=function(){function N(T,x){for(var O=0;O<x.length;O++){var E=x[O];E.enumerable=E.enumerable||!1,E.configurable=!0,"value"in E&&(E.writable=!0),Object.defineProperty(T,E.key,E)}}return function(T,x,O){return x&&N(T.prototype,x),O&&N(T,O),T}}();function u(N,T){if(!(N instanceof T))throw new TypeError("Cannot call a class as a function")}function s(N,T){if(!N)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return T&&(typeof T=="object"||typeof T=="function")?T:N}function c(N,T){if(typeof T!="function"&&T!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof T);N.prototype=Object.create(T&&T.prototype,{constructor:{value:N,enumerable:!1,writable:!0,configurable:!0}}),T&&(Object.setPrototypeOf?Object.setPrototypeOf(N,T):N.__proto__=T)}var m=da();Lu(),$r();var h=Zu(),v=Wr(),g=Pr(),p=ip(),b={to:g.string.isRequired,containerId:g.string,container:g.object,activeClass:g.string,spy:g.bool,smooth:g.oneOfType([g.bool,g.string]),offset:g.number,delay:g.number,isDynamic:g.bool,onClick:g.func,duration:g.oneOfType([g.number,g.func]),absolute:g.bool,onSetActive:g.func,onSetInactive:g.func,ignoreCancelEvents:g.bool,hashSpy:g.bool,spyThrottle:g.number},S={Scroll:function(T,x){console.warn("Helpers.Scroll is deprecated since v1.7.0");var O=x||v,E=function(M){c(C,M);function C(Q){u(this,C);var X=s(this,(C.__proto__||Object.getPrototypeOf(C)).call(this,Q));return _.call(X),X.state={active:!1},X}return r(C,[{key:"getScrollSpyContainer",value:function(){var X=this.props.containerId,$=this.props.container;return X?document.getElementById(X):$&&$.nodeType?$:document}},{key:"componentDidMount",value:function(){if(this.props.spy||this.props.hashSpy){var X=this.getScrollSpyContainer();h.isMounted(X)||h.mount(X,this.props.spyThrottle),this.props.hashSpy&&(p.isMounted()||p.mount(O),p.mapContainer(this.props.to,X)),this.props.spy&&h.addStateHandler(this.stateHandler),h.addSpyHandler(this.spyHandler,X),this.setState({container:X})}}},{key:"componentWillUnmount",value:function(){h.unmount(this.stateHandler,this.spyHandler)}},{key:"render",value:function(){var X="";this.state&&this.state.active?X=((this.props.className||"")+" "+(this.props.activeClass||"active")).trim():X=this.props.className;var $=l({},this.props);for(var J in b)$.hasOwnProperty(J)&&delete $[J];return $.className=X,$.onClick=this.handleClick,m.createElement(T,$)}}]),C}(m.Component),_=function(){var C=this;this.scrollTo=function(Q,X){O.scrollTo(Q,l({},C.state,X))},this.handleClick=function(Q){C.props.onClick&&C.props.onClick(Q),Q.stopPropagation&&Q.stopPropagation(),Q.preventDefault&&Q.preventDefault(),C.scrollTo(C.props.to,C.props)},this.stateHandler=function(){O.getActiveLink()!==C.props.to&&(C.state!==null&&C.state.active&&C.props.onSetInactive&&C.props.onSetInactive(),C.setState({active:!1}))},this.spyHandler=function(Q){var X=C.getScrollSpyContainer();if(!(p.isMounted()&&!p.isInitialized())){var $=C.props.to,J=null,ie=0,Y=0,Z=0;if(X.getBoundingClientRect){var W=X.getBoundingClientRect();Z=W.top}if(!J||C.props.isDynamic){if(J=O.get($),!J)return;var L=J.getBoundingClientRect();ie=L.top-Z+Q,Y=ie+L.height}var ee=Q-C.props.offset,P=ee>=Math.floor(ie)&&ee<Math.floor(Y),Se=ee<Math.floor(ie)||ee>=Math.floor(Y),K=O.getActiveLink();if(Se)return $===K&&O.setActiveLink(void 0),C.props.hashSpy&&p.getHash()===$&&p.changeHash(),C.props.spy&&C.state.active&&(C.setState({active:!1}),C.props.onSetInactive&&C.props.onSetInactive()),h.updateStates();if(P&&K!==$)return O.setActiveLink($),C.props.hashSpy&&p.changeHash($),C.props.spy&&(C.setState({active:!0}),C.props.onSetActive&&C.props.onSetActive($)),h.updateStates()}}};return E.propTypes=b,E.defaultProps={offset:0},E},Element:function(T){console.warn("Helpers.Element is deprecated since v1.7.0");var x=function(O){c(E,O);function E(_){u(this,E);var M=s(this,(E.__proto__||Object.getPrototypeOf(E)).call(this,_));return M.childBindings={domNode:null},M}return r(E,[{key:"componentDidMount",value:function(){if(typeof window>"u")return!1;this.registerElems(this.props.name)}},{key:"componentDidUpdate",value:function(M){this.props.name!==M.name&&this.registerElems(this.props.name)}},{key:"componentWillUnmount",value:function(){if(typeof window>"u")return!1;v.unregister(this.props.name)}},{key:"registerElems",value:function(M){v.register(M,this.childBindings.domNode)}},{key:"render",value:function(){return m.createElement(T,l({},this.props,{parentBindings:this.childBindings}))}}]),E}(m.Component);return x.propTypes={name:g.string,id:g.string},x}};return Ou=S,Ou}var v0;function Jg(){if(v0)return De;v0=1,Object.defineProperty(De,"__esModule",{value:!0}),De.Helpers=De.ScrollElement=De.ScrollLink=De.animateScroll=De.scrollSpy=De.Events=De.scroller=De.Element=De.Button=De.Link=void 0;var l=Vg(),r=Q(l),u=Qg(),s=Q(u),c=Zg(),m=Q(c),h=Wr(),v=Q(h),g=Ku(),p=Q(g),b=Zu(),S=Q(b),N=lp(),T=Q(N),x=Ju(),O=Q(x),E=rp(),_=Q(E),M=Kg(),C=Q(M);function Q(X){return X&&X.__esModule?X:{default:X}}return De.Link=r.default,De.Button=s.default,De.Element=m.default,De.scroller=v.default,De.Events=p.default,De.scrollSpy=S.default,De.animateScroll=T.default,De.ScrollLink=O.default,De.ScrollElement=_.default,De.Helpers=C.default,De.default={Link:r.default,Button:s.default,Element:m.default,scroller:v.default,Events:p.default,scrollSpy:S.default,animateScroll:T.default,ScrollLink:O.default,ScrollElement:_.default,Helpers:C.default},De}var sn=Jg();function op(){const[l,r]=D.useState(!1),[u,s]=D.useState("dark"),c=D.useRef(null);D.useEffect(()=>{const g=localStorage.getItem("theme")||"dark";s(g),document.documentElement.setAttribute("data-theme",g)},[]);const m=D.useCallback(()=>{const g=u==="dark"?"light":"dark";s(g),document.documentElement.setAttribute("data-theme",g),localStorage.setItem("theme",g)},[u]),h=D.useCallback(g=>{const p=document.getElementById(g);p&&(p.scrollIntoView({behavior:"smooth"}),window.innerWidth<=900&&r(!1))},[]);D.useEffect(()=>{function g(p){c.current&&!c.current.contains(p.target)&&!p.target.closest(".header-menu-toggle")&&r(!1)}return document.addEventListener("mousedown",g),()=>document.removeEventListener("mousedown",g)},[]);const v=[{name:"Accueil",id:"home"},{name:"A Propos",id:"about"},{name:"Projets",id:"projects"},{name:"Services",id:"services"},{name:"Blog",id:"news"},{name:"Equipe",id:"team"},{name:"Nous Contacter",id:"contacts"}];return f.jsxs("header",{className:"header",children:[f.jsx("div",{className:"header-logo",children:"DigiScia"}),f.jsxs("button",{className:"header-menu-toggle",onClick:()=>r(!l),"aria-expanded":l,"aria-label":"Toggle navigation menu",children:[f.jsx("span",{}),f.jsx("span",{}),f.jsx("span",{})]}),f.jsx("nav",{className:`header-navbar ${l?"active":""}`,ref:c,"aria-hidden":!l&&window.innerWidth<=900,children:f.jsx("ul",{children:v.map(g=>f.jsx("li",{children:f.jsx("a",{href:`#${g.id}`,onClick:p=>{p.preventDefault(),h(g.id)},children:g.name})},g.id))})}),f.jsx("div",{className:"header-theme-toggle",children:f.jsxs("label",{className:"switch",htmlFor:"themeToggle",children:[f.jsx("input",{id:"themeToggle",type:"checkbox",className:"input",checked:u==="light",onChange:m,"aria-label":`Switch to ${u==="dark"?"light":"dark"} mode`}),f.jsx("span",{className:"slider"})]})})]})}function sp(){const l=new Date().getFullYear(),r=[{name:"LinkedIn",href:"https://www.linkedin.com",icon:f.jsx("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"currentColor",children:f.jsx("path",{d:"M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"})})},{name:"Instagram",href:"https://www.instagram.com",icon:f.jsx("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"currentColor",children:f.jsx("path",{d:"M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"})})},{name:"Facebook",href:"https://www.facebook.com",icon:f.jsx("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"currentColor",children:f.jsx("path",{d:"M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"})})},{name:"Discord",href:"https://discord.gg/enKs5Pm8",icon:f.jsx("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"currentColor",children:f.jsx("path",{d:"M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028 14.09 14.09 0 0 0 1.226-1.994.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z"})})}],u=[{icon:f.jsxs("svg",{width:"18",height:"18",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[f.jsx("path",{d:"M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"}),f.jsx("circle",{cx:"12",cy:"10",r:"3"})]}),text:"Ouagadougou, Burkina Faso",type:"location"},{icon:f.jsx("svg",{width:"18",height:"18",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:f.jsx("path",{d:"M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"})}),lines:["+212 716-990681","+226 57 28 70 25"],type:"phone"},{icon:f.jsxs("svg",{width:"18",height:"18",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[f.jsx("path",{d:"M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"}),f.jsx("polyline",{points:"22,6 12,13 2,6"})]}),text:"digiscia.infos@gmail.com",type:"email"}];return f.jsxs(f.Fragment,{children:[f.jsx("style",{children:`
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
          color: rgba(255, 255, 255, 0.9);
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
          background: var(--white);
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
      `}),f.jsx("footer",{className:"footer",children:f.jsxs("div",{className:"footer-container",children:[f.jsxs("div",{className:"footer-grid",children:[f.jsxs("div",{className:"footer-brand",children:[f.jsxs("div",{className:"footer-logo-container",children:[f.jsx("div",{className:"footer-logo-icon",children:f.jsx("svg",{viewBox:"0 0 100 100",fill:"#000033",children:f.jsx("path",{d:"M30,30 L30,70 L45,70 C55,70 62,63 62,52 C62,48 60,44 57,41 C60,38 62,34 62,30 C62,19 55,12 45,12 L30,12 Z M40,22 L45,22 C49,22 52,25 52,30 C52,35 49,38 45,38 L40,38 Z M40,48 L45,48 C49,48 52,51 52,56 C52,61 49,64 45,64 L40,64 Z"})})}),f.jsx("span",{className:"footer-logo-text",children:"DigiScia"})]}),f.jsx("p",{className:"footer-description",children:"Excellence en solutions numériques. Nous transformons vos idées en réalité digitale avec expertise et innovation."})]}),f.jsxs("div",{className:"footer-section",children:[f.jsx("h3",{className:"footer-title",children:"Contact"}),u.map((s,c)=>f.jsxs("div",{className:"contact-item",children:[f.jsx("span",{className:"contact-icon",children:s.icon}),s.type==="phone"?f.jsx("div",{className:"phone-lines",children:s.lines.map((m,h)=>f.jsx("span",{children:m},h))}):f.jsx("span",{children:s.text})]},c))]}),f.jsxs("div",{className:"footer-section",children:[f.jsx("h3",{className:"footer-title",children:"Suivez-nous"}),f.jsx("div",{className:"social-links",children:r.map(s=>f.jsx("a",{href:s.href,target:"_blank",rel:"noopener noreferrer",className:"social-link","aria-label":s.name,children:s.icon},s.name))})]})]}),f.jsx("div",{className:"footer-divider"}),f.jsxs("div",{className:"footer-bottom",children:[f.jsx("div",{className:"footer-copyright",children:f.jsxs("span",{children:["© ",l," DigiScia. Tous droits réservés."]})}),f.jsxs("div",{className:"footer-links",children:[f.jsx("a",{href:"#privacy",className:"footer-link",children:"Confidentialité"}),f.jsx("a",{href:"#terms",className:"footer-link",children:"Conditions"}),f.jsx("a",{href:"#legal",className:"footer-link",children:"Mentions légales"})]})]})]})})]})}const $g="/assets/logobleu-DSiZOGcL.jpg",up=D.memo(()=>{const l=["Data Science","Intelligence Artificielle","Management de Données","Automatisation","Agents IA","Analyse de Données & Aide a la decision","Ingenierie de donnees","Securite des donnees & Systemes","Applications Web & Mobile"],[r,u]=D.useState(0),[s,c]=D.useState(!0);return D.useEffect(()=>{const m=setTimeout(()=>{c(!1)},2500),h=setTimeout(()=>{u(v=>(v+1)%l.length),c(!0)},3e3);return()=>{clearTimeout(m),clearTimeout(h)}},[r,l.length]),f.jsx("span",{className:`tagline-text ${s?"fade-in":"fade-out"}`,children:l[r]})});up.displayName="TaglineRotator";function Wg(){const[l,r]=D.useState([]),u=D.useRef(null);D.useEffect(()=>{r((()=>{const v=window.innerWidth<768?30:50;return Array.from({length:v},(g,p)=>({id:p,x:Math.random()*100,y:Math.random()*100,vx:(Math.random()-.5)*.05,vy:(Math.random()-.5)*.05,size:Math.random()*2+1}))})())},[]),D.useEffect(()=>{const h=u.current;if(!h)return;const v=h.getContext("2d");let g,p=l;const b=()=>{h.width=window.innerWidth,h.height=window.innerHeight};b(),window.addEventListener("resize",b);const S=()=>{h&&(v.clearRect(0,0,h.width,h.height),p=p.map(N=>{let T=N.x+N.vx,x=N.y+N.vy;return(T<0||T>100)&&(N.vx*=-1),(x<0||x>100)&&(N.vy*=-1),{...N,x:T,y:x}}),v.lineWidth=.5,p.forEach((N,T)=>{p.slice(T+1).forEach(x=>{const O=(x.x-N.x)*h.width/100,E=(x.y-N.y)*h.height/100,_=Math.sqrt(O*O+E*E);if(_<150){const M=(1-_/150)*.3;v.strokeStyle=`rgba(91, 124, 255, ${M})`,v.beginPath(),v.moveTo(N.x*h.width/100,N.y*h.height/100),v.lineTo(x.x*h.width/100,x.y*h.height/100),v.stroke()}})}),p.forEach(N=>{v.fillStyle="rgba(91, 124, 255, 0.8)",v.beginPath(),v.arc(N.x*h.width/100,N.y*h.height/100,N.size,0,Math.PI*2),v.fill()}),g=requestAnimationFrame(S))};return p.length>0&&S(),()=>{cancelAnimationFrame(g),window.removeEventListener("resize",b)}},[l]);const s=D.useCallback(()=>{window.open("https://wa.me/212716990681","_blank")},[]),c=D.useCallback(h=>{h.preventDefault();const v=document.getElementById("contacts");v&&v.scrollIntoView({behavior:"smooth"})},[]),m=D.useCallback(()=>{window.scrollBy({top:window.innerHeight,behavior:"smooth"})},[]);return f.jsxs("section",{id:"home",className:"home-container",children:[f.jsx("canvas",{ref:u,className:"constellation-canvas","aria-hidden":"true"}),f.jsx("div",{className:"gradient-overlay","aria-hidden":"true"}),f.jsx("div",{className:"hero-section",children:f.jsxs("div",{className:"hero-content",children:[f.jsx("div",{className:"logo-container",children:f.jsx("img",{src:$g,alt:"DigiScia Logo",className:"hero-logo"})}),f.jsxs("div",{className:"hero-text",children:[f.jsx("h1",{className:"welcome-text",children:"Bienvenue sur"}),f.jsx("h2",{className:"brand-name",children:"DigiScia"}),f.jsx("h3",{className:"tagline",children:f.jsx(up,{})}),f.jsxs("div",{className:"cta-buttons",children:[f.jsx("button",{className:"cta-button sponsoring",onClick:s,"aria-label":"Ouvrir WhatsApp pour un partenariat",children:"Partenariat"}),f.jsx("a",{href:"#contacts",className:"cta-button contact",onClick:c,"aria-label":"Naviguer vers la section contact",children:"Nous Contacter"})]})]})]})}),f.jsxs("div",{className:"scroll-indicator",onClick:m,"aria-label":"Défiler vers le bas",role:"button",tabIndex:0,children:[f.jsx("span",{className:"scroll-indicator-text",children:"Scroll"}),f.jsx("div",{className:"scroll-indicator-icon"})]})]})}var cp={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},y0=kt.createContext&&kt.createContext(cp),Pg=["attr","size","title"];function Ig(l,r){if(l==null)return{};var u=ev(l,r),s,c;if(Object.getOwnPropertySymbols){var m=Object.getOwnPropertySymbols(l);for(c=0;c<m.length;c++)s=m[c],!(r.indexOf(s)>=0)&&Object.prototype.propertyIsEnumerable.call(l,s)&&(u[s]=l[s])}return u}function ev(l,r){if(l==null)return{};var u={};for(var s in l)if(Object.prototype.hasOwnProperty.call(l,s)){if(r.indexOf(s)>=0)continue;u[s]=l[s]}return u}function Vr(){return Vr=Object.assign?Object.assign.bind():function(l){for(var r=1;r<arguments.length;r++){var u=arguments[r];for(var s in u)Object.prototype.hasOwnProperty.call(u,s)&&(l[s]=u[s])}return l},Vr.apply(this,arguments)}function b0(l,r){var u=Object.keys(l);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(l);r&&(s=s.filter(function(c){return Object.getOwnPropertyDescriptor(l,c).enumerable})),u.push.apply(u,s)}return u}function Qr(l){for(var r=1;r<arguments.length;r++){var u=arguments[r]!=null?arguments[r]:{};r%2?b0(Object(u),!0).forEach(function(s){tv(l,s,u[s])}):Object.getOwnPropertyDescriptors?Object.defineProperties(l,Object.getOwnPropertyDescriptors(u)):b0(Object(u)).forEach(function(s){Object.defineProperty(l,s,Object.getOwnPropertyDescriptor(u,s))})}return l}function tv(l,r,u){return r=av(r),r in l?Object.defineProperty(l,r,{value:u,enumerable:!0,configurable:!0,writable:!0}):l[r]=u,l}function av(l){var r=nv(l,"string");return typeof r=="symbol"?r:r+""}function nv(l,r){if(typeof l!="object"||!l)return l;var u=l[Symbol.toPrimitive];if(u!==void 0){var s=u.call(l,r);if(typeof s!="object")return s;throw new TypeError("@@toPrimitive must return a primitive value.")}return(r==="string"?String:Number)(l)}function fp(l){return l&&l.map((r,u)=>kt.createElement(r.tag,Qr({key:u},r.attr),fp(r.child)))}function Ua(l){return r=>kt.createElement(lv,Vr({attr:Qr({},l.attr)},r),fp(l.child))}function lv(l){var r=u=>{var{attr:s,size:c,title:m}=l,h=Ig(l,Pg),v=c||u.size||"1em",g;return u.className&&(g=u.className),l.className&&(g=(g?g+" ":"")+l.className),kt.createElement("svg",Vr({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},u.attr,s,h,{className:g,style:Qr(Qr({color:l.color||u.color},u.style),l.style),height:v,width:v,xmlns:"http://www.w3.org/2000/svg"}),m&&kt.createElement("title",null,m),l.children)};return y0!==void 0?kt.createElement(y0.Consumer,null,u=>r(u)):r(cp)}function x0(l){return Ua({attr:{viewBox:"0 0 576 512"},child:[{tag:"path",attr:{d:"M208 0c-29.9 0-54.7 20.5-61.8 48.2-.8 0-1.4-.2-2.2-.2-35.3 0-64 28.7-64 64 0 4.8.6 9.5 1.7 14C52.5 138 32 166.6 32 200c0 12.6 3.2 24.3 8.3 34.9C16.3 248.7 0 274.3 0 304c0 33.3 20.4 61.9 49.4 73.9-.9 4.6-1.4 9.3-1.4 14.1 0 39.8 32.2 72 72 72 4.1 0 8.1-.5 12-1.2 9.6 28.5 36.2 49.2 68 49.2 39.8 0 72-32.2 72-72V64c0-35.3-28.7-64-64-64zm368 304c0-29.7-16.3-55.3-40.3-69.1 5.2-10.6 8.3-22.3 8.3-34.9 0-33.4-20.5-62-49.7-74 1-4.5 1.7-9.2 1.7-14 0-35.3-28.7-64-64-64-.8 0-1.5.2-2.2.2C422.7 20.5 397.9 0 368 0c-35.3 0-64 28.6-64 64v376c0 39.8 32.2 72 72 72 31.8 0 58.4-20.7 68-49.2 3.9.7 7.9 1.2 12 1.2 39.8 0 72-32.2 72-72 0-4.8-.5-9.5-1.4-14.1 29-12 49.4-40.6 49.4-73.9z"},child:[]}]})(l)}function w0(l){return Ua({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M496 384H64V80c0-8.84-7.16-16-16-16H16C7.16 64 0 71.16 0 80v336c0 17.67 14.33 32 32 32h464c8.84 0 16-7.16 16-16v-32c0-8.84-7.16-16-16-16zM464 96H345.94c-21.38 0-32.09 25.85-16.97 40.97l32.4 32.4L288 242.75l-73.37-73.37c-12.5-12.5-32.76-12.5-45.25 0l-68.69 68.69c-6.25 6.25-6.25 16.38 0 22.63l22.62 22.62c6.25 6.25 16.38 6.25 22.63 0L192 237.25l73.37 73.37c12.5 12.5 32.76 12.5 45.25 0l96-96 32.4 32.4c15.12 15.12 40.97 4.41 40.97-16.97V112c.01-8.84-7.15-16-15.99-16z"},child:[]}]})(l)}function iv(l){return Ua({attr:{viewBox:"0 0 640 512"},child:[{tag:"path",attr:{d:"M512.1 191l-8.2 14.3c-3 5.3-9.4 7.5-15.1 5.4-11.8-4.4-22.6-10.7-32.1-18.6-4.6-3.8-5.8-10.5-2.8-15.7l8.2-14.3c-6.9-8-12.3-17.3-15.9-27.4h-16.5c-6 0-11.2-4.3-12.2-10.3-2-12-2.1-24.6 0-37.1 1-6 6.2-10.4 12.2-10.4h16.5c3.6-10.1 9-19.4 15.9-27.4l-8.2-14.3c-3-5.2-1.9-11.9 2.8-15.7 9.5-7.9 20.4-14.2 32.1-18.6 5.7-2.1 12.1.1 15.1 5.4l8.2 14.3c10.5-1.9 21.2-1.9 31.7 0L552 6.3c3-5.3 9.4-7.5 15.1-5.4 11.8 4.4 22.6 10.7 32.1 18.6 4.6 3.8 5.8 10.5 2.8 15.7l-8.2 14.3c6.9 8 12.3 17.3 15.9 27.4h16.5c6 0 11.2 4.3 12.2 10.3 2 12 2.1 24.6 0 37.1-1 6-6.2 10.4-12.2 10.4h-16.5c-3.6 10.1-9 19.4-15.9 27.4l8.2 14.3c3 5.2 1.9 11.9-2.8 15.7-9.5 7.9-20.4 14.2-32.1 18.6-5.7 2.1-12.1-.1-15.1-5.4l-8.2-14.3c-10.4 1.9-21.2 1.9-31.7 0zm-10.5-58.8c38.5 29.6 82.4-14.3 52.8-52.8-38.5-29.7-82.4 14.3-52.8 52.8zM386.3 286.1l33.7 16.8c10.1 5.8 14.5 18.1 10.5 29.1-8.9 24.2-26.4 46.4-42.6 65.8-7.4 8.9-20.2 11.1-30.3 5.3l-29.1-16.8c-16 13.7-34.6 24.6-54.9 31.7v33.6c0 11.6-8.3 21.6-19.7 23.6-24.6 4.2-50.4 4.4-75.9 0-11.5-2-20-11.9-20-23.6V418c-20.3-7.2-38.9-18-54.9-31.7L74 403c-10 5.8-22.9 3.6-30.3-5.3-16.2-19.4-33.3-41.6-42.2-65.7-4-10.9.4-23.2 10.5-29.1l33.3-16.8c-3.9-20.9-3.9-42.4 0-63.4L12 205.8c-10.1-5.8-14.6-18.1-10.5-29 8.9-24.2 26-46.4 42.2-65.8 7.4-8.9 20.2-11.1 30.3-5.3l29.1 16.8c16-13.7 34.6-24.6 54.9-31.7V57.1c0-11.5 8.2-21.5 19.6-23.5 24.6-4.2 50.5-4.4 76-.1 11.5 2 20 11.9 20 23.6v33.6c20.3 7.2 38.9 18 54.9 31.7l29.1-16.8c10-5.8 22.9-3.6 30.3 5.3 16.2 19.4 33.2 41.6 42.1 65.8 4 10.9.1 23.2-10 29.1l-33.7 16.8c3.9 21 3.9 42.5 0 63.5zm-117.6 21.1c59.2-77-28.7-164.9-105.7-105.7-59.2 77 28.7 164.9 105.7 105.7zm243.4 182.7l-8.2 14.3c-3 5.3-9.4 7.5-15.1 5.4-11.8-4.4-22.6-10.7-32.1-18.6-4.6-3.8-5.8-10.5-2.8-15.7l8.2-14.3c-6.9-8-12.3-17.3-15.9-27.4h-16.5c-6 0-11.2-4.3-12.2-10.3-2-12-2.1-24.6 0-37.1 1-6 6.2-10.4 12.2-10.4h16.5c3.6-10.1 9-19.4 15.9-27.4l-8.2-14.3c-3-5.2-1.9-11.9 2.8-15.7 9.5-7.9 20.4-14.2 32.1-18.6 5.7-2.1 12.1.1 15.1 5.4l8.2 14.3c10.5-1.9 21.2-1.9 31.7 0l8.2-14.3c3-5.3 9.4-7.5 15.1-5.4 11.8 4.4 22.6 10.7 32.1 18.6 4.6 3.8 5.8 10.5 2.8 15.7l-8.2 14.3c6.9 8 12.3 17.3 15.9 27.4h16.5c6 0 11.2 4.3 12.2 10.3 2 12 2.1 24.6 0 37.1-1 6-6.2 10.4-12.2 10.4h-16.5c-3.6 10.1-9 19.4-15.9 27.4l8.2 14.3c3 5.2 1.9 11.9-2.8 15.7-9.5 7.9-20.4 14.2-32.1 18.6-5.7 2.1-12.1-.1-15.1-5.4l-8.2-14.3c-10.4 1.9-21.2 1.9-31.7 0zM501.6 431c38.5 29.6 82.4-14.3 52.8-52.8-38.5-29.6-82.4 14.3-52.8 52.8z"},child:[]}]})(l)}function S0(l){return Ua({attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M448 73.143v45.714C448 159.143 347.667 192 224 192S0 159.143 0 118.857V73.143C0 32.857 100.333 0 224 0s224 32.857 224 73.143zM448 176v102.857C448 319.143 347.667 352 224 352S0 319.143 0 278.857V176c48.125 33.143 136.208 48.572 224 48.572S399.874 209.143 448 176zm0 160v102.857C448 479.143 347.667 512 224 512S0 479.143 0 438.857V336c48.125 33.143 136.208 48.572 224 48.572S399.874 369.143 448 336z"},child:[]}]})(l)}function rv(l){return Ua({attr:{viewBox:"0 0 640 512"},child:[{tag:"path",attr:{d:"M255.03 261.65c6.25 6.25 16.38 6.25 22.63 0l11.31-11.31c6.25-6.25 6.25-16.38 0-22.63L253.25 192l35.71-35.72c6.25-6.25 6.25-16.38 0-22.63l-11.31-11.31c-6.25-6.25-16.38-6.25-22.63 0l-58.34 58.34c-6.25 6.25-6.25 16.38 0 22.63l58.35 58.34zm96.01-11.3l11.31 11.31c6.25 6.25 16.38 6.25 22.63 0l58.34-58.34c6.25-6.25 6.25-16.38 0-22.63l-58.34-58.34c-6.25-6.25-16.38-6.25-22.63 0l-11.31 11.31c-6.25 6.25-6.25 16.38 0 22.63L386.75 192l-35.71 35.72c-6.25 6.25-6.25 16.38 0 22.63zM624 416H381.54c-.74 19.81-14.71 32-32.74 32H288c-18.69 0-33.02-17.47-32.77-32H16c-8.8 0-16 7.2-16 16v16c0 35.2 28.8 64 64 64h512c35.2 0 64-28.8 64-64v-16c0-8.8-7.2-16-16-16zM576 48c0-26.4-21.6-48-48-48H112C85.6 0 64 21.6 64 48v336h512V48zm-64 272H128V64h384v256z"},child:[]}]})(l)}function ov(l){return Ua({attr:{viewBox:"0 0 352 512"},child:[{tag:"path",attr:{d:"M96.06 454.35c.01 6.29 1.87 12.45 5.36 17.69l17.09 25.69a31.99 31.99 0 0 0 26.64 14.28h61.71a31.99 31.99 0 0 0 26.64-14.28l17.09-25.69a31.989 31.989 0 0 0 5.36-17.69l.04-38.35H96.01l.05 38.35zM0 176c0 44.37 16.45 84.85 43.56 115.78 16.52 18.85 42.36 58.23 52.21 91.45.04.26.07.52.11.78h160.24c.04-.26.07-.51.11-.78 9.85-33.22 35.69-72.6 52.21-91.45C335.55 260.85 352 220.37 352 176 352 78.61 272.91-.3 175.45 0 73.44.31 0 82.97 0 176zm176-80c-44.11 0-80 35.89-80 80 0 8.84-7.16 16-16 16s-16-7.16-16-16c0-61.76 50.24-112 112-112 8.84 0 16 7.16 16 16s-7.16 16-16 16z"},child:[]}]})(l)}function sv(l){return Ua({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M466.5 83.7l-192-80a48.15 48.15 0 0 0-36.9 0l-192 80C27.7 91.1 16 108.6 16 128c0 198.5 114.5 335.7 221.5 380.3 11.8 4.9 25.1 4.9 36.9 0C360.1 472.6 496 349.3 496 128c0-19.4-11.7-36.9-29.5-44.3zM256.1 446.3l-.1-381 175.9 73.3c-3.3 151.4-82.1 261.1-175.8 307.7z"},child:[]}]})(l)}function uv(l){return Ua({attr:{viewBox:"0 0 640 512"},child:[{tag:"path",attr:{d:"M96 224c35.3 0 64-28.7 64-64s-28.7-64-64-64-64 28.7-64 64 28.7 64 64 64zm448 0c35.3 0 64-28.7 64-64s-28.7-64-64-64-64 28.7-64 64 28.7 64 64 64zm32 32h-64c-17.6 0-33.5 7.1-45.1 18.6 40.3 22.1 68.9 62 75.1 109.4h66c17.7 0 32-14.3 32-32v-32c0-35.3-28.7-64-64-64zm-256 0c61.9 0 112-50.1 112-112S381.9 32 320 32 208 82.1 208 144s50.1 112 112 112zm76.8 32h-8.3c-20.8 10-43.9 16-68.5 16s-47.6-6-68.5-16h-8.3C179.6 288 128 339.6 128 403.2V432c0 26.5 21.5 48 48 48h288c26.5 0 48-21.5 48-48v-28.8c0-63.6-51.6-115.2-115.2-115.2zm-223.7-13.4C161.5 263.1 145.6 256 128 256H64c-35.3 0-64 28.7-64 64v32c0 17.7 14.3 32 32 32h65.9c6.3-47.4 34.9-87.3 75.2-109.4z"},child:[]}]})(l)}const cv=`
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
`,fv=({icon:l,label:r,description:u})=>{const[s,c]=D.useState(!1);return f.jsxs("div",{className:"tech-icon",onMouseEnter:()=>c(!0),onMouseLeave:()=>c(!1),children:[f.jsx("div",{className:`icon-circle ${s?"hovered":""}`,children:f.jsx(l,{})}),f.jsx("h4",{children:r}),f.jsx("p",{className:s?"visible":"",children:u})]})},dv=({icon:l,title:r,description:u})=>f.jsxs("div",{className:"value-card",children:[f.jsx("div",{className:"value-icon",children:f.jsx(l,{})}),f.jsx("h4",{children:r}),f.jsx("p",{children:u})]});function mv(){const l=[{icon:x0,label:"Intelligence Artificielle",description:"Solutions d'IA adaptées à vos besoins métiers"},{icon:S0,label:"Ingénierie des Données",description:"Architecture et pipelines de données robustes"},{icon:w0,label:"Data Science",description:"Analyse avancée et modélisation prédictive"},{icon:rv,label:"Développement",description:"Applications web et mobile innovantes"}],r=[{icon:sv,title:"Sécurité & Conformité",description:"Respect des normes RGPD et sécurisation de vos données"},{icon:uv,title:"Approche Collaborative",description:"Co-construction avec vos équipes pour un transfert de compétences"},{icon:ov,title:"Innovation Continue",description:"Veille technologique et adoption des dernières innovations"}];return f.jsxs(f.Fragment,{children:[f.jsx("style",{children:cv}),f.jsxs("section",{className:"about-container",id:"about",children:[f.jsx("div",{className:"animated-particles",children:[...Array(15)].map((u,s)=>f.jsx("div",{className:"particle",style:{"--delay":`${Math.random()*10}s`,"--duration":`${Math.random()*20+15}s`,width:`${Math.random()*6+2}px`,height:`${Math.random()*6+2}px`,left:`${Math.random()*100}%`,top:`${Math.random()*100}%`}},s))}),f.jsxs("div",{className:"about-inner",children:[f.jsx("div",{className:"about-header",children:f.jsxs("div",{className:"header-content",children:[f.jsxs("h1",{className:"about-title",children:["Transformez vos ",f.jsx("span",{className:"gradient-text",children:"données"})," en",f.jsx("span",{className:"gradient-text",children:" avantage concurrentiel"})]}),f.jsx("p",{className:"about-subtitle",children:"DigiScia accompagne les entreprises dans leur transition numérique pour exploiter leurs données, devenir data-driven et placer l'intelligence des données au cœur de leur stratégie."})]})}),f.jsxs("div",{className:"about-main",children:[f.jsxs("div",{className:"about-content",children:[f.jsxs("div",{className:"intro-section glass-card",children:[f.jsx("h2",{children:"Qui sommes-nous ?"}),f.jsxs("p",{className:"intro-text",children:[f.jsx("strong",{children:"DigiScia"})," est une Entreprise de Services Numériques (ESN) spécialisée en science des données et intelligence artificielle. Nous aidons les organisations à ",f.jsx("span",{className:"highlight",children:"transformer leurs données en insights actionnables"}),"et à construire une culture data-driven durable."]}),f.jsxs("p",{className:"intro-text",children:["Notre expertise couvre l'ensemble de la chaîne de valeur de la donnée : de la collecte et l'ingénierie des données jusqu'au déploiement de solutions d'IA en production, en garantissant ",f.jsx("span",{className:"highlight",children:"sécurité, conformité et performance"}),"."]})]}),f.jsxs("div",{className:"expertise-section",children:[f.jsx("h2",{children:"Notre Expertise"}),f.jsx("div",{className:"tech-grid",children:l.map((u,s)=>f.jsx(fv,{icon:u.icon,label:u.label,description:u.description},s))})]})]}),f.jsx("div",{className:"about-visual",children:f.jsxs("div",{className:"data-flow-illustration",children:[f.jsx("div",{className:"data-node node-1",children:f.jsx(S0,{})}),f.jsx("div",{className:"data-node node-2",children:f.jsx(iv,{})}),f.jsx("div",{className:"data-node node-3",children:f.jsx(x0,{})}),f.jsx("div",{className:"data-node node-4",children:f.jsx(w0,{})}),f.jsxs("div",{className:"connection-lines",children:[f.jsx("div",{className:"line line-1"}),f.jsx("div",{className:"line line-2"}),f.jsx("div",{className:"line line-3"})]})]})})]}),f.jsxs("div",{className:"values-section",children:[f.jsx("h2",{children:"Nos Valeurs"}),f.jsx("div",{className:"values-grid",children:r.map((u,s)=>f.jsx(dv,{icon:u.icon,title:u.title,description:u.description},s))})]})]})]})]})}const pv=`
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
`,Nu={Rocket:()=>f.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[f.jsx("path",{d:"M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z"}),f.jsx("path",{d:"m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z"}),f.jsx("path",{d:"M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0"}),f.jsx("path",{d:"M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5"})]}),CheckCircle:()=>f.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[f.jsx("path",{d:"M22 11.08V12a10 10 0 1 1-5.93-9.14"}),f.jsx("polyline",{points:"22 4 12 14.01 9 11.01"})]}),Code:()=>f.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[f.jsx("polyline",{points:"16 18 22 12 16 6"}),f.jsx("polyline",{points:"8 6 2 12 8 18"})]})},hv=[{id:1,title:"DigiScia Academy",description:"Solution d'analyse prédictive basée sur l'IA pour optimiser les processus métiers et prendre des décisions data-driven en temps réel.",status:"Terminé",date:"2024-01-15",category:"Education",image:"https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop&q=80",color:"#5B7CFF"},{id:2,title:"SimpleOQuotidien",description:"Architecture de data lake moderne pour centraliser et gouverner l'ensemble des données de l'entreprise avec une sécurité renforcée.",status:"En cours",date:"2023-12-10",category:"Software Development",image:"https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&h=600&fit=crop&q=80",color:"#8BA3FF"},{id:3,title:"DigiScia Store",description:"Tableaux de bord interactifs en temps réel pour le suivi des KPIs métiers avec visualisations avancées et alertes intelligentes.",status:"En cours",date:"2024-02-20",category:"Software Development",image:"https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop&q=80",color:"#B8AEFF"},{id:4,title:"Domus IA",description:"Tableaux de bord interactifs en temps réel pour le suivi des KPIs métiers avec visualisations avancées et alertes intelligentes.",status:"En cours",date:"2024-02-20",category:"Agentic AI",image:"https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop&q=80",color:"#B8AEFF"},{id:5,title:"Rapidos",description:"Tableaux de bord interactifs en temps réel pour le suivi des KPIs métiers avec visualisations avancées et alertes intelligentes.",status:"En cours",date:"2024-02-20",category:"Agentic AI",image:"https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop&q=80",color:"#B8AEFF"},{id:6,title:"GulmuLLM",description:"Tableaux de bord interactifs en temps réel pour le suivi des KPIs métiers avec visualisations avancées et alertes intelligentes.",status:"En cours",date:"2024-02-20",category:"LLM",image:"https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop&q=80",color:"#B8AEFF"}];function gv(){const[l,r]=D.useState([]),[u,s]=D.useState(!0),[c,m]=D.useState(null),h=D.useCallback(g=>{switch(g){case"En cours":return f.jsx(Nu.Rocket,{});case"Terminé":return f.jsx(Nu.CheckCircle,{});default:return f.jsx(Nu.Code,{})}},[]);D.useCallback(g=>new Date(g).toLocaleDateString("fr-FR",{day:"numeric",month:"long",year:"numeric"}),[]),D.useEffect(()=>{let g=!0;return(async()=>{try{s(!0),await new Promise(b=>setTimeout(b,1e3)),g&&(r(hv),s(!1))}catch(b){console.error("Erreur lors de la récupération des projets:",b),g&&(m("Impossible de charger les projets. Veuillez réessayer plus tard."),s(!1))}})(),()=>{g=!1}},[]);const v=D.useMemo(()=>u?f.jsxs("div",{className:"loading-container",children:[f.jsx("div",{className:"loading-spinner"}),f.jsx("p",{className:"loading-text",children:"Chargement des projets..."})]}):c?f.jsxs("div",{className:"error-message",children:[f.jsx("p",{children:c}),f.jsx("button",{className:"retry-button",onClick:()=>window.location.reload(),children:"Réessayer"})]}):l.length===0?f.jsx("div",{className:"no-projects-message",children:f.jsx("p",{children:"Aucun projet disponible pour le moment."})}):l.map((g,p)=>f.jsxs("div",{className:"project-card",style:{"--card-color":g.color,animationDelay:`${p*.1}s`},children:[f.jsx("div",{className:"project-card-header"}),f.jsx("div",{className:"project-status-icon",children:h(g.status)}),f.jsxs("div",{className:"project-card-content",children:[f.jsx("h2",{className:"project-card-title",children:g.title}),f.jsx("p",{className:"project-description",children:g.description}),g.image&&f.jsx("div",{className:"project-image",children:f.jsx("img",{src:g.image,alt:g.title,loading:"lazy"})}),f.jsxs("div",{className:"project-meta",children:[f.jsxs("div",{className:"meta-item",children:[f.jsx("div",{className:"meta-label",children:"Statut"}),f.jsx("div",{className:"meta-value",children:f.jsxs("span",{className:`status-badge ${g.status==="En cours"?"in-progress":"completed"}`,children:[f.jsx("span",{className:"status-dot"}),g.status]})})]}),f.jsxs("div",{className:"meta-item",children:[f.jsx("div",{className:"meta-label",children:"Catégorie"}),f.jsx("div",{className:"meta-value",children:g.category})]})]})]})]},g.id)),[l,u,c,h]);return f.jsxs(f.Fragment,{children:[f.jsx("style",{children:pv}),f.jsxs("section",{id:"projects",className:"projects-section",children:[f.jsx("div",{className:"grid-background","aria-hidden":"true"}),f.jsxs("div",{className:"projects-content",children:[f.jsxs("div",{className:"projects-header",children:[f.jsx("h1",{className:"projects-title",children:"Nos Projets Innovants"}),f.jsx("p",{className:"projects-subtitle",children:"Découvrez nos réalisations en Data Science et Intelligence Artificielle"})]}),f.jsx("div",{className:"projects-grid",children:v})]})]})]})}const vv=`
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
`,yv=()=>f.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[f.jsx("circle",{cx:"12",cy:"12",r:"10"}),f.jsx("line",{x1:"2",y1:"12",x2:"22",y2:"12"}),f.jsx("path",{d:"M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"})]}),bv=()=>f.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[f.jsx("path",{d:"M12 2L2 7l10 5 10-5-10-5z"}),f.jsx("path",{d:"M2 17l10 5 10-5"}),f.jsx("path",{d:"M2 12l10 5 10-5"})]}),xv=()=>f.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[f.jsx("ellipse",{cx:"12",cy:"5",rx:"9",ry:"3"}),f.jsx("path",{d:"M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"}),f.jsx("path",{d:"M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"})]}),wv=()=>f.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[f.jsx("line",{x1:"12",y1:"20",x2:"12",y2:"10"}),f.jsx("line",{x1:"18",y1:"20",x2:"18",y2:"4"}),f.jsx("line",{x1:"6",y1:"20",x2:"6",y2:"16"})]}),Sv=()=>f.jsx("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:f.jsx("path",{d:"M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z"})}),Ev=()=>f.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[f.jsx("polyline",{points:"16 18 22 12 16 6"}),f.jsx("polyline",{points:"8 6 2 12 8 18"})]}),jv=()=>f.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[f.jsx("line",{x1:"5",y1:"12",x2:"19",y2:"12"}),f.jsx("polyline",{points:"12 5 19 12 12 19"})]}),Tv=()=>f.jsx("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:f.jsx("path",{d:"M12 3L14 10L21 12L14 14L12 21L10 14L3 12L10 10L12 3Z"})}),dp=kt.memo(({service:l,onClose:r})=>{const u=s=>{s.target===s.currentTarget&&r()};return D.useEffect(()=>{const s=c=>{c.key==="Escape"&&r()};return document.addEventListener("keydown",s),()=>document.removeEventListener("keydown",s)},[r]),f.jsx("div",{className:"service-modal active",onClick:u,role:"dialog","aria-modal":"true","aria-labelledby":"modal-title",children:f.jsxs("div",{className:"modal-content",role:"document",children:[f.jsxs("div",{className:"modal-header",children:[f.jsx("h3",{id:"modal-title",className:"modal-title",children:l.title}),f.jsx("button",{className:"modal-close-btn",onClick:r,"aria-label":"Fermer la fenêtre",children:"×"})]}),f.jsxs("div",{className:"modal-body",children:[f.jsx("p",{children:l.fullDescription}),l.features&&l.features.length>0&&f.jsxs(f.Fragment,{children:[f.jsx("h4",{children:"Points Clés"}),f.jsx("ul",{children:l.features.map((s,c)=>f.jsx("li",{children:s},c))})]}),l.useCases&&f.jsxs(f.Fragment,{children:[f.jsx("h4",{children:"Cas d'Usage"}),f.jsx("p",{children:l.useCases})]})]})]})})});dp.displayName="ServiceDetailModal";const mp=kt.memo(()=>f.jsxs("div",{className:"skeleton-card",role:"status","aria-label":"Chargement du service",children:[f.jsx("div",{className:"skeleton-icon"}),f.jsx("div",{className:"skeleton-title"}),f.jsx("div",{className:"skeleton-text"}),f.jsx("div",{className:"skeleton-text"}),f.jsx("div",{className:"skeleton-text"})]}));mp.displayName="ServiceCardSkeleton";const pp=kt.memo(({service:l,index:r,onServiceClick:u})=>{const s=D.useCallback(()=>{u==null||u(l)},[u,l]),c=D.useCallback(m=>{(m.key==="Enter"||m.key===" ")&&(m.preventDefault(),s())},[s]);return f.jsxs("article",{className:`service-card stagger-${r+1}`,role:"button",tabIndex:"0",onClick:s,onKeyDown:c,"aria-label":`En savoir plus sur ${l.title}`,style:{"--card-gradient-start":l.gradientStart,"--card-gradient-end":l.gradientEnd},children:[f.jsx("div",{className:"service-category",children:l.category}),f.jsx("div",{className:"service-icon",children:l.icon}),f.jsx("h3",{className:"service-card-title",children:l.title}),f.jsx("p",{className:"service-card-description",children:l.description}),f.jsxs("span",{className:"service-card-link",children:["En savoir plus",f.jsx(jv,{})]})]})});pp.displayName="ServiceCard";function Ov(){const[l,r]=D.useState(!0),[u,s]=D.useState(null);D.useEffect(()=>{const p=setTimeout(()=>{r(!1)},1200);return()=>clearTimeout(p)},[]);const c=D.useMemo(()=>[{id:"web-mobile",title:"Développement Web & Mobile",description:"Applications web modernes et mobiles avec les dernières technologies React, Vue.js et React Native.",icon:f.jsx(yv,{}),category:"Développement",gradientStart:"#5B7CFF",gradientEnd:"#8BA3FF",fullDescription:"Nous concevons et développons des applications web robustes et des expériences mobiles fluides, en utilisant des frameworks de pointe comme React, Vue.js pour le web, et React Native pour des applications multiplateformes performantes. Nos solutions sont responsives, optimisées pour la performance et l'expérience utilisateur, et conçues pour évoluer avec vos besoins.",features:["Développement Front-end (React, Vue.js, Angular)","Développement Back-end (Node.js, Python, PHP)","Applications Mobiles NATIVES et Hybrides (React Native, Flutter)","UX/UI Design intuitif et responsive","Intégration d'API et microservices"],useCases:"Sites e-commerce, plateformes SaaS, applications métier, portails clients, MVP de startups."},{id:"ai",title:"Intelligence Artificielle",description:"Solutions d'IA personnalisées, machine learning et deep learning pour automatiser vos processus.",icon:f.jsx(bv,{}),category:"IA & ML",gradientStart:"#8B5CF6",gradientEnd:"#A78BFA",fullDescription:"Exploitez le potentiel de l'intelligence artificielle pour transformer vos opérations. Nous développons des modèles de Machine Learning et de Deep Learning sur mesure, de la reconnaissance d'images à l'analyse prédictive, en passant par le traitement du langage naturel (NLP). Nos solutions IA sont intégrées de manière transparente à votre infrastructure existante.",features:["Machine Learning & Deep Learning","Traitement du Langage Naturel (NLP)","Vision par Ordinateur","Analyse Prédictive et Recommandation","Bots conversationnels et assistants virtuels"],useCases:"Optimisation de processus, personnalisation de l'expérience client, détection de fraudes, maintenance prédictive, analyse de données non structurées."},{id:"governance",title:"Governance des Données",description:"Stratégies de gouvernance des données pour assurer qualité, sécurité et conformité.",icon:f.jsx(xv,{}),category:"Gouvernance",gradientStart:"#06B6D4",gradientEnd:"#22D3EE",fullDescription:"La gouvernance des données est essentielle pour une gestion efficace et conforme de votre patrimoine informationnel. Nous vous aidons à établir des politiques, des processus et des rôles clairs pour garantir la qualité, la sécurité, la confidentialité et la conformité réglementaire de vos données, tout en maximisant leur valeur pour votre entreprise.",features:["Audit et Évaluation de la Maturité des Données","Définition de Politiques de Données","Gestion de la Qualité des Données (DQM)","Conformité Réglementaire (RGPD, HIPAA, etc.)","Sécurité et Confidentialité des Données"],useCases:"Mise en conformité RGPD, amélioration de la fiabilité des rapports, réduction des risques liés aux données, optimisation des processus décisionnels."},{id:"bi",title:"Business Intelligence",description:"Tableaux de bord interactifs et rapports analytiques pour une prise de décision éclairée.",icon:f.jsx(wv,{}),category:"Analytics",gradientStart:"#10B981",gradientEnd:"#34D399",fullDescription:"Transformez vos données brutes en informations exploitables avec nos solutions de Business Intelligence. Nous concevons et implémentons des tableaux de bord interactifs, des rapports personnalisés et des outils d'analyse avancés qui vous offrent une vue à 360 degrés de vos performances, facilitant ainsi la prise de décisions stratégiques.",features:["Conception et Développement de Tableaux de Bord","Reporting Automatisé","Analyse Ad-hoc et Exploration de Données","Intégration de Sources de Données Multiples","Formation et Support aux Utilisateurs"],useCases:"Suivi des ventes, analyse financière, optimisation marketing, performance opérationnelle, compréhension du comportement client."},{id:"data-management",title:"Management des données",description:"Architecture et gestion de bases de données scalables pour optimiser vos performances.",icon:f.jsx(Sv,{}),category:"Infrastructure",gradientStart:"#F59E0B",gradientEnd:"#FBBF24",fullDescription:"Une gestion de données efficace est le pilier de toute stratégie digitale réussie. Nous vous accompagnons dans la conception, l'implémentation et la maintenance de vos infrastructures de données, qu'il s'agisse de bases de données relationnelles, NoSQL, ou de data lakes. Nous nous assurons que vos données sont accessibles, sécurisées et performantes.",features:["Modélisation et Conception de Bases de Données","Optimisation des Performances (SQL/NoSQL)","Migration de Données","Sécurité et Sauvegarde des Données","Intégration et ETL (Extract, Transform, Load)"],useCases:"Centralisation des données, amélioration des temps de réponse des applications, préparation des données pour l'analyse, réduction des coûts de stockage."},{id:"devops",title:"DevOps & Cloud",description:"Infrastructure cloud moderne, CI/CD et automatisation pour accélérer vos déploiements.",icon:f.jsx(Ev,{}),category:"Cloud",gradientStart:"#EF4444",gradientEnd:"#F87171",fullDescription:"Accélérez le cycle de vie de vos applications et optimisez votre infrastructure avec nos services DevOps et Cloud. Nous mettons en place des pipelines CI/CD robustes, des infrastructures as Code (IaC) et des stratégies de déploiement continu sur les principales plateformes cloud (AWS, Azure, GCP), garantissant rapidité, fiabilité et scalabilité.",features:["Mise en place de CI/CD (Jenkins, GitLab CI, GitHub Actions)","Infrastructure as Code (Terraform, Ansible)","Conteneurisation (Docker, Kubernetes)","Migration et Optimisation Cloud (AWS, Azure, GCP)","Surveillance et Logging (Prometheus, Grafana, ELK Stack)"],useCases:"Déploiement rapide de nouvelles fonctionnalités, réduction des erreurs de production, scalabilité des applications, optimisation des coûts cloud."}],[]),m=D.useCallback(p=>{s(p)},[]),h=D.useCallback(()=>{s(null)},[]),v=D.useMemo(()=>f.jsx("div",{className:"services-grid",role:"list",children:c.map((p,b)=>f.jsx(pp,{service:p,index:b,onServiceClick:m},p.id))}),[c,m]),g=D.useMemo(()=>f.jsx("div",{className:"services-grid","aria-busy":"true",children:Array.from({length:6},(p,b)=>f.jsx(mp,{},`skeleton-${b}`))}),[]);return f.jsxs(f.Fragment,{children:[f.jsx("style",{children:vv}),f.jsxs("section",{className:"services-section",id:"services","aria-labelledby":"services-title",children:[f.jsx("div",{className:"grid-overlay","aria-hidden":"true"}),f.jsxs("div",{className:"services-container",children:[f.jsxs("header",{className:"services-header",children:[f.jsxs("div",{className:"services-badge",children:[f.jsx(Tv,{className:"badge-icon"}),"Nos Expertises"]}),f.jsx("h2",{id:"services-title",className:"services-title",children:"Services & Solutions"}),f.jsx("p",{className:"services-subtitle",children:"Des solutions technologiques sur mesure pour transformer votre vision en réalité digitale et propulser votre entreprise vers le futur"})]}),l?g:v]}),u&&f.jsx(dp,{service:u,onClose:h})]})]})}function hp(l,r){return function(){return l.apply(r,arguments)}}const{toString:Nv}=Object.prototype,{getPrototypeOf:$u}=Object,{iterator:Ir,toStringTag:gp}=Symbol,eo=(l=>r=>{const u=Nv.call(r);return l[u]||(l[u]=u.slice(8,-1).toLowerCase())})(Object.create(null)),Bt=l=>(l=l.toLowerCase(),r=>eo(r)===l),to=l=>r=>typeof r===l,{isArray:Pn}=Array,Jn=to("undefined");function ii(l){return l!==null&&!Jn(l)&&l.constructor!==null&&!Jn(l.constructor)&&ct(l.constructor.isBuffer)&&l.constructor.isBuffer(l)}const vp=Bt("ArrayBuffer");function Av(l){let r;return typeof ArrayBuffer<"u"&&ArrayBuffer.isView?r=ArrayBuffer.isView(l):r=l&&l.buffer&&vp(l.buffer),r}const Rv=to("string"),ct=to("function"),yp=to("number"),ri=l=>l!==null&&typeof l=="object",Cv=l=>l===!0||l===!1,Fr=l=>{if(eo(l)!=="object")return!1;const r=$u(l);return(r===null||r===Object.prototype||Object.getPrototypeOf(r)===null)&&!(gp in l)&&!(Ir in l)},_v=l=>{if(!ri(l)||ii(l))return!1;try{return Object.keys(l).length===0&&Object.getPrototypeOf(l)===Object.prototype}catch{return!1}},zv=Bt("Date"),Dv=Bt("File"),Mv=Bt("Blob"),kv=Bt("FileList"),Bv=l=>ri(l)&&ct(l.pipe),Uv=l=>{let r;return l&&(typeof FormData=="function"&&l instanceof FormData||ct(l.append)&&((r=eo(l))==="formdata"||r==="object"&&ct(l.toString)&&l.toString()==="[object FormData]"))},Hv=Bt("URLSearchParams"),[Lv,qv,Fv,Yv]=["ReadableStream","Request","Response","Headers"].map(Bt),Gv=l=>l.trim?l.trim():l.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"");function oi(l,r,{allOwnKeys:u=!1}={}){if(l===null||typeof l>"u")return;let s,c;if(typeof l!="object"&&(l=[l]),Pn(l))for(s=0,c=l.length;s<c;s++)r.call(null,l[s],s,l);else{if(ii(l))return;const m=u?Object.getOwnPropertyNames(l):Object.keys(l),h=m.length;let v;for(s=0;s<h;s++)v=m[s],r.call(null,l[v],v,l)}}function bp(l,r){if(ii(l))return null;r=r.toLowerCase();const u=Object.keys(l);let s=u.length,c;for(;s-- >0;)if(c=u[s],r===c.toLowerCase())return c;return null}const un=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:global,xp=l=>!Jn(l)&&l!==un;function Mu(){const{caseless:l,skipUndefined:r}=xp(this)&&this||{},u={},s=(c,m)=>{const h=l&&bp(u,m)||m;Fr(u[h])&&Fr(c)?u[h]=Mu(u[h],c):Fr(c)?u[h]=Mu({},c):Pn(c)?u[h]=c.slice():(!r||!Jn(c))&&(u[h]=c)};for(let c=0,m=arguments.length;c<m;c++)arguments[c]&&oi(arguments[c],s);return u}const Xv=(l,r,u,{allOwnKeys:s}={})=>(oi(r,(c,m)=>{u&&ct(c)?l[m]=hp(c,u):l[m]=c},{allOwnKeys:s}),l),Vv=l=>(l.charCodeAt(0)===65279&&(l=l.slice(1)),l),Qv=(l,r,u,s)=>{l.prototype=Object.create(r.prototype,s),l.prototype.constructor=l,Object.defineProperty(l,"super",{value:r.prototype}),u&&Object.assign(l.prototype,u)},Zv=(l,r,u,s)=>{let c,m,h;const v={};if(r=r||{},l==null)return r;do{for(c=Object.getOwnPropertyNames(l),m=c.length;m-- >0;)h=c[m],(!s||s(h,l,r))&&!v[h]&&(r[h]=l[h],v[h]=!0);l=u!==!1&&$u(l)}while(l&&(!u||u(l,r))&&l!==Object.prototype);return r},Kv=(l,r,u)=>{l=String(l),(u===void 0||u>l.length)&&(u=l.length),u-=r.length;const s=l.indexOf(r,u);return s!==-1&&s===u},Jv=l=>{if(!l)return null;if(Pn(l))return l;let r=l.length;if(!yp(r))return null;const u=new Array(r);for(;r-- >0;)u[r]=l[r];return u},$v=(l=>r=>l&&r instanceof l)(typeof Uint8Array<"u"&&$u(Uint8Array)),Wv=(l,r)=>{const s=(l&&l[Ir]).call(l);let c;for(;(c=s.next())&&!c.done;){const m=c.value;r.call(l,m[0],m[1])}},Pv=(l,r)=>{let u;const s=[];for(;(u=l.exec(r))!==null;)s.push(u);return s},Iv=Bt("HTMLFormElement"),e5=l=>l.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g,function(u,s,c){return s.toUpperCase()+c}),E0=(({hasOwnProperty:l})=>(r,u)=>l.call(r,u))(Object.prototype),t5=Bt("RegExp"),wp=(l,r)=>{const u=Object.getOwnPropertyDescriptors(l),s={};oi(u,(c,m)=>{let h;(h=r(c,m,l))!==!1&&(s[m]=h||c)}),Object.defineProperties(l,s)},a5=l=>{wp(l,(r,u)=>{if(ct(l)&&["arguments","caller","callee"].indexOf(u)!==-1)return!1;const s=l[u];if(ct(s)){if(r.enumerable=!1,"writable"in r){r.writable=!1;return}r.set||(r.set=()=>{throw Error("Can not rewrite read-only method '"+u+"'")})}})},n5=(l,r)=>{const u={},s=c=>{c.forEach(m=>{u[m]=!0})};return Pn(l)?s(l):s(String(l).split(r)),u},l5=()=>{},i5=(l,r)=>l!=null&&Number.isFinite(l=+l)?l:r;function r5(l){return!!(l&&ct(l.append)&&l[gp]==="FormData"&&l[Ir])}const o5=l=>{const r=new Array(10),u=(s,c)=>{if(ri(s)){if(r.indexOf(s)>=0)return;if(ii(s))return s;if(!("toJSON"in s)){r[c]=s;const m=Pn(s)?[]:{};return oi(s,(h,v)=>{const g=u(h,c+1);!Jn(g)&&(m[v]=g)}),r[c]=void 0,m}}return s};return u(l,0)},s5=Bt("AsyncFunction"),u5=l=>l&&(ri(l)||ct(l))&&ct(l.then)&&ct(l.catch),Sp=((l,r)=>l?setImmediate:r?((u,s)=>(un.addEventListener("message",({source:c,data:m})=>{c===un&&m===u&&s.length&&s.shift()()},!1),c=>{s.push(c),un.postMessage(u,"*")}))(`axios@${Math.random()}`,[]):u=>setTimeout(u))(typeof setImmediate=="function",ct(un.postMessage)),c5=typeof queueMicrotask<"u"?queueMicrotask.bind(un):typeof process<"u"&&process.nextTick||Sp,f5=l=>l!=null&&ct(l[Ir]),U={isArray:Pn,isArrayBuffer:vp,isBuffer:ii,isFormData:Uv,isArrayBufferView:Av,isString:Rv,isNumber:yp,isBoolean:Cv,isObject:ri,isPlainObject:Fr,isEmptyObject:_v,isReadableStream:Lv,isRequest:qv,isResponse:Fv,isHeaders:Yv,isUndefined:Jn,isDate:zv,isFile:Dv,isBlob:Mv,isRegExp:t5,isFunction:ct,isStream:Bv,isURLSearchParams:Hv,isTypedArray:$v,isFileList:kv,forEach:oi,merge:Mu,extend:Xv,trim:Gv,stripBOM:Vv,inherits:Qv,toFlatObject:Zv,kindOf:eo,kindOfTest:Bt,endsWith:Kv,toArray:Jv,forEachEntry:Wv,matchAll:Pv,isHTMLForm:Iv,hasOwnProperty:E0,hasOwnProp:E0,reduceDescriptors:wp,freezeMethods:a5,toObjectSet:n5,toCamelCase:e5,noop:l5,toFiniteNumber:i5,findKey:bp,global:un,isContextDefined:xp,isSpecCompliantForm:r5,toJSONObject:o5,isAsyncFn:s5,isThenable:u5,setImmediate:Sp,asap:c5,isIterable:f5};function me(l,r,u,s,c){Error.call(this),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=new Error().stack,this.message=l,this.name="AxiosError",r&&(this.code=r),u&&(this.config=u),s&&(this.request=s),c&&(this.response=c,this.status=c.status?c.status:null)}U.inherits(me,Error,{toJSON:function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:U.toJSONObject(this.config),code:this.code,status:this.status}}});const Ep=me.prototype,jp={};["ERR_BAD_OPTION_VALUE","ERR_BAD_OPTION","ECONNABORTED","ETIMEDOUT","ERR_NETWORK","ERR_FR_TOO_MANY_REDIRECTS","ERR_DEPRECATED","ERR_BAD_RESPONSE","ERR_BAD_REQUEST","ERR_CANCELED","ERR_NOT_SUPPORT","ERR_INVALID_URL"].forEach(l=>{jp[l]={value:l}});Object.defineProperties(me,jp);Object.defineProperty(Ep,"isAxiosError",{value:!0});me.from=(l,r,u,s,c,m)=>{const h=Object.create(Ep);U.toFlatObject(l,h,function(b){return b!==Error.prototype},p=>p!=="isAxiosError");const v=l&&l.message?l.message:"Error",g=r==null&&l?l.code:r;return me.call(h,v,g,u,s,c),l&&h.cause==null&&Object.defineProperty(h,"cause",{value:l,configurable:!0}),h.name=l&&l.name||"Error",m&&Object.assign(h,m),h};const d5=null;function ku(l){return U.isPlainObject(l)||U.isArray(l)}function Tp(l){return U.endsWith(l,"[]")?l.slice(0,-2):l}function j0(l,r,u){return l?l.concat(r).map(function(c,m){return c=Tp(c),!u&&m?"["+c+"]":c}).join(u?".":""):r}function m5(l){return U.isArray(l)&&!l.some(ku)}const p5=U.toFlatObject(U,{},null,function(r){return/^is[A-Z]/.test(r)});function ao(l,r,u){if(!U.isObject(l))throw new TypeError("target must be an object");r=r||new FormData,u=U.toFlatObject(u,{metaTokens:!0,dots:!1,indexes:!1},!1,function(O,E){return!U.isUndefined(E[O])});const s=u.metaTokens,c=u.visitor||b,m=u.dots,h=u.indexes,g=(u.Blob||typeof Blob<"u"&&Blob)&&U.isSpecCompliantForm(r);if(!U.isFunction(c))throw new TypeError("visitor must be a function");function p(x){if(x===null)return"";if(U.isDate(x))return x.toISOString();if(U.isBoolean(x))return x.toString();if(!g&&U.isBlob(x))throw new me("Blob is not supported. Use a Buffer instead.");return U.isArrayBuffer(x)||U.isTypedArray(x)?g&&typeof Blob=="function"?new Blob([x]):Buffer.from(x):x}function b(x,O,E){let _=x;if(x&&!E&&typeof x=="object"){if(U.endsWith(O,"{}"))O=s?O:O.slice(0,-2),x=JSON.stringify(x);else if(U.isArray(x)&&m5(x)||(U.isFileList(x)||U.endsWith(O,"[]"))&&(_=U.toArray(x)))return O=Tp(O),_.forEach(function(C,Q){!(U.isUndefined(C)||C===null)&&r.append(h===!0?j0([O],Q,m):h===null?O:O+"[]",p(C))}),!1}return ku(x)?!0:(r.append(j0(E,O,m),p(x)),!1)}const S=[],N=Object.assign(p5,{defaultVisitor:b,convertValue:p,isVisitable:ku});function T(x,O){if(!U.isUndefined(x)){if(S.indexOf(x)!==-1)throw Error("Circular reference detected in "+O.join("."));S.push(x),U.forEach(x,function(_,M){(!(U.isUndefined(_)||_===null)&&c.call(r,_,U.isString(M)?M.trim():M,O,N))===!0&&T(_,O?O.concat(M):[M])}),S.pop()}}if(!U.isObject(l))throw new TypeError("data must be an object");return T(l),r}function T0(l){const r={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+","%00":"\0"};return encodeURIComponent(l).replace(/[!'()~]|%20|%00/g,function(s){return r[s]})}function Wu(l,r){this._pairs=[],l&&ao(l,this,r)}const Op=Wu.prototype;Op.append=function(r,u){this._pairs.push([r,u])};Op.toString=function(r){const u=r?function(s){return r.call(this,s,T0)}:T0;return this._pairs.map(function(c){return u(c[0])+"="+u(c[1])},"").join("&")};function h5(l){return encodeURIComponent(l).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+")}function Np(l,r,u){if(!r)return l;const s=u&&u.encode||h5;U.isFunction(u)&&(u={serialize:u});const c=u&&u.serialize;let m;if(c?m=c(r,u):m=U.isURLSearchParams(r)?r.toString():new Wu(r,u).toString(s),m){const h=l.indexOf("#");h!==-1&&(l=l.slice(0,h)),l+=(l.indexOf("?")===-1?"?":"&")+m}return l}class O0{constructor(){this.handlers=[]}use(r,u,s){return this.handlers.push({fulfilled:r,rejected:u,synchronous:s?s.synchronous:!1,runWhen:s?s.runWhen:null}),this.handlers.length-1}eject(r){this.handlers[r]&&(this.handlers[r]=null)}clear(){this.handlers&&(this.handlers=[])}forEach(r){U.forEach(this.handlers,function(s){s!==null&&r(s)})}}const Ap={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1},g5=typeof URLSearchParams<"u"?URLSearchParams:Wu,v5=typeof FormData<"u"?FormData:null,y5=typeof Blob<"u"?Blob:null,b5={isBrowser:!0,classes:{URLSearchParams:g5,FormData:v5,Blob:y5},protocols:["http","https","file","blob","url","data"]},Pu=typeof window<"u"&&typeof document<"u",Bu=typeof navigator=="object"&&navigator||void 0,x5=Pu&&(!Bu||["ReactNative","NativeScript","NS"].indexOf(Bu.product)<0),w5=typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope&&typeof self.importScripts=="function",S5=Pu&&window.location.href||"http://localhost",E5=Object.freeze(Object.defineProperty({__proto__:null,hasBrowserEnv:Pu,hasStandardBrowserEnv:x5,hasStandardBrowserWebWorkerEnv:w5,navigator:Bu,origin:S5},Symbol.toStringTag,{value:"Module"})),lt={...E5,...b5};function j5(l,r){return ao(l,new lt.classes.URLSearchParams,{visitor:function(u,s,c,m){return lt.isNode&&U.isBuffer(u)?(this.append(s,u.toString("base64")),!1):m.defaultVisitor.apply(this,arguments)},...r})}function T5(l){return U.matchAll(/\w+|\[(\w*)]/g,l).map(r=>r[0]==="[]"?"":r[1]||r[0])}function O5(l){const r={},u=Object.keys(l);let s;const c=u.length;let m;for(s=0;s<c;s++)m=u[s],r[m]=l[m];return r}function Rp(l){function r(u,s,c,m){let h=u[m++];if(h==="__proto__")return!0;const v=Number.isFinite(+h),g=m>=u.length;return h=!h&&U.isArray(c)?c.length:h,g?(U.hasOwnProp(c,h)?c[h]=[c[h],s]:c[h]=s,!v):((!c[h]||!U.isObject(c[h]))&&(c[h]=[]),r(u,s,c[h],m)&&U.isArray(c[h])&&(c[h]=O5(c[h])),!v)}if(U.isFormData(l)&&U.isFunction(l.entries)){const u={};return U.forEachEntry(l,(s,c)=>{r(T5(s),c,u,0)}),u}return null}function N5(l,r,u){if(U.isString(l))try{return(r||JSON.parse)(l),U.trim(l)}catch(s){if(s.name!=="SyntaxError")throw s}return(u||JSON.stringify)(l)}const si={transitional:Ap,adapter:["xhr","http","fetch"],transformRequest:[function(r,u){const s=u.getContentType()||"",c=s.indexOf("application/json")>-1,m=U.isObject(r);if(m&&U.isHTMLForm(r)&&(r=new FormData(r)),U.isFormData(r))return c?JSON.stringify(Rp(r)):r;if(U.isArrayBuffer(r)||U.isBuffer(r)||U.isStream(r)||U.isFile(r)||U.isBlob(r)||U.isReadableStream(r))return r;if(U.isArrayBufferView(r))return r.buffer;if(U.isURLSearchParams(r))return u.setContentType("application/x-www-form-urlencoded;charset=utf-8",!1),r.toString();let v;if(m){if(s.indexOf("application/x-www-form-urlencoded")>-1)return j5(r,this.formSerializer).toString();if((v=U.isFileList(r))||s.indexOf("multipart/form-data")>-1){const g=this.env&&this.env.FormData;return ao(v?{"files[]":r}:r,g&&new g,this.formSerializer)}}return m||c?(u.setContentType("application/json",!1),N5(r)):r}],transformResponse:[function(r){const u=this.transitional||si.transitional,s=u&&u.forcedJSONParsing,c=this.responseType==="json";if(U.isResponse(r)||U.isReadableStream(r))return r;if(r&&U.isString(r)&&(s&&!this.responseType||c)){const h=!(u&&u.silentJSONParsing)&&c;try{return JSON.parse(r,this.parseReviver)}catch(v){if(h)throw v.name==="SyntaxError"?me.from(v,me.ERR_BAD_RESPONSE,this,null,this.response):v}}return r}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:lt.classes.FormData,Blob:lt.classes.Blob},validateStatus:function(r){return r>=200&&r<300},headers:{common:{Accept:"application/json, text/plain, */*","Content-Type":void 0}}};U.forEach(["delete","get","head","post","put","patch"],l=>{si.headers[l]={}});const A5=U.toObjectSet(["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"]),R5=l=>{const r={};let u,s,c;return l&&l.split(`
`).forEach(function(h){c=h.indexOf(":"),u=h.substring(0,c).trim().toLowerCase(),s=h.substring(c+1).trim(),!(!u||r[u]&&A5[u])&&(u==="set-cookie"?r[u]?r[u].push(s):r[u]=[s]:r[u]=r[u]?r[u]+", "+s:s)}),r},N0=Symbol("internals");function ei(l){return l&&String(l).trim().toLowerCase()}function Yr(l){return l===!1||l==null?l:U.isArray(l)?l.map(Yr):String(l)}function C5(l){const r=Object.create(null),u=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;let s;for(;s=u.exec(l);)r[s[1]]=s[2];return r}const _5=l=>/^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(l.trim());function Au(l,r,u,s,c){if(U.isFunction(s))return s.call(this,r,u);if(c&&(r=u),!!U.isString(r)){if(U.isString(s))return r.indexOf(s)!==-1;if(U.isRegExp(s))return s.test(r)}}function z5(l){return l.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,(r,u,s)=>u.toUpperCase()+s)}function D5(l,r){const u=U.toCamelCase(" "+r);["get","set","has"].forEach(s=>{Object.defineProperty(l,s+u,{value:function(c,m,h){return this[s].call(this,r,c,m,h)},configurable:!0})})}let ft=class{constructor(r){r&&this.set(r)}set(r,u,s){const c=this;function m(v,g,p){const b=ei(g);if(!b)throw new Error("header name must be a non-empty string");const S=U.findKey(c,b);(!S||c[S]===void 0||p===!0||p===void 0&&c[S]!==!1)&&(c[S||g]=Yr(v))}const h=(v,g)=>U.forEach(v,(p,b)=>m(p,b,g));if(U.isPlainObject(r)||r instanceof this.constructor)h(r,u);else if(U.isString(r)&&(r=r.trim())&&!_5(r))h(R5(r),u);else if(U.isObject(r)&&U.isIterable(r)){let v={},g,p;for(const b of r){if(!U.isArray(b))throw TypeError("Object iterator must return a key-value pair");v[p=b[0]]=(g=v[p])?U.isArray(g)?[...g,b[1]]:[g,b[1]]:b[1]}h(v,u)}else r!=null&&m(u,r,s);return this}get(r,u){if(r=ei(r),r){const s=U.findKey(this,r);if(s){const c=this[s];if(!u)return c;if(u===!0)return C5(c);if(U.isFunction(u))return u.call(this,c,s);if(U.isRegExp(u))return u.exec(c);throw new TypeError("parser must be boolean|regexp|function")}}}has(r,u){if(r=ei(r),r){const s=U.findKey(this,r);return!!(s&&this[s]!==void 0&&(!u||Au(this,this[s],s,u)))}return!1}delete(r,u){const s=this;let c=!1;function m(h){if(h=ei(h),h){const v=U.findKey(s,h);v&&(!u||Au(s,s[v],v,u))&&(delete s[v],c=!0)}}return U.isArray(r)?r.forEach(m):m(r),c}clear(r){const u=Object.keys(this);let s=u.length,c=!1;for(;s--;){const m=u[s];(!r||Au(this,this[m],m,r,!0))&&(delete this[m],c=!0)}return c}normalize(r){const u=this,s={};return U.forEach(this,(c,m)=>{const h=U.findKey(s,m);if(h){u[h]=Yr(c),delete u[m];return}const v=r?z5(m):String(m).trim();v!==m&&delete u[m],u[v]=Yr(c),s[v]=!0}),this}concat(...r){return this.constructor.concat(this,...r)}toJSON(r){const u=Object.create(null);return U.forEach(this,(s,c)=>{s!=null&&s!==!1&&(u[c]=r&&U.isArray(s)?s.join(", "):s)}),u}[Symbol.iterator](){return Object.entries(this.toJSON())[Symbol.iterator]()}toString(){return Object.entries(this.toJSON()).map(([r,u])=>r+": "+u).join(`
`)}getSetCookie(){return this.get("set-cookie")||[]}get[Symbol.toStringTag](){return"AxiosHeaders"}static from(r){return r instanceof this?r:new this(r)}static concat(r,...u){const s=new this(r);return u.forEach(c=>s.set(c)),s}static accessor(r){const s=(this[N0]=this[N0]={accessors:{}}).accessors,c=this.prototype;function m(h){const v=ei(h);s[v]||(D5(c,h),s[v]=!0)}return U.isArray(r)?r.forEach(m):m(r),this}};ft.accessor(["Content-Type","Content-Length","Accept","Accept-Encoding","User-Agent","Authorization"]);U.reduceDescriptors(ft.prototype,({value:l},r)=>{let u=r[0].toUpperCase()+r.slice(1);return{get:()=>l,set(s){this[u]=s}}});U.freezeMethods(ft);function Ru(l,r){const u=this||si,s=r||u,c=ft.from(s.headers);let m=s.data;return U.forEach(l,function(v){m=v.call(u,m,c.normalize(),r?r.status:void 0)}),c.normalize(),m}function Cp(l){return!!(l&&l.__CANCEL__)}function In(l,r,u){me.call(this,l??"canceled",me.ERR_CANCELED,r,u),this.name="CanceledError"}U.inherits(In,me,{__CANCEL__:!0});function _p(l,r,u){const s=u.config.validateStatus;!u.status||!s||s(u.status)?l(u):r(new me("Request failed with status code "+u.status,[me.ERR_BAD_REQUEST,me.ERR_BAD_RESPONSE][Math.floor(u.status/100)-4],u.config,u.request,u))}function M5(l){const r=/^([-+\w]{1,25})(:?\/\/|:)/.exec(l);return r&&r[1]||""}function k5(l,r){l=l||10;const u=new Array(l),s=new Array(l);let c=0,m=0,h;return r=r!==void 0?r:1e3,function(g){const p=Date.now(),b=s[m];h||(h=p),u[c]=g,s[c]=p;let S=m,N=0;for(;S!==c;)N+=u[S++],S=S%l;if(c=(c+1)%l,c===m&&(m=(m+1)%l),p-h<r)return;const T=b&&p-b;return T?Math.round(N*1e3/T):void 0}}function B5(l,r){let u=0,s=1e3/r,c,m;const h=(p,b=Date.now())=>{u=b,c=null,m&&(clearTimeout(m),m=null),l(...p)};return[(...p)=>{const b=Date.now(),S=b-u;S>=s?h(p,b):(c=p,m||(m=setTimeout(()=>{m=null,h(c)},s-S)))},()=>c&&h(c)]}const Zr=(l,r,u=3)=>{let s=0;const c=k5(50,250);return B5(m=>{const h=m.loaded,v=m.lengthComputable?m.total:void 0,g=h-s,p=c(g),b=h<=v;s=h;const S={loaded:h,total:v,progress:v?h/v:void 0,bytes:g,rate:p||void 0,estimated:p&&v&&b?(v-h)/p:void 0,event:m,lengthComputable:v!=null,[r?"download":"upload"]:!0};l(S)},u)},A0=(l,r)=>{const u=l!=null;return[s=>r[0]({lengthComputable:u,total:l,loaded:s}),r[1]]},R0=l=>(...r)=>U.asap(()=>l(...r)),U5=lt.hasStandardBrowserEnv?((l,r)=>u=>(u=new URL(u,lt.origin),l.protocol===u.protocol&&l.host===u.host&&(r||l.port===u.port)))(new URL(lt.origin),lt.navigator&&/(msie|trident)/i.test(lt.navigator.userAgent)):()=>!0,H5=lt.hasStandardBrowserEnv?{write(l,r,u,s,c,m,h){if(typeof document>"u")return;const v=[`${l}=${encodeURIComponent(r)}`];U.isNumber(u)&&v.push(`expires=${new Date(u).toUTCString()}`),U.isString(s)&&v.push(`path=${s}`),U.isString(c)&&v.push(`domain=${c}`),m===!0&&v.push("secure"),U.isString(h)&&v.push(`SameSite=${h}`),document.cookie=v.join("; ")},read(l){if(typeof document>"u")return null;const r=document.cookie.match(new RegExp("(?:^|; )"+l+"=([^;]*)"));return r?decodeURIComponent(r[1]):null},remove(l){this.write(l,"",Date.now()-864e5,"/")}}:{write(){},read(){return null},remove(){}};function L5(l){return/^([a-z][a-z\d+\-.]*:)?\/\//i.test(l)}function q5(l,r){return r?l.replace(/\/?\/$/,"")+"/"+r.replace(/^\/+/,""):l}function zp(l,r,u){let s=!L5(r);return l&&(s||u==!1)?q5(l,r):r}const C0=l=>l instanceof ft?{...l}:l;function fn(l,r){r=r||{};const u={};function s(p,b,S,N){return U.isPlainObject(p)&&U.isPlainObject(b)?U.merge.call({caseless:N},p,b):U.isPlainObject(b)?U.merge({},b):U.isArray(b)?b.slice():b}function c(p,b,S,N){if(U.isUndefined(b)){if(!U.isUndefined(p))return s(void 0,p,S,N)}else return s(p,b,S,N)}function m(p,b){if(!U.isUndefined(b))return s(void 0,b)}function h(p,b){if(U.isUndefined(b)){if(!U.isUndefined(p))return s(void 0,p)}else return s(void 0,b)}function v(p,b,S){if(S in r)return s(p,b);if(S in l)return s(void 0,p)}const g={url:m,method:m,data:m,baseURL:h,transformRequest:h,transformResponse:h,paramsSerializer:h,timeout:h,timeoutMessage:h,withCredentials:h,withXSRFToken:h,adapter:h,responseType:h,xsrfCookieName:h,xsrfHeaderName:h,onUploadProgress:h,onDownloadProgress:h,decompress:h,maxContentLength:h,maxBodyLength:h,beforeRedirect:h,transport:h,httpAgent:h,httpsAgent:h,cancelToken:h,socketPath:h,responseEncoding:h,validateStatus:v,headers:(p,b,S)=>c(C0(p),C0(b),S,!0)};return U.forEach(Object.keys({...l,...r}),function(b){const S=g[b]||c,N=S(l[b],r[b],b);U.isUndefined(N)&&S!==v||(u[b]=N)}),u}const Dp=l=>{const r=fn({},l);let{data:u,withXSRFToken:s,xsrfHeaderName:c,xsrfCookieName:m,headers:h,auth:v}=r;if(r.headers=h=ft.from(h),r.url=Np(zp(r.baseURL,r.url,r.allowAbsoluteUrls),l.params,l.paramsSerializer),v&&h.set("Authorization","Basic "+btoa((v.username||"")+":"+(v.password?unescape(encodeURIComponent(v.password)):""))),U.isFormData(u)){if(lt.hasStandardBrowserEnv||lt.hasStandardBrowserWebWorkerEnv)h.setContentType(void 0);else if(U.isFunction(u.getHeaders)){const g=u.getHeaders(),p=["content-type","content-length"];Object.entries(g).forEach(([b,S])=>{p.includes(b.toLowerCase())&&h.set(b,S)})}}if(lt.hasStandardBrowserEnv&&(s&&U.isFunction(s)&&(s=s(r)),s||s!==!1&&U5(r.url))){const g=c&&m&&H5.read(m);g&&h.set(c,g)}return r},F5=typeof XMLHttpRequest<"u",Y5=F5&&function(l){return new Promise(function(u,s){const c=Dp(l);let m=c.data;const h=ft.from(c.headers).normalize();let{responseType:v,onUploadProgress:g,onDownloadProgress:p}=c,b,S,N,T,x;function O(){T&&T(),x&&x(),c.cancelToken&&c.cancelToken.unsubscribe(b),c.signal&&c.signal.removeEventListener("abort",b)}let E=new XMLHttpRequest;E.open(c.method.toUpperCase(),c.url,!0),E.timeout=c.timeout;function _(){if(!E)return;const C=ft.from("getAllResponseHeaders"in E&&E.getAllResponseHeaders()),X={data:!v||v==="text"||v==="json"?E.responseText:E.response,status:E.status,statusText:E.statusText,headers:C,config:l,request:E};_p(function(J){u(J),O()},function(J){s(J),O()},X),E=null}"onloadend"in E?E.onloadend=_:E.onreadystatechange=function(){!E||E.readyState!==4||E.status===0&&!(E.responseURL&&E.responseURL.indexOf("file:")===0)||setTimeout(_)},E.onabort=function(){E&&(s(new me("Request aborted",me.ECONNABORTED,l,E)),E=null)},E.onerror=function(Q){const X=Q&&Q.message?Q.message:"Network Error",$=new me(X,me.ERR_NETWORK,l,E);$.event=Q||null,s($),E=null},E.ontimeout=function(){let Q=c.timeout?"timeout of "+c.timeout+"ms exceeded":"timeout exceeded";const X=c.transitional||Ap;c.timeoutErrorMessage&&(Q=c.timeoutErrorMessage),s(new me(Q,X.clarifyTimeoutError?me.ETIMEDOUT:me.ECONNABORTED,l,E)),E=null},m===void 0&&h.setContentType(null),"setRequestHeader"in E&&U.forEach(h.toJSON(),function(Q,X){E.setRequestHeader(X,Q)}),U.isUndefined(c.withCredentials)||(E.withCredentials=!!c.withCredentials),v&&v!=="json"&&(E.responseType=c.responseType),p&&([N,x]=Zr(p,!0),E.addEventListener("progress",N)),g&&E.upload&&([S,T]=Zr(g),E.upload.addEventListener("progress",S),E.upload.addEventListener("loadend",T)),(c.cancelToken||c.signal)&&(b=C=>{E&&(s(!C||C.type?new In(null,l,E):C),E.abort(),E=null)},c.cancelToken&&c.cancelToken.subscribe(b),c.signal&&(c.signal.aborted?b():c.signal.addEventListener("abort",b)));const M=M5(c.url);if(M&&lt.protocols.indexOf(M)===-1){s(new me("Unsupported protocol "+M+":",me.ERR_BAD_REQUEST,l));return}E.send(m||null)})},G5=(l,r)=>{const{length:u}=l=l?l.filter(Boolean):[];if(r||u){let s=new AbortController,c;const m=function(p){if(!c){c=!0,v();const b=p instanceof Error?p:this.reason;s.abort(b instanceof me?b:new In(b instanceof Error?b.message:b))}};let h=r&&setTimeout(()=>{h=null,m(new me(`timeout ${r} of ms exceeded`,me.ETIMEDOUT))},r);const v=()=>{l&&(h&&clearTimeout(h),h=null,l.forEach(p=>{p.unsubscribe?p.unsubscribe(m):p.removeEventListener("abort",m)}),l=null)};l.forEach(p=>p.addEventListener("abort",m));const{signal:g}=s;return g.unsubscribe=()=>U.asap(v),g}},X5=function*(l,r){let u=l.byteLength;if(u<r){yield l;return}let s=0,c;for(;s<u;)c=s+r,yield l.slice(s,c),s=c},V5=async function*(l,r){for await(const u of Q5(l))yield*X5(u,r)},Q5=async function*(l){if(l[Symbol.asyncIterator]){yield*l;return}const r=l.getReader();try{for(;;){const{done:u,value:s}=await r.read();if(u)break;yield s}}finally{await r.cancel()}},_0=(l,r,u,s)=>{const c=V5(l,r);let m=0,h,v=g=>{h||(h=!0,s&&s(g))};return new ReadableStream({async pull(g){try{const{done:p,value:b}=await c.next();if(p){v(),g.close();return}let S=b.byteLength;if(u){let N=m+=S;u(N)}g.enqueue(new Uint8Array(b))}catch(p){throw v(p),p}},cancel(g){return v(g),c.return()}},{highWaterMark:2})},z0=64*1024,{isFunction:Hr}=U,Z5=(({Request:l,Response:r})=>({Request:l,Response:r}))(U.global),{ReadableStream:D0,TextEncoder:M0}=U.global,k0=(l,...r)=>{try{return!!l(...r)}catch{return!1}},K5=l=>{l=U.merge.call({skipUndefined:!0},Z5,l);const{fetch:r,Request:u,Response:s}=l,c=r?Hr(r):typeof fetch=="function",m=Hr(u),h=Hr(s);if(!c)return!1;const v=c&&Hr(D0),g=c&&(typeof M0=="function"?(x=>O=>x.encode(O))(new M0):async x=>new Uint8Array(await new u(x).arrayBuffer())),p=m&&v&&k0(()=>{let x=!1;const O=new u(lt.origin,{body:new D0,method:"POST",get duplex(){return x=!0,"half"}}).headers.has("Content-Type");return x&&!O}),b=h&&v&&k0(()=>U.isReadableStream(new s("").body)),S={stream:b&&(x=>x.body)};c&&["text","arrayBuffer","blob","formData","stream"].forEach(x=>{!S[x]&&(S[x]=(O,E)=>{let _=O&&O[x];if(_)return _.call(O);throw new me(`Response type '${x}' is not supported`,me.ERR_NOT_SUPPORT,E)})});const N=async x=>{if(x==null)return 0;if(U.isBlob(x))return x.size;if(U.isSpecCompliantForm(x))return(await new u(lt.origin,{method:"POST",body:x}).arrayBuffer()).byteLength;if(U.isArrayBufferView(x)||U.isArrayBuffer(x))return x.byteLength;if(U.isURLSearchParams(x)&&(x=x+""),U.isString(x))return(await g(x)).byteLength},T=async(x,O)=>{const E=U.toFiniteNumber(x.getContentLength());return E??N(O)};return async x=>{let{url:O,method:E,data:_,signal:M,cancelToken:C,timeout:Q,onDownloadProgress:X,onUploadProgress:$,responseType:J,headers:ie,withCredentials:Y="same-origin",fetchOptions:Z}=Dp(x),W=r||fetch;J=J?(J+"").toLowerCase():"text";let L=G5([M,C&&C.toAbortSignal()],Q),ee=null;const P=L&&L.unsubscribe&&(()=>{L.unsubscribe()});let Se;try{if($&&p&&E!=="get"&&E!=="head"&&(Se=await T(ie,_))!==0){let G=new u(O,{method:"POST",body:_,duplex:"half"}),ae;if(U.isFormData(_)&&(ae=G.headers.get("content-type"))&&ie.setContentType(ae),G.body){const[ne,I]=A0(Se,Zr(R0($)));_=_0(G.body,z0,ne,I)}}U.isString(Y)||(Y=Y?"include":"omit");const K=m&&"credentials"in u.prototype,oe={...Z,signal:L,method:E.toUpperCase(),headers:ie.normalize().toJSON(),body:_,duplex:"half",credentials:K?Y:void 0};ee=m&&new u(O,oe);let te=await(m?W(ee,Z):W(O,oe));const be=b&&(J==="stream"||J==="response");if(b&&(X||be&&P)){const G={};["status","statusText","headers"].forEach(pe=>{G[pe]=te[pe]});const ae=U.toFiniteNumber(te.headers.get("content-length")),[ne,I]=X&&A0(ae,Zr(R0(X),!0))||[];te=new s(_0(te.body,z0,ne,()=>{I&&I(),P&&P()}),G)}J=J||"text";let j=await S[U.findKey(S,J)||"text"](te,x);return!be&&P&&P(),await new Promise((G,ae)=>{_p(G,ae,{data:j,headers:ft.from(te.headers),status:te.status,statusText:te.statusText,config:x,request:ee})})}catch(K){throw P&&P(),K&&K.name==="TypeError"&&/Load failed|fetch/i.test(K.message)?Object.assign(new me("Network Error",me.ERR_NETWORK,x,ee),{cause:K.cause||K}):me.from(K,K&&K.code,x,ee)}}},J5=new Map,Mp=l=>{let r=l&&l.env||{};const{fetch:u,Request:s,Response:c}=r,m=[s,c,u];let h=m.length,v=h,g,p,b=J5;for(;v--;)g=m[v],p=b.get(g),p===void 0&&b.set(g,p=v?new Map:K5(r)),b=p;return p};Mp();const Iu={http:d5,xhr:Y5,fetch:{get:Mp}};U.forEach(Iu,(l,r)=>{if(l){try{Object.defineProperty(l,"name",{value:r})}catch{}Object.defineProperty(l,"adapterName",{value:r})}});const B0=l=>`- ${l}`,$5=l=>U.isFunction(l)||l===null||l===!1;function W5(l,r){l=U.isArray(l)?l:[l];const{length:u}=l;let s,c;const m={};for(let h=0;h<u;h++){s=l[h];let v;if(c=s,!$5(s)&&(c=Iu[(v=String(s)).toLowerCase()],c===void 0))throw new me(`Unknown adapter '${v}'`);if(c&&(U.isFunction(c)||(c=c.get(r))))break;m[v||"#"+h]=c}if(!c){const h=Object.entries(m).map(([g,p])=>`adapter ${g} `+(p===!1?"is not supported by the environment":"is not available in the build"));let v=u?h.length>1?`since :
`+h.map(B0).join(`
`):" "+B0(h[0]):"as no adapter specified";throw new me("There is no suitable adapter to dispatch the request "+v,"ERR_NOT_SUPPORT")}return c}const kp={getAdapter:W5,adapters:Iu};function Cu(l){if(l.cancelToken&&l.cancelToken.throwIfRequested(),l.signal&&l.signal.aborted)throw new In(null,l)}function U0(l){return Cu(l),l.headers=ft.from(l.headers),l.data=Ru.call(l,l.transformRequest),["post","put","patch"].indexOf(l.method)!==-1&&l.headers.setContentType("application/x-www-form-urlencoded",!1),kp.getAdapter(l.adapter||si.adapter,l)(l).then(function(s){return Cu(l),s.data=Ru.call(l,l.transformResponse,s),s.headers=ft.from(s.headers),s},function(s){return Cp(s)||(Cu(l),s&&s.response&&(s.response.data=Ru.call(l,l.transformResponse,s.response),s.response.headers=ft.from(s.response.headers))),Promise.reject(s)})}const Bp="1.13.2",no={};["object","boolean","number","function","string","symbol"].forEach((l,r)=>{no[l]=function(s){return typeof s===l||"a"+(r<1?"n ":" ")+l}});const H0={};no.transitional=function(r,u,s){function c(m,h){return"[Axios v"+Bp+"] Transitional option '"+m+"'"+h+(s?". "+s:"")}return(m,h,v)=>{if(r===!1)throw new me(c(h," has been removed"+(u?" in "+u:"")),me.ERR_DEPRECATED);return u&&!H0[h]&&(H0[h]=!0,console.warn(c(h," has been deprecated since v"+u+" and will be removed in the near future"))),r?r(m,h,v):!0}};no.spelling=function(r){return(u,s)=>(console.warn(`${s} is likely a misspelling of ${r}`),!0)};function P5(l,r,u){if(typeof l!="object")throw new me("options must be an object",me.ERR_BAD_OPTION_VALUE);const s=Object.keys(l);let c=s.length;for(;c-- >0;){const m=s[c],h=r[m];if(h){const v=l[m],g=v===void 0||h(v,m,l);if(g!==!0)throw new me("option "+m+" must be "+g,me.ERR_BAD_OPTION_VALUE);continue}if(u!==!0)throw new me("Unknown option "+m,me.ERR_BAD_OPTION)}}const Gr={assertOptions:P5,validators:no},Gt=Gr.validators;let cn=class{constructor(r){this.defaults=r||{},this.interceptors={request:new O0,response:new O0}}async request(r,u){try{return await this._request(r,u)}catch(s){if(s instanceof Error){let c={};Error.captureStackTrace?Error.captureStackTrace(c):c=new Error;const m=c.stack?c.stack.replace(/^.+\n/,""):"";try{s.stack?m&&!String(s.stack).endsWith(m.replace(/^.+\n.+\n/,""))&&(s.stack+=`
`+m):s.stack=m}catch{}}throw s}}_request(r,u){typeof r=="string"?(u=u||{},u.url=r):u=r||{},u=fn(this.defaults,u);const{transitional:s,paramsSerializer:c,headers:m}=u;s!==void 0&&Gr.assertOptions(s,{silentJSONParsing:Gt.transitional(Gt.boolean),forcedJSONParsing:Gt.transitional(Gt.boolean),clarifyTimeoutError:Gt.transitional(Gt.boolean)},!1),c!=null&&(U.isFunction(c)?u.paramsSerializer={serialize:c}:Gr.assertOptions(c,{encode:Gt.function,serialize:Gt.function},!0)),u.allowAbsoluteUrls!==void 0||(this.defaults.allowAbsoluteUrls!==void 0?u.allowAbsoluteUrls=this.defaults.allowAbsoluteUrls:u.allowAbsoluteUrls=!0),Gr.assertOptions(u,{baseUrl:Gt.spelling("baseURL"),withXsrfToken:Gt.spelling("withXSRFToken")},!0),u.method=(u.method||this.defaults.method||"get").toLowerCase();let h=m&&U.merge(m.common,m[u.method]);m&&U.forEach(["delete","get","head","post","put","patch","common"],x=>{delete m[x]}),u.headers=ft.concat(h,m);const v=[];let g=!0;this.interceptors.request.forEach(function(O){typeof O.runWhen=="function"&&O.runWhen(u)===!1||(g=g&&O.synchronous,v.unshift(O.fulfilled,O.rejected))});const p=[];this.interceptors.response.forEach(function(O){p.push(O.fulfilled,O.rejected)});let b,S=0,N;if(!g){const x=[U0.bind(this),void 0];for(x.unshift(...v),x.push(...p),N=x.length,b=Promise.resolve(u);S<N;)b=b.then(x[S++],x[S++]);return b}N=v.length;let T=u;for(;S<N;){const x=v[S++],O=v[S++];try{T=x(T)}catch(E){O.call(this,E);break}}try{b=U0.call(this,T)}catch(x){return Promise.reject(x)}for(S=0,N=p.length;S<N;)b=b.then(p[S++],p[S++]);return b}getUri(r){r=fn(this.defaults,r);const u=zp(r.baseURL,r.url,r.allowAbsoluteUrls);return Np(u,r.params,r.paramsSerializer)}};U.forEach(["delete","get","head","options"],function(r){cn.prototype[r]=function(u,s){return this.request(fn(s||{},{method:r,url:u,data:(s||{}).data}))}});U.forEach(["post","put","patch"],function(r){function u(s){return function(m,h,v){return this.request(fn(v||{},{method:r,headers:s?{"Content-Type":"multipart/form-data"}:{},url:m,data:h}))}}cn.prototype[r]=u(),cn.prototype[r+"Form"]=u(!0)});let I5=class Up{constructor(r){if(typeof r!="function")throw new TypeError("executor must be a function.");let u;this.promise=new Promise(function(m){u=m});const s=this;this.promise.then(c=>{if(!s._listeners)return;let m=s._listeners.length;for(;m-- >0;)s._listeners[m](c);s._listeners=null}),this.promise.then=c=>{let m;const h=new Promise(v=>{s.subscribe(v),m=v}).then(c);return h.cancel=function(){s.unsubscribe(m)},h},r(function(m,h,v){s.reason||(s.reason=new In(m,h,v),u(s.reason))})}throwIfRequested(){if(this.reason)throw this.reason}subscribe(r){if(this.reason){r(this.reason);return}this._listeners?this._listeners.push(r):this._listeners=[r]}unsubscribe(r){if(!this._listeners)return;const u=this._listeners.indexOf(r);u!==-1&&this._listeners.splice(u,1)}toAbortSignal(){const r=new AbortController,u=s=>{r.abort(s)};return this.subscribe(u),r.signal.unsubscribe=()=>this.unsubscribe(u),r.signal}static source(){let r;return{token:new Up(function(c){r=c}),cancel:r}}};function ey(l){return function(u){return l.apply(null,u)}}function ty(l){return U.isObject(l)&&l.isAxiosError===!0}const Uu={Continue:100,SwitchingProtocols:101,Processing:102,EarlyHints:103,Ok:200,Created:201,Accepted:202,NonAuthoritativeInformation:203,NoContent:204,ResetContent:205,PartialContent:206,MultiStatus:207,AlreadyReported:208,ImUsed:226,MultipleChoices:300,MovedPermanently:301,Found:302,SeeOther:303,NotModified:304,UseProxy:305,Unused:306,TemporaryRedirect:307,PermanentRedirect:308,BadRequest:400,Unauthorized:401,PaymentRequired:402,Forbidden:403,NotFound:404,MethodNotAllowed:405,NotAcceptable:406,ProxyAuthenticationRequired:407,RequestTimeout:408,Conflict:409,Gone:410,LengthRequired:411,PreconditionFailed:412,PayloadTooLarge:413,UriTooLong:414,UnsupportedMediaType:415,RangeNotSatisfiable:416,ExpectationFailed:417,ImATeapot:418,MisdirectedRequest:421,UnprocessableEntity:422,Locked:423,FailedDependency:424,TooEarly:425,UpgradeRequired:426,PreconditionRequired:428,TooManyRequests:429,RequestHeaderFieldsTooLarge:431,UnavailableForLegalReasons:451,InternalServerError:500,NotImplemented:501,BadGateway:502,ServiceUnavailable:503,GatewayTimeout:504,HttpVersionNotSupported:505,VariantAlsoNegotiates:506,InsufficientStorage:507,LoopDetected:508,NotExtended:510,NetworkAuthenticationRequired:511,WebServerIsDown:521,ConnectionTimedOut:522,OriginIsUnreachable:523,TimeoutOccurred:524,SslHandshakeFailed:525,InvalidSslCertificate:526};Object.entries(Uu).forEach(([l,r])=>{Uu[r]=l});function Hp(l){const r=new cn(l),u=hp(cn.prototype.request,r);return U.extend(u,cn.prototype,r,{allOwnKeys:!0}),U.extend(u,r,null,{allOwnKeys:!0}),u.create=function(c){return Hp(fn(l,c))},u}const qe=Hp(si);qe.Axios=cn;qe.CanceledError=In;qe.CancelToken=I5;qe.isCancel=Cp;qe.VERSION=Bp;qe.toFormData=ao;qe.AxiosError=me;qe.Cancel=qe.CanceledError;qe.all=function(r){return Promise.all(r)};qe.spread=ey;qe.isAxiosError=ty;qe.mergeConfig=fn;qe.AxiosHeaders=ft;qe.formToJSON=l=>Rp(U.isHTMLForm(l)?new FormData(l):l);qe.getAdapter=kp.getAdapter;qe.HttpStatusCode=Uu;qe.default=qe;const{Axios:Ay,AxiosError:Ry,CanceledError:Cy,isCancel:_y,CancelToken:zy,VERSION:Dy,all:My,Cancel:ky,isAxiosError:By,spread:Uy,toFormData:Hy,AxiosHeaders:Ly,HttpStatusCode:qy,formToJSON:Fy,getAdapter:Yy,mergeConfig:Gy}=qe,ay="http://127.0.0.1:8000",ny=qe.create({baseURL:ay,headers:{"Content-Type":"application/json"}}),Hu=async()=>{try{return(await ny.get("http://127.0.0.1:8000/api/news/")).data}catch(l){return console.error("Erreur lors de la création de la prise de contact :",l),[]}};function ly(){return f.jsxs(f.Fragment,{children:[f.jsx("style",{children:`
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
      `}),f.jsxs("div",{className:"la-loading-container",children:[f.jsx("div",{className:"la-particles",children:[...Array(9)].map((l,r)=>f.jsx("div",{className:"la-particle"},r))}),f.jsxs("div",{className:"la-spinner-wrapper",children:[f.jsx("div",{className:"la-spinner-outer"}),f.jsx("div",{className:"la-spinner-middle"}),f.jsx("div",{className:"la-spinner"})]}),f.jsxs("div",{className:"la-loading-content",children:[f.jsx("div",{className:"la-loading-text",children:"Chargement des actualités"}),f.jsx("div",{className:"la-loading-subtext",children:"Récupération des dernières informations..."}),f.jsxs("div",{className:"la-progress-dots",children:[f.jsx("div",{className:"la-dot"}),f.jsx("div",{className:"la-dot"}),f.jsx("div",{className:"la-dot"})]})]}),f.jsxs("div",{className:"la-loading-tips",children:[f.jsxs("div",{className:"la-tip-card",children:[f.jsx("div",{className:"la-tip-icon",children:"📰"}),f.jsx("div",{className:"la-tip-text",children:"Découvrez nos dernières innovations et projets en cours"})]}),f.jsxs("div",{className:"la-tip-card",children:[f.jsx("div",{className:"la-tip-icon",children:"🚀"}),f.jsx("div",{className:"la-tip-text",children:"Restez informé des tendances tech et des actualités du secteur"})]}),f.jsxs("div",{className:"la-tip-card",children:[f.jsx("div",{className:"la-tip-icon",children:"💡"}),f.jsx("div",{className:"la-tip-text",children:"Explorez nos success stories et témoignages clients"})]})]})]})]})}const iy=`
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
`,ry=()=>f.jsxs("svg",{className:"date-icon",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[f.jsx("rect",{x:"3",y:"4",width:"18",height:"18",rx:"2",ry:"2"}),f.jsx("line",{x1:"16",y1:"2",x2:"16",y2:"6"}),f.jsx("line",{x1:"8",y1:"2",x2:"8",y2:"6"}),f.jsx("line",{x1:"3",y1:"10",x2:"21",y2:"10"})]}),oy=()=>f.jsx("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:f.jsx("polyline",{points:"20 6 9 17 4 12"})});function sy(){const[l,r]=D.useState(""),[u,s]=D.useState(!1),[c,m]=D.useState([]),[h,v]=D.useState(""),[g,p]=D.useState(!0),b=D.useRef(null),S=Fu();D.useEffect(()=>{async function M(){p(!0);try{const C=await Hu();Array.isArray(C)?m(C.sort((Q,X)=>new Date(X.date)-new Date(Q.date))):(console.error("fetchNews() n'a pas retourné un tableau :",C),m([]))}catch(C){console.error("Erreur lors de la récupération des actualités :",C),m([])}finally{p(!1)}}M()},[]);const N=M=>{r(M.target.value),v("")},T=async M=>{M.preventDefault();try{await qe.post("http://127.0.0.1:8000/api/suscribers/",{email:l}),s(!0),r(""),v("")}catch(C){console.error("Erreur lors de l'inscription à la newsletter :",C),C.response&&C.response.data?C.response.data.email&&Array.isArray(C.response.data.email)?v("Vous êtes déjà inscrit 😉!"):v("Une erreur est survenue. Veuillez réessayer."):C.request?v("Impossible de joindre le serveur."):v("Une erreur s'est produite. Veuillez réessayer.")}},x=M=>{var Q;const C=M==="left"?-350:350;(Q=b.current)==null||Q.scrollBy({left:C,behavior:"smooth"})},O=M=>M.toLowerCase().replace(/[^\w\s-]/g,"").replace(/\s+/g,"-").replace(/--+/g,"-"),E=M=>{const C=O(M.title);localStorage.setItem("currentArticle",JSON.stringify(M)),S(`/article/${M.id}/${C}`),window.scrollTo(0,0)},_=M=>{if(!M)return"";try{return new Date(M).toLocaleDateString("fr-FR",{year:"numeric",month:"long",day:"numeric",hour:"2-digit",minute:"2-digit"})}catch(C){return console.error("Erreur formatage date:",C,M),"Date invalide"}};return f.jsxs(f.Fragment,{children:[f.jsx("style",{children:iy}),f.jsxs("section",{className:"news-section",id:"news",children:[f.jsx("div",{className:"grid-pattern","aria-hidden":"true"}),f.jsxs("div",{className:"news-container",children:[f.jsxs("header",{className:"news-header",children:[f.jsx("div",{className:"news-badge",children:"📰 Actualités"}),f.jsx("h2",{className:"news-title",children:"Dernières Nouvelles"}),f.jsx("p",{className:"news-subtitle",children:"Restez informé des dernières actualités, innovations et événements de DigiScia"})]}),f.jsxs("div",{className:"carousel-wrapper",children:[f.jsx("button",{className:"carousel-nav carousel-prev",onClick:()=>x("left"),"aria-label":"Article précédent",children:"‹"}),f.jsx("div",{className:"news-carousel",ref:b,children:g?f.jsx(ly,{}):c.length>0?c.map(M=>f.jsxs("article",{className:"news-card",children:[f.jsxs("div",{className:"news-image-container",children:[f.jsx("img",{src:M.image,alt:M.title,className:"news-image",loading:"lazy",onError:C=>{C.target.src="/images/placeholder.jpg"}}),f.jsx("div",{className:"news-overlay",children:f.jsx("button",{className:"read-more-btn","aria-label":`Lire: ${M.title}`,onClick:()=>E(M),children:"Lire l'article"})})]}),f.jsxs("div",{className:"news-content",children:[f.jsxs("div",{className:"news-date",children:[f.jsx(ry,{}),_(M.date)]}),f.jsx("h3",{className:"news-card-title",children:M.title})]})]},M.id)):f.jsx("div",{className:"loading-state",children:f.jsx("p",{className:"loading-text",children:"Aucune actualité disponible."})})}),f.jsx("button",{className:"carousel-nav carousel-next",onClick:()=>x("right"),"aria-label":"Article suivant",children:"›"})]}),f.jsxs("div",{className:"newsletter-section",children:[f.jsx("h3",{className:"newsletter-title",children:"Restez Connecté"}),f.jsx("p",{className:"newsletter-description",children:"Inscrivez-vous à notre newsletter pour recevoir nos dernières actualités"}),u?f.jsxs("div",{className:"thank-you-message",children:[f.jsx(oy,{}),"Merci de faire partie de notre communauté !"]}):f.jsxs("div",{children:[f.jsxs("form",{onSubmit:T,className:"newsletter-form",children:[f.jsx("input",{type:"email",value:l,onChange:N,placeholder:"votre.email@exemple.com",className:"newsletter-input","aria-label":"Adresse email",required:!0}),f.jsx("button",{type:"submit",className:"newsletter-btn",children:"S'inscrire"})]}),h&&f.jsx("div",{className:"error-message",role:"alert",children:h})]})]})]})]})]})}const uy="/assets/fidele-D00H2YQJ.jpg",cy="/assets/honore-DE2cYyXr.jpg",fy="/assets/souleymane-CTbS3LDQ.jpg",dy="/assets/sylvius-CWrvX6wv.jpg",my="/assets/narcisse-DEnjGynH.jpg",py="/assets/philjacq-p5O9FleB.jpg",hy=`
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
`,gy=()=>f.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[f.jsx("circle",{cx:"12",cy:"12",r:"10"}),f.jsx("line",{x1:"12",y1:"16",x2:"12",y2:"12"}),f.jsx("line",{x1:"12",y1:"8",x2:"12.01",y2:"8"})]}),vy=()=>f.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[f.jsx("line",{x1:"18",y1:"6",x2:"6",y2:"18"}),f.jsx("line",{x1:"6",y1:"6",x2:"18",y2:"18"})]}),yy=[{name:"YONLI Fidele",role:"CEO & Head of Innovation",skills:"Développeur web Fullstack, Business Intelligence & Data Analyst, Data/AI/Machine Learning Engineer, certifié Google Data Analytics, 2x certifié Microsoft",image:uy},{name:"Souleymane TRAORÉ",role:"CTO & Lead Developer",skills:"Developpeur web/mobile Fullstack, AI Engineer spécialisé en deep learning et computer vision",image:fy},{name:"YAO Honoré",role:"CFO & Partenariats",skills:"Consultant en Communication Financière et Relations Investisseurs, Certifié FMVA, CMSA, CBCA, FPWM et ESG de la Corporate Finance Institute",image:cy},{name:"NITIEMA Sylvius",role:"SIG & Télédétection Engineer",skills:"Expert en géosciences appliquées, spécialiste dans le management des données geospatiales et le traitement des données géophysiques",image:dy},{name:"SIEHO Narcisse",role:"Responsable Mécatronique",skills:"Ingénieur en Productique & Mecatronique/Developpeur Web, Expert en Automatisme et Robotique/Consultant support Technique à Alten",image:my},{name:"OUEDRAOGO Phil Jacq",role:"Suivi de Projet & Evaluation",skills:"Expert gestion de projets IT, pilote des initiatives stratégiques en garantissant le respect des délais, budgets et exigences techniques",image:py}];function by(){const[l,r]=D.useState(null),u=c=>{r(c)},s=()=>{r(null)};return f.jsxs(f.Fragment,{children:[f.jsx("style",{children:hy}),f.jsxs("section",{className:"team-section",id:"team",children:[f.jsx("div",{className:"grid-overlay","aria-hidden":"true"}),f.jsxs("div",{className:"team-container",children:[f.jsxs("header",{className:"team-header",children:[f.jsx("div",{className:"team-badge",children:"👥 Notre Équipe"}),f.jsx("h2",{className:"team-title",children:"Les Experts DigiScia"}),f.jsx("p",{className:"team-subtitle",children:"Une équipe passionnée de data scientists, ingénieurs et consultants dédiés à votre transformation digitale"})]}),f.jsx("div",{className:"team-grid",children:yy.map((c,m)=>f.jsxs("article",{className:`member-card stagger-${m+1}`,onClick:()=>u(c),role:"button",tabIndex:0,"aria-label":`En savoir plus sur ${c.name}`,children:[f.jsxs("div",{className:"member-photo-container",children:[f.jsx("img",{src:c.image,alt:c.name,className:"member-photo",loading:"lazy"}),f.jsxs("div",{className:"photo-overlay",children:[f.jsx("h3",{className:"member-name",children:c.name}),f.jsx("span",{className:"member-role-badge",children:c.role})]})]}),f.jsx("div",{className:"member-content",children:f.jsx("p",{className:"member-skills",children:c.skills})}),f.jsx("div",{className:"info-indicator",children:f.jsx(gy,{})})]},m))})]}),f.jsx("div",{className:`member-modal ${l?"active":""}`,onClick:s,children:l&&f.jsxs("div",{className:"modal-content",onClick:c=>c.stopPropagation(),children:[f.jsx("button",{className:"modal-close",onClick:s,"aria-label":"Fermer",children:f.jsx(vy,{})}),f.jsxs("div",{className:"modal-header",children:[f.jsx("h3",{className:"modal-name",children:l.name}),f.jsx("p",{className:"modal-role",children:l.role})]}),f.jsx("div",{className:"modal-divider"}),f.jsx("h4",{className:"modal-section-title",children:"Expertise & Compétences"}),f.jsx("p",{className:"modal-skills",children:l.skills})]})})]})]})}function xy(){return f.jsxs("div",{className:"card",children:[f.jsx("a",{className:"socialContainer containerOne",href:"https://www.instagram.com/digisciaa/",target:"_blank",rel:"noopener noreferrer","aria-label":"Suivez-nous sur Instagram",children:f.jsx("svg",{viewBox:"0 0 16 16",className:"socialSvg instagramSvg",children:f.jsx("path",{d:"M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z"})})}),f.jsx("a",{className:"socialContainer containerTwo",href:"https://web.facebook.com/DigiScia/",target:"_blank",rel:"noopener noreferrer","aria-label":"Suivez-nous sur Facebook",children:f.jsx("svg",{viewBox:"0 0 320 512",className:"socialSvg facebookSvg",children:f.jsx("path",{d:"M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"})})}),f.jsx("a",{className:"socialContainer containerThree",href:"https://www.linkedin.com/company/digiscia/",target:"_blank",rel:"noopener noreferrer","aria-label":"Suivez-nous sur LinkedIn",children:f.jsx("svg",{viewBox:"0 0 448 512",className:"socialSvg linkdinSvg",children:f.jsx("path",{d:"M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"})})}),f.jsx("a",{className:"socialContainer containerFive",href:"https://discord.gg/enKs5Pm8",target:"_blank",rel:"noopener noreferrer","aria-label":"Rejoignez-nous sur Discord",children:f.jsx("svg",{viewBox:"0 0 640 512",className:"socialSvg discordSvg",children:f.jsx("path",{d:"M524.531,69.836a1.5,1.5,0,0,0-.764-.7A485.065,485.065,0,0,0,404.081,32.03a1.816,1.816,0,0,0-1.923.91,337.461,337.461,0,0,0-14.9,30.6,447.848,447.848,0,0,0-134.426,0,309.541,309.541,0,0,0-15.135-30.6,1.89,1.89,0,0,0-1.924-.91A483.689,483.689,0,0,0,116.085,69.137a1.712,1.712,0,0,0-.788.676C39.068,183.651,18.186,294.69,28.43,404.354a2.016,2.016,0,0,0,.765,1.375A487.666,487.666,0,0,0,176.02,479.918a1.9,1.9,0,0,0,2.063-.676A348.2,348.2,0,0,0,208.12,430.4a1.86,1.86,0,0,0-1.019-2.588,321.173,321.173,0,0,1-45.868-21.853,1.885,1.885,0,0,1-.185-3.126c3.082-2.309,6.166-4.711,9.109-7.137a1.819,1.819,0,0,1,1.9-.256c96.229,43.917,200.41,43.917,295.5,0a1.812,1.812,0,0,1,1.924.233c2.944,2.426,6.027,4.851,9.132,7.16a1.884,1.884,0,0,1-.162,3.126,301.407,301.407,0,0,1-45.89,21.83,1.875,1.875,0,0,0-1,2.611,391.055,391.055,0,0,0,30.014,48.815,1.864,1.864,0,0,0,2.063.7A486.048,486.048,0,0,0,610.7,405.729a1.882,1.882,0,0,0,.765-1.352C623.729,277.594,590.933,167.465,524.531,69.836ZM222.491,337.58c-28.972,0-52.844-26.587-52.844-59.239S193.056,219.1,222.491,219.1c29.665,0,53.306,26.82,52.843,59.239C275.334,310.993,251.924,337.58,222.491,337.58Zm195.38,0c-28.971,0-52.843-26.587-52.843-59.239S388.437,219.1,417.871,219.1c29.667,0,53.307,26.82,52.844,59.239C470.715,310.993,447.538,337.58,417.871,337.58Z"})})})]})}const L0={telephone:"",subject:"",email:"",message:""},wy=()=>f.jsxs("div",{className:"confirmation-message",children:[f.jsx("div",{className:"confirmation-icon",children:"✓"}),f.jsx("p",{children:"Merci de nous faire confiance! Notre équipe vous recontactera très bientôt!"})]});function Sy(){const[l,r]=D.useState(L0),[u,s]=D.useState(!1),[c,m]=D.useState({}),h=p=>{const{name:b,value:S}=p.target;r(N=>({...N,[b]:S})),c[b]&&m(N=>({...N,[b]:null}))},v=()=>{const p={};return l.telephone||(p.telephone="Le téléphone est requis"),l.email||(p.email="L'email est requis"),l.message||(p.message="Un message est requis"),p},g=p=>{p.preventDefault();const b=v();if(Object.keys(b).length>0){m(b),s(!1);return}m({}),console.log("Form submitted:",l),s(!0),r(L0),setTimeout(()=>{s(!1)},5e3)};return f.jsx("section",{className:"contact-section",id:"contacts",children:f.jsxs("div",{className:"contact-content",children:[f.jsxs("div",{className:"social-container",children:[f.jsx("h2",{className:"social-title",children:"Suivez-nous"}),f.jsx("p",{className:"social-subtitle",children:"Rejoignez notre communauté et restez à l'affût de nos dernières actualités."}),f.jsx(xy,{})]}),f.jsxs("div",{className:"contact-form-container",children:[f.jsx("h1",{className:"contact-title",children:"Contactez-nous"}),u&&f.jsx(wy,{}),f.jsx("form",{className:"contact-form",onSubmit:g,noValidate:!0,children:f.jsxs("div",{className:"form-grid",children:[f.jsxs("div",{className:"form-group grid-col-span-3",children:[f.jsx("label",{htmlFor:"email",className:"sr-only",children:"Email*"}),f.jsx("input",{type:"email",id:"email",name:"email",placeholder:"Email e.g john.dossy@gmail.com",value:l.email,onChange:h,required:!0,className:c.email?"input-error":""}),c.email&&f.jsx("span",{className:"error-text",children:c.email})]}),f.jsxs("div",{className:"form-group grid-col-span-3",children:[f.jsx("label",{htmlFor:"telephone",className:"sr-only",children:"Téléphone"}),f.jsx("input",{type:"tel",id:"telephone",name:"telephone",placeholder:"Téléphone e.g +226******* ",value:l.telephone,onChange:h,required:!0,className:c.telephone?"input-error":""}),c.telephone&&f.jsx("span",{className:"error-text",children:c.telephone})]}),f.jsxs("div",{className:"form-group grid-col-span-6",children:[f.jsx("label",{htmlFor:"subject",className:"sr-only",children:"Objet"}),f.jsx("input",{type:"text",id:"subject",name:"subject",placeholder:"Objet",value:l.subject,onChange:h})]}),f.jsxs("div",{className:"form-group grid-col-span-6",children:[f.jsx("label",{htmlFor:"message",className:"sr-only",children:"Message"}),f.jsx("textarea",{id:"message",name:"message",rows:"5",placeholder:"Ecrivez votre Message",value:l.message,onChange:h,required:!0,className:c.message?"input-error":""}),c.message&&f.jsx("span",{className:"error-text",children:c.message})]}),f.jsx("div",{className:"form-group-submit grid-col-span-6",children:f.jsx("button",{type:"submit",className:"contact-submit",children:"Envoyer"})})]})})]})]})})}function Ey(){const{id:l}=Q2(),[r,u]=D.useState(null),[s,c]=D.useState(!0),[m,h]=D.useState(null),[v,g]=D.useState([]),p=Fu(),b=D.useCallback(async(O,E)=>!O||!Array.isArray(E)?[]:E.filter(_=>_.id!==O.id&&(O.tags&&_.tags&&_.tags.some(M=>O.tags.includes(M))||O.author&&_.author===O.author)).slice(0,3),[]),S=D.useCallback(async()=>{try{c(!0);const O=localStorage.getItem("currentArticle");if(O)try{const _=JSON.parse(O);if(_.id.toString()===l){u(_);const M=await Hu();if(Array.isArray(M)){const C=await b(_,M);g(C)}c(!1);return}}catch(_){console.error("Erreur lors de la lecture de l'article stocké:",_)}const E=await Hu();if(Array.isArray(E)){const _=E.find(M=>M.id.toString()===l);if(_){u(_),localStorage.setItem("currentArticle",JSON.stringify(_));const M=await b(_,E);g(M)}else h("Article non trouvé")}else h("Format de données invalide")}catch(O){console.error("Erreur lors de la récupération de l'article:",O),h("Impossible de charger l'article")}finally{c(!1)}},[l,b]);D.useEffect(()=>{S(),window.scrollTo(0,0)},[S]);const N=()=>{p("/"),setTimeout(()=>{const O=document.getElementById("news");O&&O.scrollIntoView({behavior:"smooth"})},100)},T=O=>{localStorage.setItem("currentArticle",JSON.stringify(O));const E=O.title.toLowerCase().replace(/[^\w\s-]/g,"").replace(/\s+/g,"-").replace(/--+/g,"-");p(`/article/${O.id}/${E}`),window.scrollTo(0,0)},x=O=>{if(!O)return"";try{const E=O.split(".")[0],_=/(\d{4})-(\d{2})-(\d{2}) (\d{2}):(\d{2}):(\d{2})/,M=E.match(_);if(M){const[Q,X,$,J,ie,Y]=M;return`${X}-${$}-${J} ${ie}:${Y}`}const C=new Date(O);if(!isNaN(C.getTime())){const Q=C.getFullYear(),X=String(C.getMonth()+1).padStart(2,"0"),$=String(C.getDate()).padStart(2,"0"),J=String(C.getHours()).padStart(2,"0"),ie=String(C.getMinutes()).padStart(2,"0");return`${Q}-${X}-${$} ${J}:${ie}`}return"Date invalide"}catch(E){return console.error("Erreur lors du formatage de la date article:",E,O),"Date invalide"}};return s?f.jsx("div",{className:"article-page full-width",children:f.jsx("div",{className:"article-container full-width-container",children:f.jsxs("div",{className:"article-loading",children:[f.jsx("div",{className:"loading-spinner"}),f.jsx("p",{children:"Chargement de l'article..."})]})})}):m?f.jsx("div",{className:"article-page full-width",children:f.jsx("div",{className:"article-container full-width-container",children:f.jsxs("div",{className:"article-error",children:[f.jsx("span",{className:"error-icon",children:"⚠️"}),f.jsx("h2",{children:"Erreur"}),f.jsx("p",{children:m}),f.jsx("button",{className:"return-button",onClick:N,children:"Retourner aux actualités"})]})})}):r?f.jsx("div",{className:"article-page full-width",children:f.jsxs("div",{className:"article-container full-width-container",children:[f.jsxs("article",{className:"article-content",children:[f.jsx("div",{className:"mobile-return",children:f.jsx("button",{className:"back-button",onClick:N,"aria-label":"Retour aux actualités",children:"❮ Retour"})}),f.jsxs("header",{className:"article-header",children:[f.jsx("h1",{className:"article-title",children:r.title}),f.jsx("p",{className:"article-date",children:x(r.date)}),r.author&&f.jsxs("p",{className:"article-author-header",children:["Par ",r.author]})]}),f.jsx("div",{className:"article-featured-image-container",children:f.jsx("img",{src:r.image,alt:r.title||"Image de l'article",className:"article-featured-image",onError:O=>{O.target.src="/images/placeholder.jpg"},loading:"lazy"})}),f.jsx("div",{className:"article-body",children:r.content?f.jsx("div",{dangerouslySetInnerHTML:{__html:r.content}}):r.excerpt?f.jsx("div",{className:"article-excerpt",children:r.excerpt}):f.jsx("div",{className:"article-no-content",children:f.jsx("p",{children:"Aucun contenu disponible pour cet article."})})}),f.jsxs("footer",{className:"article-footer",children:[f.jsxs("div",{className:"article-meta",children:[r.author&&f.jsxs("div",{className:"article-author",children:[f.jsx("strong",{children:"Auteur:"})," ",r.author]}),r.tags&&r.tags.length>0&&f.jsxs("div",{className:"article-tags",children:[f.jsx("strong",{children:"Tags:"}),f.jsx("div",{className:"tags-container",children:r.tags.map((O,E)=>f.jsx("span",{className:"tag-item",children:O},E))})]})]}),f.jsx("button",{className:"return-button",onClick:N,children:"Retourner aux actualités"})]})]}),v.length>0&&f.jsxs("div",{className:"related-articles-section",children:[f.jsx("h3",{className:"related-title",children:"Articles similaires"}),f.jsx("div",{className:"related-articles-container",children:v.map(O=>f.jsxs("div",{className:"related-article-card",onClick:()=>T(O),children:[f.jsx("div",{className:"related-article-image-container",children:f.jsx("img",{src:O.image,alt:O.title,className:"related-article-image",onError:E=>{E.target.src="/images/placeholder.jpg"},loading:"lazy"})}),f.jsxs("div",{className:"related-article-content",children:[f.jsx("h4",{className:"related-article-title",children:O.title}),f.jsx("p",{className:"related-article-date",children:x(O.date)})]})]},O.id))})]})]})}):f.jsx("div",{className:"article-page full-width",children:f.jsx("div",{className:"article-container full-width-container",children:f.jsxs("div",{className:"article-error",children:[f.jsx("span",{className:"error-icon",children:"🔍"}),f.jsx("h2",{children:"Article introuvable"}),f.jsx("p",{children:"L'article que vous recherchez n'existe pas ou a été déplacé."}),f.jsx("button",{className:"return-button",onClick:N,children:"Retourner aux actualités"})]})})})}function jy(){return f.jsxs(f.Fragment,{children:[f.jsx(op,{})," ",f.jsxs("main",{children:[f.jsx(sn.Element,{name:"home",children:f.jsx(Wg,{})}),f.jsx(sn.Element,{name:"about",children:f.jsx(mv,{})}),f.jsx(sn.Element,{name:"projects",children:f.jsx(gv,{})}),f.jsx(sn.Element,{name:"services",children:f.jsx(Ov,{})}),f.jsx(sn.Element,{name:"news",children:f.jsx(sy,{})}),f.jsx(sn.Element,{name:"team",children:f.jsx(by,{})}),f.jsx(sn.Element,{name:"contact",children:f.jsx(Sy,{})})]}),f.jsx(sp,{})]})}function Ty(){return f.jsx(Cg,{children:f.jsx("div",{className:"app-container",children:f.jsxs(og,{children:[f.jsx(zu,{path:"/",element:f.jsx(jy,{})}),f.jsx(zu,{path:"/article/:id/:slug",element:f.jsxs(f.Fragment,{children:[f.jsx(op,{}),f.jsx(Ey,{}),f.jsx(sp,{})]})})]})})})}g2.createRoot(document.getElementById("root")).render(f.jsx(kt.StrictMode,{children:f.jsx(Ty,{})}));
