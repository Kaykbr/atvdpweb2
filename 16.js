const numeroAleatorio = Math.floor(Math.random() * 100) + 1;

let tentativas = 0;
let numeroUsuario;

do {
    numeroUsuario = parseInt(prompt("Tente adivinhar o numero (entre 1 e 100):"));
    tentativas++;

    if (numeroUsuario < numeroAleatorio) {
        alert("Tente um numero maior.");
    } else if (numeroUsuario > numeroAleatorio) {
        alert("Tente um numero menor.");
    } else {
        alert("Parabainns! Voce acertou o numero " + numeroAleatorio + " em " + tentativas + " tentativa(s).");
    }
} while (numeroUsuario !== numeroAleatorio);