import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import { LoginEmpress } from "../pages/CreateEmpress";
import { UserPage } from "../pages/UserPage";

export function Router() {

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Navigate to="/cadastro" />} />
                <Route path="/sobre" />
                <Route path="/cadastro" element={<LoginEmpress />} />
                <Route path="/usuario" element={<UserPage />} />
            </Routes>
        </BrowserRouter>
    )
}