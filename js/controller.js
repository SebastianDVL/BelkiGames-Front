import { mostrarJuegos } from "./juegos.js"

mostrarJuegos()


if(window.location.search.substring(6)){
    document.querySelector("#iniciarSesion").innerHTML = `<i class="fa-solid fa-ghost mr-2"></i> ${window.location.search.substring(6)}`
}