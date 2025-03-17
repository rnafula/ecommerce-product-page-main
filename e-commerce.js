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
let changeToImage1= document.querySelector(".small1")
changeToImage1.addEventListener("click",()=>{
    document.querySelector(".big-image1").style.display="block"
     document.querySelector(".big-image2").style.display="none"
      document.querySelector(".big-image3").style.display="none"
       document.querySelector(".big-image4").style.display="none"
})
let changeToImage2= document.querySelector(".small2")
changeToImage2.addEventListener("click",()=>{
    document.querySelector(".big-image1").style.display="none"
     document.querySelector(".big-image2").style.display="block"
      document.querySelector(".big-image3").style.display="none"
       document.querySelector(".big-image4").style.display="none"
})
let changeToImage3= document.querySelector(".small3")
changeToImage3.addEventListener("click",()=>{
    document.querySelector(".big-image1").style.display="none"
     document.querySelector(".big-image2").style.display="none"
      document.querySelector(".big-image3").style.display="block"
       document.querySelector(".big-image4").style.display="none"
})
let changeToImage4= document.querySelector(".small4")
changeToImage4.addEventListener("click",()=>{
    document.querySelector(".big-image1").style.display="none"
     document.querySelector(".big-image2").style.display="none"
      document.querySelector(".big-image3").style.display="none"
       document.querySelector(".big-image4").style.display="block"
})
