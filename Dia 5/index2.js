let opcoes = prompt("Você quer abastecer com gasolina , alcool ou você quer calibrar os pneus ?")
let valor 
let gasolina 
let alcool 
let quantidade 

switch (opcoes) {
    case "gasolina" :
        valor = parseInt(prompt("Qual o valor ?"))
        quantidade = valor / 5
        console.log(" Foram abastecidos " + quantidade + "L de gasolina ")
    break;
    case "alcool" :
        valor = parseInt(prompt("Qual o valor ?"))
        quantidade = valor / 3
        console.log(" Foram abastecidos " + quantidade + "L de álcool")
    break;
    default :
        console.log("pneus calibrados com sucesso")
    break;
}
