import { useEffect, useState } from "react";
import ItemList from "./ItemList"

export default function FoodDetails({ foodId, setFoodId }) {
  const [food, setFood] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const URL = `https://api.spoonacular.com/recipes/${foodId}/information`;
  const API_KEY = import.meta.env.VITE_API_KEY;

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
    <div className="container my-4">
      <div
        className="bg-white p-4 rounded shadow"
        style={{ maxWidth: "600px", margin: "0 auto" }}
      >
        {isLoading ? (
          <p className="text-center">Loading...</p>
        ) : (
          <>
            <h1 className="fs-3 fw-bold mb-3 text-center">{food.title}</h1>

            <img
              src={food.image}
              alt={food.title}
              className="img-fluid rounded mb-3"
            />

            <div className="d-flex justify-content-between align-items-center text-muted mb-4">
              <span>
                <strong>⏱️ {food.readyInMinutes} Minutes</strong>
              </span>
              <span>
                <strong>{food.vegetarian ? "Vegetarian" : "Non-Vegetarian"}</strong>
              </span>
              <span>
                <strong>₹{food.pricePerServing}</strong>
              </span>
            </div>

            <h2 className="fs-4 mb-3">Ingredients</h2>
            <ItemList food={food} isLoading={isLoading} />

            <h2 className="fs-4 mt-4">Instructions</h2>
            <div
              className="p-3 rounded"
              style={{
                backgroundColor: "#fff5f0",
                color: "#4b1c1c",
                fontSize: "16px",
                lineHeight: "1.6",
                boxShadow: "0 2px 8px rgba(0, 0, 0, 0.1)",
                marginTop: "20px",
              }}
            >
              {food.analyzedInstructions?.[0]?.steps?.length > 0 ? (
                <ol className="ps-3">
                  {food.analyzedInstructions[0].steps.map((step) => (
                    <li key={step.number} className="mb-2">
                      {step.step}
                    </li>
                  ))}
                </ol>
              ) : (
                <p>No instructions available.</p>
              )}
            </div>

            {/*  Back to Search Button at the Bottom */}
            <div className="text-center mt-4">
              <button
                className="btn btn-orange-outline px-4"
                onClick={() => {
                  setFoodId(null);
                  window.scrollTo({ top: 0, behavior: "smooth" });
                }}
              >
                ← Back to Search
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
