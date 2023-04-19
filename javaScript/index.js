var numerosSorteados = [];
var numerosDigitados = [];
var contadorNumerosSorteados = 0;
var contadorNumerosDigitados = 0;

while (numerosSorteados.length < 6) {
	var valorSorteado = Math.round(Math.random() * 100);
	if (valorSorteado >= 10 && valorSorteado <= 30) {
		numerosSorteados[contadorNumerosSorteados] = valorSorteado;
		contadorNumerosSorteados++;
	}
}

console.log(numerosSorteados);

function armazenaValor() {
	var campoValorDigitado = document.getElementById("entrada");
	var valorDigitado = parseInt(campoValorDigitado.value);

	if (valorDigitado >= 10 && valorDigitado <= 30) {
		numerosDigitados[contadorNumerosDigitados] = valorDigitado;
		contadorNumerosDigitados++;
		console.log("Valor adicionado!");
		console.log(numerosDigitados);
	}
}