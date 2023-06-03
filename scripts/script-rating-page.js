
let formulario = document.getElementById('formulario')
let botoes = document.querySelector('.numberStars')
let botaoEnviar = document.querySelector('#buttonSubmit')
let rating = 0


botoes.addEventListener('click', function(e) {
    let ratingButton = e.target

    if(!ratingButton.classList.contains('active')) {
        for(var i=0; i < botoes.children.length; i++) {
            botoes.children[i].classList.remove('active')
        }

        ratingButton.classList.add('active')

        rating = ratingButton.id
        localStorage.clear()
        localStorage.setItem("rating", rating)
    }
    
    
    botaoEnviar.onclick = direcionarPagina
})



function direcionarPagina() {
    window.location.href = "thanks-page.html"
}

