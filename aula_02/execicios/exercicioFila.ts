import leia = require("readline-sync");
import Queue = require("../Queue");

const filaClientes = new Queue<string>();
let opcao: number = -1;

function mostrarMenu(): void {
    console.log("\n***************************************************");
    console.log("            MENU - FILA DE CLIENTES                ");
    console.log("***************************************************");
    console.log("1 - Adicionar Cliente na Fila");
    console.log("2 - Listar Todos os Clientes");
    console.log("3 - Retirar Cliente da Fila");
    console.log("0 - Sair");
    console.log("***************************************************");
}

while (opcao !== 0) {

    mostrarMenu();
    opcao = leia.questionInt("Escolha uma opcao: ");

    switch (opcao) {
        case 1:
            const nomeCliente = leia.question("Digite o nome do cliente: ");
            filaClientes.enqueue(nomeCliente);
            console.log(`\nCliente ${nomeCliente} adicionado à fila.`);
            break;

        case 2:
            console.log("\n**************** CLIENTES NA FILA ****************");
            filaClientes.printQueue();
            break;

        case 3:
            const clienteRemovido = filaClientes.dequeue();

            if (clienteRemovido) {
                console.log(`\nO cliente ${clienteRemovido} foi chamado.`);
            } else {
                console.log("\nA fila está vazia.");
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
