const textareaEl = document.getElementById("textarea");
const totalcharEl = document.getElementById("totalchar");
const remainingEl = document.getElementById("remaining");

totalcharEl.innerText = `Total Characters: ${chars}`;
remainingEl.innerText = `Remaining: ${remain}?`;

let score = JSON.parse(localStorage.getItem("chars"));
if (!chars) {
  chars = 0;
}

formEl.addEventListener("keypress", (event) => {
  const userAns = +inputEl.value;
  if (userAns == correctAns) {
    score++;
    updateLocalStorage();
  } else {
    score--;
    updateLocalStorage();
  }
});

function updateLocalStorage() {
  localStorage.setItem("chars", JSON.stringify(chars));
}
