document.addEventListener("DOMContentLoaded", () => {
    setTimeout(() => {
        window.location.href = "index.html";
    }, 5000); // Redireciona após 5 segundos
   // Script de filtros
   const botoesFiltro = document.querySelectorAll(".filtro");
   const cards = document.querySelectorAll(".card");

   botoesFiltro.forEach(botao => {
     botao.addEventListener("click", () => {
       // Ativa visual
       botoesFiltro.forEach(b => b.classList.remove("ativo"));
       botao.classList.add("ativo");

       const filtro = botao.getAttribute("data-filter");

       cards.forEach(card => {
         // Esconde todos
         card.style.display = "none";

         // Mostra apenas os que correspondem ao filtro
         if (card.classList.contains(filtro)) {
           card.style.display = "block";
         }
       });
     });
   });
 });
