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

'use strict';

// MODULES //

var tape = require( 'tape' );
var isFunction = require( '@stdlib/assert-is-function' );
var hasOwnProp = require( '@stdlib/assert-has-own-property' );
var quantile = require( '@stdlib/stats-base-dists-f-quantile' );
var cdf = require( '@stdlib/stats-base-dists-f-cdf' );
var pdf = require( '@stdlib/stats-base-dists-f-pdf' );
var entropy = require( '@stdlib/stats-base-dists-f-entropy' );
var kurtosis = require( '@stdlib/stats-base-dists-f-kurtosis' );
var skewness = require( '@stdlib/stats-base-dists-f-skewness' );
var stdev = require( '@stdlib/stats-base-dists-f-stdev' );
var variance = require( '@stdlib/stats-base-dists-f-variance' );
var mode = require( '@stdlib/stats-base-dists-f-mode' );
var mean = require( '@stdlib/stats-base-dists-f-mean' );
var F = require( './../lib' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof F, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function throws an error if provided an `d1` argument which is not a positive number', function test( t ) {
	var values;
	var i;

	values = [
		'5',
		-5.0,
		0.0,
		NaN,
		true,
		false,
		void 0,
		null,
		{},
		[],
		function noop() {}
	];

	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[i] ), TypeError, 'throws an error when provided '+values[i] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			// eslint-disable-next-line no-new
			new F( value, 2.0 );
		};
	}
});

tape( 'the function throws an error if provided a `d2` argument which is not a positive number', function test( t ) {
	var values;
	var i;

	values = [
		'5',
		-5.0,
		0.0,
		NaN,
		true,
		false,
		void 0,
		null,
		{},
		[],
		function noop() {}
	];

	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[i] ), TypeError, 'throws an error when provided '+values[i] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			// eslint-disable-next-line no-new
			new F( 2.0, value );
		};
	}
});

tape( 'if provided arguments, the function requires both `d1` and `d2`', function test( t ) {
	t.throws( foo, TypeError, 'throws an error' );
	t.end();

	function foo() {
		// eslint-disable-next-line no-new
		new F( 2.0 );
	}
});

tape( 'the function returns a new distribution instance (default parameters)', function test( t ) {
	var f = new F();
	t.strictEqual( f instanceof F, true, 'returns an instance' );
	t.end();
});

tape( 'the function returns a new distribution instance (custom parameters)', function test( t ) {
	var f = new F( 2.0, 4.0 );
	t.strictEqual( f instanceof F, true, 'returns an instance' );
	t.end();
});

tape( 'the function can be invoked without the new operator', function test( t ) {
	// eslint-disable-next-line new-cap
	var f = F();
	t.strictEqual( f instanceof F, true, 'returns an instance' );

	// eslint-disable-next-line new-cap
	f = F( 2.0, 4.0 );
	t.strictEqual( f instanceof F, true, 'returns an instance' );

	t.end();
});

tape( 'the created distribution has a property for getting and setting `d1`', function test( t ) {
	var f;

	f = new F( 2.0, 4.0 );
	t.strictEqual( hasOwnProp( f, 'd1' ), true, 'has property' );
	t.strictEqual( f.d1, 2.0, 'returns expected value' );

	f.d1 = 3.0;
	t.strictEqual( f.d1, 3.0, 'returns expected value' );

	t.end();
});

tape( 'the created distribution throws an error if one attempts to set `d1` to a value which is not a positive number', function test( t ) {
	var values;
	var i;

	values = [
		'5',
		-5.0,
		0.0,
		NaN,
		true,
		false,
		void 0,
		null,
		{},
		[],
		function noop() {}
	];

	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[i] ), TypeError, 'throws an error when provided '+values[i] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			var f = new F();
			f.d1 = value;
		};
	}
});

tape( 'the created distribution has a property for getting and setting `d2`', function test( t ) {
	var f;

	f = new F( 2.0, 4.0 );
	t.strictEqual( hasOwnProp( f, 'd2' ), true, 'has property' );
	t.strictEqual( f.d2, 4.0, 'returns expected value' );

	f.d2 = 3.0;
	t.strictEqual( f.d2, 3.0, 'returns expected value' );

	t.end();
});

