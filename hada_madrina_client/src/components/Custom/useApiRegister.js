import { useState } from "react";
import { useNavigate } from "react-router-dom";

const useApiRegister = (url, route) => {
  const [error, setError] = useState();
  const navigate = useNavigate();
  const register = async (credentials) => {
 
    return await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(credentials),
    })
      .then((data) => {     
        console.log(credentials) 
        if (data.status === 200) {
          navigate(route);
        }
        return data.json();
      })
      .then((res) => {
        const info = Object.values(res);
      
        setError(info);
      });
  };
  return { register, error };
};

export default useApiRegister;
