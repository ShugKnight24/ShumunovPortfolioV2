$(document).ready(function() {

  var $nav = $("#nav");
  var $li = $("li");
  var $a = $("a");

  // fade nav when mouse enters
  $li.mouseenter(function() {
    $(this).fadeTo("slow", "0.50");
  });

  // fade nav back on mouse leave
  $li.mouseleave(function() {
    $(this).fadeTo("slow", "1.0");
  });

  /******************
    jQuery Accordion
  ******************/

  // Hide all panels to start
  var $projects = $(".projects").hide();

  // Show first panel on load
  $projects.first().show();

  // On click of panel title
  $projects.click(function() {
    var $this = $(this);

    // Slide up all other panels
    $projects.slideUp();

    //Slide down target panel
    $projects.parent().next.slideDown();

    return false;
  });
});
