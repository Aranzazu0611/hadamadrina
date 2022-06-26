import { useNavigate } from "react-router-dom";
import {
  route_clothing_info,
  route_dashboard,
  route_foods_info,
  route_furniture,
  route_hygiene,
  route_mother_screen,
} from "../../utils/url";

const useApiLogin = (url) => {
  const navigate = useNavigate();
  const loginUser = async (info) => {
    return await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(info),
    }).then((data) => data.json())
    .then((result) => {       
        
        if (result.length > 0) {
          localStorage.setItem("id", result[0].id);
          localStorage.setItem("role", result[0].volunteers_rol);                  
          isRole()          
        }else{
          alert("Credenciales incorrectas")
         
        }
      });
  };

  const isRole = () => {
    const role = localStorage.getItem("role");
    if (role === "Administrativo") {
      return navigate(route_mother_screen);
    }
    if (role === "Admin") {
      return navigate(route_dashboard);
    }
    if (role === "Almacén-ropa") {
      return navigate(route_clothing_info);
    }
    if (role === "Almacén-muebles") {
      return navigate(route_furniture);
    }
    if (role === "Almacén-higiene y utensilios") {
      return navigate(route_hygiene);
    }
    if (role === "Almacén-comida") {
      return navigate(route_foods_info);
    }
  }
  

  return loginUser;
};

export default useApiLogin;