tape( 'the created distribution throws an error if one attempts to set `d2` to a value which is not a positive number', function test( t ) {
	var values;
	var i;

	values = [
		'5',
		-5.0,
		0.0,
		NaN,
		true,
		false,
		void 0,
		null,
		{},
		[],
		function noop() {}
	];

	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[i] ), TypeError, 'throws an error when provided '+values[i] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			var f = new F();
			f.d2 = value;
		};
	}
});

tape( 'the distribution prototype has a property for retrieving the distribution entropy', function test( t ) {
	var f;

	t.strictEqual( hasOwnProp( F.prototype, 'entropy' ), true, 'has property' );

	f = new F();
	t.strictEqual( f.entropy, entropy( 1.0, 1.0 ), 'returns expected value' );

	t.end();
});

tape( 'the distribution prototype has a property for retrieving the distribution kurtosis', function test( t ) {
	var f;

	t.strictEqual( hasOwnProp( F.prototype, 'kurtosis' ), true, 'has property' );

	f = new F( 2.0, 9.5 );
	t.strictEqual( f.kurtosis, kurtosis( 2.0, 9.5 ), 'returns expected value' );

	t.end();
});

tape( 'the distribution prototype has a property for retrieving the distribution mean', function test( t ) {
	var f;

	t.strictEqual( hasOwnProp( F.prototype, 'mean' ), true, 'has property' );

	f = new F( 2.0, 2.5 );
	t.strictEqual( f.mean, mean( 2.0, 2.5 ), 'returns expected value' );

	t.end();
});

tape( 'the distribution prototype has a property for retrieving the distribution mode', function test( t ) {
	var f;

	t.strictEqual( hasOwnProp( F.prototype, 'mode' ), true, 'has property' );

	f = new F( 2.5, 3.0 );
	t.strictEqual( f.mode, mode( 2.5, 3.0 ), 'returns expected value' );

	t.end();
});

tape( 'the distribution prototype has a property for retrieving the distribution skewness', function test( t ) {
	var f;

	t.strictEqual( hasOwnProp( F.prototype, 'skewness' ), true, 'has property' );

	f = new F( 0.5, 6.2 );
	t.strictEqual( f.skewness, skewness( 0.5, 6.2 ), 'returns expected value' );

	t.end();
});

tape( 'the distribution prototype has a property for retrieving the distribution standard deviation', function test( t ) {
	var f;

	t.strictEqual( hasOwnProp( F.prototype, 'stdev' ), true, 'has property' );

	f = new F( 3.0, 5.0 );
	t.strictEqual( f.stdev, stdev( 3.0, 5.0 ), 'returns expected value' );

	t.end();
});

tape( 'the distribution prototype has a property for retrieving the distribution variance', function test( t ) {
	var f;

	t.strictEqual( hasOwnProp( F.prototype, 'variance' ), true, 'has property' );

	f = new F( 3.0, 5.0 );
	t.strictEqual( f.variance, variance( 3.0, 5.0 ), 'returns expected value' );

	t.end();
});

tape( 'the distribution prototype has a method for evaluating the cumulative distribution function (CDF)', function test( t ) {
	var f;
	var y;

	t.strictEqual( hasOwnProp( F.prototype, 'cdf' ), true, 'has property' );
	t.strictEqual( isFunction( F.prototype.cdf ), true, 'has method' );

	f = new F();
	y = f.cdf( 0.5 );

	t.strictEqual( y, cdf( 0.5, 1.0, 1.0 ), 'returns expected value' );
	t.end();
});

tape( 'the distribution prototype has a method for evaluating the probability density function (PDF)', function test( t ) {
	var f;
	var y;

	t.strictEqual( hasOwnProp( F.prototype, 'pdf' ), true, 'has property' );
	t.strictEqual( isFunction( F.prototype.pdf ), true, 'has method' );

	f = new F();
	y = f.pdf( 0.2 );

	t.strictEqual( y, pdf( 0.2, 1.0, 1.0 ), 'returns expected value' );
	t.end();
});

tape( 'the distribution prototype has a method for evaluating the quantile function', function test( t ) {
	var f;
	var y;

	t.strictEqual( hasOwnProp( F.prototype, 'quantile' ), true, 'has property' );
	t.strictEqual( isFunction( F.prototype.quantile ), true, 'has method' );

	f = new F();
	y = f.quantile( 0.8 );

	t.strictEqual( y, quantile( 0.8, 1.0, 1.0 ), 'returns expected value' );
	t.end();
});
