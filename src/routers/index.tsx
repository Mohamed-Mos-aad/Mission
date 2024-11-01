import { Route, Routes } from "react-router-dom";
import AuthLayout from "../layouts/AuthLayout";
import Login from "../pages/auth/Login";
import Registration from "../pages/auth/Registration";
import Welcome from './../pages/auth/Welcome';

export default function Routers() {
    return (
        <>
            <Routes>
                <Route path="/" element={<AuthLayout/>}>
                    <Route index element={<Welcome/>}/>
                    <Route path="login" element={<Login/>}/>
                    <Route path="registration" element={<Registration/>}/>
                </Route>
            </Routes>
        </>
    )
}
