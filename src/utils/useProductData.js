import { useEffect, useState } from "react";
import { API_URL } from "./constants";

const useProductData = () => {
  const [productData, setproductData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch(API_URL);
      const data = await response.json();
      setproductData(data);
      setFilteredData(data);
      setIsLoading(false);
    }
    fetchData();
  }, []);
  return {
    productData,
    filteredData,
    isLoading,
    setFilteredData
  };
};

export default useProductData;
