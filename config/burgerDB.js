const mysql = require("mysql");

const burgerDB = mysql.createConnection(
    {
        host:"localhost",
        port: 3306,
        user: "root",
        password: "enter101",
        database: "burgers_db"
    }
);

//make the connection...
burgerDB.connect(function(err){
    if(err){
        console.error("error connectiong: " + err.stack);
        return;
    }
    console.log("connected as id " + burgerDB.threadId);
});

module.exports = burgerDB;