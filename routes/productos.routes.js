const express = require("express");
const router = express.Router();
const ProductosController = require("../controllers/productos.controller");

router.get("/", ProductosController.getProducto);
router.get("/:id", ProductosController.getProducto);
router.post("/", ProductosController.createProducto);
router.put("/:id", ProductosController.updateProducto);
router.delete("/:id", ProductosController.deleteProducto);

module.exports = router;
