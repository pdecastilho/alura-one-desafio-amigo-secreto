//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.

const amigos = [];
const inputName = document.querySelector(".input-name");

function adicionarAmigo() {
    let nome = inputName.value;
    if (nome != "") {
        amigos.push(nome);
        inputName.value = "";
    } else {
        alert("Por favor, insira um nome.");
    }
}

/*
Funcionalidades:
- Adicionar nomes ao array
- Validar entrada (campo não pode ser vazio)
- Visualizar a lista
- Sortear um nome aleatoriamente na lista
*/