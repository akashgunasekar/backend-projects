const express = require("express");
const routes = express.Router();

const renderfile = require('../services/render');
const controllerfilecalling = require('../controller/controller')

routes.get('/',renderfile.index);
routes.get('/thankyou',renderfile.thankyoufile);
routes.post('/api/users',controllerfilecalling.create)
routes.get('/api/users',controllerfilecalling.find)

module.exports = routes;