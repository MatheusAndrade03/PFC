const usuarioLogado = document.querySelector("#usuario-logado");



// carrega ao iniciar a tela
function onLoad(){
    carregarUsuarioLogado();
    carregarLista();
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
        
    cadastros[0].colaboradores.reverse().forEach(item=> adicionarNaLista(item));





}