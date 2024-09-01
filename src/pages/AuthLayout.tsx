import style from '../style/pages/authLayout.module.css'
import logo from '../assets/WelcomeLogo.png'
import { ChevronDown } from 'lucide-react'
import { Outlet } from 'react-router-dom'





export default function AuthLayout() {
    return (
        <>
            <div className={style.authLayout_container}>
                <div className={style.auth_logo}>
                    <img src={logo} alt="" />
                    <h1>Mission</h1>
                    <span><ChevronDown /></span>
                </div>
                <div className={style.auth_component}>
                    <Outlet/>
                </div>
            </div>
        </>
    )
}
