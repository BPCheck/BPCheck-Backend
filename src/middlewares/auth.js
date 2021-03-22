const jwt = require('jsonwebtoken');

const authMiddleware = async (req, res, next) => {
    const token = req.headers["access-token"];
    
    // token does not exist
    if (!token) {
        res.status(403).json({
            success: false,
            message: "token required"
        });
    }

    // create a promise that decodes the token
    try {
        await jwt.verify(token, req.app.get("jwt-secret"), (err, decode) => {
            if (err) rejects(err)
            req.decode = decode;
            next();
        });
    }catch {
        res.status(401).json({ message: e.message});
    }
};

module.exports = authMiddleware