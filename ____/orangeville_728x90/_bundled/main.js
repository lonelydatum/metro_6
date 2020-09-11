(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";

function start() {
	TweenLite.defaultEase = Power2.easeOut;
	var tl = new TimelineMax({ repeat: 1, repeatDelay: 2 });
	var read = "+=1";
	var time = .5;
	tl.to(".frame1", .5, { opacity: 1 });

	tl.from(".t1a", time, { opacity: 0 });
	tl.to(".t1a", time * .7, { opacity: 0 }, read);

	tl.from(".t1b", time, { opacity: 0 });
	tl.to(".t1b", time * .7, { opacity: 0 }, read);

	tl.from(".t1c", time, { opacity: 0 });
	tl.to(".t1c", time * .7, { opacity: 0 }, read);

	tl.from(".t1d", time, { opacity: 0 });
	// tl.to(".t1d", time*.7, {opacity:0}, read)

	tl.to(".frame1", time * .7, { opacity: 0 }, read);
	tl.to(".frame2", time, { opacity: 1 });
	// tl.to(".end", .7, {opacity:0}, read)
}

start();

module.exports = {};

},{}]},{},[1])


//# sourceMappingURL=main.js.map
