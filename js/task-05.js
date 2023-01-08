const inputEl = document.querySelector("#name-input");
const nameEl = document.querySelector("#name-output");
const onInputTyping = (event) => {
  nameEl.textContent = event.currentTarget.value;
};
inputEl.addEventListener("input", onInputTyping);
