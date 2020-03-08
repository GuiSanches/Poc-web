let altura, largura, vidas, tempo, cronometro, criaMosca, iniciado
const tela = document.getElementById('game-window')

const ajustaTamanhoPalcoJogo = () => {
    altura = tela.offsetHeight
    largura = tela.offsetWidth
}

const inicializa = _ => {
    vidas = 1  //Jogador começa na primeira vida
    tempo = 15 //Duração do jogo
    ajustaTamanhoPalcoJogo()
    if(iniciado) {
        clearInterval(cronometro)
        clearInterval(criaMosca)
    }
    iniciado = false
    for (let i = 1; i <= 3; i++)
        document.getElementById('v' + i).src = "/imagens/coracao_cheio.png"   
    
}
inicializa()

//Cria mosca em posição aleatória
const posicaoRandomica = () => {
    //remover o mosquito anterior (caso exista)
    if (document.getElementById('mosquito')) {
        document.getElementById('mosquito').remove()
        if (vidas > 3) {
            alert("Fim de jogo")
            clearInterval(criaMosca)
            clearInterval(cronometro)
            inicializa()
        } else {
            document.getElementById('v' + vidas).src = "./imagens/coracao_vazio.png"
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
    mosquito.src = '../imagens/mosquito.png'
    mosquito.className = tamanhoAleatorio() + ' ' + ladoAleatorio()
    mosquito.style.left = posicaoX + 'px'
    mosquito.style.top = posicaoY + 'px'
    mosquito.style.position = 'absolute'
    mosquito.id = 'mosquito'
    mosquito.onclick = function () {
        this.remove()
    }
    //Coloca no body
    tela.appendChild(mosquito)
}

//Retorna uma das classes de tamanho de mosquito
const tamanhoAleatorio = () => {
    let classe = Math.floor(Math.random() * 3)

    switch (classe) {
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

    switch (classe) {
        case 0:
            return 'ladoA'

        case 1:
            return 'ladoB'

    }
}

const iniciarJogo = _ => {
    let nivel = document.getElementById('nivel').value
    if (nivel == '') alert('Selecione um nivel para começar')
    const clearUrl = window.location.href.split('?')[0]
    window.location.href = `${clearUrl}?nivel=${nivel}`

    let criaMosquitoTempo = 1500 //Duração cada mosquito na tela
    inicializa()

    switch (nivel) {
        case "normal": criaMosquitoTempo = 1500;
            break;
        case "dificil": criaMosquitoTempo = 1000;
            break;
        case "deus": criaMosquitoTempo = 750
    }

    ajustaTamanhoPalcoJogo()
    if (!iniciado) {
        iniciado = true
        cronometro = setInterval(() => {
            tempo -= 1

            if (tempo < 0) {
                alert('VITORIA')
                inicializa()
            }
            else
                document.getElementById('cronometro').innerHTML = tempo

        }, 1000)
        criaMosca = setInterval(() => posicaoRandomica(), criaMosquitoTempo)
        
    }

    document.getElementById('cronometro').innerHTML = tempo

}