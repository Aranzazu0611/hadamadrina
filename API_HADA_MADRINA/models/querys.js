const create_database_query = 'CREATE DATABASE IF NOT EXISTS hada_madrina';
const use_database = 'use hada_madrina';
////SELECT ALL ////
const select_all_user_query = 'SELECT * FROM user';
const select_all_mothers_query = 'SELECT * FROM `mothers`'
const select_all_children_query = 'SELECT * FROM `children`';
const select_all_clothing_query = 'SELECT * FROM `clothing`';
const select_all_foods_query = 'SELECT * FROM `foods`';
const select_all_furniture_query = 'SELECT * FROM `furniture`';
const select_all_hygiene_query = 'SELECT * FROM `hygiene`';

///COUNT
const select_count_mothers_month_query = 'SELECT COUNT(*) FROM `mothers` c WHERE c.mother_entry_date < now() and c.mother_entry_date > date_sub(NOW(), INTERVAL 30 DAY)'
const select_count_mothers_week_query = 'SELECT COUNT(*) FROM `mothers` c WHERE c.mother_entry_date < now() and c.mother_entry_date > date_sub(NOW(), INTERVAL 7 DAY)'
const select_count_mothers_day_query = 'SELECT COUNT(*) FROM `mothers` c WHERE c.mother_entry_date < now() and c.mother_entry_date > date_sub(NOW(), INTERVAL 1 DAY)'
const select_count_furniture_month_query = 'SELECT COUNT(*) FROM `furniture` c WHERE c.furniture_entry_date < now() and c.furniture_entry_date > date_sub(NOW(), INTERVAL 30 DAY)'
const select_count_furniture_week_query = 'SELECT COUNT(*) FROM `furniture` c WHERE c.furniture_entry_date < now() and c.furniture_entry_date > date_sub(NOW(), INTERVAL 7 DAY)'
const select_count_furniture_day_query = 'SELECT COUNT(*) FROM `furniture` c WHERE c.furniture_entry_date < now() and c.furniture_entry_date > date_sub(NOW(), INTERVAL 1 DAY)'
const select_count_food_month_query = 'SELECT COUNT(*) FROM `foods` c WHERE c.food_entry_date < now() and c.food_entry_date > date_sub(NOW(), INTERVAL 30 DAY)'
const select_count_food_week_query = 'SELECT COUNT(*) FROM `foods` c WHERE c.food_entry_date < now() and c.food_entry_date > date_sub(NOW(), INTERVAL 7 DAY)'
const select_count_food_day_query = 'SELECT COUNT(*) FROM `foods` c WHERE c.food_entry_date < now() and c.food_entry_date > date_sub(NOW(), INTERVAL 1 DAY)'
const select_count_hygiene_month_query = 'SELECT COUNT(*) FROM `hygiene` c WHERE c.hygiene_entry_date < now() and c.hygiene_entry_date > date_sub(NOW(), INTERVAL 30 DAY)'
const select_count_hygiene_week_query = 'SELECT COUNT(*) FROM `hygiene` c WHERE c.hygiene_entry_date < now() and c.hygiene_entry_date > date_sub(NOW(), INTERVAL 7 DAY)'
const select_count_hygiene_day_query = 'SELECT COUNT(*) FROM `hygiene` c WHERE c.hygiene_entry_date < now() and c.hygiene_entry_date > date_sub(NOW(), INTERVAL 1 DAY)'
const select_count_clothing_month_query = 'SELECT COUNT(*) FROM `clothing` c WHERE c.clothing_entry_date < now() and c.clothing_entry_date > date_sub(NOW(), INTERVAL 30 DAY)'
const select_count_clothing_week_query = 'SELECT COUNT(*) FROM `clothing` c WHERE c.clothing_entry_date < now() and c.clothing_entry_date > date_sub(NOW(), INTERVAL 7 DAY)'
const select_count_clothing_day_query = 'SELECT COUNT(*) FROM `clothing` c WHERE c.clothing_entry_date < now() and c.clothing_entry_date > date_sub(NOW(), INTERVAL 1 DAY)'



////COUNT DEPARTURE
const select_count_departure_furniture_month_query = 'SELECT COUNT(*) FROM `furniture` c WHERE c.furniture_departure_date < now() and c.furniture_departure_date > date_sub(NOW(), INTERVAL 30 DAY)'
const select_count_departure_furniture_week_query = 'SELECT COUNT(*) FROM `furniture` c WHERE c.furniture_departure_date < now() and c.furniture_departure_date > date_sub(NOW(), INTERVAL 7 DAY)'
const select_count_departure_furniture_day_query = 'SELECT COUNT(*) FROM `furniture` c WHERE c.furniture_departure_date < now() and c.furniture_departure_date > date_sub(NOW(), INTERVAL 1 DAY)'
const select_count_departure_food_month_query = 'SELECT COUNT(*) FROM `foods` c WHERE c.food_departure_date < now() and c.food_departure_date > date_sub(NOW(), INTERVAL 30 DAY)'
const select_count_departure_food_week_query = 'SELECT COUNT(*) FROM `foods` c WHERE c.food_departure_date < now() and c.food_departure_date > date_sub(NOW(), INTERVAL 7 DAY)'
const select_count_departure_food_day_query = 'SELECT COUNT(*) FROM `foods` c WHERE c.food_departure_date < now() and c.food_departure_date > date_sub(NOW(), INTERVAL 1 DAY)'
const select_count_departure_hygiene_month_query = 'SELECT COUNT(*) FROM `hygiene` c WHERE c.hygiene_departure_date  < now() and c.hygiene_departure_date  > date_sub(NOW(), INTERVAL 30 DAY)'
const select_count_departure_hygiene_week_query = 'SELECT COUNT(*) FROM `hygiene` c WHERE c.hygiene_departure_date  < now() and c.hygiene_departure_date  > date_sub(NOW(), INTERVAL 7 DAY)'
const select_count_departure_hygiene_day_query = 'SELECT COUNT(*) FROM `hygiene` c WHERE c.hygiene_departure_date  < now() and c.hygiene_departure_date  > date_sub(NOW(), INTERVAL 1 DAY)'
const select_count_departure_clothing_month_query = 'SELECT COUNT(*) FROM `clothing` c WHERE c.clothing_departure_date < now() and c.clothing_departure_date > date_sub(NOW(), INTERVAL 30 DAY)'
const select_count_departure_clothing_week_query = 'SELECT COUNT(*) FROM `clothing` c WHERE c.clothing_departure_date < now() and c.clothing_departure_date > date_sub(NOW(), INTERVAL 7 DAY)'
const select_count_departure_clothing_day_query = 'SELECT COUNT(*) FROM `clothing` c WHERE c.clothing_departure_date < now() and c.clothing_departure_date > date_sub(NOW(), INTERVAL 1 DAY)'



