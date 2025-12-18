import { useEffect, useState } from "react";
import { RECIPE_URL } from "../utils/constants";
import Shimmer from "./Shimmer";
import { useParams } from "react-router";

const RestaurantMenu = () => {
  const [recipeInfo, setRecipeInfo] = useState(null);
  const { recipeId } = useParams();

  useEffect(() => {
    const fetchMenu = async () => {
      const response = await fetch(`${RECIPE_URL}/${recipeId}`);
      const data = await response.json();
      setRecipeInfo(data);
    };
    fetchMenu();
  }, []);
  if (recipeInfo === null) {
    return (
      <div className="card-container">
        {Array.from({ length: 15 }).map((_, i) => (
          <Shimmer key={i} />
        ))}
      </div>
    );
  }

  const {
    name,
    cuisine,
    ingredients,
    image,
    instructions,
    servings,
    rating,
    reviewCount,
    difficulty,
    cookTimeMinutes,
    caloriesPerServing,
    prepTimeMinutes,
  } = recipeInfo;

  return (
    <>
      <div className="recipeDetailPage">
        <h1 className="recipeName">{name}</h1>
        <img className="recipeImg" src={image} />
        <p className="cuisine">
          <b>Cuisine:</b> {cuisine}
        </p>
        <p className="servings">
          <b>Serves:</b> {servings}
        </p>
        <p>
          <b>Rating: </b>
          {rating} - {reviewCount} reviews
        </p>
        <p>
          <b>Difficulty:</b> {difficulty}
        </p>
        <p>
          <b>Cooking Time:</b> {cookTimeMinutes}
        </p>
        <p>
          <b>Prepping Time:</b> {prepTimeMinutes}
        </p>
        <p>
          <b>Total Time:</b> {prepTimeMinutes + cookTimeMinutes}
        </p>
         <p>
          <b>caloriesPerServing:</b> {caloriesPerServing}
        </p>
        <p className="ingredients">
          <b>Ingredients:</b> {ingredients.join(", ")}
        </p>
        <p className="instructions">
          <b>Instructions:</b> {instructions.join(", ")}
        </p>
      </div>
    </>
  );
};

export default RestaurantMenu;
