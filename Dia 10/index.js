let continuar = true
let numeros = [1 , 2, 3, 4, 5, 6, 7, 8, 9, 10];
let posicaoArray = 0;

while(continuar === true) {
    let numeroInserido = prompt("Insira um número inteiro e positivo")
    numeros[posicaoArray] = numeroInserido
    let desejaContinuar = prompt("Digite '1' para inserir outro número")
    if (desejaContinuar != 1) {
        continuar = false
    }
     posicaoArray++
}



 