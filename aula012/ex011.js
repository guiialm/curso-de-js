/*var idade = 17
if (idade < 16) {
    console.log(`Não vota `)
} else{
    if ( idade < 18) {
        console.log(`Voto Opcional`)
    } else {
        console.log('Vota')
    }
}*/

// outro modo 

var idade = 68
if (idade < 16) {
    console.log('Não vota')
} else if (idade < 18 || idade > 67) {
    console.log('Voto opcional')
} else {
    console.log('Voto obrigatorio')
}