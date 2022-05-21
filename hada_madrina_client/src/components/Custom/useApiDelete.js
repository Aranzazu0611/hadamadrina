
import { useNavigate } from "react-router-dom";

const useApiDelete = () => {
  const navigate = useNavigate();
  
  function deleteInfo(url, id) {
    fetch(url + id, {
      method: "DELETE",
    }).then((data) => {

      if (data.status === 200) {
        navigate(0);
      }

    });
  }

  return deleteInfo;
};

export default useApiDelete;
