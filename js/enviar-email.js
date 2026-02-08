let EMAIL_JA_ENVIADO = false;

function enviarEmail() {

    if (EMAIL_JA_ENVIADO) return;
    EMAIL_JA_ENVIADO = true;

    const nome = document.getElementById('cliente-nome').textContent;
    const whatsapp = document.getElementById('cliente-whatsapp').textContent;
    const email = document.getElementById('cliente-email').textContent;
    const produto = document.getElementById('produto-nome').textContent;
    const preco = document.getElementById('produto-preco').textContent;
    const codigoPix = document.getElementById('codigo-pix').textContent;

    const teclado = new URLSearchParams(window.location.search).get("teclado") || "Não informado";

    // Corpo da mensagem
    const mensagem = `
Nome: ${nome}
WhatsApp: ${whatsapp}
Email: ${email}
Produto: ${produto}
Preço: ${preco}
Teclado: ${teclado}
Código Pix: ${codigoPix}
    `;

    // Criar objeto FormData com os campos para enviar
    const formData = new FormData();
    formData.append("message", mensagem);
    formData.append("nome", nome);
    formData.append("whatsapp", whatsapp);
    formData.append("email", email);
    formData.append("produto", produto);
    formData.append("preco", preco);
    formData.append("teclado", teclado);
    formData.append("codigo_pix", codigoPix);

    formData.append("_captcha", "false");
    formData.append("_template", "table");
    formData.append("_subject", "Novo cliente confirmou pagamento (JA PAGUEI)");
    formData.append("_autoresponse", "Recebemos sua confirmação de pagamento! Estamos verificando.");

    formData.append("_next", window.location.href);

    // Enviar via AJAX (fetch)
    fetch("https://formsubmit.co/fs338162@gmail.com", { //https://formsubmit.co/fs338162@gmail.com
        method: "POST",
        body: formData
    })
    .then(response => {
        if (response.ok) {
            alert("Confirmação enviada com sucesso!");
        } else {
            alert("Erro ao enviar os dados. Tente novamente.");
        }
    })
    .catch(error => {
        alert("Erro ao enviar: " + error);
    });
}
