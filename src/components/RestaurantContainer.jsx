import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";
import {Link} from "react-router";

const RestaurantContainer = ({ restaurantData, isLoading }) => {
  if (isLoading) {
    return (
      <div className="card-container">
        {Array.from({ length: 15 }).map((_, i) => (
          <Shimmer key={i} />
        ))}
      </div>
    );
  }
  if (!isLoading && restaurantData.length === 0) {
    return <div className="noResults">
    <h2 className="">No restaurants found with your search results!</h2>
    </div>;
  }

  return (
    <div className="card-container">
      {restaurantData.map((restaurant) => (
        <Link key={restaurant?.id} to={`/recipes/${restaurant?.id}`}><RestaurantCard  resData={restaurant} /></Link>
      ))}
    </div>
  );
};

export default RestaurantContainer;
