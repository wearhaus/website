// $(function() {
// 	$.scrolltracker('.tab-text-left, .tab-text-right');
// });

$(document).ready(function() {

	var tablet_offset = '-479px';
	var desktop_offset = '-670px';

 	// tab section click functionality
 	if ($(window).width() < 1099) { // for tablets
		$('#sync .tab-left').click(function() {
			if ($('#sync .tab-text-left').css('left') == '0px') {
				$('#sync .tab-text-left').animate({left: tablet_offset}, 400);
			}
			else {
				$('#sync .tab-text-left').animate({left: '0px'}, 400);
			}
		});


		$('#color .tab-right').click(function() {
			if ($('#color .tab-text-right').css('right') == '0px') {
				$('#color .tab-text-right').animate({right: tablet_offset}, 400);
			}
			else {
				$('#color .tab-text-right').animate({right: '0px'}, 400);
			}
		});

		$('#touch .tab-left').click(function() {
			if ($('#touch .tab-text-left').css('left') == '0px') {
				$('#touch .tab-text-left').animate({left: tablet_offset}, 400);
			}
			else {
				$('#touch .tab-text-left').animate({left: '0px'}, 400);
			}
		});

		$('#app .tab-right').click(function() {
			if ($('#app .tab-text-right').css('right') == '0px') {
				$('#app .tab-text-right').animate({right: tablet_offset}, 400);
			}
			else {
				$('#app .tab-text-right').animate({right: '0px'}, 400);
			}
		});
	}
	else { // for laptops/desktops
		$('#sync .tab-left').click(function() {
			if ($('#sync .tab-text-left').css('left') == '0px') {
				$('#sync .tab-text-left').animate({left: desktop_offset}, 400);
			}
			else {
				$('#sync .tab-text-left').animate({left: '0px'}, 400);
			}
		});


		$('#color .tab-right').click(function() {
			if ($('#color .tab-text-right').css('right') == '0px') {
				$('#color .tab-text-right').animate({right: desktop_offset}, 400);
			}
			else {
				$('#color .tab-text-right').animate({right: '0px'}, 400);
			}
		});

		$('#touch .tab-left').click(function() {
			if ($('#touch .tab-text-left').css('left') == '0px') {
				$('#touch .tab-text-left').animate({left: desktop_offset}, 400);
			}
			else {
				$('#touch .tab-text-left').animate({left: '0px'}, 400);
			}
		});

		$('#app .tab-right').click(function() {
			if ($('#app .tab-text-right').css('right') == '0px') {
				$('#app .tab-text-right').animate({right: desktop_offset}, 400);
			}
			else {
				$('#app .tab-text-right').animate({right: '0px'}, 400);
			}
		});		
	}

	// tab section hover functionality
	$('#sync .tab-left').mouseenter(function() {
		if ($(window).width() > 1099) { // desktop
			if ($('#sync .tab-text-left').css('left') == desktop_offset) {
				$('#sync .tab-text-left').animate({left: '0px'}, 400);
			}
		}
		else { // tablet
			if ($('#sync .tab-text-left').css('left') == tablet_offset) {
				$('#sync .tab-text-left').animate({left: '0px'}, 400);
			}
		}

	});

	$('#sync .slide-left').mouseleave(function() {
		if ($(window).width() > 1099) {
			if ($('#sync .tab-text-left').css('left') == '0px') {
				$('#sync .tab-text-left').animate({left: desktop_offset}, 400);
			}
		}
		else {
			if ($('#sync .tab-text-left').css('left') == '0px') {
				$('#sync .tab-text-left').animate({left: tablet_offset}, 400);
			}			
		}


	});

	$('#color .tab-right').mouseenter(function() {
		if ($(window).width() > 1099) {
			if ($('#color .tab-text-right').css('right') == desktop_offset) {
				$('#color .tab-text-right').animate({right: '0px'}, 400);
			}
		}
		else {
			if ($('#color .tab-text-right').css('right') == tablet_offset) {
				$('#color .tab-text-right').animate({right: '0px'}, 400);
			}
		}

	});

	$('#color .slide-right').mouseleave(function() {
		if ($(window).width() > 1099) {
			if ($('#color .tab-text-right').css('right') == '0px') {
				$('#color .tab-text-right').animate({right: desktop_offset}, 400);
			}			
		}
		else {
			if ($('#color .tab-text-right').css('right') == '0px') {
				$('#color .tab-text-right').animate({right: tablet_offset}, 400);
			}
		}


	});

	$('#touch .tab-left').mouseenter(function() {
		if ($(window).width() > 1099) {
			if ($('#touch .tab-text-left').css('left') == desktop_offset) {
				$('#touch .tab-text-left').animate({left: '0px'}, 400);
			}
		}
		else {
			if ($('#touch .tab-text-left').css('left') == tablet_offset) {
				$('#touch .tab-text-left').animate({left: '0px'}, 400);
			}
		}

	});

	$('#touch .slide-left').mouseleave(function() {
		if ($(window).width() > 1099) {
			if ($('#touch .tab-text-left').css('left') == '0px') {
				$('#touch .tab-text-left').animate({left: desktop_offset}, 400);
			}
		}
		else {
			if ($('#touch .tab-text-left').css('left') == '0px') {
				$('#touch .tab-text-left').animate({left: tablet_offset}, 400);
			}
		}


	});

	$('#app .tab-right').mouseenter(function() {
		if ($(window).width() > 1099) {
			if ($('#app .tab-text-right').css('right') == desktop_offset) {
				$('#app .tab-text-right').animate({right: '0px'}, 400);
			}
		}
		else {
			if ($('#app .tab-text-right').css('right') == tablet_offset) {
				$('#app .tab-text-right').animate({right: '0px'}, 400);
			}
		}

	});

	$('#app .slide-right').mouseleave(function() {
		if ($(window).width() > 1099) {
			if ($('#app .tab-text-right').css('right') == '0px') {
				$('#app .tab-text-right').animate({right: desktop_offset}, 400);
			}
		}
		else {
			if ($('#app .tab-text-right').css('right') == '0px') {
				$('#app .tab-text-right').animate({right: tablet_offset}, 400);
			}
		}


	});

	$(window).scroll(function() {
		if ($(this).scrollTop() == 0) {
			$('.navbar').removeClass('static');
		} else {
			$('.navbar').addClass('static');
		}
	});

	/* Video player setup */
	$('#title-vid-link').on("click", function(e) {
		if (window.innerWidth <= 480)
			e.preventDefault();
		$('.player-container').fadeIn('slow');
		$('.player-container iframe').delay(500).fadeIn('slow');
	});

	$(document).keyup(function(e) {
		if (e.keyCode == 27) // escape key
			hideVideoPlayer();
	});


	function hideVideoPlayer() {
		$('.player-container').fadeOut('slow', function() {
			$('.player-container iframe').hide();
		});
		$('iframe[name="player"]').attr('src', $('iframe[name="player"]').attr('src'));
	}


	/* hide Mac/Windows only elements on page */    
	if (navigator.appVersion.indexOf("Mac") > -1) {
	    showForMac();
	} else {
		showForWin();
	}

	/* add click event for Mac/Windows toggle */
	$('#download-for-mac').on("click", function(e) {
		e.preventDefault();
		showForMac();
	});
	$('#download-for-ios').on("click", function(e) {
		e.preventDefault();
		showForiOS();
	});
	$('#download-for-win').on("click", function(e) {
		e.preventDefault();
		showForWin();
	});
	$('#download-for-android').on("click", function(e) {
		e.preventDefault();
		showForAndroid();
	});
	$('#download-for-winphone').on("click", function(e) {
		e.preventDefault();
		showForWinPhone();
	});


	// Carousel Auto-Cycle
	$('.carousel').carousel({
      interval: 6000
    })


	/* functions that handle the hiding/showing of Mac/Windows objects */
	function showForWin() {
	    $('.show-for-win').show();
	    $('.show-for-mac').hide();
	    $('.show-for-ios').hide();
	    $('.show-for-android').hide();
	    $('.show-for-winphone').hide();
	}

	function showForMac() {
	    $('.show-for-win').hide();
	    $('.show-for-mac').show();
	    $('.show-for-ios').hide();
	    $('.show-for-android').hide();
	    $('.show-for-winphone').hide();
	}

	function showForiOS() {
	    $('.show-for-win').hide();
	    $('.show-for-mac').hide();
	    $('.show-for-ios').show();
	    $('.show-for-android').hide();
	    $('.show-for-winphone').hide();
	}

	function showForAndroid() {
	    $('.show-for-win').hide();
	    $('.show-for-mac').hide();
	    $('.show-for-ios').hide();
	    $('.show-for-android').show();
	    $('.show-for-winphone').hide();
	}

	function showForWinPhone() {
	    $('.show-for-win').hide();
	    $('.show-for-mac').hide();
	    $('.show-for-ios').hide();
	    $('.show-for-android').hide();
	    $('.show-for-winphone').show();
	}


	/* get JSON object for loading images for blog section */
	/*
	var featured_blog_posts_url = "http://biog.wearhaus.com/featured-images";
	$.getJSON( featured_blog_posts_url, {})
		.done(function(data) {
			var count = 1;
			$.each(data, function(i, item) {
				if (i == 'featured-' + count) { // render images in blog section
					$('#blog_a_'+count).attr('href', item.url)
					$('#blog_img_'+count).attr('src', item.img_url).attr('alt', item.title);
				}

				count++;
			});
		})
		.fail(function() {console.log("error");
		});
		*/

});
