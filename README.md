# Introdução ao Typescript

- npm install typescript -D
- npx run tsc -- init (gerar o arquivo tsconfig.json)
- npx tsc (gerar o arquivo js que irá rodar no node)

- npm install ts-node-dev -D 
- colocar script na package.json:
    --  "dev": "ts-node-dev --transpile-only --ignore-watch --respawn node_modules src/server.ts"