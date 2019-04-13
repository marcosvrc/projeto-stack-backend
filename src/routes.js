const boxController = require('./controllers/BoxController');
const fileController = require('./controllers/FileController');

const express = require('express');
const multer = require('multer');
const multerConfig = require('./config/multer');

const routes = express.Router();

routes.get('/teste', (req, res) => {
    return res.send('Hello Wolrd');
})

routes.post('/boxes', boxController.store);
routes.post('/boxes/:id/files', multer(multerConfig).single('file'), fileController.store);
routes.get('/boxes/:id', boxController.show);
module.exports = routes; 