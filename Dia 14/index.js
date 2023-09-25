let continuar = true
while (continuar) {
    informacoes();
    continuar = pergunta();
}
console.log("Encerrando o programa!")

function informacoes() {
    let nome = prompt("Insira o seu nome:")
    let salario = parseInt(prompt("Insira o seu salário:"))
    aumentoSalario(nome, salario)
}

function aumentoSalario(nome, salario) {
    let aumento = 1.0
    if (salario <= 1500) {
        aumento = 1.20
    } else if ( salario <= 2000) {
        aumento = 1.15
    } else if ( salario <= 3000) {
        aumento = 1.10
    } else if (salario > 3000) {
        aumento = 1.05
    }
console.log(nome + " seu sálario é: " + salario + ", com o aumento de: " + aumento + ", salário reajustado: " + (salario * aumento).toFixed(2))
}

function pergunta() {
    let desejaContinuar = prompt("deseja calcular novamente ? digite '1'")
    return desejaContinuar === '1'
}


