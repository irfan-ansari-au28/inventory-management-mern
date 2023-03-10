const errorHandler = (err, req, res, next) => {
  statusCode = res.statusCode ? res.statusCode : 500;
  console.log(res.statusCode);
  res.status(statusCode);
  res.json({
    msg: err.message,
    stack: process.env.NODE_ENV === "development" ? err.stack : null,
  });
};

module.exports = errorHandler;
