const express = require("express");
const router = express.Router();
const ventasController = require("../controllers/ventas.controller");

router.get("/", ventasController.getVenta);
router.get("/:id", ventasController.getVenta);
router.post("/", ventasController.createVenta);
router.put("/:id", ventasController.updateVenta);
router.delete("/:id", ventasController.deleteVenta);

module.exports = router;
