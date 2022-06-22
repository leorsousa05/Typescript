// Interfaces é o mesmo que um type
// Mas com interfaces, podemos adicionar mais
// objetos à tipagem

// Use sempre uma interface para cada coisa
// Não adicione mais coisas pelo interface.
interface Animal {
    sex: 'male' | 'female'
} 

interface Person extends Animal {
    name: string
    age: number
}

const person: Person = {
    age: 22,
    name: 'lucas',
    sex: 'male'
}