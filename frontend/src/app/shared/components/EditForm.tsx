import { Box, Button, TextField, Typography } from "@mui/material"
import React, { useEffect, useState } from "react"
import { useForm } from "react-hook-form"
import { useParams } from "react-router-dom"
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"
import { cnpj } from 'cpf-cnpj-validator'
import { IMaskInput } from 'react-imask'

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

interface editFields {
    name: string
    corporateName: string
    cnpj: string
    phone: string
    email: string
    street: string
    number: string
    zipCode: string
}

const EditSchema = yup.object({
    name: yup.string().required("campo obrigatório"),
    email: yup.string().required("campo obrigatório").email("emil inválido"),
    corporateName: yup.string().required("campo obrigatório"),
    cnpj: yup.string().required("campo obrigatório").test('cnpjValido', 'CNPJ inválido', (value) => { return cnpj.isValid(value) }),
    phone: yup.string().required("campo obigatório").length(15, "telefone precisa ter 14 caracteres"),
    zipCode: yup.string().required("campo obrigatório"),
    street: yup.string().required("campo obrigatório"),
    number: yup.string().required("campo obigatório")
})

export const EditForm = () => {
    const { id } = useParams()
    const [value, setValue] = useState<client>()
    const { register, handleSubmit, formState: { errors } } = useForm<editFields>({ resolver: yupResolver(EditSchema) })

    useEffect(() => {
        fetch("http://localhost:8080/client/" + id).then((response) => { return response.json() })
            .then((data) => {
                setValue(data)
            }).catch((error) => { console.log(error) })
    }, [])

    function OnSubmit(data: editFields) {
        console.log(data)
        fetch("http://localhost:8080/client/address/" + id, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        }).then(() => { document.location.href = "/lista" })
        .catch((error) => { console.log(error) })
    }

    return (
        <Box sx={{ width: { xs: "100%", sm: "70%" }, margin: "auto", padding: 1, boxSizing: { xs: "border-box" } }}>
            {value ?
                (<Box component={"form"} sx={{ width: "100%", display: "flex", flexDirection: "column", alignItems: "center" }} onSubmit={handleSubmit(OnSubmit)}>

                    <Box width="100%" sx={{ display: "flex", justifyContent: "center", alignItems: { xs: "center", md: "start" }, flexDirection: { xs: "column", md: "row" } }}>
                        <TextField
                            error={errors.name ? true : false}
                            helperText={errors.name?.message}
                            sx={{ marginX: { md: 1 }, marginY: 2, width: { xs: "90%", md: "34%" } }}
                            label="Nome"
                            defaultValue={value?.name}
                            {...register("name")}
                        />
                        <TextField
                            error={errors.email ? true : false}
                            helperText={errors.email?.message}
                            sx={{ marginX: { md: 1 }, marginY: 2, width: { xs: "90%", md: "34%" } }}
                            label="Email"
                            defaultValue={value?.email}
                            {...register("email")}
                        />
                    </Box>
                    <Box width="100%" sx={{ display: "flex", justifyContent: "center", alignItems: { xs: "center", md: "start" }, flexDirection: { xs: "column", md: "row" } }}>
                        <TextField
                            error={errors.corporateName ? true : false}
                            helperText={errors.corporateName?.message}
                            sx={{ marginX: { md: 1 }, marginY: 2, width: { xs: "90%", md: "34%" } }}
                            label="Nome da empresa"
                            defaultValue={value?.corporateName}
                            {...register("corporateName")}
                        />
                        <TextField
                            error={errors.cnpj ? true : false}
                            helperText={errors.cnpj?.message}
                            InputProps={{ inputComponent: MaskCnpjInput as any }}
                            sx={{ marginX: { md: 1 }, marginY: 2, width: { xs: "90%", md: "34%" } }}
                            label="CNPJ"
                            defaultValue={value?.cnpj}
                            {...register("cnpj")}
                        />
                        <TextField
                            error={errors.phone ? true : false}
                            helperText={errors.phone?.message}
                            InputProps={{ inputComponent: MaskPhoneInput as any }}
                            sx={{ marginX: { md: 1 }, marginY: 2, width: { xs: "90%", md: "34%" } }}
                            label="Telefone"
                            defaultValue={value?.phone}
                            {...register("phone")}
                        />
                    </Box>
                    <Box width="100%" sx={{ display: "flex", justifyContent: "center", alignItems: { xs: "center", md: "start" }, flexDirection: { xs: "column", md: "row" } }}>
                        <TextField
                            error={errors.zipCode ? true : false}
                            helperText={errors.zipCode?.message}
                            sx={{ marginX: { md: 1 }, marginY: 2, width: { xs: "90%", md: "34%" } }}
                            label="CEP"
                            defaultValue={value?.address.zipCode}
                            {...register("zipCode")}
                        />
                        <TextField
                            error={errors.street ? true : false}
                            helperText={errors.street?.message}
                            sx={{ marginX: { md: 1 }, marginY: 2, width: { xs: "90%", md: "34%" } }}
                            label="Rua"
                            defaultValue={value?.address.street}
                            {...register("street")}
                        />
                        <TextField
                            error={errors.number ? true : false}
                            helperText={errors.number?.message}
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
                : (<Typography sx={{ textAlign: "center", padding: 5 }}>algo deu errado</Typography>)}

        </Box>
    )
}

const MaskCnpjInput = React.forwardRef<HTMLInputElement>((props, ref) => {
    const { ...other } = props
    return (
        <IMaskInput mask="00.000.000/0000-00" {...other} inputRef={ref} />
    )
})

const MaskPhoneInput = React.forwardRef<HTMLInputElement>((props, ref) => {
    const { ...other } = props
    return (
        <IMaskInput mask="(00) 00000-0000" {...other} inputRef={ref} />
    )
})