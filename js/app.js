"use strict";

/* =========================
   CONFIGURAÇÕES
========================= */

const CHAVE_CLIENTES = "inovapan_clientes";
const CHAVE_PRODUTOS = "inovapan_produtos";
const CHAVE_PEDIDOS = "inovapan_pedidos";

/* =========================
   FUNÇÕES GERAIS
========================= */

function obterDados(chave) {

    try {

        return JSON.parse(localStorage.getItem(chave)) || [];

    } catch (erro) {

        console.error("Erro ao carregar dados:", erro);

        return [];

    }

}

function salvarDados(chave, dados) {

    localStorage.setItem(
        chave,
        JSON.stringify(dados)
    );

}

function formatarMoeda(valor) {

    return Number(valor || 0).toLocaleString(
        "pt-BR",
        {
            style: "currency",
            currency: "BRL"
        }
    );

}

function gerarId() {

    return Date.now().toString() +
        Math.random().toString(16).slice(2);

}

function escaparHTML(texto) {

    const div = document.createElement("div");

    div.textContent = texto ?? "";

    return div.innerHTML;

}

/* =========================
   ANO
========================= */

function atualizarAno() {

    document.querySelectorAll(".ano-atual")
        .forEach(elemento => {

            elemento.textContent =
                new Date().getFullYear();

        });

}

/* =========================
   DASHBOARD
========================= */

function carregarDashboard() {

    const elementoClientes =
        document.getElementById("totalClientes");

    if (!elementoClientes) {
        return;
    }

    const clientes =
        obterDados(CHAVE_CLIENTES);

    const produtos =
        obterDados(CHAVE_PRODUTOS);

    const pedidos =
        obterDados(CHAVE_PEDIDOS);

    const totalVendas =
        pedidos.reduce(
            (total, pedido) =>
                total + Number(pedido.total || 0),
            0
        );

    document.getElementById("totalClientes")
        .textContent = clientes.length;

    document.getElementById("totalProdutos")
        .textContent = produtos.length;

    document.getElementById("totalPedidos")
        .textContent = pedidos.length;

    document.getElementById("valorVendas")
        .textContent = formatarMoeda(totalVendas);

    carregarPedidosRecentes(pedidos);

}

function carregarPedidosRecentes(pedidos) {

    const tabela =
        document.getElementById(
            "tabelaPedidosRecentes"
        );

    if (!tabela) {
        return;
    }

    tabela.innerHTML = "";

    const recentes =
        [...pedidos]
            .sort(
                (a, b) =>
                    new Date(b.criadoEm) -
                    new Date(a.criadoEm)
            )
            .slice(0, 5);

    if (recentes.length === 0) {

        tabela.innerHTML = `
            <tr>
                <td colspan="5" class="text-center text-muted py-4">
                    Nenhum pedido registrado.
                </td>
            </tr>
        `;

        return;
    }

    recentes.forEach(pedido => {

        const data =
            new Date(pedido.criadoEm)
                .toLocaleDateString("pt-BR");

        tabela.innerHTML += `
            <tr>

                <td>
                    #${escaparHTML(pedido.id.slice(-6))}
                </td>

                <td>
                    ${escaparHTML(pedido.clienteNome)}
                </td>

                <td>
                    ${data}
                </td>

                <td>
                    ${formatarMoeda(pedido.total)}
                </td>

                <td>
                    <span class="badge text-bg-warning">
                        ${escaparHTML(pedido.status || "Pendente")}
                    </span>
                </td>

            </tr>
        `;

    });

}

/* =========================
   RELATÓRIOS
========================= */

function carregarRelatorios() {

    const elemento =
        document.getElementById("relatorioClientes");

    if (!elemento) {
        return;
    }

    const clientes =
        obterDados(CHAVE_CLIENTES);

    const produtos =
        obterDados(CHAVE_PRODUTOS);

    const pedidos =
        obterDados(CHAVE_PEDIDOS);

    const totalVendas =
        pedidos.reduce(
            (total, pedido) =>
                total + Number(pedido.total || 0),
            0
        );

    const ticketMedio =
        pedidos.length > 0
            ? totalVendas / pedidos.length
            : 0;

    document.getElementById("relatorioClientes")
        .textContent = clientes.length;

    document.getElementById("relatorioProdutos")
        .textContent = produtos.length;

    document.getElementById("relatorioPedidos")
        .textContent = pedidos.length;

    document.getElementById("relatorioVendas")
        .textContent = formatarMoeda(totalVendas);

    document.getElementById("ticketMedio")
        .textContent = formatarMoeda(ticketMedio);

}

/* =========================
   INICIALIZAÇÃO
========================= */

document.addEventListener(
    "DOMContentLoaded",
    () => {

        atualizarAno();

        carregarDashboard();

        carregarRelatorios();

    }
);

/* =========================
   ACESSO GLOBAL
========================= */

window.InovaPan = {

    CHAVE_CLIENTES,
    CHAVE_PRODUTOS,
    CHAVE_PEDIDOS,

    obterDados,
    salvarDados,
    formatarMoeda,
    gerarId,
    escaparHTML

};
