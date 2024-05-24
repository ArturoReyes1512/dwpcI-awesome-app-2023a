const { Router } = require('express');
const router = Router();

// Creando datos en la memoria volátil
const products = [];

// Exportando los productos
module.exports = { router, products };

// POST /admin/add-product
router.post('/add-product', (req, res) => {
  // Realizaremos la desestructuración de "title" de la petición
  const { title } = req.body;
  // Agregamos el dato en la base de datos en memoria
  products.push(title);
  // Redireccionando a la página principal
  res.redirect('/');
});

