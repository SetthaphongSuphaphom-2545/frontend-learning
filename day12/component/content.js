export function initBox() {
  const toggleBoxBtn = document.querySelector("#toggleBoxBtn");
  const contentBox = document.querySelector("#contentBox");

  // STATE
  let isBoxVisible = false;

  // RENDER
  function renderBox() {
    contentBox.classList.toggle("hidden", !isBoxVisible);
  }

  // EVENT
  toggleBoxBtn.addEventListener("click", () => {
    isBoxVisible = !isBoxVisible;
    renderBox();
  });

  // INITIAL RENDER
  renderBox();
}
