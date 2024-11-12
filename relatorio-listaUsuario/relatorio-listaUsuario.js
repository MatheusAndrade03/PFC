
const btnSair = document.querySelector(".btn-sair");
const btnImprimir = document.querySelector(".btn-imprimir");





// Função para sair da página e voltar a tela de login
btnSair.addEventListener("click", function(){
    window.location.href = "../login/login.html";
});
// Função para imprimir a página atual
btnImprimir.addEventListener("click", function(){
    window.print();
});