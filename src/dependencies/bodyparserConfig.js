const bodyParser = require("body-parser");

function bodyparserConfig(app) {
    app.use(bodyParser.urlencoded({ extended: true })); // Habilita o uso de URL-encoded (dados de formulário)
    app.use(bodyParser.json()); // Habilita o uso de JSON (caso você envie JSON também)
}

module.exports = bodyparserConfig
