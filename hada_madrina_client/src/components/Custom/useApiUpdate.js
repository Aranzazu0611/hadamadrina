import { useState } from "react";
import { useNavigate } from "react-router-dom";

const useApiUpdate = (url, route) => {
  const navigate = useNavigate();
  const [error, setError] = useState();
  const update = async (info) => {
  
    return await fetch(url, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(info),
    }).then((data) => {
    console.log(data)
      if (data.status === 200) {
        navigate(route);
      }
      return data.json()
    }).then((info) => {
      const data = Object.values(info);
        setError(data);
        
    });
    
  };
  return {update, error};
};

export default useApiUpdate;
