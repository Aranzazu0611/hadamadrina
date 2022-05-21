const get_User_Url = "http://localhost:3003/api/user/"
const get_Mother_Url = "http://localhost:3003/api/mothers/"
const get_Hygiene_Url = "http://localhost:3003/api/hygiene/"
const get_Furniture_Url = "http://localhost:3003/api/furniture/"
const get_Foods_Url = "http://localhost:3003/api/foods/"
const get_Clothing_Url = "http://localhost:3003/api/clothing/"
const get_Children_Url = `http://localhost:3003/api/children/mother/`
const get_By_Id_Chlidren =`http://localhost:3003/api/children/`
const get_By_Id_Mother_Url = "http://localhost:3003/api/mother/"


const delete_User_Url = "http://localhost:3003/api/user/delete/"
const delete_Mother_Url = "http://localhost:3003/api/mother/delete/"
const delete_Hygiene_Url = "http://localhost:3003/api/hygiene/delete/"
const delete_Furniture_Url = "http://localhost:3003/api/furniture/delete/"
const delete_Foods_Url = "http://localhost:3003/api/foods/delete/"
const delete_Clothing_Url = "http://localhost:3003/api/clothing/delete/"
const delete_Children_Url = "http://localhost:3003/api/childrens/delete/"


const register_Clothing_Url = "http://localhost:3003/api/clothing/register/"
const register_Children_Url = "http://localhost:3003/api/childrens/register/"
const register_Hygiene_Url = "http://localhost:3003/api/hygiene/register/"
const register_Furniture_Url = "http://localhost:3003/api/furniture/register/"
const register_Foods_Url = "http://localhost:3003/api/foods/register/"
const register_Mother_Url = "http://localhost:3003/api/mother/register/"
const register_User_Url = "http://localhost:3003/api/user/register/"


const update_Clothing_Url = "http://localhost:3003/api/clothing/edit/"
const update_Children_Url = "http://localhost:3003/api/children/edit/"
const update_Hygiene_Url = "http://localhost:3003/api/hygiene/edit/"
const update_Furniture_Url = "http://localhost:3003/api/furniture/edit/"
const update_Foods_Url = "http://localhost:3003/api/foods/edit/"
const update_Mother_Url = "http://localhost:3003/api/mother/edit/"
const update_User_Url = "http://localhost:3003/api/user/update/"

const route_mother_screen = "/mother"  
const route_mother_info_screen = `/children/`
const route_clothing_info = "/clothing"
const route_foods_info = `/foods` 
const route_furniture = `/furniture` 
const route_hygiene = "/hygiene"
const route_user = "/user"
const route_user_update = "/update/User/:id"
const route_user_update_sreen = "/update/User/"
const route_dashboard = "/dashboard" 
const route_children_info = "/children/:id" 
const route_register_hygiene = "/register/hygiene" 
const route_register_children = "/register/children/:id" 
const route_register_children_screen ="/register/children/"
const route_register_food ="/register/food" 
const route_register_mother ="/register/mother" 
const route_register_clothing ="/register/clothing" 
const route_register_furniture ="/register/furniture" 
const route_update_hygiene = "/update/hygiene/:id"
const route_update_hygiene_screen = "/update/hygiene/"
const route_update_furniture = "/update/furniture/:id"
const route_update_furniture_screen = "/update/furniture/"
const route_update_food = "/update/food/:id"
const route_update_food_screen = "/update/food/"
const route_update_mother = "/update/mother/:id"
const route_update_mother_screen = "/update/mother/"
const route_update_clothing ="/update/clothing/:id"
const route_update_clothing_screen ="/update/clothing/"
const route_update_children ="/update/children/:id"
const route_update_children_screen ="/update/children/"
const route_denied = "/denied"


module.exports = {
    get_User_Url,
    get_Mother_Url,
    get_Hygiene_Url,
    get_Furniture_Url,
    get_Foods_Url,
    get_Clothing_Url,
    get_Children_Url,
    get_By_Id_Chlidren, 
    get_By_Id_Mother_Url,  
    delete_User_Url,    
    delete_Mother_Url,
    delete_Hygiene_Url,
    delete_Furniture_Url,
    delete_Foods_Url,
    delete_Clothing_Url,
    delete_Children_Url,
    register_Clothing_Url,
    register_Children_Url,
    register_Hygiene_Url,
    register_Furniture_Url,
    register_Foods_Url,
    register_Mother_Url,
    register_User_Url,
    update_Clothing_Url,
    update_Children_Url,
    update_Hygiene_Url,
    update_Furniture_Url,
    update_Foods_Url,
    update_Mother_Url,
    update_User_Url,
    route_mother_screen,
    route_mother_info_screen,
    route_clothing_info,
    route_foods_info,
    route_furniture,
    route_hygiene,
    route_user,
    route_user_update,
    route_dashboard,
    route_children_info,
    route_register_hygiene,
    route_register_furniture,
    route_register_clothing,
    route_register_children,
    route_register_mother, 
    route_register_food,
    route_update_hygiene,
    route_update_furniture,
    route_update_food,
    route_update_clothing,
    route_update_mother,
    route_update_mother_screen,
    route_update_furniture_screen,
    route_update_children,
    route_user_update_sreen,
    route_update_hygiene_screen,
    route_denied,
    route_register_children_screen,
    route_update_food_screen,
    route_update_clothing_screen,
    route_update_children_screen
     

}