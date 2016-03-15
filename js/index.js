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

$(document).ready(function() {
});

$(window).on('scroll', function(){
	var scrollHeight = $(document).height();
	var scrollPosition = $(window).height() + $(window).scrollTop();
	if ((scrollHeight - scrollPosition) / scrollHeight === 0) {
		$('.mailing').css({
		'visibility': 'visible',
		});
	} else {
		$('.mailing').css({
		'visibility': 'hidden',
		});
	}					
});



