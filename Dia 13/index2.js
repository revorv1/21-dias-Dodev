class Carro {
    nome
    potencia
    velocidadeMaxima
    aceleracao
    constructor(nome, potencia, velocidadeMaxima, aceleracao) {
        this.nome = nome
        this.potencia = potencia
        this.velocidadeMaxima = velocidadeMaxima
        this.aceleracao = aceleracao
    }
 calcular(distancia) {
    
    let tempo = distancia / (this.velocidadeMaxima / this.aceleracao)
    return tempo;
    }
    
}


class Corrida {
    nomeCorrida
    tipo
    distancia
    participantes = []
    vencedor
    constructor(nomeCorrida, tipo , distancia, participantes){
        this.nomeCorrida = nomeCorrida
        this.tipo = tipo
        this.distancia = distancia
        this.participantes = participantes
        
    }
    verificarVencedor() {
        let menorTempo = 500
        let nomeVencedor = ""
        for(let i = 0; i < this.participantes.length; i++)
        {
          let tempo =  this.participantes[i].calcular(this.distancia) 
          if(tempo < menorTempo) {
            menorTempo = tempo
            nomeVencedor = this.participantes[i].nome
          }
        } this.vencedor = nomeVencedor;
    }
    exibirVencedor() {
        console.log(this.vencedor)
    }
} console.log("Corrida Dodev")
let carro1 = new Carro("ferrari" , 300 , 330 , 2.9)
let carro2 = new Carro("Lamborghini" , 320 , 340 , 2.7)
let carro3 = new Carro("UnoMile" , 140 , 180 , 4.5 )
let carros = [carro1, carro2, carro3]
let corrida = new Corrida("F1" , "a" , 5000 , carros)
corrida.verificarVencedor () 
corrida.exibirVencedor ()


  
  