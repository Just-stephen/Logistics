const cartIcon = document.querySelector('#cart-icon')
const cart = document.querySelector('.cart')
const cartClose = document.querySelector('.btn-close')

const product = document.querySelector('.product-box')

cartIcon.onclick =()=>{
    cart.classList.add("active");
}
cartClose.onclick =()=>{
    cart.classList.remove("active");
}





