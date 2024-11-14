function adicionar() {
    //recuperar dados que serão manipulados
    let amigo = document.getElementById('nome-amigo');
    let lista = document.getElementById('lista-amigos');
    // inserir nome do amigo na lista com condicional para que o primeiro nome não seja substiuído pelos seguintes
    if (lista.textContent == '') {
        lista.textContent = amigo.value;
    } else {
        lista.textContent = lista.textContent + ', ' + amigo.value;
    }
    //limpar campo de input para inserir o próximo nome
    amigo.value = '';
}