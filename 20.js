let altura = parseFloat(prompt("Digite sua altura em metros (por exemplo, 1.75):"));
let peso = parseFloat(prompt("Digite seu peso em quilogramas (por exemplo, 70):"));

if (isNaN(altura) || isNaN(peso)) {
    alert("Por favor, insira valores numéricos válidos.");
} else {
    let imc = peso / (altura * altura);
    alert("Seu IMC é: " + imc.toFixed(2));

}