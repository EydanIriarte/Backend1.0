const express = require("express");
const router = express.Router();
const EmpresasController = require("../controllers/empresas.controller");

router.get("/", EmpresasController.getEmpresas);
router.get("/:id", EmpresasController.getProducto);
router.post("/", EmpresasController.createProducto);
router.put("/:id", EmpresasController.updateProducto);
router.delete("/:id", EmpresasController.deleteProducto);

module.exports = router;
