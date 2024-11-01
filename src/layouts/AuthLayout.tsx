import { Outlet } from "react-router-dom";
import style from '../style/layouts/authLayout.module.css'
import authLogo from '../assets/authLogo.svg'




export default function AuthLayout() {
    return (
        <>
            <div className={style.authLayout_container}>
                <div className={style.auth_side}>
                    <img src={authLogo} alt="App Logo" />
                    <h1>Mission</h1>
                </div>
                <Outlet />
            </div>
        </>
    )
}
