//SLIDER
$(window).load(function() {
    "use strict";
    $('.group-box-sp').slick({
      slidesToShow: 5,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2000,
      responsive: [
             {
               breakpoint: 750,
               settings: {
                 slidesToShow: 2,
                 slidesToScroll: 2
                
               }
             },
           ]
    });
 
		
	
	
//	$('.group-gallery').slick({
//      slidesToShow: 1,
//      slidesToScroll: 1,
//		 dots: true,
//	  infinite: true,
//      autoplay: true,
//      autoplaySpeed: 2000,
//    });
//	
//	
	
	 $('.group-gallery').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  fade: true,
  asNavFor: '.nav-items'
});
$('.nav-items').slick({
  slidesToShow: 6,
  slidesToScroll: 1,
  asNavFor: '.group-gallery',
  dots: false,
  focusOnSelect: true,
	responsive: [
             {
               breakpoint: 750,
               settings: {
                 slidesToShow: 2,
                 slidesToScroll: 1
                
               }
             },
           ]
});
	
	
	
    $('.box-slider .inner-2').addClass('active');
    
      AOS.init({
        duration: 1000,
        dots: true,
        once: true,
    });

});