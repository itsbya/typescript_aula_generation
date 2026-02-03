import leia = require("readline-sync");
import Stack = require("./Stack");

const pilhaLivros = new Stack<string>();
let opcao: number = -1;

function exibirMenu(): void {
    console.log("\n***************************************************");
    console.log("              MENU - PILHA DE LIVROS               ");
    console.log("***************************************************");
    console.log("1 - Adicionar Livro na Pilha");
    console.log("2 - Listar Todos os Livros");
    console.log("3 - Retirar Livro da Pilha");
    console.log("0 - Sair");
    console.log("***************************************************");
}

while (opcao !== 0) {

    exibirMenu();
    opcao = leia.questionInt("Escolha uma opcao: ");

    switch (opcao) {
        case 1:
            const nomeLivro = leia.question("Digite o nome do livro: ");
            pilhaLivros.push(nomeLivro);
            console.log(`\nLivro "${nomeLivro}" adicionado à pilha.`);
            break;

        case 2:
            console.log("\n**************** LIVROS NA PILHA ****************");
            pilhaLivros.printStack();
            break;

        case 3:
            const livroRemovido = pilhaLivros.pop();

            if (livroRemovido) {
                console.log(`\nO livro "${livroRemovido}" foi removido da pilha.`);
            } else {
                console.log("\nA pilha está vazia.");
            }
            break;

        case 0:
            console.log("\nAté outro dia!");
            break;

        default:
            console.log("\nERRO: Opção inválida!");
            break;
    }
}
