import "./App.css";
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
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Children_Register from "./components/Children/children_register";
import Mother_Register from "./components/Mother/mother_register";
import Children_Update from "./components/Children/children_update";
import Dasboard from "./components/Dashboard/dashboard";


function App() {
  return (
    
    
        <BrowserRouter>
          <Routes>           
       
            
            <Route path="/register" element={<Register></Register>} />
            <Route path="/" element={<Login></Login>} />
            <Route path="/user" element={<User></User>} />
            <Route path="/dasboard" element={ <Dasboard></Dasboard>} />
            <Route path="/mother" element={<Mother></Mother>} />
            <Route path="/clothing" element={<Clothing></Clothing>} />
            <Route path="/foods" element={<Foods></Foods>} />
            <Route path="/children/:id" element={<Children></Children>} />
            <Route path="/furniture" element={<Furniture></Furniture>} />
            <Route path="/hygiene" element={<Hygiene></Hygiene>} />
            <Route path="/Register/hygiene" element={<Hygiene_Register></Hygiene_Register>} />
            <Route path="/Register/Furniture" element={<Furniture_Register></Furniture_Register>} />
            <Route path="/Register/Food" element={<Foods_Register></Foods_Register>} />
            <Route path="/Register/Clothing" element={<Clothing_Register></Clothing_Register>} />
            <Route path="/Register/Children/:id" element={<Children_Register></Children_Register>} />
            <Route path="/Register/Mother" element={<Mother_Register></Mother_Register>} />
            <Route path="/Update/Children/:id" element={<Children_Update></Children_Update>} />
            
          </Routes>
        </BrowserRouter>
     
  );
}
export default App;
