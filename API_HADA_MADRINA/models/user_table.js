const user_table = `CREATE TABLE IF NOT EXISTS user (
    id int NOT NULL AUTO_INCREMENT,    
    name varchar(100) NOT NULL,
    surnames varchar(100) NOT NULL,
    email varchar(50) NOT NULL,
    phone int(9) NOT NULL,
    address varchar(255) NOT NULL,
    password varchar(100) NOT NULL,
    volunteers_rol int NOT NULL,
    PRIMARY KEY (id)
)  ENGINE=INNODB;`

module.exports = { user_table}
