const asyncHandler = (fn) => (req, res, next) => {
  Promise.resolve(fn(req, res, next)).catch((error) => {
    // Llama a next con el error
    next(error);
  });
};

module.exports = asyncHandler;