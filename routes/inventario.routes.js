const express = require("express");
const router = express.Router();
const inventarioController = require("../controllers/inventario.controller");

router.get("/", inventarioController.getInventario);
router.get("/:id", inventarioController.getInventario);
router.post("/", inventarioController.createInventario);
router.put("/:id", inventarioController.updateInventario);
router.delete("/:id", inventarioController.deleteInventario);

module.exports = router;
