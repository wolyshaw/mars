webpackJsonp([0],{418:function(e,t,n){"use strict";function r(e){if(Array.isArray(e)){for(var t=0,n=Array(e.length);t<e.length;t++)n[t]=e[t];return n}return Array.from(e)}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function u(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var c=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),f=n(0),a=function(e){return e&&e.__esModule?e:{default:e}}(f),l=function(e){function t(e){var n;return o(this,t),u(this,(n=t.__proto__||Object.getPrototypeOf(t)).call.apply(n,[this].concat(r(e))))}return i(t,e),c(t,[{key:"render",value:function(){return a.default.createElement("div",{onClick:function(){return console.log(1)},style:{width:"100px",height:"200px",backgroundColor:"#fff"}},"login")}}]),t}(f.PureComponent);t.default=l}});