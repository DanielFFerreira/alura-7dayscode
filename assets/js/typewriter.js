const msg = "Coloque em prática os seus conhecimentos em desafios diários 👩🏽‍💻!";

let titulo = document.querySelector('.practice__title');

for (var i = 0; i < msg.length; i++) {
  (function(position){
    setTimeout(() => {
      titulo.innerHTML += msg.charAt(position)
    }, 160*position);
  })(i);
}

