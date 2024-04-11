import { TextField, Box, Button } from '@mui/material'
import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"

interface UserFieldsValue {
    name: string
    email: string
    password: string
    passConf: string
}

interface propUserFields {
    HandleNext: (data: any) => void
    HandleBack: () => void
    activeStep: number
}

const userFieldSchema = yup.object({
    name: yup.string().required("campo obrigatório"),
    email: yup.string().required("campo obrigatório").email("emil inválido"),
    password: yup.string().required("campo obrigatório"),
    passConf: yup.string().required("campo obrigatório").oneOf([yup.ref('password')], 'senhas diferentes')
})

const steps = ['Informações do usuário', 'informações da empresa', 'endereço']
export function UserFields({ activeStep, HandleNext, HandleBack }: propUserFields) {
    const { register, handleSubmit, formState: { errors } } = useForm<UserFieldsValue>({ resolver: yupResolver(userFieldSchema) })

    const onSubmit = (data: any) => {
        HandleNext(data)
    }

    return (
        <Box component={"form"} onSubmit={handleSubmit(onSubmit)} sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
            <TextField
                error={errors.name?.message ? true : false}
                helperText={errors.name?.message}
                variant='outlined'
                label='Nome'
                type='text'
                sx={{ marginY: 2, width: 416 }}
                {...register("name")}
            />
            <TextField
                error={errors.email?.message ? true : false}
                helperText={errors.email?.message}
                variant='outlined'
                label='Email'
                type='email'
                sx={{ marginY: 2, width: 416 }}
                {...register("email")}
            />
            <Box width="100%" sx={{ display: "flex", justifyContent: "center" }}>
                <TextField
                    error={errors.password?.message ? true : false}
                    helperText={errors.password?.message}
                    variant='outlined'
                    label='Senha'
                    type='password'
                    {...register("password")}
                    sx={{ marginX: 1, marginY: 2, width: 200 }}
                />
                <TextField
                    error={errors.passConf?.message ? true : false}
                    helperText={errors.passConf?.message}
                    variant='outlined'
                    label='Confirme a senha'
                    type='password'
                    {...register("passConf")}
                    sx={{ marginX: 1, marginY: 2, width: 200 }}
                />
            </Box>
            <Box sx={{ width: "100%", display: 'flex', flexDirection: 'row', pt: 2 }}>
                <Button
                    color="inherit"
                    disabled={activeStep === 0}
                    onClick={HandleBack}
                    sx={{ mr: 1 }} >
                    Back
                </Button>
                <Box sx={{ flex: '1 1 auto' }} />
                <Button type="submit" color="primary" variant="outlined">
                    {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
                </Button>
            </Box>
        </Box>
    )
}

export function AddressFields() {

    return (
        <>
            <TextField
                variant='outlined'
                label='CEP'
                type='text'
                name='CEP'
                sx={{ marginY: 2, width: 416 }}
            />
            <TextField
                variant='outlined'
                label='Nome da rua'
                type='text'
                name='cnpj'
                sx={{ marginY: 2, width: 416 }}
            />
            <TextField
                variant='outlined'
                label='Número'
                type='number'
                sx={{ marginY: 2, width: 416 }}
            />
        </>
    )
}
// git config --global user.email "brenomenesesdiaz@gmail.com.br"
// git config --global user.name "breno"