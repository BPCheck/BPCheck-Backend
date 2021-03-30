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
        hostipalNumber: {
            type: DataTypes.STRING(10),
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