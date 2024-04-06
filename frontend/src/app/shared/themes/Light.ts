import { createTheme } from "@mui/material"
import { cyan, yellow } from "@mui/material/colors"

export const LightTheme = createTheme({
    palette: {
        primary: {
            main: cyan[700],
            dark: cyan[800],
            light: cyan[500],
            contrastText: "#fff"
        },
        secondary: {
            main: yellow[500],
            dark: yellow[400],
            light: yellow[300],
            contrastText: "#fff"
        },
        background: {
            default: "#f7f6f3",
            paper: "#fff",
        }
    }
})