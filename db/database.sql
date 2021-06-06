CREATE DATABASE IF NOT EXISTS sql_proyecto;

USE sql_proyecto;

CREATE TABLE usuarios (
  id INT(11) NOT NULL AUTO_INCREMENT,
  Nombre VARCHAR(55) DEFAULT '' NULL,
  Apellido VARCHAR(55) DEFAULT ''NULL,
  Correo VARCHAR(55) DEFAULT '@gmail.com'NULL,
  PRIMARY KEY(id)
);

DESCRIBE usuarios;

INSERT INTO usuarios values 
  (1, 'Juan', 'Lopez','JLopez@mail.com.cl'),
  (2, 'Marcos', 'Gomez','MGomez@brmail.edu.ar'),
  (3, 'Pablo', 'Diaz','PDiaz@gmail.com.col'),
  (4, 'Jose', 'Rodirguez','JRodriguez@link.com.br'),
  (5, 'Mariela', 'Placeres','MPlaceres@gmail.com.cl'),
  (6, 'Sonia', 'Basualdo','SBasualdo@arnet.com.ar'),
  (7, 'Patricia', 'Noriega','PNoriega@hotmail.com'),
  (8, 'Maria', 'Palacios','MPalacios@net.com'),
  (9, 'Juana', 'Quinteros','JQuinteros@ciudad.com.ar'),
  (10, 'Josefa', 'Juarez','JJuarez@Outlook.com'),

SELECT * FROM usuarios;
