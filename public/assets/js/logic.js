$(document).ready(function(){
	//Materialize intiializiations
	$('.parallax').parallax();
    $('.collapsible').collapsible();
	$('ul.tabs').tabs();

	//Custom
	$('tbody tr').hover(
		//handler in
		function(){
			$(this).addClass('z-depth-4 blue-grey darken-3');
		},
		//handler out
		function(){
			$(this).removeClass('z-depth-4 blue-grey darken-3');
		});
});