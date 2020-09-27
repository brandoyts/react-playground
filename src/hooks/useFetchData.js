import { useState, useEffect } from "react";
import axios from "axios";

const useFetchData = (pathName) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const source = axios.CancelToken.source();

    const fetchData = (pathName) => {
      const url = `http://jsonplaceholder.typicode.com${pathName}`;
      axios
        .get(url, { cancelToken: source.token })
        .then((response) => {
          setData(response.data);
        })
        .catch((err) => {
          console.log("Catched error: " + err.message);
        });
    };

    fetchData(pathName);

    return () => {
      source.cancel("cancel request");
    };
  }, [pathName]);

  return data;
};

export default useFetchData;
