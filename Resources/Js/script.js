/*=====This is for Sticky Navigation=====*/

$(document).ready(function () {
	$(".js--section-features").waypoint(
		function (direction) {
			if (direction == "down") {
				$("nav").addClass("sticky");
			} else {
				$("nav").removeClass("sticky");
			}
		},
		{
			offset: " 60px;",
		}
	);

	/*=====this is for the Scroll on button:link=====*/

	/* Im hungry button to plans section scroll*/

	$(".js--scroll-to-plans").click(function () {
		$("html, body").animate(
			{
				scrollTop: $(".js--section-plans").offset().top,
			},
			1000
		);
	});

	/* show me more button to features section scroll */

	$(".js--scroll-to-features").click(function () {
		$("html, body").animate(
			{
				scrollTop: $(".js--section-features").offset().top,
			},
			1000
		);
	});

	/*=====Select all links with hashes=====*/
	$('a[href*="#"]')
		// Remove links that don't actually link to anything
		.not('[href="#"]')
		.click(function (event) {
			// On-page links
			if (
				location.pathname.replace(/^\//, "") ==
					this.pathname.replace(/^\//, "") &&
				location.hostname == this.hostname
			) {
				// Figure out element to scroll to
				var target = $(this.hash);
				target = target.length
					? target
					: $("[name=" + this.hash.slice(1) + "]");
				// Does a scroll target exist?
				if (target.length) {
					// Only prevent default if animation is actually gonna happen
					event.preventDefault();
					$("html, body").animate(
						{
							scrollTop: target.offset().top,
						},
						1000,
						function () {
							// Callback after animation
							// Must change focus!
							var $target = $(target);
							$target.focus();
							if ($target.is(":focus")) {
								// Checking if the target was focused
								return false;
							} else {
								$target.attr("tabindex", "-1"); // Adding tabindex for elements not focusable
								$target.focus(); // Set focus again
							}
						}
					);
				}
			}
		});

	/*=====This is Animation on Scroll=====*/

	/*FEATURES-section animation*/

	$(".js--wp-1").waypoint(
		function (direction) {
			$(".js--wp-1").addClass("animated fadeIn");
		},
		{
			offset: "70%;",
		}
	);

	/*WORKS-section animation*/

	$(".js--wp-2").waypoint(
		function (direction) {
			$(".js--wp-2").addClass("animated fadeInUp");
		},
		{
			offset: "50%;",
		}
	);

	/*CITIES-section animation*/

	$(".js--wp-3").waypoint(
		function (direction) {
			$(".js--wp-3").addClass("animated fadeIn");
		},
		{
			offset: "50%;",
		}
	);

	/*PLANS-section animation*/
	/* left side fade */
	$(".js--wp-plan-left").waypoint(
		function (direction) {
			$(".js--wp-plan-left").addClass("animated fadeInLeft");
		},
		{
			offset: "50%;",
		}
	);

	/*center fade*/

	$(".js--wp-plan-center").waypoint(
		function (direction) {
			$(".js--wp-plan-center").addClass("animated fadeInUp");
		},
		{
			offset: "50%;",
		}
	);

	/* right fade */

	$(".js--wp-plan-right").waypoint(
		function (direction) {
			$(".js--wp-plan-right").addClass("animated fadeInRight");
		},
		{
			offset: "50%;",
		}
	);

	/*=====This is for navigation slide-bar=====*/

	$(".js--nav-icon").click(function () {
		var nav = $(".js--main-nav");
		var icon = $(".js--nav-icon i");

		nav.slideToggle(200);

		if (icon.hasClass("ion-navicon-round")) {
			icon.addClass("ion-close-round");
			icon.removeClass("ion-navicon-round");
		} else {
			icon.addClass("ion-navicon-round");
			icon.removeClass("ion-close-round");
		}
	});
});
