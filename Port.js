// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Animate skill bars on scroll
const skillBars = document.querySelectorAll('.skill-fill');

function animateSkillBars() {
    skillBars.forEach(bar => {
        const barTop = bar.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;

        if (barTop < windowHeight - 50) {
            bar.style.width = bar.style.width || '0%';
        }
    });
}

// Throttle scroll events
let scrollTimeout;
window.addEventListener('scroll', function() {
    clearTimeout(scrollTimeout);
    scrollTimeout = setTimeout(animateSkillBars, 10);
});

// Form submission handling
const contactForm = document.querySelector('.contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();

        // Get form data
        const formData = new FormData(this);
        const data = Object.fromEntries(formData);

        // Simple validation
        if (!data.name || !data.email || !data.message) {
            alert('Please fill in all fields.');
            return;
        }

        // Here you would typically send the data to a server
        // For now, we'll just show a success message
        alert('Thank you for your message! I\'ll get back to you soon.');

        // Reset form
        this.reset();
    });
}

// Project link handler
function viewProject(projectNumber) {
    const projectLinks = {
        1: 'https://github.com/yourusername/project1', // Replace with your actual project links
        2: 'https://github.com/yourusername/project2',
        3: 'https://github.com/yourusername/project3'
    };

    const link = projectLinks[projectNumber];
    if (link) {
        window.open(link, '_blank');
    } else {
        alert('Project link not available yet.');
    }
}

// Add scroll effect to header
const header = document.querySelector('header');
window.addEventListener('scroll', function() {
    if (window.scrollY > 100) {
        header.style.background = 'rgba(255, 255, 255, 0.98)';
    } else {
        header.style.background = 'rgba(255, 255, 255, 0.95)';
    }
});

// Initialize animations on page load
document.addEventListener('DOMContentLoaded', function() {
    animateSkillBars();
});