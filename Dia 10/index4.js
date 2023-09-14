let array = []
let n = parseInt(prompt("Insira um número"))
array[0] = n - 1;
array[1] = n 
for (let i = 2; i < 10; i++) {
    array[i] = array[i - 1] + array[i - 2]
    console.log(array);
}