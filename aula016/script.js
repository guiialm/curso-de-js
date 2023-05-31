function parimp() {
    var n = document.getElementById('txtn')
    var res = document.getElementById('res')

    if (n%2 == 0) {
        res.innerHTML = ` O numero ${n} é par `
    } else {
        res.innerHTML = ` O numer ${n} é impar `
        
    }


}