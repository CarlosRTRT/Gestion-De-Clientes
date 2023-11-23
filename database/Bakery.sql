-- Active: 1699851356360@@127.0.0.2@3036


CREATE DATABASE IF NOT EXISTS clientsbakery;

-- Usar la base de datos
USE clientsbakery;

-- Crear una tabla con un campo de ID incrementable
CREATE TABLE clientsbakery (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(255),
    apellido1 VARCHAR(255),
    apellido2 VARCHAR(255),
    telefono NUMERIC,
    deuda NUMERIC,
    pagado NUMERIC
);

INSERT INTO clientsbakery(nombre, apellido1, apellido2, telefono, deuda, pagado ) VALUES ("carla", "Rodriguez", "Chavez", 61849041, 10000, 5000);
SELECT * FROM clientsbakery;



