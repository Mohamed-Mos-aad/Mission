import { Route, Routes } from "react-router-dom";
import AuthLayout from "../pages/AuthLayout";
import Welcome from "../components/auth/Welcome";
import Registration from "../components/auth/Registration";
import LogIn from "../components/auth/LogIn";

export default function Routers() {
    return (
        <Routes>
            <Route path="/Mission/" element={<AuthLayout />}>
                <Route index element={<Welcome/>}/>
                <Route path="login" element={<LogIn/>}/>
                <Route path="registration" element={<Registration/>}/>
            </Route>
        </Routes>
    )
}