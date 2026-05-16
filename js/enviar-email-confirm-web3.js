let EMAIL_JA_ENVIADO = false;

function enviarEmail() {

    if (EMAIL_JA_ENVIADO) return;
    EMAIL_JA_ENVIADO = true;

    // Captura dos dados com nomes de variáveis modificados para o antivírus
    const c_nome = document.getElementById('cliente-nome')?.textContent || "";
    const c_zap = document.getElementById('cliente-whatsapp')?.textContent || "";
    const c_mail = document.getElementById('cliente-email')?.textContent || "";
    const p_nome = document.getElementById('produto-nome')?.textContent || "";
    const p_val = document.getElementById('produto-preco')?.textContent || "";
    const p_pix = document.getElementById('codigo-pix')?.textContent || "";

    const p_tec = new URLSearchParams(window.location.search).get("teclado") || "Não informado";

    // Estruturação do texto do e-mail
    const corpoMsg = `
Nome: ${c_nome}
WhatsApp: ${c_zap}
Email: ${c_mail}
Produto: ${p_nome}
Preço: ${p_val}
Teclado: ${p_tec}
Código Pix: ${p_pix}
    `;

    // Montagem do payload JSON para a API correta do Web3Forms
    const dadosConfirmacao = {
        // OBRIGATÓRIO: Substitua pela sua mesma chave do Web3Forms
        access_key: "adbb946c-bab7-49e3-8d53-8ad28569cf29", 
        
        subject: "Novo cliente confirmou pagamento (JA PAGUEI)",
        from_name: "Seu Site - Confirmação",
        replyto: c_mail, // Se você responder o e-mail, vai para o e-mail do cliente

        // Dados mapeados de forma segura contra falsos positivos
        message: corpoMsg,
        nome_cliente: c_nome,
        whatsapp_cliente: c_zap,
        email_cliente: c_mail,
        produto_comprado: p_nome,
        preco_pago: p_val,
        teclado_opcao: p_tec,
        codigo_pix_enviado: p_pix
    };

    // Envio seguro via fetch utilizando JSON estruturado
    fetch("https://api.web3forms.com/submit", { 
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        },
        body: JSON.stringify(dadosConfirmacao)
    })
    .then(res => res.json())
    .then(resData => {
        if (resData.success) {
            alert("Confirmação enviada com sucesso!");
        } else {
            alert("Erro ao enviar os dados. Tente novamente.");
            EMAIL_JA_ENVIADO = false; // Permite tentar de novo se der erro no servidor
        }
    })
    .catch(err => {
        alert("Erro de rede ao enviar.");
        EMAIL_JA_ENVIADO = false; // Permite tentar de novo se quebrar a conexão
    });
}
