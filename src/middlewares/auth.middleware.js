const jwt = require("jsonwebtoken");
const { jwtSecret } = require("../config");

const authMiddleware = (req, res, next) => {
  if (req.method === "OPTIONS") return next();
  const authHeader = req.headers.authorization;
  if (authHeader) {
    const token = authHeader.split(" ")[1];
    jwt.verify(token, jwtSecret, (err, user) => {
      if (err)
        return res.status(403).json({
          status: false,
          payload: null,
          error: {
            message: "You don't have access for this",
          },
        });
      req.user = user;
      next();
    });
  } else {
    return res.status(401).json({
      status: false,
      payload: null,
      error: {
        message: "Authorization required",
      },
    });
  }
};

module.exports = authMiddleware;
