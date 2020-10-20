// const mysql = require("mysql2");

// const pool = mysql.createPool({
//   host: "localhost",
//   user: "root",
//   database: "NodeJS",
//   password: "amalamal",
// });

// module.exports = pool.promise();

// creating database connection using sequelize

const Sequelize = require("sequelize").Sequelize;

const sequelize = new Sequelize("NodeJS", "root", "amalamal", {
  dialect: "mysql",
  host: "localhost",
});

module.exports = sequelize;
