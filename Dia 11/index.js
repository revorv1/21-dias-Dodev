let arrayNomes = []
let arrayNotas = []

let nomeInserido
let notaInserida
let continuar = true
let i = 0;
let somaNotas = 0;
while (continuar === true){
    
    let nomeInserido = prompt("Insira o nome do aluno ( 'não' para parar):")
    if(nomeInserido === 'não'){
      continuar = false;
    }else {
       let notaInserida = parseInt(prompt("Insira a nota do aluno:"))
       arrayNomes[i] = nomeInserido
       arrayNotas[i] = notaInserida
       somaNotas += notaInserida;
       i++
    }
   
    
    }for(let j = 0; j < i; j++){
      console.log("Nome: " + arrayNomes[j] + " nota: " + arrayNotas[j]);
    }
    console.log("Soma das notas: " + somaNotas);
    if(i > 0) {
      let mediaGeral = somaNotas / i;
      console.log("Média geral: " + mediaGeral)
    }else {
      console.log("Nenhum aluno inserido, não é possível calcular a média")
    }
  
    
    
