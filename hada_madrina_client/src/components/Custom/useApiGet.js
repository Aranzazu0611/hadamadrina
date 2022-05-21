import { useEffect, useState } from "react";

const useApiGet = (url) => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState(null);
  const [error, setError] = useState(false);

 

  const fetchApi = () => {
    fetch(url)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setLoading(false);
        setData(data);
        data.length > 0 ? setError(false) : setError(true);
      });
  };

  useEffect(() => {
    fetchApi();
  },[]);

  return { loading, data, setData, error };
};

export default useApiGet;
