class Computador {
    tipo 
    processador
    video
    armazenamento
    memoriaRam
    ssd
    constructor(tipo, processador, video, armazenamento, memoriaRam, ssd) {
        this.tipo = tipo
        this.processador = processador
        this.video = video
        this.armazenamento = armazenamento
        this.memoriaRam = memoriaRam
        this.ssd = ssd
    }
}
console.log("Informações do PC!!!")
let Pcs = [];
let continuar = true;
let indexPc = 0;

  while(continuar) {
    let tipo = prompt("Desktop ou notebook ?")
    let processador = prompt("Qual o seu processador ?")
    let video = prompt("Seu video é integrado ou dedicado ?")
    let armazenamento = prompt("Quantos GB de armazenamento você tem ?")
    let memoriaRam = prompt("Quantos GB de memória ram ?")
    let ssd = prompt("Digite 'tenho' se você tem ssd")
    let pc = new Computador(tipo, processador, video, armazenamento, memoriaRam, ssd)
    Pcs.push(pc)
    
    let desejaContinuar = prompt("Insira '1' se deseja continuar:") 
    if(desejaContinuar != '1' ) {
        continuar = false
    }
         indexPc++
    }
   
  