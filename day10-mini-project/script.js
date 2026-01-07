const menuToggleBtn = document.querySelector("#menuToggleBtn");
const menu = document.querySelector("#menu");
const toggleBoxBtn = document.querySelector("#toggleBoxBtn");
const contentBox = document.querySelector("#contentBox");
const increaseBtn = document.querySelector("#increaseBtn");
const decreaseBtn = document.querySelector("#decreaseBtn");
const resetBtn = document.querySelector("#resetBtn");
const countText = document.querySelector("#count");
const faqQuestionButtons = document.querySelectorAll(".question");

let count = 0;

function toggleHidden(element) {
  element.classList.toggle("hidden");
}

// Menu
menuToggleBtn.addEventListener("click", () => {
  toggleHidden(menu);
});

// Box
toggleBoxBtn.addEventListener("click", () => {
  toggleHidden(contentBox);
});

//FAQ
faqQuestionButtons.forEach((questionButton) => {
    questionButton.addEventListener("click", () => {
        toggleHidden(questionButton.nextElementSibling);
    });
});
// Counter
function updateCount(value) {
  count += value;
  countText.textContent = count;
}

increaseBtn.addEventListener("click", () => updateCount(1));
decreaseBtn.addEventListener("click", () => updateCount(-1));
resetBtn.addEventListener("click", () => {
  count = 0;
  countText.textContent = count;
});

