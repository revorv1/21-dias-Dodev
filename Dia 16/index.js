let arrayNome = []
let arraySenha = []
let continuar = true
let i = 0;

function usuarioEscolha() {
  
    let usuario = prompt("Deseja: 'cadastrar' , 'login' , 'excluir' , 'encerrar'.")
    return usuario 

    }
    function cadastrar() {
         let nome = prompt("Insira seu nome:")
        let senha = prompt("Insira sua senha:")
        arrayNome[i] = nome;
        arraySenha[i] = senha;
        i++
        console.log("Cadastro efetuado!")
    } 
    function login() {
        let nomeLogin = prompt("Insira o nome de usuário: ")
        let senhaLogin = prompt("Insira sua senha: ")
        let loginIndex = arrayNome.indexOf(nomeLogin);
        if(loginIndex !== -1 && arraySenha[loginIndex] === senhaLogin) {
            console.log("Login efetuado!!")
        }else {
            console.log("Usuário ou senha inválidos!")
        }
    }
    function excluir() {
        let nomeExcluir = prompt("Insira o nome de usuário que deseja excluir:")
        let senhaExcluir = prompt("Insira a senha do usuário que deseja excluir:")
        let indexExcluir = arrayNome.indexOf(nomeExcluir)
        if (indexExcluir !== -1 && arraySenha[indexExcluir] === senhaExcluir) {
            arrayNome.splice(indexExcluir, 1);
            arraySenha.splice(indexExcluir, 1);
            console.log("Usuário excluido com sucesso.");
            i--;
        }else {
            console.log("Usuário não encontrado ou senha incorreta.")
        }
    }
    
    
   while (continuar) {
    let usuario = usuarioEscolha()
    switch(usuario) {
    case 'cadastrar' :
       cadastrar();
        break;
    case 'login' :
        login();
        break;
    case 'excluir' :
        excluir();
        break;
    case 'encerrar' :
        continuar = false;
        console.log("Encerrando o programa.");
        break;
        default :
        console.log("Opção inválida.")
        break;
    }

    
    }
    