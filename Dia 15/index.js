let arrayA = [2, 4, 6, 8, 10, 12, 14, 16, 18, 20]
let arrayB = [2, 3, 8, 11, 13, 14, 15, 17, 19, 21]
let numerosComum = []
function numerosEmComum(arrayA, arrayB) {
    
    let g = 0;
    for(let i = 0; i < arrayA.length; i++){
    for(let j = 0; j < arrayB.length; j++){
     if(arrayA[i] == arrayB[j]){
        
        numerosComum[g] = arrayA[i]
        g++
     }
    }
    }
}numerosEmComum(arrayA, arrayB)
console.log(numerosComum)
