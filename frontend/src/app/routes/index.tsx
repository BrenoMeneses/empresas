import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom"
import { CreateEmpress, ListEmpress } from "../pages"

export function Router() {

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Navigate to="/cadastro" />} />
                <Route path="/lista" element={<ListEmpress />} />
                <Route path="/cadastro" element={<CreateEmpress />} />
                <Route path="/edicao" />
            </Routes>
        </BrowserRouter>
    )
}