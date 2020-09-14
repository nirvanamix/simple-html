;(function($) {

// Настройки по замовчуванню
	var defaults = {
		text_ex: 'Текст для прикладу',
		class_ex: 'test_class'
	};

	// Функція конструктор
	function Slaider(element, options){
		this.config = $.extend({}, defaults, options);
		this.element = element;
		this.init();
	}

	// Тіло плагіна
	Slaider.prototype.init = function(){
		this.element.find('p').text(this.config.text_ex);
		this.element.addClass(this.config.class_ex);

		var th_el = this.element;

		th_el.wrapInner('<div class="wrapper-slider"></div>');
		th_el.append('<div class="nav-slider"><button class="prev"></button><button class="next"></button></div>');
		th_el.find('.wrapper-slider').fadeIn(400);
		th_el.find('.wrapper-slider > .item').eq(0).addClass('active');
		var last_index = th_el.find('.wrapper-slider > .item').last().index();




		$('.nav-slider button').click(function(event) {
			if($(this).hasClass('prev') == true){
				if(last_index > th_el.find('.wrapper-slider > .active').index()){
					th_el.find('.wrapper-slider > .active').next('.item').addClass('active');
					th_el.find('.wrapper-slider > .active').first().removeClass('active');
				}
				else{
					th_el.find('.wrapper-slider > .active').last().removeClass('active');
					th_el.find('.wrapper-slider > *').first().addClass('active');
				}






			}




		});



	}

	// Вивід плагіна
	$.fn.slaider = function(options){
		new Slaider(this.first(), options);
		return this.first()
	};
}(jQuery));




$(function (){
	$('.section-carusel').slaider({
		text_ex: 'Текст для прикладу 2'
	});
})

