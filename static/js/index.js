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

    // Simple Lumos overview slideshow from exported PPT slides
    var slideshowImg = document.getElementById('lumos-slideshow');
    // Slides are expected at:
    // static/images/lumos-overview-slides/lumos_slides/Slide<number>.png
    var lumosSlideCount = 11; // Set this to the number of slides you add
    var slidePaths = [];
    for (var i = 1; i <= lumosSlideCount; i++) {
      slidePaths.push('static/images/lumos-overview-slides/lumos_slides/Slide' + i + '.png');
    }

    if (slideshowImg && slidePaths.length > 0) {
      var idx = 0;

      var dotsContainer = document.getElementById('lumos-slideshow-dots');
      var dots = [];

      function setSlide(newIdx) {
        idx = newIdx;
        slideshowImg.src = slidePaths[idx];
        if (dots.length) {
          dots.forEach(function(dot, i) {
            if (i === idx) {
              dot.classList.add('active');
            } else {
              dot.classList.remove('active');
            }
          });
        }
      }

      if (dotsContainer) {
        for (var j = 0; j < slidePaths.length; j++) {
          var dot = document.createElement('span');
          dot.className = 'slideshow-dot' + (j === 0 ? ' active' : '');
          (function(index) {
            dot.addEventListener('click', function() {
              setSlide(index);
            });
          })(j);
          dotsContainer.appendChild(dot);
          dots.push(dot);
        }
      }

      setSlide(0);

      if (slidePaths.length > 1) {
        setInterval(function() {
          setSlide((idx + 1) % slidePaths.length);
        }, 1500); // 1 second per slide
      }
    }

})
