const container = document.getElementById(`container`)//ESSE TEM A EM VEZ DE E NO CONT*INER
let contador = []
let products = []

fetch('https://dummyjson.com/products?select=id,title,description,price,image')  // buscar dados na url
    .then(res => res.json()) // então faça com o res(uldado) e transforma em json 
    .then(res => {
        products = res.products
        pegardados()

    });

function pegardados() {
    if (!products.length) return
    console.log(products[0].id)
    // container.textContent= products[2].titlle

}


const botaoFrente = document.createElement(`button`)
const botaoTras = document.createElement(`button`)
container.append(botaoFrente, botaoTras)
botaoFrente.textContent = `Avançar`
botaoTras.textContent = `Voltar`


botaoFrente.addEventListener(`click`, clicado)
function clicado() {
    titulo.textContent = products[contador].title
}