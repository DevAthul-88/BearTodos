import axios from 'axios';

async function Token(){

    const token = localStorage.getItem('todo_token')

    if(token == null) return null

    let res = await axios.post('/user/verify' ,{token} , {headers:{Authorization:token}})

    console.log(res);

    return true


}

export default Token