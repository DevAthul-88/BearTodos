export default function User(){

    let user =  JSON.parse(localStorage.getItem('user'))

    if(user == null || user == undefined) return null

    return user
}