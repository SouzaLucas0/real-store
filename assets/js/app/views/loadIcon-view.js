function setIcon(btn) {    
    if(btn.getAttribute('data-cart') != 'add' && btn.getAttribute('data-cart') != 'remove' && btn.getAttribute('data-cart') != 'removeItem') {
        console.log(btn.getAttribute('data-cart'))
        return
    } 

    console.log()
    btn.classList.remove('fa-plus');
    btn.classList.add('fa-spinner', 'fa-spin-pulse');
}

function removeIcon(btn) {
    if(btn.getAttribute('data-cart') != 'add' && btn.getAttribute('data-cart') != 'remove' && btn.getAttribute('data-cart') != 'removeItem') {
        console.log(btn.getAttribute('data-cart'))
        return
    } 
    
    if(btn.dataset.cart == 'remove') btn.classList.add('fa-minus');    
    else btn.classList.add('fa-plus');

    btn.classList.remove('fa-spinner', 'fa-spin-pulse')

    
}

export const loadIcon = {
    setIcon,
    removeIcon
}