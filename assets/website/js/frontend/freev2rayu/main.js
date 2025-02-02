/***************************************************
==================== JS INDEX ======================

****************************************************/

(function ($) {
	"use strict";
	var windowOn = $(window);

	/*======================================
	Preloader activation
	========================================*/
	$(window).on('load', function(event) {
        $('.preloader').delay(500).fadeOut(500);
    });

	/*======================================
	Wow Js
	========================================*/
	new WOW().init();

	/*======================================
	Mobile Menu Js
	========================================*/
	$('#mobile-menu').meanmenu({
		meanMenuContainer: '.mobile-menu',
		meanScreenWidth: "991",
		meanExpand: ['<i class="fal fa-plus"></i>'],
	});

	$("#mobile-menu-2").meanmenu({
		meanMenuContainer: ".mobile-menu-2",
		meanScreenWidth: "4000",
		meanExpand: ['<i class="fal fa-plus"></i>'],
	});


	/*======================================
	Sidebar Toggle
	========================================*/
	$(".offcanvas__close,.offcanvas__overlay").on("click", function () {
		$(".offcanvas__info").removeClass("info-open");
		$(".offcanvas__overlay").removeClass("overlay-open");
	});
	$(".sidebar__active").on("click", function () {
		$(".offcanvas__info").addClass("info-open");
		$(".offcanvas__overlay").addClass("overlay-open");
	});
	
	/*======================================
	Body overlay Js
	========================================*/
	$(".body-overlay").on("click", function () {
		$(".offcanvas__area").removeClass("opened");
		$(".body-overlay").removeClass("opened");
	});


	/*======================================
	Search form Js
	========================================*/
	$(".search__toggle").on("click", function () {
		$(".search__button").toggleClass("search__open");
	});
	$("body > *:not(header)").on("click", function () {
		$(".search__button").removeClass("search__open");
	});


	/*======================================
	Sticky Header Js
	========================================*/
	windowOn.on('scroll', function () {
		var scroll = $(window).scrollTop();
		if (scroll < 100) {
			$("#header-sticky").removeClass("sticky");
		} else {
			$("#header-sticky").addClass("sticky");
		}
	});


	/*======================================
	Data Css js
	========================================*/
	$("[data-background").each(function () {
		$(this).css("background-image", "url( " + $(this).attr("data-background") + "  )");
	});
	
	$("[data-width]").each(function () {
		$(this).css("width", $(this).attr("data-width"));
	});

	$("[data-bg-color]").each(function () {
        $(this).css("background-color", $(this).attr("data-bg-color"));
    });


	/*======================================
	Masonary Js
	========================================*/
	$('.grid').imagesLoaded(function () {
		// init Isotope
		var $grid = $('.grid').isotope({
			itemSelector: '.grid-item',
			percentPosition: true,
			masonry: {
				// use outer width of grid-sizer for columnWidth
				columnWidth: '.grid-item',
			}
		});

		// filter items on button click
		$('.project__filter-button').on('click', 'button', function () {
			var filterValue = $(this).attr('data-filter');
			$grid.isotope({ filter: filterValue });
		});

		//for menu active class
		$('.project__filter-button button').on('click', function (event) {
			$(this).siblings('.active').removeClass('active');
			$(this).addClass('active');
			event.preventDefault();
		});

	});

	
	/*======================================
	MagnificPopup image view
	========================================*/ 
	$('.popup-image').magnificPopup({
		type: 'image',
		gallery: {
			enabled: true
		}
	});


	/*======================================
	MagnificPopup video view
	========================================*/
	$(".popup-video").magnificPopup({
		type: "iframe",
	});

	/*======================================
	Counter Js
	========================================*/
	$('.counter').counterUp({
		delay: 10,
		time: 1000
	});
	
	/*======================================
	 project Slider Js
	========================================*/
	$('.project__active').slick({
		slidesToShow: 1,
		arrows: true,
		autoplay:true,
		Infinity:true,
		prevArrow: '<button type="button" class="slick-prev"><i class="fa-regular fa-arrow-left-long"></i></button>',
		nextArrow: '<button type="button" class="slick-next"><i class="fa-regular fa-arrow-right-long"></i></button>',
		appendArrows: $(".project__navigation"),
		responsive: [
			{
				breakpoint: 1600,
				settings: {
					slidesToShow: 1
				}
			},
			{
				breakpoint: 1200,
				settings: {
					slidesToShow: 1
				}
			},
			{
				breakpoint: 992,
				settings: {
					slidesToShow: 1
				}
			},
			{
				breakpoint: 778,
				settings: {
					slidesToShow: 1
				}
			}
		]
	});

	
	/*======================================
	 Feedback Slider Js
	========================================*/
	$('.feedback__active').slick({
		slidesToShow: 1,
		arrows: true,
		autoplay:true,
		Infinity:true,
		prevArrow: '<button type="button" class="slick-prev"><i class="fa-regular fa-arrow-left-long"></i></button>',
		nextArrow: '<button type="button" class="slick-next"><i class="fa-regular fa-arrow-right-long"></i></button>',
		appendArrows: $(".feedback__navigation"),
		responsive: [
			{
				breakpoint: 1600,
				settings: {
					slidesToShow: 1
				}
			},
			{
				breakpoint: 1200,
				settings: {
					slidesToShow: 1
				}
			},
			{
				breakpoint: 992,
				settings: {
					slidesToShow: 1
				}
			},
			{
				breakpoint: 778,
				settings: {
					slidesToShow: 1
				}
			}
		]
	});


	/*======================================
	 Choose Slider Js
	========================================*/
	var choose = new Swiper('.choose__active', {
		slidesPerView: 3,
		spaceBetween: 30,
		loop: true, 
		roundLengths: true,
		autoplay: {
				delay: 3000,
		},
		// If we need pagination
		pagination: {
			el: ".choose__pagination",
			clickable: true,
		},
		navigation: {
			nextEl: ".testimonial__button-next",
			prevEl: ".testimonial__button-prev",
		},
		breakpoints: {
			'1400': {
				slidesPerView: 3,
		},
			'1200': {
				slidesPerView: 3,
			},
			'992': {
				slidesPerView: 2,
			},
			'768': {
				slidesPerView: 2,
			},
			'576': {
				slidesPerView: 1,
			},
			'0': {
				slidesPerView: 1,
			},
		},
	});


	/*======================================
	 Recent__slider Slider Js
	========================================*/
	var recent = new Swiper('.recent__slider-active', {
		slidesPerView: 3,
		spaceBetween: 30,
		loop: true, 
		roundLengths: true,
		autoplay: {
				delay: 3000,
		},
		// If we need pagination
		pagination: {
			el: ".recent__sliderpagination",
			clickable: true,
		},
		navigation: {
			nextEl: ".recent__button-next",
			prevEl: ".recent__button-prev",
		},
		breakpoints: {
			'1400': {
				slidesPerView: 3,
		},
			'1200': {
				slidesPerView: 3,
			},
			'992': {
				slidesPerView: 3,
			},
			'768': {
				slidesPerView: 2,
			},
			'576': {
				slidesPerView: 1,
			},
			'0': {
				slidesPerView: 1,
			},
		},
	});
	
	/*======================================
	 Team Slider Js
	========================================*/
	var team = new Swiper('.team__active', {
		slidesPerView: 3,
		spaceBetween: 30,
		loop: true,
		roundLengths: true,
		autoplay: {
				delay: 3000,
		},
		navigation: {
			nextEl: ".team__button-next",
			prevEl: ".team__button-prev",
		},
		breakpoints: {
			'1400': {
				slidesPerView: 3,
			},
			'1200': {
				slidesPerView: 3,
			},
			'992': {
				slidesPerView: 3,
			},
			'768': {
				slidesPerView: 2,
			},
			'576': {
				slidesPerView: 1,
			},
			'0': {
				slidesPerView: 1,
			},
		},
	});

	/*======================================
	 Brand Slider Js
	========================================*/
	var brand = new Swiper('.brand__active', {
		slidesPerView: 5,
		spaceBetween: 30,
		loop: true,
		autoplay: {
				delay: 3000,
			},
		navigation: {
          nextEl: ".brand-button-next",
          prevEl: ".brand-button-prev",
        },
		breakpoints: {
			'1400': {
				slidesPerView: 5,
			},
			'1200': {
				slidesPerView: 4,
			},
			'992': {
				slidesPerView: 4,
			},
			'768': {
				slidesPerView: 3,
			},
			'576': {
				slidesPerView: 2,
			},
			'0': {
				slidesPerView: 1,
			},
		},
	});	

	// feedback slider-2
	if ($(".testimonial__slider-active-2").length > 0) {
		$('.testimonial__slider-active-2').slick({
			slidesToShow: 1,
			slidesToScroll: 1,
			arrows: false,
			fade: true,
			centerMode: false,
			cssEase: 'linear',
			asNavFor: '.testimonial__slider-nav',
		});
	}

	if ($(".testimonial__slider-nav").length > 0) {
		$('.testimonial__slider-nav').slick({
			slidesToShow: 3,
			slidesToScroll: 1,
			arrows: true,
			asNavFor: '.testimonial__slider-active-2',
			dots: false,
			centerMode: false,
			focusOnSelect: true,
			autoplay: true,
			speed: 100,
			autoplaySpeed: 8000,
			cssEase: 'linear',
			loop: true,
			prevArrow: '<button type="button" class="slick-prev testimonial-2-button-prev"><i class="fa-regular fa-arrow-left-long"></i></button>',
			nextArrow: '<button type="button" class="slick-next testimonial-2-button-next"><i class="fa-regular fa-arrow-right-long"></i></button>',
			appendArrows: $('.feedback__slider-arrow-2'),
			responsive: [
				{
					breakpoint: 1400,
					settings: {
					slidesToShow: 3,
					slidesToScroll: 1,
					},
				},
				{
					breakpoint: 1200,
					settings: {
					slidesToShow: 3,
					slidesToScroll: 1,
					},
				},
				{
					breakpoint: 992,
					settings: {
					slidesToShow: 3,
					slidesToScroll: 1,
					},
				},
				{
					breakpoint: 768,
					settings: {
					slidesToShow: 3,
					slidesToScroll: 1,
					},
				},
				{
					breakpoint: 450,
					settings: {
					slidesToShow: 3,
					slidesToScroll: 1,
					},
				},
				{
					breakpoint: 320,
					settings: {
					slidesToShow: 2,
					slidesToScroll: 1,
					},
				},
				{
					breakpoint: 0,
					settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
					},
				},
				],
		});

	}
	/*--
	Mousemove Parallax
	-----------------------------------*/
    var b = document.getElementsByTagName("BODY")[0];  

    b.addEventListener("mousemove", function(event) {
    parallaxed(event);

    });

    function parallaxed(e) {
        var amountMovedX = (e.clientX * -0.3 / 8);
        var amountMovedY = (e.clientY * -0.3 / 8);
        var x = document.getElementsByClassName("parallaxed");
        var i;
        for (i = 0; i < x.length; i++) {
            x[i].style.transform='translate(' + amountMovedX + 'px,' + amountMovedY + 'px)'
        }
    }


})(jQuery);