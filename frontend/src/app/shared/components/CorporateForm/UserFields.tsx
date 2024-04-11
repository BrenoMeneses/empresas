import { TextField, Box, Button } from '@mui/material'
import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"

interface propUserFields {
    HandleNext: (data: any) => void
    HandleBack: () => void
    activeStep: number
    value: any
}

interface UserFieldsValue {
    name: string
    email: string
    password: string
    passConf: string
}

const userFieldSchema = yup.object({
    name: yup.string().required("campo obrigatório"),
    email: yup.string().required("campo obrigatório").email("emil inválido"),
    password: yup.string().required("campo obrigatório"),
    passConf: yup.string().required("campo obrigatório").oneOf([yup.ref('password')], 'senhas diferentes')
})

export function UserFields({ activeStep, HandleNext, HandleBack, value }: propUserFields) {
    const { register, handleSubmit, formState: { errors } } = useForm<UserFieldsValue>({ resolver: yupResolver(userFieldSchema) })
    const onSubmit = (data: UserFieldsValue) => {
        HandleNext(data)
    }

    return (
        <Box component={"form"} onSubmit={handleSubmit(onSubmit)} sx={{ width: "100%", display: "flex", flexDirection: "column", alignItems: "center" }}>
            <TextField
                error={errors.name?.message ? true : false}
                helperText={errors.name?.message}
                variant='outlined'
                label='Nome'
                type='text'
                
                defaultValue={ value.name || ""}
                sx={{ marginY: 2, width: {xs: "90%", md: "70%"} }}
                {...register("name")}
            />
            <TextField
                
                error={errors.email?.message ? true : false}
                helperText={errors.email?.message}
                variant='outlined'
                label='Email'
                type='email'
                defaultValue={ value.email || ""}
                sx={{ marginY: 2, width: {xs: "90%", md: "70%"} }}
                {...register("email")}
            />
            <Box width="100%" sx={{ display: "flex", justifyContent: "center", alignItems: {xs: "center", md: "start"}, flexDirection: {xs: "column", md: "row"}}}>
                <TextField
                    error={errors.password?.message ? true : false}
                    helperText={errors.password?.message}
                    variant='outlined'
                    label='Senha'
                    type='password'
                    defaultValue={ value.password || ""}
                    {...register("password")}
                    sx={{ marginX: {md: 1}, marginY: 2, width: {xs: "90%", md: "34%"} }}
                />
                <TextField
                    error={errors.passConf?.message ? true : false}
                    helperText={errors.passConf?.message}
                    variant='outlined'
                    label='Confirme a senha'
                    type='password'
                    defaultValue={ value.passConf || ""}
                    {...register("passConf")}
                    sx={{ marginX: {md: 1}, marginY: 2, width: {xs: "90%", md: "34%"} }}
                />
            </Box>
            <Box sx={{ width: "90%", display: 'flex', flexDirection: 'row', pt: 2 }}>
                <Button
                    color="inherit"
                    disabled={activeStep === 0}
                    onClick={HandleBack}
                    sx={{ mr: 1 }} >
                    Voltar
                </Button>
                <Box sx={{ flex: '1 1 auto' }} />
                <Button type="submit" color="primary" variant="outlined">
                    Próximo
                </Button>
            </Box>
        </Box>
    )
}
// git config --global user.email "brenomenesesdiaz@gmail.com.br"
// git config --global user.name "breno"