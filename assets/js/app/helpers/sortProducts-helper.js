import { clienteService } from '../service/cliente-service.js'

async function sort(order) {
    let products = await clienteService.getConnection();       

    if (order === 'name') return products.sort((a, b) => {
        if(a.title < b.title) {
            return -1;
        } else true;
    }) 

    if (order = 'price') return products.sort((a,b) => a.price - b.price)
    
}

export const helper = {
    sort
}