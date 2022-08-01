// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import t from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-property@esm/index.mjs";import s from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-only-property@esm/index.mjs";import e from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-only-accessor@esm/index.mjs";import{isPrimitive as i}from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-positive-number@esm/index.mjs";import n from"https://cdn.jsdelivr.net/gh/stdlib-js/stats-base-dists-f-entropy@esm/index.mjs";import r from"https://cdn.jsdelivr.net/gh/stdlib-js/stats-base-dists-f-kurtosis@esm/index.mjs";import d from"https://cdn.jsdelivr.net/gh/stdlib-js/stats-base-dists-f-mean@esm/index.mjs";import o from"https://cdn.jsdelivr.net/gh/stdlib-js/stats-base-dists-f-mode@esm/index.mjs";import m from"https://cdn.jsdelivr.net/gh/stdlib-js/stats-base-dists-f-skewness@esm/index.mjs";import p from"https://cdn.jsdelivr.net/gh/stdlib-js/stats-base-dists-f-stdev@esm/index.mjs";import f from"https://cdn.jsdelivr.net/gh/stdlib-js/stats-base-dists-f-variance@esm/index.mjs";import a from"https://cdn.jsdelivr.net/gh/stdlib-js/stats-base-dists-f-cdf@esm/index.mjs";import h from"https://cdn.jsdelivr.net/gh/stdlib-js/stats-base-dists-f-pdf@esm/index.mjs";import u from"https://cdn.jsdelivr.net/gh/stdlib-js/stats-base-dists-f-quantile@esm/index.mjs";import l from"https://cdn.jsdelivr.net/gh/stdlib-js/error-tools-fmtprodmsg@v0.0.2-esm/index.mjs";function j(){var s,e;if(!(this instanceof j))return 0===arguments.length?new j:new j(arguments[0],arguments[1]);if(arguments.length){if(e=arguments[1],!i(s=arguments[0]))throw new TypeError(l("invalid argument. Numerator degrees of freedom must be a positive number. Value: `%s`.",s));if(!i(e))throw new TypeError(l("invalid argument. Denominator degrees of freedom must be a positive number. Value: `%s`.",e))}else s=1,e=1;return t(this,"d1",{configurable:!1,enumerable:!0,get:function(){return s},set:function(t){if(!i(t))throw new TypeError(l("invalid assignment. Must be a positive number. Value: `%s`.",t));s=t}}),t(this,"d2",{configurable:!1,enumerable:!0,get:function(){return e},set:function(t){if(!i(t))throw new TypeError(l("invalid assignment. Must be a positive number. Value: `%s`.",t));e=t}}),this}e(j.prototype,"entropy",(function(){return n(this.d1,this.d2)})),e(j.prototype,"kurtosis",(function(){return r(this.d1,this.d2)})),e(j.prototype,"mean",(function(){return d(this.d1,this.d2)})),e(j.prototype,"mode",(function(){return o(this.d1,this.d2)})),e(j.prototype,"skewness",(function(){return m(this.d1,this.d2)})),e(j.prototype,"stdev",(function(){return p(this.d1,this.d2)})),e(j.prototype,"variance",(function(){return f(this.d1,this.d2)})),s(j.prototype,"cdf",(function(t){return a(t,this.d1,this.d2)})),s(j.prototype,"pdf",(function(t){return h(t,this.d1,this.d2)})),s(j.prototype,"quantile",(function(t){return u(t,this.d1,this.d2)}));export{j as default};
//# sourceMappingURL=index.mjs.map