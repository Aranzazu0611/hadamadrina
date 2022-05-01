const children_table = `
CREATE TABLE IF NOT EXISTS children (
    id int NOT NULL AUTO_INCREMENT,    
    name varchar(100) NOT NULL,
    surnames varchar(100) NOT NULL, 
    age int NOT NULL,
    gender varchar(100) NOT NULL,
    children_birth DATE NOT NULL,
    father_name varchar(100) NOT NULL,
    mother_id int NOT NULL,    
    foreign key (mother_id) references mothers(id),    
    PRIMARY KEY (id)
)  ENGINE=INNODB;`

module.exports = { children_table}