const express = require("express");
const router = express.Router();
const EmpresasController = require("../controllers/empresas.controller");

router.get("/", EmpresasController.getEmpresas);
router.get("/:id", EmpresasController.getEmpresa);
router.post("/", EmpresasController.createEmpresa);
router.put("/:id", EmpresasController.updateEmpresa);
router.delete("/:id", EmpresasController.deleteEmpresa);

module.exports = router;
