const { Router } = require('express');
const router = Router();

// Creando datos en la memoria volátil
const products = [];

// Exportando los productos
module.exports = { router, products };
