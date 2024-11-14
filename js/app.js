//4 criação de aray para manter o nome dos amigos
let amigos = []

function adicionar() {
    //1 recuperar dados que serão manipulados
    let amigo = document.getElementById('nome-amigo');
    let lista = document.getElementById('lista-amigos');
    //5 adiciona os itens do input "amigo" no array "amigos" para que possa ser usado dinamicamente entre as funções
    amigos.push(amigo.value);
    // 2 inserir nome do amigo na lista com condicional para que o primeiro nome não seja substiuído pelos seguintes
    if (lista.textContent == '') {
        lista.textContent = amigo.value;
    } else {
        lista.textContent = lista.textContent + ', ' + amigo.value;
    }
    //3 limpar campo de input para inserir o próximo nome
    amigo.value = '';
}

function sortear() {
    embaralha(amigos);
}

//6 função para embaralhar arrays retirada de artigo
function embaralha(lista) {

    for (let indice = lista.length; indice; indice--) {

        const indiceAleatorio = Math.floor(Math.random() * indice);

        // atribuição via destructuring
        [lista[indice - 1], lista[indiceAleatorio]] = 
            [lista[indiceAleatorio], lista[indice - 1]];
    }
}