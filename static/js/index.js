window.HELP_IMPROVE_VIDEOJS = false;


$(document).ready(function() {
    // Check for click events on the navbar burger icon

    var options = {
			slidesToScroll: 1,
			slidesToShow: 1,
			loop: true,
			infinite: true,
			autoplay: true,
			autoplaySpeed: 5000,
    }

		// Initialize all div with carousel class
    var carousels = bulmaCarousel.attach('.carousel', options);
	
    bulmaSlider.attach();

    // Simple overview slideshow from exported PPT slides
    var slideshowImg = document.getElementById('overview-slideshow');
    // Slides are expected at:
    // static/images/lumos-overview-slides/lumos_slides/Slide<number>.png
    var lumosSlideCount = 1; // TODO: set this to the number of slides you add
    var slidePaths = [];
    for (var i = 1; i <= lumosSlideCount; i++) {
      slidePaths.push('static/images/lumos-overview-slides/lumos_slides/Slide' + i + '.png');
    }

    if (slideshowImg && slidePaths.length > 0) {
      var idx = 0;
      slideshowImg.src = slidePaths[0];
      if (slidePaths.length > 1) {
        setInterval(function() {
          idx = (idx + 1) % slidePaths.length;
          slideshowImg.src = slidePaths[idx];
        }, 5000); // 5 seconds per slide
      }
    }

})
