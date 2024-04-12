import express from "express"
import { router } from "./routes"
import cors from "cors"

const app = express()

app.use(cors())
app.use(express.json()).use(express.urlencoded({ extended: true }))
app.use(router)

app.listen(8080, () => {
    console.log("rodando em http://localhost:8080")
})