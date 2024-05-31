const { Producto } = require('../models');

const getProductos = async () => {
  return await Producto.findAll();
};

const getProductoById = async (id) => {
  return await Producto.findByPk(id);
};

const createProducto = async (productoData) => {
  return await Producto.create(productoData);
};

const updateProducto = async (id, productoData) => {
  await Producto.update(productoData, {
    where: {
      id: id
    }
  });
  return await Producto.findByPk(id);
};

const deleteProducto = async (id) => {
  return await Producto.destroy({
    where: {
      id: id
    }
  });
};

module.exports = {
  getProductos,
  getProductoById,
  createProducto,
  updateProducto,
  deleteProducto
};
