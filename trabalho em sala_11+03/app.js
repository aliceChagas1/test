const conteiner = document.querySelector(`#container`)
const buttonleft = document.createElement(`button`)
const buttonrigth = document.createElement(`button`)
const card = document.createElement(`div`)

conteiner.appendChild(card)
conteiner.appendChild(buttonleft)
conteiner.appendChild(buttonrigth)

buttonleft.innerText = `voltar`
buttonrigth.innerText = `ir`
buttonleft.id=`buttonleft`
buttonrigth.id=`buttonrigth`
card.id=`card`

const text1 = document.createElement(`p`)
const text2 = document.createElement(`p`)
const image = document.createElement(`img`)
const preço = document.createElement(`div`)

card.append(text1,text2,image,preço)
text1.id = `text1`
text2.id = `text2`
image.id =`image`
image.src = `https://ikesaki.vteximg.com.br/arquivos/ids/304182/Esmalte-Risque-Cremoso-Carmim-7891182016933.png`
preço.id = `preço`
text1.innerText =`Red Nail polish`
text2.innerText =`The red nail polish ofers a rich and glossy red hue for vibrant and polished nails.`
preço.innerText =`8,99`

let contador = []
let products = []

fetch('https://dummyjson.com/products?select=id,title,description,price,images')  // buscar dados na url
    .then((dados) => dados.json()) // então faça com os dados que o site der e transforma em json 
    .then(dados => {
        products = dados.products
        pegardados()
    });

function pegardados() {
    if (!products.length) return
    console.log(products[0].id)
    // container.textContent= products[2].titlle

}

buttonleft.addEventListener(`click`, clicado)
function clicado() {
    contador++
    text1.textContent = products[contador].title
    text2.textContent = products[contador].description 
    preço.textContent = products[contador].price
    image.src= products[contador].images[0]

}

buttonrigth.addEventListener('click', voltando)
function voltando (){
    contador--
    text1.textContent = products[contador].title
    text2.textContent = products[contador].description 
    preço.textContent = products[contador].price
    image.src = products[contador].images[0]
}


////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//parte 2 do trabalho
// const container = document.getElementById(`#container`)//ESSE TEM A EM VEZ DE E NO CONT*INER
// let products = []
// fetch('https://dummyjson.com/products')  // buscar dados na url
// .then(res => res.json()) // então faça com o res(uldado) e transforma em json 
// .then(res => {products = res.products 
//     pegardados()

// });

// function pegardados() {
//     if (!products.length) return
//         console.log(products[0])
    
//     }


// const botãofrente = document.createElement(`button`)
// const botãotras = document.createElement(`button`)
// container.append(botãofrente,botãotras)
// botãofrente.textContent = `avançar`
// botãotras.textContent = `voltar`

// card.setAttribute(`class`, `card`)// classe de elemento
// const formulario = document.createElement(`form`)
// const inputTexto = document.createElement(`input`)
// formulario.append(inputTexto)
// inputTexto.setAttribute(`type`, `email`)


// atualizardados()

// card.appendChild(text2)
// card.appendChild(image)
// card.appendChild(preço)

// function atualizardados() {
//     text1.innerText =`Red Nail polish`
//     text2.innerText =`The red nail polish ofers a rich and glossy red hue for vibrant and polished nails.`
//     preço.innerText =`8,99`
//     image.setAttribute(`src`,`url`)
// }


