// middlewares/authMiddleware.js
const jwt = require("jsonwebtoken");

const authMiddleware = (roles = []) => {
  return (req, res, next) => {
    const authHeader = req.headers.authorization;

    if (!authHeader)
      return res.status(401).json({ error: "Token não fornecido" });

    const token = authHeader.split(" ")[1];
/*"secreta",*/ 
    jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
      if (err) return res.status(403).json({ error: "Token inválido" });

      if (roles.length && !roles.includes(user.role)) {
        return res.status(403).json({ error: "Acesso negado. Você não tem permissão para acessar esta rota." });
      }

      req.user = user;
      next();
    });
  };
};

module.exports = authMiddleware;
