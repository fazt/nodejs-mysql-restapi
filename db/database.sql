CREATE DATABASE IF NOT EXISTS company;

USE company;

CREATE TABLE usuarios (
  id INT(11) NOT NULL AUTO_INCREMENT,
  Nombre VARCHAR(55) DEFAULT NULL,
  Apellido VARCHAR(55) DEFAULT NULL,
  Correo VARCHAR(55) DEFAULT NULL,
  PRIMARY KEY(id)
);

DESCRIBE employee;

INSERT INTO employee values 
  (1, 'Ryan Ray', 20000),
  (2, 'Joe McMillan', 40000),
  (3, 'John Carter', 50000);

SELECT * FROM employee;
