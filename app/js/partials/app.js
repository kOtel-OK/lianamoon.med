$('.pushpin-demo-nav').each(function() {
	let $this = $(this);
	let $target = $('#' + $(this).attr('data-target'));
	$this.pushpin({
		top: $target.offset().top,
		bottom: $target.offset().top + $target.outerHeight() - $this.height()
	});
});