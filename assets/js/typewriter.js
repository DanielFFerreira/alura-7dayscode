const typing = document.querySelector('[data-js="typing"]');

const titleLogica = ["Lógica com Javascript"];

let messageIndex = 0;
let characterIndex = 0;
let currentMessage = '';
let currentCharacters = '';

const type = () => {
  currentMessage = titleLogica[messageIndex];
  currentCharacters = currentMessage.slice(0, characterIndex++);
  typing.textContent = currentCharacters;
}

setInterval(type, 150);