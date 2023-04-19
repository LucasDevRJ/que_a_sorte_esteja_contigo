var numerosSorteados = [];

for (var i = 0; i < 6; i++) {
	numerosSorteados[i] = Math.round(Math.random() * 100);
}

var div = document.body;

for (var i = 0; i < 6; i++) {
	if (i < numerosSorteados.length) {
		var botao = document.createElement('button');
		var numeroSorteadoBotao = botao.value = numerosSorteados[i];
		var valor  = document.createTextNode(numeroSorteadoBotao);
		botao.appendChild(valor);
		div.appendChild(botao);
	}
}

for (var i = 6; i < 12; i++) {
	var botao = document.createElement('button');
	var numeroSorteadoBotao = botao.value = Math.round(Math.random() * 100);
	var valor  = document.createTextNode(numeroSorteadoBotao);
	botao.appendChild(valor);
	div.appendChild(botao);
}

console.log(numerosSorteados);

/*
for (var i = 0; i < 12; i++) {
	var botao = document.createElement('button');
	var numeroSorteadoBotao = botao.value = Math.round(Math.random() * 100);
	var valor  = document.createTextNode(numeroSorteadoBotao);
	botao.appendChild(valor);
	div.appendChild(botao);
}

console.log(div);
console.log(botao);
*/