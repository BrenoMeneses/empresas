import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';

const data = [
    {
        "id": "cluwu14hk0002mvhvlco1tr12",
        "name": "Ana Silva",
        "password": "senhaforte",
        "corporateName": "Silva & Cia",
        "cnpj": "99.123.456/0001-99",
        "phone": "21998765432",
        "email": "ana.silva@email.com",
        "createdAt": "2024-04-14T14:01:00.000Z",
        "updatedAt": "2024-04-14T14:01:00.000Z",
        "addressId": "cluwu14hk0002mvhv9xcoq111",
        "address": {
            "id": "cluwu14hk0002mvhv9xcoq111",
            "street": "sebastiano festa ",
            "number": 90,
            "zipCode": "02318420",
            "createdAt": "2024-04-12T15:37:54.680Z",
            "updatedAt": "2024-04-12T15:37:54.680Z"
        }
    },
    {
        "id": "cluwu14hk0003mvhvlco1tr23",
        "name": "Pedro Santos",
        "password": "123mudar",
        "corporateName": "Santos Comércio",
        "cnpj": "88.765.432/0001-11",
        "phone": "19321098765",
        "email": "pedro.santos@email.com",
        "createdAt": "2024-04-14T14:01:00.000Z",
        "updatedAt": "2024-04-14T14:01:00.000Z",
        "addressId": "cluwu14hk0003mvhv9xcoq222",
        "address": {
            "id": "cluwu14hk0003mvhv9xcoq222",
            "street": "sebastiano festa ",
            "number": 90,
            "zipCode": "02318420",
            "createdAt": "2024-04-12T15:37:54.680Z",
            "updatedAt": "2024-04-12T15:37:54.680Z"
        }
    },
    {
        "id": "cluwu14hk0004mvhvlco1tr34",
        "name": "Maria Oliveira",
        "password": "senha123",
        "corporateName": "Oliveira Inc.",
        "cnpj": "77.456.789/0001-33",
        "phone": "41987654321",
        "email": "maria.oliveira@email.com",
        "createdAt": "2024-04-14T14:01:00.000Z",
        "updatedAt": "2024-04-14T14:01:00.000Z",
        "addressId": "cluwu14hk0004mvhv9xcoq333",
        "address": {
            "id": "cluwu14hk0004mvhv9xcoq333",
            "street": "sebastiano festa ",
            "number": 90,
            "zipCode": "02318420",
            "createdAt": "2024-04-12T15:37:54.680Z",
            "updatedAt": "2024-04-12T15:37:54.680Z"
        }
    },
    {
        "id": "cluwu14hk0005mvhvlco1tr45",
        "name": "Carlos Souza",
        "password": "senhaforte2",
        "corporateName": "Souza & Filhos",
        "cnpj": "66.123.456/0001-44",
        "phone": "85341298765",
        "email": "carlos.souza@email.com",
        "createdAt": "2024-04-14T14:01:00.000Z",
        "updatedAt": "2024-04-14T14:01:00.000Z",
        "addressId": "cluwu14hk0005mvhv9xcoq444",
        "address": {
            "id": "cluwu14hk0005mvhv9xcoq444",
            "street": "sebastiano festa ",
            "number": 90,
            "zipCode": "02318420",
            "createdAt": "2024-04-12T15:37:54.680Z",
            "updatedAt": "2024-04-12T15:37:54.680Z"
        }
    },
    {
        "id": "cluwu14hk0006mvhvlco1tr56",
        "name": "Beatriz Ferreira",
        "password": "!mudarsenha",
        "corporateName": "Ferreira e Associados",
        "cnpj": "55.765.432/0001-55",
        "phone": "71976543210",
        "email": "beatriz.ferreira@email.com",
        "createdAt": "2024-04-12",
        "address": {
            "id": "cluwu14hk0001mvhv9xcoqggg",
            "street": "sebastiano festa ",
            "number": 90,
            "zipCode": "02318420",
            "createdAt": "2024-04-12T15:37:54.680Z",
            "updatedAt": "2024-04-12T15:37:54.680Z"
        }
    }
]

export const ClientList = () => {

    return (
        <TableContainer>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>nome</TableCell>
                        <TableCell>nome da empresa</TableCell>
                        <TableCell>esdereco</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {data.map(client => (
                        <TableRow>
                            <TableCell>{client.name}</TableCell>
                            <TableCell>{client.corporateName}</TableCell>
                            <TableCell>{client.address.street} {client.address.number}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    )
}