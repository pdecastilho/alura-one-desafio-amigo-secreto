//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.

const amigos = [];
const inputName = document.querySelector(".main-section__input-name");
const listaDeNomes = document.querySelector(".list-section__name-list");
const resultado = document.querySelector(".list-section__result-list");

function adicionarAmigo() {
    let nome = inputName.value;
    if (nome != "") {
        amigos.push(nome);
        inputName.value = "";
        atualizaListaAmigos();
    } else {
        alert("Por favor, insira um nome.");
    }
}

function atualizaListaAmigos() {
    listaDeNomes.innerHTML = "";
    let itens = "";
    for (let i = 0; i < amigos.length; i++) {
        let item = `<li>${amigos[i]}</li>`;
        itens += item;
    }
    listaDeNomes.innerHTML = itens;
}

function sortearAmigo() {
    if (amigos.length != 0) {
        let listaTitulo = document.querySelector(".list-section__chosen-title");
        listaTitulo.style.display = "block";
        let numeroAleatorio = Math.floor(Math.random() * amigos.length);
        resultado.innerHTML = `<li>${amigos[numeroAleatorio]}</li>`;
    } else {
        alert("Primeiro, insira os nomes na lista de amigos.");
    }
}

/*
Funcionalidades:
- Adicionar nomes ao array
- Validar entrada (campo não pode ser vazio)
- Visualizar a lista
- Sortear um nome aleatoriamente na lista
*/