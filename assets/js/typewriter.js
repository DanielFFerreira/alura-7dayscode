const typing = document.querySelector('[data-js="typing"]');

const titleWhiter = ["Lógica com Javascript"];

let messageIndex = 0;
let characterIndex = 0;
let currentMessage = '';
let currentCharacters = '';

const type = () => {
  currentMessage = titleWhiter[messageIndex];
  currentCharacters = currentMessage.slice(0, characterIndex++);
  typing.textContent = currentCharacters;
}

setInterval(type, 150);