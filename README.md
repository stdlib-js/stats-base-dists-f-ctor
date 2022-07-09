<!--

@license Apache-2.0

Copyright (c) 2018 The Stdlib Authors.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

-->

# Fisher's F

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] <!-- [![dependencies][dependencies-image]][dependencies-url] -->

> F distribution constructor.

<!-- Section to include introductory text. Make sure to keep an empty line after the intro `section` element and another before the `/section` close. -->

<section class="intro">

</section>

<!-- /.intro -->

<!-- Package usage documentation. -->



<section class="usage">

## Usage

To use in Observable,

```javascript
F = require( 'https://cdn.jsdelivr.net/gh/stdlib-js/stats-base-dists-f-ctor@umd/browser.js' )
```

To vendor stdlib functionality and avoid installing dependency trees for Node.js, you can use the UMD server build:

```javascript
var F = require( 'path/to/vendor/umd/stats-base-dists-f-ctor/index.js' )
```

To include the bundle in a webpage,

```html
<script type="text/javascript" src="https://cdn.jsdelivr.net/gh/stdlib-js/stats-base-dists-f-ctor@umd/browser.js"></script>
```

If no recognized module system is present, access bundle contents via the global scope:

```html
<script type="text/javascript">
(function () {
    window.F;
})();
</script>
```

#### F( \[d1, d2] )

Returns a [F][f-distribution] distribution object.

```javascript
var f = new F();

var mu = f.mean;
// returns NaN
```

By default, `d1 = 1.0` and `d2 = 1.0`. To create a distribution having a different `d1` (numerator degrees of freedom) and `d2` (denominator degrees of freedom), provide the corresponding arguments.

```javascript
var f = new F( 2.0, 4.0 );

var mu = f.mean;
// returns 2.0
```

* * *

## f

A [F][f-distribution] distribution object has the following properties and methods...

### Writable Properties

#### f.d1

Numerator degrees of freedom of the distribution. `d1` **must** be a positive number.

```javascript
var f = new F();

var d1 = f.d1;
// returns 1.0

f.d1 = 3.0;

d1 = f.d1;
// returns 3.0
```

#### f.d2

Denominator degrees of freedom of the distribution. `d2` **must** be a positive number.

```javascript
var f = new F( 2.0, 4.0 );

var d2 = f.d2;
// returns 4.0

f.d2 = 3.0;

d2 = f.d2;
// returns 3.0
```

* * *

### Computed Properties

#### F.prototype.entropy

Returns the [differential entropy][entropy].

```javascript
var f = new F( 4.0, 12.0 );

var entropy = f.entropy;
// returns ~1.12
```

#### F.prototype.kurtosis

Returns the [excess kurtosis][kurtosis].

```javascript
var f = new F( 4.0, 12.0 );

var kurtosis = f.kurtosis;
// returns ~26.143
```

#### F.prototype.mean

Returns the [expected value][expected-value].

```javascript
var f = new F( 4.0, 12.0 );

var mu = f.mean;
// returns 1.2
```

#### F.prototype.mode

Returns the [mode][mode].

```javascript
var f = new F( 4.0, 12.0 );

var mode = f.mode;
// returns ~0.429
```

#### F.prototype.skewness

Returns the [skewness][skewness].

```javascript
var f = new F( 4.0, 12.0 );

var skewness = f.skewness;
// returns ~3.207
```

#### F.prototype.stdev

Returns the [standard deviation][standard-deviation].

```javascript
var f = new F( 4.0, 12.0 );

var s = f.stdev;
// returns ~1.122
```

#### F.prototype.variance

Returns the [variance][variance].

```javascript
var f = new F( 4.0, 12.0 );

var s2 = f.variance;
// returns 1.26
```

* * *

### Methods

#### F.prototype.cdf( x )

Evaluates the [cumulative distribution function][cdf] (CDF).

```javascript
var f = new F( 2.0, 4.0 );

var y = f.cdf( 0.5 );
// returns ~0.36
```

#### F.prototype.pdf( x )

Evaluates the [probability density function][pdf] (PDF).

```javascript
var f = new F( 2.0, 4.0 );

var y = f.pdf( 0.8 );
// returns ~0.364
```

