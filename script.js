
$(function () {
  var controller = new ScrollMagic.Controller();

  function setupHorizontalScrolling() {
    var horizontalSlide = new TimelineMax()
      .to("#js-slideContainer", 1, { x: "-20%" })
      .to("#js-slideContainer", 1, { x: "-40%" })
      .to("#js-slideContainer", 1, { x: "-60%" })
      .to("#js-slideContainer", 1, { x: "-80%" });

    new ScrollMagic.Scene({
      triggerElement: "#js-wrapper",
      triggerHook: "onLeave",
      duration: "400%"
    })
      .setPin("#js-wrapper")
      .setTween(horizontalSlide)
      .addTo(controller);
  }

  function setupVerticalScrolling() {
    // Destroy existing ScrollMagic Controller to avoid conflicts
    controller.destroy(true);

    // Reset scroll position for vertical scrolling
    $(window).off('scroll'); // Remove any previous scroll event handlers

    $(window).on('scroll', function () {
      var scrollTop = $(this).scrollTop();
      $("#js-slideContainer").css("transform", "translateY(" + (-scrollTop) + "px)");
    });
  }

  function init() {
    if ($(window).width() > 768) {
      setupHorizontalScrolling();
    } else {
      setupVerticalScrolling();
    }
  }

  // Initial setup
  init();

  // Re-initialize on resize
  $(window).on('resize', function () {
    init();
  });
});
