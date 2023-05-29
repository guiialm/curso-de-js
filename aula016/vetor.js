let valores = [8, 1, 2,5, 7 , 6]
valores.sort()
/*
for (let pos = 0; pos < valores.length; pos++) {
    console.log(` A posicao ${pos} tem valor ${valores[pos]} `)
    
}*/

for (let pos in valores){
    console.log(` A posicao ${pos} tem valor ${valores[pos]} `)
}

