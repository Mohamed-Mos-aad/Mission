import { Outlet } from "react-router-dom";
import style from '../css/layouts/mainLayout.module.css'
import NavBar from './../components/NavBar';


export default function MainLayout() {
    return (
        <div className={style.mainLayout_container}>
            <NavBar />
            <Outlet />
        </div>
    )
}
