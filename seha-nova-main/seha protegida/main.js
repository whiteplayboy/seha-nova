 const numeroSenha = document.querySelector(".parametro-senha-texto");
  let tamanhoSenha=12;
  numeroSenha.textContent=tamanhoSenha;
    const botoes = document.querySelectorAll(".parametro-senha-botao");
      botoes[0].onclick = diminuirTamanho;
      botoes[0].onclick=aumentarTamanho;
        function diminuirTamanho(){ 
            if(tamanhoSenha>6){ 
          botoes[0].onclick= diminuirTamanho;
           tamanhoSenha=tamanhoSenha-1
             numeroSenha.textContent=tamanhoSenha;
}
}