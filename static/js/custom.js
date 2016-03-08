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

	$(function(){
	    var bCanPreview = true; // can preview

	    // create canvas and context objects
	    var canvas = document.getElementById('picker');
	    var ctx = canvas.getContext('2d');

	    // drawing active image
	    var image = new Image();
	    image.onload = function () {
	        ctx.drawImage(image, 0, 0, image.width, image.height); // draw the image on the canvas
	    }

	    // select desired colorwheel
	    var imageSrc = 'images/colorwheel1.png';
	    switch ($(canvas).attr('var')) {
	        case '2':
	            imageSrc = 'images/colorwheel2.png';
	            break;
	        case '3':
	            imageSrc = 'images/colorwheel3.png';
	            break;
	        case '4':
	            imageSrc = 'images/colorwheel4.png';
	            break;
	        case '5':
	            imageSrc = '../static/img/colorwheel1.png';
	            break;
	    }
	    image.src = imageSrc;

	    $('#picker').mousemove(function(e) { // mouse move handler
	            // get coordinates of current position
	            var canvasOffset = $(canvas).offset();
	            var canvasX = Math.floor(e.pageX - canvasOffset.left);
	            var canvasY = Math.floor(e.pageY - canvasOffset.top);

	            // get current pixel
	            var imageData = ctx.getImageData(canvasX, canvasY, 1, 1);
	            var pixel = imageData.data;

	            // update preview color
	            var pixelColor = "rgba("+pixel[0]+", "+pixel[1]+", "+pixel[2]+", 0.6)";
	            $('.preview').css('backgroundColor', pixelColor);

	            // update controls
	            $('#rVal').val(pixel[0]);
	            $('#gVal').val(pixel[1]);
	            $('#bVal').val(pixel[2]);
	            $('#rgbVal').val(pixel[0]+','+pixel[1]+','+pixel[2]);

	            var dColor = pixel[2] + 256 * pixel[1] + 65536 * pixel[0];
	            $('#hexVal').val('#' + ('0000' + dColor.toString(16)).substr(-6));
	            if (pixelColor == 'rgba(0, 0, 0, 0.6)') {
	            	$('.color-preview').css('backgroundColor', '#fff');
	            	newColor = 'rgba(255, 255, 255, 0.4)';
	            	draw();
	            } else {
	            	$('.color-preview').css('backgroundColor', pixelColor);
	            	newColor = pixelColor;
	            	draw();
	            }
	    });
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

var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");

var truck, logo, overlay, grass;
var newColor = "rgba(255,255,255,.5)";

var imageURLs = [];
var imagesOK = 0;
var imgs = [];
var whichHeadphone = 'black';
pushImages();

function pushImages() {
	imageURLs = [];
	if (whichHeadphone == 'black') {
		imageURLs.push("http://i.imgur.com/OdZSSCY.png");
	} else {
		imageURLs.push("http://i.imgur.com/zt8S8x4.png");
	}
	imageURLs.push("http://i.imgur.com/GbeRAPi.png");
	loadAllImages();
}
// imageURLs.push("http://i.imgur.com/OdZSSCY.png");
// imageURLs.push("http://i.imgur.com/GbeRAPi.png");


function loadAllImages() {
	imgs = [];
	imagesOK= 0;
    for (var i = 0; i < imageURLs.length; i++) {
        var img = new Image();
        imgs.push(img);
        img.onload = function () {
            imagesOK++;
            imagesAllLoaded();
        };
        img.src = imageURLs[i];
    }
}

var imagesAllLoaded = function () {
    if (imagesOK >= imageURLs.length) {
        // all images are fully loaded an ready to use
        truck = imgs[0];
        overlay = imgs[1];
        draw();
    }
};


function draw() {

    // clear the canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // save the context state
    ctx.save();

    // draw the overlay
    ctx.drawImage(overlay, 0, 0);

    // change composite mode to source-in
    // any new drawing will only overwrite existing pixels
    ctx.globalCompositeOperation = "source-in";

    // draw a purple rectangle the size of the canvas
    // Only the overlay will become purple
    ctx.fillStyle = newColor;
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // change the composite mode to destination-atop
    // any new drawing will not overwrite any existing pixels
    ctx.globalCompositeOperation = "destination-atop";

    // draw the full logo
    // This will NOT overwrite any existing purple overlay pixels


    // draw the truck
    // This will NOT replace any existing pixels
    // The purple overlay will not be overwritten
    // The blue logo will not be overwritten
    ctx.drawImage(truck, 0, 0);

    // restore the context to it's original state
    ctx.restore();

}
function rgbToHex(R,G,B) {return toHex(R)+toHex(G)+toHex(B)}
function toHex(n) {
	n = parseInt(n,10);
	if (isNaN(n)) 
		return "00";
 	n = Math.max(0,Math.min(n,255));
 	return "0123456789ABCDEF".charAt((n-n%16)/16) + "0123456789ABCDEF".charAt(n%16);
}

$(".black").click(function() {
	whichHeadphone = 'black';
	pushImages();

});

$(".white").click(function() {
	whichHeadphone = 'white';
	pushImages();
});

$(".blog_pre").mouseenter(function() {
	var caption = this.getAttribute('data-caption');
	$(".caption").text(caption);
	$(".blog_lol").css("visibility", "hidden");
	$(".caption_overlay").css({opacity: 0, visibility: "visible"}).animate({opacity: 0.7}, 200);
});

$(".blog_pre").mouseleave(function() {
	$(".caption_overlay").css("visibility", "hidden");
	$(".blog_lol").css("visibility", "visible");
});

// // listen for clicks and then recolor/redraw
// $("#canvas").click(function () {
//     newColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
//     draw();
// });
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
