// $(function() {
// 	$.scrolltracker('.tab-text-left, .tab-text-right');
// });

$(document).ready(function() {

 	// click functionality mainly for tablets/smartphones

	$('#sync .tab-left').click(function() {
		if ($('#sync .tab-text-left').css('left') == '0px') {
			$('#sync .tab-text-left').animate({left: '-479px'}, 400);
		}
		else {
			$('#sync .tab-text-left').animate({left: '0px'}, 400);
		}
	});


	$('#color .tab-right').click(function() {
		if ($('#color .tab-text-right').css('right') == '0px') {
			$('#color .tab-text-right').animate({right: '-479px'}, 400);
		}
		else {
			$('#color .tab-text-right').animate({right: '0px'}, 400);
		}
	});

	$('#touch .tab-left').click(function() {
		if ($('#touch .tab-text-left').css('left') == '0px') {
			$('#touch .tab-text-left').animate({left: '-479px'}, 400);
		}
		else {
			$('#touch .tab-text-left').animate({left: '0px'}, 400);
		}
	});

	$('#app .tab-right').click(function() {
		if ($('#app .tab-text-right').css('right') == '0px') {
			$('#app .tab-text-right').animate({right: '-479px'}, 400);
		}
		else {
			$('#app .tab-text-right').animate({right: '0px'}, 400);
		}
	});

	// hover functionality mainly for desktops/laptops

	$('#sync .tab-left').mouseenter(function() {
		if ($(window).width() > 1099) { // desktop
			if ($('#sync .tab-text-left').css('left') == '-670px') {
				$('#sync .tab-text-left').animate({left: '0px'}, 400);
			}
		}
		else { // tablet
			if ($('#sync .tab-text-left').css('left') == '-479px') {
				$('#sync .tab-text-left').animate({left: '0px'}, 400);
			}
		}

	});

	$('#sync .slide-left').mouseleave(function() {
		if ($(window).width() > 1099) {
			if ($('#sync .tab-text-left').css('left') == '0px') {
				$('#sync .tab-text-left').animate({left: '-670px'}, 400);
			}
		}
		else {
			if ($('#sync .tab-text-left').css('left') == '0px') {
				$('#sync .tab-text-left').animate({left: '-479px'}, 400);
			}			
		}


	});

	$('#color .tab-right').mouseenter(function() {
		if ($(window).width() > 1099) {
			if ($('#color .tab-text-right').css('right') == '-670px') {
				$('#color .tab-text-right').animate({right: '0px'}, 400);
			}
		}
		else {
			if ($('#color .tab-text-right').css('right') == '-479px') {
				$('#color .tab-text-right').animate({right: '0px'}, 400);
			}
		}

	});

	$('#color .slide-right').mouseleave(function() {
		if ($(window).width() > 1099) {
			if ($('#color .tab-text-right').css('right') == '0px') {
				$('#color .tab-text-right').animate({right: '-670px'}, 400);
			}			
		}
		else {
			if ($('#color .tab-text-right').css('right') == '0px') {
				$('#color .tab-text-right').animate({right: '-479px'}, 400);
			}
		}


	});

	$('#touch .tab-left').mouseenter(function() {
		if ($(window).width() > 1099) {
			if ($('#touch .tab-text-left').css('left') == '-670px') {
				$('#touch .tab-text-left').animate({left: '0px'}, 400);
			}
		}
		else {
			if ($('#touch .tab-text-left').css('left') == '-479px') {
				$('#touch .tab-text-left').animate({left: '0px'}, 400);
			}
		}

	});

	$('#touch .slide-left').mouseleave(function() {
		if ($(window).width() > 1099) {
			if ($('#touch .tab-text-left').css('left') == '0px') {
				$('#touch .tab-text-left').animate({left: '-670px'}, 400);
			}
		}
		else {
			if ($('#touch .tab-text-left').css('left') == '0px') {
				$('#touch .tab-text-left').animate({left: '-479px'}, 400);
			}
		}


	});

	$('#app .tab-right').mouseenter(function() {
		if ($(window).width() > 1099) {
			if ($('#app .tab-text-right').css('right') == '-670px') {
				$('#app .tab-text-right').animate({right: '0px'}, 400);
			}
		}
		else {
			if ($('#app .tab-text-right').css('right') == '-479px') {
				$('#app .tab-text-right').animate({right: '0px'}, 400);
			}
		}

	});

	$('#app .slide-right').mouseleave(function() {
		if ($(window).width() > 1099) {
			if ($('#app .tab-text-right').css('right') == '0px') {
				$('#app .tab-text-right').animate({right: '-670px'}, 400);
			}
		}
		else {
			if ($('#app .tab-text-right').css('right') == '0px') {
				$('#app .tab-text-right').animate({right: '-479px'}, 400);
			}
		}


	});

  /* stop YouTube vid on close */
  $('#myModal').on('hidden.bs.modal', function () {
    $('#myModal iframe').removeAttr('src');
  })
	
});