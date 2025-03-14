let dropdown=document.querySelector(".dropdown")
dropdown.addEventListener("click",()=>{
    document.querySelector(".navOnClick").style.display="flex"
})
let closeMenu= document.querySelector(".closeMenu")
closeMenu.addEventListener("click",()=>{
    document.querySelector(".navOnClick").style.display="none"


})
let cart= document.querySelector(".cart")
cart.addEventListener("click",()=>{
    document.querySelector(".empty-cart").style.display="block"
})
let closeCart = document.querySelector(".close-cart")
closeCart.addEventListener("click",()=>{
    document.querySelector(".empty-cart").style.display="none"


})
