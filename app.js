// CARREGANDO OS MODULOS \\
const express = require("express");
const handlebras = require("express-handlebars");
const bodyParser = require("body-parser");
const app = express();
const  admin = require('./routes/admin');

//const mongoose = require("mongoose");


// BODY PARSER \\
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// HANDLEBARS \\
app.engine('handlebars', handlebras({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');

// MONGOOSE \\
    ///
    
// ROTAS \\
app.use('/admin', admin);

// OUTROS \\
const PORT = 4200;
app.listen(PORT, () => {
    console.log("Servidor rodando!")
});