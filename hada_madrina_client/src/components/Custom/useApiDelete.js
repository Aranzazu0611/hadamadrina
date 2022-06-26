
import { useNavigate } from "react-router-dom";

const useApiDelete = () => {
  const navigate = useNavigate();
  
  function deleteInfo(url) {
    console.log(url)
    fetch(url, {
      method: "DELETE",
    }).then((data) => {       
      if (data.status === 200) {
        navigate(0);
      }
     return data.json()
    })
  }

  return deleteInfo;
};

export default useApiDelete;
