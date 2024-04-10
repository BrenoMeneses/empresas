import { TextField, Box } from '@mui/material'
import { useState } from "react"

interface UserFieldsValue {
    name: string
    email: string
    password: string
}

interface propUserFields {
    updateStep: (value: boolean) => void
    updateUser: (value: UserFieldsValue) => void
}

export function UserFields({updateUser, updateStep}: propUserFields) {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [passConf, setPassConf] = useState("")
    const [error, setError] = useState("")
    const OnBlur = () => {
        const user = {
            name: name,
            email: email,
            password: password
        }
        if(!user.name || !user.email || !user.password){
            setError("algum campo não foi preenchido")
            updateStep(false)
            return 
        }
        if(passConf !== user.password) {
            setError("senhas diferentes")
            updateStep(false)
            return
        }
        setError("")
        updateStep(true)
        updateUser(user)
    }
    return (
        <>
            <TextField
                variant='outlined'
                label='Nome'
                type='text'
                name='name'
                onBlur={OnBlur}
                onChange={e => setName(e.target.value)}
                sx={{ marginY: 2, width: 416 }}
            />
            <TextField
                variant='outlined'
                label='Email'
                type='email'
                onBlur={OnBlur}
                onChange={e => setEmail(e.target.value)}
                sx={{ marginY: 2, width: 416 }}
            />
            <Box width="100%" sx={{ display: "flex", justifyContent: "center" }}>
                <TextField
                    variant='outlined'
                    label='Senha'
                    type='password'
                    name='password'
                    onBlur={OnBlur}
                    onChange={e => setPassword(e.target.value)}
                    sx={{ marginX: 1, marginY: 2, width: 200 }}
                />
                <TextField
                    variant='outlined'
                    label='Confirme a senha'
                    type='password'
                    name='passConf'
                    onBlur={OnBlur}
                    onChange={e => setPassConf(e.target.value)}
                    sx={{ marginX: 1, marginY: 2, width: 200 }}
                />
            </Box>
            {error && <Box color="red">{error}</Box>}
        </>
    )
}

export function CorporateFields() {

    return (
        <>
            <TextField
                variant='outlined'
                label='Nome da empresa'
                type='text'
                name='corporateName'
                sx={{ marginY: 2, width: 416 }}
            />
            <TextField
                variant='outlined'
                label='Cnpj da empresa'
                type='text'
                name='cnpj'
                sx={{ marginY: 2, width: 416 }}
            />
            <TextField
                variant='outlined'
                label='Telefone pra contato'
                type='text'
                sx={{ marginY: 2, width: 416 }}
            />
        </>
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