import { useEffect, useState } from "react";
import ItemList from "./ItemList";
import "./FoodDetails.css";

export default function FoodDetails({ foodId, setFoodId }) {
  const [food, setFood] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const URL = `https://api.spoonacular.com/recipes/${foodId}/information`;
  const API_KEY = import.meta.env.VITE_API_KEY;

  useEffect(() => {
    if (!foodId) return;

    // Lock scroll when modal is open
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [foodId]);

  useEffect(() => {
    if (!foodId) return;

    async function fetchFood() {
      setIsLoading(true);
      try {
        const res = await fetch(`${URL}?apiKey=${API_KEY}`);
        const data = await res.json();
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
    <div className="modal-backdrop" onClick={() => setFoodId(null)}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        {isLoading ? (
          <p className="text-center">Loading...</p>
        ) : (
          <>
            <h1 className="fs-4 fw-bold mb-3 text-center">{food.title}</h1>

            <img
              src={food.image}
              alt={food.title}
              className="img-fluid rounded mb-3"
            />

            <div className="d-flex justify-content-between align-items-center text-muted mb-4 flex-wrap gap-2">
              <span><strong>⏱️ {food.readyInMinutes} Min</strong></span>
              <span><strong>{food.vegetarian ? "Vegetarian" : "Non-Vegetarian"}</strong></span>
              <span><strong>₹{food.pricePerServing}</strong></span>
            </div>

            <h2 className="fs-5 mb-2">Ingredients</h2>
            <ItemList food={food} isLoading={isLoading} />

            <h2 className="fs-5 mt-4">Instructions</h2>
            <div className="instructions-box">
              {food.analyzedInstructions?.[0]?.steps?.length > 0 ? (
                <ol className="ps-3">
                  {food.analyzedInstructions[0].steps.map((step) => (
                    <li key={step.number} className="mb-2">{step.step}</li>
                  ))}
                </ol>
              ) : (
                <p>No instructions available.</p>
              )}
            </div>

            <div className="text-center mt-4">
              <button
                className="btn btn-orange-outline px-4"
                onClick={() => setFoodId(null)}
              >
                ← Close
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
