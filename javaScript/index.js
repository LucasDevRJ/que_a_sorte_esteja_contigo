var numerosSorteados = [];

for (var i = 0; i < 6; i++) {
	numerosSorteados[i] = Math.round(Math.random() * 100);
}

console.log(numerosSorteados);

var div = document.createElement("div");

var div = document.body;


for (var i = 0; i < 12; i++) {
	var botao = document.createElement('button');
	div.appendChild(botao);
}

console.log(div);
console.log(botao);