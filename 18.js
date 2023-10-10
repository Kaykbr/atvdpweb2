let palavra = prompt("Digite uma palavra para verificar se eh um palindromo:");
palavra = palavra.toLowerCase(); 

let ePalindromo = true;

for (let i = 0; i < palavra.length / 2; i++) {
    if (palavra[i] !== palavra[palavra.length - 1 - i]) {
        ePalindromo = false;
        break;
    }
}

if (ePalindromo) {
    alert("A palavra eh um palindromo.");
} else {
    alert("A palavra nao eh um palindromo.");
}