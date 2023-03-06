const dateElement = document.getElementById('untilPromoDate');

console.log(
    moment(moment().format('DD.MM.YYYY'), 'DDMMYYYY')
    .endOf('month')
    .toDate()
    .toLocaleDateString("ru", { day: "numeric", month: "numeric" })
);

dateElement.innerText = moment(moment().format('DD.MM.YYYY'), 'DDMMYYYY')
.endOf('month')
.toDate()
.toLocaleDateString("ru", { day: "numeric", month: "numeric" });