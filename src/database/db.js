// const mysql2 = require("mysql2/promise")

// const connection = mysql2.createPool({
//     host: process.env.DB_HOST,
//     user: process.env.DB_USER,
//     password: process.env.DB_PASSWORD,
//     database: process.env.DB_DBNAME
// })

// module.exports = connection

const mysql2 = require("mysql2/promise")

const connection = mysql2.createPool({
    host: "bp2b5trmma0g1ptwublv-mysql.services.clever-cloud.com",
    user: "urluubulwd5kjjkp",
    password: "VQkTwRpL7V5wK1lwywOP",
    database: "bp2b5trmma0g1ptwublv"
})

module.exports = connection