const InventarioService = require("../services/inventario.services");
const asyncHandler = require("../middlewares/async-handler");
const http = require("../helpers/http");

const getInventarios = asyncHandler(async (req, res) => {
  const params = req.query;
  const inventarios = await InventarioService.getInventarios(params);
  return http.response200(res, inventarios);
});

const getInventario = asyncHandler(async (req, res) => {
  const id = req.params.id;
  const inventario = await InventarioService.getInventario(id);
  return http.response200(res, inventario);
});

const createInventario = asyncHandler(async (req, res) => {
  const payload = req.body;

  if (!payload.fk_producto || !payload.cantidad || !payload.fecha) {
    return http.response400(res, {}, "Datos del inventario incompletos");
  }

  const inventario = await InventarioService.createInventario(payload);
  return http.response201(res, inventario);
});

const updateInventario = asyncHandler(async (req, res) => {
  const payload = req.body;
  payload.id = req.params.id;

  if (!payload.fk_producto && !payload.cantidad && !payload.fecha) {
    return http.response400(res, {}, "No hay datos para actualizar");
  }

  const inventario = await InventarioService.updateInventario(payload);
  return http.response200(res, inventario);
});

const deleteInventario = asyncHandler(async (req, res) => {
  const id = req.params.id;
  await InventarioService.deleteInventario(id);
  return http.response200(res, { message: "Inventario eliminado correctamente" });
});

module.exports = {
  getInventarios,
  getInventario,
  createInventario,
  updateInventario,
  deleteInventario,
};
