const express = require("express")
const router = express.Router()
const app = express()

router.get("/home", (req, res) => {
    res.send("Router está funcionando!")
})

router.get("/form", (req, res) => {
    res.render("form")
})
module.exports = router