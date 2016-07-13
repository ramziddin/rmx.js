Rmx.js — a small JavaScript library.
==================================================

![Rmx.js Logotype](http://s32.postimg.org/xx72cgtpx/zky_Vr_Vw_Vtp_Aoam_0_FKk1a0_Ll_Ji_WOozzte_J1p_Nx_Xrz_QPUE7n.png)

Rmx.js is a small jQuery like library.

What is the difference between jQuery and Rmx.js?
Rmx.js is smaller and faster, it is easily extendable.

Rmx.js is in very early version right now! Please do not use it in production!

## Building

Requirements:
  * Node.js - http://nodejs.org/
  * Gulp - http://gulpjs.com/ ( Globally installed )

Building Steps:
  * Clone a copy of Rmx.js git repo: `git clone git://github.com/ramziddin/rmx.js.git`
  * Enter the `rmx.js` directory: `cd rmx.js`
  * Install dependencies: `npm install`
  * Run gulp: `gulp`

The minified version of Rmx.js will be located in the `dist/` directory.

Documentation
=============

Rmx exports `Rmx class` and `$` shorthand for constructing `Rmx class`.

## Rmx Class

### constructor(selector: String | HTMLElement | NodeList | Rmx Instance)

#### Arguments

  * selector - fetched and saved in `selector` property.

#### Description

Constructs an object with two properties ( `selector` and `dataStorage` ).
`selector` is used heavily by the whole Rmx.
While `dataStorage` is used for configuring and saving data in Rmx.

#### Example

```
let { Rmx, $ } = Rmx;

new Rmx('header');
$('header');
```

Both `new Rmx` and `$` are equivalent.

## Static Methods

### Rmx.extend(options: { name: String, core: ($: Object) => void })

#### Arguments

  * options - it's an object that explains a method.

#### Description

`Rmx.extend` is used for saving methods on `Rmx` prototype - but in Rmx's legal way.
The `name` and `core` properties are the main parts of any Rmx method.

`name` property could start from a upper case or lower case letter.
If a method `name` starts from a lower case letter it continues the chain ( returns `this` ).
If a method `name` starts from an upper case letter, then it is returns anything that will break the chain ( doesn't return `this` ). An example
 of first element in `selector`. If you've noticed, the core actually doesn't return anything, that's because returning value works over `$.return`. `$` is an object of utilities for creating method which you can read about down below.

`core` property is a function where all the logic of the method is located. It accepts `$` argument, an object with helpers to create a method. `$` also has a return property which keeps a value that will be returned from a method. `$` has couple of useful functions and properties. `$` is just a `rmxutilities` module.

#### Example

```
Rmx.extend({
  name: 'testMethod',
  core: function ($) {
    $.return = 'Hello World';
  }
});
```

First example can't return any value. That is caused because first letter of method's name starts from lower case letter.

```
Rmx.extend({
  name: 'TestMethod',
  core: function () {
    $.return = 'Hello World';
  }
});
```

Second example returns `'Hello World'` instead of continuing the chain.

### Rmx.data(target: Object | String, [value], [options: Object]) => any

#### Arguments

  * target - a string poninter ( `x.y.z` ) to write value to. `target` could be an object and represent a value.
  * value - data that is written to `target`.
  * options - options for writing data. Options `overwrite` - by default is `true`. If you don't want already existing properties to be overwritten, set `overwrite` to `false`.

#### Description

Writes data globally. Can read or write data.

#### Example
```
Rmx.data();
Rmx.data('x.y.z');
```

`Rmx.data()` returns the whole `dataStorage` object.
`Rmx.data('x.y.z')` returns `z` element inside of `y` object, which is located inside of `x` object.

An example of writing data:
```
Rmx.data('');
```

### Rmx.create(selector: String) => Rmx Instance

#### Arguments

  * selector - accepts should be a string.

#### Description

This static method just creates a new element and passes it over to Rmx.

#### Example
```
Rmx.create('h1').html('Hello, World');
```

## Methods

### data(target: Object | String, [value], [options: Object]) => Rmx Instance

#### Arguments

  * target - a string pointer ( `x.y.z` ) to write value to. `target` could be an object and represent a value.
  * value - data that is written to `target`.
  * options - options for writing data. Options `overwrite` - by default is `true`. If you don't want already existing properties to be overwritten, set `overwrite` to `false`.

#### Description

Writes data locally.
The differences are:
  * works with local `dataStorage` ( which means `dataStorage` exists while Rmx Instance or chain is "alive" ).
  * writes data only.

#### Example
```
Rmx.data();
Rmx.data('x.y.z');
```

`Rmx.data()` returns the whole `dataStorage` object.
`Rmx.data('x.y.z')` returns `z` element inside of `y` object, which is located inside of `x` object.

An example of writing data:
```
Rmx.data('');
```

### Data(target: String) => any

#### Arguments

  * target - a string pointer ( `x.y.z` ) to get value from local `dataStorage`.

#### Description

Writes data locally.
The differences are:
  * works with local `dataStorage` ( which means `dataStorage` exists while Rmx Instance or chain is "alive" ).
  * writes data only.

#### Example
```
Rmx.data();
Rmx.data('x.y.z');
```

`Rmx.data()` returns the whole `dataStorage` object.
`Rmx.data('x.y.z')` returns `z` element inside of `y` object, which is located inside of `x` object.

### each(handler: (element: HTMLELement, index: Number) => void) => Rmx Instance

#### Arguments

  * handler - a function that handles the loop with two arguments: `element` and `index`.

#### Description

Loops over the `selector` and sends current `element` and `index` to `handler`.

#### Example
```
$('li').each(function (element, index) {
  console.log($(element).Html());
});
```

### in(in: Number) => Rmx Instance

#### Arguments

  * in - index number of element in selector.

#### Description

Chooses an element from selector using `in` argument.

#### Example
```
$('li').in(0).html('Hello, World');
```

### html(html: String) => Rmx Instance

#### Arguments

  * html - a string to be written into `element`'s `innerHTML`'.

#### Description

Writes `html` into `innerHTML` of every element in `selector`.

#### Example
```
$('li').html('Hello, World');
```

### Html() => String

#### Arguments

  no arguments

#### Description

Returns an `innerHTML` of first element in `selector`.

#### Example
```
$('li').each(function (element) {
  console.log($(element).Html());
});
```

### val(value: String) => Rmx Instance

#### Arguments

  * value - a value set to `value` property of elements.

#### Description

Sets `value` to every `element` in `selector`.

#### Example
```
$('input').val('Rmx.js');
```

### Val() => String

#### Arguments

  no arguments

#### Description

Returns `value` property of first element in `selector`.

#### Example
```
$('input').each(function (element) {
  console.log($(element).Val());
});
```

### addClass(className: String) => Rmx Instance

#### Arguments

  * className - class name to be set to elements.

#### Description

Sets class to `element`s in `selector`.

#### Example
```
$('input').addClass('formcontrol');
```

### toggleClass(className: String) => Rmx Instance

#### Arguments

  * toggleClass - class name to be toggled on elements.

#### Description

Toggles class on `element`s in `selector`.

#### Example
```
$('input').toggleClass('formcontrol');
```


=======
### removeClass(className: String) => Rmx Instance

#### Arguments

  * className - class name to be removed from elements.

#### Description

Removes class from `element`s in `selector`.

#### Example
```
$('input').removeClass('formcontrol');
```

### attr(attrName: String | Object, [value]) => Rmx Instance

#### Arguments

  * attrName - could be a string representing a name of attribute or could be an object.

#### Description

Sets attribute(s) to elements in `selector`.

#### Example
First way:
```
$('input').attr('placeholder', 'Hello');
```
Second way:
```
$('input').attr({
  placeholder: 'World',
  name: 'rmxjs'
});
```

### Attr(attrName: String) => String

#### Arguments

  * attrName - name of the attribute to get value from.

#### Description

Gets `attrName` attribute from first `element` in `selector`.

#### Example
```
$('input').each(function (element) {
  console.log($(element).Attr('placeholder'));
});
```

### removeAttr(attrName: String) => String

#### Arguments

  * attrName - name of the attribute to be removed.

#### Description

Removes `attrName` attribute from all `element`s in `selector`.

#### Example
```
$('input').removeAttr('placeholder');
```

### css(ruleName: String | Object, [ruleValue]) => Rmx Instance

#### Arguments

  * ruleValue - a string - rule name. an object - collection of rule names and their values.

#### Description

Sets CSS rule(s) to every `element` in `selector`.

#### Example
First way:
```
$('input').css('color', 'red');
```
First way:
```
$('input').css({
  height: '50px',
  width: '50px'
});
```
### Css(ruleName: String) => String

#### Arguments

  * ruleName - name of the rule to be returned.

#### Description

Returns rule value of first `element` in `selector`.

#### Example
```
$('input').each(function (element) {
  $(element).Css('color');
});
```

### Null() => Boolean

#### Arguments

  no arguments

#### Description

Returns `true` if selector is empty, else `false`.

#### Example
```
$('input').Null();
```

### remove() => Rmx Instance

#### Arguments

  no arguments

#### Description

Removes every `element` in `selector`.

#### Example
```
$('input').remove().Null();
```
Returns `true`.

### append(...element: Rmx Instance) => Rmx Instance

#### Arguments

  element - a Rmx Instance that is going to be appended to `elements`.

#### Description

Appends Rmx Instance to every `element` in `selector`.

#### Example
```
$('li').append($.create('span').html('Hello'));
```

### prepend(...element: Rmx Instance) => Rmx Instance

#### Arguments

  element - a Rmx Instance that is going to be prepended to `elements`.

#### Description

Prepends Rmx Instance to every `element` in `selector`.

#### Example
```
$('li').prepend($.create('span').html('Hello'));
```

### on(eventName: String, callback: (event) => void) => Rmx Instance

#### Arguments

  eventName - event name to set callback to.
  callback - a function that accepts `event` object and gets called when event is emitted.

#### Description

Sets `callback` on `eventName` event on every `element` in `selector`.

#### Example
```
$('button').on('click', function (event) {
  console.log('Click');
});
```

### trigger(eventName: String) => Rmx Instance

#### Arguments

  eventName - event to be triggered on `element`s.

#### Description

Triggers an `eventName` event on every `element` in `selector`.

#### Example
```
$('button').trigger('click');
```

### off(eventName: String) => Rmx Instance

#### Arguments

  eventName - event to be removed from `element`s.

#### Description

Removes an `eventName` event on every `element` in `selector`.

#### Example
```
$('button').off('click');
```

### Is(pattern: String) => Boolean

#### Arguments

  pattern - pattern to be checked.

#### Description

Checks first `element` in `selector` with given `pattern`.

#### Example
```
$('button').Is('.btn[type="submit"]');
```

### filter(pattern: String) => Rmx Instance

#### Arguments

  pattern - pattern as a filter.

#### Description

Filters selector by checking `pattern` and `element` equality.

#### Example
```
$('button').filter('.btn-primary');
```

=======
## Creating Custom Methods

Creating custom methods is really easy!
You need to remember about method safety, function core and `rmxutilties`, names beginning with lower or capital case letter ( [Read Rmx.extend](https://github.com/ramziddin/rmx.js#rmxextendoptions--name-string-core--object--void-) ).

### core

`core` is a property in object that is accepted by `Rmx.extend`. `core` function accepts one argument, a `$` argument ( rmxutlities ) - it provides some tools for making creation of methods easier.

### rmxutilities

`$` an argument accepted by `core`. Let's take a look at `$`'s tools.

#### $.chain (Variable)

A reference to current Rmx instance ( or chain ). Chain/Instance is also acceptable through `this`.

Example:
```
Rmx.extend({
 name: 'exampleMethod',
 core: function ($) {
  $.chain.selector = [];
});

$('li').exampleMethod().Null();
```
Returns `true`.

#### $.forEach (Function)

Iterates through `selector` of current chain / Rmx Instance.
Accepts a `handler`. A `handler` accepts two arguments - `element` and `index`.

```
Rmx.extend({
name: 'exampleMethod', 
core: function ($) {
 $.forEach(function (element, index) {
  $(element).html(`List #${index}`);
 });
});

