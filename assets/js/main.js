document.addEventListener('DOMContentLoaded', function() {
    console.log('Website Indomie siap!');
    
    initProductHover();
    initRecipeCards();
    initScrollEffects();
    initCurrentYear();
});



function initProductHover() {
    const products = document.querySelectorAll('.product');
    
    products.forEach(product => {
        product.addEventListener('mouseenter', () => {
            product.classList.add('hover-active');
        });
        
        product.addEventListener('mouseleave', () => {
            product.classList.remove('hover-active');
        });
    });
}


function initRecipeCards() {
    const recipeCards = document.querySelectorAll('.recipe-card');
    
    recipeCards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            const overlay = card.querySelector('.recipe-overlay');
            overlay.style.transform = 'translateY(0)';
        });
        
        card.addEventListener('mouseleave', () => {
            const overlay = card.querySelector('.recipe-overlay');
            overlay.style.transform = 'translateY(100%)';
        });
    });
}



/* ABOUT US */


document.addEventListener('DOMContentLoaded', function() {
    console.log('Halaman About Us siap!');
    
    initAboutAnimations();
    initScrollEffects();
    initCurrentYear();
    initImageHover();
});


function initAboutAnimations() {
    const aboutElements = document.querySelectorAll('.about-image, .about-text, .history-image, .history-text');
    
    aboutElements.forEach((el, index) => {
        el.style.animationDelay = `${index * 0.3}s`;
    });
    
    console.log('Animasi about us diinisialisasi');
}


function initImageHover() {
    const images = document.querySelectorAll('.about-image, .history-image');
    
    images.forEach(img => {
        img.addEventListener('mouseenter', () => {
            img.style.transform = 'scale(1.03)';
            img.style.transition = 'transform 0.5s ease';
        });
        
        img.addEventListener('mouseleave', () => {
            img.style.transform = 'scale(1)';
        });
    });
}

/* CONTACT US */

document.addEventListener('DOMContentLoaded', function() {
    console.log('Halaman Contact Us siap!');
    
    initContactForm();
    initCurrentYear();
    initFormAnimations();
});

function initContactForm() {
    const contactForm = document.querySelector('.contact-form form');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            if (validateForm()) {
                console.log('Form submitted:', {
                    name: document.getElementById('name').value,
                    email: document.getElementById('email').value,
                    phone: document.getElementById('phone').value,
                    country: document.getElementById('country').value,
                    message: document.getElementById('message').value
                });
                
                showSuccessMessage();
            }
        });
    }
    
    console.log('Form kontak diinisialisasi');
}


function validateForm() {
    let isValid = true;
    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const messageInput = document.getElementById('message');
    
    // Validasi nama
    if (nameInput.value.trim() === '') {
        showError(nameInput, 'Nama harus diisi');
        isValid = false;
    }
    
    // Validasi email
    if (emailInput.value.trim() === '') {
        showError(emailInput, 'Email harus diisi');
        isValid = false;
    } else if (!isValidEmail(emailInput.value.trim())) {
        showError(emailInput, 'Email tidak valid');
        isValid = false;
    }
    
    // Validasi pesan
    if (messageInput.value.trim() === '') {
        showError(messageInput, 'Pesan harus diisi');
        isValid = false;
    }
    
    return isValid;
}


function isValidEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}


function initFormAnimations() {
    const inputs = document.querySelectorAll('.form-group input, .form-group textarea');
    
    inputs.forEach(input => {
        input.addEventListener('focus', function() {
            this.parentElement.querySelector('label').style.color = '#D03739';
        });
        
        input.addEventListener('blur', function() {
            this.parentElement.querySelector('label').style.color = '#333';
        });
    });
}

