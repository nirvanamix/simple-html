"use strict";

;

(function ($) {
  // Настройки по замовчуванню
  var defaults = {// text_ex: 'Текст для прикладу',
    // class_ex: 'test_class'
  }; // Функція конструктор

  function Slaider(element, options) {
    this.config = $.extend({}, defaults, options);
    this.element = element;
    this.init();
  } // Тіло плагіна


  Slaider.prototype.init = function () {
    // this.element.addClass(this.config.class_ex);
    var th = this.element;
    th.append('<div class="nav"><button class="prev"><svg viewBox="0 0 13 22" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1.26641 10.3569L10.3573 1.26627C10.7123 0.911235 11.2879 0.911235 11.643 1.26633C11.9979 1.62136 11.9979 2.19693 11.6429 2.55196L3.19484 10.9998L11.643 19.4481C11.9979 19.8032 11.9979 20.3787 11.6429 20.7338C11.4654 20.9113 11.2328 21 11.0001 21C10.7674 21 10.5348 20.9113 10.3573 20.7337L1.26641 11.6426C1.09587 11.4721 1.00011 11.2409 1.00011 10.9998C1.00011 10.7587 1.09587 10.5274 1.26641 10.3569Z"/></svg></button><button class="next"><svg viewBox="0 0 13 22" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1.26641 10.3569L10.3573 1.26627C10.7123 0.911235 11.2879 0.911235 11.643 1.26633C11.9979 1.62136 11.9979 2.19693 11.6429 2.55196L3.19484 10.9998L11.643 19.4481C11.9979 19.8032 11.9979 20.3787 11.6429 20.7338C11.4654 20.9113 11.2328 21 11.0001 21C10.7674 21 10.5348 20.9113 10.3573 20.7337L1.26641 11.6426C1.09587 11.4721 1.00011 11.2409 1.00011 10.9998C1.00011 10.7587 1.09587 10.5274 1.26641 10.3569Z"/></svg></button></div>');
    var last_index = th.find('.items').last().index();
    th.find('.nav button').click(function (event) {
      if ($(this).hasClass('next')) {
        console.log($(this).parents('.slider-vertical').find('.items.active').index());

        if ($(this).parents('.slider-vertical').find('.items.active').index() == last_index) {
          $(this).parents('.slider-vertical').find('.slide-wr .items.active').fadeOut(500).removeClass('active');
          $(this).parents('.slider-vertical').find('.slide-wr .items').first().fadeIn(500).addClass('active');
        } else {
          $(this).parents('.slider-vertical').find('.slide-wr .items.active').fadeOut(500).removeClass('active').next('.items').fadeIn(500).addClass('active');
        }
      }

      if ($(this).hasClass('prev')) {
        if ($(this).parents('.slider-vertical').find('.items.active').index() == 0) {
          $(this).parents('.slider-vertical').find('.slide-wr .items.active').fadeOut(500).removeClass('active');
          $(this).parents('.slider-vertical').find('.slide-wr .items').last().fadeIn(500).addClass('active');
        } else {
          $(this).parents('.slider-vertical').find('.slide-wr .items.active').fadeOut(500).removeClass('active').prev('.items').fadeIn(500).addClass('active');
        }
      }
    });
  }; // Вивід плагіна


  $.fn.slaider = function (options) {
    new Slaider(this.first(), options);
    return this.first();
  };
})(jQuery);

jQuery(document).ready(function ($) {
  $(function () {
    $('.slider-vertical').slaider({});
  });
});