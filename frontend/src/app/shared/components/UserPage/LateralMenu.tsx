import { NavBar } from "./NavBar"
import { FC, ReactNode } from "react"
import { Box, Drawer, useTheme, Button } from "@mui/material"
import { useAppThemeContext } from "../../contexts";

export const LateralMenu: FC<{ children: ReactNode }> = ({ children }) => {
  const { toggleTheme } = useAppThemeContext()
  const theme = useTheme()

  return (
    <>
      <NavBar />
      <Drawer open={true} variant="permanent">
        <Box width={theme.spacing(28)}>
          macaco
        </Box>
      </Drawer>

      <Box height="100vh" marginLeft={theme.spacing(28)} padding="10px" >
        <Button variant="contained" color="primary" onClick={toggleTheme}>macaco macaco</Button>
        {children}
      </Box>
    </>
  )
}