const usuarioLogado = document.querySelector("#usuario-logado");



// carrega ao iniciar a tela
function onLoad(){
    carregarUsuarioLogado();
}




// carregar o usuario logado
function carregarUsuarioLogado(){
    const usuario = JSON.parse(localStorage.getItem("usuarioLogado"));
    usuarioLogado.innerHTML = usuario;
}



// sair do sistema
const btnSair = document.querySelector(".btn-sair");


btnSair.addEventListener("click", function(){
    window.location.href = "../login/login.html";
});