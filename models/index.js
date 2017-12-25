const Sequelize = require('sequelize');

const scheme = require('./scheme');

const Op = Sequelize.Op;

console.log('yay')

const sequelize = new Sequelize(null, null, null, {
  dialect: 'sqlite',
  storage: 'db.sqlite3',

operatorsAliases: { $and: Op.and },

  logging: false
});

console.log('yay')

scheme(sequelize);
sequelize.sync();

module.exports.sequelize = sequelize;
module.exports.models = sequelize.models;
