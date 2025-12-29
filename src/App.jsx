import SearchAndFilter from "./components/SearchAndFilter";
import ProductsContainer from "./components/ProductsContainer";
import useProductData from "./utils/useProductData";

const App = () => {
  const {productData, filteredData, isLoading, setFilteredData} = useProductData();
  return (
    <>
      <SearchAndFilter
        productData={productData}
        setFilteredData={setFilteredData}
      />
      <ProductsContainer
        productData={filteredData}
        isLoading={isLoading}
      />
    </>
  );
};

export default App;
