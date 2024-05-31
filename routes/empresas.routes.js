const express = require('express');
const router = express.Router();
const empresasController = require('../controllers/empresas.controller');

router.post('/', empresasController.createEmpresa);
router.get('/', empresasController.getEmpresas);
router.get('/:id', empresasController.getEmpresaById);
router.put('/:id', empresasController.updateEmpresa);
router.delete('/:id', empresasController.deleteEmpresa);

module.exports = router;
