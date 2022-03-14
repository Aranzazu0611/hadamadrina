const furniture_table = `CREATE TABLE IF NOT EXISTS furniture (
    id int NOT NULL AUTO_INCREMENT,    
    furniture_category varchar(250) NOT NULL,
    description varchar(250) NOT NULL,
    state varchar(100) NOT NULL,     
    furniture_entry_date DATE ,
    furniture_departure_date DATE ,       
    PRIMARY KEY (id)
)  ENGINE=INNODB;`

module.exports = { furniture_table}