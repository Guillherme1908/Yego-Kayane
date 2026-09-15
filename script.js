// ============================================================
// LISTA DE PRESENTES — YÊGO & KAYANE
// "available: false" deixa o presente indisponível.
// ============================================================

const COUPLE_WHATSAPP = "5585974019516";

const gifts = [
  { id: 1,
     name: "Jogo de panelas", 
     price: 200, 
     image: "img/panelas.jpg",
      description: ".", 
      available: true, 
      tag: "MOMENTO DONA DE CASA" },

  { id: 2, 
    name: "Air fryer", 
    price: 300, 
    image: "img/airfrye.jpg", 
    description: "Um presente criativo para eterninzar o momento.", 
    available: true, 
    tag: "PARA REFEIÇÕES MAIS SAUDAVEIS" },

  { id: 3, 
    name: "Cafeteira", 
    price: 400, 
    image: "img/cafeteira.jpg",
    description: "Um empurrãozinho estratégico para quem quer disputar o buquê.",
    available: true, 
    tag: "PARA DIAS MAIS PRODUTIVOS" },

  { id: 4, 
    name: "Liquidificador", 
    price: 500, 
    image: "img/liquidificador.jpg", 
    description: "Porque chegar primeiro no buffet também é uma forma de amar.", 
    available: true, 
    tag: "PARA VITAMINAS E SUCOS" },

  { id: 5, 
    name: "Sanduicheira", 
    price: 150, 
    image: "img/sanduicheira.jpg", 
    description: "Para começar a vida de casados com café, carinho e muita paz.", 
    available: true, 
    tag: "PARA O DIA A DIA" },

  { id: 6, 
    name: "Forno elétrico", 
    price: 120000, 
    image: "img/forno.jpg", 
    description: "Algo simples e de coração.", 
    available: true, 
    tag: "PARA O DIA A DIA" },

  { id: 7, 
    name: "Jogo de pratos", 
    price: 250, 
    image: "img/pratos.jpg", 
    description: "Um presente essencial para o dia a dia.", 
    available: true, 
    tag: "ESSENCIAL" },

  { id: 8, 
    name: "Jogo de taças", 
    price: 600, 
    image: "img/taça.jpg", 
    description: "UM presente essencial para o dia a dia.", 
    available: true, 
    tag: "ESSENCIAL" },

  { id: 9, 
    name: "Jogo de copos", 
    price: 300, 
    image: "img/copos.jpg", 
    description: "UM presente essencial para o dia a dia.", 
    available: true, 
    tag: "ESSENCIAL" },

  { id: 10, 
    name: "Jogo de facas", 
    price: 150, 
    image: "img/facas.jpg", 
    description: "Ajude o casal a transformar a viagem dos sonhos em memória para sempre.", 
    available: true, 
    tag: "ESSENCIAL" },

  { id:12, 
    name: "Faqueiro", 
    price: 100, 
    image: "img/faqueiro.jpg", 
    description: "Um presente =.", 
    available: true, 
    tag: "SIMBÓLICO" },
    
  { id:13, 
    name: "Jogo de cama", 
    price: 100, 
    image: "img/cama.jpg", 
    description: "Um presente =.", 
    available: true, 
    tag: "SIMBÓLICO" },

  { id:14, 
    name: "Jogo de toalhas", 
    price: 100, 
    image: "img/toalha.jpg", 
    description: "Um presente =.", 
    available: true, 
    tag: "SIMBÓLICO" },

  { id:15, 
    name: "Manta para sofá", 
    price: 100, 
    image: "img/sofa.jpg", 
    description: "Um presente =.", 
    available: true, 
    tag: "SIMBÓLICO" },

  { id:16, 
    name: "Potes de vidro para cozinha", 
    price: 100, 
    image: "img/potesv.jpg", 
    description: "Um presente =.", 
    available: true, 
    tag: "SIMBÓLICO" },

  { id:17, 
    name: "Porta-Tempeiro", 
    price: 100, 
    image: "img/temperos.jpg", 
    description: "Um presente =.", 
    available: true, 
    tag: "SIMBÓLICO" },
    
  { id:18, 
    name: "Lixeira de cozinha", 
    price: 100, 
    image: "img/lixeira.jpg", 
    description: "Um presente =.", 
    available: true, 
    tag: "SIMBÓLICO" },

  { id:19, 
    name: "Abajur-Luminaria", 
    price: 100, 
    image: "img/abajur.jpg", 
    description: "Um presente =.", 
    available: true, 
    tag: "SIMBÓLICO" },

  { id:20, 
    name: "Espelho Grande", 
    price: 100, 
    image: "img/espelho.jpg", 
    description: "Um presente =.", 
    available: true, 
    tag: "SIMBÓLICO" },

  { id:21, 
    name: "Kit de ferramentas", 
    price: 100, 
    image: "img/ferramentas.jpg", 
    description: "Um presente =.", 
    available: true, 
    tag: "SIMBÓLICO" },
  { id:22, 
    name: "Tábua de corte", 
    price: 100, 
    image: "img/taboa.jpg", 
    description: "Um presente =.", 
    available: true, 
    tag: "SIMBÓLICO" },

  { id:23, 
    name: "Chaleira elétrica", 
    price: 100, 
    image: "img/chaleira.jpg", 
    description: "Um presente =.", 
    available: true, 
    tag: "SIMBÓLICO" },

  { id:24, 
    name: "Forma-Assadeira", 
    price: 100, 
    image: "img/formas.jpg", 
    description: "Um presente =.", 
    available: true, 
    tag: "SIMBÓLICO" },

  { id:25, 
    name: "Tigelas para cozinha", 
    price: 100, 
    image: "img/tijela.jpg", 
    description: "Um presente =.", 
    available: true, 
    tag: "SIMBÓLICO" },

  { id:26, 
    name: "Escorredor de louça", 
    price: 100, 
    image: "img/escorredor.jpg", 
    description: "Um presente =.", 
    available: true, 
    tag: "SIMBÓLICO" },

  { id:27, 
    name: "Organizador para cozinha", 
    price: 100, 
    image: "img/organizador.jpg", 
    description: "Um presente =.", 
    available: true, 
    tag: "SIMBÓLICO" },

  { id:28, 
    name: "MOP para limpeza", 
    price: 100, 
    image: "img/Mop.jpg", 
    description: "Um presente =.", 
    available: true, 
    tag: "SIMBÓLICO" },
    
  { id:29, 
    name: "Protetor de colchão", 
    price: 100, 
    image: "img/protetor.jpg", 
    description: "Um presente =.", 
    available: true, 
    tag: 'SIMBÓLICO' },

     { id:31, 
    name: "Cortina para janela", 
    price: 100, 
    image: "img/cortina.jpg", 
    description: "Um presente =.", 
    available: true, 
    tag: "SIMBÓLICO" },

  { id:32, 
    name: "Mimo em dinheiro para o casal", 
    price: 100, 
    image: "img/pix.jpg", 
    description: "Um presente =.", 
    available: true, 
    tag: "SIMBÓLICO" }
];

