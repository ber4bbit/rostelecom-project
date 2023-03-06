// Отслеживание события отправки формы
requestForm.addEventListener('submit', event => {
    // Отмена стандартного поведения формы при отправке
    event.preventDefault();

    // Массив для проверки на валидность полей ввода
    const isValidInputs = [];

    // Проход по полям ввода для проверки на валидность
    requestInputsArr.forEach(input => handleInput(input));

    // Добавление атрибута каждого поля ввода, который определяет валидно ли поле ввода
    requestInputsArr.forEach(input => isValidInputs.push(input.getAttribute("data-is-valid")));

    // Условие, проверяющее есть ли невалидные поля ввода и действия, производимые если есть хотя бы одно невалидное поле
    if (isValidInputs.includes('false')) {
        event.preventDefault();
        requestSubmitBtn.setAttribute('disabled', 'disabled');
        requestSubmitBtn.classList.add('modal-window__form-btn_disabled');
    // Если все валидно, то данные формы отправляются на почту и очищаются все поля ввода
    } else {
        event.preventDefault();
        console.log('submitted');
        $.ajax({
            type: 'POST',
            url: '../../php/sendRequestForm.php',
            data: $('#requestForm').serialize(),
            success: function() {
                modalWindowSuccess.classList.remove('modal-window-wrapper_hidden');
                requestInputsArr.forEach(input => input.value = '')
                setTimeout(() => {
                    modalWindowSuccess.classList.add('modal-window-wrapper_hidden');
                    modalFormWrapper.classList.add('modal-window-wrapper_hidden');
                }, 3000);
            }
        })
    }
})