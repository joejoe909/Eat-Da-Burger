DROP DATABASE IF EXISTS burgers_db;
CREATE database burgers_db;

USE burgers_db;

CREATE TABLE Burgers(
    id INT NOT NULL AUTO_INCREMENT,
    burger VARCHAR(150) DEFAULT '' NOT NULL,
    devoured INT(1),
    PRIMARY KEY(id)
);

INSERT INTO Burgers (burger, devoured) 
VALUES
("Kobi Beef W/Duck Bacon Burger and aged guda",0),
("5 Happy Meal Burger Stack", 0);