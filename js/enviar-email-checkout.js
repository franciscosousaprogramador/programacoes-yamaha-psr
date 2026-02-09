function enviarEmailCheckout(onFinish) {

    const nome = document.getElementById("nome")?.value.trim() || "Cliente";
    const whatsapp = document.getElementById("whatsapp")?.value.trim() || "";
    const email = document.getElementById("email")?.value.trim() || "";

    const produto = document.getElementById("popup-nome")?.textContent || "";
    const preco = document.getElementById("popup-preco")?.textContent || "";

    /*const teclado = new URLSearchParams(window.location.search).get("teclado") || "Não informado";*/

    const teclado = document.getElementById("form-checkout").dataset.teclado || "Não informado";

    const mensagem = `
Status: Compra realizada - aguardando pagamento

Nome: ${nome}
WhatsApp: ${whatsapp}
Email: ${email}

Produto: ${produto}
Teclado: ${teclado}
Preço: ${preco}
    `;

    const formData = new FormData();
    formData.append("message", mensagem);
    formData.append("status", "Aguardando pagamento");
    formData.append("nome", nome);
    formData.append("whatsapp", whatsapp);
    formData.append("email", email);
    formData.append("produto", produto);
    formData.append("preco", preco);
    formData.append("teclado", teclado);

    formData.append("_captcha", "false");
    formData.append("_template", "table");
    formData.append("_subject", "Nova compra realizada (aguardando pagamento)");

    fetch("https://formsubmit.co/francisco.sousa2025.22@gmail.com", {
        method: "POST",
        body: formData
    })
    .then(() => onFinish())
    .catch(error => {
        alert("Erro ao enviar: " + error);
    });
}
