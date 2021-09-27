# Introdução ao Typescript

- npm install typescript -D
- npx run tsc -- init (gerar o arquivo tsconfig.json)
- npx tsc (gerar o arquivo js que irá rodar no node)

- npm install ts-node-dev -D 
- colocar script na package.json:
    --  "dev": "ts-node-dev --transpile-only --ignore-watch --respawn node_modules src/server.ts"


# Utilizando TypeORM e Postgres na aplicação
- npm install typeorm pg 
- é necessário ter um arquivo ormconfig.json na raíz do projeto especificando sua conexão
- src/database/index terá a função createConnection do typeorm que iremos importar ao server.js


# Migrations
- Versionamento do banco de dados