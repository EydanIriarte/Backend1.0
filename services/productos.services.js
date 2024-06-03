const { Producto } = require('../models');

const getProductos = async () => {
  try {
    return await Producto.findAll();
  } catch (error) {
    throw new Error('Error al obtener los productos');
  }
};

const getProductoById = async (id) => {
  try {
    return await Producto.findByPk(id);
  } catch (error) {
    throw new Error(`Error al obtener el producto con ID: ${id}`);
  }
};

const createProducto = async (productoData) => {
  try {
    return await Producto.create(productoData);
  } catch (error) {
    throw new Error('Error al crear el producto');
  }
};

const updateProducto = async (id, productoData) => {
  try {
    await Producto.update(productoData, {
      where: {
        id: id
      }
    });
    return await Producto.findByPk(id);
  } catch (error) {
    throw new Error(`Error al actualizar el producto con ID: ${id}`);
  }
};

const deleteProducto = async (id) => {
  try {
    return await Producto.destroy({
      where: {
        id: id
      }
    });
  } catch (error) {
    throw new Error(`Error al eliminar el producto con ID: ${id}`);
  }
};

module.exports = {
  getProductos,
  getProductoById,
  createProducto,
  updateProducto,
  deleteProducto
};
