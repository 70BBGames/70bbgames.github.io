let lastScrollTop = 0;  // Variable to store the last scroll position
const navbar = document.querySelector('header');  // Select the navbar
const scrollToTopBtn = document.getElementById('scrollToTopBtn');  // Get the back-to-top button


// Detect scroll event
window.addEventListener('scroll', function() {
    let currentScroll = window.pageYOffset || document.documentElement.scrollTop;
    
    // If the user is scrolling down and the navbar is not hidden, hide it
    if (currentScroll > lastScrollTop && currentScroll > navbar.offsetHeight) {
        navbar.classList.add('hidden');  // Add the 'hidden' class to slide the navbar up
    } else if (currentScroll < lastScrollTop) {
        navbar.classList.remove('hidden');  // Remove the 'hidden' class to show the navbar
    }

    // Show or hide the scroll-to-top button based on scroll position
    if (currentScroll > 300) {  // Show button after scrolling 300px down
        scrollToTopBtn.style.display = 'block';
    } else {
        scrollToTopBtn.style.display = 'none';
    }

    // Update the last scroll position
    lastScrollTop = currentScroll <= 0 ? 0 : currentScroll; // Prevent negative scroll values
});

// Scroll to the top smoothly when the button is clicked
scrollToTopBtn.addEventListener('click', function() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'  // Smooth scroll
    });
});
