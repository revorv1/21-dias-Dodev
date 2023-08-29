//CRIANDO VARIÁVEIS
let fome = false
let dinheiro = false 
let restauranteAberto = false

//PEDINDO AO USUÁRIO
let opcaoFome = prompt( "Você está com fome? (s/n)")
if (opcaoFome == "s") {
     fome = true 
}
let opcaoDinheiro = prompt("Você tem dinheiro? (s/n)")
if (opcaoDinheiro == "s") {
dinheiro = true
}
let opcaoRestaurante = prompt("O restaurante está aberto? (s/n)") 
if (opcaoRestaurante == "s") {
restauranteAberto = true 

//RESPOSTA NO CONSOLE 
}if (!fome || !dinheiro){
 console.log("Hoje a janta será em casa!")
       
}else if (fome && dinheiro != restauranteAberto) {
console.log("Peça um delivery!")
}else {
console.log("Hoje o jantar será no seu restaurante preferido !")
}
//DESAFIO MOTORISTA
//CRIANDO VARIÁVEIS
let nome = prompt("Qual seu nome ?")
let idade = Number(prompt("Qual sua idade ?"))
let carteiraMotorista = false
let carro = false

//Código 
if (idade >= 18) {
idade = true 
}let opcaoCarta = prompt("Você possui carteira de habilitação ? (s/n)")
if (opcaoCarta == "s") {
carteiraMotorista = true
}let opcaoCarro = prompt("Você possui um carro ? (s/n)") 
if (opcaoCarro == "s") {
carro = true
 }if (!idade || !carteiraMotorista) {
console.log(nome + ", você não pode dirigir")
 }else if (idade && carteiraMotorista != carro) {
console.log(nome + ", você pode dirigir mas não tem carro")
 }else {
console.log(nome + ", você será o motorista!")
 }
           
        
        
    
       

         
         

    
         

    
        
    
        
       
    





