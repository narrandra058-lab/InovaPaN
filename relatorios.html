/* =========================================================
   INOVAPAN
   Sistema de Gestão de Pedidos
========================================================= */


/* =========================================================
   PRODUTOS
========================================================= */

const produtosPadrao = [

    {
        id: 1,
        nome: "Pão Francês",
        categoria: "Pães",
        preco: 0.80,
        imagem: "https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=600&q=85",
        descricao: "Pão francês crocante e fresquinho."
    },

    {
        id: 2,
        nome: "Pão de Queijo",
        categoria: "Pães",
        preco: 3.50,
        imagem: "https://images.unsplash.com/photo-1603532648955-039310d9ed75?auto=format&fit=crop&w=600&q=85",
        descricao: "Pão de queijo quentinho e macio."
    },

    {
        id: 3,
        nome: "Bolo de Chocolate",
        categoria: "Bolos",
        preco: 8.50,
        imagem: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=600&q=85",
        descricao: "Bolo de chocolate com cobertura."
    },

    {
        id: 4,
        nome: "Torta de Frango",
        categoria: "Tortas",
        preco: 9.90,
        imagem: "https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=600&q=85",
        descricao: "Torta salgada recheada com frango."
    },

    {
        id: 5,
        nome: "Café Expresso",
        categoria: "Cafés",
        preco: 5.00,
        imagem: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=600&q=85",
        descricao: "Café expresso preparado na hora."
    },

    {
        id: 6,
        nome: "Cappuccino",
        categoria: "Cafés",
        preco: 7.50,
        imagem: "https://images.unsplash.com/photo-1572442388796-11668a67e53d?auto=format&fit=crop&w=600&q=85",
        descricao: "Cappuccino cremoso e aromático."
    },

    {
        id: 7,
        nome: "Chá Natural",
        categoria: "Chás",
        preco: 4.50,
        imagem: "https://images.unsplash.com/photo-1544787219-7f47ccb76574?auto=format&fit=crop&w=600&q=85",
        descricao: "Chá natural preparado com carinho."
    },

    {
        id: 8,
        nome: "Suco Natural",
        categoria: "Sucos",
        preco: 6.00,
        imagem: "https://images.unsplash.com/photo-1600271886742-f049cd451bba?auto=format&fit=crop&w=600&q=85",
        descricao: "Suco natural de frutas."
    }

];


function obterProdutos() {

    let produtos =
        JSON.parse(localStorage.getItem("inovapan_produtos"));

    if (!produtos) {

        localStorage.setItem(
            "inovapan_produtos",
            JSON.stringify(produtosPadrao)
        );

        return produtosPadrao;
    }

    return produtos;
}


/* =========================================================
   FORMATAÇÃO
========================================================= */

function moeda(valor) {

    return Number(valor).toLocaleString(
        "pt-BR",
        {
            style: "currency",
            currency: "BRL"
        }
    );

}


/* =========================================================
   TOAST
========================================================= */

function mostrarToast(mensagem) {

    let toast = document.getElementById("toast");

    if (!toast) return;

    toast.textContent = mensagem;

    toast.classList.add("mostrar");

    setTimeout(() => {

        toast.classList.remove("mostrar");

    }, 2500);

}


/* =========================================================
   LISTA DE PRODUTOS
========================================================= */

function carregarProdutos() {

    const lista =
        document.getElementById("listaProdutos");

    if (!lista) return;

    const busca =
        document.getElementById("buscarProduto")?.value
        .toLowerCase() || "";

    const categoria =
        document.getElementById("filtroCategoria")?.value
        || "todos";

    const produtos = obterProdutos();

    const filtrados = produtos.filter(produto => {

        const correspondeBusca =
            produto.nome
                .toLowerCase()
                .includes(busca);

        const correspondeCategoria =
            categoria === "todos" ||
            produto.categoria === categoria;

        return correspondeBusca && correspondeCategoria;

    });


    lista.innerHTML = "";


    filtrados.forEach(produto => {

        lista.innerHTML += `

        <div class="produto-card">

            <img
                class="produto-foto"
                src="${produto.imagem}"
                alt="${produto.nome}"
            >

            <div class="produto-info">

                <span class="produto-categoria">
                    ${produto.categoria}
                </span>

                <h3>
                    ${produto.nome}
                </h3>

                <p>
                    ${produto.descricao}
                </p>

                <div class="produto-rodape">

                    <span class="preco">
                        ${moeda(produto.preco)}
                    </span>

                    <button
                        class="btn-add"
                        onclick="adicionarCarrinho(
                            '${produto.nome}',
                            ${produto.preco},
                            '${produto.imagem}'
                        )"
                    >

                        <i class="bi bi-plus-lg"></i>

                    </button>

                </div>

            </div>

        </div>

        `;

    });

}


document
    .getElementById("buscarProduto")
    ?.addEventListener(
        "input",
        carregarProdutos
    );


document
    .getElementById("filtroCategoria")
    ?.addEventListener(
        "change",
        carregarProdutos
    );


/* =========================================================
   CADASTRAR PRODUTO
========================================================= */

