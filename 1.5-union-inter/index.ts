type Banana = string | number

function descascarBanana(banana: Banana) {
    if (typeof banana === 'string') {
        return banana.toUpperCase()
    }

    return banana + 2
}

type Animal = {dieta: string, idade: number}
type Person = {nome: string}
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