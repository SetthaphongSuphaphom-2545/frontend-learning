export function initFaq() {
  const questions = document.querySelectorAll(".question");
  const answers = document.querySelectorAll(".answer");

  // STATE
  let openIndex = null;

  // RENDER
  function render() {
    answers.forEach((answer, index) => {
      answer.classList.toggle("hidden", index !== openIndex);
    });
  }

  // EVENT
  questions.forEach((button, index) => {
    button.addEventListener("click", () => {
      openIndex = openIndex === index ? null : index;
      render();
    });
  });

  // INITIAL RENDER
  render();
}
