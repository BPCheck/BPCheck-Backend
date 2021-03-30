module.exports = (sequelize, DataTypes) => {
    return sequelize.define('bp', {
        userId: {
            type: DataTypes.STRING(100),
            allowNull: false,
        },
        highBp: {
            type: DataTypes.STRING(10),
            allowNull: false,
        },
        lowBp: {
            type: DataTypes.STRING(10),
            allowNull: false,
        },
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        date: {
            type: DataTypes.STRING(50),
            allowNull: false,
        },
        pulse: {
            type: DataTypes.STRING(10),
            allowNull: false
        },
    },{
        timestamps: false,
    });
};