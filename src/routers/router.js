const express = require("express")
const getModel = require("../models/getModel")
const postModel = require("../models/postModel")
const putModel = require("../models/putModel")
const deleteModel = require("../models/deleteModel")

const router = express.Router()
const app = express()

// rotas
router.get("/home", (req, res) => {
    res.render("home")
})

router.get("/form", (req, res) => {
    res.render("formulario")
})

router.get("/rotaAtualizar", (req, res) => {
    res.render("atualizar")
})

router.get("/rotaDeletar", (req, res) => {
    res.render("deletar")
})

router.get("/rotaLer", getModel.getAll)
router.post("/rotaInserir", postModel.postAll)
router.post("/rota-put", putModel.putAll)
router.post("/rota-delete", deleteModel.deleteAll)

module.exports = router