#### F.prototype.quantile( p )

Evaluates the [quantile function][quantile-function] at probability `p`.

```javascript
var f = new F( 2.0, 4.0 );

var y = f.quantile( 0.5 );
// returns ~0.828

y = f.quantile( 1.9 );
// returns NaN
```

</section>

<!-- /.usage -->

<!-- Package usage notes. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="notes">

</section>

<!-- /.notes -->

<!-- Package usage examples. -->

* * *

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```html
<!DOCTYPE html>
<html lang="en">
<body>
<script type="text/javascript" src="https://cdn.jsdelivr.net/gh/stdlib-js/stats-base-dists-f-ctor@umd/browser.js"></script>
<script type="text/javascript">
(function () {

var f = new F( 3.0, 5.0 );

var mu = f.mean;
// returns ~1.667

var mode = f.mode;
// returns ~0.238

var s2 = f.variance;
// returns ~11.111

var y = f.cdf( 0.8 );
// returns ~0.455

})();
</script>
</body>
</html>
```

</section>

<!-- /.examples -->

<!-- Section to include cited references. If references are included, add a horizontal rule *before* the section. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="references">

</section>

<!-- /.references -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->


<section class="main-repo" >

* * *

## Notice

This package is part of [stdlib][stdlib], a standard library for JavaScript and Node.js, with an emphasis on numerical and scientific computing. The library provides a collection of robust, high performance libraries for mathematics, statistics, streams, utilities, and more.

For more information on the project, filing bug reports and feature requests, and guidance on how to develop [stdlib][stdlib], see the main project [repository][stdlib].

#### Community

[![Chat][chat-image]][chat-url]

---

## License

See [LICENSE][stdlib-license].


## Copyright

Copyright &copy; 2016-2022. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/stats-base-dists-f-ctor.svg
[npm-url]: https://npmjs.org/package/@stdlib/stats-base-dists-f-ctor

[test-image]: https://github.com/stdlib-js/stats-base-dists-f-ctor/actions/workflows/test.yml/badge.svg?branch=v0.0.8
[test-url]: https://github.com/stdlib-js/stats-base-dists-f-ctor/actions/workflows/test.yml?query=branch:v0.0.8

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/stats-base-dists-f-ctor/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/stats-base-dists-f-ctor?branch=main

<!--

[dependencies-image]: https://img.shields.io/david/stdlib-js/stats-base-dists-f-ctor.svg
[dependencies-url]: https://david-dm.org/stdlib-js/stats-base-dists-f-ctor/main

-->

[chat-image]: https://img.shields.io/gitter/room/stdlib-js/stdlib.svg
[chat-url]: https://gitter.im/stdlib-js/stdlib/

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[umd]: https://github.com/umdjs/umd
[es-module]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules

[deno-url]: https://github.com/stdlib-js/stats-base-dists-f-ctor/tree/deno
[umd-url]: https://github.com/stdlib-js/stats-base-dists-f-ctor/tree/umd
[esm-url]: https://github.com/stdlib-js/stats-base-dists-f-ctor/tree/esm
[branches-url]: https://github.com/stdlib-js/stats-base-dists-f-ctor/blob/main/branches.md

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/stats-base-dists-f-ctor/main/LICENSE

[f-distribution]: https://en.wikipedia.org/wiki/F_distribution

[cdf]: https://en.wikipedia.org/wiki/Cumulative_distribution_function

[pdf]: https://en.wikipedia.org/wiki/Probability_density_function

[quantile-function]: https://en.wikipedia.org/wiki/Quantile_function

[entropy]: https://en.wikipedia.org/wiki/Entropy_%28information_theory%29

[expected-value]: https://en.wikipedia.org/wiki/Expected_value

[kurtosis]: https://en.wikipedia.org/wiki/Kurtosis

[mode]: https://en.wikipedia.org/wiki/Mode_%28statistics%29

[skewness]: https://en.wikipedia.org/wiki/Skewness

[standard-deviation]: https://en.wikipedia.org/wiki/Standard_deviation

[variance]: https://en.wikipedia.org/wiki/Variance

</section>

<!-- /.links -->
