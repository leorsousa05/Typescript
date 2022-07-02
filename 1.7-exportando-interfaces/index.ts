/* Vá primeiro para Person.d.ts */

/* Voltando aqui para a pasta, nós importamos nossa
namespace criada. */
import "./Person"

/* E utilizamos ela de forma rápida
colocando o nome dela e depois o tipo que criamos
dentro dela. */
const person: Person.WithContacts = {
    name: 'Lucas',
    age: 32,
    contacts: []
}

const email: Person.Email = 'daniel'