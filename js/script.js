// GARRY MOVES 
$(document).ready(function(e) {
    
    var width = 1408;
    
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
//


//BUBBLE 1 RANDOM POSITION
$(document).ready(function(){
	bubble_random1();
});

function bubble_random1(){
    var width = 900;
    var height = 626;
    
    var x = Math.floor((Math.random() * width) + 1);
    var y = Math.floor((Math.random() * height) + 1);
      $( ".bubble1" ).animate({
    left: x,
          top: y
  }, 0, function() {});
    setTimeout(bubble_random1, 3500);
}
//BUBBLE 2 RANDOM POSITION
$(document).ready(function(){
	bubble_random2();
});

//BUBBLE 2 RANDOM POSITION    
    function scalebubble() {
        $(".fish1").css({
        "height": "auto",
        "width": "100px"
      } , function() {
$(this).css({
		"height": "auto",
		"width": "120px"
	});
});
    }
    
  


