$(window).on("scroll", function() {
  parallaxScroll();
});

function parallaxScroll() {
  var scrolled = $(window).scrollTop();

  $(".layer-stars").css("top", (0 - scrolled * 0.1) + "px");
  $(".layer-nebula").css("top", (0 - scrolled * 0.2) + "px");
  $(".layer-mountains").css("top", (0 - scrolled * 0.4) + "px");
  $(".layer-planet").css("top", (50 - scrolled * 0.5) + "px");
  $(".layer-fog").css("top", (100 - scrolled * 0.6) + "px");
  $(".layer-ship").css("top", (200 - scrolled * 0.7) + "px");
  $(".layer-meteor").css("top", (150 - scrolled * 0.9) + "px");
  $(".layer-meteor-1").css("top", (100 - scrolled * 1.1) + "px");
}
