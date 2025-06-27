import { useEffect, useState } from "react";
import "../components/FoodDetails.css";
import ItemList from "./ItemList";
export default function FoodDetails({ foodId }) {
  const [food, setFood] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const URL = `https://api.spoonacular.com/recipes/${foodId}/information`;
  const API_KEY = "6cea1231a0554bdaa362d298ab200cda";

  useEffect(() => {
    if (!foodId) return;

    async function fetchFood() {
      setIsLoading(true);
      try {
        const res = await fetch(`${URL}?apiKey=${API_KEY}`);
        const data = await res.json();
        console.log(data);
        setFood(data);
      } catch (error) {
        console.error("Failed to fetch food details:", error);
      } finally {
        setIsLoading(false);
      }
    }

    fetchFood();
  }, [foodId]);

  return (
    <div>
      <div className="recipeCard">
        {isLoading ? (
          <p>Loading...</p>
        ) : (
          <>
            <h1 className="recipeName">{food.title}</h1>
            <img className="recipeImage" src={food.image} alt={food.title} />

            <div className="recipeDetails">
              <span>
                <strong>⏱️ {food.readyInMinutes} Minutes</strong>
              </span>{" "}
              |{" "}
              <span>
                <strong>
                  {food.vegetarian ? "Vegetarian" : "Non-Vegetarian"}
                </strong>
              </span>{" "}
              |{" "}
              <span>
                <strong>₹{food.pricePerServing}</strong>
              </span>
            </div>

            <h2>Ingredients</h2>
            
            <ItemList food={food} isLoading={isLoading} />

            <h2>Instructions</h2>
            <div className="recipeInstructions">
              {food.analyzedInstructions?.[0]?.steps?.length > 0 ? (
                <ol>
                  {food.analyzedInstructions[0].steps.map((step) => (
                    <li key={step.number}>{step.step}</li>
                  ))}
                </ol>
              ) : (
                <p>No instructions available.</p>
              )}
            </div>
          </>
        )}
      </div>
    </div>
  );
}
