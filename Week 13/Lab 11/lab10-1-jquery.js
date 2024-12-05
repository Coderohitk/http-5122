//LAB 10 - 1 FAQ PAGE

//Listen for window load the jQuery way
jQuery(window).on("load", function () {

	//Inside of here is your jQuery/JavaScript
	$('.contentBox').hide();

	//ADD CLICK EVENT TO <h2>
	$("h2").on("click", function () {

		$(this).next(".contentBox").slideToggle(3000);
		$(".contentBox").not($(this).next()).slideUp(3000);
	});
	
	//CHANGE <p> BACKGROUND ON HOVER
	$('p').hover(function () {

		$(this).toggleClass('textHovered');
	});


});



