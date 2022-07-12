import { consumirAPI } from "./consumirAPI.js"

export async function mostrarJuegos(){
    let res = await consumirAPI("https://belkigames.herokuapp.com/api/v1/games/",{
        method: 'GET'
    })

    const gamesContainer= document.querySelector("#games")
    const gameTemplate = document.querySelector("[data-game]")


    res.data.forEach(game => {
        let container = gameTemplate.content.cloneNode(true).children[0]
        container.querySelector(".group").classList.add(`bg-[url('${game.imagenCartelera}')]`) 
        container.querySelector("h5").textContent = "$" + Intl.NumberFormat("ES-co").format(game.precio)
        container.querySelector("p").textContent = game.nombre
        container.querySelector('button').id = game._id

        gamesContainer.appendChild(container)
    });
   
    let buttons = document.querySelectorAll('.bt')
    
    buttons.forEach(button => {
        button.addEventListener('click',() =>{
            window.location.href=(`./videojuego.html?id=${button.id}&usr=${window.location.search.substring(6)}`)
        })
    })
}