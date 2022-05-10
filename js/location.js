export async function getLocation(){
    let response = await fetch('http://ip-api.com/json')
    let data = response.json()
    return data
}
