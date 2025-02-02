
const btnavancar = document.getElementById ("btn-avancar");
const bntvoltar = document.getElementById ("btn-voltar")
const cartoes = document.querySelectorAll (".cartao");
let cartaoAtual = 0;

cartoes.forEach(cartao => {
    cartao.addEventListener("click", function(){
        const cartaVirada = cartao.querySelector(".carta-virada");
        
        cartao.classList.toggle();

    })
})


    btnavancar.addEventListener ('click', function (){

    if (cartaoAtual === cartoes.length - 1) return;

    esconderCartaoSelecionado();

    cartaoAtual++;
    cartoes[cartaoAtual].classList.add("selecionado");

});


bntvoltar.addEventListener ('click', function (){

    if (cartaoAtual === 0 ) return;

    esconderCartaoSelecionado();

    cartaoAtual--;
    cartoes[cartaoAtual].classList.add("selecionado");
});

function esconderCartaoSelecionado() {
    const cartaoSelecionado = document.querySelector(".selecionado");
    cartaoSelecionado.classList.remove("selecionado");
}

