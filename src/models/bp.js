module.exports = (sequelize, DataTypes) => {
    return sequelize.define('bp', {
        userId: {
            type: DataTypes.STRING(100),
        },
        highBp: {
            type: DataTypes.STRING(10),
        },
        lowBp: {
            type: DataTypes.STRING(10),
        },
        id: {
            type: DataTypes.INT,
            primaryKey: true,
            unique: true,
            autoincrement: true,
        },
        userId: {
            type: DataTypes.STRING(100),
        }
    }, {
        timestamps: true,
    });
}