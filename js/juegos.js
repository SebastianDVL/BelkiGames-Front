import { consumirAPI } from "./consumirAPI.js"

export async function mostrarJuegos(){
    let res = await consumirAPI("https://belkigames.herokuapp.com/api/v1/games/",{
        method: 'GET'
    })

    console.log(res)
    const gamesContainer= document.querySelector("#games")
    const gameTemplate = document.querySelector("[data-game]")


    res.data.forEach(game => {
        let container = gameTemplate.content.cloneNode(true).children[0]
        let img = container.querySelector("img")
        let precio = container.querySelector("h5")
        let nombre = container.querySelector("p")

        nombre.textContent = game.nombre
        precio.textContent = "$" + Intl.NumberFormat("ES-co").format(game.precio)
        img.src = game.imagenCartelera
        gamesContainer.appendChild(container)
    });
   
    
}