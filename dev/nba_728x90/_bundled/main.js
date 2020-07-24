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

function start() {
	TweenLite.defaultEase = Power3.easeInOut;
	var tl = new TimelineMax();
	tl.set(".frame1", { opacity: 1 });

	TweenLite.from(".player_shooter", 1.7, { x: "+=15", y: "+=3", ease: Power2.easeOut });
	TweenLite.from(".player_defender", 1.8, { x: "-=20", ease: Power3.easeOut });

	tl.from(".t1_a", .01, { opacity: 0 }, "+=.2");
	tl.from(".t1_b", .01, { opacity: 0 }, "+=.5");

	// tl.from(".hero_a", .6, {opacity:.8}, 0)

	tl.add("f2", 4);
	tl.to(".frame1", .3, { opacity: 0 }, "f2");
	tl.set(".frame2", { opacity: 1 }, "f2");

	tl.add("phone_move");
	tl.from('.phone', .3, { y: "+=100", ease: Power3.easeOut }, "phone_move");
	tl.from('.illust', .3, { scale: 0 }, "phone_move+=.3");

	tl.from(['.t2', '.legal'], .01, { opacity: 0 }, "+=.3");
	tl.from('.cta', .1, { opacity: 0 }, "+=1.4");
	tl.to('.cta', .2, { opacity: 0 }, "+=2.6");
	tl.from('.cta2', .3, { opacity: 0 });

	// tl.from('.legal', .3, {opacity:0}, "+=.1")

	// tl.gotoAndPlay("f2")
}

start();

module.exports = {};

},{"../../_common/js/common.js":1}]},{},[2])


//# sourceMappingURL=main.js.map
