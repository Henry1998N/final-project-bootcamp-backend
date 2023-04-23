const jwt = require("jsonwebtoken");
const checkServerConnection = (req, res) => {
  res.status(200).send("Connected to server");
};
const authenticateUser = function (req, res, next) {
  const header = req.headers["authorization"];
  const token = header && header.split(" ")[1];
  if (!token) {
    return res.status(401).send({ message: "Unauthorized" });
  }
  try {
    jwt.verify(token, process.env.SECRET_KEY, (err, user) => {
      if (err) {
        return res.status(401).json({ message: "Unauthorized" });
      }
      req.user = user;
      next();
    });
  } catch (err) {
    return res.status(401).json({ message: "Unauthorized" });
  }
};
module.exports = { checkServerConnection, authenticateUser };
