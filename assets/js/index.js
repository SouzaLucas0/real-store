import { clienteService } from './app/service/cliente-service.js'
import { view } from './app/views/view.js';
import { helper } from './app/helpers/sortProducts-helper.js';
import { productControler } from './app/controller/product-controller.js';
import { loadIcon } from './app/views/loadIcon-view.js';

const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

var qtdProductOnCart = $('[data-notifies]');
var productsList = $('[data-productsList]');
var searchInput = $('[data-search]');

productsList.addEventListener('click', async (element) => {
    //btn like
    if(element.target.parentNode.id == 'like'){
        element.target.parentNode.classList.toggle('product__card-button-like--active')
    }
    //btn add and remove
    productControler.toCart(element);
    //animation btn
    loadIcon.setIcon(element.target)
    setTimeout(() => {
        qtdProductOnCart.dataset.notifies = productControler.countProductsOnCart();
        loadIcon.removeIcon(element.target);
    }, 1000);
    
});

//btn order
$$('[data-order]').forEach(btn => btn.addEventListener('click', async element => {
    let products = await helper.sort(element.target.getAttribute('data-order'));
    renderPage(products);
}))
//btn submit search bar
$('[data-btnSearch]').addEventListener('click', element => {
    element.preventDefault()
    if(searchInput.value) search(searchInput.value);
    else loadProducts()    
});

async function loadProducts() {
    let products = await clienteService.getConnection();
    renderPage(products)
}

function renderPage(list) {    
    productsList.innerHTML = '';
    list.forEach(element => {
        productsList.appendChild(view.createProductsIndex(element.id, element.title, element.price, element.image, element.description));
    });
    qtdProductOnCart.dataset.notifies = productControler.countProductsOnCart();    
}
//search bar
async function search(term) {    
    let list = await clienteService.search(term)
    renderPage(list);
}

loadProducts()