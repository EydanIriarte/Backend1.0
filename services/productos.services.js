const { Producto } = require('../models');

const getProductos = async () => {
  return await Producto.findAll();
};

const getProductoById = async (id) => {
  return await Producto.findByPk(id);
};

const createProducto = async (productoData) => {
  return await Producto.create({
    nombre: productoData.nombre,
    descripcion: productoData.descripcion,
    precio: productoData.precio,
    stock: productoData.stock
  });
};

const updateProducto = async (id, productoData) => {
  await Producto.update({
    nombre: productoData.nombre,
    descripcion: productoData.descripcion,
    precio: productoData.precio,
    stock: productoData.stock
  }, {
    where: { id: id }
  });
  return await Producto.findByPk(id);
};

const deleteProducto = async (id) => {
  return await Producto.destroy({
    where: { id: id }
  });
};

module.exports = {
  getProductos,
  getProductoById,
  createProducto,
  updateProducto,
  deleteProducto
};
