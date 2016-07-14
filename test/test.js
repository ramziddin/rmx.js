/* ========= Modules ========= */

var chai = require('chai');
var jsdom = require('jsdom');
var fs = require('fs');

/* ========= Config ========= */

/**
 * Importing Rmx enteties.
 */

var utils = require('../dist/out/utils');
var Rmx = require('../dist/out/rmxclass');

/**
 * Defining expect and assert.
 */

var expect = chai.expect;
var assert = chai.assert;

/**
 * Configuring DOM setting it on
 * test html file called "test.html".
 * Executing a window object out of
 * initialized DOM.
 */

var document = jsdom.jsdom(fs.readFileSync(__dirname + '/test.html', 'utf8'));
var window = document.defaultView;

/**
 * Defining and configuring Rmx in
 * context of DOM. Using a function
 * constructor to make a wrapper around
 * Rmx to install it on DOM. It is made
 * only to make it work with jsDOM. 
 */

new Function('document, window', fs.readFileSync(__dirname + '/../dist/rmx.js', 'utf8'))(document, window);
var Rmx = window.Rmx.Rmx;
var $ = window.Rmx.$;

/* ========= Test ========= */

/* === Utils Test === */

describe('Utils', function () {
	/**
	 * Expecting .toString always return
	 * a string containing a type of object
	 * accepted by it.
	 */

	it('.toString', function () {
		expect(utils.toString.call('a string')).to.equal('[object String]');
		expect(utils.toString.call(123)).to.equal('[object Number]');
	});

	/**
	 * Expecting .isArray returns true
	 * only on array objects.
	 */

	it('.isArray', function () {
		expect(utils.isArray([1, 2, 3])).to.be.true;
		expect(utils.isArray(123)).to.be.false;
	});

	/**
	 * A "sliced" version of .toString which
	 * removes the "[object" and "]" parts.
	 * Ecepting .fullTypeOf to return a string
	 * containing a type of object accepted by it.
	 */

	it('.fullTypeOf', function () {
		expect(utils.fullTypeOf('a string')).to.equal('String');
		expect(utils.fullTypeOf(123)).to.equal('Number');
	});

	/**
	 * Clone of typeof keyword with an exception
	 * of being able recognize array object.
	 * Expecting
	 */

	it('.typeOf', function () {
		expect(utils.typeOf({ a: 1, b: 2, c: 3 })).to.equal('object');
		expect(utils.typeOf([1, 2, 3])).to.equal('array');
	});

	/**
	 * Expecting .logger to return a string and a modified
	 * version of its instance.
	 */

	it('.logger', function () {
		var logger1 = utils.logger('logger1');
		var logger2 = logger1.new('logger2');
		var logger3 = logger2.new('logger3');

		expect(logger1.module).to.equal('logger1');
		expect(logger2.module).to.equal('logger1 -> logger2');
		expect(logger3.module).to.equal('logger1 -> logger2 -> logger3');
	});

	/**
	 * Expecting to get a correct answer if .forEach
	 * works as expected.
	 * For each passes any type of element and a number
	 * as an index.
	 */

	it('.forEach', function () {
		var result = 0;
		utils.forEach([10, 20, 30, 40, 50], function (element, index) {
			if (index % 2 === 0) result += element;
		});

		expect(result).to.equal(90);
	});

	/**
	 * Checking .extend recursion and its overwrite
	 * mode. Expecting objects to be processed correctly.
	 */

	it('.extend', function () {
		var object1 = { 'a': 2, 'dsa': 'asd', 'obj': { 'true_object': true } };
		var object2 = { 'a': 1, 'asd': 'dsa', 'obj': 123 };
		expect(utils.extend(object1, object2, false, false)).to.deep.equal({ 'a': 1, 'dsa': 'asd', 'obj': 123, 'asd': 'dsa' });
		expect(utils.extend(object1, object2, true, false)).to.deep.equal({ 'a': 2, 'dsa': 'asd', 'obj': { 'true_object': true }, 'asd': 'dsa' });
	});

	/**
	 * Expected to get a correct value using pointer.
	 */

	it('.executePointer', function () {
		expect(utils.executePointer('x.y.z', { 'x': { 'y': { 'z': 10 } } })).to.equal(10);
	});

	/**
	 * Expected to write a value to a correct location.
	 */

	it('.writePointer', function () {
		expect(utils.writePointer('x.y.z', { 'x': { 'y': {  } } }, 10)).to.deep.equal({ 'x': { 'y': { 'z': 10 } } });
	});
});

/* === Rmx Test === */

