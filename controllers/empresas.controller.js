const EmpresasService = require("../services/empresas.services");
const asyncHandler = require("../middlewares/async-handler");
const http = require("../helpers/http");

const getEmpresas = asyncHandler(async (req, res) => {
  const params = req.query;
  const empresas = await EmpresasService.getEmpresas(params);
  return http.response200(res, empresas);
});

const getEmpresa = asyncHandler(async (req, res) => {
  const id = req.params.id;
  const empresa = await EmpresasService.getEmpresa(id);
  return http.response200(res, empresa);
});

const createEmpresa = asyncHandler(async (req, res) => {
  const payload = req.body;

  if (!payload.nombre || !payload.direccion || !payload.info_contacto) {
    return http.response400(res, {}, "Datos de la empresa incompletos");
  }

  const empresa = await EmpresasService.createEmpresa(payload);
  return http.response201(res, empresa);
});

const updateEmpresa = asyncHandler(async (req, res) => {
  const payload = req.body;
  payload.id = req.params.id;

  if (!payload.nombre && !payload.direccion && !payload.info_contacto) {
    return http.response400(res, {}, "No hay datos para actualizar");
  }

  const empresa = await EmpresasService.updateEmpresa(payload);
  return http.response200(res, empresa);
});

const deleteEmpresa = asyncHandler(async (req, res) => {
  const id = req.params.id;
  await EmpresasService.deleteEmpresa(id);
  return http.response200(res, { message: "Empresa eliminada correctamente" });
});

module.exports = {
  getEmpresas,
  getEmpresa,
  createEmpresa,
  updateEmpresa,
  deleteEmpresa,
};
