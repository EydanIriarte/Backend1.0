const express = require('express');
const router = express.Router();
const ventasController = require('../controllers/ventas.controller');

router.post('/', ventasController.createVenta);
router.get('/', ventasController.getVentas);
router.get('/:id', ventasController.getVentaById);
router.put('/:id', ventasController.updateVenta);
router.delete('/:id', ventasController.deleteVenta);

module.exports = router;
