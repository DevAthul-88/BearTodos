function Token(){

    const token = localStorage.getItem('todo_token')

    if(token == null) return null

    return token


}

module.exports = Token;