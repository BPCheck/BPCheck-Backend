const { Hospital } = require('../../models');

const createHospital = async (req, res, next) => {
    const { hospitalName, hospitalNumber } = req.body;
    const userId = req.decode.userId;

    try {
        const hospital = await Hospital.findOne({ where: {hospitalName} });
        if (hospital) throw new Error('이미 등록한 전적이 있음');
        await Hospital.create({ hospitalName, hospitalNumber, userId });
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

const selectHospital = async (req, res, next) => {

    try {
        await Hospital.update({    
            isSelect : false,
          }, {
            where: { isSelect : isSelect = true }
        });
        await Hospital.update({    
            isSelect : true,
          }, {
            where: { id : req.params.id }
        });
        res.status(200).end();
    }catch (e) {
        console.log(e.message);
        res.status(409).end();
    }
};

const deselectHospital = async (req, res, next) => {

    try {
        await Hospital.update({    
            isSelect : false,
          }, {
            where: { id : req.params.id }
        });
        res.status(200).end();
    }catch (e) {
        console.log(e.message);
        res.status(409).end();
    }
};

module.exports = {
    createHospital,
    deleteHospital,
    selectHospital,
    deselectHospital,
};