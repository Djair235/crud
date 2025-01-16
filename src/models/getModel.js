const connection = require("../database/db")

async function getAll(req, res) {
    const query = "SELECT * from clientes"
    const [ rows ] = await connection.execute(query)
    return res.status(200).json(rows)
}

module.exports = { getAll }