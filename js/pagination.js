import {llenarPaises} from './paises.js'
import {getLocation} from './location.js'
import {validateAndRegister} from './register.js'
export async function changeForm(){  
    let log = document.querySelector("[data-log]")
    let sign = document.querySelector("[data-sign]")

    let form = document.querySelector("form")

    if(window.location.href.split("?")[1] === "reg"){
        let signForm = sign.content.cloneNode(true).children[0]
        form.appendChild(signForm)
        
        let paises = await llenarPaises()
        let location = await getLocation()

        paises.paises.forEach(pais =>{
            let option = document.createElement("option")
            
            if(location.country == pais.name){
                option.selected = true
            }

            option.value = pais.code
            option.textContent = pais.name

            document.querySelector("#pais").appendChild(option)
        })

        signForm.querySelector("#log").addEventListener("click", ()=>{
            window.location.href =(`./index.html`)
        })
        
        let register = document.querySelector("#signin")

        register.addEventListener("click",async e =>{
            e.preventDefault()
            validateAndRegister()
        })

    }else{
        let logForm = log.content.cloneNode(true).children[0]
        form.appendChild(logForm)
        logForm.querySelector("#reg").addEventListener('click',()=>{
            window.location.href =(`./index.html?reg`)
        })
    }
}
