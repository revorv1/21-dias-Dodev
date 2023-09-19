let arrayNome = []
let arraySenha = []
let continuar = true
let i = 0;
while (continuar) { 
    let usuario = prompt("Você deseja: 'cadastrar' , 'login' , 'excluir' , 'encerrar' ")

    switch(usuario) {
    case 'cadastrar' :
        let nome = prompt("Insira seu nome: ")
        let senha = prompt("Insira sua senha: ")
        arrayNome[i] = nome;
        arraySenha[i] = senha;
        i++;
        console.log("Cadastro efetuado.!!")
        break;
        
    case 'login' :
        let nomeLogin = prompt("Insira o nome de usuário: ")
        let senhaLogin = prompt("Insira sua senha: ")
        let loginIndex = arrayNome.indexOf(nomeLogin);
        
        if ( loginIndex !== -1 && arraySenha[loginIndex] === senhaLogin) {
             console.log("login efetuado.")
             
        }else {
            console.log("Login ou senha inválidos!")
        }break;
        case 'excluir' :
            let nomeExcluir = prompt("Insira o nome de usuário que deseja excluir: ")
            let senhaExcluir = prompt("Insira sua senha do usuário quer deseja excluir: ")
            let indexExcluir = arrayNome.indexOf(nomeExcluir)
            if (indexExcluir !== -1 && arraySenha[indexExcluir] === senhaExcluir) {
            arrayNome.splice(indexExcluir, 1);
            arraySenha.splice(indexExcluir, 1)
            console.log("Usuário excluido com sucesso.");
            i--;
            }else {
                console.log("Usuário não encontrado ou senha incorreta.")
            }
            break;
            case 'encerrar' :
               continuar = false
                console.log("encerrando o programa.");
                break;
                default :
                console.log("Opção inválida.")
                break;
        
}
}

