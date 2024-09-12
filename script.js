$(function () { // wait for document ready
  var controller = new ScrollMagic.Controller();

  // Horizontal Slide Animation
  var horizontalSlide = new TimelineMax()
    .to("#js-slideContainer", 1, { x: "-20%" })
    .to("#js-slideContainer", 1, { x: "-40%" })
    .to("#js-slideContainer", 1, { x: "-60%" })
    .to("#js-slideContainer", 1, { x: "-80%" });

  // Create ScrollMagic Scene for Desktop
  var scene = new ScrollMagic.Scene({
    triggerElement: "#js-wrapper",
    triggerHook: "onLeave",
    duration: "400%"
  })
    .setPin("#js-wrapper")
    .setTween(horizontalSlide)
    //.addIndicators() // Uncomment for debugging
    .addTo(controller);

  // Check for mobile view
  function checkViewport() {
    if (window.innerWidth <= 768) {
      // Destroy horizontal scene if in mobile view
      scene.destroy(true);
      // Allow vertical scrolling
      $('html, body').css('overflow-y', 'auto'); // Enable vertical scrolling
    } else {
      // Recreate the scene for desktop view if resized
      if (!scene) {
        scene = new ScrollMagic.Scene({
          triggerElement: "#js-wrapper",
          triggerHook: "onLeave",
          duration: "400%"
        })
          .setPin("#js-wrapper")
          .setTween(horizontalSlide)
          //.addIndicators() // Uncomment for debugging
          .addTo(controller);
      }
    }
  }

  // Initial check
  checkViewport();

  // Check on resize
  $(window).resize(function () {
    checkViewport();
  });
});