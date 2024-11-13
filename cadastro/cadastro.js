//constantes
const usuarioLogado = document.querySelector("#usuario-logado");
const btnSair = document.querySelector(".btn-sair");
const btnSalvar = document.querySelector('.btn-salvar');
const pesquisar= document.querySelector("#pesquisarId");
// campos do formulário
const radioAtivo = document.querySelector('#ativo');
const formNome = document.querySelector('#nome');
const formIdade = document.querySelector('#idade');
const formEmail = document.querySelector('#email');
const formEndereco = document.querySelector('#endereco');
const formOutrasInfo = document.querySelector('#outras-informacoes');
const formInteresses = document.querySelector('#interesses-area');
const formSentimentos = document.querySelector('#sentimentos-area');
const formValores = document.querySelector('#valores-area');





btnSalvar.addEventListener("click", (event) => {
    debugger;
    cadastrarColaborador(event);

})

// carrega ao iniciar a tela
function onLoad() {
    carregarUsuarioLogado();
    carregarLista()
}

// carregar o usuario logado
function carregarUsuarioLogado() {
    const usuario = JSON.parse(localStorage.getItem("usuarioLogado"));
    usuarioLogado.innerHTML = usuario;
}


// sair do sistema
btnSair.addEventListener("click", function () {
    window.location.href = "../login/login.html";
});

// Função para abrir a tela de cadastro
function abrirCadastro() {
    const telaLista = document.querySelector(".lista-wrapper");
    const telaCadastro = document.querySelector(".cadastro-wrapper");
    telaLista.style.display = "none";
    telaCadastro.style.display = "block";

}

// ..............................................................................
// função para cadastrar um novo colaborador

function cadastrarColaborador(event) {
    let nome = formNome.value;
    let idade = formIdade.value;
    let email = formEmail.value;
    let endereco = formEndereco.value;
    let outrasInfo = formOutrasInfo.value;
    let interesses = formInteresses.value;
    let sentimentos = formSentimentos.value;
    let valores = formValores.value;
    let ativo = radioAtivo.checked ? true : false;
    let id = gerarId();
    let usuarioLogad = usuarioLogado.innerHTML;


    // Verifica se ha campos obrigatórios vazios
    if (nome == "" || endereco == "" || idade == "" || email == "") {
        alert("Preencha todos os campos obrigatórios, Nome, Idade, Email e Endereço");
        formNome.focus();
        formNome.style.border = "1px solid red";
        formIdade.style.border = "1px solid red";
        formEmail.style.border = "1px solid red";
        formEndereco.style.border = "1px solid red";
        event.preventDefault();
        return;
    }

    const colaborador = { nome, idade, email, endereco, outrasInfo, interesses, sentimentos, valores, ativo, id };


    let usuarios = JSON.parse(localStorage.getItem(usuarioLogad)) || [];
    usuarios[0].colaboradores.push(colaborador);
    localStorage.setItem(usuarioLogad, JSON.stringify(usuarios));
    alert("Colaborador cadastrado com sucesso!");

    adicionarNaLista(colaborador);



}

// gera um id aleatório para o colaborador

function gerarId() {
    return '_' + Math.random().toString(36).substr(2, 9);
}

// adicionar Colaborador na lista

function adicionarNaLista(colaborador) {
    const lista = document.querySelector("#listaCadastros");
    const item = document.createElement('li');
    item.innerHTML = `<p>${colaborador.nome}</p> <p>${colaborador.email}</p> <p>${colaborador.ativo?"ativo":"inativo"}</p><button id="btn-editar"><img src="/imagens/edit.png" alt="edit"></button><button id="btn-excluir">X</button>`;
    lista.appendChild(item);

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