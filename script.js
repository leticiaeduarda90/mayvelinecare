function adicionarProduto(produto) {
    alert(
        "✨ " + produto +
        " foi adicionado à sua seleção!\n\n" +
        "Em breve você poderá finalizar sua compra."
    );
}

const links = document.querySelectorAll("nav a");

links.forEach(link => {

    link.addEventListener("click", function() {

        links.forEach(item => {
            item.style.opacity = "1";
        });

        this.style.opacity = "0.55";
        const botoesComprar = document.querySelectorAll(".btn-comprar");

botoesComprar.forEach(function(botao) {

    botao.addEventListener("click", function() {

        alert("✨ Produto adicionado ao carrinho!");

    });

});

    });

});