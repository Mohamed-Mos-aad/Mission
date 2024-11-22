import { Route, Routes } from "react-router-dom";
import AuthLayout from "../layouts/AuthLayout";
import Welcome from "../pages/auth/Welcome";
import Registration from "../pages/auth/Registration";
import ConfirmEmail from "../pages/auth/ConfirmEmail";
import LogIn from "../pages/auth/LogIn";

export default function Routers() {
    return (
    <Routes>
        <Route path="/" element={<AuthLayout />}>
            <Route index element={<Welcome />}/>
            <Route path="/registration" element={<Registration />}/>
            <Route path="/confirm-email" element={<ConfirmEmail />}/>
            <Route path="/login" element={<LogIn />}/>
        </Route>
    </Routes>
    )
}
