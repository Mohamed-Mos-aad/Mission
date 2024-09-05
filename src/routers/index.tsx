import { Route, Routes } from "react-router-dom";
import Welcome from "../components/auth/Welcome";
import Registration from "../components/auth/Registration";
import LogIn from "../components/auth/LogIn";
import AuthLayout from "../pages/AuthLayout";
import ConfirmEmail from "../components/auth/ConfirmEmail";

export default function Routers() {
    return (
        <Routes>
            <Route path="/" element={<AuthLayout />}>
                <Route index element={<Welcome/>}/>
                <Route path="login" element={<LogIn/>}/>
                <Route path="registration" element={<Registration/>}/>
                <Route path="confrim-email" element={<ConfirmEmail/>}/>
            </Route>
        </Routes>
    )
}