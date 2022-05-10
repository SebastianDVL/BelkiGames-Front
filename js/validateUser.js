

export async function validate(){
    let email = document.querySelector("#username")

    let password = document.querySelector("#password")

    if(email && password){
        if(email.value == "" || password.value == ""){
            alert("Please enter your email and password")
        }else{
            let parametros ={
                method:"POST",
                headers:{
                    "Content-Type": "application/json"
                },
                body:{"email":email.value,"password":password.value}
            }
            let res = await fetch('https://belkigames.herokuapp.com/api/v1/user/login/',parametros)

            console.log(res.json())
        }
    }
}
