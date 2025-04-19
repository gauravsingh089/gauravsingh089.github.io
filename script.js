// Smooth scrolling for navigation links
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 70, // Offset for fixed navigation
                behavior: 'smooth'
            });
        }
    });
});

// Add active class to navigation items when scrolling
window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('.section');
    const navLinks = document.querySelectorAll('nav ul li a');
    
    let current = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        
        if (pageYOffset >= sectionTop - 100) {
            current = section.getAttribute('id');
        }
    });
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').substring(1) === current) {
            link.classList.add('active');
        }
    });
});

// Mobile navigation toggle
const createMobileNav = () => {
    const nav = document.querySelector('nav');
    const navUl = document.querySelector('nav ul');
    
    // Create hamburger button
    const hamburgerBtn = document.createElement('button');
    hamburgerBtn.classList.add('hamburger');
    hamburgerBtn.innerHTML = '<span></span><span></span><span></span>';
    nav.insertBefore(hamburgerBtn, navUl);
    
    // Toggle mobile nav
    hamburgerBtn.addEventListener('click', () => {
        navUl.classList.toggle('show');
        hamburgerBtn.classList.toggle('active');
    });
    
    // Close mobile nav when clicking a link
    document.querySelectorAll('nav a').forEach(link => {
        link.addEventListener('click', () => {
            navUl.classList.remove('show');
            hamburgerBtn.classList.remove('active');
        });
    });
};

// Initialize mobile nav on page load
document.addEventListener('DOMContentLoaded', () => {
    createMobileNav();
});