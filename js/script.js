//PASSOS

//[  x ]SABER QUANDO O BOTÃO FOR CLICADO
//[  x ]PEGAR O NÚMERO E A MENSAGEM
//[  x ]GERAR O LINK
//[  x ]COLOCAR O LINK NA TELA
//[  x ]COPIAR O LINK, QUANDO O BOTÃO FOR CLICADO


//CADA FUNÇÃO DEVE FAZER UMA COISA

//ORGANIZAR TUDO (PEGAR MENSAGEM, NÚMERO, GERAR LINK, COLOCAR NA TELA, COPIAR LINK)
//CRIAR O LINK
//COPIAR O LINK


let linkCompleto = ""


function criarLink(numero, mensagem){

    let numeroCompleto = '55'+ numero

    let link = `https://wa.me/${numeroCompleto}?text=${encodeURIComponent(mensagem)}`

    return link

}

//Pegar o número e a mensagem
function gerarLink(){
    let numeroDigitado = document.getElementById('numero').value
    let mensagemDigitada = document.getElementById('mensagem').value

    linkCompleto = criarLink(numeroDigitado, mensagemDigitada)

    document.getElementById('linkGerado').innerHTML = `<a href="${linkCompleto}" target="_blank">${linkCompleto}</a>`

    document.getElementById('resultado').classList.add('mostrar')

    document.getElementById('mensagemSucesso').textContent = ''


}

function copiarLink(){
    navigator.clipboard.writeText(linkCompleto)

    document.getElementById('mensagemSucesso').textContent = 'Link copiado com sucesso!'

}
