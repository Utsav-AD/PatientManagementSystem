const asyncHandler = require("express-async-handler");
const jwt = require("jsonwebtoken");

const validateToken = asyncHandler(async (req, res, next) => {
 let token;
 let authHeader = req.headers.Authorization || req.headers.authorization;
 if (authHeader && authHeader.startsWith("Bearer")) {
  token = authHeader.split(" ")[1];
  jwt.verify(token, process.env.JWT_SECRET_TOKEN, (err, decoded) => {
   if (err) {
    res.status(401);
    throw new Error("User is not authorized");
   }
   req.user = decoded;
   next();
  });
  if (!token) {
   res.status(401);
   throw new Error("User not authorized or token is missing");
  }
 } else {
  res.status(403);
  throw new Error("Forbidden request");
 }
});

module.exports = validateToken;