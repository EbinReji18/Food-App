import FoodItem from "./FoodItem";

export default function FoodList({ foodData, setFoodId }) {
  return (
    <div className="container-fluid px-3 px-sm-4 my-4">
      <div className="row g-4 justify-content-center">
        {foodData.map((food) => (
          <div key={food.id} className="col-12 col-sm-6 col-md-4 col-lg-3 d-flex">
            <FoodItem food={food} setFoodId={setFoodId} />
          </div>
        ))}
      </div>
    </div>
  );
}
