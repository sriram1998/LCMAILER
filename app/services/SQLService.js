const sql = require("../db/db.js");

const getProblems = (difficultyRange, concepts) => {
    let query = `SELECT * from problems WHERE difficulty in (?) AND concept in (?) and status = "UNSOLVED"`;

    sql.query(query, [difficultyRange, concepts], (response, error) => {
        if(error){
            console.log("querying table failed ", error);
        }
        else{
            console.log(response);
        }
    })
};

module.exports = {getProblems}