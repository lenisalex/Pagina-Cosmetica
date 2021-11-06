// DEPOIS VOU TER DE MUDAR PARA NOME, DESCRIÇÃO E IMAGEM

//GOAL RESPOSTA CERTA - eu clico na resposta certa e aparece-me HTML e CSS a dizer "Correto"

// GOAL RESPOSTA ERRADA - eu clico na resposta errada e aparece-me HTML e CSS a dizer "oops errada" + "algo específico à resposta que eu cliquei"


// GOAL RESPOSTA CERTA ✔️

//1. tenho de ir buscar o botão com a resposta correta
const itemDesodorizante = document.getElementById('item-desodorizante');

//1.2 tenho de ir buscar o <p> para onde eu quero injetar conteúdo
const explicação = document.getElementById('explicação');

//2. tenho de por o elemento resposta certa a escutar o meu 'click'
itemDesodorizante.addEventListener('click', (event) => {
	explicação.innerHTML = "<strong>Correto!</strong>🥳 O desodorizante é o item que mais faz alergia e contém químicos quando comprado no supermercado normal. Ter um desodorizante natural é muito importante e, embora possa ser um pouco estranho ao início, é o que mais vale a pena a longo prazo."
})

// GOAL RESPOSTAS ERRADAS

//1. tenho de ir buscar todas as respostas com a classe resposta errada
const respostasErradas = document.querySelectorAll('.resposta-errada');

//2. Iterar por cada resposta errada
respostasErradas.forEach((resposta) => {
	//3. JS tem de estar à escuta do click em cada resposta
	resposta.addEventListener('click', (evento) => {
		let explicaçãoConteudo = "<strong>Oops, errado... </strong>😬 "

		//4. distinguir que resposta é, se é creme, esfoliante, shampo ou batom
		if(resposta.id === "resposta-creme") {
			explicaçãoConteudo += "Ainda assim, o creme orgânico sólido é um produto muito versátil e utilizado diariamente 👌"
		} else if (resposta.id === "resposta-esfoliante") {
			explicaçãoConteudo = explicaçãoConteudo + "O esfoliante é o mais fácil de fazer! Qualquer um pode fazer em casa 😉"
		} else if (resposta.id === "resposta-shampo") {
			explicaçãoConteudo += "O shampô sólido é feito através de saponificação a quente e pode ser utilizado na lavajem de mãos, corpo e cabelo. O óleo essencial de Teatree é o que o deixa com propriendades anti-caspa e o valoriza como shampô. Deve ser utilizado por pessoas que apreciem o tom rústico da vida 🍂🍃"
		} else {
			explicaçãoConteudo += "O batom orgânico de mel é super boost em hidratação e brilho, é bem absorvido pelo lábio, mas não é o eleito."
		}

		explicaçãoConteudo += " Tenta outra vez"

		explicação.innerHTML = explicaçãoConteudo;
	})
})



