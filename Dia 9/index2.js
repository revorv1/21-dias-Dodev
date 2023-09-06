let nome;
let idade;
let salario;
let continuar;
do {
nome = prompt("Qual o seu nome ?")
idade = prompt("Qual a sua idade ?")
salario = Number(prompt("Qual o seu salário atual ?"))
continuar = prompt("Você quer inserir os dados novamente ? 'Sim' ou 'Não'")
}while (continuar === 'Sim' ) {
    
}
let anoInicial = 2023;
let  anoFim = 2033;
let aumento = 1.5 / 100
let i
for (i = anoInicial ; i <= anoFim; i++){
    salario = salario + (salario * aumento)
    console.log("R$" + salario.toFixed(2) + " - " + i)
    aumento = 2 * aumento
}

