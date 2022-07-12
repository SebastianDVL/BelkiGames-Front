import { consumirAPI } from "./consumirAPI.js";
import { comprar } from "./purchase.js";

let urlParams = new URLSearchParams(window.location.search)

document.querySelector("#iniciarSesion").innerHTML = `<i class="fa-solid fa-ghost mr-2"></i> ${urlParams.get("usr")}`
let info = await consumirAPI(`https://belkigames.herokuapp.com/api/v1/game/${urlParams.get("id")}`,{
    method: "GET"
})


let inf =  document.querySelector('main')
//inf.classList.add(`bg-[url('${info.data.imagenPrincipal}')]`)

let imagen  = info.data.imagenCartelera
//document.querySelector('#poster').classList.add(`bg-[url('${info.data.imagenCartelera}')]`)

const colorThief = new ColorThief()
let img = new Image() 
img.addEventListener('load', function() {
    let color = colorThief.getColor(img);
    document.querySelectorAll('hr').forEach(hr=>{hr.classList.add(`border-[rgb(${color[0]},${color[1]},${color[2]})]`)})
})
    
img.src  =`${imagen}`
img.crossOrigin = 'Anonymous';

document.querySelector("#banner").classList.add(`bg-[url('${info.data.imagenPrincipal}')]`)
inf.querySelector('h1').textContent = info.data.nombre
inf.querySelector('h2').textContent = info.data.categoria
inf.querySelector('p').textContent = info.data.descripcipn
inf.querySelector('h3').textContent = info.data.fechaLanzamiento
inf.querySelector('#genres').textContent = "$" + Intl.NumberFormat("ES-co").format(info.data.precio)

const imgsContainer = document.querySelector('#imgs')
info.data.imagenes.forEach(img =>{
    let imgContainer = document.querySelector('[data-img]').content.cloneNode(true).children[0]

    imgContainer.querySelector('.h-80').classList.add(`bg-[url('${img}')]`)
    
    imgsContainer.appendChild(imgContainer)
})

comprar()


