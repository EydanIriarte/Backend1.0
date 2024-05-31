const { Venta } = require('../models');

const getVentas = async () => {
  return await Venta.findAll();
};

const getVentaById = async (id) => {
  return await Venta.findByPk(id);
};

const createVenta = async (ventaData) => {
  return await Venta.create(ventaData);
};

const updateVenta = async (id, ventaData) => {
  await Venta.update(ventaData, {
    where: {
      id: id
    }
  });
  return await Venta.findByPk(id);
};

const deleteVenta = async (id) => {
  return await Venta.destroy({
    where: {
      id: id
    }
  });
};

module.exports = {
  getVentas,
  getVentaById,
  createVenta,
  updateVenta,
  deleteVenta
};
