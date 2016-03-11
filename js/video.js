//animate the element with the id 'first'
$(document).ready(function() {
	$('#first').animate({
		height: $(window).height(),
		width: $(window).width(),
		margin: 0,
	}, 5000);

	$('.body').animate({
		width: '49%', 
		height: '450px',
	}, 5000);

	$('.mainFrame').animate({
		width: $(window).width(), 
	}, 5000);

	$('a').css({'color': '#f5efd0'});
	// $('a').addClass('.vid');
	// $('bttn').width($('input').width());
	// $('bttn').height($('input').height());
	
});