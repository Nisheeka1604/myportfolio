// Floating Contact Button Functionality
const contactToggle = document.querySelector('.contact-toggle');
const contactMenu = document.querySelector('.contact-menu');

contactToggle.addEventListener('click', () => {
    contactMenu.classList.toggle('active');
});

// Close menu when clicking outside
document.addEventListener('click', (e) => {
    if (!e.target.closest('.contact-button')) {
        contactMenu.classList.remove('active');
    }
});

// Close menu when clicking on a link
const contactLinks = document.querySelectorAll('.contact-link');
contactLinks.forEach(link => {
    link.addEventListener('click', () => {
        contactMenu.classList.remove('active');
    });
});
