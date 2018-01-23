document.addEventListener('DOMContentLoaded', function () {
	const mainTitle = document.querySelector('.main_title'),
				mainTitleBack = document.querySelector('.main_title_back'),
				mainTitleWrap = document.querySelector('.main_title_wrap'),
				mainScreenGrass = document.querySelector('.main_screen_grass img'),
				mainScreenWoman = document.querySelector('.main_screen_woman img');


	const mainTitleSplit = new SplitText(mainTitle);

	function setupMainScreenAnimation() {
		const animate = new TimelineMax();

		animate.set(mainTitleBack, {
			height: '1px',
			width: '1px'
		})
			.set(mainScreenGrass, {
				y: 162
			})
			.set(mainScreenWoman, {
				x: -448
			});

		return animate;
	}

	function animateMainTitle() {
		const animate = new TimelineMax();

		animate.staggerFrom(mainTitleSplit.chars, 0.6, {
				scale:8,
				autoAlpha:0,
				rotationY: -180,
				rotationX: -180,
				ease:Back.easeOut}, 0.02);

		return animate;
	}

	function animateMainTitleBack() {
		const animate = new TimelineMax();

		animate.to(mainTitleBack, 0.5, {
				backgroundColor: 'rgba(255, 255, 255, 0.8)',
				width: '80%'
			}, '+=0.05')
			.to(mainTitleBack, 0.5, {
				height: '40px'
			})
			.to(mainTitleBack, 0.5, {
				y: -20
			}, '-=0.5');

		return animate;
	}

	function animateMeditation() {
		const animate = new TimelineMax();

		animate.to(mainScreenGrass, 1, {
			autoAlpha: 1,
			y: 0,
			ease: Power2.easeOut
		})
			.to(mainScreenGrass, 4, {
				x: 20,
				repeat: -1,
				repeatDelay: 1,
				yoyo: true
			})
			.to(mainScreenWoman, 1, {
				x: 0,
				ease: Power2.easeOut
			}, '-=5');

		return animate;
	}

	function mainTitleToNav() {
		let controller = new ScrollMagic.Controller(),
				scene = new ScrollMagic.Scene({
					duration: 300,
					triggerElement: mainTitleWrap
				})
					.setPin(mainTitleWrap)
					.addIndicators();

		controller.addScene(scene);

	}

	const master = new TimelineMax();

	master.add(setupMainScreenAnimation())
	      .add(animateMainTitleBack())
				.add(animateMainTitle())
				.add(animateMeditation());

	// mainTitleToNav();

});






