/* Dessa forma tipamos uma variável */
// Evite o Type any!!!

// Para definir um parâmetro opcional é só
// Colocar "?" antes dos dois pontos.
function greet(name:string, age?:number) {
    console.log(
    `Hello, ${name}`
    )
}

/* Porque evitarmos o type:any
Nós evitamos o type any porque se passarmos o
any, as funções ou variáveis poderam receber
funções que funcionam para uns tipos e para
outros não. */