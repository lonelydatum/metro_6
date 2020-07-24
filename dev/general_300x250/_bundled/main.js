(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
	value: true
});
var banner = document.getElementById('banner');
var size = { w: banner.offsetWidth, h: banner.offsetHeight };

TweenLite.defaultEase = Power2.easeInOut;

function rand(min, max) {
	var diff = max - min;
	return Math.random() * diff + min;
}

exports.size = size;
exports.rand = rand;

},{}],2:[function(require,module,exports){
"use strict";

var _commonJsCommonJs = require('../../_common/js/common.js');

function elements(list) {
	var tl = new TimelineMax();

	tl.from(".a_0", .8, { x: -250, opacity: .2 }, 0);
	list.map(function (item, index) {

		tl.from(item, index * .08 + .1, { x: -190, y: "+=" + (0, _commonJsCommonJs.rand)(20, 40), ease: Power3.easeOut }, 0.3);
	});
}

function start() {
	TweenLite.defaultEase = Power3.easeInOut;
	var tl = new TimelineMax();
	tl.set(".frame1", { opacity: 1 });

	var list = [".a_1", ".a_2", ".a_3", ".a_4", ".a_5", ".a_6", ".a_7", ".a_8", ".a_9"];

	elements(list);

	tl.from(".t1_a", .01, { opacity: 0 }, "+=.8");
	tl.from([".t1_b", ".t1_c"], .01, { opacity: 0 }, "+=.7");

	tl.add("f2", 3.3);
	tl.to(".frame1", .3, { opacity: 0 }, "f2");
	tl.set(".frame2", { opacity: 1 }, "f2");

	tl.add("phone_move");
	tl.from('.phone', .4, { y: "+=100", ease: Power3.easeOut }, "phone_move");
	tl.from('.illust', .3, { scale: 0 }, "phone_move+=.3");

	tl.from(['.t2', '.legal'], .01, { opacity: 0 }, "+=.3");
	tl.from('.cta', .1, { opacity: 0 }, "+=1.4");
	tl.to('.cta', .2, { opacity: 0 }, "+=2.6");
	tl.from('.cta2', .3, { opacity: 0 });

	// tl.from('.legal', .3, {opacity:0}, "+=.1")

	// tl.gotoAndPlay("f2")
}

// batter()

start();

module.exports = {};

},{"../../_common/js/common.js":1}]},{},[2])


//# sourceMappingURL=main.js.map
