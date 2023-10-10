let numero = parseInt(prompt("Digite um nmero para ver a tabuada de multiplicacao:"));

for (let i = 1; i <= 10; i++) {
    let resultado = numero * i;
    console.log(numero + " x " + i + " = " + resultado);
}
