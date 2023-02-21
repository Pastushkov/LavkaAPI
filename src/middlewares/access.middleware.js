const accessMiddleware = (req, res, next) => {
  try {        
    if (req.user && req.user.type === "superAdmin") return next();    
    return res.status(403).json({
      status: false,
      payload: null,
      error: {
        error: "Access denided for you",
      },
    });
  } catch (error) {
    return res.status(400).json({
      status: false,
      payload: null,
      error: {
        description: error,
        error,
      },
    });
  }
};

module.exports = accessMiddleware;
