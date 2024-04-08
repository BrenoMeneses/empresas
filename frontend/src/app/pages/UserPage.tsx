import { LateralMenu } from "../shared/components/UserPage/LateralMenu"
import { Box } from "@mui/material"

export const UserPage: React.FC = () => {

    return (
        <Box>
            <LateralMenu>
                <h1>NOME DO USUARIO</h1>
                <h2>EMAIL</h2>
            </LateralMenu>
        </Box>
    )
}