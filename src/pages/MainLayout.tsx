import style from '../style/pages/mainLayout.module.css'
import { Outlet } from "react-router-dom";
import NavBar from "../components/NavBar";

export default function MainLayout() {
    return (
        <>
            <div className={style.mainLayout_container}>
                <NavBar/>
                <Outlet/>
            </div>
        </>
    )
}
