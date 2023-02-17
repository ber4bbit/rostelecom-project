const submitRequestBtn = document.getElementById('submitRequestBtn');
const requestForm = document.getElementById('requestForm');
const requestInputs = Array.from(requestForm.children).slice(1, 4);

const USERPHONE_REGEXP = /^\+?[78][-\(]?\d{3}\)?-?\d{3}-?\d{2}-?\d{2}$/;
const USERNAME_REGEXP = /^[А-ЯЁ][а-яё]+ [А-ЯЁ][а-яё]+$/;

requestInputs.forEach(elem => {
    elem.addEventListener('input', () => {
        if (elem.value == '') {
            elem.classList.add('modal-window__input_error')
        } else if (elem.value !== '') elem.classList.remove('modal-window__input_error');

        switch (elem.getAttribute('name')) {
            case 'user-phone':
                if (!USERPHONE_REGEXP.test(elem.value)) elem.classList.add('modal-window__input_error');
                else elem.classList.remove('modal-window__input_error');
                break;
            case 'user-name':
                if (!USERNAME_REGEXP.test(elem.value)) elem.classList.add('modal-window__input_error');
                else elem.classList.remove('modal-window__input_error');
                break;
        }
    })
})
