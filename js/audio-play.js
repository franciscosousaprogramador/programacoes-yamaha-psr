let audioAtual = null;
let botaoAtual = null;
let imagemAtual = null;
let blocoAtual = null;

function tocarOuPausar(botao, audioId) {
    const audio = document.getElementById(audioId);
    const produto = botao.closest(".produto");
    const imagem = produto.querySelector("img");
    const svg = botao.querySelector(".icone");

    // Se outro áudio estiver tocando, pare ele
    if (audioAtual && audioAtual !== audio) {
        audioAtual.pause();
        audioAtual.currentTime = 0;
        if (botaoAtual) {
            const svgAnterior = botaoAtual.querySelector(".icone");
            svgAnterior.innerHTML = '<polygon points="8,5 19,12 8,19"></polygon>'; // Ícone Play
        }
        if (imagemAtual) imagemAtual.classList.remove("img-ativa");
        if (blocoAtual) blocoAtual.classList.remove("ativo");
    }

    if (audio === audioAtual) {
        // Parar o mesmo áudio
        audio.pause();
        audio.currentTime = 0;
        svg.innerHTML = '<polygon points="8,5 19,12 8,19"></polygon>'; // Volta pro Play
        imagem.classList.remove("img-ativa");
        produto.classList.remove("ativo");
        audioAtual = null;
        botaoAtual = null;
        imagemAtual = null;
        blocoAtual = null;
    } else {
        // Tocar o novo áudio
        audio.play();
        svg.innerHTML = '<rect x="7" y="5" width="2" height="14" rx="2" stroke="none" fill="#4caf50"></rect><rect x="14" y="5" width="2" height="14" rx="2" stroke="none" fill="#4caf50"></rect>'; // Pause
        imagem.classList.add("img-ativa");
        produto.classList.add("ativo");
        audioAtual = audio;
        botaoAtual = botao;
        imagemAtual = imagem;
        blocoAtual = produto;

        // Ao terminar o áudio
        audio.onended = () => {
            svg.innerHTML = '<polygon points="8,5 19,12 8,19"></polygon>'; // Volta pro Play
            imagem.classList.remove("img-ativa");
            produto.classList.remove("ativo");
            audioAtual = null;
            botaoAtual = null;
            imagemAtual = null;
            blocoAtual = null;
        };
    }
}