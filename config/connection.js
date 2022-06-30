//Import require packages
const Sequelize = require('sequelize');
require('dotenv').config();

//If JAWSDB_URL datbase exist, use that databse, otherwise use the localhost database
const sequelize = process.env.JAWSDB_URL
  ? new Sequelize(process.env.JAWSDB_URL)
  : new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD, {
      host: 'localhost',
      dialect: 'mysql',
      dialectOptions: {
        decimalNumbers: true,
      },
    });

//Export the sequelize connection
module.exports = sequelize;