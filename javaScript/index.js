var numerosSorteados = [];
var numerosDigitados = [];
var contadorNumerosSorteados = 0;

while (numerosSorteados.length < 6) {
	var valorSorteado = Math.round(Math.random() * 100);
	if (valorSorteado >= 10 && valorSorteado <= 20) {
		numerosSorteados[contadorNumerosSorteados] = valorSorteado;
		contadorNumerosSorteados++;
	}
}

console.log(numerosSorteados);