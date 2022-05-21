import { useNavigate } from "react-router-dom";

const useApiRegister = (url, route) => {
  const navigate = useNavigate()  
    const register = async(credentials) => {
      
        return await fetch(url, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(credentials),
        
        }).then((data) =>{
          if(data.status === 200){           
            navigate(route)
          }
        }
         
        );
      }
     return register;
};

export default useApiRegister;
