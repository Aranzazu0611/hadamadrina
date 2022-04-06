const create_database_query = 'CREATE DATABASE IF NOT EXISTS hada_madrina';
const use_database = 'use hada_madrina';
const select_all_user_query = 'SELECT * FROM user';
const select_an_user_query = 'SELECT * FROM user WHERE id = ?';
const insert_user_query =  "INSERT INTO user SET ?"
const update_user_query = "UPDATE user set ? WHERE id = ?"
const delete_user_query = 'DELETE FROM user WHERE id = ?'
const select_all_mothers_query = 'SELECT * FROM `mothers` WHERE 1'
const select_a_mother_query = 'SELECT * FROM `mothers` WHERE id = ?'
const delete_mother_query = 'DELETE FROM  `mothers` WHERE id = ?'
const insert_mother_query = "INSERT INTO `mothers` SET ?"
const update_mother_query = "UPDATE mothers set ? WHERE id = ?" 


module.exports = { 
    create_database_query,
    use_database,
    select_all_user_query,
    select_an_user_query,
    delete_user_query,
    insert_user_query,
    update_user_query,
    select_all_mothers_query,
    select_a_mother_query,
    delete_mother_query,
    insert_mother_query,
    update_mother_query

  
}
