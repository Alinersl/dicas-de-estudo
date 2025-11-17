const dicas = [
      "Crie um ambiente propício para os estudos",
      "Faça um plano de estudos",
      "Escreva resumos dos conteúdos estudados",
      "Pesquise por provas antigas e simulados na internet",
      "Evite as distrações",
      "Estabeleça horários fixos",
      "Crie um cronograma de estudos",
      "Use cores nos resumos pra destacar o que é importante.",
      "Assista vídeos curtos sobre o tema antes de ler o texto.",
      "Faça pausas curtas entre os estudos pra manter o foco."
    ];

const dica = document.querySelector('#dica');
const btn = document.querySelector('#btn');

function gerarDica(){
    const randomizar = Math.floor(Math.random() * dicas.length);
    dica.innerText = dicas[randomizar];
}
btn.addEventListener('click', gerarDica);

