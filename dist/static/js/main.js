// Page Load Overlay


$(document).ready(function() {
  $('.overlay').delay(300).fadeOut('200');
});



// Espace ---------------------------------------



// Click on text to show more:

$(document).ready(function() {
  $(".title").click(function() {
    $(this).next().slideToggle();
  })
});




// Click on image to enlarge them, and display background overlay

$(document).ready(function() {
  $(".small").click(function() {
    $(this).toggleClass("large");
    $(".background").toggleClass("show");
  })
});


















// Projects  ---------------------------------------



// When click on view, go next:

$(document).ready(function() {
  $(".view").click(function() {
    $(this).addClass("hidden");
    $(this).prev().removeClass("hidden");
  })

});













