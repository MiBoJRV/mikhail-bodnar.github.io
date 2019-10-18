$(document).ready(function () {
    'use strict';
	$('.slick-slider').slick({
        dots: true
    });
    
	$('.team_slider').slick({
        dots: false,
        arrows: false,
		fade: true,
		cssEase: 'linear',
        asNavFor: '.slider__nav',
        slidesToShow: 1,
        slidesToScroll: 1,
        // infinite: false
    });

    $('.slider__nav').slick({
        // dots: false,
        arrows: true,
        asNavFor: '.team_slider',
        slidesToShow: 2,
        slidesToScroll: 1,
        // fade: true,
        // rtl: true,
        // focusOnSelect: true,
        // swipeToSlide: true
        // infinite: false
	});

    $('a[href^="#"]').click(function () {
		let target = $(this).attr('href');
		$('html, body').animate({
				scrollTop: $(target).offset().top
			},
			800
		);
	});

    $('.header__btn-menu').click(function () { // Открываем / Закрываем меню 
        $('.header__content_nav ul').slideToggle();
      });
    
      $(document).click(function(e) { // Кликаем по любому месту
        if(!$(e.target).closest('.header__content').length > 0) { // Проверяем если нажатый элемент не имеет родителя 'header__content'
          hideMenu(); // Закрываем Меню
    //лучше выбрать другого родителя
        }
      });
      
      $('.header__content_nav a').click(function() { // По нажатию по ссылке закрываем меню
        hideMenu(); // Закрываем Меню
      });
      
      function hideMenu() { // Функция - Закрывает меню
        $('.header__content_nav ul').slideUp();
      }

      function positionOval() {
        var scrollY = window.scrollY - 500 || window.pageYOffset;
        var maxScrollY = document.documentElement.scrollHeight - window.innerHeight;
        var path = document.getElementById("path1");
        // Calculate distance along the path the oval should be for the current scroll amount
        var pathLen = path.getTotalLength();
        var dist = pathLen * scrollY / maxScrollY *2;
        var pos = path.getPointAtLength(dist);
        // Calculate position a little ahead of the car (or behind if we are at the end), so we can calculate car angle
        if (dist + 1 <= pathLen) {
          var posAhead = path.getPointAtLength(dist + 1);
          var angle = Math.atan2(posAhead.y - pos.y, posAhead.x - pos.x);
        } else {
          var posBehind = path.getPointAtLength(dist - 1);
          var angle = Math.atan2(pos.y - posBehind.y, pos.x - posBehind.x);
        }
        // Position the oval at "pos" totated by "angle"
        var car = document.getElementById("oval");
        car.setAttribute("transform", "translate(" + pos.x + "," + pos.y + ") rotate(" + rad2deg(angle) + ")");
      }
      
      function rad2deg(rad) {
        return 180 * rad / Math.PI;
      }
      
      // Reposition car whenever there is a scroll event
      window.addEventListener("scroll", positionOval);
      
      // Position the car initially
      positionOval();

      

});

