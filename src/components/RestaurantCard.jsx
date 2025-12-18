const RestaurantCard = ({resData}) => {
   const {image, name, cuisine, difficulty, rating, servings} = resData;
return (
    <div className="card">
       <img src={image}></img>
       <div className="resDetails">
        <div className="recipeName">{name}</div>
        <div className="cuisine">Cuisinie: {cuisine}</div>
        <div className="difficulty">Difficulty:{difficulty}</div>
        <div className="avgRating">Rating: {rating} Stars</div>
        <div className="servings">{servings} Servings</div>
       </div>
    </div>
)
}

export default RestaurantCard;