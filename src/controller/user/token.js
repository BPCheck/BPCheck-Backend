import jwt from 'jsonwebtoken';

const accessT = async (req, user) => {
    const secret = req.app.get("jwt-secret");
    const token = jwt.sign ({
        userId: userId,
    },
    secret,
    {
        expiresIn: '7d'
    }, (err, token) => {
        if (err) rejects(err)
        resolve(token)
    });
    return token
}

module.exports = accessT