const createHttpError = require("http-errors");

const errorHandler = (error, req, res, next) => {
  const httpError = createHttpError(500, error);

  console.log(error);
  return res.status(500).json({
    success: false,
    message: "Lo sentimos ha ocurrido un error",
    data: {
      msg: "Ha ocurrido un error no esperado, vuelva a intentarlo mas tarde",
    },
  });
};

module.exports = errorHandler;
