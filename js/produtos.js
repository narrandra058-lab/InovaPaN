"use strict";

document.addEventListener(
    "DOMContentLoaded",
    () => {

        const form =
            document.getElementById("formProduto");

        const tabela =
            document.getElementById("tabelaProdutos");

        const vazio =
            document.getElementById("produtosVazio");

        const mensagem =
            document.getElementById("mensagemProduto");

        if (!form || !tabela) {
            return;
        }

        function carregarProdutos() {

            const produtos =
                InovaPan.obterDados(
                    InovaPan.CHAVE_PRODUTOS
                );

            tabela.innerHTML = "";

            vazio.style.display =
                produtos.length === 0
                    ? "block"
                    : "none";

            produtos.forEach(produto => {

                tabela.innerHTML += `

                    <tr>

                        <td>
                            <strong>
                                ${InovaPan.escaparHTML(produto.nome)}
                            </strong>
                        </td>

                        <td>
                            ${InovaPan.escaparHTML(produto.descricao || "-")}
                        </td>

                        <td>
                            <strong>
                                ${InovaPan.formatarMoeda(produto.preco)}
                            </strong>
                        </td>

                        <td class="text-end">

                            <button
                                class="btn btn-sm btn-outline-danger"
                                onclick="excluirProduto('${produto.id}')"
                                title="Excluir produto"
                            >

                                <i class="bi bi-trash"></i>

                            </button>

                        </td>

                    </tr>

                `;

            });

        }

        form.addEventListener(
            "submit",
            evento => {

                evento.preventDefault();

                if (!form.checkValidity()) {

                    form.classList.add("was-validated");

                    return;

                }

                const nome =
                    document
                        .getElementById("nomeProduto")
                        .value
                        .trim();

                const descricao =
                    document
                        .getElementById("descricaoProduto")
                        .value
                        .trim();

                const preco =
                    Number(
                        document
                            .getElementById("precoProduto")
                            .value
                    );

                if (preco < 0 || Number.isNaN(preco)) {

                    mostrarMensagem(
                        "Informe um preço válido.",
                        "danger"
                    );

                    return;

                }

                const produtos =
                    InovaPan.obterDados(
                        InovaPan.CHAVE_PRODUTOS
                    );

                produtos.push({

                    id: InovaPan.gerarId(),

                    nome,

                    descricao,

                    preco,

                    criadoEm:
                        new Date().toISOString()

                });

                InovaPan.salvarDados(
                    InovaPan.CHAVE_PRODUTOS,
                    produtos
                );

                form.reset();

                form.classList.remove(
                    "was-validated"
                );

                const modal =
                    bootstrap.Modal.getInstance(
                        document.getElementById(
                            "modalProduto"
                        )
                    );

                if (modal) {
                    modal.hide();
                }

                mostrarMensagem(
                    "Produto cadastrado com sucesso!",
                    "success"
                );

                carregarProdutos();

            }
        );

        window.excluirProduto =
            function(id) {

                const confirmar =
                    confirm(
                        "Deseja realmente excluir este produto?"
                    );

                if (!confirmar) {
                    return;
                }

                let produtos =
                    InovaPan.obterDados(
                        InovaPan.CHAVE_PRODUTOS
                    );

                produtos =
                    produtos.filter(
                        produto =>
                            produto.id !== id
                    );

                InovaPan.salvarDados(
                    InovaPan.CHAVE_PRODUTOS,
                    produtos
                );

                mostrarMensagem(
                    "Produto excluído com sucesso!",
                    "success"
                );

                carregarProdutos();

            };

        function mostrarMensagem(
            texto,
            tipo
        ) {

            mensagem.innerHTML = `

                <div
                    class="alert alert-${tipo} alert-dismissible fade show"
                    role="alert"
                >

                    ${texto}

                    <button
                        type="button"
                        class="btn-close"
                        data-bs-dismiss="alert"
                    ></button>

                </div>

            `;

        }

        carregarProdutos();

    }
);
