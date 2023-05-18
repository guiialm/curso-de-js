var hora = 5
console.log(`Agora são exatamente ${hora} horas`)
if (hora <= 12 && hora >= 6) {
    console.log('Bom dia')
} else if (hora <= 18 && hora > 12) {
    console.log('Boa Tarde')    
} else if (hora >= 1 && hora <= 5) {
    console.log('Boa Madrugada')
}else   {
    console.log('Boa noite')
}