$('li').exampleMethod().in(0).Html();
```
Returns `"List 0"`;

#### $.arguments (Variable)

Arguments of method.

```
Rmx.extend({
 name: 'exampleMethod',
 core: function ($) {
  $.forEach(function (element, index) {
   $(element).html($.arguments[0]);
  });
 }
});

$('li').exampleMethod();
```

#### $.callback (Function)

If last argument of method is type of Function `$.callback` is created.

```
Rmx.extend({
 name: 'exampleMethod',
 core: function ($) {
  if ($.callback) {
   $.forEach(function (element, index) {
    $.callback($(element).Val());
   });
  }
 }
});

$('li').exampleMethod(function (value) {
 console.log(value);
});
```

#### $.typeOf (Function)

Accepts an object as argument and returns its type as a String.

```
Rmx.extend({
 name: 'exampleMethod',
 core: function ($) {
  console.log($.typeOf($.aruments[0]));
 }
});

$('li').exampleMethod(document.createElement('h2'));
```

#### $.when (Function)

Accepts an object as an argument that is going to be type checked.

```
Rmx.extend({
 name: 'exampleMethod',
 core: function ($) {
  $.when($.arguments[0], {
   isNumber () {
    $.forEach(function (element, index) {
     $(element).html($($.chain.selector[0]).Html().concat($.arguments[0]));
    });
   },
   isString () {
    $(element).html('A String');
   }
  });
 }
});

$('li').exampleMethod(123);
```

#### $.isNull (Function)

Checks if `$.chain.selector` is empty.

```
Rmx.extend({
 name: 'exampleMethod',
 core: function ($) {
  if (!$.isNull()) {
   $.forEach(function (element, index) {
    console.log(index);
   });
  }
});
```

#### $.is (Function)

Method returns boolean by checking element equality with given string CSS pattern.

```
Rmx.extend({
 name: 'ExampleMethod',
 core: function ($) {
  $.return = $.is($.chain.selector[0], 'li');
});
```


=======
#### $.return (Variable)

Method returns a value from `$.return` if method's name starts from upper case letter.

```
Rmx.extend({
 name: 'ExampleMethod',
 core: function ($) {
  $.return = $.isNull();
});
```

----------------------------------------

More methods and utilities coming soon!
========================================
