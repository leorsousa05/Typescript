// Igual o PHP, aqui nós tipamos as váriaveis
// Colocando qual irá ser a forma de saída de dados
const me:string = "batata"
// Dessa forma falamos
// que a variável é uma string

// E podemos criar vários tipos de variáveis
const personName:string = "Leonardo"
const personAge:number = 17
const personAlive:boolean = true

/* Aqui podemos dar mais de um tipo pra uma
variável apenas usando um parenteses e colocando
o operar "|" que significa "ou" para dizer que
a constante vai receber string ou numero e logo
após, abrimos colchetes na tipagem, para dizer que
aquela constante é uma array. */
const personContacts:(string | number)[] = [
    0,
    'leorsousa05@gmail.com'
]

/* Tipar variáveis e etc, é bom para que não à
erros, se você colocar algo diferente da tipagem,
retornará um erro do próprio Typescript */
