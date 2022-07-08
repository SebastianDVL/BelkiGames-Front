import {consumirAPI} from './consumirAPI.js'
export async function validate(){
    let email = document.querySelector("#username")

    let password = document.querySelector("#password")

    if(email && password){
        if(email.value == "" || password.value == ""){
            alert("Please enter your email and password")
        }else{
            let data = await consumirAPI('https://belkigames.herokuapp.com/api/v1/user/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                  },
                body: JSON.stringify({email:email.value,password:password.value})
            })
          
            if(data.success){
                window.location.href=(`./principal.html?user=${data.data[0].usuario}`)
            }
        }
    }
}
