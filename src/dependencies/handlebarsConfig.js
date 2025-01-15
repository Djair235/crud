const path = require("path");
const { engine } = require("express-handlebars");

function handlebarsConfig(app) {
    app.engine(
        "handlebars",
        engine({
            defaultLayout: "main",
            layoutsDir: path.join(__dirname, "../views/layouts"), // Caminho para layouts
            partialsDir: path.join(__dirname, "../views/partials"), // Caso use partials
        })
    );
    app.set("view engine", "handlebars");
    app.set("views", path.join(__dirname, "../views")); // Caminho para views
}

module.exports = handlebarsConfig;
