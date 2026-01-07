const menuToggleBtn = document.querySelector("#menuToggleBtn");
const menu = document.querySelector("#menu");
const toggleBoxBtn = document.querySelector("#toggleBoxBtn");
const contentBox = document.querySelector("#contentBox");
const increaseBtn = document.querySelector("#increaseBtn");
const decreaseBtn = document.querySelector("#decreaseBtn");
const resetBtn = document.querySelector("#resetBtn");
const countText = document.querySelector("#count");
const faqQuestionButtons = document.querySelectorAll(".question");





// 11.2Menu
let isMenuOpen = false;
function renderMenu(){
  menu.classList.toggle("hidden",!isMenuOpen);
}
menuToggleBtn.addEventListener("click",()=>{
  isMenuOpen = !isMenuOpen;
  renderMenu();
})

// Box
let isBoxVisible = false;
function renderBox(){
  contentBox.classList.toggle("hidden",!isBoxVisible)
}
toggleBoxBtn.addEventListener("click", () => {
  isBoxVisible = !isBoxVisible
  renderBox();
});

//FAQ
let openFaqIndex = null;
const faqAnswers = document.querySelectorAll(".answer");
function renderFAQ(){
  faqAnswers.forEach((answer, index) =>{
    answer.classList.toggle("hidden",index !== openFaqIndex);
  })
}
faqQuestionButtons.forEach((button , index) =>{
  button.addEventListener("click",() =>{
    openFaqIndex = openFaqIndex === index? null : index;
    renderFAQ();
  })
})
// Counter
// STATE
let count = 0;
// RENDER
function renderCounter(){
  countText.textContent = count;
}
// EVENT
increaseBtn.addEventListener("click", () =>{
  count++;
  renderCounter();
});
decreaseBtn.addEventListener("click", () => {
  count--;
  renderCounter();
});
resetBtn.addEventListener("click", () => {
  count = 0;
  renderCounter();
});

renderCounter();
renderMenu();
renderBox();
renderFAQ();
