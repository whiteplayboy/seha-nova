const numeroSenha = document.querySelector(".paremetro-senha-texto");
let tamanhoSenha=12;
numeroSenha.textContent=tamanhoSenha;
const botoes = document.querySelector(".parametro-senha-botoes");
botoes[0].onclick = diminuirTamanho;