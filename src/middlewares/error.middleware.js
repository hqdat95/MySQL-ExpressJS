export default (err, req, res, next) => {
  const statusCode = err.status || 500;
  const message = err.message || 'Internal Server Error';

  res.status(statusCode).json({
    message: message,
    status: statusCode,
    data: 'error',
  });
};
