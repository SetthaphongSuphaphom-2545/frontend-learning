export function initMenu() {
  const menuToggleBtn = document.querySelector("#menuToggleBtn");
  const menu = document.querySelector("#menu");

  // STATE
  let isMenuOpen = false;

  // RENDER
  function renderMenu() {
    menu.classList.toggle("hidden", !isMenuOpen);
  }

  // EVENT
  menuToggleBtn.addEventListener("click", () => {
    isMenuOpen = !isMenuOpen;
    renderMenu();
  });

  // INITIAL RENDER
  renderMenu();
}
