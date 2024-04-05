import express, { Request, Response } from "express"

const app = express()

app.use(express.json()).use(express.urlencoded({ extended: true }))

app.get("/:nome", (req: Request, res: Response) => {
    
    res.send("OLA " + req.params.nome.toUpperCase())
})

app.listen(8080, () => {
    console.log("rodando em http://localhost:8080")
})