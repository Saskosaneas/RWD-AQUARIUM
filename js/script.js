// GARRY MOVES 
$(document).ready(function(e) {
    

    var width = $(document).width()-120;

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
  var x = getRandom(0, $(document).width());
   var y = getRandom(0, $(document).height());
   var z = $(window).height() - 80; //position for bubbles to start from the bottomo of the screen
    $(iddereferinta).offset({
           top: z // POSITION WHERE BUBBLE STARTS TO FLEX ;d
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
 $(".bubble1").click(function popup1() {
       audio2.play();
     $(this).css({"height": "auto", "width": "100px"});
    
  }); 
  $(".bubble2").click(function popup2() {
       audio2.play();
      
     $(this).css({"height": "auto", "width": "100px"});
  }); 
   $(".bubble3").click(function popup3 () {
       audio2.play();
     $(this).css({"height": "auto", "width": "100px"});
       
  }); 





 //FISH  move randomly 
$(document).ready(function(){
    fishmoves(".fish")
        fishmoves2(".fish2")

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

function makeNewPosition2()
{
    
    // making the dimensions of the movement ( window size - fish size in pixels )
    var h = $(window).height() - 200;
    var w = $(window).width() - 200;
    var nh = Math.floor(Math.random() * h);
    var nw = Math.floor(Math.random() * w);
    return [nh,nw];       
}

function fishmoves2(myclass){
    var newq = makeNewPosition();
    $(".fish2").animate({ top: newq[0], left: newq[1] }, 5000,   function(){
      fishmoves2(myclass);        
    });

};
function fishmoves(myclass){
    var newq = makeNewPosition();
    $(".fish").animate({ top: newq[0], left: newq[1] }, 3000,   function(){
      fishmoves(myclass);        
    });

};




// messing with the fish
// get direction angle of the point
  const getFishDirectionDegrees = (originX, originY, targetX, targetY) => {
    var dx = originX - targetX;
    var dy = originY - targetY;
    
    let theta = Math.atan2(-dy, -dx);
    theta *= 180 / Math.PI;
    
if (theta < 0) theta += 360;


    return theta;
  };
$(document).click(event => {
    const { clientX, clientY } = event;
    const fishImage = $(".fish");
    
    const { left: imageLeft, top: imageTop } = fishImage.offset();
    
    const left = clientX - fishImage.width() / 2;
    const top = clientY - fishImage.height() / 2;
    
    const degrees = getFishDirectionDegrees(imageLeft, imageTop, left, top);
    

    fishImage.css({ transform: `rotate(${degrees}deg)` });
    fishImage.stop(true).animate({ left, top }, 1000, () => {
      fishmoves(".fish", 6100);
    });
  });

// increasing /decfreasing fish dimensions + sounds


$(".fish3").fadeOut(1); // the image not to be displayed ( used down for  pupper )
var audio3 = $(".blow-up")[0];
var audio4 = $(".blow-out")[0];

function increasesize() {
  $(".fish2").css({"width": "300px", "height":"300px"});
  $(".fish2").attr('src',"images/flated.png");
  audio3.play();
};

function decreasesize() {
  $(".fish2").css({"width": "200px", "height":"200px"});
  $(".fish2").attr('src',"images/deflated.png");
  audio3.play();
};

 $(".fish2").dblclick(() => {
    increasesize();

    setTimeout(() => {
      decreasesize();
    }, 2000);
  });

