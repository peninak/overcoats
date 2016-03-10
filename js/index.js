//loop through image slideshow
var tourImages = ["../images/winter-tour.jpg", "../images/fall-tour.jpg", "../images/london-tour.jpg", "../images/dublin-tour.jpg", "../images/june-tour.jpg"];

// function tourSlideshow() {
// 	setInterval(function() {
// 		for(var i=0; i < tourImages.length; i++){
// 			$('.tour-slideshow').show();
// 	};
// });

//code to make the layout responsive
$(window).on('resize', function() {
	$('body').height($(window).height());
});

//animate the element with the id 'first'
$(document).ready(function() {
	$('bttn').width($('input').width());
	$('bttn').height($('input').height());
	$('#first').height($(window).height());
	$('#first').width($(window).width());
	$('#first').css('margin', '0');
	$('a').animate({
		color: '#f5efd0'
	}, 3000);
});

$('.tour-image').on('click', function() {
	$(this).height('25%');
	$(this).width('70%');
	$('.tour-image').css('visibility', 'hidden');
	$(this).css({
		'visibility': 'visible',
		'vertical-align': 'middle',
	});
	$('body').css('background-color', 'rgba(0, 0, 0, 0.85)');
});

