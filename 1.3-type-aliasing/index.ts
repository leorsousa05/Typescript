// No typescript além de podermos usar tipagem
// para evitar erros, podemos também criar tipos
type Cpf = string
// Dessa maneira criamos um tipo Cpf e agora
// iremos ver como usa-lo
const cpf:Cpf = "123"
// Dessa maneira falamos que o tipo da nossa
// Constante cpf é um tipo que nós criamos,
// chamado de "Cpf"

// Nós podemos também criar opções pra uma var
type Sex = 'Male' | 'Female'

const sex:Sex = 'Male'
// Criando assim, o próprio typescript nos dá
// as opções