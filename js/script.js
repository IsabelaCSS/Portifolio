document.addEventListener("DOMContentLoaded", () => {
  // Redirecionamento opcional
  setTimeout(() => {
    // window.location.href = "index.html";
  }, 5000);

  // Filtros
  const botoesFiltro = document.querySelectorAll(".filtro");
  const cards = document.querySelectorAll(".card");

  botoesFiltro.forEach(botao => {
    botao.addEventListener("click", () => {
      botoesFiltro.forEach(b => b.classList.remove("ativo"));
      botao.classList.add("ativo");

      const filtro = botao.getAttribute("data-filter");
      cards.forEach(card => {
        card.style.display = filtro === "todos" || card.classList.contains(filtro) ? "flex" : "none";
      });
    });
  });

  // Tabs (se usar)
  function showTab(evt, tabName) {
    const contents = document.querySelectorAll('.content');
    contents.forEach(content => content.classList.remove('active'));
    const tabs = document.querySelectorAll('.tab');
    tabs.forEach(tab => tab.classList.remove('active'));
    evt.currentTarget.classList.add('active');
    document.getElementById(tabName).classList.add('active');
  }
  window.showTab = showTab; // Deixa a função acessível no HTML onClick

  // Carrossel de Serviços
  const slides = document.querySelectorAll(".serviços .slide");
  const leftArrow = document.querySelector(".serviços .arrow.left");
  const rightArrow = document.querySelector(".serviços .arrow.right");
  let currentSlide = 0;

  function showSlide(index) {
    slides.forEach((slide, i) => {
      if (i === index) {
        slide.classList.add("active");
      } else {
        slide.classList.remove("active");
      }
    });
  }
  

  if (leftArrow && rightArrow && slides.length > 0) {
    leftArrow.addEventListener("click", () => {
      currentSlide = (currentSlide - 1 + slides.length) % slides.length;
      showSlide(currentSlide);
    });

    rightArrow.addEventListener("click", () => {
      currentSlide = (currentSlide + 1) % slides.length;
      showSlide(currentSlide);
    });

    showSlide(currentSlide); // Inicializa
  }
});
