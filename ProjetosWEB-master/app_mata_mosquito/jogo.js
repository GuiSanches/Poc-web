let altura = 0
let largura = 0
let vidas = 1  //Jogador começa na primeira vida
let tempo = 15 //Duração do jogo

let criaMosquitoTempo = 1500 //Duração cada mosquito na tela

const nivel = window.location.search
								.replace('?', '') //para achar os parametros

if(nivel === 'normal') {
	criaMosquitoTempo = 1500
} else if(nivel === 'dificil') {
	criaMosquitoTempo = 1000
} else if (nivel === 'chucknorris') {
	criaMosquitoTempo = 750
}

const ajustaTamanhoPalcoJogo = () => {
	altura = window.innerHeight
	largura = window.innerWidth

	console.log(largura, altura)
}

ajustaTamanhoPalcoJogo()

//Atualiza marcador de tempo no jogo
let cronometro = setInterval( () => {

	tempo -= 1

	if(tempo < 0) window.location.href = 'vitoria.html'
	else document.getElementById('cronometro').innerHTML = tempo

}, 1000)
//Cria mosca em posição aleatória
const posicaoRandomica = () => {
	//remover o mosquito anterior (caso exista)
	if(document.getElementById('mosquito')) {
		document.getElementById('mosquito').remove()

		if(vidas > 3) {

			window.location.href = 'fim_de_jogo.html'
		} else {
			document.getElementById('v' + vidas).src = "imagens/coracao_vazio.png" //troca desenho da vida atual para coracao vazio
			vidas++ //incrementa vida atual
		}
	}

	let posicaoX = Math.floor(Math.random() * largura) - 90
	let posicaoY = Math.floor(Math.random() * altura) - 90

	//Corrige posição negativa
	posicaoX = posicaoX < 0 ? 0 : posicaoX
	posicaoY = posicaoY < 0 ? 0 : posicaoY

	//criar o elemento html
	let mosquito = document.createElement('img')
	mosquito.src = 'imagens/mosquito.png'
	mosquito.className = tamanhoAleatorio() + ' ' + ladoAleatorio()
	mosquito.style.left = posicaoX + 'px'
	mosquito.style.top = posicaoY + 'px'
	mosquito.style.position = 'absolute'
	mosquito.id = 'mosquito'
	mosquito.onclick = function() {
		this.remove()
	}
	//Coloca no body
	document.body.appendChild(mosquito)
}
//Retorna uma das classes de tamanho de mosquito
const tamanhoAleatorio = () => {
	let classe = Math.floor(Math.random() * 3)
	
	switch(classe) {
		case 0:
			return 'mosquito1'
		
		case 1:
			return 'mosquito2'

		case 2:
			return 'mosquito3'
	}
}

const ladoAleatorio = () => {
	let classe = Math.floor(Math.random() * 2)
	
	switch(classe) {
		case 0:
			return 'ladoA'
		
		case 1:
			return 'ladoB'

	}
}

