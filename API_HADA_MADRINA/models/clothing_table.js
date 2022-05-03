const clothing_table = `CREATE TABLE IF NOT EXISTS hada_madrina.clothing (
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
)  ENGINE=INNODB;`

module.exports = { clothing_table}