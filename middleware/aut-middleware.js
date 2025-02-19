const jwt = require("jsonwebtoken");

const authmiddleware = (req, res, next) => {
  const authHeader = req.headers["authorization"];
  const Token = authHeader && authHeader.split(" ")[1];

  if (!Token) {
    res.status(401).json({
      success: false,
      message: "Unauthorized user",
    });
  }

  try {
    const TokenData = jwt.verify(Token, process.env.JWT_SECRET_KEY);
    req.userinfo = TokenData;

    next();
  } catch (err) {
    res.status(500).json({
      success: false,
      message: err.message,
    });
  }
};

module.exports = authmiddleware;
