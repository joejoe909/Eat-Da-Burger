const bORM = require("../config/burgerORM.js");

let burger = {
    all: function(callBk){
        bORM.all("Burgers", function(res){
            callBk(res);
        });
    },
    //variable cols and vals are arrays
    create: function(cols, vals, callBk){
        bORM.create("Burgers", cols, vals, function(res){
            callBk(res);
        });
    },
    update: function(objColVals, cond, callBk){
        bORM.update("Burgers", objColVals, cond, function(res){
            callBk(res);
        });
    },
    delete: function(cond, callBk){
        bORM.delete("Burgers", cond, function(res) {
                callBk(res);
            });
        }
};

module.exports = burger;