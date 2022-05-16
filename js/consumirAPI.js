export async function consumirAPI(url,parameters){
    let res = await fetch(url,parameters)
    let data = res.json()
    return data
}