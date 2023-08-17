$(document).ready(function() {
    "use strict";

	$('.hamburger').click(function() {
		$(this).toggleClass('is-active');
		$('.main-nav').fadeToggle(100);
	});

	$('.main-nav a:not([href])').click(function() {
		var windowWidth = window.innerWidth ? window.innerWidth : $(window).width();
		if( windowWidth <= 750 ) {
			$(this).toggleClass('open');
			$(this).next().stop(1,0).slideToggle(400);
		} else {
			$(this).removeClass('open');
			$(this).next().removeAttr('style');
		}
	});
});

$(window).load(function() { 
    $('.under #top_info').addClass('active');
});


