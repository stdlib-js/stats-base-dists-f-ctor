// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import t from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-property@esm/index.mjs";import s from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-only-property@esm/index.mjs";import e from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-only-accessor@esm/index.mjs";import i from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-positive-number@esm/index.mjs";import r from"https://cdn.jsdelivr.net/gh/stdlib-js/stats-base-dists-f-entropy@esm/index.mjs";import n from"https://cdn.jsdelivr.net/gh/stdlib-js/stats-base-dists-f-kurtosis@esm/index.mjs";import d from"https://cdn.jsdelivr.net/gh/stdlib-js/stats-base-dists-f-mean@esm/index.mjs";import o from"https://cdn.jsdelivr.net/gh/stdlib-js/stats-base-dists-f-mode@esm/index.mjs";import m from"https://cdn.jsdelivr.net/gh/stdlib-js/stats-base-dists-f-skewness@esm/index.mjs";import p from"https://cdn.jsdelivr.net/gh/stdlib-js/stats-base-dists-f-stdev@esm/index.mjs";import a from"https://cdn.jsdelivr.net/gh/stdlib-js/stats-base-dists-f-variance@esm/index.mjs";import f from"https://cdn.jsdelivr.net/gh/stdlib-js/stats-base-dists-f-cdf@esm/index.mjs";import u from"https://cdn.jsdelivr.net/gh/stdlib-js/stats-base-dists-f-pdf@esm/index.mjs";import h from"https://cdn.jsdelivr.net/gh/stdlib-js/stats-base-dists-f-quantile@esm/index.mjs";import l from"https://cdn.jsdelivr.net/gh/stdlib-js/string-format@esm/index.mjs";var j=t,b=s,c=e,v=i.isPrimitive,g=r,y=n,x=d,w=o,k=m,E=p,T=a,V=f,q=u,M=h,D=l;function N(){var t,s;if(!(this instanceof N))return 0===arguments.length?new N:new N(arguments[0],arguments[1]);if(arguments.length){if(s=arguments[1],!v(t=arguments[0]))throw new TypeError(D("invalid argument. Numerator degrees of freedom `d1` must be a positive number. Value: `%s`.",t));if(!v(s))throw new TypeError(D("invalid argument. Denominator degrees of freedom `d2` must be a positive number. Value: `%s`.",s))}else t=1,s=1;return j(this,"d1",{configurable:!1,enumerable:!0,get:function(){return t},set:function(s){if(!v(s))throw new TypeError(D("invalid value. Must be a positive number. Value: `%s`.",s));t=s}}),j(this,"d2",{configurable:!1,enumerable:!0,get:function(){return s},set:function(t){if(!v(t))throw new TypeError(D("invalid value. Must be a positive number. Value: `%s`.",t));s=t}}),this}c(N.prototype,"entropy",(function(){return g(this.d1,this.d2)})),c(N.prototype,"kurtosis",(function(){return y(this.d1,this.d2)})),c(N.prototype,"mean",(function(){return x(this.d1,this.d2)})),c(N.prototype,"mode",(function(){return w(this.d1,this.d2)})),c(N.prototype,"skewness",(function(){return k(this.d1,this.d2)})),c(N.prototype,"stdev",(function(){return E(this.d1,this.d2)})),c(N.prototype,"variance",(function(){return T(this.d1,this.d2)})),b(N.prototype,"cdf",(function(t){return V(t,this.d1,this.d2)})),b(N.prototype,"pdf",(function(t){return q(t,this.d1,this.d2)})),b(N.prototype,"quantile",(function(t){return M(t,this.d1,this.d2)}));var P=N;export{P as default};
//# sourceMappingURL=index.mjs.map
