//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.

const amigos = [];
const inputName = document.querySelector(".input-name");
const listaDeNomes = document.querySelector(".name-list");

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

/*
Funcionalidades:
- Adicionar nomes ao array
- Validar entrada (campo não pode ser vazio)
- Visualizar a lista
- Sortear um nome aleatoriamente na lista
*/