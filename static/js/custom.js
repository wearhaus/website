$(document).ready(function() {

	var tablet_offset = '-479px';
	var desktop_offset = '-670px';

    /* Grab URL Parameters */
    var params = {};

	if (location.search) {
	    var parts = location.search.substring(1).split('&');

	    for (var i = 0; i < parts.length; i++) {
	        var nv = parts[i].split('=');
	        if (!nv[0]) continue;
	        params[nv[0]] = nv[1] || true;
	    }
	}

	/* If promo code is in the parameters, display promo banner */
	if (params.promo != null) {
		$(".promonav").html("<p>Valentine's Day special! Use promo code <strong>"+ params.promo + "</strong> at checkout to save $100 when you buy two Wearhaus Arcs.</p>");
	} else {
		$(".promonav").html("<p>Valentine's Day special! Use promo code <strong>VDAY2017</strong> at checkout to save $100 when you buy two Wearhaus Arcs.</p>");

	}

	/* Scrolling Animation */
	var $root = $('html, body');

	function scrollToOrder() {
		$root.animate({
			scrollTop: $("#order").offset().top - 150
		}, 500);
		return false;
	};

	if (window.location.hash == "#order") {
		scrollToOrder();
	}

	$(".promonav").click(scrollToOrder);
	$("#order_now_link").click(scrollToOrder);

	/* Color Picker */
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
	    var imageSrc = '../static/img/colorwheel1.png';
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


	$(window).scroll(function() {
		if ($(this).scrollTop() == 0) {
			$('.navbar').removeClass('static');
		} else {
			$('.navbar').addClass('static');
		}
	});

	/* Video player setup */
	$('#button-watch-demo').on("click", function(e) {
		if (window.innerWidth <= 480)
			e.preventDefault();
		$('.video_container').fadeIn('slow');
		$('.video_container iframe').delay(500).fadeIn('slow');
	});

	$(document).keyup(function(e) {
		if (e.keyCode == 27) // escape key
			hideVideoPlayer();
	});


	function hideVideoPlayer() {
		$('.video_container').fadeOut('slow', function() {
			$('.video_container iframe').hide();
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
			imageURLs.push("../static/img/canvas-black.png");
		} else {
			imageURLs.push("../static/img/canvas-white.png");
		}
		imageURLs.push("../static/img/canvas-lightring.png");
		loadAllImages();
	}


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

	$(".black").click(function() {
		whichHeadphone = 'black';
		$(this).css("border-color", "#00bccc");
		$(".white").css("border-color", "#ccc");
		pushImages();

	});

	$(".white").click(function() {
		whichHeadphone = 'white';

		$(this).css("border-color", "#00bccc");
		$(".black").css("border-color", "#000");
		pushImages();
	});

	/* Order Form Counter */
	$('.btn-number').click(function(e) {
	    e.preventDefault();
	    
	    fieldName = $(this).attr('data-field');
	    type      = $(this).attr('data-type');
	    var input = $("input[name='"+fieldName+"']");
	    var currentVal = parseInt(input.val());
	    if (!isNaN(currentVal)) {
	        if(type == 'minus') {
	            
	            if(currentVal > input.attr('min')) {
	                input.val(currentVal - 1).change();
	            } 
	            if(parseInt(input.val()) == input.attr('min')) {
	                $(this).attr('disabled', true);
	            }

	        } else if(type == 'plus') {

	            if(currentVal < input.attr('max')) {
	                input.val(currentVal + 1).change();
	            }
	            if(parseInt(input.val()) == input.attr('max')) {
	                $(this).attr('disabled', true);
	            }

	        }
	    } else {
	        input.val(0);
	    }
	});

	$('.input-number').focusin(function(){
		$(this).data('oldValue', $(this).val());
	});

	$('.input-number').change(function() {
	    
	    minValue =  parseInt($(this).attr('min'));
	    maxValue =  parseInt($(this).attr('max'));
	    valueCurrent = parseInt($(this).val());
	    
	    name = $(this).attr('name');
	    if(valueCurrent >= minValue) {
	        $(".btn-number[data-type='minus'][data-field='"+name+"']").removeAttr('disabled')
	    } else {
	        alert('Sorry, the minimum value was reached');
	        $(this).val($(this).data('oldValue'));
	    }
	    if(valueCurrent <= maxValue) {
	        $(".btn-number[data-type='plus'][data-field='"+name+"']").removeAttr('disabled')
	    } else {
	        alert('Sorry, the maximum value was reached');
	        $(this).val($(this).data('oldValue'));
	    }
	});

	$(".input-number").keydown(function (e) {
        // Allow: backspace, delete, tab, escape, enter and .
        if ($.inArray(e.keyCode, [46, 8, 9, 27, 13, 190]) !== -1 ||
             // Allow: Ctrl+A
            (e.keyCode == 65 && e.ctrlKey === true) || 
             // Allow: home, end, left, right
            (e.keyCode >= 35 && e.keyCode <= 39)) {
                 // let it happen, don't do anything
                 return;
        }
        // Ensure that it is a number and stop the keypress
        if ((e.shiftKey || (e.keyCode < 48 || e.keyCode > 57)) && (e.keyCode < 96 || e.keyCode > 105)) {
            e.preventDefault();
        }
    });

    $("#order-submit").click(function () {
    	var black = parseInt($(".black-counter").val())
    	var white = parseInt($(".white-counter").val())

    	var checkout = "https://store.wearhaus.com/cart/"
		if (black > 0) {
			checkout += "997163061:" + black;
		}
		if (black > 0 && white > 0) {
			checkout += ",";
		}
		if (white > 0) {
			checkout += "997163065:" + white;
		}
		if (!(black == 0 && white == 0)) {
			window.location = checkout;
		}
    });
});
