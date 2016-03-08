	//loop through image slideshow
	$('.tour-slideshow').hide();
	var tourImages = ["../images/winter-tour.jpg", "../images/fall-tour.jpg", "../images/london-tour.jpg", "../images/dublin-tour.jpg", "../images/june-tour.jpg"];

	function tourSlideshow() {
		//setInterval(function() {
			for(var i=0; i < tourImages.length; i++) {
				(tourImages[i]).show();
			};
		};
	
	//code to make the layout responsive
	$(window).on('resize', function() {
		$('body').height($(window).height());
	});

	//animate the element with class 'mainframe'
	$(document).ready(function() {
		if($('iframe .mainFrame').requestFullscreen) {
		$('iframe .mainFrame').requestFullscreen;
		} else if ($('iframe .mainFrame').mozRequestFullScreen) {
		$('iframe .mainFrame').mozRequestFullScreen;
		} else if ($('iframe .mainFrame').webkitRequestFullscreen) {
		$('iframe .mainframe').webkitRequestFullscreen;
	}
});
