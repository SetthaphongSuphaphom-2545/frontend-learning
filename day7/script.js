

const toggleBoxBtn = document.querySelector("#toggleBox");
const box = document.querySelector("#box");


toggleBoxBtn.addEventListener("click",()=>{
    box.classList.toggle("hidden");
});