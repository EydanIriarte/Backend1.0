const express = require('express');
const router = express.Router();

router.use('/productos', require('./productos.routes'));
router.use('/inventario', require('./inventario.routes'));
router.use('/ventas', require('./ventas.routes'));
router.use('/empresas', require('./empresas.routes'));
router.use('/usuarios', require('./usuarios.routes'));

module.exports = router;
