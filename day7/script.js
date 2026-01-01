

const toggleBoxBtn = document.querySelector("#toggleBox");
const box = document.querySelector("#box");


toggleBoxBtn.addEventListener("click",()=>{
    box.classList.toggle("hidden");
});

const menuBtn = document.querySelector("#menuBtn");
const menu = document.querySelector("#menu");


menuBtn.addEventListener("click",()=>{
    menu.classList.toggle("menuhidden");
});


const questions = document.querySelectorAll(".question");

questions.forEach((btn) => {
  btn.addEventListener("click", () => {
    const answer = btn.nextElementSibling;
    answer.classList.toggle("hidden");
  });
});
