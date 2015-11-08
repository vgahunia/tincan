$(document).ready(function() {

  function setHeight() {
    windowHeight = $('video').innerHeight();
    window2 = $(window).innerHeight();
    console.log(windowHeight);
    console.log(window2);
    $('#content').css('min-height', windowHeight-156);
  };
  setHeight();
  
  $(window).resize(function() {
    setHeight();

  });
});