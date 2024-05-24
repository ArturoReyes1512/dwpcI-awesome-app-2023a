const { Router } = require('express');
const path = require('path');
const router = Router();

// Importando productos desde admin.route.js
const { products } = require('./admin.route');

// GET /
router.get('/', (req, res) => {
  // Mostrando productos en memoria
  console.log(products);
  console.log("📢 Sirviendo la ruta '/'");
  // Enviar el archivo HTML como respuesta
  res.sendFile(path.resolve('views', 'shop.html'));
});

module.exports = router;
