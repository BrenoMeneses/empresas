import { Typography, Button } from "@mui/material"
import Table from "@mui/material/Table"
import TableBody from "@mui/material/TableBody"
import TableCell from "@mui/material/TableCell"
import TableContainer from "@mui/material/TableContainer"
import TableHead from "@mui/material/TableHead"
import TableRow from "@mui/material/TableRow"
import DeleteIcon from '@mui/icons-material/Delete'
import EditIcon from '@mui/icons-material/Edit';
import { useEffect, useState } from "react"

const Clients = [
    {
        id: "1",
        name: "Fulano da Silva",
        password: "hashedPassword123",
        corporateName: "Empresa Fictícia Ltda",
        cnpj: "12.345.678/0001-90",
        phone: "(11) 98765-4321",
        email: "fulano@empresafాficticia.com.br",
        createdAt: "2024-04-15T10:00:00.000Z",
        updatedAt: "2024-04-15T10:00:00.000Z",
        address: {
            id: "address-1",
            street: "Rua das Flores",
            number: 123,
            zipCode: "00000-000",
            createdAt: "2024-04-15T10:00:00.000Z",
            updatedAt: "2024-04-15T10:00:00.000Z",
        },
    },
    {
        id: "2",
        name: "Beltrana de Souza",
        password: "hashedPassword456",
        corporateName: "Comércio Legal",
        cnpj: "87.654.321/0001-11",
        phone: "(21) 5555-5555",
        email: "beltrana@comerciolegal.com",
        createdAt: "2024-04-14T15:30:00.000Z",
        updatedAt: "2024-04-14T15:30:00.000Z",
        address: {
            id: "address-2",
            street: "Avenida Paulista",
            number: 500,
            zipCode: "11111-111",
            createdAt: "2024-04-14T15:30:00.000Z",
            updatedAt: "2024-04-14T15:30:00.000Z",
        }
    }
]

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

export const ClientList = () => {

    const [clients, setClients] = useState<client[]>([])
    const [erro, setErro] = useState(false)
    useEffect(() => {
        fetch("http://localhost:8080/client").then((response) => { return response.json() })
            .then((data) => {
                setClients(data)
                setErro(false)
            }).catch((error) => {
                setClients(Clients)
            })
    }, [])

    function OnClickEdit(password: string, id: string) {
        const pass = prompt("digite senha")
        if (pass !== password) {
            return alert("voce errou a senha")
        }
        window.location.href = "/edicao/" + id
    }

    function OnClickDelete(password: string, id: string) {
        const pass = prompt("digite senha")
        if (pass !== password) {
            return alert("voce errou a senha")
        }
        fetch("http://localhost:8080/client/address/"+id, {method: "DELETE"})
        .then(()=>{window.location.reload()})
    }

    return (
        <TableContainer>
            {erro ? (<Typography sx={{ textAlign: "center", padding: 5 }}>algo deu errado</Typography>) :
                (<Table>
                    <TableHead>
                        <TableRow>
                            <TableCell></TableCell>
                            <TableCell>Nome</TableCell>
                            <TableCell>Nome da empresa</TableCell>
                            <TableCell>Email</TableCell>
                            <TableCell>Telefone</TableCell>
                            <TableCell>CEP</TableCell>
                            <TableCell>Endereço</TableCell>
                            <TableCell></TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {clients.map(client => (
                            <TableRow key={client.id}>
                                <TableCell sx={{ textAlign: "end" }}>
                                    <Button variant="contained" color="info" onClick={() => OnClickEdit(client.password, client.id)}> editar <EditIcon /></Button>
                                </TableCell>
                                <TableCell key={client.name}>{client.name}</TableCell>
                                <TableCell key={client.corporateName}>{client.corporateName}</TableCell>
                                <TableCell key={client.email}>{client.email}</TableCell>
                                <TableCell key={client.phone}>{client.phone}</TableCell>
                                <TableCell key={client.address.zipCode}>{client.address.zipCode}</TableCell>
                                <TableCell key={client.address.street}>{client.address.street} {client.address.number}</TableCell>
                                <TableCell sx={{ textAlign: "start" }}>
                                    <Button variant="contained" color="error" onClick={() => OnClickDelete(client.password, client.id)}>excluir <DeleteIcon /></Button>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>)
            }
        </TableContainer>
    )
}
