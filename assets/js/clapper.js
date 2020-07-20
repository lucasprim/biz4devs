/*! For license information please see clapper.js.LICENSE.txt */
!function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=2)}([function(e,t,n){var r,o;!function(i){if(void 0===(o="function"==typeof(r=i)?r.call(t,n,t,e):r)||(e.exports=o),!0,e.exports=i(),!!0){var c=window.Cookies,u=window.Cookies=i();u.noConflict=function(){return window.Cookies=c,u}}}((function(){function e(){for(var e=0,t={};e<arguments.length;e++){var n=arguments[e];for(var r in n)t[r]=n[r]}return t}function t(e){return e.replace(/(%[0-9A-Z]{2})+/g,decodeURIComponent)}return function n(r){function o(){}function i(t,n,i){if("undefined"!=typeof document){"number"==typeof(i=e({path:"/"},o.defaults,i)).expires&&(i.expires=new Date(1*new Date+864e5*i.expires)),i.expires=i.expires?i.expires.toUTCString():"";try{var c=JSON.stringify(n);/^[\{\[]/.test(c)&&(n=c)}catch(e){}n=r.write?r.write(n,t):encodeURIComponent(String(n)).replace(/%(23|24|26|2B|3A|3C|3E|3D|2F|3F|40|5B|5D|5E|60|7B|7D|7C)/g,decodeURIComponent),t=encodeURIComponent(String(t)).replace(/%(23|24|26|2B|5E|60|7C)/g,decodeURIComponent).replace(/[\(\)]/g,escape);var u="";for(var a in i)i[a]&&(u+="; "+a,!0!==i[a]&&(u+="="+i[a].split(";")[0]));return document.cookie=t+"="+n+u}}function c(e,n){if("undefined"!=typeof document){for(var o={},i=document.cookie?document.cookie.split("; "):[],c=0;c<i.length;c++){var u=i[c].split("="),a=u.slice(1).join("=");n||'"'!==a.charAt(0)||(a=a.slice(1,-1));try{var s=t(u[0]);if(a=(r.read||r)(a,s)||t(a),n)try{a=JSON.parse(a)}catch(e){}if(o[s]=a,e===s)break}catch(e){}}return e?o[e]:o}}return o.set=i,o.get=function(e){return c(e,!1)},o.getJSON=function(e){return c(e,!0)},o.remove=function(t,n){i(t,"",e(n,{expires:-1}))},o.defaults={},o.withConverter=n,o}((function(){}))}))},function(e,t,n){"use strict";(function(e){var n="object"==typeof e&&e&&e.Object===Object&&e;t.a=n}).call(this,n(3))},function(e,t,n){n(5),e.exports=n(4)},function(e,t){var n;n=function(){return this}();try{n=n||new Function("return this")()}catch(e){"object"==typeof window&&(n=window)}e.exports=n},function(e,t,n){"use strict";n.r(t),t.default=n.p+"clapper.css"},function(e,t,n){"use strict";n.r(t);var r=function(e){var t=typeof e;return null!=e&&("object"==t||"function"==t)},o=n(1),i="object"==typeof self&&self&&self.Object===Object&&self,c=o.a||i||Function("return this")(),u=function(){return c.Date.now()},a=c.Symbol,s=Object.prototype,f=s.hasOwnProperty,l=s.toString,d=a?a.toStringTag:void 0;var p=function(e){var t=f.call(e,d),n=e[d];try{e[d]=void 0;var r=!0}catch(e){}var o=l.call(e);return r&&(t?e[d]=n:delete e[d]),o},v=Object.prototype.toString;var m=function(e){return v.call(e)},y=a?a.toStringTag:void 0;var b=function(e){return null==e?void 0===e?"[object Undefined]":"[object Null]":y&&y in Object(e)?p(e):m(e)};var h=function(e){return null!=e&&"object"==typeof e};var g=function(e){return"symbol"==typeof e||h(e)&&"[object Symbol]"==b(e)},x=/^\s+|\s+$/g,O=/^[-+]0x[0-9a-f]+$/i,j=/^0b[01]+$/i,w=/^0o[0-7]+$/i,C=parseInt;var S=function(e){if("number"==typeof e)return e;if(g(e))return NaN;if(r(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=r(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(x,"");var n=j.test(e);return n||w.test(e)?C(e.slice(2),n?2:8):O.test(e)?NaN:+e},T=Math.max,L=Math.min;var E=function(e,t,n){var o,i,c,a,s,f,l=0,d=!1,p=!1,v=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function m(t){var n=o,r=i;return o=i=void 0,l=t,a=e.apply(r,n)}function y(e){return l=e,s=setTimeout(h,t),d?m(e):a}function b(e){var n=e-f;return void 0===f||n>=t||n<0||p&&e-l>=c}function h(){var e=u();if(b(e))return g(e);s=setTimeout(h,function(e){var n=t-(e-f);return p?L(n,c-(e-l)):n}(e))}function g(e){return s=void 0,v&&o?m(e):(o=i=void 0,a)}function x(){var e=u(),n=b(e);if(o=arguments,i=this,f=e,n){if(void 0===s)return y(f);if(p)return clearTimeout(s),s=setTimeout(h,t),m(f)}return void 0===s&&(s=setTimeout(h,t)),a}return t=S(t)||0,r(n)&&(d=!!n.leading,c=(p="maxWait"in n)?T(S(n.maxWait)||0,t):c,v="trailing"in n?!!n.trailing:v),x.cancel=function(){void 0!==s&&clearTimeout(s),l=0,o=f=i=s=void 0},x.flush=function(){return void 0===s?a:g(u())},x},N=n(0),k=n.n(N);const I="https://clapper.biz4devs.com";let D=(()=>{let e=k.a.get("_klps");try{return e?JSON.parse(e):{}}catch{return{}}})();const $=(e,t)=>{let n=D||{};var r;n[e]=t,r=n,k.a.set("_klps",JSON.stringify(r),{expires:365,path:"",sameSite:"strict"}),D=r},_=window.location.pathname;let B=(e=>D&&D[e]?D[e]:0)(_),M=B;document.addEventListener("DOMContentLoaded",()=>{const e=document.getElementById("clapper");if(!e)return;const t=e.getElementsByClassName("clap-increment")[0],n=e.getElementsByClassName("clap-count")[0];let r,o;const i=e=>{M<50&&(M+=e),t.textContent="+ "+M},c=E(()=>{((e,t)=>fetch(`${I}/claps?url=${e}&by=${t}`,{method:"POST",headers:{"Content-Type":"text/plain"}}).then(e=>e.json()))(_,M-B).then(e=>n.textContent=e.claps),$(_,M),B=M},800),u=n=>{n.preventDefault(),e.classList.add("clicked"),t.classList.remove("fadeOut"),t.classList.add("fadeIn"),i(1),r=setTimeout(()=>(i(1),void(o=setInterval(()=>{t.classList.remove("fadeIn"),t.classList.add("pulse"),i(1)},200))),500),c.cancel()},a=n=>{n.preventDefault(),e.classList.remove("clicked"),t.classList.remove("fadeIn"),t.classList.remove("pulse"),t.classList.add("fadeOut"),clearTimeout(r),clearTimeout(o),c()};e.addEventListener("mousedown",u),e.addEventListener("touchstart",u),e.addEventListener("mouseup",a),e.addEventListener("touchend",a),(e=>fetch(`${I}/claps?url=${e}`,{headers:{"Content-Type":"text/plain"}}).then(e=>e.json()))(_).then(e=>n.textContent=e.claps)})}]);