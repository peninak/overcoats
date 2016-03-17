
var pressImagesAdded =  ['../images/press-images/the-deli.jpg', '../images/press-images/crack-in-the-road.jpg', '../images/press-images/the-blue-walrus.png', '../images/press-images/la-music-blog.jpg', '../images/press-images/killing-moon.png',
'../images/press-images/the-405.png', '../images/press-images/next-2-shine.png', 
'../images/press-images/method.png', '../images/press-images/this-is-our-jam.jpeg', 
'../images/press-images/next-2-shine.png', '../images/press-images/aural-wes.png',
'../images/press-images/hilly-dilly.png'];
var pressImagesDisplayed = ['../images/press-images/honey-pie.jpg', '../images/press-images/npr.jpeg', '../images/press-images/line-of-best.png', '../images/press-images/bullett.jpg', 
'../images/press-images/clash.jpg', '../images/press-images/axs.png',];
var pressLinks = ['http://www.thewildhoneypie.com/get-to-know-the-sweet-harmonies-and-unique-rhythms-of-overcoats/',
'http://www.npr.org/sections/world-cafe/2016/03/08/469053101/heavy-rotation-10-songs-public-radio-cant-stop-playing', 
'http://www.thelineofbestfit.com/new-music/discovery/overcoats-nighttime-hunger', 'http://www.clashmusic.com/news/premiere-overcoats-nighttime-hunger', 
'http://bullettmedia.com/article/nyc-duo-overcoats-are-afraid-of-the-dark-on-nighttime-hunger/','https://www.axs.com/news/overcoats-to-perform-in-nyc-ahead-of-sxsw-appearance-77384'];
var headlines = ['GET TO KNOW THE SWEET HARMONIES AND UNIQUE RHYTHMS OF OVERCOATS', "Heavy Rotation: 10 Songs Public Radio Can't Stop Playing", 
'Overcoats explore insomnia with hypnotic electronic track “Nighttime Hunger”', "Premiere: Overcoats - 'Nighttime Hunger'", "NYC Duo Overcoats Are Afraid of the Dark on 'Nighttime Hunger'",
'Overcoats to perform in NYC ahead of SXSW appearance'];
var i=0; 
var display=0;
var pressLinksIndex=0;
var headlinesIndex=0;

function loadMore() {
		$(window).on('scroll', function () {
			var scrollHeight = $(document).height();
			var scrollPosition = $(window).height() + $(window).scrollTop();
			if ((scrollHeight - scrollPosition) / scrollHeight === 0) {
				while(i<pressImagesAdded.length) {
					$('.boxes').append('<div class="pressBoxAdded"><div class="overlay"></div></div>');
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
		$('.boxes').append('<div class="pressBox"><div class="overlay"></div></div>');
		$('.pressBox').eq(display).css({
			'background-image': 'url(' + pressImagesDisplayed[display] + ')', 
			'background-size': '100% 100%', 
			'background-repeat': 'no-repeat',
		});
		$('.pressBox .overlay').eq(display).html('<a class="press" href=' + pressLinks[pressLinksIndex] + ' target="_blank">' + headlines[headlinesIndex] + '</a>');
		display++;
		pressLinksIndex++;
		headlinesIndex++;
	}
	};

$(document).ready(function() {
	addContent();
	loadMore();
});

