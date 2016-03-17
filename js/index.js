//loop through image slideshow
var tourImages = ["../images/winter-tour.jpg", "../images/fall-tour.jpg", "../images/london-tour.jpg", "../images/dublin-tour.jpg", "../images/june-tour.jpg"];
var lifeImages = ["../images/coats-snow.jpg", "../images/overcoats-dcondren-final-72.jpg"]
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
	slideshow();
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

function slideshow() {
	for(var i=0; i<lifeImages.length; i++) {
		$('.life-slideshow').append('<img class="slideshow-image" src=' + lifeImages[i] + '>');
	}
};

// function($) {
// 	window.fnames = new Array(); 
// 	window.ftypes = new Array();
// 	fnames[0]='EMAIL'; ftypes[0]='email';
// 	fnames[1]='FNAME'; ftypes[1]='text';
// 	fnames[2]='LNAME'; ftypes[2]='text';
// }( jQuery); var $mcj = jQuery.noConflict(true);


