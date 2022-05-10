export async function llenarPaises(){
    let data = await fetch('js/paises.json')
    let countries = data.json()
    return countries
}