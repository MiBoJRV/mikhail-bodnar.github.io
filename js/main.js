'use strict';
function initMap() {
	var la, ny, bo, de;
	var stylesAll = [{
			"elementType": "geometry",
			"stylers": [{
				"color": "#f5f5f5"
			}]
		},
		{
			"elementType": "labels.icon",
			"stylers": [{
				"visibility": "off"
			}]
		},
		{
			"elementType": "labels.text.fill",
			"stylers": [{
				"color": "#616161"
			}]
		},
		{
			"elementType": "labels.text.stroke",
			"stylers": [{
				"color": "#f5f5f5"
			}]
		},
		{
			"featureType": "administrative.land_parcel",
			"elementType": "labels.text.fill",
			"stylers": [{
				"color": "#bdbdbd"
			}]
		},
		{
			"featureType": "poi",
			"elementType": "geometry",
			"stylers": [{
				"color": "#eeeeee"
			}]
		},
		{
			"featureType": "poi",
			"elementType": "labels.text.fill",
			"stylers": [{
				"color": "#757575"
			}]
		},
		{
			"featureType": "poi.park",
			"elementType": "geometry",
			"stylers": [{
				"color": "#e5e5e5"
			}]
		},
		{
			"featureType": "poi.park",
			"elementType": "labels.text.fill",
			"stylers": [{
				"color": "#9e9e9e"
			}]
		},
		{
			"featureType": "road",
			"elementType": "geometry",
			"stylers": [{
				"color": "#ffffff"
			}]
		},
		{
			"featureType": "road.arterial",
			"elementType": "labels.text.fill",
			"stylers": [{
				"color": "#757575"
			}]
		},
		{
			"featureType": "road.highway",
			"elementType": "geometry",
			"stylers": [{
				"color": "#dadada"
			}]
		},
		{
			"featureType": "road.highway",
			"elementType": "labels.text.fill",
			"stylers": [{
				"color": "#616161"
			}]
		},
		{
			"featureType": "road.local",
			"elementType": "labels.text.fill",
			"stylers": [{
				"color": "#9e9e9e"
			}]
		},
		{
			"featureType": "transit.line",
			"elementType": "geometry",
			"stylers": [{
				"color": "#e5e5e5"
			}]
		},
		{
			"featureType": "transit.station",
			"elementType": "geometry",
			"stylers": [{
				"color": "#eeeeee"
			}]
		},
		{
			"featureType": "water",
			"elementType": "geometry",
			"stylers": [{
				"color": "#c9c9c9"
			}]
		},
		{
			"featureType": "water",
			"elementType": "geometry.fill",
			"stylers": [{
				"color": "#509eef"
			}]
		},
		{
			"featureType": "water",
			"elementType": "labels.text.fill",
			"stylers": [{
				"color": "#9e9e9e"
			}]
		}
	];


	var cityLA = {
		zoom: 11,
		center: new google.maps.LatLng(34.0420961, -118.2962623),
		styles: stylesAll,
		disableDefaultUI: true
	};

	var cityNY = {
		zoom: 10,
		center: new google.maps.LatLng(40.6976637, -74.119764),
		styles: stylesAll,
		disableDefaultUI: true
	};
	var cityBO = {
		zoom: 11,
		center: new google.maps.LatLng(42.358691, -71.0465299),
		styles: stylesAll,
		disableDefaultUI: true
	};
	var cityDE = {
		zoom: 11,
		center: new google.maps.LatLng(42.3309929, -83.0150927),
		styles: stylesAll,
		disableDefaultUI: true
	};

	la = new google.maps.Map(document.getElementById("la"), cityLA);

	ny = new google.maps.Map(document.getElementById("ny"), cityNY);

	bo = new google.maps.Map(document.getElementById("bo"), cityBO);

	de = new google.maps.Map(document.getElementById("de"), cityDE);
}

window.addEventListener('DOMContentLoaded', function () {

	'use strict';

	// Tabs
	let tab = document.querySelectorAll('.info-header-tab'),
		info = document.querySelector('.info-header'),
		tabContent = document.querySelectorAll('.map__contact');


	function hideTabContent(a) {
		for (let i = a; i < tabContent.length; i++) {
			tabContent[i].classList.remove('show');
			tabContent[i].classList.add('hide');
		}
	}
	hideTabContent(1);

	function showTabContent(b) {
		if (tabContent[b].classList.contains('hide')) {
			tabContent[b].classList.remove('hide');
			tabContent[b].classList.add('show');
		}
	}

	info.addEventListener('click', function (event) {
		let target = event.target;
		if (target && (target.className === 'info-header-tab' || target.parentNode.className === 'info-header-tab')) {

			for (let i = 0; i < tab.length; i++) {
				if (target == tab[i] || target.parentNode == tab[i]) {
					for (let i = 0; i < tab.length; i++) {
						tab[i].classList.remove('active');
					}
					tab[i].className += ' active';
					hideTabContent(0);
					showTabContent(i);
					break;
				}
			}
		}
	});
});
// Tabs end

$(document).ready(function () {
	
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

	$(document).click(function (e) { // Кликаем по любому месту
		if (!$(e.target).closest('.header__content').length > 0) { // Проверяем если нажатый элемент не имеет родителя 'header__content'
			hideMenu(); // Закрываем Меню
			//лучше выбрать другого родителя
		}
	});

	$('.header__content_nav a').click(function () { // По нажатию по ссылке закрываем меню
		hideMenu(); // Закрываем Меню
	});

	function hideMenu() { // Функция - Закрывает меню
		$('.header__content_nav ul').slideUp();
	}

	function positionOval() {
		var scrollY = window.scrollY - 500 || window.pageYOffset;
		var maxScrollY = document.documentElement.scrollHeight - window.innerHeight;
		var path = document.getElementById("path1");
		
		var pathLen = path.getTotalLength();
		var dist = pathLen * scrollY / maxScrollY * 2;
		var pos = path.getPointAtLength(dist);
		if (dist + 1 <= pathLen) {
			var posAhead = path.getPointAtLength(dist + 1);
			var angle = Math.atan2(posAhead.y - pos.y, posAhead.x - pos.x);
		} else {
			var posBehind = path.getPointAtLength(dist - 1);
			var angle = Math.atan2(pos.y - posBehind.y, pos.x - posBehind.x);
		}
		
		var car = document.getElementById("oval");
		car.setAttribute("transform", "translate(" + pos.x + "," + pos.y + ") rotate(" + rad2deg(angle) + ")");
	}

	function rad2deg(rad) {
		return 180 * rad / Math.PI;
	}

	
	window.addEventListener("scroll", positionOval);

	
	positionOval();



});

// 2. This code loads the IFrame Player API code asynchronously.
var tag = document.createElement('script');

tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

// 3. This function creates an <iframe> (and YouTube player)
//    after the API code downloads.
var player;
function onYouTubeIframeAPIReady() {
  player = new YT.Player('player', {
	height: '800',
	width: '1920',
	videoId: 'kXYiU_JCYtU',
	events: {
	  'onReady': onPlayerReady,
	  'onStateChange': onPlayerStateChange
	}
  });
}

// 4. The API will call this function when the video player is ready.
function onPlayerReady(event) {
  event.target.playVideo();
}

// 5. The API calls this function when the player's state changes.
//    The function indicates that when playing a video (state=1),
//    the player should play for six seconds and then stop.
var done = false;
function onPlayerStateChange(event) {
  if (event.data == YT.PlayerState.PLAYING && !done) {
	setTimeout(stopVideo, 6000);
	done = true;
  }
}
function stopVideo() {
  player.stopVideo();
}