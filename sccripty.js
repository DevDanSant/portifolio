const navToggle = document.getElementById("navToggle");
const navLinks = document.getElementById("navLinks");

navToggle.addEventListener("click", () => {
  const estaAberto = navLinks.classList.toggle("aberto");
  // aria-expanded ajuda leitores de tela a saber o estado do menu
  navToggle.setAttribute("aria-expanded", estaAberto);
});

// fecha o menu automaticamente ao clicar em um link (bom pra mobile)
navLinks.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => navLinks.classList.remove("aberto"));
});

// ============================================
// 2) EFEITO DE "BOOT" NO HERO
// Digita um texto letra por letra usando setInterval,
// simulando um terminal ligando. Mesma lógica de timer
// que você já usou no cronômetro Pomodoro.
// ============================================
const bootLine = document.getElementById("bootLine");
const textoBoot = "> inicializando_portfolio.exe";
let indice = 0;

const intervaloDigitacao = setInterval(() => {
  bootLine.textContent = textoBoot.slice(0, indice + 1);
  indice++;

  if (indice === textoBoot.length) {
    clearInterval(intervaloDigitacao); // importante: para o timer quando termina
  }
}, 45); // 45ms entre cada letra

// ============================================
// 3) ANO ATUAL NO RODAPÉ
// Pequeno detalhe: assim você nunca precisa
// atualizar o ano manualmente.
// ============================================
document.getElementById("ano").textContent = new Date().getFullYear();