import { ThemeProvider } from "@mui/material"
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { CreateEmpress } from "../pages/CreateEmpress";

import { LightTheme } from "../shared/themes"
import { Button } from "@mui/material";

export function Router() {

    return (
        <ThemeProvider theme={LightTheme}>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<CreateEmpress />} />
                    <Route path="/sobre" element={<Button variant="contained" color="primary">macaco macaco</Button>} />
                    <Route path="/usuario" />
                </Routes>
            </BrowserRouter>
        </ThemeProvider>
    )
}