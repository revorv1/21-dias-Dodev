
let quantidadeNumeros = parseInt(prompt("quantos números você quer inserir ?"))
let numeros3 = new Array (quantidadeNumeros);
for(let i = 0; i < quantidadeNumeros; i++) {
    let insiraNumero2 = parseInt(prompt("Insira um número"))
     numeros3[i] = insiraNumero2;
     function ordenarDecrescente(array) {
       let n = array.length
       for(let i = 0; i < n - 1; i++){
         for(let j = 0; j < n - 1; j++){
        if (array[j] < array[j + 1]){
              let temp = array[j];
       array[j] = array[j + 1];
       array[j + 1] = temp;
        }
        
       }
      
       }
       
     }

}
console.log("Números inseridos:");
console.log(numeros3);
console.log("ordem decrescente");
ordenarDecrescente(numeros3);
console.log(numeros3);

