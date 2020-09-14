"use strict";

jQuery(document).ready(function ($) {
  var modal_window = {
    fun: function fun() {
      $('body').on('click', '*[data-modal]:not(.modal-window)', function (event) {
        event.preventDefault();
        $('.modal-window').fadeOut(400).removeClass('active');
        var data_modal = $(this).attr('data-modal');
        $('.modal-window[data-modal="' + data_modal + '"]').fadeIn(400).addClass('active');
        $('html, body').addClass('overflow-body'); // open video

        if ($(this).attr('data-src-video') != undefined) $('video.video-for-modal').attr('src', $(this).attr('data-src-video')).trigger('play');
      });
      $('body').on('click', '.close', function (event) {
        $('.modal-window').fadeOut(400);
        $('.modal-window').removeClass('active');
        $('html, body').removeClass('overflow-body'); // close wideo

        if ($('video.video-for-modal').length > 0) {
          setTimeout(function () {
            $('video.video-for-modal').attr('src', '#');
          }, 500);
        }
      });
      jQuery(".modal-window").click(function (event) {
        if (jQuery(event.target).closest(".window").length) return;
        $('.modal-window').fadeOut(400).removeClass('active');
        $('html, body').removeClass('overflow-body'); // close wideo

        if ($('video.video-for-modal').length > 0) {
          setTimeout(function () {
            $('video.video-for-modal').attr('src', '#');
          }, 500);
        }

        event.stopPropagation();
      });
    }
  };
  modal_window.fun();
  var menu = {
    fun: function fun() {
      $('.mobile-menu').click(function (event) {
        $('.wrapper').toggleClass('active');
        $(this).toggleClass('active');
        $('body, html').toggleClass('overflow-mobile');
      });
      $('ul.nav-ul li').each(function (index, el) {
        if ($(this).find('ul').length > 0) {
          $(this).find('> a').after('<i class="caret-bottom"></i>');
        }
      });
      $('ul.nav-ul li i').click(function (event) {
        $(this).parent('li').toggleClass('active-mobile').find('ul').toggleClass('active-mobile');
      });
    }
  };
  menu.fun();
  var acardion = {
    fun: function fun() {
      $('.acardtion .top').click(function (event) {
        $(this).parents('.acardtion').find('.top').not($(this)).removeClass('active').parent('.item').removeClass('active').find('.bottom').slideUp(400);
        $(this).toggleClass('active').parent('.item').toggleClass('active').find('.bottom').slideToggle(400);
      });
    }
  };
  acardion.fun();
  var footer = {
    fun: function fun() {
      $('footer .title').click(function (event) {
        $('footer .title').not($(this)).removeClass('active').next('ul').removeClass('show-ul');
        $(this).toggleClass('active').next('ul').toggleClass('show-ul');
      });
    }
  };
  footer.fun();
  var tabs = {
    fun: function fun() {
      $('.tabs-swich .item').click(function (event) {
        $(this).parents('.tabs-swich').find('.item').removeClass('active');
        $(this).addClass('active');
        $(this).parents('.tabs-wrapper').find('.tabs-items').find('> .item').hide(0);
        $(this).parents('.tabs-wrapper').find('.tabs-items > .item').eq($(this).index()).show();
      });
    }
  };
  tabs.fun();
  var checkbox = {
    fun: function fun() {
      $('label.check-label').each(function (event) {
        if ($(this).find('input').prop('checked') == true) $(this).addClass('active');else $(this).removeClass('active');
      });
      $('label.check-label').click(function (event) {
        $('label.check-label').each(function (event) {
          if ($(this).find('input').prop('checked') == true) $(this).addClass('active');else $(this).removeClass('active');
        });
      });
    }
  };
  checkbox.fun();
  var auncor = {
    fun: function fun() {
      jQuery('a.auncor').click(function (event) {
        history.pushState({}, "", $(this).attr('href'));
        var target = $(this).attr('href').replace('/', '');
        var scroll_t = $(window).scrollTop();
        var height_header = 0;
        if ($(window).outerWidth() > 992) height_header = $('header').outerHeight();

        if (scroll_t <= 60) {
          $('html, body').stop(true, false).animate({
            scrollTop: $(target).offset().top - height_header
          }, 900);
        } else {
          $('html, body').stop(true, false).animate({
            scrollTop: $(target).offset().top - height_header
          }, 900);
        }

        return false;
      });
    }
  };
  auncor.fun();
  var header = {
    fun: function fun() {
      $(window).scroll(function (event) {
        $(this).scrollTop() > 200 ? $('header').addClass('active') : $('header').removeClass('active');
      });
    }
  };
  header.fun();
  var pay_plan = {
    fun: function fun() {
      var pay_fun = function pay_fun() {
        if ($('.check-label input').prop('checked') == true) {
          $('.upgrade-items .price, .upgrade-items .text-plan').addClass('monthly');
          $('.upgrade-items a[data-plan-period]').attr('data-plan-period', 'monthly');
        } else {
          $('.upgrade-items .price, .upgrade-items .text-plan').removeClass('monthly');
          $('.upgrade-items a[data-plan-period]').attr('data-plan-period', 'annual');
        }
      };

      pay_fun();
      $('.check-label').click(function (event) {
        pay_fun();
      });
    }
  };
  pay_plan.fun();
  var swich_scrapping = {
    fun: function fun() {
      var pay_fun = function pay_fun(th) {
        if (th.find('input').prop('checked') == true) {
          th.parent('.pay-check').find('span').removeClass('active');
          th.parent('.pay-check').find('span:last()').addClass('active');
          $('.has-swich[data-scrapping="2"]').addClass('active');
          $('.has-swich[data-scrapping="1"]').removeClass('active');
        } else {
          th.parent('.pay-check').find('span').removeClass('active');
          th.parent('.pay-check').find('span:first()').addClass('active');
          $('.has-swich[data-scrapping="1"]').addClass('active');
          $('.has-swich[data-scrapping="2"]').removeClass('active');
        }
      };

      pay_fun($('.pay-check .check-label'));
      $('.pay-check .check-label').click(function (event) {
        pay_fun($('.check-label'));
      });
      $('.pay-check span').click(function (event) {
        if ($(this).hasClass('active') == false) $('.pay-check .check-label input').trigger('click');
      });
    }
  };
  swich_scrapping.fun();
  var area_fixed_button = {
    fun: function fun() {
      $(window).scroll(function (event) {
        var scroll_top = parseInt($(this).scrollTop());
        var formula = $('.start-show-link').offset().top + $('.start-show-link').outerHeight() - $('header').outerHeight();
        var formula_stop = $('footer').offset().top - $(window).outerHeight();

        if (scroll_top >= formula) {
          $('.link-fixed-scroll').addClass('active');
          scroll_top >= formula_stop ? $('.link-fixed-scroll').removeClass('active') : $('.link-fixed-scroll').addClass('active');
        } else {
          $('.link-fixed-scroll').removeClass('active');
        }
      });
    }
  };
  if ($('.start-show-link').length > 0) area_fixed_button.fun();
  var form_parameters = {
    fun: function fun() {
      $('.serch-for-parameters .submit').click(function (event) {
        $('.serch-for-parameters').removeClass('has-demo');
        localStorage.setItem("form-paremeters", true);
      });
    }
  };
  form_parameters.fun();
});