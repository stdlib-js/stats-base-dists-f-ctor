/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/

/* eslint-disable no-restricted-syntax, no-invalid-this */

'use strict';

// MODULES //

var defineProperty = require( '@stdlib/utils-define-property' );
var setReadOnly = require( '@stdlib/utils-define-nonenumerable-read-only-property' );
var setReadOnlyAccessor = require( '@stdlib/utils-define-nonenumerable-read-only-accessor' );
var isPositive = require( '@stdlib/assert-is-positive-number' ).isPrimitive;
var entropy = require( '@stdlib/stats-base-dists-f-entropy' );
var kurtosis = require( '@stdlib/stats-base-dists-f-kurtosis' );
var mean = require( '@stdlib/stats-base-dists-f-mean' );
var mode = require( '@stdlib/stats-base-dists-f-mode' );
var skewness = require( '@stdlib/stats-base-dists-f-skewness' );
var stdev = require( '@stdlib/stats-base-dists-f-stdev' );
var variance = require( '@stdlib/stats-base-dists-f-variance' );
var cdf = require( '@stdlib/stats-base-dists-f-cdf' );
var pdf = require( '@stdlib/stats-base-dists-f-pdf' );
var quantile = require( '@stdlib/stats-base-dists-f-quantile' );
var format = require( '@stdlib/string-format' );


// FUNCTIONS //

/**
* Evaluates the cumulative distribution function (CDF).
*
* @private
* @param {number} x - input value
* @returns {number} evaluated CDF
*/
function fCDF( x ) {
	return cdf( x, this.d1, this.d2 );
}

/**
* Evaluates the probability density function (PDF).
*
* @private
* @param {number} x - input value
* @returns {number} evaluated PDF
*/
function fPDF( x ) {
	return pdf( x, this.d1, this.d2 );
}

/**
* Evaluates the quantile function.
*
* @private
* @param {Probability} p - input probability
* @returns {number} evaluated quantile function
*/
function fQuantile( p ) {
	return quantile( p, this.d1, this.d2 );
}


// MAIN //

/**
* F distribution constructor.
*
* @constructor
* @param {PositiveNumber} [d1=1.0] - numerator degrees of freedom
* @param {PositiveNumber} [d2=1.0] - denominator degrees of freedom
* @throws {TypeError} `d1` must be a positive number
* @throws {TypeError} `d2` must be a positive number
* @returns {F} distribution instance
*
* @example
* var f = new F( 1.0, 1.0 );
*
* var y = f.cdf( 0.8 );
* // returns ~0.465
*
* var v = f.mode;
* // returns NaN
*/
function F() {
	var d1;
	var d2;
	if ( !(this instanceof F) ) {
		if ( arguments.length === 0 ) {
			return new F();
		}
		return new F( arguments[ 0 ], arguments[ 1 ] );
	}
	if ( arguments.length ) {
		d1 = arguments[ 0 ];
		d2 = arguments[ 1 ];
		if ( !isPositive( d1 ) ) {
			throw new TypeError( format( 'invalid argument. Numerator degrees of freedom must be a positive number. Value: `%s`.', d1 ) );
		}
		if ( !isPositive( d2 ) ) {
			throw new TypeError( format( 'invalid argument. Denominator degrees of freedom must be a positive number. Value: `%s`.', d2 ) );
		}
	} else {
		d1 = 1.0;
		d2 = 1.0;
	}
	defineProperty( this, 'd1', {
		'configurable': false,
		'enumerable': true,
		'get': function get() {
			return d1;
		},
		'set': function set( value ) {
			if ( !isPositive( value ) ) {
				throw new TypeError( format( 'invalid assignment. Must be a positive number. Value: `%s`.', value ) );
			}
			d1 = value;
		}
	});
	defineProperty( this, 'd2', {
		'configurable': false,
		'enumerable': true,
		'get': function get() {
			return d2;
		},
		'set': function set( value ) {
			if ( !isPositive( value ) ) {
				throw new TypeError( format( 'invalid assignment. Must be a positive number. Value: `%s`.', value ) );
			}
			d2 = value;
		}
	});
	return this;
}

/**
* F distribution differential entropy.
*
* @name entropy
* @memberof F.prototype
* @type {number}
* @see [differential entropy]{@link https://en.wikipedia.org/wiki/Entropy_%28information_theory%29}
*
* @example
* var f = new F( 4.0, 12.0 );
*
* var v = f.entropy;
* // returns ~1.12
*/
setReadOnlyAccessor( F.prototype, 'entropy', function get() {
	return entropy( this.d1, this.d2 );
});

