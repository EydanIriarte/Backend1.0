require('dotenv').config();

module.exports = {
  development: {
    username: process.env.CENTRAL_DB_USER,
    password: process.env.CENTRAL_DB_PASS,
    database: process.env.CENTRAL_DB_NAME,
    host: process.env.CENTRAL_DB_HOST,
    dialect: process.env.CENTRAL_DB_DIALECT
  },
};