document
    .getElementById("formProduto")
    ?.addEventListener(
        "submit",
        function(event) {

            event.preventDefault();


            const nome =
                document.getElementById("nomeProduto").value;

            const categoria =
                document.getElementById("categoriaProduto").value;

            const preco =
                Number(
                    document.getElementById("precoProduto").value
                );


            const produtos = obterProdutos();


            produtos.push({

                id: Date.now(),

                nome,

                categoria,

                preco,

                descricao:
                    "Produto cadastrado no InovaPan.",

                imagem:
                    "https://images.unsplash.com/photo-1555507036-ab1f4038808a?auto=format&fit=crop&w=600&q=85"

            });


            localStorage.setItem(
                "inovapan_produtos",
                JSON.stringify(produtos)
            );


            event.target.reset();


            bootstrap.Modal
                .getInstance(
                    document.getElementById("modalProduto")
                )
                ?.hide();


            carregarProdutos();

            mostrarToast(
                "Produto cadastrado com sucesso!"
            );

        }
    );


/* =========================================================
   CLIENTES
========================================================= */

function obterClientes() {

    return JSON.parse(
        localStorage.getItem("inovapan_clientes")
    ) || [];

}


function carregarClientes() {

    const tabela =
        document.getElementById("listaClientes");

    if (!tabela) return;


    const clientes = obterClientes();

    const busca =
        document.getElementById("buscarCliente")
        ?.value
        .toLowerCase() || "";


    const filtrados =
        clientes.filter(cliente =>

            cliente.nome
                .toLowerCase()
                .includes(busca) ||

            cliente.telefone
                .toLowerCase()
                .includes(busca) ||

            cliente.email
                .toLowerCase()
                .includes(busca)

        );


    tabela.innerHTML = "";


    if (filtrados.length === 0) {

        tabela.innerHTML = `

        <tr>

            <td colspan="5" class="text-center py-5">

                <i class="bi bi-people fs-2 text-muted"></i>

                <p class="mt-2 text-muted">
                    Nenhum cliente cadastrado.
                </p>

            </td>

        </tr>

        `;

        return;
    }


    filtrados.forEach(cliente => {

        const inicial =
            cliente.nome.charAt(0).toUpperCase();


        tabela.innerHTML += `

        <tr>

            <td>

                <div class="cliente-nome">

                    <div class="avatar-cliente">
                        ${inicial}
                    </div>

                    <strong>
                        ${cliente.nome}
                    </strong>

                </div>

            </td>


            <td>
                ${cliente.telefone}
            </td>


            <td>
                ${cliente.email}
            </td>


            <td>
                ${cliente.endereco}
            </td>


            <td>

                <button
                    class="btn-tabela"
                    onclick="excluirCliente(${cliente.id})"
                >

                    <i class="bi bi-trash"></i>

                </button>

            </td>

        </tr>

        `;

    });

}


document
    .getElementById("buscarCliente")
    ?.addEventListener(
        "input",
        carregarClientes
    );


/* =========================================================
   FORM CLIENTE
========================================================= */

document
    .getElementById("formCliente")
    ?.addEventListener(
        "submit",
        function(event) {

            event.preventDefault();


            const cliente = {

                id: Date.now(),

                nome:
                    document.getElementById("nomeCliente").value,

                telefone:
                    document.getElementById("telefoneCliente").value,

                email:
                    document.getElementById("emailCliente").value,

                endereco:
                    document.getElementById("enderecoCliente").value

            };


            const clientes = obterClientes();

            clientes.push(cliente);


            localStorage.setItem(
                "inovapan_clientes",
                JSON.stringify(clientes)
            );


            event.target.reset();


            bootstrap.Modal
                .getInstance(
                    document.getElementById("modalCliente")
                )
                ?.hide();


            carregarClientes();

            carregarSelectClientes();


            mostrarToast(
                "Cliente cadastrado com sucesso!"
            );

        }
    );


/* =========================================================
   EXCLUIR CLIENTE
========================================================= */

function excluirCliente(id) {

    const clientes =
        obterClientes()
        .filter(cliente => cliente.id !== id);


    localStorage.setItem(
        "inovapan_clientes",
        JSON.stringify(clientes)
    );


    carregarClientes();

    carregarSelectClientes();

    mostrarToast(
        "Cliente removido."
    );

}


/* =========================================================
   PEDIDOS / CARRINHO
========================================================= */

let carrinho =
    JSON.parse(
        localStorage.getItem("inovapan_carrinho")
    ) || [];


function adicionarCarrinho(
    nome,
    preco,
    imagem
) {

    const item =
        carrinho.find(
            produto => produto.nome === nome
        );


    if (item) {

        item.quantidade++;

    } else {

        carrinho.push({

            nome,

            preco,

            imagem,

            quantidade: 1

        });

    }


    salvarCarrinho();

    renderizarCarrinho();

    mostrarToast(
        `${nome} adicionado ao pedido!`
    );

}


function salvarCarrinho() {

    localStorage.setItem(
        "inovapan_carrinho",
        JSON.stringify(carrinho)
    );

}


