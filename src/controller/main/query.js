const { Hospital, User, Bp } = require('../../models');

const showMain = async (userId) => {
    try {
        const main = await User.findOne({
          include: [
            {
              model: Bp,
              attributes: ['lowBp', 'highBp', 'date', 'pulse'],
              order: [['date', 'DESC']],
              limit : 1,
            },
            {
              model: Hospital,
              attributes: ["hospitalName"],
              where : { isSelect: true }
            },
          ],
          where: { userId },
        });
        return main;
    } catch (e) {
        console.log(e.message);
        throw e;
    }
};

module.exports = {
    showMain,
};