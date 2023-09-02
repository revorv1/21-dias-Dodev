// Desafio 2
let nome = prompt("Qual seu nome ?")
let cpf = prompt("Qual seu cpf ?")
let opcao;
let maiorDeposito = 0;
let somaValoresInseridos = 0;
let quantidadeValoresInseridos = 0; 
let saldoTotal = 10000;
do {
    opcao = prompt("Você quer fazer saque ou depósito ? 1 - saque , 2 - depósito , 3 - parar; ");
    
    switch (opcao){
         case "1" :
             let valorSaque = parseInt(prompt("Qual o valor desejado ?"))
            if (valorSaque <= saldoTotal && valorSaque <= 5000) {
                saldoTotal -= valorSaque;
                console.log("Saque realizado com sucesso .Saldo restante: " + saldoTotal);
                   somaValoresInseridos += valorSaque;
                   quantidadeValoresInseridos++;
            }else {
                console.log("Valor de saque inválido ou excede o limite de 5000 reais.");
            }
            break;
            
        case "2" :
            let valorDeposito = parseInt(prompt("Qual o valor desejado ?"))
            if (valorDeposito > maiorDeposito) {
                maiorDeposito = valorDeposito;
            }
             saldoTotal += valorDeposito;
            console.log("Depósito realizado com sucesso. Saldo atual: " + saldoTotal);
                somaValoresInseridos += valorDeposito;
                quantidadeValoresInseridos++;
            break;

        case "3" :
            console.log("Operação encerrada.");
            break;
        default :
        console.log("opção inválida.")

 
    } 
       
}while (opcao !== "3");
    if (quantidadeValoresInseridos > 0) {
        let mediaValoresInseridos = somaValoresInseridos / quantidadeValoresInseridos;
        console.log("A média dos valores inseridos é: " + mediaValoresInseridos.toFixed(2));
    }else {
        console.log("Nenhum valor foi inserido.");
    }
     console.log("O maior valor depositado foi: " + maiorDeposito);