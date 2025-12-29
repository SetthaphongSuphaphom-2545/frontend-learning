let count = 0;
const name = "Misaki" ;


const text = document.querySelector("#text");
const button = document.querySelector("#btn");
const buttonIncrease = document.querySelector("#increase");
const buttonDecrease = document.querySelector("#decrease");
const buttonReset = document.querySelector("#reset");
const countText = document.querySelector("#count")
const message = document.querySelector("#message");
const toggleBtn = document.querySelector("#toggle");
const themeBtn = document.querySelector("#themeBtn");
button.addEventListener("click",() =>{
    text.textContent = "yeee You clicked!!";
});

buttonIncrease.addEventListener("click",() =>{
    count = count+1;
    countText.textContent = count;
});

buttonDecrease.addEventListener("click",() =>{
   count = count-1;
    countText.textContent = count;
});

buttonReset.addEventListener("click",() =>{
   count = 0;
    countText.textContent = count;
});

toggleBtn.addEventListener("click",() =>{
   if (message.textContent === "Hello"){
    message.textContent = "GoodBye";
   } else {
    message.textContent = "Hello"
   }
});

themeBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark");

  if (document.body.classList.contains("dark")) {
    themeBtn.textContent = "Light Mode";
  } else {
    themeBtn.textContent = "Dark Mode";
  }
});
