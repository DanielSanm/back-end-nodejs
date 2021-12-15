const express = require("express")

const app = express()

app.get("/", function(req, res) {
    res.send("Hello world!")
})
.get("/:nome", function(req, res) {
    res.send(req.params.nome)
})

app.listen(8081, () => {
    console.log("Servidor rodando em http://localhost:8081")
})