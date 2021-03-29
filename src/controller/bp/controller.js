const { Bp } = require('../../models');

const createBp = async (req, res, next) => {
    const { highBp, lowBp, date } = req.body;
    const userId = req.decoded.userId;

    try {
        const bp = await Bp.findOne({ where: {userId, date} });
        if (bp) throw new Error('이미 해당 날짜에 작성한 이력이 있음');
        await Bp.create({ userId, highBp, lowBp, date });
        res.status(200).end();
    } catch (e) {
        res.status(409).end();
    }
};

const deleteBp = async (req, res, next) => {
    try {
        Bp.delete(req.params.id, res);
        res.status(200).end();
    } catch (e) {
        res.status(409).end();
    }
};

module.exports = { 
    createBp, 
    deleteBp, 
};