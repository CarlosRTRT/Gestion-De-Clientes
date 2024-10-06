-- Active: 1703997315754@@127.0.0.1@3306


CREATE DATABASE IF NOT EXISTS clientsbakery;

-- Usar la base de datos
USE clientsbakery;

-- Crear una tabla con un campo de ID incrementable
CREATE TABLE IF NOT EXISTS clientsbakery (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(255),
    apellido1 VARCHAR(255),
    apellido2 VARCHAR(255),
    telefono NUMERIC,
    deuda NUMERIC,
    pagado NUMERIC
);


SELECT * FROM clientsbakery;



