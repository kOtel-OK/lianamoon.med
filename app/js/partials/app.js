$(function () {
	let offsetHalf = Math.floor(document.documentElement.clientHeight / 2);
	let controller = new ScrollMagic.Controller();
	let tween1 = new TweenMax.to('.bl', 0.5, {
		opacity: '1'
	});

	let scene = new ScrollMagic.Scene({
		duration: 500,
		offset: 500,
		triggerHook: "onLeave",
		reverse: true
	})
		.setTween(tween1)
		.addIndicators();

	let scenePin = new ScrollMagic.Scene({
		triggerElement: ('.bl2'),
		reverse: true
	})
		.setPin('.bl2')
		.addIndicators();


	controller.addScene([scene, scenePin]);

});



