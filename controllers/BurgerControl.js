const express = require("express");

const router = express.Router();

//import database
const burger = require("../models/burger.js");

//create routes
router.get("/", function(req, res){
    burger.all(function(data){
        const hbObj = {
            burger: data
        };
        res.render("home", hbObj);
    });
});

router.post("/api/burgers", function(req, res){
    burger.create(
        ["burger", "devoured"],
        [req.body.burger, req.body.devoured],
        function(result){
            res.json({id: result.insertId});
        });
});

router.put("/api/burgers/:id", function(req, res){
    alert("devour");
    const cond = "id=" + req.params.id;
    burger.update({
        devoured: req.body.devoured =True
    }, cond, function(result){
        if(result.changedRows == 0){
            return res.status(404).end();
        }else{
            res.status(200).end();
        }
    });
});

router.delete("/api/burgers/:id", function(req, res){
    let cond = "id=" + req.params.id;
    burger.delete(cond, function(result){
        if(result.affectedRows == 0){
            return res.status(404).end();
        }else{
            res.status(200).end();
        }
    });
});

//exports routes for server.js
module.exports = router;
