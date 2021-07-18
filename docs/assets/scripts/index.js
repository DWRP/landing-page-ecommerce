const emailInput = document.querySelector('.container-text-input--input')
const divError = document.querySelector('.input-null')

const removerError = () => {
    divError.classList.remove('active')
}

const salvar = () => {
    
    const email = emailInput.value

    if(email && email.includes('@')){
        document.querySelector('.container-text').innerHTML = `
            <div class="container-text">
                <h3 class="container-text--titulo">Obrigado por se cadastrar!</h3>
                <p class="container-text--descricao">
                    Em breve você receberá um email confirmando seu cadastro!
                </p>
            </div>
        `
    }else {
        divError.classList.add('active')
    }
}