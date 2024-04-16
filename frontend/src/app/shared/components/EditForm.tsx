import { Box, Button, TextField } from "@mui/material"
import { useForm } from "react-hook-form"

export const EditForm = () => {
    const { register, handleSubmit } = useForm()

    function OnSubmit(data: any) {
        console.log(data)
    }

    return (
        <Box sx={{ width: { xs: "100%", sm: "50%" }, margin: "auto", padding: 1, boxSizing: { xs: "border-box" } }}>
            <Box component={"form"} sx={{ width: "100%", display: "flex", flexDirection: "column", alignItems: "center" }} onSubmit={handleSubmit(OnSubmit)}>

                <Box width="100%" sx={{ display: "flex", justifyContent: "center", alignItems: { xs: "center", md: "start" }, flexDirection: { xs: "column", md: "row" } }}>
                    <TextField
                        sx={{ marginX: { md: 1 }, marginY: 2, width: { xs: "90%", md: "34%" } }}
                        label="Nome"
                        {...register("name")}
                    />

                    <TextField
                        sx={{ marginX: { md: 1 }, marginY: 2, width: { xs: "90%", md: "34%" } }}
                        label="Email"
                        {...register("email")}
                    />

                </Box>
                <Box width="100%" sx={{ display: "flex", justifyContent: "center", alignItems: { xs: "center", md: "start" }, flexDirection: { xs: "column", md: "row" } }}>
                    <TextField
                        sx={{ marginX: { md: 1 }, marginY: 2, width: { xs: "90%", md: "34%" } }}
                        label="Nome da empresa"
                        {...register("corporateName")}
                    />
                    <TextField
                        sx={{ marginX: { md: 1 }, marginY: 2, width: { xs: "90%", md: "34%" } }}
                        label="CNPJ"
                        {...register("cnpj")}
                    />

                    <TextField
                        sx={{ marginX: { md: 1 }, marginY: 2, width: { xs: "90%", md: "34%" } }}
                        label="Telefone"
                        {...register("phone")}
                    />

                </Box>
                <Box width="100%" sx={{ display: "flex", justifyContent: "center", alignItems: { xs: "center", md: "start" }, flexDirection: { xs: "column", md: "row" } }}>
                    <TextField
                        sx={{ marginX: { md: 1 }, marginY: 2, width: { xs: "90%", md: "34%" } }}
                        label="CEP"
                        {...register("zipCode")}
                    />

                    <TextField
                        sx={{ marginX: { md: 1 }, marginY: 2, width: { xs: "90%", md: "34%" } }}
                        label="Rua"
                        {...register("street")}
                    />

                    <TextField
                        sx={{ marginX: { md: 1 }, marginY: 2, width: { xs: "90%", md: "34%" } }}
                        label="Número"
                        {...register("number")}
                    />

                </Box>
                <Box sx={{ width: "90%", display: 'flex', flexDirection: 'row', pt: 2 }}>
                    <Button
                        color="error"
                        variant="outlined"
                        sx={{ mr: 1 }}
                        href="/lista"
                    >
                        Cancelar
                    </Button>
                    <Box sx={{ flex: '1 1 auto' }} />
                    <Button type="submit" color="primary" variant="outlined">
                        Confirar
                    </Button>
                </Box>

            </Box>
        </Box>
    )
}