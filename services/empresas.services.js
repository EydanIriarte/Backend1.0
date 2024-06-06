const { Empresa } = require('../models');

const getEmpresas = async () => {
  return await Empresa.findAll();
};

const getEmpresaById = async (id) => {
  return await Empresa.findByPk(id);
};

const createEmpresa = async (empresaData) => {
console.log(empresaData)

  return await Empresa.create({
    nombre: empresaData.nombre,
    direccion: empresaData.direccion,
    info_contacto: empresaData.info_contacto
  });
};

const updateEmpresa = async (id, empresaData) => {
  await Empresa.update({
    nombre: empresaData.nombre,
    direccion: empresaData.direccion,
    info_contacto: empresaData.info_contacto
  }, {
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
