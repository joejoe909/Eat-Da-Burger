DROP DATABASE IF EXISTS burgers_db;
CREATE database burgers_db;

USE burgers_db;

CREATE TABLE Burgers(
    id int NOT NULL AUTO_INCREMENT,
    burger VARCHAR(150) DEFAULT '' NOT NULL,
    devoured BOOLEAN DEFAULT false,
    PRIMARY KEY(id)
);

INSERT INTO Burgers (burger, devoured) 
VALUES
("Kobi Beef W/Duck Bacon Burger and aged guda", false),
("5 Happy Meal Burger Stack", false),
("Chilli Burger", true),
("Impossible Burger", true);