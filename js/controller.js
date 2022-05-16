const gamesContainer= document.querySelector("#games")
const gameTemplate = document.querySelector("[data-game]")

for(i = 0; i<13; i++){
    let container = gameTemplate.content.cloneNode(true).children[0]
    gamesContainer.appendChild(container)

}
if(window.location.search.substring(6)){
    let sisas = document.querySelector("#iniciarSesion")
    sisas.innerHTML = ""
    sisas.innerHTML = `<i class="fa-solid fa-ghost mr-2"></i> ${window.location.search.substring(6)}`
    let li = document.createElement("li")
    let logout = document.createElement("i")
    let a = document.createElement("a")
    a.href = "forms.html"
    logout.classList.add("fa-solid", "fa-right-from-bracket")
    a.appendChild(logout)
    li.appendChild(a)
    sisas.parentElement.appendChild(li)
}
console.log(window.location.search.substring(6))