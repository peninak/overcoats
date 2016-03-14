//animate the element with the id 'first'
$(document).ready(function() {
	$('#first').animate({
		height: $(window).height(),
		width: $(window).width(),
		margin: 0,
	}, 5000);

	$('.body').animate({
		width: '49.5%', 
		height: '450px',
		margin: 0,
	}, 5000);

	$('.mainFrame').animate({
		width: $(window).width(), 
		margin: 0,
	}, 5000);

	// $('a').animate({
	// 	color: '#f5efd0'
	// }, 5000);
});

// $(window).on('scroll', function(){
// 	var scrollHeight = $(document).height();
// 	var scrollPosition = $(window).height() + $(window).scrollTop();
// 	if ((scrollHeight - scrollPosition) / scrollHeight === 0) {
// 		$('a').css({
// 			'color': '#000',
// 			'font-weight': '400'
// 		});
// 	}
// 	else {
// 		$('a').css({
// 			'color': '#f5efd0',
// 			'font-weight': '100'
// 		});
// 	}
// });