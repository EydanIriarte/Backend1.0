const VentasService = require("../services/ventas.services");
const asyncHandler = require("../middlewares/async-handler");
const http = require("../helpers/http");

const getVentas = asyncHandler(async (req, res) => {
  const params = req.query;
  const ventas = await VentasService.getVentas(params);
  return http.response200(res, ventas);
});

const getVenta = asyncHandler(async (req, res) => {
  const id = req.params.id;
  const venta = await VentasService.getVenta(id);
  return http.response200(res, venta);
});

const createVenta = asyncHandler(async (req, res) => {
  const payload = req.body;

  if (!payload.fk_empresa || !payload.fk_producto || !payload.cantidad || !payload.precio) {
    return http.response400(res, {}, "Datos de la venta incompletos");
  }

  const venta = await VentasService.createVenta(payload);
  return http.response201(res, venta);
});

const updateVenta = asyncHandler(async (req, res) => {
  const payload = req.body;
  payload.id = req.params.id;

  if (!payload.fk_empresa && !payload.fk_producto && !payload.cantidad && !payload.precio) {
    return http.response400(res, {}, "No hay datos para actualizar");
  }

  const venta = await VentasService.updateVenta(payload);
  return http.response200(res, venta);
});

const deleteVenta = asyncHandler(async (req, res) => {
  const id = req.params.id;
  await VentasService.deleteVenta(id);
  return http.response200(res, { message: "Venta eliminada correctamente" });
});

module.exports = {
  getVentas,
  getVenta,
  createVenta,
  updateVenta,
  deleteVenta,
};
