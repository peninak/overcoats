var tourImages = ["../images/tour-images/sxsw.jpg","../images/tour-images/winter-tour.jpg", "../images/tour-images/fall-tour.jpg", "../images/tour-images/london-tour.jpg", 
<<<<<<< HEAD
"../images/tour-images/dublin-tour.png", "../images/tour-images/june-tour.jpg"];
=======
"../images/tour-images/dublin-tour.jpg", "../images/tour-images/june-tour.jpg"];
>>>>>>> origin/master

$(document).ready(function() {
	insertPix();
});

function insertPix() {
	for(var i=0; i<tourImages.length; i++) {
<<<<<<< HEAD
		$('.tour-slideshow').append('<img src=' + tourImages[i] + ' class="tour-image">');
	}
}



// $('.tour-slideshow').on('click', function() {
// 	$(this).height('25%');
// 	$(this).width('70%');
// 	$('.tour-image').css('visibility', 'hidden');
// 	$(this).css({
// 		'visibility': 'visible',
// 		'vertical-align': 'middle',
// 	});
// 	$('body').css('background-color', 'rgba(0, 0, 0, 0.85)');
// });
=======
		$('.tour-slideshow').append('<img src=' + tourImages[i] + 'class="tour-image"/>');
	}
}

$('.tour-slideshow').on('click', function() {
	$(this).height('25%');
	$(this).width('70%');
	$('.tour-image').css('visibility', 'hidden');
	$(this).css({
		'visibility': 'visible',
		'vertical-align': 'middle',
	});
	$('body').css('background-color', 'rgba(0, 0, 0, 0.85)');
});
>>>>>>> origin/master
