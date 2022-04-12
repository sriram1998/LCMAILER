const mysqlUtil = require("../db/mysqlUtil.js");

const pool = mysqlUtil.pool;


async function getProblems(difficultyRange, concepts) {
    let query = `SELECT * from problems WHERE difficulty in (?) AND concept in (?) and status = "UNSOLVED"`;

    var conn = await mysqlUtil.getConnection(pool);

    return new Promise((resolve, reject) => {
        try {
            conn.query(query, [difficultyRange, concepts], (error, response) => {
                if (error) {
                    console.log("querying table failed ", error);
                    reject(error);
                }
                else {
                    resolve(response);
                }
            })
        }

        finally {
            conn.release();
        }
    })
};

async function updateStatus(id){
    let query = `UPDATE problems SET status = "SOLVED" where id = ?`;

    var conn = await mysqlUtil.getConnection(pool);

    return new Promise((resolve, reject) => {
        try{
            conn.query(query, id, (err, response) => {
                if(err){
                    console.log("Update Failed ", err);
                    reject(err);
                }
                else{
                    resolve(response);
                }
            })
        }
        finally{
            conn.release();
        }
    })

};

module.exports = { getProblems, updateStatus }