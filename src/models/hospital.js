module.exports = (sequelize, DataTypes) => {
    return sequelize.define('hospital', {
        userId: {
            type: DataTypes.STRING(100),
            allowNull: false,
        },
        hospitalName: {
            type: DataTypes.STRING(10),
            allowNull: false,
        },
        hospitalNumber: {
            type: DataTypes.STRING(20),
            allowNull: false,
        },
        isSelect: {
            type: DataTypes.BOOLEAN,
        },
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
    },{
        timestamps: false,
    });
};