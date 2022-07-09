import { consumirAPI } from "./consumirAPI.js"

export async function validateAndRegister(){
    let correo = document.querySelector("#correo")
    let nombre = document.querySelector("#nombre")
    let apellido = document.querySelector("#apellido")
    let usuario = document.querySelector("#usuario")
    let pais = document.querySelector("#pais")
    let contraseña1 = document.querySelector("#contraseña1")
    let contraseña2 = document.querySelector("#contraseña2")
    let mssg = document.querySelector("#mssg")

    let campos = [correo,nombre,apellido,usuario,pais,contraseña1,contraseña2]
    
    console.log(pais.value)

    if(campos.some(campo => campo.value == "")){
        mssg.textContent  = "Todos los campos son obligatorios!"
        campos.forEach(campo =>{
            if(campo.value == ""){
                campo.parentNode.classList.add("border-red-500","border-2")
            }
        })
    }else{
        if(contraseña1.value != contraseña2.value){
            mssg.textContent  = "Las contraseñas no coinciden!"
        }else{
            let res = await consumirAPI('https://belkigames.herokuapp.com/api/v1/user/', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                  },
                body: JSON.stringify({correo:correo.value,contraseña:contraseña1.value,nombre:nombre.value,apellidos:apellido.value,pais:pais.value,usuario:usuario.value})
            })

            console.log(res)
        }
    }

    campos.forEach(campo =>{
        campo.addEventListener("change", ()=>{
            if(campo.value != ""){
                campo.parentNode.classList.remove("border-red-500","border-2")
            }else{
                campo.parentNode.classList.add("border-red-500","border-2")
            }
        })
    })
    
}