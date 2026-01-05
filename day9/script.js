

const toggleBoxButton = document.querySelector("#toggleBox");
const contentBox = document.querySelector("#box");

const menuToggleButton = document.querySelector("#menuBtn");
const navigationMenu = document.querySelector("#menu");

const faqQuestionButtons = document.querySelectorAll(".question");


function toggleVisibility(element) {
    element.classList.toggle("hidden");
}



toggleBoxButton.addEventListener("click", () => {
    toggleVisibility(contentBox);
});


faqQuestionButtons.forEach((questionButton) => {
    questionButton.addEventListener("click", () => {
        toggleVisibility(questionButton.nextElementSibling);
    });
});

let isMenuOpen = false;

function updateMenuVisibility() {
    navigationMenu.classList.toggle("hidden", !isMenuOpen);
}

menuToggleButton.addEventListener("click", () => {
    isMenuOpen = !isMenuOpen;
    updateMenuVisibility();
});
