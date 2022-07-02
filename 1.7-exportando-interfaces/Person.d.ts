/* Aqui criamos namespaces para podermos organizar o código. */

/* Os Namespaces são uma forma específica do TypeScript para organizar código.
Namespaces são simplesmente objetos JavaScript nomeados no namespace global.
Isso torna os namespaces uma construção muito simples de usar.
Ao contrário dos módulos, eles podem atingir múltiplos arquivos,
e podem ser concatenados usando --outFile. */

declare namespace Person {
    type Email = string

    /* Aqui podemos utilizar o export
    direto na frente do interface. */
    export interface Default {
        name: string
        age: number
    }

    export interface WithContacts extends Default {
        contacts?: Email[]
    }
}

// Volte para o index.ts