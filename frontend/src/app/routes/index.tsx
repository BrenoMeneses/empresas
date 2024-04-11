import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom"
import { CreateCorporates, ListCorporates } from "../pages"

export function Router() {

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Navigate to="/cadastro" />} />
                <Route path="/lista" element={<ListCorporates />} />
                <Route path="/cadastro" element={<CreateCorporates />} />
                <Route path="/edicao" />
            </Routes>
        </BrowserRouter>
    )
}