const express = require("express")
const router = require("../src/routers/router")
const configs = require("../src/configs/configs")
const app = express()

// configurações
configs.handlebarsConfig(app)
configs.bodyparserConfig(app)
app.use(router)

app.listen(3000, () => {
    console.log("Servidor ONLINE na porta 3000")
})