//  importar modulo do framework express
let express = require('express');
// importar modulo do consign
let consign = require('consign');
// importar bodyParser
let bodyParser = require('body-parser');
let expressValidator = require('express-validator');

let app = express();

// setar variaveis view engine e views do express
app.set('view engine', 'ejs');
app.set('views', './app/views');
// configur o middleware express.static
app.use(express.static('./app/public'));
// Configurar o middleware body-parser. FORMATO JSON FORM
app.use(bodyParser.urlencoded({extended: true}));
// configurar middleware express-validator
app.use(expressValidator());

consign()
    .include('app/routes')
    .then('app/models')
    .then('app/controllers')
    .into(app);

module.exports = app;