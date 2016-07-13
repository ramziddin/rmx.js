/*! Rmx.js v0.0.0 | (c) Ramziddin Makhmudov | MIT license */
!function(t){function e(r){if(n[r])return n[r].exports;var o=n[r]={exports:{},id:r,loaded:!1};return t[r].call(o.exports,o,o.exports,e),o.loaded=!0,o.exports}var n={};return e.m=t,e.c=n,e.p="",e(0)}([function(t,e,n){"use strict";var r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol?"symbol":typeof t};!function(t,n){"function"==typeof t.define&&t.define.amd?t.define(["exports"]):n("object"===r(t.exports)&&"string"!=typeof t.exports.nodeName?e:t.Rmx={})}(window||void 0,function(t){var e=n(1),r=e.Rmx,o=e.$;t.Rmx=r,t.$=o})},function(t,e,n){"use strict";function r(){var t=arguments.length<=0||void 0===arguments[0]?"body":arguments[0];this.dataStorage=r.data(),this.selector=c(t)}function o(t){return new r(t)}var c=n(2);r.extend=o.extend=n(4),r.data=o.data=n(6),r.create=o.create=function(t){return new r(document.createElement(t))},r.extend(n(7)),r.extend(n(8)),r.extend(n(9)),r.extend(n(10)),r.extend(n(11)),r.extend(n(12)),r.extend(n(13)),r.extend(n(14)),r.extend(n(15)),r.extend(n(16)),r.extend(n(17)),r.extend(n(18)),r.extend(n(19)),r.extend(n(20)),r.extend(n(21)),r.extend(n(22)),r.extend(n(23)),r.extend(n(24)),r.extend(n(25)),r.extend(n(26)),r.extend(n(27)),r.extend(n(28)),r.extend(n(29)),r.extend(n(30)),r.extend(n(31)),r.extend(n(32)),r.extend(n(33)),r.extend(n(34)),r.extend(n(35)),t.exports={Rmx:r,$:o}},function(t,e,n){"use strict";function r(t){return t=t===window||t===document||t===document.body?[t]:"String"===o.fullTypeOf(t)?Array.from(document.querySelectorAll(t)):t instanceof window.HTMLElement||t instanceof window.NodeList?t instanceof window.NodeList?Array.from(t):[t]:t.selector}var o=n(3);t.exports=r},function(t,e){"use strict";function n(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function r(t){return l.call(t).slice(8,-1)}function o(t){return p(t)?"array":"undefined"==typeof t?"undefined":f(t)}function c(t){var e=arguments.length<=1||void 0===arguments[1]?{}:arguments[1];return{module:t,"new":function(e){var n=arguments.length<=1||void 0===arguments[1]?{}:arguments[1];return c(t+" -> "+e,n)},log:function(n){"String"!==r(n)||1===e.quite&&3===e.quite||console.log("["+t+"] info: "+n)},error:function(n){"String"!==r(n)||2===e.quite&&3===e.quite||console.error("["+t+"] error: "+n)}}}function i(t,e){for(var n=0,r=t.length,o=r;0!==o;--o)n=r-o,e(t[n],n)}function u(){var t=arguments.length<=0||void 0===arguments[0]?{}:arguments[0],e=arguments.length<=1||void 0===arguments[1]?{}:arguments[1],n=arguments.length<=2||void 0===arguments[2]||arguments[2];return i(Object.keys(t),function(o,c){"Object"===r(t[o])&&"Object"===r(e[o])?e[o]=u(t[o],e[2],n):n?e[o]=t[o]:e[o]=e[o]||t[o]}),e}function a(t){var e=arguments.length<=1||void 0===arguments[1]?{}:arguments[1],n=void 0;return i(t.split("."),function(t,r){n=0===r?e[t]:n[t]}),n}function s(){var t=arguments.length<=0||void 0===arguments[0]?"":arguments[0],e=arguments[1],r=arguments[2],o=void 0;return i(t.split(".").reverse(),function(t,e){o=0===e?n({},t,r):n({},t,o)}),u(o,e)}var f="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol?"symbol":typeof t},l=Object.prototype.toString,p=Array.isArray||function(t){return"[object Array]"===l.call(t)};t.exports.toString=l,t.exports.isArray=p,t.exports.fullTypeOf=r,t.exports.typeOf=o,t.exports.logger=c,t.exports.forEach=i,t.exports.extend=u,t.exports.executePointer=a,t.exports.writePointer=s},function(t,e,n){"use strict";function r(t){var e=o.logger("Rmx.extend"),r=t.name,c=t.core,i=void 0;"String"===o.fullTypeOf(r)?"Function"===o.fullTypeOf(c)?this.prototype[r]=function(){return this.selector.length<=0?e.error("selector - selector is empty!"):(i=n(5)(this,{arguments:arguments}),c.call(this,i),r[0]===r[0].toUpperCase()?i["return"]:this)}:e.error("core - "+o.fullTypeOf(r)+" instead of Function"):e.error("name - "+o.fullTypeOf(r)+" instead of String")}var o=n(3);t.exports=r},function(t,e,n){"use strict";function r(t,e){function n(e){return o.forEach(t.selector,e.bind(t)),s}function r(){return f.apply(t,arguments),s}function c(t){return o.fullTypeOf(t)}function i(e,n){var r=o.fullTypeOf(e);(n[r]||n["is"+r]||function(){}).call(t)}function u(){return t.selector.length<=0}function a(t,e){return!(!t||"String"!==o.fullTypeOf(e))&&(t.matches||t.matchesSelector||t.msMatchesSelector||t.mozMatchesSelector||t.webkitMatchesSelector||t.oMatchesSelector).call(t,e)}var s={};s.scope=t,s.forEach=n,s.arguments=e.arguments;var f=e.arguments[e.arguments.length-1];return"Function"===o.fullTypeOf(f)&&f&&(s.callback=r),s.typeOf=c,s.when=i,s.isNull=u,s.is=a,s["return"]=null,s}var o=(n(1),n(3));o.logger("rmxutilities");t.exports=r},function(t,e,n){"use strict";function r(t,e){var n=arguments.length<=2||void 0===arguments[2]?{}:arguments[2],r=n.overwrite;if(!t)return c;if("Object"!==o.fullTypeOf(t)||e){if("String"===o.fullTypeOf(t)){if(!e)return o.executePointer(t,c);o.writePointer(t,c,e)}}else c=o.extend(t,c,r);return c}var o=n(3),c={};t.exports=r},function(t,e,n){"use strict";var r=function(){function t(t,e){var n=[],r=!0,o=!1,c=void 0;try{for(var i,u=t[Symbol.iterator]();!(r=(i=u.next()).done)&&(n.push(i.value),!e||n.length!==e);r=!0);}catch(a){o=!0,c=a}finally{try{!r&&u["return"]&&u["return"]()}finally{if(o)throw c}}return n}return function(e,n){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return t(e,n);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}(),o=n(3),c={name:"data",core:function(t){var e=r(t.arguments,3),n=e[0],c=e[1],i=e[2],u=void 0===i?{}:i,a=u.overwrite;t.when(n,{isObject:function(){t.scope.dataStorage=o.extend(n,t.scope.dataStorage,a)},isString:function(){c&&(t.scope.dataStorage=o.writePointer(n,t.scope.dataStorage,c))}})}};t.exports=c},function(t,e,n){"use strict";var r=n(3),o={name:"Data",core:function(t){var e=t.arguments[0];t["return"]=e?r.executePointer(e,t.scope.dataStorage):t.scope.dataStorage}};t.exports=o},function(t,e){"use strict";var n={name:"each",core:function(t){t.callback&&t.forEach(function(e,n){t.callback(e,n)})}};t.exports=n},function(t,e){"use strict";var n={name:"in",core:function(t){var e=parseInt(t.arguments[0],10);t.when(e,{isNumber:function(){t.scope.selector=t.scope.selector.slice(e,e+1)}})}};t.exports=n},function(t,e){"use strict";var n={name:"html",core:function(t){t.when(t.arguments[0],{isString:function(){t.forEach(function(e,n){e.innerHTML=t.arguments[0]})}})}};t.exports=n},function(t,e){"use strict";var n={name:"Html",core:function(t){t["return"]=t.scope.selector[0].innerHTML}};t.exports=n},function(t,e){"use strict";var n={name:"val",core:function(t){t.when(t.arguments[0],{isString:function(){t.forEach(function(e,n){e.value=t.arguments[0]})}})}};t.exports=n},function(t,e){"use strict";var n={name:"Val",core:function(t){t["return"]=t.scope.selector[0].value}};t.exports=n},function(t,e,n){"use strict";var r=n(3),o={name:"addClass",core:function(t){var e=t.arguments[0],n=e.split(/\s+/g);t.when(e,{isString:function(){t.forEach(function(t){r.forEach(n,function(e){t.classList.add(e)})})}})}};t.exports=o},function(t,e,n){"use strict";var r=n(3),o={name:"toggleClass",core:function(t){var e=t.arguments[0],n=e.split(/\s+/g);t.when(e,{isString:function(){t.forEach(function(t){r.forEach(n,function(e){t.classList.toggle(e)})})}})}};t.exports=o},function(t,e,n){"use strict";var r=n(3),o={name:"removeClass",core:function(t){var e=t.arguments[0],n=e.split(/\s+/g);t.when(e,{isString:function(){t.forEach(function(t){r.forEach(n,function(e){t.classList.remove(e)})})}})}};t.exports=o},function(t,e,n){"use strict";var r=function(){function t(t,e){var n=[],r=!0,o=!1,c=void 0;try{for(var i,u=t[Symbol.iterator]();!(r=(i=u.next()).done)&&(n.push(i.value),!e||n.length!==e);r=!0);}catch(a){o=!0,c=a}finally{try{!r&&u["return"]&&u["return"]()}finally{if(o)throw c}}return n}return function(e,n){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return t(e,n);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}(),o=n(3),c={name:"attr",core:function(t){var e=r(t.arguments,2),n=e[0],c=e[1];t.when(n,{isString:function(){t.forEach(function(t){t.setAttribute(n,c)})},isObject:function(){o.forEach(Object.keys(n),function(e){t.forEach(function(t){t.setAttribute(e,n[e])})})}})}};t.exports=c},function(t,e){"use strict";var n={name:"Attr",core:function(t){t["return"]=t.scope.selector[0].getAttribute(t.arguments[0])}};t.exports=n},function(t,e,n){"use strict";var r=function(){function t(t,e){var n=[],r=!0,o=!1,c=void 0;try{for(var i,u=t[Symbol.iterator]();!(r=(i=u.next()).done)&&(n.push(i.value),!e||n.length!==e);r=!0);}catch(a){o=!0,c=a}finally{try{!r&&u["return"]&&u["return"]()}finally{if(o)throw c}}return n}return function(e,n){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return t(e,n);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}(),o=n(3),c={name:"removeAttr",core:function(t){var e=r(t.arguments,2),n=e[0],c=e[1];t.when(n,{isString:function(){t.forEach(function(t){t.removeAttribute(n,c)})},isArray:function(){o.forEach(n,function(e){t.forEach(function(t){t.removeAttribute(e)})})}})}};t.exports=c},function(t,e,n){"use strict";var r=n(3),o={name:"css",core:function(t){var e=t.arguments[0],n=t.arguments[1];t.when(e,{isObject:function(){t.forEach(function(t){r.forEach(Object.keys(e),function(n){t.style[n]=e[n]})})},isString:function(){t.forEach(function(t){t.style[e]=n})}})}};t.exports=o},function(t,e,n){"use strict";var r=(n(3),{name:"Css",core:function(t){var e=t.arguments[0],n=t.scope.selector[0];t["return"]=n.style[e]}});t.exports=r},function(t,e){"use strict";var n={name:"Null",core:function(t){t["return"]=t.scope.selector.length<=0}};t.exports=n},function(t,e){"use strict";var n={name:"remove",core:function(t){t.forEach(function(t){t.parentNode.removeChild(t)}),t.scope.selector=[]}};t.exports=n},function(t,e,n){"use strict";var r=n(2),o=n(3),c={name:"append",core:function(t){t.forEach(function(e){o.forEach(t.arguments,function(t){o.forEach(r(t),function(t){e.appendChild(t)})})})}};t.exports=c},function(t,e,n){"use strict";var r=n(2),o=n(3),c={name:"prepend",core:function(t){t.forEach(function(e){o.forEach(t.arguments,function(t){o.forEach(r(t),function(t){e.insertBefore(t,e.firstChild)})})})}};t.exports=c},function(t,e){"use strict";var n={name:"on",core:function(t){var e=t.arguments[0];t.when(e,{isString:function(){t.callback&&t.forEach(function(n){t.scope.data("events."+e,t.callback),n.addEventListener(t.arguments[0],t.callback)})}})}};t.exports=n},function(t,e){"use strict";var n={name:"trigger",core:function(t){var e=document.createEvent("Event");e.initEvent(t.arguments[0],!0,!0,t.arguments[1]||{}),t.forEach(function(t){t.dispatchEvent(e)})}};t.exports=n},function(t,e){"use strict";var n={name:"off",core:function(t){var e=t.arguments[0];t.when(e,{isString:function(){t.forEach(function(n){n.removeEventListener(e,t.scope.Data("events."+e)),t.scope.dataStorage.events[e]=void 0})}})}};t.exports=n},function(t,e,n){"use strict";var r=(n(3),{name:"Is",core:function(t){var e=t.arguments[0];t.when(e,{isString:function(){t["return"]=t.is(t.scope.selector[0],e)}})}});t.exports=r},function(t,e,n){"use strict";var r=(n(3),{name:"filter",core:function(t){var e=t.arguments[0];t.when(e,{isString:function(){var n=[];t.forEach(function(r){t.is(r,e)===!0&&n.push(r)}),t.scope.selector=n}})}});t.exports=r},function(t,e){"use strict";var n={name:"fadeIn",core:function(t){function e(){n.style.opacity=+n.style.opacity+(new Date-r)/(+t.arguments[0]||500),r=+new Date,+n.style.opacity<1?window.requestAnimationFrame&&requestAnimationFrame(e)||setTimeout(e,16):(t.callback||function(){})(n)}var n=t.scope.selector[0],r=+new Date;n.style.display="",n.style.opacity=0,e()}};t.exports=n},function(t,e){"use strict";var n={name:"fadeOut",core:function(t){function e(){n.style.opacity=+n.style.opacity-(new Date-r)/(+t.arguments[0]||500),r=+new Date,+n.style.opacity>=0?window.requestAnimationFrame&&requestAnimationFrame(e)||setTimeout(e,16):(n.style.display="none",(t.callback||function(){})(n))}var n=t.scope.selector[0],r=+new Date;n.style.opacity=1,e()}};t.exports=n},function(t,e){"use strict";var n={name:"scroll",core:function(t){var e=t.arguments[0],n=t.scope.selector[0];n&&e&&"function"==typeof e&&!function(){var r=0;t(n).on("scroll",function(o){var c=t(n).ScrollTop();c>r?e(o,"down"):e(o,"up")})}()}};t.exports=n},function(t,e){"use strict";var n={name:"ScrollTop",core:function(t){var e=t.scope.selector[0];e===document||e===window?t["return"]=(window.pageYOffset||document.documentElement.scrollTop)-(document.documentElement.clientTop||0):t["return"]=(e.pageYOffset||e.scrollTop)-(e.clientTop||0)}};t.exports=n}]);
