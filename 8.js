let numeroCorreto = 7; // Este é o número que o usuário precisa adivinhar
let tentativa;

do {
    tentativa = parseInt(prompt("Adivinhe o numero entre 1 e 10:"));

    if (tentativa === numeroCorreto) {
        alert("Parabens! Voce acertou o numero.");
    } else {
        alert("Tente novamente.");
    }
} while (tentativa !== numeroCorreto);