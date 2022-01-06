import React from 'react'
import Navbar from '../Components/Navbar[noAuth]'
import Login from '../Page/Login'
import Register from '../Page/Register'
import DefaultHome from '../Page/Home[default]'
import {Route} from 'wouter'

function Home() {
    return (
        <div>
            <Navbar />

            <Route path='/' component={DefaultHome} />
            <Route path='/login'  component={Login}/>
            <Route path='/register' component={Register}/>
            
        </div>
    )
}

export default Home
