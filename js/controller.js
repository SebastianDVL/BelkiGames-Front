const gamesContainer= document.querySelector("#games")
const gameTemplate = document.querySelector("[data-game]")

for(i = 0; i<13; i++){
    let container = gameTemplate.content.cloneNode(true).children[0]


    gamesContainer.appendChild(container)

}