const produtosPorPagina = 20;
let paginaAtual = 1;
const listaProdutos = document.querySelectorAll('.produto');
const btnVoltar = document.getElementById('btn-voltar');
const btnProximo = document.getElementById('btn-proximo');
const indicador = document.getElementById('indicador-pagina');
const vermais = document.getElementById('ver-mais');

function atualizarPagina() {
    const totalProdutos = listaProdutos.length;
    const inicio = (paginaAtual - 1) * produtosPorPagina;
    const fim = inicio + produtosPorPagina;

    // 1. Mostrar/Esconder produtos do intervalo
    listaProdutos.forEach((produto, index) => {
        if (index >= inicio && index < fim) {
            produto.style.display = 'flex';
        } else {
            produto.style.display = 'none';
        }
    });

    // 2. Lógica dos Botões
    // Esconde "Voltar" se estiver na primeira página
    btnVoltar.style.display = (paginaAtual === 1) ? 'none' : 'inline-block';

    // Esconde "Próximo" se estiver na última página
    if (fim >= totalProdutos) {
        btnProximo.style.display = 'none';
        vermais.style.display = 'none'
    } else {
        btnProximo.style.display = 'inline-block';
        vermais.style.display = 'inline-block'
    }

    // 3. Atualiza o texto do indicador (Opcional)
    indicador.innerText = `${paginaAtual}`;
    
    // Rola para o topo ao trocar de página
    window.scrollTo(0, 0);
}

// Eventos de Clique
btnProximo.addEventListener('click', () => {
    paginaAtual++;
    atualizarPagina();
});

btnVoltar.addEventListener('click', () => {
    paginaAtual--;
    atualizarPagina();
});

// Inicializa a visualização
atualizarPagina();
