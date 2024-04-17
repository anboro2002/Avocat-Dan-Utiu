// hamburger menu pt mobile si tablet
const hamMenu = document.querySelectorAll(".ham-menu");
const offScreen = document.querySelectorAll(".off-screen-menu");

hamMenu.forEach((hamMenu,index) =>{
    hamMenu.addEventListener("click", () => {
        hamMenu.classList.toggle("active");
        offScreen[index].classList.toggle("active");
    });
});

// dropdown menu pt servicii in desktop

const dropDownToggle = document.querySelector(".dropdown-toggle");
const dropDownMenu = document.querySelector(".dropdown-menu");

// deschide meniul la hover
    dropDownToggle.addEventListener("mouseenter", () =>{
        dropDownToggle.classList.toggle("show");
        dropDownMenu.classList.toggle("show");
    });



// inchide meniul la click in afara meniului
    document.body.addEventListener("click", (event) => {
        if(!dropDownMenu.contains(event.target)){
            dropDownMenu.classList.remove("show");
        }
    });

// carousel functionality
    document.addEventListener('DOMContentLoaded', function() {
    var carousel = document.querySelector('.carousel');
    var slides = carousel.querySelectorAll('.carousel-item');
    var indicators = carousel.querySelectorAll('.carousel-indicators li');
    var currentIndex = 0;
    var interval = 3000; // Auto slide 3 sec

    // Function to show a specific slide
    function showSlide(index) {
        // Hide all slides
        slides.forEach(function(slide) {
            slide.classList.remove('active');
        });

        // Show the slide with the specified index
        slides[index].classList.add('active');

        // Update the active indicator
        indicators.forEach(function(indicator, i) {
            if (i === index) {
                indicator.classList.add('active');
            } else {
                indicator.classList.remove('active');
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
    var prevButton = document.querySelector('.carousel-control-prev');
    var nextButton = document.querySelector('.carousel-control-next');
    prevButton.addEventListener('click', prevSlide);
    nextButton.addEventListener('click', nextSlide);

    // Event listeners for indicators
    indicators.forEach(function(indicator, index) {
        indicator.addEventListener('click', function() {
            moveToSlide(index);
        });
    });

    // Pause auto slide on hover
    carousel.addEventListener('mouseenter', function() {
        clearInterval(autoSlideInterval);
    });

    // Resume auto slide on mouseout
    carousel.addEventListener('mouseleave', function() {
        autoSlideInterval = setInterval(nextSlide, interval);
    });

    // Show the initial slide
    showSlide(currentIndex);
});
