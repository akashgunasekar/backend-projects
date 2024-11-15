const express = require('express');
const route = express.Router();

const servicefilecalling = require('../services/services');
const controllerfilecalling = require('../controller/controller')
route.get('/',servicefilecalling.formfile)
route.get('/data',servicefilecalling.datafile);
route.get('/akash',servicefilecalling.viewrishifile);
route.post('/api/users',controllerfilecalling.create);
// getting data from mongodb through link
route.get('/api/users',controllerfilecalling.find);
module.exports = route;