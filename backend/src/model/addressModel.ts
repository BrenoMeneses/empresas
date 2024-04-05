import { Request, Response } from "express"
import prisma from "../connection/prismaClient"

interface address {
    id?: string
    street: string
    number: number
    zipCode: string
    createdAt?: Date
    updatedAt?: Date
}

class AddressModel {
    public async getAll(req: Request, res: Response): Promise<void> {
        try {
            const addresses: address[] = await prisma.address.findMany()
            res.status(200).json(addresses)
        } catch (error) {
            console.log("erro", error)
            res.sendStatus(500)
        }
    }

    public async getById(req: Request, res: Response){
        try {
            const addressId = req.params.addressId

            const address: address | null = await prisma.address.findUnique({
                where: {
                    id: addressId
                }
            })
            res.status(200).json(address)
        } catch (error) {
            console.log("erro", error)
            res.sendStatus(500) 
        }
    }

    public async create(req: Request, res: Response): Promise<void> {
        try {
            const newAddress: address = req.body
            
            const address: address = await prisma.address.create({
                data: {
                    street: newAddress.street,
                    number: newAddress.number,
                    zipCode: newAddress.zipCode
                }
            })
            res.status(200).json(address)
        } catch (error) {
            console.log("erro", error)
            res.sendStatus(500)
        }
    }
}

export const addressModel = new AddressModel()