describe('Rmx', function () {
	/**
	 * A simple test on checking
	 * Rmx and $ to be functions.
	 */

	it('Rmx Export (window)', function () {
		expect(Rmx).to.be.a('function');
		expect($).to.be.a('function');
	});

	/**
	 * Expecting to work correctly.
	 * Testing instanced properties.
	 */

	it('constructor', function () {
		var RmxElement = new Rmx('body');
		var $element = $('body');

		expect(RmxElement).to.deep.equal($element);

		expect(RmxElement).to.have.a.property('selector')
			.and.to.be.an('array')
			.and.to.have.lengthOf(1);
		expect(RmxElement).to.have.a.property('dataStorage')
			.and.to.be.an('object');
	});

	/**
	 * Test on .extend static method.
	 * Test on safe and unsafe methods.
	 */

	it('.extend', function () {
		Rmx.extend({
			name: 'TestExtension',
			core ($) {
				$.return = $.arguments['0'];
			}
		});

		Rmx.extend({
			name: 'testExtension',
			core ($) {
				if ($.return) {
					$.return = $.arguments['0'];
				}
			}
		});

		expect(new Rmx().TestExtension(123)).to.equal(123);
		expect(new Rmx().testExtension(123)).to.be.an('object');
	});

	/**
	 * Test on .data static method
	 * and dataStorage global object.
	 */

	it('.data', function () {
		Rmx.data('developer', { 'name': 'Ramziddin', age: 15 });
		Rmx.data('x.y.z', 123);

		expect(Rmx.data('developer.name')).to.equal('Ramziddin');
		expect(new Rmx().dataStorage.developer.age).to.equal(15);
		expect(Rmx.data().x.y.z).to.equal(123);
		expect(Rmx.data('x.y.z')).to.equal(123);
	});

	/**
	 * Test .create static method.
	 * Expected to return an instance of
	 * Rmx with a new element.
	 */

	it('.create', function () {
		assert(Rmx.create('h2').selector[0].isEqualNode(document.createElement('h2')));
	});

	/**
	 * Creating a chain to test
	 * local data storage.
	 */

	var chain = new Rmx('li');
	
	/**
	 * .data instance method expected to be
	 * the behave simillary to static .data method, with
	 * an exception to local data storage (which is extended by global
	 * data storage) and with an exception
	 * to write only functionallity.
	 */

	it('#data', function () {
		chain.data('developer', { 'name': 'Ramziddin', age: 15 });

		expect(chain.dataStorage.developer.age).to.equal(15);
	});

	/**
	 * .data instance method expected to be
	 * the behave simillary to static .data method, with
	 * an exception to local data storage (which is extended by global
	 * data storage) and with an exception
	 * to read only functionallity.
	 */

	it('#Data', function () {
		expect(chain.Data('developer.age')).to.equal(15);
	});

	/**
	 * Test by checking each element inner html.
	 * Passes any type of element and a number
	 * as an index to callback.
	 */

	it('#each', function () {
		new Rmx('li').each(function (element, index) {
			expect(element.innerHTML).to.equal('' + (index + 1));
		});
	});

	/**
	 * Test on selecting an element out of
	 * selector array based on given number.
	 */

	it('#in', function () {
		var selector = new Rmx('li').in(0).selector;
		expect(selector).to.have.a.lengthOf(1);
	});

	/**
	 * Test on setting inner html of each
	 * element in selector array.
	 */

	it('#html', function () {
		var selector = new Rmx('li').html('Hello, World');
		selector.each(function (element, index) {
			expect(element.innerHTML).to.equal('Hello, World');
		});
	});

	/**
	 * Expecting to get a correct inner html of an
	 * element.
	 */

	it('#Html', function () {
		expect(new Rmx('li').Html('Hello, World')).to.equal('Hello, World');
	});

	/**
	 * Setting and testing a value propertie on an element.
	 */

	it('#val', function () {
		expect(new Rmx('input').val('Hello, World').selector[0].value).to.equal('Hello, World');
	});

	/**
	 * Getting a setted value and testing method.
	 */

	it('#Val', function () {
		expect(new Rmx('input').Val()).to.equal('Hello, World');
	});

	/**
	 * Adding a class to an element and testing result.
	 */

	it('#addClass', function () {
		expect(new Rmx('input').addClass('textbox color-blue').selector[0].className).to.equal('textbox color-blue');
	});

	/**
	 * Toggling a class and testing an element.
	 */

	it('#toggleClass', function () {
		expect(new Rmx('input').toggleClass('textbox color-blue').selector[0].className).to.equal('');
		expect(new Rmx('input').toggleClass('textbox color-blue').selector[0].className).to.equal('textbox color-blue');
	});

	/**
	 * Removing a class and testing for class existence.
	 */

	it('#removeClass', function () {
		expect(new Rmx('input').removeClass('textbox color-blue').selector[0].className).to.equal('');
	});

	/**
	 * Setting and testing attribute on element using
	 * an Object and a String.
	 */

	it('#attr', function () {
		expect(new Rmx('input').attr('placeholder', 'rmx').selector[0].getAttribute('placeholder')).to.equal('rmx');
		expect(new Rmx('input').attr({ 'name': 'library' }).selector[0].getAttribute('name')).to.equal('library');
	});

	/**
	 * Getting and testing an attribute value.
	 */

	it('#Attr', function () {
		expect(new Rmx('input').Attr('placeholder')).to.equal('rmx');
	});

	/**
	 * Removing an attribute using a String and an Array
	 * and checking for attribute existence.
	 */

	it('#removeAttr', function () {
		expect(new Rmx('input').removeAttr('placeholder').selector[0].getAttribute('placeholder')).to.equal(null);
		expect(new Rmx('input').removeAttr([ 'name' ]).selector[0].getAttribute('name')).to.equal(null);
	});

	/**
	 * Testing css using a String and an Object.
	 */

	it('#css', function () {
		expect(new Rmx('input').css('display', 'block').selector[0].style.display).to.equal('block');
		expect(new Rmx('input').css({ 'color': 'red' }).selector[0].style.color).to.equal('red');
	});

	/**
	 * Getting and testing css propertie.
	 */

	it('#Css', function () {
		expect(new Rmx('input').Css('color')).to.equal('red');
	});

	/**
	 * Testing selector array on emptiness.
	 */

	it('#Null', function () {
		expect(new Rmx('input').Null()).to.be.false;
	});

	/**
	 * Removing an element and checking selector.
	 */

	it('#remove', function () {
		expect(new Rmx('input').remove().selector).to.have.lengthOf(0);
	});

	/**
	 * Appending an HTMLElement and checking if it
	 * works correctly.
	 */

	it('#append', function () {
		var element = document.createElement('li');
		element.innerHTML = '4';
		expect(new Rmx('ul').append(element).selector[0].childElementCount).to.equal(4);
		expect(new Rmx('ul').selector[0].children[3].innerHTML).to.equal('4');
	});

	/**
	 * Prepending an HTMLElement and checking if it
	 * works correctly.
	 */

	it('#prepend', function () {
		var element = document.createElement('li');
		element.innerHTML = '0';
		expect(new Rmx('ul').prepend(element).selector[0].childElementCount).to.equal(5);
		expect(new Rmx('ul').selector[0].children[0].innerHTML).to.equal('0');
	});

	/**
	 * A variable used for testing event handling.
	 */

	var count = 0;

	/**
	 * Testing event handling by incrementing
	 * a counter and checking the result.
	 */

	it('#on', function () {
		var event = new window.Event('click');
		new Rmx('li').on('click', function (event) {
			count++;
		});
		new Rmx('li').selector[0].dispatchEvent(event);
		expect(count).to.equal(1);
		expect(new Rmx('li').Data('events.click')).to.be.a('function');
	});

	/**
	 * Triggering an event and testing counter.
	 */

	it('#trigger', function () {
		new Rmx('li').in(0).trigger('click');
		expect(count).to.equal(2);
	});

	/**
	 * Removing an event and looking
	 * at data storage.
	 */

	it('#off', function () {
		new Rmx('li').off('click');
		expect(new Rmx('li').Data('events.click')).to.be.a('undefined');
	});

	/**
	 * Testing an element to be and to be not equal
	 * to given pattern.
	 */

	it('#Is', function () {
		new Rmx('li').in(0).addClass('class-name');
		expect(new Rmx('li').in(0).Is('li.class-name')).to.be.true;
		expect(new Rmx('li').in(0).Is('div.class-name')).to.be.false;
	});

	/**
	 * Filtering and testing elements.
	 */

	it('#filter', function () {
		expect(new Rmx('li').filter('.class-name').selector).to.have.lengthOf(1);
	});

	/**
	 * Fading in and checking for element's visibility.
	 */

	it('#fadeIn', function () {
		new Rmx('.fade').fadeIn(500, function () {
			expect(new Rmx('.fade').selector[0].style.display).to.equal('');
		});
	});

	/**
	 * Fadeing out and checking for element's visibility.
	 */

	it('#fadeOut', function () {
		new Rmx('.fade').fadeOut(500, function () {
			expect(new Rmx('.fade').selector[0].style.display).to.equal('none');
		});
	});

	/**
	 * Scroll top = 0 by default.
	 */

	it('#ScrollTop', function () {
		console.log(new Rmx(window).ScrollTop());
		expect(new Rmx(window).ScrollTop()).to.equal(0);
	});
});
