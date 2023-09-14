let numeros2 = []
let posicaoArray2 = 0;
for (posicaoArray2 = 0; posicaoArray2 < 5; posicaoArray2++) {
   let insiraNumero = parseInt(prompt("insira um número"))
   numeros2[posicaoArray2] = insiraNumero
}
    function ordenarCrescente(array){
      let n = array.length
      for (let i = 0; i < n - 1; i++) {
        for (let j = 0; j < n - 1; j++) {
          if (array [j] > array[j + 1]) {
            let temp = array[j];
            array[j] = array[j + 1];
            array[j + 1] = temp;
          }
        }
      }
    }

    function ordenarDecrescente(array) {
      let n = array.length
      for (let i = 0; i < n - 1; i++) {
        for (let j = 0; j < n  - 1; j++){
          if (array [j] < array[j + 1]) {
            let temp = array[j];
            array[j] = array[j + 1];
            array[j + 1] = temp;
          }
        }
      }
    }
    console.log("Ordenar crescente")
    ordenarCrescente(numeros2)
    console.log(numeros2);

    console.log("Ordenar Decrescente")
    ordenarDecrescente(numeros2)
    console.log(numeros2);
