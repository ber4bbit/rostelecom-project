const mobileMenu = document.getElementById('mobileMenu');
const burgerBtn = document.getElementById('burgerBtn');
const closeMobileMenu = document.getElementById('closeMenuBtn');
const tariffsLink = document.getElementById('tariffsLink');

burgerBtn.addEventListener('click', () => mobileMenu.classList.add('mobile-menu_showed'))

closeMobileMenu.addEventListener('click', () => mobileMenu.classList.remove('mobile-menu_showed'))

tariffsLink.addEventListener('click', () => mobileMenu.classList.remove('mobile-menu_showed'))