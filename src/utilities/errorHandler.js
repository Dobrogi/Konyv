const errorHandler = (statusCode, res, err) => {
  res.status(statusCode).json({
    message: err.message || "Something went wrong!",
  });
};

module.exports = errorHandler;
