import { Request, Response } from "express"
import prisma from "../connection/prismaClient"

interface client {
    id?: string
    name: string
    password: string
    corporateName: string
    cnpj: string
    phone: string
    email: string
    addressId: string
    createdAt?: Date
    updatedAt?: Date
}

class ClientModel {
    public async getAll(req: Request, res: Response) {
        try {
            const clients: client[] = await prisma.client.findMany({
                include: {
                    address: true
                },
                orderBy: {
                    createdAt: "desc"
                }
            })
            res.status(200).json(clients)
        } catch (error) {
            console.log("erro", error)
            res.sendStatus(500)
        }
    }

    public async getById(req: Request, res: Response) {
        try {
            const clientId = req.params.clientId

            const client: client | null = await prisma.client.findUnique({
                where: {
                    id: clientId
                },
                include: {
                    address: true
                }
            })
            res.status(200).json(client)
        } catch (error) {
            console.log("erro", error)
            res.sendStatus(500)
        }
    }

    public async create(req: Request, res: Response) {
        try {
            const newCliente: client = req.body

            const client: client = await prisma.client.create({
                data: {
                    name: newCliente.name,
                    password: newCliente.password,
                    corporateName: newCliente.corporateName,
                    cnpj: newCliente.cnpj,
                    phone: newCliente.phone,
                    email: newCliente.email,
                    addressId: newCliente.addressId
                }
            })
            res.status(200).json(client)
        } catch (error) {
            console.log("erro", error)
            res.sendStatus(500)
        }
    }

    public async createwithAddress(req: Request, res: Response) {
        try {
            const newData = req.body

            const client: client = await prisma.client.create({
                data: {
                    name: newData.name,
                    password: newData.password,
                    corporateName: newData.corporateName,
                    cnpj: newData.cnpj,
                    phone: newData.phone,
                    email: newData.email,
                    address: {
                        create: {
                            zipCode: newData.zipCode,
                            street: newData.street,
                            number: Number(newData.number)
                        }
                    }
                },
                include: {
                    address: true
                }
            })
            res.status(200).json(client)
        } catch (error) {
            console.log("erro", error)
            res.sendStatus(500)
        }
    }

    public async updateWithAddress(req: Request, res: Response) {
        try {
            const clientId = req.params.clientId
            const newData = req.body

            console.log(newData, clientId)

            const client = await prisma.client.update({
                where: {
                    id: clientId
                },
                data: {
                    name: newData.name,
                    corporateName: newData.corporateName,
                    cnpj: newData.cnpj,
                    phone: newData.phone,
                    email: newData.email,
                    address: {
                        update: {
                            zipCode: newData.zipCode,
                            street: newData.street,
                            number: Number(newData.number)
                        }
                    }
                },
                include: {
                    address: true
                }
            })
            res.status(200).json(client)
        } catch (error) {
            console.log("erro", error)
            res.sendStatus(500)
        }
    }

    public async delete(req: Request, res: Response) {
        try {
            const {clientId} = req.params
            const client = await prisma.client.delete({
                where: {
                    id: clientId
                },
                include: {
                    address: true
                }
            })
            res.status(200)
        } catch (error) {
            console.log("erro", error)
            res.sendStatus(500)
        }
    }
}

export const clienteModel = new ClientModel()