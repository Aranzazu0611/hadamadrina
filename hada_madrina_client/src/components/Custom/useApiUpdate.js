import { useNavigate } from "react-router-dom";

const useApiUpdate = (url, route) => {
  const navigate = useNavigate()  

    const update = async(info) => {
      
        return await fetch(url, {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(info),
         
        
        }).then((data) =>{
          if(data.status === 200){
            navigate(route)
          }
          
        }
        );
      }
     return update;
};

export default useApiUpdate;