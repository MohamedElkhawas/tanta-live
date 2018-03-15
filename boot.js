$(window).on('load',function(){
    
    "use strict";
    
    // Loading Elements
    
    $(".loading-overlay .sk-cube-grid").fadeOut(3000, function () {
        
        // Show The Scroll

        $("body").css("overflow", "auto");
        
        $(this).parent().fadeOut(2000, function () {
            
            $(this).remove();
        });
    });
});


// scroll top
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


    // showing and hiding search box
    
    $('.search-input').click(function () {
        
        $('.searchBox').show();
        
    });
    
    $('.search-li').mouseleave(function () {
        
         $('.searchBox').hide();
        
    });









