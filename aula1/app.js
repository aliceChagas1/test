//const conteiner =document.getElementById('conteiner');
//const container = document.querySelectorAll('#conteiner')

const container=document.querySelector('#container')
// container.innerHTML= '<p>olá mundo</p>'

// const botao = document.createElement('button')
// container.appendChild(botao)
// botao.id= 'botao' 
// //botao.style.borderTopRightRadius='12px'
// botao.innerText='clique pra entar na rave da caverna'
const quadrados = document.createElement('div')
container.appendChild(quadrados)
quadrados.id = "quadrados"
for (let index = 0; index < 100; index++) {
    const quadrado = document.createElement('div')
    quadrados.appendChild(quadrado)
    quadrado.id=`quadrado${index}`
    quadrado.classList.add(`quadrado`)
}