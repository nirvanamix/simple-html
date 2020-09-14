jQuery(document).ready(function($) {


	if($('.owl-cart').length > 0){
		$('.owl-cart').owlCarousel({
			loop:true,
			margin:20,
			nav:true,
			responsive:{
				0:{
					items:1.5,
					margin:10,
					center: true,
				},
				599:{
					items:1.5,
					margin:10,
					center: true,
				},
				993:{
					items:3,
					margin:20,
				}
			}
		});
	}
	if($('.owl-reviews').length > 0){
		$('.owl-reviews').owlCarousel({
			loop:true,
			margin:20,
			nav:true,
			items:1
		});
	}
	if($('.owl-country').length > 0){
		$('.owl-country').owlCarousel({
			loop:true,
			margin:20,
			nav:true,
			autoWidth:true,
			autoplay: true,
			autoplayTimeout: 2000,
			smartSpeed: 500,
		});
	}
	if($('.owl-help-video').length > 0){
		$('.owl-help-video').owlCarousel({
			loop:true,
			margin:20,
			nav:true,
			items:1
		});
	}
	if($('.owl-play').length > 0){
		$('.owl-play').owlCarousel({
			loop:true,
			margin:20,
			nav:true,
			responsive:{
				0:{
					items:1.5,
					margin:10,
					center: true,
				},
				599:{
					items:1.5,
					margin:10,
					center: true,
				},
				993:{
					items:3,
					margin:60,
				}
			}
		});
	}
	if($('.owl-worksheets').length > 0){
		$('.owl-worksheets').owlCarousel({
			loop:true,
			margin:20,
			nav:true,
			items:1
		});
	}
	if($('.social-owl').length > 0){
		$('.social-owl').owlCarousel({
			loop:true,
			margin:20,
			nav:true,
			responsive:{
				0:{
					items:1.5,
					margin:10,
					center: true,
				},
				599:{
					items:1.5,
					margin:10,
					center: true,
				},
				993:{
					items:3,
					margin:20,
				}
			}
		});
	}
	if($('.owl-method').length > 0){
		$('.owl-method').owlCarousel({
			loop:true,
			margin:20,
			nav:true,
			items:1,
			autoHeight:true
		});
	}
	if($('.owl-logos').length > 0){
		$('.owl-logos').owlCarousel({
			loop:true,
			margin:40,
			nav:true,
			autoWidth:true,
			autoplay: true,
			autoplayTimeout: 2000,
			smartSpeed: 500,
			margin:20,
		});
	}
	if($('.owl-blockquote').length > 0){
		$('.owl-blockquote').owlCarousel({
			loop:true,
			margin:20,
			nav:true,
			items:1,
			autoHeight:true
		});
	}
	if($('.owl-section').length > 0){
		$('.owl-section').owlCarousel({
			loop:true,
			margin:20,
			nav:true,
			items:1,
			autoHeight:true,
		});
	}

	if($('.owl-single-img').length > 0){
		$('.owl-single-img').owlCarousel({
			loop:true,
			margin:20,
			nav:true,
			items:1,
			autoHeight:true,
		});
	}













	/*-------------text for nav owl carusel-------------*/
	$('.nav-with-text').each(function(index, el) {
		$(this).find('.owl-next span').prepend($(this).attr('data-nav-text'));
	});
});