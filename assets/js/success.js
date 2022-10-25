import { paymentController } from "./app/controller/payment-constroller.js";
import { productControler } from "./app/controller/product-controller.js";
import { view } from "./app/views/view.js";

const paymentInfo = paymentController.getPaymentInfo();
const $ = document.querySelector.bind(document);

$('[data-totalValue]').innerHTML = paymentInfo.total.toFixed(2)
$('[data-installments]').innerHTML = calculateInstallments()
$('[data-name]').innerHTML = paymentInfo.name;
$('[data-numCard]').innerHTML = paymentInfo.cardNumber;

var productsList = $('[data-productsList]');

function calculateInstallments() {
    if(parseInt(paymentInfo.installments) === 1) return `1x - ${paymentInfo.total.toFixed(2)}`;

    else return `${paymentInfo.installments}x - ${(paymentInfo.total/2).toFixed(2)}`;    
}
function renderPage() {
    let producs = productControler.getCartProducts();
    producs.forEach(element => {        
        productsList.appendChild(view.createProductsSuccess(element.name, element.img))
    });
    //clear localstorage for new purchase
    setTimeout(() => {
        paymentController.clear();
        productControler.clear();
    }, 1500)
}

renderPage()