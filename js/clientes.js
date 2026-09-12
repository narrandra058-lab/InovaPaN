"use strict";

document.addEventListener(
    "DOMContentLoaded",
    () => {

        const form =
            document.getElementById("formCliente");

        const tabela =
            document.getElementById("tabelaClientes");

        const vazio =
            document.getElementById("clientesVazio");

        const mensagem =
            document.getElementById("mensagemCliente");

        if (!form || !tabela) {
            return;
        }

        function carregarClientes() {

            const clientes =
                InovaPan.obterDados(
                    InovaPan.CHAVE_CLIENTES
                );

            tabela.innerHTML = "";

            vazio.style.display =
                clientes.length === 0
                    ? "block"
                    : "none";

            clientes.forEach(cliente => {

                tabela.innerHTML += `

                    <tr>

                        <td>
                            <strong>
                                ${InovaPan.escaparHTML(cliente.nome)}
                            </strong>
                        </td>

                        <td>
                            ${InovaPan.escaparHTML(cliente.telefone)}
                        </td>

                        <td>
                            ${InovaPan.escaparHTML(cliente.email || "-")}
                        </td>

                        <td>
                            ${InovaPan.escaparHTML(cliente.endereco || "-")}
                        </td>

                        <td class="text-end">

                            <button
                                class="btn btn-sm btn-outline-danger"
                                onclick="excluirCliente('${cliente.id}')"
                                title="Excluir cliente"
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
                        .getElementById("nome")
                        .value
                        .trim();

                const telefone =
                    document
                        .getElementById("telefone")
                        .value
                        .trim();

                const email =
                    document
                        .getElementById("email")
                        .value
                        .trim();

                const endereco =
                    document
                        .getElementById("endereco")
                        .value
                        .trim();

                const clientes =
                    InovaPan.obterDados(
                        InovaPan.CHAVE_CLIENTES
                    );

                clientes.push({

                    id: InovaPan.gerarId(),

                    nome,

                    telefone,

                    email,

                    endereco,

                    criadoEm:
                        new Date().toISOString()

                });

                InovaPan.salvarDados(
                    InovaPan.CHAVE_CLIENTES,
                    clientes
                );

                form.reset();

                form.classList.remove(
                    "was-validated"
                );

                const modal =
                    bootstrap.Modal.getInstance(
                        document.getElementById(
                            "modalCliente"
                        )
                    );

                if (modal) {
                    modal.hide();
                }

                mostrarMensagem(
                    "Cliente cadastrado com sucesso!",
                    "success"
                );

                carregarClientes();

            }
        );

        window.excluirCliente =
            function(id) {

                const confirmar =
                    confirm(
                        "Deseja realmente excluir este cliente?"
                    );

                if (!confirmar) {
                    return;
                }

                let clientes =
                    InovaPan.obterDados(
                        InovaPan.CHAVE_CLIENTES
                    );

                clientes =
                    clientes.filter(
                        cliente =>
                            cliente.id !== id
                    );

                InovaPan.salvarDados(
                    InovaPan.CHAVE_CLIENTES,
                    clientes
                );

                mostrarMensagem(
                    "Cliente excluído com sucesso!",
                    "success"
                );

                carregarClientes();

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

        carregarClientes();

    }
);
