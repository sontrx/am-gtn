/******************************
	-	sontr js	-
*******************************/

//Global var

var SONTR = {}, // SONTR obj initial

$ = jQuery.noConflict();


(function ($) {
// Begin function, code below this line----------------------------------------/\

	// In Strict mode 
	"use strict";

  // Init Variables

  var $window = $(window),
  	$body = $('body'),
  	$wrapper = $('#wrapper'),
  	$section = $('section'),
  	$topbar = $('#topbar'),
  	$header = $('#header'),
  	$headerInitialClass = $('#header').attr('class'),

  	// Brand
  	logo = $('#logo').find('.logo'),
  	logoImg = logo.find('img').attr('src'),
  	logoDark = logo.attr('data-dark-logo'),

  	// Main menu
  	$mainMenu = $('#main-menu'),
  	$goToTop = $('#gotopButton'),

  	//Utilites
    classFinder = ".";

  // End init variables


	if ($header.length > 0) {
    var $headerOffsetTop = $header.offset().top;
	}

	// SONTR Heroes
	SONTR.hero = {


		executor: function () {

			

		},

		// goToTop
		goToTop: function() {

			if($goToTop.length > 0 ){

				var scrollOffset = $body.attr('data-offset') || 800;

				if($window.scrollTop() > scrollOffset) {

					$goToTop.css({

						'bottom' : '26px',
						'opacity' : '1' 

					})

				}else{

					$goToTop.css({

						'bottom' : '16px' , 
						'opacity' : '0' ,

					})

				}

				$goToTop.click(function(){

					$('body,html').stop(true).animate({

						'scrollTop' : 0 

					} , 1000 , 'swing' );
					return false ; 

				});


			}
		},
		// End goToTop

		// stickyHeader
		stickyHeader: function() {

			var element = $(this),
				showupPoint = 200,
				scrollFromTop = $window.scrollTop()
			;

			// If user scroll down the mouse, add "sticky" class to hide the header
			if (scrollFromTop > $headerOffsetTop ) {

				$header.addClass('sticky');

				// If user scroll down pass through the showupPoint, add "sticky-on" class to show up the header
				if (scrollFromTop > $headerOffsetTop + showupPoint) {
					
					$header.addClass('sticky-on');
				}

			}else{

				// reset header
				$header.removeClass().addClass($headerInitialClass);
			}

		},
		// End stickyHeader

		// navbarToggle
		navbarToggle: function () {

			var navbarBurgers = $('.navbar-burger'); // Get the burger buttons
			var navbarMenu = $('.navbar-menu'); // Get the target 


			


			// Toggle function
			function toggle () {

				// toggle the .is-active class
				navbarBurgers.toggleClass('is-active');
				navbarMenu.toggleClass('is-active');

			}

			// burgers waiting for event
			navbarBurgers.on('click', function (event) {

				event.preventDefault();
				event.stopPropagation();
				toggle();

			});


		},
		// End navbarToggle

	
	};
	// End SONTR Heroes 

	//SONTR Ronins
	SONTR.ronin = {

		executor: function() {

		},

		// modalToggle
		modalToggle: function () {

			$('.modal-show').on('click', function(event) {

			  event.preventDefault();
			  event.stopPropagation();
			  $('#modalWrapper').removeAttr('class').addClass('is-visible');
			});

			$('.modal-toggle').on('click', function(event) {

			  event.preventDefault();
			  event.stopPropagation();
			  $('#modalWrapper').addClass('out');
			});



		} 

		

	};
	// End SONTR Ronins

	
	// SONTR Invokers
	SONTR.readyInvoker = {

		executor : function () {

			SONTR.hero.goToTop();


		},

	};
	$(document).ready(SONTR.readyInvoker.executor);

	SONTR.onloadInvoker = {

		executor : function () {
			SONTR.hero.navbarToggle();
			SONTR.ronin.modalToggle();
		}

	};
	$(window).on('load' , SONTR.onloadInvoker.executor);

	SONTR.scrollInvoker = {

		executor : function () {

			SONTR.hero.goToTop();
			SONTR.hero.stickyHeader();


		}

	};
	$(window).on('scroll' , SONTR.scrollInvoker.executor);

	// End SONTR Invoker




// End function, code above this line------------------------------------------------/
})(jQuery);

