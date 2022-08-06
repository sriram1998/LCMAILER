const mysql = require("mysql");
const dbConfig = require("../../config/db.config.js");

const pool = mysql.createPool({
  connectionLimit: 500,
  host: dbConfig.HOST,
  user: dbConfig.USER,
  password: dbConfig.PASSWORD,
  database: dbConfig.DB
});

async function getConnection(pool){
  return new Promise((resolve, reject) => {
      pool.getConnection((err, conn) => {
          if(err){
              console.log("Connection to Database failed ", err);
              return reject(err);
          }
          else{
              resolve(conn);
          }
      })
  })
}

module.exports = {pool, getConnection}