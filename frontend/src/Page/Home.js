import React from 'react'
import Navbar from '../Components/Navbar[noAuth]'
import Login from '../Page/Login'
import Register from '../Page/Register'
import DefaultHome from '../Page/Home[default]'
import {Route} from 'wouter'

function Home({isAuth},user) {
    console.log(user);
    return (

        <div>
            <Navbar />
            <h1>{user.firstName}</h1>
            <Route path='/' component={DefaultHome} />
            <Route path='/login' >
                <Login isAuth={isAuth}/>
            </Route>
            <Route path='/register' component={Register}/>
            
        </div>
    )
}

export default Home
