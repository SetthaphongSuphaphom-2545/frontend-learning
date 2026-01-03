

const toggleBoxBtn = document.querySelector("#toggleBox");
const box = document.querySelector("#box");
const menuBtn = document.querySelector("#menuBtn");
const menu = document.querySelector("#menu");
const questions = document.querySelectorAll(".question");

function toggleHidden(element) {
    element.classList.toggle("hidden")
}


toggleBoxBtn.addEventListener("click",()=>{
    toggleHidden(box)
});

questions.forEach((questions)=>{
    questions.addEventListener("click",()=>{
        toggleHidden(questions.nextElementSibling)
    })
})
let isMenuOpen = false;

function updateMenu() {
    if (isMenuOpen) {
        menu.classList.remove("hidden");
    } else {
        menu.classList.add("hidden");
    }
}

menuBtn.addEventListener("click", () => {
    isMenuOpen = !isMenuOpen;
    updateMenu();
});
