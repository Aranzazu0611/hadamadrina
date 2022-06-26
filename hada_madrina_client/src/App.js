import "./App.css";
import { React } from "react";
import { BrowserRouter, Routes, Route} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
import User from "./components/User/user";
import Clothing from "./components/Clothing/clothing";
import Clothing_Register from "./components/Clothing/clothing_register";
import Furniture from "./components/Furniture/furniture";
import Furniture_Register from "./components/Furniture/furniture_register";
import Hygiene from "./components/Hygiene/hygiene";
import Children from "./components/Children/children";
import Foods from "./components/Foods/foods";
import Foods_Register from "./components/Foods/food_register";
import Mother from "./components/Mother/mothers";
import Register from "./components/Register/register";
import Hygiene_Register from "./components/Hygiene/Hygiene_Register";
import Login from "./components/Login/login";
import Children_Register from "./components/Children/children_register";
import Mother_Register from "./components/Mother/mother_register";
import Children_Update from "./components/Children/children_update";
import Dasboard from "./components/Dashboard/dashboard";
import Clothing_Update from "./components/Clothing/clothing_update";
import Food_Update from "./components/Foods/food_update";
import Furniture_Update from "./components/Furniture/furniture_update";
import Hygiene_Update from "./components/Hygiene/Hygiene_Update";
import Mother_Update from "./components/Mother/mother_update";

import User_Update from "./components/User/user_update";
import { PrivateRoute } from "./components/PermissionRoutes/PrivateRoute";
import { Message_denied } from "./components/Not_Access/Message_denied";
import { route_children_info, route_clothing_info, route_dashboard, route_denied, route_foods_info, route_furniture, route_hygiene, route_mother_screen, route_register_children, route_register_clothing, route_register_food, route_register_furniture, route_register_hygiene, route_register_mother, route_update_children, route_update_clothing, route_update_food, route_update_furniture, route_update_hygiene, route_update_mother, route_user, route_user_update } from "./utils/url";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/register" element={<Register></Register>} />
        <Route path="/" element={<Login></Login>} />
        <Route
          path={route_user}
          element={
            <PrivateRoute admin={"Admin"} user={""}>
              <User></User>
            </PrivateRoute>
          }
        />
        <Route
          path={route_dashboard}
          element={
            <PrivateRoute admin={"Admin"} user={""}>
              <Dasboard></Dasboard>
            </PrivateRoute>
          }
        />
        <Route
          path={route_mother_screen}
          element={
            <PrivateRoute admin={"Admin"} user={"Administrativo"}>
              <Mother></Mother>
            </PrivateRoute>
          }
        />

        <Route
          path={route_user_update}
          element={
            <PrivateRoute admin={"Admin"} user={""}>
              <User_Update></User_Update>
            </PrivateRoute>
          }
        />
        <Route
          path={route_clothing_info}
          element={
            <PrivateRoute admin={"Admin"} user={"Almacén-ropa"}>
              <Clothing></Clothing>
            </PrivateRoute>
          }
        />
        <Route
          path={route_foods_info}
          element={
            <PrivateRoute admin={"Admin"} user={"Almacén-comida"}>
              <Foods></Foods>
            </PrivateRoute>
          }
        />
        <Route
          path={route_children_info}
          element={
            <PrivateRoute admin={"Admin"} user={"Administrativo"}>
              <Children></Children>
            </PrivateRoute>
          }
        />
        <Route
          path={route_furniture}
          element={
            <PrivateRoute admin={"Admin"} user={"Almacén-muebles"}>
              <Furniture></Furniture>
            </PrivateRoute>
          }
        />
        <Route
          path={route_hygiene}
          element={
            <PrivateRoute admin={"Admin"} user={"Almacén-higiene y utensilios"}>
              <Hygiene></Hygiene>
            </PrivateRoute>
          }
        />
        <Route
          path={route_register_hygiene}
          element={
            <PrivateRoute admin={"Admin"} user={"Almacén-higiene y utensilios"}>
              <Hygiene_Register></Hygiene_Register>
            </PrivateRoute>
          }
        />
        <Route
          path={route_update_hygiene}
          element={
            <PrivateRoute admin={"Admin"} user={"Almacén-higiene y utensilios"}>
              <Hygiene_Update></Hygiene_Update>
            </PrivateRoute>
          }
        />
        <Route
          path={route_register_furniture}
          element={
            <PrivateRoute admin={"Admin"} user={"Almacén-muebles"}>
              <Furniture_Register></Furniture_Register>
            </PrivateRoute>
          }
        />
        <Route
          path={route_update_furniture}
          element={
            <PrivateRoute admin={"Admin"} user={"Almacén-muebles"}>
              <Furniture_Update></Furniture_Update>
            </PrivateRoute>
          }
        />
        <Route
          path={route_register_food}
          element={
            <PrivateRoute admin="Admin" user="Almacén-comida">
              <Foods_Register></Foods_Register>
            </PrivateRoute>
          }
        />
        <Route
          path={route_update_food}
          element={
            <PrivateRoute admin="Admin" user="Almacén-comida">
              <Food_Update></Food_Update>
            </PrivateRoute>
          }
        />
        <Route
          path={route_register_clothing}
          element={
            <PrivateRoute admin={"Admin"} user={"Almacén-ropa"}>
              <Clothing_Register></Clothing_Register>
            </PrivateRoute>
          }
        />
        <Route
          path={route_update_clothing}
          element={
            <PrivateRoute admin={"Admin"} user={"Almacén-ropa"}>
              <Clothing_Update></Clothing_Update>
            </PrivateRoute>
          }
        />
        <Route
          path={route_register_children}
          element={
            <PrivateRoute admin={"Admin"} user={"Administrativo"}>
              <Children_Register></Children_Register>
            </PrivateRoute>
          }
        />
        <Route
          path={route_register_mother}
          element={
            <PrivateRoute admin={"Admin"} user={"Administrativo"}>
              <Mother_Register></Mother_Register>
            </PrivateRoute>
          }
        />
        <Route
          path={route_update_mother}
          element={
            <PrivateRoute admin={"Admin"} user={"Administrativo"}>
              <Mother_Update></Mother_Update>
            </PrivateRoute>
          }
        />
        <Route
          path={route_update_children}
          element={
            <PrivateRoute admin={"Admin"} user={"Administrativo"}>
              <Children_Update></Children_Update>
            </PrivateRoute>
          }
        />
        <Route path={route_denied} element={<Message_denied></Message_denied>} />
      </Routes>
    </BrowserRouter>
  );
}
export default App;
