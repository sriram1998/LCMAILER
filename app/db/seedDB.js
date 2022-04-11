const sql = require("./db.js");
const readXlsxFile = require('read-excel-file/node');

var filePath = "../../resources/test.xlsx";

readXlsxFile(filePath).then((rows) => {
    console.log(rows);
    let query = `INSERT INTO problems (title, difficulty, link, concept, status) VALUES ?`;

    sql.query(query, [rows], (error, response) => {
        if(error){
            console.log("Insertion of records failed ", error);
        }
        else{
            console.log("Data loaded successfully");
        }
    })
});











