// Регулярные выражение для валидации
const PHONE_REGEXP = /^\+?[78][-\(]?\d{3}\)?-?\d{3}-?\d{2}-?\d{2}$/;
const NAME_REGEXP = /^[a-zA-Zа-яА-Я'][a-zA-Zа-яА-Я-' ]+[a-zA-Zа-яА-Я']?$/u;

// Кнопки отправки формы заявки, заявки на тариф и заявки на консультацию
const requestSubmitBtn = document.getElementById('submitRequestBtn');
const tariffSubmitBtn = document.getElementById('tariffSubmitBtn');
const consultSubmitBtns = document.querySelectorAll('.callback__btn');

const requestForm = document.getElementById('requestForm');
const tariffForm = document.getElementById('tariffForm');
const consultFormsSec = document.querySelectorAll('.callback__form');

const requestInputsArr = Array.from(requestForm).slice(0, 2);
const tariffFInputsArr = Array.from(tariffForm).slice(0, 2);
// const consultInputsArr = 

// Хэндлер, который валидирует поля ввода
const handleInput = input => {
    if (input.name === 'user-phone') {
        PHONE_REGEXP.test(input.value)
            ? (
                console.log('valid'),
                input.style.color = 'gray',
                input.style.boxShadow = '0 0 0.3rem gray',
                input.setAttribute('data-is-valid', true),
                requestSubmitBtn.removeAttribute('disabled'),
                requestSubmitBtn.classList.remove('modal-window__form-btn_disabled')
            )
            : (
                console.log('not valid'),
                input.style.color = 'red',
                input.style.boxShadow = '0 0 0.3rem red',
                input.setAttribute('data-is-valid', false),
                requestSubmitBtn.setAttribute('disabled', 'disabled'),
                requestSubmitBtn.classList.add('modal-window__form-btn_disabled')
            );
    } else if (input.name === 'user-name') {
        NAME_REGEXP.test(input.value)
            ? (
                console.log('valid'),
                input.style.color = 'gray',
                input.style.boxShadow = '0 0 0.3rem gray',
                input.setAttribute('data-is-valid', true),
                requestSubmitBtn.removeAttribute('disabled'),
                requestSubmitBtn.classList.remove('modal-window__form-btn_disabled')
            )
            : (
                console.log('not valid'),
                input.style.color = 'red',
                input.style.boxShadow = '0 0 0.3rem red',
                input.setAttribute('data-is-valid', false),
                requestSubmitBtn.setAttribute('disabled', 'disabled'),
                requestSubmitBtn.classList.add('modal-window__form-btn_disabled')
            );
    } else if (input.name === 'user-name_tariff') {
        NAME_REGEXP.test(input.value)
            ? (
                console.log('valid'),
                input.style.color = 'gray',
                input.style.boxShadow = '0 0 0.3rem gray',
                input.setAttribute('data-is-valid', true),
                tariffSubmitBtn.removeAttribute('disabled'),
                tariffSubmitBtn.classList.remove('modal-window__form-btn_disabled')
            )
            : (
                console.log('not valid'),
                input.style.color = 'red',
                input.style.boxShadow = '0 0 0.3rem red',
                input.setAttribute('data-is-valid', false),
                tariffSubmitBtn.setAttribute('disabled', 'disabled'),
                tariffSubmitBtn.classList.add('modal-window__form-btn_disabled')
            );
    } else if (input.name === 'user-phone_tariff') {
        PHONE_REGEXP.test(input.value)
            ? (
                console.log('valid'),
                input.style.color = 'gray',
                input.style.boxShadow = '0 0 0.3rem gray',
                input.setAttribute('data-is-valid', true),
                tariffSubmitBtn.removeAttribute('disabled'),
                tariffSubmitBtn.classList.remove('modal-window__form-btn_disabled')
            )
            : (
                console.log('not valid'),
                input.style.color = 'red',
                input.style.boxShadow = '0 0 0.3rem red',
                input.setAttribute('data-is-valid', false),
                tariffSubmitBtn.setAttribute('disabled', 'disabled'),
                tariffSubmitBtn.classList.add('modal-window__form-btn_disabled')
            );
    }
}

// Перебор массива с полями ввода и навешивание слушателя изменения данных, вводимых в поле и вызов функции, проверяющей валидно ли поле
requestInputsArr.forEach(elem => elem.addEventListener('input', () => handleInput(elem)))

// Аналогично верхней функции
tariffFInputsArr.forEach(elem => elem.addEventListener('input', () => handleInput(elem)))