document.addEventListener("DOMContentLoaded", () => {
  // Redirecionamento opcional
  setTimeout(() => {
    // window.location.href = "index.html";
  }, 4000);

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
const words = ["Web", "Front-end", "Back-end", "Full-stack", "Mobile"];
  let wordIndex = 0;
  let charIndex = 0;
  const typingElement = document.getElementById("typed-text");
  let isDeleting = false;

  function typeEffect() {
    const currentWord = words[wordIndex];
    const currentText = currentWord.substring(0, charIndex);
    typingElement.textContent = currentText;

    if (!isDeleting && charIndex < currentWord.length) {
      charIndex++;
      setTimeout(typeEffect, 150);
    } else if (isDeleting && charIndex > 0) {
      charIndex--;
      setTimeout(typeEffect, 100);
    } else {
      isDeleting = !isDeleting;
      if (!isDeleting) {
        wordIndex = (wordIndex + 1) % words.length;
      }
      setTimeout(typeEffect, 1000); // pausa antes de digitar o próximo
    }
  }

  document.addEventListener("DOMContentLoaded", typeEffect);



  window.onload = function () {
    gerarCards("projetos", "projetos", criarCardProjeto);
    gerarCards("certificados", "certificados", criarCardCertificado);
    gerarCards("voluntariados", "voluntariados", criarCardVoluntariado);
  };
  
  function gerarCards(tipo, containerId, criadorCard) {
    const container = document.getElementById(containerId);
    container.innerHTML = "";
  
    dadosPortfolio[tipo].forEach(item => {
      const card = criadorCard(item);
      container.appendChild(card);
    });
  }
  
  function criarCardProjeto(projeto) {
    const card = document.createElement("div");
    card.className = "card";
    card.innerHTML = `
      <div class="thumb"><img src="${projeto.imagem}" alt="${projeto.titulo}"></div>
      <h3>${projeto.titulo}</h3>
      <p>${projeto.descricao}</p>
      <div class="card-footer">
        <a href="${projeto.github}" target="_blank">GitHub</a>
        <a href="destalhesPro.html?projeto=${projeto.id}"><button>Detalhes</button></a>
      </div>
    `;
    return card;
  }
  
  function criarCardCertificado(cert) {
    const card = document.createElement("div");
    card.className = "cardCert";
    card.innerHTML = `
      <a href="${cert.link}"><div class="thumb"><img src="${cert.imagem}" alt="${cert.titulo}"></div></a>
      <h3>${cert.titulo}</h3>
    `;
    return card;
  }
  
  function criarCardVoluntariado(volun) {
    const card = document.createElement("div");
    card.className = "cardVolun";
    card.innerHTML = `
      <div class="thumb"><img src="${volun.imagem}" alt="${volun.titulo}"></div>
      <h3>${volun.titulo}</h3>
      <p>${volun.descricao}</p>
      <div class="cardVolun-footer">
        <a href="detalhesVolun.html?voluntariado=${volun.id}"><button>Detalhes</button></a>
      </div>
    `;
    return card;
  }
  document.addEventListener('DOMContentLoaded', () => {
    document.querySelector('#form-left').addEventListener('submit', function(event) {
      event.preventDefault();

      const formData = new FormData(this);

      fetch(this.action, {
        method: 'POST',
        body: formData,
        headers: {
          'Accept': 'application/json'
        }
      })
      .then(response => {
        if (response.ok) {
          Swal.fire({
            icon: 'success',
            title: 'Sucesso!',
            text: 'Mensagem enviada com sucesso!'
          });
          this.reset();
        } else {
          response.json().then(data => {
            if (data.errors) {
              Swal.fire({
                icon: 'error',
                title: 'Erro!',
                text: data.errors.map(error => error.message).join(', ')
              });
            } else {
              Swal.fire({
                icon: 'error',
                title: 'Erro!',
                text: 'Ocorreu um erro no envio da mensagem.'
              });
            }
          });
        }
      })
      .catch(error => {
        Swal.fire({
          icon: 'error',
          title: 'Erro!',
          text: 'Ocorreu um erro no envio da mensagem.'
        });
        console.error('Erro:', error);
      });
    });
  });
document.querySelectorAll("nav ul li a").forEach(link => {
  link.addEventListener("click", () => {
    closeMenu();
  });
});

