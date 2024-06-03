const ProductosService = require("../services/productos.services");
const asyncHandler = require("../middlewares/async-handler");
const http = require("../helpers/http");

const getProductos = asyncHandler(async (req, res) => {
  const productos = await ProductosService.getProductos();
  return http.response200(res, productos);
});

const getProducto = asyncHandler(async (req, res) => {
  const id = req.params.id;
  const producto = await ProductosService.getProductoById(id);
  if (!producto) {
    return http.response400(res, {}, "Producto no encontrado");
  }
  return http.response200(res, producto);
});

const createProducto = asyncHandler(async (req, res) => {
  const payload = req.body;
  const producto = await ProductosService.createProducto(payload);
  return http.response201(res, producto);
});

const updateProducto = asyncHandler(async (req, res) => {
  const id = req.params.id;
  const payload = req.body;
  const producto = await ProductosService.updateProducto(id, payload);
  if (!producto) {
    return http.response400(res, {}, "Producto no encontrado");
  }
  return http.response200(res, producto);
});

const deleteProducto = asyncHandler(async (req, res) => {
  const id = req.params.id;
  const deleted = await ProductosService.deleteProducto(id);
  if (!deleted) {
    return http.response400(res, {}, "Producto no encontrado");
  }
  return http.response200(res, { message: "Producto eliminado correctamente" });
});

module.exports = {
  getProductos,
  getProducto,
  createProducto,
  updateProducto,
  deleteProducto,
};
