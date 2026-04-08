(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))r(l);new MutationObserver(l=>{for(const c of l)if(c.type==="childList")for(const f of c.addedNodes)f.tagName==="LINK"&&f.rel==="modulepreload"&&r(f)}).observe(document,{childList:!0,subtree:!0});function i(l){const c={};return l.integrity&&(c.integrity=l.integrity),l.referrerPolicy&&(c.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?c.credentials="include":l.crossOrigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function r(l){if(l.ep)return;l.ep=!0;const c=i(l);fetch(l.href,c)}})();var gd={exports:{}},Ho={};var $g;function _y(){if($g)return Ho;$g=1;var s=Symbol.for("react.transitional.element"),e=Symbol.for("react.fragment");function i(r,l,c){var f=null;if(c!==void 0&&(f=""+c),l.key!==void 0&&(f=""+l.key),"key"in l){c={};for(var h in l)h!=="key"&&(c[h]=l[h])}else c=l;return l=c.ref,{$$typeof:s,type:r,key:f,ref:l!==void 0?l:null,props:c}}return Ho.Fragment=e,Ho.jsx=i,Ho.jsxs=i,Ho}var e_;function vy(){return e_||(e_=1,gd.exports=_y()),gd.exports}var X=vy(),_d={exports:{}},lt={};var t_;function xy(){if(t_)return lt;t_=1;var s=Symbol.for("react.transitional.element"),e=Symbol.for("react.portal"),i=Symbol.for("react.fragment"),r=Symbol.for("react.strict_mode"),l=Symbol.for("react.profiler"),c=Symbol.for("react.consumer"),f=Symbol.for("react.context"),h=Symbol.for("react.forward_ref"),m=Symbol.for("react.suspense"),p=Symbol.for("react.memo"),v=Symbol.for("react.lazy"),_=Symbol.for("react.activity"),S=Symbol.iterator;function M(A){return A===null||typeof A!="object"?null:(A=S&&A[S]||A["@@iterator"],typeof A=="function"?A:null)}var E={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},T=Object.assign,g={};function x(A,B,ee){this.props=A,this.context=B,this.refs=g,this.updater=ee||E}x.prototype.isReactComponent={},x.prototype.setState=function(A,B){if(typeof A!="object"&&typeof A!="function"&&A!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,A,B,"setState")},x.prototype.forceUpdate=function(A){this.updater.enqueueForceUpdate(this,A,"forceUpdate")};function U(){}U.prototype=x.prototype;function N(A,B,ee){this.props=A,this.context=B,this.refs=g,this.updater=ee||E}var O=N.prototype=new U;O.constructor=N,T(O,x.prototype),O.isPureReactComponent=!0;var L=Array.isArray;function I(){}var F={H:null,A:null,T:null,S:null},j=Object.prototype.hasOwnProperty;function w(A,B,ee){var _e=ee.ref;return{$$typeof:s,type:A,key:B,ref:_e!==void 0?_e:null,props:ee}}function D(A,B){return w(A.type,B,A.props)}function V(A){return typeof A=="object"&&A!==null&&A.$$typeof===s}function se(A){var B={"=":"=0",":":"=2"};return"$"+A.replace(/[=:]/g,function(ee){return B[ee]})}var ae=/\/+/g;function me(A,B){return typeof A=="object"&&A!==null&&A.key!=null?se(""+A.key):B.toString(36)}function de(A){switch(A.status){case"fulfilled":return A.value;case"rejected":throw A.reason;default:switch(typeof A.status=="string"?A.then(I,I):(A.status="pending",A.then(function(B){A.status==="pending"&&(A.status="fulfilled",A.value=B)},function(B){A.status==="pending"&&(A.status="rejected",A.reason=B)})),A.status){case"fulfilled":return A.value;case"rejected":throw A.reason}}throw A}function z(A,B,ee,_e,Te){var Q=typeof A;(Q==="undefined"||Q==="boolean")&&(A=null);var ce=!1;if(A===null)ce=!0;else switch(Q){case"bigint":case"string":case"number":ce=!0;break;case"object":switch(A.$$typeof){case s:case e:ce=!0;break;case v:return ce=A._init,z(ce(A._payload),B,ee,_e,Te)}}if(ce)return Te=Te(A),ce=_e===""?"."+me(A,0):_e,L(Te)?(ee="",ce!=null&&(ee=ce.replace(ae,"$&/")+"/"),z(Te,B,ee,"",function(re){return re})):Te!=null&&(V(Te)&&(Te=D(Te,ee+(Te.key==null||A&&A.key===Te.key?"":(""+Te.key).replace(ae,"$&/")+"/")+ce)),B.push(Te)),1;ce=0;var Re=_e===""?".":_e+":";if(L(A))for(var Ne=0;Ne<A.length;Ne++)_e=A[Ne],Q=Re+me(_e,Ne),ce+=z(_e,B,ee,Q,Te);else if(Ne=M(A),typeof Ne=="function")for(A=Ne.call(A),Ne=0;!(_e=A.next()).done;)_e=_e.value,Q=Re+me(_e,Ne++),ce+=z(_e,B,ee,Q,Te);else if(Q==="object"){if(typeof A.then=="function")return z(de(A),B,ee,_e,Te);throw B=String(A),Error("Objects are not valid as a React child (found: "+(B==="[object Object]"?"object with keys {"+Object.keys(A).join(", ")+"}":B)+"). If you meant to render a collection of children, use an array instead.")}return ce}function H(A,B,ee){if(A==null)return A;var _e=[],Te=0;return z(A,_e,"","",function(Q){return B.call(ee,Q,Te++)}),_e}function K(A){if(A._status===-1){var B=A._result;B=B(),B.then(function(ee){(A._status===0||A._status===-1)&&(A._status=1,A._result=ee)},function(ee){(A._status===0||A._status===-1)&&(A._status=2,A._result=ee)}),A._status===-1&&(A._status=0,A._result=B)}if(A._status===1)return A._result.default;throw A._result}var ye=typeof reportError=="function"?reportError:function(A){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var B=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof A=="object"&&A!==null&&typeof A.message=="string"?String(A.message):String(A),error:A});if(!window.dispatchEvent(B))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",A);return}console.error(A)},ve={map:H,forEach:function(A,B,ee){H(A,function(){B.apply(this,arguments)},ee)},count:function(A){var B=0;return H(A,function(){B++}),B},toArray:function(A){return H(A,function(B){return B})||[]},only:function(A){if(!V(A))throw Error("React.Children.only expected to receive a single React element child.");return A}};return lt.Activity=_,lt.Children=ve,lt.Component=x,lt.Fragment=i,lt.Profiler=l,lt.PureComponent=N,lt.StrictMode=r,lt.Suspense=m,lt.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=F,lt.__COMPILER_RUNTIME={__proto__:null,c:function(A){return F.H.useMemoCache(A)}},lt.cache=function(A){return function(){return A.apply(null,arguments)}},lt.cacheSignal=function(){return null},lt.cloneElement=function(A,B,ee){if(A==null)throw Error("The argument must be a React element, but you passed "+A+".");var _e=T({},A.props),Te=A.key;if(B!=null)for(Q in B.key!==void 0&&(Te=""+B.key),B)!j.call(B,Q)||Q==="key"||Q==="__self"||Q==="__source"||Q==="ref"&&B.ref===void 0||(_e[Q]=B[Q]);var Q=arguments.length-2;if(Q===1)_e.children=ee;else if(1<Q){for(var ce=Array(Q),Re=0;Re<Q;Re++)ce[Re]=arguments[Re+2];_e.children=ce}return w(A.type,Te,_e)},lt.createContext=function(A){return A={$$typeof:f,_currentValue:A,_currentValue2:A,_threadCount:0,Provider:null,Consumer:null},A.Provider=A,A.Consumer={$$typeof:c,_context:A},A},lt.createElement=function(A,B,ee){var _e,Te={},Q=null;if(B!=null)for(_e in B.key!==void 0&&(Q=""+B.key),B)j.call(B,_e)&&_e!=="key"&&_e!=="__self"&&_e!=="__source"&&(Te[_e]=B[_e]);var ce=arguments.length-2;if(ce===1)Te.children=ee;else if(1<ce){for(var Re=Array(ce),Ne=0;Ne<ce;Ne++)Re[Ne]=arguments[Ne+2];Te.children=Re}if(A&&A.defaultProps)for(_e in ce=A.defaultProps,ce)Te[_e]===void 0&&(Te[_e]=ce[_e]);return w(A,Q,Te)},lt.createRef=function(){return{current:null}},lt.forwardRef=function(A){return{$$typeof:h,render:A}},lt.isValidElement=V,lt.lazy=function(A){return{$$typeof:v,_payload:{_status:-1,_result:A},_init:K}},lt.memo=function(A,B){return{$$typeof:p,type:A,compare:B===void 0?null:B}},lt.startTransition=function(A){var B=F.T,ee={};F.T=ee;try{var _e=A(),Te=F.S;Te!==null&&Te(ee,_e),typeof _e=="object"&&_e!==null&&typeof _e.then=="function"&&_e.then(I,ye)}catch(Q){ye(Q)}finally{B!==null&&ee.types!==null&&(B.types=ee.types),F.T=B}},lt.unstable_useCacheRefresh=function(){return F.H.useCacheRefresh()},lt.use=function(A){return F.H.use(A)},lt.useActionState=function(A,B,ee){return F.H.useActionState(A,B,ee)},lt.useCallback=function(A,B){return F.H.useCallback(A,B)},lt.useContext=function(A){return F.H.useContext(A)},lt.useDebugValue=function(){},lt.useDeferredValue=function(A,B){return F.H.useDeferredValue(A,B)},lt.useEffect=function(A,B){return F.H.useEffect(A,B)},lt.useEffectEvent=function(A){return F.H.useEffectEvent(A)},lt.useId=function(){return F.H.useId()},lt.useImperativeHandle=function(A,B,ee){return F.H.useImperativeHandle(A,B,ee)},lt.useInsertionEffect=function(A,B){return F.H.useInsertionEffect(A,B)},lt.useLayoutEffect=function(A,B){return F.H.useLayoutEffect(A,B)},lt.useMemo=function(A,B){return F.H.useMemo(A,B)},lt.useOptimistic=function(A,B){return F.H.useOptimistic(A,B)},lt.useReducer=function(A,B,ee){return F.H.useReducer(A,B,ee)},lt.useRef=function(A){return F.H.useRef(A)},lt.useState=function(A){return F.H.useState(A)},lt.useSyncExternalStore=function(A,B,ee){return F.H.useSyncExternalStore(A,B,ee)},lt.useTransition=function(){return F.H.useTransition()},lt.version="19.2.4",lt}var n_;function tp(){return n_||(n_=1,_d.exports=xy()),_d.exports}var te=tp(),vd={exports:{}},Go={},xd={exports:{}},Sd={};var i_;function Sy(){return i_||(i_=1,(function(s){function e(z,H){var K=z.length;z.push(H);e:for(;0<K;){var ye=K-1>>>1,ve=z[ye];if(0<l(ve,H))z[ye]=H,z[K]=ve,K=ye;else break e}}function i(z){return z.length===0?null:z[0]}function r(z){if(z.length===0)return null;var H=z[0],K=z.pop();if(K!==H){z[0]=K;e:for(var ye=0,ve=z.length,A=ve>>>1;ye<A;){var B=2*(ye+1)-1,ee=z[B],_e=B+1,Te=z[_e];if(0>l(ee,K))_e<ve&&0>l(Te,ee)?(z[ye]=Te,z[_e]=K,ye=_e):(z[ye]=ee,z[B]=K,ye=B);else if(_e<ve&&0>l(Te,K))z[ye]=Te,z[_e]=K,ye=_e;else break e}}return H}function l(z,H){var K=z.sortIndex-H.sortIndex;return K!==0?K:z.id-H.id}if(s.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var c=performance;s.unstable_now=function(){return c.now()}}else{var f=Date,h=f.now();s.unstable_now=function(){return f.now()-h}}var m=[],p=[],v=1,_=null,S=3,M=!1,E=!1,T=!1,g=!1,x=typeof setTimeout=="function"?setTimeout:null,U=typeof clearTimeout=="function"?clearTimeout:null,N=typeof setImmediate<"u"?setImmediate:null;function O(z){for(var H=i(p);H!==null;){if(H.callback===null)r(p);else if(H.startTime<=z)r(p),H.sortIndex=H.expirationTime,e(m,H);else break;H=i(p)}}function L(z){if(T=!1,O(z),!E)if(i(m)!==null)E=!0,I||(I=!0,se());else{var H=i(p);H!==null&&de(L,H.startTime-z)}}var I=!1,F=-1,j=5,w=-1;function D(){return g?!0:!(s.unstable_now()-w<j)}function V(){if(g=!1,I){var z=s.unstable_now();w=z;var H=!0;try{e:{E=!1,T&&(T=!1,U(F),F=-1),M=!0;var K=S;try{t:{for(O(z),_=i(m);_!==null&&!(_.expirationTime>z&&D());){var ye=_.callback;if(typeof ye=="function"){_.callback=null,S=_.priorityLevel;var ve=ye(_.expirationTime<=z);if(z=s.unstable_now(),typeof ve=="function"){_.callback=ve,O(z),H=!0;break t}_===i(m)&&r(m),O(z)}else r(m);_=i(m)}if(_!==null)H=!0;else{var A=i(p);A!==null&&de(L,A.startTime-z),H=!1}}break e}finally{_=null,S=K,M=!1}H=void 0}}finally{H?se():I=!1}}}var se;if(typeof N=="function")se=function(){N(V)};else if(typeof MessageChannel<"u"){var ae=new MessageChannel,me=ae.port2;ae.port1.onmessage=V,se=function(){me.postMessage(null)}}else se=function(){x(V,0)};function de(z,H){F=x(function(){z(s.unstable_now())},H)}s.unstable_IdlePriority=5,s.unstable_ImmediatePriority=1,s.unstable_LowPriority=4,s.unstable_NormalPriority=3,s.unstable_Profiling=null,s.unstable_UserBlockingPriority=2,s.unstable_cancelCallback=function(z){z.callback=null},s.unstable_forceFrameRate=function(z){0>z||125<z?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):j=0<z?Math.floor(1e3/z):5},s.unstable_getCurrentPriorityLevel=function(){return S},s.unstable_next=function(z){switch(S){case 1:case 2:case 3:var H=3;break;default:H=S}var K=S;S=H;try{return z()}finally{S=K}},s.unstable_requestPaint=function(){g=!0},s.unstable_runWithPriority=function(z,H){switch(z){case 1:case 2:case 3:case 4:case 5:break;default:z=3}var K=S;S=z;try{return H()}finally{S=K}},s.unstable_scheduleCallback=function(z,H,K){var ye=s.unstable_now();switch(typeof K=="object"&&K!==null?(K=K.delay,K=typeof K=="number"&&0<K?ye+K:ye):K=ye,z){case 1:var ve=-1;break;case 2:ve=250;break;case 5:ve=1073741823;break;case 4:ve=1e4;break;default:ve=5e3}return ve=K+ve,z={id:v++,callback:H,priorityLevel:z,startTime:K,expirationTime:ve,sortIndex:-1},K>ye?(z.sortIndex=K,e(p,z),i(m)===null&&z===i(p)&&(T?(U(F),F=-1):T=!0,de(L,K-ye))):(z.sortIndex=ve,e(m,z),E||M||(E=!0,I||(I=!0,se()))),z},s.unstable_shouldYield=D,s.unstable_wrapCallback=function(z){var H=S;return function(){var K=S;S=H;try{return z.apply(this,arguments)}finally{S=K}}}})(Sd)),Sd}var a_;function yy(){return a_||(a_=1,xd.exports=Sy()),xd.exports}var yd={exports:{}},Un={};var r_;function My(){if(r_)return Un;r_=1;var s=tp();function e(m){var p="https://react.dev/errors/"+m;if(1<arguments.length){p+="?args[]="+encodeURIComponent(arguments[1]);for(var v=2;v<arguments.length;v++)p+="&args[]="+encodeURIComponent(arguments[v])}return"Minified React error #"+m+"; visit "+p+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function i(){}var r={d:{f:i,r:function(){throw Error(e(522))},D:i,C:i,L:i,m:i,X:i,S:i,M:i},p:0,findDOMNode:null},l=Symbol.for("react.portal");function c(m,p,v){var _=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:l,key:_==null?null:""+_,children:m,containerInfo:p,implementation:v}}var f=s.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function h(m,p){if(m==="font")return"";if(typeof p=="string")return p==="use-credentials"?p:""}return Un.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=r,Un.createPortal=function(m,p){var v=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!p||p.nodeType!==1&&p.nodeType!==9&&p.nodeType!==11)throw Error(e(299));return c(m,p,null,v)},Un.flushSync=function(m){var p=f.T,v=r.p;try{if(f.T=null,r.p=2,m)return m()}finally{f.T=p,r.p=v,r.d.f()}},Un.preconnect=function(m,p){typeof m=="string"&&(p?(p=p.crossOrigin,p=typeof p=="string"?p==="use-credentials"?p:"":void 0):p=null,r.d.C(m,p))},Un.prefetchDNS=function(m){typeof m=="string"&&r.d.D(m)},Un.preinit=function(m,p){if(typeof m=="string"&&p&&typeof p.as=="string"){var v=p.as,_=h(v,p.crossOrigin),S=typeof p.integrity=="string"?p.integrity:void 0,M=typeof p.fetchPriority=="string"?p.fetchPriority:void 0;v==="style"?r.d.S(m,typeof p.precedence=="string"?p.precedence:void 0,{crossOrigin:_,integrity:S,fetchPriority:M}):v==="script"&&r.d.X(m,{crossOrigin:_,integrity:S,fetchPriority:M,nonce:typeof p.nonce=="string"?p.nonce:void 0})}},Un.preinitModule=function(m,p){if(typeof m=="string")if(typeof p=="object"&&p!==null){if(p.as==null||p.as==="script"){var v=h(p.as,p.crossOrigin);r.d.M(m,{crossOrigin:v,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0})}}else p==null&&r.d.M(m)},Un.preload=function(m,p){if(typeof m=="string"&&typeof p=="object"&&p!==null&&typeof p.as=="string"){var v=p.as,_=h(v,p.crossOrigin);r.d.L(m,v,{crossOrigin:_,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0,type:typeof p.type=="string"?p.type:void 0,fetchPriority:typeof p.fetchPriority=="string"?p.fetchPriority:void 0,referrerPolicy:typeof p.referrerPolicy=="string"?p.referrerPolicy:void 0,imageSrcSet:typeof p.imageSrcSet=="string"?p.imageSrcSet:void 0,imageSizes:typeof p.imageSizes=="string"?p.imageSizes:void 0,media:typeof p.media=="string"?p.media:void 0})}},Un.preloadModule=function(m,p){if(typeof m=="string")if(p){var v=h(p.as,p.crossOrigin);r.d.m(m,{as:typeof p.as=="string"&&p.as!=="script"?p.as:void 0,crossOrigin:v,integrity:typeof p.integrity=="string"?p.integrity:void 0})}else r.d.m(m)},Un.requestFormReset=function(m){r.d.r(m)},Un.unstable_batchedUpdates=function(m,p){return m(p)},Un.useFormState=function(m,p,v){return f.H.useFormState(m,p,v)},Un.useFormStatus=function(){return f.H.useHostTransitionStatus()},Un.version="19.2.4",Un}var s_;function Ey(){if(s_)return yd.exports;s_=1;function s(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(s)}catch(e){console.error(e)}}return s(),yd.exports=My(),yd.exports}var o_;function by(){if(o_)return Go;o_=1;var s=yy(),e=tp(),i=Ey();function r(t){var n="https://react.dev/errors/"+t;if(1<arguments.length){n+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)n+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+t+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function l(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function c(t){var n=t,a=t;if(t.alternate)for(;n.return;)n=n.return;else{t=n;do n=t,(n.flags&4098)!==0&&(a=n.return),t=n.return;while(t)}return n.tag===3?a:null}function f(t){if(t.tag===13){var n=t.memoizedState;if(n===null&&(t=t.alternate,t!==null&&(n=t.memoizedState)),n!==null)return n.dehydrated}return null}function h(t){if(t.tag===31){var n=t.memoizedState;if(n===null&&(t=t.alternate,t!==null&&(n=t.memoizedState)),n!==null)return n.dehydrated}return null}function m(t){if(c(t)!==t)throw Error(r(188))}function p(t){var n=t.alternate;if(!n){if(n=c(t),n===null)throw Error(r(188));return n!==t?null:t}for(var a=t,o=n;;){var u=a.return;if(u===null)break;var d=u.alternate;if(d===null){if(o=u.return,o!==null){a=o;continue}break}if(u.child===d.child){for(d=u.child;d;){if(d===a)return m(u),t;if(d===o)return m(u),n;d=d.sibling}throw Error(r(188))}if(a.return!==o.return)a=u,o=d;else{for(var y=!1,R=u.child;R;){if(R===a){y=!0,a=u,o=d;break}if(R===o){y=!0,o=u,a=d;break}R=R.sibling}if(!y){for(R=d.child;R;){if(R===a){y=!0,a=d,o=u;break}if(R===o){y=!0,o=d,a=u;break}R=R.sibling}if(!y)throw Error(r(189))}}if(a.alternate!==o)throw Error(r(190))}if(a.tag!==3)throw Error(r(188));return a.stateNode.current===a?t:n}function v(t){var n=t.tag;if(n===5||n===26||n===27||n===6)return t;for(t=t.child;t!==null;){if(n=v(t),n!==null)return n;t=t.sibling}return null}var _=Object.assign,S=Symbol.for("react.element"),M=Symbol.for("react.transitional.element"),E=Symbol.for("react.portal"),T=Symbol.for("react.fragment"),g=Symbol.for("react.strict_mode"),x=Symbol.for("react.profiler"),U=Symbol.for("react.consumer"),N=Symbol.for("react.context"),O=Symbol.for("react.forward_ref"),L=Symbol.for("react.suspense"),I=Symbol.for("react.suspense_list"),F=Symbol.for("react.memo"),j=Symbol.for("react.lazy"),w=Symbol.for("react.activity"),D=Symbol.for("react.memo_cache_sentinel"),V=Symbol.iterator;function se(t){return t===null||typeof t!="object"?null:(t=V&&t[V]||t["@@iterator"],typeof t=="function"?t:null)}var ae=Symbol.for("react.client.reference");function me(t){if(t==null)return null;if(typeof t=="function")return t.$$typeof===ae?null:t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case T:return"Fragment";case x:return"Profiler";case g:return"StrictMode";case L:return"Suspense";case I:return"SuspenseList";case w:return"Activity"}if(typeof t=="object")switch(t.$$typeof){case E:return"Portal";case N:return t.displayName||"Context";case U:return(t._context.displayName||"Context")+".Consumer";case O:var n=t.render;return t=t.displayName,t||(t=n.displayName||n.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case F:return n=t.displayName||null,n!==null?n:me(t.type)||"Memo";case j:n=t._payload,t=t._init;try{return me(t(n))}catch{}}return null}var de=Array.isArray,z=e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,H=i.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,K={pending:!1,data:null,method:null,action:null},ye=[],ve=-1;function A(t){return{current:t}}function B(t){0>ve||(t.current=ye[ve],ye[ve]=null,ve--)}function ee(t,n){ve++,ye[ve]=t.current,t.current=n}var _e=A(null),Te=A(null),Q=A(null),ce=A(null);function Re(t,n){switch(ee(Q,n),ee(Te,t),ee(_e,null),n.nodeType){case 9:case 11:t=(t=n.documentElement)&&(t=t.namespaceURI)?Mg(t):0;break;default:if(t=n.tagName,n=n.namespaceURI)n=Mg(n),t=Eg(n,t);else switch(t){case"svg":t=1;break;case"math":t=2;break;default:t=0}}B(_e),ee(_e,t)}function Ne(){B(_e),B(Te),B(Q)}function re(t){t.memoizedState!==null&&ee(ce,t);var n=_e.current,a=Eg(n,t.type);n!==a&&(ee(Te,t),ee(_e,a))}function ke(t){Te.current===t&&(B(_e),B(Te)),ce.current===t&&(B(ce),Fo._currentValue=K)}var Ce,rt;function gt(t){if(Ce===void 0)try{throw Error()}catch(a){var n=a.stack.trim().match(/\n( *(at )?)/);Ce=n&&n[1]||"",rt=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+Ce+t+rt}var wt=!1;function ut(t,n){if(!t||wt)return"";wt=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var o={DetermineComponentFrameRoot:function(){try{if(n){var Me=function(){throw Error()};if(Object.defineProperty(Me.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(Me,[])}catch(he){var le=he}Reflect.construct(t,[],Me)}else{try{Me.call()}catch(he){le=he}t.call(Me.prototype)}}else{try{throw Error()}catch(he){le=he}(Me=t())&&typeof Me.catch=="function"&&Me.catch(function(){})}}catch(he){if(he&&le&&typeof he.stack=="string")return[he.stack,le.stack]}return[null,null]}};o.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var u=Object.getOwnPropertyDescriptor(o.DetermineComponentFrameRoot,"name");u&&u.configurable&&Object.defineProperty(o.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var d=o.DetermineComponentFrameRoot(),y=d[0],R=d[1];if(y&&R){var G=y.split(`
`),ie=R.split(`
`);for(u=o=0;o<G.length&&!G[o].includes("DetermineComponentFrameRoot");)o++;for(;u<ie.length&&!ie[u].includes("DetermineComponentFrameRoot");)u++;if(o===G.length||u===ie.length)for(o=G.length-1,u=ie.length-1;1<=o&&0<=u&&G[o]!==ie[u];)u--;for(;1<=o&&0<=u;o--,u--)if(G[o]!==ie[u]){if(o!==1||u!==1)do if(o--,u--,0>u||G[o]!==ie[u]){var ge=`
`+G[o].replace(" at new "," at ");return t.displayName&&ge.includes("<anonymous>")&&(ge=ge.replace("<anonymous>",t.displayName)),ge}while(1<=o&&0<=u);break}}}finally{wt=!1,Error.prepareStackTrace=a}return(a=t?t.displayName||t.name:"")?gt(a):""}function $t(t,n){switch(t.tag){case 26:case 27:case 5:return gt(t.type);case 16:return gt("Lazy");case 13:return t.child!==n&&n!==null?gt("Suspense Fallback"):gt("Suspense");case 19:return gt("SuspenseList");case 0:case 15:return ut(t.type,!1);case 11:return ut(t.type.render,!1);case 1:return ut(t.type,!0);case 31:return gt("Activity");default:return""}}function k(t){try{var n="",a=null;do n+=$t(t,a),a=t,t=t.return;while(t);return n}catch(o){return`
Error generating stack: `+o.message+`
`+o.stack}}var Zt=Object.prototype.hasOwnProperty,Et=s.unstable_scheduleCallback,Nt=s.unstable_cancelCallback,Ke=s.unstable_shouldYield,P=s.unstable_requestPaint,b=s.unstable_now,Y=s.unstable_getCurrentPriorityLevel,xe=s.unstable_ImmediatePriority,be=s.unstable_UserBlockingPriority,pe=s.unstable_NormalPriority,Je=s.unstable_LowPriority,Oe=s.unstable_IdlePriority,Ye=s.log,at=s.unstable_setDisableYieldValue,we=null,De=null;function Ve(t){if(typeof Ye=="function"&&at(t),De&&typeof De.setStrictMode=="function")try{De.setStrictMode(we,t)}catch{}}var He=Math.clz32?Math.clz32:q,Pe=Math.log,dt=Math.LN2;function q(t){return t>>>=0,t===0?32:31-(Pe(t)/dt|0)|0}var ze=256,Ue=262144,Ge=4194304;function Ae(t){var n=t&42;if(n!==0)return n;switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return t&261888;case 262144:case 524288:case 1048576:case 2097152:return t&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return t&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return t}}function Ee(t,n,a){var o=t.pendingLanes;if(o===0)return 0;var u=0,d=t.suspendedLanes,y=t.pingedLanes;t=t.warmLanes;var R=o&134217727;return R!==0?(o=R&~d,o!==0?u=Ae(o):(y&=R,y!==0?u=Ae(y):a||(a=R&~t,a!==0&&(u=Ae(a))))):(R=o&~d,R!==0?u=Ae(R):y!==0?u=Ae(y):a||(a=o&~t,a!==0&&(u=Ae(a)))),u===0?0:n!==0&&n!==u&&(n&d)===0&&(d=u&-u,a=n&-n,d>=a||d===32&&(a&4194048)!==0)?n:u}function Le(t,n){return(t.pendingLanes&~(t.suspendedLanes&~t.pingedLanes)&n)===0}function st(t,n){switch(t){case 1:case 2:case 4:case 8:case 64:return n+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Ft(){var t=Ge;return Ge<<=1,(Ge&62914560)===0&&(Ge=4194304),t}function bt(t){for(var n=[],a=0;31>a;a++)n.push(t);return n}function Dn(t,n){t.pendingLanes|=n,n!==268435456&&(t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0)}function vi(t,n,a,o,u,d){var y=t.pendingLanes;t.pendingLanes=a,t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0,t.expiredLanes&=a,t.entangledLanes&=a,t.errorRecoveryDisabledLanes&=a,t.shellSuspendCounter=0;var R=t.entanglements,G=t.expirationTimes,ie=t.hiddenUpdates;for(a=y&~a;0<a;){var ge=31-He(a),Me=1<<ge;R[ge]=0,G[ge]=-1;var le=ie[ge];if(le!==null)for(ie[ge]=null,ge=0;ge<le.length;ge++){var he=le[ge];he!==null&&(he.lane&=-536870913)}a&=~Me}o!==0&&dl(t,o,0),d!==0&&u===0&&t.tag!==0&&(t.suspendedLanes|=d&~(y&~n))}function dl(t,n,a){t.pendingLanes|=n,t.suspendedLanes&=~n;var o=31-He(n);t.entangledLanes|=n,t.entanglements[o]=t.entanglements[o]|1073741824|a&261930}function Ys(t,n){var a=t.entangledLanes|=n;for(t=t.entanglements;a;){var o=31-He(a),u=1<<o;u&n|t[o]&n&&(t[o]|=n),a&=~u}}function Ir(t,n){var a=n&-n;return a=(a&42)!==0?1:js(a),(a&(t.suspendedLanes|n))!==0?0:a}function js(t){switch(t){case 2:t=1;break;case 8:t=4;break;case 32:t=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:t=128;break;case 268435456:t=134217728;break;default:t=0}return t}function Br(t){return t&=-t,2<t?8<t?(t&134217727)!==0?32:268435456:8:2}function Zs(){var t=H.p;return t!==0?t:(t=window.event,t===void 0?32:qg(t.type))}function Li(t,n){var a=H.p;try{return H.p=t,n()}finally{H.p=a}}var ii=Math.random().toString(36).slice(2),on="__reactFiber$"+ii,xn="__reactProps$"+ii,xi="__reactContainer$"+ii,Hr="__reactEvents$"+ii,Gr="__reactListeners$"+ii,hl="__reactHandles$"+ii,Ks="__reactResources$"+ii,or="__reactMarker$"+ii;function Qs(t){delete t[on],delete t[xn],delete t[Hr],delete t[Gr],delete t[hl]}function Ta(t){var n=t[on];if(n)return n;for(var a=t.parentNode;a;){if(n=a[xi]||a[on]){if(a=n.alternate,n.child!==null||a!==null&&a.child!==null)for(t=Dg(t);t!==null;){if(a=t[on])return a;t=Dg(t)}return n}t=a,a=t.parentNode}return null}function Aa(t){if(t=t[on]||t[xi]){var n=t.tag;if(n===5||n===6||n===13||n===31||n===26||n===27||n===3)return t}return null}function lr(t){var n=t.tag;if(n===5||n===26||n===27||n===6)return t.stateNode;throw Error(r(33))}function Ra(t){var n=t[Ks];return n||(n=t[Ks]={hoistableStyles:new Map,hoistableScripts:new Map}),n}function C(t){t[or]=!0}var Z=new Set,fe={};function oe(t,n){$(t,n),$(t+"Capture",n)}function $(t,n){for(fe[t]=n,t=0;t<n.length;t++)Z.add(n[t])}var Fe=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),Xe={},Ie={};function We(t){return Zt.call(Ie,t)?!0:Zt.call(Xe,t)?!1:Fe.test(t)?Ie[t]=!0:(Xe[t]=!0,!1)}function je(t,n,a){if(We(n))if(a===null)t.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":t.removeAttribute(n);return;case"boolean":var o=n.toLowerCase().slice(0,5);if(o!=="data-"&&o!=="aria-"){t.removeAttribute(n);return}}t.setAttribute(n,""+a)}}function tt(t,n,a){if(a===null)t.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(n);return}t.setAttribute(n,""+a)}}function Ze(t,n,a,o){if(o===null)t.removeAttribute(a);else{switch(typeof o){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(a);return}t.setAttributeNS(n,a,""+o)}}function nt(t){switch(typeof t){case"bigint":case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function Dt(t){var n=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function Kt(t,n,a){var o=Object.getOwnPropertyDescriptor(t.constructor.prototype,n);if(!t.hasOwnProperty(n)&&typeof o<"u"&&typeof o.get=="function"&&typeof o.set=="function"){var u=o.get,d=o.set;return Object.defineProperty(t,n,{configurable:!0,get:function(){return u.call(this)},set:function(y){a=""+y,d.call(this,y)}}),Object.defineProperty(t,n,{enumerable:o.enumerable}),{getValue:function(){return a},setValue:function(y){a=""+y},stopTracking:function(){t._valueTracker=null,delete t[n]}}}}function qt(t){if(!t._valueTracker){var n=Dt(t)?"checked":"value";t._valueTracker=Kt(t,n,""+t[n])}}function Ot(t){if(!t)return!1;var n=t._valueTracker;if(!n)return!0;var a=n.getValue(),o="";return t&&(o=Dt(t)?t.checked?"true":"false":t.value),t=o,t!==a?(n.setValue(t),!0):!1}function $e(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}var Ut=/[\n"\\]/g;function ot(t){return t.replace(Ut,function(n){return"\\"+n.charCodeAt(0).toString(16)+" "})}function Sn(t,n,a,o,u,d,y,R){t.name="",y!=null&&typeof y!="function"&&typeof y!="symbol"&&typeof y!="boolean"?t.type=y:t.removeAttribute("type"),n!=null?y==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+nt(n)):t.value!==""+nt(n)&&(t.value=""+nt(n)):y!=="submit"&&y!=="reset"||t.removeAttribute("value"),n!=null?yn(t,y,nt(n)):a!=null?yn(t,y,nt(a)):o!=null&&t.removeAttribute("value"),u==null&&d!=null&&(t.defaultChecked=!!d),u!=null&&(t.checked=u&&typeof u!="function"&&typeof u!="symbol"),R!=null&&typeof R!="function"&&typeof R!="symbol"&&typeof R!="boolean"?t.name=""+nt(R):t.removeAttribute("name")}function Yi(t,n,a,o,u,d,y,R){if(d!=null&&typeof d!="function"&&typeof d!="symbol"&&typeof d!="boolean"&&(t.type=d),n!=null||a!=null){if(!(d!=="submit"&&d!=="reset"||n!=null)){qt(t);return}a=a!=null?""+nt(a):"",n=n!=null?""+nt(n):a,R||n===t.value||(t.value=n),t.defaultValue=n}o=o??u,o=typeof o!="function"&&typeof o!="symbol"&&!!o,t.checked=R?t.checked:!!o,t.defaultChecked=!!o,y!=null&&typeof y!="function"&&typeof y!="symbol"&&typeof y!="boolean"&&(t.name=y),qt(t)}function yn(t,n,a){n==="number"&&$e(t.ownerDocument)===t||t.defaultValue===""+a||(t.defaultValue=""+a)}function ai(t,n,a,o){if(t=t.options,n){n={};for(var u=0;u<a.length;u++)n["$"+a[u]]=!0;for(a=0;a<t.length;a++)u=n.hasOwnProperty("$"+t[a].value),t[a].selected!==u&&(t[a].selected=u),u&&o&&(t[a].defaultSelected=!0)}else{for(a=""+nt(a),n=null,u=0;u<t.length;u++){if(t[u].value===a){t[u].selected=!0,o&&(t[u].defaultSelected=!0);return}n!==null||t[u].disabled||(n=t[u])}n!==null&&(n.selected=!0)}}function zt(t,n,a){if(n!=null&&(n=""+nt(n),n!==t.value&&(t.value=n),a==null)){t.defaultValue!==n&&(t.defaultValue=n);return}t.defaultValue=a!=null?""+nt(a):""}function Mn(t,n,a,o){if(n==null){if(o!=null){if(a!=null)throw Error(r(92));if(de(o)){if(1<o.length)throw Error(r(93));o=o[0]}a=o}a==null&&(a=""),n=a}a=nt(n),t.defaultValue=a,o=t.textContent,o===a&&o!==""&&o!==null&&(t.value=o),qt(t)}function hn(t,n){if(n){var a=t.firstChild;if(a&&a===t.lastChild&&a.nodeType===3){a.nodeValue=n;return}}t.textContent=n}var En=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function bn(t,n,a){var o=n.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?o?t.setProperty(n,""):n==="float"?t.cssFloat="":t[n]="":o?t.setProperty(n,a):typeof a!="number"||a===0||En.has(n)?n==="float"?t.cssFloat=a:t[n]=(""+a).trim():t[n]=a+"px"}function Vr(t,n,a){if(n!=null&&typeof n!="object")throw Error(r(62));if(t=t.style,a!=null){for(var o in a)!a.hasOwnProperty(o)||n!=null&&n.hasOwnProperty(o)||(o.indexOf("--")===0?t.setProperty(o,""):o==="float"?t.cssFloat="":t[o]="");for(var u in n)o=n[u],n.hasOwnProperty(u)&&a[u]!==o&&bn(t,u,o)}else for(var d in n)n.hasOwnProperty(d)&&bn(t,d,n[d])}function Si(t){if(t.indexOf("-")===-1)return!1;switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var hx=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),px=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function pl(t){return px.test(""+t)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":t}function ji(){}var du=null;function hu(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var kr=null,Xr=null;function yp(t){var n=Aa(t);if(n&&(t=n.stateNode)){var a=t[xn]||null;e:switch(t=n.stateNode,n.type){case"input":if(Sn(t,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),n=a.name,a.type==="radio"&&n!=null){for(a=t;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+ot(""+n)+'"][type="radio"]'),n=0;n<a.length;n++){var o=a[n];if(o!==t&&o.form===t.form){var u=o[xn]||null;if(!u)throw Error(r(90));Sn(o,u.value,u.defaultValue,u.defaultValue,u.checked,u.defaultChecked,u.type,u.name)}}for(n=0;n<a.length;n++)o=a[n],o.form===t.form&&Ot(o)}break e;case"textarea":zt(t,a.value,a.defaultValue);break e;case"select":n=a.value,n!=null&&ai(t,!!a.multiple,n,!1)}}}var pu=!1;function Mp(t,n,a){if(pu)return t(n,a);pu=!0;try{var o=t(n);return o}finally{if(pu=!1,(kr!==null||Xr!==null)&&(tc(),kr&&(n=kr,t=Xr,Xr=kr=null,yp(n),t)))for(n=0;n<t.length;n++)yp(t[n])}}function Js(t,n){var a=t.stateNode;if(a===null)return null;var o=a[xn]||null;if(o===null)return null;a=o[n];e:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(o=!o.disabled)||(t=t.type,o=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!o;break e;default:t=!1}if(t)return null;if(a&&typeof a!="function")throw Error(r(231,n,typeof a));return a}var Zi=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),mu=!1;if(Zi)try{var $s={};Object.defineProperty($s,"passive",{get:function(){mu=!0}}),window.addEventListener("test",$s,$s),window.removeEventListener("test",$s,$s)}catch{mu=!1}var Ca=null,gu=null,ml=null;function Ep(){if(ml)return ml;var t,n=gu,a=n.length,o,u="value"in Ca?Ca.value:Ca.textContent,d=u.length;for(t=0;t<a&&n[t]===u[t];t++);var y=a-t;for(o=1;o<=y&&n[a-o]===u[d-o];o++);return ml=u.slice(t,1<o?1-o:void 0)}function gl(t){var n=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&n===13&&(t=13)):t=n,t===10&&(t=13),32<=t||t===13?t:0}function _l(){return!0}function bp(){return!1}function In(t){function n(a,o,u,d,y){this._reactName=a,this._targetInst=u,this.type=o,this.nativeEvent=d,this.target=y,this.currentTarget=null;for(var R in t)t.hasOwnProperty(R)&&(a=t[R],this[R]=a?a(d):d[R]);return this.isDefaultPrevented=(d.defaultPrevented!=null?d.defaultPrevented:d.returnValue===!1)?_l:bp,this.isPropagationStopped=bp,this}return _(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=_l)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=_l)},persist:function(){},isPersistent:_l}),n}var cr={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},vl=In(cr),eo=_({},cr,{view:0,detail:0}),mx=In(eo),_u,vu,to,xl=_({},eo,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Su,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==to&&(to&&t.type==="mousemove"?(_u=t.screenX-to.screenX,vu=t.screenY-to.screenY):vu=_u=0,to=t),_u)},movementY:function(t){return"movementY"in t?t.movementY:vu}}),Tp=In(xl),gx=_({},xl,{dataTransfer:0}),_x=In(gx),vx=_({},eo,{relatedTarget:0}),xu=In(vx),xx=_({},cr,{animationName:0,elapsedTime:0,pseudoElement:0}),Sx=In(xx),yx=_({},cr,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),Mx=In(yx),Ex=_({},cr,{data:0}),Ap=In(Ex),bx={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Tx={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Ax={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Rx(t){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(t):(t=Ax[t])?!!n[t]:!1}function Su(){return Rx}var Cx=_({},eo,{key:function(t){if(t.key){var n=bx[t.key]||t.key;if(n!=="Unidentified")return n}return t.type==="keypress"?(t=gl(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?Tx[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Su,charCode:function(t){return t.type==="keypress"?gl(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?gl(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),wx=In(Cx),Dx=_({},xl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Rp=In(Dx),Ux=_({},eo,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Su}),Lx=In(Ux),Nx=_({},cr,{propertyName:0,elapsedTime:0,pseudoElement:0}),Ox=In(Nx),Px=_({},xl,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),Fx=In(Px),zx=_({},cr,{newState:0,oldState:0}),Ix=In(zx),Bx=[9,13,27,32],yu=Zi&&"CompositionEvent"in window,no=null;Zi&&"documentMode"in document&&(no=document.documentMode);var Hx=Zi&&"TextEvent"in window&&!no,Cp=Zi&&(!yu||no&&8<no&&11>=no),wp=" ",Dp=!1;function Up(t,n){switch(t){case"keyup":return Bx.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Lp(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Wr=!1;function Gx(t,n){switch(t){case"compositionend":return Lp(n);case"keypress":return n.which!==32?null:(Dp=!0,wp);case"textInput":return t=n.data,t===wp&&Dp?null:t;default:return null}}function Vx(t,n){if(Wr)return t==="compositionend"||!yu&&Up(t,n)?(t=Ep(),ml=gu=Ca=null,Wr=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return Cp&&n.locale!=="ko"?null:n.data;default:return null}}var kx={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Np(t){var n=t&&t.nodeName&&t.nodeName.toLowerCase();return n==="input"?!!kx[t.type]:n==="textarea"}function Op(t,n,a,o){kr?Xr?Xr.push(o):Xr=[o]:kr=o,n=lc(n,"onChange"),0<n.length&&(a=new vl("onChange","change",null,a,o),t.push({event:a,listeners:n}))}var io=null,ao=null;function Xx(t){gg(t,0)}function Sl(t){var n=lr(t);if(Ot(n))return t}function Pp(t,n){if(t==="change")return n}var Fp=!1;if(Zi){var Mu;if(Zi){var Eu="oninput"in document;if(!Eu){var zp=document.createElement("div");zp.setAttribute("oninput","return;"),Eu=typeof zp.oninput=="function"}Mu=Eu}else Mu=!1;Fp=Mu&&(!document.documentMode||9<document.documentMode)}function Ip(){io&&(io.detachEvent("onpropertychange",Bp),ao=io=null)}function Bp(t){if(t.propertyName==="value"&&Sl(ao)){var n=[];Op(n,ao,t,hu(t)),Mp(Xx,n)}}function Wx(t,n,a){t==="focusin"?(Ip(),io=n,ao=a,io.attachEvent("onpropertychange",Bp)):t==="focusout"&&Ip()}function qx(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Sl(ao)}function Yx(t,n){if(t==="click")return Sl(n)}function jx(t,n){if(t==="input"||t==="change")return Sl(n)}function Zx(t,n){return t===n&&(t!==0||1/t===1/n)||t!==t&&n!==n}var Yn=typeof Object.is=="function"?Object.is:Zx;function ro(t,n){if(Yn(t,n))return!0;if(typeof t!="object"||t===null||typeof n!="object"||n===null)return!1;var a=Object.keys(t),o=Object.keys(n);if(a.length!==o.length)return!1;for(o=0;o<a.length;o++){var u=a[o];if(!Zt.call(n,u)||!Yn(t[u],n[u]))return!1}return!0}function Hp(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Gp(t,n){var a=Hp(t);t=0;for(var o;a;){if(a.nodeType===3){if(o=t+a.textContent.length,t<=n&&o>=n)return{node:a,offset:n-t};t=o}e:{for(;a;){if(a.nextSibling){a=a.nextSibling;break e}a=a.parentNode}a=void 0}a=Hp(a)}}function Vp(t,n){return t&&n?t===n?!0:t&&t.nodeType===3?!1:n&&n.nodeType===3?Vp(t,n.parentNode):"contains"in t?t.contains(n):t.compareDocumentPosition?!!(t.compareDocumentPosition(n)&16):!1:!1}function kp(t){t=t!=null&&t.ownerDocument!=null&&t.ownerDocument.defaultView!=null?t.ownerDocument.defaultView:window;for(var n=$e(t.document);n instanceof t.HTMLIFrameElement;){try{var a=typeof n.contentWindow.location.href=="string"}catch{a=!1}if(a)t=n.contentWindow;else break;n=$e(t.document)}return n}function bu(t){var n=t&&t.nodeName&&t.nodeName.toLowerCase();return n&&(n==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||n==="textarea"||t.contentEditable==="true")}var Kx=Zi&&"documentMode"in document&&11>=document.documentMode,qr=null,Tu=null,so=null,Au=!1;function Xp(t,n,a){var o=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;Au||qr==null||qr!==$e(o)||(o=qr,"selectionStart"in o&&bu(o)?o={start:o.selectionStart,end:o.selectionEnd}:(o=(o.ownerDocument&&o.ownerDocument.defaultView||window).getSelection(),o={anchorNode:o.anchorNode,anchorOffset:o.anchorOffset,focusNode:o.focusNode,focusOffset:o.focusOffset}),so&&ro(so,o)||(so=o,o=lc(Tu,"onSelect"),0<o.length&&(n=new vl("onSelect","select",null,n,a),t.push({event:n,listeners:o}),n.target=qr)))}function ur(t,n){var a={};return a[t.toLowerCase()]=n.toLowerCase(),a["Webkit"+t]="webkit"+n,a["Moz"+t]="moz"+n,a}var Yr={animationend:ur("Animation","AnimationEnd"),animationiteration:ur("Animation","AnimationIteration"),animationstart:ur("Animation","AnimationStart"),transitionrun:ur("Transition","TransitionRun"),transitionstart:ur("Transition","TransitionStart"),transitioncancel:ur("Transition","TransitionCancel"),transitionend:ur("Transition","TransitionEnd")},Ru={},Wp={};Zi&&(Wp=document.createElement("div").style,"AnimationEvent"in window||(delete Yr.animationend.animation,delete Yr.animationiteration.animation,delete Yr.animationstart.animation),"TransitionEvent"in window||delete Yr.transitionend.transition);function fr(t){if(Ru[t])return Ru[t];if(!Yr[t])return t;var n=Yr[t],a;for(a in n)if(n.hasOwnProperty(a)&&a in Wp)return Ru[t]=n[a];return t}var qp=fr("animationend"),Yp=fr("animationiteration"),jp=fr("animationstart"),Qx=fr("transitionrun"),Jx=fr("transitionstart"),$x=fr("transitioncancel"),Zp=fr("transitionend"),Kp=new Map,Cu="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Cu.push("scrollEnd");function yi(t,n){Kp.set(t,n),oe(n,[t])}var yl=typeof reportError=="function"?reportError:function(t){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var n=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof t=="object"&&t!==null&&typeof t.message=="string"?String(t.message):String(t),error:t});if(!window.dispatchEvent(n))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",t);return}console.error(t)},ri=[],jr=0,wu=0;function Ml(){for(var t=jr,n=wu=jr=0;n<t;){var a=ri[n];ri[n++]=null;var o=ri[n];ri[n++]=null;var u=ri[n];ri[n++]=null;var d=ri[n];if(ri[n++]=null,o!==null&&u!==null){var y=o.pending;y===null?u.next=u:(u.next=y.next,y.next=u),o.pending=u}d!==0&&Qp(a,u,d)}}function El(t,n,a,o){ri[jr++]=t,ri[jr++]=n,ri[jr++]=a,ri[jr++]=o,wu|=o,t.lanes|=o,t=t.alternate,t!==null&&(t.lanes|=o)}function Du(t,n,a,o){return El(t,n,a,o),bl(t)}function dr(t,n){return El(t,null,null,n),bl(t)}function Qp(t,n,a){t.lanes|=a;var o=t.alternate;o!==null&&(o.lanes|=a);for(var u=!1,d=t.return;d!==null;)d.childLanes|=a,o=d.alternate,o!==null&&(o.childLanes|=a),d.tag===22&&(t=d.stateNode,t===null||t._visibility&1||(u=!0)),t=d,d=d.return;return t.tag===3?(d=t.stateNode,u&&n!==null&&(u=31-He(a),t=d.hiddenUpdates,o=t[u],o===null?t[u]=[n]:o.push(n),n.lane=a|536870912),d):null}function bl(t){if(50<wo)throw wo=0,Hf=null,Error(r(185));for(var n=t.return;n!==null;)t=n,n=t.return;return t.tag===3?t.stateNode:null}var Zr={};function eS(t,n,a,o){this.tag=t,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=o,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function jn(t,n,a,o){return new eS(t,n,a,o)}function Uu(t){return t=t.prototype,!(!t||!t.isReactComponent)}function Ki(t,n){var a=t.alternate;return a===null?(a=jn(t.tag,n,t.key,t.mode),a.elementType=t.elementType,a.type=t.type,a.stateNode=t.stateNode,a.alternate=t,t.alternate=a):(a.pendingProps=n,a.type=t.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=t.flags&65011712,a.childLanes=t.childLanes,a.lanes=t.lanes,a.child=t.child,a.memoizedProps=t.memoizedProps,a.memoizedState=t.memoizedState,a.updateQueue=t.updateQueue,n=t.dependencies,a.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},a.sibling=t.sibling,a.index=t.index,a.ref=t.ref,a.refCleanup=t.refCleanup,a}function Jp(t,n){t.flags&=65011714;var a=t.alternate;return a===null?(t.childLanes=0,t.lanes=n,t.child=null,t.subtreeFlags=0,t.memoizedProps=null,t.memoizedState=null,t.updateQueue=null,t.dependencies=null,t.stateNode=null):(t.childLanes=a.childLanes,t.lanes=a.lanes,t.child=a.child,t.subtreeFlags=0,t.deletions=null,t.memoizedProps=a.memoizedProps,t.memoizedState=a.memoizedState,t.updateQueue=a.updateQueue,t.type=a.type,n=a.dependencies,t.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),t}function Tl(t,n,a,o,u,d){var y=0;if(o=t,typeof t=="function")Uu(t)&&(y=1);else if(typeof t=="string")y=ry(t,a,_e.current)?26:t==="html"||t==="head"||t==="body"?27:5;else e:switch(t){case w:return t=jn(31,a,n,u),t.elementType=w,t.lanes=d,t;case T:return hr(a.children,u,d,n);case g:y=8,u|=24;break;case x:return t=jn(12,a,n,u|2),t.elementType=x,t.lanes=d,t;case L:return t=jn(13,a,n,u),t.elementType=L,t.lanes=d,t;case I:return t=jn(19,a,n,u),t.elementType=I,t.lanes=d,t;default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case N:y=10;break e;case U:y=9;break e;case O:y=11;break e;case F:y=14;break e;case j:y=16,o=null;break e}y=29,a=Error(r(130,t===null?"null":typeof t,"")),o=null}return n=jn(y,a,n,u),n.elementType=t,n.type=o,n.lanes=d,n}function hr(t,n,a,o){return t=jn(7,t,o,n),t.lanes=a,t}function Lu(t,n,a){return t=jn(6,t,null,n),t.lanes=a,t}function $p(t){var n=jn(18,null,null,0);return n.stateNode=t,n}function Nu(t,n,a){return n=jn(4,t.children!==null?t.children:[],t.key,n),n.lanes=a,n.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},n}var em=new WeakMap;function si(t,n){if(typeof t=="object"&&t!==null){var a=em.get(t);return a!==void 0?a:(n={value:t,source:n,stack:k(n)},em.set(t,n),n)}return{value:t,source:n,stack:k(n)}}var Kr=[],Qr=0,Al=null,oo=0,oi=[],li=0,wa=null,Ni=1,Oi="";function Qi(t,n){Kr[Qr++]=oo,Kr[Qr++]=Al,Al=t,oo=n}function tm(t,n,a){oi[li++]=Ni,oi[li++]=Oi,oi[li++]=wa,wa=t;var o=Ni;t=Oi;var u=32-He(o)-1;o&=~(1<<u),a+=1;var d=32-He(n)+u;if(30<d){var y=u-u%5;d=(o&(1<<y)-1).toString(32),o>>=y,u-=y,Ni=1<<32-He(n)+u|a<<u|o,Oi=d+t}else Ni=1<<d|a<<u|o,Oi=t}function Ou(t){t.return!==null&&(Qi(t,1),tm(t,1,0))}function Pu(t){for(;t===Al;)Al=Kr[--Qr],Kr[Qr]=null,oo=Kr[--Qr],Kr[Qr]=null;for(;t===wa;)wa=oi[--li],oi[li]=null,Oi=oi[--li],oi[li]=null,Ni=oi[--li],oi[li]=null}function nm(t,n){oi[li++]=Ni,oi[li++]=Oi,oi[li++]=wa,Ni=n.id,Oi=n.overflow,wa=t}var Tn=null,Yt=null,yt=!1,Da=null,ci=!1,Fu=Error(r(519));function Ua(t){var n=Error(r(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw lo(si(n,t)),Fu}function im(t){var n=t.stateNode,a=t.type,o=t.memoizedProps;switch(n[on]=t,n[xn]=o,a){case"dialog":vt("cancel",n),vt("close",n);break;case"iframe":case"object":case"embed":vt("load",n);break;case"video":case"audio":for(a=0;a<Uo.length;a++)vt(Uo[a],n);break;case"source":vt("error",n);break;case"img":case"image":case"link":vt("error",n),vt("load",n);break;case"details":vt("toggle",n);break;case"input":vt("invalid",n),Yi(n,o.value,o.defaultValue,o.checked,o.defaultChecked,o.type,o.name,!0);break;case"select":vt("invalid",n);break;case"textarea":vt("invalid",n),Mn(n,o.value,o.defaultValue,o.children)}a=o.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||n.textContent===""+a||o.suppressHydrationWarning===!0||Sg(n.textContent,a)?(o.popover!=null&&(vt("beforetoggle",n),vt("toggle",n)),o.onScroll!=null&&vt("scroll",n),o.onScrollEnd!=null&&vt("scrollend",n),o.onClick!=null&&(n.onclick=ji),n=!0):n=!1,n||Ua(t,!0)}function am(t){for(Tn=t.return;Tn;)switch(Tn.tag){case 5:case 31:case 13:ci=!1;return;case 27:case 3:ci=!0;return;default:Tn=Tn.return}}function Jr(t){if(t!==Tn)return!1;if(!yt)return am(t),yt=!0,!1;var n=t.tag,a;if((a=n!==3&&n!==27)&&((a=n===5)&&(a=t.type,a=!(a!=="form"&&a!=="button")||td(t.type,t.memoizedProps)),a=!a),a&&Yt&&Ua(t),am(t),n===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(r(317));Yt=wg(t)}else if(n===31){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(r(317));Yt=wg(t)}else n===27?(n=Yt,Wa(t.type)?(t=sd,sd=null,Yt=t):Yt=n):Yt=Tn?fi(t.stateNode.nextSibling):null;return!0}function pr(){Yt=Tn=null,yt=!1}function zu(){var t=Da;return t!==null&&(Vn===null?Vn=t:Vn.push.apply(Vn,t),Da=null),t}function lo(t){Da===null?Da=[t]:Da.push(t)}var Iu=A(null),mr=null,Ji=null;function La(t,n,a){ee(Iu,n._currentValue),n._currentValue=a}function $i(t){t._currentValue=Iu.current,B(Iu)}function Bu(t,n,a){for(;t!==null;){var o=t.alternate;if((t.childLanes&n)!==n?(t.childLanes|=n,o!==null&&(o.childLanes|=n)):o!==null&&(o.childLanes&n)!==n&&(o.childLanes|=n),t===a)break;t=t.return}}function Hu(t,n,a,o){var u=t.child;for(u!==null&&(u.return=t);u!==null;){var d=u.dependencies;if(d!==null){var y=u.child;d=d.firstContext;e:for(;d!==null;){var R=d;d=u;for(var G=0;G<n.length;G++)if(R.context===n[G]){d.lanes|=a,R=d.alternate,R!==null&&(R.lanes|=a),Bu(d.return,a,t),o||(y=null);break e}d=R.next}}else if(u.tag===18){if(y=u.return,y===null)throw Error(r(341));y.lanes|=a,d=y.alternate,d!==null&&(d.lanes|=a),Bu(y,a,t),y=null}else y=u.child;if(y!==null)y.return=u;else for(y=u;y!==null;){if(y===t){y=null;break}if(u=y.sibling,u!==null){u.return=y.return,y=u;break}y=y.return}u=y}}function $r(t,n,a,o){t=null;for(var u=n,d=!1;u!==null;){if(!d){if((u.flags&524288)!==0)d=!0;else if((u.flags&262144)!==0)break}if(u.tag===10){var y=u.alternate;if(y===null)throw Error(r(387));if(y=y.memoizedProps,y!==null){var R=u.type;Yn(u.pendingProps.value,y.value)||(t!==null?t.push(R):t=[R])}}else if(u===ce.current){if(y=u.alternate,y===null)throw Error(r(387));y.memoizedState.memoizedState!==u.memoizedState.memoizedState&&(t!==null?t.push(Fo):t=[Fo])}u=u.return}t!==null&&Hu(n,t,a,o),n.flags|=262144}function Rl(t){for(t=t.firstContext;t!==null;){if(!Yn(t.context._currentValue,t.memoizedValue))return!0;t=t.next}return!1}function gr(t){mr=t,Ji=null,t=t.dependencies,t!==null&&(t.firstContext=null)}function An(t){return rm(mr,t)}function Cl(t,n){return mr===null&&gr(t),rm(t,n)}function rm(t,n){var a=n._currentValue;if(n={context:n,memoizedValue:a,next:null},Ji===null){if(t===null)throw Error(r(308));Ji=n,t.dependencies={lanes:0,firstContext:n},t.flags|=524288}else Ji=Ji.next=n;return a}var tS=typeof AbortController<"u"?AbortController:function(){var t=[],n=this.signal={aborted:!1,addEventListener:function(a,o){t.push(o)}};this.abort=function(){n.aborted=!0,t.forEach(function(a){return a()})}},nS=s.unstable_scheduleCallback,iS=s.unstable_NormalPriority,ln={$$typeof:N,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Gu(){return{controller:new tS,data:new Map,refCount:0}}function co(t){t.refCount--,t.refCount===0&&nS(iS,function(){t.controller.abort()})}var uo=null,Vu=0,es=0,ts=null;function aS(t,n){if(uo===null){var a=uo=[];Vu=0,es=qf(),ts={status:"pending",value:void 0,then:function(o){a.push(o)}}}return Vu++,n.then(sm,sm),n}function sm(){if(--Vu===0&&uo!==null){ts!==null&&(ts.status="fulfilled");var t=uo;uo=null,es=0,ts=null;for(var n=0;n<t.length;n++)(0,t[n])()}}function rS(t,n){var a=[],o={status:"pending",value:null,reason:null,then:function(u){a.push(u)}};return t.then(function(){o.status="fulfilled",o.value=n;for(var u=0;u<a.length;u++)(0,a[u])(n)},function(u){for(o.status="rejected",o.reason=u,u=0;u<a.length;u++)(0,a[u])(void 0)}),o}var om=z.S;z.S=function(t,n){X0=b(),typeof n=="object"&&n!==null&&typeof n.then=="function"&&aS(t,n),om!==null&&om(t,n)};var _r=A(null);function ku(){var t=_r.current;return t!==null?t:Wt.pooledCache}function wl(t,n){n===null?ee(_r,_r.current):ee(_r,n.pool)}function lm(){var t=ku();return t===null?null:{parent:ln._currentValue,pool:t}}var ns=Error(r(460)),Xu=Error(r(474)),Dl=Error(r(542)),Ul={then:function(){}};function cm(t){return t=t.status,t==="fulfilled"||t==="rejected"}function um(t,n,a){switch(a=t[a],a===void 0?t.push(n):a!==n&&(n.then(ji,ji),n=a),n.status){case"fulfilled":return n.value;case"rejected":throw t=n.reason,dm(t),t;default:if(typeof n.status=="string")n.then(ji,ji);else{if(t=Wt,t!==null&&100<t.shellSuspendCounter)throw Error(r(482));t=n,t.status="pending",t.then(function(o){if(n.status==="pending"){var u=n;u.status="fulfilled",u.value=o}},function(o){if(n.status==="pending"){var u=n;u.status="rejected",u.reason=o}})}switch(n.status){case"fulfilled":return n.value;case"rejected":throw t=n.reason,dm(t),t}throw xr=n,ns}}function vr(t){try{var n=t._init;return n(t._payload)}catch(a){throw a!==null&&typeof a=="object"&&typeof a.then=="function"?(xr=a,ns):a}}var xr=null;function fm(){if(xr===null)throw Error(r(459));var t=xr;return xr=null,t}function dm(t){if(t===ns||t===Dl)throw Error(r(483))}var is=null,fo=0;function Ll(t){var n=fo;return fo+=1,is===null&&(is=[]),um(is,t,n)}function ho(t,n){n=n.props.ref,t.ref=n!==void 0?n:null}function Nl(t,n){throw n.$$typeof===S?Error(r(525)):(t=Object.prototype.toString.call(n),Error(r(31,t==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":t)))}function hm(t){function n(J,W){if(t){var ne=J.deletions;ne===null?(J.deletions=[W],J.flags|=16):ne.push(W)}}function a(J,W){if(!t)return null;for(;W!==null;)n(J,W),W=W.sibling;return null}function o(J){for(var W=new Map;J!==null;)J.key!==null?W.set(J.key,J):W.set(J.index,J),J=J.sibling;return W}function u(J,W){return J=Ki(J,W),J.index=0,J.sibling=null,J}function d(J,W,ne){return J.index=ne,t?(ne=J.alternate,ne!==null?(ne=ne.index,ne<W?(J.flags|=67108866,W):ne):(J.flags|=67108866,W)):(J.flags|=1048576,W)}function y(J){return t&&J.alternate===null&&(J.flags|=67108866),J}function R(J,W,ne,Se){return W===null||W.tag!==6?(W=Lu(ne,J.mode,Se),W.return=J,W):(W=u(W,ne),W.return=J,W)}function G(J,W,ne,Se){var et=ne.type;return et===T?ge(J,W,ne.props.children,Se,ne.key):W!==null&&(W.elementType===et||typeof et=="object"&&et!==null&&et.$$typeof===j&&vr(et)===W.type)?(W=u(W,ne.props),ho(W,ne),W.return=J,W):(W=Tl(ne.type,ne.key,ne.props,null,J.mode,Se),ho(W,ne),W.return=J,W)}function ie(J,W,ne,Se){return W===null||W.tag!==4||W.stateNode.containerInfo!==ne.containerInfo||W.stateNode.implementation!==ne.implementation?(W=Nu(ne,J.mode,Se),W.return=J,W):(W=u(W,ne.children||[]),W.return=J,W)}function ge(J,W,ne,Se,et){return W===null||W.tag!==7?(W=hr(ne,J.mode,Se,et),W.return=J,W):(W=u(W,ne),W.return=J,W)}function Me(J,W,ne){if(typeof W=="string"&&W!==""||typeof W=="number"||typeof W=="bigint")return W=Lu(""+W,J.mode,ne),W.return=J,W;if(typeof W=="object"&&W!==null){switch(W.$$typeof){case M:return ne=Tl(W.type,W.key,W.props,null,J.mode,ne),ho(ne,W),ne.return=J,ne;case E:return W=Nu(W,J.mode,ne),W.return=J,W;case j:return W=vr(W),Me(J,W,ne)}if(de(W)||se(W))return W=hr(W,J.mode,ne,null),W.return=J,W;if(typeof W.then=="function")return Me(J,Ll(W),ne);if(W.$$typeof===N)return Me(J,Cl(J,W),ne);Nl(J,W)}return null}function le(J,W,ne,Se){var et=W!==null?W.key:null;if(typeof ne=="string"&&ne!==""||typeof ne=="number"||typeof ne=="bigint")return et!==null?null:R(J,W,""+ne,Se);if(typeof ne=="object"&&ne!==null){switch(ne.$$typeof){case M:return ne.key===et?G(J,W,ne,Se):null;case E:return ne.key===et?ie(J,W,ne,Se):null;case j:return ne=vr(ne),le(J,W,ne,Se)}if(de(ne)||se(ne))return et!==null?null:ge(J,W,ne,Se,null);if(typeof ne.then=="function")return le(J,W,Ll(ne),Se);if(ne.$$typeof===N)return le(J,W,Cl(J,ne),Se);Nl(J,ne)}return null}function he(J,W,ne,Se,et){if(typeof Se=="string"&&Se!==""||typeof Se=="number"||typeof Se=="bigint")return J=J.get(ne)||null,R(W,J,""+Se,et);if(typeof Se=="object"&&Se!==null){switch(Se.$$typeof){case M:return J=J.get(Se.key===null?ne:Se.key)||null,G(W,J,Se,et);case E:return J=J.get(Se.key===null?ne:Se.key)||null,ie(W,J,Se,et);case j:return Se=vr(Se),he(J,W,ne,Se,et)}if(de(Se)||se(Se))return J=J.get(ne)||null,ge(W,J,Se,et,null);if(typeof Se.then=="function")return he(J,W,ne,Ll(Se),et);if(Se.$$typeof===N)return he(J,W,ne,Cl(W,Se),et);Nl(W,Se)}return null}function qe(J,W,ne,Se){for(var et=null,At=null,Qe=W,ht=W=0,St=null;Qe!==null&&ht<ne.length;ht++){Qe.index>ht?(St=Qe,Qe=null):St=Qe.sibling;var Rt=le(J,Qe,ne[ht],Se);if(Rt===null){Qe===null&&(Qe=St);break}t&&Qe&&Rt.alternate===null&&n(J,Qe),W=d(Rt,W,ht),At===null?et=Rt:At.sibling=Rt,At=Rt,Qe=St}if(ht===ne.length)return a(J,Qe),yt&&Qi(J,ht),et;if(Qe===null){for(;ht<ne.length;ht++)Qe=Me(J,ne[ht],Se),Qe!==null&&(W=d(Qe,W,ht),At===null?et=Qe:At.sibling=Qe,At=Qe);return yt&&Qi(J,ht),et}for(Qe=o(Qe);ht<ne.length;ht++)St=he(Qe,J,ht,ne[ht],Se),St!==null&&(t&&St.alternate!==null&&Qe.delete(St.key===null?ht:St.key),W=d(St,W,ht),At===null?et=St:At.sibling=St,At=St);return t&&Qe.forEach(function(Ka){return n(J,Ka)}),yt&&Qi(J,ht),et}function it(J,W,ne,Se){if(ne==null)throw Error(r(151));for(var et=null,At=null,Qe=W,ht=W=0,St=null,Rt=ne.next();Qe!==null&&!Rt.done;ht++,Rt=ne.next()){Qe.index>ht?(St=Qe,Qe=null):St=Qe.sibling;var Ka=le(J,Qe,Rt.value,Se);if(Ka===null){Qe===null&&(Qe=St);break}t&&Qe&&Ka.alternate===null&&n(J,Qe),W=d(Ka,W,ht),At===null?et=Ka:At.sibling=Ka,At=Ka,Qe=St}if(Rt.done)return a(J,Qe),yt&&Qi(J,ht),et;if(Qe===null){for(;!Rt.done;ht++,Rt=ne.next())Rt=Me(J,Rt.value,Se),Rt!==null&&(W=d(Rt,W,ht),At===null?et=Rt:At.sibling=Rt,At=Rt);return yt&&Qi(J,ht),et}for(Qe=o(Qe);!Rt.done;ht++,Rt=ne.next())Rt=he(Qe,J,ht,Rt.value,Se),Rt!==null&&(t&&Rt.alternate!==null&&Qe.delete(Rt.key===null?ht:Rt.key),W=d(Rt,W,ht),At===null?et=Rt:At.sibling=Rt,At=Rt);return t&&Qe.forEach(function(gy){return n(J,gy)}),yt&&Qi(J,ht),et}function kt(J,W,ne,Se){if(typeof ne=="object"&&ne!==null&&ne.type===T&&ne.key===null&&(ne=ne.props.children),typeof ne=="object"&&ne!==null){switch(ne.$$typeof){case M:e:{for(var et=ne.key;W!==null;){if(W.key===et){if(et=ne.type,et===T){if(W.tag===7){a(J,W.sibling),Se=u(W,ne.props.children),Se.return=J,J=Se;break e}}else if(W.elementType===et||typeof et=="object"&&et!==null&&et.$$typeof===j&&vr(et)===W.type){a(J,W.sibling),Se=u(W,ne.props),ho(Se,ne),Se.return=J,J=Se;break e}a(J,W);break}else n(J,W);W=W.sibling}ne.type===T?(Se=hr(ne.props.children,J.mode,Se,ne.key),Se.return=J,J=Se):(Se=Tl(ne.type,ne.key,ne.props,null,J.mode,Se),ho(Se,ne),Se.return=J,J=Se)}return y(J);case E:e:{for(et=ne.key;W!==null;){if(W.key===et)if(W.tag===4&&W.stateNode.containerInfo===ne.containerInfo&&W.stateNode.implementation===ne.implementation){a(J,W.sibling),Se=u(W,ne.children||[]),Se.return=J,J=Se;break e}else{a(J,W);break}else n(J,W);W=W.sibling}Se=Nu(ne,J.mode,Se),Se.return=J,J=Se}return y(J);case j:return ne=vr(ne),kt(J,W,ne,Se)}if(de(ne))return qe(J,W,ne,Se);if(se(ne)){if(et=se(ne),typeof et!="function")throw Error(r(150));return ne=et.call(ne),it(J,W,ne,Se)}if(typeof ne.then=="function")return kt(J,W,Ll(ne),Se);if(ne.$$typeof===N)return kt(J,W,Cl(J,ne),Se);Nl(J,ne)}return typeof ne=="string"&&ne!==""||typeof ne=="number"||typeof ne=="bigint"?(ne=""+ne,W!==null&&W.tag===6?(a(J,W.sibling),Se=u(W,ne),Se.return=J,J=Se):(a(J,W),Se=Lu(ne,J.mode,Se),Se.return=J,J=Se),y(J)):a(J,W)}return function(J,W,ne,Se){try{fo=0;var et=kt(J,W,ne,Se);return is=null,et}catch(Qe){if(Qe===ns||Qe===Dl)throw Qe;var At=jn(29,Qe,null,J.mode);return At.lanes=Se,At.return=J,At}}}var Sr=hm(!0),pm=hm(!1),Na=!1;function Wu(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function qu(t,n){t=t.updateQueue,n.updateQueue===t&&(n.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,callbacks:null})}function Oa(t){return{lane:t,tag:0,payload:null,callback:null,next:null}}function Pa(t,n,a){var o=t.updateQueue;if(o===null)return null;if(o=o.shared,(Lt&2)!==0){var u=o.pending;return u===null?n.next=n:(n.next=u.next,u.next=n),o.pending=n,n=bl(t),Qp(t,null,a),n}return El(t,o,n,a),bl(t)}function po(t,n,a){if(n=n.updateQueue,n!==null&&(n=n.shared,(a&4194048)!==0)){var o=n.lanes;o&=t.pendingLanes,a|=o,n.lanes=a,Ys(t,a)}}function Yu(t,n){var a=t.updateQueue,o=t.alternate;if(o!==null&&(o=o.updateQueue,a===o)){var u=null,d=null;if(a=a.firstBaseUpdate,a!==null){do{var y={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};d===null?u=d=y:d=d.next=y,a=a.next}while(a!==null);d===null?u=d=n:d=d.next=n}else u=d=n;a={baseState:o.baseState,firstBaseUpdate:u,lastBaseUpdate:d,shared:o.shared,callbacks:o.callbacks},t.updateQueue=a;return}t=a.lastBaseUpdate,t===null?a.firstBaseUpdate=n:t.next=n,a.lastBaseUpdate=n}var ju=!1;function mo(){if(ju){var t=ts;if(t!==null)throw t}}function go(t,n,a,o){ju=!1;var u=t.updateQueue;Na=!1;var d=u.firstBaseUpdate,y=u.lastBaseUpdate,R=u.shared.pending;if(R!==null){u.shared.pending=null;var G=R,ie=G.next;G.next=null,y===null?d=ie:y.next=ie,y=G;var ge=t.alternate;ge!==null&&(ge=ge.updateQueue,R=ge.lastBaseUpdate,R!==y&&(R===null?ge.firstBaseUpdate=ie:R.next=ie,ge.lastBaseUpdate=G))}if(d!==null){var Me=u.baseState;y=0,ge=ie=G=null,R=d;do{var le=R.lane&-536870913,he=le!==R.lane;if(he?(xt&le)===le:(o&le)===le){le!==0&&le===es&&(ju=!0),ge!==null&&(ge=ge.next={lane:0,tag:R.tag,payload:R.payload,callback:null,next:null});e:{var qe=t,it=R;le=n;var kt=a;switch(it.tag){case 1:if(qe=it.payload,typeof qe=="function"){Me=qe.call(kt,Me,le);break e}Me=qe;break e;case 3:qe.flags=qe.flags&-65537|128;case 0:if(qe=it.payload,le=typeof qe=="function"?qe.call(kt,Me,le):qe,le==null)break e;Me=_({},Me,le);break e;case 2:Na=!0}}le=R.callback,le!==null&&(t.flags|=64,he&&(t.flags|=8192),he=u.callbacks,he===null?u.callbacks=[le]:he.push(le))}else he={lane:le,tag:R.tag,payload:R.payload,callback:R.callback,next:null},ge===null?(ie=ge=he,G=Me):ge=ge.next=he,y|=le;if(R=R.next,R===null){if(R=u.shared.pending,R===null)break;he=R,R=he.next,he.next=null,u.lastBaseUpdate=he,u.shared.pending=null}}while(!0);ge===null&&(G=Me),u.baseState=G,u.firstBaseUpdate=ie,u.lastBaseUpdate=ge,d===null&&(u.shared.lanes=0),Ha|=y,t.lanes=y,t.memoizedState=Me}}function mm(t,n){if(typeof t!="function")throw Error(r(191,t));t.call(n)}function gm(t,n){var a=t.callbacks;if(a!==null)for(t.callbacks=null,t=0;t<a.length;t++)mm(a[t],n)}var as=A(null),Ol=A(0);function _m(t,n){t=la,ee(Ol,t),ee(as,n),la=t|n.baseLanes}function Zu(){ee(Ol,la),ee(as,as.current)}function Ku(){la=Ol.current,B(as),B(Ol)}var Zn=A(null),ui=null;function Fa(t){var n=t.alternate;ee(nn,nn.current&1),ee(Zn,t),ui===null&&(n===null||as.current!==null||n.memoizedState!==null)&&(ui=t)}function Qu(t){ee(nn,nn.current),ee(Zn,t),ui===null&&(ui=t)}function vm(t){t.tag===22?(ee(nn,nn.current),ee(Zn,t),ui===null&&(ui=t)):za()}function za(){ee(nn,nn.current),ee(Zn,Zn.current)}function Kn(t){B(Zn),ui===t&&(ui=null),B(nn)}var nn=A(0);function Pl(t){for(var n=t;n!==null;){if(n.tag===13){var a=n.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||ad(a)||rd(a)))return n}else if(n.tag===19&&(n.memoizedProps.revealOrder==="forwards"||n.memoizedProps.revealOrder==="backwards"||n.memoizedProps.revealOrder==="unstable_legacy-backwards"||n.memoizedProps.revealOrder==="together")){if((n.flags&128)!==0)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}var ea=0,ft=null,Gt=null,cn=null,Fl=!1,rs=!1,yr=!1,zl=0,_o=0,ss=null,sS=0;function en(){throw Error(r(321))}function Ju(t,n){if(n===null)return!1;for(var a=0;a<n.length&&a<t.length;a++)if(!Yn(t[a],n[a]))return!1;return!0}function $u(t,n,a,o,u,d){return ea=d,ft=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,z.H=t===null||t.memoizedState===null?t0:mf,yr=!1,d=a(o,u),yr=!1,rs&&(d=Sm(n,a,o,u)),xm(t),d}function xm(t){z.H=So;var n=Gt!==null&&Gt.next!==null;if(ea=0,cn=Gt=ft=null,Fl=!1,_o=0,ss=null,n)throw Error(r(300));t===null||un||(t=t.dependencies,t!==null&&Rl(t)&&(un=!0))}function Sm(t,n,a,o){ft=t;var u=0;do{if(rs&&(ss=null),_o=0,rs=!1,25<=u)throw Error(r(301));if(u+=1,cn=Gt=null,t.updateQueue!=null){var d=t.updateQueue;d.lastEffect=null,d.events=null,d.stores=null,d.memoCache!=null&&(d.memoCache.index=0)}z.H=n0,d=n(a,o)}while(rs);return d}function oS(){var t=z.H,n=t.useState()[0];return n=typeof n.then=="function"?vo(n):n,t=t.useState()[0],(Gt!==null?Gt.memoizedState:null)!==t&&(ft.flags|=1024),n}function ef(){var t=zl!==0;return zl=0,t}function tf(t,n,a){n.updateQueue=t.updateQueue,n.flags&=-2053,t.lanes&=~a}function nf(t){if(Fl){for(t=t.memoizedState;t!==null;){var n=t.queue;n!==null&&(n.pending=null),t=t.next}Fl=!1}ea=0,cn=Gt=ft=null,rs=!1,_o=zl=0,ss=null}function Pn(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return cn===null?ft.memoizedState=cn=t:cn=cn.next=t,cn}function an(){if(Gt===null){var t=ft.alternate;t=t!==null?t.memoizedState:null}else t=Gt.next;var n=cn===null?ft.memoizedState:cn.next;if(n!==null)cn=n,Gt=t;else{if(t===null)throw ft.alternate===null?Error(r(467)):Error(r(310));Gt=t,t={memoizedState:Gt.memoizedState,baseState:Gt.baseState,baseQueue:Gt.baseQueue,queue:Gt.queue,next:null},cn===null?ft.memoizedState=cn=t:cn=cn.next=t}return cn}function Il(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function vo(t){var n=_o;return _o+=1,ss===null&&(ss=[]),t=um(ss,t,n),n=ft,(cn===null?n.memoizedState:cn.next)===null&&(n=n.alternate,z.H=n===null||n.memoizedState===null?t0:mf),t}function Bl(t){if(t!==null&&typeof t=="object"){if(typeof t.then=="function")return vo(t);if(t.$$typeof===N)return An(t)}throw Error(r(438,String(t)))}function af(t){var n=null,a=ft.updateQueue;if(a!==null&&(n=a.memoCache),n==null){var o=ft.alternate;o!==null&&(o=o.updateQueue,o!==null&&(o=o.memoCache,o!=null&&(n={data:o.data.map(function(u){return u.slice()}),index:0})))}if(n==null&&(n={data:[],index:0}),a===null&&(a=Il(),ft.updateQueue=a),a.memoCache=n,a=n.data[n.index],a===void 0)for(a=n.data[n.index]=Array(t),o=0;o<t;o++)a[o]=D;return n.index++,a}function ta(t,n){return typeof n=="function"?n(t):n}function Hl(t){var n=an();return rf(n,Gt,t)}function rf(t,n,a){var o=t.queue;if(o===null)throw Error(r(311));o.lastRenderedReducer=a;var u=t.baseQueue,d=o.pending;if(d!==null){if(u!==null){var y=u.next;u.next=d.next,d.next=y}n.baseQueue=u=d,o.pending=null}if(d=t.baseState,u===null)t.memoizedState=d;else{n=u.next;var R=y=null,G=null,ie=n,ge=!1;do{var Me=ie.lane&-536870913;if(Me!==ie.lane?(xt&Me)===Me:(ea&Me)===Me){var le=ie.revertLane;if(le===0)G!==null&&(G=G.next={lane:0,revertLane:0,gesture:null,action:ie.action,hasEagerState:ie.hasEagerState,eagerState:ie.eagerState,next:null}),Me===es&&(ge=!0);else if((ea&le)===le){ie=ie.next,le===es&&(ge=!0);continue}else Me={lane:0,revertLane:ie.revertLane,gesture:null,action:ie.action,hasEagerState:ie.hasEagerState,eagerState:ie.eagerState,next:null},G===null?(R=G=Me,y=d):G=G.next=Me,ft.lanes|=le,Ha|=le;Me=ie.action,yr&&a(d,Me),d=ie.hasEagerState?ie.eagerState:a(d,Me)}else le={lane:Me,revertLane:ie.revertLane,gesture:ie.gesture,action:ie.action,hasEagerState:ie.hasEagerState,eagerState:ie.eagerState,next:null},G===null?(R=G=le,y=d):G=G.next=le,ft.lanes|=Me,Ha|=Me;ie=ie.next}while(ie!==null&&ie!==n);if(G===null?y=d:G.next=R,!Yn(d,t.memoizedState)&&(un=!0,ge&&(a=ts,a!==null)))throw a;t.memoizedState=d,t.baseState=y,t.baseQueue=G,o.lastRenderedState=d}return u===null&&(o.lanes=0),[t.memoizedState,o.dispatch]}function sf(t){var n=an(),a=n.queue;if(a===null)throw Error(r(311));a.lastRenderedReducer=t;var o=a.dispatch,u=a.pending,d=n.memoizedState;if(u!==null){a.pending=null;var y=u=u.next;do d=t(d,y.action),y=y.next;while(y!==u);Yn(d,n.memoizedState)||(un=!0),n.memoizedState=d,n.baseQueue===null&&(n.baseState=d),a.lastRenderedState=d}return[d,o]}function ym(t,n,a){var o=ft,u=an(),d=yt;if(d){if(a===void 0)throw Error(r(407));a=a()}else a=n();var y=!Yn((Gt||u).memoizedState,a);if(y&&(u.memoizedState=a,un=!0),u=u.queue,cf(bm.bind(null,o,u,t),[t]),u.getSnapshot!==n||y||cn!==null&&cn.memoizedState.tag&1){if(o.flags|=2048,os(9,{destroy:void 0},Em.bind(null,o,u,a,n),null),Wt===null)throw Error(r(349));d||(ea&127)!==0||Mm(o,n,a)}return a}function Mm(t,n,a){t.flags|=16384,t={getSnapshot:n,value:a},n=ft.updateQueue,n===null?(n=Il(),ft.updateQueue=n,n.stores=[t]):(a=n.stores,a===null?n.stores=[t]:a.push(t))}function Em(t,n,a,o){n.value=a,n.getSnapshot=o,Tm(n)&&Am(t)}function bm(t,n,a){return a(function(){Tm(n)&&Am(t)})}function Tm(t){var n=t.getSnapshot;t=t.value;try{var a=n();return!Yn(t,a)}catch{return!0}}function Am(t){var n=dr(t,2);n!==null&&kn(n,t,2)}function of(t){var n=Pn();if(typeof t=="function"){var a=t;if(t=a(),yr){Ve(!0);try{a()}finally{Ve(!1)}}}return n.memoizedState=n.baseState=t,n.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:ta,lastRenderedState:t},n}function Rm(t,n,a,o){return t.baseState=a,rf(t,Gt,typeof o=="function"?o:ta)}function lS(t,n,a,o,u){if(kl(t))throw Error(r(485));if(t=n.action,t!==null){var d={payload:u,action:t,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(y){d.listeners.push(y)}};z.T!==null?a(!0):d.isTransition=!1,o(d),a=n.pending,a===null?(d.next=n.pending=d,Cm(n,d)):(d.next=a.next,n.pending=a.next=d)}}function Cm(t,n){var a=n.action,o=n.payload,u=t.state;if(n.isTransition){var d=z.T,y={};z.T=y;try{var R=a(u,o),G=z.S;G!==null&&G(y,R),wm(t,n,R)}catch(ie){lf(t,n,ie)}finally{d!==null&&y.types!==null&&(d.types=y.types),z.T=d}}else try{d=a(u,o),wm(t,n,d)}catch(ie){lf(t,n,ie)}}function wm(t,n,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(o){Dm(t,n,o)},function(o){return lf(t,n,o)}):Dm(t,n,a)}function Dm(t,n,a){n.status="fulfilled",n.value=a,Um(n),t.state=a,n=t.pending,n!==null&&(a=n.next,a===n?t.pending=null:(a=a.next,n.next=a,Cm(t,a)))}function lf(t,n,a){var o=t.pending;if(t.pending=null,o!==null){o=o.next;do n.status="rejected",n.reason=a,Um(n),n=n.next;while(n!==o)}t.action=null}function Um(t){t=t.listeners;for(var n=0;n<t.length;n++)(0,t[n])()}function Lm(t,n){return n}function Nm(t,n){if(yt){var a=Wt.formState;if(a!==null){e:{var o=ft;if(yt){if(Yt){t:{for(var u=Yt,d=ci;u.nodeType!==8;){if(!d){u=null;break t}if(u=fi(u.nextSibling),u===null){u=null;break t}}d=u.data,u=d==="F!"||d==="F"?u:null}if(u){Yt=fi(u.nextSibling),o=u.data==="F!";break e}}Ua(o)}o=!1}o&&(n=a[0])}}return a=Pn(),a.memoizedState=a.baseState=n,o={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Lm,lastRenderedState:n},a.queue=o,a=Jm.bind(null,ft,o),o.dispatch=a,o=of(!1),d=pf.bind(null,ft,!1,o.queue),o=Pn(),u={state:n,dispatch:null,action:t,pending:null},o.queue=u,a=lS.bind(null,ft,u,d,a),u.dispatch=a,o.memoizedState=t,[n,a,!1]}function Om(t){var n=an();return Pm(n,Gt,t)}function Pm(t,n,a){if(n=rf(t,n,Lm)[0],t=Hl(ta)[0],typeof n=="object"&&n!==null&&typeof n.then=="function")try{var o=vo(n)}catch(y){throw y===ns?Dl:y}else o=n;n=an();var u=n.queue,d=u.dispatch;return a!==n.memoizedState&&(ft.flags|=2048,os(9,{destroy:void 0},cS.bind(null,u,a),null)),[o,d,t]}function cS(t,n){t.action=n}function Fm(t){var n=an(),a=Gt;if(a!==null)return Pm(n,a,t);an(),n=n.memoizedState,a=an();var o=a.queue.dispatch;return a.memoizedState=t,[n,o,!1]}function os(t,n,a,o){return t={tag:t,create:a,deps:o,inst:n,next:null},n=ft.updateQueue,n===null&&(n=Il(),ft.updateQueue=n),a=n.lastEffect,a===null?n.lastEffect=t.next=t:(o=a.next,a.next=t,t.next=o,n.lastEffect=t),t}function zm(){return an().memoizedState}function Gl(t,n,a,o){var u=Pn();ft.flags|=t,u.memoizedState=os(1|n,{destroy:void 0},a,o===void 0?null:o)}function Vl(t,n,a,o){var u=an();o=o===void 0?null:o;var d=u.memoizedState.inst;Gt!==null&&o!==null&&Ju(o,Gt.memoizedState.deps)?u.memoizedState=os(n,d,a,o):(ft.flags|=t,u.memoizedState=os(1|n,d,a,o))}function Im(t,n){Gl(8390656,8,t,n)}function cf(t,n){Vl(2048,8,t,n)}function uS(t){ft.flags|=4;var n=ft.updateQueue;if(n===null)n=Il(),ft.updateQueue=n,n.events=[t];else{var a=n.events;a===null?n.events=[t]:a.push(t)}}function Bm(t){var n=an().memoizedState;return uS({ref:n,nextImpl:t}),function(){if((Lt&2)!==0)throw Error(r(440));return n.impl.apply(void 0,arguments)}}function Hm(t,n){return Vl(4,2,t,n)}function Gm(t,n){return Vl(4,4,t,n)}function Vm(t,n){if(typeof n=="function"){t=t();var a=n(t);return function(){typeof a=="function"?a():n(null)}}if(n!=null)return t=t(),n.current=t,function(){n.current=null}}function km(t,n,a){a=a!=null?a.concat([t]):null,Vl(4,4,Vm.bind(null,n,t),a)}function uf(){}function Xm(t,n){var a=an();n=n===void 0?null:n;var o=a.memoizedState;return n!==null&&Ju(n,o[1])?o[0]:(a.memoizedState=[t,n],t)}function Wm(t,n){var a=an();n=n===void 0?null:n;var o=a.memoizedState;if(n!==null&&Ju(n,o[1]))return o[0];if(o=t(),yr){Ve(!0);try{t()}finally{Ve(!1)}}return a.memoizedState=[o,n],o}function ff(t,n,a){return a===void 0||(ea&1073741824)!==0&&(xt&261930)===0?t.memoizedState=n:(t.memoizedState=a,t=q0(),ft.lanes|=t,Ha|=t,a)}function qm(t,n,a,o){return Yn(a,n)?a:as.current!==null?(t=ff(t,a,o),Yn(t,n)||(un=!0),t):(ea&42)===0||(ea&1073741824)!==0&&(xt&261930)===0?(un=!0,t.memoizedState=a):(t=q0(),ft.lanes|=t,Ha|=t,n)}function Ym(t,n,a,o,u){var d=H.p;H.p=d!==0&&8>d?d:8;var y=z.T,R={};z.T=R,pf(t,!1,n,a);try{var G=u(),ie=z.S;if(ie!==null&&ie(R,G),G!==null&&typeof G=="object"&&typeof G.then=="function"){var ge=rS(G,o);xo(t,n,ge,$n(t))}else xo(t,n,o,$n(t))}catch(Me){xo(t,n,{then:function(){},status:"rejected",reason:Me},$n())}finally{H.p=d,y!==null&&R.types!==null&&(y.types=R.types),z.T=y}}function fS(){}function df(t,n,a,o){if(t.tag!==5)throw Error(r(476));var u=jm(t).queue;Ym(t,u,n,K,a===null?fS:function(){return Zm(t),a(o)})}function jm(t){var n=t.memoizedState;if(n!==null)return n;n={memoizedState:K,baseState:K,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:ta,lastRenderedState:K},next:null};var a={};return n.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:ta,lastRenderedState:a},next:null},t.memoizedState=n,t=t.alternate,t!==null&&(t.memoizedState=n),n}function Zm(t){var n=jm(t);n.next===null&&(n=t.alternate.memoizedState),xo(t,n.next.queue,{},$n())}function hf(){return An(Fo)}function Km(){return an().memoizedState}function Qm(){return an().memoizedState}function dS(t){for(var n=t.return;n!==null;){switch(n.tag){case 24:case 3:var a=$n();t=Oa(a);var o=Pa(n,t,a);o!==null&&(kn(o,n,a),po(o,n,a)),n={cache:Gu()},t.payload=n;return}n=n.return}}function hS(t,n,a){var o=$n();a={lane:o,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null},kl(t)?$m(n,a):(a=Du(t,n,a,o),a!==null&&(kn(a,t,o),e0(a,n,o)))}function Jm(t,n,a){var o=$n();xo(t,n,a,o)}function xo(t,n,a,o){var u={lane:o,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null};if(kl(t))$m(n,u);else{var d=t.alternate;if(t.lanes===0&&(d===null||d.lanes===0)&&(d=n.lastRenderedReducer,d!==null))try{var y=n.lastRenderedState,R=d(y,a);if(u.hasEagerState=!0,u.eagerState=R,Yn(R,y))return El(t,n,u,0),Wt===null&&Ml(),!1}catch{}if(a=Du(t,n,u,o),a!==null)return kn(a,t,o),e0(a,n,o),!0}return!1}function pf(t,n,a,o){if(o={lane:2,revertLane:qf(),gesture:null,action:o,hasEagerState:!1,eagerState:null,next:null},kl(t)){if(n)throw Error(r(479))}else n=Du(t,a,o,2),n!==null&&kn(n,t,2)}function kl(t){var n=t.alternate;return t===ft||n!==null&&n===ft}function $m(t,n){rs=Fl=!0;var a=t.pending;a===null?n.next=n:(n.next=a.next,a.next=n),t.pending=n}function e0(t,n,a){if((a&4194048)!==0){var o=n.lanes;o&=t.pendingLanes,a|=o,n.lanes=a,Ys(t,a)}}var So={readContext:An,use:Bl,useCallback:en,useContext:en,useEffect:en,useImperativeHandle:en,useLayoutEffect:en,useInsertionEffect:en,useMemo:en,useReducer:en,useRef:en,useState:en,useDebugValue:en,useDeferredValue:en,useTransition:en,useSyncExternalStore:en,useId:en,useHostTransitionStatus:en,useFormState:en,useActionState:en,useOptimistic:en,useMemoCache:en,useCacheRefresh:en};So.useEffectEvent=en;var t0={readContext:An,use:Bl,useCallback:function(t,n){return Pn().memoizedState=[t,n===void 0?null:n],t},useContext:An,useEffect:Im,useImperativeHandle:function(t,n,a){a=a!=null?a.concat([t]):null,Gl(4194308,4,Vm.bind(null,n,t),a)},useLayoutEffect:function(t,n){return Gl(4194308,4,t,n)},useInsertionEffect:function(t,n){Gl(4,2,t,n)},useMemo:function(t,n){var a=Pn();n=n===void 0?null:n;var o=t();if(yr){Ve(!0);try{t()}finally{Ve(!1)}}return a.memoizedState=[o,n],o},useReducer:function(t,n,a){var o=Pn();if(a!==void 0){var u=a(n);if(yr){Ve(!0);try{a(n)}finally{Ve(!1)}}}else u=n;return o.memoizedState=o.baseState=u,t={pending:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:u},o.queue=t,t=t.dispatch=hS.bind(null,ft,t),[o.memoizedState,t]},useRef:function(t){var n=Pn();return t={current:t},n.memoizedState=t},useState:function(t){t=of(t);var n=t.queue,a=Jm.bind(null,ft,n);return n.dispatch=a,[t.memoizedState,a]},useDebugValue:uf,useDeferredValue:function(t,n){var a=Pn();return ff(a,t,n)},useTransition:function(){var t=of(!1);return t=Ym.bind(null,ft,t.queue,!0,!1),Pn().memoizedState=t,[!1,t]},useSyncExternalStore:function(t,n,a){var o=ft,u=Pn();if(yt){if(a===void 0)throw Error(r(407));a=a()}else{if(a=n(),Wt===null)throw Error(r(349));(xt&127)!==0||Mm(o,n,a)}u.memoizedState=a;var d={value:a,getSnapshot:n};return u.queue=d,Im(bm.bind(null,o,d,t),[t]),o.flags|=2048,os(9,{destroy:void 0},Em.bind(null,o,d,a,n),null),a},useId:function(){var t=Pn(),n=Wt.identifierPrefix;if(yt){var a=Oi,o=Ni;a=(o&~(1<<32-He(o)-1)).toString(32)+a,n="_"+n+"R_"+a,a=zl++,0<a&&(n+="H"+a.toString(32)),n+="_"}else a=sS++,n="_"+n+"r_"+a.toString(32)+"_";return t.memoizedState=n},useHostTransitionStatus:hf,useFormState:Nm,useActionState:Nm,useOptimistic:function(t){var n=Pn();n.memoizedState=n.baseState=t;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return n.queue=a,n=pf.bind(null,ft,!0,a),a.dispatch=n,[t,n]},useMemoCache:af,useCacheRefresh:function(){return Pn().memoizedState=dS.bind(null,ft)},useEffectEvent:function(t){var n=Pn(),a={impl:t};return n.memoizedState=a,function(){if((Lt&2)!==0)throw Error(r(440));return a.impl.apply(void 0,arguments)}}},mf={readContext:An,use:Bl,useCallback:Xm,useContext:An,useEffect:cf,useImperativeHandle:km,useInsertionEffect:Hm,useLayoutEffect:Gm,useMemo:Wm,useReducer:Hl,useRef:zm,useState:function(){return Hl(ta)},useDebugValue:uf,useDeferredValue:function(t,n){var a=an();return qm(a,Gt.memoizedState,t,n)},useTransition:function(){var t=Hl(ta)[0],n=an().memoizedState;return[typeof t=="boolean"?t:vo(t),n]},useSyncExternalStore:ym,useId:Km,useHostTransitionStatus:hf,useFormState:Om,useActionState:Om,useOptimistic:function(t,n){var a=an();return Rm(a,Gt,t,n)},useMemoCache:af,useCacheRefresh:Qm};mf.useEffectEvent=Bm;var n0={readContext:An,use:Bl,useCallback:Xm,useContext:An,useEffect:cf,useImperativeHandle:km,useInsertionEffect:Hm,useLayoutEffect:Gm,useMemo:Wm,useReducer:sf,useRef:zm,useState:function(){return sf(ta)},useDebugValue:uf,useDeferredValue:function(t,n){var a=an();return Gt===null?ff(a,t,n):qm(a,Gt.memoizedState,t,n)},useTransition:function(){var t=sf(ta)[0],n=an().memoizedState;return[typeof t=="boolean"?t:vo(t),n]},useSyncExternalStore:ym,useId:Km,useHostTransitionStatus:hf,useFormState:Fm,useActionState:Fm,useOptimistic:function(t,n){var a=an();return Gt!==null?Rm(a,Gt,t,n):(a.baseState=t,[t,a.queue.dispatch])},useMemoCache:af,useCacheRefresh:Qm};n0.useEffectEvent=Bm;function gf(t,n,a,o){n=t.memoizedState,a=a(o,n),a=a==null?n:_({},n,a),t.memoizedState=a,t.lanes===0&&(t.updateQueue.baseState=a)}var _f={enqueueSetState:function(t,n,a){t=t._reactInternals;var o=$n(),u=Oa(o);u.payload=n,a!=null&&(u.callback=a),n=Pa(t,u,o),n!==null&&(kn(n,t,o),po(n,t,o))},enqueueReplaceState:function(t,n,a){t=t._reactInternals;var o=$n(),u=Oa(o);u.tag=1,u.payload=n,a!=null&&(u.callback=a),n=Pa(t,u,o),n!==null&&(kn(n,t,o),po(n,t,o))},enqueueForceUpdate:function(t,n){t=t._reactInternals;var a=$n(),o=Oa(a);o.tag=2,n!=null&&(o.callback=n),n=Pa(t,o,a),n!==null&&(kn(n,t,a),po(n,t,a))}};function i0(t,n,a,o,u,d,y){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(o,d,y):n.prototype&&n.prototype.isPureReactComponent?!ro(a,o)||!ro(u,d):!0}function a0(t,n,a,o){t=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(a,o),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(a,o),n.state!==t&&_f.enqueueReplaceState(n,n.state,null)}function Mr(t,n){var a=n;if("ref"in n){a={};for(var o in n)o!=="ref"&&(a[o]=n[o])}if(t=t.defaultProps){a===n&&(a=_({},a));for(var u in t)a[u]===void 0&&(a[u]=t[u])}return a}function r0(t){yl(t)}function s0(t){console.error(t)}function o0(t){yl(t)}function Xl(t,n){try{var a=t.onUncaughtError;a(n.value,{componentStack:n.stack})}catch(o){setTimeout(function(){throw o})}}function l0(t,n,a){try{var o=t.onCaughtError;o(a.value,{componentStack:a.stack,errorBoundary:n.tag===1?n.stateNode:null})}catch(u){setTimeout(function(){throw u})}}function vf(t,n,a){return a=Oa(a),a.tag=3,a.payload={element:null},a.callback=function(){Xl(t,n)},a}function c0(t){return t=Oa(t),t.tag=3,t}function u0(t,n,a,o){var u=a.type.getDerivedStateFromError;if(typeof u=="function"){var d=o.value;t.payload=function(){return u(d)},t.callback=function(){l0(n,a,o)}}var y=a.stateNode;y!==null&&typeof y.componentDidCatch=="function"&&(t.callback=function(){l0(n,a,o),typeof u!="function"&&(Ga===null?Ga=new Set([this]):Ga.add(this));var R=o.stack;this.componentDidCatch(o.value,{componentStack:R!==null?R:""})})}function pS(t,n,a,o,u){if(a.flags|=32768,o!==null&&typeof o=="object"&&typeof o.then=="function"){if(n=a.alternate,n!==null&&$r(n,a,u,!0),a=Zn.current,a!==null){switch(a.tag){case 31:case 13:return ui===null?nc():a.alternate===null&&tn===0&&(tn=3),a.flags&=-257,a.flags|=65536,a.lanes=u,o===Ul?a.flags|=16384:(n=a.updateQueue,n===null?a.updateQueue=new Set([o]):n.add(o),kf(t,o,u)),!1;case 22:return a.flags|=65536,o===Ul?a.flags|=16384:(n=a.updateQueue,n===null?(n={transitions:null,markerInstances:null,retryQueue:new Set([o])},a.updateQueue=n):(a=n.retryQueue,a===null?n.retryQueue=new Set([o]):a.add(o)),kf(t,o,u)),!1}throw Error(r(435,a.tag))}return kf(t,o,u),nc(),!1}if(yt)return n=Zn.current,n!==null?((n.flags&65536)===0&&(n.flags|=256),n.flags|=65536,n.lanes=u,o!==Fu&&(t=Error(r(422),{cause:o}),lo(si(t,a)))):(o!==Fu&&(n=Error(r(423),{cause:o}),lo(si(n,a))),t=t.current.alternate,t.flags|=65536,u&=-u,t.lanes|=u,o=si(o,a),u=vf(t.stateNode,o,u),Yu(t,u),tn!==4&&(tn=2)),!1;var d=Error(r(520),{cause:o});if(d=si(d,a),Co===null?Co=[d]:Co.push(d),tn!==4&&(tn=2),n===null)return!0;o=si(o,a),a=n;do{switch(a.tag){case 3:return a.flags|=65536,t=u&-u,a.lanes|=t,t=vf(a.stateNode,o,t),Yu(a,t),!1;case 1:if(n=a.type,d=a.stateNode,(a.flags&128)===0&&(typeof n.getDerivedStateFromError=="function"||d!==null&&typeof d.componentDidCatch=="function"&&(Ga===null||!Ga.has(d))))return a.flags|=65536,u&=-u,a.lanes|=u,u=c0(u),u0(u,t,a,o),Yu(a,u),!1}a=a.return}while(a!==null);return!1}var xf=Error(r(461)),un=!1;function Rn(t,n,a,o){n.child=t===null?pm(n,null,a,o):Sr(n,t.child,a,o)}function f0(t,n,a,o,u){a=a.render;var d=n.ref;if("ref"in o){var y={};for(var R in o)R!=="ref"&&(y[R]=o[R])}else y=o;return gr(n),o=$u(t,n,a,y,d,u),R=ef(),t!==null&&!un?(tf(t,n,u),na(t,n,u)):(yt&&R&&Ou(n),n.flags|=1,Rn(t,n,o,u),n.child)}function d0(t,n,a,o,u){if(t===null){var d=a.type;return typeof d=="function"&&!Uu(d)&&d.defaultProps===void 0&&a.compare===null?(n.tag=15,n.type=d,h0(t,n,d,o,u)):(t=Tl(a.type,null,o,n,n.mode,u),t.ref=n.ref,t.return=n,n.child=t)}if(d=t.child,!Rf(t,u)){var y=d.memoizedProps;if(a=a.compare,a=a!==null?a:ro,a(y,o)&&t.ref===n.ref)return na(t,n,u)}return n.flags|=1,t=Ki(d,o),t.ref=n.ref,t.return=n,n.child=t}function h0(t,n,a,o,u){if(t!==null){var d=t.memoizedProps;if(ro(d,o)&&t.ref===n.ref)if(un=!1,n.pendingProps=o=d,Rf(t,u))(t.flags&131072)!==0&&(un=!0);else return n.lanes=t.lanes,na(t,n,u)}return Sf(t,n,a,o,u)}function p0(t,n,a,o){var u=o.children,d=t!==null?t.memoizedState:null;if(t===null&&n.stateNode===null&&(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),o.mode==="hidden"){if((n.flags&128)!==0){if(d=d!==null?d.baseLanes|a:a,t!==null){for(o=n.child=t.child,u=0;o!==null;)u=u|o.lanes|o.childLanes,o=o.sibling;o=u&~d}else o=0,n.child=null;return m0(t,n,d,a,o)}if((a&536870912)!==0)n.memoizedState={baseLanes:0,cachePool:null},t!==null&&wl(n,d!==null?d.cachePool:null),d!==null?_m(n,d):Zu(),vm(n);else return o=n.lanes=536870912,m0(t,n,d!==null?d.baseLanes|a:a,a,o)}else d!==null?(wl(n,d.cachePool),_m(n,d),za(),n.memoizedState=null):(t!==null&&wl(n,null),Zu(),za());return Rn(t,n,u,a),n.child}function yo(t,n){return t!==null&&t.tag===22||n.stateNode!==null||(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),n.sibling}function m0(t,n,a,o,u){var d=ku();return d=d===null?null:{parent:ln._currentValue,pool:d},n.memoizedState={baseLanes:a,cachePool:d},t!==null&&wl(n,null),Zu(),vm(n),t!==null&&$r(t,n,o,!0),n.childLanes=u,null}function Wl(t,n){return n=Yl({mode:n.mode,children:n.children},t.mode),n.ref=t.ref,t.child=n,n.return=t,n}function g0(t,n,a){return Sr(n,t.child,null,a),t=Wl(n,n.pendingProps),t.flags|=2,Kn(n),n.memoizedState=null,t}function mS(t,n,a){var o=n.pendingProps,u=(n.flags&128)!==0;if(n.flags&=-129,t===null){if(yt){if(o.mode==="hidden")return t=Wl(n,o),n.lanes=536870912,yo(null,t);if(Qu(n),(t=Yt)?(t=Cg(t,ci),t=t!==null&&t.data==="&"?t:null,t!==null&&(n.memoizedState={dehydrated:t,treeContext:wa!==null?{id:Ni,overflow:Oi}:null,retryLane:536870912,hydrationErrors:null},a=$p(t),a.return=n,n.child=a,Tn=n,Yt=null)):t=null,t===null)throw Ua(n);return n.lanes=536870912,null}return Wl(n,o)}var d=t.memoizedState;if(d!==null){var y=d.dehydrated;if(Qu(n),u)if(n.flags&256)n.flags&=-257,n=g0(t,n,a);else if(n.memoizedState!==null)n.child=t.child,n.flags|=128,n=null;else throw Error(r(558));else if(un||$r(t,n,a,!1),u=(a&t.childLanes)!==0,un||u){if(o=Wt,o!==null&&(y=Ir(o,a),y!==0&&y!==d.retryLane))throw d.retryLane=y,dr(t,y),kn(o,t,y),xf;nc(),n=g0(t,n,a)}else t=d.treeContext,Yt=fi(y.nextSibling),Tn=n,yt=!0,Da=null,ci=!1,t!==null&&nm(n,t),n=Wl(n,o),n.flags|=4096;return n}return t=Ki(t.child,{mode:o.mode,children:o.children}),t.ref=n.ref,n.child=t,t.return=n,t}function ql(t,n){var a=n.ref;if(a===null)t!==null&&t.ref!==null&&(n.flags|=4194816);else{if(typeof a!="function"&&typeof a!="object")throw Error(r(284));(t===null||t.ref!==a)&&(n.flags|=4194816)}}function Sf(t,n,a,o,u){return gr(n),a=$u(t,n,a,o,void 0,u),o=ef(),t!==null&&!un?(tf(t,n,u),na(t,n,u)):(yt&&o&&Ou(n),n.flags|=1,Rn(t,n,a,u),n.child)}function _0(t,n,a,o,u,d){return gr(n),n.updateQueue=null,a=Sm(n,o,a,u),xm(t),o=ef(),t!==null&&!un?(tf(t,n,d),na(t,n,d)):(yt&&o&&Ou(n),n.flags|=1,Rn(t,n,a,d),n.child)}function v0(t,n,a,o,u){if(gr(n),n.stateNode===null){var d=Zr,y=a.contextType;typeof y=="object"&&y!==null&&(d=An(y)),d=new a(o,d),n.memoizedState=d.state!==null&&d.state!==void 0?d.state:null,d.updater=_f,n.stateNode=d,d._reactInternals=n,d=n.stateNode,d.props=o,d.state=n.memoizedState,d.refs={},Wu(n),y=a.contextType,d.context=typeof y=="object"&&y!==null?An(y):Zr,d.state=n.memoizedState,y=a.getDerivedStateFromProps,typeof y=="function"&&(gf(n,a,y,o),d.state=n.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof d.getSnapshotBeforeUpdate=="function"||typeof d.UNSAFE_componentWillMount!="function"&&typeof d.componentWillMount!="function"||(y=d.state,typeof d.componentWillMount=="function"&&d.componentWillMount(),typeof d.UNSAFE_componentWillMount=="function"&&d.UNSAFE_componentWillMount(),y!==d.state&&_f.enqueueReplaceState(d,d.state,null),go(n,o,d,u),mo(),d.state=n.memoizedState),typeof d.componentDidMount=="function"&&(n.flags|=4194308),o=!0}else if(t===null){d=n.stateNode;var R=n.memoizedProps,G=Mr(a,R);d.props=G;var ie=d.context,ge=a.contextType;y=Zr,typeof ge=="object"&&ge!==null&&(y=An(ge));var Me=a.getDerivedStateFromProps;ge=typeof Me=="function"||typeof d.getSnapshotBeforeUpdate=="function",R=n.pendingProps!==R,ge||typeof d.UNSAFE_componentWillReceiveProps!="function"&&typeof d.componentWillReceiveProps!="function"||(R||ie!==y)&&a0(n,d,o,y),Na=!1;var le=n.memoizedState;d.state=le,go(n,o,d,u),mo(),ie=n.memoizedState,R||le!==ie||Na?(typeof Me=="function"&&(gf(n,a,Me,o),ie=n.memoizedState),(G=Na||i0(n,a,G,o,le,ie,y))?(ge||typeof d.UNSAFE_componentWillMount!="function"&&typeof d.componentWillMount!="function"||(typeof d.componentWillMount=="function"&&d.componentWillMount(),typeof d.UNSAFE_componentWillMount=="function"&&d.UNSAFE_componentWillMount()),typeof d.componentDidMount=="function"&&(n.flags|=4194308)):(typeof d.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=o,n.memoizedState=ie),d.props=o,d.state=ie,d.context=y,o=G):(typeof d.componentDidMount=="function"&&(n.flags|=4194308),o=!1)}else{d=n.stateNode,qu(t,n),y=n.memoizedProps,ge=Mr(a,y),d.props=ge,Me=n.pendingProps,le=d.context,ie=a.contextType,G=Zr,typeof ie=="object"&&ie!==null&&(G=An(ie)),R=a.getDerivedStateFromProps,(ie=typeof R=="function"||typeof d.getSnapshotBeforeUpdate=="function")||typeof d.UNSAFE_componentWillReceiveProps!="function"&&typeof d.componentWillReceiveProps!="function"||(y!==Me||le!==G)&&a0(n,d,o,G),Na=!1,le=n.memoizedState,d.state=le,go(n,o,d,u),mo();var he=n.memoizedState;y!==Me||le!==he||Na||t!==null&&t.dependencies!==null&&Rl(t.dependencies)?(typeof R=="function"&&(gf(n,a,R,o),he=n.memoizedState),(ge=Na||i0(n,a,ge,o,le,he,G)||t!==null&&t.dependencies!==null&&Rl(t.dependencies))?(ie||typeof d.UNSAFE_componentWillUpdate!="function"&&typeof d.componentWillUpdate!="function"||(typeof d.componentWillUpdate=="function"&&d.componentWillUpdate(o,he,G),typeof d.UNSAFE_componentWillUpdate=="function"&&d.UNSAFE_componentWillUpdate(o,he,G)),typeof d.componentDidUpdate=="function"&&(n.flags|=4),typeof d.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof d.componentDidUpdate!="function"||y===t.memoizedProps&&le===t.memoizedState||(n.flags|=4),typeof d.getSnapshotBeforeUpdate!="function"||y===t.memoizedProps&&le===t.memoizedState||(n.flags|=1024),n.memoizedProps=o,n.memoizedState=he),d.props=o,d.state=he,d.context=G,o=ge):(typeof d.componentDidUpdate!="function"||y===t.memoizedProps&&le===t.memoizedState||(n.flags|=4),typeof d.getSnapshotBeforeUpdate!="function"||y===t.memoizedProps&&le===t.memoizedState||(n.flags|=1024),o=!1)}return d=o,ql(t,n),o=(n.flags&128)!==0,d||o?(d=n.stateNode,a=o&&typeof a.getDerivedStateFromError!="function"?null:d.render(),n.flags|=1,t!==null&&o?(n.child=Sr(n,t.child,null,u),n.child=Sr(n,null,a,u)):Rn(t,n,a,u),n.memoizedState=d.state,t=n.child):t=na(t,n,u),t}function x0(t,n,a,o){return pr(),n.flags|=256,Rn(t,n,a,o),n.child}var yf={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Mf(t){return{baseLanes:t,cachePool:lm()}}function Ef(t,n,a){return t=t!==null?t.childLanes&~a:0,n&&(t|=Jn),t}function S0(t,n,a){var o=n.pendingProps,u=!1,d=(n.flags&128)!==0,y;if((y=d)||(y=t!==null&&t.memoizedState===null?!1:(nn.current&2)!==0),y&&(u=!0,n.flags&=-129),y=(n.flags&32)!==0,n.flags&=-33,t===null){if(yt){if(u?Fa(n):za(),(t=Yt)?(t=Cg(t,ci),t=t!==null&&t.data!=="&"?t:null,t!==null&&(n.memoizedState={dehydrated:t,treeContext:wa!==null?{id:Ni,overflow:Oi}:null,retryLane:536870912,hydrationErrors:null},a=$p(t),a.return=n,n.child=a,Tn=n,Yt=null)):t=null,t===null)throw Ua(n);return rd(t)?n.lanes=32:n.lanes=536870912,null}var R=o.children;return o=o.fallback,u?(za(),u=n.mode,R=Yl({mode:"hidden",children:R},u),o=hr(o,u,a,null),R.return=n,o.return=n,R.sibling=o,n.child=R,o=n.child,o.memoizedState=Mf(a),o.childLanes=Ef(t,y,a),n.memoizedState=yf,yo(null,o)):(Fa(n),bf(n,R))}var G=t.memoizedState;if(G!==null&&(R=G.dehydrated,R!==null)){if(d)n.flags&256?(Fa(n),n.flags&=-257,n=Tf(t,n,a)):n.memoizedState!==null?(za(),n.child=t.child,n.flags|=128,n=null):(za(),R=o.fallback,u=n.mode,o=Yl({mode:"visible",children:o.children},u),R=hr(R,u,a,null),R.flags|=2,o.return=n,R.return=n,o.sibling=R,n.child=o,Sr(n,t.child,null,a),o=n.child,o.memoizedState=Mf(a),o.childLanes=Ef(t,y,a),n.memoizedState=yf,n=yo(null,o));else if(Fa(n),rd(R)){if(y=R.nextSibling&&R.nextSibling.dataset,y)var ie=y.dgst;y=ie,o=Error(r(419)),o.stack="",o.digest=y,lo({value:o,source:null,stack:null}),n=Tf(t,n,a)}else if(un||$r(t,n,a,!1),y=(a&t.childLanes)!==0,un||y){if(y=Wt,y!==null&&(o=Ir(y,a),o!==0&&o!==G.retryLane))throw G.retryLane=o,dr(t,o),kn(y,t,o),xf;ad(R)||nc(),n=Tf(t,n,a)}else ad(R)?(n.flags|=192,n.child=t.child,n=null):(t=G.treeContext,Yt=fi(R.nextSibling),Tn=n,yt=!0,Da=null,ci=!1,t!==null&&nm(n,t),n=bf(n,o.children),n.flags|=4096);return n}return u?(za(),R=o.fallback,u=n.mode,G=t.child,ie=G.sibling,o=Ki(G,{mode:"hidden",children:o.children}),o.subtreeFlags=G.subtreeFlags&65011712,ie!==null?R=Ki(ie,R):(R=hr(R,u,a,null),R.flags|=2),R.return=n,o.return=n,o.sibling=R,n.child=o,yo(null,o),o=n.child,R=t.child.memoizedState,R===null?R=Mf(a):(u=R.cachePool,u!==null?(G=ln._currentValue,u=u.parent!==G?{parent:G,pool:G}:u):u=lm(),R={baseLanes:R.baseLanes|a,cachePool:u}),o.memoizedState=R,o.childLanes=Ef(t,y,a),n.memoizedState=yf,yo(t.child,o)):(Fa(n),a=t.child,t=a.sibling,a=Ki(a,{mode:"visible",children:o.children}),a.return=n,a.sibling=null,t!==null&&(y=n.deletions,y===null?(n.deletions=[t],n.flags|=16):y.push(t)),n.child=a,n.memoizedState=null,a)}function bf(t,n){return n=Yl({mode:"visible",children:n},t.mode),n.return=t,t.child=n}function Yl(t,n){return t=jn(22,t,null,n),t.lanes=0,t}function Tf(t,n,a){return Sr(n,t.child,null,a),t=bf(n,n.pendingProps.children),t.flags|=2,n.memoizedState=null,t}function y0(t,n,a){t.lanes|=n;var o=t.alternate;o!==null&&(o.lanes|=n),Bu(t.return,n,a)}function Af(t,n,a,o,u,d){var y=t.memoizedState;y===null?t.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:o,tail:a,tailMode:u,treeForkCount:d}:(y.isBackwards=n,y.rendering=null,y.renderingStartTime=0,y.last=o,y.tail=a,y.tailMode=u,y.treeForkCount=d)}function M0(t,n,a){var o=n.pendingProps,u=o.revealOrder,d=o.tail;o=o.children;var y=nn.current,R=(y&2)!==0;if(R?(y=y&1|2,n.flags|=128):y&=1,ee(nn,y),Rn(t,n,o,a),o=yt?oo:0,!R&&t!==null&&(t.flags&128)!==0)e:for(t=n.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&y0(t,a,n);else if(t.tag===19)y0(t,a,n);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===n)break e;for(;t.sibling===null;){if(t.return===null||t.return===n)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}switch(u){case"forwards":for(a=n.child,u=null;a!==null;)t=a.alternate,t!==null&&Pl(t)===null&&(u=a),a=a.sibling;a=u,a===null?(u=n.child,n.child=null):(u=a.sibling,a.sibling=null),Af(n,!1,u,a,d,o);break;case"backwards":case"unstable_legacy-backwards":for(a=null,u=n.child,n.child=null;u!==null;){if(t=u.alternate,t!==null&&Pl(t)===null){n.child=u;break}t=u.sibling,u.sibling=a,a=u,u=t}Af(n,!0,a,null,d,o);break;case"together":Af(n,!1,null,null,void 0,o);break;default:n.memoizedState=null}return n.child}function na(t,n,a){if(t!==null&&(n.dependencies=t.dependencies),Ha|=n.lanes,(a&n.childLanes)===0)if(t!==null){if($r(t,n,a,!1),(a&n.childLanes)===0)return null}else return null;if(t!==null&&n.child!==t.child)throw Error(r(153));if(n.child!==null){for(t=n.child,a=Ki(t,t.pendingProps),n.child=a,a.return=n;t.sibling!==null;)t=t.sibling,a=a.sibling=Ki(t,t.pendingProps),a.return=n;a.sibling=null}return n.child}function Rf(t,n){return(t.lanes&n)!==0?!0:(t=t.dependencies,!!(t!==null&&Rl(t)))}function gS(t,n,a){switch(n.tag){case 3:Re(n,n.stateNode.containerInfo),La(n,ln,t.memoizedState.cache),pr();break;case 27:case 5:re(n);break;case 4:Re(n,n.stateNode.containerInfo);break;case 10:La(n,n.type,n.memoizedProps.value);break;case 31:if(n.memoizedState!==null)return n.flags|=128,Qu(n),null;break;case 13:var o=n.memoizedState;if(o!==null)return o.dehydrated!==null?(Fa(n),n.flags|=128,null):(a&n.child.childLanes)!==0?S0(t,n,a):(Fa(n),t=na(t,n,a),t!==null?t.sibling:null);Fa(n);break;case 19:var u=(t.flags&128)!==0;if(o=(a&n.childLanes)!==0,o||($r(t,n,a,!1),o=(a&n.childLanes)!==0),u){if(o)return M0(t,n,a);n.flags|=128}if(u=n.memoizedState,u!==null&&(u.rendering=null,u.tail=null,u.lastEffect=null),ee(nn,nn.current),o)break;return null;case 22:return n.lanes=0,p0(t,n,a,n.pendingProps);case 24:La(n,ln,t.memoizedState.cache)}return na(t,n,a)}function E0(t,n,a){if(t!==null)if(t.memoizedProps!==n.pendingProps)un=!0;else{if(!Rf(t,a)&&(n.flags&128)===0)return un=!1,gS(t,n,a);un=(t.flags&131072)!==0}else un=!1,yt&&(n.flags&1048576)!==0&&tm(n,oo,n.index);switch(n.lanes=0,n.tag){case 16:e:{var o=n.pendingProps;if(t=vr(n.elementType),n.type=t,typeof t=="function")Uu(t)?(o=Mr(t,o),n.tag=1,n=v0(null,n,t,o,a)):(n.tag=0,n=Sf(null,n,t,o,a));else{if(t!=null){var u=t.$$typeof;if(u===O){n.tag=11,n=f0(null,n,t,o,a);break e}else if(u===F){n.tag=14,n=d0(null,n,t,o,a);break e}}throw n=me(t)||t,Error(r(306,n,""))}}return n;case 0:return Sf(t,n,n.type,n.pendingProps,a);case 1:return o=n.type,u=Mr(o,n.pendingProps),v0(t,n,o,u,a);case 3:e:{if(Re(n,n.stateNode.containerInfo),t===null)throw Error(r(387));o=n.pendingProps;var d=n.memoizedState;u=d.element,qu(t,n),go(n,o,null,a);var y=n.memoizedState;if(o=y.cache,La(n,ln,o),o!==d.cache&&Hu(n,[ln],a,!0),mo(),o=y.element,d.isDehydrated)if(d={element:o,isDehydrated:!1,cache:y.cache},n.updateQueue.baseState=d,n.memoizedState=d,n.flags&256){n=x0(t,n,o,a);break e}else if(o!==u){u=si(Error(r(424)),n),lo(u),n=x0(t,n,o,a);break e}else for(t=n.stateNode.containerInfo,t.nodeType===9?t=t.body:t=t.nodeName==="HTML"?t.ownerDocument.body:t,Yt=fi(t.firstChild),Tn=n,yt=!0,Da=null,ci=!0,a=pm(n,null,o,a),n.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling;else{if(pr(),o===u){n=na(t,n,a);break e}Rn(t,n,o,a)}n=n.child}return n;case 26:return ql(t,n),t===null?(a=Og(n.type,null,n.pendingProps,null))?n.memoizedState=a:yt||(a=n.type,t=n.pendingProps,o=cc(Q.current).createElement(a),o[on]=n,o[xn]=t,Cn(o,a,t),C(o),n.stateNode=o):n.memoizedState=Og(n.type,t.memoizedProps,n.pendingProps,t.memoizedState),null;case 27:return re(n),t===null&&yt&&(o=n.stateNode=Ug(n.type,n.pendingProps,Q.current),Tn=n,ci=!0,u=Yt,Wa(n.type)?(sd=u,Yt=fi(o.firstChild)):Yt=u),Rn(t,n,n.pendingProps.children,a),ql(t,n),t===null&&(n.flags|=4194304),n.child;case 5:return t===null&&yt&&((u=o=Yt)&&(o=qS(o,n.type,n.pendingProps,ci),o!==null?(n.stateNode=o,Tn=n,Yt=fi(o.firstChild),ci=!1,u=!0):u=!1),u||Ua(n)),re(n),u=n.type,d=n.pendingProps,y=t!==null?t.memoizedProps:null,o=d.children,td(u,d)?o=null:y!==null&&td(u,y)&&(n.flags|=32),n.memoizedState!==null&&(u=$u(t,n,oS,null,null,a),Fo._currentValue=u),ql(t,n),Rn(t,n,o,a),n.child;case 6:return t===null&&yt&&((t=a=Yt)&&(a=YS(a,n.pendingProps,ci),a!==null?(n.stateNode=a,Tn=n,Yt=null,t=!0):t=!1),t||Ua(n)),null;case 13:return S0(t,n,a);case 4:return Re(n,n.stateNode.containerInfo),o=n.pendingProps,t===null?n.child=Sr(n,null,o,a):Rn(t,n,o,a),n.child;case 11:return f0(t,n,n.type,n.pendingProps,a);case 7:return Rn(t,n,n.pendingProps,a),n.child;case 8:return Rn(t,n,n.pendingProps.children,a),n.child;case 12:return Rn(t,n,n.pendingProps.children,a),n.child;case 10:return o=n.pendingProps,La(n,n.type,o.value),Rn(t,n,o.children,a),n.child;case 9:return u=n.type._context,o=n.pendingProps.children,gr(n),u=An(u),o=o(u),n.flags|=1,Rn(t,n,o,a),n.child;case 14:return d0(t,n,n.type,n.pendingProps,a);case 15:return h0(t,n,n.type,n.pendingProps,a);case 19:return M0(t,n,a);case 31:return mS(t,n,a);case 22:return p0(t,n,a,n.pendingProps);case 24:return gr(n),o=An(ln),t===null?(u=ku(),u===null&&(u=Wt,d=Gu(),u.pooledCache=d,d.refCount++,d!==null&&(u.pooledCacheLanes|=a),u=d),n.memoizedState={parent:o,cache:u},Wu(n),La(n,ln,u)):((t.lanes&a)!==0&&(qu(t,n),go(n,null,null,a),mo()),u=t.memoizedState,d=n.memoizedState,u.parent!==o?(u={parent:o,cache:o},n.memoizedState=u,n.lanes===0&&(n.memoizedState=n.updateQueue.baseState=u),La(n,ln,o)):(o=d.cache,La(n,ln,o),o!==u.cache&&Hu(n,[ln],a,!0))),Rn(t,n,n.pendingProps.children,a),n.child;case 29:throw n.pendingProps}throw Error(r(156,n.tag))}function ia(t){t.flags|=4}function Cf(t,n,a,o,u){if((n=(t.mode&32)!==0)&&(n=!1),n){if(t.flags|=16777216,(u&335544128)===u)if(t.stateNode.complete)t.flags|=8192;else if(K0())t.flags|=8192;else throw xr=Ul,Xu}else t.flags&=-16777217}function b0(t,n){if(n.type!=="stylesheet"||(n.state.loading&4)!==0)t.flags&=-16777217;else if(t.flags|=16777216,!Bg(n))if(K0())t.flags|=8192;else throw xr=Ul,Xu}function jl(t,n){n!==null&&(t.flags|=4),t.flags&16384&&(n=t.tag!==22?Ft():536870912,t.lanes|=n,fs|=n)}function Mo(t,n){if(!yt)switch(t.tailMode){case"hidden":n=t.tail;for(var a=null;n!==null;)n.alternate!==null&&(a=n),n=n.sibling;a===null?t.tail=null:a.sibling=null;break;case"collapsed":a=t.tail;for(var o=null;a!==null;)a.alternate!==null&&(o=a),a=a.sibling;o===null?n||t.tail===null?t.tail=null:t.tail.sibling=null:o.sibling=null}}function jt(t){var n=t.alternate!==null&&t.alternate.child===t.child,a=0,o=0;if(n)for(var u=t.child;u!==null;)a|=u.lanes|u.childLanes,o|=u.subtreeFlags&65011712,o|=u.flags&65011712,u.return=t,u=u.sibling;else for(u=t.child;u!==null;)a|=u.lanes|u.childLanes,o|=u.subtreeFlags,o|=u.flags,u.return=t,u=u.sibling;return t.subtreeFlags|=o,t.childLanes=a,n}function _S(t,n,a){var o=n.pendingProps;switch(Pu(n),n.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return jt(n),null;case 1:return jt(n),null;case 3:return a=n.stateNode,o=null,t!==null&&(o=t.memoizedState.cache),n.memoizedState.cache!==o&&(n.flags|=2048),$i(ln),Ne(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(t===null||t.child===null)&&(Jr(n)?ia(n):t===null||t.memoizedState.isDehydrated&&(n.flags&256)===0||(n.flags|=1024,zu())),jt(n),null;case 26:var u=n.type,d=n.memoizedState;return t===null?(ia(n),d!==null?(jt(n),b0(n,d)):(jt(n),Cf(n,u,null,o,a))):d?d!==t.memoizedState?(ia(n),jt(n),b0(n,d)):(jt(n),n.flags&=-16777217):(t=t.memoizedProps,t!==o&&ia(n),jt(n),Cf(n,u,t,o,a)),null;case 27:if(ke(n),a=Q.current,u=n.type,t!==null&&n.stateNode!=null)t.memoizedProps!==o&&ia(n);else{if(!o){if(n.stateNode===null)throw Error(r(166));return jt(n),null}t=_e.current,Jr(n)?im(n):(t=Ug(u,o,a),n.stateNode=t,ia(n))}return jt(n),null;case 5:if(ke(n),u=n.type,t!==null&&n.stateNode!=null)t.memoizedProps!==o&&ia(n);else{if(!o){if(n.stateNode===null)throw Error(r(166));return jt(n),null}if(d=_e.current,Jr(n))im(n);else{var y=cc(Q.current);switch(d){case 1:d=y.createElementNS("http://www.w3.org/2000/svg",u);break;case 2:d=y.createElementNS("http://www.w3.org/1998/Math/MathML",u);break;default:switch(u){case"svg":d=y.createElementNS("http://www.w3.org/2000/svg",u);break;case"math":d=y.createElementNS("http://www.w3.org/1998/Math/MathML",u);break;case"script":d=y.createElement("div"),d.innerHTML="<script><\/script>",d=d.removeChild(d.firstChild);break;case"select":d=typeof o.is=="string"?y.createElement("select",{is:o.is}):y.createElement("select"),o.multiple?d.multiple=!0:o.size&&(d.size=o.size);break;default:d=typeof o.is=="string"?y.createElement(u,{is:o.is}):y.createElement(u)}}d[on]=n,d[xn]=o;e:for(y=n.child;y!==null;){if(y.tag===5||y.tag===6)d.appendChild(y.stateNode);else if(y.tag!==4&&y.tag!==27&&y.child!==null){y.child.return=y,y=y.child;continue}if(y===n)break e;for(;y.sibling===null;){if(y.return===null||y.return===n)break e;y=y.return}y.sibling.return=y.return,y=y.sibling}n.stateNode=d;e:switch(Cn(d,u,o),u){case"button":case"input":case"select":case"textarea":o=!!o.autoFocus;break e;case"img":o=!0;break e;default:o=!1}o&&ia(n)}}return jt(n),Cf(n,n.type,t===null?null:t.memoizedProps,n.pendingProps,a),null;case 6:if(t&&n.stateNode!=null)t.memoizedProps!==o&&ia(n);else{if(typeof o!="string"&&n.stateNode===null)throw Error(r(166));if(t=Q.current,Jr(n)){if(t=n.stateNode,a=n.memoizedProps,o=null,u=Tn,u!==null)switch(u.tag){case 27:case 5:o=u.memoizedProps}t[on]=n,t=!!(t.nodeValue===a||o!==null&&o.suppressHydrationWarning===!0||Sg(t.nodeValue,a)),t||Ua(n,!0)}else t=cc(t).createTextNode(o),t[on]=n,n.stateNode=t}return jt(n),null;case 31:if(a=n.memoizedState,t===null||t.memoizedState!==null){if(o=Jr(n),a!==null){if(t===null){if(!o)throw Error(r(318));if(t=n.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(r(557));t[on]=n}else pr(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;jt(n),t=!1}else a=zu(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=a),t=!0;if(!t)return n.flags&256?(Kn(n),n):(Kn(n),null);if((n.flags&128)!==0)throw Error(r(558))}return jt(n),null;case 13:if(o=n.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(u=Jr(n),o!==null&&o.dehydrated!==null){if(t===null){if(!u)throw Error(r(318));if(u=n.memoizedState,u=u!==null?u.dehydrated:null,!u)throw Error(r(317));u[on]=n}else pr(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;jt(n),u=!1}else u=zu(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=u),u=!0;if(!u)return n.flags&256?(Kn(n),n):(Kn(n),null)}return Kn(n),(n.flags&128)!==0?(n.lanes=a,n):(a=o!==null,t=t!==null&&t.memoizedState!==null,a&&(o=n.child,u=null,o.alternate!==null&&o.alternate.memoizedState!==null&&o.alternate.memoizedState.cachePool!==null&&(u=o.alternate.memoizedState.cachePool.pool),d=null,o.memoizedState!==null&&o.memoizedState.cachePool!==null&&(d=o.memoizedState.cachePool.pool),d!==u&&(o.flags|=2048)),a!==t&&a&&(n.child.flags|=8192),jl(n,n.updateQueue),jt(n),null);case 4:return Ne(),t===null&&Kf(n.stateNode.containerInfo),jt(n),null;case 10:return $i(n.type),jt(n),null;case 19:if(B(nn),o=n.memoizedState,o===null)return jt(n),null;if(u=(n.flags&128)!==0,d=o.rendering,d===null)if(u)Mo(o,!1);else{if(tn!==0||t!==null&&(t.flags&128)!==0)for(t=n.child;t!==null;){if(d=Pl(t),d!==null){for(n.flags|=128,Mo(o,!1),t=d.updateQueue,n.updateQueue=t,jl(n,t),n.subtreeFlags=0,t=a,a=n.child;a!==null;)Jp(a,t),a=a.sibling;return ee(nn,nn.current&1|2),yt&&Qi(n,o.treeForkCount),n.child}t=t.sibling}o.tail!==null&&b()>$l&&(n.flags|=128,u=!0,Mo(o,!1),n.lanes=4194304)}else{if(!u)if(t=Pl(d),t!==null){if(n.flags|=128,u=!0,t=t.updateQueue,n.updateQueue=t,jl(n,t),Mo(o,!0),o.tail===null&&o.tailMode==="hidden"&&!d.alternate&&!yt)return jt(n),null}else 2*b()-o.renderingStartTime>$l&&a!==536870912&&(n.flags|=128,u=!0,Mo(o,!1),n.lanes=4194304);o.isBackwards?(d.sibling=n.child,n.child=d):(t=o.last,t!==null?t.sibling=d:n.child=d,o.last=d)}return o.tail!==null?(t=o.tail,o.rendering=t,o.tail=t.sibling,o.renderingStartTime=b(),t.sibling=null,a=nn.current,ee(nn,u?a&1|2:a&1),yt&&Qi(n,o.treeForkCount),t):(jt(n),null);case 22:case 23:return Kn(n),Ku(),o=n.memoizedState!==null,t!==null?t.memoizedState!==null!==o&&(n.flags|=8192):o&&(n.flags|=8192),o?(a&536870912)!==0&&(n.flags&128)===0&&(jt(n),n.subtreeFlags&6&&(n.flags|=8192)):jt(n),a=n.updateQueue,a!==null&&jl(n,a.retryQueue),a=null,t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(a=t.memoizedState.cachePool.pool),o=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(o=n.memoizedState.cachePool.pool),o!==a&&(n.flags|=2048),t!==null&&B(_r),null;case 24:return a=null,t!==null&&(a=t.memoizedState.cache),n.memoizedState.cache!==a&&(n.flags|=2048),$i(ln),jt(n),null;case 25:return null;case 30:return null}throw Error(r(156,n.tag))}function vS(t,n){switch(Pu(n),n.tag){case 1:return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 3:return $i(ln),Ne(),t=n.flags,(t&65536)!==0&&(t&128)===0?(n.flags=t&-65537|128,n):null;case 26:case 27:case 5:return ke(n),null;case 31:if(n.memoizedState!==null){if(Kn(n),n.alternate===null)throw Error(r(340));pr()}return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 13:if(Kn(n),t=n.memoizedState,t!==null&&t.dehydrated!==null){if(n.alternate===null)throw Error(r(340));pr()}return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 19:return B(nn),null;case 4:return Ne(),null;case 10:return $i(n.type),null;case 22:case 23:return Kn(n),Ku(),t!==null&&B(_r),t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 24:return $i(ln),null;case 25:return null;default:return null}}function T0(t,n){switch(Pu(n),n.tag){case 3:$i(ln),Ne();break;case 26:case 27:case 5:ke(n);break;case 4:Ne();break;case 31:n.memoizedState!==null&&Kn(n);break;case 13:Kn(n);break;case 19:B(nn);break;case 10:$i(n.type);break;case 22:case 23:Kn(n),Ku(),t!==null&&B(_r);break;case 24:$i(ln)}}function Eo(t,n){try{var a=n.updateQueue,o=a!==null?a.lastEffect:null;if(o!==null){var u=o.next;a=u;do{if((a.tag&t)===t){o=void 0;var d=a.create,y=a.inst;o=d(),y.destroy=o}a=a.next}while(a!==u)}}catch(R){Bt(n,n.return,R)}}function Ia(t,n,a){try{var o=n.updateQueue,u=o!==null?o.lastEffect:null;if(u!==null){var d=u.next;o=d;do{if((o.tag&t)===t){var y=o.inst,R=y.destroy;if(R!==void 0){y.destroy=void 0,u=n;var G=a,ie=R;try{ie()}catch(ge){Bt(u,G,ge)}}}o=o.next}while(o!==d)}}catch(ge){Bt(n,n.return,ge)}}function A0(t){var n=t.updateQueue;if(n!==null){var a=t.stateNode;try{gm(n,a)}catch(o){Bt(t,t.return,o)}}}function R0(t,n,a){a.props=Mr(t.type,t.memoizedProps),a.state=t.memoizedState;try{a.componentWillUnmount()}catch(o){Bt(t,n,o)}}function bo(t,n){try{var a=t.ref;if(a!==null){switch(t.tag){case 26:case 27:case 5:var o=t.stateNode;break;case 30:o=t.stateNode;break;default:o=t.stateNode}typeof a=="function"?t.refCleanup=a(o):a.current=o}}catch(u){Bt(t,n,u)}}function Pi(t,n){var a=t.ref,o=t.refCleanup;if(a!==null)if(typeof o=="function")try{o()}catch(u){Bt(t,n,u)}finally{t.refCleanup=null,t=t.alternate,t!=null&&(t.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(u){Bt(t,n,u)}else a.current=null}function C0(t){var n=t.type,a=t.memoizedProps,o=t.stateNode;try{e:switch(n){case"button":case"input":case"select":case"textarea":a.autoFocus&&o.focus();break e;case"img":a.src?o.src=a.src:a.srcSet&&(o.srcset=a.srcSet)}}catch(u){Bt(t,t.return,u)}}function wf(t,n,a){try{var o=t.stateNode;HS(o,t.type,a,n),o[xn]=n}catch(u){Bt(t,t.return,u)}}function w0(t){return t.tag===5||t.tag===3||t.tag===26||t.tag===27&&Wa(t.type)||t.tag===4}function Df(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||w0(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.tag===27&&Wa(t.type)||t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Uf(t,n,a){var o=t.tag;if(o===5||o===6)t=t.stateNode,n?(a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a).insertBefore(t,n):(n=a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a,n.appendChild(t),a=a._reactRootContainer,a!=null||n.onclick!==null||(n.onclick=ji));else if(o!==4&&(o===27&&Wa(t.type)&&(a=t.stateNode,n=null),t=t.child,t!==null))for(Uf(t,n,a),t=t.sibling;t!==null;)Uf(t,n,a),t=t.sibling}function Zl(t,n,a){var o=t.tag;if(o===5||o===6)t=t.stateNode,n?a.insertBefore(t,n):a.appendChild(t);else if(o!==4&&(o===27&&Wa(t.type)&&(a=t.stateNode),t=t.child,t!==null))for(Zl(t,n,a),t=t.sibling;t!==null;)Zl(t,n,a),t=t.sibling}function D0(t){var n=t.stateNode,a=t.memoizedProps;try{for(var o=t.type,u=n.attributes;u.length;)n.removeAttributeNode(u[0]);Cn(n,o,a),n[on]=t,n[xn]=a}catch(d){Bt(t,t.return,d)}}var aa=!1,fn=!1,Lf=!1,U0=typeof WeakSet=="function"?WeakSet:Set,_n=null;function xS(t,n){if(t=t.containerInfo,$f=gc,t=kp(t),bu(t)){if("selectionStart"in t)var a={start:t.selectionStart,end:t.selectionEnd};else e:{a=(a=t.ownerDocument)&&a.defaultView||window;var o=a.getSelection&&a.getSelection();if(o&&o.rangeCount!==0){a=o.anchorNode;var u=o.anchorOffset,d=o.focusNode;o=o.focusOffset;try{a.nodeType,d.nodeType}catch{a=null;break e}var y=0,R=-1,G=-1,ie=0,ge=0,Me=t,le=null;t:for(;;){for(var he;Me!==a||u!==0&&Me.nodeType!==3||(R=y+u),Me!==d||o!==0&&Me.nodeType!==3||(G=y+o),Me.nodeType===3&&(y+=Me.nodeValue.length),(he=Me.firstChild)!==null;)le=Me,Me=he;for(;;){if(Me===t)break t;if(le===a&&++ie===u&&(R=y),le===d&&++ge===o&&(G=y),(he=Me.nextSibling)!==null)break;Me=le,le=Me.parentNode}Me=he}a=R===-1||G===-1?null:{start:R,end:G}}else a=null}a=a||{start:0,end:0}}else a=null;for(ed={focusedElem:t,selectionRange:a},gc=!1,_n=n;_n!==null;)if(n=_n,t=n.child,(n.subtreeFlags&1028)!==0&&t!==null)t.return=n,_n=t;else for(;_n!==null;){switch(n=_n,d=n.alternate,t=n.flags,n.tag){case 0:if((t&4)!==0&&(t=n.updateQueue,t=t!==null?t.events:null,t!==null))for(a=0;a<t.length;a++)u=t[a],u.ref.impl=u.nextImpl;break;case 11:case 15:break;case 1:if((t&1024)!==0&&d!==null){t=void 0,a=n,u=d.memoizedProps,d=d.memoizedState,o=a.stateNode;try{var qe=Mr(a.type,u);t=o.getSnapshotBeforeUpdate(qe,d),o.__reactInternalSnapshotBeforeUpdate=t}catch(it){Bt(a,a.return,it)}}break;case 3:if((t&1024)!==0){if(t=n.stateNode.containerInfo,a=t.nodeType,a===9)id(t);else if(a===1)switch(t.nodeName){case"HEAD":case"HTML":case"BODY":id(t);break;default:t.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((t&1024)!==0)throw Error(r(163))}if(t=n.sibling,t!==null){t.return=n.return,_n=t;break}_n=n.return}}function L0(t,n,a){var o=a.flags;switch(a.tag){case 0:case 11:case 15:sa(t,a),o&4&&Eo(5,a);break;case 1:if(sa(t,a),o&4)if(t=a.stateNode,n===null)try{t.componentDidMount()}catch(y){Bt(a,a.return,y)}else{var u=Mr(a.type,n.memoizedProps);n=n.memoizedState;try{t.componentDidUpdate(u,n,t.__reactInternalSnapshotBeforeUpdate)}catch(y){Bt(a,a.return,y)}}o&64&&A0(a),o&512&&bo(a,a.return);break;case 3:if(sa(t,a),o&64&&(t=a.updateQueue,t!==null)){if(n=null,a.child!==null)switch(a.child.tag){case 27:case 5:n=a.child.stateNode;break;case 1:n=a.child.stateNode}try{gm(t,n)}catch(y){Bt(a,a.return,y)}}break;case 27:n===null&&o&4&&D0(a);case 26:case 5:sa(t,a),n===null&&o&4&&C0(a),o&512&&bo(a,a.return);break;case 12:sa(t,a);break;case 31:sa(t,a),o&4&&P0(t,a);break;case 13:sa(t,a),o&4&&F0(t,a),o&64&&(t=a.memoizedState,t!==null&&(t=t.dehydrated,t!==null&&(a=CS.bind(null,a),jS(t,a))));break;case 22:if(o=a.memoizedState!==null||aa,!o){n=n!==null&&n.memoizedState!==null||fn,u=aa;var d=fn;aa=o,(fn=n)&&!d?oa(t,a,(a.subtreeFlags&8772)!==0):sa(t,a),aa=u,fn=d}break;case 30:break;default:sa(t,a)}}function N0(t){var n=t.alternate;n!==null&&(t.alternate=null,N0(n)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(n=t.stateNode,n!==null&&Qs(n)),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}var Qt=null,Bn=!1;function ra(t,n,a){for(a=a.child;a!==null;)O0(t,n,a),a=a.sibling}function O0(t,n,a){if(De&&typeof De.onCommitFiberUnmount=="function")try{De.onCommitFiberUnmount(we,a)}catch{}switch(a.tag){case 26:fn||Pi(a,n),ra(t,n,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:fn||Pi(a,n);var o=Qt,u=Bn;Wa(a.type)&&(Qt=a.stateNode,Bn=!1),ra(t,n,a),No(a.stateNode),Qt=o,Bn=u;break;case 5:fn||Pi(a,n);case 6:if(o=Qt,u=Bn,Qt=null,ra(t,n,a),Qt=o,Bn=u,Qt!==null)if(Bn)try{(Qt.nodeType===9?Qt.body:Qt.nodeName==="HTML"?Qt.ownerDocument.body:Qt).removeChild(a.stateNode)}catch(d){Bt(a,n,d)}else try{Qt.removeChild(a.stateNode)}catch(d){Bt(a,n,d)}break;case 18:Qt!==null&&(Bn?(t=Qt,Ag(t.nodeType===9?t.body:t.nodeName==="HTML"?t.ownerDocument.body:t,a.stateNode),xs(t)):Ag(Qt,a.stateNode));break;case 4:o=Qt,u=Bn,Qt=a.stateNode.containerInfo,Bn=!0,ra(t,n,a),Qt=o,Bn=u;break;case 0:case 11:case 14:case 15:Ia(2,a,n),fn||Ia(4,a,n),ra(t,n,a);break;case 1:fn||(Pi(a,n),o=a.stateNode,typeof o.componentWillUnmount=="function"&&R0(a,n,o)),ra(t,n,a);break;case 21:ra(t,n,a);break;case 22:fn=(o=fn)||a.memoizedState!==null,ra(t,n,a),fn=o;break;default:ra(t,n,a)}}function P0(t,n){if(n.memoizedState===null&&(t=n.alternate,t!==null&&(t=t.memoizedState,t!==null))){t=t.dehydrated;try{xs(t)}catch(a){Bt(n,n.return,a)}}}function F0(t,n){if(n.memoizedState===null&&(t=n.alternate,t!==null&&(t=t.memoizedState,t!==null&&(t=t.dehydrated,t!==null))))try{xs(t)}catch(a){Bt(n,n.return,a)}}function SS(t){switch(t.tag){case 31:case 13:case 19:var n=t.stateNode;return n===null&&(n=t.stateNode=new U0),n;case 22:return t=t.stateNode,n=t._retryCache,n===null&&(n=t._retryCache=new U0),n;default:throw Error(r(435,t.tag))}}function Kl(t,n){var a=SS(t);n.forEach(function(o){if(!a.has(o)){a.add(o);var u=wS.bind(null,t,o);o.then(u,u)}})}function Hn(t,n){var a=n.deletions;if(a!==null)for(var o=0;o<a.length;o++){var u=a[o],d=t,y=n,R=y;e:for(;R!==null;){switch(R.tag){case 27:if(Wa(R.type)){Qt=R.stateNode,Bn=!1;break e}break;case 5:Qt=R.stateNode,Bn=!1;break e;case 3:case 4:Qt=R.stateNode.containerInfo,Bn=!0;break e}R=R.return}if(Qt===null)throw Error(r(160));O0(d,y,u),Qt=null,Bn=!1,d=u.alternate,d!==null&&(d.return=null),u.return=null}if(n.subtreeFlags&13886)for(n=n.child;n!==null;)z0(n,t),n=n.sibling}var Mi=null;function z0(t,n){var a=t.alternate,o=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:Hn(n,t),Gn(t),o&4&&(Ia(3,t,t.return),Eo(3,t),Ia(5,t,t.return));break;case 1:Hn(n,t),Gn(t),o&512&&(fn||a===null||Pi(a,a.return)),o&64&&aa&&(t=t.updateQueue,t!==null&&(o=t.callbacks,o!==null&&(a=t.shared.hiddenCallbacks,t.shared.hiddenCallbacks=a===null?o:a.concat(o))));break;case 26:var u=Mi;if(Hn(n,t),Gn(t),o&512&&(fn||a===null||Pi(a,a.return)),o&4){var d=a!==null?a.memoizedState:null;if(o=t.memoizedState,a===null)if(o===null)if(t.stateNode===null){e:{o=t.type,a=t.memoizedProps,u=u.ownerDocument||u;t:switch(o){case"title":d=u.getElementsByTagName("title")[0],(!d||d[or]||d[on]||d.namespaceURI==="http://www.w3.org/2000/svg"||d.hasAttribute("itemprop"))&&(d=u.createElement(o),u.head.insertBefore(d,u.querySelector("head > title"))),Cn(d,o,a),d[on]=t,C(d),o=d;break e;case"link":var y=zg("link","href",u).get(o+(a.href||""));if(y){for(var R=0;R<y.length;R++)if(d=y[R],d.getAttribute("href")===(a.href==null||a.href===""?null:a.href)&&d.getAttribute("rel")===(a.rel==null?null:a.rel)&&d.getAttribute("title")===(a.title==null?null:a.title)&&d.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){y.splice(R,1);break t}}d=u.createElement(o),Cn(d,o,a),u.head.appendChild(d);break;case"meta":if(y=zg("meta","content",u).get(o+(a.content||""))){for(R=0;R<y.length;R++)if(d=y[R],d.getAttribute("content")===(a.content==null?null:""+a.content)&&d.getAttribute("name")===(a.name==null?null:a.name)&&d.getAttribute("property")===(a.property==null?null:a.property)&&d.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&d.getAttribute("charset")===(a.charSet==null?null:a.charSet)){y.splice(R,1);break t}}d=u.createElement(o),Cn(d,o,a),u.head.appendChild(d);break;default:throw Error(r(468,o))}d[on]=t,C(d),o=d}t.stateNode=o}else Ig(u,t.type,t.stateNode);else t.stateNode=Fg(u,o,t.memoizedProps);else d!==o?(d===null?a.stateNode!==null&&(a=a.stateNode,a.parentNode.removeChild(a)):d.count--,o===null?Ig(u,t.type,t.stateNode):Fg(u,o,t.memoizedProps)):o===null&&t.stateNode!==null&&wf(t,t.memoizedProps,a.memoizedProps)}break;case 27:Hn(n,t),Gn(t),o&512&&(fn||a===null||Pi(a,a.return)),a!==null&&o&4&&wf(t,t.memoizedProps,a.memoizedProps);break;case 5:if(Hn(n,t),Gn(t),o&512&&(fn||a===null||Pi(a,a.return)),t.flags&32){u=t.stateNode;try{hn(u,"")}catch(qe){Bt(t,t.return,qe)}}o&4&&t.stateNode!=null&&(u=t.memoizedProps,wf(t,u,a!==null?a.memoizedProps:u)),o&1024&&(Lf=!0);break;case 6:if(Hn(n,t),Gn(t),o&4){if(t.stateNode===null)throw Error(r(162));o=t.memoizedProps,a=t.stateNode;try{a.nodeValue=o}catch(qe){Bt(t,t.return,qe)}}break;case 3:if(dc=null,u=Mi,Mi=uc(n.containerInfo),Hn(n,t),Mi=u,Gn(t),o&4&&a!==null&&a.memoizedState.isDehydrated)try{xs(n.containerInfo)}catch(qe){Bt(t,t.return,qe)}Lf&&(Lf=!1,I0(t));break;case 4:o=Mi,Mi=uc(t.stateNode.containerInfo),Hn(n,t),Gn(t),Mi=o;break;case 12:Hn(n,t),Gn(t);break;case 31:Hn(n,t),Gn(t),o&4&&(o=t.updateQueue,o!==null&&(t.updateQueue=null,Kl(t,o)));break;case 13:Hn(n,t),Gn(t),t.child.flags&8192&&t.memoizedState!==null!=(a!==null&&a.memoizedState!==null)&&(Jl=b()),o&4&&(o=t.updateQueue,o!==null&&(t.updateQueue=null,Kl(t,o)));break;case 22:u=t.memoizedState!==null;var G=a!==null&&a.memoizedState!==null,ie=aa,ge=fn;if(aa=ie||u,fn=ge||G,Hn(n,t),fn=ge,aa=ie,Gn(t),o&8192)e:for(n=t.stateNode,n._visibility=u?n._visibility&-2:n._visibility|1,u&&(a===null||G||aa||fn||Er(t)),a=null,n=t;;){if(n.tag===5||n.tag===26){if(a===null){G=a=n;try{if(d=G.stateNode,u)y=d.style,typeof y.setProperty=="function"?y.setProperty("display","none","important"):y.display="none";else{R=G.stateNode;var Me=G.memoizedProps.style,le=Me!=null&&Me.hasOwnProperty("display")?Me.display:null;R.style.display=le==null||typeof le=="boolean"?"":(""+le).trim()}}catch(qe){Bt(G,G.return,qe)}}}else if(n.tag===6){if(a===null){G=n;try{G.stateNode.nodeValue=u?"":G.memoizedProps}catch(qe){Bt(G,G.return,qe)}}}else if(n.tag===18){if(a===null){G=n;try{var he=G.stateNode;u?Rg(he,!0):Rg(G.stateNode,!1)}catch(qe){Bt(G,G.return,qe)}}}else if((n.tag!==22&&n.tag!==23||n.memoizedState===null||n===t)&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break e;for(;n.sibling===null;){if(n.return===null||n.return===t)break e;a===n&&(a=null),n=n.return}a===n&&(a=null),n.sibling.return=n.return,n=n.sibling}o&4&&(o=t.updateQueue,o!==null&&(a=o.retryQueue,a!==null&&(o.retryQueue=null,Kl(t,a))));break;case 19:Hn(n,t),Gn(t),o&4&&(o=t.updateQueue,o!==null&&(t.updateQueue=null,Kl(t,o)));break;case 30:break;case 21:break;default:Hn(n,t),Gn(t)}}function Gn(t){var n=t.flags;if(n&2){try{for(var a,o=t.return;o!==null;){if(w0(o)){a=o;break}o=o.return}if(a==null)throw Error(r(160));switch(a.tag){case 27:var u=a.stateNode,d=Df(t);Zl(t,d,u);break;case 5:var y=a.stateNode;a.flags&32&&(hn(y,""),a.flags&=-33);var R=Df(t);Zl(t,R,y);break;case 3:case 4:var G=a.stateNode.containerInfo,ie=Df(t);Uf(t,ie,G);break;default:throw Error(r(161))}}catch(ge){Bt(t,t.return,ge)}t.flags&=-3}n&4096&&(t.flags&=-4097)}function I0(t){if(t.subtreeFlags&1024)for(t=t.child;t!==null;){var n=t;I0(n),n.tag===5&&n.flags&1024&&n.stateNode.reset(),t=t.sibling}}function sa(t,n){if(n.subtreeFlags&8772)for(n=n.child;n!==null;)L0(t,n.alternate,n),n=n.sibling}function Er(t){for(t=t.child;t!==null;){var n=t;switch(n.tag){case 0:case 11:case 14:case 15:Ia(4,n,n.return),Er(n);break;case 1:Pi(n,n.return);var a=n.stateNode;typeof a.componentWillUnmount=="function"&&R0(n,n.return,a),Er(n);break;case 27:No(n.stateNode);case 26:case 5:Pi(n,n.return),Er(n);break;case 22:n.memoizedState===null&&Er(n);break;case 30:Er(n);break;default:Er(n)}t=t.sibling}}function oa(t,n,a){for(a=a&&(n.subtreeFlags&8772)!==0,n=n.child;n!==null;){var o=n.alternate,u=t,d=n,y=d.flags;switch(d.tag){case 0:case 11:case 15:oa(u,d,a),Eo(4,d);break;case 1:if(oa(u,d,a),o=d,u=o.stateNode,typeof u.componentDidMount=="function")try{u.componentDidMount()}catch(ie){Bt(o,o.return,ie)}if(o=d,u=o.updateQueue,u!==null){var R=o.stateNode;try{var G=u.shared.hiddenCallbacks;if(G!==null)for(u.shared.hiddenCallbacks=null,u=0;u<G.length;u++)mm(G[u],R)}catch(ie){Bt(o,o.return,ie)}}a&&y&64&&A0(d),bo(d,d.return);break;case 27:D0(d);case 26:case 5:oa(u,d,a),a&&o===null&&y&4&&C0(d),bo(d,d.return);break;case 12:oa(u,d,a);break;case 31:oa(u,d,a),a&&y&4&&P0(u,d);break;case 13:oa(u,d,a),a&&y&4&&F0(u,d);break;case 22:d.memoizedState===null&&oa(u,d,a),bo(d,d.return);break;case 30:break;default:oa(u,d,a)}n=n.sibling}}function Nf(t,n){var a=null;t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(a=t.memoizedState.cachePool.pool),t=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(t=n.memoizedState.cachePool.pool),t!==a&&(t!=null&&t.refCount++,a!=null&&co(a))}function Of(t,n){t=null,n.alternate!==null&&(t=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==t&&(n.refCount++,t!=null&&co(t))}function Ei(t,n,a,o){if(n.subtreeFlags&10256)for(n=n.child;n!==null;)B0(t,n,a,o),n=n.sibling}function B0(t,n,a,o){var u=n.flags;switch(n.tag){case 0:case 11:case 15:Ei(t,n,a,o),u&2048&&Eo(9,n);break;case 1:Ei(t,n,a,o);break;case 3:Ei(t,n,a,o),u&2048&&(t=null,n.alternate!==null&&(t=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==t&&(n.refCount++,t!=null&&co(t)));break;case 12:if(u&2048){Ei(t,n,a,o),t=n.stateNode;try{var d=n.memoizedProps,y=d.id,R=d.onPostCommit;typeof R=="function"&&R(y,n.alternate===null?"mount":"update",t.passiveEffectDuration,-0)}catch(G){Bt(n,n.return,G)}}else Ei(t,n,a,o);break;case 31:Ei(t,n,a,o);break;case 13:Ei(t,n,a,o);break;case 23:break;case 22:d=n.stateNode,y=n.alternate,n.memoizedState!==null?d._visibility&2?Ei(t,n,a,o):To(t,n):d._visibility&2?Ei(t,n,a,o):(d._visibility|=2,ls(t,n,a,o,(n.subtreeFlags&10256)!==0||!1)),u&2048&&Nf(y,n);break;case 24:Ei(t,n,a,o),u&2048&&Of(n.alternate,n);break;default:Ei(t,n,a,o)}}function ls(t,n,a,o,u){for(u=u&&((n.subtreeFlags&10256)!==0||!1),n=n.child;n!==null;){var d=t,y=n,R=a,G=o,ie=y.flags;switch(y.tag){case 0:case 11:case 15:ls(d,y,R,G,u),Eo(8,y);break;case 23:break;case 22:var ge=y.stateNode;y.memoizedState!==null?ge._visibility&2?ls(d,y,R,G,u):To(d,y):(ge._visibility|=2,ls(d,y,R,G,u)),u&&ie&2048&&Nf(y.alternate,y);break;case 24:ls(d,y,R,G,u),u&&ie&2048&&Of(y.alternate,y);break;default:ls(d,y,R,G,u)}n=n.sibling}}function To(t,n){if(n.subtreeFlags&10256)for(n=n.child;n!==null;){var a=t,o=n,u=o.flags;switch(o.tag){case 22:To(a,o),u&2048&&Nf(o.alternate,o);break;case 24:To(a,o),u&2048&&Of(o.alternate,o);break;default:To(a,o)}n=n.sibling}}var Ao=8192;function cs(t,n,a){if(t.subtreeFlags&Ao)for(t=t.child;t!==null;)H0(t,n,a),t=t.sibling}function H0(t,n,a){switch(t.tag){case 26:cs(t,n,a),t.flags&Ao&&t.memoizedState!==null&&sy(a,Mi,t.memoizedState,t.memoizedProps);break;case 5:cs(t,n,a);break;case 3:case 4:var o=Mi;Mi=uc(t.stateNode.containerInfo),cs(t,n,a),Mi=o;break;case 22:t.memoizedState===null&&(o=t.alternate,o!==null&&o.memoizedState!==null?(o=Ao,Ao=16777216,cs(t,n,a),Ao=o):cs(t,n,a));break;default:cs(t,n,a)}}function G0(t){var n=t.alternate;if(n!==null&&(t=n.child,t!==null)){n.child=null;do n=t.sibling,t.sibling=null,t=n;while(t!==null)}}function Ro(t){var n=t.deletions;if((t.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var o=n[a];_n=o,k0(o,t)}G0(t)}if(t.subtreeFlags&10256)for(t=t.child;t!==null;)V0(t),t=t.sibling}function V0(t){switch(t.tag){case 0:case 11:case 15:Ro(t),t.flags&2048&&Ia(9,t,t.return);break;case 3:Ro(t);break;case 12:Ro(t);break;case 22:var n=t.stateNode;t.memoizedState!==null&&n._visibility&2&&(t.return===null||t.return.tag!==13)?(n._visibility&=-3,Ql(t)):Ro(t);break;default:Ro(t)}}function Ql(t){var n=t.deletions;if((t.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var o=n[a];_n=o,k0(o,t)}G0(t)}for(t=t.child;t!==null;){switch(n=t,n.tag){case 0:case 11:case 15:Ia(8,n,n.return),Ql(n);break;case 22:a=n.stateNode,a._visibility&2&&(a._visibility&=-3,Ql(n));break;default:Ql(n)}t=t.sibling}}function k0(t,n){for(;_n!==null;){var a=_n;switch(a.tag){case 0:case 11:case 15:Ia(8,a,n);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var o=a.memoizedState.cachePool.pool;o!=null&&o.refCount++}break;case 24:co(a.memoizedState.cache)}if(o=a.child,o!==null)o.return=a,_n=o;else e:for(a=t;_n!==null;){o=_n;var u=o.sibling,d=o.return;if(N0(o),o===a){_n=null;break e}if(u!==null){u.return=d,_n=u;break e}_n=d}}}var yS={getCacheForType:function(t){var n=An(ln),a=n.data.get(t);return a===void 0&&(a=t(),n.data.set(t,a)),a},cacheSignal:function(){return An(ln).controller.signal}},MS=typeof WeakMap=="function"?WeakMap:Map,Lt=0,Wt=null,_t=null,xt=0,It=0,Qn=null,Ba=!1,us=!1,Pf=!1,la=0,tn=0,Ha=0,br=0,Ff=0,Jn=0,fs=0,Co=null,Vn=null,zf=!1,Jl=0,X0=0,$l=1/0,ec=null,Ga=null,pn=0,Va=null,ds=null,ca=0,If=0,Bf=null,W0=null,wo=0,Hf=null;function $n(){return(Lt&2)!==0&&xt!==0?xt&-xt:z.T!==null?qf():Zs()}function q0(){if(Jn===0)if((xt&536870912)===0||yt){var t=Ue;Ue<<=1,(Ue&3932160)===0&&(Ue=262144),Jn=t}else Jn=536870912;return t=Zn.current,t!==null&&(t.flags|=32),Jn}function kn(t,n,a){(t===Wt&&(It===2||It===9)||t.cancelPendingCommit!==null)&&(hs(t,0),ka(t,xt,Jn,!1)),Dn(t,a),((Lt&2)===0||t!==Wt)&&(t===Wt&&((Lt&2)===0&&(br|=a),tn===4&&ka(t,xt,Jn,!1)),Fi(t))}function Y0(t,n,a){if((Lt&6)!==0)throw Error(r(327));var o=!a&&(n&127)===0&&(n&t.expiredLanes)===0||Le(t,n),u=o?TS(t,n):Vf(t,n,!0),d=o;do{if(u===0){us&&!o&&ka(t,n,0,!1);break}else{if(a=t.current.alternate,d&&!ES(a)){u=Vf(t,n,!1),d=!1;continue}if(u===2){if(d=n,t.errorRecoveryDisabledLanes&d)var y=0;else y=t.pendingLanes&-536870913,y=y!==0?y:y&536870912?536870912:0;if(y!==0){n=y;e:{var R=t;u=Co;var G=R.current.memoizedState.isDehydrated;if(G&&(hs(R,y).flags|=256),y=Vf(R,y,!1),y!==2){if(Pf&&!G){R.errorRecoveryDisabledLanes|=d,br|=d,u=4;break e}d=Vn,Vn=u,d!==null&&(Vn===null?Vn=d:Vn.push.apply(Vn,d))}u=y}if(d=!1,u!==2)continue}}if(u===1){hs(t,0),ka(t,n,0,!0);break}e:{switch(o=t,d=u,d){case 0:case 1:throw Error(r(345));case 4:if((n&4194048)!==n)break;case 6:ka(o,n,Jn,!Ba);break e;case 2:Vn=null;break;case 3:case 5:break;default:throw Error(r(329))}if((n&62914560)===n&&(u=Jl+300-b(),10<u)){if(ka(o,n,Jn,!Ba),Ee(o,0,!0)!==0)break e;ca=n,o.timeoutHandle=bg(j0.bind(null,o,a,Vn,ec,zf,n,Jn,br,fs,Ba,d,"Throttled",-0,0),u);break e}j0(o,a,Vn,ec,zf,n,Jn,br,fs,Ba,d,null,-0,0)}}break}while(!0);Fi(t)}function j0(t,n,a,o,u,d,y,R,G,ie,ge,Me,le,he){if(t.timeoutHandle=-1,Me=n.subtreeFlags,Me&8192||(Me&16785408)===16785408){Me={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:ji},H0(n,d,Me);var qe=(d&62914560)===d?Jl-b():(d&4194048)===d?X0-b():0;if(qe=oy(Me,qe),qe!==null){ca=d,t.cancelPendingCommit=qe(ng.bind(null,t,n,d,a,o,u,y,R,G,ge,Me,null,le,he)),ka(t,d,y,!ie);return}}ng(t,n,d,a,o,u,y,R,G)}function ES(t){for(var n=t;;){var a=n.tag;if((a===0||a===11||a===15)&&n.flags&16384&&(a=n.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var o=0;o<a.length;o++){var u=a[o],d=u.getSnapshot;u=u.value;try{if(!Yn(d(),u))return!1}catch{return!1}}if(a=n.child,n.subtreeFlags&16384&&a!==null)a.return=n,n=a;else{if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function ka(t,n,a,o){n&=~Ff,n&=~br,t.suspendedLanes|=n,t.pingedLanes&=~n,o&&(t.warmLanes|=n),o=t.expirationTimes;for(var u=n;0<u;){var d=31-He(u),y=1<<d;o[d]=-1,u&=~y}a!==0&&dl(t,a,n)}function tc(){return(Lt&6)===0?(Do(0),!1):!0}function Gf(){if(_t!==null){if(It===0)var t=_t.return;else t=_t,Ji=mr=null,nf(t),is=null,fo=0,t=_t;for(;t!==null;)T0(t.alternate,t),t=t.return;_t=null}}function hs(t,n){var a=t.timeoutHandle;a!==-1&&(t.timeoutHandle=-1,kS(a)),a=t.cancelPendingCommit,a!==null&&(t.cancelPendingCommit=null,a()),ca=0,Gf(),Wt=t,_t=a=Ki(t.current,null),xt=n,It=0,Qn=null,Ba=!1,us=Le(t,n),Pf=!1,fs=Jn=Ff=br=Ha=tn=0,Vn=Co=null,zf=!1,(n&8)!==0&&(n|=n&32);var o=t.entangledLanes;if(o!==0)for(t=t.entanglements,o&=n;0<o;){var u=31-He(o),d=1<<u;n|=t[u],o&=~d}return la=n,Ml(),a}function Z0(t,n){ft=null,z.H=So,n===ns||n===Dl?(n=fm(),It=3):n===Xu?(n=fm(),It=4):It=n===xf?8:n!==null&&typeof n=="object"&&typeof n.then=="function"?6:1,Qn=n,_t===null&&(tn=1,Xl(t,si(n,t.current)))}function K0(){var t=Zn.current;return t===null?!0:(xt&4194048)===xt?ui===null:(xt&62914560)===xt||(xt&536870912)!==0?t===ui:!1}function Q0(){var t=z.H;return z.H=So,t===null?So:t}function J0(){var t=z.A;return z.A=yS,t}function nc(){tn=4,Ba||(xt&4194048)!==xt&&Zn.current!==null||(us=!0),(Ha&134217727)===0&&(br&134217727)===0||Wt===null||ka(Wt,xt,Jn,!1)}function Vf(t,n,a){var o=Lt;Lt|=2;var u=Q0(),d=J0();(Wt!==t||xt!==n)&&(ec=null,hs(t,n)),n=!1;var y=tn;e:do try{if(It!==0&&_t!==null){var R=_t,G=Qn;switch(It){case 8:Gf(),y=6;break e;case 3:case 2:case 9:case 6:Zn.current===null&&(n=!0);var ie=It;if(It=0,Qn=null,ps(t,R,G,ie),a&&us){y=0;break e}break;default:ie=It,It=0,Qn=null,ps(t,R,G,ie)}}bS(),y=tn;break}catch(ge){Z0(t,ge)}while(!0);return n&&t.shellSuspendCounter++,Ji=mr=null,Lt=o,z.H=u,z.A=d,_t===null&&(Wt=null,xt=0,Ml()),y}function bS(){for(;_t!==null;)$0(_t)}function TS(t,n){var a=Lt;Lt|=2;var o=Q0(),u=J0();Wt!==t||xt!==n?(ec=null,$l=b()+500,hs(t,n)):us=Le(t,n);e:do try{if(It!==0&&_t!==null){n=_t;var d=Qn;t:switch(It){case 1:It=0,Qn=null,ps(t,n,d,1);break;case 2:case 9:if(cm(d)){It=0,Qn=null,eg(n);break}n=function(){It!==2&&It!==9||Wt!==t||(It=7),Fi(t)},d.then(n,n);break e;case 3:It=7;break e;case 4:It=5;break e;case 7:cm(d)?(It=0,Qn=null,eg(n)):(It=0,Qn=null,ps(t,n,d,7));break;case 5:var y=null;switch(_t.tag){case 26:y=_t.memoizedState;case 5:case 27:var R=_t;if(y?Bg(y):R.stateNode.complete){It=0,Qn=null;var G=R.sibling;if(G!==null)_t=G;else{var ie=R.return;ie!==null?(_t=ie,ic(ie)):_t=null}break t}}It=0,Qn=null,ps(t,n,d,5);break;case 6:It=0,Qn=null,ps(t,n,d,6);break;case 8:Gf(),tn=6;break e;default:throw Error(r(462))}}AS();break}catch(ge){Z0(t,ge)}while(!0);return Ji=mr=null,z.H=o,z.A=u,Lt=a,_t!==null?0:(Wt=null,xt=0,Ml(),tn)}function AS(){for(;_t!==null&&!Ke();)$0(_t)}function $0(t){var n=E0(t.alternate,t,la);t.memoizedProps=t.pendingProps,n===null?ic(t):_t=n}function eg(t){var n=t,a=n.alternate;switch(n.tag){case 15:case 0:n=_0(a,n,n.pendingProps,n.type,void 0,xt);break;case 11:n=_0(a,n,n.pendingProps,n.type.render,n.ref,xt);break;case 5:nf(n);default:T0(a,n),n=_t=Jp(n,la),n=E0(a,n,la)}t.memoizedProps=t.pendingProps,n===null?ic(t):_t=n}function ps(t,n,a,o){Ji=mr=null,nf(n),is=null,fo=0;var u=n.return;try{if(pS(t,u,n,a,xt)){tn=1,Xl(t,si(a,t.current)),_t=null;return}}catch(d){if(u!==null)throw _t=u,d;tn=1,Xl(t,si(a,t.current)),_t=null;return}n.flags&32768?(yt||o===1?t=!0:us||(xt&536870912)!==0?t=!1:(Ba=t=!0,(o===2||o===9||o===3||o===6)&&(o=Zn.current,o!==null&&o.tag===13&&(o.flags|=16384))),tg(n,t)):ic(n)}function ic(t){var n=t;do{if((n.flags&32768)!==0){tg(n,Ba);return}t=n.return;var a=_S(n.alternate,n,la);if(a!==null){_t=a;return}if(n=n.sibling,n!==null){_t=n;return}_t=n=t}while(n!==null);tn===0&&(tn=5)}function tg(t,n){do{var a=vS(t.alternate,t);if(a!==null){a.flags&=32767,_t=a;return}if(a=t.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!n&&(t=t.sibling,t!==null)){_t=t;return}_t=t=a}while(t!==null);tn=6,_t=null}function ng(t,n,a,o,u,d,y,R,G){t.cancelPendingCommit=null;do ac();while(pn!==0);if((Lt&6)!==0)throw Error(r(327));if(n!==null){if(n===t.current)throw Error(r(177));if(d=n.lanes|n.childLanes,d|=wu,vi(t,a,d,y,R,G),t===Wt&&(_t=Wt=null,xt=0),ds=n,Va=t,ca=a,If=d,Bf=u,W0=o,(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?(t.callbackNode=null,t.callbackPriority=0,DS(pe,function(){return og(),null})):(t.callbackNode=null,t.callbackPriority=0),o=(n.flags&13878)!==0,(n.subtreeFlags&13878)!==0||o){o=z.T,z.T=null,u=H.p,H.p=2,y=Lt,Lt|=4;try{xS(t,n,a)}finally{Lt=y,H.p=u,z.T=o}}pn=1,ig(),ag(),rg()}}function ig(){if(pn===1){pn=0;var t=Va,n=ds,a=(n.flags&13878)!==0;if((n.subtreeFlags&13878)!==0||a){a=z.T,z.T=null;var o=H.p;H.p=2;var u=Lt;Lt|=4;try{z0(n,t);var d=ed,y=kp(t.containerInfo),R=d.focusedElem,G=d.selectionRange;if(y!==R&&R&&R.ownerDocument&&Vp(R.ownerDocument.documentElement,R)){if(G!==null&&bu(R)){var ie=G.start,ge=G.end;if(ge===void 0&&(ge=ie),"selectionStart"in R)R.selectionStart=ie,R.selectionEnd=Math.min(ge,R.value.length);else{var Me=R.ownerDocument||document,le=Me&&Me.defaultView||window;if(le.getSelection){var he=le.getSelection(),qe=R.textContent.length,it=Math.min(G.start,qe),kt=G.end===void 0?it:Math.min(G.end,qe);!he.extend&&it>kt&&(y=kt,kt=it,it=y);var J=Gp(R,it),W=Gp(R,kt);if(J&&W&&(he.rangeCount!==1||he.anchorNode!==J.node||he.anchorOffset!==J.offset||he.focusNode!==W.node||he.focusOffset!==W.offset)){var ne=Me.createRange();ne.setStart(J.node,J.offset),he.removeAllRanges(),it>kt?(he.addRange(ne),he.extend(W.node,W.offset)):(ne.setEnd(W.node,W.offset),he.addRange(ne))}}}}for(Me=[],he=R;he=he.parentNode;)he.nodeType===1&&Me.push({element:he,left:he.scrollLeft,top:he.scrollTop});for(typeof R.focus=="function"&&R.focus(),R=0;R<Me.length;R++){var Se=Me[R];Se.element.scrollLeft=Se.left,Se.element.scrollTop=Se.top}}gc=!!$f,ed=$f=null}finally{Lt=u,H.p=o,z.T=a}}t.current=n,pn=2}}function ag(){if(pn===2){pn=0;var t=Va,n=ds,a=(n.flags&8772)!==0;if((n.subtreeFlags&8772)!==0||a){a=z.T,z.T=null;var o=H.p;H.p=2;var u=Lt;Lt|=4;try{L0(t,n.alternate,n)}finally{Lt=u,H.p=o,z.T=a}}pn=3}}function rg(){if(pn===4||pn===3){pn=0,P();var t=Va,n=ds,a=ca,o=W0;(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?pn=5:(pn=0,ds=Va=null,sg(t,t.pendingLanes));var u=t.pendingLanes;if(u===0&&(Ga=null),Br(a),n=n.stateNode,De&&typeof De.onCommitFiberRoot=="function")try{De.onCommitFiberRoot(we,n,void 0,(n.current.flags&128)===128)}catch{}if(o!==null){n=z.T,u=H.p,H.p=2,z.T=null;try{for(var d=t.onRecoverableError,y=0;y<o.length;y++){var R=o[y];d(R.value,{componentStack:R.stack})}}finally{z.T=n,H.p=u}}(ca&3)!==0&&ac(),Fi(t),u=t.pendingLanes,(a&261930)!==0&&(u&42)!==0?t===Hf?wo++:(wo=0,Hf=t):wo=0,Do(0)}}function sg(t,n){(t.pooledCacheLanes&=n)===0&&(n=t.pooledCache,n!=null&&(t.pooledCache=null,co(n)))}function ac(){return ig(),ag(),rg(),og()}function og(){if(pn!==5)return!1;var t=Va,n=If;If=0;var a=Br(ca),o=z.T,u=H.p;try{H.p=32>a?32:a,z.T=null,a=Bf,Bf=null;var d=Va,y=ca;if(pn=0,ds=Va=null,ca=0,(Lt&6)!==0)throw Error(r(331));var R=Lt;if(Lt|=4,V0(d.current),B0(d,d.current,y,a),Lt=R,Do(0,!1),De&&typeof De.onPostCommitFiberRoot=="function")try{De.onPostCommitFiberRoot(we,d)}catch{}return!0}finally{H.p=u,z.T=o,sg(t,n)}}function lg(t,n,a){n=si(a,n),n=vf(t.stateNode,n,2),t=Pa(t,n,2),t!==null&&(Dn(t,2),Fi(t))}function Bt(t,n,a){if(t.tag===3)lg(t,t,a);else for(;n!==null;){if(n.tag===3){lg(n,t,a);break}else if(n.tag===1){var o=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof o.componentDidCatch=="function"&&(Ga===null||!Ga.has(o))){t=si(a,t),a=c0(2),o=Pa(n,a,2),o!==null&&(u0(a,o,n,t),Dn(o,2),Fi(o));break}}n=n.return}}function kf(t,n,a){var o=t.pingCache;if(o===null){o=t.pingCache=new MS;var u=new Set;o.set(n,u)}else u=o.get(n),u===void 0&&(u=new Set,o.set(n,u));u.has(a)||(Pf=!0,u.add(a),t=RS.bind(null,t,n,a),n.then(t,t))}function RS(t,n,a){var o=t.pingCache;o!==null&&o.delete(n),t.pingedLanes|=t.suspendedLanes&a,t.warmLanes&=~a,Wt===t&&(xt&a)===a&&(tn===4||tn===3&&(xt&62914560)===xt&&300>b()-Jl?(Lt&2)===0&&hs(t,0):Ff|=a,fs===xt&&(fs=0)),Fi(t)}function cg(t,n){n===0&&(n=Ft()),t=dr(t,n),t!==null&&(Dn(t,n),Fi(t))}function CS(t){var n=t.memoizedState,a=0;n!==null&&(a=n.retryLane),cg(t,a)}function wS(t,n){var a=0;switch(t.tag){case 31:case 13:var o=t.stateNode,u=t.memoizedState;u!==null&&(a=u.retryLane);break;case 19:o=t.stateNode;break;case 22:o=t.stateNode._retryCache;break;default:throw Error(r(314))}o!==null&&o.delete(n),cg(t,a)}function DS(t,n){return Et(t,n)}var rc=null,ms=null,Xf=!1,sc=!1,Wf=!1,Xa=0;function Fi(t){t!==ms&&t.next===null&&(ms===null?rc=ms=t:ms=ms.next=t),sc=!0,Xf||(Xf=!0,LS())}function Do(t,n){if(!Wf&&sc){Wf=!0;do for(var a=!1,o=rc;o!==null;){if(t!==0){var u=o.pendingLanes;if(u===0)var d=0;else{var y=o.suspendedLanes,R=o.pingedLanes;d=(1<<31-He(42|t)+1)-1,d&=u&~(y&~R),d=d&201326741?d&201326741|1:d?d|2:0}d!==0&&(a=!0,hg(o,d))}else d=xt,d=Ee(o,o===Wt?d:0,o.cancelPendingCommit!==null||o.timeoutHandle!==-1),(d&3)===0||Le(o,d)||(a=!0,hg(o,d));o=o.next}while(a);Wf=!1}}function US(){ug()}function ug(){sc=Xf=!1;var t=0;Xa!==0&&VS()&&(t=Xa);for(var n=b(),a=null,o=rc;o!==null;){var u=o.next,d=fg(o,n);d===0?(o.next=null,a===null?rc=u:a.next=u,u===null&&(ms=a)):(a=o,(t!==0||(d&3)!==0)&&(sc=!0)),o=u}pn!==0&&pn!==5||Do(t),Xa!==0&&(Xa=0)}function fg(t,n){for(var a=t.suspendedLanes,o=t.pingedLanes,u=t.expirationTimes,d=t.pendingLanes&-62914561;0<d;){var y=31-He(d),R=1<<y,G=u[y];G===-1?((R&a)===0||(R&o)!==0)&&(u[y]=st(R,n)):G<=n&&(t.expiredLanes|=R),d&=~R}if(n=Wt,a=xt,a=Ee(t,t===n?a:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),o=t.callbackNode,a===0||t===n&&(It===2||It===9)||t.cancelPendingCommit!==null)return o!==null&&o!==null&&Nt(o),t.callbackNode=null,t.callbackPriority=0;if((a&3)===0||Le(t,a)){if(n=a&-a,n===t.callbackPriority)return n;switch(o!==null&&Nt(o),Br(a)){case 2:case 8:a=be;break;case 32:a=pe;break;case 268435456:a=Oe;break;default:a=pe}return o=dg.bind(null,t),a=Et(a,o),t.callbackPriority=n,t.callbackNode=a,n}return o!==null&&o!==null&&Nt(o),t.callbackPriority=2,t.callbackNode=null,2}function dg(t,n){if(pn!==0&&pn!==5)return t.callbackNode=null,t.callbackPriority=0,null;var a=t.callbackNode;if(ac()&&t.callbackNode!==a)return null;var o=xt;return o=Ee(t,t===Wt?o:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),o===0?null:(Y0(t,o,n),fg(t,b()),t.callbackNode!=null&&t.callbackNode===a?dg.bind(null,t):null)}function hg(t,n){if(ac())return null;Y0(t,n,!0)}function LS(){XS(function(){(Lt&6)!==0?Et(xe,US):ug()})}function qf(){if(Xa===0){var t=es;t===0&&(t=ze,ze<<=1,(ze&261888)===0&&(ze=256)),Xa=t}return Xa}function pg(t){return t==null||typeof t=="symbol"||typeof t=="boolean"?null:typeof t=="function"?t:pl(""+t)}function mg(t,n){var a=n.ownerDocument.createElement("input");return a.name=n.name,a.value=n.value,t.id&&a.setAttribute("form",t.id),n.parentNode.insertBefore(a,n),t=new FormData(t),a.parentNode.removeChild(a),t}function NS(t,n,a,o,u){if(n==="submit"&&a&&a.stateNode===u){var d=pg((u[xn]||null).action),y=o.submitter;y&&(n=(n=y[xn]||null)?pg(n.formAction):y.getAttribute("formAction"),n!==null&&(d=n,y=null));var R=new vl("action","action",null,o,u);t.push({event:R,listeners:[{instance:null,listener:function(){if(o.defaultPrevented){if(Xa!==0){var G=y?mg(u,y):new FormData(u);df(a,{pending:!0,data:G,method:u.method,action:d},null,G)}}else typeof d=="function"&&(R.preventDefault(),G=y?mg(u,y):new FormData(u),df(a,{pending:!0,data:G,method:u.method,action:d},d,G))},currentTarget:u}]})}}for(var Yf=0;Yf<Cu.length;Yf++){var jf=Cu[Yf],OS=jf.toLowerCase(),PS=jf[0].toUpperCase()+jf.slice(1);yi(OS,"on"+PS)}yi(qp,"onAnimationEnd"),yi(Yp,"onAnimationIteration"),yi(jp,"onAnimationStart"),yi("dblclick","onDoubleClick"),yi("focusin","onFocus"),yi("focusout","onBlur"),yi(Qx,"onTransitionRun"),yi(Jx,"onTransitionStart"),yi($x,"onTransitionCancel"),yi(Zp,"onTransitionEnd"),$("onMouseEnter",["mouseout","mouseover"]),$("onMouseLeave",["mouseout","mouseover"]),$("onPointerEnter",["pointerout","pointerover"]),$("onPointerLeave",["pointerout","pointerover"]),oe("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),oe("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),oe("onBeforeInput",["compositionend","keypress","textInput","paste"]),oe("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),oe("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),oe("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Uo="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),FS=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Uo));function gg(t,n){n=(n&4)!==0;for(var a=0;a<t.length;a++){var o=t[a],u=o.event;o=o.listeners;e:{var d=void 0;if(n)for(var y=o.length-1;0<=y;y--){var R=o[y],G=R.instance,ie=R.currentTarget;if(R=R.listener,G!==d&&u.isPropagationStopped())break e;d=R,u.currentTarget=ie;try{d(u)}catch(ge){yl(ge)}u.currentTarget=null,d=G}else for(y=0;y<o.length;y++){if(R=o[y],G=R.instance,ie=R.currentTarget,R=R.listener,G!==d&&u.isPropagationStopped())break e;d=R,u.currentTarget=ie;try{d(u)}catch(ge){yl(ge)}u.currentTarget=null,d=G}}}}function vt(t,n){var a=n[Hr];a===void 0&&(a=n[Hr]=new Set);var o=t+"__bubble";a.has(o)||(_g(n,t,2,!1),a.add(o))}function Zf(t,n,a){var o=0;n&&(o|=4),_g(a,t,o,n)}var oc="_reactListening"+Math.random().toString(36).slice(2);function Kf(t){if(!t[oc]){t[oc]=!0,Z.forEach(function(a){a!=="selectionchange"&&(FS.has(a)||Zf(a,!1,t),Zf(a,!0,t))});var n=t.nodeType===9?t:t.ownerDocument;n===null||n[oc]||(n[oc]=!0,Zf("selectionchange",!1,n))}}function _g(t,n,a,o){switch(qg(n)){case 2:var u=uy;break;case 8:u=fy;break;default:u=fd}a=u.bind(null,n,a,t),u=void 0,!mu||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(u=!0),o?u!==void 0?t.addEventListener(n,a,{capture:!0,passive:u}):t.addEventListener(n,a,!0):u!==void 0?t.addEventListener(n,a,{passive:u}):t.addEventListener(n,a,!1)}function Qf(t,n,a,o,u){var d=o;if((n&1)===0&&(n&2)===0&&o!==null)e:for(;;){if(o===null)return;var y=o.tag;if(y===3||y===4){var R=o.stateNode.containerInfo;if(R===u)break;if(y===4)for(y=o.return;y!==null;){var G=y.tag;if((G===3||G===4)&&y.stateNode.containerInfo===u)return;y=y.return}for(;R!==null;){if(y=Ta(R),y===null)return;if(G=y.tag,G===5||G===6||G===26||G===27){o=d=y;continue e}R=R.parentNode}}o=o.return}Mp(function(){var ie=d,ge=hu(a),Me=[];e:{var le=Kp.get(t);if(le!==void 0){var he=vl,qe=t;switch(t){case"keypress":if(gl(a)===0)break e;case"keydown":case"keyup":he=wx;break;case"focusin":qe="focus",he=xu;break;case"focusout":qe="blur",he=xu;break;case"beforeblur":case"afterblur":he=xu;break;case"click":if(a.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":he=Tp;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":he=_x;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":he=Lx;break;case qp:case Yp:case jp:he=Sx;break;case Zp:he=Ox;break;case"scroll":case"scrollend":he=mx;break;case"wheel":he=Fx;break;case"copy":case"cut":case"paste":he=Mx;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":he=Rp;break;case"toggle":case"beforetoggle":he=Ix}var it=(n&4)!==0,kt=!it&&(t==="scroll"||t==="scrollend"),J=it?le!==null?le+"Capture":null:le;it=[];for(var W=ie,ne;W!==null;){var Se=W;if(ne=Se.stateNode,Se=Se.tag,Se!==5&&Se!==26&&Se!==27||ne===null||J===null||(Se=Js(W,J),Se!=null&&it.push(Lo(W,Se,ne))),kt)break;W=W.return}0<it.length&&(le=new he(le,qe,null,a,ge),Me.push({event:le,listeners:it}))}}if((n&7)===0){e:{if(le=t==="mouseover"||t==="pointerover",he=t==="mouseout"||t==="pointerout",le&&a!==du&&(qe=a.relatedTarget||a.fromElement)&&(Ta(qe)||qe[xi]))break e;if((he||le)&&(le=ge.window===ge?ge:(le=ge.ownerDocument)?le.defaultView||le.parentWindow:window,he?(qe=a.relatedTarget||a.toElement,he=ie,qe=qe?Ta(qe):null,qe!==null&&(kt=c(qe),it=qe.tag,qe!==kt||it!==5&&it!==27&&it!==6)&&(qe=null)):(he=null,qe=ie),he!==qe)){if(it=Tp,Se="onMouseLeave",J="onMouseEnter",W="mouse",(t==="pointerout"||t==="pointerover")&&(it=Rp,Se="onPointerLeave",J="onPointerEnter",W="pointer"),kt=he==null?le:lr(he),ne=qe==null?le:lr(qe),le=new it(Se,W+"leave",he,a,ge),le.target=kt,le.relatedTarget=ne,Se=null,Ta(ge)===ie&&(it=new it(J,W+"enter",qe,a,ge),it.target=ne,it.relatedTarget=kt,Se=it),kt=Se,he&&qe)t:{for(it=zS,J=he,W=qe,ne=0,Se=J;Se;Se=it(Se))ne++;Se=0;for(var et=W;et;et=it(et))Se++;for(;0<ne-Se;)J=it(J),ne--;for(;0<Se-ne;)W=it(W),Se--;for(;ne--;){if(J===W||W!==null&&J===W.alternate){it=J;break t}J=it(J),W=it(W)}it=null}else it=null;he!==null&&vg(Me,le,he,it,!1),qe!==null&&kt!==null&&vg(Me,kt,qe,it,!0)}}e:{if(le=ie?lr(ie):window,he=le.nodeName&&le.nodeName.toLowerCase(),he==="select"||he==="input"&&le.type==="file")var At=Pp;else if(Np(le))if(Fp)At=jx;else{At=qx;var Qe=Wx}else he=le.nodeName,!he||he.toLowerCase()!=="input"||le.type!=="checkbox"&&le.type!=="radio"?ie&&Si(ie.elementType)&&(At=Pp):At=Yx;if(At&&(At=At(t,ie))){Op(Me,At,a,ge);break e}Qe&&Qe(t,le,ie),t==="focusout"&&ie&&le.type==="number"&&ie.memoizedProps.value!=null&&yn(le,"number",le.value)}switch(Qe=ie?lr(ie):window,t){case"focusin":(Np(Qe)||Qe.contentEditable==="true")&&(qr=Qe,Tu=ie,so=null);break;case"focusout":so=Tu=qr=null;break;case"mousedown":Au=!0;break;case"contextmenu":case"mouseup":case"dragend":Au=!1,Xp(Me,a,ge);break;case"selectionchange":if(Kx)break;case"keydown":case"keyup":Xp(Me,a,ge)}var ht;if(yu)e:{switch(t){case"compositionstart":var St="onCompositionStart";break e;case"compositionend":St="onCompositionEnd";break e;case"compositionupdate":St="onCompositionUpdate";break e}St=void 0}else Wr?Up(t,a)&&(St="onCompositionEnd"):t==="keydown"&&a.keyCode===229&&(St="onCompositionStart");St&&(Cp&&a.locale!=="ko"&&(Wr||St!=="onCompositionStart"?St==="onCompositionEnd"&&Wr&&(ht=Ep()):(Ca=ge,gu="value"in Ca?Ca.value:Ca.textContent,Wr=!0)),Qe=lc(ie,St),0<Qe.length&&(St=new Ap(St,t,null,a,ge),Me.push({event:St,listeners:Qe}),ht?St.data=ht:(ht=Lp(a),ht!==null&&(St.data=ht)))),(ht=Hx?Gx(t,a):Vx(t,a))&&(St=lc(ie,"onBeforeInput"),0<St.length&&(Qe=new Ap("onBeforeInput","beforeinput",null,a,ge),Me.push({event:Qe,listeners:St}),Qe.data=ht)),NS(Me,t,ie,a,ge)}gg(Me,n)})}function Lo(t,n,a){return{instance:t,listener:n,currentTarget:a}}function lc(t,n){for(var a=n+"Capture",o=[];t!==null;){var u=t,d=u.stateNode;if(u=u.tag,u!==5&&u!==26&&u!==27||d===null||(u=Js(t,a),u!=null&&o.unshift(Lo(t,u,d)),u=Js(t,n),u!=null&&o.push(Lo(t,u,d))),t.tag===3)return o;t=t.return}return[]}function zS(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5&&t.tag!==27);return t||null}function vg(t,n,a,o,u){for(var d=n._reactName,y=[];a!==null&&a!==o;){var R=a,G=R.alternate,ie=R.stateNode;if(R=R.tag,G!==null&&G===o)break;R!==5&&R!==26&&R!==27||ie===null||(G=ie,u?(ie=Js(a,d),ie!=null&&y.unshift(Lo(a,ie,G))):u||(ie=Js(a,d),ie!=null&&y.push(Lo(a,ie,G)))),a=a.return}y.length!==0&&t.push({event:n,listeners:y})}var IS=/\r\n?/g,BS=/\u0000|\uFFFD/g;function xg(t){return(typeof t=="string"?t:""+t).replace(IS,`
`).replace(BS,"")}function Sg(t,n){return n=xg(n),xg(t)===n}function Vt(t,n,a,o,u,d){switch(a){case"children":typeof o=="string"?n==="body"||n==="textarea"&&o===""||hn(t,o):(typeof o=="number"||typeof o=="bigint")&&n!=="body"&&hn(t,""+o);break;case"className":tt(t,"class",o);break;case"tabIndex":tt(t,"tabindex",o);break;case"dir":case"role":case"viewBox":case"width":case"height":tt(t,a,o);break;case"style":Vr(t,o,d);break;case"data":if(n!=="object"){tt(t,"data",o);break}case"src":case"href":if(o===""&&(n!=="a"||a!=="href")){t.removeAttribute(a);break}if(o==null||typeof o=="function"||typeof o=="symbol"||typeof o=="boolean"){t.removeAttribute(a);break}o=pl(""+o),t.setAttribute(a,o);break;case"action":case"formAction":if(typeof o=="function"){t.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof d=="function"&&(a==="formAction"?(n!=="input"&&Vt(t,n,"name",u.name,u,null),Vt(t,n,"formEncType",u.formEncType,u,null),Vt(t,n,"formMethod",u.formMethod,u,null),Vt(t,n,"formTarget",u.formTarget,u,null)):(Vt(t,n,"encType",u.encType,u,null),Vt(t,n,"method",u.method,u,null),Vt(t,n,"target",u.target,u,null)));if(o==null||typeof o=="symbol"||typeof o=="boolean"){t.removeAttribute(a);break}o=pl(""+o),t.setAttribute(a,o);break;case"onClick":o!=null&&(t.onclick=ji);break;case"onScroll":o!=null&&vt("scroll",t);break;case"onScrollEnd":o!=null&&vt("scrollend",t);break;case"dangerouslySetInnerHTML":if(o!=null){if(typeof o!="object"||!("__html"in o))throw Error(r(61));if(a=o.__html,a!=null){if(u.children!=null)throw Error(r(60));t.innerHTML=a}}break;case"multiple":t.multiple=o&&typeof o!="function"&&typeof o!="symbol";break;case"muted":t.muted=o&&typeof o!="function"&&typeof o!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(o==null||typeof o=="function"||typeof o=="boolean"||typeof o=="symbol"){t.removeAttribute("xlink:href");break}a=pl(""+o),t.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":o!=null&&typeof o!="function"&&typeof o!="symbol"?t.setAttribute(a,""+o):t.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":o&&typeof o!="function"&&typeof o!="symbol"?t.setAttribute(a,""):t.removeAttribute(a);break;case"capture":case"download":o===!0?t.setAttribute(a,""):o!==!1&&o!=null&&typeof o!="function"&&typeof o!="symbol"?t.setAttribute(a,o):t.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":o!=null&&typeof o!="function"&&typeof o!="symbol"&&!isNaN(o)&&1<=o?t.setAttribute(a,o):t.removeAttribute(a);break;case"rowSpan":case"start":o==null||typeof o=="function"||typeof o=="symbol"||isNaN(o)?t.removeAttribute(a):t.setAttribute(a,o);break;case"popover":vt("beforetoggle",t),vt("toggle",t),je(t,"popover",o);break;case"xlinkActuate":Ze(t,"http://www.w3.org/1999/xlink","xlink:actuate",o);break;case"xlinkArcrole":Ze(t,"http://www.w3.org/1999/xlink","xlink:arcrole",o);break;case"xlinkRole":Ze(t,"http://www.w3.org/1999/xlink","xlink:role",o);break;case"xlinkShow":Ze(t,"http://www.w3.org/1999/xlink","xlink:show",o);break;case"xlinkTitle":Ze(t,"http://www.w3.org/1999/xlink","xlink:title",o);break;case"xlinkType":Ze(t,"http://www.w3.org/1999/xlink","xlink:type",o);break;case"xmlBase":Ze(t,"http://www.w3.org/XML/1998/namespace","xml:base",o);break;case"xmlLang":Ze(t,"http://www.w3.org/XML/1998/namespace","xml:lang",o);break;case"xmlSpace":Ze(t,"http://www.w3.org/XML/1998/namespace","xml:space",o);break;case"is":je(t,"is",o);break;case"innerText":case"textContent":break;default:(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")&&(a=hx.get(a)||a,je(t,a,o))}}function Jf(t,n,a,o,u,d){switch(a){case"style":Vr(t,o,d);break;case"dangerouslySetInnerHTML":if(o!=null){if(typeof o!="object"||!("__html"in o))throw Error(r(61));if(a=o.__html,a!=null){if(u.children!=null)throw Error(r(60));t.innerHTML=a}}break;case"children":typeof o=="string"?hn(t,o):(typeof o=="number"||typeof o=="bigint")&&hn(t,""+o);break;case"onScroll":o!=null&&vt("scroll",t);break;case"onScrollEnd":o!=null&&vt("scrollend",t);break;case"onClick":o!=null&&(t.onclick=ji);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!fe.hasOwnProperty(a))e:{if(a[0]==="o"&&a[1]==="n"&&(u=a.endsWith("Capture"),n=a.slice(2,u?a.length-7:void 0),d=t[xn]||null,d=d!=null?d[a]:null,typeof d=="function"&&t.removeEventListener(n,d,u),typeof o=="function")){typeof d!="function"&&d!==null&&(a in t?t[a]=null:t.hasAttribute(a)&&t.removeAttribute(a)),t.addEventListener(n,o,u);break e}a in t?t[a]=o:o===!0?t.setAttribute(a,""):je(t,a,o)}}}function Cn(t,n,a){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":vt("error",t),vt("load",t);var o=!1,u=!1,d;for(d in a)if(a.hasOwnProperty(d)){var y=a[d];if(y!=null)switch(d){case"src":o=!0;break;case"srcSet":u=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(r(137,n));default:Vt(t,n,d,y,a,null)}}u&&Vt(t,n,"srcSet",a.srcSet,a,null),o&&Vt(t,n,"src",a.src,a,null);return;case"input":vt("invalid",t);var R=d=y=u=null,G=null,ie=null;for(o in a)if(a.hasOwnProperty(o)){var ge=a[o];if(ge!=null)switch(o){case"name":u=ge;break;case"type":y=ge;break;case"checked":G=ge;break;case"defaultChecked":ie=ge;break;case"value":d=ge;break;case"defaultValue":R=ge;break;case"children":case"dangerouslySetInnerHTML":if(ge!=null)throw Error(r(137,n));break;default:Vt(t,n,o,ge,a,null)}}Yi(t,d,R,G,ie,y,u,!1);return;case"select":vt("invalid",t),o=y=d=null;for(u in a)if(a.hasOwnProperty(u)&&(R=a[u],R!=null))switch(u){case"value":d=R;break;case"defaultValue":y=R;break;case"multiple":o=R;default:Vt(t,n,u,R,a,null)}n=d,a=y,t.multiple=!!o,n!=null?ai(t,!!o,n,!1):a!=null&&ai(t,!!o,a,!0);return;case"textarea":vt("invalid",t),d=u=o=null;for(y in a)if(a.hasOwnProperty(y)&&(R=a[y],R!=null))switch(y){case"value":o=R;break;case"defaultValue":u=R;break;case"children":d=R;break;case"dangerouslySetInnerHTML":if(R!=null)throw Error(r(91));break;default:Vt(t,n,y,R,a,null)}Mn(t,o,u,d);return;case"option":for(G in a)a.hasOwnProperty(G)&&(o=a[G],o!=null)&&(G==="selected"?t.selected=o&&typeof o!="function"&&typeof o!="symbol":Vt(t,n,G,o,a,null));return;case"dialog":vt("beforetoggle",t),vt("toggle",t),vt("cancel",t),vt("close",t);break;case"iframe":case"object":vt("load",t);break;case"video":case"audio":for(o=0;o<Uo.length;o++)vt(Uo[o],t);break;case"image":vt("error",t),vt("load",t);break;case"details":vt("toggle",t);break;case"embed":case"source":case"link":vt("error",t),vt("load",t);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(ie in a)if(a.hasOwnProperty(ie)&&(o=a[ie],o!=null))switch(ie){case"children":case"dangerouslySetInnerHTML":throw Error(r(137,n));default:Vt(t,n,ie,o,a,null)}return;default:if(Si(n)){for(ge in a)a.hasOwnProperty(ge)&&(o=a[ge],o!==void 0&&Jf(t,n,ge,o,a,void 0));return}}for(R in a)a.hasOwnProperty(R)&&(o=a[R],o!=null&&Vt(t,n,R,o,a,null))}function HS(t,n,a,o){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var u=null,d=null,y=null,R=null,G=null,ie=null,ge=null;for(he in a){var Me=a[he];if(a.hasOwnProperty(he)&&Me!=null)switch(he){case"checked":break;case"value":break;case"defaultValue":G=Me;default:o.hasOwnProperty(he)||Vt(t,n,he,null,o,Me)}}for(var le in o){var he=o[le];if(Me=a[le],o.hasOwnProperty(le)&&(he!=null||Me!=null))switch(le){case"type":d=he;break;case"name":u=he;break;case"checked":ie=he;break;case"defaultChecked":ge=he;break;case"value":y=he;break;case"defaultValue":R=he;break;case"children":case"dangerouslySetInnerHTML":if(he!=null)throw Error(r(137,n));break;default:he!==Me&&Vt(t,n,le,he,o,Me)}}Sn(t,y,R,G,ie,ge,d,u);return;case"select":he=y=R=le=null;for(d in a)if(G=a[d],a.hasOwnProperty(d)&&G!=null)switch(d){case"value":break;case"multiple":he=G;default:o.hasOwnProperty(d)||Vt(t,n,d,null,o,G)}for(u in o)if(d=o[u],G=a[u],o.hasOwnProperty(u)&&(d!=null||G!=null))switch(u){case"value":le=d;break;case"defaultValue":R=d;break;case"multiple":y=d;default:d!==G&&Vt(t,n,u,d,o,G)}n=R,a=y,o=he,le!=null?ai(t,!!a,le,!1):!!o!=!!a&&(n!=null?ai(t,!!a,n,!0):ai(t,!!a,a?[]:"",!1));return;case"textarea":he=le=null;for(R in a)if(u=a[R],a.hasOwnProperty(R)&&u!=null&&!o.hasOwnProperty(R))switch(R){case"value":break;case"children":break;default:Vt(t,n,R,null,o,u)}for(y in o)if(u=o[y],d=a[y],o.hasOwnProperty(y)&&(u!=null||d!=null))switch(y){case"value":le=u;break;case"defaultValue":he=u;break;case"children":break;case"dangerouslySetInnerHTML":if(u!=null)throw Error(r(91));break;default:u!==d&&Vt(t,n,y,u,o,d)}zt(t,le,he);return;case"option":for(var qe in a)le=a[qe],a.hasOwnProperty(qe)&&le!=null&&!o.hasOwnProperty(qe)&&(qe==="selected"?t.selected=!1:Vt(t,n,qe,null,o,le));for(G in o)le=o[G],he=a[G],o.hasOwnProperty(G)&&le!==he&&(le!=null||he!=null)&&(G==="selected"?t.selected=le&&typeof le!="function"&&typeof le!="symbol":Vt(t,n,G,le,o,he));return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var it in a)le=a[it],a.hasOwnProperty(it)&&le!=null&&!o.hasOwnProperty(it)&&Vt(t,n,it,null,o,le);for(ie in o)if(le=o[ie],he=a[ie],o.hasOwnProperty(ie)&&le!==he&&(le!=null||he!=null))switch(ie){case"children":case"dangerouslySetInnerHTML":if(le!=null)throw Error(r(137,n));break;default:Vt(t,n,ie,le,o,he)}return;default:if(Si(n)){for(var kt in a)le=a[kt],a.hasOwnProperty(kt)&&le!==void 0&&!o.hasOwnProperty(kt)&&Jf(t,n,kt,void 0,o,le);for(ge in o)le=o[ge],he=a[ge],!o.hasOwnProperty(ge)||le===he||le===void 0&&he===void 0||Jf(t,n,ge,le,o,he);return}}for(var J in a)le=a[J],a.hasOwnProperty(J)&&le!=null&&!o.hasOwnProperty(J)&&Vt(t,n,J,null,o,le);for(Me in o)le=o[Me],he=a[Me],!o.hasOwnProperty(Me)||le===he||le==null&&he==null||Vt(t,n,Me,le,o,he)}function yg(t){switch(t){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function GS(){if(typeof performance.getEntriesByType=="function"){for(var t=0,n=0,a=performance.getEntriesByType("resource"),o=0;o<a.length;o++){var u=a[o],d=u.transferSize,y=u.initiatorType,R=u.duration;if(d&&R&&yg(y)){for(y=0,R=u.responseEnd,o+=1;o<a.length;o++){var G=a[o],ie=G.startTime;if(ie>R)break;var ge=G.transferSize,Me=G.initiatorType;ge&&yg(Me)&&(G=G.responseEnd,y+=ge*(G<R?1:(R-ie)/(G-ie)))}if(--o,n+=8*(d+y)/(u.duration/1e3),t++,10<t)break}}if(0<t)return n/t/1e6}return navigator.connection&&(t=navigator.connection.downlink,typeof t=="number")?t:5}var $f=null,ed=null;function cc(t){return t.nodeType===9?t:t.ownerDocument}function Mg(t){switch(t){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function Eg(t,n){if(t===0)switch(n){case"svg":return 1;case"math":return 2;default:return 0}return t===1&&n==="foreignObject"?0:t}function td(t,n){return t==="textarea"||t==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.children=="bigint"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var nd=null;function VS(){var t=window.event;return t&&t.type==="popstate"?t===nd?!1:(nd=t,!0):(nd=null,!1)}var bg=typeof setTimeout=="function"?setTimeout:void 0,kS=typeof clearTimeout=="function"?clearTimeout:void 0,Tg=typeof Promise=="function"?Promise:void 0,XS=typeof queueMicrotask=="function"?queueMicrotask:typeof Tg<"u"?function(t){return Tg.resolve(null).then(t).catch(WS)}:bg;function WS(t){setTimeout(function(){throw t})}function Wa(t){return t==="head"}function Ag(t,n){var a=n,o=0;do{var u=a.nextSibling;if(t.removeChild(a),u&&u.nodeType===8)if(a=u.data,a==="/$"||a==="/&"){if(o===0){t.removeChild(u),xs(n);return}o--}else if(a==="$"||a==="$?"||a==="$~"||a==="$!"||a==="&")o++;else if(a==="html")No(t.ownerDocument.documentElement);else if(a==="head"){a=t.ownerDocument.head,No(a);for(var d=a.firstChild;d;){var y=d.nextSibling,R=d.nodeName;d[or]||R==="SCRIPT"||R==="STYLE"||R==="LINK"&&d.rel.toLowerCase()==="stylesheet"||a.removeChild(d),d=y}}else a==="body"&&No(t.ownerDocument.body);a=u}while(a);xs(n)}function Rg(t,n){var a=t;t=0;do{var o=a.nextSibling;if(a.nodeType===1?n?(a._stashedDisplay=a.style.display,a.style.display="none"):(a.style.display=a._stashedDisplay||"",a.getAttribute("style")===""&&a.removeAttribute("style")):a.nodeType===3&&(n?(a._stashedText=a.nodeValue,a.nodeValue=""):a.nodeValue=a._stashedText||""),o&&o.nodeType===8)if(a=o.data,a==="/$"){if(t===0)break;t--}else a!=="$"&&a!=="$?"&&a!=="$~"&&a!=="$!"||t++;a=o}while(a)}function id(t){var n=t.firstChild;for(n&&n.nodeType===10&&(n=n.nextSibling);n;){var a=n;switch(n=n.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":id(a),Qs(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}t.removeChild(a)}}function qS(t,n,a,o){for(;t.nodeType===1;){var u=a;if(t.nodeName.toLowerCase()!==n.toLowerCase()){if(!o&&(t.nodeName!=="INPUT"||t.type!=="hidden"))break}else if(o){if(!t[or])switch(n){case"meta":if(!t.hasAttribute("itemprop"))break;return t;case"link":if(d=t.getAttribute("rel"),d==="stylesheet"&&t.hasAttribute("data-precedence"))break;if(d!==u.rel||t.getAttribute("href")!==(u.href==null||u.href===""?null:u.href)||t.getAttribute("crossorigin")!==(u.crossOrigin==null?null:u.crossOrigin)||t.getAttribute("title")!==(u.title==null?null:u.title))break;return t;case"style":if(t.hasAttribute("data-precedence"))break;return t;case"script":if(d=t.getAttribute("src"),(d!==(u.src==null?null:u.src)||t.getAttribute("type")!==(u.type==null?null:u.type)||t.getAttribute("crossorigin")!==(u.crossOrigin==null?null:u.crossOrigin))&&d&&t.hasAttribute("async")&&!t.hasAttribute("itemprop"))break;return t;default:return t}}else if(n==="input"&&t.type==="hidden"){var d=u.name==null?null:""+u.name;if(u.type==="hidden"&&t.getAttribute("name")===d)return t}else return t;if(t=fi(t.nextSibling),t===null)break}return null}function YS(t,n,a){if(n==="")return null;for(;t.nodeType!==3;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!a||(t=fi(t.nextSibling),t===null))return null;return t}function Cg(t,n){for(;t.nodeType!==8;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!n||(t=fi(t.nextSibling),t===null))return null;return t}function ad(t){return t.data==="$?"||t.data==="$~"}function rd(t){return t.data==="$!"||t.data==="$?"&&t.ownerDocument.readyState!=="loading"}function jS(t,n){var a=t.ownerDocument;if(t.data==="$~")t._reactRetry=n;else if(t.data!=="$?"||a.readyState!=="loading")n();else{var o=function(){n(),a.removeEventListener("DOMContentLoaded",o)};a.addEventListener("DOMContentLoaded",o),t._reactRetry=o}}function fi(t){for(;t!=null;t=t.nextSibling){var n=t.nodeType;if(n===1||n===3)break;if(n===8){if(n=t.data,n==="$"||n==="$!"||n==="$?"||n==="$~"||n==="&"||n==="F!"||n==="F")break;if(n==="/$"||n==="/&")return null}}return t}var sd=null;function wg(t){t=t.nextSibling;for(var n=0;t;){if(t.nodeType===8){var a=t.data;if(a==="/$"||a==="/&"){if(n===0)return fi(t.nextSibling);n--}else a!=="$"&&a!=="$!"&&a!=="$?"&&a!=="$~"&&a!=="&"||n++}t=t.nextSibling}return null}function Dg(t){t=t.previousSibling;for(var n=0;t;){if(t.nodeType===8){var a=t.data;if(a==="$"||a==="$!"||a==="$?"||a==="$~"||a==="&"){if(n===0)return t;n--}else a!=="/$"&&a!=="/&"||n++}t=t.previousSibling}return null}function Ug(t,n,a){switch(n=cc(a),t){case"html":if(t=n.documentElement,!t)throw Error(r(452));return t;case"head":if(t=n.head,!t)throw Error(r(453));return t;case"body":if(t=n.body,!t)throw Error(r(454));return t;default:throw Error(r(451))}}function No(t){for(var n=t.attributes;n.length;)t.removeAttributeNode(n[0]);Qs(t)}var di=new Map,Lg=new Set;function uc(t){return typeof t.getRootNode=="function"?t.getRootNode():t.nodeType===9?t:t.ownerDocument}var ua=H.d;H.d={f:ZS,r:KS,D:QS,C:JS,L:$S,m:ey,X:ny,S:ty,M:iy};function ZS(){var t=ua.f(),n=tc();return t||n}function KS(t){var n=Aa(t);n!==null&&n.tag===5&&n.type==="form"?Zm(n):ua.r(t)}var gs=typeof document>"u"?null:document;function Ng(t,n,a){var o=gs;if(o&&typeof n=="string"&&n){var u=ot(n);u='link[rel="'+t+'"][href="'+u+'"]',typeof a=="string"&&(u+='[crossorigin="'+a+'"]'),Lg.has(u)||(Lg.add(u),t={rel:t,crossOrigin:a,href:n},o.querySelector(u)===null&&(n=o.createElement("link"),Cn(n,"link",t),C(n),o.head.appendChild(n)))}}function QS(t){ua.D(t),Ng("dns-prefetch",t,null)}function JS(t,n){ua.C(t,n),Ng("preconnect",t,n)}function $S(t,n,a){ua.L(t,n,a);var o=gs;if(o&&t&&n){var u='link[rel="preload"][as="'+ot(n)+'"]';n==="image"&&a&&a.imageSrcSet?(u+='[imagesrcset="'+ot(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(u+='[imagesizes="'+ot(a.imageSizes)+'"]')):u+='[href="'+ot(t)+'"]';var d=u;switch(n){case"style":d=_s(t);break;case"script":d=vs(t)}di.has(d)||(t=_({rel:"preload",href:n==="image"&&a&&a.imageSrcSet?void 0:t,as:n},a),di.set(d,t),o.querySelector(u)!==null||n==="style"&&o.querySelector(Oo(d))||n==="script"&&o.querySelector(Po(d))||(n=o.createElement("link"),Cn(n,"link",t),C(n),o.head.appendChild(n)))}}function ey(t,n){ua.m(t,n);var a=gs;if(a&&t){var o=n&&typeof n.as=="string"?n.as:"script",u='link[rel="modulepreload"][as="'+ot(o)+'"][href="'+ot(t)+'"]',d=u;switch(o){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":d=vs(t)}if(!di.has(d)&&(t=_({rel:"modulepreload",href:t},n),di.set(d,t),a.querySelector(u)===null)){switch(o){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(Po(d)))return}o=a.createElement("link"),Cn(o,"link",t),C(o),a.head.appendChild(o)}}}function ty(t,n,a){ua.S(t,n,a);var o=gs;if(o&&t){var u=Ra(o).hoistableStyles,d=_s(t);n=n||"default";var y=u.get(d);if(!y){var R={loading:0,preload:null};if(y=o.querySelector(Oo(d)))R.loading=5;else{t=_({rel:"stylesheet",href:t,"data-precedence":n},a),(a=di.get(d))&&od(t,a);var G=y=o.createElement("link");C(G),Cn(G,"link",t),G._p=new Promise(function(ie,ge){G.onload=ie,G.onerror=ge}),G.addEventListener("load",function(){R.loading|=1}),G.addEventListener("error",function(){R.loading|=2}),R.loading|=4,fc(y,n,o)}y={type:"stylesheet",instance:y,count:1,state:R},u.set(d,y)}}}function ny(t,n){ua.X(t,n);var a=gs;if(a&&t){var o=Ra(a).hoistableScripts,u=vs(t),d=o.get(u);d||(d=a.querySelector(Po(u)),d||(t=_({src:t,async:!0},n),(n=di.get(u))&&ld(t,n),d=a.createElement("script"),C(d),Cn(d,"link",t),a.head.appendChild(d)),d={type:"script",instance:d,count:1,state:null},o.set(u,d))}}function iy(t,n){ua.M(t,n);var a=gs;if(a&&t){var o=Ra(a).hoistableScripts,u=vs(t),d=o.get(u);d||(d=a.querySelector(Po(u)),d||(t=_({src:t,async:!0,type:"module"},n),(n=di.get(u))&&ld(t,n),d=a.createElement("script"),C(d),Cn(d,"link",t),a.head.appendChild(d)),d={type:"script",instance:d,count:1,state:null},o.set(u,d))}}function Og(t,n,a,o){var u=(u=Q.current)?uc(u):null;if(!u)throw Error(r(446));switch(t){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(n=_s(a.href),a=Ra(u).hoistableStyles,o=a.get(n),o||(o={type:"style",instance:null,count:0,state:null},a.set(n,o)),o):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){t=_s(a.href);var d=Ra(u).hoistableStyles,y=d.get(t);if(y||(u=u.ownerDocument||u,y={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},d.set(t,y),(d=u.querySelector(Oo(t)))&&!d._p&&(y.instance=d,y.state.loading=5),di.has(t)||(a={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},di.set(t,a),d||ay(u,t,a,y.state))),n&&o===null)throw Error(r(528,""));return y}if(n&&o!==null)throw Error(r(529,""));return null;case"script":return n=a.async,a=a.src,typeof a=="string"&&n&&typeof n!="function"&&typeof n!="symbol"?(n=vs(a),a=Ra(u).hoistableScripts,o=a.get(n),o||(o={type:"script",instance:null,count:0,state:null},a.set(n,o)),o):{type:"void",instance:null,count:0,state:null};default:throw Error(r(444,t))}}function _s(t){return'href="'+ot(t)+'"'}function Oo(t){return'link[rel="stylesheet"]['+t+"]"}function Pg(t){return _({},t,{"data-precedence":t.precedence,precedence:null})}function ay(t,n,a,o){t.querySelector('link[rel="preload"][as="style"]['+n+"]")?o.loading=1:(n=t.createElement("link"),o.preload=n,n.addEventListener("load",function(){return o.loading|=1}),n.addEventListener("error",function(){return o.loading|=2}),Cn(n,"link",a),C(n),t.head.appendChild(n))}function vs(t){return'[src="'+ot(t)+'"]'}function Po(t){return"script[async]"+t}function Fg(t,n,a){if(n.count++,n.instance===null)switch(n.type){case"style":var o=t.querySelector('style[data-href~="'+ot(a.href)+'"]');if(o)return n.instance=o,C(o),o;var u=_({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return o=(t.ownerDocument||t).createElement("style"),C(o),Cn(o,"style",u),fc(o,a.precedence,t),n.instance=o;case"stylesheet":u=_s(a.href);var d=t.querySelector(Oo(u));if(d)return n.state.loading|=4,n.instance=d,C(d),d;o=Pg(a),(u=di.get(u))&&od(o,u),d=(t.ownerDocument||t).createElement("link"),C(d);var y=d;return y._p=new Promise(function(R,G){y.onload=R,y.onerror=G}),Cn(d,"link",o),n.state.loading|=4,fc(d,a.precedence,t),n.instance=d;case"script":return d=vs(a.src),(u=t.querySelector(Po(d)))?(n.instance=u,C(u),u):(o=a,(u=di.get(d))&&(o=_({},a),ld(o,u)),t=t.ownerDocument||t,u=t.createElement("script"),C(u),Cn(u,"link",o),t.head.appendChild(u),n.instance=u);case"void":return null;default:throw Error(r(443,n.type))}else n.type==="stylesheet"&&(n.state.loading&4)===0&&(o=n.instance,n.state.loading|=4,fc(o,a.precedence,t));return n.instance}function fc(t,n,a){for(var o=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),u=o.length?o[o.length-1]:null,d=u,y=0;y<o.length;y++){var R=o[y];if(R.dataset.precedence===n)d=R;else if(d!==u)break}d?d.parentNode.insertBefore(t,d.nextSibling):(n=a.nodeType===9?a.head:a,n.insertBefore(t,n.firstChild))}function od(t,n){t.crossOrigin==null&&(t.crossOrigin=n.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=n.referrerPolicy),t.title==null&&(t.title=n.title)}function ld(t,n){t.crossOrigin==null&&(t.crossOrigin=n.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=n.referrerPolicy),t.integrity==null&&(t.integrity=n.integrity)}var dc=null;function zg(t,n,a){if(dc===null){var o=new Map,u=dc=new Map;u.set(a,o)}else u=dc,o=u.get(a),o||(o=new Map,u.set(a,o));if(o.has(t))return o;for(o.set(t,null),a=a.getElementsByTagName(t),u=0;u<a.length;u++){var d=a[u];if(!(d[or]||d[on]||t==="link"&&d.getAttribute("rel")==="stylesheet")&&d.namespaceURI!=="http://www.w3.org/2000/svg"){var y=d.getAttribute(n)||"";y=t+y;var R=o.get(y);R?R.push(d):o.set(y,[d])}}return o}function Ig(t,n,a){t=t.ownerDocument||t,t.head.insertBefore(a,n==="title"?t.querySelector("head > title"):null)}function ry(t,n,a){if(a===1||n.itemProp!=null)return!1;switch(t){case"meta":case"title":return!0;case"style":if(typeof n.precedence!="string"||typeof n.href!="string"||n.href==="")break;return!0;case"link":if(typeof n.rel!="string"||typeof n.href!="string"||n.href===""||n.onLoad||n.onError)break;return n.rel==="stylesheet"?(t=n.disabled,typeof n.precedence=="string"&&t==null):!0;case"script":if(n.async&&typeof n.async!="function"&&typeof n.async!="symbol"&&!n.onLoad&&!n.onError&&n.src&&typeof n.src=="string")return!0}return!1}function Bg(t){return!(t.type==="stylesheet"&&(t.state.loading&3)===0)}function sy(t,n,a,o){if(a.type==="stylesheet"&&(typeof o.media!="string"||matchMedia(o.media).matches!==!1)&&(a.state.loading&4)===0){if(a.instance===null){var u=_s(o.href),d=n.querySelector(Oo(u));if(d){n=d._p,n!==null&&typeof n=="object"&&typeof n.then=="function"&&(t.count++,t=hc.bind(t),n.then(t,t)),a.state.loading|=4,a.instance=d,C(d);return}d=n.ownerDocument||n,o=Pg(o),(u=di.get(u))&&od(o,u),d=d.createElement("link"),C(d);var y=d;y._p=new Promise(function(R,G){y.onload=R,y.onerror=G}),Cn(d,"link",o),a.instance=d}t.stylesheets===null&&(t.stylesheets=new Map),t.stylesheets.set(a,n),(n=a.state.preload)&&(a.state.loading&3)===0&&(t.count++,a=hc.bind(t),n.addEventListener("load",a),n.addEventListener("error",a))}}var cd=0;function oy(t,n){return t.stylesheets&&t.count===0&&mc(t,t.stylesheets),0<t.count||0<t.imgCount?function(a){var o=setTimeout(function(){if(t.stylesheets&&mc(t,t.stylesheets),t.unsuspend){var d=t.unsuspend;t.unsuspend=null,d()}},6e4+n);0<t.imgBytes&&cd===0&&(cd=62500*GS());var u=setTimeout(function(){if(t.waitingForImages=!1,t.count===0&&(t.stylesheets&&mc(t,t.stylesheets),t.unsuspend)){var d=t.unsuspend;t.unsuspend=null,d()}},(t.imgBytes>cd?50:800)+n);return t.unsuspend=a,function(){t.unsuspend=null,clearTimeout(o),clearTimeout(u)}}:null}function hc(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)mc(this,this.stylesheets);else if(this.unsuspend){var t=this.unsuspend;this.unsuspend=null,t()}}}var pc=null;function mc(t,n){t.stylesheets=null,t.unsuspend!==null&&(t.count++,pc=new Map,n.forEach(ly,t),pc=null,hc.call(t))}function ly(t,n){if(!(n.state.loading&4)){var a=pc.get(t);if(a)var o=a.get(null);else{a=new Map,pc.set(t,a);for(var u=t.querySelectorAll("link[data-precedence],style[data-precedence]"),d=0;d<u.length;d++){var y=u[d];(y.nodeName==="LINK"||y.getAttribute("media")!=="not all")&&(a.set(y.dataset.precedence,y),o=y)}o&&a.set(null,o)}u=n.instance,y=u.getAttribute("data-precedence"),d=a.get(y)||o,d===o&&a.set(null,u),a.set(y,u),this.count++,o=hc.bind(this),u.addEventListener("load",o),u.addEventListener("error",o),d?d.parentNode.insertBefore(u,d.nextSibling):(t=t.nodeType===9?t.head:t,t.insertBefore(u,t.firstChild)),n.state.loading|=4}}var Fo={$$typeof:N,Provider:null,Consumer:null,_currentValue:K,_currentValue2:K,_threadCount:0};function cy(t,n,a,o,u,d,y,R,G){this.tag=1,this.containerInfo=t,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=bt(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=bt(0),this.hiddenUpdates=bt(null),this.identifierPrefix=o,this.onUncaughtError=u,this.onCaughtError=d,this.onRecoverableError=y,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=G,this.incompleteTransitions=new Map}function Hg(t,n,a,o,u,d,y,R,G,ie,ge,Me){return t=new cy(t,n,a,y,G,ie,ge,Me,R),n=1,d===!0&&(n|=24),d=jn(3,null,null,n),t.current=d,d.stateNode=t,n=Gu(),n.refCount++,t.pooledCache=n,n.refCount++,d.memoizedState={element:o,isDehydrated:a,cache:n},Wu(d),t}function Gg(t){return t?(t=Zr,t):Zr}function Vg(t,n,a,o,u,d){u=Gg(u),o.context===null?o.context=u:o.pendingContext=u,o=Oa(n),o.payload={element:a},d=d===void 0?null:d,d!==null&&(o.callback=d),a=Pa(t,o,n),a!==null&&(kn(a,t,n),po(a,t,n))}function kg(t,n){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var a=t.retryLane;t.retryLane=a!==0&&a<n?a:n}}function ud(t,n){kg(t,n),(t=t.alternate)&&kg(t,n)}function Xg(t){if(t.tag===13||t.tag===31){var n=dr(t,67108864);n!==null&&kn(n,t,67108864),ud(t,67108864)}}function Wg(t){if(t.tag===13||t.tag===31){var n=$n();n=js(n);var a=dr(t,n);a!==null&&kn(a,t,n),ud(t,n)}}var gc=!0;function uy(t,n,a,o){var u=z.T;z.T=null;var d=H.p;try{H.p=2,fd(t,n,a,o)}finally{H.p=d,z.T=u}}function fy(t,n,a,o){var u=z.T;z.T=null;var d=H.p;try{H.p=8,fd(t,n,a,o)}finally{H.p=d,z.T=u}}function fd(t,n,a,o){if(gc){var u=dd(o);if(u===null)Qf(t,n,o,_c,a),Yg(t,o);else if(hy(u,t,n,a,o))o.stopPropagation();else if(Yg(t,o),n&4&&-1<dy.indexOf(t)){for(;u!==null;){var d=Aa(u);if(d!==null)switch(d.tag){case 3:if(d=d.stateNode,d.current.memoizedState.isDehydrated){var y=Ae(d.pendingLanes);if(y!==0){var R=d;for(R.pendingLanes|=2,R.entangledLanes|=2;y;){var G=1<<31-He(y);R.entanglements[1]|=G,y&=~G}Fi(d),(Lt&6)===0&&($l=b()+500,Do(0))}}break;case 31:case 13:R=dr(d,2),R!==null&&kn(R,d,2),tc(),ud(d,2)}if(d=dd(o),d===null&&Qf(t,n,o,_c,a),d===u)break;u=d}u!==null&&o.stopPropagation()}else Qf(t,n,o,null,a)}}function dd(t){return t=hu(t),hd(t)}var _c=null;function hd(t){if(_c=null,t=Ta(t),t!==null){var n=c(t);if(n===null)t=null;else{var a=n.tag;if(a===13){if(t=f(n),t!==null)return t;t=null}else if(a===31){if(t=h(n),t!==null)return t;t=null}else if(a===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;t=null}else n!==t&&(t=null)}}return _c=t,null}function qg(t){switch(t){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(Y()){case xe:return 2;case be:return 8;case pe:case Je:return 32;case Oe:return 268435456;default:return 32}default:return 32}}var pd=!1,qa=null,Ya=null,ja=null,zo=new Map,Io=new Map,Za=[],dy="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function Yg(t,n){switch(t){case"focusin":case"focusout":qa=null;break;case"dragenter":case"dragleave":Ya=null;break;case"mouseover":case"mouseout":ja=null;break;case"pointerover":case"pointerout":zo.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":Io.delete(n.pointerId)}}function Bo(t,n,a,o,u,d){return t===null||t.nativeEvent!==d?(t={blockedOn:n,domEventName:a,eventSystemFlags:o,nativeEvent:d,targetContainers:[u]},n!==null&&(n=Aa(n),n!==null&&Xg(n)),t):(t.eventSystemFlags|=o,n=t.targetContainers,u!==null&&n.indexOf(u)===-1&&n.push(u),t)}function hy(t,n,a,o,u){switch(n){case"focusin":return qa=Bo(qa,t,n,a,o,u),!0;case"dragenter":return Ya=Bo(Ya,t,n,a,o,u),!0;case"mouseover":return ja=Bo(ja,t,n,a,o,u),!0;case"pointerover":var d=u.pointerId;return zo.set(d,Bo(zo.get(d)||null,t,n,a,o,u)),!0;case"gotpointercapture":return d=u.pointerId,Io.set(d,Bo(Io.get(d)||null,t,n,a,o,u)),!0}return!1}function jg(t){var n=Ta(t.target);if(n!==null){var a=c(n);if(a!==null){if(n=a.tag,n===13){if(n=f(a),n!==null){t.blockedOn=n,Li(t.priority,function(){Wg(a)});return}}else if(n===31){if(n=h(a),n!==null){t.blockedOn=n,Li(t.priority,function(){Wg(a)});return}}else if(n===3&&a.stateNode.current.memoizedState.isDehydrated){t.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}t.blockedOn=null}function vc(t){if(t.blockedOn!==null)return!1;for(var n=t.targetContainers;0<n.length;){var a=dd(t.nativeEvent);if(a===null){a=t.nativeEvent;var o=new a.constructor(a.type,a);du=o,a.target.dispatchEvent(o),du=null}else return n=Aa(a),n!==null&&Xg(n),t.blockedOn=a,!1;n.shift()}return!0}function Zg(t,n,a){vc(t)&&a.delete(n)}function py(){pd=!1,qa!==null&&vc(qa)&&(qa=null),Ya!==null&&vc(Ya)&&(Ya=null),ja!==null&&vc(ja)&&(ja=null),zo.forEach(Zg),Io.forEach(Zg)}function xc(t,n){t.blockedOn===n&&(t.blockedOn=null,pd||(pd=!0,s.unstable_scheduleCallback(s.unstable_NormalPriority,py)))}var Sc=null;function Kg(t){Sc!==t&&(Sc=t,s.unstable_scheduleCallback(s.unstable_NormalPriority,function(){Sc===t&&(Sc=null);for(var n=0;n<t.length;n+=3){var a=t[n],o=t[n+1],u=t[n+2];if(typeof o!="function"){if(hd(o||a)===null)continue;break}var d=Aa(a);d!==null&&(t.splice(n,3),n-=3,df(d,{pending:!0,data:u,method:a.method,action:o},o,u))}}))}function xs(t){function n(G){return xc(G,t)}qa!==null&&xc(qa,t),Ya!==null&&xc(Ya,t),ja!==null&&xc(ja,t),zo.forEach(n),Io.forEach(n);for(var a=0;a<Za.length;a++){var o=Za[a];o.blockedOn===t&&(o.blockedOn=null)}for(;0<Za.length&&(a=Za[0],a.blockedOn===null);)jg(a),a.blockedOn===null&&Za.shift();if(a=(t.ownerDocument||t).$$reactFormReplay,a!=null)for(o=0;o<a.length;o+=3){var u=a[o],d=a[o+1],y=u[xn]||null;if(typeof d=="function")y||Kg(a);else if(y){var R=null;if(d&&d.hasAttribute("formAction")){if(u=d,y=d[xn]||null)R=y.formAction;else if(hd(u)!==null)continue}else R=y.action;typeof R=="function"?a[o+1]=R:(a.splice(o,3),o-=3),Kg(a)}}}function Qg(){function t(d){d.canIntercept&&d.info==="react-transition"&&d.intercept({handler:function(){return new Promise(function(y){return u=y})},focusReset:"manual",scroll:"manual"})}function n(){u!==null&&(u(),u=null),o||setTimeout(a,20)}function a(){if(!o&&!navigation.transition){var d=navigation.currentEntry;d&&d.url!=null&&navigation.navigate(d.url,{state:d.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var o=!1,u=null;return navigation.addEventListener("navigate",t),navigation.addEventListener("navigatesuccess",n),navigation.addEventListener("navigateerror",n),setTimeout(a,100),function(){o=!0,navigation.removeEventListener("navigate",t),navigation.removeEventListener("navigatesuccess",n),navigation.removeEventListener("navigateerror",n),u!==null&&(u(),u=null)}}}function md(t){this._internalRoot=t}yc.prototype.render=md.prototype.render=function(t){var n=this._internalRoot;if(n===null)throw Error(r(409));var a=n.current,o=$n();Vg(a,o,t,n,null,null)},yc.prototype.unmount=md.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var n=t.containerInfo;Vg(t.current,2,null,t,null,null),tc(),n[xi]=null}};function yc(t){this._internalRoot=t}yc.prototype.unstable_scheduleHydration=function(t){if(t){var n=Zs();t={blockedOn:null,target:t,priority:n};for(var a=0;a<Za.length&&n!==0&&n<Za[a].priority;a++);Za.splice(a,0,t),a===0&&jg(t)}};var Jg=e.version;if(Jg!=="19.2.4")throw Error(r(527,Jg,"19.2.4"));H.findDOMNode=function(t){var n=t._reactInternals;if(n===void 0)throw typeof t.render=="function"?Error(r(188)):(t=Object.keys(t).join(","),Error(r(268,t)));return t=p(n),t=t!==null?v(t):null,t=t===null?null:t.stateNode,t};var my={bundleType:0,version:"19.2.4",rendererPackageName:"react-dom",currentDispatcherRef:z,reconcilerVersion:"19.2.4"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Mc=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Mc.isDisabled&&Mc.supportsFiber)try{we=Mc.inject(my),De=Mc}catch{}}return Go.createRoot=function(t,n){if(!l(t))throw Error(r(299));var a=!1,o="",u=r0,d=s0,y=o0;return n!=null&&(n.unstable_strictMode===!0&&(a=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onUncaughtError!==void 0&&(u=n.onUncaughtError),n.onCaughtError!==void 0&&(d=n.onCaughtError),n.onRecoverableError!==void 0&&(y=n.onRecoverableError)),n=Hg(t,1,!1,null,null,a,o,null,u,d,y,Qg),t[xi]=n.current,Kf(t),new md(n)},Go.hydrateRoot=function(t,n,a){if(!l(t))throw Error(r(299));var o=!1,u="",d=r0,y=s0,R=o0,G=null;return a!=null&&(a.unstable_strictMode===!0&&(o=!0),a.identifierPrefix!==void 0&&(u=a.identifierPrefix),a.onUncaughtError!==void 0&&(d=a.onUncaughtError),a.onCaughtError!==void 0&&(y=a.onCaughtError),a.onRecoverableError!==void 0&&(R=a.onRecoverableError),a.formState!==void 0&&(G=a.formState)),n=Hg(t,1,!0,n,a??null,o,u,G,d,y,R,Qg),n.context=Gg(null),a=n.current,o=$n(),o=js(o),u=Oa(o),u.callback=null,Pa(a,u,o),a=o,n.current.lanes=a,Dn(n,a),Fi(n),t[xi]=n.current,Kf(t),new yc(n)},Go.version="19.2.4",Go}var l_;function Ty(){if(l_)return vd.exports;l_=1;function s(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(s)}catch(e){console.error(e)}}return s(),vd.exports=by(),vd.exports}var Ay=Ty();var c_="popstate";function Ry(s={}){function e(r,l){let{pathname:c,search:f,hash:h}=r.location;return nh("",{pathname:c,search:f,hash:h},l.state&&l.state.usr||null,l.state&&l.state.key||"default")}function i(r,l){return typeof l=="string"?l:Jo(l)}return wy(e,i,null,s)}function Jt(s,e){if(s===!1||s===null||typeof s>"u")throw new Error(e)}function wi(s,e){if(!s){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function Cy(){return Math.random().toString(36).substring(2,10)}function u_(s,e){return{usr:s.state,key:s.key,idx:e}}function nh(s,e,i=null,r){return{pathname:typeof s=="string"?s:s.pathname,search:"",hash:"",...typeof e=="string"?Gs(e):e,state:i,key:e&&e.key||r||Cy()}}function Jo({pathname:s="/",search:e="",hash:i=""}){return e&&e!=="?"&&(s+=e.charAt(0)==="?"?e:"?"+e),i&&i!=="#"&&(s+=i.charAt(0)==="#"?i:"#"+i),s}function Gs(s){let e={};if(s){let i=s.indexOf("#");i>=0&&(e.hash=s.substring(i),s=s.substring(0,i));let r=s.indexOf("?");r>=0&&(e.search=s.substring(r),s=s.substring(0,r)),s&&(e.pathname=s)}return e}function wy(s,e,i,r={}){let{window:l=document.defaultView,v5Compat:c=!1}=r,f=l.history,h="POP",m=null,p=v();p==null&&(p=0,f.replaceState({...f.state,idx:p},""));function v(){return(f.state||{idx:null}).idx}function _(){h="POP";let g=v(),x=g==null?null:g-p;p=g,m&&m({action:h,location:T.location,delta:x})}function S(g,x){h="PUSH";let U=nh(T.location,g,x);p=v()+1;let N=u_(U,p),O=T.createHref(U);try{f.pushState(N,"",O)}catch(L){if(L instanceof DOMException&&L.name==="DataCloneError")throw L;l.location.assign(O)}c&&m&&m({action:h,location:T.location,delta:1})}function M(g,x){h="REPLACE";let U=nh(T.location,g,x);p=v();let N=u_(U,p),O=T.createHref(U);f.replaceState(N,"",O),c&&m&&m({action:h,location:T.location,delta:0})}function E(g){return Dy(g)}let T={get action(){return h},get location(){return s(l,f)},listen(g){if(m)throw new Error("A history only accepts one active listener");return l.addEventListener(c_,_),m=g,()=>{l.removeEventListener(c_,_),m=null}},createHref(g){return e(l,g)},createURL:E,encodeLocation(g){let x=E(g);return{pathname:x.pathname,search:x.search,hash:x.hash}},push:S,replace:M,go(g){return f.go(g)}};return T}function Dy(s,e=!1){let i="http://localhost";typeof window<"u"&&(i=window.location.origin!=="null"?window.location.origin:window.location.href),Jt(i,"No window.location.(origin|href) available to create URL");let r=typeof s=="string"?s:Jo(s);return r=r.replace(/ $/,"%20"),!e&&r.startsWith("//")&&(r=i+r),new URL(r,i)}function hv(s,e,i="/"){return Uy(s,e,i,!1)}function Uy(s,e,i,r){let l=typeof e=="string"?Gs(e):e,c=ya(l.pathname||"/",i);if(c==null)return null;let f=pv(s);Ly(f);let h=null;for(let m=0;h==null&&m<f.length;++m){let p=ky(c);h=Gy(f[m],p,r)}return h}function pv(s,e=[],i=[],r="",l=!1){let c=(f,h,m=l,p)=>{let v={relativePath:p===void 0?f.path||"":p,caseSensitive:f.caseSensitive===!0,childrenIndex:h,route:f};if(v.relativePath.startsWith("/")){if(!v.relativePath.startsWith(r)&&m)return;Jt(v.relativePath.startsWith(r),`Absolute route path "${v.relativePath}" nested under path "${r}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),v.relativePath=v.relativePath.slice(r.length)}let _=_a([r,v.relativePath]),S=i.concat(v);f.children&&f.children.length>0&&(Jt(f.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${_}".`),pv(f.children,e,S,_,m)),!(f.path==null&&!f.index)&&e.push({path:_,score:By(_,f.index),routesMeta:S})};return s.forEach((f,h)=>{if(f.path===""||!f.path?.includes("?"))c(f,h);else for(let m of mv(f.path))c(f,h,!0,m)}),e}function mv(s){let e=s.split("/");if(e.length===0)return[];let[i,...r]=e,l=i.endsWith("?"),c=i.replace(/\?$/,"");if(r.length===0)return l?[c,""]:[c];let f=mv(r.join("/")),h=[];return h.push(...f.map(m=>m===""?c:[c,m].join("/"))),l&&h.push(...f),h.map(m=>s.startsWith("/")&&m===""?"/":m)}function Ly(s){s.sort((e,i)=>e.score!==i.score?i.score-e.score:Hy(e.routesMeta.map(r=>r.childrenIndex),i.routesMeta.map(r=>r.childrenIndex)))}var Ny=/^:[\w-]+$/,Oy=3,Py=2,Fy=1,zy=10,Iy=-2,f_=s=>s==="*";function By(s,e){let i=s.split("/"),r=i.length;return i.some(f_)&&(r+=Iy),e&&(r+=Py),i.filter(l=>!f_(l)).reduce((l,c)=>l+(Ny.test(c)?Oy:c===""?Fy:zy),r)}function Hy(s,e){return s.length===e.length&&s.slice(0,-1).every((r,l)=>r===e[l])?s[s.length-1]-e[e.length-1]:0}function Gy(s,e,i=!1){let{routesMeta:r}=s,l={},c="/",f=[];for(let h=0;h<r.length;++h){let m=r[h],p=h===r.length-1,v=c==="/"?e:e.slice(c.length)||"/",_=tu({path:m.relativePath,caseSensitive:m.caseSensitive,end:p},v),S=m.route;if(!_&&p&&i&&!r[r.length-1].route.index&&(_=tu({path:m.relativePath,caseSensitive:m.caseSensitive,end:!1},v)),!_)return null;Object.assign(l,_.params),f.push({params:l,pathname:_a([c,_.pathname]),pathnameBase:Yy(_a([c,_.pathnameBase])),route:S}),_.pathnameBase!=="/"&&(c=_a([c,_.pathnameBase]))}return f}function tu(s,e){typeof s=="string"&&(s={path:s,caseSensitive:!1,end:!0});let[i,r]=Vy(s.path,s.caseSensitive,s.end),l=e.match(i);if(!l)return null;let c=l[0],f=c.replace(/(.)\/+$/,"$1"),h=l.slice(1);return{params:r.reduce((p,{paramName:v,isOptional:_},S)=>{if(v==="*"){let E=h[S]||"";f=c.slice(0,c.length-E.length).replace(/(.)\/+$/,"$1")}const M=h[S];return _&&!M?p[v]=void 0:p[v]=(M||"").replace(/%2F/g,"/"),p},{}),pathname:c,pathnameBase:f,pattern:s}}function Vy(s,e=!1,i=!0){wi(s==="*"||!s.endsWith("*")||s.endsWith("/*"),`Route path "${s}" will be treated as if it were "${s.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${s.replace(/\*$/,"/*")}".`);let r=[],l="^"+s.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(f,h,m)=>(r.push({paramName:h,isOptional:m!=null}),m?"/?([^\\/]+)?":"/([^\\/]+)")).replace(/\/([\w-]+)\?(\/|$)/g,"(/$1)?$2");return s.endsWith("*")?(r.push({paramName:"*"}),l+=s==="*"||s==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):i?l+="\\/*$":s!==""&&s!=="/"&&(l+="(?:(?=\\/|$))"),[new RegExp(l,e?void 0:"i"),r]}function ky(s){try{return s.split("/").map(e=>decodeURIComponent(e).replace(/\//g,"%2F")).join("/")}catch(e){return wi(!1,`The URL path "${s}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${e}).`),s}}function ya(s,e){if(e==="/")return s;if(!s.toLowerCase().startsWith(e.toLowerCase()))return null;let i=e.endsWith("/")?e.length-1:e.length,r=s.charAt(i);return r&&r!=="/"?null:s.slice(i)||"/"}var Xy=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i;function Wy(s,e="/"){let{pathname:i,search:r="",hash:l=""}=typeof s=="string"?Gs(s):s,c;return i?(i=i.replace(/\/\/+/g,"/"),i.startsWith("/")?c=d_(i.substring(1),"/"):c=d_(i,e)):c=e,{pathname:c,search:jy(r),hash:Zy(l)}}function d_(s,e){let i=e.replace(/\/+$/,"").split("/");return s.split("/").forEach(l=>{l===".."?i.length>1&&i.pop():l!=="."&&i.push(l)}),i.length>1?i.join("/"):"/"}function Md(s,e,i,r){return`Cannot include a '${s}' character in a manually specified \`to.${e}\` field [${JSON.stringify(r)}].  Please separate it out to the \`to.${i}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function qy(s){return s.filter((e,i)=>i===0||e.route.path&&e.route.path.length>0)}function np(s){let e=qy(s);return e.map((i,r)=>r===e.length-1?i.pathname:i.pathnameBase)}function ip(s,e,i,r=!1){let l;typeof s=="string"?l=Gs(s):(l={...s},Jt(!l.pathname||!l.pathname.includes("?"),Md("?","pathname","search",l)),Jt(!l.pathname||!l.pathname.includes("#"),Md("#","pathname","hash",l)),Jt(!l.search||!l.search.includes("#"),Md("#","search","hash",l)));let c=s===""||l.pathname==="",f=c?"/":l.pathname,h;if(f==null)h=i;else{let _=e.length-1;if(!r&&f.startsWith("..")){let S=f.split("/");for(;S[0]==="..";)S.shift(),_-=1;l.pathname=S.join("/")}h=_>=0?e[_]:"/"}let m=Wy(l,h),p=f&&f!=="/"&&f.endsWith("/"),v=(c||f===".")&&i.endsWith("/");return!m.pathname.endsWith("/")&&(p||v)&&(m.pathname+="/"),m}var _a=s=>s.join("/").replace(/\/\/+/g,"/"),Yy=s=>s.replace(/\/+$/,"").replace(/^\/*/,"/"),jy=s=>!s||s==="?"?"":s.startsWith("?")?s:"?"+s,Zy=s=>!s||s==="#"?"":s.startsWith("#")?s:"#"+s,Ky=class{constructor(s,e,i,r=!1){this.status=s,this.statusText=e||"",this.internal=r,i instanceof Error?(this.data=i.toString(),this.error=i):this.data=i}};function Qy(s){return s!=null&&typeof s.status=="number"&&typeof s.statusText=="string"&&typeof s.internal=="boolean"&&"data"in s}function Jy(s){return s.map(e=>e.route.path).filter(Boolean).join("/").replace(/\/\/*/g,"/")||"/"}var gv=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";function _v(s,e){let i=s;if(typeof i!="string"||!Xy.test(i))return{absoluteURL:void 0,isExternal:!1,to:i};let r=i,l=!1;if(gv)try{let c=new URL(window.location.href),f=i.startsWith("//")?new URL(c.protocol+i):new URL(i),h=ya(f.pathname,e);f.origin===c.origin&&h!=null?i=h+f.search+f.hash:l=!0}catch{wi(!1,`<Link to="${i}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}return{absoluteURL:r,isExternal:l,to:i}}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");var vv=["POST","PUT","PATCH","DELETE"];new Set(vv);var $y=["GET",...vv];new Set($y);var Vs=te.createContext(null);Vs.displayName="DataRouter";var ru=te.createContext(null);ru.displayName="DataRouterState";var eM=te.createContext(!1),xv=te.createContext({isTransitioning:!1});xv.displayName="ViewTransition";var tM=te.createContext(new Map);tM.displayName="Fetchers";var nM=te.createContext(null);nM.displayName="Await";var ni=te.createContext(null);ni.displayName="Navigation";var il=te.createContext(null);il.displayName="Location";var Di=te.createContext({outlet:null,matches:[],isDataRoute:!1});Di.displayName="Route";var ap=te.createContext(null);ap.displayName="RouteError";var Sv="REACT_ROUTER_ERROR",iM="REDIRECT",aM="ROUTE_ERROR_RESPONSE";function rM(s){if(s.startsWith(`${Sv}:${iM}:{`))try{let e=JSON.parse(s.slice(28));if(typeof e=="object"&&e&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.location=="string"&&typeof e.reloadDocument=="boolean"&&typeof e.replace=="boolean")return e}catch{}}function sM(s){if(s.startsWith(`${Sv}:${aM}:{`))try{let e=JSON.parse(s.slice(40));if(typeof e=="object"&&e&&typeof e.status=="number"&&typeof e.statusText=="string")return new Ky(e.status,e.statusText,e.data)}catch{}}function oM(s,{relative:e}={}){Jt(ks(),"useHref() may be used only in the context of a <Router> component.");let{basename:i,navigator:r}=te.useContext(ni),{hash:l,pathname:c,search:f}=al(s,{relative:e}),h=c;return i!=="/"&&(h=c==="/"?i:_a([i,c])),r.createHref({pathname:h,search:f,hash:l})}function ks(){return te.useContext(il)!=null}function sr(){return Jt(ks(),"useLocation() may be used only in the context of a <Router> component."),te.useContext(il).location}var yv="You should call navigate() in a React.useEffect(), not when your component is first rendered.";function Mv(s){te.useContext(ni).static||te.useLayoutEffect(s)}function Ev(){let{isDataRoute:s}=te.useContext(Di);return s?yM():lM()}function lM(){Jt(ks(),"useNavigate() may be used only in the context of a <Router> component.");let s=te.useContext(Vs),{basename:e,navigator:i}=te.useContext(ni),{matches:r}=te.useContext(Di),{pathname:l}=sr(),c=JSON.stringify(np(r)),f=te.useRef(!1);return Mv(()=>{f.current=!0}),te.useCallback((m,p={})=>{if(wi(f.current,yv),!f.current)return;if(typeof m=="number"){i.go(m);return}let v=ip(m,JSON.parse(c),l,p.relative==="path");s==null&&e!=="/"&&(v.pathname=v.pathname==="/"?e:_a([e,v.pathname])),(p.replace?i.replace:i.push)(v,p.state,p)},[e,i,c,l,s])}te.createContext(null);function cM(){let{matches:s}=te.useContext(Di),e=s[s.length-1];return e?e.params:{}}function al(s,{relative:e}={}){let{matches:i}=te.useContext(Di),{pathname:r}=sr(),l=JSON.stringify(np(i));return te.useMemo(()=>ip(s,JSON.parse(l),r,e==="path"),[s,l,r,e])}function uM(s,e){return bv(s,e)}function bv(s,e,i,r,l){Jt(ks(),"useRoutes() may be used only in the context of a <Router> component.");let{navigator:c}=te.useContext(ni),{matches:f}=te.useContext(Di),h=f[f.length-1],m=h?h.params:{},p=h?h.pathname:"/",v=h?h.pathnameBase:"/",_=h&&h.route;{let U=_&&_.path||"";Av(p,!_||U.endsWith("*")||U.endsWith("*?"),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${p}" (under <Route path="${U}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${U}"> to <Route path="${U==="/"?"*":`${U}/*`}">.`)}let S=sr(),M;if(e){let U=typeof e=="string"?Gs(e):e;Jt(v==="/"||U.pathname?.startsWith(v),`When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${v}" but pathname "${U.pathname}" was given in the \`location\` prop.`),M=U}else M=S;let E=M.pathname||"/",T=E;if(v!=="/"){let U=v.replace(/^\//,"").split("/");T="/"+E.replace(/^\//,"").split("/").slice(U.length).join("/")}let g=hv(s,{pathname:T});wi(_||g!=null,`No routes matched location "${M.pathname}${M.search}${M.hash}" `),wi(g==null||g[g.length-1].route.element!==void 0||g[g.length-1].route.Component!==void 0||g[g.length-1].route.lazy!==void 0,`Matched leaf route at location "${M.pathname}${M.search}${M.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);let x=mM(g&&g.map(U=>Object.assign({},U,{params:Object.assign({},m,U.params),pathname:_a([v,c.encodeLocation?c.encodeLocation(U.pathname.replace(/\?/g,"%3F").replace(/#/g,"%23")).pathname:U.pathname]),pathnameBase:U.pathnameBase==="/"?v:_a([v,c.encodeLocation?c.encodeLocation(U.pathnameBase.replace(/\?/g,"%3F").replace(/#/g,"%23")).pathname:U.pathnameBase])})),f,i,r,l);return e&&x?te.createElement(il.Provider,{value:{location:{pathname:"/",search:"",hash:"",state:null,key:"default",...M},navigationType:"POP"}},x):x}function fM(){let s=SM(),e=Qy(s)?`${s.status} ${s.statusText}`:s instanceof Error?s.message:JSON.stringify(s),i=s instanceof Error?s.stack:null,r="rgba(200,200,200, 0.5)",l={padding:"0.5rem",backgroundColor:r},c={padding:"2px 4px",backgroundColor:r},f=null;return console.error("Error handled by React Router default ErrorBoundary:",s),f=te.createElement(te.Fragment,null,te.createElement("p",null,"💿 Hey developer 👋"),te.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",te.createElement("code",{style:c},"ErrorBoundary")," or"," ",te.createElement("code",{style:c},"errorElement")," prop on your route.")),te.createElement(te.Fragment,null,te.createElement("h2",null,"Unexpected Application Error!"),te.createElement("h3",{style:{fontStyle:"italic"}},e),i?te.createElement("pre",{style:l},i):null,f)}var dM=te.createElement(fM,null),Tv=class extends te.Component{constructor(s){super(s),this.state={location:s.location,revalidation:s.revalidation,error:s.error}}static getDerivedStateFromError(s){return{error:s}}static getDerivedStateFromProps(s,e){return e.location!==s.location||e.revalidation!=="idle"&&s.revalidation==="idle"?{error:s.error,location:s.location,revalidation:s.revalidation}:{error:s.error!==void 0?s.error:e.error,location:e.location,revalidation:s.revalidation||e.revalidation}}componentDidCatch(s,e){this.props.onError?this.props.onError(s,e):console.error("React Router caught the following error during render",s)}render(){let s=this.state.error;if(this.context&&typeof s=="object"&&s&&"digest"in s&&typeof s.digest=="string"){const i=sM(s.digest);i&&(s=i)}let e=s!==void 0?te.createElement(Di.Provider,{value:this.props.routeContext},te.createElement(ap.Provider,{value:s,children:this.props.component})):this.props.children;return this.context?te.createElement(hM,{error:s},e):e}};Tv.contextType=eM;var Ed=new WeakMap;function hM({children:s,error:e}){let{basename:i}=te.useContext(ni);if(typeof e=="object"&&e&&"digest"in e&&typeof e.digest=="string"){let r=rM(e.digest);if(r){let l=Ed.get(e);if(l)throw l;let c=_v(r.location,i);if(gv&&!Ed.get(e))if(c.isExternal||r.reloadDocument)window.location.href=c.absoluteURL||c.to;else{const f=Promise.resolve().then(()=>window.__reactRouterDataRouter.navigate(c.to,{replace:r.replace}));throw Ed.set(e,f),f}return te.createElement("meta",{httpEquiv:"refresh",content:`0;url=${c.absoluteURL||c.to}`})}}return s}function pM({routeContext:s,match:e,children:i}){let r=te.useContext(Vs);return r&&r.static&&r.staticContext&&(e.route.errorElement||e.route.ErrorBoundary)&&(r.staticContext._deepestRenderedBoundaryId=e.route.id),te.createElement(Di.Provider,{value:s},i)}function mM(s,e=[],i=null,r=null,l=null){if(s==null){if(!i)return null;if(i.errors)s=i.matches;else if(e.length===0&&!i.initialized&&i.matches.length>0)s=i.matches;else return null}let c=s,f=i?.errors;if(f!=null){let v=c.findIndex(_=>_.route.id&&f?.[_.route.id]!==void 0);Jt(v>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(f).join(",")}`),c=c.slice(0,Math.min(c.length,v+1))}let h=!1,m=-1;if(i)for(let v=0;v<c.length;v++){let _=c[v];if((_.route.HydrateFallback||_.route.hydrateFallbackElement)&&(m=v),_.route.id){let{loaderData:S,errors:M}=i,E=_.route.loader&&!S.hasOwnProperty(_.route.id)&&(!M||M[_.route.id]===void 0);if(_.route.lazy||E){h=!0,m>=0?c=c.slice(0,m+1):c=[c[0]];break}}}let p=i&&r?(v,_)=>{r(v,{location:i.location,params:i.matches?.[0]?.params??{},unstable_pattern:Jy(i.matches),errorInfo:_})}:void 0;return c.reduceRight((v,_,S)=>{let M,E=!1,T=null,g=null;i&&(M=f&&_.route.id?f[_.route.id]:void 0,T=_.route.errorElement||dM,h&&(m<0&&S===0?(Av("route-fallback",!1,"No `HydrateFallback` element provided to render during initial hydration"),E=!0,g=null):m===S&&(E=!0,g=_.route.hydrateFallbackElement||null)));let x=e.concat(c.slice(0,S+1)),U=()=>{let N;return M?N=T:E?N=g:_.route.Component?N=te.createElement(_.route.Component,null):_.route.element?N=_.route.element:N=v,te.createElement(pM,{match:_,routeContext:{outlet:v,matches:x,isDataRoute:i!=null},children:N})};return i&&(_.route.ErrorBoundary||_.route.errorElement||S===0)?te.createElement(Tv,{location:i.location,revalidation:i.revalidation,component:T,error:M,children:U(),routeContext:{outlet:null,matches:x,isDataRoute:!0},onError:p}):U()},null)}function rp(s){return`${s} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function gM(s){let e=te.useContext(Vs);return Jt(e,rp(s)),e}function _M(s){let e=te.useContext(ru);return Jt(e,rp(s)),e}function vM(s){let e=te.useContext(Di);return Jt(e,rp(s)),e}function sp(s){let e=vM(s),i=e.matches[e.matches.length-1];return Jt(i.route.id,`${s} can only be used on routes that contain a unique "id"`),i.route.id}function xM(){return sp("useRouteId")}function SM(){let s=te.useContext(ap),e=_M("useRouteError"),i=sp("useRouteError");return s!==void 0?s:e.errors?.[i]}function yM(){let{router:s}=gM("useNavigate"),e=sp("useNavigate"),i=te.useRef(!1);return Mv(()=>{i.current=!0}),te.useCallback(async(l,c={})=>{wi(i.current,yv),i.current&&(typeof l=="number"?await s.navigate(l):await s.navigate(l,{fromRouteId:e,...c}))},[s,e])}var h_={};function Av(s,e,i){!e&&!h_[s]&&(h_[s]=!0,wi(!1,i))}te.memo(MM);function MM({routes:s,future:e,state:i,onError:r}){return bv(s,void 0,i,r,e)}function p_({to:s,replace:e,state:i,relative:r}){Jt(ks(),"<Navigate> may be used only in the context of a <Router> component.");let{static:l}=te.useContext(ni);wi(!l,"<Navigate> must not be used on the initial render in a <StaticRouter>. This is a no-op, but you should modify your code so the <Navigate> is only ever rendered in response to some user interaction or state change.");let{matches:c}=te.useContext(Di),{pathname:f}=sr(),h=Ev(),m=ip(s,np(c),f,r==="path"),p=JSON.stringify(m);return te.useEffect(()=>{h(JSON.parse(p),{replace:e,state:i,relative:r})},[h,p,r,e,i]),null}function ih(s){Jt(!1,"A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.")}function EM({basename:s="/",children:e=null,location:i,navigationType:r="POP",navigator:l,static:c=!1,unstable_useTransitions:f}){Jt(!ks(),"You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");let h=s.replace(/^\/*/,"/"),m=te.useMemo(()=>({basename:h,navigator:l,static:c,unstable_useTransitions:f,future:{}}),[h,l,c,f]);typeof i=="string"&&(i=Gs(i));let{pathname:p="/",search:v="",hash:_="",state:S=null,key:M="default"}=i,E=te.useMemo(()=>{let T=ya(p,h);return T==null?null:{location:{pathname:T,search:v,hash:_,state:S,key:M},navigationType:r}},[h,p,v,_,S,M,r]);return wi(E!=null,`<Router basename="${h}"> is not able to match the URL "${p}${v}${_}" because it does not start with the basename, so the <Router> won't render anything.`),E==null?null:te.createElement(ni.Provider,{value:m},te.createElement(il.Provider,{children:e,value:E}))}function bM({children:s,location:e}){return uM(ah(s),e)}function ah(s,e=[]){let i=[];return te.Children.forEach(s,(r,l)=>{if(!te.isValidElement(r))return;let c=[...e,l];if(r.type===te.Fragment){i.push.apply(i,ah(r.props.children,c));return}Jt(r.type===ih,`[${typeof r.type=="string"?r.type:r.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`),Jt(!r.props.index||!r.props.children,"An index route cannot have child routes.");let f={id:r.props.id||c.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,middleware:r.props.middleware,loader:r.props.loader,action:r.props.action,hydrateFallbackElement:r.props.hydrateFallbackElement,HydrateFallback:r.props.HydrateFallback,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.hasErrorBoundary===!0||r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(f.children=ah(r.props.children,c)),i.push(f)}),i}var Yc="get",jc="application/x-www-form-urlencoded";function su(s){return typeof HTMLElement<"u"&&s instanceof HTMLElement}function TM(s){return su(s)&&s.tagName.toLowerCase()==="button"}function AM(s){return su(s)&&s.tagName.toLowerCase()==="form"}function RM(s){return su(s)&&s.tagName.toLowerCase()==="input"}function CM(s){return!!(s.metaKey||s.altKey||s.ctrlKey||s.shiftKey)}function wM(s,e){return s.button===0&&(!e||e==="_self")&&!CM(s)}var Ec=null;function DM(){if(Ec===null)try{new FormData(document.createElement("form"),0),Ec=!1}catch{Ec=!0}return Ec}var UM=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function bd(s){return s!=null&&!UM.has(s)?(wi(!1,`"${s}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${jc}"`),null):s}function LM(s,e){let i,r,l,c,f;if(AM(s)){let h=s.getAttribute("action");r=h?ya(h,e):null,i=s.getAttribute("method")||Yc,l=bd(s.getAttribute("enctype"))||jc,c=new FormData(s)}else if(TM(s)||RM(s)&&(s.type==="submit"||s.type==="image")){let h=s.form;if(h==null)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');let m=s.getAttribute("formaction")||h.getAttribute("action");if(r=m?ya(m,e):null,i=s.getAttribute("formmethod")||h.getAttribute("method")||Yc,l=bd(s.getAttribute("formenctype"))||bd(h.getAttribute("enctype"))||jc,c=new FormData(h,s),!DM()){let{name:p,type:v,value:_}=s;if(v==="image"){let S=p?`${p}.`:"";c.append(`${S}x`,"0"),c.append(`${S}y`,"0")}else p&&c.append(p,_)}}else{if(su(s))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');i=Yc,r=null,l=jc,f=s}return c&&l==="text/plain"&&(f=c,c=void 0),{action:r,method:i.toLowerCase(),encType:l,formData:c,body:f}}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");function op(s,e){if(s===!1||s===null||typeof s>"u")throw new Error(e)}function NM(s,e,i,r){let l=typeof s=="string"?new URL(s,typeof window>"u"?"server://singlefetch/":window.location.origin):s;return i?l.pathname.endsWith("/")?l.pathname=`${l.pathname}_.${r}`:l.pathname=`${l.pathname}.${r}`:l.pathname==="/"?l.pathname=`_root.${r}`:e&&ya(l.pathname,e)==="/"?l.pathname=`${e.replace(/\/$/,"")}/_root.${r}`:l.pathname=`${l.pathname.replace(/\/$/,"")}.${r}`,l}async function OM(s,e){if(s.id in e)return e[s.id];try{let i=await import(s.module);return e[s.id]=i,i}catch(i){return console.error(`Error loading route module \`${s.module}\`, reloading page...`),console.error(i),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function PM(s){return s==null?!1:s.href==null?s.rel==="preload"&&typeof s.imageSrcSet=="string"&&typeof s.imageSizes=="string":typeof s.rel=="string"&&typeof s.href=="string"}async function FM(s,e,i){let r=await Promise.all(s.map(async l=>{let c=e.routes[l.route.id];if(c){let f=await OM(c,i);return f.links?f.links():[]}return[]}));return HM(r.flat(1).filter(PM).filter(l=>l.rel==="stylesheet"||l.rel==="preload").map(l=>l.rel==="stylesheet"?{...l,rel:"prefetch",as:"style"}:{...l,rel:"prefetch"}))}function m_(s,e,i,r,l,c){let f=(m,p)=>i[p]?m.route.id!==i[p].route.id:!0,h=(m,p)=>i[p].pathname!==m.pathname||i[p].route.path?.endsWith("*")&&i[p].params["*"]!==m.params["*"];return c==="assets"?e.filter((m,p)=>f(m,p)||h(m,p)):c==="data"?e.filter((m,p)=>{let v=r.routes[m.route.id];if(!v||!v.hasLoader)return!1;if(f(m,p)||h(m,p))return!0;if(m.route.shouldRevalidate){let _=m.route.shouldRevalidate({currentUrl:new URL(l.pathname+l.search+l.hash,window.origin),currentParams:i[0]?.params||{},nextUrl:new URL(s,window.origin),nextParams:m.params,defaultShouldRevalidate:!0});if(typeof _=="boolean")return _}return!0}):[]}function zM(s,e,{includeHydrateFallback:i}={}){return IM(s.map(r=>{let l=e.routes[r.route.id];if(!l)return[];let c=[l.module];return l.clientActionModule&&(c=c.concat(l.clientActionModule)),l.clientLoaderModule&&(c=c.concat(l.clientLoaderModule)),i&&l.hydrateFallbackModule&&(c=c.concat(l.hydrateFallbackModule)),l.imports&&(c=c.concat(l.imports)),c}).flat(1))}function IM(s){return[...new Set(s)]}function BM(s){let e={},i=Object.keys(s).sort();for(let r of i)e[r]=s[r];return e}function HM(s,e){let i=new Set;return new Set(e),s.reduce((r,l)=>{let c=JSON.stringify(BM(l));return i.has(c)||(i.add(c),r.push({key:c,link:l})),r},[])}function Rv(){let s=te.useContext(Vs);return op(s,"You must render this element inside a <DataRouterContext.Provider> element"),s}function GM(){let s=te.useContext(ru);return op(s,"You must render this element inside a <DataRouterStateContext.Provider> element"),s}var lp=te.createContext(void 0);lp.displayName="FrameworkContext";function Cv(){let s=te.useContext(lp);return op(s,"You must render this element inside a <HydratedRouter> element"),s}function VM(s,e){let i=te.useContext(lp),[r,l]=te.useState(!1),[c,f]=te.useState(!1),{onFocus:h,onBlur:m,onMouseEnter:p,onMouseLeave:v,onTouchStart:_}=e,S=te.useRef(null);te.useEffect(()=>{if(s==="render"&&f(!0),s==="viewport"){let T=x=>{x.forEach(U=>{f(U.isIntersecting)})},g=new IntersectionObserver(T,{threshold:.5});return S.current&&g.observe(S.current),()=>{g.disconnect()}}},[s]),te.useEffect(()=>{if(r){let T=setTimeout(()=>{f(!0)},100);return()=>{clearTimeout(T)}}},[r]);let M=()=>{l(!0)},E=()=>{l(!1),f(!1)};return i?s!=="intent"?[c,S,{}]:[c,S,{onFocus:Vo(h,M),onBlur:Vo(m,E),onMouseEnter:Vo(p,M),onMouseLeave:Vo(v,E),onTouchStart:Vo(_,M)}]:[!1,S,{}]}function Vo(s,e){return i=>{s&&s(i),i.defaultPrevented||e(i)}}function kM({page:s,...e}){let{router:i}=Rv(),r=te.useMemo(()=>hv(i.routes,s,i.basename),[i.routes,s,i.basename]);return r?te.createElement(WM,{page:s,matches:r,...e}):null}function XM(s){let{manifest:e,routeModules:i}=Cv(),[r,l]=te.useState([]);return te.useEffect(()=>{let c=!1;return FM(s,e,i).then(f=>{c||l(f)}),()=>{c=!0}},[s,e,i]),r}function WM({page:s,matches:e,...i}){let r=sr(),{future:l,manifest:c,routeModules:f}=Cv(),{basename:h}=Rv(),{loaderData:m,matches:p}=GM(),v=te.useMemo(()=>m_(s,e,p,c,r,"data"),[s,e,p,c,r]),_=te.useMemo(()=>m_(s,e,p,c,r,"assets"),[s,e,p,c,r]),S=te.useMemo(()=>{if(s===r.pathname+r.search+r.hash)return[];let T=new Set,g=!1;if(e.forEach(U=>{let N=c.routes[U.route.id];!N||!N.hasLoader||(!v.some(O=>O.route.id===U.route.id)&&U.route.id in m&&f[U.route.id]?.shouldRevalidate||N.hasClientLoader?g=!0:T.add(U.route.id))}),T.size===0)return[];let x=NM(s,h,l.unstable_trailingSlashAwareDataRequests,"data");return g&&T.size>0&&x.searchParams.set("_routes",e.filter(U=>T.has(U.route.id)).map(U=>U.route.id).join(",")),[x.pathname+x.search]},[h,l.unstable_trailingSlashAwareDataRequests,m,r,c,v,e,s,f]),M=te.useMemo(()=>zM(_,c),[_,c]),E=XM(_);return te.createElement(te.Fragment,null,S.map(T=>te.createElement("link",{key:T,rel:"prefetch",as:"fetch",href:T,...i})),M.map(T=>te.createElement("link",{key:T,rel:"modulepreload",href:T,...i})),E.map(({key:T,link:g})=>te.createElement("link",{key:T,nonce:i.nonce,...g,crossOrigin:g.crossOrigin??i.crossOrigin})))}function qM(...s){return e=>{s.forEach(i=>{typeof i=="function"?i(e):i!=null&&(i.current=e)})}}var YM=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";try{YM&&(window.__reactRouterVersion="7.13.0")}catch{}function jM({basename:s,children:e,unstable_useTransitions:i,window:r}){let l=te.useRef();l.current==null&&(l.current=Ry({window:r,v5Compat:!0}));let c=l.current,[f,h]=te.useState({action:c.action,location:c.location}),m=te.useCallback(p=>{i===!1?h(p):te.startTransition(()=>h(p))},[i]);return te.useLayoutEffect(()=>c.listen(m),[c,m]),te.createElement(EM,{basename:s,children:e,location:f.location,navigationType:f.action,navigator:c,unstable_useTransitions:i})}var wv=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,ou=te.forwardRef(function({onClick:e,discover:i="render",prefetch:r="none",relative:l,reloadDocument:c,replace:f,state:h,target:m,to:p,preventScrollReset:v,viewTransition:_,unstable_defaultShouldRevalidate:S,...M},E){let{basename:T,unstable_useTransitions:g}=te.useContext(ni),x=typeof p=="string"&&wv.test(p),U=_v(p,T);p=U.to;let N=oM(p,{relative:l}),[O,L,I]=VM(r,M),F=JM(p,{replace:f,state:h,target:m,preventScrollReset:v,relative:l,viewTransition:_,unstable_defaultShouldRevalidate:S,unstable_useTransitions:g});function j(D){e&&e(D),D.defaultPrevented||F(D)}let w=te.createElement("a",{...M,...I,href:U.absoluteURL||N,onClick:U.isExternal||c?e:j,ref:qM(E,L),target:m,"data-discover":!x&&i==="render"?"true":void 0});return O&&!x?te.createElement(te.Fragment,null,w,te.createElement(kM,{page:N})):w});ou.displayName="Link";var ZM=te.forwardRef(function({"aria-current":e="page",caseSensitive:i=!1,className:r="",end:l=!1,style:c,to:f,viewTransition:h,children:m,...p},v){let _=al(f,{relative:p.relative}),S=sr(),M=te.useContext(ru),{navigator:E,basename:T}=te.useContext(ni),g=M!=null&&iE(_)&&h===!0,x=E.encodeLocation?E.encodeLocation(_).pathname:_.pathname,U=S.pathname,N=M&&M.navigation&&M.navigation.location?M.navigation.location.pathname:null;i||(U=U.toLowerCase(),N=N?N.toLowerCase():null,x=x.toLowerCase()),N&&T&&(N=ya(N,T)||N);const O=x!=="/"&&x.endsWith("/")?x.length-1:x.length;let L=U===x||!l&&U.startsWith(x)&&U.charAt(O)==="/",I=N!=null&&(N===x||!l&&N.startsWith(x)&&N.charAt(x.length)==="/"),F={isActive:L,isPending:I,isTransitioning:g},j=L?e:void 0,w;typeof r=="function"?w=r(F):w=[r,L?"active":null,I?"pending":null,g?"transitioning":null].filter(Boolean).join(" ");let D=typeof c=="function"?c(F):c;return te.createElement(ou,{...p,"aria-current":j,className:w,ref:v,style:D,to:f,viewTransition:h},typeof m=="function"?m(F):m)});ZM.displayName="NavLink";var KM=te.forwardRef(({discover:s="render",fetcherKey:e,navigate:i,reloadDocument:r,replace:l,state:c,method:f=Yc,action:h,onSubmit:m,relative:p,preventScrollReset:v,viewTransition:_,unstable_defaultShouldRevalidate:S,...M},E)=>{let{unstable_useTransitions:T}=te.useContext(ni),g=tE(),x=nE(h,{relative:p}),U=f.toLowerCase()==="get"?"get":"post",N=typeof h=="string"&&wv.test(h),O=L=>{if(m&&m(L),L.defaultPrevented)return;L.preventDefault();let I=L.nativeEvent.submitter,F=I?.getAttribute("formmethod")||f,j=()=>g(I||L.currentTarget,{fetcherKey:e,method:F,navigate:i,replace:l,state:c,relative:p,preventScrollReset:v,viewTransition:_,unstable_defaultShouldRevalidate:S});T&&i!==!1?te.startTransition(()=>j()):j()};return te.createElement("form",{ref:E,method:U,action:x,onSubmit:r?m:O,...M,"data-discover":!N&&s==="render"?"true":void 0})});KM.displayName="Form";function QM(s){return`${s} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function Dv(s){let e=te.useContext(Vs);return Jt(e,QM(s)),e}function JM(s,{target:e,replace:i,state:r,preventScrollReset:l,relative:c,viewTransition:f,unstable_defaultShouldRevalidate:h,unstable_useTransitions:m}={}){let p=Ev(),v=sr(),_=al(s,{relative:c});return te.useCallback(S=>{if(wM(S,e)){S.preventDefault();let M=i!==void 0?i:Jo(v)===Jo(_),E=()=>p(s,{replace:M,state:r,preventScrollReset:l,relative:c,viewTransition:f,unstable_defaultShouldRevalidate:h});m?te.startTransition(()=>E()):E()}},[v,p,_,i,r,e,s,l,c,f,h,m])}var $M=0,eE=()=>`__${String(++$M)}__`;function tE(){let{router:s}=Dv("useSubmit"),{basename:e}=te.useContext(ni),i=xM(),r=s.fetch,l=s.navigate;return te.useCallback(async(c,f={})=>{let{action:h,method:m,encType:p,formData:v,body:_}=LM(c,e);if(f.navigate===!1){let S=f.fetcherKey||eE();await r(S,i,f.action||h,{unstable_defaultShouldRevalidate:f.unstable_defaultShouldRevalidate,preventScrollReset:f.preventScrollReset,formData:v,body:_,formMethod:f.method||m,formEncType:f.encType||p,flushSync:f.flushSync})}else await l(f.action||h,{unstable_defaultShouldRevalidate:f.unstable_defaultShouldRevalidate,preventScrollReset:f.preventScrollReset,formData:v,body:_,formMethod:f.method||m,formEncType:f.encType||p,replace:f.replace,state:f.state,fromRouteId:i,flushSync:f.flushSync,viewTransition:f.viewTransition})},[r,l,e,i])}function nE(s,{relative:e}={}){let{basename:i}=te.useContext(ni),r=te.useContext(Di);Jt(r,"useFormAction must be used inside a RouteContext");let[l]=r.matches.slice(-1),c={...al(s||".",{relative:e})},f=sr();if(s==null){c.search=f.search;let h=new URLSearchParams(c.search),m=h.getAll("index");if(m.some(v=>v==="")){h.delete("index"),m.filter(_=>_).forEach(_=>h.append("index",_));let v=h.toString();c.search=v?`?${v}`:""}}return(!s||s===".")&&l.route.index&&(c.search=c.search?c.search.replace(/^\?/,"?index&"):"?index"),i!=="/"&&(c.pathname=c.pathname==="/"?i:_a([i,c.pathname])),Jo(c)}function iE(s,{relative:e}={}){let i=te.useContext(xv);Jt(i!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:r}=Dv("useViewTransitionState"),l=al(s,{relative:e});if(!i.isTransitioning)return!1;let c=ya(i.currentLocation.pathname,r)||i.currentLocation.pathname,f=ya(i.nextLocation.pathname,r)||i.nextLocation.pathname;return tu(l.pathname,f)!=null||tu(l.pathname,c)!=null}const zr=[{id:"fern",name:"Barnsley Fern",subtitle:"3D IFS Fractal",icon:"🌿",description:"The Barnsley Fern is a fractal that resembles a natural fern leaf, discovered by British mathematician Michael Barnsley in 1984. It's one of the most famous examples of an Iterated Function System (IFS).",howItWorks:"The fern is generated using four affine transformations (functions), each applied with a certain probability. Each transformation scales, rotates, and translates points in 3D space. Starting from a seed point, we randomly choose one of the four transforms, apply it, plot the new point, and repeat millions of times.",formula:`1. Stem (1%)   → shrinks to base point
              2. Leaflets (85%) → main growth
              3. Left leaflet (7%) → left branch
              4. Right leaflet (7%) → right branch`},{id:"mandelbrot",name:"Mandelbrot Set",subtitle:"Complex Plane Fractal",icon:"∞",description:"The Mandelbrot set is one of the most famous fractals, discovered by mathematician Benoit Mandelbrot in 1980. It lives on the complex plane and exhibits infinite complexity at its boundary.",howItWorks:'For each point c on the complex plane, we iterate the simple formula: z(n+1) = z(n)² + c. Starting with z₀ = 0, we check whether this sequence stays bounded or "escapes" to infinity. Points where it stays bounded are inside the set (colored black).',formula:`z = z² + c
where z and c are complex numbers`},{id:"burningship",name:"Burning Ship",subtitle:"Complex Plane Fractal",icon:"🔥",description:"The Burning Ship fractal is a variant of the Mandelbrot set, discovered by David Ayers in 1991. It resembles a burning ship when visualized, hence its name.",howItWorks:'Similar to the Mandelbrot set, we iterate: z(n+1) = z(n)² + c. However, before squaring z, we take the absolute values of its real and imaginary parts. This creates the distinctive "burning ship" appearance with towering columns.',formula:"z = (|Re(z)| + i|Im(z)|)² + c"},{id:"newton",name:"Newton Fractal",subtitle:"Root-Finding Fractal",icon:"✴",description:"The Newton fractal visualizes the basins of attraction of a function's roots using Newton's method. It was popularized by mathematician John Hubbard and produces intricate, colorful patterns.",howItWorks:"Starting from each point z, we iteratively apply Newton's method: z = z - f(z)/f'(z). Different starting points converge to different roots, and the boundaries between basins form the fractal. Here we use z³ - 1 = 0, which has three roots at the vertices of an equilateral triangle.",formula:`z = z - f(z)/f'(z)
where f(z) = z³ - 1`},{id:"lyapunov",name:"Lyapunov",subtitle:"Chaos Fractal",icon:"🌀",description:"The Lyapunov fractal visualizes the stability of chaotic systems. Named after mathematician Alexander Lyapunov, these fractals reveal the boundary between order and chaos in the logistic map with varying parameters.",howItWorks:"For each point (a, b) in parameter space, we iterate the logistic map with alternating parameters: x(n+1) = r*x(n)*(1-x(n)), where r alternates between a and b. We compute the Lyapunov exponent to determine stability. Negative values (blue) indicate stable behavior, positive values (yellow/red) indicate chaos.",formula:`x = r*x*(1-x)
λ = (1/n)*Σ log|r - 2rx|
λ < 0: stable, λ > 0: chaos`}],aE=s=>zr.find(e=>e.id===s);function rE(){return X.jsxs("div",{className:"home",children:[X.jsx("h1",{className:"home-title",children:"Fractal Explorer"}),X.jsx("p",{className:"home-subtitle",children:"Interactive Mathematical Art"}),X.jsx("div",{className:"fractal-grid",children:zr.map(s=>X.jsxs(ou,{to:`/${s.id}`,className:"fractal-card",children:[X.jsx("div",{className:"card-icon",children:s.icon}),X.jsx("div",{className:"card-title",children:s.name}),X.jsx("div",{className:"card-tagline",children:s.subtitle})]},s.id))})]})}const cp="182",sE=0,g_=1,oE=2,Zc=1,lE=2,Ko=3,rr=0,Wn=1,Bi=2,va=0,Os=1,rh=2,__=3,v_=4,cE=5,Lr=100,uE=101,fE=102,dE=103,hE=104,pE=200,mE=201,gE=202,_E=203,sh=204,oh=205,vE=206,xE=207,SE=208,yE=209,ME=210,EE=211,bE=212,TE=213,AE=214,lh=0,ch=1,uh=2,Fs=3,fh=4,dh=5,hh=6,ph=7,Uv=0,RE=1,CE=2,Vi=0,Lv=1,Nv=2,Ov=3,Pv=4,Fv=5,zv=6,Iv=7,Bv=300,Fr=301,zs=302,mh=303,gh=304,lu=306,_h=1e3,ga=1001,vh=1002,wn=1003,wE=1004,bc=1005,On=1006,Td=1007,Or=1008,gi=1009,Hv=1010,Gv=1011,$o=1012,up=1013,Xi=1014,Hi=1015,Ma=1016,fp=1017,dp=1018,el=1020,Vv=35902,kv=35899,Xv=1021,Wv=1022,Ci=1023,Ea=1026,Pr=1027,qv=1028,hp=1029,Is=1030,pp=1031,mp=1033,Kc=33776,Qc=33777,Jc=33778,$c=33779,xh=35840,Sh=35841,yh=35842,Mh=35843,Eh=36196,bh=37492,Th=37496,Ah=37488,Rh=37489,Ch=37490,wh=37491,Dh=37808,Uh=37809,Lh=37810,Nh=37811,Oh=37812,Ph=37813,Fh=37814,zh=37815,Ih=37816,Bh=37817,Hh=37818,Gh=37819,Vh=37820,kh=37821,Xh=36492,Wh=36494,qh=36495,Yh=36283,jh=36284,Zh=36285,Kh=36286,DE=3200,UE=0,LE=1,ir="",pi="srgb",Bs="srgb-linear",nu="linear",Ht="srgb",Ss=7680,x_=519,NE=512,OE=513,PE=514,gp=515,FE=516,zE=517,_p=518,IE=519,S_=35044,y_=35048,M_="300 es",Gi=2e3,iu=2001;function Yv(s){for(let e=s.length-1;e>=0;--e)if(s[e]>=65535)return!0;return!1}function au(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function BE(){const s=au("canvas");return s.style.display="block",s}const E_={};function b_(...s){const e="THREE."+s.shift();console.log(e,...s)}function ct(...s){const e="THREE."+s.shift();console.warn(e,...s)}function Ct(...s){const e="THREE."+s.shift();console.error(e,...s)}function tl(...s){const e=s.join(" ");e in E_||(E_[e]=!0,ct(...s))}function HE(s,e,i){return new Promise(function(r,l){function c(){switch(s.clientWaitSync(e,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:l();break;case s.TIMEOUT_EXPIRED:setTimeout(c,i);break;default:r()}}setTimeout(c,i)})}class Xs{addEventListener(e,i){this._listeners===void 0&&(this._listeners={});const r=this._listeners;r[e]===void 0&&(r[e]=[]),r[e].indexOf(i)===-1&&r[e].push(i)}hasEventListener(e,i){const r=this._listeners;return r===void 0?!1:r[e]!==void 0&&r[e].indexOf(i)!==-1}removeEventListener(e,i){const r=this._listeners;if(r===void 0)return;const l=r[e];if(l!==void 0){const c=l.indexOf(i);c!==-1&&l.splice(c,1)}}dispatchEvent(e){const i=this._listeners;if(i===void 0)return;const r=i[e.type];if(r!==void 0){e.target=this;const l=r.slice(0);for(let c=0,f=l.length;c<f;c++)l[c].call(this,e);e.target=null}}}const Ln=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Ad=Math.PI/180,Qh=180/Math.PI;function rl(){const s=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(Ln[s&255]+Ln[s>>8&255]+Ln[s>>16&255]+Ln[s>>24&255]+"-"+Ln[e&255]+Ln[e>>8&255]+"-"+Ln[e>>16&15|64]+Ln[e>>24&255]+"-"+Ln[i&63|128]+Ln[i>>8&255]+"-"+Ln[i>>16&255]+Ln[i>>24&255]+Ln[r&255]+Ln[r>>8&255]+Ln[r>>16&255]+Ln[r>>24&255]).toLowerCase()}function Mt(s,e,i){return Math.max(e,Math.min(i,s))}function GE(s,e){return(s%e+e)%e}function Rd(s,e,i){return(1-i)*s+i*e}function ko(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function Xn(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}class Xt{constructor(e=0,i=0){Xt.prototype.isVector2=!0,this.x=e,this.y=i}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,i){return this.x=e,this.y=i,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const i=this.x,r=this.y,l=e.elements;return this.x=l[0]*i+l[3]*r+l[6],this.y=l[1]*i+l[4]*r+l[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,i){return this.x=Mt(this.x,e.x,i.x),this.y=Mt(this.y,e.y,i.y),this}clampScalar(e,i){return this.x=Mt(this.x,e,i),this.y=Mt(this.y,e,i),this}clampLength(e,i){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Mt(r,e,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const i=Math.sqrt(this.lengthSq()*e.lengthSq());if(i===0)return Math.PI/2;const r=this.dot(e)/i;return Math.acos(Mt(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const i=this.x-e.x,r=this.y-e.y;return i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this}lerpVectors(e,i,r){return this.x=e.x+(i.x-e.x)*r,this.y=e.y+(i.y-e.y)*r,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this}rotateAround(e,i){const r=Math.cos(i),l=Math.sin(i),c=this.x-e.x,f=this.y-e.y;return this.x=c*r-f*l+e.x,this.y=c*l+f*r+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class sl{constructor(e=0,i=0,r=0,l=1){this.isQuaternion=!0,this._x=e,this._y=i,this._z=r,this._w=l}static slerpFlat(e,i,r,l,c,f,h){let m=r[l+0],p=r[l+1],v=r[l+2],_=r[l+3],S=c[f+0],M=c[f+1],E=c[f+2],T=c[f+3];if(h<=0){e[i+0]=m,e[i+1]=p,e[i+2]=v,e[i+3]=_;return}if(h>=1){e[i+0]=S,e[i+1]=M,e[i+2]=E,e[i+3]=T;return}if(_!==T||m!==S||p!==M||v!==E){let g=m*S+p*M+v*E+_*T;g<0&&(S=-S,M=-M,E=-E,T=-T,g=-g);let x=1-h;if(g<.9995){const U=Math.acos(g),N=Math.sin(U);x=Math.sin(x*U)/N,h=Math.sin(h*U)/N,m=m*x+S*h,p=p*x+M*h,v=v*x+E*h,_=_*x+T*h}else{m=m*x+S*h,p=p*x+M*h,v=v*x+E*h,_=_*x+T*h;const U=1/Math.sqrt(m*m+p*p+v*v+_*_);m*=U,p*=U,v*=U,_*=U}}e[i]=m,e[i+1]=p,e[i+2]=v,e[i+3]=_}static multiplyQuaternionsFlat(e,i,r,l,c,f){const h=r[l],m=r[l+1],p=r[l+2],v=r[l+3],_=c[f],S=c[f+1],M=c[f+2],E=c[f+3];return e[i]=h*E+v*_+m*M-p*S,e[i+1]=m*E+v*S+p*_-h*M,e[i+2]=p*E+v*M+h*S-m*_,e[i+3]=v*E-h*_-m*S-p*M,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,i,r,l){return this._x=e,this._y=i,this._z=r,this._w=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,i=!0){const r=e._x,l=e._y,c=e._z,f=e._order,h=Math.cos,m=Math.sin,p=h(r/2),v=h(l/2),_=h(c/2),S=m(r/2),M=m(l/2),E=m(c/2);switch(f){case"XYZ":this._x=S*v*_+p*M*E,this._y=p*M*_-S*v*E,this._z=p*v*E+S*M*_,this._w=p*v*_-S*M*E;break;case"YXZ":this._x=S*v*_+p*M*E,this._y=p*M*_-S*v*E,this._z=p*v*E-S*M*_,this._w=p*v*_+S*M*E;break;case"ZXY":this._x=S*v*_-p*M*E,this._y=p*M*_+S*v*E,this._z=p*v*E+S*M*_,this._w=p*v*_-S*M*E;break;case"ZYX":this._x=S*v*_-p*M*E,this._y=p*M*_+S*v*E,this._z=p*v*E-S*M*_,this._w=p*v*_+S*M*E;break;case"YZX":this._x=S*v*_+p*M*E,this._y=p*M*_+S*v*E,this._z=p*v*E-S*M*_,this._w=p*v*_-S*M*E;break;case"XZY":this._x=S*v*_-p*M*E,this._y=p*M*_-S*v*E,this._z=p*v*E+S*M*_,this._w=p*v*_+S*M*E;break;default:ct("Quaternion: .setFromEuler() encountered an unknown order: "+f)}return i===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,i){const r=i/2,l=Math.sin(r);return this._x=e.x*l,this._y=e.y*l,this._z=e.z*l,this._w=Math.cos(r),this._onChangeCallback(),this}setFromRotationMatrix(e){const i=e.elements,r=i[0],l=i[4],c=i[8],f=i[1],h=i[5],m=i[9],p=i[2],v=i[6],_=i[10],S=r+h+_;if(S>0){const M=.5/Math.sqrt(S+1);this._w=.25/M,this._x=(v-m)*M,this._y=(c-p)*M,this._z=(f-l)*M}else if(r>h&&r>_){const M=2*Math.sqrt(1+r-h-_);this._w=(v-m)/M,this._x=.25*M,this._y=(l+f)/M,this._z=(c+p)/M}else if(h>_){const M=2*Math.sqrt(1+h-r-_);this._w=(c-p)/M,this._x=(l+f)/M,this._y=.25*M,this._z=(m+v)/M}else{const M=2*Math.sqrt(1+_-r-h);this._w=(f-l)/M,this._x=(c+p)/M,this._y=(m+v)/M,this._z=.25*M}return this._onChangeCallback(),this}setFromUnitVectors(e,i){let r=e.dot(i)+1;return r<1e-8?(r=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=r):(this._x=0,this._y=-e.z,this._z=e.y,this._w=r)):(this._x=e.y*i.z-e.z*i.y,this._y=e.z*i.x-e.x*i.z,this._z=e.x*i.y-e.y*i.x,this._w=r),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Mt(this.dot(e),-1,1)))}rotateTowards(e,i){const r=this.angleTo(e);if(r===0)return this;const l=Math.min(1,i/r);return this.slerp(e,l),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,i){const r=e._x,l=e._y,c=e._z,f=e._w,h=i._x,m=i._y,p=i._z,v=i._w;return this._x=r*v+f*h+l*p-c*m,this._y=l*v+f*m+c*h-r*p,this._z=c*v+f*p+r*m-l*h,this._w=f*v-r*h-l*m-c*p,this._onChangeCallback(),this}slerp(e,i){if(i<=0)return this;if(i>=1)return this.copy(e);let r=e._x,l=e._y,c=e._z,f=e._w,h=this.dot(e);h<0&&(r=-r,l=-l,c=-c,f=-f,h=-h);let m=1-i;if(h<.9995){const p=Math.acos(h),v=Math.sin(p);m=Math.sin(m*p)/v,i=Math.sin(i*p)/v,this._x=this._x*m+r*i,this._y=this._y*m+l*i,this._z=this._z*m+c*i,this._w=this._w*m+f*i,this._onChangeCallback()}else this._x=this._x*m+r*i,this._y=this._y*m+l*i,this._z=this._z*m+c*i,this._w=this._w*m+f*i,this.normalize();return this}slerpQuaternions(e,i,r){return this.copy(e).slerp(i,r)}random(){const e=2*Math.PI*Math.random(),i=2*Math.PI*Math.random(),r=Math.random(),l=Math.sqrt(1-r),c=Math.sqrt(r);return this.set(l*Math.sin(e),l*Math.cos(e),c*Math.sin(i),c*Math.cos(i))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,i=0){return this._x=e[i],this._y=e[i+1],this._z=e[i+2],this._w=e[i+3],this._onChangeCallback(),this}toArray(e=[],i=0){return e[i]=this._x,e[i+1]=this._y,e[i+2]=this._z,e[i+3]=this._w,e}fromBufferAttribute(e,i){return this._x=e.getX(i),this._y=e.getY(i),this._z=e.getZ(i),this._w=e.getW(i),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class ue{constructor(e=0,i=0,r=0){ue.prototype.isVector3=!0,this.x=e,this.y=i,this.z=r}set(e,i,r){return r===void 0&&(r=this.z),this.x=e,this.y=i,this.z=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this.z=e.z+i.z,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this.z+=e.z*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this.z=e.z-i.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,i){return this.x=e.x*i.x,this.y=e.y*i.y,this.z=e.z*i.z,this}applyEuler(e){return this.applyQuaternion(T_.setFromEuler(e))}applyAxisAngle(e,i){return this.applyQuaternion(T_.setFromAxisAngle(e,i))}applyMatrix3(e){const i=this.x,r=this.y,l=this.z,c=e.elements;return this.x=c[0]*i+c[3]*r+c[6]*l,this.y=c[1]*i+c[4]*r+c[7]*l,this.z=c[2]*i+c[5]*r+c[8]*l,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const i=this.x,r=this.y,l=this.z,c=e.elements,f=1/(c[3]*i+c[7]*r+c[11]*l+c[15]);return this.x=(c[0]*i+c[4]*r+c[8]*l+c[12])*f,this.y=(c[1]*i+c[5]*r+c[9]*l+c[13])*f,this.z=(c[2]*i+c[6]*r+c[10]*l+c[14])*f,this}applyQuaternion(e){const i=this.x,r=this.y,l=this.z,c=e.x,f=e.y,h=e.z,m=e.w,p=2*(f*l-h*r),v=2*(h*i-c*l),_=2*(c*r-f*i);return this.x=i+m*p+f*_-h*v,this.y=r+m*v+h*p-c*_,this.z=l+m*_+c*v-f*p,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const i=this.x,r=this.y,l=this.z,c=e.elements;return this.x=c[0]*i+c[4]*r+c[8]*l,this.y=c[1]*i+c[5]*r+c[9]*l,this.z=c[2]*i+c[6]*r+c[10]*l,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,i){return this.x=Mt(this.x,e.x,i.x),this.y=Mt(this.y,e.y,i.y),this.z=Mt(this.z,e.z,i.z),this}clampScalar(e,i){return this.x=Mt(this.x,e,i),this.y=Mt(this.y,e,i),this.z=Mt(this.z,e,i),this}clampLength(e,i){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Mt(r,e,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this.z+=(e.z-this.z)*i,this}lerpVectors(e,i,r){return this.x=e.x+(i.x-e.x)*r,this.y=e.y+(i.y-e.y)*r,this.z=e.z+(i.z-e.z)*r,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,i){const r=e.x,l=e.y,c=e.z,f=i.x,h=i.y,m=i.z;return this.x=l*m-c*h,this.y=c*f-r*m,this.z=r*h-l*f,this}projectOnVector(e){const i=e.lengthSq();if(i===0)return this.set(0,0,0);const r=e.dot(this)/i;return this.copy(e).multiplyScalar(r)}projectOnPlane(e){return Cd.copy(this).projectOnVector(e),this.sub(Cd)}reflect(e){return this.sub(Cd.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const i=Math.sqrt(this.lengthSq()*e.lengthSq());if(i===0)return Math.PI/2;const r=this.dot(e)/i;return Math.acos(Mt(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const i=this.x-e.x,r=this.y-e.y,l=this.z-e.z;return i*i+r*r+l*l}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,i,r){const l=Math.sin(i)*e;return this.x=l*Math.sin(r),this.y=Math.cos(i)*e,this.z=l*Math.cos(r),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,i,r){return this.x=e*Math.sin(i),this.y=r,this.z=e*Math.cos(i),this}setFromMatrixPosition(e){const i=e.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this}setFromMatrixScale(e){const i=this.setFromMatrixColumn(e,0).length(),r=this.setFromMatrixColumn(e,1).length(),l=this.setFromMatrixColumn(e,2).length();return this.x=i,this.y=r,this.z=l,this}setFromMatrixColumn(e,i){return this.fromArray(e.elements,i*4)}setFromMatrix3Column(e,i){return this.fromArray(e.elements,i*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this.z=e[i+2],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e[i+2]=this.z,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this.z=e.getZ(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,i=Math.random()*2-1,r=Math.sqrt(1-i*i);return this.x=r*Math.cos(e),this.y=i,this.z=r*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Cd=new ue,T_=new sl;class pt{constructor(e,i,r,l,c,f,h,m,p){pt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,i,r,l,c,f,h,m,p)}set(e,i,r,l,c,f,h,m,p){const v=this.elements;return v[0]=e,v[1]=l,v[2]=h,v[3]=i,v[4]=c,v[5]=m,v[6]=r,v[7]=f,v[8]=p,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const i=this.elements,r=e.elements;return i[0]=r[0],i[1]=r[1],i[2]=r[2],i[3]=r[3],i[4]=r[4],i[5]=r[5],i[6]=r[6],i[7]=r[7],i[8]=r[8],this}extractBasis(e,i,r){return e.setFromMatrix3Column(this,0),i.setFromMatrix3Column(this,1),r.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const i=e.elements;return this.set(i[0],i[4],i[8],i[1],i[5],i[9],i[2],i[6],i[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,i){const r=e.elements,l=i.elements,c=this.elements,f=r[0],h=r[3],m=r[6],p=r[1],v=r[4],_=r[7],S=r[2],M=r[5],E=r[8],T=l[0],g=l[3],x=l[6],U=l[1],N=l[4],O=l[7],L=l[2],I=l[5],F=l[8];return c[0]=f*T+h*U+m*L,c[3]=f*g+h*N+m*I,c[6]=f*x+h*O+m*F,c[1]=p*T+v*U+_*L,c[4]=p*g+v*N+_*I,c[7]=p*x+v*O+_*F,c[2]=S*T+M*U+E*L,c[5]=S*g+M*N+E*I,c[8]=S*x+M*O+E*F,this}multiplyScalar(e){const i=this.elements;return i[0]*=e,i[3]*=e,i[6]*=e,i[1]*=e,i[4]*=e,i[7]*=e,i[2]*=e,i[5]*=e,i[8]*=e,this}determinant(){const e=this.elements,i=e[0],r=e[1],l=e[2],c=e[3],f=e[4],h=e[5],m=e[6],p=e[7],v=e[8];return i*f*v-i*h*p-r*c*v+r*h*m+l*c*p-l*f*m}invert(){const e=this.elements,i=e[0],r=e[1],l=e[2],c=e[3],f=e[4],h=e[5],m=e[6],p=e[7],v=e[8],_=v*f-h*p,S=h*m-v*c,M=p*c-f*m,E=i*_+r*S+l*M;if(E===0)return this.set(0,0,0,0,0,0,0,0,0);const T=1/E;return e[0]=_*T,e[1]=(l*p-v*r)*T,e[2]=(h*r-l*f)*T,e[3]=S*T,e[4]=(v*i-l*m)*T,e[5]=(l*c-h*i)*T,e[6]=M*T,e[7]=(r*m-p*i)*T,e[8]=(f*i-r*c)*T,this}transpose(){let e;const i=this.elements;return e=i[1],i[1]=i[3],i[3]=e,e=i[2],i[2]=i[6],i[6]=e,e=i[5],i[5]=i[7],i[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const i=this.elements;return e[0]=i[0],e[1]=i[3],e[2]=i[6],e[3]=i[1],e[4]=i[4],e[5]=i[7],e[6]=i[2],e[7]=i[5],e[8]=i[8],this}setUvTransform(e,i,r,l,c,f,h){const m=Math.cos(c),p=Math.sin(c);return this.set(r*m,r*p,-r*(m*f+p*h)+f+e,-l*p,l*m,-l*(-p*f+m*h)+h+i,0,0,1),this}scale(e,i){return this.premultiply(wd.makeScale(e,i)),this}rotate(e){return this.premultiply(wd.makeRotation(-e)),this}translate(e,i){return this.premultiply(wd.makeTranslation(e,i)),this}makeTranslation(e,i){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,i,0,0,1),this}makeRotation(e){const i=Math.cos(e),r=Math.sin(e);return this.set(i,-r,0,r,i,0,0,0,1),this}makeScale(e,i){return this.set(e,0,0,0,i,0,0,0,1),this}equals(e){const i=this.elements,r=e.elements;for(let l=0;l<9;l++)if(i[l]!==r[l])return!1;return!0}fromArray(e,i=0){for(let r=0;r<9;r++)this.elements[r]=e[r+i];return this}toArray(e=[],i=0){const r=this.elements;return e[i]=r[0],e[i+1]=r[1],e[i+2]=r[2],e[i+3]=r[3],e[i+4]=r[4],e[i+5]=r[5],e[i+6]=r[6],e[i+7]=r[7],e[i+8]=r[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const wd=new pt,A_=new pt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),R_=new pt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function VE(){const s={enabled:!0,workingColorSpace:Bs,spaces:{},convert:function(l,c,f){return this.enabled===!1||c===f||!c||!f||(this.spaces[c].transfer===Ht&&(l.r=xa(l.r),l.g=xa(l.g),l.b=xa(l.b)),this.spaces[c].primaries!==this.spaces[f].primaries&&(l.applyMatrix3(this.spaces[c].toXYZ),l.applyMatrix3(this.spaces[f].fromXYZ)),this.spaces[f].transfer===Ht&&(l.r=Ps(l.r),l.g=Ps(l.g),l.b=Ps(l.b))),l},workingToColorSpace:function(l,c){return this.convert(l,this.workingColorSpace,c)},colorSpaceToWorking:function(l,c){return this.convert(l,c,this.workingColorSpace)},getPrimaries:function(l){return this.spaces[l].primaries},getTransfer:function(l){return l===ir?nu:this.spaces[l].transfer},getToneMappingMode:function(l){return this.spaces[l].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(l,c=this.workingColorSpace){return l.fromArray(this.spaces[c].luminanceCoefficients)},define:function(l){Object.assign(this.spaces,l)},_getMatrix:function(l,c,f){return l.copy(this.spaces[c].toXYZ).multiply(this.spaces[f].fromXYZ)},_getDrawingBufferColorSpace:function(l){return this.spaces[l].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(l=this.workingColorSpace){return this.spaces[l].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(l,c){return tl("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),s.workingToColorSpace(l,c)},toWorkingColorSpace:function(l,c){return tl("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),s.colorSpaceToWorking(l,c)}},e=[.64,.33,.3,.6,.15,.06],i=[.2126,.7152,.0722],r=[.3127,.329];return s.define({[Bs]:{primaries:e,whitePoint:r,transfer:nu,toXYZ:A_,fromXYZ:R_,luminanceCoefficients:i,workingColorSpaceConfig:{unpackColorSpace:pi},outputColorSpaceConfig:{drawingBufferColorSpace:pi}},[pi]:{primaries:e,whitePoint:r,transfer:Ht,toXYZ:A_,fromXYZ:R_,luminanceCoefficients:i,outputColorSpaceConfig:{drawingBufferColorSpace:pi}}}),s}const Tt=VE();function xa(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function Ps(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}let ys;class kE{static getDataURL(e,i="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let r;if(e instanceof HTMLCanvasElement)r=e;else{ys===void 0&&(ys=au("canvas")),ys.width=e.width,ys.height=e.height;const l=ys.getContext("2d");e instanceof ImageData?l.putImageData(e,0,0):l.drawImage(e,0,0,e.width,e.height),r=ys}return r.toDataURL(i)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const i=au("canvas");i.width=e.width,i.height=e.height;const r=i.getContext("2d");r.drawImage(e,0,0,e.width,e.height);const l=r.getImageData(0,0,e.width,e.height),c=l.data;for(let f=0;f<c.length;f++)c[f]=xa(c[f]/255)*255;return r.putImageData(l,0,0),i}else if(e.data){const i=e.data.slice(0);for(let r=0;r<i.length;r++)i instanceof Uint8Array||i instanceof Uint8ClampedArray?i[r]=Math.floor(xa(i[r]/255)*255):i[r]=xa(i[r]);return{data:i,width:e.width,height:e.height}}else return ct("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let XE=0;class vp{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:XE++}),this.uuid=rl(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const i=this.data;return typeof HTMLVideoElement<"u"&&i instanceof HTMLVideoElement?e.set(i.videoWidth,i.videoHeight,0):typeof VideoFrame<"u"&&i instanceof VideoFrame?e.set(i.displayHeight,i.displayWidth,0):i!==null?e.set(i.width,i.height,i.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const i=e===void 0||typeof e=="string";if(!i&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const r={uuid:this.uuid,url:""},l=this.data;if(l!==null){let c;if(Array.isArray(l)){c=[];for(let f=0,h=l.length;f<h;f++)l[f].isDataTexture?c.push(Dd(l[f].image)):c.push(Dd(l[f]))}else c=Dd(l);r.url=c}return i||(e.images[this.uuid]=r),r}}function Dd(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?kE.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(ct("Texture: Unable to serialize Texture."),{})}let WE=0;const Ud=new ue;class zn extends Xs{constructor(e=zn.DEFAULT_IMAGE,i=zn.DEFAULT_MAPPING,r=ga,l=ga,c=On,f=Or,h=Ci,m=gi,p=zn.DEFAULT_ANISOTROPY,v=ir){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:WE++}),this.uuid=rl(),this.name="",this.source=new vp(e),this.mipmaps=[],this.mapping=i,this.channel=0,this.wrapS=r,this.wrapT=l,this.magFilter=c,this.minFilter=f,this.anisotropy=p,this.format=h,this.internalFormat=null,this.type=m,this.offset=new Xt(0,0),this.repeat=new Xt(1,1),this.center=new Xt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new pt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=v,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(Ud).x}get height(){return this.source.getSize(Ud).y}get depth(){return this.source.getSize(Ud).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,i){this.updateRanges.push({start:e,count:i})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const i in e){const r=e[i];if(r===void 0){ct(`Texture.setValues(): parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){ct(`Texture.setValues(): property '${i}' does not exist.`);continue}l&&r&&l.isVector2&&r.isVector2||l&&r&&l.isVector3&&r.isVector3||l&&r&&l.isMatrix3&&r.isMatrix3?l.copy(r):this[i]=r}}toJSON(e){const i=e===void 0||typeof e=="string";if(!i&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const r={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(r.userData=this.userData),i||(e.textures[this.uuid]=r),r}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Bv)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case _h:e.x=e.x-Math.floor(e.x);break;case ga:e.x=e.x<0?0:1;break;case vh:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case _h:e.y=e.y-Math.floor(e.y);break;case ga:e.y=e.y<0?0:1;break;case vh:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}zn.DEFAULT_IMAGE=null;zn.DEFAULT_MAPPING=Bv;zn.DEFAULT_ANISOTROPY=1;class rn{constructor(e=0,i=0,r=0,l=1){rn.prototype.isVector4=!0,this.x=e,this.y=i,this.z=r,this.w=l}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,i,r,l){return this.x=e,this.y=i,this.z=r,this.w=l,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;case 3:this.w=i;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this.z=e.z+i.z,this.w=e.w+i.w,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this.z+=e.z*i,this.w+=e.w*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this.z=e.z-i.z,this.w=e.w-i.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const i=this.x,r=this.y,l=this.z,c=this.w,f=e.elements;return this.x=f[0]*i+f[4]*r+f[8]*l+f[12]*c,this.y=f[1]*i+f[5]*r+f[9]*l+f[13]*c,this.z=f[2]*i+f[6]*r+f[10]*l+f[14]*c,this.w=f[3]*i+f[7]*r+f[11]*l+f[15]*c,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const i=Math.sqrt(1-e.w*e.w);return i<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/i,this.y=e.y/i,this.z=e.z/i),this}setAxisAngleFromRotationMatrix(e){let i,r,l,c;const m=e.elements,p=m[0],v=m[4],_=m[8],S=m[1],M=m[5],E=m[9],T=m[2],g=m[6],x=m[10];if(Math.abs(v-S)<.01&&Math.abs(_-T)<.01&&Math.abs(E-g)<.01){if(Math.abs(v+S)<.1&&Math.abs(_+T)<.1&&Math.abs(E+g)<.1&&Math.abs(p+M+x-3)<.1)return this.set(1,0,0,0),this;i=Math.PI;const N=(p+1)/2,O=(M+1)/2,L=(x+1)/2,I=(v+S)/4,F=(_+T)/4,j=(E+g)/4;return N>O&&N>L?N<.01?(r=0,l=.707106781,c=.707106781):(r=Math.sqrt(N),l=I/r,c=F/r):O>L?O<.01?(r=.707106781,l=0,c=.707106781):(l=Math.sqrt(O),r=I/l,c=j/l):L<.01?(r=.707106781,l=.707106781,c=0):(c=Math.sqrt(L),r=F/c,l=j/c),this.set(r,l,c,i),this}let U=Math.sqrt((g-E)*(g-E)+(_-T)*(_-T)+(S-v)*(S-v));return Math.abs(U)<.001&&(U=1),this.x=(g-E)/U,this.y=(_-T)/U,this.z=(S-v)/U,this.w=Math.acos((p+M+x-1)/2),this}setFromMatrixPosition(e){const i=e.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this.w=i[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,i){return this.x=Mt(this.x,e.x,i.x),this.y=Mt(this.y,e.y,i.y),this.z=Mt(this.z,e.z,i.z),this.w=Mt(this.w,e.w,i.w),this}clampScalar(e,i){return this.x=Mt(this.x,e,i),this.y=Mt(this.y,e,i),this.z=Mt(this.z,e,i),this.w=Mt(this.w,e,i),this}clampLength(e,i){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Mt(r,e,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this.z+=(e.z-this.z)*i,this.w+=(e.w-this.w)*i,this}lerpVectors(e,i,r){return this.x=e.x+(i.x-e.x)*r,this.y=e.y+(i.y-e.y)*r,this.z=e.z+(i.z-e.z)*r,this.w=e.w+(i.w-e.w)*r,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this.z=e[i+2],this.w=e[i+3],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e[i+2]=this.z,e[i+3]=this.w,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this.z=e.getZ(i),this.w=e.getW(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class qE extends Xs{constructor(e=1,i=1,r={}){super(),r=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:On,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},r),this.isRenderTarget=!0,this.width=e,this.height=i,this.depth=r.depth,this.scissor=new rn(0,0,e,i),this.scissorTest=!1,this.viewport=new rn(0,0,e,i);const l={width:e,height:i,depth:r.depth},c=new zn(l);this.textures=[];const f=r.count;for(let h=0;h<f;h++)this.textures[h]=c.clone(),this.textures[h].isRenderTargetTexture=!0,this.textures[h].renderTarget=this;this._setTextureOptions(r),this.depthBuffer=r.depthBuffer,this.stencilBuffer=r.stencilBuffer,this.resolveDepthBuffer=r.resolveDepthBuffer,this.resolveStencilBuffer=r.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=r.depthTexture,this.samples=r.samples,this.multiview=r.multiview}_setTextureOptions(e={}){const i={minFilter:On,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(i.mapping=e.mapping),e.wrapS!==void 0&&(i.wrapS=e.wrapS),e.wrapT!==void 0&&(i.wrapT=e.wrapT),e.wrapR!==void 0&&(i.wrapR=e.wrapR),e.magFilter!==void 0&&(i.magFilter=e.magFilter),e.minFilter!==void 0&&(i.minFilter=e.minFilter),e.format!==void 0&&(i.format=e.format),e.type!==void 0&&(i.type=e.type),e.anisotropy!==void 0&&(i.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(i.colorSpace=e.colorSpace),e.flipY!==void 0&&(i.flipY=e.flipY),e.generateMipmaps!==void 0&&(i.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(i.internalFormat=e.internalFormat);for(let r=0;r<this.textures.length;r++)this.textures[r].setValues(i)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,i,r=1){if(this.width!==e||this.height!==i||this.depth!==r){this.width=e,this.height=i,this.depth=r;for(let l=0,c=this.textures.length;l<c;l++)this.textures[l].image.width=e,this.textures[l].image.height=i,this.textures[l].image.depth=r,this.textures[l].isData3DTexture!==!0&&(this.textures[l].isArrayTexture=this.textures[l].image.depth>1);this.dispose()}this.viewport.set(0,0,e,i),this.scissor.set(0,0,e,i)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let i=0,r=e.textures.length;i<r;i++){this.textures[i]=e.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0,this.textures[i].renderTarget=this;const l=Object.assign({},e.textures[i].image);this.textures[i].source=new vp(l)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class ki extends qE{constructor(e=1,i=1,r={}){super(e,i,r),this.isWebGLRenderTarget=!0}}class jv extends zn{constructor(e=null,i=1,r=1,l=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:i,height:r,depth:l},this.magFilter=wn,this.minFilter=wn,this.wrapR=ga,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class YE extends zn{constructor(e=null,i=1,r=1,l=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:i,height:r,depth:l},this.magFilter=wn,this.minFilter=wn,this.wrapR=ga,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class ol{constructor(e=new ue(1/0,1/0,1/0),i=new ue(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=i}set(e,i){return this.min.copy(e),this.max.copy(i),this}setFromArray(e){this.makeEmpty();for(let i=0,r=e.length;i<r;i+=3)this.expandByPoint(bi.fromArray(e,i));return this}setFromBufferAttribute(e){this.makeEmpty();for(let i=0,r=e.count;i<r;i++)this.expandByPoint(bi.fromBufferAttribute(e,i));return this}setFromPoints(e){this.makeEmpty();for(let i=0,r=e.length;i<r;i++)this.expandByPoint(e[i]);return this}setFromCenterAndSize(e,i){const r=bi.copy(i).multiplyScalar(.5);return this.min.copy(e).sub(r),this.max.copy(e).add(r),this}setFromObject(e,i=!1){return this.makeEmpty(),this.expandByObject(e,i)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,i=!1){e.updateWorldMatrix(!1,!1);const r=e.geometry;if(r!==void 0){const c=r.getAttribute("position");if(i===!0&&c!==void 0&&e.isInstancedMesh!==!0)for(let f=0,h=c.count;f<h;f++)e.isMesh===!0?e.getVertexPosition(f,bi):bi.fromBufferAttribute(c,f),bi.applyMatrix4(e.matrixWorld),this.expandByPoint(bi);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Tc.copy(e.boundingBox)):(r.boundingBox===null&&r.computeBoundingBox(),Tc.copy(r.boundingBox)),Tc.applyMatrix4(e.matrixWorld),this.union(Tc)}const l=e.children;for(let c=0,f=l.length;c<f;c++)this.expandByObject(l[c],i);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,i){return i.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,bi),bi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let i,r;return e.normal.x>0?(i=e.normal.x*this.min.x,r=e.normal.x*this.max.x):(i=e.normal.x*this.max.x,r=e.normal.x*this.min.x),e.normal.y>0?(i+=e.normal.y*this.min.y,r+=e.normal.y*this.max.y):(i+=e.normal.y*this.max.y,r+=e.normal.y*this.min.y),e.normal.z>0?(i+=e.normal.z*this.min.z,r+=e.normal.z*this.max.z):(i+=e.normal.z*this.max.z,r+=e.normal.z*this.min.z),i<=-e.constant&&r>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Xo),Ac.subVectors(this.max,Xo),Ms.subVectors(e.a,Xo),Es.subVectors(e.b,Xo),bs.subVectors(e.c,Xo),Qa.subVectors(Es,Ms),Ja.subVectors(bs,Es),Tr.subVectors(Ms,bs);let i=[0,-Qa.z,Qa.y,0,-Ja.z,Ja.y,0,-Tr.z,Tr.y,Qa.z,0,-Qa.x,Ja.z,0,-Ja.x,Tr.z,0,-Tr.x,-Qa.y,Qa.x,0,-Ja.y,Ja.x,0,-Tr.y,Tr.x,0];return!Ld(i,Ms,Es,bs,Ac)||(i=[1,0,0,0,1,0,0,0,1],!Ld(i,Ms,Es,bs,Ac))?!1:(Rc.crossVectors(Qa,Ja),i=[Rc.x,Rc.y,Rc.z],Ld(i,Ms,Es,bs,Ac))}clampPoint(e,i){return i.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,bi).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(bi).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(fa[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),fa[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),fa[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),fa[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),fa[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),fa[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),fa[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),fa[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(fa),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const fa=[new ue,new ue,new ue,new ue,new ue,new ue,new ue,new ue],bi=new ue,Tc=new ol,Ms=new ue,Es=new ue,bs=new ue,Qa=new ue,Ja=new ue,Tr=new ue,Xo=new ue,Ac=new ue,Rc=new ue,Ar=new ue;function Ld(s,e,i,r,l){for(let c=0,f=s.length-3;c<=f;c+=3){Ar.fromArray(s,c);const h=l.x*Math.abs(Ar.x)+l.y*Math.abs(Ar.y)+l.z*Math.abs(Ar.z),m=e.dot(Ar),p=i.dot(Ar),v=r.dot(Ar);if(Math.max(-Math.max(m,p,v),Math.min(m,p,v))>h)return!1}return!0}const jE=new ol,Wo=new ue,Nd=new ue;class cu{constructor(e=new ue,i=-1){this.isSphere=!0,this.center=e,this.radius=i}set(e,i){return this.center.copy(e),this.radius=i,this}setFromPoints(e,i){const r=this.center;i!==void 0?r.copy(i):jE.setFromPoints(e).getCenter(r);let l=0;for(let c=0,f=e.length;c<f;c++)l=Math.max(l,r.distanceToSquared(e[c]));return this.radius=Math.sqrt(l),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const i=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=i*i}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,i){const r=this.center.distanceToSquared(e);return i.copy(e),r>this.radius*this.radius&&(i.sub(this.center).normalize(),i.multiplyScalar(this.radius).add(this.center)),i}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Wo.subVectors(e,this.center);const i=Wo.lengthSq();if(i>this.radius*this.radius){const r=Math.sqrt(i),l=(r-this.radius)*.5;this.center.addScaledVector(Wo,l/r),this.radius+=l}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Nd.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Wo.copy(e.center).add(Nd)),this.expandByPoint(Wo.copy(e.center).sub(Nd))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}const da=new ue,Od=new ue,Cc=new ue,$a=new ue,Pd=new ue,wc=new ue,Fd=new ue;class Zv{constructor(e=new ue,i=new ue(0,0,-1)){this.origin=e,this.direction=i}set(e,i){return this.origin.copy(e),this.direction.copy(i),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,i){return i.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,da)),this}closestPointToPoint(e,i){i.subVectors(e,this.origin);const r=i.dot(this.direction);return r<0?i.copy(this.origin):i.copy(this.origin).addScaledVector(this.direction,r)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const i=da.subVectors(e,this.origin).dot(this.direction);return i<0?this.origin.distanceToSquared(e):(da.copy(this.origin).addScaledVector(this.direction,i),da.distanceToSquared(e))}distanceSqToSegment(e,i,r,l){Od.copy(e).add(i).multiplyScalar(.5),Cc.copy(i).sub(e).normalize(),$a.copy(this.origin).sub(Od);const c=e.distanceTo(i)*.5,f=-this.direction.dot(Cc),h=$a.dot(this.direction),m=-$a.dot(Cc),p=$a.lengthSq(),v=Math.abs(1-f*f);let _,S,M,E;if(v>0)if(_=f*m-h,S=f*h-m,E=c*v,_>=0)if(S>=-E)if(S<=E){const T=1/v;_*=T,S*=T,M=_*(_+f*S+2*h)+S*(f*_+S+2*m)+p}else S=c,_=Math.max(0,-(f*S+h)),M=-_*_+S*(S+2*m)+p;else S=-c,_=Math.max(0,-(f*S+h)),M=-_*_+S*(S+2*m)+p;else S<=-E?(_=Math.max(0,-(-f*c+h)),S=_>0?-c:Math.min(Math.max(-c,-m),c),M=-_*_+S*(S+2*m)+p):S<=E?(_=0,S=Math.min(Math.max(-c,-m),c),M=S*(S+2*m)+p):(_=Math.max(0,-(f*c+h)),S=_>0?c:Math.min(Math.max(-c,-m),c),M=-_*_+S*(S+2*m)+p);else S=f>0?-c:c,_=Math.max(0,-(f*S+h)),M=-_*_+S*(S+2*m)+p;return r&&r.copy(this.origin).addScaledVector(this.direction,_),l&&l.copy(Od).addScaledVector(Cc,S),M}intersectSphere(e,i){da.subVectors(e.center,this.origin);const r=da.dot(this.direction),l=da.dot(da)-r*r,c=e.radius*e.radius;if(l>c)return null;const f=Math.sqrt(c-l),h=r-f,m=r+f;return m<0?null:h<0?this.at(m,i):this.at(h,i)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const i=e.normal.dot(this.direction);if(i===0)return e.distanceToPoint(this.origin)===0?0:null;const r=-(this.origin.dot(e.normal)+e.constant)/i;return r>=0?r:null}intersectPlane(e,i){const r=this.distanceToPlane(e);return r===null?null:this.at(r,i)}intersectsPlane(e){const i=e.distanceToPoint(this.origin);return i===0||e.normal.dot(this.direction)*i<0}intersectBox(e,i){let r,l,c,f,h,m;const p=1/this.direction.x,v=1/this.direction.y,_=1/this.direction.z,S=this.origin;return p>=0?(r=(e.min.x-S.x)*p,l=(e.max.x-S.x)*p):(r=(e.max.x-S.x)*p,l=(e.min.x-S.x)*p),v>=0?(c=(e.min.y-S.y)*v,f=(e.max.y-S.y)*v):(c=(e.max.y-S.y)*v,f=(e.min.y-S.y)*v),r>f||c>l||((c>r||isNaN(r))&&(r=c),(f<l||isNaN(l))&&(l=f),_>=0?(h=(e.min.z-S.z)*_,m=(e.max.z-S.z)*_):(h=(e.max.z-S.z)*_,m=(e.min.z-S.z)*_),r>m||h>l)||((h>r||r!==r)&&(r=h),(m<l||l!==l)&&(l=m),l<0)?null:this.at(r>=0?r:l,i)}intersectsBox(e){return this.intersectBox(e,da)!==null}intersectTriangle(e,i,r,l,c){Pd.subVectors(i,e),wc.subVectors(r,e),Fd.crossVectors(Pd,wc);let f=this.direction.dot(Fd),h;if(f>0){if(l)return null;h=1}else if(f<0)h=-1,f=-f;else return null;$a.subVectors(this.origin,e);const m=h*this.direction.dot(wc.crossVectors($a,wc));if(m<0)return null;const p=h*this.direction.dot(Pd.cross($a));if(p<0||m+p>f)return null;const v=-h*$a.dot(Fd);return v<0?null:this.at(v/f,c)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class sn{constructor(e,i,r,l,c,f,h,m,p,v,_,S,M,E,T,g){sn.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,i,r,l,c,f,h,m,p,v,_,S,M,E,T,g)}set(e,i,r,l,c,f,h,m,p,v,_,S,M,E,T,g){const x=this.elements;return x[0]=e,x[4]=i,x[8]=r,x[12]=l,x[1]=c,x[5]=f,x[9]=h,x[13]=m,x[2]=p,x[6]=v,x[10]=_,x[14]=S,x[3]=M,x[7]=E,x[11]=T,x[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new sn().fromArray(this.elements)}copy(e){const i=this.elements,r=e.elements;return i[0]=r[0],i[1]=r[1],i[2]=r[2],i[3]=r[3],i[4]=r[4],i[5]=r[5],i[6]=r[6],i[7]=r[7],i[8]=r[8],i[9]=r[9],i[10]=r[10],i[11]=r[11],i[12]=r[12],i[13]=r[13],i[14]=r[14],i[15]=r[15],this}copyPosition(e){const i=this.elements,r=e.elements;return i[12]=r[12],i[13]=r[13],i[14]=r[14],this}setFromMatrix3(e){const i=e.elements;return this.set(i[0],i[3],i[6],0,i[1],i[4],i[7],0,i[2],i[5],i[8],0,0,0,0,1),this}extractBasis(e,i,r){return this.determinant()===0?(e.set(1,0,0),i.set(0,1,0),r.set(0,0,1),this):(e.setFromMatrixColumn(this,0),i.setFromMatrixColumn(this,1),r.setFromMatrixColumn(this,2),this)}makeBasis(e,i,r){return this.set(e.x,i.x,r.x,0,e.y,i.y,r.y,0,e.z,i.z,r.z,0,0,0,0,1),this}extractRotation(e){if(e.determinant()===0)return this.identity();const i=this.elements,r=e.elements,l=1/Ts.setFromMatrixColumn(e,0).length(),c=1/Ts.setFromMatrixColumn(e,1).length(),f=1/Ts.setFromMatrixColumn(e,2).length();return i[0]=r[0]*l,i[1]=r[1]*l,i[2]=r[2]*l,i[3]=0,i[4]=r[4]*c,i[5]=r[5]*c,i[6]=r[6]*c,i[7]=0,i[8]=r[8]*f,i[9]=r[9]*f,i[10]=r[10]*f,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromEuler(e){const i=this.elements,r=e.x,l=e.y,c=e.z,f=Math.cos(r),h=Math.sin(r),m=Math.cos(l),p=Math.sin(l),v=Math.cos(c),_=Math.sin(c);if(e.order==="XYZ"){const S=f*v,M=f*_,E=h*v,T=h*_;i[0]=m*v,i[4]=-m*_,i[8]=p,i[1]=M+E*p,i[5]=S-T*p,i[9]=-h*m,i[2]=T-S*p,i[6]=E+M*p,i[10]=f*m}else if(e.order==="YXZ"){const S=m*v,M=m*_,E=p*v,T=p*_;i[0]=S+T*h,i[4]=E*h-M,i[8]=f*p,i[1]=f*_,i[5]=f*v,i[9]=-h,i[2]=M*h-E,i[6]=T+S*h,i[10]=f*m}else if(e.order==="ZXY"){const S=m*v,M=m*_,E=p*v,T=p*_;i[0]=S-T*h,i[4]=-f*_,i[8]=E+M*h,i[1]=M+E*h,i[5]=f*v,i[9]=T-S*h,i[2]=-f*p,i[6]=h,i[10]=f*m}else if(e.order==="ZYX"){const S=f*v,M=f*_,E=h*v,T=h*_;i[0]=m*v,i[4]=E*p-M,i[8]=S*p+T,i[1]=m*_,i[5]=T*p+S,i[9]=M*p-E,i[2]=-p,i[6]=h*m,i[10]=f*m}else if(e.order==="YZX"){const S=f*m,M=f*p,E=h*m,T=h*p;i[0]=m*v,i[4]=T-S*_,i[8]=E*_+M,i[1]=_,i[5]=f*v,i[9]=-h*v,i[2]=-p*v,i[6]=M*_+E,i[10]=S-T*_}else if(e.order==="XZY"){const S=f*m,M=f*p,E=h*m,T=h*p;i[0]=m*v,i[4]=-_,i[8]=p*v,i[1]=S*_+T,i[5]=f*v,i[9]=M*_-E,i[2]=E*_-M,i[6]=h*v,i[10]=T*_+S}return i[3]=0,i[7]=0,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromQuaternion(e){return this.compose(ZE,e,KE)}lookAt(e,i,r){const l=this.elements;return ei.subVectors(e,i),ei.lengthSq()===0&&(ei.z=1),ei.normalize(),er.crossVectors(r,ei),er.lengthSq()===0&&(Math.abs(r.z)===1?ei.x+=1e-4:ei.z+=1e-4,ei.normalize(),er.crossVectors(r,ei)),er.normalize(),Dc.crossVectors(ei,er),l[0]=er.x,l[4]=Dc.x,l[8]=ei.x,l[1]=er.y,l[5]=Dc.y,l[9]=ei.y,l[2]=er.z,l[6]=Dc.z,l[10]=ei.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,i){const r=e.elements,l=i.elements,c=this.elements,f=r[0],h=r[4],m=r[8],p=r[12],v=r[1],_=r[5],S=r[9],M=r[13],E=r[2],T=r[6],g=r[10],x=r[14],U=r[3],N=r[7],O=r[11],L=r[15],I=l[0],F=l[4],j=l[8],w=l[12],D=l[1],V=l[5],se=l[9],ae=l[13],me=l[2],de=l[6],z=l[10],H=l[14],K=l[3],ye=l[7],ve=l[11],A=l[15];return c[0]=f*I+h*D+m*me+p*K,c[4]=f*F+h*V+m*de+p*ye,c[8]=f*j+h*se+m*z+p*ve,c[12]=f*w+h*ae+m*H+p*A,c[1]=v*I+_*D+S*me+M*K,c[5]=v*F+_*V+S*de+M*ye,c[9]=v*j+_*se+S*z+M*ve,c[13]=v*w+_*ae+S*H+M*A,c[2]=E*I+T*D+g*me+x*K,c[6]=E*F+T*V+g*de+x*ye,c[10]=E*j+T*se+g*z+x*ve,c[14]=E*w+T*ae+g*H+x*A,c[3]=U*I+N*D+O*me+L*K,c[7]=U*F+N*V+O*de+L*ye,c[11]=U*j+N*se+O*z+L*ve,c[15]=U*w+N*ae+O*H+L*A,this}multiplyScalar(e){const i=this.elements;return i[0]*=e,i[4]*=e,i[8]*=e,i[12]*=e,i[1]*=e,i[5]*=e,i[9]*=e,i[13]*=e,i[2]*=e,i[6]*=e,i[10]*=e,i[14]*=e,i[3]*=e,i[7]*=e,i[11]*=e,i[15]*=e,this}determinant(){const e=this.elements,i=e[0],r=e[4],l=e[8],c=e[12],f=e[1],h=e[5],m=e[9],p=e[13],v=e[2],_=e[6],S=e[10],M=e[14],E=e[3],T=e[7],g=e[11],x=e[15],U=m*M-p*S,N=h*M-p*_,O=h*S-m*_,L=f*M-p*v,I=f*S-m*v,F=f*_-h*v;return i*(T*U-g*N+x*O)-r*(E*U-g*L+x*I)+l*(E*N-T*L+x*F)-c*(E*O-T*I+g*F)}transpose(){const e=this.elements;let i;return i=e[1],e[1]=e[4],e[4]=i,i=e[2],e[2]=e[8],e[8]=i,i=e[6],e[6]=e[9],e[9]=i,i=e[3],e[3]=e[12],e[12]=i,i=e[7],e[7]=e[13],e[13]=i,i=e[11],e[11]=e[14],e[14]=i,this}setPosition(e,i,r){const l=this.elements;return e.isVector3?(l[12]=e.x,l[13]=e.y,l[14]=e.z):(l[12]=e,l[13]=i,l[14]=r),this}invert(){const e=this.elements,i=e[0],r=e[1],l=e[2],c=e[3],f=e[4],h=e[5],m=e[6],p=e[7],v=e[8],_=e[9],S=e[10],M=e[11],E=e[12],T=e[13],g=e[14],x=e[15],U=_*g*p-T*S*p+T*m*M-h*g*M-_*m*x+h*S*x,N=E*S*p-v*g*p-E*m*M+f*g*M+v*m*x-f*S*x,O=v*T*p-E*_*p+E*h*M-f*T*M-v*h*x+f*_*x,L=E*_*m-v*T*m-E*h*S+f*T*S+v*h*g-f*_*g,I=i*U+r*N+l*O+c*L;if(I===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const F=1/I;return e[0]=U*F,e[1]=(T*S*c-_*g*c-T*l*M+r*g*M+_*l*x-r*S*x)*F,e[2]=(h*g*c-T*m*c+T*l*p-r*g*p-h*l*x+r*m*x)*F,e[3]=(_*m*c-h*S*c-_*l*p+r*S*p+h*l*M-r*m*M)*F,e[4]=N*F,e[5]=(v*g*c-E*S*c+E*l*M-i*g*M-v*l*x+i*S*x)*F,e[6]=(E*m*c-f*g*c-E*l*p+i*g*p+f*l*x-i*m*x)*F,e[7]=(f*S*c-v*m*c+v*l*p-i*S*p-f*l*M+i*m*M)*F,e[8]=O*F,e[9]=(E*_*c-v*T*c-E*r*M+i*T*M+v*r*x-i*_*x)*F,e[10]=(f*T*c-E*h*c+E*r*p-i*T*p-f*r*x+i*h*x)*F,e[11]=(v*h*c-f*_*c-v*r*p+i*_*p+f*r*M-i*h*M)*F,e[12]=L*F,e[13]=(v*T*l-E*_*l+E*r*S-i*T*S-v*r*g+i*_*g)*F,e[14]=(E*h*l-f*T*l-E*r*m+i*T*m+f*r*g-i*h*g)*F,e[15]=(f*_*l-v*h*l+v*r*m-i*_*m-f*r*S+i*h*S)*F,this}scale(e){const i=this.elements,r=e.x,l=e.y,c=e.z;return i[0]*=r,i[4]*=l,i[8]*=c,i[1]*=r,i[5]*=l,i[9]*=c,i[2]*=r,i[6]*=l,i[10]*=c,i[3]*=r,i[7]*=l,i[11]*=c,this}getMaxScaleOnAxis(){const e=this.elements,i=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],r=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],l=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(i,r,l))}makeTranslation(e,i,r){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,i,0,0,1,r,0,0,0,1),this}makeRotationX(e){const i=Math.cos(e),r=Math.sin(e);return this.set(1,0,0,0,0,i,-r,0,0,r,i,0,0,0,0,1),this}makeRotationY(e){const i=Math.cos(e),r=Math.sin(e);return this.set(i,0,r,0,0,1,0,0,-r,0,i,0,0,0,0,1),this}makeRotationZ(e){const i=Math.cos(e),r=Math.sin(e);return this.set(i,-r,0,0,r,i,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,i){const r=Math.cos(i),l=Math.sin(i),c=1-r,f=e.x,h=e.y,m=e.z,p=c*f,v=c*h;return this.set(p*f+r,p*h-l*m,p*m+l*h,0,p*h+l*m,v*h+r,v*m-l*f,0,p*m-l*h,v*m+l*f,c*m*m+r,0,0,0,0,1),this}makeScale(e,i,r){return this.set(e,0,0,0,0,i,0,0,0,0,r,0,0,0,0,1),this}makeShear(e,i,r,l,c,f){return this.set(1,r,c,0,e,1,f,0,i,l,1,0,0,0,0,1),this}compose(e,i,r){const l=this.elements,c=i._x,f=i._y,h=i._z,m=i._w,p=c+c,v=f+f,_=h+h,S=c*p,M=c*v,E=c*_,T=f*v,g=f*_,x=h*_,U=m*p,N=m*v,O=m*_,L=r.x,I=r.y,F=r.z;return l[0]=(1-(T+x))*L,l[1]=(M+O)*L,l[2]=(E-N)*L,l[3]=0,l[4]=(M-O)*I,l[5]=(1-(S+x))*I,l[6]=(g+U)*I,l[7]=0,l[8]=(E+N)*F,l[9]=(g-U)*F,l[10]=(1-(S+T))*F,l[11]=0,l[12]=e.x,l[13]=e.y,l[14]=e.z,l[15]=1,this}decompose(e,i,r){const l=this.elements;if(e.x=l[12],e.y=l[13],e.z=l[14],this.determinant()===0)return r.set(1,1,1),i.identity(),this;let c=Ts.set(l[0],l[1],l[2]).length();const f=Ts.set(l[4],l[5],l[6]).length(),h=Ts.set(l[8],l[9],l[10]).length();this.determinant()<0&&(c=-c),Ti.copy(this);const p=1/c,v=1/f,_=1/h;return Ti.elements[0]*=p,Ti.elements[1]*=p,Ti.elements[2]*=p,Ti.elements[4]*=v,Ti.elements[5]*=v,Ti.elements[6]*=v,Ti.elements[8]*=_,Ti.elements[9]*=_,Ti.elements[10]*=_,i.setFromRotationMatrix(Ti),r.x=c,r.y=f,r.z=h,this}makePerspective(e,i,r,l,c,f,h=Gi,m=!1){const p=this.elements,v=2*c/(i-e),_=2*c/(r-l),S=(i+e)/(i-e),M=(r+l)/(r-l);let E,T;if(m)E=c/(f-c),T=f*c/(f-c);else if(h===Gi)E=-(f+c)/(f-c),T=-2*f*c/(f-c);else if(h===iu)E=-f/(f-c),T=-f*c/(f-c);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+h);return p[0]=v,p[4]=0,p[8]=S,p[12]=0,p[1]=0,p[5]=_,p[9]=M,p[13]=0,p[2]=0,p[6]=0,p[10]=E,p[14]=T,p[3]=0,p[7]=0,p[11]=-1,p[15]=0,this}makeOrthographic(e,i,r,l,c,f,h=Gi,m=!1){const p=this.elements,v=2/(i-e),_=2/(r-l),S=-(i+e)/(i-e),M=-(r+l)/(r-l);let E,T;if(m)E=1/(f-c),T=f/(f-c);else if(h===Gi)E=-2/(f-c),T=-(f+c)/(f-c);else if(h===iu)E=-1/(f-c),T=-c/(f-c);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+h);return p[0]=v,p[4]=0,p[8]=0,p[12]=S,p[1]=0,p[5]=_,p[9]=0,p[13]=M,p[2]=0,p[6]=0,p[10]=E,p[14]=T,p[3]=0,p[7]=0,p[11]=0,p[15]=1,this}equals(e){const i=this.elements,r=e.elements;for(let l=0;l<16;l++)if(i[l]!==r[l])return!1;return!0}fromArray(e,i=0){for(let r=0;r<16;r++)this.elements[r]=e[r+i];return this}toArray(e=[],i=0){const r=this.elements;return e[i]=r[0],e[i+1]=r[1],e[i+2]=r[2],e[i+3]=r[3],e[i+4]=r[4],e[i+5]=r[5],e[i+6]=r[6],e[i+7]=r[7],e[i+8]=r[8],e[i+9]=r[9],e[i+10]=r[10],e[i+11]=r[11],e[i+12]=r[12],e[i+13]=r[13],e[i+14]=r[14],e[i+15]=r[15],e}}const Ts=new ue,Ti=new sn,ZE=new ue(0,0,0),KE=new ue(1,1,1),er=new ue,Dc=new ue,ei=new ue,C_=new sn,w_=new sl;class ba{constructor(e=0,i=0,r=0,l=ba.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=i,this._z=r,this._order=l}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,i,r,l=this._order){return this._x=e,this._y=i,this._z=r,this._order=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,i=this._order,r=!0){const l=e.elements,c=l[0],f=l[4],h=l[8],m=l[1],p=l[5],v=l[9],_=l[2],S=l[6],M=l[10];switch(i){case"XYZ":this._y=Math.asin(Mt(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(-v,M),this._z=Math.atan2(-f,c)):(this._x=Math.atan2(S,p),this._z=0);break;case"YXZ":this._x=Math.asin(-Mt(v,-1,1)),Math.abs(v)<.9999999?(this._y=Math.atan2(h,M),this._z=Math.atan2(m,p)):(this._y=Math.atan2(-_,c),this._z=0);break;case"ZXY":this._x=Math.asin(Mt(S,-1,1)),Math.abs(S)<.9999999?(this._y=Math.atan2(-_,M),this._z=Math.atan2(-f,p)):(this._y=0,this._z=Math.atan2(m,c));break;case"ZYX":this._y=Math.asin(-Mt(_,-1,1)),Math.abs(_)<.9999999?(this._x=Math.atan2(S,M),this._z=Math.atan2(m,c)):(this._x=0,this._z=Math.atan2(-f,p));break;case"YZX":this._z=Math.asin(Mt(m,-1,1)),Math.abs(m)<.9999999?(this._x=Math.atan2(-v,p),this._y=Math.atan2(-_,c)):(this._x=0,this._y=Math.atan2(h,M));break;case"XZY":this._z=Math.asin(-Mt(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(S,p),this._y=Math.atan2(h,c)):(this._x=Math.atan2(-v,M),this._y=0);break;default:ct("Euler: .setFromRotationMatrix() encountered an unknown order: "+i)}return this._order=i,r===!0&&this._onChangeCallback(),this}setFromQuaternion(e,i,r){return C_.makeRotationFromQuaternion(e),this.setFromRotationMatrix(C_,i,r)}setFromVector3(e,i=this._order){return this.set(e.x,e.y,e.z,i)}reorder(e){return w_.setFromEuler(this),this.setFromQuaternion(w_,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],i=0){return e[i]=this._x,e[i+1]=this._y,e[i+2]=this._z,e[i+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}ba.DEFAULT_ORDER="XYZ";class Kv{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let QE=0;const D_=new ue,As=new sl,ha=new sn,Uc=new ue,qo=new ue,JE=new ue,$E=new sl,U_=new ue(1,0,0),L_=new ue(0,1,0),N_=new ue(0,0,1),O_={type:"added"},eb={type:"removed"},Rs={type:"childadded",child:null},zd={type:"childremoved",child:null};class qn extends Xs{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:QE++}),this.uuid=rl(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=qn.DEFAULT_UP.clone();const e=new ue,i=new ba,r=new sl,l=new ue(1,1,1);function c(){r.setFromEuler(i,!1)}function f(){i.setFromQuaternion(r,void 0,!1)}i._onChange(c),r._onChange(f),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:i},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:l},modelViewMatrix:{value:new sn},normalMatrix:{value:new pt}}),this.matrix=new sn,this.matrixWorld=new sn,this.matrixAutoUpdate=qn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=qn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Kv,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,i){this.quaternion.setFromAxisAngle(e,i)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,i){return As.setFromAxisAngle(e,i),this.quaternion.multiply(As),this}rotateOnWorldAxis(e,i){return As.setFromAxisAngle(e,i),this.quaternion.premultiply(As),this}rotateX(e){return this.rotateOnAxis(U_,e)}rotateY(e){return this.rotateOnAxis(L_,e)}rotateZ(e){return this.rotateOnAxis(N_,e)}translateOnAxis(e,i){return D_.copy(e).applyQuaternion(this.quaternion),this.position.add(D_.multiplyScalar(i)),this}translateX(e){return this.translateOnAxis(U_,e)}translateY(e){return this.translateOnAxis(L_,e)}translateZ(e){return this.translateOnAxis(N_,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(ha.copy(this.matrixWorld).invert())}lookAt(e,i,r){e.isVector3?Uc.copy(e):Uc.set(e,i,r);const l=this.parent;this.updateWorldMatrix(!0,!1),qo.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ha.lookAt(qo,Uc,this.up):ha.lookAt(Uc,qo,this.up),this.quaternion.setFromRotationMatrix(ha),l&&(ha.extractRotation(l.matrixWorld),As.setFromRotationMatrix(ha),this.quaternion.premultiply(As.invert()))}add(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.add(arguments[i]);return this}return e===this?(Ct("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(O_),Rs.child=e,this.dispatchEvent(Rs),Rs.child=null):Ct("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let r=0;r<arguments.length;r++)this.remove(arguments[r]);return this}const i=this.children.indexOf(e);return i!==-1&&(e.parent=null,this.children.splice(i,1),e.dispatchEvent(eb),zd.child=e,this.dispatchEvent(zd),zd.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),ha.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),ha.multiply(e.parent.matrixWorld)),e.applyMatrix4(ha),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(O_),Rs.child=e,this.dispatchEvent(Rs),Rs.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,i){if(this[e]===i)return this;for(let r=0,l=this.children.length;r<l;r++){const f=this.children[r].getObjectByProperty(e,i);if(f!==void 0)return f}}getObjectsByProperty(e,i,r=[]){this[e]===i&&r.push(this);const l=this.children;for(let c=0,f=l.length;c<f;c++)l[c].getObjectsByProperty(e,i,r);return r}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(qo,e,JE),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(qo,$E,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const i=this.matrixWorld.elements;return e.set(i[8],i[9],i[10]).normalize()}raycast(){}traverse(e){e(this);const i=this.children;for(let r=0,l=i.length;r<l;r++)i[r].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const i=this.children;for(let r=0,l=i.length;r<l;r++)i[r].traverseVisible(e)}traverseAncestors(e){const i=this.parent;i!==null&&(e(i),i.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const i=this.children;for(let r=0,l=i.length;r<l;r++)i[r].updateMatrixWorld(e)}updateWorldMatrix(e,i){const r=this.parent;if(e===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),i===!0){const l=this.children;for(let c=0,f=l.length;c<f;c++)l[c].updateWorldMatrix(!1,!0)}}toJSON(e){const i=e===void 0||typeof e=="string",r={};i&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},r.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const l={};l.uuid=this.uuid,l.type=this.type,this.name!==""&&(l.name=this.name),this.castShadow===!0&&(l.castShadow=!0),this.receiveShadow===!0&&(l.receiveShadow=!0),this.visible===!1&&(l.visible=!1),this.frustumCulled===!1&&(l.frustumCulled=!1),this.renderOrder!==0&&(l.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(l.userData=this.userData),l.layers=this.layers.mask,l.matrix=this.matrix.toArray(),l.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(l.matrixAutoUpdate=!1),this.isInstancedMesh&&(l.type="InstancedMesh",l.count=this.count,l.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(l.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(l.type="BatchedMesh",l.perObjectFrustumCulled=this.perObjectFrustumCulled,l.sortObjects=this.sortObjects,l.drawRanges=this._drawRanges,l.reservedRanges=this._reservedRanges,l.geometryInfo=this._geometryInfo.map(h=>({...h,boundingBox:h.boundingBox?h.boundingBox.toJSON():void 0,boundingSphere:h.boundingSphere?h.boundingSphere.toJSON():void 0})),l.instanceInfo=this._instanceInfo.map(h=>({...h})),l.availableInstanceIds=this._availableInstanceIds.slice(),l.availableGeometryIds=this._availableGeometryIds.slice(),l.nextIndexStart=this._nextIndexStart,l.nextVertexStart=this._nextVertexStart,l.geometryCount=this._geometryCount,l.maxInstanceCount=this._maxInstanceCount,l.maxVertexCount=this._maxVertexCount,l.maxIndexCount=this._maxIndexCount,l.geometryInitialized=this._geometryInitialized,l.matricesTexture=this._matricesTexture.toJSON(e),l.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(l.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(l.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(l.boundingBox=this.boundingBox.toJSON()));function c(h,m){return h[m.uuid]===void 0&&(h[m.uuid]=m.toJSON(e)),m.uuid}if(this.isScene)this.background&&(this.background.isColor?l.background=this.background.toJSON():this.background.isTexture&&(l.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(l.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){l.geometry=c(e.geometries,this.geometry);const h=this.geometry.parameters;if(h!==void 0&&h.shapes!==void 0){const m=h.shapes;if(Array.isArray(m))for(let p=0,v=m.length;p<v;p++){const _=m[p];c(e.shapes,_)}else c(e.shapes,m)}}if(this.isSkinnedMesh&&(l.bindMode=this.bindMode,l.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(c(e.skeletons,this.skeleton),l.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const h=[];for(let m=0,p=this.material.length;m<p;m++)h.push(c(e.materials,this.material[m]));l.material=h}else l.material=c(e.materials,this.material);if(this.children.length>0){l.children=[];for(let h=0;h<this.children.length;h++)l.children.push(this.children[h].toJSON(e).object)}if(this.animations.length>0){l.animations=[];for(let h=0;h<this.animations.length;h++){const m=this.animations[h];l.animations.push(c(e.animations,m))}}if(i){const h=f(e.geometries),m=f(e.materials),p=f(e.textures),v=f(e.images),_=f(e.shapes),S=f(e.skeletons),M=f(e.animations),E=f(e.nodes);h.length>0&&(r.geometries=h),m.length>0&&(r.materials=m),p.length>0&&(r.textures=p),v.length>0&&(r.images=v),_.length>0&&(r.shapes=_),S.length>0&&(r.skeletons=S),M.length>0&&(r.animations=M),E.length>0&&(r.nodes=E)}return r.object=l,r;function f(h){const m=[];for(const p in h){const v=h[p];delete v.metadata,m.push(v)}return m}}clone(e){return new this.constructor().copy(this,e)}copy(e,i=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),i===!0)for(let r=0;r<e.children.length;r++){const l=e.children[r];this.add(l.clone())}return this}}qn.DEFAULT_UP=new ue(0,1,0);qn.DEFAULT_MATRIX_AUTO_UPDATE=!0;qn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Ai=new ue,pa=new ue,Id=new ue,ma=new ue,Cs=new ue,ws=new ue,P_=new ue,Bd=new ue,Hd=new ue,Gd=new ue,Vd=new rn,kd=new rn,Xd=new rn;class Ri{constructor(e=new ue,i=new ue,r=new ue){this.a=e,this.b=i,this.c=r}static getNormal(e,i,r,l){l.subVectors(r,i),Ai.subVectors(e,i),l.cross(Ai);const c=l.lengthSq();return c>0?l.multiplyScalar(1/Math.sqrt(c)):l.set(0,0,0)}static getBarycoord(e,i,r,l,c){Ai.subVectors(l,i),pa.subVectors(r,i),Id.subVectors(e,i);const f=Ai.dot(Ai),h=Ai.dot(pa),m=Ai.dot(Id),p=pa.dot(pa),v=pa.dot(Id),_=f*p-h*h;if(_===0)return c.set(0,0,0),null;const S=1/_,M=(p*m-h*v)*S,E=(f*v-h*m)*S;return c.set(1-M-E,E,M)}static containsPoint(e,i,r,l){return this.getBarycoord(e,i,r,l,ma)===null?!1:ma.x>=0&&ma.y>=0&&ma.x+ma.y<=1}static getInterpolation(e,i,r,l,c,f,h,m){return this.getBarycoord(e,i,r,l,ma)===null?(m.x=0,m.y=0,"z"in m&&(m.z=0),"w"in m&&(m.w=0),null):(m.setScalar(0),m.addScaledVector(c,ma.x),m.addScaledVector(f,ma.y),m.addScaledVector(h,ma.z),m)}static getInterpolatedAttribute(e,i,r,l,c,f){return Vd.setScalar(0),kd.setScalar(0),Xd.setScalar(0),Vd.fromBufferAttribute(e,i),kd.fromBufferAttribute(e,r),Xd.fromBufferAttribute(e,l),f.setScalar(0),f.addScaledVector(Vd,c.x),f.addScaledVector(kd,c.y),f.addScaledVector(Xd,c.z),f}static isFrontFacing(e,i,r,l){return Ai.subVectors(r,i),pa.subVectors(e,i),Ai.cross(pa).dot(l)<0}set(e,i,r){return this.a.copy(e),this.b.copy(i),this.c.copy(r),this}setFromPointsAndIndices(e,i,r,l){return this.a.copy(e[i]),this.b.copy(e[r]),this.c.copy(e[l]),this}setFromAttributeAndIndices(e,i,r,l){return this.a.fromBufferAttribute(e,i),this.b.fromBufferAttribute(e,r),this.c.fromBufferAttribute(e,l),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Ai.subVectors(this.c,this.b),pa.subVectors(this.a,this.b),Ai.cross(pa).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Ri.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,i){return Ri.getBarycoord(e,this.a,this.b,this.c,i)}getInterpolation(e,i,r,l,c){return Ri.getInterpolation(e,this.a,this.b,this.c,i,r,l,c)}containsPoint(e){return Ri.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Ri.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,i){const r=this.a,l=this.b,c=this.c;let f,h;Cs.subVectors(l,r),ws.subVectors(c,r),Bd.subVectors(e,r);const m=Cs.dot(Bd),p=ws.dot(Bd);if(m<=0&&p<=0)return i.copy(r);Hd.subVectors(e,l);const v=Cs.dot(Hd),_=ws.dot(Hd);if(v>=0&&_<=v)return i.copy(l);const S=m*_-v*p;if(S<=0&&m>=0&&v<=0)return f=m/(m-v),i.copy(r).addScaledVector(Cs,f);Gd.subVectors(e,c);const M=Cs.dot(Gd),E=ws.dot(Gd);if(E>=0&&M<=E)return i.copy(c);const T=M*p-m*E;if(T<=0&&p>=0&&E<=0)return h=p/(p-E),i.copy(r).addScaledVector(ws,h);const g=v*E-M*_;if(g<=0&&_-v>=0&&M-E>=0)return P_.subVectors(c,l),h=(_-v)/(_-v+(M-E)),i.copy(l).addScaledVector(P_,h);const x=1/(g+T+S);return f=T*x,h=S*x,i.copy(r).addScaledVector(Cs,f).addScaledVector(ws,h)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Qv={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},tr={h:0,s:0,l:0},Lc={h:0,s:0,l:0};function Wd(s,e,i){return i<0&&(i+=1),i>1&&(i-=1),i<1/6?s+(e-s)*6*i:i<1/2?e:i<2/3?s+(e-s)*6*(2/3-i):s}class Pt{constructor(e,i,r){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,i,r)}set(e,i,r){if(i===void 0&&r===void 0){const l=e;l&&l.isColor?this.copy(l):typeof l=="number"?this.setHex(l):typeof l=="string"&&this.setStyle(l)}else this.setRGB(e,i,r);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,i=pi){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Tt.colorSpaceToWorking(this,i),this}setRGB(e,i,r,l=Tt.workingColorSpace){return this.r=e,this.g=i,this.b=r,Tt.colorSpaceToWorking(this,l),this}setHSL(e,i,r,l=Tt.workingColorSpace){if(e=GE(e,1),i=Mt(i,0,1),r=Mt(r,0,1),i===0)this.r=this.g=this.b=r;else{const c=r<=.5?r*(1+i):r+i-r*i,f=2*r-c;this.r=Wd(f,c,e+1/3),this.g=Wd(f,c,e),this.b=Wd(f,c,e-1/3)}return Tt.colorSpaceToWorking(this,l),this}setStyle(e,i=pi){function r(c){c!==void 0&&parseFloat(c)<1&&ct("Color: Alpha component of "+e+" will be ignored.")}let l;if(l=/^(\w+)\(([^\)]*)\)/.exec(e)){let c;const f=l[1],h=l[2];switch(f){case"rgb":case"rgba":if(c=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return r(c[4]),this.setRGB(Math.min(255,parseInt(c[1],10))/255,Math.min(255,parseInt(c[2],10))/255,Math.min(255,parseInt(c[3],10))/255,i);if(c=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return r(c[4]),this.setRGB(Math.min(100,parseInt(c[1],10))/100,Math.min(100,parseInt(c[2],10))/100,Math.min(100,parseInt(c[3],10))/100,i);break;case"hsl":case"hsla":if(c=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return r(c[4]),this.setHSL(parseFloat(c[1])/360,parseFloat(c[2])/100,parseFloat(c[3])/100,i);break;default:ct("Color: Unknown color model "+e)}}else if(l=/^\#([A-Fa-f\d]+)$/.exec(e)){const c=l[1],f=c.length;if(f===3)return this.setRGB(parseInt(c.charAt(0),16)/15,parseInt(c.charAt(1),16)/15,parseInt(c.charAt(2),16)/15,i);if(f===6)return this.setHex(parseInt(c,16),i);ct("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,i);return this}setColorName(e,i=pi){const r=Qv[e.toLowerCase()];return r!==void 0?this.setHex(r,i):ct("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=xa(e.r),this.g=xa(e.g),this.b=xa(e.b),this}copyLinearToSRGB(e){return this.r=Ps(e.r),this.g=Ps(e.g),this.b=Ps(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=pi){return Tt.workingToColorSpace(Nn.copy(this),e),Math.round(Mt(Nn.r*255,0,255))*65536+Math.round(Mt(Nn.g*255,0,255))*256+Math.round(Mt(Nn.b*255,0,255))}getHexString(e=pi){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,i=Tt.workingColorSpace){Tt.workingToColorSpace(Nn.copy(this),i);const r=Nn.r,l=Nn.g,c=Nn.b,f=Math.max(r,l,c),h=Math.min(r,l,c);let m,p;const v=(h+f)/2;if(h===f)m=0,p=0;else{const _=f-h;switch(p=v<=.5?_/(f+h):_/(2-f-h),f){case r:m=(l-c)/_+(l<c?6:0);break;case l:m=(c-r)/_+2;break;case c:m=(r-l)/_+4;break}m/=6}return e.h=m,e.s=p,e.l=v,e}getRGB(e,i=Tt.workingColorSpace){return Tt.workingToColorSpace(Nn.copy(this),i),e.r=Nn.r,e.g=Nn.g,e.b=Nn.b,e}getStyle(e=pi){Tt.workingToColorSpace(Nn.copy(this),e);const i=Nn.r,r=Nn.g,l=Nn.b;return e!==pi?`color(${e} ${i.toFixed(3)} ${r.toFixed(3)} ${l.toFixed(3)})`:`rgb(${Math.round(i*255)},${Math.round(r*255)},${Math.round(l*255)})`}offsetHSL(e,i,r){return this.getHSL(tr),this.setHSL(tr.h+e,tr.s+i,tr.l+r)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,i){return this.r=e.r+i.r,this.g=e.g+i.g,this.b=e.b+i.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,i){return this.r+=(e.r-this.r)*i,this.g+=(e.g-this.g)*i,this.b+=(e.b-this.b)*i,this}lerpColors(e,i,r){return this.r=e.r+(i.r-e.r)*r,this.g=e.g+(i.g-e.g)*r,this.b=e.b+(i.b-e.b)*r,this}lerpHSL(e,i){this.getHSL(tr),e.getHSL(Lc);const r=Rd(tr.h,Lc.h,i),l=Rd(tr.s,Lc.s,i),c=Rd(tr.l,Lc.l,i);return this.setHSL(r,l,c),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const i=this.r,r=this.g,l=this.b,c=e.elements;return this.r=c[0]*i+c[3]*r+c[6]*l,this.g=c[1]*i+c[4]*r+c[7]*l,this.b=c[2]*i+c[5]*r+c[8]*l,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,i=0){return this.r=e[i],this.g=e[i+1],this.b=e[i+2],this}toArray(e=[],i=0){return e[i]=this.r,e[i+1]=this.g,e[i+2]=this.b,e}fromBufferAttribute(e,i){return this.r=e.getX(i),this.g=e.getY(i),this.b=e.getZ(i),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Nn=new Pt;Pt.NAMES=Qv;let tb=0;class Ws extends Xs{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:tb++}),this.uuid=rl(),this.name="",this.type="Material",this.blending=Os,this.side=rr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=sh,this.blendDst=oh,this.blendEquation=Lr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Pt(0,0,0),this.blendAlpha=0,this.depthFunc=Fs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=x_,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ss,this.stencilZFail=Ss,this.stencilZPass=Ss,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const i in e){const r=e[i];if(r===void 0){ct(`Material: parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){ct(`Material: '${i}' is not a property of THREE.${this.type}.`);continue}l&&l.isColor?l.set(r):l&&l.isVector3&&r&&r.isVector3?l.copy(r):this[i]=r}}toJSON(e){const i=e===void 0||typeof e=="string";i&&(e={textures:{},images:{}});const r={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.color&&this.color.isColor&&(r.color=this.color.getHex()),this.roughness!==void 0&&(r.roughness=this.roughness),this.metalness!==void 0&&(r.metalness=this.metalness),this.sheen!==void 0&&(r.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(r.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(r.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(r.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(r.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(r.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(r.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(r.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(r.shininess=this.shininess),this.clearcoat!==void 0&&(r.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(r.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(r.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(r.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(r.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,r.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(r.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(r.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(r.dispersion=this.dispersion),this.iridescence!==void 0&&(r.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(r.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(r.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(r.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(r.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(r.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(r.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(r.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(r.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(r.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(r.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(r.lightMap=this.lightMap.toJSON(e).uuid,r.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(r.aoMap=this.aoMap.toJSON(e).uuid,r.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(r.bumpMap=this.bumpMap.toJSON(e).uuid,r.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(r.normalMap=this.normalMap.toJSON(e).uuid,r.normalMapType=this.normalMapType,r.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(r.displacementMap=this.displacementMap.toJSON(e).uuid,r.displacementScale=this.displacementScale,r.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(r.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(r.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(r.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(r.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(r.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(r.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(r.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(r.combine=this.combine)),this.envMapRotation!==void 0&&(r.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(r.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(r.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(r.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(r.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(r.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(r.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(r.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(r.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(r.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(r.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(r.size=this.size),this.shadowSide!==null&&(r.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(r.sizeAttenuation=this.sizeAttenuation),this.blending!==Os&&(r.blending=this.blending),this.side!==rr&&(r.side=this.side),this.vertexColors===!0&&(r.vertexColors=!0),this.opacity<1&&(r.opacity=this.opacity),this.transparent===!0&&(r.transparent=!0),this.blendSrc!==sh&&(r.blendSrc=this.blendSrc),this.blendDst!==oh&&(r.blendDst=this.blendDst),this.blendEquation!==Lr&&(r.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(r.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(r.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(r.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(r.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(r.blendAlpha=this.blendAlpha),this.depthFunc!==Fs&&(r.depthFunc=this.depthFunc),this.depthTest===!1&&(r.depthTest=this.depthTest),this.depthWrite===!1&&(r.depthWrite=this.depthWrite),this.colorWrite===!1&&(r.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(r.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==x_&&(r.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(r.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(r.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Ss&&(r.stencilFail=this.stencilFail),this.stencilZFail!==Ss&&(r.stencilZFail=this.stencilZFail),this.stencilZPass!==Ss&&(r.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(r.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(r.rotation=this.rotation),this.polygonOffset===!0&&(r.polygonOffset=!0),this.polygonOffsetFactor!==0&&(r.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(r.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(r.linewidth=this.linewidth),this.dashSize!==void 0&&(r.dashSize=this.dashSize),this.gapSize!==void 0&&(r.gapSize=this.gapSize),this.scale!==void 0&&(r.scale=this.scale),this.dithering===!0&&(r.dithering=!0),this.alphaTest>0&&(r.alphaTest=this.alphaTest),this.alphaHash===!0&&(r.alphaHash=!0),this.alphaToCoverage===!0&&(r.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(r.premultipliedAlpha=!0),this.forceSinglePass===!0&&(r.forceSinglePass=!0),this.allowOverride===!1&&(r.allowOverride=!1),this.wireframe===!0&&(r.wireframe=!0),this.wireframeLinewidth>1&&(r.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(r.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(r.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(r.flatShading=!0),this.visible===!1&&(r.visible=!1),this.toneMapped===!1&&(r.toneMapped=!1),this.fog===!1&&(r.fog=!1),Object.keys(this.userData).length>0&&(r.userData=this.userData);function l(c){const f=[];for(const h in c){const m=c[h];delete m.metadata,f.push(m)}return f}if(i){const c=l(e.textures),f=l(e.images);c.length>0&&(r.textures=c),f.length>0&&(r.images=f)}return r}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const i=e.clippingPlanes;let r=null;if(i!==null){const l=i.length;r=new Array(l);for(let c=0;c!==l;++c)r[c]=i[c].clone()}return this.clippingPlanes=r,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class xp extends Ws{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Pt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ba,this.combine=Uv,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const dn=new ue,Nc=new Xt;let nb=0;class _i{constructor(e,i,r=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:nb++}),this.name="",this.array=e,this.itemSize=i,this.count=e!==void 0?e.length/i:0,this.normalized=r,this.usage=S_,this.updateRanges=[],this.gpuType=Hi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,i){this.updateRanges.push({start:e,count:i})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,i,r){e*=this.itemSize,r*=i.itemSize;for(let l=0,c=this.itemSize;l<c;l++)this.array[e+l]=i.array[r+l];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let i=0,r=this.count;i<r;i++)Nc.fromBufferAttribute(this,i),Nc.applyMatrix3(e),this.setXY(i,Nc.x,Nc.y);else if(this.itemSize===3)for(let i=0,r=this.count;i<r;i++)dn.fromBufferAttribute(this,i),dn.applyMatrix3(e),this.setXYZ(i,dn.x,dn.y,dn.z);return this}applyMatrix4(e){for(let i=0,r=this.count;i<r;i++)dn.fromBufferAttribute(this,i),dn.applyMatrix4(e),this.setXYZ(i,dn.x,dn.y,dn.z);return this}applyNormalMatrix(e){for(let i=0,r=this.count;i<r;i++)dn.fromBufferAttribute(this,i),dn.applyNormalMatrix(e),this.setXYZ(i,dn.x,dn.y,dn.z);return this}transformDirection(e){for(let i=0,r=this.count;i<r;i++)dn.fromBufferAttribute(this,i),dn.transformDirection(e),this.setXYZ(i,dn.x,dn.y,dn.z);return this}set(e,i=0){return this.array.set(e,i),this}getComponent(e,i){let r=this.array[e*this.itemSize+i];return this.normalized&&(r=ko(r,this.array)),r}setComponent(e,i,r){return this.normalized&&(r=Xn(r,this.array)),this.array[e*this.itemSize+i]=r,this}getX(e){let i=this.array[e*this.itemSize];return this.normalized&&(i=ko(i,this.array)),i}setX(e,i){return this.normalized&&(i=Xn(i,this.array)),this.array[e*this.itemSize]=i,this}getY(e){let i=this.array[e*this.itemSize+1];return this.normalized&&(i=ko(i,this.array)),i}setY(e,i){return this.normalized&&(i=Xn(i,this.array)),this.array[e*this.itemSize+1]=i,this}getZ(e){let i=this.array[e*this.itemSize+2];return this.normalized&&(i=ko(i,this.array)),i}setZ(e,i){return this.normalized&&(i=Xn(i,this.array)),this.array[e*this.itemSize+2]=i,this}getW(e){let i=this.array[e*this.itemSize+3];return this.normalized&&(i=ko(i,this.array)),i}setW(e,i){return this.normalized&&(i=Xn(i,this.array)),this.array[e*this.itemSize+3]=i,this}setXY(e,i,r){return e*=this.itemSize,this.normalized&&(i=Xn(i,this.array),r=Xn(r,this.array)),this.array[e+0]=i,this.array[e+1]=r,this}setXYZ(e,i,r,l){return e*=this.itemSize,this.normalized&&(i=Xn(i,this.array),r=Xn(r,this.array),l=Xn(l,this.array)),this.array[e+0]=i,this.array[e+1]=r,this.array[e+2]=l,this}setXYZW(e,i,r,l,c){return e*=this.itemSize,this.normalized&&(i=Xn(i,this.array),r=Xn(r,this.array),l=Xn(l,this.array),c=Xn(c,this.array)),this.array[e+0]=i,this.array[e+1]=r,this.array[e+2]=l,this.array[e+3]=c,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==S_&&(e.usage=this.usage),e}}class Jv extends _i{constructor(e,i,r){super(new Uint16Array(e),i,r)}}class $v extends _i{constructor(e,i,r){super(new Uint32Array(e),i,r)}}class Sa extends _i{constructor(e,i,r){super(new Float32Array(e),i,r)}}let ib=0;const hi=new sn,qd=new qn,Ds=new ue,ti=new ol,Yo=new ol,vn=new ue;class Ui extends Xs{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:ib++}),this.uuid=rl(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Yv(e)?$v:Jv)(e,1):this.index=e,this}setIndirect(e,i=0){return this.indirect=e,this.indirectOffset=i,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,i){return this.attributes[e]=i,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,i,r=0){this.groups.push({start:e,count:i,materialIndex:r})}clearGroups(){this.groups=[]}setDrawRange(e,i){this.drawRange.start=e,this.drawRange.count=i}applyMatrix4(e){const i=this.attributes.position;i!==void 0&&(i.applyMatrix4(e),i.needsUpdate=!0);const r=this.attributes.normal;if(r!==void 0){const c=new pt().getNormalMatrix(e);r.applyNormalMatrix(c),r.needsUpdate=!0}const l=this.attributes.tangent;return l!==void 0&&(l.transformDirection(e),l.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return hi.makeRotationFromQuaternion(e),this.applyMatrix4(hi),this}rotateX(e){return hi.makeRotationX(e),this.applyMatrix4(hi),this}rotateY(e){return hi.makeRotationY(e),this.applyMatrix4(hi),this}rotateZ(e){return hi.makeRotationZ(e),this.applyMatrix4(hi),this}translate(e,i,r){return hi.makeTranslation(e,i,r),this.applyMatrix4(hi),this}scale(e,i,r){return hi.makeScale(e,i,r),this.applyMatrix4(hi),this}lookAt(e){return qd.lookAt(e),qd.updateMatrix(),this.applyMatrix4(qd.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ds).negate(),this.translate(Ds.x,Ds.y,Ds.z),this}setFromPoints(e){const i=this.getAttribute("position");if(i===void 0){const r=[];for(let l=0,c=e.length;l<c;l++){const f=e[l];r.push(f.x,f.y,f.z||0)}this.setAttribute("position",new Sa(r,3))}else{const r=Math.min(e.length,i.count);for(let l=0;l<r;l++){const c=e[l];i.setXYZ(l,c.x,c.y,c.z||0)}e.length>i.count&&ct("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),i.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ol);const e=this.attributes.position,i=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Ct("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new ue(-1/0,-1/0,-1/0),new ue(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),i)for(let r=0,l=i.length;r<l;r++){const c=i[r];ti.setFromBufferAttribute(c),this.morphTargetsRelative?(vn.addVectors(this.boundingBox.min,ti.min),this.boundingBox.expandByPoint(vn),vn.addVectors(this.boundingBox.max,ti.max),this.boundingBox.expandByPoint(vn)):(this.boundingBox.expandByPoint(ti.min),this.boundingBox.expandByPoint(ti.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Ct('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new cu);const e=this.attributes.position,i=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Ct("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new ue,1/0);return}if(e){const r=this.boundingSphere.center;if(ti.setFromBufferAttribute(e),i)for(let c=0,f=i.length;c<f;c++){const h=i[c];Yo.setFromBufferAttribute(h),this.morphTargetsRelative?(vn.addVectors(ti.min,Yo.min),ti.expandByPoint(vn),vn.addVectors(ti.max,Yo.max),ti.expandByPoint(vn)):(ti.expandByPoint(Yo.min),ti.expandByPoint(Yo.max))}ti.getCenter(r);let l=0;for(let c=0,f=e.count;c<f;c++)vn.fromBufferAttribute(e,c),l=Math.max(l,r.distanceToSquared(vn));if(i)for(let c=0,f=i.length;c<f;c++){const h=i[c],m=this.morphTargetsRelative;for(let p=0,v=h.count;p<v;p++)vn.fromBufferAttribute(h,p),m&&(Ds.fromBufferAttribute(e,p),vn.add(Ds)),l=Math.max(l,r.distanceToSquared(vn))}this.boundingSphere.radius=Math.sqrt(l),isNaN(this.boundingSphere.radius)&&Ct('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,i=this.attributes;if(e===null||i.position===void 0||i.normal===void 0||i.uv===void 0){Ct("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const r=i.position,l=i.normal,c=i.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new _i(new Float32Array(4*r.count),4));const f=this.getAttribute("tangent"),h=[],m=[];for(let j=0;j<r.count;j++)h[j]=new ue,m[j]=new ue;const p=new ue,v=new ue,_=new ue,S=new Xt,M=new Xt,E=new Xt,T=new ue,g=new ue;function x(j,w,D){p.fromBufferAttribute(r,j),v.fromBufferAttribute(r,w),_.fromBufferAttribute(r,D),S.fromBufferAttribute(c,j),M.fromBufferAttribute(c,w),E.fromBufferAttribute(c,D),v.sub(p),_.sub(p),M.sub(S),E.sub(S);const V=1/(M.x*E.y-E.x*M.y);isFinite(V)&&(T.copy(v).multiplyScalar(E.y).addScaledVector(_,-M.y).multiplyScalar(V),g.copy(_).multiplyScalar(M.x).addScaledVector(v,-E.x).multiplyScalar(V),h[j].add(T),h[w].add(T),h[D].add(T),m[j].add(g),m[w].add(g),m[D].add(g))}let U=this.groups;U.length===0&&(U=[{start:0,count:e.count}]);for(let j=0,w=U.length;j<w;++j){const D=U[j],V=D.start,se=D.count;for(let ae=V,me=V+se;ae<me;ae+=3)x(e.getX(ae+0),e.getX(ae+1),e.getX(ae+2))}const N=new ue,O=new ue,L=new ue,I=new ue;function F(j){L.fromBufferAttribute(l,j),I.copy(L);const w=h[j];N.copy(w),N.sub(L.multiplyScalar(L.dot(w))).normalize(),O.crossVectors(I,w);const V=O.dot(m[j])<0?-1:1;f.setXYZW(j,N.x,N.y,N.z,V)}for(let j=0,w=U.length;j<w;++j){const D=U[j],V=D.start,se=D.count;for(let ae=V,me=V+se;ae<me;ae+=3)F(e.getX(ae+0)),F(e.getX(ae+1)),F(e.getX(ae+2))}}computeVertexNormals(){const e=this.index,i=this.getAttribute("position");if(i!==void 0){let r=this.getAttribute("normal");if(r===void 0)r=new _i(new Float32Array(i.count*3),3),this.setAttribute("normal",r);else for(let S=0,M=r.count;S<M;S++)r.setXYZ(S,0,0,0);const l=new ue,c=new ue,f=new ue,h=new ue,m=new ue,p=new ue,v=new ue,_=new ue;if(e)for(let S=0,M=e.count;S<M;S+=3){const E=e.getX(S+0),T=e.getX(S+1),g=e.getX(S+2);l.fromBufferAttribute(i,E),c.fromBufferAttribute(i,T),f.fromBufferAttribute(i,g),v.subVectors(f,c),_.subVectors(l,c),v.cross(_),h.fromBufferAttribute(r,E),m.fromBufferAttribute(r,T),p.fromBufferAttribute(r,g),h.add(v),m.add(v),p.add(v),r.setXYZ(E,h.x,h.y,h.z),r.setXYZ(T,m.x,m.y,m.z),r.setXYZ(g,p.x,p.y,p.z)}else for(let S=0,M=i.count;S<M;S+=3)l.fromBufferAttribute(i,S+0),c.fromBufferAttribute(i,S+1),f.fromBufferAttribute(i,S+2),v.subVectors(f,c),_.subVectors(l,c),v.cross(_),r.setXYZ(S+0,v.x,v.y,v.z),r.setXYZ(S+1,v.x,v.y,v.z),r.setXYZ(S+2,v.x,v.y,v.z);this.normalizeNormals(),r.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let i=0,r=e.count;i<r;i++)vn.fromBufferAttribute(e,i),vn.normalize(),e.setXYZ(i,vn.x,vn.y,vn.z)}toNonIndexed(){function e(h,m){const p=h.array,v=h.itemSize,_=h.normalized,S=new p.constructor(m.length*v);let M=0,E=0;for(let T=0,g=m.length;T<g;T++){h.isInterleavedBufferAttribute?M=m[T]*h.data.stride+h.offset:M=m[T]*v;for(let x=0;x<v;x++)S[E++]=p[M++]}return new _i(S,v,_)}if(this.index===null)return ct("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const i=new Ui,r=this.index.array,l=this.attributes;for(const h in l){const m=l[h],p=e(m,r);i.setAttribute(h,p)}const c=this.morphAttributes;for(const h in c){const m=[],p=c[h];for(let v=0,_=p.length;v<_;v++){const S=p[v],M=e(S,r);m.push(M)}i.morphAttributes[h]=m}i.morphTargetsRelative=this.morphTargetsRelative;const f=this.groups;for(let h=0,m=f.length;h<m;h++){const p=f[h];i.addGroup(p.start,p.count,p.materialIndex)}return i}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const m=this.parameters;for(const p in m)m[p]!==void 0&&(e[p]=m[p]);return e}e.data={attributes:{}};const i=this.index;i!==null&&(e.data.index={type:i.array.constructor.name,array:Array.prototype.slice.call(i.array)});const r=this.attributes;for(const m in r){const p=r[m];e.data.attributes[m]=p.toJSON(e.data)}const l={};let c=!1;for(const m in this.morphAttributes){const p=this.morphAttributes[m],v=[];for(let _=0,S=p.length;_<S;_++){const M=p[_];v.push(M.toJSON(e.data))}v.length>0&&(l[m]=v,c=!0)}c&&(e.data.morphAttributes=l,e.data.morphTargetsRelative=this.morphTargetsRelative);const f=this.groups;f.length>0&&(e.data.groups=JSON.parse(JSON.stringify(f)));const h=this.boundingSphere;return h!==null&&(e.data.boundingSphere=h.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const i={};this.name=e.name;const r=e.index;r!==null&&this.setIndex(r.clone());const l=e.attributes;for(const p in l){const v=l[p];this.setAttribute(p,v.clone(i))}const c=e.morphAttributes;for(const p in c){const v=[],_=c[p];for(let S=0,M=_.length;S<M;S++)v.push(_[S].clone(i));this.morphAttributes[p]=v}this.morphTargetsRelative=e.morphTargetsRelative;const f=e.groups;for(let p=0,v=f.length;p<v;p++){const _=f[p];this.addGroup(_.start,_.count,_.materialIndex)}const h=e.boundingBox;h!==null&&(this.boundingBox=h.clone());const m=e.boundingSphere;return m!==null&&(this.boundingSphere=m.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const F_=new sn,Rr=new Zv,Oc=new cu,z_=new ue,Pc=new ue,Fc=new ue,zc=new ue,Yd=new ue,Ic=new ue,I_=new ue,Bc=new ue;class Wi extends qn{constructor(e=new Ui,i=new xp){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,i){return super.copy(e,i),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const i=this.geometry.morphAttributes,r=Object.keys(i);if(r.length>0){const l=i[r[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,f=l.length;c<f;c++){const h=l[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[h]=c}}}}getVertexPosition(e,i){const r=this.geometry,l=r.attributes.position,c=r.morphAttributes.position,f=r.morphTargetsRelative;i.fromBufferAttribute(l,e);const h=this.morphTargetInfluences;if(c&&h){Ic.set(0,0,0);for(let m=0,p=c.length;m<p;m++){const v=h[m],_=c[m];v!==0&&(Yd.fromBufferAttribute(_,e),f?Ic.addScaledVector(Yd,v):Ic.addScaledVector(Yd.sub(i),v))}i.add(Ic)}return i}raycast(e,i){const r=this.geometry,l=this.material,c=this.matrixWorld;l!==void 0&&(r.boundingSphere===null&&r.computeBoundingSphere(),Oc.copy(r.boundingSphere),Oc.applyMatrix4(c),Rr.copy(e.ray).recast(e.near),!(Oc.containsPoint(Rr.origin)===!1&&(Rr.intersectSphere(Oc,z_)===null||Rr.origin.distanceToSquared(z_)>(e.far-e.near)**2))&&(F_.copy(c).invert(),Rr.copy(e.ray).applyMatrix4(F_),!(r.boundingBox!==null&&Rr.intersectsBox(r.boundingBox)===!1)&&this._computeIntersections(e,i,Rr)))}_computeIntersections(e,i,r){let l;const c=this.geometry,f=this.material,h=c.index,m=c.attributes.position,p=c.attributes.uv,v=c.attributes.uv1,_=c.attributes.normal,S=c.groups,M=c.drawRange;if(h!==null)if(Array.isArray(f))for(let E=0,T=S.length;E<T;E++){const g=S[E],x=f[g.materialIndex],U=Math.max(g.start,M.start),N=Math.min(h.count,Math.min(g.start+g.count,M.start+M.count));for(let O=U,L=N;O<L;O+=3){const I=h.getX(O),F=h.getX(O+1),j=h.getX(O+2);l=Hc(this,x,e,r,p,v,_,I,F,j),l&&(l.faceIndex=Math.floor(O/3),l.face.materialIndex=g.materialIndex,i.push(l))}}else{const E=Math.max(0,M.start),T=Math.min(h.count,M.start+M.count);for(let g=E,x=T;g<x;g+=3){const U=h.getX(g),N=h.getX(g+1),O=h.getX(g+2);l=Hc(this,f,e,r,p,v,_,U,N,O),l&&(l.faceIndex=Math.floor(g/3),i.push(l))}}else if(m!==void 0)if(Array.isArray(f))for(let E=0,T=S.length;E<T;E++){const g=S[E],x=f[g.materialIndex],U=Math.max(g.start,M.start),N=Math.min(m.count,Math.min(g.start+g.count,M.start+M.count));for(let O=U,L=N;O<L;O+=3){const I=O,F=O+1,j=O+2;l=Hc(this,x,e,r,p,v,_,I,F,j),l&&(l.faceIndex=Math.floor(O/3),l.face.materialIndex=g.materialIndex,i.push(l))}}else{const E=Math.max(0,M.start),T=Math.min(m.count,M.start+M.count);for(let g=E,x=T;g<x;g+=3){const U=g,N=g+1,O=g+2;l=Hc(this,f,e,r,p,v,_,U,N,O),l&&(l.faceIndex=Math.floor(g/3),i.push(l))}}}}function ab(s,e,i,r,l,c,f,h){let m;if(e.side===Wn?m=r.intersectTriangle(f,c,l,!0,h):m=r.intersectTriangle(l,c,f,e.side===rr,h),m===null)return null;Bc.copy(h),Bc.applyMatrix4(s.matrixWorld);const p=i.ray.origin.distanceTo(Bc);return p<i.near||p>i.far?null:{distance:p,point:Bc.clone(),object:s}}function Hc(s,e,i,r,l,c,f,h,m,p){s.getVertexPosition(h,Pc),s.getVertexPosition(m,Fc),s.getVertexPosition(p,zc);const v=ab(s,e,i,r,Pc,Fc,zc,I_);if(v){const _=new ue;Ri.getBarycoord(I_,Pc,Fc,zc,_),l&&(v.uv=Ri.getInterpolatedAttribute(l,h,m,p,_,new Xt)),c&&(v.uv1=Ri.getInterpolatedAttribute(c,h,m,p,_,new Xt)),f&&(v.normal=Ri.getInterpolatedAttribute(f,h,m,p,_,new ue),v.normal.dot(r.direction)>0&&v.normal.multiplyScalar(-1));const S={a:h,b:m,c:p,normal:new ue,materialIndex:0};Ri.getNormal(Pc,Fc,zc,S.normal),v.face=S,v.barycoord=_}return v}class ll extends Ui{constructor(e=1,i=1,r=1,l=1,c=1,f=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:i,depth:r,widthSegments:l,heightSegments:c,depthSegments:f};const h=this;l=Math.floor(l),c=Math.floor(c),f=Math.floor(f);const m=[],p=[],v=[],_=[];let S=0,M=0;E("z","y","x",-1,-1,r,i,e,f,c,0),E("z","y","x",1,-1,r,i,-e,f,c,1),E("x","z","y",1,1,e,r,i,l,f,2),E("x","z","y",1,-1,e,r,-i,l,f,3),E("x","y","z",1,-1,e,i,r,l,c,4),E("x","y","z",-1,-1,e,i,-r,l,c,5),this.setIndex(m),this.setAttribute("position",new Sa(p,3)),this.setAttribute("normal",new Sa(v,3)),this.setAttribute("uv",new Sa(_,2));function E(T,g,x,U,N,O,L,I,F,j,w){const D=O/F,V=L/j,se=O/2,ae=L/2,me=I/2,de=F+1,z=j+1;let H=0,K=0;const ye=new ue;for(let ve=0;ve<z;ve++){const A=ve*V-ae;for(let B=0;B<de;B++){const ee=B*D-se;ye[T]=ee*U,ye[g]=A*N,ye[x]=me,p.push(ye.x,ye.y,ye.z),ye[T]=0,ye[g]=0,ye[x]=I>0?1:-1,v.push(ye.x,ye.y,ye.z),_.push(B/F),_.push(1-ve/j),H+=1}}for(let ve=0;ve<j;ve++)for(let A=0;A<F;A++){const B=S+A+de*ve,ee=S+A+de*(ve+1),_e=S+(A+1)+de*(ve+1),Te=S+(A+1)+de*ve;m.push(B,ee,Te),m.push(ee,_e,Te),K+=6}h.addGroup(M,K,w),M+=K,S+=H}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ll(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Hs(s){const e={};for(const i in s){e[i]={};for(const r in s[i]){const l=s[i][r];l&&(l.isColor||l.isMatrix3||l.isMatrix4||l.isVector2||l.isVector3||l.isVector4||l.isTexture||l.isQuaternion)?l.isRenderTargetTexture?(ct("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[i][r]=null):e[i][r]=l.clone():Array.isArray(l)?e[i][r]=l.slice():e[i][r]=l}}return e}function Fn(s){const e={};for(let i=0;i<s.length;i++){const r=Hs(s[i]);for(const l in r)e[l]=r[l]}return e}function rb(s){const e=[];for(let i=0;i<s.length;i++)e.push(s[i].clone());return e}function ex(s){const e=s.getRenderTarget();return e===null?s.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Tt.workingColorSpace}const sb={clone:Hs,merge:Fn};var ob=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,lb=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class qi extends Ws{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=ob,this.fragmentShader=lb,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Hs(e.uniforms),this.uniformsGroups=rb(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const i=super.toJSON(e);i.glslVersion=this.glslVersion,i.uniforms={};for(const l in this.uniforms){const f=this.uniforms[l].value;f&&f.isTexture?i.uniforms[l]={type:"t",value:f.toJSON(e).uuid}:f&&f.isColor?i.uniforms[l]={type:"c",value:f.getHex()}:f&&f.isVector2?i.uniforms[l]={type:"v2",value:f.toArray()}:f&&f.isVector3?i.uniforms[l]={type:"v3",value:f.toArray()}:f&&f.isVector4?i.uniforms[l]={type:"v4",value:f.toArray()}:f&&f.isMatrix3?i.uniforms[l]={type:"m3",value:f.toArray()}:f&&f.isMatrix4?i.uniforms[l]={type:"m4",value:f.toArray()}:i.uniforms[l]={value:f}}Object.keys(this.defines).length>0&&(i.defines=this.defines),i.vertexShader=this.vertexShader,i.fragmentShader=this.fragmentShader,i.lights=this.lights,i.clipping=this.clipping;const r={};for(const l in this.extensions)this.extensions[l]===!0&&(r[l]=!0);return Object.keys(r).length>0&&(i.extensions=r),i}}class tx extends qn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new sn,this.projectionMatrix=new sn,this.projectionMatrixInverse=new sn,this.coordinateSystem=Gi,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,i){return super.copy(e,i),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,i){super.updateWorldMatrix(e,i),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const nr=new ue,B_=new Xt,H_=new Xt;class mi extends tx{constructor(e=50,i=1,r=.1,l=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=r,this.far=l,this.focus=10,this.aspect=i,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,i){return super.copy(e,i),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const i=.5*this.getFilmHeight()/e;this.fov=Qh*2*Math.atan(i),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Ad*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Qh*2*Math.atan(Math.tan(Ad*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,i,r){nr.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(nr.x,nr.y).multiplyScalar(-e/nr.z),nr.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),r.set(nr.x,nr.y).multiplyScalar(-e/nr.z)}getViewSize(e,i){return this.getViewBounds(e,B_,H_),i.subVectors(H_,B_)}setViewOffset(e,i,r,l,c,f){this.aspect=e/i,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=i,this.view.offsetX=r,this.view.offsetY=l,this.view.width=c,this.view.height=f,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let i=e*Math.tan(Ad*.5*this.fov)/this.zoom,r=2*i,l=this.aspect*r,c=-.5*l;const f=this.view;if(this.view!==null&&this.view.enabled){const m=f.fullWidth,p=f.fullHeight;c+=f.offsetX*l/m,i-=f.offsetY*r/p,l*=f.width/m,r*=f.height/p}const h=this.filmOffset;h!==0&&(c+=e*h/this.getFilmWidth()),this.projectionMatrix.makePerspective(c,c+l,i,i-r,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const i=super.toJSON(e);return i.object.fov=this.fov,i.object.zoom=this.zoom,i.object.near=this.near,i.object.far=this.far,i.object.focus=this.focus,i.object.aspect=this.aspect,this.view!==null&&(i.object.view=Object.assign({},this.view)),i.object.filmGauge=this.filmGauge,i.object.filmOffset=this.filmOffset,i}}const Us=-90,Ls=1;class cb extends qn{constructor(e,i,r){super(),this.type="CubeCamera",this.renderTarget=r,this.coordinateSystem=null,this.activeMipmapLevel=0;const l=new mi(Us,Ls,e,i);l.layers=this.layers,this.add(l);const c=new mi(Us,Ls,e,i);c.layers=this.layers,this.add(c);const f=new mi(Us,Ls,e,i);f.layers=this.layers,this.add(f);const h=new mi(Us,Ls,e,i);h.layers=this.layers,this.add(h);const m=new mi(Us,Ls,e,i);m.layers=this.layers,this.add(m);const p=new mi(Us,Ls,e,i);p.layers=this.layers,this.add(p)}updateCoordinateSystem(){const e=this.coordinateSystem,i=this.children.concat(),[r,l,c,f,h,m]=i;for(const p of i)this.remove(p);if(e===Gi)r.up.set(0,1,0),r.lookAt(1,0,0),l.up.set(0,1,0),l.lookAt(-1,0,0),c.up.set(0,0,-1),c.lookAt(0,1,0),f.up.set(0,0,1),f.lookAt(0,-1,0),h.up.set(0,1,0),h.lookAt(0,0,1),m.up.set(0,1,0),m.lookAt(0,0,-1);else if(e===iu)r.up.set(0,-1,0),r.lookAt(-1,0,0),l.up.set(0,-1,0),l.lookAt(1,0,0),c.up.set(0,0,1),c.lookAt(0,1,0),f.up.set(0,0,-1),f.lookAt(0,-1,0),h.up.set(0,-1,0),h.lookAt(0,0,1),m.up.set(0,-1,0),m.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const p of i)this.add(p),p.updateMatrixWorld()}update(e,i){this.parent===null&&this.updateMatrixWorld();const{renderTarget:r,activeMipmapLevel:l}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[c,f,h,m,p,v]=this.children,_=e.getRenderTarget(),S=e.getActiveCubeFace(),M=e.getActiveMipmapLevel(),E=e.xr.enabled;e.xr.enabled=!1;const T=r.texture.generateMipmaps;r.texture.generateMipmaps=!1,e.setRenderTarget(r,0,l),e.render(i,c),e.setRenderTarget(r,1,l),e.render(i,f),e.setRenderTarget(r,2,l),e.render(i,h),e.setRenderTarget(r,3,l),e.render(i,m),e.setRenderTarget(r,4,l),e.render(i,p),r.texture.generateMipmaps=T,e.setRenderTarget(r,5,l),e.render(i,v),e.setRenderTarget(_,S,M),e.xr.enabled=E,r.texture.needsPMREMUpdate=!0}}class nx extends zn{constructor(e=[],i=Fr,r,l,c,f,h,m,p,v){super(e,i,r,l,c,f,h,m,p,v),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class ix extends ki{constructor(e=1,i={}){super(e,e,i),this.isWebGLCubeRenderTarget=!0;const r={width:e,height:e,depth:1},l=[r,r,r,r,r,r];this.texture=new nx(l),this._setTextureOptions(i),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,i){this.texture.type=i.type,this.texture.colorSpace=i.colorSpace,this.texture.generateMipmaps=i.generateMipmaps,this.texture.minFilter=i.minFilter,this.texture.magFilter=i.magFilter;const r={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},l=new ll(5,5,5),c=new qi({name:"CubemapFromEquirect",uniforms:Hs(r.uniforms),vertexShader:r.vertexShader,fragmentShader:r.fragmentShader,side:Wn,blending:va});c.uniforms.tEquirect.value=i;const f=new Wi(l,c),h=i.minFilter;return i.minFilter===Or&&(i.minFilter=On),new cb(1,10,this).update(e,f),i.minFilter=h,f.geometry.dispose(),f.material.dispose(),this}clear(e,i=!0,r=!0,l=!0){const c=e.getRenderTarget();for(let f=0;f<6;f++)e.setRenderTarget(this,f),e.clear(i,r,l);e.setRenderTarget(c)}}class Gc extends qn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const ub={type:"move"};class jd{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Gc,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Gc,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new ue,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new ue),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Gc,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new ue,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new ue),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const i=this._hand;if(i)for(const r of e.hand.values())this._getHandJoint(i,r)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,i,r){let l=null,c=null,f=null;const h=this._targetRay,m=this._grip,p=this._hand;if(e&&i.session.visibilityState!=="visible-blurred"){if(p&&e.hand){f=!0;for(const T of e.hand.values()){const g=i.getJointPose(T,r),x=this._getHandJoint(p,T);g!==null&&(x.matrix.fromArray(g.transform.matrix),x.matrix.decompose(x.position,x.rotation,x.scale),x.matrixWorldNeedsUpdate=!0,x.jointRadius=g.radius),x.visible=g!==null}const v=p.joints["index-finger-tip"],_=p.joints["thumb-tip"],S=v.position.distanceTo(_.position),M=.02,E=.005;p.inputState.pinching&&S>M+E?(p.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!p.inputState.pinching&&S<=M-E&&(p.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else m!==null&&e.gripSpace&&(c=i.getPose(e.gripSpace,r),c!==null&&(m.matrix.fromArray(c.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,c.linearVelocity?(m.hasLinearVelocity=!0,m.linearVelocity.copy(c.linearVelocity)):m.hasLinearVelocity=!1,c.angularVelocity?(m.hasAngularVelocity=!0,m.angularVelocity.copy(c.angularVelocity)):m.hasAngularVelocity=!1));h!==null&&(l=i.getPose(e.targetRaySpace,r),l===null&&c!==null&&(l=c),l!==null&&(h.matrix.fromArray(l.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,l.linearVelocity?(h.hasLinearVelocity=!0,h.linearVelocity.copy(l.linearVelocity)):h.hasLinearVelocity=!1,l.angularVelocity?(h.hasAngularVelocity=!0,h.angularVelocity.copy(l.angularVelocity)):h.hasAngularVelocity=!1,this.dispatchEvent(ub)))}return h!==null&&(h.visible=l!==null),m!==null&&(m.visible=c!==null),p!==null&&(p.visible=f!==null),this}_getHandJoint(e,i){if(e.joints[i.jointName]===void 0){const r=new Gc;r.matrixAutoUpdate=!1,r.visible=!1,e.joints[i.jointName]=r,e.add(r)}return e.joints[i.jointName]}}class Sp{constructor(e,i=25e-5){this.isFogExp2=!0,this.name="",this.color=new Pt(e),this.density=i}clone(){return new Sp(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class fb extends qn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new ba,this.environmentIntensity=1,this.environmentRotation=new ba,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,i){return super.copy(e,i),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const i=super.toJSON(e);return this.fog!==null&&(i.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(i.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(i.object.backgroundIntensity=this.backgroundIntensity),i.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(i.object.environmentIntensity=this.environmentIntensity),i.object.environmentRotation=this.environmentRotation.toArray(),i}}class db extends zn{constructor(e=null,i=1,r=1,l,c,f,h,m,p=wn,v=wn,_,S){super(null,f,h,m,p,v,l,c,_,S),this.isDataTexture=!0,this.image={data:e,width:i,height:r},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Zd=new ue,hb=new ue,pb=new pt;class Ur{constructor(e=new ue(1,0,0),i=0){this.isPlane=!0,this.normal=e,this.constant=i}set(e,i){return this.normal.copy(e),this.constant=i,this}setComponents(e,i,r,l){return this.normal.set(e,i,r),this.constant=l,this}setFromNormalAndCoplanarPoint(e,i){return this.normal.copy(e),this.constant=-i.dot(this.normal),this}setFromCoplanarPoints(e,i,r){const l=Zd.subVectors(r,i).cross(hb.subVectors(e,i)).normalize();return this.setFromNormalAndCoplanarPoint(l,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,i){return i.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,i){const r=e.delta(Zd),l=this.normal.dot(r);if(l===0)return this.distanceToPoint(e.start)===0?i.copy(e.start):null;const c=-(e.start.dot(this.normal)+this.constant)/l;return c<0||c>1?null:i.copy(e.start).addScaledVector(r,c)}intersectsLine(e){const i=this.distanceToPoint(e.start),r=this.distanceToPoint(e.end);return i<0&&r>0||r<0&&i>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,i){const r=i||pb.getNormalMatrix(e),l=this.coplanarPoint(Zd).applyMatrix4(e),c=this.normal.applyMatrix3(r).normalize();return this.constant=-l.dot(c),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Cr=new cu,mb=new Xt(.5,.5),Vc=new ue;class ax{constructor(e=new Ur,i=new Ur,r=new Ur,l=new Ur,c=new Ur,f=new Ur){this.planes=[e,i,r,l,c,f]}set(e,i,r,l,c,f){const h=this.planes;return h[0].copy(e),h[1].copy(i),h[2].copy(r),h[3].copy(l),h[4].copy(c),h[5].copy(f),this}copy(e){const i=this.planes;for(let r=0;r<6;r++)i[r].copy(e.planes[r]);return this}setFromProjectionMatrix(e,i=Gi,r=!1){const l=this.planes,c=e.elements,f=c[0],h=c[1],m=c[2],p=c[3],v=c[4],_=c[5],S=c[6],M=c[7],E=c[8],T=c[9],g=c[10],x=c[11],U=c[12],N=c[13],O=c[14],L=c[15];if(l[0].setComponents(p-f,M-v,x-E,L-U).normalize(),l[1].setComponents(p+f,M+v,x+E,L+U).normalize(),l[2].setComponents(p+h,M+_,x+T,L+N).normalize(),l[3].setComponents(p-h,M-_,x-T,L-N).normalize(),r)l[4].setComponents(m,S,g,O).normalize(),l[5].setComponents(p-m,M-S,x-g,L-O).normalize();else if(l[4].setComponents(p-m,M-S,x-g,L-O).normalize(),i===Gi)l[5].setComponents(p+m,M+S,x+g,L+O).normalize();else if(i===iu)l[5].setComponents(m,S,g,O).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+i);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Cr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const i=e.geometry;i.boundingSphere===null&&i.computeBoundingSphere(),Cr.copy(i.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Cr)}intersectsSprite(e){Cr.center.set(0,0,0);const i=mb.distanceTo(e.center);return Cr.radius=.7071067811865476+i,Cr.applyMatrix4(e.matrixWorld),this.intersectsSphere(Cr)}intersectsSphere(e){const i=this.planes,r=e.center,l=-e.radius;for(let c=0;c<6;c++)if(i[c].distanceToPoint(r)<l)return!1;return!0}intersectsBox(e){const i=this.planes;for(let r=0;r<6;r++){const l=i[r];if(Vc.x=l.normal.x>0?e.max.x:e.min.x,Vc.y=l.normal.y>0?e.max.y:e.min.y,Vc.z=l.normal.z>0?e.max.z:e.min.z,l.distanceToPoint(Vc)<0)return!1}return!0}containsPoint(e){const i=this.planes;for(let r=0;r<6;r++)if(i[r].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class rx extends Ws{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Pt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const G_=new sn,Jh=new Zv,kc=new cu,Xc=new ue;class gb extends qn{constructor(e=new Ui,i=new rx){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,i){return super.copy(e,i),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,i){const r=this.geometry,l=this.matrixWorld,c=e.params.Points.threshold,f=r.drawRange;if(r.boundingSphere===null&&r.computeBoundingSphere(),kc.copy(r.boundingSphere),kc.applyMatrix4(l),kc.radius+=c,e.ray.intersectsSphere(kc)===!1)return;G_.copy(l).invert(),Jh.copy(e.ray).applyMatrix4(G_);const h=c/((this.scale.x+this.scale.y+this.scale.z)/3),m=h*h,p=r.index,_=r.attributes.position;if(p!==null){const S=Math.max(0,f.start),M=Math.min(p.count,f.start+f.count);for(let E=S,T=M;E<T;E++){const g=p.getX(E);Xc.fromBufferAttribute(_,g),V_(Xc,g,m,l,e,i,this)}}else{const S=Math.max(0,f.start),M=Math.min(_.count,f.start+f.count);for(let E=S,T=M;E<T;E++)Xc.fromBufferAttribute(_,E),V_(Xc,E,m,l,e,i,this)}}updateMorphTargets(){const i=this.geometry.morphAttributes,r=Object.keys(i);if(r.length>0){const l=i[r[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,f=l.length;c<f;c++){const h=l[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[h]=c}}}}}function V_(s,e,i,r,l,c,f){const h=Jh.distanceSqToPoint(s);if(h<i){const m=new ue;Jh.closestPointToPoint(s,m),m.applyMatrix4(r);const p=l.ray.origin.distanceTo(m);if(p<l.near||p>l.far)return;c.push({distance:p,distanceToRay:Math.sqrt(h),point:m,index:e,face:null,faceIndex:null,barycoord:null,object:f})}}class nl extends zn{constructor(e,i,r=Xi,l,c,f,h=wn,m=wn,p,v=Ea,_=1){if(v!==Ea&&v!==Pr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const S={width:e,height:i,depth:_};super(S,l,c,f,h,m,v,r,p),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new vp(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const i=super.toJSON(e);return this.compareFunction!==null&&(i.compareFunction=this.compareFunction),i}}class _b extends nl{constructor(e,i=Xi,r=Fr,l,c,f=wn,h=wn,m,p=Ea){const v={width:e,height:e,depth:1},_=[v,v,v,v,v,v];super(e,e,i,r,l,c,f,h,m,p),this.image=_,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class sx extends zn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class cl extends Ui{constructor(e=1,i=1,r=1,l=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:i,widthSegments:r,heightSegments:l};const c=e/2,f=i/2,h=Math.floor(r),m=Math.floor(l),p=h+1,v=m+1,_=e/h,S=i/m,M=[],E=[],T=[],g=[];for(let x=0;x<v;x++){const U=x*S-f;for(let N=0;N<p;N++){const O=N*_-c;E.push(O,-U,0),T.push(0,0,1),g.push(N/h),g.push(1-x/m)}}for(let x=0;x<m;x++)for(let U=0;U<h;U++){const N=U+p*x,O=U+p*(x+1),L=U+1+p*(x+1),I=U+1+p*x;M.push(N,O,I),M.push(O,L,I)}this.setIndex(M),this.setAttribute("position",new Sa(E,3)),this.setAttribute("normal",new Sa(T,3)),this.setAttribute("uv",new Sa(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new cl(e.width,e.height,e.widthSegments,e.heightSegments)}}class vb extends qi{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class xb extends Ws{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=DE,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Sb extends Ws{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class ox extends tx{constructor(e=-1,i=1,r=1,l=-1,c=.1,f=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=i,this.top=r,this.bottom=l,this.near=c,this.far=f,this.updateProjectionMatrix()}copy(e,i){return super.copy(e,i),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,i,r,l,c,f){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=i,this.view.offsetX=r,this.view.offsetY=l,this.view.width=c,this.view.height=f,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),i=(this.top-this.bottom)/(2*this.zoom),r=(this.right+this.left)/2,l=(this.top+this.bottom)/2;let c=r-e,f=r+e,h=l+i,m=l-i;if(this.view!==null&&this.view.enabled){const p=(this.right-this.left)/this.view.fullWidth/this.zoom,v=(this.top-this.bottom)/this.view.fullHeight/this.zoom;c+=p*this.view.offsetX,f=c+p*this.view.width,h-=v*this.view.offsetY,m=h-v*this.view.height}this.projectionMatrix.makeOrthographic(c,f,h,m,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const i=super.toJSON(e);return i.object.zoom=this.zoom,i.object.left=this.left,i.object.right=this.right,i.object.top=this.top,i.object.bottom=this.bottom,i.object.near=this.near,i.object.far=this.far,this.view!==null&&(i.object.view=Object.assign({},this.view)),i}}class yb extends mi{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}class Mb{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const i=performance.now();e=(i-this.oldTime)/1e3,this.oldTime=i,this.elapsedTime+=e}return e}}function k_(s,e,i,r){const l=Eb(r);switch(i){case Xv:return s*e;case qv:return s*e/l.components*l.byteLength;case hp:return s*e/l.components*l.byteLength;case Is:return s*e*2/l.components*l.byteLength;case pp:return s*e*2/l.components*l.byteLength;case Wv:return s*e*3/l.components*l.byteLength;case Ci:return s*e*4/l.components*l.byteLength;case mp:return s*e*4/l.components*l.byteLength;case Kc:case Qc:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case Jc:case $c:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case Sh:case Mh:return Math.max(s,16)*Math.max(e,8)/4;case xh:case yh:return Math.max(s,8)*Math.max(e,8)/2;case Eh:case bh:case Ah:case Rh:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case Th:case Ch:case wh:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case Dh:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case Uh:return Math.floor((s+4)/5)*Math.floor((e+3)/4)*16;case Lh:return Math.floor((s+4)/5)*Math.floor((e+4)/5)*16;case Nh:return Math.floor((s+5)/6)*Math.floor((e+4)/5)*16;case Oh:return Math.floor((s+5)/6)*Math.floor((e+5)/6)*16;case Ph:return Math.floor((s+7)/8)*Math.floor((e+4)/5)*16;case Fh:return Math.floor((s+7)/8)*Math.floor((e+5)/6)*16;case zh:return Math.floor((s+7)/8)*Math.floor((e+7)/8)*16;case Ih:return Math.floor((s+9)/10)*Math.floor((e+4)/5)*16;case Bh:return Math.floor((s+9)/10)*Math.floor((e+5)/6)*16;case Hh:return Math.floor((s+9)/10)*Math.floor((e+7)/8)*16;case Gh:return Math.floor((s+9)/10)*Math.floor((e+9)/10)*16;case Vh:return Math.floor((s+11)/12)*Math.floor((e+9)/10)*16;case kh:return Math.floor((s+11)/12)*Math.floor((e+11)/12)*16;case Xh:case Wh:case qh:return Math.ceil(s/4)*Math.ceil(e/4)*16;case Yh:case jh:return Math.ceil(s/4)*Math.ceil(e/4)*8;case Zh:case Kh:return Math.ceil(s/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${i} format.`)}function Eb(s){switch(s){case gi:case Hv:return{byteLength:1,components:1};case $o:case Gv:case Ma:return{byteLength:2,components:1};case fp:case dp:return{byteLength:2,components:4};case Xi:case up:case Hi:return{byteLength:4,components:1};case Vv:case kv:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${s}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:cp}}));typeof window<"u"&&(window.__THREE__?ct("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=cp);function lx(){let s=null,e=!1,i=null,r=null;function l(c,f){i(c,f),r=s.requestAnimationFrame(l)}return{start:function(){e!==!0&&i!==null&&(r=s.requestAnimationFrame(l),e=!0)},stop:function(){s.cancelAnimationFrame(r),e=!1},setAnimationLoop:function(c){i=c},setContext:function(c){s=c}}}function bb(s){const e=new WeakMap;function i(h,m){const p=h.array,v=h.usage,_=p.byteLength,S=s.createBuffer();s.bindBuffer(m,S),s.bufferData(m,p,v),h.onUploadCallback();let M;if(p instanceof Float32Array)M=s.FLOAT;else if(typeof Float16Array<"u"&&p instanceof Float16Array)M=s.HALF_FLOAT;else if(p instanceof Uint16Array)h.isFloat16BufferAttribute?M=s.HALF_FLOAT:M=s.UNSIGNED_SHORT;else if(p instanceof Int16Array)M=s.SHORT;else if(p instanceof Uint32Array)M=s.UNSIGNED_INT;else if(p instanceof Int32Array)M=s.INT;else if(p instanceof Int8Array)M=s.BYTE;else if(p instanceof Uint8Array)M=s.UNSIGNED_BYTE;else if(p instanceof Uint8ClampedArray)M=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+p);return{buffer:S,type:M,bytesPerElement:p.BYTES_PER_ELEMENT,version:h.version,size:_}}function r(h,m,p){const v=m.array,_=m.updateRanges;if(s.bindBuffer(p,h),_.length===0)s.bufferSubData(p,0,v);else{_.sort((M,E)=>M.start-E.start);let S=0;for(let M=1;M<_.length;M++){const E=_[S],T=_[M];T.start<=E.start+E.count+1?E.count=Math.max(E.count,T.start+T.count-E.start):(++S,_[S]=T)}_.length=S+1;for(let M=0,E=_.length;M<E;M++){const T=_[M];s.bufferSubData(p,T.start*v.BYTES_PER_ELEMENT,v,T.start,T.count)}m.clearUpdateRanges()}m.onUploadCallback()}function l(h){return h.isInterleavedBufferAttribute&&(h=h.data),e.get(h)}function c(h){h.isInterleavedBufferAttribute&&(h=h.data);const m=e.get(h);m&&(s.deleteBuffer(m.buffer),e.delete(h))}function f(h,m){if(h.isInterleavedBufferAttribute&&(h=h.data),h.isGLBufferAttribute){const v=e.get(h);(!v||v.version<h.version)&&e.set(h,{buffer:h.buffer,type:h.type,bytesPerElement:h.elementSize,version:h.version});return}const p=e.get(h);if(p===void 0)e.set(h,i(h,m));else if(p.version<h.version){if(p.size!==h.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(p.buffer,h,m),p.version=h.version}}return{get:l,remove:c,update:f}}var Tb=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Ab=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,Rb=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Cb=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,wb=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Db=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Ub=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Lb=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Nb=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,Ob=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Pb=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Fb=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,zb=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,Ib=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,Bb=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Hb=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,Gb=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Vb=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,kb=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Xb=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Wb=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,qb=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Yb=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,jb=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,Zb=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,Kb=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,Qb=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Jb=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,$b=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,eT=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,tT="gl_FragColor = linearToOutputTexel( gl_FragColor );",nT=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,iT=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,aT=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,rT=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,sT=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,oT=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,lT=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,cT=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,uT=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,fT=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,dT=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,hT=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,pT=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,mT=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,gT=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,_T=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,vT=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,xT=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,ST=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,yT=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,MT=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,ET=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
		vec3 iridescenceFresnelDielectric;
		vec3 iridescenceFresnelMetallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return v;
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
vec3 BRDF_GGX_Multiscatter( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 singleScatter = BRDF_GGX( lightDir, viewDir, normal, material );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 dfgV = texture2D( dfgLUT, vec2( material.roughness, dotNV ) ).rg;
	vec2 dfgL = texture2D( dfgLUT, vec2( material.roughness, dotNL ) ).rg;
	vec3 FssEss_V = material.specularColorBlended * dfgV.x + material.specularF90 * dfgV.y;
	vec3 FssEss_L = material.specularColorBlended * dfgL.x + material.specularF90 * dfgL.y;
	float Ess_V = dfgV.x + dfgV.y;
	float Ess_L = dfgL.x + dfgL.y;
	float Ems_V = 1.0 - Ess_V;
	float Ems_L = 1.0 - Ess_L;
	vec3 Favg = material.specularColorBlended + ( 1.0 - material.specularColorBlended ) * 0.047619;
	vec3 Fms = FssEss_V * FssEss_L * Favg / ( 1.0 - Ems_V * Ems_L * Favg + EPSILON );
	float compensationFactor = Ems_V * Ems_L;
	vec3 multiScatter = Fms * compensationFactor;
	return singleScatter + multiScatter;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( vec3( 1.0 ) - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX_Multiscatter( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnelDielectric, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceFresnelMetallic, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,bT=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( material.iridescenceFresnelDielectric, material.iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,TT=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,AT=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,RT=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,CT=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,wT=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,DT=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,UT=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,LT=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,NT=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,OT=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,PT=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,FT=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,zT=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,IT=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,BT=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,HT=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,GT=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,VT=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,kT=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,XT=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,WT=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,qT=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,YT=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,jT=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,ZT=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,KT=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,QT=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,JT=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,$T=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,e1=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,t1=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,n1=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,i1=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,a1=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,r1=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,s1=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * 6.28318530718;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * 6.28318530718;
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * vogelDiskSample( 0, 5, phi ).x + bitangent * vogelDiskSample( 0, 5, phi ).y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * vogelDiskSample( 1, 5, phi ).x + bitangent * vogelDiskSample( 1, 5, phi ).y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * vogelDiskSample( 2, 5, phi ).x + bitangent * vogelDiskSample( 2, 5, phi ).y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * vogelDiskSample( 3, 5, phi ).x + bitangent * vogelDiskSample( 3, 5, phi ).y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * vogelDiskSample( 4, 5, phi ).x + bitangent * vogelDiskSample( 4, 5, phi ).y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadow = step( depth, dp );
			#else
				shadow = step( dp, depth );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,o1=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,l1=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,c1=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,u1=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,f1=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,d1=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,h1=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,p1=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,m1=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,g1=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,_1=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,v1=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,x1=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,S1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,y1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,M1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,E1=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const b1=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,T1=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,A1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,R1=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,C1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,w1=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,D1=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,U1=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,L1=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,N1=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,O1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,P1=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,F1=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,z1=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,I1=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,B1=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,H1=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,G1=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,V1=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,k1=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,X1=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,W1=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,q1=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Y1=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,j1=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,Z1=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,K1=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Q1=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,J1=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,$1=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,eA=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,tA=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,nA=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,iA=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,mt={alphahash_fragment:Tb,alphahash_pars_fragment:Ab,alphamap_fragment:Rb,alphamap_pars_fragment:Cb,alphatest_fragment:wb,alphatest_pars_fragment:Db,aomap_fragment:Ub,aomap_pars_fragment:Lb,batching_pars_vertex:Nb,batching_vertex:Ob,begin_vertex:Pb,beginnormal_vertex:Fb,bsdfs:zb,iridescence_fragment:Ib,bumpmap_pars_fragment:Bb,clipping_planes_fragment:Hb,clipping_planes_pars_fragment:Gb,clipping_planes_pars_vertex:Vb,clipping_planes_vertex:kb,color_fragment:Xb,color_pars_fragment:Wb,color_pars_vertex:qb,color_vertex:Yb,common:jb,cube_uv_reflection_fragment:Zb,defaultnormal_vertex:Kb,displacementmap_pars_vertex:Qb,displacementmap_vertex:Jb,emissivemap_fragment:$b,emissivemap_pars_fragment:eT,colorspace_fragment:tT,colorspace_pars_fragment:nT,envmap_fragment:iT,envmap_common_pars_fragment:aT,envmap_pars_fragment:rT,envmap_pars_vertex:sT,envmap_physical_pars_fragment:_T,envmap_vertex:oT,fog_vertex:lT,fog_pars_vertex:cT,fog_fragment:uT,fog_pars_fragment:fT,gradientmap_pars_fragment:dT,lightmap_pars_fragment:hT,lights_lambert_fragment:pT,lights_lambert_pars_fragment:mT,lights_pars_begin:gT,lights_toon_fragment:vT,lights_toon_pars_fragment:xT,lights_phong_fragment:ST,lights_phong_pars_fragment:yT,lights_physical_fragment:MT,lights_physical_pars_fragment:ET,lights_fragment_begin:bT,lights_fragment_maps:TT,lights_fragment_end:AT,logdepthbuf_fragment:RT,logdepthbuf_pars_fragment:CT,logdepthbuf_pars_vertex:wT,logdepthbuf_vertex:DT,map_fragment:UT,map_pars_fragment:LT,map_particle_fragment:NT,map_particle_pars_fragment:OT,metalnessmap_fragment:PT,metalnessmap_pars_fragment:FT,morphinstance_vertex:zT,morphcolor_vertex:IT,morphnormal_vertex:BT,morphtarget_pars_vertex:HT,morphtarget_vertex:GT,normal_fragment_begin:VT,normal_fragment_maps:kT,normal_pars_fragment:XT,normal_pars_vertex:WT,normal_vertex:qT,normalmap_pars_fragment:YT,clearcoat_normal_fragment_begin:jT,clearcoat_normal_fragment_maps:ZT,clearcoat_pars_fragment:KT,iridescence_pars_fragment:QT,opaque_fragment:JT,packing:$T,premultiplied_alpha_fragment:e1,project_vertex:t1,dithering_fragment:n1,dithering_pars_fragment:i1,roughnessmap_fragment:a1,roughnessmap_pars_fragment:r1,shadowmap_pars_fragment:s1,shadowmap_pars_vertex:o1,shadowmap_vertex:l1,shadowmask_pars_fragment:c1,skinbase_vertex:u1,skinning_pars_vertex:f1,skinning_vertex:d1,skinnormal_vertex:h1,specularmap_fragment:p1,specularmap_pars_fragment:m1,tonemapping_fragment:g1,tonemapping_pars_fragment:_1,transmission_fragment:v1,transmission_pars_fragment:x1,uv_pars_fragment:S1,uv_pars_vertex:y1,uv_vertex:M1,worldpos_vertex:E1,background_vert:b1,background_frag:T1,backgroundCube_vert:A1,backgroundCube_frag:R1,cube_vert:C1,cube_frag:w1,depth_vert:D1,depth_frag:U1,distance_vert:L1,distance_frag:N1,equirect_vert:O1,equirect_frag:P1,linedashed_vert:F1,linedashed_frag:z1,meshbasic_vert:I1,meshbasic_frag:B1,meshlambert_vert:H1,meshlambert_frag:G1,meshmatcap_vert:V1,meshmatcap_frag:k1,meshnormal_vert:X1,meshnormal_frag:W1,meshphong_vert:q1,meshphong_frag:Y1,meshphysical_vert:j1,meshphysical_frag:Z1,meshtoon_vert:K1,meshtoon_frag:Q1,points_vert:J1,points_frag:$1,shadow_vert:eA,shadow_frag:tA,sprite_vert:nA,sprite_frag:iA},Be={common:{diffuse:{value:new Pt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new pt},alphaMap:{value:null},alphaMapTransform:{value:new pt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new pt}},envmap:{envMap:{value:null},envMapRotation:{value:new pt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new pt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new pt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new pt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new pt},normalScale:{value:new Xt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new pt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new pt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new pt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new pt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Pt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Pt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new pt},alphaTest:{value:0},uvTransform:{value:new pt}},sprite:{diffuse:{value:new Pt(16777215)},opacity:{value:1},center:{value:new Xt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new pt},alphaMap:{value:null},alphaMapTransform:{value:new pt},alphaTest:{value:0}}},Ii={basic:{uniforms:Fn([Be.common,Be.specularmap,Be.envmap,Be.aomap,Be.lightmap,Be.fog]),vertexShader:mt.meshbasic_vert,fragmentShader:mt.meshbasic_frag},lambert:{uniforms:Fn([Be.common,Be.specularmap,Be.envmap,Be.aomap,Be.lightmap,Be.emissivemap,Be.bumpmap,Be.normalmap,Be.displacementmap,Be.fog,Be.lights,{emissive:{value:new Pt(0)}}]),vertexShader:mt.meshlambert_vert,fragmentShader:mt.meshlambert_frag},phong:{uniforms:Fn([Be.common,Be.specularmap,Be.envmap,Be.aomap,Be.lightmap,Be.emissivemap,Be.bumpmap,Be.normalmap,Be.displacementmap,Be.fog,Be.lights,{emissive:{value:new Pt(0)},specular:{value:new Pt(1118481)},shininess:{value:30}}]),vertexShader:mt.meshphong_vert,fragmentShader:mt.meshphong_frag},standard:{uniforms:Fn([Be.common,Be.envmap,Be.aomap,Be.lightmap,Be.emissivemap,Be.bumpmap,Be.normalmap,Be.displacementmap,Be.roughnessmap,Be.metalnessmap,Be.fog,Be.lights,{emissive:{value:new Pt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:mt.meshphysical_vert,fragmentShader:mt.meshphysical_frag},toon:{uniforms:Fn([Be.common,Be.aomap,Be.lightmap,Be.emissivemap,Be.bumpmap,Be.normalmap,Be.displacementmap,Be.gradientmap,Be.fog,Be.lights,{emissive:{value:new Pt(0)}}]),vertexShader:mt.meshtoon_vert,fragmentShader:mt.meshtoon_frag},matcap:{uniforms:Fn([Be.common,Be.bumpmap,Be.normalmap,Be.displacementmap,Be.fog,{matcap:{value:null}}]),vertexShader:mt.meshmatcap_vert,fragmentShader:mt.meshmatcap_frag},points:{uniforms:Fn([Be.points,Be.fog]),vertexShader:mt.points_vert,fragmentShader:mt.points_frag},dashed:{uniforms:Fn([Be.common,Be.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:mt.linedashed_vert,fragmentShader:mt.linedashed_frag},depth:{uniforms:Fn([Be.common,Be.displacementmap]),vertexShader:mt.depth_vert,fragmentShader:mt.depth_frag},normal:{uniforms:Fn([Be.common,Be.bumpmap,Be.normalmap,Be.displacementmap,{opacity:{value:1}}]),vertexShader:mt.meshnormal_vert,fragmentShader:mt.meshnormal_frag},sprite:{uniforms:Fn([Be.sprite,Be.fog]),vertexShader:mt.sprite_vert,fragmentShader:mt.sprite_frag},background:{uniforms:{uvTransform:{value:new pt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:mt.background_vert,fragmentShader:mt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new pt}},vertexShader:mt.backgroundCube_vert,fragmentShader:mt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:mt.cube_vert,fragmentShader:mt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:mt.equirect_vert,fragmentShader:mt.equirect_frag},distance:{uniforms:Fn([Be.common,Be.displacementmap,{referencePosition:{value:new ue},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:mt.distance_vert,fragmentShader:mt.distance_frag},shadow:{uniforms:Fn([Be.lights,Be.fog,{color:{value:new Pt(0)},opacity:{value:1}}]),vertexShader:mt.shadow_vert,fragmentShader:mt.shadow_frag}};Ii.physical={uniforms:Fn([Ii.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new pt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new pt},clearcoatNormalScale:{value:new Xt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new pt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new pt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new pt},sheen:{value:0},sheenColor:{value:new Pt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new pt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new pt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new pt},transmissionSamplerSize:{value:new Xt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new pt},attenuationDistance:{value:0},attenuationColor:{value:new Pt(0)},specularColor:{value:new Pt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new pt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new pt},anisotropyVector:{value:new Xt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new pt}}]),vertexShader:mt.meshphysical_vert,fragmentShader:mt.meshphysical_frag};const Wc={r:0,b:0,g:0},wr=new ba,aA=new sn;function rA(s,e,i,r,l,c,f){const h=new Pt(0);let m=c===!0?0:1,p,v,_=null,S=0,M=null;function E(N){let O=N.isScene===!0?N.background:null;return O&&O.isTexture&&(O=(N.backgroundBlurriness>0?i:e).get(O)),O}function T(N){let O=!1;const L=E(N);L===null?x(h,m):L&&L.isColor&&(x(L,1),O=!0);const I=s.xr.getEnvironmentBlendMode();I==="additive"?r.buffers.color.setClear(0,0,0,1,f):I==="alpha-blend"&&r.buffers.color.setClear(0,0,0,0,f),(s.autoClear||O)&&(r.buffers.depth.setTest(!0),r.buffers.depth.setMask(!0),r.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function g(N,O){const L=E(O);L&&(L.isCubeTexture||L.mapping===lu)?(v===void 0&&(v=new Wi(new ll(1,1,1),new qi({name:"BackgroundCubeMaterial",uniforms:Hs(Ii.backgroundCube.uniforms),vertexShader:Ii.backgroundCube.vertexShader,fragmentShader:Ii.backgroundCube.fragmentShader,side:Wn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),v.geometry.deleteAttribute("normal"),v.geometry.deleteAttribute("uv"),v.onBeforeRender=function(I,F,j){this.matrixWorld.copyPosition(j.matrixWorld)},Object.defineProperty(v.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),l.update(v)),wr.copy(O.backgroundRotation),wr.x*=-1,wr.y*=-1,wr.z*=-1,L.isCubeTexture&&L.isRenderTargetTexture===!1&&(wr.y*=-1,wr.z*=-1),v.material.uniforms.envMap.value=L,v.material.uniforms.flipEnvMap.value=L.isCubeTexture&&L.isRenderTargetTexture===!1?-1:1,v.material.uniforms.backgroundBlurriness.value=O.backgroundBlurriness,v.material.uniforms.backgroundIntensity.value=O.backgroundIntensity,v.material.uniforms.backgroundRotation.value.setFromMatrix4(aA.makeRotationFromEuler(wr)),v.material.toneMapped=Tt.getTransfer(L.colorSpace)!==Ht,(_!==L||S!==L.version||M!==s.toneMapping)&&(v.material.needsUpdate=!0,_=L,S=L.version,M=s.toneMapping),v.layers.enableAll(),N.unshift(v,v.geometry,v.material,0,0,null)):L&&L.isTexture&&(p===void 0&&(p=new Wi(new cl(2,2),new qi({name:"BackgroundMaterial",uniforms:Hs(Ii.background.uniforms),vertexShader:Ii.background.vertexShader,fragmentShader:Ii.background.fragmentShader,side:rr,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),p.geometry.deleteAttribute("normal"),Object.defineProperty(p.material,"map",{get:function(){return this.uniforms.t2D.value}}),l.update(p)),p.material.uniforms.t2D.value=L,p.material.uniforms.backgroundIntensity.value=O.backgroundIntensity,p.material.toneMapped=Tt.getTransfer(L.colorSpace)!==Ht,L.matrixAutoUpdate===!0&&L.updateMatrix(),p.material.uniforms.uvTransform.value.copy(L.matrix),(_!==L||S!==L.version||M!==s.toneMapping)&&(p.material.needsUpdate=!0,_=L,S=L.version,M=s.toneMapping),p.layers.enableAll(),N.unshift(p,p.geometry,p.material,0,0,null))}function x(N,O){N.getRGB(Wc,ex(s)),r.buffers.color.setClear(Wc.r,Wc.g,Wc.b,O,f)}function U(){v!==void 0&&(v.geometry.dispose(),v.material.dispose(),v=void 0),p!==void 0&&(p.geometry.dispose(),p.material.dispose(),p=void 0)}return{getClearColor:function(){return h},setClearColor:function(N,O=1){h.set(N),m=O,x(h,m)},getClearAlpha:function(){return m},setClearAlpha:function(N){m=N,x(h,m)},render:T,addToRenderList:g,dispose:U}}function sA(s,e){const i=s.getParameter(s.MAX_VERTEX_ATTRIBS),r={},l=S(null);let c=l,f=!1;function h(D,V,se,ae,me){let de=!1;const z=_(ae,se,V);c!==z&&(c=z,p(c.object)),de=M(D,ae,se,me),de&&E(D,ae,se,me),me!==null&&e.update(me,s.ELEMENT_ARRAY_BUFFER),(de||f)&&(f=!1,O(D,V,se,ae),me!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,e.get(me).buffer))}function m(){return s.createVertexArray()}function p(D){return s.bindVertexArray(D)}function v(D){return s.deleteVertexArray(D)}function _(D,V,se){const ae=se.wireframe===!0;let me=r[D.id];me===void 0&&(me={},r[D.id]=me);let de=me[V.id];de===void 0&&(de={},me[V.id]=de);let z=de[ae];return z===void 0&&(z=S(m()),de[ae]=z),z}function S(D){const V=[],se=[],ae=[];for(let me=0;me<i;me++)V[me]=0,se[me]=0,ae[me]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:V,enabledAttributes:se,attributeDivisors:ae,object:D,attributes:{},index:null}}function M(D,V,se,ae){const me=c.attributes,de=V.attributes;let z=0;const H=se.getAttributes();for(const K in H)if(H[K].location>=0){const ve=me[K];let A=de[K];if(A===void 0&&(K==="instanceMatrix"&&D.instanceMatrix&&(A=D.instanceMatrix),K==="instanceColor"&&D.instanceColor&&(A=D.instanceColor)),ve===void 0||ve.attribute!==A||A&&ve.data!==A.data)return!0;z++}return c.attributesNum!==z||c.index!==ae}function E(D,V,se,ae){const me={},de=V.attributes;let z=0;const H=se.getAttributes();for(const K in H)if(H[K].location>=0){let ve=de[K];ve===void 0&&(K==="instanceMatrix"&&D.instanceMatrix&&(ve=D.instanceMatrix),K==="instanceColor"&&D.instanceColor&&(ve=D.instanceColor));const A={};A.attribute=ve,ve&&ve.data&&(A.data=ve.data),me[K]=A,z++}c.attributes=me,c.attributesNum=z,c.index=ae}function T(){const D=c.newAttributes;for(let V=0,se=D.length;V<se;V++)D[V]=0}function g(D){x(D,0)}function x(D,V){const se=c.newAttributes,ae=c.enabledAttributes,me=c.attributeDivisors;se[D]=1,ae[D]===0&&(s.enableVertexAttribArray(D),ae[D]=1),me[D]!==V&&(s.vertexAttribDivisor(D,V),me[D]=V)}function U(){const D=c.newAttributes,V=c.enabledAttributes;for(let se=0,ae=V.length;se<ae;se++)V[se]!==D[se]&&(s.disableVertexAttribArray(se),V[se]=0)}function N(D,V,se,ae,me,de,z){z===!0?s.vertexAttribIPointer(D,V,se,me,de):s.vertexAttribPointer(D,V,se,ae,me,de)}function O(D,V,se,ae){T();const me=ae.attributes,de=se.getAttributes(),z=V.defaultAttributeValues;for(const H in de){const K=de[H];if(K.location>=0){let ye=me[H];if(ye===void 0&&(H==="instanceMatrix"&&D.instanceMatrix&&(ye=D.instanceMatrix),H==="instanceColor"&&D.instanceColor&&(ye=D.instanceColor)),ye!==void 0){const ve=ye.normalized,A=ye.itemSize,B=e.get(ye);if(B===void 0)continue;const ee=B.buffer,_e=B.type,Te=B.bytesPerElement,Q=_e===s.INT||_e===s.UNSIGNED_INT||ye.gpuType===up;if(ye.isInterleavedBufferAttribute){const ce=ye.data,Re=ce.stride,Ne=ye.offset;if(ce.isInstancedInterleavedBuffer){for(let re=0;re<K.locationSize;re++)x(K.location+re,ce.meshPerAttribute);D.isInstancedMesh!==!0&&ae._maxInstanceCount===void 0&&(ae._maxInstanceCount=ce.meshPerAttribute*ce.count)}else for(let re=0;re<K.locationSize;re++)g(K.location+re);s.bindBuffer(s.ARRAY_BUFFER,ee);for(let re=0;re<K.locationSize;re++)N(K.location+re,A/K.locationSize,_e,ve,Re*Te,(Ne+A/K.locationSize*re)*Te,Q)}else{if(ye.isInstancedBufferAttribute){for(let ce=0;ce<K.locationSize;ce++)x(K.location+ce,ye.meshPerAttribute);D.isInstancedMesh!==!0&&ae._maxInstanceCount===void 0&&(ae._maxInstanceCount=ye.meshPerAttribute*ye.count)}else for(let ce=0;ce<K.locationSize;ce++)g(K.location+ce);s.bindBuffer(s.ARRAY_BUFFER,ee);for(let ce=0;ce<K.locationSize;ce++)N(K.location+ce,A/K.locationSize,_e,ve,A*Te,A/K.locationSize*ce*Te,Q)}}else if(z!==void 0){const ve=z[H];if(ve!==void 0)switch(ve.length){case 2:s.vertexAttrib2fv(K.location,ve);break;case 3:s.vertexAttrib3fv(K.location,ve);break;case 4:s.vertexAttrib4fv(K.location,ve);break;default:s.vertexAttrib1fv(K.location,ve)}}}}U()}function L(){j();for(const D in r){const V=r[D];for(const se in V){const ae=V[se];for(const me in ae)v(ae[me].object),delete ae[me];delete V[se]}delete r[D]}}function I(D){if(r[D.id]===void 0)return;const V=r[D.id];for(const se in V){const ae=V[se];for(const me in ae)v(ae[me].object),delete ae[me];delete V[se]}delete r[D.id]}function F(D){for(const V in r){const se=r[V];if(se[D.id]===void 0)continue;const ae=se[D.id];for(const me in ae)v(ae[me].object),delete ae[me];delete se[D.id]}}function j(){w(),f=!0,c!==l&&(c=l,p(c.object))}function w(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:h,reset:j,resetDefaultState:w,dispose:L,releaseStatesOfGeometry:I,releaseStatesOfProgram:F,initAttributes:T,enableAttribute:g,disableUnusedAttributes:U}}function oA(s,e,i){let r;function l(p){r=p}function c(p,v){s.drawArrays(r,p,v),i.update(v,r,1)}function f(p,v,_){_!==0&&(s.drawArraysInstanced(r,p,v,_),i.update(v,r,_))}function h(p,v,_){if(_===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(r,p,0,v,0,_);let M=0;for(let E=0;E<_;E++)M+=v[E];i.update(M,r,1)}function m(p,v,_,S){if(_===0)return;const M=e.get("WEBGL_multi_draw");if(M===null)for(let E=0;E<p.length;E++)f(p[E],v[E],S[E]);else{M.multiDrawArraysInstancedWEBGL(r,p,0,v,0,S,0,_);let E=0;for(let T=0;T<_;T++)E+=v[T]*S[T];i.update(E,r,1)}}this.setMode=l,this.render=c,this.renderInstances=f,this.renderMultiDraw=h,this.renderMultiDrawInstances=m}function lA(s,e,i,r){let l;function c(){if(l!==void 0)return l;if(e.has("EXT_texture_filter_anisotropic")===!0){const F=e.get("EXT_texture_filter_anisotropic");l=s.getParameter(F.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else l=0;return l}function f(F){return!(F!==Ci&&r.convert(F)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function h(F){const j=F===Ma&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(F!==gi&&r.convert(F)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE)&&F!==Hi&&!j)}function m(F){if(F==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";F="mediump"}return F==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let p=i.precision!==void 0?i.precision:"highp";const v=m(p);v!==p&&(ct("WebGLRenderer:",p,"not supported, using",v,"instead."),p=v);const _=i.logarithmicDepthBuffer===!0,S=i.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),M=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),E=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),T=s.getParameter(s.MAX_TEXTURE_SIZE),g=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),x=s.getParameter(s.MAX_VERTEX_ATTRIBS),U=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),N=s.getParameter(s.MAX_VARYING_VECTORS),O=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),L=s.getParameter(s.MAX_SAMPLES),I=s.getParameter(s.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:c,getMaxPrecision:m,textureFormatReadable:f,textureTypeReadable:h,precision:p,logarithmicDepthBuffer:_,reversedDepthBuffer:S,maxTextures:M,maxVertexTextures:E,maxTextureSize:T,maxCubemapSize:g,maxAttributes:x,maxVertexUniforms:U,maxVaryings:N,maxFragmentUniforms:O,maxSamples:L,samples:I}}function cA(s){const e=this;let i=null,r=0,l=!1,c=!1;const f=new Ur,h=new pt,m={value:null,needsUpdate:!1};this.uniform=m,this.numPlanes=0,this.numIntersection=0,this.init=function(_,S){const M=_.length!==0||S||r!==0||l;return l=S,r=_.length,M},this.beginShadows=function(){c=!0,v(null)},this.endShadows=function(){c=!1},this.setGlobalState=function(_,S){i=v(_,S,0)},this.setState=function(_,S,M){const E=_.clippingPlanes,T=_.clipIntersection,g=_.clipShadows,x=s.get(_);if(!l||E===null||E.length===0||c&&!g)c?v(null):p();else{const U=c?0:r,N=U*4;let O=x.clippingState||null;m.value=O,O=v(E,S,N,M);for(let L=0;L!==N;++L)O[L]=i[L];x.clippingState=O,this.numIntersection=T?this.numPlanes:0,this.numPlanes+=U}};function p(){m.value!==i&&(m.value=i,m.needsUpdate=r>0),e.numPlanes=r,e.numIntersection=0}function v(_,S,M,E){const T=_!==null?_.length:0;let g=null;if(T!==0){if(g=m.value,E!==!0||g===null){const x=M+T*4,U=S.matrixWorldInverse;h.getNormalMatrix(U),(g===null||g.length<x)&&(g=new Float32Array(x));for(let N=0,O=M;N!==T;++N,O+=4)f.copy(_[N]).applyMatrix4(U,h),f.normal.toArray(g,O),g[O+3]=f.constant}m.value=g,m.needsUpdate=!0}return e.numPlanes=T,e.numIntersection=0,g}}function uA(s){let e=new WeakMap;function i(f,h){return h===mh?f.mapping=Fr:h===gh&&(f.mapping=zs),f}function r(f){if(f&&f.isTexture){const h=f.mapping;if(h===mh||h===gh)if(e.has(f)){const m=e.get(f).texture;return i(m,f.mapping)}else{const m=f.image;if(m&&m.height>0){const p=new ix(m.height);return p.fromEquirectangularTexture(s,f),e.set(f,p),f.addEventListener("dispose",l),i(p.texture,f.mapping)}else return null}}return f}function l(f){const h=f.target;h.removeEventListener("dispose",l);const m=e.get(h);m!==void 0&&(e.delete(h),m.dispose())}function c(){e=new WeakMap}return{get:r,dispose:c}}const ar=4,X_=[.125,.215,.35,.446,.526,.582],Nr=20,fA=256,jo=new ox,W_=new Pt;let Kd=null,Qd=0,Jd=0,$d=!1;const dA=new ue;class q_{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,i=0,r=.1,l=100,c={}){const{size:f=256,position:h=dA}=c;Kd=this._renderer.getRenderTarget(),Qd=this._renderer.getActiveCubeFace(),Jd=this._renderer.getActiveMipmapLevel(),$d=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(f);const m=this._allocateTargets();return m.depthBuffer=!0,this._sceneToCubeUV(e,r,l,m,h),i>0&&this._blur(m,0,0,i),this._applyPMREM(m),this._cleanup(m),m}fromEquirectangular(e,i=null){return this._fromTexture(e,i)}fromCubemap(e,i=null){return this._fromTexture(e,i)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Z_(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=j_(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(Kd,Qd,Jd),this._renderer.xr.enabled=$d,e.scissorTest=!1,Ns(e,0,0,e.width,e.height)}_fromTexture(e,i){e.mapping===Fr||e.mapping===zs?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Kd=this._renderer.getRenderTarget(),Qd=this._renderer.getActiveCubeFace(),Jd=this._renderer.getActiveMipmapLevel(),$d=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const r=i||this._allocateTargets();return this._textureToCubeUV(e,r),this._applyPMREM(r),this._cleanup(r),r}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),i=4*this._cubeSize,r={magFilter:On,minFilter:On,generateMipmaps:!1,type:Ma,format:Ci,colorSpace:Bs,depthBuffer:!1},l=Y_(e,i,r);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==i){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Y_(e,i,r);const{_lodMax:c}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=hA(c)),this._blurMaterial=mA(c,e,i),this._ggxMaterial=pA(c,e,i)}return l}_compileMaterial(e){const i=new Wi(new Ui,e);this._renderer.compile(i,jo)}_sceneToCubeUV(e,i,r,l,c){const m=new mi(90,1,i,r),p=[1,-1,1,1,1,1],v=[1,1,1,-1,-1,-1],_=this._renderer,S=_.autoClear,M=_.toneMapping;_.getClearColor(W_),_.toneMapping=Vi,_.autoClear=!1,_.state.buffers.depth.getReversed()&&(_.setRenderTarget(l),_.clearDepth(),_.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Wi(new ll,new xp({name:"PMREM.Background",side:Wn,depthWrite:!1,depthTest:!1})));const T=this._backgroundBox,g=T.material;let x=!1;const U=e.background;U?U.isColor&&(g.color.copy(U),e.background=null,x=!0):(g.color.copy(W_),x=!0);for(let N=0;N<6;N++){const O=N%3;O===0?(m.up.set(0,p[N],0),m.position.set(c.x,c.y,c.z),m.lookAt(c.x+v[N],c.y,c.z)):O===1?(m.up.set(0,0,p[N]),m.position.set(c.x,c.y,c.z),m.lookAt(c.x,c.y+v[N],c.z)):(m.up.set(0,p[N],0),m.position.set(c.x,c.y,c.z),m.lookAt(c.x,c.y,c.z+v[N]));const L=this._cubeSize;Ns(l,O*L,N>2?L:0,L,L),_.setRenderTarget(l),x&&_.render(T,m),_.render(e,m)}_.toneMapping=M,_.autoClear=S,e.background=U}_textureToCubeUV(e,i){const r=this._renderer,l=e.mapping===Fr||e.mapping===zs;l?(this._cubemapMaterial===null&&(this._cubemapMaterial=Z_()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=j_());const c=l?this._cubemapMaterial:this._equirectMaterial,f=this._lodMeshes[0];f.material=c;const h=c.uniforms;h.envMap.value=e;const m=this._cubeSize;Ns(i,0,0,3*m,2*m),r.setRenderTarget(i),r.render(f,jo)}_applyPMREM(e){const i=this._renderer,r=i.autoClear;i.autoClear=!1;const l=this._lodMeshes.length;for(let c=1;c<l;c++)this._applyGGXFilter(e,c-1,c);i.autoClear=r}_applyGGXFilter(e,i,r){const l=this._renderer,c=this._pingPongRenderTarget,f=this._ggxMaterial,h=this._lodMeshes[r];h.material=f;const m=f.uniforms,p=r/(this._lodMeshes.length-1),v=i/(this._lodMeshes.length-1),_=Math.sqrt(p*p-v*v),S=0+p*1.25,M=_*S,{_lodMax:E}=this,T=this._sizeLods[r],g=3*T*(r>E-ar?r-E+ar:0),x=4*(this._cubeSize-T);m.envMap.value=e.texture,m.roughness.value=M,m.mipInt.value=E-i,Ns(c,g,x,3*T,2*T),l.setRenderTarget(c),l.render(h,jo),m.envMap.value=c.texture,m.roughness.value=0,m.mipInt.value=E-r,Ns(e,g,x,3*T,2*T),l.setRenderTarget(e),l.render(h,jo)}_blur(e,i,r,l,c){const f=this._pingPongRenderTarget;this._halfBlur(e,f,i,r,l,"latitudinal",c),this._halfBlur(f,e,r,r,l,"longitudinal",c)}_halfBlur(e,i,r,l,c,f,h){const m=this._renderer,p=this._blurMaterial;f!=="latitudinal"&&f!=="longitudinal"&&Ct("blur direction must be either latitudinal or longitudinal!");const v=3,_=this._lodMeshes[l];_.material=p;const S=p.uniforms,M=this._sizeLods[r]-1,E=isFinite(c)?Math.PI/(2*M):2*Math.PI/(2*Nr-1),T=c/E,g=isFinite(c)?1+Math.floor(v*T):Nr;g>Nr&&ct(`sigmaRadians, ${c}, is too large and will clip, as it requested ${g} samples when the maximum is set to ${Nr}`);const x=[];let U=0;for(let F=0;F<Nr;++F){const j=F/T,w=Math.exp(-j*j/2);x.push(w),F===0?U+=w:F<g&&(U+=2*w)}for(let F=0;F<x.length;F++)x[F]=x[F]/U;S.envMap.value=e.texture,S.samples.value=g,S.weights.value=x,S.latitudinal.value=f==="latitudinal",h&&(S.poleAxis.value=h);const{_lodMax:N}=this;S.dTheta.value=E,S.mipInt.value=N-r;const O=this._sizeLods[l],L=3*O*(l>N-ar?l-N+ar:0),I=4*(this._cubeSize-O);Ns(i,L,I,3*O,2*O),m.setRenderTarget(i),m.render(_,jo)}}function hA(s){const e=[],i=[],r=[];let l=s;const c=s-ar+1+X_.length;for(let f=0;f<c;f++){const h=Math.pow(2,l);e.push(h);let m=1/h;f>s-ar?m=X_[f-s+ar-1]:f===0&&(m=0),i.push(m);const p=1/(h-2),v=-p,_=1+p,S=[v,v,_,v,_,_,v,v,_,_,v,_],M=6,E=6,T=3,g=2,x=1,U=new Float32Array(T*E*M),N=new Float32Array(g*E*M),O=new Float32Array(x*E*M);for(let I=0;I<M;I++){const F=I%3*2/3-1,j=I>2?0:-1,w=[F,j,0,F+2/3,j,0,F+2/3,j+1,0,F,j,0,F+2/3,j+1,0,F,j+1,0];U.set(w,T*E*I),N.set(S,g*E*I);const D=[I,I,I,I,I,I];O.set(D,x*E*I)}const L=new Ui;L.setAttribute("position",new _i(U,T)),L.setAttribute("uv",new _i(N,g)),L.setAttribute("faceIndex",new _i(O,x)),r.push(new Wi(L,null)),l>ar&&l--}return{lodMeshes:r,sizeLods:e,sigmas:i}}function Y_(s,e,i){const r=new ki(s,e,i);return r.texture.mapping=lu,r.texture.name="PMREM.cubeUv",r.scissorTest=!0,r}function Ns(s,e,i,r,l){s.viewport.set(e,i,r,l),s.scissor.set(e,i,r,l)}function pA(s,e,i){return new qi({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:fA,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:uu(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 3.2: Transform view direction to hemisphere configuration
				vec3 Vh = normalize(vec3(alpha * V.x, alpha * V.y, V.z));

				// Section 4.1: Orthonormal basis
				float lensq = Vh.x * Vh.x + Vh.y * Vh.y;
				vec3 T1 = lensq > 0.0 ? vec3(-Vh.y, Vh.x, 0.0) / sqrt(lensq) : vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(Vh, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + Vh.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * Vh;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:va,depthTest:!1,depthWrite:!1})}function mA(s,e,i){const r=new Float32Array(Nr),l=new ue(0,1,0);return new qi({name:"SphericalGaussianBlur",defines:{n:Nr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:r},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:l}},vertexShader:uu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:va,depthTest:!1,depthWrite:!1})}function j_(){return new qi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:uu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:va,depthTest:!1,depthWrite:!1})}function Z_(){return new qi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:uu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:va,depthTest:!1,depthWrite:!1})}function uu(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function gA(s){let e=new WeakMap,i=null;function r(h){if(h&&h.isTexture){const m=h.mapping,p=m===mh||m===gh,v=m===Fr||m===zs;if(p||v){let _=e.get(h);const S=_!==void 0?_.texture.pmremVersion:0;if(h.isRenderTargetTexture&&h.pmremVersion!==S)return i===null&&(i=new q_(s)),_=p?i.fromEquirectangular(h,_):i.fromCubemap(h,_),_.texture.pmremVersion=h.pmremVersion,e.set(h,_),_.texture;if(_!==void 0)return _.texture;{const M=h.image;return p&&M&&M.height>0||v&&M&&l(M)?(i===null&&(i=new q_(s)),_=p?i.fromEquirectangular(h):i.fromCubemap(h),_.texture.pmremVersion=h.pmremVersion,e.set(h,_),h.addEventListener("dispose",c),_.texture):null}}}return h}function l(h){let m=0;const p=6;for(let v=0;v<p;v++)h[v]!==void 0&&m++;return m===p}function c(h){const m=h.target;m.removeEventListener("dispose",c);const p=e.get(m);p!==void 0&&(e.delete(m),p.dispose())}function f(){e=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:r,dispose:f}}function _A(s){const e={};function i(r){if(e[r]!==void 0)return e[r];const l=s.getExtension(r);return e[r]=l,l}return{has:function(r){return i(r)!==null},init:function(){i("EXT_color_buffer_float"),i("WEBGL_clip_cull_distance"),i("OES_texture_float_linear"),i("EXT_color_buffer_half_float"),i("WEBGL_multisampled_render_to_texture"),i("WEBGL_render_shared_exponent")},get:function(r){const l=i(r);return l===null&&tl("WebGLRenderer: "+r+" extension not supported."),l}}}function vA(s,e,i,r){const l={},c=new WeakMap;function f(_){const S=_.target;S.index!==null&&e.remove(S.index);for(const E in S.attributes)e.remove(S.attributes[E]);S.removeEventListener("dispose",f),delete l[S.id];const M=c.get(S);M&&(e.remove(M),c.delete(S)),r.releaseStatesOfGeometry(S),S.isInstancedBufferGeometry===!0&&delete S._maxInstanceCount,i.memory.geometries--}function h(_,S){return l[S.id]===!0||(S.addEventListener("dispose",f),l[S.id]=!0,i.memory.geometries++),S}function m(_){const S=_.attributes;for(const M in S)e.update(S[M],s.ARRAY_BUFFER)}function p(_){const S=[],M=_.index,E=_.attributes.position;let T=0;if(M!==null){const U=M.array;T=M.version;for(let N=0,O=U.length;N<O;N+=3){const L=U[N+0],I=U[N+1],F=U[N+2];S.push(L,I,I,F,F,L)}}else if(E!==void 0){const U=E.array;T=E.version;for(let N=0,O=U.length/3-1;N<O;N+=3){const L=N+0,I=N+1,F=N+2;S.push(L,I,I,F,F,L)}}else return;const g=new(Yv(S)?$v:Jv)(S,1);g.version=T;const x=c.get(_);x&&e.remove(x),c.set(_,g)}function v(_){const S=c.get(_);if(S){const M=_.index;M!==null&&S.version<M.version&&p(_)}else p(_);return c.get(_)}return{get:h,update:m,getWireframeAttribute:v}}function xA(s,e,i){let r;function l(S){r=S}let c,f;function h(S){c=S.type,f=S.bytesPerElement}function m(S,M){s.drawElements(r,M,c,S*f),i.update(M,r,1)}function p(S,M,E){E!==0&&(s.drawElementsInstanced(r,M,c,S*f,E),i.update(M,r,E))}function v(S,M,E){if(E===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(r,M,0,c,S,0,E);let g=0;for(let x=0;x<E;x++)g+=M[x];i.update(g,r,1)}function _(S,M,E,T){if(E===0)return;const g=e.get("WEBGL_multi_draw");if(g===null)for(let x=0;x<S.length;x++)p(S[x]/f,M[x],T[x]);else{g.multiDrawElementsInstancedWEBGL(r,M,0,c,S,0,T,0,E);let x=0;for(let U=0;U<E;U++)x+=M[U]*T[U];i.update(x,r,1)}}this.setMode=l,this.setIndex=h,this.render=m,this.renderInstances=p,this.renderMultiDraw=v,this.renderMultiDrawInstances=_}function SA(s){const e={geometries:0,textures:0},i={frame:0,calls:0,triangles:0,points:0,lines:0};function r(c,f,h){switch(i.calls++,f){case s.TRIANGLES:i.triangles+=h*(c/3);break;case s.LINES:i.lines+=h*(c/2);break;case s.LINE_STRIP:i.lines+=h*(c-1);break;case s.LINE_LOOP:i.lines+=h*c;break;case s.POINTS:i.points+=h*c;break;default:Ct("WebGLInfo: Unknown draw mode:",f);break}}function l(){i.calls=0,i.triangles=0,i.points=0,i.lines=0}return{memory:e,render:i,programs:null,autoReset:!0,reset:l,update:r}}function yA(s,e,i){const r=new WeakMap,l=new rn;function c(f,h,m){const p=f.morphTargetInfluences,v=h.morphAttributes.position||h.morphAttributes.normal||h.morphAttributes.color,_=v!==void 0?v.length:0;let S=r.get(h);if(S===void 0||S.count!==_){let D=function(){j.dispose(),r.delete(h),h.removeEventListener("dispose",D)};var M=D;S!==void 0&&S.texture.dispose();const E=h.morphAttributes.position!==void 0,T=h.morphAttributes.normal!==void 0,g=h.morphAttributes.color!==void 0,x=h.morphAttributes.position||[],U=h.morphAttributes.normal||[],N=h.morphAttributes.color||[];let O=0;E===!0&&(O=1),T===!0&&(O=2),g===!0&&(O=3);let L=h.attributes.position.count*O,I=1;L>e.maxTextureSize&&(I=Math.ceil(L/e.maxTextureSize),L=e.maxTextureSize);const F=new Float32Array(L*I*4*_),j=new jv(F,L,I,_);j.type=Hi,j.needsUpdate=!0;const w=O*4;for(let V=0;V<_;V++){const se=x[V],ae=U[V],me=N[V],de=L*I*4*V;for(let z=0;z<se.count;z++){const H=z*w;E===!0&&(l.fromBufferAttribute(se,z),F[de+H+0]=l.x,F[de+H+1]=l.y,F[de+H+2]=l.z,F[de+H+3]=0),T===!0&&(l.fromBufferAttribute(ae,z),F[de+H+4]=l.x,F[de+H+5]=l.y,F[de+H+6]=l.z,F[de+H+7]=0),g===!0&&(l.fromBufferAttribute(me,z),F[de+H+8]=l.x,F[de+H+9]=l.y,F[de+H+10]=l.z,F[de+H+11]=me.itemSize===4?l.w:1)}}S={count:_,texture:j,size:new Xt(L,I)},r.set(h,S),h.addEventListener("dispose",D)}if(f.isInstancedMesh===!0&&f.morphTexture!==null)m.getUniforms().setValue(s,"morphTexture",f.morphTexture,i);else{let E=0;for(let g=0;g<p.length;g++)E+=p[g];const T=h.morphTargetsRelative?1:1-E;m.getUniforms().setValue(s,"morphTargetBaseInfluence",T),m.getUniforms().setValue(s,"morphTargetInfluences",p)}m.getUniforms().setValue(s,"morphTargetsTexture",S.texture,i),m.getUniforms().setValue(s,"morphTargetsTextureSize",S.size)}return{update:c}}function MA(s,e,i,r){let l=new WeakMap;function c(m){const p=r.render.frame,v=m.geometry,_=e.get(m,v);if(l.get(_)!==p&&(e.update(_),l.set(_,p)),m.isInstancedMesh&&(m.hasEventListener("dispose",h)===!1&&m.addEventListener("dispose",h),l.get(m)!==p&&(i.update(m.instanceMatrix,s.ARRAY_BUFFER),m.instanceColor!==null&&i.update(m.instanceColor,s.ARRAY_BUFFER),l.set(m,p))),m.isSkinnedMesh){const S=m.skeleton;l.get(S)!==p&&(S.update(),l.set(S,p))}return _}function f(){l=new WeakMap}function h(m){const p=m.target;p.removeEventListener("dispose",h),i.remove(p.instanceMatrix),p.instanceColor!==null&&i.remove(p.instanceColor)}return{update:c,dispose:f}}const EA={[Lv]:"LINEAR_TONE_MAPPING",[Nv]:"REINHARD_TONE_MAPPING",[Ov]:"CINEON_TONE_MAPPING",[Pv]:"ACES_FILMIC_TONE_MAPPING",[zv]:"AGX_TONE_MAPPING",[Iv]:"NEUTRAL_TONE_MAPPING",[Fv]:"CUSTOM_TONE_MAPPING"};function bA(s,e,i,r,l){const c=new ki(e,i,{type:s,depthBuffer:r,stencilBuffer:l}),f=new ki(e,i,{type:Ma,depthBuffer:!1,stencilBuffer:!1}),h=new Ui;h.setAttribute("position",new Sa([-1,3,0,-1,-1,0,3,-1,0],3)),h.setAttribute("uv",new Sa([0,2,0,0,2,0],2));const m=new vb({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),p=new Wi(h,m),v=new ox(-1,1,1,-1,0,1);let _=null,S=null,M=!1,E,T=null,g=[],x=!1;this.setSize=function(U,N){c.setSize(U,N),f.setSize(U,N);for(let O=0;O<g.length;O++){const L=g[O];L.setSize&&L.setSize(U,N)}},this.setEffects=function(U){g=U,x=g.length>0&&g[0].isRenderPass===!0;const N=c.width,O=c.height;for(let L=0;L<g.length;L++){const I=g[L];I.setSize&&I.setSize(N,O)}},this.begin=function(U,N){if(M||U.toneMapping===Vi&&g.length===0)return!1;if(T=N,N!==null){const O=N.width,L=N.height;(c.width!==O||c.height!==L)&&this.setSize(O,L)}return x===!1&&U.setRenderTarget(c),E=U.toneMapping,U.toneMapping=Vi,!0},this.hasRenderPass=function(){return x},this.end=function(U,N){U.toneMapping=E,M=!0;let O=c,L=f;for(let I=0;I<g.length;I++){const F=g[I];if(F.enabled!==!1&&(F.render(U,L,O,N),F.needsSwap!==!1)){const j=O;O=L,L=j}}if(_!==U.outputColorSpace||S!==U.toneMapping){_=U.outputColorSpace,S=U.toneMapping,m.defines={},Tt.getTransfer(_)===Ht&&(m.defines.SRGB_TRANSFER="");const I=EA[S];I&&(m.defines[I]=""),m.needsUpdate=!0}m.uniforms.tDiffuse.value=O.texture,U.setRenderTarget(T),U.render(p,v),T=null,M=!1},this.isCompositing=function(){return M},this.dispose=function(){c.dispose(),f.dispose(),h.dispose(),m.dispose()}}const cx=new zn,$h=new nl(1,1),ux=new jv,fx=new YE,dx=new nx,K_=[],Q_=[],J_=new Float32Array(16),$_=new Float32Array(9),ev=new Float32Array(4);function qs(s,e,i){const r=s[0];if(r<=0||r>0)return s;const l=e*i;let c=K_[l];if(c===void 0&&(c=new Float32Array(l),K_[l]=c),e!==0){r.toArray(c,0);for(let f=1,h=0;f!==e;++f)h+=i,s[f].toArray(c,h)}return c}function mn(s,e){if(s.length!==e.length)return!1;for(let i=0,r=s.length;i<r;i++)if(s[i]!==e[i])return!1;return!0}function gn(s,e){for(let i=0,r=e.length;i<r;i++)s[i]=e[i]}function fu(s,e){let i=Q_[e];i===void 0&&(i=new Int32Array(e),Q_[e]=i);for(let r=0;r!==e;++r)i[r]=s.allocateTextureUnit();return i}function TA(s,e){const i=this.cache;i[0]!==e&&(s.uniform1f(this.addr,e),i[0]=e)}function AA(s,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(s.uniform2f(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(mn(i,e))return;s.uniform2fv(this.addr,e),gn(i,e)}}function RA(s,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(s.uniform3f(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else if(e.r!==void 0)(i[0]!==e.r||i[1]!==e.g||i[2]!==e.b)&&(s.uniform3f(this.addr,e.r,e.g,e.b),i[0]=e.r,i[1]=e.g,i[2]=e.b);else{if(mn(i,e))return;s.uniform3fv(this.addr,e),gn(i,e)}}function CA(s,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(s.uniform4f(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(mn(i,e))return;s.uniform4fv(this.addr,e),gn(i,e)}}function wA(s,e){const i=this.cache,r=e.elements;if(r===void 0){if(mn(i,e))return;s.uniformMatrix2fv(this.addr,!1,e),gn(i,e)}else{if(mn(i,r))return;ev.set(r),s.uniformMatrix2fv(this.addr,!1,ev),gn(i,r)}}function DA(s,e){const i=this.cache,r=e.elements;if(r===void 0){if(mn(i,e))return;s.uniformMatrix3fv(this.addr,!1,e),gn(i,e)}else{if(mn(i,r))return;$_.set(r),s.uniformMatrix3fv(this.addr,!1,$_),gn(i,r)}}function UA(s,e){const i=this.cache,r=e.elements;if(r===void 0){if(mn(i,e))return;s.uniformMatrix4fv(this.addr,!1,e),gn(i,e)}else{if(mn(i,r))return;J_.set(r),s.uniformMatrix4fv(this.addr,!1,J_),gn(i,r)}}function LA(s,e){const i=this.cache;i[0]!==e&&(s.uniform1i(this.addr,e),i[0]=e)}function NA(s,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(s.uniform2i(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(mn(i,e))return;s.uniform2iv(this.addr,e),gn(i,e)}}function OA(s,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(s.uniform3i(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else{if(mn(i,e))return;s.uniform3iv(this.addr,e),gn(i,e)}}function PA(s,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(s.uniform4i(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(mn(i,e))return;s.uniform4iv(this.addr,e),gn(i,e)}}function FA(s,e){const i=this.cache;i[0]!==e&&(s.uniform1ui(this.addr,e),i[0]=e)}function zA(s,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(s.uniform2ui(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(mn(i,e))return;s.uniform2uiv(this.addr,e),gn(i,e)}}function IA(s,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(s.uniform3ui(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else{if(mn(i,e))return;s.uniform3uiv(this.addr,e),gn(i,e)}}function BA(s,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(s.uniform4ui(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(mn(i,e))return;s.uniform4uiv(this.addr,e),gn(i,e)}}function HA(s,e,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(s.uniform1i(this.addr,l),r[0]=l);let c;this.type===s.SAMPLER_2D_SHADOW?($h.compareFunction=i.isReversedDepthBuffer()?_p:gp,c=$h):c=cx,i.setTexture2D(e||c,l)}function GA(s,e,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(s.uniform1i(this.addr,l),r[0]=l),i.setTexture3D(e||fx,l)}function VA(s,e,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(s.uniform1i(this.addr,l),r[0]=l),i.setTextureCube(e||dx,l)}function kA(s,e,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(s.uniform1i(this.addr,l),r[0]=l),i.setTexture2DArray(e||ux,l)}function XA(s){switch(s){case 5126:return TA;case 35664:return AA;case 35665:return RA;case 35666:return CA;case 35674:return wA;case 35675:return DA;case 35676:return UA;case 5124:case 35670:return LA;case 35667:case 35671:return NA;case 35668:case 35672:return OA;case 35669:case 35673:return PA;case 5125:return FA;case 36294:return zA;case 36295:return IA;case 36296:return BA;case 35678:case 36198:case 36298:case 36306:case 35682:return HA;case 35679:case 36299:case 36307:return GA;case 35680:case 36300:case 36308:case 36293:return VA;case 36289:case 36303:case 36311:case 36292:return kA}}function WA(s,e){s.uniform1fv(this.addr,e)}function qA(s,e){const i=qs(e,this.size,2);s.uniform2fv(this.addr,i)}function YA(s,e){const i=qs(e,this.size,3);s.uniform3fv(this.addr,i)}function jA(s,e){const i=qs(e,this.size,4);s.uniform4fv(this.addr,i)}function ZA(s,e){const i=qs(e,this.size,4);s.uniformMatrix2fv(this.addr,!1,i)}function KA(s,e){const i=qs(e,this.size,9);s.uniformMatrix3fv(this.addr,!1,i)}function QA(s,e){const i=qs(e,this.size,16);s.uniformMatrix4fv(this.addr,!1,i)}function JA(s,e){s.uniform1iv(this.addr,e)}function $A(s,e){s.uniform2iv(this.addr,e)}function eR(s,e){s.uniform3iv(this.addr,e)}function tR(s,e){s.uniform4iv(this.addr,e)}function nR(s,e){s.uniform1uiv(this.addr,e)}function iR(s,e){s.uniform2uiv(this.addr,e)}function aR(s,e){s.uniform3uiv(this.addr,e)}function rR(s,e){s.uniform4uiv(this.addr,e)}function sR(s,e,i){const r=this.cache,l=e.length,c=fu(i,l);mn(r,c)||(s.uniform1iv(this.addr,c),gn(r,c));let f;this.type===s.SAMPLER_2D_SHADOW?f=$h:f=cx;for(let h=0;h!==l;++h)i.setTexture2D(e[h]||f,c[h])}function oR(s,e,i){const r=this.cache,l=e.length,c=fu(i,l);mn(r,c)||(s.uniform1iv(this.addr,c),gn(r,c));for(let f=0;f!==l;++f)i.setTexture3D(e[f]||fx,c[f])}function lR(s,e,i){const r=this.cache,l=e.length,c=fu(i,l);mn(r,c)||(s.uniform1iv(this.addr,c),gn(r,c));for(let f=0;f!==l;++f)i.setTextureCube(e[f]||dx,c[f])}function cR(s,e,i){const r=this.cache,l=e.length,c=fu(i,l);mn(r,c)||(s.uniform1iv(this.addr,c),gn(r,c));for(let f=0;f!==l;++f)i.setTexture2DArray(e[f]||ux,c[f])}function uR(s){switch(s){case 5126:return WA;case 35664:return qA;case 35665:return YA;case 35666:return jA;case 35674:return ZA;case 35675:return KA;case 35676:return QA;case 5124:case 35670:return JA;case 35667:case 35671:return $A;case 35668:case 35672:return eR;case 35669:case 35673:return tR;case 5125:return nR;case 36294:return iR;case 36295:return aR;case 36296:return rR;case 35678:case 36198:case 36298:case 36306:case 35682:return sR;case 35679:case 36299:case 36307:return oR;case 35680:case 36300:case 36308:case 36293:return lR;case 36289:case 36303:case 36311:case 36292:return cR}}class fR{constructor(e,i,r){this.id=e,this.addr=r,this.cache=[],this.type=i.type,this.setValue=XA(i.type)}}class dR{constructor(e,i,r){this.id=e,this.addr=r,this.cache=[],this.type=i.type,this.size=i.size,this.setValue=uR(i.type)}}class hR{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,i,r){const l=this.seq;for(let c=0,f=l.length;c!==f;++c){const h=l[c];h.setValue(e,i[h.id],r)}}}const eh=/(\w+)(\])?(\[|\.)?/g;function tv(s,e){s.seq.push(e),s.map[e.id]=e}function pR(s,e,i){const r=s.name,l=r.length;for(eh.lastIndex=0;;){const c=eh.exec(r),f=eh.lastIndex;let h=c[1];const m=c[2]==="]",p=c[3];if(m&&(h=h|0),p===void 0||p==="["&&f+2===l){tv(i,p===void 0?new fR(h,s,e):new dR(h,s,e));break}else{let _=i.map[h];_===void 0&&(_=new hR(h),tv(i,_)),i=_}}}class eu{constructor(e,i){this.seq=[],this.map={};const r=e.getProgramParameter(i,e.ACTIVE_UNIFORMS);for(let f=0;f<r;++f){const h=e.getActiveUniform(i,f),m=e.getUniformLocation(i,h.name);pR(h,m,this)}const l=[],c=[];for(const f of this.seq)f.type===e.SAMPLER_2D_SHADOW||f.type===e.SAMPLER_CUBE_SHADOW||f.type===e.SAMPLER_2D_ARRAY_SHADOW?l.push(f):c.push(f);l.length>0&&(this.seq=l.concat(c))}setValue(e,i,r,l){const c=this.map[i];c!==void 0&&c.setValue(e,r,l)}setOptional(e,i,r){const l=i[r];l!==void 0&&this.setValue(e,r,l)}static upload(e,i,r,l){for(let c=0,f=i.length;c!==f;++c){const h=i[c],m=r[h.id];m.needsUpdate!==!1&&h.setValue(e,m.value,l)}}static seqWithValue(e,i){const r=[];for(let l=0,c=e.length;l!==c;++l){const f=e[l];f.id in i&&r.push(f)}return r}}function nv(s,e,i){const r=s.createShader(e);return s.shaderSource(r,i),s.compileShader(r),r}const mR=37297;let gR=0;function _R(s,e){const i=s.split(`
`),r=[],l=Math.max(e-6,0),c=Math.min(e+6,i.length);for(let f=l;f<c;f++){const h=f+1;r.push(`${h===e?">":" "} ${h}: ${i[f]}`)}return r.join(`
`)}const iv=new pt;function vR(s){Tt._getMatrix(iv,Tt.workingColorSpace,s);const e=`mat3( ${iv.elements.map(i=>i.toFixed(4))} )`;switch(Tt.getTransfer(s)){case nu:return[e,"LinearTransferOETF"];case Ht:return[e,"sRGBTransferOETF"];default:return ct("WebGLProgram: Unsupported color space: ",s),[e,"LinearTransferOETF"]}}function av(s,e,i){const r=s.getShaderParameter(e,s.COMPILE_STATUS),c=(s.getShaderInfoLog(e)||"").trim();if(r&&c==="")return"";const f=/ERROR: 0:(\d+)/.exec(c);if(f){const h=parseInt(f[1]);return i.toUpperCase()+`

`+c+`

`+_R(s.getShaderSource(e),h)}else return c}function xR(s,e){const i=vR(e);return[`vec4 ${s}( vec4 value ) {`,`	return ${i[1]}( vec4( value.rgb * ${i[0]}, value.a ) );`,"}"].join(`
`)}const SR={[Lv]:"Linear",[Nv]:"Reinhard",[Ov]:"Cineon",[Pv]:"ACESFilmic",[zv]:"AgX",[Iv]:"Neutral",[Fv]:"Custom"};function yR(s,e){const i=SR[e];return i===void 0?(ct("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+s+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+s+"( vec3 color ) { return "+i+"ToneMapping( color ); }"}const qc=new ue;function MR(){Tt.getLuminanceCoefficients(qc);const s=qc.x.toFixed(4),e=qc.y.toFixed(4),i=qc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${e}, ${i} );`,"	return dot( weights, rgb );","}"].join(`
`)}function ER(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Qo).join(`
`)}function bR(s){const e=[];for(const i in s){const r=s[i];r!==!1&&e.push("#define "+i+" "+r)}return e.join(`
`)}function TR(s,e){const i={},r=s.getProgramParameter(e,s.ACTIVE_ATTRIBUTES);for(let l=0;l<r;l++){const c=s.getActiveAttrib(e,l),f=c.name;let h=1;c.type===s.FLOAT_MAT2&&(h=2),c.type===s.FLOAT_MAT3&&(h=3),c.type===s.FLOAT_MAT4&&(h=4),i[f]={type:c.type,location:s.getAttribLocation(e,f),locationSize:h}}return i}function Qo(s){return s!==""}function rv(s,e){const i=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,i).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function sv(s,e){return s.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const AR=/^[ \t]*#include +<([\w\d./]+)>/gm;function ep(s){return s.replace(AR,CR)}const RR=new Map;function CR(s,e){let i=mt[e];if(i===void 0){const r=RR.get(e);if(r!==void 0)i=mt[r],ct('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,r);else throw new Error("Can not resolve #include <"+e+">")}return ep(i)}const wR=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function ov(s){return s.replace(wR,DR)}function DR(s,e,i,r){let l="";for(let c=parseInt(e);c<parseInt(i);c++)l+=r.replace(/\[\s*i\s*\]/g,"[ "+c+" ]").replace(/UNROLLED_LOOP_INDEX/g,c);return l}function lv(s){let e=`precision ${s.precision} float;
	precision ${s.precision} int;
	precision ${s.precision} sampler2D;
	precision ${s.precision} samplerCube;
	precision ${s.precision} sampler3D;
	precision ${s.precision} sampler2DArray;
	precision ${s.precision} sampler2DShadow;
	precision ${s.precision} samplerCubeShadow;
	precision ${s.precision} sampler2DArrayShadow;
	precision ${s.precision} isampler2D;
	precision ${s.precision} isampler3D;
	precision ${s.precision} isamplerCube;
	precision ${s.precision} isampler2DArray;
	precision ${s.precision} usampler2D;
	precision ${s.precision} usampler3D;
	precision ${s.precision} usamplerCube;
	precision ${s.precision} usampler2DArray;
	`;return s.precision==="highp"?e+=`
#define HIGH_PRECISION`:s.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:s.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}const UR={[Zc]:"SHADOWMAP_TYPE_PCF",[Ko]:"SHADOWMAP_TYPE_VSM"};function LR(s){return UR[s.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const NR={[Fr]:"ENVMAP_TYPE_CUBE",[zs]:"ENVMAP_TYPE_CUBE",[lu]:"ENVMAP_TYPE_CUBE_UV"};function OR(s){return s.envMap===!1?"ENVMAP_TYPE_CUBE":NR[s.envMapMode]||"ENVMAP_TYPE_CUBE"}const PR={[zs]:"ENVMAP_MODE_REFRACTION"};function FR(s){return s.envMap===!1?"ENVMAP_MODE_REFLECTION":PR[s.envMapMode]||"ENVMAP_MODE_REFLECTION"}const zR={[Uv]:"ENVMAP_BLENDING_MULTIPLY",[RE]:"ENVMAP_BLENDING_MIX",[CE]:"ENVMAP_BLENDING_ADD"};function IR(s){return s.envMap===!1?"ENVMAP_BLENDING_NONE":zR[s.combine]||"ENVMAP_BLENDING_NONE"}function BR(s){const e=s.envMapCubeUVHeight;if(e===null)return null;const i=Math.log2(e)-2,r=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,i),112)),texelHeight:r,maxMip:i}}function HR(s,e,i,r){const l=s.getContext(),c=i.defines;let f=i.vertexShader,h=i.fragmentShader;const m=LR(i),p=OR(i),v=FR(i),_=IR(i),S=BR(i),M=ER(i),E=bR(c),T=l.createProgram();let g,x,U=i.glslVersion?"#version "+i.glslVersion+`
`:"";i.isRawShaderMaterial?(g=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,E].filter(Qo).join(`
`),g.length>0&&(g+=`
`),x=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,E].filter(Qo).join(`
`),x.length>0&&(x+=`
`)):(g=[lv(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,E,i.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",i.batching?"#define USE_BATCHING":"",i.batchingColor?"#define USE_BATCHING_COLOR":"",i.instancing?"#define USE_INSTANCING":"",i.instancingColor?"#define USE_INSTANCING_COLOR":"",i.instancingMorph?"#define USE_INSTANCING_MORPH":"",i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.map?"#define USE_MAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+v:"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.displacementMap?"#define USE_DISPLACEMENTMAP":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.mapUv?"#define MAP_UV "+i.mapUv:"",i.alphaMapUv?"#define ALPHAMAP_UV "+i.alphaMapUv:"",i.lightMapUv?"#define LIGHTMAP_UV "+i.lightMapUv:"",i.aoMapUv?"#define AOMAP_UV "+i.aoMapUv:"",i.emissiveMapUv?"#define EMISSIVEMAP_UV "+i.emissiveMapUv:"",i.bumpMapUv?"#define BUMPMAP_UV "+i.bumpMapUv:"",i.normalMapUv?"#define NORMALMAP_UV "+i.normalMapUv:"",i.displacementMapUv?"#define DISPLACEMENTMAP_UV "+i.displacementMapUv:"",i.metalnessMapUv?"#define METALNESSMAP_UV "+i.metalnessMapUv:"",i.roughnessMapUv?"#define ROUGHNESSMAP_UV "+i.roughnessMapUv:"",i.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+i.anisotropyMapUv:"",i.clearcoatMapUv?"#define CLEARCOATMAP_UV "+i.clearcoatMapUv:"",i.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+i.clearcoatNormalMapUv:"",i.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+i.clearcoatRoughnessMapUv:"",i.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+i.iridescenceMapUv:"",i.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+i.iridescenceThicknessMapUv:"",i.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+i.sheenColorMapUv:"",i.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+i.sheenRoughnessMapUv:"",i.specularMapUv?"#define SPECULARMAP_UV "+i.specularMapUv:"",i.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+i.specularColorMapUv:"",i.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+i.specularIntensityMapUv:"",i.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+i.transmissionMapUv:"",i.thicknessMapUv?"#define THICKNESSMAP_UV "+i.thicknessMapUv:"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.flatShading?"#define FLAT_SHADED":"",i.skinning?"#define USE_SKINNING":"",i.morphTargets?"#define USE_MORPHTARGETS":"",i.morphNormals&&i.flatShading===!1?"#define USE_MORPHNORMALS":"",i.morphColors?"#define USE_MORPHCOLORS":"",i.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+i.morphTextureStride:"",i.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+i.morphTargetsCount:"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+m:"",i.sizeAttenuation?"#define USE_SIZEATTENUATION":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",i.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Qo).join(`
`),x=[lv(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,E,i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",i.map?"#define USE_MAP":"",i.matcap?"#define USE_MATCAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+p:"",i.envMap?"#define "+v:"",i.envMap?"#define "+_:"",S?"#define CUBEUV_TEXEL_WIDTH "+S.texelWidth:"",S?"#define CUBEUV_TEXEL_HEIGHT "+S.texelHeight:"",S?"#define CUBEUV_MAX_MIP "+S.maxMip+".0":"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoat?"#define USE_CLEARCOAT":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.dispersion?"#define USE_DISPERSION":"",i.iridescence?"#define USE_IRIDESCENCE":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaTest?"#define USE_ALPHATEST":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.sheen?"#define USE_SHEEN":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors||i.instancingColor||i.batchingColor?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.gradientMap?"#define USE_GRADIENTMAP":"",i.flatShading?"#define FLAT_SHADED":"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+m:"",i.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",i.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",i.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",i.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",i.toneMapping!==Vi?"#define TONE_MAPPING":"",i.toneMapping!==Vi?mt.tonemapping_pars_fragment:"",i.toneMapping!==Vi?yR("toneMapping",i.toneMapping):"",i.dithering?"#define DITHERING":"",i.opaque?"#define OPAQUE":"",mt.colorspace_pars_fragment,xR("linearToOutputTexel",i.outputColorSpace),MR(),i.useDepthPacking?"#define DEPTH_PACKING "+i.depthPacking:"",`
`].filter(Qo).join(`
`)),f=ep(f),f=rv(f,i),f=sv(f,i),h=ep(h),h=rv(h,i),h=sv(h,i),f=ov(f),h=ov(h),i.isRawShaderMaterial!==!0&&(U=`#version 300 es
`,g=[M,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,x=["#define varying in",i.glslVersion===M_?"":"layout(location = 0) out highp vec4 pc_fragColor;",i.glslVersion===M_?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+x);const N=U+g+f,O=U+x+h,L=nv(l,l.VERTEX_SHADER,N),I=nv(l,l.FRAGMENT_SHADER,O);l.attachShader(T,L),l.attachShader(T,I),i.index0AttributeName!==void 0?l.bindAttribLocation(T,0,i.index0AttributeName):i.morphTargets===!0&&l.bindAttribLocation(T,0,"position"),l.linkProgram(T);function F(V){if(s.debug.checkShaderErrors){const se=l.getProgramInfoLog(T)||"",ae=l.getShaderInfoLog(L)||"",me=l.getShaderInfoLog(I)||"",de=se.trim(),z=ae.trim(),H=me.trim();let K=!0,ye=!0;if(l.getProgramParameter(T,l.LINK_STATUS)===!1)if(K=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(l,T,L,I);else{const ve=av(l,L,"vertex"),A=av(l,I,"fragment");Ct("THREE.WebGLProgram: Shader Error "+l.getError()+" - VALIDATE_STATUS "+l.getProgramParameter(T,l.VALIDATE_STATUS)+`

Material Name: `+V.name+`
Material Type: `+V.type+`

Program Info Log: `+de+`
`+ve+`
`+A)}else de!==""?ct("WebGLProgram: Program Info Log:",de):(z===""||H==="")&&(ye=!1);ye&&(V.diagnostics={runnable:K,programLog:de,vertexShader:{log:z,prefix:g},fragmentShader:{log:H,prefix:x}})}l.deleteShader(L),l.deleteShader(I),j=new eu(l,T),w=TR(l,T)}let j;this.getUniforms=function(){return j===void 0&&F(this),j};let w;this.getAttributes=function(){return w===void 0&&F(this),w};let D=i.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return D===!1&&(D=l.getProgramParameter(T,mR)),D},this.destroy=function(){r.releaseStatesOfProgram(this),l.deleteProgram(T),this.program=void 0},this.type=i.shaderType,this.name=i.shaderName,this.id=gR++,this.cacheKey=e,this.usedTimes=1,this.program=T,this.vertexShader=L,this.fragmentShader=I,this}let GR=0;class VR{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const i=e.vertexShader,r=e.fragmentShader,l=this._getShaderStage(i),c=this._getShaderStage(r),f=this._getShaderCacheForMaterial(e);return f.has(l)===!1&&(f.add(l),l.usedTimes++),f.has(c)===!1&&(f.add(c),c.usedTimes++),this}remove(e){const i=this.materialCache.get(e);for(const r of i)r.usedTimes--,r.usedTimes===0&&this.shaderCache.delete(r.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const i=this.materialCache;let r=i.get(e);return r===void 0&&(r=new Set,i.set(e,r)),r}_getShaderStage(e){const i=this.shaderCache;let r=i.get(e);return r===void 0&&(r=new kR(e),i.set(e,r)),r}}class kR{constructor(e){this.id=GR++,this.code=e,this.usedTimes=0}}function XR(s,e,i,r,l,c,f){const h=new Kv,m=new VR,p=new Set,v=[],_=new Map,S=l.logarithmicDepthBuffer;let M=l.precision;const E={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function T(w){return p.add(w),w===0?"uv":`uv${w}`}function g(w,D,V,se,ae){const me=se.fog,de=ae.geometry,z=w.isMeshStandardMaterial?se.environment:null,H=(w.isMeshStandardMaterial?i:e).get(w.envMap||z),K=H&&H.mapping===lu?H.image.height:null,ye=E[w.type];w.precision!==null&&(M=l.getMaxPrecision(w.precision),M!==w.precision&&ct("WebGLProgram.getParameters:",w.precision,"not supported, using",M,"instead."));const ve=de.morphAttributes.position||de.morphAttributes.normal||de.morphAttributes.color,A=ve!==void 0?ve.length:0;let B=0;de.morphAttributes.position!==void 0&&(B=1),de.morphAttributes.normal!==void 0&&(B=2),de.morphAttributes.color!==void 0&&(B=3);let ee,_e,Te,Q;if(ye){const bt=Ii[ye];ee=bt.vertexShader,_e=bt.fragmentShader}else ee=w.vertexShader,_e=w.fragmentShader,m.update(w),Te=m.getVertexShaderID(w),Q=m.getFragmentShaderID(w);const ce=s.getRenderTarget(),Re=s.state.buffers.depth.getReversed(),Ne=ae.isInstancedMesh===!0,re=ae.isBatchedMesh===!0,ke=!!w.map,Ce=!!w.matcap,rt=!!H,gt=!!w.aoMap,wt=!!w.lightMap,ut=!!w.bumpMap,$t=!!w.normalMap,k=!!w.displacementMap,Zt=!!w.emissiveMap,Et=!!w.metalnessMap,Nt=!!w.roughnessMap,Ke=w.anisotropy>0,P=w.clearcoat>0,b=w.dispersion>0,Y=w.iridescence>0,xe=w.sheen>0,be=w.transmission>0,pe=Ke&&!!w.anisotropyMap,Je=P&&!!w.clearcoatMap,Oe=P&&!!w.clearcoatNormalMap,Ye=P&&!!w.clearcoatRoughnessMap,at=Y&&!!w.iridescenceMap,we=Y&&!!w.iridescenceThicknessMap,De=xe&&!!w.sheenColorMap,Ve=xe&&!!w.sheenRoughnessMap,He=!!w.specularMap,Pe=!!w.specularColorMap,dt=!!w.specularIntensityMap,q=be&&!!w.transmissionMap,ze=be&&!!w.thicknessMap,Ue=!!w.gradientMap,Ge=!!w.alphaMap,Ae=w.alphaTest>0,Ee=!!w.alphaHash,Le=!!w.extensions;let st=Vi;w.toneMapped&&(ce===null||ce.isXRRenderTarget===!0)&&(st=s.toneMapping);const Ft={shaderID:ye,shaderType:w.type,shaderName:w.name,vertexShader:ee,fragmentShader:_e,defines:w.defines,customVertexShaderID:Te,customFragmentShaderID:Q,isRawShaderMaterial:w.isRawShaderMaterial===!0,glslVersion:w.glslVersion,precision:M,batching:re,batchingColor:re&&ae._colorsTexture!==null,instancing:Ne,instancingColor:Ne&&ae.instanceColor!==null,instancingMorph:Ne&&ae.morphTexture!==null,outputColorSpace:ce===null?s.outputColorSpace:ce.isXRRenderTarget===!0?ce.texture.colorSpace:Bs,alphaToCoverage:!!w.alphaToCoverage,map:ke,matcap:Ce,envMap:rt,envMapMode:rt&&H.mapping,envMapCubeUVHeight:K,aoMap:gt,lightMap:wt,bumpMap:ut,normalMap:$t,displacementMap:k,emissiveMap:Zt,normalMapObjectSpace:$t&&w.normalMapType===LE,normalMapTangentSpace:$t&&w.normalMapType===UE,metalnessMap:Et,roughnessMap:Nt,anisotropy:Ke,anisotropyMap:pe,clearcoat:P,clearcoatMap:Je,clearcoatNormalMap:Oe,clearcoatRoughnessMap:Ye,dispersion:b,iridescence:Y,iridescenceMap:at,iridescenceThicknessMap:we,sheen:xe,sheenColorMap:De,sheenRoughnessMap:Ve,specularMap:He,specularColorMap:Pe,specularIntensityMap:dt,transmission:be,transmissionMap:q,thicknessMap:ze,gradientMap:Ue,opaque:w.transparent===!1&&w.blending===Os&&w.alphaToCoverage===!1,alphaMap:Ge,alphaTest:Ae,alphaHash:Ee,combine:w.combine,mapUv:ke&&T(w.map.channel),aoMapUv:gt&&T(w.aoMap.channel),lightMapUv:wt&&T(w.lightMap.channel),bumpMapUv:ut&&T(w.bumpMap.channel),normalMapUv:$t&&T(w.normalMap.channel),displacementMapUv:k&&T(w.displacementMap.channel),emissiveMapUv:Zt&&T(w.emissiveMap.channel),metalnessMapUv:Et&&T(w.metalnessMap.channel),roughnessMapUv:Nt&&T(w.roughnessMap.channel),anisotropyMapUv:pe&&T(w.anisotropyMap.channel),clearcoatMapUv:Je&&T(w.clearcoatMap.channel),clearcoatNormalMapUv:Oe&&T(w.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Ye&&T(w.clearcoatRoughnessMap.channel),iridescenceMapUv:at&&T(w.iridescenceMap.channel),iridescenceThicknessMapUv:we&&T(w.iridescenceThicknessMap.channel),sheenColorMapUv:De&&T(w.sheenColorMap.channel),sheenRoughnessMapUv:Ve&&T(w.sheenRoughnessMap.channel),specularMapUv:He&&T(w.specularMap.channel),specularColorMapUv:Pe&&T(w.specularColorMap.channel),specularIntensityMapUv:dt&&T(w.specularIntensityMap.channel),transmissionMapUv:q&&T(w.transmissionMap.channel),thicknessMapUv:ze&&T(w.thicknessMap.channel),alphaMapUv:Ge&&T(w.alphaMap.channel),vertexTangents:!!de.attributes.tangent&&($t||Ke),vertexColors:w.vertexColors,vertexAlphas:w.vertexColors===!0&&!!de.attributes.color&&de.attributes.color.itemSize===4,pointsUvs:ae.isPoints===!0&&!!de.attributes.uv&&(ke||Ge),fog:!!me,useFog:w.fog===!0,fogExp2:!!me&&me.isFogExp2,flatShading:w.flatShading===!0&&w.wireframe===!1,sizeAttenuation:w.sizeAttenuation===!0,logarithmicDepthBuffer:S,reversedDepthBuffer:Re,skinning:ae.isSkinnedMesh===!0,morphTargets:de.morphAttributes.position!==void 0,morphNormals:de.morphAttributes.normal!==void 0,morphColors:de.morphAttributes.color!==void 0,morphTargetsCount:A,morphTextureStride:B,numDirLights:D.directional.length,numPointLights:D.point.length,numSpotLights:D.spot.length,numSpotLightMaps:D.spotLightMap.length,numRectAreaLights:D.rectArea.length,numHemiLights:D.hemi.length,numDirLightShadows:D.directionalShadowMap.length,numPointLightShadows:D.pointShadowMap.length,numSpotLightShadows:D.spotShadowMap.length,numSpotLightShadowsWithMaps:D.numSpotLightShadowsWithMaps,numLightProbes:D.numLightProbes,numClippingPlanes:f.numPlanes,numClipIntersection:f.numIntersection,dithering:w.dithering,shadowMapEnabled:s.shadowMap.enabled&&V.length>0,shadowMapType:s.shadowMap.type,toneMapping:st,decodeVideoTexture:ke&&w.map.isVideoTexture===!0&&Tt.getTransfer(w.map.colorSpace)===Ht,decodeVideoTextureEmissive:Zt&&w.emissiveMap.isVideoTexture===!0&&Tt.getTransfer(w.emissiveMap.colorSpace)===Ht,premultipliedAlpha:w.premultipliedAlpha,doubleSided:w.side===Bi,flipSided:w.side===Wn,useDepthPacking:w.depthPacking>=0,depthPacking:w.depthPacking||0,index0AttributeName:w.index0AttributeName,extensionClipCullDistance:Le&&w.extensions.clipCullDistance===!0&&r.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Le&&w.extensions.multiDraw===!0||re)&&r.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:r.has("KHR_parallel_shader_compile"),customProgramCacheKey:w.customProgramCacheKey()};return Ft.vertexUv1s=p.has(1),Ft.vertexUv2s=p.has(2),Ft.vertexUv3s=p.has(3),p.clear(),Ft}function x(w){const D=[];if(w.shaderID?D.push(w.shaderID):(D.push(w.customVertexShaderID),D.push(w.customFragmentShaderID)),w.defines!==void 0)for(const V in w.defines)D.push(V),D.push(w.defines[V]);return w.isRawShaderMaterial===!1&&(U(D,w),N(D,w),D.push(s.outputColorSpace)),D.push(w.customProgramCacheKey),D.join()}function U(w,D){w.push(D.precision),w.push(D.outputColorSpace),w.push(D.envMapMode),w.push(D.envMapCubeUVHeight),w.push(D.mapUv),w.push(D.alphaMapUv),w.push(D.lightMapUv),w.push(D.aoMapUv),w.push(D.bumpMapUv),w.push(D.normalMapUv),w.push(D.displacementMapUv),w.push(D.emissiveMapUv),w.push(D.metalnessMapUv),w.push(D.roughnessMapUv),w.push(D.anisotropyMapUv),w.push(D.clearcoatMapUv),w.push(D.clearcoatNormalMapUv),w.push(D.clearcoatRoughnessMapUv),w.push(D.iridescenceMapUv),w.push(D.iridescenceThicknessMapUv),w.push(D.sheenColorMapUv),w.push(D.sheenRoughnessMapUv),w.push(D.specularMapUv),w.push(D.specularColorMapUv),w.push(D.specularIntensityMapUv),w.push(D.transmissionMapUv),w.push(D.thicknessMapUv),w.push(D.combine),w.push(D.fogExp2),w.push(D.sizeAttenuation),w.push(D.morphTargetsCount),w.push(D.morphAttributeCount),w.push(D.numDirLights),w.push(D.numPointLights),w.push(D.numSpotLights),w.push(D.numSpotLightMaps),w.push(D.numHemiLights),w.push(D.numRectAreaLights),w.push(D.numDirLightShadows),w.push(D.numPointLightShadows),w.push(D.numSpotLightShadows),w.push(D.numSpotLightShadowsWithMaps),w.push(D.numLightProbes),w.push(D.shadowMapType),w.push(D.toneMapping),w.push(D.numClippingPlanes),w.push(D.numClipIntersection),w.push(D.depthPacking)}function N(w,D){h.disableAll(),D.instancing&&h.enable(0),D.instancingColor&&h.enable(1),D.instancingMorph&&h.enable(2),D.matcap&&h.enable(3),D.envMap&&h.enable(4),D.normalMapObjectSpace&&h.enable(5),D.normalMapTangentSpace&&h.enable(6),D.clearcoat&&h.enable(7),D.iridescence&&h.enable(8),D.alphaTest&&h.enable(9),D.vertexColors&&h.enable(10),D.vertexAlphas&&h.enable(11),D.vertexUv1s&&h.enable(12),D.vertexUv2s&&h.enable(13),D.vertexUv3s&&h.enable(14),D.vertexTangents&&h.enable(15),D.anisotropy&&h.enable(16),D.alphaHash&&h.enable(17),D.batching&&h.enable(18),D.dispersion&&h.enable(19),D.batchingColor&&h.enable(20),D.gradientMap&&h.enable(21),w.push(h.mask),h.disableAll(),D.fog&&h.enable(0),D.useFog&&h.enable(1),D.flatShading&&h.enable(2),D.logarithmicDepthBuffer&&h.enable(3),D.reversedDepthBuffer&&h.enable(4),D.skinning&&h.enable(5),D.morphTargets&&h.enable(6),D.morphNormals&&h.enable(7),D.morphColors&&h.enable(8),D.premultipliedAlpha&&h.enable(9),D.shadowMapEnabled&&h.enable(10),D.doubleSided&&h.enable(11),D.flipSided&&h.enable(12),D.useDepthPacking&&h.enable(13),D.dithering&&h.enable(14),D.transmission&&h.enable(15),D.sheen&&h.enable(16),D.opaque&&h.enable(17),D.pointsUvs&&h.enable(18),D.decodeVideoTexture&&h.enable(19),D.decodeVideoTextureEmissive&&h.enable(20),D.alphaToCoverage&&h.enable(21),w.push(h.mask)}function O(w){const D=E[w.type];let V;if(D){const se=Ii[D];V=sb.clone(se.uniforms)}else V=w.uniforms;return V}function L(w,D){let V=_.get(D);return V!==void 0?++V.usedTimes:(V=new HR(s,D,w,c),v.push(V),_.set(D,V)),V}function I(w){if(--w.usedTimes===0){const D=v.indexOf(w);v[D]=v[v.length-1],v.pop(),_.delete(w.cacheKey),w.destroy()}}function F(w){m.remove(w)}function j(){m.dispose()}return{getParameters:g,getProgramCacheKey:x,getUniforms:O,acquireProgram:L,releaseProgram:I,releaseShaderCache:F,programs:v,dispose:j}}function WR(){let s=new WeakMap;function e(f){return s.has(f)}function i(f){let h=s.get(f);return h===void 0&&(h={},s.set(f,h)),h}function r(f){s.delete(f)}function l(f,h,m){s.get(f)[h]=m}function c(){s=new WeakMap}return{has:e,get:i,remove:r,update:l,dispose:c}}function qR(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.material.id!==e.material.id?s.material.id-e.material.id:s.z!==e.z?s.z-e.z:s.id-e.id}function cv(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.z!==e.z?e.z-s.z:s.id-e.id}function uv(){const s=[];let e=0;const i=[],r=[],l=[];function c(){e=0,i.length=0,r.length=0,l.length=0}function f(_,S,M,E,T,g){let x=s[e];return x===void 0?(x={id:_.id,object:_,geometry:S,material:M,groupOrder:E,renderOrder:_.renderOrder,z:T,group:g},s[e]=x):(x.id=_.id,x.object=_,x.geometry=S,x.material=M,x.groupOrder=E,x.renderOrder=_.renderOrder,x.z=T,x.group=g),e++,x}function h(_,S,M,E,T,g){const x=f(_,S,M,E,T,g);M.transmission>0?r.push(x):M.transparent===!0?l.push(x):i.push(x)}function m(_,S,M,E,T,g){const x=f(_,S,M,E,T,g);M.transmission>0?r.unshift(x):M.transparent===!0?l.unshift(x):i.unshift(x)}function p(_,S){i.length>1&&i.sort(_||qR),r.length>1&&r.sort(S||cv),l.length>1&&l.sort(S||cv)}function v(){for(let _=e,S=s.length;_<S;_++){const M=s[_];if(M.id===null)break;M.id=null,M.object=null,M.geometry=null,M.material=null,M.group=null}}return{opaque:i,transmissive:r,transparent:l,init:c,push:h,unshift:m,finish:v,sort:p}}function YR(){let s=new WeakMap;function e(r,l){const c=s.get(r);let f;return c===void 0?(f=new uv,s.set(r,[f])):l>=c.length?(f=new uv,c.push(f)):f=c[l],f}function i(){s=new WeakMap}return{get:e,dispose:i}}function jR(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let i;switch(e.type){case"DirectionalLight":i={direction:new ue,color:new Pt};break;case"SpotLight":i={position:new ue,direction:new ue,color:new Pt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":i={position:new ue,color:new Pt,distance:0,decay:0};break;case"HemisphereLight":i={direction:new ue,skyColor:new Pt,groundColor:new Pt};break;case"RectAreaLight":i={color:new Pt,position:new ue,halfWidth:new ue,halfHeight:new ue};break}return s[e.id]=i,i}}}function ZR(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let i;switch(e.type){case"DirectionalLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Xt};break;case"SpotLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Xt};break;case"PointLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Xt,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[e.id]=i,i}}}let KR=0;function QR(s,e){return(e.castShadow?2:0)-(s.castShadow?2:0)+(e.map?1:0)-(s.map?1:0)}function JR(s){const e=new jR,i=ZR(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let p=0;p<9;p++)r.probe.push(new ue);const l=new ue,c=new sn,f=new sn;function h(p){let v=0,_=0,S=0;for(let w=0;w<9;w++)r.probe[w].set(0,0,0);let M=0,E=0,T=0,g=0,x=0,U=0,N=0,O=0,L=0,I=0,F=0;p.sort(QR);for(let w=0,D=p.length;w<D;w++){const V=p[w],se=V.color,ae=V.intensity,me=V.distance;let de=null;if(V.shadow&&V.shadow.map&&(V.shadow.map.texture.format===Is?de=V.shadow.map.texture:de=V.shadow.map.depthTexture||V.shadow.map.texture),V.isAmbientLight)v+=se.r*ae,_+=se.g*ae,S+=se.b*ae;else if(V.isLightProbe){for(let z=0;z<9;z++)r.probe[z].addScaledVector(V.sh.coefficients[z],ae);F++}else if(V.isDirectionalLight){const z=e.get(V);if(z.color.copy(V.color).multiplyScalar(V.intensity),V.castShadow){const H=V.shadow,K=i.get(V);K.shadowIntensity=H.intensity,K.shadowBias=H.bias,K.shadowNormalBias=H.normalBias,K.shadowRadius=H.radius,K.shadowMapSize=H.mapSize,r.directionalShadow[M]=K,r.directionalShadowMap[M]=de,r.directionalShadowMatrix[M]=V.shadow.matrix,U++}r.directional[M]=z,M++}else if(V.isSpotLight){const z=e.get(V);z.position.setFromMatrixPosition(V.matrixWorld),z.color.copy(se).multiplyScalar(ae),z.distance=me,z.coneCos=Math.cos(V.angle),z.penumbraCos=Math.cos(V.angle*(1-V.penumbra)),z.decay=V.decay,r.spot[T]=z;const H=V.shadow;if(V.map&&(r.spotLightMap[L]=V.map,L++,H.updateMatrices(V),V.castShadow&&I++),r.spotLightMatrix[T]=H.matrix,V.castShadow){const K=i.get(V);K.shadowIntensity=H.intensity,K.shadowBias=H.bias,K.shadowNormalBias=H.normalBias,K.shadowRadius=H.radius,K.shadowMapSize=H.mapSize,r.spotShadow[T]=K,r.spotShadowMap[T]=de,O++}T++}else if(V.isRectAreaLight){const z=e.get(V);z.color.copy(se).multiplyScalar(ae),z.halfWidth.set(V.width*.5,0,0),z.halfHeight.set(0,V.height*.5,0),r.rectArea[g]=z,g++}else if(V.isPointLight){const z=e.get(V);if(z.color.copy(V.color).multiplyScalar(V.intensity),z.distance=V.distance,z.decay=V.decay,V.castShadow){const H=V.shadow,K=i.get(V);K.shadowIntensity=H.intensity,K.shadowBias=H.bias,K.shadowNormalBias=H.normalBias,K.shadowRadius=H.radius,K.shadowMapSize=H.mapSize,K.shadowCameraNear=H.camera.near,K.shadowCameraFar=H.camera.far,r.pointShadow[E]=K,r.pointShadowMap[E]=de,r.pointShadowMatrix[E]=V.shadow.matrix,N++}r.point[E]=z,E++}else if(V.isHemisphereLight){const z=e.get(V);z.skyColor.copy(V.color).multiplyScalar(ae),z.groundColor.copy(V.groundColor).multiplyScalar(ae),r.hemi[x]=z,x++}}g>0&&(s.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=Be.LTC_FLOAT_1,r.rectAreaLTC2=Be.LTC_FLOAT_2):(r.rectAreaLTC1=Be.LTC_HALF_1,r.rectAreaLTC2=Be.LTC_HALF_2)),r.ambient[0]=v,r.ambient[1]=_,r.ambient[2]=S;const j=r.hash;(j.directionalLength!==M||j.pointLength!==E||j.spotLength!==T||j.rectAreaLength!==g||j.hemiLength!==x||j.numDirectionalShadows!==U||j.numPointShadows!==N||j.numSpotShadows!==O||j.numSpotMaps!==L||j.numLightProbes!==F)&&(r.directional.length=M,r.spot.length=T,r.rectArea.length=g,r.point.length=E,r.hemi.length=x,r.directionalShadow.length=U,r.directionalShadowMap.length=U,r.pointShadow.length=N,r.pointShadowMap.length=N,r.spotShadow.length=O,r.spotShadowMap.length=O,r.directionalShadowMatrix.length=U,r.pointShadowMatrix.length=N,r.spotLightMatrix.length=O+L-I,r.spotLightMap.length=L,r.numSpotLightShadowsWithMaps=I,r.numLightProbes=F,j.directionalLength=M,j.pointLength=E,j.spotLength=T,j.rectAreaLength=g,j.hemiLength=x,j.numDirectionalShadows=U,j.numPointShadows=N,j.numSpotShadows=O,j.numSpotMaps=L,j.numLightProbes=F,r.version=KR++)}function m(p,v){let _=0,S=0,M=0,E=0,T=0;const g=v.matrixWorldInverse;for(let x=0,U=p.length;x<U;x++){const N=p[x];if(N.isDirectionalLight){const O=r.directional[_];O.direction.setFromMatrixPosition(N.matrixWorld),l.setFromMatrixPosition(N.target.matrixWorld),O.direction.sub(l),O.direction.transformDirection(g),_++}else if(N.isSpotLight){const O=r.spot[M];O.position.setFromMatrixPosition(N.matrixWorld),O.position.applyMatrix4(g),O.direction.setFromMatrixPosition(N.matrixWorld),l.setFromMatrixPosition(N.target.matrixWorld),O.direction.sub(l),O.direction.transformDirection(g),M++}else if(N.isRectAreaLight){const O=r.rectArea[E];O.position.setFromMatrixPosition(N.matrixWorld),O.position.applyMatrix4(g),f.identity(),c.copy(N.matrixWorld),c.premultiply(g),f.extractRotation(c),O.halfWidth.set(N.width*.5,0,0),O.halfHeight.set(0,N.height*.5,0),O.halfWidth.applyMatrix4(f),O.halfHeight.applyMatrix4(f),E++}else if(N.isPointLight){const O=r.point[S];O.position.setFromMatrixPosition(N.matrixWorld),O.position.applyMatrix4(g),S++}else if(N.isHemisphereLight){const O=r.hemi[T];O.direction.setFromMatrixPosition(N.matrixWorld),O.direction.transformDirection(g),T++}}}return{setup:h,setupView:m,state:r}}function fv(s){const e=new JR(s),i=[],r=[];function l(v){p.camera=v,i.length=0,r.length=0}function c(v){i.push(v)}function f(v){r.push(v)}function h(){e.setup(i)}function m(v){e.setupView(i,v)}const p={lightsArray:i,shadowsArray:r,camera:null,lights:e,transmissionRenderTarget:{}};return{init:l,state:p,setupLights:h,setupLightsView:m,pushLight:c,pushShadow:f}}function $R(s){let e=new WeakMap;function i(l,c=0){const f=e.get(l);let h;return f===void 0?(h=new fv(s),e.set(l,[h])):c>=f.length?(h=new fv(s),f.push(h)):h=f[c],h}function r(){e=new WeakMap}return{get:i,dispose:r}}const eC=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,tC=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,nC=[new ue(1,0,0),new ue(-1,0,0),new ue(0,1,0),new ue(0,-1,0),new ue(0,0,1),new ue(0,0,-1)],iC=[new ue(0,-1,0),new ue(0,-1,0),new ue(0,0,1),new ue(0,0,-1),new ue(0,-1,0),new ue(0,-1,0)],dv=new sn,Zo=new ue,th=new ue;function aC(s,e,i){let r=new ax;const l=new Xt,c=new Xt,f=new rn,h=new xb,m=new Sb,p={},v=i.maxTextureSize,_={[rr]:Wn,[Wn]:rr,[Bi]:Bi},S=new qi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Xt},radius:{value:4}},vertexShader:eC,fragmentShader:tC}),M=S.clone();M.defines.HORIZONTAL_PASS=1;const E=new Ui;E.setAttribute("position",new _i(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const T=new Wi(E,S),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Zc;let x=this.type;this.render=function(I,F,j){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||I.length===0)return;I.type===lE&&(ct("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),I.type=Zc);const w=s.getRenderTarget(),D=s.getActiveCubeFace(),V=s.getActiveMipmapLevel(),se=s.state;se.setBlending(va),se.buffers.depth.getReversed()===!0?se.buffers.color.setClear(0,0,0,0):se.buffers.color.setClear(1,1,1,1),se.buffers.depth.setTest(!0),se.setScissorTest(!1);const ae=x!==this.type;ae&&F.traverse(function(me){me.material&&(Array.isArray(me.material)?me.material.forEach(de=>de.needsUpdate=!0):me.material.needsUpdate=!0)});for(let me=0,de=I.length;me<de;me++){const z=I[me],H=z.shadow;if(H===void 0){ct("WebGLShadowMap:",z,"has no shadow.");continue}if(H.autoUpdate===!1&&H.needsUpdate===!1)continue;l.copy(H.mapSize);const K=H.getFrameExtents();if(l.multiply(K),c.copy(H.mapSize),(l.x>v||l.y>v)&&(l.x>v&&(c.x=Math.floor(v/K.x),l.x=c.x*K.x,H.mapSize.x=c.x),l.y>v&&(c.y=Math.floor(v/K.y),l.y=c.y*K.y,H.mapSize.y=c.y)),H.map===null||ae===!0){if(H.map!==null&&(H.map.depthTexture!==null&&(H.map.depthTexture.dispose(),H.map.depthTexture=null),H.map.dispose()),this.type===Ko){if(z.isPointLight){ct("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}H.map=new ki(l.x,l.y,{format:Is,type:Ma,minFilter:On,magFilter:On,generateMipmaps:!1}),H.map.texture.name=z.name+".shadowMap",H.map.depthTexture=new nl(l.x,l.y,Hi),H.map.depthTexture.name=z.name+".shadowMapDepth",H.map.depthTexture.format=Ea,H.map.depthTexture.compareFunction=null,H.map.depthTexture.minFilter=wn,H.map.depthTexture.magFilter=wn}else{z.isPointLight?(H.map=new ix(l.x),H.map.depthTexture=new _b(l.x,Xi)):(H.map=new ki(l.x,l.y),H.map.depthTexture=new nl(l.x,l.y,Xi)),H.map.depthTexture.name=z.name+".shadowMap",H.map.depthTexture.format=Ea;const ve=s.state.buffers.depth.getReversed();this.type===Zc?(H.map.depthTexture.compareFunction=ve?_p:gp,H.map.depthTexture.minFilter=On,H.map.depthTexture.magFilter=On):(H.map.depthTexture.compareFunction=null,H.map.depthTexture.minFilter=wn,H.map.depthTexture.magFilter=wn)}H.camera.updateProjectionMatrix()}const ye=H.map.isWebGLCubeRenderTarget?6:1;for(let ve=0;ve<ye;ve++){if(H.map.isWebGLCubeRenderTarget)s.setRenderTarget(H.map,ve),s.clear();else{ve===0&&(s.setRenderTarget(H.map),s.clear());const A=H.getViewport(ve);f.set(c.x*A.x,c.y*A.y,c.x*A.z,c.y*A.w),se.viewport(f)}if(z.isPointLight){const A=H.camera,B=H.matrix,ee=z.distance||A.far;ee!==A.far&&(A.far=ee,A.updateProjectionMatrix()),Zo.setFromMatrixPosition(z.matrixWorld),A.position.copy(Zo),th.copy(A.position),th.add(nC[ve]),A.up.copy(iC[ve]),A.lookAt(th),A.updateMatrixWorld(),B.makeTranslation(-Zo.x,-Zo.y,-Zo.z),dv.multiplyMatrices(A.projectionMatrix,A.matrixWorldInverse),H._frustum.setFromProjectionMatrix(dv,A.coordinateSystem,A.reversedDepth)}else H.updateMatrices(z);r=H.getFrustum(),O(F,j,H.camera,z,this.type)}H.isPointLightShadow!==!0&&this.type===Ko&&U(H,j),H.needsUpdate=!1}x=this.type,g.needsUpdate=!1,s.setRenderTarget(w,D,V)};function U(I,F){const j=e.update(T);S.defines.VSM_SAMPLES!==I.blurSamples&&(S.defines.VSM_SAMPLES=I.blurSamples,M.defines.VSM_SAMPLES=I.blurSamples,S.needsUpdate=!0,M.needsUpdate=!0),I.mapPass===null&&(I.mapPass=new ki(l.x,l.y,{format:Is,type:Ma})),S.uniforms.shadow_pass.value=I.map.depthTexture,S.uniforms.resolution.value=I.mapSize,S.uniforms.radius.value=I.radius,s.setRenderTarget(I.mapPass),s.clear(),s.renderBufferDirect(F,null,j,S,T,null),M.uniforms.shadow_pass.value=I.mapPass.texture,M.uniforms.resolution.value=I.mapSize,M.uniforms.radius.value=I.radius,s.setRenderTarget(I.map),s.clear(),s.renderBufferDirect(F,null,j,M,T,null)}function N(I,F,j,w){let D=null;const V=j.isPointLight===!0?I.customDistanceMaterial:I.customDepthMaterial;if(V!==void 0)D=V;else if(D=j.isPointLight===!0?m:h,s.localClippingEnabled&&F.clipShadows===!0&&Array.isArray(F.clippingPlanes)&&F.clippingPlanes.length!==0||F.displacementMap&&F.displacementScale!==0||F.alphaMap&&F.alphaTest>0||F.map&&F.alphaTest>0||F.alphaToCoverage===!0){const se=D.uuid,ae=F.uuid;let me=p[se];me===void 0&&(me={},p[se]=me);let de=me[ae];de===void 0&&(de=D.clone(),me[ae]=de,F.addEventListener("dispose",L)),D=de}if(D.visible=F.visible,D.wireframe=F.wireframe,w===Ko?D.side=F.shadowSide!==null?F.shadowSide:F.side:D.side=F.shadowSide!==null?F.shadowSide:_[F.side],D.alphaMap=F.alphaMap,D.alphaTest=F.alphaToCoverage===!0?.5:F.alphaTest,D.map=F.map,D.clipShadows=F.clipShadows,D.clippingPlanes=F.clippingPlanes,D.clipIntersection=F.clipIntersection,D.displacementMap=F.displacementMap,D.displacementScale=F.displacementScale,D.displacementBias=F.displacementBias,D.wireframeLinewidth=F.wireframeLinewidth,D.linewidth=F.linewidth,j.isPointLight===!0&&D.isMeshDistanceMaterial===!0){const se=s.properties.get(D);se.light=j}return D}function O(I,F,j,w,D){if(I.visible===!1)return;if(I.layers.test(F.layers)&&(I.isMesh||I.isLine||I.isPoints)&&(I.castShadow||I.receiveShadow&&D===Ko)&&(!I.frustumCulled||r.intersectsObject(I))){I.modelViewMatrix.multiplyMatrices(j.matrixWorldInverse,I.matrixWorld);const ae=e.update(I),me=I.material;if(Array.isArray(me)){const de=ae.groups;for(let z=0,H=de.length;z<H;z++){const K=de[z],ye=me[K.materialIndex];if(ye&&ye.visible){const ve=N(I,ye,w,D);I.onBeforeShadow(s,I,F,j,ae,ve,K),s.renderBufferDirect(j,null,ae,ve,I,K),I.onAfterShadow(s,I,F,j,ae,ve,K)}}}else if(me.visible){const de=N(I,me,w,D);I.onBeforeShadow(s,I,F,j,ae,de,null),s.renderBufferDirect(j,null,ae,de,I,null),I.onAfterShadow(s,I,F,j,ae,de,null)}}const se=I.children;for(let ae=0,me=se.length;ae<me;ae++)O(se[ae],F,j,w,D)}function L(I){I.target.removeEventListener("dispose",L);for(const j in p){const w=p[j],D=I.target.uuid;D in w&&(w[D].dispose(),delete w[D])}}}const rC={[lh]:ch,[uh]:hh,[fh]:ph,[Fs]:dh,[ch]:lh,[hh]:uh,[ph]:fh,[dh]:Fs};function sC(s,e){function i(){let q=!1;const ze=new rn;let Ue=null;const Ge=new rn(0,0,0,0);return{setMask:function(Ae){Ue!==Ae&&!q&&(s.colorMask(Ae,Ae,Ae,Ae),Ue=Ae)},setLocked:function(Ae){q=Ae},setClear:function(Ae,Ee,Le,st,Ft){Ft===!0&&(Ae*=st,Ee*=st,Le*=st),ze.set(Ae,Ee,Le,st),Ge.equals(ze)===!1&&(s.clearColor(Ae,Ee,Le,st),Ge.copy(ze))},reset:function(){q=!1,Ue=null,Ge.set(-1,0,0,0)}}}function r(){let q=!1,ze=!1,Ue=null,Ge=null,Ae=null;return{setReversed:function(Ee){if(ze!==Ee){const Le=e.get("EXT_clip_control");Ee?Le.clipControlEXT(Le.LOWER_LEFT_EXT,Le.ZERO_TO_ONE_EXT):Le.clipControlEXT(Le.LOWER_LEFT_EXT,Le.NEGATIVE_ONE_TO_ONE_EXT),ze=Ee;const st=Ae;Ae=null,this.setClear(st)}},getReversed:function(){return ze},setTest:function(Ee){Ee?ce(s.DEPTH_TEST):Re(s.DEPTH_TEST)},setMask:function(Ee){Ue!==Ee&&!q&&(s.depthMask(Ee),Ue=Ee)},setFunc:function(Ee){if(ze&&(Ee=rC[Ee]),Ge!==Ee){switch(Ee){case lh:s.depthFunc(s.NEVER);break;case ch:s.depthFunc(s.ALWAYS);break;case uh:s.depthFunc(s.LESS);break;case Fs:s.depthFunc(s.LEQUAL);break;case fh:s.depthFunc(s.EQUAL);break;case dh:s.depthFunc(s.GEQUAL);break;case hh:s.depthFunc(s.GREATER);break;case ph:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}Ge=Ee}},setLocked:function(Ee){q=Ee},setClear:function(Ee){Ae!==Ee&&(ze&&(Ee=1-Ee),s.clearDepth(Ee),Ae=Ee)},reset:function(){q=!1,Ue=null,Ge=null,Ae=null,ze=!1}}}function l(){let q=!1,ze=null,Ue=null,Ge=null,Ae=null,Ee=null,Le=null,st=null,Ft=null;return{setTest:function(bt){q||(bt?ce(s.STENCIL_TEST):Re(s.STENCIL_TEST))},setMask:function(bt){ze!==bt&&!q&&(s.stencilMask(bt),ze=bt)},setFunc:function(bt,Dn,vi){(Ue!==bt||Ge!==Dn||Ae!==vi)&&(s.stencilFunc(bt,Dn,vi),Ue=bt,Ge=Dn,Ae=vi)},setOp:function(bt,Dn,vi){(Ee!==bt||Le!==Dn||st!==vi)&&(s.stencilOp(bt,Dn,vi),Ee=bt,Le=Dn,st=vi)},setLocked:function(bt){q=bt},setClear:function(bt){Ft!==bt&&(s.clearStencil(bt),Ft=bt)},reset:function(){q=!1,ze=null,Ue=null,Ge=null,Ae=null,Ee=null,Le=null,st=null,Ft=null}}}const c=new i,f=new r,h=new l,m=new WeakMap,p=new WeakMap;let v={},_={},S=new WeakMap,M=[],E=null,T=!1,g=null,x=null,U=null,N=null,O=null,L=null,I=null,F=new Pt(0,0,0),j=0,w=!1,D=null,V=null,se=null,ae=null,me=null;const de=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let z=!1,H=0;const K=s.getParameter(s.VERSION);K.indexOf("WebGL")!==-1?(H=parseFloat(/^WebGL (\d)/.exec(K)[1]),z=H>=1):K.indexOf("OpenGL ES")!==-1&&(H=parseFloat(/^OpenGL ES (\d)/.exec(K)[1]),z=H>=2);let ye=null,ve={};const A=s.getParameter(s.SCISSOR_BOX),B=s.getParameter(s.VIEWPORT),ee=new rn().fromArray(A),_e=new rn().fromArray(B);function Te(q,ze,Ue,Ge){const Ae=new Uint8Array(4),Ee=s.createTexture();s.bindTexture(q,Ee),s.texParameteri(q,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(q,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let Le=0;Le<Ue;Le++)q===s.TEXTURE_3D||q===s.TEXTURE_2D_ARRAY?s.texImage3D(ze,0,s.RGBA,1,1,Ge,0,s.RGBA,s.UNSIGNED_BYTE,Ae):s.texImage2D(ze+Le,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,Ae);return Ee}const Q={};Q[s.TEXTURE_2D]=Te(s.TEXTURE_2D,s.TEXTURE_2D,1),Q[s.TEXTURE_CUBE_MAP]=Te(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),Q[s.TEXTURE_2D_ARRAY]=Te(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),Q[s.TEXTURE_3D]=Te(s.TEXTURE_3D,s.TEXTURE_3D,1,1),c.setClear(0,0,0,1),f.setClear(1),h.setClear(0),ce(s.DEPTH_TEST),f.setFunc(Fs),ut(!1),$t(g_),ce(s.CULL_FACE),gt(va);function ce(q){v[q]!==!0&&(s.enable(q),v[q]=!0)}function Re(q){v[q]!==!1&&(s.disable(q),v[q]=!1)}function Ne(q,ze){return _[q]!==ze?(s.bindFramebuffer(q,ze),_[q]=ze,q===s.DRAW_FRAMEBUFFER&&(_[s.FRAMEBUFFER]=ze),q===s.FRAMEBUFFER&&(_[s.DRAW_FRAMEBUFFER]=ze),!0):!1}function re(q,ze){let Ue=M,Ge=!1;if(q){Ue=S.get(ze),Ue===void 0&&(Ue=[],S.set(ze,Ue));const Ae=q.textures;if(Ue.length!==Ae.length||Ue[0]!==s.COLOR_ATTACHMENT0){for(let Ee=0,Le=Ae.length;Ee<Le;Ee++)Ue[Ee]=s.COLOR_ATTACHMENT0+Ee;Ue.length=Ae.length,Ge=!0}}else Ue[0]!==s.BACK&&(Ue[0]=s.BACK,Ge=!0);Ge&&s.drawBuffers(Ue)}function ke(q){return E!==q?(s.useProgram(q),E=q,!0):!1}const Ce={[Lr]:s.FUNC_ADD,[uE]:s.FUNC_SUBTRACT,[fE]:s.FUNC_REVERSE_SUBTRACT};Ce[dE]=s.MIN,Ce[hE]=s.MAX;const rt={[pE]:s.ZERO,[mE]:s.ONE,[gE]:s.SRC_COLOR,[sh]:s.SRC_ALPHA,[ME]:s.SRC_ALPHA_SATURATE,[SE]:s.DST_COLOR,[vE]:s.DST_ALPHA,[_E]:s.ONE_MINUS_SRC_COLOR,[oh]:s.ONE_MINUS_SRC_ALPHA,[yE]:s.ONE_MINUS_DST_COLOR,[xE]:s.ONE_MINUS_DST_ALPHA,[EE]:s.CONSTANT_COLOR,[bE]:s.ONE_MINUS_CONSTANT_COLOR,[TE]:s.CONSTANT_ALPHA,[AE]:s.ONE_MINUS_CONSTANT_ALPHA};function gt(q,ze,Ue,Ge,Ae,Ee,Le,st,Ft,bt){if(q===va){T===!0&&(Re(s.BLEND),T=!1);return}if(T===!1&&(ce(s.BLEND),T=!0),q!==cE){if(q!==g||bt!==w){if((x!==Lr||O!==Lr)&&(s.blendEquation(s.FUNC_ADD),x=Lr,O=Lr),bt)switch(q){case Os:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case rh:s.blendFunc(s.ONE,s.ONE);break;case __:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case v_:s.blendFuncSeparate(s.DST_COLOR,s.ONE_MINUS_SRC_ALPHA,s.ZERO,s.ONE);break;default:Ct("WebGLState: Invalid blending: ",q);break}else switch(q){case Os:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case rh:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE,s.ONE,s.ONE);break;case __:Ct("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case v_:Ct("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Ct("WebGLState: Invalid blending: ",q);break}U=null,N=null,L=null,I=null,F.set(0,0,0),j=0,g=q,w=bt}return}Ae=Ae||ze,Ee=Ee||Ue,Le=Le||Ge,(ze!==x||Ae!==O)&&(s.blendEquationSeparate(Ce[ze],Ce[Ae]),x=ze,O=Ae),(Ue!==U||Ge!==N||Ee!==L||Le!==I)&&(s.blendFuncSeparate(rt[Ue],rt[Ge],rt[Ee],rt[Le]),U=Ue,N=Ge,L=Ee,I=Le),(st.equals(F)===!1||Ft!==j)&&(s.blendColor(st.r,st.g,st.b,Ft),F.copy(st),j=Ft),g=q,w=!1}function wt(q,ze){q.side===Bi?Re(s.CULL_FACE):ce(s.CULL_FACE);let Ue=q.side===Wn;ze&&(Ue=!Ue),ut(Ue),q.blending===Os&&q.transparent===!1?gt(va):gt(q.blending,q.blendEquation,q.blendSrc,q.blendDst,q.blendEquationAlpha,q.blendSrcAlpha,q.blendDstAlpha,q.blendColor,q.blendAlpha,q.premultipliedAlpha),f.setFunc(q.depthFunc),f.setTest(q.depthTest),f.setMask(q.depthWrite),c.setMask(q.colorWrite);const Ge=q.stencilWrite;h.setTest(Ge),Ge&&(h.setMask(q.stencilWriteMask),h.setFunc(q.stencilFunc,q.stencilRef,q.stencilFuncMask),h.setOp(q.stencilFail,q.stencilZFail,q.stencilZPass)),Zt(q.polygonOffset,q.polygonOffsetFactor,q.polygonOffsetUnits),q.alphaToCoverage===!0?ce(s.SAMPLE_ALPHA_TO_COVERAGE):Re(s.SAMPLE_ALPHA_TO_COVERAGE)}function ut(q){D!==q&&(q?s.frontFace(s.CW):s.frontFace(s.CCW),D=q)}function $t(q){q!==sE?(ce(s.CULL_FACE),q!==V&&(q===g_?s.cullFace(s.BACK):q===oE?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):Re(s.CULL_FACE),V=q}function k(q){q!==se&&(z&&s.lineWidth(q),se=q)}function Zt(q,ze,Ue){q?(ce(s.POLYGON_OFFSET_FILL),(ae!==ze||me!==Ue)&&(s.polygonOffset(ze,Ue),ae=ze,me=Ue)):Re(s.POLYGON_OFFSET_FILL)}function Et(q){q?ce(s.SCISSOR_TEST):Re(s.SCISSOR_TEST)}function Nt(q){q===void 0&&(q=s.TEXTURE0+de-1),ye!==q&&(s.activeTexture(q),ye=q)}function Ke(q,ze,Ue){Ue===void 0&&(ye===null?Ue=s.TEXTURE0+de-1:Ue=ye);let Ge=ve[Ue];Ge===void 0&&(Ge={type:void 0,texture:void 0},ve[Ue]=Ge),(Ge.type!==q||Ge.texture!==ze)&&(ye!==Ue&&(s.activeTexture(Ue),ye=Ue),s.bindTexture(q,ze||Q[q]),Ge.type=q,Ge.texture=ze)}function P(){const q=ve[ye];q!==void 0&&q.type!==void 0&&(s.bindTexture(q.type,null),q.type=void 0,q.texture=void 0)}function b(){try{s.compressedTexImage2D(...arguments)}catch(q){Ct("WebGLState:",q)}}function Y(){try{s.compressedTexImage3D(...arguments)}catch(q){Ct("WebGLState:",q)}}function xe(){try{s.texSubImage2D(...arguments)}catch(q){Ct("WebGLState:",q)}}function be(){try{s.texSubImage3D(...arguments)}catch(q){Ct("WebGLState:",q)}}function pe(){try{s.compressedTexSubImage2D(...arguments)}catch(q){Ct("WebGLState:",q)}}function Je(){try{s.compressedTexSubImage3D(...arguments)}catch(q){Ct("WebGLState:",q)}}function Oe(){try{s.texStorage2D(...arguments)}catch(q){Ct("WebGLState:",q)}}function Ye(){try{s.texStorage3D(...arguments)}catch(q){Ct("WebGLState:",q)}}function at(){try{s.texImage2D(...arguments)}catch(q){Ct("WebGLState:",q)}}function we(){try{s.texImage3D(...arguments)}catch(q){Ct("WebGLState:",q)}}function De(q){ee.equals(q)===!1&&(s.scissor(q.x,q.y,q.z,q.w),ee.copy(q))}function Ve(q){_e.equals(q)===!1&&(s.viewport(q.x,q.y,q.z,q.w),_e.copy(q))}function He(q,ze){let Ue=p.get(ze);Ue===void 0&&(Ue=new WeakMap,p.set(ze,Ue));let Ge=Ue.get(q);Ge===void 0&&(Ge=s.getUniformBlockIndex(ze,q.name),Ue.set(q,Ge))}function Pe(q,ze){const Ge=p.get(ze).get(q);m.get(ze)!==Ge&&(s.uniformBlockBinding(ze,Ge,q.__bindingPointIndex),m.set(ze,Ge))}function dt(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),f.setReversed(!1),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),v={},ye=null,ve={},_={},S=new WeakMap,M=[],E=null,T=!1,g=null,x=null,U=null,N=null,O=null,L=null,I=null,F=new Pt(0,0,0),j=0,w=!1,D=null,V=null,se=null,ae=null,me=null,ee.set(0,0,s.canvas.width,s.canvas.height),_e.set(0,0,s.canvas.width,s.canvas.height),c.reset(),f.reset(),h.reset()}return{buffers:{color:c,depth:f,stencil:h},enable:ce,disable:Re,bindFramebuffer:Ne,drawBuffers:re,useProgram:ke,setBlending:gt,setMaterial:wt,setFlipSided:ut,setCullFace:$t,setLineWidth:k,setPolygonOffset:Zt,setScissorTest:Et,activeTexture:Nt,bindTexture:Ke,unbindTexture:P,compressedTexImage2D:b,compressedTexImage3D:Y,texImage2D:at,texImage3D:we,updateUBOMapping:He,uniformBlockBinding:Pe,texStorage2D:Oe,texStorage3D:Ye,texSubImage2D:xe,texSubImage3D:be,compressedTexSubImage2D:pe,compressedTexSubImage3D:Je,scissor:De,viewport:Ve,reset:dt}}function oC(s,e,i,r,l,c,f){const h=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,m=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),p=new Xt,v=new WeakMap;let _;const S=new WeakMap;let M=!1;try{M=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function E(P,b){return M?new OffscreenCanvas(P,b):au("canvas")}function T(P,b,Y){let xe=1;const be=Ke(P);if((be.width>Y||be.height>Y)&&(xe=Y/Math.max(be.width,be.height)),xe<1)if(typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&P instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&P instanceof ImageBitmap||typeof VideoFrame<"u"&&P instanceof VideoFrame){const pe=Math.floor(xe*be.width),Je=Math.floor(xe*be.height);_===void 0&&(_=E(pe,Je));const Oe=b?E(pe,Je):_;return Oe.width=pe,Oe.height=Je,Oe.getContext("2d").drawImage(P,0,0,pe,Je),ct("WebGLRenderer: Texture has been resized from ("+be.width+"x"+be.height+") to ("+pe+"x"+Je+")."),Oe}else return"data"in P&&ct("WebGLRenderer: Image in DataTexture is too big ("+be.width+"x"+be.height+")."),P;return P}function g(P){return P.generateMipmaps}function x(P){s.generateMipmap(P)}function U(P){return P.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:P.isWebGL3DRenderTarget?s.TEXTURE_3D:P.isWebGLArrayRenderTarget||P.isCompressedArrayTexture?s.TEXTURE_2D_ARRAY:s.TEXTURE_2D}function N(P,b,Y,xe,be=!1){if(P!==null){if(s[P]!==void 0)return s[P];ct("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+P+"'")}let pe=b;if(b===s.RED&&(Y===s.FLOAT&&(pe=s.R32F),Y===s.HALF_FLOAT&&(pe=s.R16F),Y===s.UNSIGNED_BYTE&&(pe=s.R8)),b===s.RED_INTEGER&&(Y===s.UNSIGNED_BYTE&&(pe=s.R8UI),Y===s.UNSIGNED_SHORT&&(pe=s.R16UI),Y===s.UNSIGNED_INT&&(pe=s.R32UI),Y===s.BYTE&&(pe=s.R8I),Y===s.SHORT&&(pe=s.R16I),Y===s.INT&&(pe=s.R32I)),b===s.RG&&(Y===s.FLOAT&&(pe=s.RG32F),Y===s.HALF_FLOAT&&(pe=s.RG16F),Y===s.UNSIGNED_BYTE&&(pe=s.RG8)),b===s.RG_INTEGER&&(Y===s.UNSIGNED_BYTE&&(pe=s.RG8UI),Y===s.UNSIGNED_SHORT&&(pe=s.RG16UI),Y===s.UNSIGNED_INT&&(pe=s.RG32UI),Y===s.BYTE&&(pe=s.RG8I),Y===s.SHORT&&(pe=s.RG16I),Y===s.INT&&(pe=s.RG32I)),b===s.RGB_INTEGER&&(Y===s.UNSIGNED_BYTE&&(pe=s.RGB8UI),Y===s.UNSIGNED_SHORT&&(pe=s.RGB16UI),Y===s.UNSIGNED_INT&&(pe=s.RGB32UI),Y===s.BYTE&&(pe=s.RGB8I),Y===s.SHORT&&(pe=s.RGB16I),Y===s.INT&&(pe=s.RGB32I)),b===s.RGBA_INTEGER&&(Y===s.UNSIGNED_BYTE&&(pe=s.RGBA8UI),Y===s.UNSIGNED_SHORT&&(pe=s.RGBA16UI),Y===s.UNSIGNED_INT&&(pe=s.RGBA32UI),Y===s.BYTE&&(pe=s.RGBA8I),Y===s.SHORT&&(pe=s.RGBA16I),Y===s.INT&&(pe=s.RGBA32I)),b===s.RGB&&(Y===s.UNSIGNED_INT_5_9_9_9_REV&&(pe=s.RGB9_E5),Y===s.UNSIGNED_INT_10F_11F_11F_REV&&(pe=s.R11F_G11F_B10F)),b===s.RGBA){const Je=be?nu:Tt.getTransfer(xe);Y===s.FLOAT&&(pe=s.RGBA32F),Y===s.HALF_FLOAT&&(pe=s.RGBA16F),Y===s.UNSIGNED_BYTE&&(pe=Je===Ht?s.SRGB8_ALPHA8:s.RGBA8),Y===s.UNSIGNED_SHORT_4_4_4_4&&(pe=s.RGBA4),Y===s.UNSIGNED_SHORT_5_5_5_1&&(pe=s.RGB5_A1)}return(pe===s.R16F||pe===s.R32F||pe===s.RG16F||pe===s.RG32F||pe===s.RGBA16F||pe===s.RGBA32F)&&e.get("EXT_color_buffer_float"),pe}function O(P,b){let Y;return P?b===null||b===Xi||b===el?Y=s.DEPTH24_STENCIL8:b===Hi?Y=s.DEPTH32F_STENCIL8:b===$o&&(Y=s.DEPTH24_STENCIL8,ct("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):b===null||b===Xi||b===el?Y=s.DEPTH_COMPONENT24:b===Hi?Y=s.DEPTH_COMPONENT32F:b===$o&&(Y=s.DEPTH_COMPONENT16),Y}function L(P,b){return g(P)===!0||P.isFramebufferTexture&&P.minFilter!==wn&&P.minFilter!==On?Math.log2(Math.max(b.width,b.height))+1:P.mipmaps!==void 0&&P.mipmaps.length>0?P.mipmaps.length:P.isCompressedTexture&&Array.isArray(P.image)?b.mipmaps.length:1}function I(P){const b=P.target;b.removeEventListener("dispose",I),j(b),b.isVideoTexture&&v.delete(b)}function F(P){const b=P.target;b.removeEventListener("dispose",F),D(b)}function j(P){const b=r.get(P);if(b.__webglInit===void 0)return;const Y=P.source,xe=S.get(Y);if(xe){const be=xe[b.__cacheKey];be.usedTimes--,be.usedTimes===0&&w(P),Object.keys(xe).length===0&&S.delete(Y)}r.remove(P)}function w(P){const b=r.get(P);s.deleteTexture(b.__webglTexture);const Y=P.source,xe=S.get(Y);delete xe[b.__cacheKey],f.memory.textures--}function D(P){const b=r.get(P);if(P.depthTexture&&(P.depthTexture.dispose(),r.remove(P.depthTexture)),P.isWebGLCubeRenderTarget)for(let xe=0;xe<6;xe++){if(Array.isArray(b.__webglFramebuffer[xe]))for(let be=0;be<b.__webglFramebuffer[xe].length;be++)s.deleteFramebuffer(b.__webglFramebuffer[xe][be]);else s.deleteFramebuffer(b.__webglFramebuffer[xe]);b.__webglDepthbuffer&&s.deleteRenderbuffer(b.__webglDepthbuffer[xe])}else{if(Array.isArray(b.__webglFramebuffer))for(let xe=0;xe<b.__webglFramebuffer.length;xe++)s.deleteFramebuffer(b.__webglFramebuffer[xe]);else s.deleteFramebuffer(b.__webglFramebuffer);if(b.__webglDepthbuffer&&s.deleteRenderbuffer(b.__webglDepthbuffer),b.__webglMultisampledFramebuffer&&s.deleteFramebuffer(b.__webglMultisampledFramebuffer),b.__webglColorRenderbuffer)for(let xe=0;xe<b.__webglColorRenderbuffer.length;xe++)b.__webglColorRenderbuffer[xe]&&s.deleteRenderbuffer(b.__webglColorRenderbuffer[xe]);b.__webglDepthRenderbuffer&&s.deleteRenderbuffer(b.__webglDepthRenderbuffer)}const Y=P.textures;for(let xe=0,be=Y.length;xe<be;xe++){const pe=r.get(Y[xe]);pe.__webglTexture&&(s.deleteTexture(pe.__webglTexture),f.memory.textures--),r.remove(Y[xe])}r.remove(P)}let V=0;function se(){V=0}function ae(){const P=V;return P>=l.maxTextures&&ct("WebGLTextures: Trying to use "+P+" texture units while this GPU supports only "+l.maxTextures),V+=1,P}function me(P){const b=[];return b.push(P.wrapS),b.push(P.wrapT),b.push(P.wrapR||0),b.push(P.magFilter),b.push(P.minFilter),b.push(P.anisotropy),b.push(P.internalFormat),b.push(P.format),b.push(P.type),b.push(P.generateMipmaps),b.push(P.premultiplyAlpha),b.push(P.flipY),b.push(P.unpackAlignment),b.push(P.colorSpace),b.join()}function de(P,b){const Y=r.get(P);if(P.isVideoTexture&&Et(P),P.isRenderTargetTexture===!1&&P.isExternalTexture!==!0&&P.version>0&&Y.__version!==P.version){const xe=P.image;if(xe===null)ct("WebGLRenderer: Texture marked for update but no image data found.");else if(xe.complete===!1)ct("WebGLRenderer: Texture marked for update but image is incomplete");else{Q(Y,P,b);return}}else P.isExternalTexture&&(Y.__webglTexture=P.sourceTexture?P.sourceTexture:null);i.bindTexture(s.TEXTURE_2D,Y.__webglTexture,s.TEXTURE0+b)}function z(P,b){const Y=r.get(P);if(P.isRenderTargetTexture===!1&&P.version>0&&Y.__version!==P.version){Q(Y,P,b);return}else P.isExternalTexture&&(Y.__webglTexture=P.sourceTexture?P.sourceTexture:null);i.bindTexture(s.TEXTURE_2D_ARRAY,Y.__webglTexture,s.TEXTURE0+b)}function H(P,b){const Y=r.get(P);if(P.isRenderTargetTexture===!1&&P.version>0&&Y.__version!==P.version){Q(Y,P,b);return}i.bindTexture(s.TEXTURE_3D,Y.__webglTexture,s.TEXTURE0+b)}function K(P,b){const Y=r.get(P);if(P.isCubeDepthTexture!==!0&&P.version>0&&Y.__version!==P.version){ce(Y,P,b);return}i.bindTexture(s.TEXTURE_CUBE_MAP,Y.__webglTexture,s.TEXTURE0+b)}const ye={[_h]:s.REPEAT,[ga]:s.CLAMP_TO_EDGE,[vh]:s.MIRRORED_REPEAT},ve={[wn]:s.NEAREST,[wE]:s.NEAREST_MIPMAP_NEAREST,[bc]:s.NEAREST_MIPMAP_LINEAR,[On]:s.LINEAR,[Td]:s.LINEAR_MIPMAP_NEAREST,[Or]:s.LINEAR_MIPMAP_LINEAR},A={[NE]:s.NEVER,[IE]:s.ALWAYS,[OE]:s.LESS,[gp]:s.LEQUAL,[PE]:s.EQUAL,[_p]:s.GEQUAL,[FE]:s.GREATER,[zE]:s.NOTEQUAL};function B(P,b){if(b.type===Hi&&e.has("OES_texture_float_linear")===!1&&(b.magFilter===On||b.magFilter===Td||b.magFilter===bc||b.magFilter===Or||b.minFilter===On||b.minFilter===Td||b.minFilter===bc||b.minFilter===Or)&&ct("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(P,s.TEXTURE_WRAP_S,ye[b.wrapS]),s.texParameteri(P,s.TEXTURE_WRAP_T,ye[b.wrapT]),(P===s.TEXTURE_3D||P===s.TEXTURE_2D_ARRAY)&&s.texParameteri(P,s.TEXTURE_WRAP_R,ye[b.wrapR]),s.texParameteri(P,s.TEXTURE_MAG_FILTER,ve[b.magFilter]),s.texParameteri(P,s.TEXTURE_MIN_FILTER,ve[b.minFilter]),b.compareFunction&&(s.texParameteri(P,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(P,s.TEXTURE_COMPARE_FUNC,A[b.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(b.magFilter===wn||b.minFilter!==bc&&b.minFilter!==Or||b.type===Hi&&e.has("OES_texture_float_linear")===!1)return;if(b.anisotropy>1||r.get(b).__currentAnisotropy){const Y=e.get("EXT_texture_filter_anisotropic");s.texParameterf(P,Y.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(b.anisotropy,l.getMaxAnisotropy())),r.get(b).__currentAnisotropy=b.anisotropy}}}function ee(P,b){let Y=!1;P.__webglInit===void 0&&(P.__webglInit=!0,b.addEventListener("dispose",I));const xe=b.source;let be=S.get(xe);be===void 0&&(be={},S.set(xe,be));const pe=me(b);if(pe!==P.__cacheKey){be[pe]===void 0&&(be[pe]={texture:s.createTexture(),usedTimes:0},f.memory.textures++,Y=!0),be[pe].usedTimes++;const Je=be[P.__cacheKey];Je!==void 0&&(be[P.__cacheKey].usedTimes--,Je.usedTimes===0&&w(b)),P.__cacheKey=pe,P.__webglTexture=be[pe].texture}return Y}function _e(P,b,Y){return Math.floor(Math.floor(P/Y)/b)}function Te(P,b,Y,xe){const pe=P.updateRanges;if(pe.length===0)i.texSubImage2D(s.TEXTURE_2D,0,0,0,b.width,b.height,Y,xe,b.data);else{pe.sort((we,De)=>we.start-De.start);let Je=0;for(let we=1;we<pe.length;we++){const De=pe[Je],Ve=pe[we],He=De.start+De.count,Pe=_e(Ve.start,b.width,4),dt=_e(De.start,b.width,4);Ve.start<=He+1&&Pe===dt&&_e(Ve.start+Ve.count-1,b.width,4)===Pe?De.count=Math.max(De.count,Ve.start+Ve.count-De.start):(++Je,pe[Je]=Ve)}pe.length=Je+1;const Oe=s.getParameter(s.UNPACK_ROW_LENGTH),Ye=s.getParameter(s.UNPACK_SKIP_PIXELS),at=s.getParameter(s.UNPACK_SKIP_ROWS);s.pixelStorei(s.UNPACK_ROW_LENGTH,b.width);for(let we=0,De=pe.length;we<De;we++){const Ve=pe[we],He=Math.floor(Ve.start/4),Pe=Math.ceil(Ve.count/4),dt=He%b.width,q=Math.floor(He/b.width),ze=Pe,Ue=1;s.pixelStorei(s.UNPACK_SKIP_PIXELS,dt),s.pixelStorei(s.UNPACK_SKIP_ROWS,q),i.texSubImage2D(s.TEXTURE_2D,0,dt,q,ze,Ue,Y,xe,b.data)}P.clearUpdateRanges(),s.pixelStorei(s.UNPACK_ROW_LENGTH,Oe),s.pixelStorei(s.UNPACK_SKIP_PIXELS,Ye),s.pixelStorei(s.UNPACK_SKIP_ROWS,at)}}function Q(P,b,Y){let xe=s.TEXTURE_2D;(b.isDataArrayTexture||b.isCompressedArrayTexture)&&(xe=s.TEXTURE_2D_ARRAY),b.isData3DTexture&&(xe=s.TEXTURE_3D);const be=ee(P,b),pe=b.source;i.bindTexture(xe,P.__webglTexture,s.TEXTURE0+Y);const Je=r.get(pe);if(pe.version!==Je.__version||be===!0){i.activeTexture(s.TEXTURE0+Y);const Oe=Tt.getPrimaries(Tt.workingColorSpace),Ye=b.colorSpace===ir?null:Tt.getPrimaries(b.colorSpace),at=b.colorSpace===ir||Oe===Ye?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,b.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,b.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,at);let we=T(b.image,!1,l.maxTextureSize);we=Nt(b,we);const De=c.convert(b.format,b.colorSpace),Ve=c.convert(b.type);let He=N(b.internalFormat,De,Ve,b.colorSpace,b.isVideoTexture);B(xe,b);let Pe;const dt=b.mipmaps,q=b.isVideoTexture!==!0,ze=Je.__version===void 0||be===!0,Ue=pe.dataReady,Ge=L(b,we);if(b.isDepthTexture)He=O(b.format===Pr,b.type),ze&&(q?i.texStorage2D(s.TEXTURE_2D,1,He,we.width,we.height):i.texImage2D(s.TEXTURE_2D,0,He,we.width,we.height,0,De,Ve,null));else if(b.isDataTexture)if(dt.length>0){q&&ze&&i.texStorage2D(s.TEXTURE_2D,Ge,He,dt[0].width,dt[0].height);for(let Ae=0,Ee=dt.length;Ae<Ee;Ae++)Pe=dt[Ae],q?Ue&&i.texSubImage2D(s.TEXTURE_2D,Ae,0,0,Pe.width,Pe.height,De,Ve,Pe.data):i.texImage2D(s.TEXTURE_2D,Ae,He,Pe.width,Pe.height,0,De,Ve,Pe.data);b.generateMipmaps=!1}else q?(ze&&i.texStorage2D(s.TEXTURE_2D,Ge,He,we.width,we.height),Ue&&Te(b,we,De,Ve)):i.texImage2D(s.TEXTURE_2D,0,He,we.width,we.height,0,De,Ve,we.data);else if(b.isCompressedTexture)if(b.isCompressedArrayTexture){q&&ze&&i.texStorage3D(s.TEXTURE_2D_ARRAY,Ge,He,dt[0].width,dt[0].height,we.depth);for(let Ae=0,Ee=dt.length;Ae<Ee;Ae++)if(Pe=dt[Ae],b.format!==Ci)if(De!==null)if(q){if(Ue)if(b.layerUpdates.size>0){const Le=k_(Pe.width,Pe.height,b.format,b.type);for(const st of b.layerUpdates){const Ft=Pe.data.subarray(st*Le/Pe.data.BYTES_PER_ELEMENT,(st+1)*Le/Pe.data.BYTES_PER_ELEMENT);i.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,Ae,0,0,st,Pe.width,Pe.height,1,De,Ft)}b.clearLayerUpdates()}else i.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,Ae,0,0,0,Pe.width,Pe.height,we.depth,De,Pe.data)}else i.compressedTexImage3D(s.TEXTURE_2D_ARRAY,Ae,He,Pe.width,Pe.height,we.depth,0,Pe.data,0,0);else ct("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else q?Ue&&i.texSubImage3D(s.TEXTURE_2D_ARRAY,Ae,0,0,0,Pe.width,Pe.height,we.depth,De,Ve,Pe.data):i.texImage3D(s.TEXTURE_2D_ARRAY,Ae,He,Pe.width,Pe.height,we.depth,0,De,Ve,Pe.data)}else{q&&ze&&i.texStorage2D(s.TEXTURE_2D,Ge,He,dt[0].width,dt[0].height);for(let Ae=0,Ee=dt.length;Ae<Ee;Ae++)Pe=dt[Ae],b.format!==Ci?De!==null?q?Ue&&i.compressedTexSubImage2D(s.TEXTURE_2D,Ae,0,0,Pe.width,Pe.height,De,Pe.data):i.compressedTexImage2D(s.TEXTURE_2D,Ae,He,Pe.width,Pe.height,0,Pe.data):ct("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):q?Ue&&i.texSubImage2D(s.TEXTURE_2D,Ae,0,0,Pe.width,Pe.height,De,Ve,Pe.data):i.texImage2D(s.TEXTURE_2D,Ae,He,Pe.width,Pe.height,0,De,Ve,Pe.data)}else if(b.isDataArrayTexture)if(q){if(ze&&i.texStorage3D(s.TEXTURE_2D_ARRAY,Ge,He,we.width,we.height,we.depth),Ue)if(b.layerUpdates.size>0){const Ae=k_(we.width,we.height,b.format,b.type);for(const Ee of b.layerUpdates){const Le=we.data.subarray(Ee*Ae/we.data.BYTES_PER_ELEMENT,(Ee+1)*Ae/we.data.BYTES_PER_ELEMENT);i.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,Ee,we.width,we.height,1,De,Ve,Le)}b.clearLayerUpdates()}else i.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,we.width,we.height,we.depth,De,Ve,we.data)}else i.texImage3D(s.TEXTURE_2D_ARRAY,0,He,we.width,we.height,we.depth,0,De,Ve,we.data);else if(b.isData3DTexture)q?(ze&&i.texStorage3D(s.TEXTURE_3D,Ge,He,we.width,we.height,we.depth),Ue&&i.texSubImage3D(s.TEXTURE_3D,0,0,0,0,we.width,we.height,we.depth,De,Ve,we.data)):i.texImage3D(s.TEXTURE_3D,0,He,we.width,we.height,we.depth,0,De,Ve,we.data);else if(b.isFramebufferTexture){if(ze)if(q)i.texStorage2D(s.TEXTURE_2D,Ge,He,we.width,we.height);else{let Ae=we.width,Ee=we.height;for(let Le=0;Le<Ge;Le++)i.texImage2D(s.TEXTURE_2D,Le,He,Ae,Ee,0,De,Ve,null),Ae>>=1,Ee>>=1}}else if(dt.length>0){if(q&&ze){const Ae=Ke(dt[0]);i.texStorage2D(s.TEXTURE_2D,Ge,He,Ae.width,Ae.height)}for(let Ae=0,Ee=dt.length;Ae<Ee;Ae++)Pe=dt[Ae],q?Ue&&i.texSubImage2D(s.TEXTURE_2D,Ae,0,0,De,Ve,Pe):i.texImage2D(s.TEXTURE_2D,Ae,He,De,Ve,Pe);b.generateMipmaps=!1}else if(q){if(ze){const Ae=Ke(we);i.texStorage2D(s.TEXTURE_2D,Ge,He,Ae.width,Ae.height)}Ue&&i.texSubImage2D(s.TEXTURE_2D,0,0,0,De,Ve,we)}else i.texImage2D(s.TEXTURE_2D,0,He,De,Ve,we);g(b)&&x(xe),Je.__version=pe.version,b.onUpdate&&b.onUpdate(b)}P.__version=b.version}function ce(P,b,Y){if(b.image.length!==6)return;const xe=ee(P,b),be=b.source;i.bindTexture(s.TEXTURE_CUBE_MAP,P.__webglTexture,s.TEXTURE0+Y);const pe=r.get(be);if(be.version!==pe.__version||xe===!0){i.activeTexture(s.TEXTURE0+Y);const Je=Tt.getPrimaries(Tt.workingColorSpace),Oe=b.colorSpace===ir?null:Tt.getPrimaries(b.colorSpace),Ye=b.colorSpace===ir||Je===Oe?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,b.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,b.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ye);const at=b.isCompressedTexture||b.image[0].isCompressedTexture,we=b.image[0]&&b.image[0].isDataTexture,De=[];for(let Ee=0;Ee<6;Ee++)!at&&!we?De[Ee]=T(b.image[Ee],!0,l.maxCubemapSize):De[Ee]=we?b.image[Ee].image:b.image[Ee],De[Ee]=Nt(b,De[Ee]);const Ve=De[0],He=c.convert(b.format,b.colorSpace),Pe=c.convert(b.type),dt=N(b.internalFormat,He,Pe,b.colorSpace),q=b.isVideoTexture!==!0,ze=pe.__version===void 0||xe===!0,Ue=be.dataReady;let Ge=L(b,Ve);B(s.TEXTURE_CUBE_MAP,b);let Ae;if(at){q&&ze&&i.texStorage2D(s.TEXTURE_CUBE_MAP,Ge,dt,Ve.width,Ve.height);for(let Ee=0;Ee<6;Ee++){Ae=De[Ee].mipmaps;for(let Le=0;Le<Ae.length;Le++){const st=Ae[Le];b.format!==Ci?He!==null?q?Ue&&i.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Ee,Le,0,0,st.width,st.height,He,st.data):i.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Ee,Le,dt,st.width,st.height,0,st.data):ct("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):q?Ue&&i.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Ee,Le,0,0,st.width,st.height,He,Pe,st.data):i.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Ee,Le,dt,st.width,st.height,0,He,Pe,st.data)}}}else{if(Ae=b.mipmaps,q&&ze){Ae.length>0&&Ge++;const Ee=Ke(De[0]);i.texStorage2D(s.TEXTURE_CUBE_MAP,Ge,dt,Ee.width,Ee.height)}for(let Ee=0;Ee<6;Ee++)if(we){q?Ue&&i.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Ee,0,0,0,De[Ee].width,De[Ee].height,He,Pe,De[Ee].data):i.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Ee,0,dt,De[Ee].width,De[Ee].height,0,He,Pe,De[Ee].data);for(let Le=0;Le<Ae.length;Le++){const Ft=Ae[Le].image[Ee].image;q?Ue&&i.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Ee,Le+1,0,0,Ft.width,Ft.height,He,Pe,Ft.data):i.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Ee,Le+1,dt,Ft.width,Ft.height,0,He,Pe,Ft.data)}}else{q?Ue&&i.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Ee,0,0,0,He,Pe,De[Ee]):i.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Ee,0,dt,He,Pe,De[Ee]);for(let Le=0;Le<Ae.length;Le++){const st=Ae[Le];q?Ue&&i.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Ee,Le+1,0,0,He,Pe,st.image[Ee]):i.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Ee,Le+1,dt,He,Pe,st.image[Ee])}}}g(b)&&x(s.TEXTURE_CUBE_MAP),pe.__version=be.version,b.onUpdate&&b.onUpdate(b)}P.__version=b.version}function Re(P,b,Y,xe,be,pe){const Je=c.convert(Y.format,Y.colorSpace),Oe=c.convert(Y.type),Ye=N(Y.internalFormat,Je,Oe,Y.colorSpace),at=r.get(b),we=r.get(Y);if(we.__renderTarget=b,!at.__hasExternalTextures){const De=Math.max(1,b.width>>pe),Ve=Math.max(1,b.height>>pe);be===s.TEXTURE_3D||be===s.TEXTURE_2D_ARRAY?i.texImage3D(be,pe,Ye,De,Ve,b.depth,0,Je,Oe,null):i.texImage2D(be,pe,Ye,De,Ve,0,Je,Oe,null)}i.bindFramebuffer(s.FRAMEBUFFER,P),Zt(b)?h.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,xe,be,we.__webglTexture,0,k(b)):(be===s.TEXTURE_2D||be>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&be<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,xe,be,we.__webglTexture,pe),i.bindFramebuffer(s.FRAMEBUFFER,null)}function Ne(P,b,Y){if(s.bindRenderbuffer(s.RENDERBUFFER,P),b.depthBuffer){const xe=b.depthTexture,be=xe&&xe.isDepthTexture?xe.type:null,pe=O(b.stencilBuffer,be),Je=b.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;Zt(b)?h.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,k(b),pe,b.width,b.height):Y?s.renderbufferStorageMultisample(s.RENDERBUFFER,k(b),pe,b.width,b.height):s.renderbufferStorage(s.RENDERBUFFER,pe,b.width,b.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,Je,s.RENDERBUFFER,P)}else{const xe=b.textures;for(let be=0;be<xe.length;be++){const pe=xe[be],Je=c.convert(pe.format,pe.colorSpace),Oe=c.convert(pe.type),Ye=N(pe.internalFormat,Je,Oe,pe.colorSpace);Zt(b)?h.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,k(b),Ye,b.width,b.height):Y?s.renderbufferStorageMultisample(s.RENDERBUFFER,k(b),Ye,b.width,b.height):s.renderbufferStorage(s.RENDERBUFFER,Ye,b.width,b.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function re(P,b,Y){const xe=b.isWebGLCubeRenderTarget===!0;if(i.bindFramebuffer(s.FRAMEBUFFER,P),!(b.depthTexture&&b.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const be=r.get(b.depthTexture);if(be.__renderTarget=b,(!be.__webglTexture||b.depthTexture.image.width!==b.width||b.depthTexture.image.height!==b.height)&&(b.depthTexture.image.width=b.width,b.depthTexture.image.height=b.height,b.depthTexture.needsUpdate=!0),xe){if(be.__webglInit===void 0&&(be.__webglInit=!0,b.depthTexture.addEventListener("dispose",I)),be.__webglTexture===void 0){be.__webglTexture=s.createTexture(),i.bindTexture(s.TEXTURE_CUBE_MAP,be.__webglTexture),B(s.TEXTURE_CUBE_MAP,b.depthTexture);const at=c.convert(b.depthTexture.format),we=c.convert(b.depthTexture.type);let De;b.depthTexture.format===Ea?De=s.DEPTH_COMPONENT24:b.depthTexture.format===Pr&&(De=s.DEPTH24_STENCIL8);for(let Ve=0;Ve<6;Ve++)s.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Ve,0,De,b.width,b.height,0,at,we,null)}}else de(b.depthTexture,0);const pe=be.__webglTexture,Je=k(b),Oe=xe?s.TEXTURE_CUBE_MAP_POSITIVE_X+Y:s.TEXTURE_2D,Ye=b.depthTexture.format===Pr?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;if(b.depthTexture.format===Ea)Zt(b)?h.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,Ye,Oe,pe,0,Je):s.framebufferTexture2D(s.FRAMEBUFFER,Ye,Oe,pe,0);else if(b.depthTexture.format===Pr)Zt(b)?h.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,Ye,Oe,pe,0,Je):s.framebufferTexture2D(s.FRAMEBUFFER,Ye,Oe,pe,0);else throw new Error("Unknown depthTexture format")}function ke(P){const b=r.get(P),Y=P.isWebGLCubeRenderTarget===!0;if(b.__boundDepthTexture!==P.depthTexture){const xe=P.depthTexture;if(b.__depthDisposeCallback&&b.__depthDisposeCallback(),xe){const be=()=>{delete b.__boundDepthTexture,delete b.__depthDisposeCallback,xe.removeEventListener("dispose",be)};xe.addEventListener("dispose",be),b.__depthDisposeCallback=be}b.__boundDepthTexture=xe}if(P.depthTexture&&!b.__autoAllocateDepthBuffer)if(Y)for(let xe=0;xe<6;xe++)re(b.__webglFramebuffer[xe],P,xe);else{const xe=P.texture.mipmaps;xe&&xe.length>0?re(b.__webglFramebuffer[0],P,0):re(b.__webglFramebuffer,P,0)}else if(Y){b.__webglDepthbuffer=[];for(let xe=0;xe<6;xe++)if(i.bindFramebuffer(s.FRAMEBUFFER,b.__webglFramebuffer[xe]),b.__webglDepthbuffer[xe]===void 0)b.__webglDepthbuffer[xe]=s.createRenderbuffer(),Ne(b.__webglDepthbuffer[xe],P,!1);else{const be=P.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,pe=b.__webglDepthbuffer[xe];s.bindRenderbuffer(s.RENDERBUFFER,pe),s.framebufferRenderbuffer(s.FRAMEBUFFER,be,s.RENDERBUFFER,pe)}}else{const xe=P.texture.mipmaps;if(xe&&xe.length>0?i.bindFramebuffer(s.FRAMEBUFFER,b.__webglFramebuffer[0]):i.bindFramebuffer(s.FRAMEBUFFER,b.__webglFramebuffer),b.__webglDepthbuffer===void 0)b.__webglDepthbuffer=s.createRenderbuffer(),Ne(b.__webglDepthbuffer,P,!1);else{const be=P.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,pe=b.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,pe),s.framebufferRenderbuffer(s.FRAMEBUFFER,be,s.RENDERBUFFER,pe)}}i.bindFramebuffer(s.FRAMEBUFFER,null)}function Ce(P,b,Y){const xe=r.get(P);b!==void 0&&Re(xe.__webglFramebuffer,P,P.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),Y!==void 0&&ke(P)}function rt(P){const b=P.texture,Y=r.get(P),xe=r.get(b);P.addEventListener("dispose",F);const be=P.textures,pe=P.isWebGLCubeRenderTarget===!0,Je=be.length>1;if(Je||(xe.__webglTexture===void 0&&(xe.__webglTexture=s.createTexture()),xe.__version=b.version,f.memory.textures++),pe){Y.__webglFramebuffer=[];for(let Oe=0;Oe<6;Oe++)if(b.mipmaps&&b.mipmaps.length>0){Y.__webglFramebuffer[Oe]=[];for(let Ye=0;Ye<b.mipmaps.length;Ye++)Y.__webglFramebuffer[Oe][Ye]=s.createFramebuffer()}else Y.__webglFramebuffer[Oe]=s.createFramebuffer()}else{if(b.mipmaps&&b.mipmaps.length>0){Y.__webglFramebuffer=[];for(let Oe=0;Oe<b.mipmaps.length;Oe++)Y.__webglFramebuffer[Oe]=s.createFramebuffer()}else Y.__webglFramebuffer=s.createFramebuffer();if(Je)for(let Oe=0,Ye=be.length;Oe<Ye;Oe++){const at=r.get(be[Oe]);at.__webglTexture===void 0&&(at.__webglTexture=s.createTexture(),f.memory.textures++)}if(P.samples>0&&Zt(P)===!1){Y.__webglMultisampledFramebuffer=s.createFramebuffer(),Y.__webglColorRenderbuffer=[],i.bindFramebuffer(s.FRAMEBUFFER,Y.__webglMultisampledFramebuffer);for(let Oe=0;Oe<be.length;Oe++){const Ye=be[Oe];Y.__webglColorRenderbuffer[Oe]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,Y.__webglColorRenderbuffer[Oe]);const at=c.convert(Ye.format,Ye.colorSpace),we=c.convert(Ye.type),De=N(Ye.internalFormat,at,we,Ye.colorSpace,P.isXRRenderTarget===!0),Ve=k(P);s.renderbufferStorageMultisample(s.RENDERBUFFER,Ve,De,P.width,P.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Oe,s.RENDERBUFFER,Y.__webglColorRenderbuffer[Oe])}s.bindRenderbuffer(s.RENDERBUFFER,null),P.depthBuffer&&(Y.__webglDepthRenderbuffer=s.createRenderbuffer(),Ne(Y.__webglDepthRenderbuffer,P,!0)),i.bindFramebuffer(s.FRAMEBUFFER,null)}}if(pe){i.bindTexture(s.TEXTURE_CUBE_MAP,xe.__webglTexture),B(s.TEXTURE_CUBE_MAP,b);for(let Oe=0;Oe<6;Oe++)if(b.mipmaps&&b.mipmaps.length>0)for(let Ye=0;Ye<b.mipmaps.length;Ye++)Re(Y.__webglFramebuffer[Oe][Ye],P,b,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+Oe,Ye);else Re(Y.__webglFramebuffer[Oe],P,b,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+Oe,0);g(b)&&x(s.TEXTURE_CUBE_MAP),i.unbindTexture()}else if(Je){for(let Oe=0,Ye=be.length;Oe<Ye;Oe++){const at=be[Oe],we=r.get(at);let De=s.TEXTURE_2D;(P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&(De=P.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),i.bindTexture(De,we.__webglTexture),B(De,at),Re(Y.__webglFramebuffer,P,at,s.COLOR_ATTACHMENT0+Oe,De,0),g(at)&&x(De)}i.unbindTexture()}else{let Oe=s.TEXTURE_2D;if((P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&(Oe=P.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),i.bindTexture(Oe,xe.__webglTexture),B(Oe,b),b.mipmaps&&b.mipmaps.length>0)for(let Ye=0;Ye<b.mipmaps.length;Ye++)Re(Y.__webglFramebuffer[Ye],P,b,s.COLOR_ATTACHMENT0,Oe,Ye);else Re(Y.__webglFramebuffer,P,b,s.COLOR_ATTACHMENT0,Oe,0);g(b)&&x(Oe),i.unbindTexture()}P.depthBuffer&&ke(P)}function gt(P){const b=P.textures;for(let Y=0,xe=b.length;Y<xe;Y++){const be=b[Y];if(g(be)){const pe=U(P),Je=r.get(be).__webglTexture;i.bindTexture(pe,Je),x(pe),i.unbindTexture()}}}const wt=[],ut=[];function $t(P){if(P.samples>0){if(Zt(P)===!1){const b=P.textures,Y=P.width,xe=P.height;let be=s.COLOR_BUFFER_BIT;const pe=P.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Je=r.get(P),Oe=b.length>1;if(Oe)for(let at=0;at<b.length;at++)i.bindFramebuffer(s.FRAMEBUFFER,Je.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+at,s.RENDERBUFFER,null),i.bindFramebuffer(s.FRAMEBUFFER,Je.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+at,s.TEXTURE_2D,null,0);i.bindFramebuffer(s.READ_FRAMEBUFFER,Je.__webglMultisampledFramebuffer);const Ye=P.texture.mipmaps;Ye&&Ye.length>0?i.bindFramebuffer(s.DRAW_FRAMEBUFFER,Je.__webglFramebuffer[0]):i.bindFramebuffer(s.DRAW_FRAMEBUFFER,Je.__webglFramebuffer);for(let at=0;at<b.length;at++){if(P.resolveDepthBuffer&&(P.depthBuffer&&(be|=s.DEPTH_BUFFER_BIT),P.stencilBuffer&&P.resolveStencilBuffer&&(be|=s.STENCIL_BUFFER_BIT)),Oe){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,Je.__webglColorRenderbuffer[at]);const we=r.get(b[at]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,we,0)}s.blitFramebuffer(0,0,Y,xe,0,0,Y,xe,be,s.NEAREST),m===!0&&(wt.length=0,ut.length=0,wt.push(s.COLOR_ATTACHMENT0+at),P.depthBuffer&&P.resolveDepthBuffer===!1&&(wt.push(pe),ut.push(pe),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,ut)),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,wt))}if(i.bindFramebuffer(s.READ_FRAMEBUFFER,null),i.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),Oe)for(let at=0;at<b.length;at++){i.bindFramebuffer(s.FRAMEBUFFER,Je.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+at,s.RENDERBUFFER,Je.__webglColorRenderbuffer[at]);const we=r.get(b[at]).__webglTexture;i.bindFramebuffer(s.FRAMEBUFFER,Je.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+at,s.TEXTURE_2D,we,0)}i.bindFramebuffer(s.DRAW_FRAMEBUFFER,Je.__webglMultisampledFramebuffer)}else if(P.depthBuffer&&P.resolveDepthBuffer===!1&&m){const b=P.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[b])}}}function k(P){return Math.min(l.maxSamples,P.samples)}function Zt(P){const b=r.get(P);return P.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&b.__useRenderToTexture!==!1}function Et(P){const b=f.render.frame;v.get(P)!==b&&(v.set(P,b),P.update())}function Nt(P,b){const Y=P.colorSpace,xe=P.format,be=P.type;return P.isCompressedTexture===!0||P.isVideoTexture===!0||Y!==Bs&&Y!==ir&&(Tt.getTransfer(Y)===Ht?(xe!==Ci||be!==gi)&&ct("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Ct("WebGLTextures: Unsupported texture color space:",Y)),b}function Ke(P){return typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement?(p.width=P.naturalWidth||P.width,p.height=P.naturalHeight||P.height):typeof VideoFrame<"u"&&P instanceof VideoFrame?(p.width=P.displayWidth,p.height=P.displayHeight):(p.width=P.width,p.height=P.height),p}this.allocateTextureUnit=ae,this.resetTextureUnits=se,this.setTexture2D=de,this.setTexture2DArray=z,this.setTexture3D=H,this.setTextureCube=K,this.rebindTextures=Ce,this.setupRenderTarget=rt,this.updateRenderTargetMipmap=gt,this.updateMultisampleRenderTarget=$t,this.setupDepthRenderbuffer=ke,this.setupFrameBufferTexture=Re,this.useMultisampledRTT=Zt,this.isReversedDepthBuffer=function(){return i.buffers.depth.getReversed()}}function lC(s,e){function i(r,l=ir){let c;const f=Tt.getTransfer(l);if(r===gi)return s.UNSIGNED_BYTE;if(r===fp)return s.UNSIGNED_SHORT_4_4_4_4;if(r===dp)return s.UNSIGNED_SHORT_5_5_5_1;if(r===Vv)return s.UNSIGNED_INT_5_9_9_9_REV;if(r===kv)return s.UNSIGNED_INT_10F_11F_11F_REV;if(r===Hv)return s.BYTE;if(r===Gv)return s.SHORT;if(r===$o)return s.UNSIGNED_SHORT;if(r===up)return s.INT;if(r===Xi)return s.UNSIGNED_INT;if(r===Hi)return s.FLOAT;if(r===Ma)return s.HALF_FLOAT;if(r===Xv)return s.ALPHA;if(r===Wv)return s.RGB;if(r===Ci)return s.RGBA;if(r===Ea)return s.DEPTH_COMPONENT;if(r===Pr)return s.DEPTH_STENCIL;if(r===qv)return s.RED;if(r===hp)return s.RED_INTEGER;if(r===Is)return s.RG;if(r===pp)return s.RG_INTEGER;if(r===mp)return s.RGBA_INTEGER;if(r===Kc||r===Qc||r===Jc||r===$c)if(f===Ht)if(c=e.get("WEBGL_compressed_texture_s3tc_srgb"),c!==null){if(r===Kc)return c.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===Qc)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===Jc)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===$c)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(c=e.get("WEBGL_compressed_texture_s3tc"),c!==null){if(r===Kc)return c.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===Qc)return c.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===Jc)return c.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===$c)return c.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===xh||r===Sh||r===yh||r===Mh)if(c=e.get("WEBGL_compressed_texture_pvrtc"),c!==null){if(r===xh)return c.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===Sh)return c.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===yh)return c.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===Mh)return c.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===Eh||r===bh||r===Th||r===Ah||r===Rh||r===Ch||r===wh)if(c=e.get("WEBGL_compressed_texture_etc"),c!==null){if(r===Eh||r===bh)return f===Ht?c.COMPRESSED_SRGB8_ETC2:c.COMPRESSED_RGB8_ETC2;if(r===Th)return f===Ht?c.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:c.COMPRESSED_RGBA8_ETC2_EAC;if(r===Ah)return c.COMPRESSED_R11_EAC;if(r===Rh)return c.COMPRESSED_SIGNED_R11_EAC;if(r===Ch)return c.COMPRESSED_RG11_EAC;if(r===wh)return c.COMPRESSED_SIGNED_RG11_EAC}else return null;if(r===Dh||r===Uh||r===Lh||r===Nh||r===Oh||r===Ph||r===Fh||r===zh||r===Ih||r===Bh||r===Hh||r===Gh||r===Vh||r===kh)if(c=e.get("WEBGL_compressed_texture_astc"),c!==null){if(r===Dh)return f===Ht?c.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:c.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===Uh)return f===Ht?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:c.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===Lh)return f===Ht?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:c.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===Nh)return f===Ht?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:c.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===Oh)return f===Ht?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:c.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===Ph)return f===Ht?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:c.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===Fh)return f===Ht?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:c.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===zh)return f===Ht?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:c.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===Ih)return f===Ht?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:c.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===Bh)return f===Ht?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:c.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===Hh)return f===Ht?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:c.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===Gh)return f===Ht?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:c.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===Vh)return f===Ht?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:c.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===kh)return f===Ht?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:c.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===Xh||r===Wh||r===qh)if(c=e.get("EXT_texture_compression_bptc"),c!==null){if(r===Xh)return f===Ht?c.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:c.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===Wh)return c.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===qh)return c.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===Yh||r===jh||r===Zh||r===Kh)if(c=e.get("EXT_texture_compression_rgtc"),c!==null){if(r===Yh)return c.COMPRESSED_RED_RGTC1_EXT;if(r===jh)return c.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===Zh)return c.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===Kh)return c.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===el?s.UNSIGNED_INT_24_8:s[r]!==void 0?s[r]:null}return{convert:i}}const cC=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,uC=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class fC{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,i){if(this.texture===null){const r=new sx(e.texture);(e.depthNear!==i.depthNear||e.depthFar!==i.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=r}}getMesh(e){if(this.texture!==null&&this.mesh===null){const i=e.cameras[0].viewport,r=new qi({vertexShader:cC,fragmentShader:uC,uniforms:{depthColor:{value:this.texture},depthWidth:{value:i.z},depthHeight:{value:i.w}}});this.mesh=new Wi(new cl(20,20),r)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class dC extends Xs{constructor(e,i){super();const r=this;let l=null,c=1,f=null,h="local-floor",m=1,p=null,v=null,_=null,S=null,M=null,E=null;const T=typeof XRWebGLBinding<"u",g=new fC,x={},U=i.getContextAttributes();let N=null,O=null;const L=[],I=[],F=new Xt;let j=null;const w=new mi;w.viewport=new rn;const D=new mi;D.viewport=new rn;const V=[w,D],se=new yb;let ae=null,me=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Q){let ce=L[Q];return ce===void 0&&(ce=new jd,L[Q]=ce),ce.getTargetRaySpace()},this.getControllerGrip=function(Q){let ce=L[Q];return ce===void 0&&(ce=new jd,L[Q]=ce),ce.getGripSpace()},this.getHand=function(Q){let ce=L[Q];return ce===void 0&&(ce=new jd,L[Q]=ce),ce.getHandSpace()};function de(Q){const ce=I.indexOf(Q.inputSource);if(ce===-1)return;const Re=L[ce];Re!==void 0&&(Re.update(Q.inputSource,Q.frame,p||f),Re.dispatchEvent({type:Q.type,data:Q.inputSource}))}function z(){l.removeEventListener("select",de),l.removeEventListener("selectstart",de),l.removeEventListener("selectend",de),l.removeEventListener("squeeze",de),l.removeEventListener("squeezestart",de),l.removeEventListener("squeezeend",de),l.removeEventListener("end",z),l.removeEventListener("inputsourceschange",H);for(let Q=0;Q<L.length;Q++){const ce=I[Q];ce!==null&&(I[Q]=null,L[Q].disconnect(ce))}ae=null,me=null,g.reset();for(const Q in x)delete x[Q];e.setRenderTarget(N),M=null,S=null,_=null,l=null,O=null,Te.stop(),r.isPresenting=!1,e.setPixelRatio(j),e.setSize(F.width,F.height,!1),r.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Q){c=Q,r.isPresenting===!0&&ct("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Q){h=Q,r.isPresenting===!0&&ct("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return p||f},this.setReferenceSpace=function(Q){p=Q},this.getBaseLayer=function(){return S!==null?S:M},this.getBinding=function(){return _===null&&T&&(_=new XRWebGLBinding(l,i)),_},this.getFrame=function(){return E},this.getSession=function(){return l},this.setSession=async function(Q){if(l=Q,l!==null){if(N=e.getRenderTarget(),l.addEventListener("select",de),l.addEventListener("selectstart",de),l.addEventListener("selectend",de),l.addEventListener("squeeze",de),l.addEventListener("squeezestart",de),l.addEventListener("squeezeend",de),l.addEventListener("end",z),l.addEventListener("inputsourceschange",H),U.xrCompatible!==!0&&await i.makeXRCompatible(),j=e.getPixelRatio(),e.getSize(F),T&&"createProjectionLayer"in XRWebGLBinding.prototype){let Re=null,Ne=null,re=null;U.depth&&(re=U.stencil?i.DEPTH24_STENCIL8:i.DEPTH_COMPONENT24,Re=U.stencil?Pr:Ea,Ne=U.stencil?el:Xi);const ke={colorFormat:i.RGBA8,depthFormat:re,scaleFactor:c};_=this.getBinding(),S=_.createProjectionLayer(ke),l.updateRenderState({layers:[S]}),e.setPixelRatio(1),e.setSize(S.textureWidth,S.textureHeight,!1),O=new ki(S.textureWidth,S.textureHeight,{format:Ci,type:gi,depthTexture:new nl(S.textureWidth,S.textureHeight,Ne,void 0,void 0,void 0,void 0,void 0,void 0,Re),stencilBuffer:U.stencil,colorSpace:e.outputColorSpace,samples:U.antialias?4:0,resolveDepthBuffer:S.ignoreDepthValues===!1,resolveStencilBuffer:S.ignoreDepthValues===!1})}else{const Re={antialias:U.antialias,alpha:!0,depth:U.depth,stencil:U.stencil,framebufferScaleFactor:c};M=new XRWebGLLayer(l,i,Re),l.updateRenderState({baseLayer:M}),e.setPixelRatio(1),e.setSize(M.framebufferWidth,M.framebufferHeight,!1),O=new ki(M.framebufferWidth,M.framebufferHeight,{format:Ci,type:gi,colorSpace:e.outputColorSpace,stencilBuffer:U.stencil,resolveDepthBuffer:M.ignoreDepthValues===!1,resolveStencilBuffer:M.ignoreDepthValues===!1})}O.isXRRenderTarget=!0,this.setFoveation(m),p=null,f=await l.requestReferenceSpace(h),Te.setContext(l),Te.start(),r.isPresenting=!0,r.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(l!==null)return l.environmentBlendMode},this.getDepthTexture=function(){return g.getDepthTexture()};function H(Q){for(let ce=0;ce<Q.removed.length;ce++){const Re=Q.removed[ce],Ne=I.indexOf(Re);Ne>=0&&(I[Ne]=null,L[Ne].disconnect(Re))}for(let ce=0;ce<Q.added.length;ce++){const Re=Q.added[ce];let Ne=I.indexOf(Re);if(Ne===-1){for(let ke=0;ke<L.length;ke++)if(ke>=I.length){I.push(Re),Ne=ke;break}else if(I[ke]===null){I[ke]=Re,Ne=ke;break}if(Ne===-1)break}const re=L[Ne];re&&re.connect(Re)}}const K=new ue,ye=new ue;function ve(Q,ce,Re){K.setFromMatrixPosition(ce.matrixWorld),ye.setFromMatrixPosition(Re.matrixWorld);const Ne=K.distanceTo(ye),re=ce.projectionMatrix.elements,ke=Re.projectionMatrix.elements,Ce=re[14]/(re[10]-1),rt=re[14]/(re[10]+1),gt=(re[9]+1)/re[5],wt=(re[9]-1)/re[5],ut=(re[8]-1)/re[0],$t=(ke[8]+1)/ke[0],k=Ce*ut,Zt=Ce*$t,Et=Ne/(-ut+$t),Nt=Et*-ut;if(ce.matrixWorld.decompose(Q.position,Q.quaternion,Q.scale),Q.translateX(Nt),Q.translateZ(Et),Q.matrixWorld.compose(Q.position,Q.quaternion,Q.scale),Q.matrixWorldInverse.copy(Q.matrixWorld).invert(),re[10]===-1)Q.projectionMatrix.copy(ce.projectionMatrix),Q.projectionMatrixInverse.copy(ce.projectionMatrixInverse);else{const Ke=Ce+Et,P=rt+Et,b=k-Nt,Y=Zt+(Ne-Nt),xe=gt*rt/P*Ke,be=wt*rt/P*Ke;Q.projectionMatrix.makePerspective(b,Y,xe,be,Ke,P),Q.projectionMatrixInverse.copy(Q.projectionMatrix).invert()}}function A(Q,ce){ce===null?Q.matrixWorld.copy(Q.matrix):Q.matrixWorld.multiplyMatrices(ce.matrixWorld,Q.matrix),Q.matrixWorldInverse.copy(Q.matrixWorld).invert()}this.updateCamera=function(Q){if(l===null)return;let ce=Q.near,Re=Q.far;g.texture!==null&&(g.depthNear>0&&(ce=g.depthNear),g.depthFar>0&&(Re=g.depthFar)),se.near=D.near=w.near=ce,se.far=D.far=w.far=Re,(ae!==se.near||me!==se.far)&&(l.updateRenderState({depthNear:se.near,depthFar:se.far}),ae=se.near,me=se.far),se.layers.mask=Q.layers.mask|6,w.layers.mask=se.layers.mask&3,D.layers.mask=se.layers.mask&5;const Ne=Q.parent,re=se.cameras;A(se,Ne);for(let ke=0;ke<re.length;ke++)A(re[ke],Ne);re.length===2?ve(se,w,D):se.projectionMatrix.copy(w.projectionMatrix),B(Q,se,Ne)};function B(Q,ce,Re){Re===null?Q.matrix.copy(ce.matrixWorld):(Q.matrix.copy(Re.matrixWorld),Q.matrix.invert(),Q.matrix.multiply(ce.matrixWorld)),Q.matrix.decompose(Q.position,Q.quaternion,Q.scale),Q.updateMatrixWorld(!0),Q.projectionMatrix.copy(ce.projectionMatrix),Q.projectionMatrixInverse.copy(ce.projectionMatrixInverse),Q.isPerspectiveCamera&&(Q.fov=Qh*2*Math.atan(1/Q.projectionMatrix.elements[5]),Q.zoom=1)}this.getCamera=function(){return se},this.getFoveation=function(){if(!(S===null&&M===null))return m},this.setFoveation=function(Q){m=Q,S!==null&&(S.fixedFoveation=Q),M!==null&&M.fixedFoveation!==void 0&&(M.fixedFoveation=Q)},this.hasDepthSensing=function(){return g.texture!==null},this.getDepthSensingMesh=function(){return g.getMesh(se)},this.getCameraTexture=function(Q){return x[Q]};let ee=null;function _e(Q,ce){if(v=ce.getViewerPose(p||f),E=ce,v!==null){const Re=v.views;M!==null&&(e.setRenderTargetFramebuffer(O,M.framebuffer),e.setRenderTarget(O));let Ne=!1;Re.length!==se.cameras.length&&(se.cameras.length=0,Ne=!0);for(let rt=0;rt<Re.length;rt++){const gt=Re[rt];let wt=null;if(M!==null)wt=M.getViewport(gt);else{const $t=_.getViewSubImage(S,gt);wt=$t.viewport,rt===0&&(e.setRenderTargetTextures(O,$t.colorTexture,$t.depthStencilTexture),e.setRenderTarget(O))}let ut=V[rt];ut===void 0&&(ut=new mi,ut.layers.enable(rt),ut.viewport=new rn,V[rt]=ut),ut.matrix.fromArray(gt.transform.matrix),ut.matrix.decompose(ut.position,ut.quaternion,ut.scale),ut.projectionMatrix.fromArray(gt.projectionMatrix),ut.projectionMatrixInverse.copy(ut.projectionMatrix).invert(),ut.viewport.set(wt.x,wt.y,wt.width,wt.height),rt===0&&(se.matrix.copy(ut.matrix),se.matrix.decompose(se.position,se.quaternion,se.scale)),Ne===!0&&se.cameras.push(ut)}const re=l.enabledFeatures;if(re&&re.includes("depth-sensing")&&l.depthUsage=="gpu-optimized"&&T){_=r.getBinding();const rt=_.getDepthInformation(Re[0]);rt&&rt.isValid&&rt.texture&&g.init(rt,l.renderState)}if(re&&re.includes("camera-access")&&T){e.state.unbindTexture(),_=r.getBinding();for(let rt=0;rt<Re.length;rt++){const gt=Re[rt].camera;if(gt){let wt=x[gt];wt||(wt=new sx,x[gt]=wt);const ut=_.getCameraImage(gt);wt.sourceTexture=ut}}}}for(let Re=0;Re<L.length;Re++){const Ne=I[Re],re=L[Re];Ne!==null&&re!==void 0&&re.update(Ne,ce,p||f)}ee&&ee(Q,ce),ce.detectedPlanes&&r.dispatchEvent({type:"planesdetected",data:ce}),E=null}const Te=new lx;Te.setAnimationLoop(_e),this.setAnimationLoop=function(Q){ee=Q},this.dispose=function(){}}}const Dr=new ba,hC=new sn;function pC(s,e){function i(g,x){g.matrixAutoUpdate===!0&&g.updateMatrix(),x.value.copy(g.matrix)}function r(g,x){x.color.getRGB(g.fogColor.value,ex(s)),x.isFog?(g.fogNear.value=x.near,g.fogFar.value=x.far):x.isFogExp2&&(g.fogDensity.value=x.density)}function l(g,x,U,N,O){x.isMeshBasicMaterial||x.isMeshLambertMaterial?c(g,x):x.isMeshToonMaterial?(c(g,x),_(g,x)):x.isMeshPhongMaterial?(c(g,x),v(g,x)):x.isMeshStandardMaterial?(c(g,x),S(g,x),x.isMeshPhysicalMaterial&&M(g,x,O)):x.isMeshMatcapMaterial?(c(g,x),E(g,x)):x.isMeshDepthMaterial?c(g,x):x.isMeshDistanceMaterial?(c(g,x),T(g,x)):x.isMeshNormalMaterial?c(g,x):x.isLineBasicMaterial?(f(g,x),x.isLineDashedMaterial&&h(g,x)):x.isPointsMaterial?m(g,x,U,N):x.isSpriteMaterial?p(g,x):x.isShadowMaterial?(g.color.value.copy(x.color),g.opacity.value=x.opacity):x.isShaderMaterial&&(x.uniformsNeedUpdate=!1)}function c(g,x){g.opacity.value=x.opacity,x.color&&g.diffuse.value.copy(x.color),x.emissive&&g.emissive.value.copy(x.emissive).multiplyScalar(x.emissiveIntensity),x.map&&(g.map.value=x.map,i(x.map,g.mapTransform)),x.alphaMap&&(g.alphaMap.value=x.alphaMap,i(x.alphaMap,g.alphaMapTransform)),x.bumpMap&&(g.bumpMap.value=x.bumpMap,i(x.bumpMap,g.bumpMapTransform),g.bumpScale.value=x.bumpScale,x.side===Wn&&(g.bumpScale.value*=-1)),x.normalMap&&(g.normalMap.value=x.normalMap,i(x.normalMap,g.normalMapTransform),g.normalScale.value.copy(x.normalScale),x.side===Wn&&g.normalScale.value.negate()),x.displacementMap&&(g.displacementMap.value=x.displacementMap,i(x.displacementMap,g.displacementMapTransform),g.displacementScale.value=x.displacementScale,g.displacementBias.value=x.displacementBias),x.emissiveMap&&(g.emissiveMap.value=x.emissiveMap,i(x.emissiveMap,g.emissiveMapTransform)),x.specularMap&&(g.specularMap.value=x.specularMap,i(x.specularMap,g.specularMapTransform)),x.alphaTest>0&&(g.alphaTest.value=x.alphaTest);const U=e.get(x),N=U.envMap,O=U.envMapRotation;N&&(g.envMap.value=N,Dr.copy(O),Dr.x*=-1,Dr.y*=-1,Dr.z*=-1,N.isCubeTexture&&N.isRenderTargetTexture===!1&&(Dr.y*=-1,Dr.z*=-1),g.envMapRotation.value.setFromMatrix4(hC.makeRotationFromEuler(Dr)),g.flipEnvMap.value=N.isCubeTexture&&N.isRenderTargetTexture===!1?-1:1,g.reflectivity.value=x.reflectivity,g.ior.value=x.ior,g.refractionRatio.value=x.refractionRatio),x.lightMap&&(g.lightMap.value=x.lightMap,g.lightMapIntensity.value=x.lightMapIntensity,i(x.lightMap,g.lightMapTransform)),x.aoMap&&(g.aoMap.value=x.aoMap,g.aoMapIntensity.value=x.aoMapIntensity,i(x.aoMap,g.aoMapTransform))}function f(g,x){g.diffuse.value.copy(x.color),g.opacity.value=x.opacity,x.map&&(g.map.value=x.map,i(x.map,g.mapTransform))}function h(g,x){g.dashSize.value=x.dashSize,g.totalSize.value=x.dashSize+x.gapSize,g.scale.value=x.scale}function m(g,x,U,N){g.diffuse.value.copy(x.color),g.opacity.value=x.opacity,g.size.value=x.size*U,g.scale.value=N*.5,x.map&&(g.map.value=x.map,i(x.map,g.uvTransform)),x.alphaMap&&(g.alphaMap.value=x.alphaMap,i(x.alphaMap,g.alphaMapTransform)),x.alphaTest>0&&(g.alphaTest.value=x.alphaTest)}function p(g,x){g.diffuse.value.copy(x.color),g.opacity.value=x.opacity,g.rotation.value=x.rotation,x.map&&(g.map.value=x.map,i(x.map,g.mapTransform)),x.alphaMap&&(g.alphaMap.value=x.alphaMap,i(x.alphaMap,g.alphaMapTransform)),x.alphaTest>0&&(g.alphaTest.value=x.alphaTest)}function v(g,x){g.specular.value.copy(x.specular),g.shininess.value=Math.max(x.shininess,1e-4)}function _(g,x){x.gradientMap&&(g.gradientMap.value=x.gradientMap)}function S(g,x){g.metalness.value=x.metalness,x.metalnessMap&&(g.metalnessMap.value=x.metalnessMap,i(x.metalnessMap,g.metalnessMapTransform)),g.roughness.value=x.roughness,x.roughnessMap&&(g.roughnessMap.value=x.roughnessMap,i(x.roughnessMap,g.roughnessMapTransform)),x.envMap&&(g.envMapIntensity.value=x.envMapIntensity)}function M(g,x,U){g.ior.value=x.ior,x.sheen>0&&(g.sheenColor.value.copy(x.sheenColor).multiplyScalar(x.sheen),g.sheenRoughness.value=x.sheenRoughness,x.sheenColorMap&&(g.sheenColorMap.value=x.sheenColorMap,i(x.sheenColorMap,g.sheenColorMapTransform)),x.sheenRoughnessMap&&(g.sheenRoughnessMap.value=x.sheenRoughnessMap,i(x.sheenRoughnessMap,g.sheenRoughnessMapTransform))),x.clearcoat>0&&(g.clearcoat.value=x.clearcoat,g.clearcoatRoughness.value=x.clearcoatRoughness,x.clearcoatMap&&(g.clearcoatMap.value=x.clearcoatMap,i(x.clearcoatMap,g.clearcoatMapTransform)),x.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=x.clearcoatRoughnessMap,i(x.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),x.clearcoatNormalMap&&(g.clearcoatNormalMap.value=x.clearcoatNormalMap,i(x.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(x.clearcoatNormalScale),x.side===Wn&&g.clearcoatNormalScale.value.negate())),x.dispersion>0&&(g.dispersion.value=x.dispersion),x.iridescence>0&&(g.iridescence.value=x.iridescence,g.iridescenceIOR.value=x.iridescenceIOR,g.iridescenceThicknessMinimum.value=x.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=x.iridescenceThicknessRange[1],x.iridescenceMap&&(g.iridescenceMap.value=x.iridescenceMap,i(x.iridescenceMap,g.iridescenceMapTransform)),x.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=x.iridescenceThicknessMap,i(x.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),x.transmission>0&&(g.transmission.value=x.transmission,g.transmissionSamplerMap.value=U.texture,g.transmissionSamplerSize.value.set(U.width,U.height),x.transmissionMap&&(g.transmissionMap.value=x.transmissionMap,i(x.transmissionMap,g.transmissionMapTransform)),g.thickness.value=x.thickness,x.thicknessMap&&(g.thicknessMap.value=x.thicknessMap,i(x.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=x.attenuationDistance,g.attenuationColor.value.copy(x.attenuationColor)),x.anisotropy>0&&(g.anisotropyVector.value.set(x.anisotropy*Math.cos(x.anisotropyRotation),x.anisotropy*Math.sin(x.anisotropyRotation)),x.anisotropyMap&&(g.anisotropyMap.value=x.anisotropyMap,i(x.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=x.specularIntensity,g.specularColor.value.copy(x.specularColor),x.specularColorMap&&(g.specularColorMap.value=x.specularColorMap,i(x.specularColorMap,g.specularColorMapTransform)),x.specularIntensityMap&&(g.specularIntensityMap.value=x.specularIntensityMap,i(x.specularIntensityMap,g.specularIntensityMapTransform))}function E(g,x){x.matcap&&(g.matcap.value=x.matcap)}function T(g,x){const U=e.get(x).light;g.referencePosition.value.setFromMatrixPosition(U.matrixWorld),g.nearDistance.value=U.shadow.camera.near,g.farDistance.value=U.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:l}}function mC(s,e,i,r){let l={},c={},f=[];const h=s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS);function m(U,N){const O=N.program;r.uniformBlockBinding(U,O)}function p(U,N){let O=l[U.id];O===void 0&&(E(U),O=v(U),l[U.id]=O,U.addEventListener("dispose",g));const L=N.program;r.updateUBOMapping(U,L);const I=e.render.frame;c[U.id]!==I&&(S(U),c[U.id]=I)}function v(U){const N=_();U.__bindingPointIndex=N;const O=s.createBuffer(),L=U.__size,I=U.usage;return s.bindBuffer(s.UNIFORM_BUFFER,O),s.bufferData(s.UNIFORM_BUFFER,L,I),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,N,O),O}function _(){for(let U=0;U<h;U++)if(f.indexOf(U)===-1)return f.push(U),U;return Ct("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function S(U){const N=l[U.id],O=U.uniforms,L=U.__cache;s.bindBuffer(s.UNIFORM_BUFFER,N);for(let I=0,F=O.length;I<F;I++){const j=Array.isArray(O[I])?O[I]:[O[I]];for(let w=0,D=j.length;w<D;w++){const V=j[w];if(M(V,I,w,L)===!0){const se=V.__offset,ae=Array.isArray(V.value)?V.value:[V.value];let me=0;for(let de=0;de<ae.length;de++){const z=ae[de],H=T(z);typeof z=="number"||typeof z=="boolean"?(V.__data[0]=z,s.bufferSubData(s.UNIFORM_BUFFER,se+me,V.__data)):z.isMatrix3?(V.__data[0]=z.elements[0],V.__data[1]=z.elements[1],V.__data[2]=z.elements[2],V.__data[3]=0,V.__data[4]=z.elements[3],V.__data[5]=z.elements[4],V.__data[6]=z.elements[5],V.__data[7]=0,V.__data[8]=z.elements[6],V.__data[9]=z.elements[7],V.__data[10]=z.elements[8],V.__data[11]=0):(z.toArray(V.__data,me),me+=H.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,se,V.__data)}}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function M(U,N,O,L){const I=U.value,F=N+"_"+O;if(L[F]===void 0)return typeof I=="number"||typeof I=="boolean"?L[F]=I:L[F]=I.clone(),!0;{const j=L[F];if(typeof I=="number"||typeof I=="boolean"){if(j!==I)return L[F]=I,!0}else if(j.equals(I)===!1)return j.copy(I),!0}return!1}function E(U){const N=U.uniforms;let O=0;const L=16;for(let F=0,j=N.length;F<j;F++){const w=Array.isArray(N[F])?N[F]:[N[F]];for(let D=0,V=w.length;D<V;D++){const se=w[D],ae=Array.isArray(se.value)?se.value:[se.value];for(let me=0,de=ae.length;me<de;me++){const z=ae[me],H=T(z),K=O%L,ye=K%H.boundary,ve=K+ye;O+=ye,ve!==0&&L-ve<H.storage&&(O+=L-ve),se.__data=new Float32Array(H.storage/Float32Array.BYTES_PER_ELEMENT),se.__offset=O,O+=H.storage}}}const I=O%L;return I>0&&(O+=L-I),U.__size=O,U.__cache={},this}function T(U){const N={boundary:0,storage:0};return typeof U=="number"||typeof U=="boolean"?(N.boundary=4,N.storage=4):U.isVector2?(N.boundary=8,N.storage=8):U.isVector3||U.isColor?(N.boundary=16,N.storage=12):U.isVector4?(N.boundary=16,N.storage=16):U.isMatrix3?(N.boundary=48,N.storage=48):U.isMatrix4?(N.boundary=64,N.storage=64):U.isTexture?ct("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ct("WebGLRenderer: Unsupported uniform value type.",U),N}function g(U){const N=U.target;N.removeEventListener("dispose",g);const O=f.indexOf(N.__bindingPointIndex);f.splice(O,1),s.deleteBuffer(l[N.id]),delete l[N.id],delete c[N.id]}function x(){for(const U in l)s.deleteBuffer(l[U]);f=[],l={},c={}}return{bind:m,update:p,dispose:x}}const gC=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let zi=null;function _C(){return zi===null&&(zi=new db(gC,16,16,Is,Ma),zi.name="DFG_LUT",zi.minFilter=On,zi.magFilter=On,zi.wrapS=ga,zi.wrapT=ga,zi.generateMipmaps=!1,zi.needsUpdate=!0),zi}class vC{constructor(e={}){const{canvas:i=BE(),context:r=null,depth:l=!0,stencil:c=!1,alpha:f=!1,antialias:h=!1,premultipliedAlpha:m=!0,preserveDrawingBuffer:p=!1,powerPreference:v="default",failIfMajorPerformanceCaveat:_=!1,reversedDepthBuffer:S=!1,outputBufferType:M=gi}=e;this.isWebGLRenderer=!0;let E;if(r!==null){if(typeof WebGLRenderingContext<"u"&&r instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");E=r.getContextAttributes().alpha}else E=f;const T=M,g=new Set([mp,pp,hp]),x=new Set([gi,Xi,$o,el,fp,dp]),U=new Uint32Array(4),N=new Int32Array(4);let O=null,L=null;const I=[],F=[];let j=null;this.domElement=i,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Vi,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const w=this;let D=!1;this._outputColorSpace=pi;let V=0,se=0,ae=null,me=-1,de=null;const z=new rn,H=new rn;let K=null;const ye=new Pt(0);let ve=0,A=i.width,B=i.height,ee=1,_e=null,Te=null;const Q=new rn(0,0,A,B),ce=new rn(0,0,A,B);let Re=!1;const Ne=new ax;let re=!1,ke=!1;const Ce=new sn,rt=new ue,gt=new rn,wt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let ut=!1;function $t(){return ae===null?ee:1}let k=r;function Zt(C,Z){return i.getContext(C,Z)}try{const C={alpha:!0,depth:l,stencil:c,antialias:h,premultipliedAlpha:m,preserveDrawingBuffer:p,powerPreference:v,failIfMajorPerformanceCaveat:_};if("setAttribute"in i&&i.setAttribute("data-engine",`three.js r${cp}`),i.addEventListener("webglcontextlost",st,!1),i.addEventListener("webglcontextrestored",Ft,!1),i.addEventListener("webglcontextcreationerror",bt,!1),k===null){const Z="webgl2";if(k=Zt(Z,C),k===null)throw Zt(Z)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(C){throw Ct("WebGLRenderer: "+C.message),C}let Et,Nt,Ke,P,b,Y,xe,be,pe,Je,Oe,Ye,at,we,De,Ve,He,Pe,dt,q,ze,Ue,Ge,Ae;function Ee(){Et=new _A(k),Et.init(),Ue=new lC(k,Et),Nt=new lA(k,Et,e,Ue),Ke=new sC(k,Et),Nt.reversedDepthBuffer&&S&&Ke.buffers.depth.setReversed(!0),P=new SA(k),b=new WR,Y=new oC(k,Et,Ke,b,Nt,Ue,P),xe=new uA(w),be=new gA(w),pe=new bb(k),Ge=new sA(k,pe),Je=new vA(k,pe,P,Ge),Oe=new MA(k,Je,pe,P),dt=new yA(k,Nt,Y),Ve=new cA(b),Ye=new XR(w,xe,be,Et,Nt,Ge,Ve),at=new pC(w,b),we=new YR,De=new $R(Et),Pe=new rA(w,xe,be,Ke,Oe,E,m),He=new aC(w,Oe,Nt),Ae=new mC(k,P,Nt,Ke),q=new oA(k,Et,P),ze=new xA(k,Et,P),P.programs=Ye.programs,w.capabilities=Nt,w.extensions=Et,w.properties=b,w.renderLists=we,w.shadowMap=He,w.state=Ke,w.info=P}Ee(),T!==gi&&(j=new bA(T,i.width,i.height,l,c));const Le=new dC(w,k);this.xr=Le,this.getContext=function(){return k},this.getContextAttributes=function(){return k.getContextAttributes()},this.forceContextLoss=function(){const C=Et.get("WEBGL_lose_context");C&&C.loseContext()},this.forceContextRestore=function(){const C=Et.get("WEBGL_lose_context");C&&C.restoreContext()},this.getPixelRatio=function(){return ee},this.setPixelRatio=function(C){C!==void 0&&(ee=C,this.setSize(A,B,!1))},this.getSize=function(C){return C.set(A,B)},this.setSize=function(C,Z,fe=!0){if(Le.isPresenting){ct("WebGLRenderer: Can't change size while VR device is presenting.");return}A=C,B=Z,i.width=Math.floor(C*ee),i.height=Math.floor(Z*ee),fe===!0&&(i.style.width=C+"px",i.style.height=Z+"px"),j!==null&&j.setSize(i.width,i.height),this.setViewport(0,0,C,Z)},this.getDrawingBufferSize=function(C){return C.set(A*ee,B*ee).floor()},this.setDrawingBufferSize=function(C,Z,fe){A=C,B=Z,ee=fe,i.width=Math.floor(C*fe),i.height=Math.floor(Z*fe),this.setViewport(0,0,C,Z)},this.setEffects=function(C){if(T===gi){console.error("THREE.WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(C){for(let Z=0;Z<C.length;Z++)if(C[Z].isOutputPass===!0){console.warn("THREE.WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}j.setEffects(C||[])},this.getCurrentViewport=function(C){return C.copy(z)},this.getViewport=function(C){return C.copy(Q)},this.setViewport=function(C,Z,fe,oe){C.isVector4?Q.set(C.x,C.y,C.z,C.w):Q.set(C,Z,fe,oe),Ke.viewport(z.copy(Q).multiplyScalar(ee).round())},this.getScissor=function(C){return C.copy(ce)},this.setScissor=function(C,Z,fe,oe){C.isVector4?ce.set(C.x,C.y,C.z,C.w):ce.set(C,Z,fe,oe),Ke.scissor(H.copy(ce).multiplyScalar(ee).round())},this.getScissorTest=function(){return Re},this.setScissorTest=function(C){Ke.setScissorTest(Re=C)},this.setOpaqueSort=function(C){_e=C},this.setTransparentSort=function(C){Te=C},this.getClearColor=function(C){return C.copy(Pe.getClearColor())},this.setClearColor=function(){Pe.setClearColor(...arguments)},this.getClearAlpha=function(){return Pe.getClearAlpha()},this.setClearAlpha=function(){Pe.setClearAlpha(...arguments)},this.clear=function(C=!0,Z=!0,fe=!0){let oe=0;if(C){let $=!1;if(ae!==null){const Fe=ae.texture.format;$=g.has(Fe)}if($){const Fe=ae.texture.type,Xe=x.has(Fe),Ie=Pe.getClearColor(),We=Pe.getClearAlpha(),je=Ie.r,tt=Ie.g,Ze=Ie.b;Xe?(U[0]=je,U[1]=tt,U[2]=Ze,U[3]=We,k.clearBufferuiv(k.COLOR,0,U)):(N[0]=je,N[1]=tt,N[2]=Ze,N[3]=We,k.clearBufferiv(k.COLOR,0,N))}else oe|=k.COLOR_BUFFER_BIT}Z&&(oe|=k.DEPTH_BUFFER_BIT),fe&&(oe|=k.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),k.clear(oe)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){i.removeEventListener("webglcontextlost",st,!1),i.removeEventListener("webglcontextrestored",Ft,!1),i.removeEventListener("webglcontextcreationerror",bt,!1),Pe.dispose(),we.dispose(),De.dispose(),b.dispose(),xe.dispose(),be.dispose(),Oe.dispose(),Ge.dispose(),Ae.dispose(),Ye.dispose(),Le.dispose(),Le.removeEventListener("sessionstart",Br),Le.removeEventListener("sessionend",Zs),Li.stop()};function st(C){C.preventDefault(),b_("WebGLRenderer: Context Lost."),D=!0}function Ft(){b_("WebGLRenderer: Context Restored."),D=!1;const C=P.autoReset,Z=He.enabled,fe=He.autoUpdate,oe=He.needsUpdate,$=He.type;Ee(),P.autoReset=C,He.enabled=Z,He.autoUpdate=fe,He.needsUpdate=oe,He.type=$}function bt(C){Ct("WebGLRenderer: A WebGL context could not be created. Reason: ",C.statusMessage)}function Dn(C){const Z=C.target;Z.removeEventListener("dispose",Dn),vi(Z)}function vi(C){dl(C),b.remove(C)}function dl(C){const Z=b.get(C).programs;Z!==void 0&&(Z.forEach(function(fe){Ye.releaseProgram(fe)}),C.isShaderMaterial&&Ye.releaseShaderCache(C))}this.renderBufferDirect=function(C,Z,fe,oe,$,Fe){Z===null&&(Z=wt);const Xe=$.isMesh&&$.matrixWorld.determinant()<0,Ie=or(C,Z,fe,oe,$);Ke.setMaterial(oe,Xe);let We=fe.index,je=1;if(oe.wireframe===!0){if(We=Je.getWireframeAttribute(fe),We===void 0)return;je=2}const tt=fe.drawRange,Ze=fe.attributes.position;let nt=tt.start*je,Dt=(tt.start+tt.count)*je;Fe!==null&&(nt=Math.max(nt,Fe.start*je),Dt=Math.min(Dt,(Fe.start+Fe.count)*je)),We!==null?(nt=Math.max(nt,0),Dt=Math.min(Dt,We.count)):Ze!=null&&(nt=Math.max(nt,0),Dt=Math.min(Dt,Ze.count));const Kt=Dt-nt;if(Kt<0||Kt===1/0)return;Ge.setup($,oe,Ie,fe,We);let qt,Ot=q;if(We!==null&&(qt=pe.get(We),Ot=ze,Ot.setIndex(qt)),$.isMesh)oe.wireframe===!0?(Ke.setLineWidth(oe.wireframeLinewidth*$t()),Ot.setMode(k.LINES)):Ot.setMode(k.TRIANGLES);else if($.isLine){let $e=oe.linewidth;$e===void 0&&($e=1),Ke.setLineWidth($e*$t()),$.isLineSegments?Ot.setMode(k.LINES):$.isLineLoop?Ot.setMode(k.LINE_LOOP):Ot.setMode(k.LINE_STRIP)}else $.isPoints?Ot.setMode(k.POINTS):$.isSprite&&Ot.setMode(k.TRIANGLES);if($.isBatchedMesh)if($._multiDrawInstances!==null)tl("WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),Ot.renderMultiDrawInstances($._multiDrawStarts,$._multiDrawCounts,$._multiDrawCount,$._multiDrawInstances);else if(Et.get("WEBGL_multi_draw"))Ot.renderMultiDraw($._multiDrawStarts,$._multiDrawCounts,$._multiDrawCount);else{const $e=$._multiDrawStarts,Ut=$._multiDrawCounts,ot=$._multiDrawCount,Sn=We?pe.get(We).bytesPerElement:1,Yi=b.get(oe).currentProgram.getUniforms();for(let yn=0;yn<ot;yn++)Yi.setValue(k,"_gl_DrawID",yn),Ot.render($e[yn]/Sn,Ut[yn])}else if($.isInstancedMesh)Ot.renderInstances(nt,Kt,$.count);else if(fe.isInstancedBufferGeometry){const $e=fe._maxInstanceCount!==void 0?fe._maxInstanceCount:1/0,Ut=Math.min(fe.instanceCount,$e);Ot.renderInstances(nt,Kt,Ut)}else Ot.render(nt,Kt)};function Ys(C,Z,fe){C.transparent===!0&&C.side===Bi&&C.forceSinglePass===!1?(C.side=Wn,C.needsUpdate=!0,Gr(C,Z,fe),C.side=rr,C.needsUpdate=!0,Gr(C,Z,fe),C.side=Bi):Gr(C,Z,fe)}this.compile=function(C,Z,fe=null){fe===null&&(fe=C),L=De.get(fe),L.init(Z),F.push(L),fe.traverseVisible(function($){$.isLight&&$.layers.test(Z.layers)&&(L.pushLight($),$.castShadow&&L.pushShadow($))}),C!==fe&&C.traverseVisible(function($){$.isLight&&$.layers.test(Z.layers)&&(L.pushLight($),$.castShadow&&L.pushShadow($))}),L.setupLights();const oe=new Set;return C.traverse(function($){if(!($.isMesh||$.isPoints||$.isLine||$.isSprite))return;const Fe=$.material;if(Fe)if(Array.isArray(Fe))for(let Xe=0;Xe<Fe.length;Xe++){const Ie=Fe[Xe];Ys(Ie,fe,$),oe.add(Ie)}else Ys(Fe,fe,$),oe.add(Fe)}),L=F.pop(),oe},this.compileAsync=function(C,Z,fe=null){const oe=this.compile(C,Z,fe);return new Promise($=>{function Fe(){if(oe.forEach(function(Xe){b.get(Xe).currentProgram.isReady()&&oe.delete(Xe)}),oe.size===0){$(C);return}setTimeout(Fe,10)}Et.get("KHR_parallel_shader_compile")!==null?Fe():setTimeout(Fe,10)})};let Ir=null;function js(C){Ir&&Ir(C)}function Br(){Li.stop()}function Zs(){Li.start()}const Li=new lx;Li.setAnimationLoop(js),typeof self<"u"&&Li.setContext(self),this.setAnimationLoop=function(C){Ir=C,Le.setAnimationLoop(C),C===null?Li.stop():Li.start()},Le.addEventListener("sessionstart",Br),Le.addEventListener("sessionend",Zs),this.render=function(C,Z){if(Z!==void 0&&Z.isCamera!==!0){Ct("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(D===!0)return;const fe=Le.enabled===!0&&Le.isPresenting===!0,oe=j!==null&&(ae===null||fe)&&j.begin(w,ae);if(C.matrixWorldAutoUpdate===!0&&C.updateMatrixWorld(),Z.parent===null&&Z.matrixWorldAutoUpdate===!0&&Z.updateMatrixWorld(),Le.enabled===!0&&Le.isPresenting===!0&&(j===null||j.isCompositing()===!1)&&(Le.cameraAutoUpdate===!0&&Le.updateCamera(Z),Z=Le.getCamera()),C.isScene===!0&&C.onBeforeRender(w,C,Z,ae),L=De.get(C,F.length),L.init(Z),F.push(L),Ce.multiplyMatrices(Z.projectionMatrix,Z.matrixWorldInverse),Ne.setFromProjectionMatrix(Ce,Gi,Z.reversedDepth),ke=this.localClippingEnabled,re=Ve.init(this.clippingPlanes,ke),O=we.get(C,I.length),O.init(),I.push(O),Le.enabled===!0&&Le.isPresenting===!0){const Xe=w.xr.getDepthSensingMesh();Xe!==null&&ii(Xe,Z,-1/0,w.sortObjects)}ii(C,Z,0,w.sortObjects),O.finish(),w.sortObjects===!0&&O.sort(_e,Te),ut=Le.enabled===!1||Le.isPresenting===!1||Le.hasDepthSensing()===!1,ut&&Pe.addToRenderList(O,C),this.info.render.frame++,re===!0&&Ve.beginShadows();const $=L.state.shadowsArray;if(He.render($,C,Z),re===!0&&Ve.endShadows(),this.info.autoReset===!0&&this.info.reset(),(oe&&j.hasRenderPass())===!1){const Xe=O.opaque,Ie=O.transmissive;if(L.setupLights(),Z.isArrayCamera){const We=Z.cameras;if(Ie.length>0)for(let je=0,tt=We.length;je<tt;je++){const Ze=We[je];xn(Xe,Ie,C,Ze)}ut&&Pe.render(C);for(let je=0,tt=We.length;je<tt;je++){const Ze=We[je];on(O,C,Ze,Ze.viewport)}}else Ie.length>0&&xn(Xe,Ie,C,Z),ut&&Pe.render(C),on(O,C,Z)}ae!==null&&se===0&&(Y.updateMultisampleRenderTarget(ae),Y.updateRenderTargetMipmap(ae)),oe&&j.end(w),C.isScene===!0&&C.onAfterRender(w,C,Z),Ge.resetDefaultState(),me=-1,de=null,F.pop(),F.length>0?(L=F[F.length-1],re===!0&&Ve.setGlobalState(w.clippingPlanes,L.state.camera)):L=null,I.pop(),I.length>0?O=I[I.length-1]:O=null};function ii(C,Z,fe,oe){if(C.visible===!1)return;if(C.layers.test(Z.layers)){if(C.isGroup)fe=C.renderOrder;else if(C.isLOD)C.autoUpdate===!0&&C.update(Z);else if(C.isLight)L.pushLight(C),C.castShadow&&L.pushShadow(C);else if(C.isSprite){if(!C.frustumCulled||Ne.intersectsSprite(C)){oe&&gt.setFromMatrixPosition(C.matrixWorld).applyMatrix4(Ce);const Xe=Oe.update(C),Ie=C.material;Ie.visible&&O.push(C,Xe,Ie,fe,gt.z,null)}}else if((C.isMesh||C.isLine||C.isPoints)&&(!C.frustumCulled||Ne.intersectsObject(C))){const Xe=Oe.update(C),Ie=C.material;if(oe&&(C.boundingSphere!==void 0?(C.boundingSphere===null&&C.computeBoundingSphere(),gt.copy(C.boundingSphere.center)):(Xe.boundingSphere===null&&Xe.computeBoundingSphere(),gt.copy(Xe.boundingSphere.center)),gt.applyMatrix4(C.matrixWorld).applyMatrix4(Ce)),Array.isArray(Ie)){const We=Xe.groups;for(let je=0,tt=We.length;je<tt;je++){const Ze=We[je],nt=Ie[Ze.materialIndex];nt&&nt.visible&&O.push(C,Xe,nt,fe,gt.z,Ze)}}else Ie.visible&&O.push(C,Xe,Ie,fe,gt.z,null)}}const Fe=C.children;for(let Xe=0,Ie=Fe.length;Xe<Ie;Xe++)ii(Fe[Xe],Z,fe,oe)}function on(C,Z,fe,oe){const{opaque:$,transmissive:Fe,transparent:Xe}=C;L.setupLightsView(fe),re===!0&&Ve.setGlobalState(w.clippingPlanes,fe),oe&&Ke.viewport(z.copy(oe)),$.length>0&&xi($,Z,fe),Fe.length>0&&xi(Fe,Z,fe),Xe.length>0&&xi(Xe,Z,fe),Ke.buffers.depth.setTest(!0),Ke.buffers.depth.setMask(!0),Ke.buffers.color.setMask(!0),Ke.setPolygonOffset(!1)}function xn(C,Z,fe,oe){if((fe.isScene===!0?fe.overrideMaterial:null)!==null)return;if(L.state.transmissionRenderTarget[oe.id]===void 0){const nt=Et.has("EXT_color_buffer_half_float")||Et.has("EXT_color_buffer_float");L.state.transmissionRenderTarget[oe.id]=new ki(1,1,{generateMipmaps:!0,type:nt?Ma:gi,minFilter:Or,samples:Nt.samples,stencilBuffer:c,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Tt.workingColorSpace})}const Fe=L.state.transmissionRenderTarget[oe.id],Xe=oe.viewport||z;Fe.setSize(Xe.z*w.transmissionResolutionScale,Xe.w*w.transmissionResolutionScale);const Ie=w.getRenderTarget(),We=w.getActiveCubeFace(),je=w.getActiveMipmapLevel();w.setRenderTarget(Fe),w.getClearColor(ye),ve=w.getClearAlpha(),ve<1&&w.setClearColor(16777215,.5),w.clear(),ut&&Pe.render(fe);const tt=w.toneMapping;w.toneMapping=Vi;const Ze=oe.viewport;if(oe.viewport!==void 0&&(oe.viewport=void 0),L.setupLightsView(oe),re===!0&&Ve.setGlobalState(w.clippingPlanes,oe),xi(C,fe,oe),Y.updateMultisampleRenderTarget(Fe),Y.updateRenderTargetMipmap(Fe),Et.has("WEBGL_multisampled_render_to_texture")===!1){let nt=!1;for(let Dt=0,Kt=Z.length;Dt<Kt;Dt++){const qt=Z[Dt],{object:Ot,geometry:$e,material:Ut,group:ot}=qt;if(Ut.side===Bi&&Ot.layers.test(oe.layers)){const Sn=Ut.side;Ut.side=Wn,Ut.needsUpdate=!0,Hr(Ot,fe,oe,$e,Ut,ot),Ut.side=Sn,Ut.needsUpdate=!0,nt=!0}}nt===!0&&(Y.updateMultisampleRenderTarget(Fe),Y.updateRenderTargetMipmap(Fe))}w.setRenderTarget(Ie,We,je),w.setClearColor(ye,ve),Ze!==void 0&&(oe.viewport=Ze),w.toneMapping=tt}function xi(C,Z,fe){const oe=Z.isScene===!0?Z.overrideMaterial:null;for(let $=0,Fe=C.length;$<Fe;$++){const Xe=C[$],{object:Ie,geometry:We,group:je}=Xe;let tt=Xe.material;tt.allowOverride===!0&&oe!==null&&(tt=oe),Ie.layers.test(fe.layers)&&Hr(Ie,Z,fe,We,tt,je)}}function Hr(C,Z,fe,oe,$,Fe){C.onBeforeRender(w,Z,fe,oe,$,Fe),C.modelViewMatrix.multiplyMatrices(fe.matrixWorldInverse,C.matrixWorld),C.normalMatrix.getNormalMatrix(C.modelViewMatrix),$.onBeforeRender(w,Z,fe,oe,C,Fe),$.transparent===!0&&$.side===Bi&&$.forceSinglePass===!1?($.side=Wn,$.needsUpdate=!0,w.renderBufferDirect(fe,Z,oe,$,C,Fe),$.side=rr,$.needsUpdate=!0,w.renderBufferDirect(fe,Z,oe,$,C,Fe),$.side=Bi):w.renderBufferDirect(fe,Z,oe,$,C,Fe),C.onAfterRender(w,Z,fe,oe,$,Fe)}function Gr(C,Z,fe){Z.isScene!==!0&&(Z=wt);const oe=b.get(C),$=L.state.lights,Fe=L.state.shadowsArray,Xe=$.state.version,Ie=Ye.getParameters(C,$.state,Fe,Z,fe),We=Ye.getProgramCacheKey(Ie);let je=oe.programs;oe.environment=C.isMeshStandardMaterial?Z.environment:null,oe.fog=Z.fog,oe.envMap=(C.isMeshStandardMaterial?be:xe).get(C.envMap||oe.environment),oe.envMapRotation=oe.environment!==null&&C.envMap===null?Z.environmentRotation:C.envMapRotation,je===void 0&&(C.addEventListener("dispose",Dn),je=new Map,oe.programs=je);let tt=je.get(We);if(tt!==void 0){if(oe.currentProgram===tt&&oe.lightsStateVersion===Xe)return Ks(C,Ie),tt}else Ie.uniforms=Ye.getUniforms(C),C.onBeforeCompile(Ie,w),tt=Ye.acquireProgram(Ie,We),je.set(We,tt),oe.uniforms=Ie.uniforms;const Ze=oe.uniforms;return(!C.isShaderMaterial&&!C.isRawShaderMaterial||C.clipping===!0)&&(Ze.clippingPlanes=Ve.uniform),Ks(C,Ie),oe.needsLights=Ta(C),oe.lightsStateVersion=Xe,oe.needsLights&&(Ze.ambientLightColor.value=$.state.ambient,Ze.lightProbe.value=$.state.probe,Ze.directionalLights.value=$.state.directional,Ze.directionalLightShadows.value=$.state.directionalShadow,Ze.spotLights.value=$.state.spot,Ze.spotLightShadows.value=$.state.spotShadow,Ze.rectAreaLights.value=$.state.rectArea,Ze.ltc_1.value=$.state.rectAreaLTC1,Ze.ltc_2.value=$.state.rectAreaLTC2,Ze.pointLights.value=$.state.point,Ze.pointLightShadows.value=$.state.pointShadow,Ze.hemisphereLights.value=$.state.hemi,Ze.directionalShadowMap.value=$.state.directionalShadowMap,Ze.directionalShadowMatrix.value=$.state.directionalShadowMatrix,Ze.spotShadowMap.value=$.state.spotShadowMap,Ze.spotLightMatrix.value=$.state.spotLightMatrix,Ze.spotLightMap.value=$.state.spotLightMap,Ze.pointShadowMap.value=$.state.pointShadowMap,Ze.pointShadowMatrix.value=$.state.pointShadowMatrix),oe.currentProgram=tt,oe.uniformsList=null,tt}function hl(C){if(C.uniformsList===null){const Z=C.currentProgram.getUniforms();C.uniformsList=eu.seqWithValue(Z.seq,C.uniforms)}return C.uniformsList}function Ks(C,Z){const fe=b.get(C);fe.outputColorSpace=Z.outputColorSpace,fe.batching=Z.batching,fe.batchingColor=Z.batchingColor,fe.instancing=Z.instancing,fe.instancingColor=Z.instancingColor,fe.instancingMorph=Z.instancingMorph,fe.skinning=Z.skinning,fe.morphTargets=Z.morphTargets,fe.morphNormals=Z.morphNormals,fe.morphColors=Z.morphColors,fe.morphTargetsCount=Z.morphTargetsCount,fe.numClippingPlanes=Z.numClippingPlanes,fe.numIntersection=Z.numClipIntersection,fe.vertexAlphas=Z.vertexAlphas,fe.vertexTangents=Z.vertexTangents,fe.toneMapping=Z.toneMapping}function or(C,Z,fe,oe,$){Z.isScene!==!0&&(Z=wt),Y.resetTextureUnits();const Fe=Z.fog,Xe=oe.isMeshStandardMaterial?Z.environment:null,Ie=ae===null?w.outputColorSpace:ae.isXRRenderTarget===!0?ae.texture.colorSpace:Bs,We=(oe.isMeshStandardMaterial?be:xe).get(oe.envMap||Xe),je=oe.vertexColors===!0&&!!fe.attributes.color&&fe.attributes.color.itemSize===4,tt=!!fe.attributes.tangent&&(!!oe.normalMap||oe.anisotropy>0),Ze=!!fe.morphAttributes.position,nt=!!fe.morphAttributes.normal,Dt=!!fe.morphAttributes.color;let Kt=Vi;oe.toneMapped&&(ae===null||ae.isXRRenderTarget===!0)&&(Kt=w.toneMapping);const qt=fe.morphAttributes.position||fe.morphAttributes.normal||fe.morphAttributes.color,Ot=qt!==void 0?qt.length:0,$e=b.get(oe),Ut=L.state.lights;if(re===!0&&(ke===!0||C!==de)){const En=C===de&&oe.id===me;Ve.setState(oe,C,En)}let ot=!1;oe.version===$e.__version?($e.needsLights&&$e.lightsStateVersion!==Ut.state.version||$e.outputColorSpace!==Ie||$.isBatchedMesh&&$e.batching===!1||!$.isBatchedMesh&&$e.batching===!0||$.isBatchedMesh&&$e.batchingColor===!0&&$.colorTexture===null||$.isBatchedMesh&&$e.batchingColor===!1&&$.colorTexture!==null||$.isInstancedMesh&&$e.instancing===!1||!$.isInstancedMesh&&$e.instancing===!0||$.isSkinnedMesh&&$e.skinning===!1||!$.isSkinnedMesh&&$e.skinning===!0||$.isInstancedMesh&&$e.instancingColor===!0&&$.instanceColor===null||$.isInstancedMesh&&$e.instancingColor===!1&&$.instanceColor!==null||$.isInstancedMesh&&$e.instancingMorph===!0&&$.morphTexture===null||$.isInstancedMesh&&$e.instancingMorph===!1&&$.morphTexture!==null||$e.envMap!==We||oe.fog===!0&&$e.fog!==Fe||$e.numClippingPlanes!==void 0&&($e.numClippingPlanes!==Ve.numPlanes||$e.numIntersection!==Ve.numIntersection)||$e.vertexAlphas!==je||$e.vertexTangents!==tt||$e.morphTargets!==Ze||$e.morphNormals!==nt||$e.morphColors!==Dt||$e.toneMapping!==Kt||$e.morphTargetsCount!==Ot)&&(ot=!0):(ot=!0,$e.__version=oe.version);let Sn=$e.currentProgram;ot===!0&&(Sn=Gr(oe,Z,$));let Yi=!1,yn=!1,ai=!1;const zt=Sn.getUniforms(),Mn=$e.uniforms;if(Ke.useProgram(Sn.program)&&(Yi=!0,yn=!0,ai=!0),oe.id!==me&&(me=oe.id,yn=!0),Yi||de!==C){Ke.buffers.depth.getReversed()&&C.reversedDepth!==!0&&(C._reversedDepth=!0,C.updateProjectionMatrix()),zt.setValue(k,"projectionMatrix",C.projectionMatrix),zt.setValue(k,"viewMatrix",C.matrixWorldInverse);const bn=zt.map.cameraPosition;bn!==void 0&&bn.setValue(k,rt.setFromMatrixPosition(C.matrixWorld)),Nt.logarithmicDepthBuffer&&zt.setValue(k,"logDepthBufFC",2/(Math.log(C.far+1)/Math.LN2)),(oe.isMeshPhongMaterial||oe.isMeshToonMaterial||oe.isMeshLambertMaterial||oe.isMeshBasicMaterial||oe.isMeshStandardMaterial||oe.isShaderMaterial)&&zt.setValue(k,"isOrthographic",C.isOrthographicCamera===!0),de!==C&&(de=C,yn=!0,ai=!0)}if($e.needsLights&&(Ut.state.directionalShadowMap.length>0&&zt.setValue(k,"directionalShadowMap",Ut.state.directionalShadowMap,Y),Ut.state.spotShadowMap.length>0&&zt.setValue(k,"spotShadowMap",Ut.state.spotShadowMap,Y),Ut.state.pointShadowMap.length>0&&zt.setValue(k,"pointShadowMap",Ut.state.pointShadowMap,Y)),$.isSkinnedMesh){zt.setOptional(k,$,"bindMatrix"),zt.setOptional(k,$,"bindMatrixInverse");const En=$.skeleton;En&&(En.boneTexture===null&&En.computeBoneTexture(),zt.setValue(k,"boneTexture",En.boneTexture,Y))}$.isBatchedMesh&&(zt.setOptional(k,$,"batchingTexture"),zt.setValue(k,"batchingTexture",$._matricesTexture,Y),zt.setOptional(k,$,"batchingIdTexture"),zt.setValue(k,"batchingIdTexture",$._indirectTexture,Y),zt.setOptional(k,$,"batchingColorTexture"),$._colorsTexture!==null&&zt.setValue(k,"batchingColorTexture",$._colorsTexture,Y));const hn=fe.morphAttributes;if((hn.position!==void 0||hn.normal!==void 0||hn.color!==void 0)&&dt.update($,fe,Sn),(yn||$e.receiveShadow!==$.receiveShadow)&&($e.receiveShadow=$.receiveShadow,zt.setValue(k,"receiveShadow",$.receiveShadow)),oe.isMeshGouraudMaterial&&oe.envMap!==null&&(Mn.envMap.value=We,Mn.flipEnvMap.value=We.isCubeTexture&&We.isRenderTargetTexture===!1?-1:1),oe.isMeshStandardMaterial&&oe.envMap===null&&Z.environment!==null&&(Mn.envMapIntensity.value=Z.environmentIntensity),Mn.dfgLUT!==void 0&&(Mn.dfgLUT.value=_C()),yn&&(zt.setValue(k,"toneMappingExposure",w.toneMappingExposure),$e.needsLights&&Qs(Mn,ai),Fe&&oe.fog===!0&&at.refreshFogUniforms(Mn,Fe),at.refreshMaterialUniforms(Mn,oe,ee,B,L.state.transmissionRenderTarget[C.id]),eu.upload(k,hl($e),Mn,Y)),oe.isShaderMaterial&&oe.uniformsNeedUpdate===!0&&(eu.upload(k,hl($e),Mn,Y),oe.uniformsNeedUpdate=!1),oe.isSpriteMaterial&&zt.setValue(k,"center",$.center),zt.setValue(k,"modelViewMatrix",$.modelViewMatrix),zt.setValue(k,"normalMatrix",$.normalMatrix),zt.setValue(k,"modelMatrix",$.matrixWorld),oe.isShaderMaterial||oe.isRawShaderMaterial){const En=oe.uniformsGroups;for(let bn=0,Vr=En.length;bn<Vr;bn++){const Si=En[bn];Ae.update(Si,Sn),Ae.bind(Si,Sn)}}return Sn}function Qs(C,Z){C.ambientLightColor.needsUpdate=Z,C.lightProbe.needsUpdate=Z,C.directionalLights.needsUpdate=Z,C.directionalLightShadows.needsUpdate=Z,C.pointLights.needsUpdate=Z,C.pointLightShadows.needsUpdate=Z,C.spotLights.needsUpdate=Z,C.spotLightShadows.needsUpdate=Z,C.rectAreaLights.needsUpdate=Z,C.hemisphereLights.needsUpdate=Z}function Ta(C){return C.isMeshLambertMaterial||C.isMeshToonMaterial||C.isMeshPhongMaterial||C.isMeshStandardMaterial||C.isShadowMaterial||C.isShaderMaterial&&C.lights===!0}this.getActiveCubeFace=function(){return V},this.getActiveMipmapLevel=function(){return se},this.getRenderTarget=function(){return ae},this.setRenderTargetTextures=function(C,Z,fe){const oe=b.get(C);oe.__autoAllocateDepthBuffer=C.resolveDepthBuffer===!1,oe.__autoAllocateDepthBuffer===!1&&(oe.__useRenderToTexture=!1),b.get(C.texture).__webglTexture=Z,b.get(C.depthTexture).__webglTexture=oe.__autoAllocateDepthBuffer?void 0:fe,oe.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(C,Z){const fe=b.get(C);fe.__webglFramebuffer=Z,fe.__useDefaultFramebuffer=Z===void 0};const Aa=k.createFramebuffer();this.setRenderTarget=function(C,Z=0,fe=0){ae=C,V=Z,se=fe;let oe=null,$=!1,Fe=!1;if(C){const Ie=b.get(C);if(Ie.__useDefaultFramebuffer!==void 0){Ke.bindFramebuffer(k.FRAMEBUFFER,Ie.__webglFramebuffer),z.copy(C.viewport),H.copy(C.scissor),K=C.scissorTest,Ke.viewport(z),Ke.scissor(H),Ke.setScissorTest(K),me=-1;return}else if(Ie.__webglFramebuffer===void 0)Y.setupRenderTarget(C);else if(Ie.__hasExternalTextures)Y.rebindTextures(C,b.get(C.texture).__webglTexture,b.get(C.depthTexture).__webglTexture);else if(C.depthBuffer){const tt=C.depthTexture;if(Ie.__boundDepthTexture!==tt){if(tt!==null&&b.has(tt)&&(C.width!==tt.image.width||C.height!==tt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");Y.setupDepthRenderbuffer(C)}}const We=C.texture;(We.isData3DTexture||We.isDataArrayTexture||We.isCompressedArrayTexture)&&(Fe=!0);const je=b.get(C).__webglFramebuffer;C.isWebGLCubeRenderTarget?(Array.isArray(je[Z])?oe=je[Z][fe]:oe=je[Z],$=!0):C.samples>0&&Y.useMultisampledRTT(C)===!1?oe=b.get(C).__webglMultisampledFramebuffer:Array.isArray(je)?oe=je[fe]:oe=je,z.copy(C.viewport),H.copy(C.scissor),K=C.scissorTest}else z.copy(Q).multiplyScalar(ee).floor(),H.copy(ce).multiplyScalar(ee).floor(),K=Re;if(fe!==0&&(oe=Aa),Ke.bindFramebuffer(k.FRAMEBUFFER,oe)&&Ke.drawBuffers(C,oe),Ke.viewport(z),Ke.scissor(H),Ke.setScissorTest(K),$){const Ie=b.get(C.texture);k.framebufferTexture2D(k.FRAMEBUFFER,k.COLOR_ATTACHMENT0,k.TEXTURE_CUBE_MAP_POSITIVE_X+Z,Ie.__webglTexture,fe)}else if(Fe){const Ie=Z;for(let We=0;We<C.textures.length;We++){const je=b.get(C.textures[We]);k.framebufferTextureLayer(k.FRAMEBUFFER,k.COLOR_ATTACHMENT0+We,je.__webglTexture,fe,Ie)}}else if(C!==null&&fe!==0){const Ie=b.get(C.texture);k.framebufferTexture2D(k.FRAMEBUFFER,k.COLOR_ATTACHMENT0,k.TEXTURE_2D,Ie.__webglTexture,fe)}me=-1},this.readRenderTargetPixels=function(C,Z,fe,oe,$,Fe,Xe,Ie=0){if(!(C&&C.isWebGLRenderTarget)){Ct("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let We=b.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&Xe!==void 0&&(We=We[Xe]),We){Ke.bindFramebuffer(k.FRAMEBUFFER,We);try{const je=C.textures[Ie],tt=je.format,Ze=je.type;if(!Nt.textureFormatReadable(tt)){Ct("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Nt.textureTypeReadable(Ze)){Ct("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}Z>=0&&Z<=C.width-oe&&fe>=0&&fe<=C.height-$&&(C.textures.length>1&&k.readBuffer(k.COLOR_ATTACHMENT0+Ie),k.readPixels(Z,fe,oe,$,Ue.convert(tt),Ue.convert(Ze),Fe))}finally{const je=ae!==null?b.get(ae).__webglFramebuffer:null;Ke.bindFramebuffer(k.FRAMEBUFFER,je)}}},this.readRenderTargetPixelsAsync=async function(C,Z,fe,oe,$,Fe,Xe,Ie=0){if(!(C&&C.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let We=b.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&Xe!==void 0&&(We=We[Xe]),We)if(Z>=0&&Z<=C.width-oe&&fe>=0&&fe<=C.height-$){Ke.bindFramebuffer(k.FRAMEBUFFER,We);const je=C.textures[Ie],tt=je.format,Ze=je.type;if(!Nt.textureFormatReadable(tt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Nt.textureTypeReadable(Ze))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const nt=k.createBuffer();k.bindBuffer(k.PIXEL_PACK_BUFFER,nt),k.bufferData(k.PIXEL_PACK_BUFFER,Fe.byteLength,k.STREAM_READ),C.textures.length>1&&k.readBuffer(k.COLOR_ATTACHMENT0+Ie),k.readPixels(Z,fe,oe,$,Ue.convert(tt),Ue.convert(Ze),0);const Dt=ae!==null?b.get(ae).__webglFramebuffer:null;Ke.bindFramebuffer(k.FRAMEBUFFER,Dt);const Kt=k.fenceSync(k.SYNC_GPU_COMMANDS_COMPLETE,0);return k.flush(),await HE(k,Kt,4),k.bindBuffer(k.PIXEL_PACK_BUFFER,nt),k.getBufferSubData(k.PIXEL_PACK_BUFFER,0,Fe),k.deleteBuffer(nt),k.deleteSync(Kt),Fe}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(C,Z=null,fe=0){const oe=Math.pow(2,-fe),$=Math.floor(C.image.width*oe),Fe=Math.floor(C.image.height*oe),Xe=Z!==null?Z.x:0,Ie=Z!==null?Z.y:0;Y.setTexture2D(C,0),k.copyTexSubImage2D(k.TEXTURE_2D,fe,0,0,Xe,Ie,$,Fe),Ke.unbindTexture()};const lr=k.createFramebuffer(),Ra=k.createFramebuffer();this.copyTextureToTexture=function(C,Z,fe=null,oe=null,$=0,Fe=null){Fe===null&&($!==0?(tl("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),Fe=$,$=0):Fe=0);let Xe,Ie,We,je,tt,Ze,nt,Dt,Kt;const qt=C.isCompressedTexture?C.mipmaps[Fe]:C.image;if(fe!==null)Xe=fe.max.x-fe.min.x,Ie=fe.max.y-fe.min.y,We=fe.isBox3?fe.max.z-fe.min.z:1,je=fe.min.x,tt=fe.min.y,Ze=fe.isBox3?fe.min.z:0;else{const hn=Math.pow(2,-$);Xe=Math.floor(qt.width*hn),Ie=Math.floor(qt.height*hn),C.isDataArrayTexture?We=qt.depth:C.isData3DTexture?We=Math.floor(qt.depth*hn):We=1,je=0,tt=0,Ze=0}oe!==null?(nt=oe.x,Dt=oe.y,Kt=oe.z):(nt=0,Dt=0,Kt=0);const Ot=Ue.convert(Z.format),$e=Ue.convert(Z.type);let Ut;Z.isData3DTexture?(Y.setTexture3D(Z,0),Ut=k.TEXTURE_3D):Z.isDataArrayTexture||Z.isCompressedArrayTexture?(Y.setTexture2DArray(Z,0),Ut=k.TEXTURE_2D_ARRAY):(Y.setTexture2D(Z,0),Ut=k.TEXTURE_2D),k.pixelStorei(k.UNPACK_FLIP_Y_WEBGL,Z.flipY),k.pixelStorei(k.UNPACK_PREMULTIPLY_ALPHA_WEBGL,Z.premultiplyAlpha),k.pixelStorei(k.UNPACK_ALIGNMENT,Z.unpackAlignment);const ot=k.getParameter(k.UNPACK_ROW_LENGTH),Sn=k.getParameter(k.UNPACK_IMAGE_HEIGHT),Yi=k.getParameter(k.UNPACK_SKIP_PIXELS),yn=k.getParameter(k.UNPACK_SKIP_ROWS),ai=k.getParameter(k.UNPACK_SKIP_IMAGES);k.pixelStorei(k.UNPACK_ROW_LENGTH,qt.width),k.pixelStorei(k.UNPACK_IMAGE_HEIGHT,qt.height),k.pixelStorei(k.UNPACK_SKIP_PIXELS,je),k.pixelStorei(k.UNPACK_SKIP_ROWS,tt),k.pixelStorei(k.UNPACK_SKIP_IMAGES,Ze);const zt=C.isDataArrayTexture||C.isData3DTexture,Mn=Z.isDataArrayTexture||Z.isData3DTexture;if(C.isDepthTexture){const hn=b.get(C),En=b.get(Z),bn=b.get(hn.__renderTarget),Vr=b.get(En.__renderTarget);Ke.bindFramebuffer(k.READ_FRAMEBUFFER,bn.__webglFramebuffer),Ke.bindFramebuffer(k.DRAW_FRAMEBUFFER,Vr.__webglFramebuffer);for(let Si=0;Si<We;Si++)zt&&(k.framebufferTextureLayer(k.READ_FRAMEBUFFER,k.COLOR_ATTACHMENT0,b.get(C).__webglTexture,$,Ze+Si),k.framebufferTextureLayer(k.DRAW_FRAMEBUFFER,k.COLOR_ATTACHMENT0,b.get(Z).__webglTexture,Fe,Kt+Si)),k.blitFramebuffer(je,tt,Xe,Ie,nt,Dt,Xe,Ie,k.DEPTH_BUFFER_BIT,k.NEAREST);Ke.bindFramebuffer(k.READ_FRAMEBUFFER,null),Ke.bindFramebuffer(k.DRAW_FRAMEBUFFER,null)}else if($!==0||C.isRenderTargetTexture||b.has(C)){const hn=b.get(C),En=b.get(Z);Ke.bindFramebuffer(k.READ_FRAMEBUFFER,lr),Ke.bindFramebuffer(k.DRAW_FRAMEBUFFER,Ra);for(let bn=0;bn<We;bn++)zt?k.framebufferTextureLayer(k.READ_FRAMEBUFFER,k.COLOR_ATTACHMENT0,hn.__webglTexture,$,Ze+bn):k.framebufferTexture2D(k.READ_FRAMEBUFFER,k.COLOR_ATTACHMENT0,k.TEXTURE_2D,hn.__webglTexture,$),Mn?k.framebufferTextureLayer(k.DRAW_FRAMEBUFFER,k.COLOR_ATTACHMENT0,En.__webglTexture,Fe,Kt+bn):k.framebufferTexture2D(k.DRAW_FRAMEBUFFER,k.COLOR_ATTACHMENT0,k.TEXTURE_2D,En.__webglTexture,Fe),$!==0?k.blitFramebuffer(je,tt,Xe,Ie,nt,Dt,Xe,Ie,k.COLOR_BUFFER_BIT,k.NEAREST):Mn?k.copyTexSubImage3D(Ut,Fe,nt,Dt,Kt+bn,je,tt,Xe,Ie):k.copyTexSubImage2D(Ut,Fe,nt,Dt,je,tt,Xe,Ie);Ke.bindFramebuffer(k.READ_FRAMEBUFFER,null),Ke.bindFramebuffer(k.DRAW_FRAMEBUFFER,null)}else Mn?C.isDataTexture||C.isData3DTexture?k.texSubImage3D(Ut,Fe,nt,Dt,Kt,Xe,Ie,We,Ot,$e,qt.data):Z.isCompressedArrayTexture?k.compressedTexSubImage3D(Ut,Fe,nt,Dt,Kt,Xe,Ie,We,Ot,qt.data):k.texSubImage3D(Ut,Fe,nt,Dt,Kt,Xe,Ie,We,Ot,$e,qt):C.isDataTexture?k.texSubImage2D(k.TEXTURE_2D,Fe,nt,Dt,Xe,Ie,Ot,$e,qt.data):C.isCompressedTexture?k.compressedTexSubImage2D(k.TEXTURE_2D,Fe,nt,Dt,qt.width,qt.height,Ot,qt.data):k.texSubImage2D(k.TEXTURE_2D,Fe,nt,Dt,Xe,Ie,Ot,$e,qt);k.pixelStorei(k.UNPACK_ROW_LENGTH,ot),k.pixelStorei(k.UNPACK_IMAGE_HEIGHT,Sn),k.pixelStorei(k.UNPACK_SKIP_PIXELS,Yi),k.pixelStorei(k.UNPACK_SKIP_ROWS,yn),k.pixelStorei(k.UNPACK_SKIP_IMAGES,ai),Fe===0&&Z.generateMipmaps&&k.generateMipmap(Ut),Ke.unbindTexture()},this.initRenderTarget=function(C){b.get(C).__webglFramebuffer===void 0&&Y.setupRenderTarget(C)},this.initTexture=function(C){C.isCubeTexture?Y.setTextureCube(C,0):C.isData3DTexture?Y.setTexture3D(C,0):C.isDataArrayTexture||C.isCompressedArrayTexture?Y.setTexture2DArray(C,0):Y.setTexture2D(C,0),Ke.unbindTexture()},this.resetState=function(){V=0,se=0,ae=null,Ke.reset(),Ge.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Gi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const i=this.getContext();i.drawingBufferColorSpace=Tt._getDrawingBufferColorSpace(e),i.unpackColorSpace=Tt._getUnpackColorSpace()}}function ul({to:s,onClick:e}){const i=X.jsxs(X.Fragment,{children:[X.jsx("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:X.jsx("path",{d:"M19 12H5M12 19l-7-7 7-7"})}),"Back"]});return s?X.jsx(ou,{to:s,className:"back-btn",children:i}):X.jsx("button",{className:"back-btn",onClick:e,children:i})}function fl({fractal:s,isOpen:e,onClose:i}){return X.jsxs("div",{className:`info-panel ${e?"open":""}`,children:[X.jsx("button",{className:"info-close",onClick:i,children:"×"}),X.jsx("div",{className:"info-title",children:s.name}),X.jsx("div",{className:"info-subtitle",children:s.subtitle}),X.jsxs("div",{className:"info-section",children:[X.jsx("div",{className:"info-section-title",children:"What is it?"}),X.jsx("p",{children:s.description})]}),X.jsxs("div",{className:"info-section",children:[X.jsx("div",{className:"info-section-title",children:"How it works"}),X.jsx("p",{children:s.howItWorks})]}),s.formula&&X.jsxs("div",{className:"info-section",children:[X.jsx("div",{className:"info-section-title",children:"The Formula"}),X.jsx("code",{children:s.formula})]})]})}const xC=[100,300,700,2e3,5e3],SC=[500,2e3,6e3,15e3,4e4],yC=[{name:"Classic Twist",transforms:[{m:[0,0,0,0,.16,0,0,0,0],t:[0,0,0],p:.01},{m:[.85,.04,.02,-.04,.85,.02,-.02,-.02,.85],t:[0,1.6,0],p:.85},{m:[.2,-.26,.1,.23,.22,.05,-.1,-.05,.2],t:[0,1.6,0],p:.07},{m:[-.15,.28,.1,.26,.24,.05,.1,.05,.2],t:[0,.44,0],p:.07}]},{name:"Spiral Fern",transforms:[{m:[0,0,0,0,.16,0,0,0,0],t:[0,0,0],p:.01},{m:[.82,.04,.12,-.04,.85,.04,-.12,-.04,.82],t:[0,1.6,0],p:.85},{m:[.18,-.24,.15,.21,.2,.08,-.15,-.08,.18],t:[0,1.6,.5],p:.07},{m:[-.13,.25,.15,.24,.22,.08,.15,.08,.13],t:[0,.44,-.5],p:.07}]},{name:"Canopy",transforms:[{m:[0,0,0,0,.18,0,0,0,0],t:[0,0,0],p:.01},{m:[.8,.06,.04,-.06,.82,.04,-.04,-.04,.8],t:[0,1.5,0],p:.8},{m:[.22,-.28,.2,.25,.24,.1,-.2,-.1,.22],t:[.5,1.4,.5],p:.1},{m:[-.18,.3,.2,.28,.26,.1,.2,.1,.18],t:[-.5,.36,-.5],p:.09}]}];function MC({variantIdx:s,palette:e,spinSpeed:i,spinning:r}){const l=te.useRef(null),c=te.useMemo(()=>({maxPoints:8e5,speed:3,ramp:1.06,variantIdx:s,twist:.02,stemBias:.01,spread:1,mutation:0,ptSize:.022,opacity:.88,palette:e,colorShift:0,camHeight:5,fov:60}),[s,e]);return te.useEffect(()=>{if(!l.current)return;const f=new vC({antialias:!0});f.setPixelRatio(Math.min(window.devicePixelRatio,2)),f.setSize(window.innerWidth,window.innerHeight),f.setClearColor(198661,1),l.current.appendChild(f.domElement);const h=new fb;h.fog=new Sp(198661,.042);const m=new mi(c.fov,window.innerWidth/window.innerHeight,.01,200);let p=!1;const v={x:0,y:0};let _=0;const S={theta:0,phi:Math.PI/2.5,r:18},M=A=>{p=!0,v.x=A.clientX,v.y=A.clientY},E=()=>p=!1,T=A=>{p&&(S.theta-=(A.clientX-v.x)*.008,S.phi=Math.max(.1,Math.min(Math.PI-.1,S.phi+(A.clientY-v.y)*.006)),v.x=A.clientX,v.y=A.clientY)},g=A=>{S.r=Math.max(3,Math.min(50,S.r+A.deltaY*.02))};f.domElement.addEventListener("mousedown",M),window.addEventListener("mouseup",E),window.addEventListener("mousemove",T),f.domElement.addEventListener("wheel",g);const x=()=>{const A=yC[c.variantIdx],B=c.stemBias,ee=1-B,_e=1-A.transforms[0].p;return A.transforms.map((Te,Q)=>{let ce=Q===0?B:Te.p/_e*ee,Re=[...Te.m],Ne=[...Te.t];if(Q>0){const re=c.twist/.02;Re[2]*=re,Re[5]*=re,Re[6]*=re,Re[7]*=re}if((Q===2||Q===3)&&(Ne[0]*=c.spread,Ne[2]*=c.spread),c.mutation>0)for(let re=0;re<9;re++)Re[re]+=(Math.random()*2-1)*c.mutation*.5;return{m:Re,t:Ne,p:ce}})},U=(A,B)=>{const ee=Math.max(0,Math.min(1,A/10)),_e=Math.max(0,Math.min(1,(B+2)/4)),Te=c.colorShift;switch(c.palette){case"green":return[.04+ee*.15+_e*.05+Te*.1,.18+ee*.65+_e*.05,.02+ee*.08+Te*.05];case"teal":return[.02+ee*.05,.2+ee*.55+Te*.1,.15+ee*.55+_e*.1];case"fire":return[.3+ee*.65,.05+ee*.35+Te*.1,0+ee*.05+_e*.08];case"aurora":return[.05+ee*.2+Math.sin(ee*6.28+Te)*.15,.25+ee*.45+Math.cos(ee*4+Te)*.15,.2+ee*.5+Math.sin(ee*5+Te)*.15];case"mono":{const Q=.05+ee*.75+_e*.1+Te*.1;return[Q,Q,Q]}default:return[.04+ee*.15,.18+ee*.65,.02+ee*.08]}},N=15e5,O=new Float32Array(N*3),L=new Float32Array(N*3);let I=null,F=null,j=0,w=700,D=!1,V=null;const se=A=>{let B=0;return A.map(ee=>(B+=ee.p,B))},ae=A=>{if(!A)return;const B=Math.random(),ee=A.cp.findIndex(Ne=>B<Ne),{m:_e,t:Te}=A.tfs[ee],{x:Q,y:ce,z:Re}=A;A.x=_e[0]*Q+_e[1]*ce+_e[2]*Re+Te[0],A.y=_e[3]*Q+_e[4]*ce+_e[5]*Re+Te[1],A.z=_e[6]*Q+_e[7]*ce+_e[8]*Re+Te[2]},me=()=>{F&&(h.remove(F),F.material instanceof Ws&&F.material.dispose(),F.geometry.dispose(),F=null,I=null),j=0,w=xC[c.speed-1],D=!0;const A=x();V={x:0,y:0,z:0,tfs:A,cp:se(A)};for(let _e=0;_e<50;_e++)ae(V);I=new Ui;const B=new _i(O,3),ee=new _i(L,3);B.setUsage(y_),ee.setUsage(y_),I.setAttribute("position",B),I.setAttribute("color",ee),I.setDrawRange(0,0),F=new gb(I,new rx({size:c.ptSize,vertexColors:!0,transparent:!0,opacity:c.opacity,sizeAttenuation:!0,depthWrite:!1,blending:rh})),F.position.set(0,-5,0),h.add(F)},de=()=>{if(!D||!I||!V||j>=c.maxPoints){D=!1;return}const A=Math.min(Math.round(w),c.maxPoints-j),B=I.attributes.position,ee=I.attributes.color;for(let _e=0;_e<A;_e++){ae(V);const Te=j+_e;O[Te*3]=V.x,O[Te*3+1]=V.y,O[Te*3+2]=V.z;const[Q,ce,Re]=U(V.y,V.z);L[Te*3]=Q,L[Te*3+1]=ce,L[Te*3+2]=Re}B.addUpdateRange(j*3,A*3),B.needsUpdate=!0,ee.addUpdateRange(j*3,A*3),ee.needsUpdate=!0,j+=A,I.setDrawRange(0,j),w=Math.min(w*c.ramp,SC[c.speed-1])},z=new Wi(new cl(40,40),new xp({color:666118,transparent:!0,opacity:.18,side:Bi,depthWrite:!1}));z.rotation.x=-Math.PI/2,z.position.y=-5,h.add(z);const H=new Mb,K={theta:0,phi:Math.PI/2.5,r:18},ye=()=>{requestAnimationFrame(ye);const A=H.getDelta();de(),r&&!p?(_+=A*i,S.theta=_):p&&(_=S.theta),K.theta+=(S.theta-K.theta)*.06,K.phi+=(S.phi-K.phi)*.06,K.r+=(S.r-K.r)*.06;const B=Math.sin(K.phi);m.position.set(K.r*B*Math.sin(K.theta),K.r*Math.cos(K.phi)+c.camHeight,K.r*B*Math.cos(K.theta)),m.lookAt(0,c.camHeight-1,0),f.render(h,m)},ve=()=>{m.aspect=window.innerWidth/window.innerHeight,m.updateProjectionMatrix(),f.setSize(window.innerWidth,window.innerHeight)};return window.addEventListener("resize",ve),me(),ye(),()=>{window.removeEventListener("resize",ve),f.domElement.removeEventListener("mousedown",M),window.removeEventListener("mouseup",E),window.removeEventListener("mousemove",T),f.domElement.removeEventListener("wheel",g),f.dispose(),l.current?.removeChild(f.domElement)}},[s,e,i,r]),X.jsx("div",{ref:l,className:"fern-canvas"})}function EC({showInfo:s,onToggleInfo:e}){const[i,r]=te.useState(!1),[l,c]=te.useState(!0),[f,h]=te.useState(0),[m,p]=te.useState("green"),[v,_]=te.useState(.18),S=zr.find(M=>M.id==="fern");return X.jsxs("div",{className:"fern-page",children:[X.jsx("div",{className:"vignette"}),X.jsx(ul,{to:"/"}),X.jsx(MC,{variantIdx:f,palette:m,spinSpeed:v,spinning:l}),X.jsx("button",{className:"info-toggle",onClick:e,children:"i"}),X.jsx(fl,{fractal:S,isOpen:s,onClose:e}),X.jsx("div",{id:"panelTab",onClick:()=>r(!i),children:"PARAMETERS"}),X.jsxs("div",{id:"panel",className:i?"open":"",children:[X.jsx("div",{className:"panel-title",children:"Barnsley Fern"}),X.jsx("div",{className:"panel-sub",children:"3D IFS · parameter explorer"}),X.jsx("div",{className:"section-label",children:"Shape"}),X.jsxs("div",{className:"param",children:[X.jsx("div",{className:"param-header",children:X.jsx("span",{className:"param-name",children:"Variant"})}),X.jsxs("select",{value:f,onChange:M=>h(parseInt(M.target.value)),children:[X.jsx("option",{value:"0",children:"Classic Twist"}),X.jsx("option",{value:"1",children:"Spiral Fern"}),X.jsx("option",{value:"2",children:"Canopy"})]})]}),X.jsx("div",{className:"section-label",children:"Appearance"}),X.jsxs("div",{className:"param",children:[X.jsx("div",{className:"param-header",children:X.jsx("span",{className:"param-name",children:"Color Palette"})}),X.jsxs("select",{value:m,onChange:M=>p(M.target.value),children:[X.jsx("option",{value:"green",children:"Forest Green"}),X.jsx("option",{value:"teal",children:"Deep Teal"}),X.jsx("option",{value:"fire",children:"Ember Fire"}),X.jsx("option",{value:"aurora",children:"Aurora"}),X.jsx("option",{value:"mono",children:"Monochrome"})]})]}),X.jsx("div",{className:"section-label",children:"Camera"}),X.jsxs("div",{className:"param",children:[X.jsxs("div",{className:"param-header",children:[X.jsx("span",{className:"param-name",children:"Spin Speed"}),X.jsx("span",{className:"param-value",children:v.toFixed(2)})]}),X.jsx("input",{type:"range",min:"0",max:"0.8",step:"0.01",value:v,onChange:M=>_(parseFloat(M.target.value))})]}),X.jsx("div",{className:"section-label",children:"Actions"}),X.jsx("div",{className:"btn-row",children:X.jsx("button",{className:l?"active":"",onClick:()=>c(M=>!M),children:l?"⟳ Spin":"⏸ Spin"})})]}),X.jsx("div",{id:"progressWrap",children:X.jsx("div",{id:"orbitHint",children:"drag to orbit · scroll to zoom"})})]})}const bC=`
  attribute vec2 position;
  void main() {
    gl_Position = vec4(position, 0.0, 1.0);
  }
`,TC=`
  precision highp float;

  uniform vec2 u_resolution;
  uniform float u_time;
  uniform vec2 u_center;
  uniform float u_zoom;
  uniform int u_maxIterations;
  uniform float u_colorSpeed;
  uniform int u_colorScheme;

  void main() {
    vec2 uv = (gl_FragCoord.xy - u_resolution.xy * 0.5) / min(u_resolution.x, u_resolution.y);
    
    vec2 c = uv * 2.5 / u_zoom + u_center;
    
    vec2 z = vec2(0.0, 0.0);
    int iterations = 0;
    
    for (int i = 0; i < 1000; i++) {
      if (i >= u_maxIterations) break;
      if (dot(z, z) > 4.0) break;
      
      z = vec2(z.x * z.x - z.y * z.y, 2.0 * z.x * z.y) + c;
      iterations++;
    }
    
    if (iterations >= u_maxIterations) {
      gl_FragColor = vec4(0.0, 0.0, 0.0, 1.0);
    } else {
      float log_zn = log(dot(z, z));
      float nu = log(log_zn / log(2.0)) / log(2.0);
      float t = float(iterations) + 1.0 - nu;
      
      float timeFactor = u_time * u_colorSpeed;
      vec3 col;
      
      if (u_colorScheme == 0) {
        col = vec3(
          sin(t * 0.789 + timeFactor),
          cos(t * 0.678 - timeFactor),
          sin(t * 0.543 + timeFactor * 0.7)
        );
      } else if (u_colorScheme == 1) {
        col = vec3(
          sin(t * 0.5 + timeFactor),
          cos(t * 0.5 + timeFactor),
          sin(t * 0.5 - timeFactor)
        );
      } else if (u_colorScheme == 2) {
        col = vec3(
          sin(t * 1.2 + timeFactor) * 0.5 + 0.5,
          sin(t * 1.5 + timeFactor + 2.094) * 0.5 + 0.5,
          sin(t * 0.8 + timeFactor + 4.189) * 0.5 + 0.5
        );
      } else {
        float gray = sin(t * 0.3 + timeFactor) * 0.5 + 0.5;
        col = vec3(gray * 0.3, gray * 0.5, gray);
      }
      
      gl_FragColor = vec4((col + 1.0) * 0.5, 1.0);
    }
  }
`;function AC({showInfo:s,onToggleInfo:e}){const i=te.useRef(null),[r,l]=te.useState(!1),[,c]=te.useState(0),f=zr.find(E=>E.id==="mandelbrot"),h=te.useRef({colorScheme:0,colorSpeed:.3,maxIterations:100}),m=h.current.colorScheme,p=h.current.colorSpeed,v=h.current.maxIterations,_=te.useCallback(E=>{h.current.colorScheme=E,c(T=>T+1)},[]),S=te.useCallback(E=>{h.current.colorSpeed=E,c(T=>T+1)},[]),M=te.useCallback(E=>{h.current.maxIterations=E,c(T=>T+1)},[]);return te.useEffect(()=>{const E=i.current;if(!E)return;const T=E.getContext("webgl");if(!T){alert("WebGL not supported");return}const g=T;function x(re,ke){const Ce=g.createShader(re);return Ce?(g.shaderSource(Ce,ke),g.compileShader(Ce),g.getShaderParameter(Ce,g.COMPILE_STATUS)?Ce:(console.error(g.getShaderInfoLog(Ce)),g.deleteShader(Ce),null)):null}function U(re,ke){const Ce=g.createProgram();return Ce?(g.attachShader(Ce,re),g.attachShader(Ce,ke),g.linkProgram(Ce),g.getProgramParameter(Ce,g.LINK_STATUS)?Ce:(console.error(g.getProgramInfoLog(Ce)),g.deleteProgram(Ce),null)):null}const N=x(g.VERTEX_SHADER,bC),O=x(g.FRAGMENT_SHADER,TC);if(!N||!O)return;const L=U(N,O);if(!L)return;const I=g.createBuffer();g.bindBuffer(g.ARRAY_BUFFER,I),g.bufferData(g.ARRAY_BUFFER,new Float32Array([-1,-1,1,-1,-1,1,-1,1,1,-1,1,1]),g.STATIC_DRAW);const F=g.getAttribLocation(L,"position"),j=g.getUniformLocation(L,"u_resolution"),w=g.getUniformLocation(L,"u_time"),D=g.getUniformLocation(L,"u_center"),V=g.getUniformLocation(L,"u_zoom"),se=g.getUniformLocation(L,"u_maxIterations"),ae=g.getUniformLocation(L,"u_colorSpeed"),me=g.getUniformLocation(L,"u_colorScheme");let de=-.5,z=0,H=1,K=!1,ye=0,ve=0;const A=E,B=g;function ee(){const re=Math.min(window.devicePixelRatio,2);A.width=window.innerWidth*re,A.height=window.innerHeight*re,B.viewport(0,0,A.width,A.height)}ee(),window.addEventListener("resize",ee);const _e=re=>{K=!0,ye=re.clientX,ve=re.clientY},Te=()=>K=!1,Q=re=>{if(!K)return;const ke=re.clientX-ye,Ce=re.clientY-ve,rt=2.5/H/Math.min(A.width,A.height);de-=ke*rt,z+=Ce*rt,ye=re.clientX,ve=re.clientY},ce=re=>{re.preventDefault();const ke=re.deltaY>0?.9:1.1;H=Math.max(.1,Math.min(1e6,H*ke))};A.addEventListener("mousedown",_e),window.addEventListener("mouseup",Te),window.addEventListener("mousemove",Q),A.addEventListener("wheel",ce,{passive:!1});const Re=Date.now();function Ne(){const re=(Date.now()-Re)/1e3;B.useProgram(L),B.enableVertexAttribArray(F),B.bindBuffer(B.ARRAY_BUFFER,I),B.vertexAttribPointer(F,2,B.FLOAT,!1,0,0),B.uniform2f(j,A.width,A.height),B.uniform1f(w,re),B.uniform2f(D,de,z),B.uniform1f(V,H),B.uniform1i(se,h.current.maxIterations),B.uniform1f(ae,h.current.colorSpeed),B.uniform1i(me,h.current.colorScheme),B.drawArrays(B.TRIANGLES,0,6),requestAnimationFrame(Ne)}return Ne(),()=>{window.removeEventListener("resize",ee),A.removeEventListener("mousedown",_e),window.removeEventListener("mouseup",Te),window.removeEventListener("mousemove",Q),A.removeEventListener("wheel",ce)}},[]),X.jsxs("div",{className:"mandelbrot-page",children:[X.jsx("canvas",{ref:i,className:"mandelbrot-canvas"}),X.jsx("div",{className:"vignette"}),X.jsx(ul,{to:"/"}),X.jsx("button",{className:"info-toggle",onClick:e,children:"i"}),X.jsx(fl,{fractal:f,isOpen:s,onClose:e}),X.jsx("div",{id:"panelTab",onClick:()=>l(!r),children:"PARAMETERS"}),X.jsxs("div",{id:"panel",className:r?"open":"",children:[X.jsx("div",{className:"panel-title",children:"Mandelbrot Set"}),X.jsx("div",{className:"panel-sub",children:"Complex Plane · explorer"}),X.jsx("div",{className:"section-label",children:"Color"}),X.jsxs("div",{className:"param",children:[X.jsx("div",{className:"param-header",children:X.jsx("span",{className:"param-name",children:"Scheme"})}),X.jsxs("select",{value:m,onChange:E=>_(parseInt(E.target.value)),children:[X.jsx("option",{value:"0",children:"Spectrum"}),X.jsx("option",{value:"1",children:"Rainbow"}),X.jsx("option",{value:"2",children:"Pastel"}),X.jsx("option",{value:"3",children:"Monochrome"})]})]}),X.jsxs("div",{className:"param",children:[X.jsxs("div",{className:"param-header",children:[X.jsx("span",{className:"param-name",children:"Animation Speed"}),X.jsx("span",{className:"param-value",children:p.toFixed(2)})]}),X.jsx("input",{type:"range",min:"0",max:"2",step:"0.01",value:p,onChange:E=>S(parseFloat(E.target.value))})]}),X.jsx("div",{className:"section-label",children:"Quality"}),X.jsxs("div",{className:"param",children:[X.jsxs("div",{className:"param-header",children:[X.jsx("span",{className:"param-name",children:"Max Iterations"}),X.jsx("span",{className:"param-value",children:v})]}),X.jsx("input",{type:"range",min:"20",max:"500",step:"10",value:v,onChange:E=>M(parseInt(E.target.value))})]})]}),X.jsx("div",{id:"hint",children:"drag to pan · scroll to zoom"})]})}const RC=`
  attribute vec2 position;
  void main() {
    gl_Position = vec4(position, 0.0, 1.0);
  }
`,CC=`
  precision highp float;

  uniform vec2 u_resolution;
  uniform float u_time;
  uniform vec2 u_center;
  uniform float u_zoom;
  uniform int u_maxIterations;
  uniform float u_colorSpeed;
  uniform int u_colorScheme;

  void main() {
    vec2 uv = (gl_FragCoord.xy - u_resolution.xy * 0.5) / min(u_resolution.x, u_resolution.y);
    
    vec2 c = uv * 2.5 / u_zoom + u_center;
    
    vec2 z = vec2(0.0, 0.0);
    int iterations = 0;
    
    for (int i = 0; i < 1000; i++) {
      if (i >= u_maxIterations) break;
      if (dot(z, z) > 4.0) break;
      
      z = vec2(z.x * z.x - z.y * z.y, 2.0 * abs(z.x * z.y)) + c;
      iterations++;
    }
    
    if (iterations >= u_maxIterations) {
      gl_FragColor = vec4(0.0, 0.0, 0.0, 1.0);
    } else {
      float log_zn = log(dot(z, z));
      float nu = log(log_zn / log(2.0)) / log(2.0);
      float t = float(iterations) + 1.0 - nu;
      
      float timeFactor = u_time * u_colorSpeed;
      vec3 col;
      
      if (u_colorScheme == 0) {
        col = vec3(
          sin(t * 0.789 + timeFactor),
          cos(t * 0.678 - timeFactor),
          sin(t * 0.543 + timeFactor * 0.7)
        );
      } else if (u_colorScheme == 1) {
        col = vec3(
          sin(t * 0.5 + timeFactor),
          cos(t * 0.5 + timeFactor),
          sin(t * 0.5 - timeFactor)
        );
      } else if (u_colorScheme == 2) {
        col = vec3(
          sin(t * 1.2 + timeFactor) * 0.5 + 0.5,
          sin(t * 1.5 + timeFactor + 2.094) * 0.5 + 0.5,
          sin(t * 0.8 + timeFactor + 4.189) * 0.5 + 0.5
        );
      } else {
        float gray = sin(t * 0.3 + timeFactor) * 0.5 + 0.5;
        col = vec3(gray * 0.3, gray * 0.5, gray);
      }
      
      gl_FragColor = vec4((col + 1.0) * 0.5, 1.0);
    }
  }
`;function wC({showInfo:s,onToggleInfo:e}){const i=te.useRef(null),[r,l]=te.useState(!1),[,c]=te.useState(0),f=zr.find(E=>E.id==="burningship"),h=te.useRef({colorScheme:0,colorSpeed:.3,maxIterations:100}),m=h.current.colorScheme,p=h.current.colorSpeed,v=h.current.maxIterations,_=te.useCallback(E=>{h.current.colorScheme=E,c(T=>T+1)},[]),S=te.useCallback(E=>{h.current.colorSpeed=E,c(T=>T+1)},[]),M=te.useCallback(E=>{h.current.maxIterations=E,c(T=>T+1)},[]);return te.useEffect(()=>{const E=i.current;if(!E)return;const T=E.getContext("webgl");if(!T){alert("WebGL not supported");return}const g=T;function x(re,ke){const Ce=g.createShader(re);return Ce?(g.shaderSource(Ce,ke),g.compileShader(Ce),g.getShaderParameter(Ce,g.COMPILE_STATUS)?Ce:(console.error(g.getShaderInfoLog(Ce)),g.deleteShader(Ce),null)):null}function U(re,ke){const Ce=g.createProgram();return Ce?(g.attachShader(Ce,re),g.attachShader(Ce,ke),g.linkProgram(Ce),g.getProgramParameter(Ce,g.LINK_STATUS)?Ce:(console.error(g.getProgramInfoLog(Ce)),g.deleteProgram(Ce),null)):null}const N=x(g.VERTEX_SHADER,RC),O=x(g.FRAGMENT_SHADER,CC);if(!N||!O)return;const L=U(N,O);if(!L)return;const I=g.createBuffer();g.bindBuffer(g.ARRAY_BUFFER,I),g.bufferData(g.ARRAY_BUFFER,new Float32Array([-1,-1,1,-1,-1,1,-1,1,1,-1,1,1]),g.STATIC_DRAW);const F=g.getAttribLocation(L,"position"),j=g.getUniformLocation(L,"u_resolution"),w=g.getUniformLocation(L,"u_time"),D=g.getUniformLocation(L,"u_center"),V=g.getUniformLocation(L,"u_zoom"),se=g.getUniformLocation(L,"u_maxIterations"),ae=g.getUniformLocation(L,"u_colorSpeed"),me=g.getUniformLocation(L,"u_colorScheme");let de=-1.76,z=-.03,H=1,K=!1,ye=0,ve=0;const A=E,B=g;function ee(){const re=Math.min(window.devicePixelRatio,2);A.width=window.innerWidth*re,A.height=window.innerHeight*re,B.viewport(0,0,A.width,A.height)}ee(),window.addEventListener("resize",ee);const _e=re=>{K=!0,ye=re.clientX,ve=re.clientY},Te=()=>K=!1,Q=re=>{if(!K)return;const ke=re.clientX-ye,Ce=re.clientY-ve,rt=2.5/H/Math.min(A.width,A.height);de-=ke*rt,z+=Ce*rt,ye=re.clientX,ve=re.clientY},ce=re=>{re.preventDefault();const ke=re.deltaY>0?.9:1.1;H=Math.max(.1,Math.min(1e6,H*ke))};A.addEventListener("mousedown",_e),window.addEventListener("mouseup",Te),window.addEventListener("mousemove",Q),A.addEventListener("wheel",ce,{passive:!1});const Re=Date.now();function Ne(){const re=(Date.now()-Re)/1e3;B.useProgram(L),B.enableVertexAttribArray(F),B.bindBuffer(B.ARRAY_BUFFER,I),B.vertexAttribPointer(F,2,B.FLOAT,!1,0,0),B.uniform2f(j,A.width,A.height),B.uniform1f(w,re),B.uniform2f(D,de,z),B.uniform1f(V,H),B.uniform1i(se,h.current.maxIterations),B.uniform1f(ae,h.current.colorSpeed),B.uniform1i(me,h.current.colorScheme),B.drawArrays(B.TRIANGLES,0,6),requestAnimationFrame(Ne)}return Ne(),()=>{window.removeEventListener("resize",ee),A.removeEventListener("mousedown",_e),window.removeEventListener("mouseup",Te),window.removeEventListener("mousemove",Q),A.removeEventListener("wheel",ce)}},[]),X.jsxs("div",{className:"burningship-page",children:[X.jsx("canvas",{ref:i,className:"burningship-canvas"}),X.jsx("div",{className:"vignette"}),X.jsx(ul,{to:"/"}),X.jsx("button",{className:"info-toggle",onClick:e,children:"i"}),X.jsx(fl,{fractal:f,isOpen:s,onClose:e}),X.jsx("div",{id:"panelTab",onClick:()=>l(!r),children:"PARAMETERS"}),X.jsxs("div",{id:"panel",className:r?"open":"",children:[X.jsx("div",{className:"panel-title",children:"Burning Ship"}),X.jsx("div",{className:"panel-sub",children:"Complex Plane · explorer"}),X.jsx("div",{className:"section-label",children:"Color"}),X.jsxs("div",{className:"param",children:[X.jsx("div",{className:"param-header",children:X.jsx("span",{className:"param-name",children:"Scheme"})}),X.jsxs("select",{value:m,onChange:E=>_(parseInt(E.target.value)),children:[X.jsx("option",{value:"0",children:"Spectrum"}),X.jsx("option",{value:"1",children:"Rainbow"}),X.jsx("option",{value:"2",children:"Pastel"}),X.jsx("option",{value:"3",children:"Monochrome"})]})]}),X.jsxs("div",{className:"param",children:[X.jsxs("div",{className:"param-header",children:[X.jsx("span",{className:"param-name",children:"Animation Speed"}),X.jsx("span",{className:"param-value",children:p.toFixed(2)})]}),X.jsx("input",{type:"range",min:"0",max:"2",step:"0.01",value:p,onChange:E=>S(parseFloat(E.target.value))})]}),X.jsx("div",{className:"section-label",children:"Quality"}),X.jsxs("div",{className:"param",children:[X.jsxs("div",{className:"param-header",children:[X.jsx("span",{className:"param-name",children:"Max Iterations"}),X.jsx("span",{className:"param-value",children:v})]}),X.jsx("input",{type:"range",min:"20",max:"500",step:"10",value:v,onChange:E=>M(parseInt(E.target.value))})]})]}),X.jsx("div",{id:"hint",children:"drag to pan · scroll to zoom"})]})}const DC=`
  attribute vec2 position;
  void main() {
    gl_Position = vec4(position, 0.0, 1.0);
  }
`,UC=`
  precision highp float;

  uniform vec2 u_resolution;
  uniform float u_time;
  uniform vec2 u_center;
  uniform float u_zoom;
  uniform int u_maxIterations;
  uniform float u_colorSpeed;
  uniform int u_colorScheme;

  vec2 cmul(vec2 a, vec2 b) {
    return vec2(a.x * b.x - a.y * b.y, a.x * b.y + a.y * b.x);
  }

  vec2 cdiv(vec2 a, vec2 b) {
    float denom = b.x * b.x + b.y * b.y;
    return vec2((a.x * b.x + a.y * b.y) / denom, (a.y * b.x - a.x * b.y) / denom);
  }

  vec2 f(vec2 z) {
    return cmul(z, cmul(z, z)) - vec2(1.0, 0.0);
  }

  vec2 df(vec2 z) {
    return 3.0 * cmul(z, z);
  }

  void main() {
    vec2 uv = (gl_FragCoord.xy - u_resolution.xy * 0.5) / min(u_resolution.x, u_resolution.y);
    
    vec2 c = uv * 4.0 / u_zoom + u_center;
    vec2 z = c;
    
    int iterations = 0;
    
    for (int i = 0; i < 500; i++) {
      if (i >= u_maxIterations) break;
      vec2 fz = f(z);
      if (dot(fz, fz) < 0.0001) break;
      vec2 dfz = df(z);
      z = z - cdiv(fz, dfz);
      iterations++;
    }
    
    float angle = atan(z.y, z.x);
    
    float t = float(iterations) / float(u_maxIterations);
    float timeFactor = u_time * u_colorSpeed;
    
    vec3 col;
    if (t < 0.05) {
      col = vec3(0.0, 0.0, 0.0);
    } else {
      if (u_colorScheme == 0) {
        col = vec3(
          0.5 + 0.5 * cos(angle * 1.0 + timeFactor + 0.0),
          0.5 + 0.5 * cos(angle * 1.0 + timeFactor + 2.094),
          0.5 + 0.5 * cos(angle * 1.0 + timeFactor + 4.189)
        );
      } else if (u_colorScheme == 1) {
        col = vec3(
          0.5 + 0.5 * cos(angle * 2.0 + timeFactor),
          0.5 + 0.5 * cos(angle * 3.0 + timeFactor + 2.094),
          0.5 + 0.5 * cos(angle * 1.0 + timeFactor + 4.189)
        );
      } else if (u_colorScheme == 2) {
        float hue = angle / 6.28318 + timeFactor * 0.1;
        col = vec3(
          sin(hue * 6.28318) * 0.5 + 0.5,
          sin(hue * 6.28318 + 2.094) * 0.5 + 0.5,
          sin(hue * 6.28318 + 4.189) * 0.5 + 0.5
        );
      } else {
        col = vec3(
          0.5 + 0.5 * cos(angle + timeFactor),
          0.5 + 0.5 * cos(angle + timeFactor + 2.094),
          0.5 + 0.5 * cos(angle + timeFactor + 4.189)
        ) * 0.3 + vec3(0.1, 0.05, 0.15);
      }
    }
    
    gl_FragColor = vec4(col, 1.0);
  }
`;function LC({showInfo:s,onToggleInfo:e}){const i=te.useRef(null),[r,l]=te.useState(!1),[,c]=te.useState(0),f=zr.find(E=>E.id==="newton"),h=te.useRef({colorScheme:0,colorSpeed:.3,maxIterations:100}),m=h.current.colorScheme,p=h.current.colorSpeed,v=h.current.maxIterations,_=te.useCallback(E=>{h.current.colorScheme=E,c(T=>T+1)},[]),S=te.useCallback(E=>{h.current.colorSpeed=E,c(T=>T+1)},[]),M=te.useCallback(E=>{h.current.maxIterations=E,c(T=>T+1)},[]);return te.useEffect(()=>{const E=i.current;if(!E)return;const T=E.getContext("webgl");if(!T){alert("WebGL not supported");return}const g=T;function x(re,ke){const Ce=g.createShader(re);return Ce?(g.shaderSource(Ce,ke),g.compileShader(Ce),g.getShaderParameter(Ce,g.COMPILE_STATUS)?Ce:(console.error(g.getShaderInfoLog(Ce)),g.deleteShader(Ce),null)):null}function U(re,ke){const Ce=g.createProgram();return Ce?(g.attachShader(Ce,re),g.attachShader(Ce,ke),g.linkProgram(Ce),g.getProgramParameter(Ce,g.LINK_STATUS)?Ce:(console.error(g.getProgramInfoLog(Ce)),g.deleteProgram(Ce),null)):null}const N=x(g.VERTEX_SHADER,DC),O=x(g.FRAGMENT_SHADER,UC);if(!N||!O)return;const L=U(N,O);if(!L)return;const I=g.createBuffer();g.bindBuffer(g.ARRAY_BUFFER,I),g.bufferData(g.ARRAY_BUFFER,new Float32Array([-1,-1,1,-1,-1,1,-1,1,1,-1,1,1]),g.STATIC_DRAW);const F=g.getAttribLocation(L,"position"),j=g.getUniformLocation(L,"u_resolution"),w=g.getUniformLocation(L,"u_time"),D=g.getUniformLocation(L,"u_center"),V=g.getUniformLocation(L,"u_zoom"),se=g.getUniformLocation(L,"u_maxIterations"),ae=g.getUniformLocation(L,"u_colorSpeed"),me=g.getUniformLocation(L,"u_colorScheme");let de=0,z=0,H=1,K=!1,ye=0,ve=0;const A=E,B=g;function ee(){const re=Math.min(window.devicePixelRatio,2);A.width=window.innerWidth*re,A.height=window.innerHeight*re,B.viewport(0,0,A.width,A.height)}ee(),window.addEventListener("resize",ee);const _e=re=>{K=!0,ye=re.clientX,ve=re.clientY},Te=()=>K=!1,Q=re=>{if(!K)return;const ke=re.clientX-ye,Ce=re.clientY-ve,rt=4/H/Math.min(A.width,A.height);de-=ke*rt,z+=Ce*rt,ye=re.clientX,ve=re.clientY},ce=re=>{re.preventDefault();const ke=re.deltaY>0?.9:1.1;H=Math.max(.1,Math.min(1e6,H*ke))};A.addEventListener("mousedown",_e),window.addEventListener("mouseup",Te),window.addEventListener("mousemove",Q),A.addEventListener("wheel",ce,{passive:!1});const Re=Date.now();function Ne(){const re=(Date.now()-Re)/1e3;B.useProgram(L),B.enableVertexAttribArray(F),B.bindBuffer(B.ARRAY_BUFFER,I),B.vertexAttribPointer(F,2,B.FLOAT,!1,0,0),B.uniform2f(j,A.width,A.height),B.uniform1f(w,re),B.uniform2f(D,de,z),B.uniform1f(V,H),B.uniform1i(se,h.current.maxIterations),B.uniform1f(ae,h.current.colorSpeed),B.uniform1i(me,h.current.colorScheme),B.drawArrays(B.TRIANGLES,0,6),requestAnimationFrame(Ne)}return Ne(),()=>{window.removeEventListener("resize",ee),A.removeEventListener("mousedown",_e),window.removeEventListener("mouseup",Te),window.removeEventListener("mousemove",Q),A.removeEventListener("wheel",ce)}},[]),X.jsxs("div",{className:"newton-page",children:[X.jsx("canvas",{ref:i,className:"newton-canvas"}),X.jsx("div",{className:"vignette"}),X.jsx(ul,{to:"/"}),X.jsx("button",{className:"info-toggle",onClick:e,children:"i"}),X.jsx(fl,{fractal:f,isOpen:s,onClose:e}),X.jsx("div",{id:"panelTab",onClick:()=>l(!r),children:"PARAMETERS"}),X.jsxs("div",{id:"panel",className:r?"open":"",children:[X.jsx("div",{className:"panel-title",children:"Newton Fractal"}),X.jsx("div",{className:"panel-sub",children:"Root-Finding · explorer"}),X.jsx("div",{className:"section-label",children:"Color"}),X.jsxs("div",{className:"param",children:[X.jsx("div",{className:"param-header",children:X.jsx("span",{className:"param-name",children:"Scheme"})}),X.jsxs("select",{value:m,onChange:E=>_(parseInt(E.target.value)),children:[X.jsx("option",{value:"0",children:"Triadic"}),X.jsx("option",{value:"1",children:"Multi-Hue"}),X.jsx("option",{value:"2",children:"Rainbow"}),X.jsx("option",{value:"3",children:"Dark"})]})]}),X.jsxs("div",{className:"param",children:[X.jsxs("div",{className:"param-header",children:[X.jsx("span",{className:"param-name",children:"Animation Speed"}),X.jsx("span",{className:"param-value",children:p.toFixed(2)})]}),X.jsx("input",{type:"range",min:"0",max:"2",step:"0.01",value:p,onChange:E=>S(parseFloat(E.target.value))})]}),X.jsx("div",{className:"section-label",children:"Quality"}),X.jsxs("div",{className:"param",children:[X.jsxs("div",{className:"param-header",children:[X.jsx("span",{className:"param-name",children:"Max Iterations"}),X.jsx("span",{className:"param-value",children:v})]}),X.jsx("input",{type:"range",min:"20",max:"300",step:"10",value:v,onChange:E=>M(parseInt(E.target.value))})]})]}),X.jsx("div",{id:"hint",children:"drag to pan · scroll to zoom"})]})}const NC=`
  attribute vec2 position;
  void main() {
    gl_Position = vec4(position, 0.0, 1.0);
  }
`,OC=`
  precision highp float;

  uniform vec2 u_resolution;
  uniform float u_time;
  uniform vec2 u_center;
  uniform float u_zoom;
  uniform int u_iterations;
  uniform int u_colorScheme;
  uniform int u_pattern;

  float lyapunov(vec2 c) {
    float x = 0.5;
    float sum = 0.0;
    float n = 0.0;
    
    for (int i = 0; i < 100; i++) {
      float r = c.x;
      if (u_pattern == 0) {
        if (i % 5 >= 2) r = c.y;
      } else if (u_pattern == 1) {
        if (i % 6 >= 3) r = c.y;
      } else if (u_pattern == 2) {
        if (i % 7 >= 3) r = c.y;
      } else {
        int idx = i - (i / 10) * 10;
        if (idx == 2 || idx == 3 || idx == 5 || idx == 7 || idx == 8) r = c.y;
      }
      x = r * x * (1.0 - x);
    }
    
    for (int i = 0; i < 100; i++) {
      float r = c.x;
      if (u_pattern == 0) {
        if (i % 5 >= 2) r = c.y;
      } else if (u_pattern == 1) {
        if (i % 6 >= 3) r = c.y;
      } else if (u_pattern == 2) {
        if (i % 7 >= 3) r = c.y;
      } else {
        int idx = i - (i / 10) * 10;
        if (idx == 2 || idx == 3 || idx == 5 || idx == 7 || idx == 8) r = c.y;
      }
      x = r * x * (1.0 - x);
      float deriv = r * abs(1.0 - 2.0 * x);
      if (deriv > 0.001 && deriv < 10.0) {
        sum = sum + log(deriv);
        n = n + 1.0;
      }
    }
    
    if (n < 50.0) return 0.0;
    return sum / n;
  }

  void main() {
    vec2 uv = gl_FragCoord.xy / u_resolution;
    vec2 c = (uv - 0.5) * 4.0 / u_zoom + u_center;
    
    float lambda = lyapunov(c);
    
    vec3 col;
    if (u_colorScheme == 0) {
      if (lambda < 0.0) {
        float t = clamp(-lambda / 2.5, 0.0, 1.0);
        col = mix(vec3(0.02, 0.05, 0.15), vec3(0.0, 0.35, 0.65), t);
      } else {
        float t = clamp(lambda / 1.5, 0.0, 1.0);
        col = mix(vec3(0.85, 0.65, 0.1), vec3(1.0, 0.25, 0.0), t);
      }
    } else if (u_colorScheme == 1) {
      if (lambda < 0.0) {
        float t = clamp(-lambda / 2.5, 0.0, 1.0);
        col = mix(vec3(0.1, 0.02, 0.15), vec3(0.5, 0.0, 0.4), t);
      } else {
        float t = clamp(lambda / 1.5, 0.0, 1.0);
        col = mix(vec3(0.9, 0.8, 0.2), vec3(0.2, 0.6, 0.1), t);
      }
    } else if (u_colorScheme == 2) {
      if (lambda < 0.0) {
        float t = clamp(-lambda / 2.5, 0.0, 1.0);
        col = mix(vec3(0.02, 0.08, 0.08), vec3(0.0, 0.5, 0.5), t);
      } else {
        float t = clamp(lambda / 1.5, 0.0, 1.0);
        col = mix(vec3(0.7, 0.9, 0.3), vec3(0.3, 0.1, 0.0), t);
      }
    } else {
      float val = lambda < 0.0 ? clamp(-lambda / 2.0, 0.0, 1.0) : clamp(lambda / 1.5, 0.0, 1.0);
      col = vec3(val * 0.5 + 0.1);
    }
    
    gl_FragColor = vec4(col, 1.0);
  }
`;function PC({showInfo:s,onToggleInfo:e}){const i=te.useRef(null),[r,l]=te.useState(!1),[,c]=te.useState(0),f=zr.find(E=>E.id==="lyapunov"),h=te.useRef({colorScheme:0,iterations:80,sequencePattern:0}),m=h.current.colorScheme,p=h.current.iterations,v=h.current.sequencePattern,_=te.useCallback(E=>{h.current.colorScheme=E,c(T=>T+1)},[]),S=te.useCallback(E=>{h.current.iterations=E,c(T=>T+1)},[]),M=te.useCallback(E=>{h.current.sequencePattern=E,c(T=>T+1)},[]);return te.useEffect(()=>{const E=i.current;if(!E)return;const T=E.getContext("webgl");if(!T){alert("WebGL not supported");return}const g=T;function x(re,ke){const Ce=g.createShader(re);return Ce?(g.shaderSource(Ce,ke),g.compileShader(Ce),g.getShaderParameter(Ce,g.COMPILE_STATUS)?Ce:(console.error(g.getShaderInfoLog(Ce)),g.deleteShader(Ce),null)):null}function U(re,ke){const Ce=g.createProgram();return Ce?(g.attachShader(Ce,re),g.attachShader(Ce,ke),g.linkProgram(Ce),g.getProgramParameter(Ce,g.LINK_STATUS)?Ce:(console.error(g.getProgramInfoLog(Ce)),g.deleteProgram(Ce),null)):null}const N=x(g.VERTEX_SHADER,NC),O=x(g.FRAGMENT_SHADER,OC);if(!N||!O)return;const L=U(N,O);if(!L)return;const I=g.createBuffer();g.bindBuffer(g.ARRAY_BUFFER,I),g.bufferData(g.ARRAY_BUFFER,new Float32Array([-1,-1,1,-1,-1,1,-1,1,1,-1,1,1]),g.STATIC_DRAW);const F=g.getAttribLocation(L,"position"),j=g.getUniformLocation(L,"u_resolution"),w=g.getUniformLocation(L,"u_time"),D=g.getUniformLocation(L,"u_center"),V=g.getUniformLocation(L,"u_zoom"),se=g.getUniformLocation(L,"u_iterations"),ae=g.getUniformLocation(L,"u_colorScheme"),me=g.getUniformLocation(L,"u_pattern");let de=2.5,z=2.5,H=1,K=!1,ye=0,ve=0;const A=E,B=g;function ee(){const re=Math.min(window.devicePixelRatio,2);A.width=window.innerWidth*re,A.height=window.innerHeight*re,B.viewport(0,0,A.width,A.height)}ee(),window.addEventListener("resize",ee);const _e=re=>{K=!0,ye=re.clientX,ve=re.clientY},Te=()=>K=!1,Q=re=>{if(!K)return;const ke=re.clientX-ye,Ce=re.clientY-ve,rt=4/H/Math.min(A.width,A.height);de-=ke*rt,z+=Ce*rt,ye=re.clientX,ve=re.clientY},ce=re=>{re.preventDefault();const ke=re.deltaY>0?.9:1.1;H=Math.max(.1,Math.min(1e6,H*ke))};A.addEventListener("mousedown",_e),window.addEventListener("mouseup",Te),window.addEventListener("mousemove",Q),A.addEventListener("wheel",ce,{passive:!1});const Re=Date.now();function Ne(){const re=(Date.now()-Re)/1e3;B.useProgram(L),B.enableVertexAttribArray(F),B.bindBuffer(B.ARRAY_BUFFER,I),B.vertexAttribPointer(F,2,B.FLOAT,!1,0,0),B.uniform2f(j,A.width,A.height),B.uniform1f(w,re),B.uniform2f(D,de,z),B.uniform1f(V,H),B.uniform1i(se,h.current.iterations),B.uniform1i(ae,h.current.colorScheme),B.uniform1i(me,h.current.sequencePattern),B.drawArrays(B.TRIANGLES,0,6),requestAnimationFrame(Ne)}return Ne(),()=>{window.removeEventListener("resize",ee),A.removeEventListener("mousedown",_e),window.removeEventListener("mouseup",Te),window.removeEventListener("mousemove",Q),A.removeEventListener("wheel",ce)}},[]),X.jsxs("div",{className:"lyapunov-page",children:[X.jsx("canvas",{ref:i,className:"lyapunov-canvas"}),X.jsx("div",{className:"vignette"}),X.jsx(ul,{to:"/"}),X.jsx("button",{className:"info-toggle",onClick:e,children:"i"}),X.jsx(fl,{fractal:f,isOpen:s,onClose:e}),X.jsx("div",{id:"panelTab",onClick:()=>l(!r),children:"PARAMETERS"}),X.jsxs("div",{id:"panel",className:r?"open":"",children:[X.jsx("div",{className:"panel-title",children:"Lyapunov"}),X.jsx("div",{className:"panel-sub",children:"Chaos · explorer"}),X.jsx("div",{className:"section-label",children:"Color"}),X.jsxs("div",{className:"param",children:[X.jsx("div",{className:"param-header",children:X.jsx("span",{className:"param-name",children:"Scheme"})}),X.jsxs("select",{value:m,onChange:E=>_(parseInt(E.target.value)),children:[X.jsx("option",{value:"0",children:"Blue-Yellow"}),X.jsx("option",{value:"1",children:"Purple-Green"}),X.jsx("option",{value:"2",children:"Teal-Orange"}),X.jsx("option",{value:"3",children:"Grayscale"})]})]}),X.jsx("div",{className:"section-label",children:"Pattern"}),X.jsxs("div",{className:"param",children:[X.jsx("div",{className:"param-header",children:X.jsx("span",{className:"param-name",children:"Sequence"})}),X.jsxs("select",{value:v,onChange:E=>M(parseInt(E.target.value)),children:[X.jsx("option",{value:"0",children:"AABAAB"}),X.jsx("option",{value:"1",children:"AABBAAB"}),X.jsx("option",{value:"2",children:"ABBBABA"}),X.jsx("option",{value:"3",children:"AABAAAB"})]})]}),X.jsx("div",{className:"section-label",children:"Quality"}),X.jsxs("div",{className:"param",children:[X.jsxs("div",{className:"param-header",children:[X.jsx("span",{className:"param-name",children:"Iterations"}),X.jsx("span",{className:"param-value",children:p})]}),X.jsx("input",{type:"range",min:"30",max:"150",step:"10",value:p,onChange:E=>S(parseInt(E.target.value))})]})]}),X.jsx("div",{id:"hint",children:"drag to pan · scroll to zoom"})]})}const FC={fern:EC,mandelbrot:AC,burningship:wC,newton:LC,lyapunov:PC};function zC(){const{id:s}=cM(),[e,i]=te.useState(!1);if(!s||!aE(s))return X.jsx(p_,{to:"/",replace:!0});const r=FC[s];return r?X.jsx(r,{showInfo:e,onToggleInfo:()=>i(!e)}):X.jsx(p_,{to:"/",replace:!0})}function IC(){return X.jsx(jM,{children:X.jsxs(bM,{children:[X.jsx(ih,{path:"/",element:X.jsx(rE,{})}),X.jsx(ih,{path:"/:id",element:X.jsx(zC,{})})]})})}Ay.createRoot(document.getElementById("root")).render(X.jsx(te.StrictMode,{children:X.jsx(IC,{})}));
