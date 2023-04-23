const checkServerConnection = (req, res) => {
  res.status(200).send("Connected to server");
};
const verifyToken = function (req, res, next) {
  const token = req.headers.authorization?.split(" ")[1];

  if (!token) {
    return res.status(401).json({ message: "Unauthorized" });
  }

  try {
    const decoded = jwt.verify(token, secret);
    req.user = decoded.sub;
    next();
  } catch (err) {
    return res.status(401).json({ message: "Unauthorized" });
  }
};

module.exports = { checkServerConnection };
