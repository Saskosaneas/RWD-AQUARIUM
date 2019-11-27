// GARRY MOVES  transform: scaleX(-1);
$(document).ready(function(e) {
    
    var width = 1389;
    
    function goRight() {
        $(".fish1").animate({
        left: width
      }, 20000, function() {
         setTimeout(goLeft, 50);
$(this).css("transform","scaleX(-1)");
      });
    }

    function goLeft() {
        $(".fish1").animate({
        left:0
      }, 20000, function() {
         setTimeout(goRight, 50);
         $(this).css("transform","scaleX(1)");
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
