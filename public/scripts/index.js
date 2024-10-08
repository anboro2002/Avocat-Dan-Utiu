// hamburger menu pt mobile si tablet
const hamMenu = document.querySelectorAll(".ham-menu");
const offScreen = document.querySelectorAll(".off-screen-menu");

hamMenu.forEach((hamMenu, index) => {
  hamMenu.addEventListener("click", () => {
    hamMenu.classList.toggle("active");
    offScreen[index].classList.toggle("active");
  });
});

// Select elements
const dropDownToggle = document.querySelector(".dropdown-toggle");
const dropDownMenu = document.querySelector(".dropdown-menu");

// Function to show the dropdown
function showDropdown() {
  dropDownToggle.classList.add("show");
  dropDownMenu.classList.add("show");
}

// Function to hide the dropdown
function hideDropdown() {
  dropDownToggle.classList.remove("show");
  dropDownMenu.classList.remove("show");
}

// Open menu on hover over the toggle button
dropDownToggle.addEventListener("mouseenter", showDropdown);

// Keep menu open when hovering over the menu itself
dropDownMenu.addEventListener("mouseenter", showDropdown);

// Close menu when mouse leaves both the button and the menu
dropDownToggle.addEventListener("mouseleave", (event) => {
  // Use a timeout to avoid immediate closing
  setTimeout(() => {
    if (!dropDownMenu.matches(":hover") && !dropDownToggle.matches(":hover")) {
      hideDropdown();
    }
  }, 100);
});

dropDownMenu.addEventListener("mouseleave", (event) => {
  // Use a timeout to avoid immediate closing
  setTimeout(() => {
    if (!dropDownMenu.matches(":hover") && !dropDownToggle.matches(":hover")) {
      hideDropdown();
    }
  }, 100);
});

// Close the menu when clicking outside of it
document.body.addEventListener("click", (event) => {
  if (
    !dropDownMenu.contains(event.target) &&
    !dropDownToggle.contains(event.target)
  ) {
    hideDropdown();
  }
});

// Selecting necessary elements
const serviciiLink = document.querySelector(".servicii-link");
const serviciiSubMenu = document.querySelector(".servicii-sub-menu");

// Toggle SERVICII dropdown in mobile/tablet navbar
serviciiLink.addEventListener("click", (event) => {
  event.stopPropagation();
  serviciiSubMenu.classList.toggle("hidden");
});

// Close the SERVICII submenu when clicking outside of it
document.body.addEventListener("click", (event) => {
  if (
    !serviciiSubMenu.contains(event.target) &&
    !serviciiLink.contains(event.target)
  ) {
    serviciiSubMenu.classList.add("hidden"); // Hide the submenu if clicked outside
  }
});

// carousel functionality
document.addEventListener("DOMContentLoaded", function () {
  var carousel = document.querySelector(".carousel");
  var slides = carousel.querySelectorAll(".carousel-item");
  var indicators = carousel.querySelectorAll(".carousel-indicators li");
  var currentIndex = 0;
  var interval = 3000; // Auto slide 3 sec

  // Function to show a specific slide
  function showSlide(index) {
    // Hide all slides
    slides.forEach(function (slide) {
      slide.classList.remove("active");
    });

    // Show the slide with the specified index
    slides[index].classList.add("active");

    // Update the active indicator
    indicators.forEach(function (indicator, i) {
      if (i === index) {
        indicator.classList.add("active");
      } else {
        indicator.classList.remove("active");
      }
    });
  }

  // Function to move to a specific slide
  function moveToSlide(index) {
    currentIndex = index;
    if (currentIndex < 0) {
      currentIndex = slides.length - 1; // Wrap around to the last slide
    } else if (currentIndex >= slides.length) {
      currentIndex = 0; // Wrap around to the first slide
    }
    showSlide(currentIndex);
  }

  // Function to move to the next slide
  function nextSlide() {
    moveToSlide(currentIndex + 1);
  }

  // Function to move to the previous slide
  function prevSlide() {
    moveToSlide(currentIndex - 1);
  }

  // Auto slide
  var autoSlideInterval = setInterval(nextSlide, interval);

  // Event listeners for next and previous buttons
  var prevButton = document.querySelector(".carousel-control-prev");
  var nextButton = document.querySelector(".carousel-control-next");
  prevButton.addEventListener("click", prevSlide);
  nextButton.addEventListener("click", nextSlide);

  // Event listeners for indicators
  indicators.forEach(function (indicator, index) {
    indicator.addEventListener("click", function () {
      moveToSlide(index);
    });
  });

  // Pause auto slide on hover
  carousel.addEventListener("mouseenter", function () {
    clearInterval(autoSlideInterval);
  });

  // Resume auto slide on mouseout
  carousel.addEventListener("mouseleave", function () {
    autoSlideInterval = setInterval(nextSlide, interval);
  });

  // Show the initial slide
  showSlide(currentIndex);
});

// back to top button
document.addEventListener('DOMContentLoaded', () => {
  const backToTopBtn = document.getElementById('backToTopBtn');

  window.addEventListener('scroll', () => {
      if (window.pageYOffset > 100) {
          backToTopBtn.style.display = 'block';
      } else {
          backToTopBtn.style.display = 'none';
      }
  });

  backToTopBtn.addEventListener('click', () => {
      window.scrollTo({
          top: 0,
          behavior: 'smooth'
      });
  });
});