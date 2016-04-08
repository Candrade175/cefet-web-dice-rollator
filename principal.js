var dices = [document.getElementById('quantidadeD4'),
			 document.getElementById('quantidadeD6'),
			 document.getElementById('quantidadeD8'),
			 document.getElementById('quantidadeD10'),
			 document.getElementById('quantidadeD12'),
			 document.getElementById('quantidadeD20')];

var quantidadeD = [4, 6, 7, 10, 12, 20];
var randomico;
var recipiente = document.getElementById('recipienteResultados');
var resultado = document.getElementById('resultado');
var rolar = document.getElementById('rolar');
var soma;

rolar.addEventListener('click', function(e) {
	recipiente.classList.remove('oculto');
	resultado.innerHTML = "";
	soma = 0;
	
	for (var dado = 0; dado < dices.length; dado++)
		for (var i = 0; i < dices[dado].value; i++)
		{	
			randomico = Math.ceil(Math.random() * (quantidadeD[dado]+1));
			soma += randomico;
			
			if(resultado.innerHTML == "")
				resultado.innerHTML = randomico;
			else
				resultado.innerHTML = resultado.innerHTML + ' + ' + randomico;
		}
		
	resultado.innerHTML = resultado.innerHTML + ' = ' + soma;
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


