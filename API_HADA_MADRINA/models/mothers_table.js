const mothers_table =`CREATE TABLE IF NOT EXISTS hada_madrina.mothers (
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
)  ENGINE=INNODB;`

module.exports = { mothers_table}