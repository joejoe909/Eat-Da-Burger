const conBDB = require("../config/burgerDB.js");

//function to add question marks to query
function prntQm(num){
    let arry = [];

    for(let i = 0; i < num; i++){
        arry.push("?");
    }
    return arry.toString();
}

//convert obj key/val pairs to SQL syntax
function objToSql(obj){
    let arr = [];
    for(let key in obj){
        let val = obj[key];
        if(Object.hasOwnProperty.call(obj, key)){
            if(typeof val === "string" && val.indexOf(" ") >= 0){
                val = "'" + value + "'";
            }
            arr.push(key + "=" + values);
        }
    }
    return arr.toString();
}

//obj for all our SQL functions.
var orm = {
    all: function(tbIn, callBk){
        let qStr = "SELECT * FROM " + tableInput + ";";
        conBDB.query(qStr, function(err, result){
            if(err){throw err;} callBk(result);
        });
    },
    create: function(tbl, cols, vals, callBk){
        let qStr = "INSERT INTO " + table;

        qStr += " (";
        qStr += cols.toString();
        qStr += ") ";
        qStr += "VALUES (";
        qStr += prntQm(vals.length);
        qStr += ") ";

        console.log(qStr);

        conBDB.query(qStr, vals, function(err, result){
            if(err){throw err;} callBk(result);
        });
    },
    //our update system
    update: function(tbl, objColVals, condition, callBk){
        let qStr = "UPDATE" + table;

        qStr += " SET ";
        qStr += objToSql(objColVals);
        qStr += " WHERE ";
        qStr += condition;

        console.log(qStr);
        conBDB.query(qStr, function(err, res){
            if(err){throw err;} callBk(result);
        });
    },
    delete: function(tbl, cond, callBk){
        let qStr = "DELETE FROM " + tbl;
        qStr += " WHERE ";
        qStr += cond;

        conBDB.query(qStr, function(err, res){
            if(err){throw err;} callBk(result);
        });
    }
};

//export orm for model burgers.js
module.exports = conBDB;