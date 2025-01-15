const express = require("express")
const router = require("../src/routers/router")
const handlebarsConfig = require("..//src/dependencies/handlebarsConfig")
const app = express()

app.use(router)
handlebarsConfig(app)

app.listen(3000, () => {
    console.log("Servidor ONLINE na porta 3000")
})