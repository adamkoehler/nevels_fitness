(function($) { 

/* Back to Top*/
$(document).ready(function(){
	
	//Check to see if the window is top if not then display button
	$(window).scroll(function(){
		if ($(this).scrollTop() > 100) {
			$('.scrollToTop').fadeIn();
		} else {
			$('.scrollToTop').fadeOut();
		}
	});
	
	//Click event to scroll to top
	$('.scrollToTop').click(function(){
		$('html, body').animate({scrollTop : 0},800);
		return false;
	});
	
});




/* WOW ANIMATED */
    wow = new WOW(
      {
        animateClass: 'animated',
        offset:       100,
        callback:     function(box) {
          console.log("WOW: animating <" + box.tagName.toLowerCase() + ">")
        }
      }
    );
    wow.init();

wow = new WOW(
{
boxClass:     'wow',      // default
animateClass: 'animated', // default
offset:       0,          // default
mobile:       false,       // default
live:         true        // default
}
                )
wow.init();
////////////////
})(jQuery);