const container = window.document.querySelector('#container')//variavel(const)liga o elemento ao js(que faz a parte logica, dinamica).

// container.innerHTML = `<h1 id="cor"> olá mundo <h1>`----// o nome da variavel, mais incerir no html, tamanho da escrita id para colocar adereços no css, mais oq vai ser escrito .
// container.textContent = `ola mundo`----//texto solto não leva h1 ou etc.


const quadrados = document.createElement('div')// variavel de nome quadrado que crea um elemento div
container.appendChild(quadrados)//chama a variavel que terá "filhos" e adiciona a variavel que sera o filho
quadrados.id = `quadrados`//chama a variavel è adiciona um idendificador na variavel para pegar ele no CSS
for (let index = 0; index < 100; index++) { //para criar o quadrado varias vezes, vai ficar repetindo
    const quadrado = document.createElement('div') //cria um elemento e o nome do elemento que vai criar 
    quadrados.appendChild(quadrado) //chama o pai para adicionar o filho
    quadrado.classList.add(`quadrado`) // chama variavel com class e da nome para usar no CSS usando uma lista de classe com adicionar
    quadrado.id = `quadrado${index}`// da um identificador/nome diferente para cada quadrado
}

for (let i = 0; i < 10; i++) {// ele vai percorrer as linhas do quadrados
    for (let J = 0; J < 10; J++) {// aninhado para percorrer as colunas
        console.log(`${i, J}`) // mostra o valor do i e do j 
    } //vai um por um, roda todas as colunas e por linhas
}



//aula3

// function mudarDeCor() {

// }
const mudarDeCor = () => { // muda a cor de uma div, dá pra mudar os negocio do projeto do marcio 
    const retangulo = document.querySelector(`#retangulo`)
    // retangulo.style.backgroundColor = `green`
    if (retangulo.classList.contains(`retanguloescuro`)) {
        retangulo.classList.remove(`retanguloescuro`)
        retangulo.classList.add(`retanguloclaro`)
    } else {
        retangulo.classList.add(`retanguloescuro`)
        retangulo.classList.remove(`retanguloclaro`)
    }    
    
    

}