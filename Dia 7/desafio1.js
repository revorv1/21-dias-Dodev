let somaNotas = 0
let quantidadeHomens = 0
let quantidadeMulheresNotaAcima7 = 0
let maiorNotaHomens = 0

let i = 0
while (i < 10) {
    let nota = Number(prompt("Digite a nota do aluno"))
    let sexo = prompt("Qual o sexo do aluno(m para masculino , f para feminino): ")
    somaNotas += nota
    i++
    if (sexo == "m") {
        quantidadeHomens++
        if (nota > maiorNotaHomens) {
            maiorNotaHomens = nota
        }
    }else if (sexo == "f" && nota > 7) {
        quantidadeMulheresNotaAcima7++
    }
    
    if (quantidadeHomens + quantidadeMulheresNotaAcima7 >= 10)
      break; 

}
let mediaGeral = somaNotas / 10
console.log('média geral dos alunos:' + mediaGeral)
console.log('quantidade de homens que enviaram as notas:' + quantidadeHomens)
console.log('quantidade de Mulheres com nota acima de 7:' + quantidadeMulheresNotaAcima7)
console.log('maior nota entre os Homens:' + maiorNotaHomens);

