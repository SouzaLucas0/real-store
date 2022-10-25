import { view } from './app/views/view.js';
import { productControler } from './app/controller/product-controller.js';
import { paymentController } from './app/controller/payment-constroller.js';

const $ = document.querySelector.bind(document);

var installmentsOptions = $('[data-installments]');

$('[data-form]').addEventListener('submit', form => {
    form.preventDefault();
    paymentController.save(form.target);
    window.location.href="./success.html";
})

function renderPage() {
    let totalValue = productControler.getValueTotal(); 
    installmentsOptions.innerHTML = view.createInstallments(totalValue);
}

renderPage();