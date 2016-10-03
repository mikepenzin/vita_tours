(function ($) {
  $(document).ready(function(){
    
	// // hide .navbar first
	// $(".navbar").hide();
	
	// fade in .navbar
	$(function () {
		$(window).scroll(function () {
            // set distance user needs to scroll before we fadeIn navbar
			if ($(this).scrollTop() > 100) {
				$('.navbar-default').css('background-color', '#393e41').fadeIn();
			} else {
				$('.navbar-default').css('background-color', 'transparent');;
			}
		});
	
	});

});
  }(jQuery));
