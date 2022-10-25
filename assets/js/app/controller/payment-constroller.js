import { productControler } from "./product-controller.js";

var payment = JSON.parse(localStorage.getItem('Payment')) || [];
//save produts on cart to localstorage
function save(formInfo) {
    let paymentInfo = {
        "installments" : formInfo[0].value,
        "cardNumber" : formInfo[1].value,
        "cvc": formInfo[2].value,
        "expiryDate": formInfo[3].value,
        "name": formInfo[4].value,
        "total": productControler.getValueTotal()
    }

    payment.push(paymentInfo);
    localStorage.Payment = JSON.stringify(payment);

    console.table(payment)
}

function clear() {
    payment.splice('');
    localStorage.Payment = JSON.stringify(payment);
}
//save to localstorage payment info
function getPaymentInfo() {
    let cardNumber = payment[0].cardNumber;

    if(cardNumber.length > 13) cardNumber = cardNumber.substring(12);
    else cardNumber = cardNumber.substring(9);   

    let paymentInfo = {
        "total": payment[0].total,
        "installments": payment[0].installments,
        "name": payment[0].name,             
        "cardNumber": cardNumber
    };

    return paymentInfo;
}

export const paymentController = {
    save,
    getPaymentInfo,
    clear
}