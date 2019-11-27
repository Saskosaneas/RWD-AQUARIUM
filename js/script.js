// GARRY MOVES
$(document).ready(function(e) {
    
    var width = 1389;
    
    function goRight() {
        $(".fish1").animate({
        left: width
      }, 2000, function() {
         setTimeout(goLeft, 50);
      });
    }
    function goLeft() {
        $(".fish1").animate({
        left:0
      }, 2000, function() {
         setTimeout(goRight, 50);
      });
    }

    setTimeout(goRight, 50);
});


// GARRY SOUNDS //
var audio1 = $(".not-now-gary")[0];
$(".fish1").on("mouseenter" , function() {
	audio1.play();
});
//
var audio = $(".gary-meow")[0];
$(".fish1").click(function() {
    audio.play();
})
