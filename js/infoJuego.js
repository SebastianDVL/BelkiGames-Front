import { consumirAPI } from "./consumirAPI.js";



    let info = await consumirAPI(`https://belkigames.herokuapp.com/api/v1/game/${window.location.search.substring(4)}`,{
        method: "GET"
    })

    console.log(info)

    let inf =  document.querySelector('#info')
    //inf.classList.add(`bg-[url('${info.data.imagenPrincipal}')]`)

    let imagen  = info.data.imagenCartelera
    document.querySelector('#poster').classList.add(`bg-[url('${info.data.imagenCartelera}')]`)

    const colorThief = new ColorThief()
    let img = new Image() 
    img.addEventListener('load', function() {
        let color = colorThief.getColor(img);
        document.querySelector('#info div').style.background = `rgb(${color[0]},${color[1]},${color[2]},0.9)`
        document.querySelector('#poster div').classList.add(`group-hover:bg-[rgb(${color[0]},${color[1]},${color[2]},0.4)]`)
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

