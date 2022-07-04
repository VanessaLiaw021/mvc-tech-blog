//Import require packages
const Sequelize = require('sequelize');
require('dotenv').config();
let sequelize;

//If JAWSDB_URL datbase exist, use that databse, otherwise use the localhost database
if (process.env.JAWSDB_URL) {
  sequelize = new Sequelize(process.env.JAWSDB_URL);
} else {
  sequelize = new Sequelize(
    process.env.DB_NAME,
    process.env.DB_USER,
    process.env.DB_PASSWORD,
    {
      host: 'localhost',
      dialect: 'mysql',
      port: 3306
    }
  );
}

//Export the sequelize connection
module.exports = sequelize;