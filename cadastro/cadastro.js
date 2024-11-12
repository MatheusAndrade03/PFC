
const btnSair = document.querySelector(".btn-sair");


btnSair.addEventListener("click", function(){
    window.location.href = "../login/login.html";
});
// Função para abrir a tela de cadastro
 function abrirCadastro(){
      const  telaLista = document.querySelector(".lista-wrapper");
      const  telaCadastro= document.querySelector(".cadastro-wrapper");
      telaLista.style.display = "none";
      telaCadastro.style.display = "block";

}