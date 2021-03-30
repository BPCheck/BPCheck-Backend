'use strict';

const fs = require('fs');
const path = require('path');
const Sequelize = require('sequelize');
const basename = path.basename(__filename);
const env = process.env.NODE_ENV || 'development';
const config = require(__dirname + '/../config/config.json')[env]; 
const db = {};

const sequelize = new Sequelize (
  config.database,
  config.username,
  config.password,
  config
);

db.sequelize = sequelize;
db.Sequelize = Sequelize;

db.User = require('./user')(sequelize, Sequelize);
db.Bp = require('./bp')(sequelize, Sequelize);
db.Hospital = require('./hospital')(sequelize, Sequelize);

db.User.hasMany(db.Bp, { foreignKey: "userId", targetKey: "userId" });
db.Bp.belongsTo(db.User, { foreignKey: "userId" });

db.User.hasMany(db.Hospital, { foreignKey: "userId", targetKey: "userId" });
db.Hospital.belongsTo(db.User, { foreignKey: "userId" });

module.exports = db;
