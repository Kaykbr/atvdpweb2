function soma(numero1, numero2) {
    return numero1 + numero2;
}

let numero1 = parseFloat(prompt("Digite o primeiro número:"));
let numero2 = parseFloat(prompt("Digite o segundo número:"));

let resultado = soma(numero1, numero2);

alert("A soma é: " + resultado);