import { BrowserRouter, Route, Routes } from "react-router-dom";
import { CreateEmpress } from "../pages/CreateEmpress";

import { Button } from "@mui/material";
import { useAppThemeContext } from "../shared/contexts";

export function Router() {
    const { toggleTheme } = useAppThemeContext()

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<CreateEmpress />} />
                <Route path="/sobre" element={<Button variant="contained" color="primary" onClick={toggleTheme}>macaco macaco</Button>} />
                <Route path="/usuario" />
            </Routes>
        </BrowserRouter>
    )
}