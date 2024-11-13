// constantes
const btnSair = document.querySelector(".btn-sair");
const btnImprimir = document.querySelector(".btn-imprimir");
const usuarioLogado = document.querySelector("#usuario-logado");



// carrega ao iniciar a tela
function onLoad(){
    carregarUsuarioLogado();
    carregarLista()
}




// carregar o usuario logado
function carregarUsuarioLogado(){
    const usuario = JSON.parse(localStorage.getItem("usuarioLogado"));
    usuarioLogado.innerHTML = usuario;
}





// Função para sair da página e voltar a tela de login
btnSair.addEventListener("click", function(){
    window.location.href = "../login/login.html";
});
// Função para imprimir a página atual
btnImprimir.addEventListener("click", function(){
    window.print();
});



// adicionar Colaborador na lista

function adicionarNaLista(colaborador) {
    const lista = document.querySelector("#listaCadastros");
    const item = document.createElement('li');
    item.innerHTML = `<p>${colaborador.nome}</p> <p>${colaborador.email}</p> <p>${colaborador.ativo?"ativo":"inativo"}</p>`;
    lista.appendChild(item);

}

// carregar a lista de colaboradores
function carregarLista() {
        let usuario = usuarioLogado.innerHTML;
    let cadastros= JSON.parse(localStorage.getItem(usuario)) || [];

    cadastros[0].colaboradores.forEach(item=> adicionarNaLista(item));





}