/**
* F distribution excess kurtosis.
*
* @name kurtosis
* @memberof F.prototype
* @type {number}
* @see [kurtosis]{@link https://en.wikipedia.org/wiki/Kurtosis}
*
* @example
* var f = new F( 4.0, 12.0 );
*
* var v = f.kurtosis;
* // returns ~26.143
*/
setReadOnlyAccessor( F.prototype, 'kurtosis', function get() {
	return kurtosis( this.d1, this.d2 );
});

/**
* F distribution expected value.
*
* @name mean
* @memberof F.prototype
* @type {number}
* @see [expected value]{@link https://en.wikipedia.org/wiki/Expected_value}
*
* @example
* var f = new F( 4.0, 12.0 );
*
* var v = f.mean;
* // returns 1.2
*/
setReadOnlyAccessor( F.prototype, 'mean', function get() {
	return mean( this.d1, this.d2 );
});

/**
* F distribution mode.
*
* @name mode
* @memberof F.prototype
* @type {number}
* @see [mode]{@link https://en.wikipedia.org/wiki/Mode_%28statistics%29}
*
* @example
* var f = new F( 4.0, 12.0 );
*
* var v = f.mode;
* // returns ~0.429
*/
setReadOnlyAccessor( F.prototype, 'mode', function get() {
	return mode( this.d1, this.d2 );
});

/**
* F distribution skewness.
*
* @name skewness
* @memberof F.prototype
* @type {number}
* @see [skewness]{@link https://en.wikipedia.org/wiki/Skewness}
*
* @example
* var f = new F( 4.0, 12.0 );
*
* var v = f.skewness;
* // returns ~3.207
*/
setReadOnlyAccessor( F.prototype, 'skewness', function get() {
	return skewness( this.d1, this.d2 );
});

/**
* F distribution standard deviation.
*
* @name stdev
* @memberof F.prototype
* @type {PositiveNumber}
* @see [standard deviation]{@link https://en.wikipedia.org/wiki/Standard_deviation}
*
* @example
* var f = new F( 4.0, 12.0 );
*
* var v = f.stdev;
* // returns ~1.122
*/
setReadOnlyAccessor( F.prototype, 'stdev', function get() {
	return stdev( this.d1, this.d2 );
});

/**
* F distribution variance.
*
* @name variance
* @memberof F.prototype
* @type {PositiveNumber}
* @see [variance]{@link https://en.wikipedia.org/wiki/Variance}
*
* @example
* var f = new F( 4.0, 12.0 );
*
* var v = f.variance;
* // returns 1.26
*/
setReadOnlyAccessor( F.prototype, 'variance', function get() {
	return variance( this.d1, this.d2 );
});

/**
* Evaluates the cumulative distribution function (CDF).
*
* @name cdf
* @memberof F.prototype
* @type {Function}
* @param {number} x - input value
* @returns {number} evaluated CDF
* @see [cdf]{@link https://en.wikipedia.org/wiki/Cumulative_distribution_function}
*
* @example
* var f = new F( 2.0, 4.0 );
*
* var v = f.cdf( 0.5 );
* // returns ~0.36
*/
setReadOnly( F.prototype, 'cdf', fCDF );

/**
* Evaluates the probability density function (PDF).
*
* @name pdf
* @memberof F.prototype
* @type {Function}
* @param {number} x - input value
* @returns {number} evaluated PDF
* @see [pdf]{@link https://en.wikipedia.org/wiki/Probability_density_function}
*
* @example
* var f = new F( 2.0, 4.0 );
*
* var v = f.pdf( 2.0 );
* // returns ~0.125
*/
setReadOnly( F.prototype, 'pdf', fPDF );

/**
* Evaluates the quantile function.
*
* @name quantile
* @memberof F.prototype
* @type {Function}
* @param {Probability} p - input probability
* @returns {number} evaluated quantile function
* @see [quantile function]{@link https://en.wikipedia.org/wiki/Quantile_function}
*
* @example
* var f = new F( 2.0, 4.0 );
*
* var v = f.quantile( 0.5 );
* // returns ~0.828
*/
setReadOnly( F.prototype, 'quantile', fQuantile );


// EXPORTS //

module.exports = F;
