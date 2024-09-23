    import { Route, Routes } from "react-router-dom";
    import Welcome from "../components/auth/Welcome";
    import Registration from "../components/auth/Registration";
    import LogIn from "../components/auth/LogIn";
    import AuthLayout from "../pages/AuthLayout";
    import ConfirmEmail from "../components/auth/ConfirmEmail";
    import MainLayout from "../pages/MainLayout";
    import Tasks from "../pages/main/Tasks";

    export default function Routers() {
        return (
            <Routes>
                <Route path="/" element={<AuthLayout />}>
                    <Route index element={<Welcome/>}/>
                    <Route path="login" element={<LogIn/>}/>
                    <Route path="registration" element={<Registration/>}/>
                    <Route path="confirm-email" element={<ConfirmEmail/>}/>
                </Route>
                <Route path="u/" element={<MainLayout />}>
                    <Route index element={<Tasks/>}/>
                    <Route path="tasks" element={<Tasks/>}/>
                </Route>
            </Routes>
        )
    }