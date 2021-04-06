const { Bp } = require('../../models');

const createBp = async (req, res, next) => {
    const { highBp, lowBp, pulse,date } = req.body;
    const userId = req.decode.userId;

    try {
        const bp = await Bp.findOne({ where: {userId, date} });
        if (bp) throw new Error('이미 해당 날짜에 작성한 이력이 있음');
        await Bp.create({ userId, highBp, lowBp, pulse, date });
        res.status(200).end();
    } catch (e) {
        console.log(e.message);
        res.status(409).end();
    }
};

const deleteBp = async (req, res, next) => {
    try {
        console.log(req.params);
        await Bp.destroy({ 
            where: { id : req.params.id }
        });
        res.status(200).end();
    } catch (e) {
        console.log(e.message);
        res.status(409).end();
    }
};

const getLowBp = async (req, res, next) => {
    const userId = req.decode.userId;

    try {
        const data = await Bp.findAll({
            attributes: ['lowBp', 'date'],
            order: [['date', 'DESC']],
            where: {
                userId: userId
            }
        });
        res.status(200).json({ data });
    } catch (e) {
        console.log(e.message);
        res.status(409).end();
    }
};

const getHighBp = async (req, res, next) => {
    const userId = req.decode.userId;

    try {
        const data = await Bp.findAll({
            attributes: ['highBp', 'date'],
            order: [['date', 'DESC']],
            where: {
                userId: userId
            }
        });
        res.status(200).json({ data });
    } catch (e) {
        console.log(e.message);
        res.status(409).end();
    }
};

const getAllBp = async (req, res, next) => {
    const userId = req.decode.userId;

    try {
        const data = await Bp.findAll({
            attributes: ['pulse', 'lowBp', 'highBp', 'date'],
            order: [['date', 'DESC']],
            where: {
                userId: userId
            }
        });
        res.status(200).json({ data });
    } catch (e) {
        console.log(e.message);
        res.status(409).end();
    }
};

const getMain = async (req, res, next) => {
    const userId = req.decode.userId;

    try {
        const data = await Bp.findAll({
            attributes: ['pulse', 'lowBp', 'highBp', 'date'],
            order: [['date', 'DESC']],
            where: {
                userId: userId
            }
        });
        res.status(200).json({ data });
    } catch (e) {
        console.log(e.message);
        res.status(409).end();
    }
};


module.exports = { 
    createBp, 
    deleteBp, 
    getLowBp,
    getHighBp,
    getAllBp,
}