////SELECT BY ID////
const select_a_children_query = 'SELECT * FROM `children` where mother_id = ?';
const select_an_user_query = 'SELECT * FROM user WHERE id = ?';
const select_an_user_whith_param_query = 'SELECT * FROM user WHERE email = ? AND password = ?';
const select_a_mother_query = 'SELECT * FROM `mothers` WHERE id = ?'
const select_a_clothing_query = 'SELECT * FROM `clothing` WHERE id = ?';
const select_a_food_query = 'SELECT * FROM `foods` WHERE id = ?';
const select_a_furniture_query ='SELECT * FROM furniture WHERE id = ?'
const select_a_hygiene_query ='SELECT * FROM hygiene WHERE id = ?'


/////INSERT///////
const insert_user_query = "INSERT INTO user SET ?"
const insert_mother_query = "INSERT INTO `mothers` SET ?"
const insert_clothing_query = "INSERT INTO `clothing` SET ?"
const insert_children_query = "INSERT INTO `children` SET ?"
const insert_food_query = "INSERT INTO `foods` SET ?"
const insert_furniture_query = "INSERT INTO `furniture` SET ?"
const insert_hygiene_query = "INSERT INTO `hygiene` SET ?"

/////
const update_user_query = "UPDATE user set ? WHERE id = ?"
const update_mother_query = "UPDATE mothers set ? WHERE id = ?"
const update_clothing_query = "UPDATE clothing set ? WHERE id = ?";
const update_children_query = "UPDATE children set ? WHERE id = ?";
const update_food_query = "UPDATE foods set ? WHERE id = ?";
const update_furniture_query = "UPDATE furniture set ? WHERE id = ?";
const update_hygiene_query = "UPDATE hygiene set ? WHERE id = ?";


////DELETE////////
const delete_user_query = 'DELETE FROM user WHERE id = ?'
const delete_children_query = 'DELETE FROM children WHERE id = ?'
const delete_mother_query = 'DELETE FROM  `mothers` WHERE id = ?'
const delete_clothing_query = 'DELETE FROM  `clothing` WHERE id = ?'
const delete_food_query = 'DELETE FROM  `foods` WHERE id = ?'
const delete_furniture_query = 'DELETE FROM  `furniture` WHERE id = ?'
const delete_hygiene_query = 'DELETE FROM  `hygiene` WHERE id = ?'


module.exports = {
    create_database_query,
    use_database,
    select_all_user_query,
    select_all_children_query,
    select_all_clothing_query,
    select_all_foods_query,
    select_all_furniture_query,
    select_all_hygiene_query,
    select_an_user_query,
    select_an_user_whith_param_query,
    select_a_children_query,
    select_a_food_query,
    select_a_clothing_query,
    select_a_furniture_query,
    select_a_hygiene_query,
    delete_user_query,
    delete_children_query,
    delete_clothing_query,
    delete_food_query,
    delete_hygiene_query,
    delete_furniture_query,
    insert_user_query,
    update_user_query,
    insert_food_query,
    select_all_mothers_query,
    select_a_mother_query,
    delete_mother_query,
    insert_mother_query,
    insert_children_query,
    insert_clothing_query,
    insert_furniture_query,
    insert_hygiene_query,
    update_mother_query,
    update_children_query,
    update_clothing_query,
    update_food_query,
    update_furniture_query,
    update_hygiene_query,
    select_count_mothers_month_query,
    select_count_mothers_week_query,
    select_count_mothers_day_query,
    select_count_furniture_month_query,
    select_count_furniture_week_query,
    select_count_furniture_day_query,
    select_count_food_month_query,
    select_count_food_week_query,
    select_count_food_day_query,
    select_count_hygiene_month_query,
    select_count_hygiene_week_query,
    select_count_hygiene_day_query,
    select_count_clothing_month_query,
    select_count_clothing_week_query,
    select_count_clothing_day_query,
    select_count_departure_furniture_month_query,
    select_count_departure_furniture_week_query,
    select_count_departure_furniture_day_query,
    select_count_departure_food_month_query,
    select_count_departure_food_week_query,
    select_count_departure_food_day_query,
    select_count_departure_hygiene_month_query,
    select_count_departure_hygiene_week_query,
    select_count_departure_hygiene_day_query,
    select_count_departure_clothing_month_query,
    select_count_departure_clothing_week_query,
    select_count_departure_clothing_day_query










}