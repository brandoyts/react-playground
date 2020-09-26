import { useState, useEffect } from "react";
import axios from "axios";

const useFetchData = (pathName) => {
  const [data, setData] = useState([]);

  const fetchData = async (pathName) => {
    const url = `http://jsonplaceholder.typicode.com${pathName}`;
    const { data } = await axios.get(url);
    setData(data);
  };

  useEffect(() => {
    fetchData(pathName);
  }, []);

  return [data];
};

export default useFetchData;
