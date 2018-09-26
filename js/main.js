$(document).ready(function(){
	//test the call-to-action buttons
	$('.button').on('click',function(){
		console.log('it works');
	});
	//toggle the hamburger menu (on smaller screen sizes only)
	$('.nav-icon').on('click',function(){
		$('.navbar-list').slideToggle();
	});
	/*adjust grid columns for call-to-action section, to present buttons on either a single row
	or multiple rows, depending on screen size*/
	$(window).resize(function(){
	 if($(window).width()<768){
	  $('.button1, .button2, .button3').removeClass('grid-third');
	  $('.button1, .button2').addClass('grid-half');
	  $('.button3').addClass('grid-whole');
	 }
	 else{
	 	$('.button1, .button2').removeClass('grid-half');
	 	$('.button3').removeClass('grid-whole');
	 	$('.button1, .button2, .button3').addClass('grid-third');
	 }
	});
});


