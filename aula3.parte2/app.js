const container = document.querySelector(`#conteiner`)

// Could be GET or POST/PUT/PATCH/DELETE
fetch('https://dummyjson.com/products?limit=5&select=id,title,description,price,images')
.then(res => res.json())
.then((resp) =>{
    container.textContent= JSON.stringify(resp)
});

/* { status: 'ok', method: 'GET' } */