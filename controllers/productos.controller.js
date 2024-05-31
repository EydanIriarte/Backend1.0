const ProductosService = require("../services/productos.services");
const asyncHandler = require("../middlewares/async-handler");
const http = require("../helpers/http");

const getProductos = asyncHandler(async (req, res) => {
  const params = req.query;
  const productos = await ProductosService.getProductos(params);
  return http.response200(res, productos);
});

const getProducto = asyncHandler(async (req, res) => {
  const id = req.params.id;
  const producto = await ProductosService.getProducto(id);
  return http.response200(res, producto);
});

const createProducto = asyncHandler(async (req, res) => {
  const payload = req.body;

  if (!payload.nombre || !payload.descripcion || !payload.costo || !payload.precio_venta) {
    return http.response400(res, {}, "Datos del producto incompletos");
  }

  const producto = await ProductosService.createProducto(payload);
  return http.response201(res, producto);
});

const updateProducto = asyncHandler(async (req, res) => {
  const payload = req.body;
  payload.id = req.params.id;

  if (!payload.nombre && !payload.descripcion && !payload.costo && !payload.precio_venta) {
    return http.response400(res, {}, "No hay datos para actualizar");
  }

  const producto = await ProductosService.updateProducto(payload);
  return http.response200(res, producto);
});

const deleteProducto = asyncHandler(async (req, res) => {
  const id = req.params.id;
  await ProductosService.deleteProducto(id);
  return http.response200(res, { message: "Producto eliminado correctamente" });
});

module.exports = {
  getProductos,
  getProducto,
  createProducto,
  updateProducto,
  deleteProducto,
};