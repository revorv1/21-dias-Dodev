class Livro {
     
    Titulo
    Autor 
    Editora 
    AnoDePublicacao 
    Disponibilidade = true
    constructor (titulo, autor, editora, anoDePublicacao) {
        this.Titulo = titulo 
        this.Autor = autor 
        this.Editora = editora 
        this.AnoDePublicacao = anoDePublicacao
    }

}
let livro = new Livro("Grimm" , "Jacob e Wilhelm" , "editora1", 2011)
let livro1 = new Livro("livro1" , "carlos" , "editora2" , 2000)
let arrayLivros = []
arrayLivros.push(livro)
arrayLivros.push(livro1)


class Biblioteca {

    Nome 
    Endereco 
    Telefone 
    AcervoDeLivros 
    constructor(nome, endereco, telefone, acervoDeLivros) {
        this.Nome = nome 
        this.Endereco = endereco 
        this.Telefone = telefone 
        this.AcervoDeLivros = acervoDeLivros
    }
    BuscarLivro(titulo) {
        for(let i = 0; i < this.AcervoDeLivros.length; i++) {
          if(this.AcervoDeLivros[i].Titulo == titulo) {
            console.log(this.AcervoDeLivros[i].Titulo + " " + this.AcervoDeLivros[i].Autor + " " + this.AcervoDeLivros[i].Editora + " " + this.AcervoDeLivros[i].AnoDePublicacao)
          }
        }
        
        
    }
    EmprestimoLivro(titulo) {
        for(let i = 0; i < this.AcervoDeLivros.length; i++) {
            if (this.AcervoDeLivros[i].Titulo == titulo) {
                if (this.AcervoDeLivros[i].Disponibilidade == true) {
            this.AcervoDeLivros[i].Disponibilidade = false
            return true

                }else {
                    return false
                }
            }
        }
    }
    DevolucaoLivro(titulo) {
        for(let i = 0; i < this.AcervoDeLivros.length; i++) {
            if (this.AcervoDeLivros[i].Titulo == titulo) {
                if (this.AcervoDeLivros[i].disponibilidade == false) {
                    this.AcervoDeLivros[i].Disponibilidade = true 
                
                }else {
                    console.log("Livro não emprestado!")
                }
            }
        }
    }
}
let biblioteca = new Biblioteca("Santa cecília" , "Rua das estradas 255" , 190 , arrayLivros)
biblioteca.BuscarLivro("Grimm")
biblioteca.EmprestimoLivro("Grimm")
biblioteca.DevolucaoLivro("Grimm")