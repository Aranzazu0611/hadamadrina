import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import User from "./components/User/user";
import Clothing from "./components/Clothing/clothing";
import Furniture from "./components/Furniture/furniture";
import Hygiene from "./components/Hygiene/hygiene";
import Children from "./components/Children/children";
import Foods from "./components/Foods/foods";
import Mother from "./components/Mother/mothers";
import Register from "./components/Register/register";
import Login from "./components/Login/login";
import { BrowserRouter, Routes, Route } from "react-router-dom";


function App() {
  return (
    
        <BrowserRouter>
          <Routes>
            
            <Route path="/register" element={<Register></Register>} />
            <Route path="/" element={<Login></Login>} />
            <Route path="/user" element={<User></User>} />
            <Route path="/mother" element={<Mother></Mother>} />
            <Route path="/clothing" element={<Clothing></Clothing>} />
            <Route path="/foods" element={<Foods></Foods>} />
            <Route path="/children" element={<Children></Children>} />
            <Route path="/furniture" element={<Furniture></Furniture>} />
            <Route path="/hygiene" element={<Hygiene></Hygiene>} />
            
          </Routes>
        </BrowserRouter>
     
  );
}
export default App;
