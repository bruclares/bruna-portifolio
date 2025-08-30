const botaoToggle = document.querySelector(".toggle-menu");
const navegacao = document.querySelector(".nav");

if (botaoToggle && navegacao) {
  function toggleMenu(event) {
    navegacao.classList.toggle("show");
  }
  botaoToggle.addEventListener("click", toggleMenu);
}
