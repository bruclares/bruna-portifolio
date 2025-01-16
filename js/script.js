const botao = document.querySelector(".toggle-menu");

function toggleMenu(event) {
  const nav = document.querySelector(".nav");
  nav.classList.toggle("show");
}

botao.addEventListener("click", toggleMenu);
