import SearchAndFilter from "./components/SearchAndFilter";
import RestaurantContainer from "./components/RestaurantContainer";
import { useEffect, useState } from "react";
import { API_URL } from "./utils/constants";

const App = () => {
  const [restaurantData, setRestaurantData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch(API_URL);
      const data = await response.json();
      setRestaurantData(data?.recipes);
      setFilteredData(data?.recipes);
      setIsLoading(false);
    }
    fetchData();
  }, []);
  return (
    <>
      <SearchAndFilter
        restaurantData={restaurantData}
        setFilteredData={setFilteredData}
      />
      <RestaurantContainer
        restaurantData={filteredData}
        isLoading={isLoading}
      />
      {/* <Footer /> */}
    </>
  );
};

export default App;
