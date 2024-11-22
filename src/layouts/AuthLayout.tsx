import authLogo from '../assets/authLogo.svg'
import { Outlet } from "react-router-dom";
import style from '../css/layouts/authLayout.module.css'

export default function AuthLayout() {
    return (
        <div className={style.auth_container}>
        <div className={style.auth_logo}>
            <img src={authLogo} alt="App Logo" />
            <h1>Mission</h1>
        </div>
        <Outlet />
    </div>
    )
}
