let soma = Number(prompt("insira um número inteiro e positivo"))

for(let contador = 0; contador < 50; contador += 5){
    console.log(contador + " + " + 5 + " = " + (contador + 5))
}
let soma2 = Number(prompt("insira um número inteiro e positivo"))
for(let contador2 = 50; contador2 > 0; contador2 -= 5){
    console.log(contador2 + " - " + 5 + " = " + (contador2 - 5));
}
    let numero  = parseInt(prompt("Insira um número inteiro e positivo"))
     
    for(let i = numero; i <= numero + 2; i++){
        console.log("Tabuada do número: " + i)
        for(let j = 0; j <= 10; j++){
            console.log(i + " x " + j + " = " + (j * i))
        }
    }
    




