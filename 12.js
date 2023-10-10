let numero = parseInt(prompt("Digite um numero:"));
let ehPrimo = true;

if (numero <= 1) {
    ehPrimo = false;
} else {
    let divisor = 2;
    
    while (divisor < numero) {
        if (numero % divisor === 0) {
            ehPrimo = false;
            break;
        }
        divisor++;
    }
}

if (ehPrimo) {
    alert(numero + " eh um numero primo.");
} else {
    alert(numero + " não eh um numero primo.");
}
