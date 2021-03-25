module.exports = (sequelize, DataTypes) => {
    return sequelize.define("user", {
        userId: {
            type: DataTypes.STRING(100),
            unique: true,
            primaryKey: true,
        },
        password: {
            type: DataTypes.STRING(100),
            allowNull: false,
        },
        name: {
            type: DataTypes.STRING(20),
            allowNull: false,
        }
    }, {
        timestamps: false,
    });
};