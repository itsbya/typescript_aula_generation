import leia from "readline-sync";

let numeros = new Set();

// Leitura dos 10 números não repetidos
while (numeros.size < 10) {
  let valor = leia.questionInt("Digite um numero inteiro (não repetido): ");

  if (numeros.has(valor)) {
    console.log("Número repetido! Digite outro.");
  } else {
    numeros.add(valor);
  }
}

// Mostra os elementos do Set
console.log("\nElementos da Collection Set:");
for (let numero of numeros) {
  console.log(numero);
}
