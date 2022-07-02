// Também podemos tipar objetos

/* Podemos criar uma tipagem que é um objeto */
type Person = {
    name: string
    age: number
    /* Usando o operador "?" na tipagem
    falamos que não é obrigatório algo ser
    passado. */
    contacts?: string[]
    isAlive: boolean
}

/* E logo após, passarmos o nome do tipo que
criamos e tudo oque passamos antes */
const person:Person = {
    name: "Leonardo",
    age: 17,
    contacts: ["Leorsousa05@gmail.com"],
    isAlive: true
}

/* O próprio typescript nos dá ajuda com os
elementos que temos que colocar, mostrando
quais faltam ainda colocar. */

const person2:Person = {
    name: "Mel",
    age: 18,
    contacts: ["melqueirozlima@gmail.com"],
    isAlive: true
}