const { Hospital } = require('../../models');

const createHospital = async (req, res, next) => {
    const { hName, hNumber } = req.body;
    const userId = req.decode.userId;

    try {
        const hospital = await Hospital.findOne({ where: {hName} });
        if (hospital) throw new Error('이미 등록한 전적이 있음');
        await Hospital.create({ hName, hNumber, userId });
        res.status(200).end();
    } catch (e) {
        console.log(e.message);
        res.status(409).end();
    }
};

const deleteHospital = async (req, res, next) => {
    try {
        console.log(req.params);
        await Hospital.destroy({ 
            where: { id : req.params.id }
        });
        res.status(200).end();
    } catch (e) {
        console.log(e.message);
        res.status(409).end();
    }
};

module.exports = {
    createHospital,
    deleteHospital,
};