let contador = 0
let ficha;

const container = document.getElementById('container')
const fichaPessoal = document.createElement('h1')
const imagem = document.createElement('img')
const nome = document.createElement('h2')
const idade = document.createElement('p')
const email = document.createElement('p')
const endereco = document.createElement('p')
const local = document.createElement('h2')
const botaoanterior = document.createElement('button')
const botaoproximo = document.createElement('button')


container.append(fichaPessoal, imagem, nome, idade, email, endereco, local, botaoanterior, botaoproximo)


botaoanterior.textContent = 'anterior'
botaoproximo.textContent = 'proximo'
fichaPessoal.textContent = 'Ficha de Pessoal '

fetch('https://dummyjson.com/users?select=id,firstName,age,email,image,address,country')
    .then((dados) => dados.json())
    .then((dados) => {
        ficha = dados.users
        atualizardados()
    })


botaoanterior.addEventListener('click', function(){
    contador--
    atualizardados()
})

function atualizardados() {

    imagem.src = ficha[contador].image
    nome.textContent = ficha[contador].firstName
    idade.textContent = ficha[contador].age
    email.textContent = ficha[contador].email
    endereco.textContent = ficha[contador].address.address
    local.textContent= ficha[contador].country

}


botaoproximo.addEventListener('click', function(){
    contador++
    atualizardados()
})






