const burgerMenu=document.querySelector(".burgerMenu");
const menuclose=document.querySelector(".menuclose");
const lienMobile=document.querySelector(".mobilMenu");

burgerMenu.addEventListener("click",function(){
  lienMobile.classList.add("displayblock")
})

menuclose.addEventListener("click",function(){
  lienMobile.classList.remove("displayblock")

})