// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import t from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-property@esm/index.mjs";import s from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-only-property@v0.1.0-esm/index.mjs";import e from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-only-accessor@v0.1.0-esm/index.mjs";import{isPrimitive as i}from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-positive-number@v0.1.0-esm/index.mjs";import r from"https://cdn.jsdelivr.net/gh/stdlib-js/stats-base-dists-f-entropy@v0.1.0-esm/index.mjs";import n from"https://cdn.jsdelivr.net/gh/stdlib-js/stats-base-dists-f-kurtosis@v0.1.0-esm/index.mjs";import d from"https://cdn.jsdelivr.net/gh/stdlib-js/stats-base-dists-f-mean@v0.1.0-esm/index.mjs";import o from"https://cdn.jsdelivr.net/gh/stdlib-js/stats-base-dists-f-mode@v0.1.0-esm/index.mjs";import m from"https://cdn.jsdelivr.net/gh/stdlib-js/stats-base-dists-f-skewness@v0.1.0-esm/index.mjs";import p from"https://cdn.jsdelivr.net/gh/stdlib-js/stats-base-dists-f-stdev@v0.1.0-esm/index.mjs";import h from"https://cdn.jsdelivr.net/gh/stdlib-js/stats-base-dists-f-variance@v0.1.0-esm/index.mjs";import f from"https://cdn.jsdelivr.net/gh/stdlib-js/stats-base-dists-f-cdf@v0.1.0-esm/index.mjs";import l from"https://cdn.jsdelivr.net/gh/stdlib-js/stats-base-dists-f-pdf@v0.1.0-esm/index.mjs";import j from"https://cdn.jsdelivr.net/gh/stdlib-js/stats-base-dists-f-quantile@v0.1.0-esm/index.mjs";import u from"https://cdn.jsdelivr.net/gh/stdlib-js/error-tools-fmtprodmsg@v0.1.0-esm/index.mjs";function a(){var s,e;if(!(this instanceof a))return 0===arguments.length?new a:new a(arguments[0],arguments[1]);if(arguments.length){if(e=arguments[1],!i(s=arguments[0]))throw new TypeError(u("1038z,Hd",s));if(!i(e))throw new TypeError(u("10390,He",e))}else s=1,e=1;return t(this,"d1",{configurable:!1,enumerable:!0,get:function(){return s},set:function(t){if(!i(t))throw new TypeError(u("1038k,HE",t));s=t}}),t(this,"d2",{configurable:!1,enumerable:!0,get:function(){return e},set:function(t){if(!i(t))throw new TypeError(u("1038k,HE",t));e=t}}),this}e(a.prototype,"entropy",(function(){return r(this.d1,this.d2)})),e(a.prototype,"kurtosis",(function(){return n(this.d1,this.d2)})),e(a.prototype,"mean",(function(){return d(this.d1,this.d2)})),e(a.prototype,"mode",(function(){return o(this.d1,this.d2)})),e(a.prototype,"skewness",(function(){return m(this.d1,this.d2)})),e(a.prototype,"stdev",(function(){return p(this.d1,this.d2)})),e(a.prototype,"variance",(function(){return h(this.d1,this.d2)})),s(a.prototype,"cdf",(function(t){return f(t,this.d1,this.d2)})),s(a.prototype,"pdf",(function(t){return l(t,this.d1,this.d2)})),s(a.prototype,"quantile",(function(t){return j(t,this.d1,this.d2)}));export{a as default};
//# sourceMappingURL=index.mjs.map
