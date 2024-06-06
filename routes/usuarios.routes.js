const express = require("express");
const router = express.Router();
const usuariosController = require("../controllers/usuarios.controller");

router.get("/", usuariosController.getUsuario);
router.get("/:id", usuariosController.getUsuario);
router.post("/", usuariosController.createUsuario);
router.put("/:id", usuariosController.updateUsuario);
router.delete("/:id", usuariosController.deleteUsuario);

module.exports = router;
