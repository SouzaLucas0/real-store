import { rules } from "../models/rules.js";


function createProductsIndex (id, name, price, img, description) {
    let productCard = document.createElement('li');
    productCard.classList.add('product__card')
    productCard.dataset.id = id;

    productCard.innerHTML = 
        `<div class="product__card-img-title">
            <div class="product__card-img">
               <img src="${img}" alt="${name}" class="img">            
            </div>
            <h3 class="produtc__card-title">${name}</h3>            
        </div>
        <div class="product__card-info">
            <p class="produtc__card-description">${description}</p>
            <p class="product__card-price">R$${price.toFixed(2)}</p>
            <div class="product__card-button">
                <button class="product__card-button-add" data-cart="add"><i data-cart="add" class="fa-solid fa-plus"></i></button>
                <button class="product__card-button-remove" data-cart="remove"><i data-cart="remove" class="fa-solid fa-minus"></i></button>
                <button class="product__card-button-like" id="like" data-like><i data-like="like" class="fa-regular fa-heart"></i></button>
            </div>
        </div>`;
    
    return productCard;
}

function createProductsCart (id, name, price, img, qtd) {
    let productCard = document.createElement('li');
    productCard.classList.add('product__item')
    productCard.dataset.id = id;

    productCard.innerHTML = 
        `<div class="product__card-img">
            <img src="${img}" alt="${name}" class="img">
        </div>
        <h3 class="produtc__card-title">${name} </h3>
        <p class="product__card-price">R$${price.toFixed(2)}</p>
        <div class="product__card-quant">
            <span class="product_card-text" data-qtd>Quant.</span>
            <button class="product__card-quant-remove" data-cart="remove"><i data-cart="remove" class="fa-solid fa-minus"></i></button>                      
            <span class="product__card-quant-qtd">${qtd}</span>
            <button class="product__card-quant-add" data-cart="add"><i data-cart="add" class="fa-solid fa-plus"></i></button>
        </div>
        <button class="product__card-delete" data-cart="removeItem"><i data-cart="removeItem" class="fa-solid fa-trash"></i></button>`;
    
    return productCard;
}

function createInstallments(value) {
    let installments;

    if (value <= rules.getMinValue()) {
        installments = 
        `<option value="1">1x - R$${value}</option>`

    }else {
        installments = `<option value="1">1x - R$${value.toFixed(2)}</option>
        <option value="2">2x - R$${(value/2).toFixed(2)}</option>`
    }
    
    return installments
}

function createProductsSuccess(name, img){
    let productCard = document.createElement('li');
    productCard.classList.add('product__item');

    productCard.innerHTML =
    `<div class="productsList__item-img">
        <img src="${img}" alt="${name}" class="img">
    </div>
    <h3 class="productsList__item-name">${name}</h3>`;

    return productCard
}

export const view = {
    createProductsIndex,
    createProductsCart,
    createInstallments,
    createProductsSuccess
}