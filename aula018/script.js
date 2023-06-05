var num = document.querySelector('input#fnum')
var lista = document.querySelector('select#flista')
var res = document.querySelector('div#res')
var valores = [] 

function isNumero(n) {
    if (Number(n) >= 1 && Number(n) <= 100) {
        return true
    } else {
        return false
    }
}

function inLista(n, lista){
    if (lista.indexOf(Number(n)) != -1 ){
        return true
    } else {
        return false
    }
}

function adicionar() {
    if (isNumero(num.value) && inLista(num.value, valores)) {
        window.alert (' tudo numa boa')
    } else {
        window.alert ('Valor invalido ou ja encontrado na lista')
    }
}