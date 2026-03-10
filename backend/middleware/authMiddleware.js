const jwt = require("jsonwebtoken");

const authMiddleware = (req, res, next) => {
  // 1. Get token from the header (Authorization: Bearer <token>)
  const token = req.header("Authorization")?.split(" ")[1];

  // 2. Check if no token
  if (!token) {
    return res.status(401).json({ message: "No token, authorization denied" });
  }

  try {
    // 3. Verify token using your JWT_SECRET from .env
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    // 4. Add user ID from payload to the request object
    req.user = decoded;
    next();
  } catch (err) {
    res.status(401).json({ message: "Token is not valid" });
  }
};

module.exports = authMiddleware;
