const express = require('express');
const app = express();
const morgan = require('morgan');
const cors = require('cors');
const bodyParser = require('body-parser');
const Router = require('./api/api.js');

const port = process.env.PORT || 3000;
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(morgan('dev'));
app.use(cors());
app.use(Router);


app.listen(port, (req, res) => {
    console.log(`Servidor online en el puerto: ${port}`)
});

require('./database/config.js')._connect();