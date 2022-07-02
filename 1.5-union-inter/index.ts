/* Aqui podemos tipar uma função, falando o tipo
do parâmetro dela. Exemplo: */

/* Aqui criamos um tipo chamado Banana */
type Banana = string | number

/* E criamos uma função que ou retorna a string
dentro da variável do parâmetro em maiúsculo, ou
retorna a variável + 2. */
/* Isso é feito porque a tipagem pode acabar
recebendo dois parâmetros, e o typescript não
consegue diferenciar na hora se é string ou não,
então descobrimos o tipo e então retornamos algo
de acordo com o tipo. */
function descascarBanana(banana: Banana) {
    if (typeof banana === 'string') {
        return banana.toUpperCase()
    }

    return banana + 2
}


/* Podemos também criar uma tipagem que vai
receber duas tipagens diferentes já criadas. */

/* Aqui criamos 2 tipagens do tipo objeto que
recebe 2 valores */
type Animal = {dieta: string, idade: number}
type Person = {nome: string}

/* Então criamos uma tipagem com os valores
das 2 tipagens acima, colocando o "&" para
receber as duas. */
type Human = Animal & Person

function logHumanName(human: Human) {
    const {dieta, idade, nome} = human
    console.log(dieta, idade, nome)
}

logHumanName({
    dieta: "Arvore",
    idade: 17,
    nome: "Leonardo"
})