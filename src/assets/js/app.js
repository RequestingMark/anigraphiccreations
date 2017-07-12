$(document).foundation();

$('.about-menu__button').click(function() {
	$('.about').addClass('about--active');
	$('.about-menu__item').removeClass('about-menu__item--bottom');
	$(this).parent().addClass('about-menu__item--bottom');
});

/*$(document).on('open.zf.reveal', '[data-reveal]', function() {
  console.log('This works');
  var foo = new Foundation.Orbit($('.orbit'));
});*/