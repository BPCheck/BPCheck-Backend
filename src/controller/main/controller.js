const { Hospital, User, Bp } = require('../../models');
const query = require('./query');

const getMainFeed = async (req, res, next) => {
    const userId = req.decode.userId;

    try {
        const main = await query.showMain(userId);
        res.status(200).json({ main });
    }catch (e) {
        res.status(400).end();
    }
}

module.exports = {
    getMainFeed,
};