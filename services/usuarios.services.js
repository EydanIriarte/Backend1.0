const { Usuario } = require('../models');

const getUsuarios = async () => {
  return await Usuario.findAll();
};

const getUsuarioById = async (id) => {
  return await Usuario.findByPk(id);
};

const createUsuario = async (usuarioData) => {
  return await Usuario.create({
    nombre: usuarioData.nombre,
    email: usuarioData.email,
    password: usuarioData.password,
  });
};

const updateUsuario = async (id, usuarioData) => {
  await Usuario.update(usuarioData, {
    where: {
      id: id
    }
  });
  return await Usuario.findByPk(id);
};

const deleteUsuario = async (id) => {
  return await Usuario.destroy({
    where: {
      id: id
    }
  });
};

module.exports = {
  getUsuarios,
  getUsuarioById,
  createUsuario,
  updateUsuario,
  deleteUsuario
};
