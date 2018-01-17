'use strict';

$(function () {
	var offsetHalf = Math.floor(document.documentElement.clientHeight / 2);
	var controller = new ScrollMagic.Controller();
	var tween1 = new TweenMax.to('.bl', 0.5, {
		opacity: '1'
	});

	var scene = new ScrollMagic.Scene({
		duration: 500,
		offset: 500,
		triggerHook: "onLeave",
		reverse: true
	}).setTween(tween1).addIndicators();

	var scenePin = new ScrollMagic.Scene({
		triggerElement: '.bl2',
		reverse: true
	}).setPin('.bl2').addIndicators();

	controller.addScene([scene, scenePin]);
});