tariffForm.addEventListener('submit', event => {
    event.preventDefault();

    const isValidInputs = [];

    tariffFInputsArr.forEach(input => handleInput(input));

    tariffFInputsArr.forEach(input => isValidInputs.push(input.getAttribute("data-is-valid")));

    if (isValidInputs.includes('false')) {
        event.preventDefault();
        tariffSubmitBtn.setAttribute('disabled', 'disabled');
        tariffSubmitBtn.classList.add('modal-window__form-btn_disabled');
    } else {
        event.preventDefault();
        console.log('submitted');
        $.ajax({
            type: 'POST',
            url: '../../php/sendTariffForm.php',
            data: $('#tariffForm').serialize(),
            success: function() {
                modalWindowSuccess.classList.remove('modal-window-wrapper_hidden');
                tariffFInputsArr.forEach(input => input.value = '')
                setTimeout(() => {
                    modalWindowSuccess.classList.add('modal-window-wrapper_hidden');
                    modalFormWrapper.classList.add('modal-window-wrapper_hidden');
                }, 3000);
            }
        })
    }
})