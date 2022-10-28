const express = require('express');
const app = express();
const DB = require('../server.js');
app.use(express.static(__dirname + '/purchase/buyScreen/styles'));
app.get('/src/pages/purchase/buyScreen/', (req, res) => {
    console.log('batata');
});
app.listen(5500, () => {
    console.log("servidor rodando");
});