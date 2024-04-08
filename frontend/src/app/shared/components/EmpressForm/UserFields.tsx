import { TextField } from '@mui/material'

export function UserFields() {

    return (
        <>
            <TextField
                variant='outlined'
                label="nome"
                type='text'
                name='name'
                sx={{ marginY: 2, width: 300 }}
            />
            <TextField
                variant='outlined'
                label="nome da empresa"
                type='text'
                name='corporateName'
                sx={{ marginY: 2, width: 300 }}
            />
            <TextField
                variant='outlined'
                label="senha"
                type='password'
                sx={{ marginY: 2, width: 300 }}
            />
            <TextField
                variant='outlined'
                label="confirme a senha"
                type='password'
                name='password'
                sx={{ marginY: 2, width: 300 }}
            />
        </>
    )
}