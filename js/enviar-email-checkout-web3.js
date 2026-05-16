function enviarEmailCheckout(onFinish) {

    const nome = document.getElementById("nome")?.value.trim() || "Cliente";
    const whatsapp = document.getElementById("whatsapp")?.value.trim() || "";
    const email = document.getElementById("email")?.value.trim() || "";

    const produto = document.getElementById("popup-nome")?.textContent || "";
    const preco = document.getElementById("popup-preco")?.textContent || "";

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

    // Criamos o objeto JSON que o Web3Forms precisa
    const payload = {
        // OBRIGATÓRIO: Cole aqui a chave que você recebeu por e-mail do Web3Forms
        access_key: "adbb946c-bab7-49e3-8d53-8ad28569cf29", 
        
        // Configurações de exibição do e-mail (equivalentes às do FormSubmit)
        subject: "Nova compra realizada (aguardando pagamento)",
        from_name: "Seu Site - Checkout", 

        // Dados estruturados que irão no corpo do e-mail
        message: mensagem,
        status: "Aguardando pagamento",
        nome: nome,
        whatsapp: whatsapp,
        email: email,
        produto: produto,
        preco: preco,
        teclado: teclado
    };

    // Fazemos a requisição utilizando JSON puro (evita 100% erros de CORS no Web3Forms)
    fetch("https://web3forms.com", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        },
        body: JSON.stringify(payload)
    })
    .then(response => response.json())
    .then(data => {
        if (data.success) {
            // Verifica se a função onFinish foi passada corretamente antes de executá-la
            if (typeof onFinish === "function") {
                onFinish();
            } else {
                console.log("E-mail enviado, mas onFinish não é uma função.");
            }
        } else {
            alert("Erro no servidor de e-mail: " + data.message);
        }
    })
    .catch(error => {
        alert("Erro de rede ao enviar: " + error.message);
    });
}
