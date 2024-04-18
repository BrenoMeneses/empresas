import { Box, Button, TextField, Typography } from "@mui/material"
import { useEffect, useState } from "react"
import { useForm } from "react-hook-form"
import { useParams } from "react-router-dom"

interface client {
    id: string
    name: string
    password: string
    corporateName: string
    cnpj: string
    phone: string
    email: string
    createdAt: string
    updatedAt: string
    address: {
        id: string
        street: string
        number: number
        zipCode: string
        createdAt: string
        updatedAt: string
    }
}

export const EditForm = () => {
    const { id } = useParams()
    const [value, setValue] = useState<client>()
    const [erro, setErro] = useState(false)
    const { register, handleSubmit } = useForm()

    useEffect(() => {
        fetch("http://localhost:8080/client/" + id).then((response) => { return response.json() })
            .then((data) => {
                setValue(data)
                console.log(value)
                setErro(false)
            }).catch((error) => {
                setErro(true)
            })
    }, [])

    function OnSubmit(data: any) {
        console.log(data)
    }

    return (
        <Box sx={{ width: { xs: "100%", sm: "70%" }, margin: "auto", padding: 1, boxSizing: { xs: "border-box" } }}>
            {value ?
                (<Box component={"form"} sx={{ width: "100%", display: "flex", flexDirection: "column", alignItems: "center" }} onSubmit={handleSubmit(OnSubmit)}>

                    <Box width="100%" sx={{ display: "flex", justifyContent: "center", alignItems: { xs: "center", md: "start" }, flexDirection: { xs: "column", md: "row" } }}>
                        <TextField
                            sx={{ marginX: { md: 1 }, marginY: 2, width: { xs: "90%", md: "34%" } }}
                            label="Nome"
                            defaultValue={value?.name}
                            {...register("name")}
                        />

                        <TextField
                            sx={{ marginX: { md: 1 }, marginY: 2, width: { xs: "90%", md: "34%" } }}
                            label="Email"
                            defaultValue={value?.email}
                            {...register("email")}
                        />

                    </Box>
                    <Box width="100%" sx={{ display: "flex", justifyContent: "center", alignItems: { xs: "center", md: "start" }, flexDirection: { xs: "column", md: "row" } }}>
                        <TextField
                            sx={{ marginX: { md: 1 }, marginY: 2, width: { xs: "90%", md: "34%" } }}
                            label="Nome da empresa"
                            defaultValue={value?.corporateName}
                            {...register("corporateName")}
                        />
                        <TextField
                            sx={{ marginX: { md: 1 }, marginY: 2, width: { xs: "90%", md: "34%" } }}
                            label="CNPJ"
                            defaultValue={value?.cnpj}
                            {...register("cnpj")}
                        />

                        <TextField
                            sx={{ marginX: { md: 1 }, marginY: 2, width: { xs: "90%", md: "34%" } }}
                            label="Telefone"
                            defaultValue={value?.phone}
                            {...register("phone")}
                        />

                    </Box>
                    <Box width="100%" sx={{ display: "flex", justifyContent: "center", alignItems: { xs: "center", md: "start" }, flexDirection: { xs: "column", md: "row" } }}>
                        <TextField
                            sx={{ marginX: { md: 1 }, marginY: 2, width: { xs: "90%", md: "34%" } }}
                            label="CEP"
                            defaultValue={value?.address.zipCode}
                            {...register("zipCode")}
                        />

                        <TextField
                            sx={{ marginX: { md: 1 }, marginY: 2, width: { xs: "90%", md: "34%" } }}
                            label="Rua"
                            defaultValue={value?.address.street}
                            {...register("street")}
                        />

                        <TextField
                            sx={{ marginX: { md: 1 }, marginY: 2, width: { xs: "90%", md: "34%" } }}
                            label="Número"
                            defaultValue={value?.address.number}
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

                </Box>)
                : (<Typography sx={{ textAlign: "center", padding: 5 }}>algo deu errado</Typography>)
            }
        </Box>
    )
}