const grid = document.querySelector("#giftGrid");
const count = document.querySelector("#availableCount");
const modal = document.querySelector("#modal");
const form = document.querySelector("#giftForm");

let selectedGift = null;

const money = value => value.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });

function renderGifts() {
  grid.innerHTML = "";
  const available = gifts.filter(g => g.available).length;
  count.textContent = available;

  gifts.forEach(gift => {
    const card = document.createElement("article");
    card.className = `gift-card ${gift.available ? "" : "gifted"}`;
    card.innerHTML = `
      <div class="gift-image">
        <span class="gift-ribbon">${gift.tag}</span>
        <img class="gift-photo" src="${gift.image}" alt="${gift.name}">
      </div>
      <div class="gift-content">
        <h3>${gift.name}</h3>
        <p>${gift.description}</p>
        <div class="gift-bottom">
          <strong class="price">${money(gift.price)}</strong>
          <button class="gift-button" ${gift.available ? "" : "disabled"} data-id="${gift.id}">
            ${gift.available ? "PRESENTEAR" : "INDISPONÍVEL"}
          </button>
        </div>
      </div>
    `;
    grid.appendChild(card);
  });
}

function openModal(gift) {
  selectedGift = gift;
  document.querySelector("#modalTitle").textContent = "Presentear";
  document.querySelector("#modalGiftName").textContent = gift.name;
  document.querySelector("#modalGiftPrice").textContent = money(gift.price);
  document.querySelector("#modalIcon").textContent = gift.emoji;
  modal.classList.add("open");
  modal.setAttribute("aria-hidden", "false");
  document.body.classList.add("no-scroll");
  setTimeout(() => document.querySelector("#guestName").focus(), 100);
}

function closeModal() {
  modal.classList.remove("open");
  modal.setAttribute("aria-hidden", "true");
  document.body.classList.remove("no-scroll");
  form.reset();
  selectedGift = null;
}

grid.addEventListener("click", event => {
  const button = event.target.closest(".gift-button");
  if (!button || button.disabled) return;
  const gift = gifts.find(g => g.id === Number(button.dataset.id));
  if (gift) openModal(gift);
});

document.querySelectorAll("[data-close]").forEach(el => el.addEventListener("click", closeModal));
document.addEventListener("keydown", e => { if (e.key === "Escape" && modal.classList.contains("open")) closeModal(); });

form.addEventListener("submit", event => {
  event.preventDefault();
  if (!selectedGift) return;

  const name = document.querySelector("#guestName").value.trim();
  const phone = document.querySelector("#guestPhone").value.trim();
  const message = document.querySelector("#guestMessage").value.trim();

  const text =
`💍 *LISTA DE PRESENTES — YÊGO & KAYANE*

🎁 *Presente:* ${selectedGift.name}
💰 *Valor:* ${money(selectedGift.price)}

👤 *Nome:* ${name}
📱 *Telefone:* ${phone}
${message ? `💌 *Mensagem:* ${message}` : ""}

Quero presentear este item no casamento de Yêgo e Kayane. ❤️`;

  const url = `https://wa.me/${COUPLE_WHATSAPP}?text=${encodeURIComponent(text)}`;
  window.open(url, "_blank", "noopener,noreferrer");

  // Mantém a experiência simples: o casal recebe a confirmação pelo WhatsApp.
  // Para baixa automática do item após a confirmação, será necessário um backend.
  closeModal();
});

renderGifts();
