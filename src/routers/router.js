const express = require("express")
const getModel = require("../models/getModel")
const postModel = require("../models/postModel")

const router = express.Router()
const app = express()

// rotas
router.get("/home", (req, res) => {
    res.send("Router está funcionando!")
})

router.get("/form", (req, res) => {
    res.render("formulario")
})

router.post("/rotaFinal", postModel.postAll)

router.get("/rotadb", getModel.getAll)

module.exports = router