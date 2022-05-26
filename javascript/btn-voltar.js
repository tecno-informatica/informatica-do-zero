const botaoAnima = document.querySelector('[btn-voltar="scroll"]')

const btnSome = window.innerHeight*5.0

console.log(btnSome)

function btnScroll() {
    const btnItem = botaoAnima.getBoundingClientRect().top

    const btnInvisivel = btnItem - btnSome < 0

    if(btnInvisivel) {
        botaoAnima.classList.add('btn-botao')
    } else {
        botaoAnima.classList.remove('btn-botao')
    }

    //console.log(btnItem)
}

window.addEventListener('scroll', btnScroll)