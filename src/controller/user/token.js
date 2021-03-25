const jwt = require('jsonwebtoken');

const accessT = async (req, user) => {
    const secret = req.app.get("jwt-secret");
    const token = jwt.sign ({
        userId: user.userId,
    },
    secret,
    {
        expiresIn: '7d'
    });
    return token
}

module.exports = accessT