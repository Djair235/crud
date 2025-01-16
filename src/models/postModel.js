const connection = require("../database/db")
const date = require("../date/date")

async function postAll(req, res) {
    const { nome, idade } = req.body
    if (!nome || !idade) {
        return false
    } else {
        const dataAtual = date.mostrarData()
        const query = "INSERT INTO clientes(nome, idade, created_at) values (?, ?, ?)"
        const [rows] = await connection.execute(query, [nome, idade, dataAtual])
        return res.status(201).json({ mensagem: "Informações gravadas com sucesso!" })
    }
}

module.exports = { postAll }