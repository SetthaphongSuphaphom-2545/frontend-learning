let count = 0;

export function initCounter() {
  const countText = document.querySelector("#count");
  const increaseBtn = document.querySelector("#increaseBtn");
  const decreaseBtn = document.querySelector("#decreaseBtn");
  const resetBtn = document.querySelector("#resetBtn");

  function render() {
    countText.textContent = count;
  }

  increaseBtn.addEventListener("click", () => {
    count++;
    render();
  });

  decreaseBtn.addEventListener("click", () => {
    count--;
    render();
  });

  resetBtn.addEventListener("click", () => {
    count = 0;
    render();
  });

  render();
}
