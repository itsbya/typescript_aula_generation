import leia from "readline-sync";

let cores = [];

// Leitura das cores
for (let i = 0; i < 5; i++) {
  let cor = leia.question(`Digite a ${i + 1}ª cor: `);
  cores.push(cor);
}

// Mostra todas as cores
console.log("\nCores digitadas:");
for (let cor of cores) {
  console.log(cor);
}

// Ordena as cores em ordem crescente
cores.sort();

// Mostra as cores ordenadas
console.log("\nCores ordenadas em ordem crescente:");
for (let cor of cores) {
  console.log(cor);
}
