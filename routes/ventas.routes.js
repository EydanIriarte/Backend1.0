const express = require("express");
const router = express.Router();
const ventasController = require("../controllers/ventas.controller");

router.get("/", ventasController.getventas);
router.get("/:id", ventasController.getProducto);
router.post("/", ventasController.createProducto);
router.put("/:id", ventasController.updateProducto);
router.delete("/:id", ventasController.deleteProducto);

module.exports = router;
