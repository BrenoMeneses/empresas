import { Router } from "express"
import { addressModel } from "./model/addressModel"
import { clienteModel } from "./model/clientModel"

const router: Router = Router()

router.get("/client", clienteModel.getAll)
router.get("/client/:clientId", clienteModel.getById)
router.post("/client", clienteModel.create)
router.post("/client/address", clienteModel.createwithAddress)
router.put("/client/address/:clientId", clienteModel.updateWithAddress)
router.delete("/client/address/:clientId", clienteModel.delete)

router.get("/address", addressModel.getAll)
router.get("/address/:addressId", addressModel.getById)
router.post("/address", addressModel.create)

export { router }