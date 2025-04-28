// Mensagens de cada bilhete
const mensagens = {
  triste: [
    "Você é a pessoa que eu mais quero ver feliz. Mesmo quando eu não puder fazer isso com um beijo ou abraço, eu espero que minhas palavras aqueçam um pedacinho do seu coração. 💙", 
    "Se eu não puder segurar sua mão nesse momento, saiba que meu coração tá segurando. Respira fundo, meu bem. Você é mais forte do que essa tristeza. 💙",
    "Se eu não estiver aí agora, fecha os olhos e sente: eu tô te mandando um abraço bem apertado, desses que aquecem o peito. Você nunca tá sozinha, mesmo de longe eu tô contigo.",
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
    "Se o mundo parecer pesado hoje, se as pessoas não te entenderem, lembra: eu entendo. Eu tô do seu lado, na calma e na tempestade. Sempre.",
    "Se a raiva tentar te fazer esquecer de quem você é, lembra que pra mim você é luz. Até nos momentos mais difíceis, você continua sendo meu amor mais lindo."
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
  ],
  Amor: [
    "Oi meu amor, fiz isso pra tentar me expressar o máximo que eu consigo, já que eu não sou muito bom nisso, já riram de mim várias vezes quando tentei, mas eu queria te dizer que mesmo a gente se conhecendo só há 214 dias (tô escrevendo isso dia 27/04), eu arrisco dizer que você é uma das mulheres mais especiais da minha vida, a que eu mais amo, e eu sei que infelizmente você não me ama, e confesso que isso dói demais em mim, é muito doído ficar pensando que a mulher que eu imagino um futuro junto não sente o mesmo, porque sério, eu tô disposto a enfrentar qualquer coisa que dificultasse a gente ficar junto sabe, mas quando penso que você não me ama eu fico pensando que você talvez não faria o mesmo, até já pensei que talvez você me ame e só não fale por medo de não dar certo por causa dos seus pais, mas já descartei essa ideia, mas enfim, cara a cara vou te falar mais, te amo",
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
