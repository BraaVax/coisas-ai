// Mensagens de cada bilhete
const mensagens = {
  triste: [
    "Sempre termos aquele momento ruim ne? mais quero que saiba que independente de tudo eu sempre vou estar aqui, e você podera contar comigo pra tudo, eu estou disposto a ser seu porto seguro quando precisar!. 💙", 
    "Quando você se sentir sozinha, lembre-se que eu estou aqui, sempre. A tristeza pode vir, mas o meu amor por você vai sempre ser maior. Você não está sozinha, estamos nisso juntos. 💙",
    "Eu sei que hoje tá difícil, mas eu sei que você vai dar a volta por cima. A tristeza vai passar e logo o sorriso vai voltar pro seu rosto (e eu amo ele).",
    "Saiba que se você precisar de um abraço ou um beijo(talvez os dois), estou a uma sala de distancia."
  ],
  feliz: [
    "Eu me sinto tão sortudo por poder ver o seu sorriso todos os dias, a sua felicidade é algo que ilumina minha vida, e saber que posso ser o motivo desse sorriso... me deixa maravilhado",
    "Não tem como não ficar sorrindo quando vejo você feliz você é muito especial pra mim, linda como o sol de cada manha, cada dia ao seu lado é uma nova aventura e eu amo tudo!",
    "Eu acho incrivel que a mulher mais linda desse mundo e minha namorada! te amo.",
    "O que mais me encanta em você, além de tudo que você é, é o seu sorriso, ele tem um poder tão grande de iluminar o meu dia, de tornar tudo mais leve e bonito."
  ],
  comRaiva: [
    "Eu sei que você está irritada agora, mas respira fundo essa raiva vai passar, e logo tudo vai se acalmar não deixe que isso tire a sua paz, você é muito maior do que qualquer raiva.",
    "Eu sei que o momento é difícil e você ta com raiva, mas lembre-se de que isso não define quem você é você é muito forte e vai superar isso eu estou aqui, te amo.",
    "A raiva só te consome. Liberte-se dela.",
    "Eu sei que você está chateada agora, mas tenta não deixar que isso te consuma, eu estou aqui para o que você precisar, e se deixar eu posso te ajudar com isso e tudo que precisar."
  ],
  especial: [
    "Amor, cada linha desse site foi pensada com carinho só pra você 💚", 
    "Você é a razão do meu sorriso todos os dias! 💚", 
    "Cada momento com você é único, e eu guardo cada um em minha memoria!",
    "Verde é sua cor... e agora é também a cor do meu carinho por você 💚",
    "Que tal quando aparecer essa mensagem você vir me abraçar por tras do nada?amo isso",
    "Você sabe que esses detalhes em verdes no site não e atoa ne? ᵐᵉ ᵇᵉᶦʲᵃ ᵖᵒʳ ᶠᵃᵛᵒʳ :)"
  ],
  valePresentes: [
    "Aqui está um vale para uma deliciosa coxinha! 🍗",
    "Você ganhou um vale para uma empada quentinha! 🥟",
    "Este vale é para um doce de maracujá, só pra você! 🍰",
    "Eu te dou um vale para um doce de chocolate! 🍫",
    "Um vale-presente para o melhor brigadeiro do mundo! 🍬",
    "Vale para um suco e um salgado antes das aula começar! 🍕"
  ]
};

// Função para exibir as mensagens nos bilhetes
function mostrarMensagem(tipo) {
  const modal = document.getElementById("modal");
  let mensagem = mensagens[tipo];
  const randomIndex = Math.floor(Math.random() * mensagem.length);
  const mensagemEscolhida = mensagem[randomIndex];

  // Remover a mensagem escolhida para evitar repetições
  mensagens[tipo] = mensagens[tipo].filter(m => m !== mensagemEscolhida);

  document.getElementById("mensagem").textContent = mensagemEscolhida;
  modal.style.display = "block";

  // Se não houver mais mensagens, recarrega as mensagens para o tipo
  if (mensagens[tipo].length === 0) {
    mensagens[tipo] = [...mensagensOriginal[tipo]]; // Restabelece as mensagens iniciais
    mostrarStatus(`As mensagens para o tipo "${tipo}" foram reiniciadas!`);
  }
}

// Função para exibir as mensagens de Vale-presentes
function mostrarValePresentes() {
  const modal = document.getElementById("modal");
  let mensagem = mensagens.valePresentes;
  const randomIndex = Math.floor(Math.random() * mensagem.length);
  const mensagemEscolhida = mensagem[randomIndex];

  // Remover a mensagem escolhida para evitar repetições
  mensagens.valePresentes = mensagens.valePresentes.filter(m => m !== mensagemEscolhida);

  document.getElementById("mensagem").textContent = mensagemEscolhida;
  modal.style.display = "block";

  // Se não houver mais mensagens, recarrega as mensagens para o vale-presentes
  if (mensagens.valePresentes.length === 0) {
    mensagens.valePresentes = [...mensagensOriginal.valePresentes]; // Restabelece as mensagens originais
    mostrarStatus("As opções de Vale-presentes foram reiniciadas!");
  }
}

// Função para mostrar o status na tela
function mostrarStatus(mensagem) {
  const statusMensagem = document.getElementById("status");
  statusMensagem.textContent = mensagem;
  statusMensagem.style.display = "block";

  setTimeout(() => {
    statusMensagem.style.display = "none";
  }, 3000);
}

// Função para fechar o modal
function fecharModal() {
  document.getElementById("modal").style.display = "none";
}

// Função para resetar os bilhetes
function resetarMensagens() {
  mostrarStatus("Todos os bilhetes foram reiniciados!");

  // Restabelece todas as mensagens originais
  mensagens.triste = [...mensagensOriginal.triste];
  mensagens.feliz = [...mensagensOriginal.feliz];
  mensagens.comRaiva = [...mensagensOriginal.comRaiva];
  mensagens.especial = [...mensagensOriginal.especial];
  mensagens.valePresentes = [...mensagensOriginal.valePresentes];
}

// Armazenar as mensagens originais para quando precisar reiniciar
const mensagensOriginal = JSON.parse(JSON.stringify(mensagens));
