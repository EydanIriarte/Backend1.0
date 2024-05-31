    const express = require('express');
    const router = express.Router();
    const productosController = require('../controllers/productos.controller');

    router.post('/', productosController.createProducto);
    router.get('/', productosController.getProductos);
    router.get('/:id', productosController.getProductoById);
    router.put('/:id', productosController.updateProducto);
    router.delete('/:id', productosController.deleteProducto);

    module.exports = router;
