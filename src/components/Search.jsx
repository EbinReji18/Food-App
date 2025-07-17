import { useEffect, useState } from "react";

const URL = "https://api.spoonacular.com/recipes/complexSearch";
const API_KEY = import.meta.env.VITE_API_KEY;

export default function Search({ foodData, setFoodData, setFoodId }) {
  const [query, setQuery] = useState("Pizza");
  const [filter, setFilter] = useState("all");

  useEffect(() => {
    async function fetchFood() {
      try {
        const res = await fetch(
          `${URL}?query=${query}&number=30&addRecipeInformation=true&apiKey=${API_KEY}`
        );
        const data = await res.json();

        let results = data.results;

        if (filter === "veg") {
          results = results.filter((item) => item.vegetarian === true);
        } else if (filter === "nonveg") {
          results = results.filter((item) => item.vegetarian === false);
        }

        setFoodData(results);
        setFoodId(null);
      } catch (error) {
        console.error("Error fetching food data:", error);
      }
    }

    fetchFood();
  }, [query, filter]);

  return (
    <div className="container my-4">
      <div
        className="p-4 rounded shadow bg-light mx-auto"
        style={{
          width: "96%",
          minHeight: "160px",
        }}
      >
        <div
          className="d-flex justify-content-center align-items-center flex-wrap gap-3"
          style={{
            rowGap: "1rem",
          }}
        >
          {/* Filter Dropdown */}
          <select
            className="form-select border-warning"
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
            style={{
              width: "100%",
              maxWidth: "250px",
              minWidth: "180px",
              minHeight: "44px",
              maxHeight: "48px",
              fontSize: "1rem",
              padding: "8px 14px",
            }}
          >
            <option value="all">All</option>
            <option value="veg">Vegetarian</option>
            <option value="nonveg">Non-Vegetarian</option>
          </select>

          {/* Search Input */}
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="form-control border-warning"
            placeholder="Search for a recipe..."
            style={{
              width: "100%",
              maxWidth: "250px",
              minWidth: "180px",
              minHeight: "44px",
              maxHeight: "48px",
              fontSize: "1rem",
              padding: "8px 14px",
            }}
          />
        </div>
      </div>
    </div>
  );
}
