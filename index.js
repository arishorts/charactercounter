const myformEl = document.getElementById("myform");
const textareaEl = document.getElementById("textarea");
const totalcharEl = document.getElementById("totalchar");
const remainEl = document.getElementById("remain");

//let currchars = JSON.parse(localStorage.getItem("chars"));
//there was no need to use storage because i wasn't submitting the page

/*he used keyup instead of keydown*/
textareaEl.addEventListener("keyup", () => {
  const chars = textareaEl.value.length;
  const remain = textareaEl.getAttribute("maxLength") - chars;
  updateText(chars, remain);
  //  localStorage.setItem("chars", JSON.stringify(chars));
  //there was no need to use storage because i wasn't submitting the page
});

function updateText(chars, remain) {
  totalcharEl.innerText = `Total Characters: ${chars}`;
  remainEl.innerText = `Remaining: ${remain}`;
}
