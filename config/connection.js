// Import the Sequelize constructor from the library
const Sequelize = require('sequelize');

require('dotenv').config();

// Create connection to our database, pass in your MySQL info for username and password
const sequelize = new Sequelize(
    process.env.db_name, 
    process.env.db_user,
    process.env.db_pw,
    {
        host: 'localhost',
        dialect: 'mysql',
        port: 3306
});

module.exports = sequelize;