//pega o container queryselector
const container = document.querySelector('#container')
//cria oq precisa
const card = document.createElement('div')
const botaoDireito = document.createElement('button')
const botaoEsquerdo = document.createElement('button')

//coloca tudo no container
container.append(card, botaoDireito, botaoEsquerdo)
//coloca id pro css
botaoDireito.id = `botaodireito`
botaoEsquerdo.id = `botaoesquerdo`
card.id = `card`
//coloca a escrita no botão innertext
botaoDireito.innerText = `ir`
botaoEsquerdo.innerText = `voltar`

//cria oq vai dentro do card
const tituto = document.createElement(`h1`)
const descricao = document.createElement(`p`)
const imagem = document.createElement(`img`)
const preco = document.createElement(`p`)
imagem.id = `imagem`
//coloca no card
card.append(tituto, descricao, imagem, preco)
//coloca valores 



let contador = []
let produto = []

//pega o fetch em que (dados) => dados.jason; e então dados => 
fetch(`https://dummyjson.com/products?select=id,title,description,images,price`)
    .then((dados) => dados.json())// trensforma em dados.json()
    .then((dados) => {
        produto = dados.products
        atualizradados()
    })

function atualizradados(params) {
    tituto.textContent = produto[contador].title
    descricao.textContent = produto[contador].description
    imagem.src = produto[contador].images[0]
    preco.textContent = produto[contador].price
}

botaoDireito.addEventListener(`click`, clicado)

function clicado() {
    contador++
    atualizradados()
}
botaoEsquerdo.addEventListener(`click`, clicou)

function clicou() {
    contador--
    atualizradados()
}




