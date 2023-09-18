let arrayModelo = []
let arrayAno = []
let arrayValores = []
let continuar = true;
let i = 0;
while(continuar) {
    let cadastroModelo = prompt("Qual o modelo do carro ? 'sim' para inserir novamente ou 'não' para parar ")
    if(cadastroModelo === 'não') {
        continuar = false;
}else {  
    let cadastroAno = prompt("Insira o ano do carro: ")
    let cadastroValor = prompt("Insira o valor do carro: ")
    arrayAno[i] = cadastroAno
    arrayModelo[i] = cadastroModelo
    arrayValores[i] = cadastroValor
    i++
} 
}
for (let j = 0; j < i; j++) {
    console.log("Carro: " + arrayModelo[j] + " Ano: " + arrayAno[j] + " Valor: " + arrayValores[j])
       
    }for (let j = 0; j < i; j++) {
        for (let m = 0; m < i; m++) {
            if (arrayValores[m] < arrayValores[m + 1]) {
                let temp = arrayValores[m]
                arrayValores[m] = arrayValores[m + 1]
                arrayValores[m + 1] = temp
                temp = arrayModelo[m]
                arrayModelo[m] = arrayModelo[m + 1]
                arrayModelo[m + 1] = temp
                temp = arrayAno[m]
                arrayAno[m] = arrayAno[m + 1]
                arrayAno[m + 1] = temp
            }
        }
    }
       console.log("Carros: " + arrayModelo + " Ano: " + arrayAno + " carro do mais caro ao mais barato: " + arrayValores)

     

   
    
     
    

     
 
    

