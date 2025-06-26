import { useEffect, useState } from "react";

export default function FoodDetails({ foodId }) {
  const [food, setFood] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const URL = `https://api.spoonacular.com/recipes/${foodId}/information`;
  const API_KEY = "6cea1231a0554bdaa362d298ab200cda";

  useEffect(() => {
    if (!foodId) return;

    async function fetchFood() {
      setIsLoading(true);
      const res = await fetch(`${URL}?apiKey=${API_KEY}`);
      const data = await res.json();
      console.log(data);
      setFood(data);
      setIsLoading(false);
    }
    fetchFood();
  }, [foodId]);

  return (
    <div>
      <div>
        <h1>{food.title}</h1>
        <img src={food.image} alt={food.title} />
        <span>
          <strong>⏱️ {food.readyInMinutes} Minutes</strong>
        </span>{" "}
        |{" "}
        <span>{food.vegetarian ? "Vegetarian" : "Non-Vegetarian"}</span> |{" "}
        <span>₹{food.pricePerServing}</span>
      </div>

      <div>
        <h2>Instructions</h2>
        {isLoading ? (
          <p>Loading.....</p>
        ) : food.analyzedInstructions?.[0]?.steps?.length > 0 ? (
          <ul>
            {food.analyzedInstructions[0].steps.map((step) => (
              <li key={step.number}>{step.step}</li>
            ))}
          </ul>
        ) : (
          <p>No instructions available.</p>
        )}
      </div>
    </div>
  );
}
