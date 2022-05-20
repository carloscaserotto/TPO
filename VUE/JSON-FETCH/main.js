

const getNombre= () => {
    idPost = parseInt(prompt("Ingrese idPost"))
    // hacemos la solicitud a la API...
    fetch(`https://jsonplaceholder.typicode.com/posts/${idPost}`)
    // la API responde en formato JSON
    .then(res=> {return res.json()})
    // Pedimos el userID de ese posteo
    .then(post => {
        console.log(post.userId)
        ejemploFetch.innerHTML= `
                    <p>Id: ${post.id}</p>
                    <p>Title: ${post.title}</p>
                    <p>Body: ${post.body}</p>`
    })
}
//getNombre(99); // llamada a la función

ejemploFetch = document.querySelector(".ejemploFetch");

