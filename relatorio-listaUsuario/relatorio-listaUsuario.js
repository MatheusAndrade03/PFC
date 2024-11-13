// constantes
const btnSair = document.querySelector(".btn-sair");
const btnImprimir = document.querySelector(".btn-imprimir");
const usuarioLogado = document.querySelector("#usuario-logado");
const pesquisar = document.querySelector("#pesquisarId");



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
    item.innerHTML = `<p>${colaborador.nome}</p> <p>${colaborador.email}</p> <p>${colaborador.ativo?"ativo":"inativo"}</p><button id="btn-editar"><img src="/imagens/edit.png" alt="edit"></button>`;
    const btnExcluir= document.createElement("button");
    btnExcluir.innerHTML = `X`;
    btnExcluir.setAttribute("id", "btn-excluir");
    btnExcluir.addEventListener("click", ()=>{
        excluirColaborador(colaborador);
        item.remove();
    });

    item.appendChild(btnExcluir);
    lista.appendChild(item);

}
// excluir colaborador
function excluirColaborador(colaborador) {
    let usuario = usuarioLogado.innerHTML;
    let cadastros= JSON.parse(localStorage.getItem(usuario)) || [];
    cadastros[0].colaboradores = cadastros[0].colaboradores.filter(item=> item.id !== colaborador.id);
    localStorage.setItem(usuario, JSON.stringify(cadastros));
    

}



// carregar a lista de colaboradores
function carregarLista() {
        let usuario = usuarioLogado.innerHTML;
    let cadastros= JSON.parse(localStorage.getItem(usuario)) || [];

    cadastros[0].colaboradores.forEach(item=> adicionarNaLista(item));





}

// pesquisar colaborador

pesquisar.addEventListener("keyup", ()=>{

    
    let usuario = usuarioLogado.innerHTML;
    let cadastros= JSON.parse(localStorage.getItem(usuario)) || [];
    let valor = pesquisar.value.toLowerCase(); 
    const lista = document.querySelector("#listaCadastros")
    lista.innerHTML = "";
    cadastros[0].colaboradores.forEach(item=>{
        if(item.nome.toLowerCase().includes(valor) || item.email.toLowerCase().includes(valor)){
            adicionarNaLista(item);
        }
    });

    
});