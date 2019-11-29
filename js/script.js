// GARRY MOVES 
$(document).ready(function(e) {
    
    var width = 1227;
    
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
//BUBBLES MOVE
function getRandom(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
};

function bubblmove(iddereferinta, rate) 
{
   var x = getRandom(0, 1400);
   var y = getRandom(0, 1200); // NOT TO GO OF THE BORDER OF THE SCREEN
   
    $(iddereferinta).offset({
           top: 650 // POSITION WHERE BUBBLE STARTS TO FLEX ;d
        , left: x
    });
    
    $(iddereferinta).animate({
         left: y
        , top: -100 
    }, rate, function () {
        bubblmove(iddereferinta, rate)
    });
}
$(document).ready(function () {
    bubblmove(".bubble1", 10000)
});
$(document).ready(function () {
    bubblmove(".bubble2", 9000)
});
$(document).ready(function () {
    bubblmove(".bubble3", 8000)
});
//SCALING BOBBLES 
var audio2 = $(".ballon-popup")[0];
 $(".bubble1").click(function () {
       audio2.play();
     $(this).css({"height": "auto", "width": "100px"});
  }); 
  $(".bubble2").click(function () {
       audio2.play();
     $(this).css({"height": "auto", "width": "100px"});
  }); 
   $(".bubble3").click(function () {
       audio2.play();
     $(this).css({"height": "auto", "width": "100px"});
  }); 
 



 //FISH  move randomly 
$(document).ready(function(){
    animateDiv(".fish")
});


function makeNewPosition()
{
    
    // making the dimensions of the movement ( window size - fish size in pixels )
    var h = $(window).height() - 89;
    var w = $(window).width() - 160;
    
    var nh = Math.floor(Math.random() * h);
    var nw = Math.floor(Math.random() * w);
    
    return [nh,nw];    
    
}



function animateDiv(myclass){
    var newq = makeNewPosition();
    $(".fish").animate({ top: newq[0], left: newq[1] }, 1000,   function(){
      animateDiv(myclass);        
    });
};





