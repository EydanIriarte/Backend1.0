const { Empresa } = require('../models');

const getEmpresas = async () => {
  return await Empresa.findAll();
};

const getEmpresaById = async (id) => {
  return await Empresa.findByPk(id);
};

const createEmpresa = async (empresaData) => {
  return await Empresa.create(empresaData);
};

const updateEmpresa = async (id, empresaData) => {
  await Empresa.update(empresaData, {
    where: {
      id: id
    }
  });
  return await Empresa.findByPk(id);
};

const deleteEmpresa = async (id) => {
  return await Empresa.destroy({
    where: {
      id: id
    }
  });
};

module.exports = {
  getEmpresas,
  getEmpresaById,
  createEmpresa,
  updateEmpresa,
  deleteEmpresa
};
