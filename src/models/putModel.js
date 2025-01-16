const connection = require("../database/db")
const date = require("../date/date")

async function putAll(req, res) {
    const { nome2, idade2, id } = req.body
    if (!id || !nome2 || !idade2) {
        return false
    } else {
        const dataAtual = date.mostrarData()
        const query = "UPDATE clientes set nome = ?, idade = ? where id = ?"
        const updatedTask = await connection.execute(query, [nome2, idade2, id])
        return res.status(200).json({ mensagem: "Informações atualizadas com sucesso!" })
    }
}

module.exports = { putAll }