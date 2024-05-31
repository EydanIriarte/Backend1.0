const { Inventario } = require('../models');

const getInventario = async () => {
  return await Inventario.findAll();
};

const getInventarioById = async (id) => {
  return await Inventario.findByPk(id);
};

const createInventario = async (inventarioData) => {
  return await Inventario.create(inventarioData);
};

const updateInventario = async (id, inventarioData) => {
  await Inventario.update(inventarioData, {
    where: {
      id: id
    }
  });
  return await Inventario.findByPk(id);
};

const deleteInventario = async (id) => {
  return await Inventario.destroy({
    where: {
      id: id
    }
  });
};

module.exports = {
  getInventario,
  getInventarioById,
  createInventario,
  updateInventario,
  deleteInventario
};
