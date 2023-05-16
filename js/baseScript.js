$(document).ready(function() {
	
	"use strict";

    $("body").bind('touchmove', function(event) {
        event.preventDefault();
    });
    
    // $("#wrapper").swipe({

    //     swipe: function(event, direction, distance, duration, fingerCount) {

    //         if (!$(event.target).hasClass('noSwipe')) {

    //             if (direction == 'left') {                  
    //                 document.location="veeva:nextSlide()";                                              

    //             } else if (direction == 'right') {
				// 	document.location="veeva:prevSlide()";                     
    //             } 
    //         }
    //         event.stopImmediatePropagation();
    //         event.preventDefault();
    //     },
    //     threshold: 200
    // });	
    $(document).swipe({
        swipeLeft: function(event, direction, distance, duration, fingerCount) {
            console.log("left");
            if (!$(event.target).hasClass('noSwipe')) {              
                  document.location="veeva:gotoSlide(Diabetes-Connect_01.zip)";
             }
        },
        swipeRight: function(event, direction, distance, duration, fingerCount) {   
            console.log("right");
            if (!$(event.target).hasClass('noSwipe')) {              
                document.location="veeva:gotoSlide(Diabetes-Connect_02.zip)";
             }
        }
        
    });

});