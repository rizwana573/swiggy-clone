import { useState, useEffect } from "react";

const SearchAndFilter = ({ restaurantData, setFilteredData }) => {
  const [query, setQuery] = useState("");
  const [isTopRated, setIsTopRated] = useState(false);

  useEffect(() => {
    let filtered = restaurantData;
    if (isTopRated) {
      filtered = filtered.filter(
        (restaurant) => restaurant.rating > 4.4
      );
    }
    if (query) {
      filtered = filtered.filter((restaurant) => {
        const nameMatch = restaurant.name?.toLowerCase().includes(query);

        const cuisineMatch = restaurant.cuisine?.toLowerCase().includes(query);

        return nameMatch || cuisineMatch;
      });
    }
    setFilteredData(filtered);
  }, [query, isTopRated, restaurantData]);

  const searchHandler = e => {setQuery(e.target.value.toLowerCase())}

  return (
    <div className="searchContainer">
      <button id="topRes" onClick={() => setIsTopRated((prev) => !prev)}>
        {isTopRated? "All Restraunts": "Top rated"}
      </button>
      <input
        type="search"
        id="search"
        onChange={searchHandler}
        value={query}
      ></input>
    </div>
  );
};

export default SearchAndFilter;
