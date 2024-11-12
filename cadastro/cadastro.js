//onstantes
const usuarioLogado = document.querySelector("#usuario-logado");
const btnSair = document.querySelector(".btn-sair");
const btnSalvar = document.querySelector('.btn-salvar');


btnSalvar.addEventListener("click", ()=>{

    
})

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

// função para cadastrar um novo colaborador

function cadastrarColaborador() {

    
}