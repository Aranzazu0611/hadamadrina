CREATE DATABASE IF NOT EXISTS hada_madrina;

CREATE TABLE IF NOT EXISTS hada_madrina.user (
    id int NOT NULL AUTO_INCREMENT,    
    name varchar(20) NOT NULL,
    surnames varchar(50) NOT NULL,
    email varchar(50) NOT NULL,
    phone int(9) NOT NULL,
    address varchar(100) NOT NULL,
    password varchar(8) NOT NULL,
    volunteers_rol varchar(20) NOT NULL,
    PRIMARY KEY (id)
);

CREATE TABLE IF NOT EXISTS hada_madrina.mothers (
    id int NOT NULL AUTO_INCREMENT,    
    name varchar(100) NOT NULL,
    surnames varchar(100) NOT NULL,
    age int(2) NOT NULL,
    email varchar(50) NOT NULL,
    phone int(9) NOT NULL,
    address varchar(255) NOT NULL,    
    nationality varchar(100)  NOT NULL,
    mother_birth DATE NOT NULL,    
    civil_status varchar(100) NOT NULL,
    mother_entry_date DATE NOT NULL,   
    PRIMARY KEY (id)
)  ENGINE=INNODB;

CREATE TABLE IF NOT EXISTS hada_madrina.hygiene (
    id int NOT NULL AUTO_INCREMENT,    
    hygiene_category varchar(250) NOT NULL,
    description varchar(250) NOT NULL,
    brand varchar(100) NOT NULL,     
    hygiene_entry_date DATE NOT NULL,
    hygiene_departure_date DATE NOT NULL ,       
    PRIMARY KEY (id)
)  ENGINE=INNODB;

CREATE TABLE IF NOT EXISTS hada_madrina.furniture (
    id int NOT NULL AUTO_INCREMENT,    
    furniture_category varchar(250) NOT NULL,
    description varchar(250) NOT NULL,
    state varchar(100) NOT NULL,     
    furniture_entry_date DATE ,
    furniture_departure_date DATE ,       
    PRIMARY KEY (id)
)  ENGINE=INNODB;

CREATE TABLE IF NOT EXISTS hada_madrina.foods (
    id int NOT NULL AUTO_INCREMENT,    
    food_category varchar(250) NOT NULL,
    description varchar(250) NOT NULL,      
    food_entry_date DATE NOT NULL,
    food_departure_date DATE NOT NULL,       
    PRIMARY KEY (id)
)  ENGINE=INNODB;

CREATE TABLE IF NOT EXISTS hada_madrina.clothing (
    id int NOT NULL AUTO_INCREMENT,    
    clothing_category varchar(250) NOT NULL,
    description varchar(250) NOT NULL, 
    colour varchar(100) NOT NULL,     
    size varchar(100) NOT NULL,
    gender varchar(100) NOT NULL,
    age int NOT NULL,
    clothing_entry_date DATE NOT NULL ,
    clothing_departure_date DATE NOT NULL,       
    PRIMARY KEY (id)
)  ENGINE=INNODB;

CREATE TABLE IF NOT EXISTS hada_madrina.children (
    id int NOT NULL AUTO_INCREMENT,    
    name varchar(100) NOT NULL,
    surnames varchar(100) NOT NULL, 
    age int NOT NULL,
    gender varchar(100) NOT NULL,
    children_birth DATE NOT NULL,
    father_name varchar(100) NOT NULL,
    mother_id int NOT NULL,    
    foreign key (mother_id) references hada_madrina.mothers(id) ON DELETE CASCADE,    
    PRIMARY KEY (id)
)  ENGINE=INNODB;

use hada_madrina;
INSERT INTO `user`( `name`, `surnames`, `email`, `phone`, `address`, `password`, `volunteers_rol`) VALUES ('Ilerna','Online','ilerna@gmail.com','696578435','Lleida','12345678','Admin');
INSERT INTO `clothing`(`clothing_category`, `description`, `colour`, `size`, `gender`, `age`, `clothing_entry_date`) VALUES ('body','primera puesta','blanco','0-1 mes','niña','1','2022-06-10');
INSERT INTO `furniture`(`furniture_category`, `description`, `state`, `furniture_entry_date`) VALUES ('cuna','madera blanca','nuevo','2022-06-19')