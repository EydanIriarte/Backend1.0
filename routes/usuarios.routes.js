const express = require("express");
const router = express.Router();
const usuariosController = require("../controllers/usuarios.controller");

router.get("/", usuariosController.getusuarios);
router.get("/:id", usuariosController.getProducto);
router.post("/", usuariosController.createProducto);
router.put("/:id", usuariosController.updateProducto);
router.delete("/:id", usuariosController.deleteProducto);

module.exports = router;
