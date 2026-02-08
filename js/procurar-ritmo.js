const searchInput = document.getElementById("searchInput");
const produtos = document.querySelectorAll(".produto");

searchInput.addEventListener("input", () => {
    const filtro = searchInput.value.toLowerCase();

    produtos.forEach((produto) => {
        const nome = produto.dataset.nome.toLowerCase();
        produto.style.display = nome.includes(filtro) ? "flex" : "none";
    });
});