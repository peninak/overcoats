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
	$('body').width($(window).width());
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

