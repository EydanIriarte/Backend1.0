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
  const id = req.params.id;
  const inventarioData = {
    cantidad: req.body.cantidad // Solo actualizas la cantidad
  };

  try {
    const inventario = await InventarioService.updateInventario(id, inventarioData);
    if (!inventario) {
      return http.response404(res, {}, "Inventario no encontrado");
    }
    return http.response200(res, inventario);
  } catch (error) {
    console.error('Error actualizando el inventario:', error);
    return http.response500(res, {}, "Ocurrió un error en el servidor");
  }
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
