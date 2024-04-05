import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import { CreateEmpress } from "../pages/CreateEmpress";

export function Router() {

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<CreateEmpress />} />
                <Route path="/sobre" />
                <Route path="/usuario" />
            </Routes>
        </BrowserRouter>
    )
}