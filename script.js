// ============================================
// Projects Data Structure
// ============================================
// HOW TO ADD YOUR FRONTEND PROJECTS:
// 1. Copy one of the project objects below
// 2. Update the title, description, tags, liveUrl, and codeUrl
// 3. Optionally add an image URL if you have project screenshots
// 4. The projects will automatically render on the page
//
// Example:
// {
//     title: "My Awesome Project",
//     description: "A description of what the project does",
//     tags: ["React", "JavaScript", "CSS"],
//     liveUrl: "https://myproject.com",  // Your live project URL
//     codeUrl: "https://github.com/username/repo",  // Your GitHub repo URL
//     image: "https://example.com/screenshot.png"  // Optional: project screenshot
// }
const projectsData = [
    {
        title: "FirstWebsite",
        description: "A beginner-friendly landing page showcasing fundamental frontend development skills. Built with pure HTML and CSS, featuring responsive design, float-based layouts, and interactive elements.",
        tags: ["HTML5", "CSS3"],
        liveUrl: "https://bolaji0001.github.io/FirstWebsite/",
        codeUrl: "https://github.com/bolaji0001/FirstWebsite",
        image: null
    },
    {
        title: "My First Website Practice",
        description: "A practice website showcasing CSS techniques including linear gradients and image scaling effects on hover. Features interactive navigation, button animations using pseudo-classes, and a JavaScript hamburger menu toggle.",
        tags: ["HTML5", "CSS3", "JavaScript"],
        liveUrl: "https://bolaji0001.github.io/MyFirstWebPractice/",
        codeUrl: "https://github.com/bolaji0001/MyFirstWebPractice",
        image: null
    },
    {
        title: "My Scrollable Website",
        description: "A single-page website featuring smooth scroll navigation and dynamic link highlighting. Uses JavaScript to transition to sections when navbar links are clicked and highlights the active section link as users scroll.",
        tags: ["HTML5", "CSS3", "JavaScript"],
        liveUrl: "https://bolaji0001.github.io/FirstScrollableWebsite/#home",
        codeUrl: "https://github.com/bolaji0001/FirstScrollableWebsite",
        image: null
    },
    {
        title: "My First Bootstrap Website",
        description: "A responsive travel destination website built primarily with Bootstrap 5. Showcases Bootstrap's grid system, components, and utilities for creating modern, mobile-first layouts.",
        tags: ["Bootstrap 5", "HTML5", "CSS3"],
        liveUrl: "https://bolaji0001.github.io/FirstBootstrapRepo/index.html/",
        codeUrl: "https://github.com/bolaji0001/FirstBootstrapRepo",
        image: null
    },
    {
        title: "Bento-Grid",
        description: "A modern bento box-style layout built with CSS Grid, featuring unequal-sized rows and columns. Demonstrates advanced grid properties including grid-auto-columns, grid-auto-rows, and responsive reordering.",
        tags: ["HTML5", "CSS3"],
        liveUrl: "https://bolaji0001.github.io/bento-grid/bento-grid-main/",
        codeUrl: "https://github.com/bolaji0001/bento-grid",
        image: null
    },
    {
        title: "Simply Recipes",
        description: "A multi-page recipe website featuring various food recipes. Built with organized CSS stylesheets using :root for custom properties, featuring responsive design and JavaScript for dynamic year updates.",
        tags: ["HTML5", "CSS3", "JavaScript"],
        liveUrl: "https://bolaji0001.github.io/simply-recipes/index.html",
        codeUrl: "https://github.com/bolaji0001/simply-recipes",
        image: null
    },
    {
        title: "Omnifood",
        description: "A modern landing page for a healthy meal delivery subscription service. Features smooth scroll navigation, responsive design with optimized images, and advanced CSS techniques including pseudo-elements and performance optimization.",
        tags: ["HTML5", "CSS3", "JavaScript"],
        liveUrl: "https://bolaji0001.github.io/Omnifood/",
        codeUrl: "https://github.com/bolaji0001/Omnifood",
        image: null
    }
    // Add more projects here by copying the structure above
];

