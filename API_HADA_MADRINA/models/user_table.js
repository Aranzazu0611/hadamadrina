const user_table = `
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
)  ENGINE=INNODB;`

module.exports = { user_table }