import { TextField } from '@mui/material'

export function UserFields() {

    return (
        <>
            <TextField
                variant='standard'
                placeholder='digite seu nome'
                label="nome"
                type='text'
                name='name'
                sx={{ marginY: 2, width: 200 }}
            />
            <TextField
                variant='standard'
                label="nome da empresa"
                type='text'
                name='corporateName'
                sx={{ marginY: 2, width: 200 }}
            />
            <TextField
                variant='standard'
                label="senha"
                type='password'
                sx={{ marginY: 2, width: 200 }}
            />
            <TextField
                variant='standard'
                label="confirme a senha"
                type='password'
                sx={{ marginY: 2, width: 200 }}
            />
        </>
    )
}