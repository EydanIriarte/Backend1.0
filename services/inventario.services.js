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
  const updatedRows = await Inventario.update(inventarioData, {
    where: { id: id },
    returning: true, // Esto es importante para que retorne los registros actualizados
  });

  if (updatedRows[0] === 0) {
    return null; // Si no se actualiza ningún registro, devuelve null
  }

  return updatedRows[1][0]; // Devuelve el primer registro actualizado
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
