var numerosSorteados = [];
var botoesSorteados = [];

for (var i = 0; i < 6; i++) {
	numerosSorteados[i] = Math.round(Math.random() * 100);
}

var div = document.body;

for (var i = 0; i < 12; i++) {
	if (i < 6) {
		botoesSorteados[i] = numerosSorteados[i];
	} else {
		botoesSorteados[i] = Math.round(Math.random() * 100);
	}
}	

botoesSorteados.sort();

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
}