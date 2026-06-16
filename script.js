const mobileToggle = document.querySelector('.mobile-toggle');
const sidenav = document.querySelector('.sidenav');

if (mobileToggle) {
    mobileToggle.addEventListener('click', () => {
        mobileToggle.classList.toggle('active');
        sidenav.classList.toggle('active');
    });
}

const navDots = document.querySelectorAll('.nav-dot');

navDots.forEach(dot => {
    dot.addEventListener('click', (e) => {
        e.preventDefault();
        const targetId = dot.getAttribute('href');
        const targetSection = document.querySelector(targetId);

        if (targetSection) {
            targetSection.scrollIntoView({ behavior: 'smooth' });

            if (sidenav.classList.contains('active')) {
                sidenav.classList.remove('active');
                mobileToggle.classList.remove('active');
            }
        }
    });
});

const sections = document.querySelectorAll('section');

function updateActiveNav() {
    const scrollPos = window.scrollY + 200;

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        const sectionId = section.getAttribute('id');

        if (scrollPos >= sectionTop && scrollPos < sectionTop + sectionHeight) {
            navDots.forEach(dot => {
                dot.classList.remove('active');
                if (dot.getAttribute('href') === `#${sectionId}`) {
                    dot.classList.add('active');
                }
            });
        }
    });
}

window.addEventListener('scroll', updateActiveNav);
updateActiveNav();

// Typing text effect variables properly declared
const typingText = document.querySelector('.typing-text');
if (typingText) {
    const texts = ['AI & Data Science Student', 'Machine Learning Enthusiast', 'Data Analyst', 'Web Developer', 'Java Developer'];
    let textIndex = 0;
    let charIndex = 0;
    let isDeleting = false;

    function type() {
        const currentText = texts[textIndex];

        if (isDeleting) {
            typingText.textContent = currentText.substring(0, charIndex - 1);
            charIndex--;
        } else {
            typingText.textContent = currentText.substring(0, charIndex + 1);
            charIndex++;
        }

        if (!isDeleting && charIndex === currentText.length) {
            setTimeout(() => isDeleting = true, 2000);
        } else if (isDeleting && charIndex === 0) {
            isDeleting = false;
            textIndex = (textIndex + 1) % texts.length;
        }

        const speed = isDeleting ? 50 : 100;
        setTimeout(type, speed);
    }

    setTimeout(type, 1000);
}

// Fade in animations for sections and items on scroll
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('fadeIn');
        }
    });
}, observerOptions);

sections.forEach(section => observer.observe(section));

const workItems = document.querySelectorAll('.work-item');
workItems.forEach(item => observer.observe(item));

const contactForm = document.getElementById('contact-form');

if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();

        const name = contactForm.querySelector('input[type="text"]').value;
        const email = contactForm.querySelector('input[type="email"]').value;
        const message = contactForm.querySelector('textarea').value;

        if (name && email && message) {
            alert('Thank you for reaching out, DURAIRAJAN G! I will get back to you soon. 🚀');
            contactForm.reset();
        } else {
            alert('Please fill in all fields.');
        }
    });
}

// Interactive moving background shapes
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const shapes = document.querySelectorAll('.shape');

    shapes.forEach((shape, index) => {
        const speed = 0.5 + (index * 0.2);
        shape.style.transform = `translateY(${scrolled * speed}px)`;
    });
});

console.log('🚀 Portfolio loaded successfully!');