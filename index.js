const textareaEl = document.querySelector(".textarea");
const charactersNumberEl = document.querySelector(".stat_number--characters");
const twitterNumberEl = document.querySelector(".stat_number--twitter");
const facebookNumberEl = document.querySelector(".stat_number--facebook");
const wordsNumberEl = document.querySelector(".stat_number--words");

function validation() {
  if (textareaEl.value.includes("<script>")) {
    alert("you can't use <script> in your text.");
    textareaEl.value = textareaEl.value.replace("<script>", "");
  }
}
function inputHandler() {
  //validation
  validation();
  //determine values numbers
  let numberOfWords = textareaEl.value.split(" ").length;
  if (textareaEl.value.length === 0) {
    numberOfWords = 0;
  }
  const numberOfCharacters = textareaEl.value.length;
  const twitterCharactersLeft = 280 - numberOfCharacters;
  const facebookCharactersLeft = 5000 - numberOfCharacters;
  // add visual indicator when limit is reached
  if (twitterCharactersLeft < 0) {
    twitterNumberEl.classList.add("stat_number_limit");
  } else {
    twitterNumberEl.classList.remove("stat_number_limit");
  }
  if (facebookCharactersLeft < 0) {
    facebookNumberEl.classList.add("stat_number_limit");
  } else {
    facebookNumberEl.classList.remove("stat_number_limit");
  }
  //update on html
  wordsNumberEl.textContent = numberOfWords;
  charactersNumberEl.textContent = numberOfCharacters;
  twitterNumberEl.textContent = twitterCharactersLeft;
  facebookNumberEl.textContent = facebookCharactersLeft;
}

textareaEl.addEventListener("input", inputHandler);
