function verificar() {
    var ini = document.getElementById('inicio')
    var fim = document.getElementById('fim')
    var passo = document.getElementById('passo')
    var res = document.getElementById('res')
    
    if (ini.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) {
                        /* se o inicio, tiver valor 0, tamanho 0*/
                        /*window.alert('[ERROR]')*/
        res.innerHTML =('impossivel contar')
        

    } else {
        res.innerHTML = 'Contando: <br>'
        var i = Number(inicio.value)
        var f = Number(fim.value)
        var p = Number(passo.value)

        if ( p<=0){
            p=1
        }

        if (i < f) {
            for (var c= i; c<=f; c+=p)
            res.innerHTML += `${c} \u{1F449} `
        } else {
            for (var c = i; c>= f; c-=p)
            res.innerHTML += `${c} \u{1F449} `
        }


        
    }
    

        
}