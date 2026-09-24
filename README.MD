🛒 Tech Store — E-Commerce Front-End

Uma aplicação web interativa e responsiva de e-commerce desenvolvida com HTML5, CSS3 e JavaScript puro (ES6+). O sistema conta com vitrine de produtos, filtros de busca e categoria, gerenciamento dinâmico de carrinho de compras com controle de estoque, cálculo automático de descontos e modal de confirmação de pedido.

🚀 Funcionalidades

Vitrine Dinâmica de Produtos:

Exibição de catálogo com imagem, nome, categoria, preço e indicador de estoque.

Bloqueio automático de adição ao carrinho para produtos indisponíveis.

Filtros e Busca em Tempo Real:

Pesquisa por nome do produto com atualização instantânea na tela.

Filtragem por categorias (Informática, Acessórios, Games, etc.).

Carrinho de Compras Interativo:

Adição de itens com verificação de disponibilidade em estoque.

Incremento e decremento de quantidade direto no painel do carrinho.

Remoção individual de itens ou limpeza completa do carrinho.

Exibição da miniatura do produto e nome completo no resumo da linha.

Regras de Negócio e Cálculos Automatizados:

Subtotal: Soma automática dos valores dos itens no carrinho.

Desconto: Aplicação automática de 10% de desconto para compras a partir de R$ 300,00.

Total: Cálculo do valor final a ser pago.

Modal de Finalização:

Resumo detalhado dos itens adquiridos e valores no momento do checkout.

🛠️ Tecnologias Utilizadas

HTML: Estruturação semântica das seções e componentes da página.

CSS:

Layout moderno com Flexbox e CSS Grid.

Tema Dark Mode estruturado através de Variáveis CSS (:root).

Responsividade e tratamento de overflow de elementos.

JavaScript (ES6+):

Programação Orientada a Objetos (Classes Produto e Carrinho).

Manipulação dinâmica do DOM.

Tratamento de eventos de entrada (filtros, cliques e validações).

📂 Estrutura do Projeto

├── index.html     # Estrutura principal da aplicação
├── style.css      # Estilização visual, layout e temas
├── script.js     # Lógica de negócios, manipulação do DOM e carrinho
└── README.md      # Documentação do projeto


🔧 Como Executar o Projeto

Faça o clone ou o download dos arquivos do repositório:

git clone https://github.com/victorlimapy/TechStore.git


Acesse a pasta do projeto no seu computador.

Abra o arquivo index.html diretamente em qualquer navegador web moderno (Google Chrome, Firefox, Edge, etc.) ou utilize a extensão Live Server no VS Code.

📌 Próximos Passos e Melhorias Futuras

[ ] Integração com LocalStorage para persistir os itens do carrinho após atualizar a página.

[ ] Integração com uma API backend para simulação de pagamento.

[ ] Implementação de cálculo de frete por CEP

👥 Integrantes do Grupo

- Victor Emanoel
- André
- Paulo dos Santos
- Iasmin
- Igor