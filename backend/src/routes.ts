import { Router } from "express"
import { addressModel } from "./model/addressModel"

const router: Router = Router()

router.get("/address", addressModel.getAll)
router.post("/address", addressModel.create)

export { router }