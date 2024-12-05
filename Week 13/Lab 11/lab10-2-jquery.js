//LAB 10 - 2 INVENTORY PAGE
jQuery(window).on("load", function () {
	$('.desc').hide();

	//ADD MOUSEOVER/MOUSEOUT FUNCTIONS FOR <tr>
	$('tr').hover(function () {

		$(this).toggleClass('selected');
	});

	//ADD CLICK EVENT TO <tr>
	$('tr').on("click", function () {
		$('.desc').hide();
		$(this).find(".desc").show();
	});

});
