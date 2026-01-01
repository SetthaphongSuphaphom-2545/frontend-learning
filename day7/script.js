

const toggleBoxBtn = document.querySelector("#toggleBox");
const box = document.querySelector("#box");


toggleBoxBtn.addEventListener("click",()=>{
    box.classList.toggle("hidden");
});

const menuBtn = document.querySelector("#menuBtn");
const menu = document.querySelector("#menu");


menuBtn.addEventListener("click",()=>{
    menu.classList.toggle("hidden");
});