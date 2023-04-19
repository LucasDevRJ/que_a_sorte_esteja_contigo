var numerosSorteados = [];
var numerosDigitados = [];
var contadorNumerosSorteados = 0;
var contadorNumerosDigitados = 0;
var contadorAcertos = 0;
var verificouAcertos = false;

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

	if (valorDigitado >= 10 && valorDigitado <= 30 
		&& contadorNumerosDigitados < 6) {
		numerosDigitados[contadorNumerosDigitados] = valorDigitado;
		contadorNumerosDigitados++;
		console.log("Valor adicionado!");
		console.log(numerosDigitados);
	}

	if (contadorNumerosDigitados == 6 && verificouAcertos == false) {
		verificouAcertos = true;
		comparaNumerosDigitadosComSorteados();
	}
}

function comparaNumerosDigitadosComSorteados() {
	for (var i = 0; i < 6; i++) {
		for (var j = 0; j < 6; j++) {
			if (numerosSorteados[i] == numerosDigitados[j]) {
				contadorAcertos++;
			}
		}
	}
	console.log("Acertos = " + contadorAcertos);
}