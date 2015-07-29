$(function() {
	$.scrolltracker('.tab-text-left, .tab-text-right');

	// if ($('.tab-text-left').hasClass('onfromtop')) {
	// 	console.log("on from top!");
	// 	$('#sync .tab-text-left').animate({left: 0}, 400);
	// }
	// else {
	// 	$('#sync .tab-text-left').animate({left: '-728px'}, 400);
	// }
});

$(document).ready(function() {

	// $(window).scroll(function() {
	// 	var scrolltop = $(window).scrollTop();
	// 	// console.log('scroll: '+ scrolltop);

	// 	var sectionOffset = $('#sync .tab-text-left').offset().top,
	// 		sectionOuterHeight = $('#sync .tab-text-left').outerHeight(),
	// 		sectionOffsetBottom = $('#sync .tab-text-left').offset().bottom,
	// 		windowHeight = $(window).height();

	// 	if (scrolltop > (sectionOffset + sectionOuterHeight - windowHeight)) {
	// 		console.log("you've scrolled to section!");
	// 		if ($('#sync .tab-text-left').css('left')=='0px'){
	// 			$('#sync .tab-text-left').animate({left: '-728px'}, 400);
	// 		}
	// 		else {
	// 			$('#sync .tab-text-left').animate({left: 0}, 400);
	// 		}
	// 	}

	// 	// if (scrolltop > 700 && scrolltop < 1400) {
	// 	// 	if ($('#sync .tab-text-left').css('left')=='0px'){
	// 	// 		$('#sync .tab-text-left').animate({left: '-728px'}, 400);
	// 	// 	}
	// 	// 	else {
	// 	// 		$('#sync .tab-text-left').animate({left: 0}, 400);
	// 	// 	}
	// 	// }
	// 	else {
	// 		if ($('#sync .tab-text-left').css('left')=='0px'){
	// 			$('#sync .tab-text-left').animate({left: '-728px'}, 400);
	// 		}
	// 		else {
	// 			$('#sync .tab-text-left').animate({left: '-728px'}, 400);
	// 		}
	// 	}

	// });


	$('#sync .tab-row').click(function() {

		if ($('#sync .tab-text-left').css('left')=='0px'){
			// $('#sync .tab-text-left').animate({left: '-728px'}, 400);
			$('#sync .tab-text-left').addClass('onfromtop');
		}
		else {
			$('#sync .tab-text-left').animate({left: 0}, 400);
		}
	});

	$('#color .tab-row').click(function() {

		if ($('#color .tab-text-right').css('right')=='0px'){
			$('#color .tab-text-right').animate({right: '-728px'}, 400);
		}
		else {
			$('#color .tab-text-right').animate({right: 0}, 400);
		}
	});

	$('#touch .tab-row').click(function() {

		if ($('#touch .tab-text-left').css('left')=='0px'){
			$('#touch .tab-text-left').animate({left: '-728px'}, 400);
		}
		else {
			$('#touch .tab-text-left').animate({left: 0}, 400);
		}
	});

	$('#app .tab-row').click(function() {

		if ($('#app .tab-text-right').css('right')=='0px'){
			$('#app .tab-text-right').animate({right: '-728px'}, 400);
		}
		else {
			$('#app .tab-text-right').animate({right: 0}, 400);
		}
	});
});