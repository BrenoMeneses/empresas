import { Typography } from "@mui/material"
import Table from "@mui/material/Table"
import TableBody from "@mui/material/TableBody"
import TableCell from "@mui/material/TableCell"
import TableContainer from "@mui/material/TableContainer"
import TableHead from "@mui/material/TableHead"
import TableRow from "@mui/material/TableRow"
import { useEffect, useState } from "react"

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
        zipcode: string
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
                setErro(true)
            })
    }, [])



    return (
        <TableContainer>
            {erro ? (<Typography sx={{ textAlign: "center", padding: 5 }}>algo deu errado</Typography>) :
                (<Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>nome</TableCell>
                            <TableCell>nome da empresa</TableCell>
                            <TableCell>esdereco</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {clients.map(client => (
                            <TableRow key={client.id}>
                                <TableCell key={client.name}>{client.name}</TableCell>
                                <TableCell key={client.corporateName}>{client.corporateName}</TableCell>
                                <TableCell key={client.address.zipcode}>{client.address.street} {client.address.number}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>)
            }
        </TableContainer>
    )
}
