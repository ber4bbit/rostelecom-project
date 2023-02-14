const modalFormWrapper = document.getElementById('modalForm');
const modalFormCloseBtn = document.getElementById('closeModalFormBtn');
const firstTariffBtn = document.getElementById('firstTariffBtn');
const secondTariffBtn = document.getElementById('secondTariffBtn');
const thirdTariffBtn = document.getElementById('thirdTariffBtn');
const fourthTariffBtn = document.getElementById('fourthTariffBtn');

modalFormCloseBtn.addEventListener('click', () => modalFormWrapper.classList.add('modal-window-wrapper_hidden'));

firstTariffBtn.addEventListener('click', () => {
    document.querySelectorAll('.modal-window__price-text')[0].innerText = 'С первого месяца';
    document.querySelectorAll('.modal-window__price-number')[0].innerText = '499 ₽/месяц';
    document.querySelectorAll('.modal-window__price-wrapper')[1].classList.add('modal-window-wrapper_hidden');
    document.querySelectorAll('.modal-window__price-wrapper')[2].classList.add('modal-window-wrapper_hidden');
    modalFormWrapper.classList.remove('modal-window-wrapper_hidden');
    console.log(document.querySelectorAll('.modal-window__price-text'));
    console.log(document.querySelectorAll('.modal-window__price-wrapper'));
});

secondTariffBtn.addEventListener('click', () => {
    document.querySelectorAll('.modal-window__price-text')[0].innerText = 'Первый месяц';
    document.querySelectorAll('.modal-window__price-number')[0].innerText = 'бесплатно';
    document.querySelectorAll('.modal-window__price-text')[1].innerText = 'Со второго месяца';
    document.querySelectorAll('.modal-window__price-number')[1].innerText = '699 ₽/месяц';
    document.querySelectorAll('.modal-window__price-wrapper')[1].classList.remove('modal-window-wrapper_hidden');
    document.querySelectorAll('.modal-window__price-wrapper')[2].classList.remove('modal-window-wrapper_hidden');
    modalFormWrapper.classList.remove('modal-window-wrapper_hidden');
});

thirdTariffBtn.addEventListener('click', () => {
    document.querySelectorAll('.modal-window__price-number')[0].innerText = `${document.getElementById('tariffPricePromo').innerText} ₽`;
    document.querySelectorAll('.modal-window__price-number')[1].innerText = `${document.getElementById('tariffPrice').innerText} ₽/месяц`;
    document.querySelectorAll('.modal-window__price-wrapper')[1].classList.remove('modal-window-wrapper_hidden');
    document.querySelectorAll('.modal-window__price-wrapper')[2].classList.remove('modal-window-wrapper_hidden');
    modalFormWrapper.classList.remove('modal-window-wrapper_hidden');
})

fourthTariffBtn.addEventListener('click', () => {
    document.querySelectorAll('.modal-window__price-text')[0].innerText = 'С первого месяца';
    document.querySelectorAll('.modal-window__price-number')[0].innerText = '1100 ₽/месяц';
    document.querySelectorAll('.modal-window__price-wrapper')[1].classList.add('modal-window-wrapper_hidden');
    modalFormWrapper.classList.remove('modal-window-wrapper_hidden');
});