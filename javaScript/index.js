var numerosSorteados = [];

for (var i = 0; i < 6; i++) {
	numerosSorteados[i] = Math.round(Math.random() * 100);
}

console.log(numerosSorteados);

var div = document.body;

for (var i = 0; i < 12; i++) {
	var botao = document.createElement('button');
	var numeroSorteadoBotao = botao.value = Math.round(Math.random() * 100);
	var valor  = document.createTextNode(numeroSorteadoBotao);
	botao.appendChild(valor);
	div.appendChild(botao);
}

console.log(div);
console.log(botao);