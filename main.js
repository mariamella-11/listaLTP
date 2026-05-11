const prompt = require('prompt-sync') () ;
const Livro = require('./Livro') ;

const livros = []

opcao = null;

while (opcao != 0){
    console.log("--- BIBLIOTECA ---");
    console.log("1 -  Cadastrar livro");
    console.log("2 - Listar livros");
    console.log("3 - Alterar livro");
    console.log("4 - Estatísticas");
    console.log("0 - Sair");
}

opcao = parseInt(prompt("opcao:"));

if(isNaN(opcao)) {
    console.log("digite um numero valido");
    
}

switch (opcao) {
    case 1: 
    let titulo = prompt("titulo: ")
    let autor = prompt("autor: ");
    let genero = prompt("genero: ");
    let anoPubli = parseInt(prompt("ano de publicacao: "));
    let numPaginas = parseInt(prompt("numero de paginas: "));

    let novoLivro = new Livro(titulo, autor, genero, anoPubli, numPaginas);
    livros.push(novoLivro);
    console.log("Livro cadastrado");
    break;

    case 2:
        if(livros.length === 0){
            console.log("nenhum livro cadastrado")

        }
        else{
            livros.forEach((livro, indice) => {
                console.log(`[${indice}] ${livro.getInfo()}`)});
        }
        break;
}