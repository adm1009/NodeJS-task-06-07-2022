const mysql = require("mysql");

const connection = mysql.createConnection({
    host: "localhost",
    user:"root",
    password:"",
    database:"newrmsdump",
    port:3308
});

module.exports = connection;