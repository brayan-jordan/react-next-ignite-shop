# React Next Ignite Shop
Um projeto de eCommerce desenvolvido na trilha Ignite de React na plataforma da [Rocketseat](https://rocketseat.com.br)
## Iniciar projeto localmente
1. Criar um arquivo .env.local com as seguintes váriaveis de ambiente:
```bash
# Stripe
STRIPE_PUBLIC_KEY=""
STRIPE_SECRET_KEY=""

# App
NEXT_URL=http://localhost:3000
```

2. Executar os seguintes comandos:
```bash
# Instalar as dependências
$ npm install

# Iniciar o projeto na porta 3000
$ npm run dev
```
## Principais conceitos aprendidos
1. Framework [NextJS](https://nextjs.org/) e seus principais conceitos: SSR, SSG, API Routes, Prefetch, etc...
2. Utilização da biblioteca de estilos CSS [Stitches](https://stitches.dev/) para criação de componentes estilizados.
3. Utilização da ferramenta [Stripe](https://stripe.com/docs/js) que permite a criação automática de um back-end e funcionalidades típicas de um eCommerce (inclusive validação de pagamento segura).
   
## Imagens do fluxo do projeto
1. Imagem da tela de home do projeto (com carrossel lateral para scroll dos itens)
![Imagem da home](https://github.com/brayan-jordan/react-next-ignite-shop/blob/master/docs/home.png)
2. Imagem da tela de produto selecionado
![Imagem de produto selecionado](https://github.com/brayan-jordan/react-next-ignite-shop/blob/master/docs/product.png)
3. Redirecionamento ao clicar em comprar para confirmação de compra no Stripe
![Imagem da tela de confirmação de compra no Stripe](https://github.com/brayan-jordan/react-next-ignite-shop/blob/master/docs/checkout.png)
4. Imagem da tela ao confirmar os dados do pagamento
![Imagem da tela de de compra confirmada](https://github.com/brayan-jordan/react-next-ignite-shop/blob/master/docs/success.png)
