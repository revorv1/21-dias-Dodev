class Hotel {
    Nome
    Id 
    Categoria 
    Endereco 
    Telefone
    constructor (nome, id, categoria, endereco, telefone) {
        this.Nome = nome
        this.Id = id
        this.Categoria = categoria
        this.Endereco = endereco
        this.Telefone = telefone
    }
}





let arrayHoteis = []
let arrayReservas = []
let i = 1;
let j = 1;
function cadastrarHotel() {

let nome = prompt("Qual o nome do hotel ?")
let id = i;
let categoria = prompt("Qual a categoria do hotel ?")
let endereco = prompt("Qual o endereço do hotel ?")
let telefone = prompt("Qual o telefone do hotel ?")
let hotel = new Hotel (nome, id, categoria, endereco, telefone)
arrayHoteis.push(hotel)

i++
console.log("Hotel cadastrado !")
}
class Reserva {
    Id2 
    IdDoHotel 
    NomeResponsavel 
    DiaEntrada 
    DiaSaida 
    constructor (id2, idDoHotel, nomeResponsavel, diaEntrada, diaSaida) {
        this.Id2 = id2
        this.IdDoHotel = idDoHotel 
        this.NomeResponsavel = nomeResponsavel 
        this.DiaEntrada = diaEntrada 
        this.DiaSaida = diaSaida
    }

}


function cadastrarReservas() {
let id2 = j;
let idDoHotel = parseInt(prompt("Qual a id do hotel ?"))
let nomeResponsavel = prompt("Qual o nome do responsável pela reserva ?")
let diaEntrada = parseInt(prompt("Qual o dia de entrada ?"))
let diaSaida = parseInt(prompt("Qual o dia de saída ?"))
let reserva = new Reserva(id2, idDoHotel, nomeResponsavel, diaEntrada, diaSaida)
arrayReservas.push(reserva) 
j++

console.log("Reserva efetuada!!")

}



function checkinHotel(idDoHotel) {
    for(let i = 0; i < arrayHoteis.length; i++) {
        if(arrayReservas[i].IdDoHotel == idDoHotel) {

            console.log("Nome do Hotel: " + arrayHoteis[idDoHotel - 1].Nome + ", Nome do responsável pela reserva : " + arrayReservas[i].NomeResponsavel +
            " Dia de entrada: " + arrayReservas[i].DiaEntrada + ", e dia de saída: " + arrayReservas[i].DiaSaida)
        }
    }

    
}



function checkinReserva(idReserva) {
   let j = arrayReservas[idReserva - 1].IdDoHotel
  
   
   
   
   console.log("Nome do Hotel: " +  arrayHoteis[j -1].Nome + ", o endereço do hotel: " +  arrayHoteis[j - 1].Endereco + ", o dia de entrada: " +
   arrayReservas[idReserva -1].DiaEntrada + ", e o dia de saída: " + arrayReservas[idReserva - 1].DiaSaida )
    
}
function pessoaNumeroReservas(nomeResponsavel) {
    let g = 0;
for (let i = 0; i < arrayReservas.length; i++) {
    if(arrayReservas[i].NomeResponsavel == nomeResponsavel) {
        g++
    }
}
console.log("Nome do responsável pela reserva: " + nomeResponsavel  + ", e seu número de reservas: " + g)
}


function hoteisCategorias(categoria) {
    let categoriaHoteis = []
    for (let i = 0; i < arrayHoteis.length; i++) {
        if (arrayHoteis[i].Categoria == categoria) {
        categoriaHoteis.push(arrayHoteis[i])
        }
    }return categoriaHoteis;
}

function atualizarTelefone(idDoHotel, telefone) {
 for (let i = 0; i < arrayHoteis.length; i++) {
    if(arrayHoteis[i].Id == idDoHotel) {
        arrayHoteis[i].Telefone = telefone;
    }
 }

}let continuar = true;
while (continuar) {
    let usuario = prompt("O que deseja fazer: 1 -'cadastrarHotel' , 2 - 'cadastrarReservas' , 3 - 'checkinHotel' , 4 - 'checkinReserva' , 5 - 'pessoaNumeroReservas' , 6 - 'hoteisCategorias' , 7 - 'atualizarTelefone' , 8 - 'encerrar programa' ")
    switch (usuario) {
        case '1' :
            cadastrarHotel()
        break;
        case '2' :
            cadastrarReservas()
        break;
        case '3' :
        let a = Number(prompt('Qual a id do hotel ?'))
            checkinHotel(a)
        break;
        case '4' :
        let b = Number(prompt("Qual a id de reserva ?"))
            checkinReserva(b)
        break;
        case '5' :
        let c = prompt("Qual o nome do responsável pela reserva ?")
            pessoaNumeroReservas(c)
        break;
        case '6' :
        let d = Number(prompt("Qual a categoria do hotel ?"))
            hoteisCategorias(d)
        break;
        case '7' :
        let e = Number(prompt("Qual a id do hotel ?"))
        let f = Number(prompt("Qual o telefone ?"))
            atualizarTelefone(e, f)
        break;
        default :
        continuar = false
        break;
        

    }
}




