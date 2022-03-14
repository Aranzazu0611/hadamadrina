const hygiene_table = `CREATE TABLE IF NOT EXISTS hygiene (
    id int NOT NULL AUTO_INCREMENT,    
    hygiene_category varchar(250) NOT NULL,
    description varchar(250) NOT NULL,
    brand varchar(100) NOT NULL,     
    hygiene_entry_date DATE NOT NULL,
    hygiene_departure_date DATE NOT NULL ,       
    PRIMARY KEY (id)
)  ENGINE=INNODB;`

module.exports = { hygiene_table}