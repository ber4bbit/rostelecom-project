const servicesBtns = document.querySelectorAll('.tariff__btn_gradient');
const servicesBtnsArr = Array.from(servicesBtns).slice(1, 3);

servicesBtnsArr.forEach(elem => {
    elem.addEventListener('click', () => {
        modalRequestWrapper.classList.remove('modal-window-wrapper_hidden')
    })
})