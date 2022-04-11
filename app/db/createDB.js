var mysql = require("mysql");
var sqlConfig = require("../config/db.config");

var conn = mysql.createConnection({
    host: sqlConfig.HOST,
    user: sqlConfig.USER,
    password: sqlConfig.PASSWORD,
    multipleStatements: true
});

var sqlCommand = `
CREATE DATABASE lcproblemset;

USE lcproblemset;

CREATE TABLE problems (
    id int(11) NOT NULL auto_increment,
    title varchar(500) NOT NULL,
    difficulty varchar(20) NOT NULL,
    link varchar(500) NOT NULL,
    status varchar(20) NOT NULL,
    concept varchar(20) NOT NULL,
    PRIMARY KEY (id)
);
`

conn.query(sqlCommand, (err) => {
    if(err){
        console.log("Database and table creation failed ", err);
    }
    else{
        console.log("Connection to DB successful and table created");
    }
});