// ============================================
// Render Projects Dynamically
// ============================================
const renderProjects = () => {
    const projectsGrid = document.getElementById('projects-grid');
    if (!projectsGrid) return;

    projectsGrid.innerHTML = projectsData.map((project, index) => {
        const imageContent = project.image 
            ? `<img src="${project.image}" alt="${project.title}" style="width: 100%; height: 100%; object-fit: cover;">`
            : `<div class="project-placeholder">
                <svg width="100" height="100" viewBox="0 0 100 100">
                    <rect width="100" height="100" fill="currentColor" opacity="0.1"/>
                    <path d="M30 30h40v40H30z" stroke="currentColor" stroke-width="2" fill="none"/>
                </svg>
            </div>`;

        const tagsHTML = project.tags.map(tag => 
            `<span class="tag">${tag}</span>`
        ).join('');

        return `
            <div class="project-card">
                <div class="project-image">
                    <div class="project-overlay">
                        ${project.liveUrl !== '#' ? `<a href="${project.liveUrl}" class="project-link" target="_blank" rel="noopener noreferrer">View Project</a>` : ''}
                        ${project.codeUrl !== '#' ? `<a href="${project.codeUrl}" class="project-link" target="_blank" rel="noopener noreferrer">View Code</a>` : ''}
                    </div>
                    ${imageContent}
                </div>
                <div class="project-info">
                    <h3 class="project-title">${project.title}</h3>
                    <p class="project-description">${project.description}</p>
                    <div class="project-tags">
                        ${tagsHTML}
                    </div>
                </div>
            </div>
        `;
    }).join('');
};

// Initialize projects on page load
document.addEventListener('DOMContentLoaded', () => {
    renderProjects();
    observeProjectCards();
});

// ============================================
// Intersection Observer for Project Cards
// ============================================
const observeProjectCards = () => {
    const projectCards = document.querySelectorAll('.project-card');
    
    if (!projectCards.length) return;

    // Check if device supports hover (desktop) or not (mobile/touch)
    const isTouchDevice = window.matchMedia('(hover: none)').matches || 
                         window.matchMedia('(pointer: coarse)').matches;

    // Only use observer on touch devices for better UX
    if (!isTouchDevice) return;

    const observerOptions = {
        root: null, // viewport
        rootMargin: '0px 0px -20% 0px', // Trigger slightly before card fully enters
        threshold: [0.1, 0.2, 0.3, 0.5] // Multiple thresholds for smoother transitions
    };

    const observerCallback = (entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Card is in viewport - show overlay
                entry.target.classList.add('in-viewport');
            } else {
                // Only remove when card is significantly out of view
                // This keeps overlay visible when scrolling between cards
                if (entry.intersectionRatio < 0.1) {
                    entry.target.classList.remove('in-viewport');
                }
            }
        });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    // Observe all project cards
    projectCards.forEach(card => {
        observer.observe(card);
    });

    // Optionally unobserve after first interaction to improve performance
    // But for now, we'll keep observing for smooth transitions
};

// ============================================
// Mobile Navigation Toggle
// ============================================
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('nav-menu');

hamburger.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    hamburger.classList.toggle('active');
});

// Close mobile menu when clicking on a link
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        hamburger.classList.remove('active');
    });
});

// ============================================
// Navbar Scroll Effect
// ============================================
const navbar = document.getElementById('navbar');
let lastScroll = 0;

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll > 100) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
    
    lastScroll = currentScroll;
});

// ============================================
// Smooth Scrolling for Navigation Links
// ============================================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        
        if (target) {
            const offsetTop = target.offsetTop - 80;
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

// ============================================
// Animate Stats Counter
// ============================================
const animateCounter = (element, target) => {
    const duration = 2000;
    const increment = target / (duration / 16);
    let current = 0;
    
    const updateCounter = () => {
        current += increment;
        if (current < target) {
            element.textContent = Math.floor(current);
            requestAnimationFrame(updateCounter);
        } else {
            element.textContent = target;
        }
    };
    
    updateCounter();
};

// Intersection Observer for stats animation
const statsObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const statNumber = entry.target.querySelector('.stat-number');
            const target = parseInt(statNumber.getAttribute('data-target'));
            
            if (!statNumber.classList.contains('animated')) {
                statNumber.classList.add('animated');
                animateCounter(statNumber, target);
            }
        }
    });
}, { threshold: 0.5 });

document.querySelectorAll('.stat-item').forEach(item => {
    statsObserver.observe(item);
});

// ============================================
// Animate Skill Bars
// ============================================
const skillsObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const skillProgress = entry.target.querySelector('.skill-progress');
            const width = skillProgress.getAttribute('data-width');
            
            if (!skillProgress.classList.contains('animated')) {
                skillProgress.classList.add('animated');
                setTimeout(() => {
                    skillProgress.style.width = `${width}%`;
                }, 100);
            }
        }
    });
}, { threshold: 0.3 });

document.querySelectorAll('.skill-item').forEach(item => {
    skillsObserver.observe(item);
});

// ============================================
// Fade In Animation on Scroll
// ============================================
const fadeObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, {
    threshold: 0.1
});

