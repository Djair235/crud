const express = require("express")
const router = require("../src/routers/router")
const configs = require("../src/configs/configs")
const app = express()

app.use(router)
configs.handlebarsConfig(app)
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.listen(3000, () => {
    console.log("Servidor ONLINE na porta 3000")
})