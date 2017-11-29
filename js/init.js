$(document).ready(function(){
    
    $(".dropdown-button").dropdown();

    $(".button-collapse").sideNav();

    $('.carousel.carousel-slider').carousel({
        fullWidth: true,
        duration: 500,
    });

   $('.carousel').carousel();
              setInterval(function() {
    $('.carousel').carousel('next');
          }, 20000); 

    $('.collapsible').collapsible();

    $('.modal').modal();

});

// $(function($){

//   $(function(){

//     // $(".button-collapse").sideNav();
//     // $('.slider').slider({full_width: true});	

//     $('.carousel.carousel-slider').carousel({
//     	fullWidth: true,
//     	duration: 500,
//     });

//    $('.carousel').carousel();
// 			  setInterval(function() {
//     $('.carousel').carousel('next');
// 		  }, 20000); 

//     $('.collapsible').collapsible();

//   });   // end of document ready

// })(Jquery); // end of jQuery name space