function ErrorHandler(err, req, res, next) {
  console.error(err.stack);
  const statusCode = err.statusCode || 500; // Default to 500 (Internal Server Error)
  res.status(statusCode).json({
    error: {
      message:
        statusCode === 500
          ? "Internal Server Error"
          : err.message || "Internal Server Error",
    },
  });
}
module.exports = ErrorHandler;
