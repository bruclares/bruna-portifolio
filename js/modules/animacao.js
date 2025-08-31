export default function initAnimacaoScroll() {
  const sections = document.querySelectorAll(".js-scroll-animation > *");

  if (sections.length) {
    function animaScroll() {
      sections.forEach((section) => {
        const sectionTop = section.getBoundingClientRect().top;
        const windowHeight = window.innerHeight * 0.6;

        if (sectionTop < windowHeight) {
          section.classList.add("visible");
        }
      });
    }
    animaScroll();
    window.addEventListener("scroll", animaScroll);
  }
}
