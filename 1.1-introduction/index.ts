// TYPESCRIPT Introduction
/* Para usarmos o typescript precisamos usar o gerenciador
de pacotes do nodeJS(NPM) */

/* Depois que termos o npm instalado, utilizamos o seguinte
comando: */

// npm i typescript

/* Logo após instalarmos, iremos configurar ele: */

// Na pasta package.json, nós vamos em script e apagamos
// oque tem dentro e trocamos por:

/* 
"scripts": {
    "build": "tsc"
} 
*/

// E então colocamos no terminal:
// ./node_modules/.bin/tsc --init

// E então só criar um arquivo index.ts
// e utiliza-lo.

// Logo após terminar de fazer o código é só
// rodar o comando npm run build, que é o script que
// criamos logo acima no package.json
// E ira ser gerado um arquivo .js

// PORQUE USAR O TYPESCRIPT
/* Nós utilizamos nosso queridissimo typescript
para evitar erros bestas mais tarde na nossa
aplicação, qualquer coisa errada o typescript
nos avisa. */

/* Criei uma variável para testarem o build daqui
 */
const me = {
    name: 'Leonardo',
    age: 17
}

/* Aliás: */
/* No typescript para dar um export, usamos
a mesma sintaxe de modulos do node. */
/* Vocês vão precisar disso mais tarde :) */
export default me