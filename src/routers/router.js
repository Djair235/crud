const express = require("express")
const configs = require("../dependencies/bodyparserConfig")
const router = express.Router()
const app = express()

router.get("/home", (req, res) => {
    res.send("Router está funcionando!")
})

router.get("/form", (req, res) => {
    res.render("formulario")
})

router.post("/rotaFinal", (req, res) => {
    res.send(`FORMULÁRIO deu certo! ${req.body.nome} - ${req.body.idade}`)
})

module.exports = router