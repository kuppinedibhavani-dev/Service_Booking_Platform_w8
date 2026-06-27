const jwt = require("jsonwebtoken");
const protect = (req, res, next) => {
    const token = req.headers.authorization;
    if (!token) {
        return res.status(401).json({
  message: "No token, unauthorized"
});
    }
    const actualToken = token.split(" ")[1];
    try {
        const decoded = jwt.verify(actualToken, process.env.JWT_SECRET);
        req.user = decoded;
        next();
    } catch (error) {
        res.status(401).json({
  message: "Token invalid"
});
    }
};

module.exports = protect;