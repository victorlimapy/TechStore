# TechStore — E-commerce

Projeto de uma loja virtual fictícia desenvolvido com HTML, CSS e JavaScript. A aplicação roda diretamente no navegador, sem banco de dados, frameworks ou bibliotecas externas.

## Funcionalidades

- Exibição dinâmica de seis produtos com imagem, nome, categoria, preço e disponibilidade.
- Busca de produtos pelo nome e filtro por categoria.
- Adição de produtos ao carrinho, com limite baseado no estoque.
- Alteração da quantidade e remoção de produtos do carrinho.
- Atualização automática da quantidade de itens, subtotal, desconto e total.
- Desconto de 10% para compras a partir de R$ 300,00.
- Mensagem de erro ao tentar finalizar a compra com o carrinho vazio.
- Modal com os itens, quantidades, subtotal, desconto e valor final da compra.
- Carrinho limpo ao fechar o modal de compra concluída.

## Tecnologias

- **HTML5** para a estrutura da página.
- **CSS3** para o tema e o layout.
- **JavaScript** para os produtos, regras de negócio, cálculos e interação com o DOM. O código usa as classes `Produto` e `Carrinho`.

## Arquivos

```text
TechStore/
├── index.html       # Página principal
├── style.css        # Estilos da aplicação
├── script.js        # Lógica da loja e do carrinho
└── README.MD        # Documentação
```

## Como executar

Abra `index.html` em um navegador moderno. Também é possível abrir a pasta no Visual Studio Code e executar o arquivo com a extensão Live Server.

As imagens dos produtos são carregadas de endereços externos, então precisam de conexão com a internet para aparecer.

## Integrantes

- Victor Emanoel
- André
- Paulo dos Santos
- Iasmin
- Igor
