import {FC, ReactElement } from "react"
import { createContext, useState, useCallback, useMemo, useContext } from "react"
import { ThemeProvider } from "@mui/material"
import { LightTheme, DarkTheme } from "../themes"
import { Box } from "@mui/system"

const ThemeContext = createContext({ themeName: "", toggleTheme: () => {} })

export const useAppThemeContext = () => {
    return useContext(ThemeContext)
}

export const AppThemeProvider: FC<{ children: ReactElement }> = (prop) => {
    const [themeName, setThemeName] = useState('light')

    const toggleTheme = useCallback(() => {
        setThemeName(oldThemeName => oldThemeName === 'light' ? 'dark' : 'light')
    }, [])

    const theme = useMemo(() => {
        if (themeName === "light") {
            return LightTheme
        }
        return DarkTheme
    }, [themeName])

    return (
        <ThemeContext.Provider value={{ themeName, toggleTheme }}>
            <ThemeProvider theme={theme}>
                <Box minWidth="100vw" minHeight="100vh" bgcolor={theme.palette.background.default}>
                    {prop.children}
                </Box>
            </ThemeProvider>
        </ThemeContext.Provider>
    )
}