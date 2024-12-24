document.getElementById('menu-icon').addEventListener('click', function() {
    var navItems = document.getElementById('nav-items');
    navItems.classList.toggle('show-nav-items');
});


document.addEventListener("DOMContentLoaded", function() {
    const wrapper = document.querySelector(".carosuel-wrapper");
    const images = document.querySelectorAll(".carosuel-wrapper img");
    const prevButton = document.querySelector(".carosuel-button.prev");
    const nextButton = document.querySelector(".carosuel-button.next");
    
    let currentIndex = 0;

    function updateCarousel() {
        const offset = currentIndex * wrapper.offsetWidth;
        wrapper.scrollTo({
            left: offset,
            behavior: "smooth"
        });
    }

    nextButton.addEventListener("click", function() {
        currentIndex = (currentIndex + 1) % images.length;
        updateCarousel();
    });

    prevButton.addEventListener("click", function() {
        currentIndex = (currentIndex - 1 + images.length) % images.length;
        updateCarousel();
    });

    window.addEventListener("resize", updateCarousel);
});