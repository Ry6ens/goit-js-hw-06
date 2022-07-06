let counterValue = 0;

const decrementBtn = document.querySelector('[data-action="decrement"]');
const incrementBtn = document.querySelector('[data-action="increment"]');
const resultValue = document.querySelector("#value");

// function incrementDisplay() {
//   counterValue += 1;
//   resultValue.innerHTML = counterValue;
// }

// function decrementDisplay() {
//   counterValue -= 1;
//   resultValue.innerHTML = counterValue;
// }

incrementBtn.addEventListener("click", () => {
  counterValue += 1;
  resultValue.textContent = counterValue;
});
decrementBtn.addEventListener("click", () => {
  counterValue -= 1;
  resultValue.textContent = counterValue;
});
