const response200 = (res, data = {}, message = "Operación exitosa") => {

  return res.status(200).json({
    success: true,
    message: message,
    data: data,
  });
};

const response201 = (
  res,
  data = {},
  message = "Registro creado exitosamente"
) => {

  return res.status(200).json({
    success: true,
    message: message,
    data: data,
  });
};

const response400 = (
  res,
  data = {},
  message = "Solicitud incorrecta"
) => {

  return res.status(400).json({
    success: false,
    message: message,
    data: data,
  });
};


const response500 = (
  res,
  data = {},
  message = "Ha ocurrido un error"
) => {

  return res.status(500).json({
    success: true,
    message: message,
    data: data,
  });
};

const responseFile = (res, file) => {
  return res.sendFile(file);
};

module.exports = {
  response200,
  response201,
  response400,
  response500,
  responseFile,
};
