import React from "react";
import ReactDOM from "react-dom/client";

//const h1 = react.createElement("h1", { id: "title" }, "Recipes page built using React");
const root = ReactDOM.createRoot(document.getElementById("root"));
// const cardContainer = React.createElement("div", { className: "card-container" }, );

function Card(props){
    return (
      <div className="card" key={props.id}>
          <img src={props.image} alt={props.name} className="card-image"></img>
          <div className="card-content">
            <h3>{props.name}</h3>
            <p><strong>Ingredients:</strong> {props.ingredients}</p>
            <p><strong>Instructions:</strong>{props.instructions}</p>
          </div>
      </div>
    )
}

fetch("https://dummyjson.com/recipes")
  .then((response) => response.json())
  .then((data) => {
   console.log(data.recipes);
    root.render(
      <div className="card-container">
      {
      data.recipes.map(recipe => {
       return <Card key={recipe.id} name={recipe.name} instructions={recipe.instructions} ingredients={recipe.ingredients} image={recipe.image}/>
      })
      }
      </div>
    );
  });
