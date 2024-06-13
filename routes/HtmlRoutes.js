const express = require('express');
const { getHTML } = require('../controllers/htmlController')
const htmlRoutes = express.Router();


htmlRoutes.get('/gethtml/:id', getHTML);

module.exports = htmlRoutes;