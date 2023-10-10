function maiorNumero(num1, num2, num3) {
    return Math.max(num1, num2, num3);
}

let numero1 = parseFloat(prompt("Digite o primeiro número:"));
let numero2 = parseFloat(prompt("Digite o segundo número:"));
let numero3 = parseFloat(prompt("Digite o terceiro número:"));

let resultado = maiorNumero(numero1, numero2, numero3);

alert("O maior número é: " + resultado);