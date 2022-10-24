import { clienteService } from './app/service/cliente-service.js'
import { view } from './app/views/view.js';
import { productControler } from './app/controller/product-controller.js';
import { loadIcon } from './app/views/loadIcon-view.js';

const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);
var searchInput = $('[data-search]');

var qtdProductOnCart = $('[data-notifies]');
var productsList = $('[data-productsList]');
var totalOfProducts = $('[data-total]');

//btn RemoveAll
$$('[data-cart]').forEach(btn => btn.addEventListener('click', element => {    
    productControler.toCart(element);
    setTimeout(() => {loadProducts()}, 1000);
}))

productsList.addEventListener('click', element => {
    productControler.toCart(element);
    loadIcon.setIcon(element.target);
    setTimeout(() => {loadProducts()}, 1000);
})

$('[data-btnSearch]').addEventListener('click', element => {
    element.preventDefault()
    if(searchInput.value) search(searchInput.value);
    else loadProducts()    
});

async function loadProducts() {
    let products = productControler.getCartProducts();    
    renderPage(products)
}

function renderPage(list) {
    if(!list) return 'Nenhum produto no carrinho' //TODO implement this

    qtdProductOnCart.dataset.notifies = productControler.countProductsOnCart();

    productsList.innerHTML = '';
    list.forEach(element => {
        productsList.appendChild(view.createProductsCart(element.id, element.name, (element.price * element.qtd), element.img, element.qtd));
    });
    totalOfProducts.innerHTML = `R$${productControler.getValueTotal().toFixed(2)}`
}

async function search(term) {    
    let list = await clienteService.searchOnCart(term)    
    renderPage(list)   
}

loadProducts()