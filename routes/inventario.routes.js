const express = require('express');
const router = express.Router();
const inventarioController = require('../controllers/inventario.controller');

router.post('/', inventarioController.createInventario);
router.get('/', inventarioController.getInventario);
router.get('/:id', inventarioController.getInventarioById);
router.put('/:id', inventarioController.updateInventario);
router.delete('/:id', inventarioController.deleteInventario);

module.exports = router;
