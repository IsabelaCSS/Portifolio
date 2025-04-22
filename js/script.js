document.addEventListener("DOMContentLoaded", () => {
  // Redireciona após 5 segundos (se necessário)
  setTimeout(() => {
    // Remova esta linha se não quiser redirecionamento
    // window.location.href = "index.html";
  }, 5000);

  // Script de filtros
  const botoesFiltro = document.querySelectorAll(".filtro");
  const cards = document.querySelectorAll(".card");

  botoesFiltro.forEach(botao => {
    botao.addEventListener("click", () => {
      // Troca classe visual
      botoesFiltro.forEach(b => b.classList.remove("ativo"));
      botao.classList.add("ativo");

      const filtro = botao.getAttribute("data-filter");

      cards.forEach(card => {
        if (filtro === "todos" || card.classList.contains(filtro)) {
          card.style.display = "flex";
        } else {
          card.style.display = "none";
        }
      });
    });
  });
});

// Script de abas (tabs) — se estiver usando abas com IDs e botões
function showTab(evt, tabName) {
  // Esconde todos os conteúdos
  const contents = document.querySelectorAll('.content');
  contents.forEach(content => {
      content.classList.remove('active');
  });

  // Remove classe ativa de todas as tabs
  const tabs = document.querySelectorAll('.tab');
  tabs.forEach(tab => {
      tab.classList.remove('active');
  });

  // Exibe a aba clicada e ativa o botão dela
  document.getElementById(tabName).classList.add('active');
  evt.currentTarget.classList.add('active');
}




