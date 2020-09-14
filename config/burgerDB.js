const mysql = require("mysql");
const { connect } = require("../controllers/BurgerControl");

// const burgerDB = mysql.createConnection(
//     {
//         host:"localhost",
//         port: 3306,
//         user: "root",
//         password: "enter101",
//         database: "burgers_db"
//     }
// );

if(process.env.JAWSDB_URL){
    connection = mysql.createConnection(process.env.JAWSDB_URL);
}else{
    connection = mysql.createConnection({
        host:"localhost",
        port: 3306,
        user: "root",
        password: "enter101",
        database: "burger_db"
    });
};



// //make the connection...
// burgerDB.connect(function(err){
//     if(err){
//         console.error("error connectiong: " + err.stack);
//         return;
//     }
//     console.log("connected as id " + burgerDB.threadId);
// });

connection.connect();

module.exports = burgerDB;