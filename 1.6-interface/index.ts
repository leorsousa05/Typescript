// Interfaces é o mesmo que um type,
// Mas com interfaces, podemos adicionar mais
// objetos à tipagem

// Use sempre uma interface para cada coisa
// Não adicione mais coisas pelo interface.

// Se precisamos declarar os tipos de uma classe e seus metodos utilizamos interface;
// Se precisamos declarar os tipo das props de uma função usamos alias type;
// Se precisar criar uma definição de tipo que será extendida por algo, nós usamos interface;
// Se estamos criando um generic type para alguma funcionalidade, usamos interface.

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

// Teste ai no seu computador também o Interface :)