// Apply fade animation to sections
document.querySelectorAll('section').forEach(section => {
    section.style.opacity = '0';
    section.style.transform = 'translateY(30px)';
    section.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
    fadeObserver.observe(section);
});

// ============================================
// Contact Form Handling
// ============================================
const contactForm = document.getElementById('contact-form');

contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    // Get form data
    const formData = new FormData(contactForm);
    const data = Object.fromEntries(formData);
    
    // Here you would typically send the data to a server
    // For now, we'll just show a success message
    console.log('Form submitted:', data);
    
    // Show success message
    const successMessage = document.createElement('div');
    successMessage.style.cssText = `
        position: fixed;
        top: 100px;
        right: 20px;
        background: #10b981;
        color: white;
        padding: 1rem 2rem;
        border-radius: 0.5rem;
        box-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.1);
        z-index: 10000;
        animation: slideIn 0.3s ease-out;
    `;
    successMessage.textContent = 'Message sent successfully!';
    
    document.body.appendChild(successMessage);
    
    // Remove message after 3 seconds
    setTimeout(() => {
        successMessage.style.animation = 'slideOut 0.3s ease-out';
        setTimeout(() => {
            successMessage.remove();
        }, 300);
    }, 3000);
    
    // Reset form
    contactForm.reset();
});

// ============================================
// Active Navigation Link Highlighting
// ============================================
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-link');

const highlightNavLink = () => {
    const scrollY = window.pageYOffset;
    
    sections.forEach(section => {
        const sectionHeight = section.offsetHeight;
        const sectionTop = section.offsetTop - 100;
        const sectionId = section.getAttribute('id');
        
        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            navLinks.forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href') === `#${sectionId}`) {
                    link.classList.add('active');
                }
            });
        }
    });
};

window.addEventListener('scroll', highlightNavLink);

// ============================================
// Typing Effect for Hero Title (Optional)
// ============================================
const typingEffect = () => {
    const titleElement = document.querySelector('.hero-title .gradient-text');
    if (!titleElement) return;
    
    const text = titleElement.textContent;
    const words = ['Web Developer', 'Frontend Developer', 'Full Stack Developer'];
    let wordIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    
    const type = () => {
        const currentWord = words[wordIndex];
        
        if (isDeleting) {
            titleElement.textContent = currentWord.substring(0, charIndex - 1);
            charIndex--;
        } else {
            titleElement.textContent = currentWord.substring(0, charIndex + 1);
            charIndex++;
        }
        
        let typeSpeed = isDeleting ? 50 : 100;
        
        if (!isDeleting && charIndex === currentWord.length) {
            typeSpeed = 2000;
            isDeleting = true;
        } else if (isDeleting && charIndex === 0) {
            isDeleting = false;
            wordIndex = (wordIndex + 1) % words.length;
            typeSpeed = 500;
        }
        
        setTimeout(type, typeSpeed);
    };
    
    // Uncomment the line below to enable typing effect
    // type();
};

// Initialize typing effect (commented out by default)
// typingEffect();

// ============================================
// Parallax Effect for Hero Section
// ============================================
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const hero = document.querySelector('.hero');
    
    if (hero && scrolled < window.innerHeight) {
        hero.style.transform = `translateY(${scrolled * 0.5}px)`;
    }
});

// ============================================
// Add CSS animations dynamically
// ============================================
const style = document.createElement('style');
style.textContent = `
    @keyframes slideIn {
        from {
            transform: translateX(100%);
            opacity: 0;
        }
        to {
            transform: translateX(0);
            opacity: 1;
        }
    }
    
    @keyframes slideOut {
        from {
            transform: translateX(0);
            opacity: 1;
        }
        to {
            transform: translateX(100%);
            opacity: 0;
        }
    }
    
    .nav-link.active {
        color: var(--primary-color);
    }
    
    .nav-link.active::after {
        width: 100%;
    }
`;
document.head.appendChild(style);

// ============================================
// Initialize on DOM Load
// ============================================
document.addEventListener('DOMContentLoaded', () => {
    // Projects are already rendered by renderProjects() above
    // Set initial active nav link
    highlightNavLink();
    
    // Update copyright year dynamically
    const footerText = document.querySelector('.footer p');
    if (footerText) {
        const currentYear = new Date().getFullYear();
        footerText.innerHTML = `&copy; ${currentYear} My Portfolio. Built with passion and code.`;
    }
    
    // Add smooth reveal animation to hero content
    const heroContent = document.querySelector('.hero-content');
    if (heroContent) {
        setTimeout(() => {
            heroContent.style.opacity = '1';
            heroContent.style.transform = 'translateY(0)';
        }, 100);
    }
});



