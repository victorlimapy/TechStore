class Produto {
    constructor(codigo, nome, categoria, preco, estoque, imagem) {
        this.codigo = codigo;
        this.nome = nome;
        this.categoria = categoria;
        this.preco = preco;
        this.estoque = estoque;
        this.imagem = imagem;
    }
}

const produtos = [
    new Produto(1, "Notebook Alienware Aurora 16", "Informática", 7500, 5, "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2r3KEtrqh4vMcNraPaS7RPn4mlfdQTB7YkCmfjmSZJGcdVsV_SX6PbxA&s=10"),
    new Produto(2, "Placa de Vídeo GeForce RTX 5060", "Informática", 2700, 10, "https://images.tcdn.com.br/img/img_prod/1040701/placa_de_video_geforce_rtx_5060_8gb_gigabyte_gv_n5060wf2_8gd_6823_1_4ba75efc8da20514deb001253b6a2a8a.png"),
    new Produto(3, "Headset Gamer 7.1 Edifier Branco", "Acessórios", 299, 30, "https://edifier.com.br/pub/media/wysiwyg/Edifier/G2S/Som7_G2s.jpg"),
    new Produto(4, "Marvel's Wolverine", "Games", 320, 10, "https://m.media-amazon.com/images/I/81MLeOjHBEL._AC_UF1000,1000_QL80_.jpg"),
    new Produto(5, "Teclado Mecânico RGB", "Acessórios", 140, 20, "https://s.zst.com.br/cms-assets/2021/12/teclado-mec-nico-rgb-abertura_easy-resize.com.webp"),
    new Produto(6, "GTA VI - Pré-venda", "Games", 360, 0, "https://m.media-amazon.com/images/I/81o4MCqBv5L._AC_UF1000,1000_QL80_.jpg")
];

const formatarMoeda = valor => valor.toFixed(2).replace(".", ",");
var taxaDesconto = 0.10;

class Carrinho {
    constructor() {
        this.itens = [];
    }

    adicionarProduto(produto) {
        const item = this.itens.find(item => item.codigo === produto.codigo);
        const quantidadeNoCarrinho = item ? item.quantidade : 0;

        if (quantidadeNoCarrinho >= produto.estoque) {
            alert("Não há mais unidades disponíveis em estoque.");
            return;
        }

        if (item) {
            item.quantidade++;
        } else {
            this.itens.push({
                codigo: produto.codigo,
                nome: produto.nome,
                imagem: produto.imagem,
                preco: produto.preco,
                estoque: produto.estoque,
                quantidade: 1
            });
        }

        renderizarCarrinho();
        exibirProdutos();
    }

    aumentarQuantidade(codigo) {
        const item = this.itens.find(item => item.codigo === codigo);

        if (!item) return;

        if (item.quantidade >= item.estoque) {
            alert("Você atingiu o limite de estoque disponível.");
            return;
        }

        item.quantidade++;
        renderizarCarrinho();
        exibirProdutos();
    }

    diminuirQuantidade(codigo) {
        const item = this.itens.find(item => item.codigo === codigo);

        if (!item) return;

        item.quantidade--;

        if (item.quantidade <= 0) {
            this.removerProduto(codigo);
        } else {
            renderizarCarrinho();
            exibirProdutos();
        }
    }

    removerProduto(codigo) {
        this.itens = this.itens.filter(item => item.codigo !== codigo);
        renderizarCarrinho();
        exibirProdutos();
    }

    limpar() {
        this.itens = [];
        renderizarCarrinho();
        exibirProdutos();
    }

    calcularSubtotal() {
        return this.itens.reduce(
            (total, item) => total + item.preco * item.quantidade,
            0
        );
    }

    calcularDesconto() {
        const subtotal = this.calcularSubtotal();
        return subtotal >= 300 ? subtotal * taxaDesconto : 0;
    }

    calcularTotal() {
        return this.calcularSubtotal() - this.calcularDesconto();
    }
}

const carrinho = new Carrinho();
let categoriaAplicada = "Todos";

function exibirProdutos() {
    const lista = document.getElementById("lista-produtos");

    const busca = document
        .getElementById("input-busca")
        .value
        .trim()
        .toLocaleLowerCase("pt-BR");

    const filtrados = produtos.filter(produto =>
        produto.nome.toLocaleLowerCase("pt-BR").includes(busca) &&
        (categoriaAplicada === "Todos" || produto.categoria === categoriaAplicada)
    );

    while (lista.firstChild) {
        lista.removeChild(lista.firstChild);
    }

    for (let i = 0; i < filtrados.length; i++) {
        const produto = filtrados[i];
        const itemNoCarrinho = carrinho.itens.find(
            item => item.codigo === produto.codigo
        );
        const quantidadeNoCarrinho = itemNoCarrinho
            ? itemNoCarrinho.quantidade
            : 0;
        const estoqueDisponivel = produto.estoque - quantidadeNoCarrinho;
        const card = document.createElement("div");
        card.className = "card-produto";

        card.innerHTML = `
            <img src="${produto.imagem}" alt="${produto.nome}">
            <h3>${produto.nome}</h3>
            <span class="categoria-tag">${produto.categoria}</span>
            <p class="preco">R$ ${formatarMoeda(produto.preco)}</p>
            <p class="disponibilidade">
                ${estoqueDisponivel === 0
                    ? "Indisponível"
                    : `Em estoque: ${estoqueDisponivel}`}
            </p>
        `;

        const botao = document.createElement("button");

        botao.className = "btn-adicionar";

        botao.textContent =
            estoqueDisponivel === 0
                ? "Sem estoque"
                : "Adicionar ao carrinho";

        botao.disabled = estoqueDisponivel === 0;

        botao.addEventListener("click", () =>
            carrinho.adicionarProduto(produto)
        );

        card.appendChild(botao);
        lista.appendChild(card);
    }

    const mensagem = document.getElementById("mensagem-busca");

    if (filtrados.length === 0) {
        mensagem.textContent = "Nenhum produto encontrado.";
    } else {
        mensagem.textContent = "";
    }
}

