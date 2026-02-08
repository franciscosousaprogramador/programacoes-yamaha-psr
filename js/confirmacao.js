document.querySelector("form").addEventListener("submit", function (e) {
    e.preventDefault();

    const nome = document.getElementById("nome").value.trim();
    const whatsapp = document.getElementById("whatsapp").value.trim();
    const email = document.getElementById("email").value.trim();
    const produto = document.getElementById("popup-nome").textContent;
    const preco = document.getElementById("popup-preco").textContent;
    const imagem = document.getElementById("popup-imagem").src;

    const teclado = TECLADO_SELECIONADO;

    const url = `confirmacao.html?nome=${encodeURIComponent(nome)}
        &whatsapp=${encodeURIComponent(whatsapp)}
        &email=${encodeURIComponent(email)}
        &produto=${encodeURIComponent(produto)}
        &preco=${encodeURIComponent(preco)}
        &imagem=${encodeURIComponent(imagem)}

        &teclado=${encodeURIComponent(teclado)}
    `;

    enviarEmailCheckout(() => {
        window.location.href = url;
    });
});