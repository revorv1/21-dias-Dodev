console.log("Estou no dia 3 !!!!!")
let nome = prompt("Digite seu nome")
let idade = parseInt(prompt("Digite sua idade"))
let altura = parseFloat(prompt("Digite sua altura"))
let peso = parseInt(prompt("Digite seu peso"))
let IMC = 0
IMC = peso / (altura * altura)
let anoAtual = 2023
anoNascimento = (anoAtual - idade);



console.log("Olá " + nome + ", você tem " + idade + " anos, " +"nasceu em " + 
anoNascimento + ", tem " + altura + " de altura, " + " pesa " + peso + 
"kg" + ", seu IMC é " + IMC + " kg/m²");



