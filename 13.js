let totalNotas = 5; // Número total de notas
let soma = 0; // Inicialize a soma das notas

for (let i = 1; i <= totalNotas; i++) {
    let nota = parseFloat(prompt("Digite a nota " + i + ":"));
    
    if (isNaN(nota)) {
        alert("Por favor, insira um numero valido.");
        i--; // Decrementa i para que a mesma nota seja inserida novamente
    } else {
        soma += nota; // Adiciona a nota à soma
    }
}

let media = soma / totalNotas; // Calcula a média

alert("A media das " + totalNotas + " notas eh: " + media.toFixed(2));