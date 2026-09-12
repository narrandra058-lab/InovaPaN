# InovaPan

## Sistema de Gestão de Pedidos para Panificadora

Projeto desenvolvido para a disciplina de Projeto Integrador II.

O InovaPan tem como objetivo auxiliar uma panificadora no gerenciamento
de clientes, produtos e pedidos.

---

## Tecnologias utilizadas

- HTML5
- CSS3
- Bootstrap 5
- JavaScript ES6+
- localStorage
- Git
- GitHub
- Figma como referência visual

---

## Funcionalidades

### Clientes

- Cadastro de clientes
- Nome
- Telefone
- E-mail
- Endereço
- Validação de campos obrigatórios
- Listagem
- Exclusão

### Produtos

- Cadastro de produtos
- Nome
- Descrição
- Preço
- Listagem
- Exclusão

### Pedidos

- Seleção de cliente
- Seleção de produtos
- Definição de quantidade
- Cálculo automático de subtotal
- Cálculo automático do total
- Remoção de itens
- Salvamento do pedido

### Dashboard

- Total de clientes
- Total de produtos
- Total de pedidos
- Total de vendas
- Pedidos recentes

### Relatórios

- Quantidade de clientes
- Quantidade de produtos
- Quantidade de pedidos
- Total vendido
- Ticket médio

---

## Estrutura

```text
inovapan-frontend/
│
├── index.html
├── dashboard.html
├── clientes.html
├── produtos.html
├── pedidos.html
├── relatorios.html
│
├── css/
│   └── estilo.css
│
├── js/
│   ├── app.js
│   ├── clientes.js
│   ├── produtos.js
│   └── pedidos.js
│
├── assets/
│   ├── imagens/
│   └── icones/
│
├── .gitignore
└── README.md
