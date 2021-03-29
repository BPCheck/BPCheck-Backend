const jwt = require('jsonwebtoken');

const authMiddleware = async (req, res, next) => {
    let token;
    if (
        req.headers.authorization &&
        req.headers.authorization.startsWith('Bearer')
      ) {
        token = req.headers.authorization.split(' ')[1];
      } 

    // token does not exist
    if (!token) {
        res.status(403).json({ message: "token required" });
        return;
    }

    // create a promise that decodes the token
    try {
        await jwt.verify(token, req.app.get("jwt-secret"), (err, decode) => {
            if (err) throw new Error(err);
            req.decode = decode;
            next();
        });
    }catch (e) {
        console.log(token.authorization);
        res.status(401).json({ message: e.message});
    }
};

module.exports = authMiddleware;