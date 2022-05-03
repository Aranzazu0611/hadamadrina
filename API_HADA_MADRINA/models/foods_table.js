const foods_table = `CREATE TABLE IF NOT EXISTS hada_madrina.foods (
    id int NOT NULL AUTO_INCREMENT,    
    food_category varchar(250) NOT NULL,
    description varchar(250) NOT NULL,      
    food_entry_date DATE NOT NULL,
    food_departure_date DATE NOT NULL,       
    PRIMARY KEY (id)
)  ENGINE=INNODB;`

module.exports = { foods_table}