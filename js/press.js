var pressImagesAdded =  ['../images/press-images/tigress.jpg', '../images/press-images/the-deli.jpg', '../images/press-images/crack-in-the-road.jpg', '../images/press-images/the-blue-walrus.png', '../images/press-images/la-music-blog.jpg', '../images/press-images/killing-moon.png',
'../images/press-images/the-405.png', '../images/press-images/next-2-shine.png', 
'../images/press-images/method.png', '../images/press-images/this-is-our-jam.jpeg', 
'../images/press-images/next-2-shine.png', '../images/press-images/aural-wes.png',
'../images/press-images/hilly-dilly.png'];
var pressImagesDisplayed = ['../images/press-images/honey-pie.jpg', '../images/press-images/npr.jpeg', '../images/press-images/line-of-best.png', '../images/press-images/bullett.jpg', 
'../images/press-images/clash.jpg', '../images/press-images/axs.png',];
var pressLinks = ['http://www.npr.org/sections/world-cafe/2016/03/08/469053101/heavy-rotation-10-songs-public-radio-cant-stop-playing', ''];
var i=0; 
var display=0;

function loadMore() {
		$(window).on('scroll', function () {
			var scrollHeight = $(document).height();
			var scrollPosition = $(window).height() + $(window).scrollTop();
			if ((scrollHeight - scrollPosition) / scrollHeight === 0) {
				while(i<pressImagesAdded.length) {
					$('.boxes').append('<div class="pressBoxAdded"></div>');
					$('.pressBoxAdded').eq(i).css({
						'background-image' : 'url(' + pressImagesAdded[i] + ')',
						'background-size' : '100% 100%',
						'background-repeat': 'no-repeat'
					});
					i++;
					console.log(i);
				}	
				} 
			});
		};

function addContent() {
	while(display<pressImagesDisplayed.length) {
		$('.boxes').append('<div class="pressBox"></div>');
		$('.pressBox').eq(display).css({
			'background-image': 'url(' + pressImagesDisplayed[display] + ')', 
			'background-size': '100% 100%', 
			'background-repeat': 'no-repeat',
		});
		display++;
	}
	};

// $('.boxes').on('hover', function() {
// 		$(this).addClass('.overlay');
// 	});


$(document).ready(function() {
	addContent();
	loadMore();
});

