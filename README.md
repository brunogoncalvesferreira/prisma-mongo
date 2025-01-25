<h1 align="center" style="font-weight: bold;">Prisma + MongoDB 💻</h1>

<p align="center">
 <a href="#tech">Tecnologias</a> • 
 <a href="#started">Getting Started</a> • 
 <a href="#colab">Colaboradores</a> 
</p>

<p align="center">
    <b>Este projeto é um blog desenvolvido em Node.js, utilizando o Prisma como ORM e MongoDB como banco de dados.</b>
</p>

<h2 id="Tecnologias">💻 Tecnologias</h2>

- Prisma ORM
- MongoDB
- NodeJS
- Fastify

<h2 id="started">🚀 Getting started</h2>

Para executar a aplicação localmente

<h3>Pré Requisítos</h3>

- [NodeJS](https://nodejs.org/pt)
- [Git](https://git-scm.com/)
- [MongoDB](https://cloud.mongodb.com/) Crie sua conta e configure seu projeto para obter sua conexão.

<h3>Git Clone</h3>

Como clonar o projeto

```bash
git clone https://github.com/brunogoncalvesferreira/prisma-mongo.git
```

<h3>Config .env variables</h2>

Use o `.env.example` como referência para criar seu arquivo de configuração `.env` com suas credenciais do MongoDB

```yaml
DATABASE_URL="mongodb+srv://user:password@cluster0.udntw.mongodb.net/nameDatabase?retryWrites=true&w=majority&appName=Cluster0"
```

<h3>Inciando</h3>

Como iniciar o projeto

```bash
cd prisma-mongo

pnpm install

npx prisma db seed // Executando o seed.ts

npx prisma generate // Gerando o schema prisma

pnpm start // API rodando na porta 3333
```

<h2 id="colab">🤝 Colaboradores</h2>

<table>
  <tr>
    <td align="center">
      <a href="#">
        <img src="https://avatars.githubusercontent.com/u/74840490?v=4" width="100px;" alt="Bruno profile"/><br>
        <sub>
          <b>Bruno</b>
        </sub>
      </a>
    </td>
  </tr>
</table>

## License

This software is available under the following licenses:

- [MIT](https://github.com/brunogoncalvesferreira/prisma-mongo?tab=MIT-1-ov-file#readme)
