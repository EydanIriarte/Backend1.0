const UsuariosService = require("../services/usuarios.services");
const asyncHandler = require("../middlewares/async-handler");
const http = require("../helpers/http");

const getUsuarios = asyncHandler(async (req, res) => {
  const params = req.query;
  const usuarios = await UsuariosService.getUsuarios(params);
  return http.response200(res, usuarios);
});

const getUsuario = asyncHandler(async (req, res) => {
  const id = req.params.id;
  const usuario = await UsuariosService.getUsuarios(id);
  return http.response200(res, usuario);
});

const createUsuario = asyncHandler(async (req, res) => {
  const payload = req.body;
  
  if (!payload.nombre || !payload.correo || !payload.contrasena) {
    return http.response400(res, {}, "Datos del usuario incompletos");
  }

  const usuario = await UsuariosService.createUsuario(payload);
  return http.response201(res, usuario);
});

const updateUsuario = asyncHandler(async (req, res) => {
  const payload = req.body;
  
  payload.id = req.params.id;
  if (!payload.nombre && !payload.correo && !payload.contrasena) {
    return http.response400(res, {}, "No hay datos para actualizar");
  }

  const usuario = await UsuariosService.updateUsuario(payload);
  return http.response200(res, usuario);
});

const deleteUsuario = asyncHandler(async (req, res) => {
  const id = req.params.id;

  await UsuariosService.deleteUsuario(id);
  return http.response200(res);
});

module.exports = {
  getUsuarios,
  getUsuario,
  createUsuario,
  updateUsuario,
  deleteUsuario,
};
