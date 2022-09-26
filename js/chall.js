const btnFdown = document.querySelector(".f-down"); 
const btnFup = document.querySelector(".f-up"); 
const btnCdown = document.querySelector(".c-down");
const btnCup = document.querySelector(".c-up");
const fItems = document.querySelector(".f-items");
const cItems = document.querySelector(".c-items");
const openBtn = document.querySelector(".open");
const closeBtn = document.querySelector(".close");
const aside = document.querySelector(".header-main");

openBtn.addEventListener("click", function(){
    aside.classList.add("show-side")
})

closeBtn.addEventListener("click", function(){
    aside.classList.remove("show-side")
})

btnCdown.addEventListener("click", function(){
    btnCup.classList.toggle("show")
    btnCdown.classList.add("hide")
    cItems.classList.add("show")
})
btnCup.addEventListener("click", function(){
    btnCup.classList.toggle("show")
    btnCdown.classList.remove("hide")
    cItems.classList.remove("show")
})

btnFdown.addEventListener("click", function(){
    btnFup.classList.toggle("show")
    btnFdown.classList.add("hide")
    fItems.classList.add("show")
})
btnFup.addEventListener("click", function(){
    btnFup.classList.toggle("show")
    btnFdown.classList.remove("hide")
    fItems.classList.remove("show")
})





