const logger = (req, res, next) => {
    // next really important for middleware
  console.log(req.method, res.originalUrl);
  next();
};

module.exports = logger