function alterarQuantidade(
    nome,
    quantidade
) {

    const item =
        carrinho.find(
            produto => produto.nome === nome
        );


    if (!item) return;


    item.quantidade += quantidade;


    if (item.quantidade <= 0) {

        carrinho =
            carrinho.filter(
                produto => produto.nome !== nome
            );

    }


    salvarCarrinho();

    renderizarCarrinho();

}


function renderizarCarrinho() {

    const lista =
        document.getElementById("carrinhoLista");

    const total =
        document.getElementById("totalCarrinho");


    if (!lista || !total) return;


    if (carrinho.length === 0) {

        lista.innerHTML = `

        <div class="text-center py-4 text-muted">

            <i class="bi bi-basket fs-2"></i>

            <p class="mt-2">
                Seu carrinho está vazio.
            </p>

        </div>

        `;

        total.textContent = "R$ 0,00";

        return;
    }


    let valorTotal = 0;


    lista.innerHTML = "";


    carrinho.forEach(item => {

        const subtotal =
            item.preco * item.quantidade;


        valorTotal += subtotal;


        lista.innerHTML += `

        <div class="carrinho-item">

            <img
                src="${item.imagem}"
                alt="${item.nome}"
            >

            <div class="carrinho-item-info">

                <strong>
                    ${item.nome}
                </strong>

                <small>
                    ${moeda(subtotal)}
                </small>

            </div>


            <div class="quantidade">

                <button
                    onclick="alterarQuantidade(
                        '${item.nome}',
                        -1
                    )"
                >
                    -
                </button>

                <span>
                    ${item.quantidade}
                </span>

                <button
                    onclick="alterarQuantidade(
                        '${item.nome}',
                        1
                    )"
                >
                    +
                </button>

            </div>

        </div>

        `;

    });


    total.textContent =
        moeda(valorTotal);

}


/* =========================================================
   SELECT DE CLIENTES
========================================================= */

function carregarSelectClientes() {

    const select =
        document.getElementById("clientePedido");

    if (!select) return;


    const clientes =
        obterClientes();


    select.innerHTML =
        `<option value="">
            Selecione o cliente
        </option>`;


    clientes.forEach(cliente => {

        select.innerHTML += `

        <option value="${cliente.id}">

            ${cliente.nome}

        </option>

        `;

    });

}


/* =========================================================
   FINALIZAR PEDIDO
========================================================= */

function finalizarPedido() {

    if (carrinho.length === 0) {

        mostrarToast(
            "Adicione pelo menos um produto."
        );

        return;
    }


    const cliente =
        document.getElementById("clientePedido")?.value;


    if (!cliente) {

        mostrarToast(
            "Selecione um cliente."
        );

        return;
    }


    let pedidos =
        JSON.parse(
            localStorage.getItem("inovapan_pedidos")
        ) || [];


    const total =
        carrinho.reduce(
            (soma, item) =>
                soma + item.preco * item.quantidade,
            0
        );


    pedidos.push({

        id: Date.now(),

        cliente,

        itens: carrinho,

        total,

        data: new Date().toISOString()

    });


    localStorage.setItem(
        "inovapan_pedidos",
        JSON.stringify(pedidos)
    );


    carrinho = [];


    salvarCarrinho();

    renderizarCarrinho();


    mostrarToast(
        "Pedido finalizado com sucesso!"
    );

}


/* =========================================================
   DASHBOARD
========================================================= */

function carregarDashboard() {

    const clientes =
        obterClientes();

    const produtos =
        obterProdutos();

    const pedidos =
        JSON.parse(
            localStorage.getItem("inovapan_pedidos")
        ) || [];


    const vendas =
        pedidos.reduce(
            (soma, pedido) =>
                soma + pedido.total,
            0
        );


    const totalClientes =
        document.getElementById("totalClientes");

    const totalProdutos =
        document.getElementById("totalProdutos");

    const totalPedidos =
        document.getElementById("totalPedidos");

    const totalVendas =
        document.getElementById("totalVendas");


    if (totalClientes)
        totalClientes.textContent =
            clientes.length;


    if (totalProdutos)
        totalProdutos.textContent =
            produtos.length;


    if (totalPedidos)
        totalPedidos.textContent =
            pedidos.length;


    if (totalVendas)
        totalVendas.textContent =
            moeda(vendas);


    const relatorioVendas =
        document.getElementById("relatorioVendas");

    const relatorioPedidos =
        document.getElementById("relatorioPedidos");

    const ticketMedio =
        document.getElementById("ticketMedio");


    if (relatorioVendas)
        relatorioVendas.textContent =
            moeda(vendas);


    if (relatorioPedidos)
        relatorioPedidos.textContent =
            pedidos.length;


    if (ticketMedio) {

        ticketMedio.textContent =
            pedidos.length
                ? moeda(vendas / pedidos.length)
                : "R$ 0,00";

    }

}


/* =========================================================
   INICIALIZAÇÃO
========================================================= */

document.addEventListener(
    "DOMContentLoaded",
    function() {

        obterProdutos();

        carregarProdutos();

        carregarClientes();

        carregarSelectClientes();

        renderizarCarrinho();

        carregarDashboard();

    }
);
