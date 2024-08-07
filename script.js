let carros = ['fusca', 'gol', 'palio', 'celta']

//Adicionando um item no array

//carros.splice(2, 0, 'fiesta') //o primeiro numero é em qual posição você quer colocar, segundo valor se você que apagar alguem e terceiro valor oque vai adicionar.


carros.splice(1, 1, 'polo')

//apagar um item no array
//"fusca"1: "polo"2: "palio"3: "celta"

carros.splice(2, 2)

console.log(carros)

//************************************************************************ */

const alunos = [
    { nome: 'Richard', nota: 7 },
    { nome: 'isabelle', nota: 6 },
    { nome: 'gabriel', nota: 3 },
    { nome: 'luis', nota: 0 },
    { nome: 'Ricardo', nota: 10 },
]
//quando tiver so um valor no construtor nãoo precisa dos parenteses, e se tiver uma linha so não precisa das chaves e nem do return
let listaAlunos = alunos.map(alunos => alunos.nome) //uma variavel com oque você quer mostrar na tela

console.log(listaAlunos);

let aprovados = alunos.filter(aluno => aluno.nota >= 6).map(alunos => `o ${alunos.nome} foi aprovado com a nota ${alunos.nota} de média`)//pode adicionar tudo junto com uma frase

console.log(aprovados);

const vendedores = [
    { nome: 'Richard', idade: 18, vendas: 7 },
    { nome: 'henrique', idade: 32, vendas: 30 },
    { nome: 'junior', idade: 26, vendas: 2 },
    { nome: 'rikelme', idade: 19, vendas: 15 },
]

const totalVendas = vendedores.reduce((valorTotal, valorAtual) => valorTotal + valorAtual.vendas, 0)

const dadosVendas = vendedores.reduce(
    (acc, item) => {
        const maisNovo = acc.maisNovo < item.idade ? acc.maisNovo : item.idade
        const maisVelho = acc.maisVelho > item.idade ? acc.maisVelho : item.idade

        return {
            totalVendas: acc.totalVendas + item.vendas,
            maisNovo: maisNovo,
            maisVelho: maisVelho
        }

    }, { totalVendas: 0, maisNovo: undefined, maisVelho: undefined }
)
console.log(dadosVendas);

const filaBrinquedo = [
    { nome: 'Richard', idade: 18, altura: 1.73 },
    { nome: 'lopes', idade: 25, altura: 1.85 }
]

const todaFilaPode = filaBrinquedo.every(pessoas => pessoas.altura >= 1.60) //every vem de todos
console.log(todaFilaPode ? "vamos la" : "nem todos pode");

const temResponsavel = filaBrinquedo.some(pessoa => pessoa.idade >= 18)
console.log(temResponsavel ? 'sim, voces poedem!' : 'não, precisa de alguem maior');

const responsavel = filaBrinquedo.find(pessoa => pessoa.idade >= 18)
console.log(`A pessoa responsavel será ${responsavel.nome} pois ela tem ${responsavel.idade}`);

const convidados = ['prof luis', 'gustavo', 'richard', ' rafael', 'jonathan', 'prof rafael']

//verifica se a string contem o valor especificado
const professoresConvidados = convidados.filter(convidados => convidados.includes(`prof`))
console.log(professoresConvidados);

// Spred - espalha os valores no local, tirando um array e juntando com o outro

const frutas = ['maça', 'banana', 'melancia']
const verduras = ['couve', 'alface', 'agrião']

const feira = [...frutas, ...verduras] //usando os tres pontos voce junta todas as coisas que quer

console.log(feira);

let pessoa = {
    nome: 'richard',
    idade: '18',
    altura: '1.73'
}

pessoa = { ...pessoa, rg: 55.66677759 } //usando assim voce altera ou adiciona algo novo

console.log(pessoa);

//rest parameter
function somarTodos(n1, n2, n3) {
    return n1 + n2 + n3
}

console.log(somarTodos(4, 5, 6))