function renderizarCarrinho() {
    const lista = document.getElementById("itens-carrinho");

    lista.innerHTML = "";

    carrinho.itens.forEach(item => {
        const linha = document.createElement("div");

        linha.className = "item-carrinho";

        linha.innerHTML = `
            <div class="produto-carrinho-detalhe">
                <img src="${item.imagem}" alt="${item.nome}" class="img-carrinho">
                <div class="info-item">
                    <h4>${item.nome}</h4>
                    <p>R$ ${formatarMoeda(item.preco)} cada</p>
                </div>
            </div>

            <div class="controles-quantidade">
                <button 
                    class="btn-menos" 
                    type="button" 
                    aria-label="Diminuir ${item.nome}">
                    -
                </button>

                <span class="quantidade">
                    ${item.quantidade}
                </span>

                <button 
                    class="btn-mais" 
                    type="button" 
                    aria-label="Aumentar ${item.nome}"
                    ${item.quantidade >= item.estoque ? "disabled" : ""}>
                    +
                </button>
            </div>

            <div class="total-item">
                <span>
                    R$ ${formatarMoeda(item.preco * item.quantidade)}
                </span>
            </div>

            <button 
                class="btn-remover" 
                type="button" 
                aria-label="Remover ${item.nome}">
                X
            </button>
        `;

        linha
            .querySelector(".btn-menos")
            .addEventListener("click", () =>
                carrinho.diminuirQuantidade(item.codigo)
            );

        linha
            .querySelector(".btn-mais")
            .addEventListener("click", () =>
                carrinho.aumentarQuantidade(item.codigo)
            );

        linha
            .querySelector(".btn-remover")
            .addEventListener("click", () =>
                carrinho.removerProduto(item.codigo)
            );

        lista.appendChild(linha);
    });

    const quantidade = carrinho.itens.reduce(
        (total, item) => total + item.quantidade,
        0
    );

    document.getElementById("contador-carrinho").textContent = quantidade;

    document.getElementById("resumo-qtd-itens").textContent = quantidade;

    document.getElementById("resumo-subtotal").textContent =
        formatarMoeda(carrinho.calcularSubtotal());

    document.getElementById("resumo-desconto").textContent =
        formatarMoeda(carrinho.calcularDesconto());

    document.getElementById("resumo-total").textContent =
        formatarMoeda(carrinho.calcularTotal());

}

function finalizarCompra() {
    if (carrinho.itens.length === 0) {
        alert(
            "Adicione pelo menos um produto ao carrinho antes de finalizar a compra."
        );
        return;
    }

    const resumo = document.getElementById("resumo-final-modal");

    const itens = carrinho.itens
        .map(item =>
            `<li>${item.nome} — ${item.quantidade} × R$ ${formatarMoeda(item.preco)}</li>`
        )
        .join("");

    resumo.innerHTML = `
        <ul>${itens}</ul>
        <p>Subtotal: R$ ${formatarMoeda(carrinho.calcularSubtotal())}</p>
        <p>Desconto: R$ ${formatarMoeda(carrinho.calcularDesconto())}</p>
        <h3>Total: R$ ${formatarMoeda(carrinho.calcularTotal())}</h3>
    `;

    document
        .getElementById("modal-sucesso")
        .classList
        .replace("modal-oculto", "modal-ativo");
}

document
    .getElementById("input-busca")
    .addEventListener("input", exibirProdutos);

document
    .getElementById("btn-buscar")
    .addEventListener("click", () => {
        categoriaAplicada = document.getElementById("filtro-categoria").value;
        exibirProdutos();
    });

document
    .getElementById("btn-finalizar-compra")
    .addEventListener("click", finalizarCompra);

document
    .getElementById("btn-fechar-modal")
    .addEventListener("click", () => {
        document
            .getElementById("modal-sucesso")
            .classList
            .replace("modal-ativo", "modal-oculto");

        carrinho.limpar();
    });

document
    .getElementById("btn-abrir-carrinho")
    .addEventListener("click", () => {
        document
            .getElementById("painel-carrinho")
            .scrollIntoView({
                behavior: "smooth",
                block: "start"
            });
    });

exibirProdutos();
renderizarCarrinho();
