const UsuariosService = require("../services/usuarios.services");
const asyncHandler = require("../middlewares/async-handler");
const http = require("../helpers/http");

// Obtener todos los usuarios
const getUsuarios = asyncHandler(async (req, res) => {
  const params = req.query;
  const usuarios = await UsuariosService.getUsuarios(params);
  return http.response200(res, usuarios);
});

// Obtener un usuario por ID
const getUsuario = asyncHandler(async (req, res) => {
  const id = req.params.id;
  const usuario = await UsuariosService.getUsuario(id);
  return http.response200(res, usuario);
});

// Crear un nuevo usuario
const createUsuario = asyncHandler(async (req, res) => {
  const payload = req.body;
  
  // Validación de datos (puede ser más detallada dependiendo del esquema de usuario)
  if (!payload.nombre || !payload.email || !payload.password) {
    return http.response400(res, {}, "Datos de usuario incompletos");
  }

  const usuario = await UsuariosService.createUsuario(payload);
  return http.response201(res, usuario);
});

// Actualizar un usuario
const updateUsuario = asyncHandler(async (req, res) => {
  const payload = req.body;
  payload.id = req.params.id;

  // Validación de datos
  if (!payload.nombre && !payload.email && !payload.password) {
    return http.response400(res, {}, "No hay datos para actualizar");
  }

  const usuario = await UsuariosService.updateUsuario(payload);
  return http.response200(res, usuario);
});

// Eliminar un usuario
const deleteUsuario = asyncHandler(async (req, res) => {
  const id = req.params.id;
  await UsuariosService.deleteUsuario(id);
  return http.response200(res, { message: "Usuario eliminado correctamente" });
});

module.exports = {
  getUsuarios,
  getUsuario,
  createUsuario,
  updateUsuario,
  deleteUsuario,
};