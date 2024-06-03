const express = require("express");
const router = express.Router();
const inventarioController = require("../controllers/inventario.controller");

router.get("/", inventarioController.getinventario);
router.get("/:id", inventarioController.getProducto);
router.post("/", inventarioController.createProducto);
router.put("/:id", inventarioController.updateProducto);
router.delete("/:id", inventarioController.deleteProducto);

module.exports = router;
