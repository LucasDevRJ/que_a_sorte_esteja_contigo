var numerosSorteados = [];
var botoesSorteados = [];
var botoesEscolhidos = [];

for (var i = 0; i < 6; i++) {
	numerosSorteados[i] = Math.round(Math.random() * 100);
}

console.log(numerosSorteados);

var div = document.body;

for (var i = 0; i < 12; i++) {
	if (i < 6) {
		botoesSorteados[i] = numerosSorteados[i];
	} else {
		botoesSorteados[i] = Math.round(Math.random() * 100);
	}
}	

botoesSorteados.sort();

console.log(botoesSorteados);

for (var i = 0; i < 12; i++) {
	var botao = document.createElement('button');
	if (i < 6) {
		var numeroSorteadoBotao = botao.value = botoesSorteados[i];
		var valor  = document.createTextNode(numeroSorteadoBotao);
		botao.appendChild(valor);
		div.appendChild(botao);
	} else {
		var numeroSorteadoBotao = botao.value = Math.round(Math.random() * 100);
		var valor  = document.createTextNode(numeroSorteadoBotao);
		botao.appendChild(valor);
		div.appendChild(botao);
	}

	botoesEscolhidos[i] = numeroSorteadoBotao;
}

console.log(botoesEscolhidos);

botoesEscolhidos.onclick = function 