document.addEventListener('DOMContentLoaded', () => {

    // --- Intersection Observer for animations on scroll ---
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, {
        threshold: 0.1 // Trigger when 10% of the element is visible
    });

    // Observe all elements with the class 'hidden'
    const hiddenElements = document.querySelectorAll('.hidden');
    hiddenElements.forEach(el => observer.observe(el));


    // --- Mobile Navigation (Hamburger Menu) ---
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');

    if (hamburger && navLinks) {
        hamburger.addEventListener('click', () => {
            // Toggle Nav
            navLinks.classList.toggle('nav-active');

            // Burger Animation
            hamburger.classList.toggle('toggle');
        });
    }
});