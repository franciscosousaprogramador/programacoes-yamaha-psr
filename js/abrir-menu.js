const popup = document.getElementById("popupMenu");
const frame = document.getElementById("popupFrame");

function abrirMenu(e) {
    e.preventDefault();

    frame.src = "utils/qual-seu-teclado.html";
    frame.style.display = "block";

    popup.style.display = "flex";

    if (!history.state || !history.state.popupAberto) {
        history.pushState({ popupAberto: true }, "");
    }
}

document.getElementById("btn1Menu").addEventListener("click", abrirMenu);
document.getElementById("btn2Menu").addEventListener("click", abrirMenu);

document.getElementById("btnFecharMenu").addEventListener("click", () => {
    const popup = document.getElementById("popupMenu");
    const frame = document.getElementById("popupFrame");

    frame.src = "about:blank";   // Limpa imediatamente o conteúdo
    popup.style.display = "none";
});

// Fechar clicando fora
document.getElementById("popupMenu").addEventListener("click", (e) => {
    if (e.target === e.currentTarget) {
        e.currentTarget.style.display = "none";
        document.getElementById("popupFrame").src = ""; // limpa para evitar conflitos
    }
});