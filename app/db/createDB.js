require("dotenv").config();
var mysql = require("mysql");

var sqlConfig = require("../../config/db.config");

const { logger } = require('../utils/logger');

async function createDB(){
    var conn = mysql.createConnection({
        host: sqlConfig.HOST,
        user: sqlConfig.USER,
        password: sqlConfig.PASSWORD,
        port: sqlConfig.PORT,
        multipleStatements: true
    });
    
    var sqlCommand = `
    CREATE DATABASE IF NOT EXISTS lcproblemset;
    
    USE lcproblemset;
    
    CREATE TABLE IF NOT EXISTS problems (
        id int(11) NOT NULL auto_increment,
        title varchar(500) NOT NULL,
        difficulty varchar(20) NOT NULL,
        link varchar(500) NOT NULL,
        status varchar(20) NOT NULL,
        concept varchar(50) NOT NULL,
        PRIMARY KEY (id)
    );
    `
    return new Promise((resolve, reject) => {
        try {
            conn.query(sqlCommand, (err, response) => {
                if (err) {
                    logger.info("Database and table creation failed ", err);
                    reject(err);
                }
                else {
                    logger.info("Connection to DB successful and table created", response);
                    resolve(response);
                }
            });
        }
        finally {
            conn.end()
        }
    })
    
}

module.exports = { createDB }