const connection = require("../database/db")

async function deleteAll(req, res) {
    const { id } = req.body
    if (!id) {
        return false
    } else {
        const query = "DELETE from clientes WHERE id = ?"
        const updatedTask = await connection.execute(query, [id])
        return res.status(200).json({ mensagem: "Informações deletedas com sucesso!" })
    }
}

module.exports = { deleteAll }