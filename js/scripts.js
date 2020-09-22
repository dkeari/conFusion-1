$(document).ready(function(){
  $("#mycarousel").carousel( { interval:2000 } );
     $("#carouselButton").click(function(){
      if ($("#carouselButton").children("span").hasClass('fa-pause')) {
          $("#mycarousel").carousel('pause');
          $("#carouselButton").children("span").removeClass('fa-pause');
          $("#carouselButton").children("span").addClass('fa-play');
      }
      else if ($("#carouselButton").children("span").hasClass('fa-play')){
          $("#mycarousel").carousel('cycle');
          $("#carouselButton").children("span").removeClass('fa-play');
          $("#carouselButton").children("span").addClass('fa-pause');                    
      }
});	
//Assignment 4 Task 1,2,3
$("#myBtn").click(function(){
$("#myModal").modal("toggle");
});   
//Assignment 4 Task 1
$("#loginBtn").click(function(){
$("#loginModal").modal("toggle");
});
});