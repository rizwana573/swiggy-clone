import { useState, useEffect } from "react";

const SearchAndFilter = ({ productData, setFilteredData }) => {
  const [query, setQuery] = useState("");
  const [isTopRated, setIsTopRated] = useState(false);

  useEffect(() => {
    let filtered = productData;
    if (isTopRated) {
      filtered = filtered.filter(
        (product) => product.rating.rate > 4.4
      );
    }
    if (query) {
      filtered = filtered.filter((product) => {
        const nameMatch = product.name?.toLowerCase().includes(query);

        const categoryMatch = product.category?.toLowerCase().includes(query);

        return nameMatch || categoryMatch;
      });
    }
    setFilteredData(filtered);
  }, [query, isTopRated, productData]);

  const searchHandler = e => {setQuery(e.target.value.toLowerCase())}

  return (
    <div className="searchContainer">
      <button id="topRes" data-testid="topRatedBtn" onClick={() => setIsTopRated((prev) => !prev)}>
        {isTopRated? "All products": "Top rated"}
      </button>
      <input
        type="search"
        data-testid="searchBar"
        id="search"
        onChange={searchHandler}
        value={query}
      ></input>
    </div>
  );
};

export default SearchAndFilter;
