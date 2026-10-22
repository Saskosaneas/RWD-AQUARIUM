$(document).ready(function () {

  // GARRY MOVES
  // width is read on every pass so Gary follows window resizes
  function garyMaxLeft() {
    return $(window).width() - 120;
  }

  function goRight() {
    $(".fish1").animate({
      left: garyMaxLeft()
    }, 20000, function () {
      setTimeout(goLeft, 50);
      $(this).css("transform", "scaleX(-1)");
    });
  }

  function goLeft() {
    $(".fish1").animate({
      left: 0
    }, 20000, function () {
      setTimeout(goRight, 50);
      $(this).css("transform", "scaleX(1)");
    });
  }
  setTimeout(goRight, 50);

  // GARRY SOUNDS
  var audio1 = $(".not-now-gary")[0];
  $(".fish1").on("mouseenter", function () {
    audio1.play();
  });

  var audio = $(".gary-meow")[0];
  $(".fish1").click(function () {
    audio.play();
  });

  // BUBBLES MOVE
  function getRandom(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  function bubblmove(iddereferinta, rate) {
    var maxLeft = $(window).width() - 80;
    var startLeft = getRandom(0, maxLeft);
    var endLeft = getRandom(0, maxLeft);
    var z = $(window).height() - 80; // start from the bottom of the screen

    $(iddereferinta).css({ top: z, left: startLeft }).fadeIn();

    $(iddereferinta).animate({
      left: endLeft
      , top: -100
    }, rate, function () {
      bubblmove(iddereferinta, rate);
    });
  }

  bubblmove(".bubble1", 10000);
  bubblmove(".bubble2", 9000);
  bubblmove(".bubble3", 8000);

  // POPPING BUBBLES (they come back on their next trip up)
  var audio2 = $(".ballon-popup")[0];

  $(".bubble").click(function () {
    audio2.play();
    $(this).hide();
  });

  // FISH move randomly
  // keeps a w x h image fully inside the window
  function makeNewPosition(w, h) {
    var maxTop = Math.max($(window).height() - h, 0);
    var maxLeft = Math.max($(window).width() - w, 0);
    var nh = Math.floor(Math.random() * maxTop);
    var nw = Math.floor(Math.random() * maxLeft);
    return [nh, nw];
  }

  function fishmoves() {
    var newq = makeNewPosition(160, 89);
    $(".fish").animate({ top: newq[0], left: newq[1] }, 3000, fishmoves);
  }

  function fishmoves2() {
    var newq = makeNewPosition(300, 300); // room for the inflated pufferfish
    $(".fish2").animate({ top: newq[0], left: newq[1] }, 5000, fishmoves2);
  }

  fishmoves();
  fishmoves2();

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
    // clicks on Gary, bubbles or the pufferfish have their own behaviour
    if ($(event.target).closest(".fish1, .bubble, .fish2").length) return;

    const { clientX, clientY } = event;
    const fishImage = $(".fish");

    const { left: imageLeft, top: imageTop } = fishImage.offset();

    const left = clientX - fishImage.width() / 2;
    const top = clientY - fishImage.height() / 2;

    const degrees = getFishDirectionDegrees(imageLeft, imageTop, left, top);

    fishImage.css({ transform: `rotate(${degrees}deg)` });
    fishImage.stop(true).animate({ left, top }, 1000, fishmoves);
  });

  // increasing / decreasing pufferfish dimensions + sounds
  var audio3 = $(".blow-up")[0];
  var audio4 = $(".blow-out")[0];
  var deflateTimer;

  function increasesize() {
    $(".fish2").css({ "width": "300px", "height": "300px" });
    $(".fish2").attr('src', "images/flated.png");
    audio3.play();
  }

  function decreasesize() {
    $(".fish2").css({ "width": "200px", "height": "200px" });
    $(".fish2").attr('src', "images/deflated.png");
    audio4.play();
  }

  $(".fish2").dblclick(() => {
    increasesize();

    clearTimeout(deflateTimer);
    deflateTimer = setTimeout(decreasesize, 2000);
  });
});
