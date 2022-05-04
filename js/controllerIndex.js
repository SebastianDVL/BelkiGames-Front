import {changeForm} from './pagination.js'
import {llenarPaises} from './paises.js'

changeForm()
let paises = await llenarPaises()

paises.paises.forEach(pais =>{
    let option = document.createElement("option")

})
