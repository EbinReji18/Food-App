export default function FoodItem({ food, setFoodId }) {
    return (
      <div
        className="card mb-4 shadow-sm border-0"
        style={{ maxWidth: "300px", minHeight: "100%" }}
      >
        {/* Food Image */}
        <img
          src={food.image}
          alt={food.title}
          className="card-img-top img-fluid"
          style={{ height: "200px", objectFit: "cover", borderRadius: "0.375rem 0.375rem 0 0" }}
        />
  
        {/* Content */}
        <div className="card-body text-center d-flex flex-column justify-content-between">
          <p className="card-title fw-semibold mb-3" style={{ fontSize: "1rem", minHeight: "3rem" }}>
            {food.title}
          </p>
  
          <div className="d-grid">
            <button
              onClick={() => {
                setFoodId(food.id);
              }}
              type="button"
              className="btn btn-orange-outline"
            >
              View Recipe
            </button>
          </div>
        </div>
      </div>
    );
  }
  