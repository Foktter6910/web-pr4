// Модальне вікно
const openModal = document.getElementById('openModal');
const modalOverlay = document.getElementById('modalOverlay');
const closeModal = document.getElementById('closeModal');

openModal.addEventListener('click', () => {
    modalOverlay.classList.add('active');
});

closeModal.addEventListener('click', () => {
    modalOverlay.classList.remove('active');
});

// Випадаюче меню
const menuToggle = document.querySelector('.menu-toggle');
const menuList = document.querySelector('.menu-list');

menuToggle.addEventListener('click', () => {
    menuList.classList.toggle('show');
});

// Валідація форми
const form = document.getElementById('contactForm');
const formMessage = document.getElementById('formMessage');

form.addEventListener('submit', function(e) {
    e.preventDefault();
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();

    if (name === '' || email === '' || message === '') {
        formMessage.textContent = "Будь ласка, заповніть всі поля.";
        formMessage.style.color = 'red';
    } else {
        formMessage.textContent = "Дякуємо за звернення!";
        formMessage.style.color = 'green';
        form.reset();
    }
});

// Кнопка "вгору"
const scrollTopBtn = document.getElementById('scrollTopBtn');
window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
        scrollTopBtn.style.display = 'block';
    } else {
        scrollTopBtn.style.display = 'none';
    }
});

scrollTopBtn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});
