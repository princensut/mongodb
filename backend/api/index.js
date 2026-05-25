require('dotenv').config();
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const AuthRouter = require('../routes/AuthRouter');
const ProductRouter = require('../routes/ProductRouter');

require('../Models/db');  // ← fix this line

const app = express();

app.get('/ping', (req, res) => {
    res.send('PONG');
});

app.use(bodyParser.json());
app.use(cors());
app.use('/auth', AuthRouter);
app.use('/products', ProductRouter);

module.exports = app;