import { useEffect, useState } from "react";
import { PRODUCT_URL } from "./constants";

const useProductDetailsData = (productId) => {
    const [productInfo, setproductInfo] = useState(null);
    useEffect(() => {
      const fetchMenu = async () => {
        const response = await fetch(`${PRODUCT_URL}/${productId}`);
        const data = await response.json();
        setproductInfo(data);
      };
      fetchMenu();
    }, []);
  return (
   productInfo
  )
}

export default useProductDetailsData;