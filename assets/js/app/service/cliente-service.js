import { productControler } from "../controller/product-controller.js";
//get products from api
async function getConnection() {
    try{
        let connection = await fetch(`https://fakestoreapi.com/products`)
        let convertConnection = await connection.json()

        return convertConnection
    }catch(err) {
        console.log(err)
        setTimeout(() => {
            window.location.href = '../../../../error.html';
        },1500)
    }
}
//search product by id
async function getProduct(id) {
    try {
        let connection = await fetch(`https://fakestoreapi.com/products/${id}`)
        let convertConnection = await connection.json()

        return convertConnection

    } catch(err) {
        console.log(err)
        setTimeout(() => {
            window.location.href = '../../../../error.html';
        },1500)
    }
}
// search function in index page
async function search(term) {
    let products = await getConnection();
    let result = []
    products.forEach(element => {
        let title = element.title.toUpperCase();

        if(title.includes(term.toUpperCase())) {
            result.push(element)
        }
    });

    return result
}
// search function in cart page
async function searchOnCart(term) {
    let products = await productControler.getCartProducts();
    let result = []
    products.forEach(element => {
        let name = element.name.toUpperCase();

        if(name.includes(term.toUpperCase())) {
            result.push(element)
        }
    });

    return result
}

export const clienteService = {
    getConnection,
    getProduct,
    search,
    searchOnCart
}