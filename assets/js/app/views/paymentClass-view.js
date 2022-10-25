//validate payment inputs
const $ = document.querySelector.bind(document);

var cardTip = $('[data-tip]');
var cardNumberSpan = $('#invalid-Card-number');
var cvcSpan = $('#invalid-cvc');
var dateSpan = $('#invalid-date');
var nameSpan = $('#invalid-name');

$('#iNumCard').addEventListener('focus', () => {
    cardTip.classList.add('payment__tip--cardNumber');
})
$('#iNumCard').addEventListener('focusout', element => {
    cardTip.classList.remove('payment__tip--cardNumber');
    let field = element.target;
    if((field.value).length < 13 || (field.value).length > 16){
        field.classList.remove('valid')
        field.classList.add('invalid')
        cardNumberSpan.innerHTML = 'O número do cartão deve conter entre 13 e 16 dígitos';
    }

    else {
        field.classList.add('valid')
        cardNumberSpan.innerHTML = '';
    }
})


$('#iCvc').addEventListener('focus', () => {
    cardTip.classList.add('payment__tip--cardCvc');
})
$('#iCvc').addEventListener('focusout', element => {
    cardTip.classList.remove('payment__tip--cardCvc');
    let field = element.target;
    if((field.value).length != 3) {
        field.classList.add('invalid');
        cvcSpan.innerHTML = 'O CVC deve conter 3 dígitos';
    }
    else {
        field.classList.add('valid')
        cvcSpan.innerHTML = '';
    }
})


$('#iDate').addEventListener('focus', () => {
    cardTip.classList.add('payment__tip--cardDate');
})
$('#iDate').addEventListener('focusout', element => {
    cardTip.classList.remove('payment__tip--cardDate');
    let field = element.target;
    if(!field.value) {
        field.classList.add('invalid');
        dateSpan.innerHTML = 'Informe a data de vencimento';
    }
    else {
        field.classList.add('valid');
        dateSpan.innerHTML = '';
    }
})


$('#iName').addEventListener('focus', () => {
    cardTip.classList.add('payment__tip--cardName');
})
$('#iName').addEventListener('focusout', element => {
    cardTip.classList.remove('payment__tip--cardName');
    let field = element.target;
    if(!field.value) {
        field.classList.add('invalid');
        nameSpan.innerHTML = 'Informe o nome como no cartão';
    }
    else {
        field.classList.add('valid');
        nameSpan.innerHTML = '';
    }
})