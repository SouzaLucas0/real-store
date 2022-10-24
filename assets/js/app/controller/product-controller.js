import { clienteService } from "../service/cliente-service.js";

var cart = JSON.parse(localStorage.getItem('Cart')) || [];

function toCart(element) {
    let attributeValue = element.target.getAttribute('data-cart');
    let isAddBtn = element.target.getAttribute('data-cart') === 'add'; // remove after
    let isRemoveBtn = element.target.getAttribute('data-cart') === 'remove'; // remove after
    
    if (attributeValue === 'add') {
        let product = element.target.closest('[data-id]');
        let productId = parseInt(product.dataset.id);
        _addToCart(productId);
    }
    
    if (attributeValue === 'remove') {
        let product = element.target.closest('[data-id]');
        let productId = parseInt(product.dataset.id);
        _removeUndFromCart(productId);
    }
    
    if (attributeValue === 'removeAll') {
        _removeAllFromCart()
    }

    if (attributeValue === 'removeItem') {
        let product = element.target.closest('[data-id]');
        let productId = parseInt(product.dataset.id);
        _removeAllUndFromCart(productId)
    }
}

function countProductsOnCart(){    
    let counter = 0;
    cart.forEach(element => {
        counter += element.qtd
    });
    
    if(counter) return counter;
    else return 0;
}

function getCartProducts() {
    const _cartProducts = JSON.parse(localStorage.getItem('Cart'));
    Object.freeze(_cartProducts);
    
    return _cartProducts;
}


function getValueTotal() {
    let total = 0;

    cart.forEach(element => {
        total += element.qtd * element.price
    })
    return total;
}

async function _addToCart(id) {
    let product = await clienteService.getProduct(id)
    
    let exists = cart.find(element => element.id === id)
    
    if(!exists) {
        let productInfo = {
            "qtd": 1,
            "id": product.id,
            "name": product.title,
            "price": product.price,
            "img": product.image
        }
        cart.push(productInfo);
    }else {
        let product = cart[cart.findIndex(element => element.id === id)];
        product.qtd += 1;
    }

    localStorage.Cart = JSON.stringify(cart);

    //TODO 
    //deixar o botão de remover ativo apenar se o produto estiver no carrinho
}

function _removeUndFromCart(id) {
    let exists = cart.find(element => element.id === id);

    if(!exists) return

    else if(exists.qtd === 1) {
        let index = cart.findIndex(element => element.id === id)    

        if(index != -1) cart.splice(index, 1)
    }

    else if (exists.qtd > 1) {
        let product = cart[cart.findIndex(element => element.id === id)];
        product.qtd -= 1;
    }

    localStorage.setItem('Cart', JSON.stringify(cart))
}

function _removeAllUndFromCart(id) {   
    let index = cart.findIndex(element => element.id === id)
    if(index != -1) cart.splice(index, 1)

    localStorage.setItem('Cart', JSON.stringify(cart))
}

function _removeAllFromCart() {
    cart.splice('')
    localStorage.setItem('Cart', JSON.stringify(cart))
}

function clear() {
    _removeAllFromCart();
}

export const productControler = {
    toCart,
    countProductsOnCart,
    getCartProducts,
    getValueTotal,
    clear
}