var botao1 = document.getElementById("botao1");
var botao2 = document.getElementById("botao2");
var botao3 = document.getElementById("botao3");
var botao4 = document.getElementById("botao4");
var botao5 = document.getElementById("botao5");
var botao6 = document.getElementById("botao6");
var botao7 = document.getElementById("botao7");
var botao8 = document.getElementById("botao8");
var botao9 = document.getElementById("botao9");
var botao10 = document.getElementById("botao10");
var botao11 = document.getElementById("botao11");
var botao12 = document.getElementById("botao12");

var botaoValor = botao1.value = Math.round(Math.random() * 100);

botaoValor.innerHTML = botaoValor;

console.log(botaoValor);

/*
var numerosSorteados = [];
var botoesSorteados = [];
var botoesSelecionados = [];

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
	botoesSelecionados[i] = botao;
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

	botoesSelecionados[i].onclick = function armazenaValor() {
		botoesSelecionados[i] = numeroSorteadoBotao;
		console.log(botoesSelecionados[i]);
	}
}

console.log(botoesSelecionados);
*/