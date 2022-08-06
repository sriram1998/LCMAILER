const mysqlUtil = require("./mysqlUtil.js");
const readXlsxFile = require('read-excel-file/node');
const { logger } = require("../utils/logger.js");
const pool = mysqlUtil.pool;

var filePath = "./resources/problems.xlsx";

var flag = false;

async function checkSeed() {

    var sql = await mysqlUtil.getConnection(pool);

    let query = `select count(*) from problems`;

    return new Promise((resolve, reject) => {

        try {
            sql.query(query, (err, response) => {
                if (err) {
                    logger.info("Error retrieving count of problems in table");
                    reject(err);
                }
                else {
                    var numberOfRows = response[0]['count(*)'];
                    logger.info("number of problems loaded is ", response[0]['count(*)']);
                    if (!numberOfRows) {
                        logger.info("Problems are not loaded in DB, starting seed process");
                    }
                    else {
                        logger.info("Problems are already loaded so skipping seed script");
                        pool.end();
                    }

                    resolve(numberOfRows);
                }
            });
        }
        finally {
            sql.release();
        }

    });

}

async function insertDataIntoDB() {

    var sql = await mysqlUtil.getConnection(pool);

    return new Promise((resolve, reject) => {
        readXlsxFile(filePath).then((rows) => {
            let query = `INSERT INTO problems (title, difficulty, link, concept, status) VALUES ?`;

            let flag = false;

            try {
                sql.query(query, [rows], (error, response) => {
                    if (error) {
                        logger.info("Insertion of records failed ", error);
                        reject(error);
                    }
                    else {
                        logger.info("Data loaded successfully");
                        flag = true;
                        resolve(flag);
                    }
                })
            }
            finally {
                sql.release();
                pool.end();
            }

        });
    })

}

module.exports = { checkSeed, insertDataIntoDB }

