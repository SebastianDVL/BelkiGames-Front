export function buscarJuego(){
    let search = document.querySelector("input[type='search']")

    let mssg = document.querySelector("#noItems")

    search.addEventListener("change",e =>{
        let value = e.target.value.toLowerCase().replace(/ /g, "")
        let juegos = document.querySelectorAll("#games > div")

        juegos.forEach(juego =>{

            let nombreJuego = juego.querySelector("p").textContent.replace(/ /g, "").toLowerCase()
            let isVisible = nombreJuego.includes(value)

            juego.classList.toggle("hidden",!isVisible)
        })
        let hiddenItems = document.querySelectorAll(".hidden")

        if(hiddenItems.length == juegos.length){
            mssg.textContent = `No se encontro "${e.target.value}"` 
        }else{
            mssg.textContent = ""
        }
    })

   

    search.addEventListener("input",e =>{
        let juegos = document.querySelectorAll("#games > div")
        if(e.target.value == ""){              
            juegos.forEach(juego =>{
                juego.classList.remove("hidden")
            })
            mssg.textContent = ""
        } 
    })
}