import {changeForm} from './pagination.js'
import {validate} from './validateUser.js'

changeForm()

let submit = document.querySelector("#login")

submit.addEventListener("click",async e =>{
    e.preventDefault()
   validate()
})



