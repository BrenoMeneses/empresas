import { TextField, Button, Box } from '@mui/material'
import { useForm } from "react-hook-form"

interface UserFieldsValue {
    name: string
    email: string
    password: string
}

export function UserFields() {
    const { register } = useForm()

    return (
        <>
            <TextField
                variant='outlined'
                label="Nome"
                type='text'
                sx={{ marginY: 2, width: 400 }}
                {...register("name")}
            />
            <TextField
                variant='outlined'
                label="Email"
                type='email'
                sx={{ marginY: 2, width: 400 }}
                {...register("email", { required: true })}
            />
            <Box width="100%" sx={{ display: "flex", justifyContent: "center" }}>
                <TextField
                    variant='outlined'
                    label="Senha"
                    type='password'
                    sx={{ marginX: 1, marginY: 2, width: 200 }}
                />
                <TextField
                    variant='outlined'
                    label="Confirme a senha"
                    type='password'
                    sx={{ marginX: 1, marginY: 2, width: 200 }}
                    {...register("password")}
                />
            </Box>
            <Button type='submit' variant='contained'>ENVIAR</Button>
        </>
    )
}

export function CorporateFields() {

    return (
        <>
            <TextField
                variant='outlined'
                label="Nome da empresa"
                type='text'
                name='corporateName'
                sx={{ marginY: 2, width: 400 }}
            />
            <TextField
                variant='outlined'
                label="Cnpj da empresa"
                type='text'
                name='cnpj'
                sx={{ marginY: 2, width: 400 }}
            />
            <TextField
                variant='outlined'
                label="Telefone pra contato"
                type='text'
                sx={{ marginY: 2, width: 400 }}
            />
            <Button type='submit' variant='contained'>ENVIAR</Button>
        </>
    )
}

export function AddressFields() {

    return (
        <>
            <TextField
                variant='outlined'
                label="CEP"
                type='text'
                name='CEP'
                sx={{ marginY: 2, width: 400 }}
            />
            <TextField
                variant='outlined'
                label="Nome da rua"
                type='text'
                name='cnpj'
                sx={{ marginY: 2, width: 400 }}
            />
            <TextField
                variant='outlined'
                label="Número"
                type='number'
                sx={{ marginY: 2, width: 400 }}
            />
            <Button type='submit' variant='contained'>ENVIAR</Button>
        </>
    )
}