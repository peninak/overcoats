var pressImages = ['../images/press-images/tigress.jpg', '../images/press-images/the-deli.jpg', '../images/press-images/crack-in-the-road.jpg', '../images/press-images/the-blue-walrus.png', '../images/press-images/la-music-blog.jpg', '../images/press-images/killing-moon.png',
'../images/press-images/the-405.png', '../images/press-images/next-2-shine.png', 
'../images/press-images/method.png', '../images/press-images/this-is-our-jam.jpeg', 
'../images/press-images/next-2-shine.png', '../images/press-images/aural-wes.png',
'../images/press-images/hilly-dilly.png'];
// var content = [];
var i=0; 
var isScrolling = false; 

function loadMore() {
		$(window).on('scroll', function () {
			// if($(window).scrollHeight >= $(window).height()) {
				while(i<pressImages.length){
					isScrolling = true;
					i++;
					$('.boxes').append('<div class="pressBox"> <img class="pressImage" src=' + pressImages[i] + '/></div>');
					console.log(i);
			// }
			} 
			});
		};

$(document).ready(function() {
	$('.pressBox').hover(function() {
		overlay_background: '#000';
	    overlay_opacity: 0.6;
		});
	loadMore();
});

