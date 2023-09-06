
let continuar;
do {
let nome = prompt("Qual o seu nome ?")
let idade = Number(prompt("Qual a sua idade ?"))
let altura = Number(prompt("Qual a sua altura ?"))
let peso = parseInt(prompt("Qual o seu peso ?"))
let profissao = prompt("Qual a sua profissão ?")
console.log("olá " + nome + ", você tem: " + idade + " anos, é " + profissao + ", tem " + altura + "M de altura"
+ " e pesa " + peso + "Kg.")
if (idade >= 18) {
    console.log("Está liberado para tomar umas geladas")
}else {
    console.log("Sem gelada para você")
}
let ano = 365;
let meses = 30;
let semanas = 7;
let calculo = idade * ano 
console.log(calculo + " dias ")
let calculo2 = idade * ano  / meses
console.log(calculo2.toFixed(1) + " meses ")
let calculo3 = idade * ano / semanas 
console.log(calculo3.toFixed(1) + " semanas ")
let IMC = peso / (altura * altura)
console.log("Seu IMC é: " + IMC.toFixed(1))
if (IMC < 18.5) {
    console.log("sua faixa do IMC é: Magreza")
}
if (IMC > 18.5 && IMC < 24.9) {
    console.log("Sua faixa do IMC é: Normal")
}
if  (IMC > 24.9 && IMC < 30) {
    console.log("Sua faixa do IMC é: Sobrepeso")
}
if (IMC > 30) {
    console.log("Sua faixa do IMC é: Obesidade")
}
let anoNascimento =  2023 - idade
let i = 0;
console.log("você nasceu em: " + anoNascimento)
    
    for (anoNascimento = 2000; anoNascimento <= 2023; anoNascimento++) {
         console.log(anoNascimento + " - " + i + " anos de idade " )
    i++
    }
   
    continuar = (prompt("você quer inserir os dados novamente ? 'sim' ou parar 'não'"))
} while (continuar === 'sim')
console.log("Você escolheu finalizar o programa")