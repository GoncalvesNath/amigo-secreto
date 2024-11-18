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
    //8 declarando variável para manipular lista posteriormente
    let sorteio = document.getElementById('lista-sorteio')
    //7 após embaralhar, o loop percorre todos os elementos (nomes) e seleciona ele mais um, fazendo com que o ultimo nome sorteie o primeiro e assim sucessivamente
    for (let i = 0; i < amigos.length; i++) {
        if (i == amigos.length - 1) {
            sorteio.innerHTML = sorteio.innerHTML + amigos[i] + ' --> ' + amigos[0] + '<br>';
        } else {
            sorteio.innerHTML = sorteio.innerHTML + amigos[i] + ' --> ' + amigos[i + 1] + '<br>';
            }
    }
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

function reiniciar() {
    amigos = [];
    document.getElementById('lista-amigos').innerHTML = '';
    document.getElementById('lista-sorteio').innerHTML = '';
}