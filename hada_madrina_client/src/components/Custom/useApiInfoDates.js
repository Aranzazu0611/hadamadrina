import { useEffect, useState } from "react";

const useApiInfoDates = (url) => {
  const [info, setInfo] = useState();  
 

  const fetchApi = () => {
    fetch(url)
      .then((response) => {
        return response.json();
      })
      .then((result) => {         
        const data = Object.values(result[0])      
        setInfo(data[0]);
      });
  };

  useEffect(() => {
    fetchApi();
  },[]);

  return  info ;
};

export default useApiInfoDates;
