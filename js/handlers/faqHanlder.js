const questions = document.querySelectorAll('.question__header');
const answersWrappers = document.querySelectorAll('.question__answers');

questions.forEach(elem => {
    elem.addEventListener('click', event => {
        console.log();
        elem.children[1].classList.toggle('question__icon_rotated')
        elem.parentNode.children[1].classList.toggle('question__answers_hidden')
    })
})