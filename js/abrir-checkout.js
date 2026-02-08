let TECLADO_SELECIONADO = "";

function abrirCheckout() {
    document.getElementById("overlay").style.display = "flex";
    document.body.classList.add("desfocado");
}

function fecharCheckout() {
    document.getElementById("overlay").style.display = "none";
    document.body.classList.remove("desfocado");
}

function abrirCheckoutComDados(botao) {
    const nome = botao.dataset.nome;
    const preco = botao.dataset.preco;
    const imagem = botao.dataset.imagem;

    document.getElementById("popup-nome").textContent = nome;
    document.getElementById("popup-preco").textContent = `R$ ${preco}`;
    document.getElementById("popup-imagem").src = imagem;

    TECLADO_SELECIONADO = botao.dataset.teclado || "";

    document.getElementById("form-checkout").dataset.teclado =
        botao.dataset.teclado || "Não informado";

    abrirCheckout();

    document.getElementById("overlay").style.display = "flex";
    document.body.classList.add("desfocado");
}

function fecharCheckout() {
    document.getElementById("overlay").style.display = "none";
    document.body.classList.remove("desfocado");
}