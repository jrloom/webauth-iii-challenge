const jwt = require("jsonwebtoken");

function authUser(req, res, next) {
  const token = req.headers.authorization;
  const secret = process.env.JWT_SECRET;

  if (token) {
    jwt.verify(token, secret, (err, decodedToken) => {
      if (err) {
        res.status(401).json({ error: "Invalid credentials" });
      } else {
        req.decodedToken = decodedToken;
        next();
      }
    });
  } else {
    res.status(400).json({ errors: "No credentials provided" });
  }
}

function getJwtToken(username) {
  // todo pull out into a helper file - this isn't middleware
  const payload = {
    username
  };
  const secret = process.env.JWT_SECRET || "secret";
  const options = {
    expiresIn: "1d"
  };
  return jwt.sign(payload, secret, options);
}

module.exports = {
  authUser,
  getJwtToken
};
