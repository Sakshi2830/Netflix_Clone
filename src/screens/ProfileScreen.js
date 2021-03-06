import React from 'react'
import { useSelector } from 'react-redux'
import Nav from '../Nav'
import {selectUser} from "../features/userSlice"
import {auth} from "../firebase"
import "./ProfileScreen.css"
import PlansScreen from './PlansScreen'
import FooterBar from '../footer'

function ProfileScreen() {
    const user = useSelector(selectUser)

    return (
        <div className="profileScreen">
            <Nav />
            <div className="profileScreen__body">
                <h1>Who is Watching?</h1>
            
            <div className="profileScreen__info">
                <img src="https://pbs.twimg.com/profile_images/1240119990411550720/hBEe3tdn_400x400.png" alt="avatar" />
                <div className="profileScreen__details">
                    <h2>{user.email}</h2>
                    <div className="profileScreen__plans">
                        <h3>Plans</h3>
                        <PlansScreen />
                        <button 
                        onClick={() => auth.signOut()}
                        className="profileScreen__signout">Sign Out</button>
                    </div>
                </div>
            </div>
            </div>
            <FooterBar/>
        </div>
    )
}

export default ProfileScreen 
