var rolar = document.getElementById('rolar');
var dices = [document.getElementById('quantidadeD4'),
			 document.getElementById('quantidadeD6'),
			 document.getElementById('quantidadeD8'),
			 document.getElementById('quantidadeD10'),
			 document.getElementById('quantidadeD12'),
			 document.getElementById('quantidadeD20')];
var randomico;
var resultado;
var soma = 0;

rolar.addEventListener('click', function(e) {
	for (var dado = 0; dado < dices.length; dado++)
	{
		for (var i = 0; i < dices[dado].value; i++)
		{	
			randomico = Math.ceil(Math.random() * dices[dado].max);
			soma += randomico;
			console.log(randomico);
		}
	}
});

// Faça seu exercício neste arquivo


// Alguns elementos importantes na página (index.html):
// #rolar: Botão rolar
//	 - você deve atribuir um handler de evento a ele para fazer o cálculo da rolagem dos dados
// #resultado: Elemento cujo conteúdo deve ser uma string com os resultados
//	 - você deve definir seu conteúdo (.innerHTML) com a string de resultados
// #recipienteResultados: "Container" do elemento dos resultados:
//	 - você deve torná-lo visível removendo a classe "oculto" dele
// .quantidade: todos os input[type=number] com a quantidade de dados a serem rolados
// #quantidadeD{4,6,8,10,12,20}: um ID para cada input[type=number] com a quantidade


