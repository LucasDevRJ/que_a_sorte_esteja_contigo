var numerosSorteados = [];
var numerosDigitados = [];
var contadorNumerosSorteados = 0;
var contadorNumerosDigitados = 0;
var contadorAcertos = 0;
var valorPremiacao = 0.0;
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
	var mensagem = document.getElementById("mensagem");
	var valorDigitado = parseInt(campoValorDigitado.value);

	if (valorDigitado >= 10 && valorDigitado <= 30 
		&& contadorNumerosDigitados < 6) {
		numerosDigitados[contadorNumerosDigitados] = valorDigitado;
		contadorNumerosDigitados++;
		mensagem.innerHTML = "";
		alert("Valor adicionado!");
	} else {
		mensagem.innerHTML = "Valor inválido!";
	}

	if (contadorNumerosDigitados == 6 && verificouAcertos == false) {
		verificouAcertos = true;
		comparaNumerosDigitadosComSorteados();
	}

	campoValorDigitado.value = "";
	campoValorDigitado.focus();
}

function comparaNumerosDigitadosComSorteados() {
	for (var i = 0; i < 6; i++) {
		if (numerosSorteados[i] == numerosDigitados[i]) {
			contadorAcertos++;
		}
	}
	exibeResultado(contadorAcertos);
}

function exibeResultado(contadorAcertos) {
	var resultado = document.getElementById("resultado-loteria");
	switch (contadorAcertos) {
		case 1:
			valorPremiacao = 10.00;
		break;

		case 2:
			valorPremiacao = 100.00;
		break;

		case 3:
			valorPremiacao = 1000.00;
		break; 

		case 4:
			valorPremiacao = 10000.00;
		break;

		case 5:
			valorPremiacao = 100000.00;
		break;

		case 6:
			valorPremiacao = 1000000.00;
		break;
 	}

 	if (contadorAcertos > 0) {
 		resultado.innerHTML = "Parabéns, você fez " + contadorAcertos + " acerto(s)!!" +
 		"\nGanhou R$ " + valorPremiacao.toFixed(2);
 	} else {
 		resultado.innerHTML = "Infelizmente, você não acertou nenhum número";
 	}
	
}