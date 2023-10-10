let numero = parseInt(prompt("Digite um numero para calcular o fatorial:"));
let fatorial = 1;

if (numero < 0) {
    alert("O fatorial nao e definido para numeros negativos.");
} else if (numero === 0) {
    alert("O fatorial de 0 eh 1.");
} else {
    for (let i = 1; i <= numero; i++) {
        fatorial *= i;
    }
    alert("O fatorial de " + numero + " eh " + fatorial);
}