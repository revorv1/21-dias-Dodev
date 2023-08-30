let matematica = prompt("Escolha a operação Matemática:(+,-,x,/,%)")
let num1 = parseInt(prompt("Digite o primeiro número"))
let num2 = parseInt(prompt("Digite o segundo número"))  
switch(matematica) {
    case "+" :
        console.log(num1 + " + " + num2 + " = " + (num1 + num2))
    break;

    case "-" :
        console.log(num1 + " - " + num2 + " = " + (num1 - num2))
    break;
    case "x" :
        console.log(num1 + " x " + num2 + " = " + (num1 * num2))
    break;
    case "/" :
        console.log(num1 + " / " + num2 + " = " + (num1 / num2))
    break;
    case "%" :
        console.log(num1 + " % " + num2 + " = " + (num1 % num2))
    break;
    default :
        console.log("opção inválida")
    break;                    


}