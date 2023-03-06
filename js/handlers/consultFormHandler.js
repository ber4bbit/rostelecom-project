const consultForms = document.querySelectorAll('.callback__form');

consultForms.forEach(elem => {
    elem.addEventListener('submit', event => {
        event.preventDefault();

    $.ajax({
        type: "POST",
        url: "../../php/sendConsultForm.php",
        data: $('#tariffForm').serialize(),
        success: function() {
            modalWindowSuccess.classList.remove("modal-window-wrapper_hidden");
            setTimeout(() => {
                modalWindowSuccess.classList.add("modal-window-wrapper_hidden");
                modalFormWrapper.classList.add('modal-window-wrapper_hidden');
            }, 3000);
        }
    });

    return false;
    })
})