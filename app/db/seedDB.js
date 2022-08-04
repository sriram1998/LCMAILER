const mysqlUtil = require("./mysqlUtil.js");
const readXlsxFile = require('read-excel-file/node');
const pool = mysqlUtil.pool;

var filePath = "./resources/problems.xlsx";

async function insertDataIntoDB(){
    var sql = await mysqlUtil.getConnection(pool);
    readXlsxFile(filePath).then((rows) => {
        console.log(rows);
        let query = `INSERT INTO problems (title, difficulty, link, concept, status) VALUES ?`;
    
        try{
            sql.query(query, [rows], (error, response) => {
                if(error){
                    console.log("Insertion of records failed ", error);
                }
                else{
                    console.log("Data loaded successfully ", response);
                    return;
                }
            })
        }
        finally{
            sql.release();
        }
        
    });

    return;
}

insertDataIntoDB();