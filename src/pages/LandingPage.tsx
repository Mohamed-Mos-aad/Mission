import style from '../css/pages/landingPage.module.css'
import logo from '../assets/AppLogo.png'
import { ArrowDown } from 'lucide-react'
import { useState } from 'react';
import Registration from '../components/Registration';
import Login from '../components/Login';



export default function LandingPage() {
    // ** States
    const [userState,setUserState] = useState('login');





    // ** Handlers
    const handleRegitration = ()=>{setUserState('registration')};

    const handleLogin = ()=>{setUserState('login')};

    const handleUserState = ()=>{
        switch(userState){
            case 'welcome':
                return (
                    <div className={style.welcome}>
                        <h1>Welcome <br /> to Mission <br /> app</h1>
                        <div className={style.btnsContainer}>
                            <button onClick={handleRegitration}>Sign up</button>
                            <button onClick={handleLogin}>Log in</button>
                        </div>
                    </div>
                )
            case 'registration':
                return renderRegistration;
            case 'login':
                return renderLogin
        }
    };



    


    // ** Renders
    const renderRegistration = (
        <div className={style.welcome}>
            <Registration/>
            <p>If you already have an account. <span onClick={handleLogin}>Log in</span></p>
        </div>
    );

    const renderLogin = (
        <div className={style.welcome}>
            <Login/>
            <p>If you already don't have an account. <span onClick={handleRegitration}>Sign Up</span></p>
        </div>
    );





    return (
        <>
            <div className={style.landingContainer}>
                <div className={style.logo}>
                    <img src={logo} alt="Logo" />
                    <span><ArrowDown /></span>
                </div>
                {handleUserState()}
            </div>
        </>
    )
}
