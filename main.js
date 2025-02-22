// Smooth scrolling for navigation links
document.querySelectorAll('.nav-bar a').forEach(anchor => {
    anchor.addEventListener('click', (e) => {
        e.preventDefault();
        const target = document.getElementById(anchor.getAttribute('href').substring(1));
        window.scrollTo({ top: target.offsetTop, behavior: 'smooth' });
    });
});

// Form Validation for Contact Form
document.querySelector('.contact-form form').addEventListener('submit', (e) => {
    const [name, email, message] = document.querySelectorAll('#name, #email, #message');
    if (!name.value || !email.value || !message.value) {
        alert('Please fill in all the fields.');
        e.preventDefault();
    } else {
        alert('Message sent successfully!');
    }
});

// Hover Effect for Cards (Recipe and Category)
document.querySelectorAll('.card, .ca-card').forEach(card => {
    card.addEventListener('mouseover', () => card.style.transform = 'scale(1.05)');
    card.addEventListener('mouseout', () => card.style.transform = 'scale(1)');
});
