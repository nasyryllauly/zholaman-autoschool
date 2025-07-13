
// WhatsApp Popup Widget
const whatsappButton = document.getElementById("whatsappButton");
const whatsappPopup = document.getElementById("whatsappPopup");
const closePopup = document.getElementById("closePopup");

// Show popup after 3 seconds
setTimeout(() => {
    whatsappPopup.classList.add("active");
}, 3000);

// Toggle popup on button click
whatsappButton.addEventListener("click", () => {
    whatsappPopup.classList.toggle("active");
});

// Close popup
closePopup.addEventListener("click", () => {
    whatsappPopup.classList.remove("active");
});

// Close popup when clicking outside
document.addEventListener("click", (e) => {
    if (!e.target.closest(".whatsapp-widget")) {
        whatsappPopup.classList.remove("active");
    }
});

// Smooth scroll for anchor links
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

// Animation on scroll
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.animationDelay = '0.1s';
            entry.target.classList.add('animate-on-scroll');
        }
    });
}, observerOptions);

// Observe all sections
document.querySelectorAll('section').forEach(section => {
    section.style.opacity = '0';
    observer.observe(section);
});

